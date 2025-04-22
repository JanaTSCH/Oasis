/* eslint-disable no-undef */
import { createClient } from "@supabase/supabase-js";

// Добавляем проверку перед созданием клиента
if (!process.env.REACT_APP_SUPABASE_URL) {
  throw new Error(
    "REACT_APP_SUPABASE_URL is not defined in environment variables"
  );
}

if (!process.env.REACT_APP_SUPABASE_KEY) {
  throw new Error(
    "REACT_APP_SUPABASE_KEY is not defined in environment variables"
  );
}

export const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
const supabaseKey = process.env.REACT_APP_SUPABASE_KEY;

const supabase = createClient(supabaseUrl, supabaseKey, {
  auth: {
    persistSession: false, // Опционально: отключаем сохранение сессии
  },
});

export default supabase;
