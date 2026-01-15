# Creating Event Pages Using the Template

The event template page is now fully dynamic and reads all data from the Supabase database.

## How to Create a New Event Page

1. **Add Event Data to Database**
   - Go to your Supabase dashboard
   - Navigate to the `events` table
   - Insert a new row with your event details
   - **Important**: Set a unique `slug` value (e.g., "boston-tech-summit-2026")

2. **Access Your Event Page**
   - Use the URL format: `/event-template?id=your-event-slug`
   - Example: `/event-template?id=boston-tech-summit-2026`

## Required Fields in the `events` Table

- `title` - Event name (e.g., "Boston Tech Summit 2026")
- `slug` - URL identifier (e.g., "boston-tech-summit-2026") **Must be unique**
- `blurb` - Short description for the hero section
- `date` - Event date and time (timestamp with timezone)
- `city` - Event city
- `hubspot_form_id` - Your HubSpot form ID for registration

## Optional Fields

- `timezone` - Event timezone (e.g., "EST")
- `location` - General location description
- `type` - Event type (Dinner, Forum, Learn & Go, VEB, Virtual Roundtable)
- `brand` - Brand hosting event (ITx, Sentinel, CDAIO, Marketverse)
- `venue` - Venue name
- `venue_address` - Full venue address
- `venue_link` - Venue website URL

## Adding Related Data

### Agenda Items
Add to the `agenda_items` table:
- `event_id` - Link to your event
- `time_slot` - Time range (e.g., "9:00 AM - 10:00 AM")
- `title` - Agenda item title
- `description` - Details
- `order_index` - Display order (0, 1, 2, etc.)

### Speakers
Add to the `event_speakers` table:
- `event_id` - Link to your event
- `name` - Speaker name
- `about` - Speaker bio
- `headshot_url` - URL to speaker photo
- `order_index` - Display order

### Sponsors
Add to the `event_sponsors` table:
- `event_id` - Link to your event
- `name` - Sponsor name
- `about` - Sponsor description
- `logo_url` - URL to sponsor logo
- `order_index` - Display order

## HubSpot Form Integration

The template automatically embeds your HubSpot form using the `hubspot_form_id` field. Just add the form ID to the event record, and it will appear styled and ready in the registration section.

## Example SQL to Insert a Test Event

```sql
-- Insert a test event
INSERT INTO events (
  title,
  slug,
  blurb,
  date,
  timezone,
  city,
  location,
  type,
  brand,
  venue,
  venue_address,
  venue_link,
  hubspot_form_id
) VALUES (
  'Boston Tech Summit 2026',
  'boston-tech-summit-2026',
  'Join us for an exclusive gathering of technology leaders in Boston',
  '2026-01-15 09:00:00-05',
  'EST',
  'Boston',
  'Boston, MA',
  'Forum',
  'ITx',
  'Boston Convention Center',
  '415 Summer St, Boston, MA 02210',
  'https://www.massconvention.com/',
  'your-hubspot-form-id-here'
);
```

## Benefits of This Approach

- **No code changes needed** - Just update database records
- **Consistent design** - All events use the same beautiful template
- **Easy to maintain** - Update event details without touching code
- **Scalable** - Add as many events as you need
- **HubSpot integrated** - Registration forms automatically embedded
