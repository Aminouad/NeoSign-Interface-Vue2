<template>
  <div class="personnel-viewer">
    <h3>Liste des Personnelles </h3>
    <personnel-list></personnel-list>
  </div>
</template>

<script>
import PersonnelList from "../../components/Personnel/PersonnelList.vue";
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
    PersonnelList,
  },
};
</script>

<style lang="scss" scoped>
.personnel-viewer {
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
