import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.NEXT_PUBLIC_SUPABASE_URL.trim() !== '' 
  ? process.env.NEXT_PUBLIC_SUPABASE_URL 
  : 'https://placeholder-to-prevent-build-crash.supabase.co';

const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY && process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY.trim() !== ''
  ? process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  : 'placeholder-key-to-prevent-build-crash';

export const supabase = createClient(supabaseUrl, supabaseKey);
