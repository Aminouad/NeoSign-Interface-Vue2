<template>
  <div class="add-personnel">
    <h3>Nouveau personnel</h3>
    <h4>Merci de bien remplir ce formulaire</h4>

    <personnel-form @save-data="saveData"></personnel-form>
  </div>
</template>
<script>
import PersonnelForm from "../../components/Personnel/PersonnelForm.vue";
export default {
  components: {
    PersonnelForm,
  },
  methods: {
    saveData(data) {
      this.$store.dispatch("personnel/addPersonnel", data).finally(() => {
        this.$store.dispatch("personnel/loadPersonnels");

        this.$router.replace("/personnel");
      });
    },
  },
};
</script>

<style scoped>
.add-personnel {
  margin-top: 2%;
    display: flex;
    margin-inline: 1em;
    flex-direction: column;
    align-items: center;
}
</style>
