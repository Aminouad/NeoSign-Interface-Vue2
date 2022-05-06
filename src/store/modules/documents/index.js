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
                type:'PDF',
                owner: 'RH',
                areas: ['non-signé',],
                description:
                  "Contrat de travail CDI à signé ",
                date: '01/04/2022',
                path:'src/assets/a.pdf'
              },
              {
                id: 'd2',
                name: 'Contrat de partenariat',
                type:'XML',
                owner: 'PDG',
                areas: ['signé'],
                description:
                  'Contrat de partenariat avec la banque centrale',
                date: '08/04/2022',
                path:'src/assets/b.pdf'

              },
              {
                id: 'd3',
                name: 'Demande de congé',
                type:'PDF',
                owner: 'Chef de Projet',
                areas: ['signé'],
                description:
                  'Demande de congé ',
                date: '08/04/2022',
                path:'src/assets/b.pdf'

              }
           ]
       }
   },
   mutations,     //mutations: mutations we can use a shorten form because we have the same names
   actions,
   getters
};