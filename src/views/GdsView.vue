<template>
  <div class="p-5 pt-28">
    <div class="">
      <h1 class="titreh1">Guide de style</h1>
      <div class="py-5"></div>
    </div>

    <div class="">
      <h2 class="ml-3 font-Anton text-3xl text-red-400 sm:text-4xl lg:text-5xl">Harmonie colorée</h2>
      <div class="flex items-center justify-center">
        <div class="m-2 h-20 w-96 rounded-2xl border-2 border-white bg-black">
          <p class="text-center text-white opacity-0 hover:opacity-100">Black</p>
        </div>
        <div class="m-2 h-20 w-96 rounded-2xl border-2 border-white bg-zinc-900">
          <p class="text-center text-white opacity-0 hover:opacity-100">Zinc 900</p>
        </div>
        <div class="m-2 h-20 w-96 rounded-2xl bg-red-400">
          <p class="text-center text-white opacity-0 hover:opacity-100">Red 400</p>
        </div>
        <div class="m-2 h-20 w-96 rounded-2xl border-2 bg-white">
          <p class="text-center text-black opacity-0 hover:opacity-100">White</p>
        </div>
      </div>
      <div class="py-3"></div>
    </div>

    <div class="">
      <h2 class="ml-3 font-Anton text-3xl text-red-400 sm:text-4xl lg:text-5xl">Polices</h2>
      <p class="titreh1 my-3 ml-3 text-left hover:text-red-400">Header 1</p>
      <p class="my-3 ml-3 font-Anton text-3xl leading-10 hover:text-red-400 sm:text-4xl lg:text-5xl">Header 2</p>
      <p class="my-3 ml-3 text-xs font-bold leading-8 hover:text-red-400 sm:text-sm lg:py-1 lg:text-base">Body</p>
      <div class="py-5"></div>
    </div>

    <div class="">
      <h2 class="ml-3 font-Anton text-3xl text-red-400 sm:text-4xl lg:text-5xl">Composants</h2>

      <div class="flex flex-col gap-10">
        <bouton>Bouton</bouton>
        <boutonred>Bouton</boutonred>
        <p>Carte des concerts</p>
        <card-app date="Insérer Date" />
        <p>Header et Footer responsive</p>
        <header-app class="relative" />
        <footer-app />
      </div>
    </div>

    <div class="my-11 bg-zinc-900 p-11">
      <h2 class="ml-3 font-Anton text-3xl text-red-400 sm:text-4xl lg:text-5xl">Icones</h2>

      <div class="flex-raw flex justify-center gap-9">
        <facebook />
        <twitter />
        <instagram />
        <sun />
        <MenuAlt3Icon class="w-10" />
      </div>

      <icon-2-logo />
      <icon-logo />
    </div>
  </div>
</template>

<script >
import Bouton from "../components/icons/Bouton.vue";
import Boutonred from "../components/icons/Boutonred.vue";

import HeaderApp from "../components/HeaderApp.vue";
import FooterApp from "../components/FooterApp.vue";
import Facebook from "../components/icons/Facebook.vue";
import Instagram from "../components/icons/Instagram.vue";
import Twitter from "../components/icons/Twitter.vue";
import Sun from "../components/icons/Sun.vue";
import IconLogo from "../components/icons/IconLogo.vue";
import Icon2Logo from "../components/icons/Icon2Logo.vue";
import { MenuAlt3Icon } from "@heroicons/vue/solid";

export default {
  name: "App",
  components: {
    MenuAlt3Icon,
    Bouton,
    Boutonred,

    HeaderApp,
    FooterApp,
    Icon2Logo,
    IconLogo,
    Instagram,
    Facebook,
    Sun,
    Twitter,
  },
};
</script>