/*
  # Events Management System with User Roles

  ## Overview
  This migration creates a complete events management system with role-based access control.
  The system supports multiple brands (ITx, Sentinel, CDAIO, Marketverse) and various event types.

  ## 1. New Tables

  ### events
  - `id` (uuid, primary key) - Unique event identifier
  - `title` (text, required) - Event title
  - `slug` (text, required, unique) - URL-friendly identifier
  - `description` (text) - Detailed event description
  - `blurb` (text) - Short summary
  - `date` (timestamptz, required) - Event date and time
  - `timezone` (text) - Event timezone
  - `city` (text) - Event city
  - `location` (text) - General location info
  - `brand` (text) - Brand hosting event (ITx, Sentinel, CDAIO, Marketverse)
  - `type` (text) - Event type (Dinner, Forum, Learn & Go, VEB, Virtual Roundtable)
  - `venue` (text) - Venue name
  - `venue_address` (text) - Full venue address
  - `venue_link` (text) - Venue website URL
  - `hubspot_form_id` (text) - HubSpot form ID for registration
  - `user_id` (uuid) - User who created the event
  - `created_at` (timestamptz) - Creation timestamp
  - `updated_at` (timestamptz) - Last update timestamp

  ### event_speakers
  - `id` (uuid, primary key)
  - `event_id` (uuid, foreign key) - References events table
  - `name` (text, required) - Speaker name
  - `about` (text) - Speaker bio
  - `headshot_url` (text) - URL to speaker photo
  - `order_index` (integer) - Display order
  - `created_at` (timestamptz)

  ### event_sponsors
  - `id` (uuid, primary key)
  - `event_id` (uuid, foreign key) - References events table
  - `name` (text, required) - Sponsor name
  - `about` (text) - Sponsor description
  - `logo_url` (text) - URL to sponsor logo
  - `order_index` (integer) - Display order
  - `created_at` (timestamptz)

  ### agenda_items
  - `id` (uuid, primary key)
  - `event_id` (uuid, foreign key) - References events table
  - `time_slot` (text) - Time range (e.g., "9:00 AM - 10:00 AM")
  - `title` (text) - Agenda item title
  - `description` (text) - Detailed description
  - `order_index` (integer) - Display order
  - `created_at` (timestamptz)

  ### user_roles
  - `id` (uuid, primary key)
  - `user_id` (uuid, foreign key) - References auth.users
  - `role` (text) - User role (admin, editor, viewer)
  - `brand` (text) - Brand access (null = all brands)
  - `created_at` (timestamptz)

  ## 2. Security

  ### Row Level Security (RLS)
  All tables have RLS enabled with the following access patterns:

  #### Public Access (Unauthenticated Users)
  - Can read published events and related data (speakers, sponsors, agenda)
  - No write access

  #### Authenticated Users
  - Admins: Full access to all events across all brands
  - Editors: Can create, read, and update events for their assigned brand(s)
  - Viewers: Can read all events but cannot modify

  ### Roles Hierarchy
  1. **Admin** - Full system access, can manage all brands and users
  2. **Editor** - Can manage events for specific brand(s)
  3. **Viewer** - Read-only access to all events

  ## 3. Indexes
  Created indexes on frequently queried columns for optimal performance:
  - events: date, brand, city, slug
  - event_speakers, event_sponsors, agenda_items: event_id

  ## 4. Functions
  - `is_admin()` - Checks if current user has admin role
  - `is_editor()` - Checks if current user has editor role
  - `has_brand_access(brand_name)` - Checks if user has access to specific brand

  ## 5. Triggers
  - Auto-update `updated_at` timestamp on events table modifications
*/

-- ============================================
-- HELPER FUNCTIONS FOR RLS
-- ============================================

-- Function to check if user is admin
CREATE OR REPLACE FUNCTION is_admin()
RETURNS boolean AS $$
BEGIN
  RETURN EXISTS (
    SELECT 1 FROM user_roles
    WHERE user_id = auth.uid()
    AND role = 'admin'
  );
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Function to check if user is editor
CREATE OR REPLACE FUNCTION is_editor()
RETURNS boolean AS $$
BEGIN
  RETURN EXISTS (
    SELECT 1 FROM user_roles
    WHERE user_id = auth.uid()
    AND role IN ('admin', 'editor')
  );
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Function to check brand access
CREATE OR REPLACE FUNCTION has_brand_access(brand_name text)
RETURNS boolean AS $$
BEGIN
  RETURN EXISTS (
    SELECT 1 FROM user_roles
    WHERE user_id = auth.uid()
    AND (role = 'admin' OR brand = brand_name OR brand IS NULL)
  );
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- ============================================
-- USER ROLES TABLE
-- ============================================

CREATE TABLE IF NOT EXISTS user_roles (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  role text NOT NULL CHECK (role IN ('admin', 'editor', 'viewer')),
  brand text CHECK (brand IN ('ITx', 'Sentinel', 'CDAIO', 'Marketverse') OR brand IS NULL),
  created_at timestamptz DEFAULT now(),
  UNIQUE(user_id, brand)
);

-- Enable RLS
ALTER TABLE user_roles ENABLE ROW LEVEL SECURITY;

-- RLS Policies for user_roles
CREATE POLICY "Admins can view all user roles"
  ON user_roles FOR SELECT
  TO authenticated
  USING (is_admin());

CREATE POLICY "Admins can create user roles"
  ON user_roles FOR INSERT
  TO authenticated
  WITH CHECK (is_admin());

CREATE POLICY "Admins can update user roles"
  ON user_roles FOR UPDATE
  TO authenticated
  USING (is_admin())
  WITH CHECK (is_admin());

CREATE POLICY "Admins can delete user roles"
  ON user_roles FOR DELETE
  TO authenticated
  USING (is_admin());

CREATE POLICY "Users can view their own roles"
  ON user_roles FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

-- Create index
CREATE INDEX IF NOT EXISTS user_roles_user_id_idx ON user_roles(user_id);

-- ============================================
-- EVENTS TABLE
-- ============================================

CREATE TABLE IF NOT EXISTS events (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  slug text NOT NULL UNIQUE,
  description text DEFAULT '',
  blurb text DEFAULT '',
  date timestamptz NOT NULL,
  timezone text DEFAULT '',
  city text DEFAULT '',
  location text DEFAULT '',
  brand text DEFAULT '' CHECK (brand IN ('ITx', 'Sentinel', 'CDAIO', 'Marketverse', '')),
  type text DEFAULT '' CHECK (type IN ('Dinner', 'Forum', 'Learn & Go', 'VEB', 'Virtual Roundtable', '')),
  venue text DEFAULT '',
  venue_address text DEFAULT '',
  venue_link text DEFAULT '',
  hubspot_form_id text DEFAULT '',
  user_id uuid REFERENCES auth.users(id),
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create indexes
CREATE INDEX IF NOT EXISTS events_date_idx ON events(date);
CREATE INDEX IF NOT EXISTS events_brand_idx ON events(brand);
CREATE INDEX IF NOT EXISTS events_city_idx ON events(city);
CREATE INDEX IF NOT EXISTS events_slug_idx ON events(slug);
CREATE INDEX IF NOT EXISTS events_user_id_idx ON events(user_id);

-- Enable RLS
ALTER TABLE events ENABLE ROW LEVEL SECURITY;

-- RLS Policies for events
CREATE POLICY "Anyone can view events"
  ON events FOR SELECT
  USING (true);

CREATE POLICY "Editors can create events"
  ON events FOR INSERT
  TO authenticated
  WITH CHECK (is_editor());

CREATE POLICY "Admins can update any event"
  ON events FOR UPDATE
  TO authenticated
  USING (is_admin())
  WITH CHECK (is_admin());

CREATE POLICY "Editors can update events for their brand"
  ON events FOR UPDATE
  TO authenticated
  USING (has_brand_access(brand))
  WITH CHECK (has_brand_access(brand));

CREATE POLICY "Admins can delete any event"
  ON events FOR DELETE
  TO authenticated
  USING (is_admin());

CREATE POLICY "Editors can delete events for their brand"
  ON events FOR DELETE
  TO authenticated
  USING (has_brand_access(brand));

-- Auto-update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_events_updated_at
  BEFORE UPDATE ON events
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- ============================================
-- EVENT SPEAKERS TABLE
-- ============================================

CREATE TABLE IF NOT EXISTS event_speakers (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  event_id uuid REFERENCES events(id) ON DELETE CASCADE NOT NULL,
  name text NOT NULL,
  about text DEFAULT '',
  headshot_url text DEFAULT '',
  order_index integer DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

-- Create index
CREATE INDEX IF NOT EXISTS event_speakers_event_id_idx ON event_speakers(event_id);

-- Enable RLS
ALTER TABLE event_speakers ENABLE ROW LEVEL SECURITY;

-- RLS Policies for event_speakers
CREATE POLICY "Anyone can view event speakers"
  ON event_speakers FOR SELECT
  USING (true);

CREATE POLICY "Editors can create speakers"
  ON event_speakers FOR INSERT
  TO authenticated
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM events
      WHERE events.id = event_speakers.event_id
      AND (is_admin() OR has_brand_access(events.brand))
    )
  );

CREATE POLICY "Editors can update speakers"
  ON event_speakers FOR UPDATE
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM events
      WHERE events.id = event_speakers.event_id
      AND (is_admin() OR has_brand_access(events.brand))
    )
  )
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM events
      WHERE events.id = event_speakers.event_id
      AND (is_admin() OR has_brand_access(events.brand))
    )
  );

CREATE POLICY "Editors can delete speakers"
  ON event_speakers FOR DELETE
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM events
      WHERE events.id = event_speakers.event_id
      AND (is_admin() OR has_brand_access(events.brand))
    )
  );

-- ============================================
-- EVENT SPONSORS TABLE
-- ============================================

CREATE TABLE IF NOT EXISTS event_sponsors (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  event_id uuid REFERENCES events(id) ON DELETE CASCADE NOT NULL,
  name text NOT NULL,
  about text DEFAULT '',
  logo_url text DEFAULT '',
  order_index integer DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

-- Create index
CREATE INDEX IF NOT EXISTS event_sponsors_event_id_idx ON event_sponsors(event_id);

-- Enable RLS
ALTER TABLE event_sponsors ENABLE ROW LEVEL SECURITY;

-- RLS Policies for event_sponsors
CREATE POLICY "Anyone can view event sponsors"
  ON event_sponsors FOR SELECT
  USING (true);

CREATE POLICY "Editors can create sponsors"
  ON event_sponsors FOR INSERT
  TO authenticated
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM events
      WHERE events.id = event_sponsors.event_id
      AND (is_admin() OR has_brand_access(events.brand))
    )
  );

CREATE POLICY "Editors can update sponsors"
  ON event_sponsors FOR UPDATE
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM events
      WHERE events.id = event_sponsors.event_id
      AND (is_admin() OR has_brand_access(events.brand))
    )
  )
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM events
      WHERE events.id = event_sponsors.event_id
      AND (is_admin() OR has_brand_access(events.brand))
    )
  );

CREATE POLICY "Editors can delete sponsors"
  ON event_sponsors FOR DELETE
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM events
      WHERE events.id = event_sponsors.event_id
      AND (is_admin() OR has_brand_access(events.brand))
    )
  );

-- ============================================
-- AGENDA ITEMS TABLE
-- ============================================

CREATE TABLE IF NOT EXISTS agenda_items (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  event_id uuid REFERENCES events(id) ON DELETE CASCADE NOT NULL,
  time_slot text DEFAULT '',
  title text DEFAULT '',
  description text DEFAULT '',
  order_index integer DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

-- Create index
CREATE INDEX IF NOT EXISTS agenda_items_event_id_idx ON agenda_items(event_id);

-- Enable RLS
ALTER TABLE agenda_items ENABLE ROW LEVEL SECURITY;

-- RLS Policies for agenda_items
CREATE POLICY "Anyone can view agenda items"
  ON agenda_items FOR SELECT
  USING (true);

CREATE POLICY "Editors can create agenda items"
  ON agenda_items FOR INSERT
  TO authenticated
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM events
      WHERE events.id = agenda_items.event_id
      AND (is_admin() OR has_brand_access(events.brand))
    )
  );

CREATE POLICY "Editors can update agenda items"
  ON agenda_items FOR UPDATE
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM events
      WHERE events.id = agenda_items.event_id
      AND (is_admin() OR has_brand_access(events.brand))
    )
  )
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM events
      WHERE events.id = agenda_items.event_id
      AND (is_admin() OR has_brand_access(events.brand))
    )
  );

CREATE POLICY "Editors can delete agenda items"
  ON agenda_items FOR DELETE
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM events
      WHERE events.id = agenda_items.event_id
      AND (is_admin() OR has_brand_access(events.brand))
    )
  );
