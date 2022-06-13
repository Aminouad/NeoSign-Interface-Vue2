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
    <div class="controls">
      <base-button class="button" mode="outline" @click="loadComapnies()"
        >Refresh</base-button
      >
      <div class="search">
        <input
          type="text"
          class="search-input"
          v-model="search"
          placeholder="Filtrez vos recherches..."
        />
        <br />
      </div>
      <base-button class="button" link to="/addCompany"
        >Ajouter une société</base-button
      >
    </div>
    <table id="table">
      <thead>
        <tr class="table-hader">
          <th><i class="fa-solid fa-building-user"></i> Nom</th>
          <th><i class="fa-solid fa-address-book"></i> Email</th>
          <th><i class="fa-solid fa-phone"></i> Téléphone</th>
          <th><i class="fa-solid fa-location-dot"></i> Address</th>
          <th><i class="fa-solid fa-clock-rotate-left"></i> Date d'ajout</th>
          <th class="actions-field">
            <i class="fa-solid fa-sliders"></i> Actions
          </th>
        </tr>
      </thead>
      <tbody>
        <company-item
          v-for="company in filteredCompanies"
          :key="company.id"
          :id="company.id"
          :name="company.name"
          :contact="company.contact"
          :date="company.date"
          :phone="company.phone"
          :address="company.address"
        ></company-item>
      </tbody>
    </table>

    <ul v-if="hasCompanies"></ul>
    <h3 v-else>Aucune société trouvé</h3>
  </div>
</template>

<script>
import CompanyItem from "../../components/Companies/CompanyItem.vue";
import BaseDialog from "../ui/BaseDialog.vue";

export default {
  components: { CompanyItem, BaseDialog },
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
      return this.$store.getters["companies/companies"].filter((p) => {
        // return true if the product should be visible

        // in this example we just check if the search string
        // is a substring of the product name (case insensitive)
        return (
          Object.values(p)
            .join("")
            .toLowerCase()
            .indexOf(this.search.toLowerCase()) != -1
        );
      });
    },
    hasCompanies() {
      return this.$store.getters["companies/hasCompanies"];
    },
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
  },
};
</script>

<style scoped>
.button {
  size-adjust: auto;
}
.list-company {
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
  background-color: #f3f8f9;
  color: #696969;
  height: 100%;
  border: none;
  margin: 0;
  padding: 0.3rem;
  display: flex;
  box-sizing: border-box;
  border-radius: 4px;
  width: 30rem;
}
.search-input {
  background-color: transparent;
  color: #696969;
  border: none;
  width: 100%;
}
.controls {
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.9rem;
}

input:focus {
  outline: none !important;
  border-color: #00b1b2;
}

#table {
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

#table th {
  border: 1px solid #ddd;
  padding: 0.4rem;
}

#table tr:nth-child(odd) {
  background-color: #f2f2f2;
}

#table tr:hover {
  background-color: #ddd;
}

#table th {
  text-align: left;
  border: #00b1b2;
  background-color: #00b2b2;
  color: white;
}
</style>
