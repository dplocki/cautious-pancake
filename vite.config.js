import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: [
        'android-chrome-192x192.png',
        'android-chrome-512x512.png',
        'apple-touch-icon.png',
        'favicon.ico',
        'favicon-16x16.png',
        'favicon-32x32.png',
      ],
      manifest: {
        "background_color": "#FFFFFF",
        "description": "An pancake and the cautious one",
        "display": "standalone",
        "icons": [
          {
            "src": "/android-chrome-192x192.png",
            "sizes": "192x192",
            "type": "image/png"
          },
          {
            "src": "/android-chrome-512x512.png",
            "sizes": "512x512",
            "type": "image/png"
          }
        ],
        "name": "Cautious Pancake",
        "scope": ".",
        "short_name": "Cautious Pancake",
        "start_url": "./",
        "theme_color": "#FFFFFF"
      }
    }),
  ],
  resolve: {
    alias: {
      'react-native': 'react-native-web'
    }
  }
});
