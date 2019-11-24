import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
// import BaseThermostat from "./components/BaseThermostat";
// import ViewList from "./components/ViewList";

Vue.config.productionTip = false;

// const NotFound = { template: '<p>Page not found</p>' };
// const Dashboard = { template: '<view-list></view-list>' };


// const routes = {
//     '/': BaseThermostat,
//     '/list': ViewList,
// };


new Vue({
    vuetify,
    // currentRoute: window.location.pathname,
    // computed: {
    //     ViewComponent () {
    //         return routes[this.currentRoute] || NotFound
    //     }
    // },
  render: h => h(App),
}).$mount('#app')
