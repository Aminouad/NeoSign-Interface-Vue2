<template>
  <div style="width: 100%; overflow: auto">
    <div class="left">
      <div class="selectDocum" v-if="!selectedDocument">
          <i class="fa-solid fa-file-lines"></i>
          <h2>Sélectionner un document</h2>
      </div>
      <web-viewer v-else
       :key="key"
        :initialDoc="path"
        @is-loaded="isLoaded"
      />
    </div>
    <div class="right">
      <documents-list @select-document="selectDocument"></documents-list>
    </div>
  </div>
</template>

<script>
import WebViewer from "../../components/layout/WebViewer.vue";
import DocumentsList from "./DocumentsList.vue";

export default {
  data() {
    return {
      path: '',
      selectedDocument: undefined,
      key:0,
    };
  },
  methods:{
       selectDocument(document){
         this.selectedDocument=document;
         this.path = document.path;
         console.log(document.path);
         this.key++;
       },
       isLoaded(){
         console.log("ok");
       } 
  },
  computed:{
    pathCurrentDocument(){
      //console.log(this.selectedDocument);
      return this.selectedDocument ? this.selectedDocument.path: 'src/assets/a.pdf'

    } 
  },

  components: { WebViewer, DocumentsList },
};
</script>

<style scoped>
.left {
  float: right;
  width: 50%;
}
.right {
  float: left;
  width: 50%;
}
.selectDocum{
    text-align: center;
    margin-top: 50%;
    margin-bottom: 50%;


}
</style>
