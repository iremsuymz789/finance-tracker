// Shared Supabase connection for the Finance Tracker app.
// Every page (auth.html, app.html) loads this file so they all
// talk to the same database using the same credentials.

const SUPABASE_URL = "https://kkwjsedijjhboccakziu.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imtrd2pzZWRpampoYm9jY2Freml1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODY5NjcxMDksImV4cCI6MjEwMjU0MzEwOX0.vF58mQB2Ci9wpWOTEmrmfPMwRtoM_j3kWl6ujaPTLY4";

const supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
