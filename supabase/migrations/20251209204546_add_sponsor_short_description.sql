/*
  # Add sponsor short description column

  1. Changes
    - Add `sponsor_short_description` column to `event_sponsors` table
      - Type: text (nullable)
      - Purpose: Store a brief description for sponsors to display below their logo in the hero section
      - Optional field - will only display when populated

  2. Notes
    - Column is nullable to support existing sponsors without descriptions
    - No default value needed as the UI will conditionally render descriptions
*/

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'event_sponsors' AND column_name = 'sponsor_short_description'
  ) THEN
    ALTER TABLE event_sponsors ADD COLUMN sponsor_short_description text;
  END IF;
END $$;