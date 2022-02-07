import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react({
    exclude: /\.stories\.(t|j)sx?$/,
    include: '**/*.jsx',

  })],
  build: {
    outDir: 'build',
  },
  server: {
    fs: {
      // Allow serving files from one level up to the project root
      allow: ['..']
    }
  }
})
