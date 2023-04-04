import { createApp } from "vue";
// Import rotuer from router file
import router from "./router";
// Import normalize to reset the browser style
import "normalize.css";
import "./style.css";
import App from "./App.vue";
/* import font awesome core library */
import { library } from "@fortawesome/fontawesome-svg-core";
/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
/* import specific icons */
import { faBars } from "@fortawesome/free-solid-svg-icons";
/* add icons to the library */
library.add(faBars);

createApp(App)
  .use(router)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");
