import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://wygdrdwatnbwuuuwglbc.supabase.co";
const SUPABASE_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind5Z2RyZHdhdG5hbnRid3V1dXdnbGJjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTYxMjQ4ODksImV4cCI6MjA3MTcwMDg4OX0.UeHYAq2qVXXRfMbuhZdAeLvoTPEXt6UDQLiJYao0FM8";

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);
