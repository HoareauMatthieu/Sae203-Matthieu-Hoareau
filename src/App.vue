<template>
  <header>
    <header><header-app></header-app></header>
  </header>

  <router-view></router-view>
</template>

<script>
import HeaderApp from "./components/HeaderApp.vue";
export default {
  name: "App",
  components: {
    HeaderApp,
  },
};
</script>