<template>
<div>
  <base-dialog :show="!!error" title="Une erreur s'est produit" @close="handleError">
     <p>{{ error }}</p>
  </base-dialog>
  <base-dialog :show="isLoading" title="Authentification...." fixed >
  <base-spinner></base-spinner>
  </base-dialog>
  <base-card>
    <form @submit.prevent="submitForm">
      <div class="form-control">
        <label for="email">Adresse e-mail</label>
        <input type="email" id="email" v-model.trim="email" />
      </div>
      <div class="form-control">
        <label for="password">Mot de passe</label>
        <input type="password" id="password" v-model.trim="password" />
      </div>
      <p v-if="!formIsValid">
        Veuillez entrer une adresse e-mail valide (de type vous@fournisseur.com)
        et un mot de passe valide ( doit avoir une longueur minimum de 6
        caractères)
      </p>
      <base-button>S'identifier</base-button>
      
    </form>
  </base-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "amin@neoledge.com",
      password: "string",
      formIsValid: true,
      isLoading: false,
      error: null,
    };
  },
  methods: {
    async submitForm() {
      this.formIsValid = true;
      if (
        this.email === "" ||
        !this.email.includes("@") ||
        this.password.length < 6
      ) {
        this.formIsValid = false;
        return;
      }
      this.isLoading = true;
      const loginPayload= {
          email:this.email,
          password:this.password,
        };
      try {
        await this.$store.dispatch('login', loginPayload)
      } 
      catch (err) {
        if(err.message==="Network Error")  {
        this.error="problème de servuer"
        }else {
        console.log(err.message);
        this.error= err.message ;
        }
      }
      this.isLoading = false;
      //console.log(this.$store.getters.token);
      this.$router.push('/') ;

    },
    handleError() {
      this.error=null;
    }
  },
};
</script>

<style scoped>
form {
  margin: 1rem;

  padding: 1rem;
}

.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  margin-bottom: 0.5rem;
  display: block;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  border: 1px solid #ccc;
  padding: 0.15rem;
}

input:focus,
textarea:focus {
  border-color: #3d008d;
  background-color: #faf6ff;
  outline: none;
}
</style>
