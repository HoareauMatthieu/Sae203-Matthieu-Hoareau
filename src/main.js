import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './index.css'

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-app.js";

// Votre configuration de Firebase
const firebaseConfig = {
    apiKey: "AIzaSyDHVD1ZqwSik6EvKHjsMt8Pjv6kcnudyEM",
    authDomain: "red-spring-sae203.firebaseapp.com",
    projectId: "red-spring-sae203",
    storageBucket: "red-spring-sae203.appspot.com",
    messagingSenderId: "293423351251",
    appId: "1:293423351251:web:7fea0c6038ccf31eeb9b26"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);

const app = createApp(App)

app.use(router)

app.mount('#app')
