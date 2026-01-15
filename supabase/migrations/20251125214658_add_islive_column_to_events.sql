/*
  # Add islive Column to Events Table

  1. Changes
    - Add `islive` boolean column to `events` table
    - Set default value to `false` (events are not live by default)
    - Set existing events to `false`
  
  2. Purpose
    - Track whether an event is currently live/active
    - Allow filtering of live vs non-live events
    - Enable admin control over event visibility
*/

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'events' AND column_name = 'islive'
  ) THEN
    ALTER TABLE events ADD COLUMN islive boolean DEFAULT false NOT NULL;
  END IF;
END $$;

-- Set all existing events to not live by default
UPDATE events SET islive = false WHERE islive IS NULL;
