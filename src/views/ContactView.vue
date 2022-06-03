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
      <form class="mb-4 rounded pt-6 pb-8 lg:px-80">
        <div class="mb-4">
          <input
            class="w-full appearance-none rounded border bg-transparent py-2 px-3 leading-tight"
            id="prenom"
            type="text"
            placeholder="Prénom"
          />
        </div>
        <div class="mb-4">
          <input
            class="w-full appearance-none rounded border bg-transparent py-2 px-3 leading-tight"
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
            class="w-full appearance-none rounded border bg-transparent py-2 px-3 leading-tight"
            id="tel"
            type="text"
            placeholder="Tel :"
          />
        </div>
        <div class="mb-4">
          <input
            class="w-full appearance-none rounded border bg-transparent py-2 px-3 leading-tight"
            id="objet"
            type="text"
            placeholder="Objet"
          />
        </div>
        <div class="mb-4">
          <textarea
            class="h-48 w-full appearance-none rounded border bg-transparent py-2 px-3 leading-tight"
            id="texte"
            type="text"
            placeholder="Texte"
          />
        </div>
        <boutonred>Envoyer</boutonred>
      </form>
    </div>
    <h1 class="font-Anton text-3xl">Ou nous trouver ?</h1>
    <iframe
      class="ml-auto mr-auto w-full"
      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7964.763601589316!2d2.3165431737560462!3d48.812577631436724!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e670ff0c81975d%3A0x650af317b609bc1a!2s12%20Rue%20de%20Saisset%2C%2092120%20Montrouge!5e0!3m2!1sfr!2sfr!4v1654263840785!5m2!1sfr!2sfr"
      width="600"
      height="450"
      style="border: 0"
      allowfullscreen=""
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
    ></iframe>
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