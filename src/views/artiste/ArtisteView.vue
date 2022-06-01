<template>
  <div class=" lg:pt-32 pt-24 p-8">
<div class="flex flex-row gap-10 justify-between">
<TrashIcon class="w-11"/><router-link to="/create-art"><bouton class="text-red-400 text-sm sm:text-2xl">Ajouter un artiste</bouton></router-link></div>
        
 
  



              <div class=" grid grid-flow-row-dense lg:grid-cols-[repeat(auto-fit,minmax(200px,1fr))] sm:grid-cols-[repeat(auto-fit,minmax(150px,1fr))] grid-cols-[repeat(auto-fit,minmax(100px,1fr))] gap-3">
              <div v-for="artiste in listeArtiste" :key="artiste.id">
                  <img class="rounded-xl w-full" :src="artiste.photo" :alt="artiste.nom"/>
                  <div class="flex flex-col justify-center">
                    <p class="font-Anton text-center text-base lg:text-3xl text-red-400 dark:text-white sm:text-2xl">{{ artiste.nom }}</p>
                    
                      <router-link :to="{ name: 'custom-artiste', params: { id: artiste.id } }"><div class="flex flex-row justify-center"><PencilAltIcon class="h-5"/><PencilAltIcon class="h-5"/></div></router-link>
                   
                  </div>
              </div>
              </div>
           

             
   
  </div>

</template>

<script>

import Bouton from "../../components/icons/Bouton.vue";
import { TrashIcon, PencilAltIcon } from "@heroicons/vue/outline";


// Bibliothèque Firestore : import des fonctions
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
  name: "ArtisView",
   components: { Bouton,TrashIcon,PencilAltIcon },
  data() {
    return {
      listeArtiste: [], // Liste des artistes
    };
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
      const q = query(dbArtiste, orderBy("nom", "asc"));
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





