import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://tnlgdonwteekffzmibnz.supabase.co";
export const SUPABASE_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRubGdkb253dGVla2Zmem1pYm56Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDUxNzA4MDAsImV4cCI6MjAyMDc0NjgwMH0.smztsSY5CxT6EQxOBvfyRiDNVNmU2mltThtymTxV_Lg";

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);
