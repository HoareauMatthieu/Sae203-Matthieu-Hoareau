<template>
  <div class=" p-8 pt-36 lg:px-36">
    <h1 class="rounded-lg bg-hero-pattern2 bg-cover bg-center py-28 text-center titreh1">
      BIENVENUE AU CONCERT DU <span class="text-red-400">PRINTEMPS</span>
    </h1>

    <h1 class="pt-10 titreh2">RED SPRING <span class="text-red-400">FESTIVAL</span> 2022</h1>

    <p class="py-5 text-xs sm:text-sm lg:py-1 lg:text-base">
      Découvrez en ce mois de Mars de 2022 l’un des festivals les plus ambitieux de France, 3 jours, 3 Scènes, une cinquantaine d’artistes
      connus à l’international, tous réunis pour fêter les premiers rayons du soleil de l’année.
    </p>

    <img src="/image/illuimage1.png" alt="image de concert" class="ml-auto mr-auto w-full sm:w-2/3 lg:w-1/2 lg:py-10" />

    <p class="py-5 text-xs sm:text-sm lg:py-1 lg:text-base">
      Entrez dans l’aventure d’un festival unique en France et proche de Paris offrant une experience de Festival Taille XXL. Avec ses 90
      000 visiteurs par jour pour la première année, le festival ne cesse de s’agrandir pour proposer un contenu inoubliable à tous les fans
      du Red Spring Festival !
    </p>

    <img src="/image/imgaefoule.png" alt="image de foule" class="ml-auto mr-auto w-full sm:w-2/3 lg:w-1/2 lg:py-10" />

    <router-link to="/programme"
      ><bouton class="my-4">Voire le <span class="text-red-400">programme</span> </bouton></router-link
    >

    <img src="/image/festivalnuit.png" alt="image du festival" class="sm: ml-auto mr-auto w-full sm:w-2/3 lg:w-1/2 lg:py-10" />

    <router-link to="/programme"
      ><bouton class="my-4">Voire le <span class="text-purple-400">programme</span></bouton></router-link
    >
  </div>
</template>

<script>
import Bouton from "../components/icons/Bouton.vue";
export default {
  components: { Bouton },
};
</script>