import { createSSRApp } from 'vue'
import App from './App.vue'
import router from "./router/index.js";
//import VueMetaInfo from 'vue-meta-info';

// SSR requires a fresh app instance per request, therefore we export a function
// that creates a fresh app instance. If using Vuex, we'd also be creating a
// fresh store here.
export function createApp() {
  const app = createSSRApp(App)
  app.use(router)
      //.use(VueMetaInfo)
  return { app, router }
}
