<template>
  <div class="pt-28 p-11">
    <form enctype="multipart/form-data" >
      
       
          <h1 class="titreh1">Mise à jour participant</h1>
        

        
          
            <div class="flex flex-col gap-6 mt-6">
              
                <img class="ml-auto mr-auto" :src="imageData" />
           
          

            
       
               
                  <div>
                      <h2 class="text-xl">Nom</h2>      
                     <input class=" p-1 border-2 border-white bg-transparent rounded-sm w-1/3" placeholder="Nom de la personne" v-model="artiste.nom" required />
                  </div>
          
 

                
                  <div>
                      <h2 class="text-xl">Image</h2>
                      <input type="file" class="custom-file-input" ref="file" id="file" @change="previewImage" />
                  </div>


           
              
             
       
              
               
                  <div>
                      <h2 class="text-xl">Catégorie</h2>
                             
                    <select class="p-1 border-2 border-white bg-transparent rounded-sm w-1/3" v-model="artiste.cat">
                      <option selected disabled>Sélectionner une catégorie</option>
                      <option v-for="categorie in listeCat" :key="categorie.libelle">
                        {{ categorie.libelle }}
                      </option>
                     </select>
                  </div>
            </div>
    
           
       
       
<div class="flex flex-row gap-4 mt-4">
        
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
  components: { Bouton, Boutonred},
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