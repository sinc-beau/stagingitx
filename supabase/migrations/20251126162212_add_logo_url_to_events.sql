/*
  # Add logo_url column to events table

  1. Changes
    - Add `logo_url` column to `events` table to store event logo image paths
    - Column is optional (nullable) to support events without logos
    
  2. Notes
    - This allows each event to have a custom logo displayed in event cards
    - Logo URLs should be paths like '/eventlogo.png' or full URLs
*/

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'events' AND column_name = 'logo_url'
  ) THEN
    ALTER TABLE events ADD COLUMN logo_url text;
  END IF;
END $$;
