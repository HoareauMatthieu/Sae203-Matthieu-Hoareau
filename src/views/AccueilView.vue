<template>
  <main>
    <div class="bg-black bg-hero-pattern bg-cover bg-center pt-36">
      <icon-logo class="ml-auto mr-auto lg:h-80 lg:w-80" />
      <p class="pt-40 text-center font-Inter lg:pt-32">DU 22 AU 24 MARS 2022</p>
      <router-link to="/programme"><bouton bouton="Voire la " boutonred="Programmation" /></router-link>
      <div class="flex flex-row justify-center gap-5 pt-48 pb-60 lg:gap-9">
        <router-link to="/artiste">Artistes</router-link>
        <span class="w-0.5 bg-white"></span>
        <router-link to="/concert">Concert</router-link>
        <span class="w-0.5 bg-white"></span>
        <router-link to="/festival">Festival</router-link>
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