# Fix: Event Pages Not Loading on Netlify

## Current Problem

Console errors show:
```
❌ Missing Supabase environment variables. Please add your credentials to .env file.
❌ Connecting to 'https://placeholder.supabase.co/rest/v1/events?...'
❌ Fetch API cannot load https://placeholder.supabase.co... Refused to connect
```

This means the Supabase environment variables are NOT configured in Netlify.

---

## Complete Solution

### Step 1: Configure Environment Variables in Netlify

**CRITICAL**: These must be set BEFORE deploying for them to be embedded in the build.

1. Go to https://app.netlify.com
2. Select your site
3. Go to **Site Settings** → **Environment Variables**
4. Click **Add a variable** or **New variable**
5. Add these TWO variables:

**Variable 1:**
```
Key: NEXT_PUBLIC_SUPABASE_URL
Value: https://itdiowfxjmhucoowsozs.supabase.co
```

**Variable 2:**
```
Key: NEXT_PUBLIC_SUPABASE_ANON_KEY
Value: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml0ZGlvd2Z4am1odWNvb3dzb3pzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTkyNzc3MjMsImV4cCI6MjA3NDg1MzcyM30.ssC3D_0j9ginTJILq11BHrwDuPR3Ason45GGIwJotXE
```

**Important:**
- Copy values EXACTLY (no extra spaces, no quotes)
- Variable names MUST start with `NEXT_PUBLIC_`
- Both variables are required

### Step 2: Trigger a New Deploy

**After** adding the environment variables:

1. Go to **Deploys** tab
2. Click **Trigger deploy** → **Deploy site**
3. Wait for build to complete (2-3 minutes)

**Why this is necessary:**
- Environment variables are embedded into static files at build time
- Old deployments used placeholder values
- You MUST redeploy after adding the variables

### Step 3: Verify It's Working

Visit your live site and check:

**✅ Success indicators:**
- No console errors about Supabase
- Event data loads on pages
- You see `https://itdiowfxjmhucoowsozs.supabase.co` in network tab (not placeholder)

**❌ Still broken indicators:**
- Console shows "Missing Supabase environment variables"
- Network tab shows `https://placeholder.supabase.co`
- Solution: Variables weren't set before deploy - go back to Step 1 and redeploy

---

## How to Verify Variables Are Set

Before deploying, verify in Netlify:

1. Go to **Site Settings** → **Environment Variables**
2. You should see:
   - ✅ `NEXT_PUBLIC_SUPABASE_URL`
   - ✅ `NEXT_PUBLIC_SUPABASE_ANON_KEY`
3. Click on each to verify values start with:
   - `https://itdiowfxjmhucoowsozs...`
   - `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...`

---

## Technical Explanation

### Why This Happens

1. **Locally**: Next.js reads from your `.env` file (works fine)
2. **Netlify**:
   - Your `.env` file is NOT uploaded (it's gitignored)
   - Environment variables must be configured in Netlify dashboard
   - With `output: 'export'`, variables are baked into static files at build time
   - Without variables, placeholder values are used and the site can't connect to Supabase

### Changes Made to Fix This

**File: `next.config.js`**
```javascript
env: {
  NEXT_PUBLIC_SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL,
  NEXT_PUBLIC_SUPABASE_ANON_KEY: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
}
```
This ensures environment variables are explicitly embedded in the static build.

**File: `netlify.toml`**
Added `https://*.supabase.co` to Content Security Policy `connect-src` directive to allow API calls.

**File: `lib/supabase.ts`**
Added placeholder values to prevent build errors when env vars are missing (allows build to succeed, but site won't work without real values).

---

## Still Having Issues?

### Check Netlify Build Logs

1. Go to **Deploys** tab
2. Click on the latest deploy
3. Look for environment variable warnings
4. Build should complete successfully with "✓ Generating static pages"

### Check Browser Console

After deploying:
1. Open browser console on your live site
2. Look for Supabase-related errors
3. Check Network tab - should connect to `itdiowfxjmhucoowsozs.supabase.co`, NOT `placeholder.supabase.co`

### Common Mistakes

- ❌ Set variables AFTER deploying (variables must be set BEFORE)
- ❌ Typo in variable names (must be exact: `NEXT_PUBLIC_SUPABASE_URL`)
- ❌ Added quotes around values (don't add quotes)
- ❌ Forgot to redeploy after adding variables
- ❌ Variables set in wrong environment (must be in production environment)

---

## Quick Test

After fixing, test these URLs:
- `/event-template?id=beyond-boundaries-boston-lg-insight-cisco-jan-2026`
- `/beyond-boundaries-boston-lg-insight-cisco-jan-2026`

Both should load event data successfully.
