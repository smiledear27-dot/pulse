/*
# Create contacts table (single-tenant, no auth)

1. New Tables
- `contacts`
- `id` (uuid, primary key, auto-generated)
- `name` (text, not null) — the submitter's full name
- `email` (text, not null) — the submitter's contact email
- `message` (text, not null) — the body of the contact message
- `created_at` (timestamptz, defaults to now) — submission timestamp

2. Security
- Enable RLS on `contacts`.
- This is a single-tenant public contact form with no sign-in screen, so the
  frontend operates entirely as the anon role. CRUD is intentionally open to
  anon + authenticated so the public form can submit and read messages.

3. Notes
- No user_id column or auth.users reference — there is no account system.
- Index on created_at so the "latest messages first" list stays fast.
*/

CREATE TABLE IF NOT EXISTS contacts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  message text NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE contacts ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_select_contacts" ON contacts;
CREATE POLICY "anon_select_contacts" ON contacts FOR SELECT
  TO anon, authenticated USING (true);

DROP POLICY IF EXISTS "anon_insert_contacts" ON contacts;
CREATE POLICY "anon_insert_contacts" ON contacts FOR INSERT
  TO anon, authenticated WITH CHECK (true);

DROP POLICY IF EXISTS "anon_update_contacts" ON contacts;
CREATE POLICY "anon_update_contacts" ON contacts FOR UPDATE
  TO anon, authenticated USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "anon_delete_contacts" ON contacts;
CREATE POLICY "anon_delete_contacts" ON contacts FOR DELETE
  TO anon, authenticated USING (true);

CREATE INDEX IF NOT EXISTS contacts_created_at_idx ON contacts (created_at DESC);
