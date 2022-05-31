<template>
  <main>
    <div class="bg-black bg-hero-pattern bg-cover bg-center py-44">
      <icon-logo class="ml-auto mr-auto w-1/2 lg:h-80 lg:w-80" />
      <p class="py-20 text-center  lg:pt-32 lg:text-8xl text-5xl sm:text-6xl font-Anton text-white">PAGE INDISPONIBLE...</p>
      <div class="ml-auto mr-auto w-2/3">
        <router-link to="/"
          >  <div
    class="
      my-3
      ml-auto
      mr-auto
      h-auto
      w-full
      rounded-lg
      border-2 border-white
      text-white
      bg-transparent
      p-3
      text-center
      font-Anton
      text-2xl
      font-bold
      uppercase
      tracking-wide
   hover:text-white
      hover:bg-zinc-600
      sm:text-4xl
      lg:text-5xl
      
    "
  >
    PAGE <span class="text-red-400">D'ACCUEIL</span>
  </div></router-link
        >
 
    </div></div>
  </main>
</template>

<script>
import IconLogo from "../components/icons/IconLogo.vue";
import Bouton from "../components/icons/Bouton.vue";
export default {
  components: { IconLogo, Bouton },
};
</script>