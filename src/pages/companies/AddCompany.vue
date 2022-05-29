 
 
 <template>
     <div class="add-company">
         <h2>Ajouter une Société</h2>
         <company-form @save-data="saveData"></company-form>
         </div>
 </template>
 <script>
     import CompanyForm from '../../components/Companies/CompanyForm.vue';
 export default {
     components: {
         CompanyForm
     },
     methods: {
         saveData(data) {
         this.$store.dispatch('companies/addCompany',data);
          
         }
     }
 }
 </script>
 
 
 <style scoped>
.add-company{
    margin-inline: 1em;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    
}
</style>