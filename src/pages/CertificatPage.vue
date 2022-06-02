<template>
      <div class="add-document">

<h3>Mon certificat</h3>
         <h4>Merci d'ajouter votre certificat</h4>
      <certificat-form class="form-data" @save-data="saveData"></certificat-form>
        </div>

</template>
<script>
import CertificatForm from "../components/Documents/CertificatForm.vue";
export default {
  components: {
    CertificatForm,
  },
  methods: {
    saveData(data) {
        
      this.$store.dispatch("certificate/addCertificate", data);

      this.$router.replace("/Documents"); // with replace we can't go back to previous page
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
   margin-top: 4%;
    display: flex;
    margin-inline: 1em;
    flex-direction: column;
    align-items: center;
    
    
}
</style>