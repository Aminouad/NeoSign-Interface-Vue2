 <template>
     <section>
         <base-card>
         <h2>Ajouter un Personnel</h2>
         <personnel-form @save-data="saveData"></personnel-form>
         </base-card>
     </section>
 </template>
 <script>
     import PersonnelForm from '../../components/Personnels/PersonnelForm.vue';
 export default {
     components: {
         PersonnelForm
     },
     methods: {
         saveData(data) {
         this.$store.dispatch('personnels/addPersonnel',data);

         }
     }
 }
 </script>