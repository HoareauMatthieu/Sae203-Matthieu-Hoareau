<template >
  <div class="bg-zinc-800 p-6">
    <div class="flex flex-row justify-between">
      <icon-logo class="h-16 w-16" />
      <sun />
    </div>
    <div class="grid grid-cols-1 gap-10 p-5 text-center md:grid-cols-2">
      <div class="font-thin text-white">
        <h2 class="pb-5 text-lg text-white"><router-link to="/artiste">Artistes</router-link></h2>
      </div>
      <div class="font-thin text-gray-500">
        <h2 class="pb-5 text-lg text-white"><router-link to="/programme">Programme</router-link></h2>
      </div>
      <div class="font-thin text-gray-500">
        <h2 class="pb-5 text-lg text-white"><router-link to="/contact">Contact</router-link></h2>
      </div>
      <div class="font-thin text-gray-500">
        <h2 class="pb-5 text-lg text-white"><router-link to="/mentions">Mentions légales</router-link></h2>
      </div>
    </div>
    <hr class="m-4 border-t-2 border-indigo-100" />
    <div class="flex flex-col items-center">
      <p class="text-sm text-white">©2021 Red Spring Festiaval. All rights reserved</p>
      <div class="flex flex-row gap-5 pt-7">
        <instagram />
        <facebook />
        <twitter />
      </div>
    </div>
  </div>
</template>


<script >
import IconLogo from "../components/icons/IconLogo.vue";
import Sun from "../components/icons/Sun.vue";
import Facebook from "../components/icons/Facebook.vue";
import Twitter from "../components/icons/Twitter.vue";
import Instagram from "../components/icons/Instagram.vue";
export default {
  name: "Footer",
  components: {
    IconLogo,
    Sun,
    Facebook,
    Twitter,
    Instagram,
  },
};
</script>