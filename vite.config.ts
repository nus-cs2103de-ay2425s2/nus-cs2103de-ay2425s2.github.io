import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Define base URL based on repository name
const isLandingPage = process.cwd().includes('landing-page');
const base = isLandingPage ? '/landing-page/' : '/';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base,
  build: {
    target: 'esnext',
    minify: 'esbuild',
    sourcemap: true,
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
        },
      },
    },
  },
  server: {
    port: 5173,
    strictPort: true,
    open: true,
  },
})
