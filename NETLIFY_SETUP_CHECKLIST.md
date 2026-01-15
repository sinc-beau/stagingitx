# Netlify Setup Checklist

## Required Steps to Fix "Failed to load event data" Error

### Step 1: Add Environment Variables to Netlify

1. **Log in to Netlify**: https://app.netlify.com
2. **Select your site** from the dashboard
3. **Navigate to**: Site Settings → Environment Variables (or Build & Deploy → Environment)
4. **Click**: "Add a variable" or "New variable"

### Step 2: Add Both Variables

**First Variable:**
```
Name: NEXT_PUBLIC_SUPABASE_URL
Value: https://itdiowfxjmhucoowsozs.supabase.co
```

**Second Variable:**
```
Name: NEXT_PUBLIC_SUPABASE_ANON_KEY
Value: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml0ZGlvd2Z4am1odWNvb3dzb3pzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTkyNzc3MjMsImV4cCI6MjA3NDg1MzcyM30.ssC3D_0j9ginTJILq11BHrwDuPR3Ason45GGIwJotXE
```

**Important Notes:**
- Copy the values EXACTLY as shown (no extra spaces)
- Do NOT add quotes around the values
- Make sure both variable names start with `NEXT_PUBLIC_`

### Step 3: Trigger a New Deploy

After adding the environment variables:

1. **Go to**: Deploys tab
2. **Click**: "Trigger deploy" → "Deploy site"
3. **Wait** for the build to complete (should take 2-3 minutes)

### Step 4: Verify It's Working

1. **Visit your live site**: https://your-site.netlify.app/beyond-boundaries-boston-lg-insight-cisco-jan-2026
2. **Open browser console** (F12 or right-click → Inspect)
3. **Check for errors**:
   - ✅ Good: No Supabase warnings
   - ❌ Bad: "Missing Supabase environment variables" warning

4. **Test the page**:
   - The page should load event data from Supabase
   - Registration form should appear
   - No "Failed to load event data" error

## Why This Is Needed

- In development (localhost), Next.js reads environment variables from your `.env` file
- In production (Netlify), you must configure them in the Netlify dashboard
- The `.env` file is NOT uploaded to Netlify (it's in `.gitignore`)
- Without these variables, the site cannot connect to your Supabase database

## Still Having Issues?

Check the Netlify build logs:
1. Go to Deploys tab
2. Click on the latest deploy
3. Look for warnings about missing environment variables
4. The build should show: "Creating an optimized production build... ✓"

If you see the variables in the logs during build, they're configured correctly.
