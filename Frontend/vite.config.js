import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import svgr from '@svgr/rollup'

export default defineConfig({
  plugins: [react(), svgr()],
  build: {
    minify: 'esbuild',
    esbuild: {
      drop: ['console', 'debugger'], // Eliminar console.logs y debuggers
    },
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return id.toString().split('node_modules/')[1].split('/')[0].toString();
          }
        }
      }
    }
  }
})