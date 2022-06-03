<template>
  <div class="p-11 pt-28">
    <form enctype="multipart/form-data">
      <h1 class="titreh1">Mise à jour participant</h1>

      <div class="mt-6 flex flex-col gap-6">
        <img class="ml-auto mr-auto" :src="photoActuelle" />

        <div>
          <h2 class="text-xl">Nom</h2>
          <input
            class="w-full max-w-2xl rounded-sm border-2 border-white bg-transparent p-1"
            placeholder="Nom de la personne"
            v-model="artiste.nom"
            disabled
          />
        </div>
        <div>
          <h2 class="text-xl">Date</h2>
          <input
            type="date"
            class="w-full max-w-2xl rounded-sm border-2 border-white bg-transparent p-1"
            placeholder="date de concert"
            v-model="artiste.date"
            disabled
          />
        </div>

        <div>
          <h2 class="text-xl">Catégorie</h2>
          <input class="w-full max-w-2xl rounded-sm border-2 border-white bg-transparent p-1" v-model="artiste.cat" disabled />
        </div>

        <h2 class="text-sm" role="alert">Attention vous allez supprimer cet artiste, cette action est irréversible !!</h2>
      </div>

      <div class="mt-4 flex flex-row gap-4">
        <bouton type="button" class="text-red-400" @click="deleteArtiste">Supprimer</bouton>
        <boutonred class="btn btn-dark">
          <RouterLink to="/artiste">Cancel</RouterLink>
        </boutonred>
      </div>
    </form>
  </div>
</template>

<script>
// Bibliothèque Firestore : import des fonctions
import Bouton from "../../components/icons/Bouton.vue";
import Boutonred from "../../components/icons/Boutonred.vue";
import {
  getFirestore,
  collection,
  doc,
  getDoc,
  getDocs,
  addDoc,
  updateDoc,
  setDoc,
  deleteDoc,
  onSnapshot,
  query,
  orderBy,
} from "https://www.gstatic.com/firebasejs/9.7.0/firebase-firestore.js";

// Storage
import {
  getStorage,
  ref,
  getDownloadURL,
  uploadBytes,
  uploadString,
  deleteObject,
  listAll,
} from "https://www.gstatic.com/firebasejs/9.7.0/firebase-storage.js";

export default {
  name: "DeleteartisteView",
  components: { Bouton, Boutonred },
  data() {
    return {
      artiste: {
        // Le artiste à créer
        nom: null, // son nom
        cat: null, // son nom
        photo: null, // sa photo (nom du fichier)
        date: null,
      },

      refArtiste: null, // Référence du artiste à modifier
      photoActuelle: null, // Photo actuelle du artiste
    };
  },
  mounted() {
    // Montage de la vue
    // Récupération du id passé en paramètre
    // On utilise le id passé par la route
    // via la variable système $route de la vue
    console.log("id artiste", this.$route.params.id);
    // Recherche artiste concerné
    this.getArtiste(this.$route.params.id);
  },

  methods: {
    async getArtiste(id) {
      // Obtenir Firestore
      const firestore = getFirestore();
      // Base de données (collection)  document artiste
      // Récupération sur Firestore du artiste via son id
      const docRef = doc(firestore, "artiste", id);
      // Référence du artiste concerné
      this.refArtiste = await getDoc(docRef);
      // Test si le artiste demandé existe
      if (this.refArtiste.exists()) {
        // Si oui on récupère ses données
        this.artiste = this.refArtiste.data();
        // Mémorisation photoActuelle
        this.photoActuelle = this.artiste.photo;
      } else {
        // Sinon simple message d'erreur
        this.console.log("artiste inexistant");
      }
      // Obtenir le Storage
      const storage = getStorage();
      // Référence de l'image du artiste
      const spaceRef = ref(storage, "artiste/" + this.artiste.photo);
      // Récupération de l'url complète de l'image
      getDownloadURL(spaceRef)
        .then((url) => {
          // Mise à jour de l'image prévisualisée
          this.photoActuelle = url;
        })
        .catch((error) => {
          console.log("erreur downloadUrl", error);
        });
    },

    async deleteArtiste() {
      const firestore = getFirestore();
      // Suppresion du artiste
      await deleteDoc(doc(firestore, "artiste", this.$route.params.id));

      // Suppresson de l'image
      const storage = getStorage();
      // Référence du fichier de la photo
      let docRef = ref(storage, "artiste/" + this.artiste.photo);
      // Suppression du fichier
      deleteObject(docRef);

      // redirection sur la liste des artistes
      this.$router.push("/artiste");
    },
  },
};
</script>