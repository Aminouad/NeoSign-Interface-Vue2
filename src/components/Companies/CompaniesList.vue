<template>
    <section>
    <base-dialog
      :show="!!error"
      title="An error occurred!"
      @close="handleError"
    >
      <p>{{ error }}</p>
    </base-dialog>
    <base-dialog :show="isLoading" title="" fixed>
      <base-spinner></base-spinner>
    </base-dialog>
  </section>
    <div class="list-company">

      <div class="controls" >
      <base-button class="button" mode="outline" @click="loadComapnies()">Refresh</base-button>
       <div class="search">
          <input  type="text" v-model="search" placeholder="Filtrez vos recherches..." /> <br />
        </div>
        <base-button class="button" link to="/addCompany" >Ajouter une société</base-button>
      </div>
        <ul v-if="hasCompanies">
        <company-item
        v-for="company in filteredCompanies"
        :key="company.id"
        :id="company.id"
        :name="company.name"
        :contact="company.contact"
        :date="company.date"
        :etats="company.etats"
        ></company-item>
       </ul>
       <h3 v-else > Aucune société trouvé </h3>

    </div>
</template>

<script>
import CompanyItem from '../../components/Companies/CompanyItem.vue'
import BaseDialog from "../ui/BaseDialog.vue";

export default {
  components: { CompanyItem,BaseDialog },
  data() {
    return {
      search: "",
      error: null,
      isLoading: false,
    };
  },
  created() {
    console.log("test");
    this.loadCompanies();
  },
   computed: {
     filteredCompanies() {
       return this.$store.getters['companies/companies'].filter((p) => {
        // return true if the product should be visible

        // in this example we just check if the search string
        // is a substring of the product name (case insensitive)
        return p.name.toLowerCase().indexOf(this.search.toLowerCase()) != -1;
      });
     },
     hasCompanies() {
       return this.$store.getters['companies/hasCompanies']
     }
   },
  methods: {
    
    async loadCompanies() {
      this.isLoading = true;
      try {
        await this.$store.dispatch("companies/loadCompanies");
      } catch (error) {
        this.error = error.message || "Une erreur s'est produite";
      }
      this.isLoading = false;
      console.log(this.$store.dispatch("companies/loadCompanies"));
    },
    handleError() {
      this.error = null;
    },
  }
}
</script>

<style scoped>
.button{
  size-adjust: auto;
}
.list-company{
    margin-inline: 1em;

  border-radius: 1px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.059);
}
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
input{
  margin-top: 0.2rem;
  width: 90%;
}
input:focus {
  outline: none !important;
  border-color: #00b1b2;
}
</style>