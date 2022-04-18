import { createStore } from "vuex";
import documentsModule from './modules/documents/index.js'
const store= createStore({
    modules:{
        documents:documentsModule
    }
});

export default store;