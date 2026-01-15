/*
  # Remove logo_url column from events table

  1. Changes
    - Drop `logo_url` column from `events` table
    
  2. Notes
    - This column was added by mistake - event logos should be retrieved from the event_sponsors table instead
*/

DO $$
BEGIN
  IF EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'events' AND column_name = 'logo_url'
  ) THEN
    ALTER TABLE events DROP COLUMN logo_url;
  END IF;
END $$;
