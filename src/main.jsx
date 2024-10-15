import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { SafeAreaView, StyleSheet } from 'react-native-web';
import App from './App.jsx'
import './index.css'

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register("/service-worker.js", { scope: "/" })
    .catch(error => {
      console.error(`Registration failed with ${error}`);
    });
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SafeAreaView style={styles.container}>
      <App />
    </SafeAreaView>
  </StrictMode>,
);
