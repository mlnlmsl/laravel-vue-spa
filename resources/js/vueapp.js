//import the required Vue packages
import Vue from "vue";
import VueRouter from "vue-router";
import BootstrapVue from "bootstrap-vue";
import Element from "element-ui";

//import vue-boostrap css files
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

//import components
import HomeComponent from "./views/HomeComponent";
import Examplecomponent from "./views/Examplecomponent";
import AboutComponent from "./views/AboutComponent";
import App from "./App.vue";

//plugins for vue instances
Vue.use(VueRouter);
Vue.use(BootstrapVue);
Vue.use(Element);

//defination of router variables
const router = new VueRouter({
    mode: "history",
    routes: [
        {
            path: "/",
            name: "home",
            component: HomeComponent
        },
        {
            path: "/example",
            name: "example",
            component: Examplecomponent
        },
        {
            path: "/about",
            name: "about",
            component: AboutComponent
        }
    ]
});

//new vue instatation
const vue = new Vue({
    el: "#app",
    components: {
        App
    },
    router
});
