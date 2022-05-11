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
        :etats="societe.etats"
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
  data() {
    return {
      search: "",
    };
  },
   computed: {
     filteredSocietes() {
       return this.$store.getters['societes/societes'].filter((p) => {
        // return true if the product should be visible

        // in this example we just check if the search string
        // is a substring of the product name (case insensitive)
        return p.name.toLowerCase().indexOf(this.search.toLowerCase()) != -1;
      });
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