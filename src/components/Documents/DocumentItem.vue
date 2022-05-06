<template>
  <li>
    <h4>{{ document.name }}</h4>
    <div v-if="showDetails">
          <i class="fas fa-file-alt"></i>{{ "  " + document.type }}

      <h4>{{ document.owner }}</h4>
      <h4>{{ document.description }}</h4>
      <h4>{{ document.date }}</h4>

    </div>
    <div>
      <base-badge
        v-for="area in document.areas"
        :key="area"
        :type="area"
        :title="area"
      ></base-badge>
    </div>

    <div class="actions">
      <base-button v-if="isPdf" mode="outline"  @click="showDocument"
        >Afficher</base-button
      >
      <base-button @click="switchDetails">...</base-button>
    </div>
  </li>
</template>
<script>
export default {
  props: ["document"],
  data() {
     return{
    showDetails:false
  }},
  computed: {
    documentDetailsLink() {
      return this.$route.path + "/" + this.id;
    },
    isPdf() {
      return this.document.type === "PDF";
    },
    
  },
  methods: {
    switchDetails() {
      this.showDetails=!this.showDetails ;
    },
    showDocument() {
      this.$emit('show-document',this.document)
    }
  }
};
</script>

<style scoped>
li {
  margin: 0.3rem 0;
  border: 1px solid #33333154;
  box-shadow: 0 1px 5px rgba(15, 15, 15, 0.26);

  border-radius: 1px;
  padding: 0.5rem;
}

h3 {
  font-size: 1.5rem;
}

h3,
h4 {
  margin: 0.5rem 0;
}

div {
  margin: 0.5rem 0;
}

.actions {
  display: flex;
  justify-content: flex-end;
}

</style>
