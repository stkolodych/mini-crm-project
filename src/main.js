import Vue from "vue";
import Vuelidate from "vuelidate";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import dateFilter from "./filters/date.filter";
import currencyFilter from "./filters/currency.filter";
import tooltipDirective from '@/directives/tooltip.directive.js'
import messagePlugin from '@/utils/message.plugin';
import Loader from '@/components/app/Loader';
import "./registerServiceWorker";
import "materialize-css/dist/js/materialize.min";

import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

Vue.config.productionTip = false;

Vue.use(messagePlugin);
Vue.use(Vuelidate);
Vue.filter("date", dateFilter);
Vue.filter("currency", currencyFilter);
Vue.directive("tooltip", tooltipDirective);
Vue.component("Loader", Loader);

const firebaseConfig = {
  apiKey: "AIzaSyCtDexlgJi38Ri3c3YgmcfO18v8WcC9So0",
  authDomain: "vue-crm-ce823.firebaseapp.com",
  databaseURL: "https://vue-crm-ce823.firebaseio.com",
  projectId: "vue-crm-ce823",
  storageBucket: "",
  messagingSenderId: "408971844182",
  appId: "1:408971844182:web:7bfaeca0e309dc110139f7"
};

firebase.initializeApp(firebaseConfig);

let app;

firebase.auth().onAuthStateChanged(() => {
  if(!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount("#app");
  }
})


