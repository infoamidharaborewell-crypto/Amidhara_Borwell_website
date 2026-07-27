import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-icons/fa', 'react-icons/fi', 'aos']
  },
  server: {
    port: 4173
  },
  preview: {
    port: 4173
  },
  build: {
    modulePreload: false,
    cssCodeSplit: true,
    minify: 'esbuild',
    chunkSizeWarningLimit: 1200,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('three') || id.includes('@react-three')) {
              return 'vendor-3d'
            }
          }
        }
      }
    }
  }
})
