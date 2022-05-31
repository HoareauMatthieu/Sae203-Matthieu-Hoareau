<template>
  <div class="rounded-md border-2 dark:border-white border-black">
    <div class="p-3">
      <h2 class="pb-4 font-Anton text-2xl uppercase text-red-400 sm:text-3xl lg:text-4xl">{{ date }}</h2>
      <div class="grid grid-cols-8 gap-2">
        <div class="col-span-4 row-span-2 rounded-lg bg-indigo-300 p-4 dark:bg-indigo-800 dark:text-indigo-400">1</div>
        <div class="col-span-3 rounded-lg bg-indigo-300 p-4 dark:bg-indigo-800 dark:text-indigo-400">2</div>
        <div class="col-span-1 rounded-lg bg-indigo-300 p-4 dark:bg-indigo-800 dark:text-indigo-400">3</div>
        <div class="col-span-1 rounded-lg bg-indigo-300 p-4 dark:bg-indigo-800 dark:text-indigo-400">4</div>
        <div class="col-span-1 rounded-lg bg-indigo-300 p-4 dark:bg-indigo-800 dark:text-indigo-400">5</div>
        <div class="col-span-2 row-span-2 rounded-lg bg-indigo-300 p-4 dark:bg-indigo-800 dark:text-indigo-400">6</div>
        <div class="col-span-3 rounded-lg bg-indigo-300 p-4 dark:bg-indigo-800 dark:text-indigo-400">7</div>
        <div class="col-span-3 rounded-lg bg-indigo-300 p-4 dark:bg-indigo-800 dark:text-indigo-400">8</div>
        <div class="col-span-4 row-span-2 rounded-lg bg-indigo-300 p-4 dark:bg-indigo-800 dark:text-indigo-400">9</div>
        <div class="col-span-4 row-span-2 rounded-lg bg-indigo-300 p-4 dark:bg-indigo-800 dark:text-indigo-400">10</div>
      </div>
      <router-link to="/concert"><bouton>Plus d'infos</bouton></router-link>
    </div>
  </div>
</template>

<script>
import Bouton from "../components/icons/Bouton.vue";
export default {
  components: { Bouton },
  props: {
    date: {
      type: String,
      required: true,
    },
  },
};
</script>
