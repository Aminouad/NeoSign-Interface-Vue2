import { createRouter, createWebHistory } from "vue-router";
import DashboardPage from "./pages/DashboardPage.vue";
// import HomePage from './pages/HomePage.vue';
import NotFound from "./pages/NotFound.vue";
import DocumentsView from "./pages/documents/DocumentsView.vue";
import SignDocument from "./pages/documents/SignDocument.vue";
// import DocumentsList from './pages/documents/DocumentsList.vue';
import DocumentDetails from "./pages/documents/DocumentDetails.vue";
import AddSociete from "./pages/societe/AddSociete.vue";
import SocieteDetails from "./pages/societe/SocieteDetails.vue";
import SocieteList from "./pages/societe/SocieteList.vue";
import PersonnelsList from "./pages/personnels/PersonnelsList.vue";
import addPersonnel from "./pages/personnels/addPersonnel.vue";
import AddDocument from "./pages/documents/AddDocument.vue";
import HomePage from "./pages/HomePage.vue";
import UserAuth from "./pages/auth/UserAuth.vue";
import Multiguard from "vue-router-multiguard";
import AuthGuard from "./middlewares/AuthGuard";
import GuestGuard from "./middlewares/GuestGuard";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: HomePage,
      beforeEnter: Multiguard([AuthGuard]),
    },
    { path: "/addDocument", component: AddDocument },
    {
      path: "/documents/:id",
      component: DocumentDetails,
    },
    {
      path: "/signDocument",
      component: SignDocument,
      beforeEnter: Multiguard([AuthGuard]),
    },
    {
      path: "/documents",
      component: DocumentsView,
      beforeEnter: Multiguard([AuthGuard]),
    },
    {
      path: "/dashboard",
      component: DashboardPage,
      beforeEnter: Multiguard([AuthGuard]),
    },
    {
      path: "/:notFound(.*)",
      component: NotFound,
      beforeEnter: Multiguard([AuthGuard]),
    },
    {
      path: "/addSociete",
      component: AddSociete,
      beforeEnter: Multiguard([AuthGuard]),
    },
    {
      path: "/societes",
      component: SocieteList,
      beforeEnter: Multiguard([AuthGuard]),
    },
    {
      path: "/societeDetails",
      component: SocieteDetails,
      beforeEnter: Multiguard([AuthGuard]),
    },
    {
      path: "/personnels",
      component: PersonnelsList,
      beforeEnter: Multiguard([AuthGuard]),
    },
    {
      path: "/addPersonnel",
      component: addPersonnel,
      beforeEnter: Multiguard([AuthGuard]),
    },
    {
      path: "/authentication",
      component: UserAuth,
      beforeEnter: Multiguard([GuestGuard]),
    },
  ],
});

export default router;
