import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = process.env.GATSBY_SUPABASE_URL!;
const SUPABASE_API_KEY = process.env.GATSBY_SUPABASE_API_KEY!;

export const supabaseClient = createClient(SUPABASE_URL, SUPABASE_API_KEY, {
  db: {
    schema: "public",
  },
});
