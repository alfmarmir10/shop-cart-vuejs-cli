<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <Header businessName="Dewis Market" />
    <SearchVue />
    <ProductsVue @addToCart="addToCart" />
    <FloatingCartVue @iterateShowCart="iterateShowCart" />
    <!-- <SidebarVue :sidebarClass="sidebarClass" :cartList="cartList" @iterateShowCart="iterateShowCart" /> -->
    <SidebarVue :sidebarClass="sidebarClass" @iterateShowCart="iterateShowCart" />
    <FooterVue />
  </div>
</template>

<script>
import FloatingCartVue from "./components/FloatingCart.vue";
import FooterVue from "./components/Footer.vue";
import Header from "./components/Header.vue";
import ProductsVue from "./components/Products.vue";
import SearchVue from "./components/Search.vue";
import SidebarVue from "./components/Sidebar.vue";
import store from './store/store';

export default {
  name: "App",
  store: store,
  components: {
    Header,
    SearchVue,
    ProductsVue,
    FooterVue,
    FloatingCartVue,
    SidebarVue,
  },
  data() {
    return {
      sidebarClass: 'sidebar hide',
      showCart: false,
    }
  },
  methods: {
    iterateShowCart: function () {
      this.showCart = !this.showCart;
      if (this.showCart === true) {
        this.sidebarClass = "sidebar";
      } else {
        this.sidebarClass = "sidebar hide";
      }
    },
    addToCart: function (e){
      this.$store.commit('addToCartMutation', e);
      console.log("CART: "+JSON.stringify(this.$store.state.cart));
      this.$store.commit('totalizeCart');
      console.log(this.$store.state.totals);
    },
    removeFromCart: function (e){
      this.$store.commit('removeFromCartMutation', e);
      console.log(this.$store.state.cart);
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;700&family=Yanone+Kaffeesatz:wght@300;400;500;700&display=swap");
:root {
  --Montserrat: "Montserrat", Helvetica;
  --Yanone: "Yanone Kaffeesatz", Helvetica;
  --LightBlue: #8ecae6;
  --MediumBlue: #219ebc;
  --DarkBlue: #023047;
  --Yellow: #ffb703;
  --Orange: #fb8500;
}
html {
  box-sizing: border-box;
  font-size: 62.5%;
}

* {
  margin: 0;
  padding: 0;
  font-family: "Montserrat", Helvetica;
}
</style>
