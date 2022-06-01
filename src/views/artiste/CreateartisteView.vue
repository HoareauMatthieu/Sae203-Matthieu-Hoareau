<template>
  <div class="pt-28 p-11">
    <form enctype="multipart/form-data">
      <div class="">
        
          <h1 class="titreh1">Création participant</h1>

                      <div class="flex flex-col gap-6 mt-6">
                        <img class="ml-auto mr-auto" :src="imageData" />
                        
                        <div>
                          <h2 class="text-xl">Nom</h2>
                          <input class=" p-1 border-2 border-white bg-transparent rounded-sm w-1/3"  placeholder="Nom de la personne" v-model="artiste.nom" required />
                        </div>
                        
                        
                        
                         <div>
                           <h2 class="text-xl">Image</h2>
                            <input  type="file"  ref="file" id="file" @change="previewImage" />
                         </div>
                        
                        
                        
                        
                        
                          <div>
                            <h2 class="text-xl">Catégorie</h2>
                        
                            <select class=" p-1 border-2 border-white bg-transparent rounded-sm w-1/3" v-model="artiste.cat">
                            <option selected disabled>Sélectionner une catégorie</option>
                            <option   v-for="categorie in listeCat" :key="categorie.libelle">
                              {{ categorie.libelle }}
                            </option>
                            </select>
                          </div>
                      </div>
                   


                 <div>
                  

                 </div>
                
                           
            
              
          

        <div >

          <div class="flex flex-row gap-4 mt-4">
            <bouton type="button" class="text-red-400" @click="createArtiste" >Creer</bouton>
            <boutonred>
              <router-link to="/artiste">Cancel</router-link>
            </boutonred>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import Bouton from "../../components/icons/Bouton.vue";
import Boutonred from "../../components/icons/Boutonred.vue";
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
  name: "CreateartisteView",
  components: { Bouton, Boutonred},
  data() {
    return {
      imageData: null, // Image prévisualisée
      listeCat: [], // Liste des categorie pour l'artiste
      artiste: {
        // L'artiste' à créer
        nom: null, // son nom
        photo: null, // sa photo (nom du fichier)
        cat: null, // sa catégorie
      },
    };
  },
  mounted() {
    // Montage de la vue
    // Appel de la liste des catégorie
    this.getCat();
  },
  methods: {
    async getCat() {
      // Obtenir Firestore
      const firestore = getFirestore();
      // Base de données (collection)  document categorie
      const dbCat = collection(firestore, "categorie");
      // Liste des participants triés
      // query permet de faire une requête sur Firebase
      // notement pour filtrer, trier ... des données
      //orderBy permet de préciser sur quel élément trier, et dans quel ordre
      // ici le nom des catégories par ordre croissant (asc)
      const q = query(dbCat, orderBy("libelle", "asc"));
      // Récupération de la liste des catégorie à partir de la query
      // La liste est synchronisée
      await onSnapshot(q, (snapshot) => {
        this.listeCat = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        console.log("Liste des catégories", this.listeCat);
      });
    },


  previewImage: function (event) {
    // Mise à jour de la photo de l'artiste
    this.file = this.$refs.file.files[0];
    // Récupérer le nom du fichier pour la photo de l'artiste
    this.artiste.photo = this.file.name;
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
  async createArtiste() {
    // Obtenir storage Firebase
    const storage = getStorage();
    // Référence de l'image à uploader
    const refStorage = ref(storage, "artiste/" + this.artiste.photo);
    // Upload de l'image sur le Cloud Storage
    await uploadString(refStorage, this.imageData, "data_url").then((snapshot) => {
      console.log("Uploaded a base64 string");

      // Création de l'artiste sur le Firestore
      const db = getFirestore();
      const docRef = addDoc(collection(db, "artiste"), this.artiste);
    });
    // redirection sur la liste des  artistes
    this.$router.push("/artiste");
  },
  
}
  }
</script>
