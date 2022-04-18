import  mutations  from './mutations.js';
import actions from './actions.js';
import getters from './getters.js';
export default {
    namespaced:true,
   state() {
       return {
           documents: [
            {
                id: 'd1',
                name: "Contrat Ouadrani Amine",
                owner: 'RH',
                areas: ['entrant', 'non-signé',],
                description:
                  "Contrat de travail CDI à signé ",
                date: '01/04/2022'
              },
              {
                id: 'd2',
                name: 'Contrat de partenariat',
                owner: 'PDG',
                areas: ['sortant', 'signé'],
                description:
                  'Contrat de partenariat avec la banque centrale',
                date: '08/04/2022'
              },
              {
                id: 'd3',
                name: 'Demande de congé',
                owner: 'Chef de Projet',
                areas: ['sortant', 'signé'],
                description:
                  'Demande de congé ',
                date: '08/04/2022'
              }
           ]
       }
   },
   mutations,     //mutations: mutations we can use a shorten form because we have the same names
   actions,
   getters
};