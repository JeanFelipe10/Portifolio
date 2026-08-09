import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// O deploy é por FTP para a raiz de jean.jztech.com.br, então os caminhos
// gerados precisam ser relativos ao próprio diretório — não absolutos.
export default defineConfig({
  plugins: [react()],
  base: './',
  server: {
    port: 5500,
    host: true,
  },
  build: {
    outDir: 'dist',
    // Sem sourcemap: é uma vitrine pública, não precisa expor o fonte.
    sourcemap: false,
  },
});
