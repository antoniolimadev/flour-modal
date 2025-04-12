import { createApp } from 'vue';
import App from './App.vue';
import FlourModal from "@/";
const app = createApp(App);

app.use(FlourModal);
app.mount('#app');
