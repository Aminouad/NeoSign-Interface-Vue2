<template>
    <section>
      Filter        
    </section>
    <section>
          <base-card>

      <div class="controls" >
      <base-button mode="outline">Refresh</base-button>
        <base-button link to="/addDocument" >Ajouter un document</base-button>
      </div>
        <ul v-if="hasDocuments">
        <document-item
        v-for="document in filteredDocuments"
        :key="document.id"
        :id="document.id"
        :name="document.name"
        :owner="document.owner"
        :date="document.date"
        :areas="document.areas"
        ></document-item>
       </ul>
       <h3 v-else > Aucun document trouvé </h3>
           </base-card>

    </section>
</template>

<script>
import DocumentItem from '../../components/Documents/DocumentItem.vue'
export default {
  components: { DocumentItem },
   computed: {
     filteredDocuments() {
       return this.$store.getters['documents/documents']
     },
     hasDocuments() {
       return this.$store.getters['documents/hasDocuments']
     }
   }
}
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.controls {
  display: flex;
  justify-content: space-between;
}
</style>