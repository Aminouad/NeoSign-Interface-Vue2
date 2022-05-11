import { createStore } from "vuex";
import documentsModule from './modules/documents/index.js'
import societesModule from './modules/societes/index.js'
import personnelsModule from './modules/personnels/index.js'
import authModule from './modules/auth/index.js'
const store= createStore({
    modules:{
        documents:documentsModule,
        societes:societesModule,
        personnels:personnelsModule,
        auth:authModule
    }
});

export default store;