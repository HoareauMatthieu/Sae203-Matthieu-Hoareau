<template>
  <main>
    <div class="bg-black bg-hero-pattern bg-cover bg-center py-44">
      <icon-logo class="ml-auto mr-auto w-1/2 lg:h-80 lg:w-80" />
      <p class="py-20 text-center  lg:pt-32 lg:text-8xl text-5xl sm:text-6xl font-Anton text-white">PAGE INDISPONIBLE...</p>


<form class="flex flex-col w-2/3 ml-auto mr-auto" action="https://duckduckgo.com/" method="GET" 
    >
    <input class="text-black" type="text" id="q" name="q" x-model="q" placeholder="Recherche sur Duckduck Go">
    <button class="font-Anton titreh1 border-2 border-white p-2 mt-8 rounded-lg" type="submit">Rechercher</button>
</form>  


     </div>
  </main>
</template>

<script>
import IconLogo from "../components/icons/IconLogo.vue";
import Bouton from "../components/icons/Bouton.vue";
export default {
  components: { IconLogo, Bouton },
};
</script>