import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'node:path';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(import.meta.dirname, 'index.html'),
        playbook: resolve(import.meta.dirname, 'playbook.html'),
        authority: resolve(import.meta.dirname, 'authority.html'),
      },
    },
  },
  server: {
    allowedHosts: ['.manus.computer', '5173-iaxal4cjab6t6ippcas8v-f3888328.sg2.manus.computer'],
  },
});
