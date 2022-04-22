import  mutations  from './mutations.js';
import actions from './actions.js';
import getters from './getters.js';
export default {
    namespaced:true,
   state() {
       return {
        societes: [
            {
                id: 's1',
                name: "ATB",
                contact: 'contact@atb.tn',
                areas: ['activé'],
                description:
                  "lorem lipsum  ",
                date: '01/04/2022'
              },
              {
                id: 's2',
                name: 'Assurance ',
                contact: 'contact@assurance.com',
                areas: ['expiré'],
                description:
                  'lorem',
                date: '08/04/2022'
              },
              {
                id: 's3',
                name: 'Agence nationale',
                contact: 'contact@agence.com',
                areas: ['activé'],
                description:
                  'lorem lipsum',
                date: '08/04/2022'
              }
           ]
       }
   },
   mutations,     //mutations: mutations we can use a shorten form because we have the same names
   actions,
   getters
};