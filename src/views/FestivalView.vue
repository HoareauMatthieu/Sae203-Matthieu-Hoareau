<template>
  <div class="bg-zinc-900 p-8 pt-36 lg:px-36">
    <h1 class="rounded-lg bg-hero-pattern2 bg-cover bg-center py-28 text-center font-Anton text-4xl sm:text-5xl lg:text-6xl">
      BIENVENUE AU CONCERT DU <span class="text-red-400">PRINTEMPS</span>
    </h1>

    <h1 class="py-10 font-Anton text-3xl sm:text-4xl lg:text-5xl">RED SPRING <span class="text-red-400">FESTIVAL</span> 2022</h1>

    <p class="py-5 lg:py-1">
      Découvrez en ce mois de Mars de 2022 l’un des festivals les plus ambitieux de France, 3 jours, 3 Scènes, une cinquantaine d’artistes
      connus à l’international, tous réunis pour fêter les premiers rayons du soleil de l’année.
    </p>

    <img src="image/illuimage1.png" alt="image de concert" class="ml-auto mr-auto w-full sm:w-2/3 lg:w-1/2 lg:py-10" />

    <p class="py-5 lg:py-1">
      Entrez dans l’aventure d’un festival unique en France et proche de Paris offrant une experience de Festival Taille XXL. Avec ses 90
      000 visiteurs par jour pour la première année, le festival ne cesse de s’agrandir pour proposer un contenu inoubliable à tous les fans
      du Red Spring Festival !
    </p>

    <img src="image/imgaefoule.png" alt="image de foule" class="ml-auto mr-auto w-full sm:w-2/3 lg:w-1/2 lg:py-10" />

    <bouton bouton="Voire le" boutonred="Programme" class="my-8" />

    <img src="image/festivalnuit.png" alt="image du festival" class="sm: ml-auto mr-auto w-full sm:w-2/3 lg:w-1/2 lg:py-10" />

    <bouton bouton="Voire le" boutonpurple="Programme" class="my-8" />
  </div>
</template>

<script>
import Bouton from "../components/icons/Bouton.vue";
export default {
  components: { Bouton },
};
</script>