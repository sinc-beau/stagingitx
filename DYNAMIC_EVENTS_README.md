# Dynamic Event Pages System

This document explains how the dynamic event page generation system works in this project.

## Overview

The system automatically generates static event pages based on database entries. When you mark an event as "live" in the database and rebuild the project, a dedicated page is created for that event.

## How It Works

### 1. Database Setup

Events are stored in the `events` table with an `islive` boolean column:
- `islive = false`: Event is in draft/preview mode
- `islive = true`: Event will get a static page generated during build

### 2. Build-Time Generation

When you run `npm run build`:

1. **Pre-build Script** (`scripts/generate-event-pages.js`) runs automatically
2. Script queries the database for all events where `islive = true`
3. For each live event, it creates a folder: `app/{slug}/`
4. Two files are generated in each folder:
   - `page.tsx`: The main event page component
   - `layout.tsx`: Metadata and SEO configuration
5. Next.js then builds these pages into static HTML

### 3. Event URL Structure

Each live event becomes accessible at:
```
yoursite.com/{slug}/
```

For example, if you have an event with slug `"boston-summit-2025"`, it will be available at:
```
yoursite.com/boston-summit-2025/
```

## Workflow

### Creating a New Event

1. **Add Event to Database**
   - Create event record with `islive = false`
   - Fill in all event details (title, date, location, etc.)
   - Add related data (agenda items, speakers, sponsors)

2. **Preview the Event**
   - Before going live, preview using the event template:
   - Visit: `/event-template?id={your-event-slug}`
   - This shows exactly how the event page will look

3. **Publish the Event**
   - Update database: Set `islive = true` for your event
   - Run `npm run build` to generate the static page
   - Deploy the new build
   - Event is now live at `/{your-event-slug}/`

### Updating an Event

1. **Update Database**
   - Modify event details in the database
   - Changes affect: event info, agenda, speakers, sponsors

2. **Rebuild & Deploy**
   - Run `npm run build`
   - Deploy the updated build
   - Changes are now live

### Unpublishing an Event

1. **Mark as Not Live**
   - Update database: Set `islive = false`

2. **Rebuild & Deploy**
   - Run `npm run build`
   - Page will no longer be generated
   - URL will return 404 after deployment

## Technical Details

### Generated Page Structure

Each generated event page:
- Fetches data client-side from Supabase
- Uses shared components from `/app/event-template/components/`
- Includes all sections: Hero, Overview, Agenda, Speakers, Sponsors, Venue
- Conditionally renders sections based on available data

### Why Client-Side Data Fetching?

Even though pages are statically generated, they fetch data client-side because:
- Allows real-time updates to event details without rebuilding
- Supports dynamic content like registration forms
- Maintains consistency with existing event-template architecture

### Files Modified

- `package.json`: Added `prebuild` script
- `scripts/generate-event-pages.js`: Build-time page generator
- `scripts/generate-event-routes.js`: Helper script (optional)

## Example Commands

### Preview an event (before making it live)
```bash
# Visit in browser:
http://localhost:3000/event-template?id=boston-summit-2025
```

### Generate pages for live events
```bash
npm run build
```

### Check which events will be generated
```bash
node scripts/generate-event-pages.js
```

## Troubleshooting

### No pages being generated?
- Verify `islive = true` in database for your events
- Check that Supabase env variables are set in `.env`
- Run the script manually to see error messages:
  ```bash
  node scripts/generate-event-pages.js
  ```

### Event page shows "Event not found"?
- Verify the event's `slug` matches the URL
- Confirm `islive = true` in the database
- Check that the page was generated (folder exists in `app/`)

### Changes not appearing?
- Remember to rebuild after database changes
- Clear browser cache
- Verify you deployed the new build

## Best Practices

1. **Always preview before publishing**: Use event-template to review
2. **Test locally first**: Run build locally before deploying
3. **Keep slugs URL-friendly**: Use lowercase, hyphens, no special characters
4. **Don't change slugs**: Once live, changing a slug breaks the URL
5. **Rebuild after changes**: Database updates require a rebuild to reflect

## Support

For issues or questions about the dynamic event system, review:
- This documentation
- `scripts/generate-event-pages.js` for generation logic
- `/app/event-template/` for component examples
