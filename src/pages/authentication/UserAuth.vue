<template>
  <div class="user-auth">
    <base-dialog
      :show="!!error"
      title="Une erreur s'est produit"
      @close="handleError"
    >
      <p>{{ error }}</p>
    </base-dialog>
    <base-dialog :show="isLoading" title="Authentification...." fixed>
      <base-spinner></base-spinner>
    </base-dialog>
    <div class="content">
      <div class="left-side">
        <img src="../../assets/neoledge_logo.png" alt="" class="logo" />
      </div>
      <div class="right-side">
        <img src="../../assets/neosign_logo.png" alt="" />

        <p>Utiliser votre instance NEOsign</p>

        <form @submit.prevent="submitForm">
          <div class="form-control">
            <label for="email">Adresse e-mail</label>
            <input type="email" id="email" v-model.trim="email" />
          </div>
          <div class="form-control">
            <label for="password">Mot de passe</label>
            <input type="password" id="password" v-model.trim="password" />
          </div>
          <p class="errorMessage" v-if="!formIsValid">
            Veuillez entrer une adresse e-mail valide (de type
            vous@fournisseur.com) et un mot de passe valide ( doit avoir une
            longueur minimum de 6 caractères)
          </p>
          <div></div>
          <base-button>S'identifier</base-button>
        </form>
      </div>
    </div>
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
      const loginPayload = {
        email: this.email,
        password: this.password,
      };
      try {
        await this.$store.dispatch("login", loginPayload);
      } catch (err) {
        if (err.message === "Network Error") {
          this.error = "Problème de serveur.Veuillez réessayer plus tard.  ";
        } else {
          //console.log(err.message);
          this.error = err.message;
        }
      }
      this.isLoading = false;
      //console.log(this.$store.getters.token);
      this.$router.push("/");
    },
    handleError() {
      this.error = null;
    },
  },
};
</script>

<style lang="scss">
$whiteColor: #fff;

.user-auth {
  display: flex;
  width: 100vw;
  height: 100vh;
  align-items: center;
  justify-content: center;
  background-image: url("../../assets/background-auth.jpg");
  background-size: 100% 100%;
  background-repeat: no-repeat;

  .content {
    width: 50vw;
    height: 60vh;
    display: flex;

    .left-side {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      background: #00b1b2;
      border-radius: 5px 0 0 5px;

      img {
        width: 100%;
      }
    }
    .right-side {
      width: 100%;
      border-radius: 0 5px 5px 0;
      background: $whiteColor;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      img {
        width: 40%;
        display: flex;
        align-items: center;
        margin-bottom: -2%;
      }
      p {
        color: #6a6969;
        font-size: 85%;
      }
      form {
        padding: 5%;
        display: flex;
        flex-direction: column;
        .form-control {
          margin-bottom: 0.625rem;
          label {
            font-size: 0.75rem;
          }

          input,
          textarea {
            box-sizing: border-box;
            border-radius: 5%;
            border: 1px solid #f5f5f5;
            background-color: #f5f5f5;
            padding: 0.4rem;
            font-size: 0.9rem;
            width: 100%;
            margin-top: 0.188rem;
          }
          input:focus,
          textarea:focus {
            border-color: #262627;
            background-color: #faf6ff;
            outline: none;
          }
        }
        .errorMessage {
          display: flex;
          color: #ff130d;
          font-size: 65%;
        }
      }
    }
  }
}
</style>
