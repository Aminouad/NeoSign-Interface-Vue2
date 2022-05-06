 <template>
     <section>
         <base-card>
         <h2>Ajouter une Société</h2>
         <societe-form @save-data="saveData"></societe-form>
         </base-card>
     </section>
 </template>
 <script>
     import SocieteForm from '../../components/Societes/SocieteForm.vue';
 export default {
     components: {
         SocieteForm
     },
     methods: {
         saveData(data) {
         this.$store.dispatch('societes/addSociete',data);

         }
     }
 }
 </script>