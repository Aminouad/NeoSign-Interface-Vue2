<template>
  <div class="document-viewer">
    <div class="left">
      <documents-list @select-document="selectDocument"></documents-list>
    </div>
    <div class="right">
      <div class="selectDocum" v-if="!selectedDocument">
        <i class="fa-solid fa-file-lines"></i>
        <h2>Sélectionner un document</h2>
      </div>
      <web-viewer
        class="viewer"
        v-else
        :key="key"
        :initialDoc="path"
      />
    </div>
  </div>
</template>

<script>
import WebViewer from "../../components/layout/WebViewer.vue";
import DocumentsList from "../../components/Documents/DocumentsList.vue";
//import PdfJs from '../../components/layout/PdfJs.vue';

export default {
  data() {
    return {
      path: "",
      selectedDocument: undefined,
      key: 0,
    };
  },
  methods: {
    selectDocument(document) {
      this.selectedDocument = document;
      this.path = `https://localhost:7043/${document.path}`;
      //console.log(`https://localhost:7043/${document.path}`);
      this.key++;
    },
    isLoaded() {
      //console.log("ok");
    },
  },
  

  components: { //PdfJs,
  WebViewer, 
  DocumentsList },
};
</script>

<style lang="scss">
.document-viewer {
  display: flex;

  .left {
    width: 100%;
    height: 100%;
  }
  .right {
    width: 100%;
    height: 100%;
  }
  .selectDocum {
    display: flex;
    right: 0%;
    left: 100%;
    bottom: 50%;
    left: 50%;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    position: fixed;
  }
}
</style>
