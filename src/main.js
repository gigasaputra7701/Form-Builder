import "./assets/style.css";
import Toast from "vue-toastification";
// Import the CSS or use your own!
import "vue-toastification/dist/index.css";
import { createApp } from "vue";
import App from "./App.vue";

createApp(App).use(Toast).mount("#app");
