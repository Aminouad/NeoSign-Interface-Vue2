<template>
  <tr class="row">
    <td>{{ name }}</td>
    <td>{{ contact }}</td>
    <td>{{ phone }}</td>
    <td>{{ address }}</td>
    <td>{{ date }}</td>

   

    <td class="actions">
      <button @click="toggleDeleteModal" class="deleteButton"><i class="fa-solid fa-trash"></i> </button>
    </td>
  </tr>
  <div>
    <base-dialog
      title="Suppression de document..."
      :show="showDeletePopUp"
      :confirm="true"
      @close="toggleDeleteModal"
      @actionTask="deleteCompany()"
    >
      <div>
        <p style="color: #ff130d; display: flex; justify-content: center">
          Etes-vous sûr de vouloir supprimer ce document ?
        </p>
      </div>
    </base-dialog>
  </div>
</template>
<script>
export default {
  props: ["id", "name", "contact", "date", "address", "phone"],
  data() {
    return {
      showDeletePopUp: false
      }
      },
    methods: {
deleteCompany() {
  console.log("okk");
      this.$store.dispatch("companies/deleteCompany", this.id);
    }
    ,
    toggleDeleteModal() {
      this.showDeletePopUp = !this.showDeletePopUp;
    }}
};
</script>

<style scoped>
.row td {
  padding: 0.8rem;
}
.deleteButton{
  color: rgba(255, 255, 255, 0);
  border: rgba(255, 255, 255, 0);
  background-color: rgba(255, 255, 255, 0);
}
.actions {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}

.fa-trash {
  color: #ff6e40;
  cursor: pointer;
  opacity: 1;

}
</style>
