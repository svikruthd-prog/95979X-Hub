const SUPABASE_URL = "https://jzvzeyoapcchisguutzd.supabase.co/rest/v1/";

const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp6dnpleW9hcGNjaGlzZ3V1dHpkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODQwNTc1MzQsImV4cCI6MjA5OTYzMzUzNH0.Nd_qJyrR9NRFqkuyQf57O42fp6OyT0gmF1qlQUsbraI";

const supabaseClient = supabase.createClient(
  SUPABASE_URL,
  SUPABASE_ANON_KEY
);
