 <template>
  <div class="fixed top-0 left-0 right-0 bg-black bg-opacity-60">
    <div class="flex justify-between p-3 lg:hidden">
      <router-link to="/"><icon-logo class="h-16 w-16" /><span class="sr-only">Accueil</span></router-link
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
        class="fixed inset-0 z-10 translate-x-full bg-zinc-300 motion-safe:transition-transform motion-safe:duration-1000 dark:bg-black"
        :class="{ 'translate-x-[5rem]': menuOuvert }"
      >
        <ul class="m-14 mt-24 flex flex-col gap-16 text-center sm:text-2xl">
          <li><router-link to="/artiste" class="hover:text-red-400">Artistes</router-link></li>
          <li><router-link to="/festival" class="hover:text-red-400">Festival</router-link></li>
          <li><router-link to="/concert" class="hover:text-red-400">Concert</router-link></li>
          <li><router-link to="/categorie" class="hover:text-red-400">Style</router-link></li>
          <li>
            <router-link to="/programme" class="font-Anton text-xl text-red-400 hover:text-red-600">Programmation</router-link>
          </li>
        </ul>
        <icon-logo class="ml-auto mr-auto h-40 w-40"><span class="sr-only">Logo</span></icon-logo>
      </div>
    </div>

    <div class="hidden p-3 lg:flex">
      <router-link to="/"><icon-logo class="h-24 w-24" /><span class="sr-only">Accueil</span></router-link>
      <div class="flex flex-auto items-center justify-end">
        <ul class="flex list-none items-center gap-10 p-3 pl-14">
          <li class="font-Inter text-white hover:text-red-400"><router-link to="/artiste">Artistes</router-link></li>
          <li class="font-Inter text-white hover:text-red-400"><router-link to="/festival">Festival</router-link></li>
          <li class="font-Inter text-white hover:text-red-400"><router-link to="/concert">Concert</router-link></li>
          <li class="font-Inter text-white hover:text-red-400"><router-link to="/categorie">Catégorie</router-link></li>
        </ul>

        <div class="flex gap-2 p-3">
          <bouton class="rounded-2xl bg-red-400 px-7 py-1 font-Anton -tracking-tight text-white hover:bg-red-600"
            ><router-link to="/programme">PROGRAMMATION</router-link></bouton
          >
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
  beforeMount() {
    this.$router.afterEach(() => (this.menuOuvert = false));
  },
};
</script>