import  mutations  from './mutations.js';
import actions from './actions.js';
import getters from './getters.js';
export default {
    namespaced:true,
   state() {
       return {
        personnels: [
            {
                id: 'p1',
                name: "Ouadrani Amine",
                email: "amine@neoledge.com",
                position: 'RH',
                areas: ['expiré'],
                date: '01/04/2022'
              },
              {
                id: 'p2',
                name: "Salah Yassine",
                email: "yassine@neoledge.com",
                position: 'CTO',
                areas: ['activé'],
                date: '01/04/2022'
              },
              {
                id: 'p3',
                name: "Ben Gaied Hamza",
                email: "hamza@neoledge.com",
                position: 'Chef de projet',
                areas: ['activé'],
                date: '01/04/2022'
              }
           ]
       }
   },
   mutations,     //mutations: mutations we can use a shorten form because we have the same names
   actions,
   getters
};