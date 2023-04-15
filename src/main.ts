import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import AOS from 'aos';

import 'aos/dist/aos.css';

const app = createApp(App);

// app.AOS = new AOS.init({ 
//     "once": false,
// });

app.use(store);
app.use(router);

app.mount('#app');
