<template>
  <div class="p-6 pt-20 sm:pt-24 lg:pt-36">
    <h1 class="titreh1">Liste des styles</h1>

    <form>
      <hr class="mt-5" />
      <div class="flex flex-col gap-3 py-5">
        <h2 class="font-Anton text-2xl">Nouveau style</h2>
        <div class="flex flex-row gap-2">
          <input
            type="text"
            class="w-full rounded-md border-2 border-red-400 bg-transparent p-2 dark:border-white"
            placeholder="Ajouter un style musical"
            v-model="libelle"
            required
          />
          <button
            class="rounded-lg bg-red-400 px-4 font-Anton text-lg uppercase lg:text-2xl"
            type="button"
            @click="createCat()"
            title="Création"
          >
            envoyer
          </button>
        </div>
      </div>

      <hr />
    </form>

    <h2 class="pt-6 font-Anton text-2xl">Liste des Catégories actuels</h2>

    <div class="flex flex-col gap-3 py-5">
      <h2 class="text-xl">Filtrage</h2>
      <div class="flex flex-row gap-2">
        <input
          type="text"
          class="w-full rounded-md border-2 border-red-400 bg-transparent p-2 dark:border-white"
          placeholder="Rechercher un style"
          v-model="filter"
        />
        <button class="rounded-lg bg-red-400 px-4 font-Anton text-lg uppercase lg:text-2xl" type="button" title="Filtrage">Filtrage</button>
      </div>
    </div>

    <form v-for="categorie in filterByName" :key="categorie.id">
      <div class="flex flex-row">
        <input type="text" class="bg-transparent font-Anton text-2xl uppercase lg:text-4xl" v-model="categorie.libelle" required />
        <PencilAltIcon class="h-5 w-5" type="button" @click="updateCat(categorie)" title="Modification" />

        <TrashIcon class="btn btn-light h-5 w-5 stroke-red-400" type="button" @click="deleteCat(categorie)" title="Suppression" />
      </div>
    </form>
  </div>
</template>

<script>
// Bibliothèque Firestore : import des fonctions
import Bouton from "../../components/icons/Bouton.vue";
import Boutonred from "../../components/icons/Boutonred.vue";
import { TrashIcon, PencilAltIcon } from "@heroicons/vue/outline";
import {
  getFirestore,
  collection,
  doc,
  addDoc,
  updateDoc,
  deleteDoc,
  onSnapshot,
} from "https://www.gstatic.com/firebasejs/9.7.0/firebase-firestore.js";

export default {
  name: "CategorieView",
  components: { Bouton, Boutonred, TrashIcon, PencilAltIcon },
  data() {
    return {
      listeCat: [], // Liste des pays - collection pays Firebase
      libelle: null, // Pour la création d'un nouveau pays
      filter: "",
    };
  },
  computed: {
    // Tri des pays par nom en ordre croissant
    orderByName: function () {
      // Parcours et tri des pays 2 à 2
      return this.listeCat.sort(function (a, b) {
        // Si le nom du pays est avant on retourne -1
        if (a.libelle < b.libelle) return -1;
        // Si le nom du pays est après on retourne 1
        if (a.libelle > b.libelle) return 1;
        // Sinon ni avant ni après (homonyme) on retourne 0
        return 0;
      });
    },
    // Filtrage de la propriété calculée de tri
    filterByName: function () {
      // On effectue le fitrage seulement si le filtre est rnseigné
      if (this.filter.length > 0) {
        // On récupère le filtre saisi en minuscule (on évite les majuscules)
        let filter = this.filter.toLowerCase();
        // Filtrage de la propriété calculée de tri
        return this.orderByName.filter(function (categorie) {
          // On ne renvoie que les pays dont le nom contient
          // la chaine de caractère du filtre
          return categorie.libelle.toLowerCase().includes(filter);
        });
      } else {
        // Si le filtre n'est pas saisi
        // On renvoie l'intégralité de la liste triée
        return this.orderByName;
      }
    },
  },
  mounted() {
    // Montage de la vue
    // Appel de la liste des pays synchronisée
    this.getCat();
  },
  methods: {
    async getCat() {
      // Obtenir Firestore
      const firestore = getFirestore();
      // Base de données (collection)  document pays
      const dbCat = collection(firestore, "categorie");
      // Liste des pays synchronisée
      const query = await onSnapshot(dbCat, (snapshot) => {
        console.log("query", query);
        //  Récupération des résultats dans listePaysSynchro
        // On utilse map pour récupérer l'intégralité des données renvoyées
        // on identifie clairement le id du document
        // les rest parameters permet de préciser la récupération de toute la partie data
        this.listeCat = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        console.log("listecat", this.listeCat);
      });
    },

    async createCat() {
      // Obtenir Firestore
      const firestore = getFirestore();
      // Base de données (collection)  document pays
      const dbCat = collection(firestore, "categorie");
      // On passe en paramètre format json
      // Les champs à mettre à jour
      // Sauf le id qui est créé automatiquement
      const docRef = await addDoc(dbCat, {
        libelle: this.libelle,
      });
      console.log("document créé avec le id : ", docRef.id);
    },

    async updateCat(categorie) {
      // Obtenir Firestore
      const firestore = getFirestore();
      // Base de données (collection)  document pays
      // Reference du pays à modifier
      const docRef = doc(firestore, "categorie", categorie.id);
      // On passe en paramètre format json
      // Les champs à mettre à jour
      await updateDoc(docRef, {
        libelle: categorie.libelle,
      });
    },

    async deleteCat(categorie) {
      // Obtenir Firestore
      const firestore = getFirestore();
      // Base de données (collection)  document pays
      // Reference du pays à supprimer
      const docRef = doc(firestore, "categorie", categorie.id);
      // Suppression du pays référencé
      await deleteDoc(docRef);
    },
  },
};
</script>

<style scoped>
</style>


