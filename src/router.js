import { createRouter, createWebHistory } from "vue-router"; 

import DashboardPage from './pages/DashboardPage.vue';
// import HomePage from './pages/HomePage.vue';
import NotFound from './pages/NotFound.vue';
import AddDocument from './pages/documents/AddDocument.vue';
import SignDocument from './pages/documents/SignDocument.vue';
import DocumentsList from './pages/documents/DocumentsList.vue';
import DocumentDetails from './pages/documents/DocumentDetails.vue';




const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', redirect: '/documents' /* component: HomePage */}, //home
        { path: '/documents', component: DocumentsList},
        { path: '/documents/:id', component: DocumentDetails,/*  children: [
           { path: 'details', component:null}, 
        ] */},
        { path: '/signDocument', component: SignDocument},
        { path: '/addDocument', components: AddDocument },
        { path: '/dashboard', component: DashboardPage},
        { path: '/:notFound(.*)', component: NotFound},

    ]
});

export default router;