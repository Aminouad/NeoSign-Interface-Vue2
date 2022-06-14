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
  <div class="list-personnel">
    <div class="controls">
      <base-button class="button" mode="outline" @click="loadPersonnels()"
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
      <base-button class="button" link to="/addpersonal"
        >Ajouter un personnel</base-button
      >
    </div>
    <table id="table">
      <thead>
        <tr class="table-hader">
          <th><i class="fa-solid fa-building-user"></i> Nom</th>
          <th><i class="fa-solid fa-address-book"></i> Email</th>
          <th><i class="fa-solid fa-universal-access"></i> Position</th>
          <th><i class="fa-solid fa-clock-rotate-left"></i> Date d'ajout</th>
          <th class="actions-field">
            <i class="fa-solid fa-sliders"></i> Actions
          </th>
        </tr>
      </thead>
      <tbody>
        <personnel-item
          v-for="personnel in filteredPersonnels"
          :key="personnel.id"
          :id="personnel.id"
          :name="personnel.name"
          :email="personnel.email"
          :date="personnel.date"
          :position="personnel.Position"
        ></personnel-item>
      </tbody>
    </table>

    <ul v-if="hasPersonnels"></ul>
    <h3 v-else>Aucun personnel trouvé</h3>
  </div>
</template>

<script>
import PersonnelItem from "./PersonnelItem.vue";
import BaseDialog from "../ui/BaseDialog.vue";

export default {
  components: { PersonnelItem, BaseDialog },
  data() {
    return {
      search: "",
      error: null,
      isLoading: false,
    };
  },
  created() {
    console.log("test");
    this.loadPersonnels();
  },
  computed: {
    filteredPersonnels() {
      return this.$store.getters["personnel/personnels"].filter((p) => {
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
    hasPersonnels() {
      return this.$store.getters["personnel/hasPersonnels"];
    },
  },
  methods: {
    async loadPersonnels() {
      this.isLoading = true;
      try {
        await this.$store.dispatch("personnel/loadPersonnels");
      } catch (error) {
        this.error = error.message || "Une erreur s'est produite";
      }
      this.isLoading = false;
      console.log(this.$store.dispatch("personnel/loadPersonnels"));

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
.list-personnel {
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
