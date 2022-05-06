 <template>
     <section>
         <base-card>
         <h2>Ajouter un Document</h2>
         <document-form @save-data="saveData" ></document-form>
         </base-card>
     </section>
 </template>
 <script>
     import DocumentForm from '../../components/Documents/DocumentForm.vue';
 export default {
     components: {
         DocumentForm
     },
     methods: {
         saveData(data) {
         this.$store.dispatch('documents/addDocument',data);

         }
     }
 }
 </script>