<template>
  <div class="p-8 pt-36">
    <h1 class="titreh1">CONTACT</h1>
    <p class="pt-3 text-center">Contactes nous sur nos réseaux !</p>

    <div class="mt-10 flex flex-row justify-center gap-5">
      <instagram class="fill-black" />
      <facebook class="fill-black" />
      <twitter class="fill-black" />
    </div>

    <p class="py-8 lg:text-center lg:text-xl">Ou ici !</p>

    <div class="w-full">
      <form class="mb-4 rounded pt-6 pb-8  lg:px-80">
        <div class="mb-4">
          <input
            class="w-full appearance-none rounded border bg-transparent py-2 px-3 leading-tight "
            id="prenom"
            type="text"
            placeholder="Prénom"
          />
        </div>
        <div class="mb-4">
          <input
            class="w-full appearance-none rounded border bg-transparent py-2 px-3 leading-tight "
            id="nom"
            type="text"
            placeholder="Nom"
          />
        </div>
        <div class="mb-4">
          <input
            class="w-full appearance-none rounded border bg-transparent py-2 px-3 leading-tight"
            id="mail"
            type="text"
            placeholder="Adresse mail"
          />
        </div>
        <div class="mb-4">
          <input
            class="w-full appearance-none rounded border bg-transparent py-2 px-3 leading-tight "
            id="tel"
            type="text"
            placeholder="Tel :"
          />
        </div>
        <div class="mb-4">
          <input
            class="w-full appearance-none rounded border bg-transparent py-2 px-3 leading-tight "
            id="objet"
            type="text"
            placeholder="Objet"
          />
        </div>
        <div class="mb-4">
          <textarea
            class="w-full appearance-none rounded border bg-transparent py-2 px-3  leading-tight h-48 "
            id="texte"
            type="text"
            
            placeholder="Texte"
          />
        </div>
        <boutonred  >Envoyer</boutonred>
      </form>
    </div>
    <h1 class="font-Anton text-3xl">Ou nous trouver ?</h1>
    <img src="/image/carte.png" alt="carte" class="ml-auto mr-auto w-2/3 lg:w-1/3" />
    <p class="py-8 text-center text-sm">12 Rue de Saisset - Montrouge 92120</p>
  </div>
</template>


<script>
import Bouton from "../components/icons/Bouton.vue";
import Boutonred from "../components/icons/Boutonred.vue";
import Facebook from "../components/icons/Facebook.vue";
import Twitter from "../components/icons/Twitter.vue";
import Instagram from "../components/icons/Instagram.vue";
export default {
  components: { Bouton, Boutonred, Twitter, Instagram, Facebook },
};
</script>