<template>
  <div>
    <form class="document-form" @submit.prevent="submitForm">
                    <h2>Ajouter un Certificat : </h2>

     
      <div class="form-control">
        <h3>Type :</h3>
        <div>
          P12
          <input type="radio" value="P12" v-model="type" />
          PFX
          <input type="radio" value="PFX" v-model="type" />
        </div>
      </div>
      
      <div v-if="type" class="form-control">
        <label
          >Fichier : </label>
          <input
            id="fileUpload"
            type="file"
            ref="file"
            @input="handleFileUpload()"
            :accept="`.${type}`"
          />
        
      </div>
    
        <div class="form-control">
          <label
          >Image signature : </label>
          <div>
            <div class="">
              <input
                id="fileUpload"
                type="file"
                ref="image"
                @input="handleFileUpload()"
                accept=".png"
              />
            </div>
          </div>
        </div>

      
      <base-button class="form-control">Enregistrer</base-button>
    </form>
</div></template>

<script>

export default {
  emits: ["save-data"],
  data() {
    return {
     
      type: "",
      image:"",
      file: "",
      path: "",
    };
  },
  methods: {
    submitForm() {
      
      var userEmail = JSON.parse(localStorage.getItem("userEmail"));

      const formData = {
        Owner:userEmail,
        type: this.type,
        File: this.file,
        Image:this.image,
      };
      this.$emit("save-data", formData);
    },
    handleFileUpload() {
      this.file = this.$refs.file.files[0];
      this.image = this.$refs.image.files[0];

      this.path = URL.createObjectURL(this.file);
      console.log(URL.createObjectURL(this.file));
    },
    
  },
};
</script>
<style scoped>
h2{
  margin: 1rem 1.8rem;
  font-size: 123%;
}
.form-control {
  margin: 1rem 1.8rem;
}
.document-form{
  justify-items: center;
  width: 23%;
  display: flex;
  flex-direction: column;
  justify-content: inherit;
  border-radius: 1px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.059);

}

label {
  font-weight: bold;
  display: block;
  padding-bottom: 0.5rem;
}

input[type="checkbox"] + label {
  font-weight: normal;
  display: inline;
  margin: 0 0 0 0.8rem;
}

input,
textarea {
  display: block;
  width: 97%;
  border: 1px solid #ccc;
  font: inherit;
}

input:focus,
textarea:focus {
  background-color: #f0e6fd;
  outline: none;
  border-color: #00b1b2;
}

input[type="radio"] {
  display: inline;
  width: auto;
  border: none;
  outline: #00b1b2;
}

input[type="radio"]:focus {
  outline: #00b1b2 solid 1px;
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
  justify-content: flex-end;
}
.scroll {
  width: 42vw;
  height: 100vh;
  overflow: scroll;
}
</style>
