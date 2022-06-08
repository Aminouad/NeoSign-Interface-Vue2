<template>
  <tr class="row">
    <td>{{ name }}</td>
    <td>{{ contact }}</td>
    <td>{{phone}}</td>
    <td>{{address}}</td>
    <td>{{ date }}</td>

    <!-- <div class="date">
      <div class="badge">
        <base-badge
          v-for="etat in etats"
          :key="etat"
          :type="etat"
          :title="etat"
        ></base-badge>
      </div>
    </div> -->

    <td class="actions">
      <button class="edit-button"><i class="fa-solid fa-trash"></i></button>
    </td>
  </tr>
</template>
<script>
export default {
  props: ["id", "name", "contact", "date","address","phone"],
  computed: {
    companyDetailsLink() {
      return this.$route.path + "/" + this.id;
    },
  },
};
</script>

<style scoped>
.row td {
  padding: 0.8rem;
}
.actions {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
i {
  color: brown;
}
</style>
