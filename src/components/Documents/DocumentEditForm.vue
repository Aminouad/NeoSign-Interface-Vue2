<template>

  <div class="document-form">
    <form @submit.prevent="submitForm">
      <div class="form-control">
        <label for="name">Nom de document:</label>
        <input type="text" id="name" v-model.trim="name" />
      </div>
      
      <div class="form-control">
        <label for="description">Description:</label>
        <textarea
          id="description"
          rows="5"
          v-model.trim="description"
        ></textarea>
      </div>
      

     

      <base-button :class="buttonStyle" @click="editDocument">{{buttonName}}</base-button>
    </form>
  </div>   

</template>

<script>

export default {
  emits: ["save-data"],
  data() {
    return {
      id:0,
      name: "",
      owner: "",
      description: "",
      date: "",
      validate:false,
    };
  },
  methods: {
    submitForm() {
      var today = new Date();
      var dateNow =
        today.getDate() +
        "/" +
        (today.getMonth() + 1) +
        "/" +
        today.getFullYear();

      const formData = {
        name: this.name,
        description: this.description,
        date: dateNow,
      };
      this.$emit("save-data", formData);
    },
    editDocument () {
      this.validate = !this.validate;

    }
   
  },
  computed:{
   buttonStyle() {
     return !this.validate ? 'outline' : '';
   },
   buttonName() {
     return !this.validate ? 'Valider' : 'Annuler';
   }
  }
};
</script>
<style scoped>
.form-control {
  margin: 0.5rem 0;
  
}
.document-form{
  display: flex;
  
}

label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}



input,
textarea {
  display: block;
  width: fit-content;
  border: 1px solid #ccc;
  font: inherit;
}

input:focus,
textarea:focus {
  background-color: #f0e6fd;
  outline: none;
  
  border-color: #3d008d;
}





h3 {
  margin: 0.5rem 0;
  font-size: 1rem;
}

.invalid label {
  color: red;
}

.invalid input,
.invalid textarea {
  border: 1px solid red;
}
.preview {
  display: flex;
  height: 100;
  size: 20%;
}
.scroll {
  display: flex;
  justify-content: start;
  width: 100vw;
  height: 100vh;
  overflow: scroll;
}
</style>
