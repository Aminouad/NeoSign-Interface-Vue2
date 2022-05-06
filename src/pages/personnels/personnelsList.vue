<template>
    <section>
    </section>
    <section>
          <base-card>

      <div class="controls" >
      <base-button mode="outline">Refresh</base-button>
      <div class="search">
          <input  type="text" v-model="search" placeholder="Search" /> <br />
          <br />
        </div>
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
  data() {
    return {
      search: "",
    };
  },
   computed: {
     filteredPersonnels() {
       return this.$store.getters['personnels/personnels'].filter((p) => {
        // return true if the product should be visible

        // in this example we just check if the search string
        // is a substring of the product name (case insensitive)
        return p.name.toLowerCase().indexOf(this.search.toLowerCase()) != -1;
      });
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