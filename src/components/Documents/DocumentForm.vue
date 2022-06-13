<template>
  <div>
    <form class="document-form" @submit.prevent="submitForm">

      <div class="form-control">

        <label for="name">Nom de document :</label>
        <input type="text" id="name" v-model.trim="name" />
      </div>
      <div class="form-control">
        <h3>Type :</h3>
        <div>
          PDF
          <input type="radio" value="PDF" v-model="type" />
          XML
          <input type="radio" value="XML" v-model="type" />
        </div>
      </div>
      <div class="form-control">
        <label for="description">Description :</label>
        <textarea
          id="description"
          rows="5"
          v-model.trim="description"
        ></textarea>
      </div>
      <div v-if="type" class="form-control">
        <label
          >Attacher: </label>
          <input
            id="fileUpload"
            type="file"
            ref="file"
            @input="handleFileUpload()"
            :accept="`.${type}`"
          />
        
      </div>

      <base-modal  title="Aperçu" :show="preview" @close="toggleModal">
        <div class="scroll">
          <web-viewer class="preview" :initialDoc="path" />
        </div>
      </base-modal>

      <base-button class="form-control">Enregistrer</base-button>
    </form>
    
</div>
</template>

<script>
import WebViewer from "../../components/layout/WebViewer.vue";

export default {
  emits: ["save-data"],
  components: { WebViewer },
  data() {
    return {
      name: "",
      owner: "",
      type: "",
      description: "",
      date: "",
      areas: ["non-signé"],
      file: "",
      path: "",
      preview: false,
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
      var userName = this.$store.getters["auth/userId"];

      const formData = {
        name: this.name,
        owner: userName,
        type: this.type,
        description: this.description,
        date: dateNow,
        areas: this.areas,
        path: "../" + userName,
        file: this.file,
      };
      this.$emit("save-data", formData);
    },
    handleFileUpload() {
      this.file = this.$refs.file.files[0];
      this.path = URL.createObjectURL(this.file);
      console.log(URL.createObjectURL(this.file));
      this.toggleModal();
    },
    toggleModal() {
      this.preview = !this.preview;
      console.log(this.preview);
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
  padding: 2%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  justify-content: space-around;
  border-radius: 1px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.059);
  width: 48%;
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
.preview{
  width: 41vw;

}
</style>
