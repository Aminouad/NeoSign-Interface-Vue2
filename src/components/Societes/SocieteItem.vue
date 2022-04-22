<template>
    <li>
        <h3>{{ name }}</h3>
        <h4>{{ contact }}</h4>

        <h4>{{ date }}</h4>
        <div>
            <base-badge v-for="area in areas" :key="area" :type="area" :title="area"></base-badge>
        </div>
        <div class="actions" >
              <base-button mode="outline" link :to="societeDetailsLink">Modifier</base-button>
              <base-button link :to="societeDetailsLink">Supprimer</base-button>

        </div>
    </li>
</template>
<script>
export default {
    props: ['id','name','contact','date','areas'],
    computed: {
        
        
        societeDetailsLink() {
            return this.$route.path + '/' + this.id
        }

    }
}
</script>




<style scoped>

li {
  margin: 1rem 0;
  border: 1px solid #33333154;
  box-shadow: 0 1px 5px rgba(15, 15, 15, 0.26);

  border-radius: 1px;
  padding: 1rem;
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