<template>
  <header>
    <header><header-app></header-app></header>
  </header>

  <router-view></router-view>

  <footer><footer-app></footer-app></footer>
</template>

<script>
import HeaderApp from "./components/HeaderApp.vue";
import FooterApp from "./components/FooterApp.vue";
export default {
  name: "App",
  components: {
    HeaderApp,
    FooterApp,
  },
};
</script>