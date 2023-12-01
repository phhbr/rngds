import { createClient } from '@supabase/supabase-js';
import { environment } from '../app.config';

export const supabase = createClient(
  environment.supabaseUrl,
  environment.supabaseKey
);
