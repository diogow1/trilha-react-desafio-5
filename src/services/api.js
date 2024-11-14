import axios from 'axios';

export const api  = axios.create({
    baseURL: 'https://yhddjsyzzqehtolneoxp.supabase.co/rest/v1/',
    headers: {
        apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InloZGRqc3l6enFlaHRvbG5lb3hwIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTczMTU5NTEzMywiZXhwIjoyMDQ3MTcxMTMzfQ.-H7Hu8A2Cw8N-VgHBu9xJkL77hy1AaKq0m23f8wapiY",
        authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InloZGRqc3l6enFlaHRvbG5lb3hwIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTczMTU5NTEzMywiZXhwIjoyMDQ3MTcxMTMzfQ.-H7Hu8A2Cw8N-VgHBu9xJkL77hy1AaKq0m23f8wapiY"
    }
})