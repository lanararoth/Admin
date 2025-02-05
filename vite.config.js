import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3001, // Ensures admin runs on a separate port
    open: true, // Automatically opens in browser (optional)
  },
})
