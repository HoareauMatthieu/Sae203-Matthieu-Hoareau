import { createRouter, createWebHistory } from 'vue-router'
import AccueilView from '../views/AccueilView.vue'
import ArtisteView from '../views/ArtisteView.vue'
import ProgrammeView from '../views/ProgrammeView.vue'
import FestivalView from '../views/FestivalView.vue'
import ContactView from '../views/ContactView.vue'
import ConcertView from '../views/ConcertView.vue'
import FocusView from '../views/FocusView.vue'
import MentionsView from '../views/MentionsView.vue'
import GdsView from '../views/GdsView.vue'
import P404View from '../views/P404View.vue'
import CreateartisteView from '../views/CreateartisteView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'Accueil', component: AccueilView },
    { path: '/artiste', name: 'Artiste', component: ArtisteView },
    { path: '/programme', name: 'Programme', component: ProgrammeView },
    { path: '/festival', name: 'Festival', component: FestivalView },
    { path: '/contact', name: 'Contact', component: ContactView },
    { path: '/concert', name: 'Concert', component: ConcertView },
    { path: '/focus', name: 'Focus', component: FocusView },
    { path: '/mentions', name: 'Mentions', component: MentionsView },
    { path: '/style-guide', name: 'style-guide', component: GdsView },
    { path: '/create-art', name: 'create-artiste', component: CreateartisteView },
    {
      path: '/:pathMatch(.*)*',
      name: 'page404',
      component: P404View
    },
    // ici les autre routes
  ]
})

export default router
