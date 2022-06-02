<template>
  <li>
    <div class="name">
          <i class="fa-solid fa-building-user"></i>
                <p style="padding-top: 0.34rem;margin-left:0.3rem">{{ name }}</p>
    </div>
    <div class="name">
      <i class="fa-solid fa-address-book"></i>

      <p style="padding-top: 0.1rem;margin-left:0.3rem">{{ contact }}</p>
    </div>
    <div class="date">
      <div class="badge">
      <base-badge
        v-for="etat in etats"
        :key="etat"
        :type="etat"
        :title="etat"
      ></base-badge>
    </div>
      <i class="fa-solid fa-clock"></i>

      <p style="padding-top: 0.1rem;margin-left:0.3rem">Ajouté le : {{ date }}</p>
    </div>
   

    
    <div class="actions">
      
    <div class="buttons">
      <base-button mode="outline" link :to="companyDetailsLink"
        >Modifier</base-button
      >
      
      <base-button link :to="companyDetailsLink">Supprimer</base-button>
    </div>
    </div>
    
  </li>
</template>
<script>
export default {
  props: ["id", "name", "contact", "date", "etats"],
  computed: {
    companyDetailsLink() {
      return this.$route.path + "/" + this.id;
    },
  },
};
</script>

<style scoped>

.name {
  display: flex;
  align-items: center;
  margin: -1%;
  font-size: 90%;
}
.date {
  display: flex;
  align-items: center;
  justify-content: end;
  font-size: 90%;
  margin-bottom: -2%;
}
li {
  display: flex;
  flex-direction: column;
  margin: 1rem 0;
  border: 1px solid #33333100;
  box-shadow: 0 1px 5px rgba(15, 15, 15, 0.212);

  border-radius: 1px;
  padding: 1rem;
}

h3 {
  font-size: 1.5rem;
}

h3,
p {
  margin: 0.3rem 0;
}

.actions {
  display: flex;
  justify-content: flex-end;
  margin-top: 2%;
  margin-bottom: -1.5%;
  margin-right: -4.5% ;
}
.badge {
  
  display: flexbox;
    flex: 1;
    margin-left: 8%;

  width: 25%;

  margin-left: -2.2%;
}

</style>
