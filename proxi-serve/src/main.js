import { createApp } from 'vue'; // Import createApp from Vue 3
import App from './App.vue'; // Import the root App component
import './assets/styles.css'
// Create the Vue application instance
const app = createApp(App);

// Mount the app to the DOM
app.mount('#app');