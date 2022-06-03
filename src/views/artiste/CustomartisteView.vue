<template>
  <div class="p-11 pt-28">
    <form enctype="multipart/form-data">
      <h1 class="titreh1">Mise à jour de l'artiste</h1>

      <div class="mt-6 flex flex-col gap-6">
        <img class="ml-auto mr-auto" :src="imageData" />

        <div>
          <h2 class="text-xl">Nom</h2>
          <input
            class="w-full max-w-2xl rounded-md border-2 border-red-400 bg-transparent p-1 dark:border-white"
            placeholder="Nom de la personne"
            v-model="artiste.nom"
            required
          />
        </div>

        <div>
          <h2 class="text-xl">Date</h2>
          <input
            type="date"
            class="w-full max-w-2xl rounded-md border-2 border-red-400 bg-transparent p-1 dark:border-white"
            placeholder="Date de concert"
            v-model="artiste.date"
            required
          />
        </div>

        <div>
          <h2 class="text-xl">Image</h2>
          <input
            type="file"
            class="w-full max-w-2xl rounded-md border-2 border-red-400 p-2 dark:border-white"
            ref="file"
            id="file"
            @change="previewImage"
          />
        </div>

        <div>
          <h2 class="text-xl">Catégorie</h2>

          <select class="w-full max-w-2xl rounded-md border-2 border-red-400 bg-transparent p-1 dark:border-white" v-model="artiste.cat">
            <option selected disabled>Sélectionner une catégorie</option>
            <option v-for="categorie in listeCat" :key="categorie.libelle">
              {{ categorie.libelle }}
            </option>
          </select>
        </div>
      </div>

      <div class="mt-4 flex flex-row gap-4">
        <bouton type="button" class="text-red-400" @click="updateArtiste">Modifier</bouton>
        <boutonred>
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
  name: "CustomartisteView",
  components: { Bouton, Boutonred },
  data() {
    return {
      imageData: null, // Image prévisualisée
      listeArtiste: [], // Liste des pays pour la nationalité du artiste
      listeCat: [], // Liste des pays pour la nationalité du artiste
      artiste: {
        // Le artiste à créer
        nom: "", // son nom
        cat: "", // sa catégorie
        photo: "", // sa photo (nom du fichier)
        date: "",
      },

      refArtiste: null, // Référence du artiste à modifier
      imgModifiee: false, // Indique si l'image du artiste a été modifiée, par défaut : non
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
        this.console.log("Artiste inexistant");
      }
      // Obtenir le Storage
      const storage = getStorage();
      // Référence de l'image du artiste
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
      // Mise à jour de la photo du artiste
      this.file = this.$refs.file.files[0];
      // Récupérer le nom du fichier pour la photo du artiste
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
      // Dans tous les cas on met à jour le artiste dans Firestore
      const firestore = getFirestore();
      // Modification du artiste à partir de son id
      await updateDoc(doc(firestore, "artiste", this.$route.params.id), this.artiste);
      // redirection sur la liste des artistes
      this.$router.push("/artiste");
    },
  },
};
</script>