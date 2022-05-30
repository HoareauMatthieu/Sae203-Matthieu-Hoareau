<template>
  <div class="bg-zinc-900 p-8 pt-36">
    <h1 class="bg-hero-pattern2 bg-cover py-28 text-center font-Anton text-3xl">
      BIENVENUE AU CONCERT DU <span class="text-red-400">PRINTEMPS</span>
    </h1>

    <h1 class="py-10 font-Anton text-2xl">RED SPRING <span class="text-red-400">FESTIVAL</span> 2022</h1>

    <p class="py-5">
      Découvrez en ce mois de Mars de 2022 l’un des festivals les plus ambitieux de France, 3 jours, 3 Scènes, une cinquantaine d’artistes
      connus à l’international, tous réunis pour fêter les premiers rayons du soleil de l’année.
    </p>

    <img src="image/illuimage1.png" alt="image de concert" class="w-full" />

    <p class="py-5">
      Entrez dans l’aventure d’un festival unique en France et proche de Paris offrant une experience de Festival Taille XXL. Avec ses 90
      000 visiteurs par jour pour la première année, le festival ne cesse de s’agrandir pour proposer un contenu inoubliable à tous les fans
      du Red Spring Festival !
    </p>

    <img src="image/imgaefoule.png" alt="image de foule" class="w-full" />

    <bouton bouton="Voire le" boutonred="Programme" />

    <img src="image/festivalnuit.png" alt="image du festival" class="w-full" />

    <bouton bouton="Voire le" boutonpurple="Programme" />
  </div>
</template>

<script>
import Bouton from "../components/icons/Bouton.vue";
export default {
  components: { Bouton },
};
</script>