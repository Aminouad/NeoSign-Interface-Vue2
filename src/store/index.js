import { createStore } from "vuex";
import documentsModule from './modules/documents/index.js'
import societesModule from './modules/societes/index.js'
import personnelsModule from './modules/personnels/index.js'

const store= createStore({
    modules:{
        documents:documentsModule,
        societes:societesModule,
        personnels:personnelsModule
    }
});

export default store;