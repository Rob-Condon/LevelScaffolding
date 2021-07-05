import Vue from "vue";
import Router from "vue-router";
import Landing from "./views/Landing.vue";
import ContactUs from "./views/ContactUs";
import AboutUs from "./views/AboutUs";;
import MainNavbar from "./layout/MainNavbar.vue";
import MainFooter from "./layout/MainFooter.vue";
import Service_Industrial from "./views/Service_Industrial";
import Service_Residential from "./views/Service_Residential";
import Service_SmallCommerical from "./views/Service_SmallCommerical";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "landing",
      components: { default: Landing, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" }
      }
    },
    {
      path: "/ContactUs",
      name: "ContactUs",
      components: { default: ContactUs, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" }
      }
    },
    {
      path: "/AboutUs",
      name: "AboutUs",
      components: { default: AboutUs, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" }
      }
    },
    {
      path: "/services/Industrial",
      name: "Industrial",
      components: { default: Service_Industrial, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" }
      }
    },
    {
      path: "/services/Residential",
      name: "Residential",
      components: { default: Service_Residential, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" }
      }
    },
    {
      path: "/services/SmallCommercial",
      name: "SmallCommercial",
      components: { default: Service_SmallCommerical, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" }
      }
    },
  ],
  scrollBehavior: to => {
    if (to.hash) {
      return { selector: to.hash };
    } else {
      return { x: 0, y: 0 };
    }
  }
});
