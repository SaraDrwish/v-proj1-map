import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "../src/tailwind.css";

// import "tailwindcss/tailwind.css";

createApp(App).use(router).mount("#app");
