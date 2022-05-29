<template>
  <div class="companies-viewer">
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

<style lang="scss">
.companies-viewer {
  display: flex;

  .left {
    position: left fixed;
    width: 100%;
    height: 100vh;
    overflow: scroll;
    overflow-y: auto;
    overflow-x: hidden;
  }
  .right {
    width: 100%;
    height: 100vh;
    overflow: scroll;
    overflow-y: auto;
    overflow-x: hidden;
  }
  .selectDocument {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 100%;

  }
  ::-webkit-scrollbar {
    width: 0.3rem;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #adb5bd;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
}
</style>
