<template>
    <section>
      Filter        
    </section>
    <section>
          <base-card>

      <div class="controls" >
      <base-button mode="outline">Refresh</base-button>
        <base-button link to="/addSociete" >Ajouter une société</base-button>
      </div>
        <ul v-if="hasSocietes">
        <societe-item
        v-for="societe in filteredSocietes"
        :key="societe.id"
        :id="societe.id"
        :name="societe.name"
        :contact="societe.contact"
        :date="societe.date"
        :areas="societe.areas"
        ></societe-item>
       </ul>
       <h3 v-else > Aucune société trouvé </h3>
           </base-card>

    </section>
</template>

<script>
import SocieteItem from '../../components/Societes/SocieteItem.vue'
export default {
  components: { SocieteItem },
   computed: {
     filteredSocietes() {
       return this.$store.getters['societes/societes']
     },
     hasSocietes() {
       return this.$store.getters['societes/hasSocietes']
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