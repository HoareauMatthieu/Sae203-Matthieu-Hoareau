<template>
  <main>
    <div class="bg-black bg-hero-pattern bg-cover bg-center py-32 lg:py-36">
      <icon-logo class="ml-auto mr-auto w-1/2 lg:h-60 lg:w-60" />
      <p class="py-20 text-center  lg:pt-14 lg:text-7xl text-5xl sm:text-6xl font-Anton text-white">PAGE INDISPONIBLE...</p>


<form class="flex flex-col w-2/3 ml-auto mr-auto" action="https://duckduckgo.com/" method="GET" 
    >
    <input class="text-black p-2 rounded-md" type="text" id="q" name="q" x-model="q" placeholder="Recherche sur Duckduck Go">
    <button class="font-Anton titreh1 border-2 border-white p-2 mt-8 rounded-lg" type="submit">Rechercher</button>
</form>  
      <div class="flex flex-row justify-center gap-4 pt-14 pb-60 lg:gap-9">
        <router-link to="/artiste" class="hover:text-red-400 text-white">Artistes</router-link>
        <span class="w-0.5 bg-white"></span>
        <router-link to="/concert" class="hover:text-red-400 text-white">Concert</router-link>
        <span class="w-0.5 bg-white"></span>
        <router-link to="/festival" class="hover:text-red-400 text-white">Festival</router-link>
      </div>

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