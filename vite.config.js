import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  define: {
    global: "window",
  },
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
        background_color: '#FFFFFF',
        description: 'An pancake and the cautious one',
        display: 'standalone',
        icons: [
          {
            src: '/android-chrome-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/android-chrome-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
          {
            src: '/apple-touch-icon.png',
            sizes: '180x180',
            type: 'image/png',
          },
          {
            src: '/favicon-16x16.png',
            sizes: '16x16',
            type: 'image/png',
          },
          {
            src: '/favicon-32x32.png',
            sizes: '32x32',
            type: 'image/png',
          },
          {
            src: '/favicon.ico',
            sizes: '48x48',
            type: 'image/x-icon',
          },
        ],
        name: 'Cautious Pancake',
        scope: '.',
        short_name: 'Cautious Pancake',
        start_url: './',
        theme_color: '#FFFFFF',
      },
      filename: 'service-worker.js',
      injectRegister: false,
      workbox: {
        runtimeCaching: [
          {
            urlPattern: ({ request }) => {
              return (
                request.destination === 'document' ||
                request.destination === 'image' ||
                request.destination === 'script' ||
                request.destination === 'style'
              );
            },
            handler: 'CacheOnly',
            options: {
              cacheName: 'html-cache',
            },
          },
        ],
        skipWaiting: true,
        clientsClaim: true,
      },
    }),
  ],
  resolve: {
    alias: {
      'react-native': 'react-native-web',
    },
  },
});
