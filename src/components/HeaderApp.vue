 <template>
  <div class="fixed top-0 left-0 right-0 bg-black bg-opacity-80">
    <div class="flex justify-between p-3 lg:hidden">
      <router-link to="/"><icon-logo class="h-16 w-16" /> </router-link
      ><button
        class="relative z-50 text-xl"
        aria-haspopup="true"
        aria-controls="menu"
        :aria-expanded="menuOuvert"
        @click="menuOuvert = !menuOuvert"
      >
        <MenuAlt3Icon class="w-9 text-white" />
        <span class="sr-only">Menu</span>
      </button>
      <div
        id="menu"
        class="fixed inset-0 z-10 translate-x-full bg-black motion-safe:transition-transform motion-safe:duration-1000"
        :class="{ 'translate-x-0': menuOuvert }"
      >
        <ul class="m-14 mt-24 flex flex-col gap-24 text-center text-white">
          <li><router-link to="/">Artistes</router-link></li>
          <li><router-link to="/">Programmation</router-link></li>
          <li><router-link to="/">Festival</router-link></li>
          <li>
            <router-link to="/" class="text-red-400">Réserver mon billet</router-link>
          </li>
        </ul>
      </div>
    </div>

    <div class="hidden p-3 lg:flex">
      <icon-logo class="h-24 w-24" />
      <div class="flex flex-auto items-center justify-end text-white">
        <ul class="flex list-none items-center gap-10 p-3 pl-14">
          <li class="font-Inter">Artiste</li>
          <li class="font-Inter">Concert</li>
          <li class="font-Inter">Festival</li>
        </ul>

        <div class="flex gap-2 p-3">
          <bouton class="rounded-2xl bg-red-400 px-7 py-1 font-Anton -tracking-tight text-white">S'INSCRIRE</bouton>
        </div>
      </div>
    </div>
  </div>
</template>

<script >
import IconLogo from "../components/icons/IconLogo.vue";
import { MenuAlt3Icon } from "@heroicons/vue/solid";
import { PlusIcon } from "@heroicons/vue/outline";
export default {
  name: "App",
  data() {
    return {
      menuOuvert: false,
    };
  },
  components: {
    MenuAlt3Icon,
    PlusIcon,
    IconLogo,
  },
};
</script>