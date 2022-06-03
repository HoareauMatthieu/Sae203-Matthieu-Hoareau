<template>
  <div class="p-8 pt-36">
    <div class="flex flex-row justify-between">
      <div class="flex flex-col">
        <h1 class="titreh1 p-0">Concert</h1>
        <h1 class="font-Anton text-3xl text-red-400 lg:text-4xl">23 Mars</h1>
      </div>
      <div class="flex flex-col">
        <h1 class="font-Anton text-2xl sm:text-3xl lg:text-4xl">Scène 2+3</h1>
        <h1 class="text-right font-Anton text-2xl lg:text-4xl">14h</h1>
      </div>
    </div>

    <div>
      <div class="rounded-lg p-3" v-for="[date, listeDate] in artistesParDate" :key="date">
        <h1>{{ date }}</h1>
        <div class="grid grid-cols-3 gap-2">
          <img class="w-full rounded-lg" v-for="artiste in listeDate" :key="artiste.id" :src="artiste.photo" :alt="artiste.nom" />
        </div>
      </div>
    </div>

    <h2 class="pb-5 text-center font-Anton text-2xl sm:text-3xl lg:text-6xl">À L’AFFICHE DU CONCERT</h2>
    <p class="px-12 text-center text-sm lg:px-64 lg:text-base">
      The Weeknd - DJ Snake - Leto - Naps - Jul - Lujipeka - La Fève - Freeze Corlorleone - Zola - Post Malone - Angèle - Shay + Quelques
      surprises...
    </p>
  </div>
</template>

<script>
// Bibliothèque Firestore : import des fonctions

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
  name: "CustomartisteView",
  components: { Bouton, Boutonred },
  data() {
    return {
      imageData: null, // Image prévisualisée
      listeArtiste: [], // Liste des pays pour la nationalité du participant
      listeCat: [], // Liste des pays pour la nationalité du participant
      artiste: {
        // Le participant à créer
        nom: "", // son nom
        cat: "", // sa catégorie
        photo: "", // sa photo (nom du fichier)
        date: "",
      },

      refArtiste: null, // Référence du participant à modifier
      imgModifiee: false, // Indique si l'image du participant a été modifiée, par défaut : non
      photoActuelle: null, // Photo actuelle du participant
    };
  },
  mounted() {
    // Montage de la vue
    // Récupération du id passé en paramètre
    // On utilise le id passé par la route
    // via la variable système $route de la vue
    console.log("id artiste", this.$route.params.id);
    // Recherche participant concerné
    this.getArtiste(this.$route.params.id);
    // Appel de la liste des pays
    this.getCat();
  },

  methods: {
    async getCat() {
      const firestore = getFirestore();

      const dbCat = collection(firestore, "categorie");

      const q = query(dbCat, orderBy("libelle", "asc"));

      await onSnapshot(q, (snapshot) => {
        this.listeCat = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        console.log("Liste des catégories", this.listeCat);
      });
    },

    async getArtiste(id) {
      // Obtenir Firestore
      const firestore = getFirestore();
      // Base de données (collection)  document artiste
      // Récupération sur Firestore du participant via son id
      const docRef = doc(firestore, "artiste", id);
      // Référence du participant concerné
      this.refArtiste = await getDoc(docRef);
      // Test si le participant demandé existe
      if (this.refArtiste.exists()) {
        // Si oui on récupère ses données
        this.artiste = this.refArtiste.data();
        // Mémorisation photoActuelle
        this.photoActuelle = this.artiste.photo;
      } else {
        // Sinon simple message d'erreur
        this.console.log("Artiste inexistant");
      }
      // Obtenir le Storage
      const storage = getStorage();
      // Référence de l'image du participant
      const spaceRef = ref(storage, "artiste/" + this.artiste.photo);
      // Récupération de l'url complète de l'image
      getDownloadURL(spaceRef)
        .then((url) => {
          // Mise à jour de l'image prévisualisée
          this.imageData = url;
        })
        .catch((error) => {
          console.log("erreur downloadUrl", error);
        });
    },

    previewImage: function (event) {
      // Mise à jour de la photo du participant
      this.file = this.$refs.file.files[0];
      // Récupérer le nom du fichier pour la photo du participant
      this.artiste.photo = this.file.name;
      // Si cette fonction s'exécute, c'est que l'image est modifiée
      this.imgModifiee = true;
      // Reference to the DOM input element
      // Reference du fichier à prévisualiser
      var input = event.target;
      // On s'assure que l'on a au moins un fichier à lire
      if (input.files && input.files[0]) {
        // Creation d'un filereader
        // Pour lire l'image et la convertir en base 64
        var reader = new FileReader();
        // fonction callback appellée lors que le fichier a été chargé
        reader.onload = (e) => {
          // Read image as base64 and set to imageData
          // lecture du fichier pour mettre à jour
          // la prévisualisation
          this.imageData = e.target.result;
        };
        // Demarrage du reader pour la transformer en data URL (format base 64)
        reader.readAsDataURL(input.files[0]);
      }
    },

    async updateArtiste() {
      // Si l'image a été modifiée
      if (this.imgModifiee) {
        // On supprime l'ancienne
        const storage = getStorage();
        // Référence du fichier
        let docRef = ref(storage, "artiste/" + this.photoActuelle);
        // Suppression photo actuelle
        deleteObject(docRef);
        // création nouvelle photo
        // Référence de l'image à uploader
        docRef = ref(storage, "artiste/" + this.artiste.photo);
        await uploadString(docRef, this.imageData, "data_url").then((snapshot) => {
          console.log("Uploaded a base64 string", this.artiste.photo);
        });
      }
      // Dans tous les cas on met à jour le participant dans Firestore
      const firestore = getFirestore();
      // Modification du participant à partir de son id
      await updateDoc(doc(firestore, "artiste", this.$route.params.id), this.artiste);
      // redirection sur la liste des participants
      this.$router.push("/artiste");
    },
  },
};
</script>