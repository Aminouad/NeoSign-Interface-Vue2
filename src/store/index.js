import { createStore } from "vuex";
import certificateModule from './modules/certificate/index.js'
import documentsModule from './modules/documents/index.js'
import companiesModule from './modules/companies/index.js'
import personnelsModule from './modules/personnels/index.js'
import authModule from './modules/auth/index.js'
const store= createStore({
    modules:{
        documents:documentsModule,
        companies:companiesModule,
        personnels:personnelsModule,
        auth:authModule,
        certificate:certificateModule
    }
});

export default store;