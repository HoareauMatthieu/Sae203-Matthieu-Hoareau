<template>
  <div class="p-5 pt-32">
    <div class="flex flex-row justify-between">
      <h1 class="pb-11 font-Anton text-3xl sm:text-5xl lg:text-6xl">Programmation du <span class="text-red-400"> Festival </span></h1>
      <icon-logo class="h-12 w-12"></icon-logo>
    </div>

    <div class="grid grid-flow-row-dense grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-3">
      <div class="rounded-lg border-2 border-black p-3 dark:border-white" v-for="[date, listeDate] in artistesParDate" :key="date">
        <h1 class="titreh2 p-3 text-left font-Anton text-red-400">{{ date }}</h1>
        <div class="grid grid-cols-3 gap-2">
          <img class="w-full rounded-lg" v-for="artiste in listeDate" :key="artiste.id" :src="artiste.photo" :alt="artiste.nom" />
        </div>
        <router-link to="/concert"><bouton>Plus d'infos</bouton></router-link>
      </div>
    </div>
  </div>

  <!-- <div class="rounded-md border-2 border-black dark:border-white">
    <div class="p-3">
      <h2 class="pb-4 font-Anton text-2xl uppercase text-red-400 sm:text-3xl lg:text-4xl">{{ date }}</h2>
      <div class="grid grid-cols-8 gap-2">
        <div class="col-span-4 row-span-2 rounded-lg bg-indigo-300 p-4 dark:bg-indigo-800 dark:text-indigo-400">1</div>
        <div class="col-span-3 rounded-lg bg-indigo-300 p-4 dark:bg-indigo-800 dark:text-indigo-400">2</div>
        <div class="col-span-1 rounded-lg bg-indigo-300 p-4 dark:bg-indigo-800 dark:text-indigo-400">3</div>
        <div class="col-span-1 rounded-lg bg-indigo-300 p-4 dark:bg-indigo-800 dark:text-indigo-400">4</div>
        <div class="col-span-1 rounded-lg bg-indigo-300 p-4 dark:bg-indigo-800 dark:text-indigo-400">5</div>
        <div class="col-span-2 row-span-2 rounded-lg bg-indigo-300 p-4 dark:bg-indigo-800 dark:text-indigo-400">6</div>
        <div class="col-span-3 rounded-lg bg-indigo-300 p-4 dark:bg-indigo-800 dark:text-indigo-400">7</div>
        <div class="col-span-3 rounded-lg bg-indigo-300 p-4 dark:bg-indigo-800 dark:text-indigo-400">8</div>
        <div class="col-span-4 row-span-2 rounded-lg bg-indigo-300 p-4 dark:bg-indigo-800 dark:text-indigo-400">9</div>
        <div class="col-span-4 row-span-2 rounded-lg bg-indigo-300 p-4 dark:bg-indigo-800 dark:text-indigo-400">10</div>
      </div>
      <router-link to="/concert"><bouton>Plus d'infos</bouton></router-link>
    </div>
  </div> -->
</template>

<script>
import Bouton from "../components/icons/Bouton.vue";
import { groupBy } from "lodash";
import IconLogo from "../components/icons/IconLogo.vue";

import {
  getFirestore, // Obtenir le Firestore
  collection, // Utiliser une collection de documents
  doc, // Obtenir un document par son id
  getDocs, // Obtenir la liste des documents d'une collection
  addDoc, // Ajouter un document à une collection
  updateDoc, // Mettre à jour un document dans une collection
  deleteDoc, // Supprimer un document d'une collection
  onSnapshot, // Demander une liste de documents d'une collection, en les synchronisant
  query, // Permet d'effectuer des requêtes sur Firestore
  orderBy, // Permet de demander le tri d'une requête query
} from "https://www.gstatic.com/firebasejs/9.7.0/firebase-firestore.js";

// Cloud Storage : import des fonctions
import {
  getStorage, // Obtenir le Cloud Storage
  ref, // Pour créer une référence à un fichier à uploader
  getDownloadURL, // Permet de récupérer l'adress complète d'un fichier du Storage
  uploadString, // Permet d'uploader sur le Cloud Storage une image en Base64
} from "https://www.gstatic.com/firebasejs/9.7.0/firebase-storage.js";
export default {
  components: { Bouton, IconLogo },
  props: {
    date: {
      type: String,
      required: true,
    },
  },

  data() {
    return {
      listeArtiste: [], // Liste des artistes
    };
  },
  computed: {
    artistesParDate() {
      let data = groupBy(this.listeArtiste, "date");
      //debugger;
      console.log(data);
      return Object.entries(data);
    },
  },

  mounted() {
    // Montage de la vue
    // Appel de la liste des artistes
    this.getArtiste();
  },
  methods: {
    async getArtiste() {
      // Obtenir Firestore
      const firestore = getFirestore();
      // Base de données (collection)  document artistes
      const dbArtiste = collection(firestore, "artiste");
      // Liste des artistes triés sur leur nom
      const q = query(dbArtiste, orderBy("date", "asc"));
      await onSnapshot(q, (snapshot) => {
        this.listeArtiste = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        // Récupération des images de chaque artiste
        // parcours de la liste
        this.listeArtiste.forEach(function (personne) {
          // Obtenir le Cloud Storage
          const storage = getStorage();
          // Récupération de l'image par son nom de fichier
          const spaceRef = ref(storage, "artiste/" + personne.photo);
          // Récupération de l'url complète de l'image
          getDownloadURL(spaceRef)
            .then((url) => {
              // On remplace le nom du fichier
              // Par l'url complète de la photo
              personne.photo = url;
            })
            .catch((error) => {
              console.log("erreur downloadUrl", error);
            });
        });
      });
    },
  },
};
</script>
