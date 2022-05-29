<template>

  <div class="edit-document">
    
      <h2>Modifer Mon Document  </h2>
      <document-edit-form @save-data="saveData"></document-edit-form>
  </div>
</template>
<script>
import DocumentEditForm from "../../components/Documents/DocumentEditForm.vue";
export default {
  components: {
    DocumentEditForm,
  },
  created(){
      console.log(this.$route.params.document);
      }
  ,
  methods: {
    saveData(data) {
        
      this.$store.dispatch("documents/editDocument", data);
      //this.$store.dispatch("documents/loadDocuments");

      this.$router.replace("/Documents"); // with replace we can't go back to previous page
    },
  },
};
</script>
<style scoped>
.edit-document{
    margin-inline: 1em;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    align-items: center;
    width: 100vh;
    height: 100vh;
    
}
</style>