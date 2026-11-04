import { defineConfig } from 'vite';
import path from 'path';

// If Vercel executes 'vite build' at the monorepo root, route it directly to client
export default defineConfig({
  root: path.resolve(__dirname, './client'),
  build: {
    outDir: path.resolve(__dirname, './client/dist'),
    emptyOutDir: true
  }
});

