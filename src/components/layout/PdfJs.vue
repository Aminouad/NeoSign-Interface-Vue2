
<template id="temp">
<div id="app">
  <div class="app-header">
<div  v-if="isLoading" >      Loading...
</div>
<div v-else>
        <div class="top">

  <span v-if="showAllPages">
        {{ pageCount }} page(s)
      </span>

      <span v-else>
        <button :disabled="page <= 1" @click="page--">❮</button>

        {{ page }} / {{ pageCount }}

        <button :disabled="page >= pageCount" @click="page++">❯</button>
      </span>

      <label >
        <input v-model="showAllPages" type="checkbox">

        Afficher Tous les pages
      </label>
            </div>

</div>
<div class="app-content">
  <vue-pdf-embed  @rendered="handleDocumentRender" :page="page" ref="pdfRef" :source="initialDoc" />
  </div>
   </div>
</div>
</template>

<script>

import VuePdfEmbed from 'vue-pdf-embed';

export default {
  name: "PdfViewer",
  props: { initialDoc: String },
    components: {
    VuePdfEmbed
  },data() {
    return {
      isLoading: true,
      page: null,
      pageCount: 1,
      showAllPages: true,
    }
  },
  watch: {
    showAllPages() {
      this.page = this.showAllPages ? null : 1
    },
  },
  methods: {
    handleDocumentRender() {
      this.isLoading = false
      this.pageCount = this.$refs.pdfRef.pageCount
    },
    handlePasswordRequest(callback, retry) {
      callback(prompt(retry
        ? 'Enter password again'
        : 'Enter password'
      ))
    },
  }
  
  ,created(){
    console.log(this.$refs);
    console.log(document.getElementsByClassName("vue-pdf-embed"));
  }
};
</script>

<style scoped>

.top {
border: 0.1px double #32a1ce; 
border-radius: 3% ;
}

.vue-pdf-embed > div {
  margin-bottom: 8px;
  box-shadow: 0 2px 8px 4px rgba(139, 134, 134, 0.116);
}

.app-header {
  
  box-shadow: 0 2px 8px 4px rgba(0, 0, 0, 0.214);
}

.app-content {
  padding: 24px 16px;
    border: solid rgba(33, 33, 33, 0.477) 0.1rem ;
      color: rgba(202, 192, 192, 0.5);
  background-color: rgb(228, 228, 228);

}

.right {
  display: flex;
  position: fixed;
}

</style>