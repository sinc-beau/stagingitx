# ITx Collective Database Setup Guide

## Overview

The Supabase database has been configured with a complete events management system including role-based access control. This document explains how to use and manage the system.

## Database Schema

### Tables

1. **events** - Main events table
2. **event_speakers** - Speakers for each event
3. **event_sponsors** - Sponsors for each event
4. **agenda_items** - Agenda items for each event
5. **user_roles** - User roles and permissions

## User Roles System

### Role Types

- **admin** - Full access to all events across all brands
- **editor** - Can create and manage events for assigned brand(s)
- **viewer** - Read-only access to all events

### Brand Access

Users can be assigned to specific brands:
- ITx
- Sentinel
- CDAIO
- Marketverse
- NULL (access to all brands - admin only)

## Security (Row Level Security)

### Public Access (Unauthenticated Users)
- ✅ Can read all published events
- ✅ Can read speakers, sponsors, and agenda items
- ❌ Cannot create, update, or delete any data

### Authenticated Users

#### Admins
- ✅ Full CRUD access to all events
- ✅ Can manage user roles
- ✅ Access all brands

#### Editors
- ✅ Can create events
- ✅ Can update/delete events for their brand(s)
- ✅ Can manage speakers, sponsors, agenda for their events
- ❌ Cannot access other brands' events

#### Viewers
- ✅ Can read all events
- ❌ Cannot modify any data

## Managing User Roles

### Create an Admin User

```sql
-- First, get the user_id from auth.users after they sign up
INSERT INTO user_roles (user_id, role, brand)
VALUES ('USER_UUID_HERE', 'admin', NULL);
```

### Create a Brand Editor

```sql
-- Create an editor for ITx brand
INSERT INTO user_roles (user_id, role, brand)
VALUES ('USER_UUID_HERE', 'editor', 'ITx');
```

### Create a Viewer

```sql
INSERT INTO user_roles (user_id, role, brand)
VALUES ('USER_UUID_HERE', 'viewer', NULL);
```

### Multi-Brand Access

```sql
-- Give a user editor access to multiple brands
INSERT INTO user_roles (user_id, role, brand)
VALUES
  ('USER_UUID_HERE', 'editor', 'ITx'),
  ('USER_UUID_HERE', 'editor', 'Sentinel');
```

## Database Sync Setup

The database is ready to receive data from external sources. Here's what you need to know:

### Sync Requirements

1. **Required Fields for Events:**
   - title (text, required)
   - slug (text, required, unique)
   - date (timestamptz, required)

2. **Optional Fields:**
   - All other fields have defaults and can be empty strings

3. **Foreign Keys:**
   - event_speakers.event_id → events.id (CASCADE DELETE)
   - event_sponsors.event_id → events.id (CASCADE DELETE)
   - agenda_items.event_id → events.id (CASCADE DELETE)

### Sync Process

When syncing from an external database:

1. **Insert/Update Events First**
   ```sql
   INSERT INTO events (id, title, slug, date, brand, ...)
   VALUES (...)
   ON CONFLICT (slug) DO UPDATE SET ...;
   ```

2. **Then Sync Related Data**
   - Speakers
   - Sponsors
   - Agenda Items

3. **Use Service Role Key**
   - For external sync, use the NEXT_SERVICE_ROLE_KEY
   - This bypasses RLS policies for admin operations

### API Access for Sync

```typescript
// External sync should use service role client
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY! // Use service role for sync
)
```

## Event Types and Brands

### Valid Event Types
- Dinner
- Forum
- Learn & Go
- VEB
- Virtual Roundtable

### Valid Brands
- ITx
- Sentinel
- CDAIO
- Marketverse

## Helper Functions

The database includes helper functions for RLS:

- `is_admin()` - Returns true if current user is admin
- `is_editor()` - Returns true if current user is admin or editor
- `has_brand_access(brand_name)` - Returns true if user has access to specified brand

## Testing the Setup

### Test Public Access (No Auth)

```sql
-- This should work
SELECT * FROM events WHERE brand = 'ITx';
```

### Test as Authenticated User

```sql
-- After logging in, check your roles
SELECT * FROM user_roles WHERE user_id = auth.uid();

-- Try creating an event (requires editor or admin role)
INSERT INTO events (title, slug, date, brand)
VALUES ('Test Event', 'test-event', now(), 'ITx');
```

## Frontend Integration

The frontend is already configured to:
- Display upcoming ITx events on the home page
- Show detailed event pages with all related data
- Handle public (unauthenticated) access properly

## Indexes

The following indexes are created for optimal performance:
- events: date, brand, city, slug
- event_speakers: event_id
- event_sponsors: event_id
- agenda_items: event_id
- user_roles: user_id

## Auto-Update Trigger

The `events` table has an automatic trigger that updates the `updated_at` field whenever an event is modified.

## Need Help?

- Check Supabase dashboard for real-time data
- Review RLS policies in the Database → Policies section
- Use the SQL Editor for manual queries
- Check logs in the Logs section for debugging
