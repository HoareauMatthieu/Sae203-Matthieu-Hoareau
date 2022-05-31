<template>
  <main>
    <div class="bg-black bg-hero-pattern bg-cover bg-center pt-36">
      <icon-logo class="ml-auto mr-auto w-1/2 lg:h-80 lg:w-80" />
      <p class="pt-40 text-center font-Inter lg:pt-32 text-white">DU 22 AU 24 MARS 2022</p>
      <div class="ml-auto mr-auto w-2/3">
        <router-link to="/programme"
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
    Voire le <span class="text-red-400">Programme</span>
  </div></router-link
        >
      </div>
      <div class="flex flex-row justify-center gap-4 pt-48 pb-60 lg:gap-9">
        <router-link to="/artiste" class="hover:text-red-400 text-white">Artistes</router-link>
        <span class="w-0.5 bg-white"></span>
        <router-link to="/concert " class="hover:text-red-400 text-white">Concert</router-link>
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