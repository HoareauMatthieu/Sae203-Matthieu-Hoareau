<template>
  <div class="p-8 pt-36">
    <h1 class="font-Anton text-3xl">CONTACT</h1>
    <p class="pt-3 text-center text-white">Contactes nous sur nos réseaux !</p>

    <div class="mt-10 flex flex-row justify-center gap-5">
      <instagram class="" />
      <facebook class="" />
      <twitter class="" />
    </div>

    <p class="py-8 text-white lg:pl-36">Ou ici !</p>

    <div class="w-full">
      <form class="mb-4 rounded px-8 pt-6 pb-8 shadow-md lg:px-80">
        <div class="mb-4">
          <input
            class="w-full appearance-none rounded border bg-zinc-900 py-2 px-3 leading-tight text-white"
            id="prenom"
            type="text"
            placeholder="Prénom"
          />
        </div>
        <div class="mb-4">
          <input
            class="w-full appearance-none rounded border bg-zinc-900 py-2 px-3 leading-tight text-white"
            id="nom"
            type="text"
            placeholder="Nom"
          />
        </div>
        <div class="mb-4">
          <input
            class="w-full appearance-none rounded border bg-zinc-900 py-2 px-3 leading-tight text-white"
            id="mail"
            type="text"
            placeholder="Adresse mail"
          />
        </div>
        <div class="mb-4">
          <input
            class="w-full appearance-none rounded border bg-zinc-900 py-2 px-3 leading-tight text-white"
            id="tel"
            type="text"
            placeholder="Tel :"
          />
        </div>
        <div class="mb-4">
          <input
            class="w-full appearance-none rounded border bg-zinc-900 py-2 px-3 leading-tight text-white"
            id="objet"
            type="text"
            placeholder="Objet"
          />
        </div>
        <div class="mb-4">
          <input
            class="w-full appearance-none rounded border bg-zinc-900 py-2 px-3 pb-44 leading-tight text-white"
            id="texte"
            type="text"
            placeholder="Texte"
          />
        </div>
        <boutonred bouton="ENVOYER" />
      </form>
    </div>
    <h1 class="font-Anton text-3xl">Ou nous trouver ?</h1>
    <img src="public/image/carte.png" alt="carte" class="ml-auto mr-auto w-1/2" />
    <p class="pt-8 text-center text-sm">12 Rue de Saisset - Montrouge 92120</p>
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