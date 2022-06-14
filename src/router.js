import { createRouter, createWebHistory } from "vue-router";
import DashboardPage from "./pages/DashboardPage.vue";
// import HomePage from './pages/HomePage.vue';
import NotFound from "./pages/NotFound.vue";
import CertificatPage from "./pages/CertificatPage.vue";

import DocumentsView from "./pages/documents/DocumentsView.vue";
// import DocumentsList from './pages/documents/DocumentsList.vue';
import DocumentEdit from "./pages/documents/DocumentEdit.vue";
import AddCompany from "./pages/companies/AddCompany.vue";
import CompanyDetails from "./pages/companies/CompanyDetails.vue";
import CompaniesView from "./pages/companies/CompaniesView.vue";
import PersonnelView from "./pages/personnel/PersonnelView.vue";
import addPersonnel from "./pages/personnel/AddPersonnel.vue";
import AddDocument from "./pages/documents/AddDocument.vue";
import HomePage from "./pages/HomePage.vue";
import UserAuth from "./pages/authentication/UserAuth.vue";
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
    { path: "/addDocument", component: AddDocument,beforeEnter: Multiguard([AuthGuard]) }
    ,
    {
      path: "/documents/:id",
      component: DocumentEdit,beforeEnter: Multiguard([AuthGuard])
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
      path: "/addCompany",
      component: AddCompany,
      beforeEnter: Multiguard([AuthGuard]),
    },
    {
      path: "/companies",
      component: CompaniesView,
      beforeEnter: Multiguard([AuthGuard]),
    },
    {
      path: "/companyDetails",
      component: CompanyDetails,
      beforeEnter: Multiguard([AuthGuard]),
    },
    {
      path: "/personnel",
      component: PersonnelView,
      beforeEnter: Multiguard([AuthGuard]),
    },
    {
      path: "/certificat",
      component: CertificatPage,
      beforeEnter: Multiguard([AuthGuard]),
    },
    {
      path: "/addPersonal",
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
