<template>
  <div class="bg-zinc-900 p-8 pt-36">
    <div class="flex flex-row justify-between">
      <h1 class="font-Anton text-3xl">Programmation du <span class="text-red-400"> Jour </span></h1>
      <icon-logo class="h-12 w-12"></icon-logo>
    </div>
  </div>
</template>


<script >
import IconLogo from "../components/icons/IconLogo.vue";

export default {
  name: "Footer",
  components: {
    IconLogo,
  },
};
</script>