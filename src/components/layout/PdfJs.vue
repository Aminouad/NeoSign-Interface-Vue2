<template>
  <vue-pdf-embed ref="pdfRef" :source="initialDoc" />
</template>

<script>

import VuePdfEmbed from 'vue-pdf-embed';

export default {
  name: "PdfViewer",
  props: { initialDoc: String },
    components: {
    VuePdfEmbed
  },
  created(){
    console.log(this.$refs);
    console.log(document.getElementsByClassName("vue-pdf-embed"));
  }
};
</script>

<style>

</style>