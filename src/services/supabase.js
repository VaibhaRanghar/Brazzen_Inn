import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://hwyszptnrhgkhnlbears.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh3eXN6cHRucmhna2hubGJlYXJzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc2NjI4MTQsImV4cCI6MjA2MzIzODgxNH0.-9FWVzHQsUlFCg4GcTPa_zHlSCjQMzjmZmXuqqr7eaQ";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
