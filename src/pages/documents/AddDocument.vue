<template>
      <div class=".add-document">

      <h2></h2>

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
    margin: 8rem;
    display: flex;
    
    
}
</style>