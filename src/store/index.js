import { createStore } from "vuex";
import certificateModule from './modules/certificate/index.js'
import documentsModule from './modules/documents/index.js'
import companiesModule from './modules/companies/index.js'
import personnelModule from './modules/personnel/index.js'
import authenticationModule from './modules/authentication/index.js'
const store= createStore({
    modules:{
        documents:documentsModule,
        companies:companiesModule,
        personnel:personnelModule,
        authentication:authenticationModule,
        certificate:certificateModule
    }
});

export default store;