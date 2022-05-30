<template>
  <main>
    <div class="bg-black bg-hero-pattern bg-cover pt-36">
      <icon-logo class="ml-auto mr-auto" />
      <p class="pt-40 text-center font-Inter">DU 22 AU 24 MARS 2022</p>
      <bouton bouton="Prendre mon billet" />
      <div class="flex flex-row justify-center gap-9 pt-48">
        <p>Artiste</p>
        <span class="w-0.5 bg-white"></span>
        <p>Programme</p>
        <span class="w-0.5 bg-white"></span>
        <p>Festival</p>
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