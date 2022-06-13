<template>
  <div class="companies-viewer">
    <h3>Liste des sociétés </h3>
    <companies-list></companies-list>
  </div>
</template>

<script>
import CompaniesList from "../../components/Companies/CompaniesList.vue";
//import PdfJs from '../../components/layout/PdfJs.vue';

export default {
  data() {
    return {
      path: "",
      selectedDocument: undefined,
      key: 0,
    };
  },

  components: {
    CompaniesList,
  },
};
</script>

<style lang="scss" scoped>
.companies-viewer {
  display: flex;
  flex-direction: column;
}
h3 {
  display: flex;
  justify-content: start;
  color: #00b1b2;
  margin-left: 2%;
}
</style>
