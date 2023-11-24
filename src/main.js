import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia';

import './assets/main.css'
import './index.css'

createApp(App).use(createPinia()).mount('#app');
