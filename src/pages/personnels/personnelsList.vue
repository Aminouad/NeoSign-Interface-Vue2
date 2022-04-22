<template>
    <section>
      Filter        
    </section>
    <section>
          <base-card>

      <div class="controls" >
      <base-button mode="outline">Refresh</base-button>
        <base-button link to="/addPersonnel" >Ajouter un personnel</base-button>
      </div>
        <ul v-if="hasPersonnels">
        <personnel-item
        v-for="personnel in filteredPersonnels"
        :key="personnel.id"
        :id="personnel.id"
        :name="personnel.name"
        :email="personnel.email"

        :position="personnel.position"
        :date="personnel.date"
        :areas="personnel.areas"
        ></personnel-item>
       </ul>
       <h3 v-else > Aucun personnel trouvé </h3>
           </base-card>

    </section>
</template>

<script>
import PersonnelItem from '../../components/Personnels/PersonnelItem.vue'
export default {
  components: { PersonnelItem },
   computed: {
     filteredPersonnels() {
       return this.$store.getters['personnels/personnels']
     },
     hasPersonnels() {
       return this.$store.getters['personnels/hasPersonnels']
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