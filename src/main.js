import { createApp } from "vue";
import App from "./App.vue";
import "./index.css";
import "./assets/tailwind.css";
import store from "./store/store";

const app = createApp(App);
app.mount("#app");
app.use(store);
