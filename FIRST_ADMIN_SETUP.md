# Setting Up Your First Admin User

This guide will help you set up the first administrator account for the ITx Collective events management system.

## Prerequisites

- Access to your Supabase dashboard
- The Supabase project is already configured (check `.env` file)

## Step 1: Enable Authentication in Supabase

1. Go to your Supabase Dashboard: https://supabase.com/dashboard
2. Select your project: `itdiowfxjmhucoowsozs`
3. Navigate to **Authentication** → **Providers**
4. Enable **Email** authentication (it should already be enabled)

## Step 2: Create Your First User

### Option A: Using Supabase Dashboard (Recommended)

1. In Supabase Dashboard, go to **Authentication** → **Users**
2. Click **Add User** → **Create new user**
3. Enter:
   - Email: your-email@example.com
   - Password: (create a strong password)
   - Auto Confirm User: ✅ **Check this box**
4. Click **Create User**
5. Copy the **User UUID** (you'll need this in the next step)

### Option B: Using the Application (if sign-up is enabled)

1. Navigate to your application's sign-up page
2. Create an account with your email and password
3. Confirm your email (if required)
4. Get your User UUID from Supabase Dashboard → Authentication → Users

## Step 3: Grant Admin Role

Now that you have a user account, you need to grant it admin privileges.

1. In Supabase Dashboard, go to **SQL Editor**
2. Click **New Query**
3. Paste this SQL (replace `YOUR_USER_UUID` with the actual UUID from Step 2):

```sql
-- Grant admin role to your user
INSERT INTO user_roles (user_id, role, brand)
VALUES ('YOUR_USER_UUID', 'admin', NULL);
```

4. Click **Run**

## Step 4: Verify Admin Access

Test that your admin role is working:

```sql
-- Check your roles
SELECT * FROM user_roles WHERE user_id = 'YOUR_USER_UUID';

-- Expected result:
-- role: 'admin'
-- brand: NULL (means access to all brands)
```

## Step 5: Log In

1. Go to your application
2. Sign in with your email and password
3. You now have full admin access to:
   - Create, edit, and delete events for all brands
   - Manage speakers, sponsors, and agenda items
   - Grant roles to other users

## Creating Additional Users

### Create an Editor for a Specific Brand

```sql
-- First, create the user account in Authentication → Users
-- Then grant editor role for ITx brand:
INSERT INTO user_roles (user_id, role, brand)
VALUES ('NEW_USER_UUID', 'editor', 'ITx');
```

### Create a Viewer (Read-Only)

```sql
INSERT INTO user_roles (user_id, role, brand)
VALUES ('NEW_USER_UUID', 'viewer', NULL);
```

### Give Multi-Brand Access

```sql
-- Grant editor access to both ITx and Sentinel brands
INSERT INTO user_roles (user_id, role, brand)
VALUES
  ('USER_UUID', 'editor', 'ITx'),
  ('USER_UUID', 'editor', 'Sentinel');
```

## Security Best Practices

1. **Never share your admin credentials** - Create separate accounts for other admins
2. **Use strong passwords** - Minimum 12 characters with mixed case, numbers, and symbols
3. **Limit admin accounts** - Only create admin accounts for trusted personnel
4. **Use brand-specific editors** - Instead of making everyone an admin, assign editors to specific brands
5. **Regular audits** - Periodically review user_roles table to ensure proper access

## Troubleshooting

### "Access Denied" when creating events

**Problem**: User can't create events even after logging in.

**Solution**: Check if the user has a role assigned:
```sql
SELECT * FROM user_roles WHERE user_id = auth.uid();
```

If no results, the user needs a role assigned (see Step 3).

### Can't access certain brands

**Problem**: Editor can see but not modify events for a brand.

**Solution**: Check brand access:
```sql
SELECT role, brand FROM user_roles WHERE user_id = 'USER_UUID';
```

The `brand` column should match the event's brand, or be NULL for admins.

### RLS Policy Errors

**Problem**: Getting RLS policy violations.

**Solution**:
1. Ensure RLS is enabled on all tables
2. Check that the helper functions exist:
```sql
-- These should all exist:
SELECT * FROM pg_proc WHERE proname IN ('is_admin', 'is_editor', 'has_brand_access');
```

## Next Steps

Once your admin account is set up:

1. Test creating a sample event
2. Set up additional user accounts for your team
3. Configure authentication settings (email templates, password policies, etc.)
4. Review the DATABASE_SETUP.md for complete documentation

## Support

If you encounter issues:
1. Check Supabase logs (Dashboard → Logs)
2. Verify environment variables in `.env`
3. Test RLS policies in SQL Editor
4. Review DATABASE_SETUP.md for detailed information
