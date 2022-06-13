<template>
      <div class="add-document">

                    <h2>Nouveau document</h2>
    <h3>Merci de bien remplir ce formulaire</h3>

      <document-form class="form-data" @save-data="saveData"></document-form>
        </div>

</template>
<script>
import DocumentForm from "../../components/Documents/DocumentForm.vue";
export default {
  components: {
    DocumentForm,
  },
  methods: {
    saveData(data) {
        
      this.$store.dispatch("documents/addDocument", data).finally(()=>{
         this.$router.replace("/Documents");
      });
      //this.$store.dispatch("documents/loadDocuments");

       // with replace we can't go back to previous page
    },
  },
};
</script>
<style scoped>

.form-data{
  width: 100%;
      display: flex;
justify-content: center;
  
}
.add-document{
    
   margin-top: 1.5%;
    display: flex;
    margin-inline: 1em;
    flex-direction: column;
    align-items: center;

    
    
}
</style>