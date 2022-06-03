<template>
  <div class="p-8 pt-36">
    <img class="ml-auto mr-auto w-1/5 rounded-lg" :src="imageData" />
    <h1 class="titreh1 pt-9 text-left">{{ artiste.nom }}</h1>
    <p class="py-5 text-2xl uppercase text-red-400">{{ artiste.cat }}</p>
    <h2 class="titreh2 pt-3 font-Anton"><span class="text-red-400">NEXT</span>-GEN</h2>
    <p class="py-5 text-base">
      Le rappeur Toulousain de 25 ans à réussi à force de travail et d’acharnement à s’imposer comme l’une des étoile montante du milieu de
      la musique urbaine, personnage haut en couleur et musique unique de part son aspect cybernétique, Jey à réussit le paris et possède
      une communauté de fan de plus en plus grande.
    </p>
    <p class="py-5 text-base">
      Dans ses textes, des thèmes différents sont abordé tel que le lien entre l’homme et la machine ou sa place en tant qu’artiste dans ce
      monde.
    </p>
    <h2 class="titreh2 pt-3">COUTEAUX <span class="text-red-400">SUISSE</span> ?</h2>
    <p class="py-5 text-base">
      Artiste mélancolique, Laylow n’hésite cependant pas à élargir son éventail et propose autant des son triste que des son plus énergique
      et dansant. Réelle artiste contemporrain, Laylow renouvelle la musique en France en lui apportant une vague de fraicheur américaine et
      des sonorités très particulière qui font de cette artiste un “OVNI” de la scène francophone.
    </p>
    <h2 class="titreh2 pt-3">DES <span class="text-red-400">STUDIOS</span> À LA <span class="text-red-400">SCÈNE</span></h2>
    <p class="py-5 text-base">
      Pendant très longtemps le rappeur ne s’est pas produit sur scène, néanmoins, ces derniers temps Laylow à pris gouts à cette activité
      et n’hésite plus à remplir des Bercy et des festivales.
    </p>
    <p class="py-5 text-base">
      Artiste à l’ésthétique unique, ses représentation sont des tour de force visuel et ce dernier s’insipire des plus grand sur scène tel
      que Kanye West afin de proposer un spectacle à coupé le souffle.
    </p>
    <p class="py-5 text-base">
      Artiste complet à l’univers poussé, Laylow est l’un des artistes présents au Red Spring Festival à suivre absolument !
    </p>

    <h3 class="py-6 text-center font-Anton text-3xl sm:text-4xl lg:text-5xl">Laylow se produira le 23 mars à 15h30 sur la Scène 2</h3>
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
  name: "FocusView",

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