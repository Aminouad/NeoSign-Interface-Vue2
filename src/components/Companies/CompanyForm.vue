<template>
  <div class="company-form">
    <form @submit.prevent="submitForm">
      <h3>Ajouter une société :</h3>

      <div class="form-control">
        <label for="name">Nom de Société :</label>
        <input type="text" id="name" v-model.trim="name" />
      </div>
      <div class="form-control">
        <label for="email">Email :</label>
        <input type="text" id="email" v-model.trim="email" />
      </div>
      <div class="form-control">
        <label for="phone">Téléphone :</label>
        <input type="text" id="phone" v-model.trim="phone" />
      </div>
      <div class="form-control">
        <label for="address">Addresse :</label>
        <input type="text" id="address" v-model="address" />
      </div>
      <div class="form-control">
        <label for="password">Mot de passe :</label>
        <input type="password" id="password" v-model.trim="password" />
      </div>

      <div class="button">
        <base-button>Enregistrer</base-button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  emits: ["save-data"],

  data() {
    return {
      name: "",
      email: "",
      phone: "",
      password: "",
      address: "",
      date: "",
      etat: "activé",
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
        email: this.email,
        phone: this.phone,
        address: this.address,
        password: this.password,
        date: dateNow,
        etat: this.etat,
      };
      this.$emit("save-data", formData);
      // with replace we can't go back to previous page
    },
  },
};
</script>
<style scoped>
.company-form {
  display: flex;
  justify-content: center;
  flex-direction: column;
  justify-content: space-around;
  border-radius: 1px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.059);
}
.form-control {
  margin: 2rem 2rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  justify-content: space-between;
}
.button {
  margin-top: 1rem;
  margin-bottom: 0.5rem;
  display: flex;
  justify-content: end;
}

label {
  font-weight: bold;
  font-size: 80%;
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
}

input[type="radio"]:focus {
  outline: #00b1b2 solid 1px;
}

h3 {
  margin: 1rem 2rem;
}

.invalid label {
  color: red;
}

.invalid input,
.invalid textarea {
  border: 1px solid red;
}
</style>
