<template>
  <div class="bg-zinc-900 p-8 pt-32">
    <div class="flex flex-row justify-between">
      <h1 class="pb-11 font-Anton text-3xl sm:text-5xl lg:text-6xl">Programmation du <span class="text-red-400"> Jour </span></h1>
      <icon-logo class="h-12 w-12"></icon-logo>
    </div>
    <div class="grid grid-flow-row-dense grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-4">
      <card-app date="23 Mars" />
      <card-app date="23 Mars" />
      <card-app date="23 Mars" />
      <card-app date="23 Mars" />
    </div>
  </div>
</template>


<script >
import IconLogo from "../components/icons/IconLogo.vue";
import CardApp from "../components/CardApp.vue";

export default {
  name: "Programme",
  components: {
    IconLogo,
    CardApp,
  },
};
</script>