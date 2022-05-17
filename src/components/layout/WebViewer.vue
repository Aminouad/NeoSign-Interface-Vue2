<template>

  <div  id="webviewer" ref="viewer"></div>

</template>

<script>
import { ref, onMounted, } from "vue";

import WebViewer from "@pdftron/webviewer";
export default {

  name: "WebViewer",
  props: { initialDoc: { type: String } },
  setup(props) {
    const viewer = ref(null);
    onMounted(() => {
      const path = `${import.meta.env.BASE_URL}webviewer`;
      WebViewer({ path, initialDoc: props.initialDoc }, viewer.value).then(
        (instance) => {

          const { documentViewer } =
            instance.Core;
          documentViewer.addEventListener("documentLoaded", () => {
            

          });
        }
      );
    });
    return {
      viewer,
    };
  },
 
};
</script>

<style>
#webviewer {
  
  height: 100vh;
}
.loader {
  border: 16px solid #f3f3f3; /* Light grey */
  border-top: 16px solid #3498db; /* Blue */
  border-radius: 50%;
  width: 120px;
  height: 120px;
  animation: spin 2s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>