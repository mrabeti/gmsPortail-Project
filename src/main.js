import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import { loadFonts } from "./plugins/webfontloader";
import { plugin, defaultConfig } from "@formkit/vue";
import "@formkit/themes/genesis";
import vClickOutside from "v-click-outside";
import "./assets/style.css";

loadFonts();

createApp(App)
  .use(plugin, defaultConfig())
  .use(vuetify)
  .use(router)
  .use(store)
  .use(vClickOutside)
  .mount("#app");
