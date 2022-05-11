<template>
  <form @submit.prevent="submitForm">
    <div class="form-control">
      <label for="name">Nom de document:</label>
      <input type="text" id="name" v-model.trim="name" />
    </div>
    <div class="form-control">
      <h3>Type:</h3>
      <div> PDF
        <input type="radio" value="PDF" v-model="type" />  
         XML
        <input type="radio" value="XML" v-model="type" />
      </div>
    </div>
    <div class="form-control">
      <label for="description">Description:</label>
      <textarea id="description" rows="5" v-model.trim="description"></textarea>
    </div>
     <div class="form-control">
      <label>File
        <input type="file" id="file" ref="file" @change="handleFileUpload()" :accept="`.${type}`" @click="m"/>
      </label>
    </div>
    <base-button>Enregistrer</base-button>
  </form>
</template>



<script>
export default {
  emits:['save-data'],
  data() {
    return {
      name: "",
      owner: "",
      type:"",
      description: "",
      date: "",
      areas: ['non-signé'],
      file: "",
    };
  },
  methods: {
    submitForm() {
      var today = new Date();
var dateNow = today.getDate() +'/' +(today.getMonth()+1)+'/'+today.getFullYear();
var userName=this.$store.getters['auth/userId']

      const formData = {
        name: this.name,
        owner: userName,
        type:this.type,
        description: this.description,
        date: dateNow,
        areas: this.areas,
        path: "../"+ userName ,
        file: this.file,


      };
      this.$emit('save-data',formData);
      this.$router.replace('/Documents'); // with replace we can't go back to previous page 

    },
    handleFileUpload(){
    this.file = this.$refs.file.files[0];
    }
  },
};
</script>
<style scoped>
.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input[type="checkbox"] + label {
  font-weight: normal;
  display: inline;
  margin: 0 0 0 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  border: 1px solid #ccc;
  font: inherit;
}

input:focus,
textarea:focus {
  background-color: #f0e6fd;
  outline: none;
  border-color: #3d008d;
}

input[type="radio"] {
  display: inline;
  width: auto;
  border: none;
}

input[type="radio"]:focus {
  outline: #3d008d solid 1px;
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
</style>
