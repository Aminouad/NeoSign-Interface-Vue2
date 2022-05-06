<template>
  <section>
  </section>
  <section>
    <base-card>
        <h3>Mes Documents :</h3>

      <div class="controls">
        <base-button mode="outline">Refresh</base-button>
        <div class="search">
          <input  type="text" v-model="search" placeholder="Search" /> <br />
          <br />
        </div>
        <base-button link to="/addDocument">Ajouter un document</base-button>
      </div>

      <ul v-if="hasDocuments">
        <document-item
          v-for="document in filteredDocuments"
          :key="document.id"
          :document="document"
          @show-document="showDocument"
        ></document-item>
      </ul>
      <h3 v-else>Aucun document trouvé</h3>
    </base-card>
  </section>
</template>

<script>
import DocumentItem from "./DocumentItem.vue";
export default {
  emits: ["select-document"],
  data() {
    return {
      search: "",
    };
  },

  components: { DocumentItem },
  computed: {
    filteredDocuments() {
      return this.$store.getters["documents/documents"].filter((p) => {
        // return true if the product should be visible

        // in this example we just check if the search string
        // is a substring of the product name (case insensitive)
        return p.name.toLowerCase().indexOf(this.search.toLowerCase()) != -1;
      });
    },
    hasDocuments() {
      return this.$store.getters["documents/hasDocuments"];
    },
  },
  methods: {
    showDocument(document) {
      this.$emit("select-document", document);
    },
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
.search {
  margin-left: auto;
  margin-right: auto;
  margin-bottom: -10%;
}

.controls {
  display: flex;
  justify-content: space-between;
}
 input:focus { 
        outline: none !important;
        border-color: #00B1B2;
    }
    
</style>
