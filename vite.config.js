import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: ['.manus.computer', '5173-iaxal4cjab6t6ippcas8v-f3888328.sg2.manus.computer'],
  },
});
