/*
  # Add asset_link Column to event_sponsors

  ## Overview
  This migration adds an asset_link column to the event_sponsors table to store links to sponsor-related assets, materials, or resources.

  ## Changes Made
  
  ### Modified Tables
  
  #### event_sponsors
  - Added `asset_link` (text, default '') - URL to sponsor assets, resources, or promotional materials
  
  ## Notes
  - Uses IF NOT EXISTS check to ensure safe execution if column already exists
  - Follows existing pattern of URL fields in the table (logo_url)
  - Default empty string maintains consistency with other optional text fields
*/

-- Add asset_link column to event_sponsors table
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'event_sponsors' AND column_name = 'asset_link'
  ) THEN
    ALTER TABLE event_sponsors ADD COLUMN asset_link text DEFAULT '';
  END IF;
END $$;