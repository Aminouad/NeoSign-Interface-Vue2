<template>
  <li @mouseenter="showActions = true" @mouseleave="showActions = false">
    <div class="li">
      <div class="document-title">
        <div class="icon">
          <i class="fa-solid fa-file"></i> {{ "  " + document.type }}
        </div>

        <h4>{{ document.name }}</h4>

        <base-badge
          v-for="area in document.areas"
          :key="area"
          :type="area"
          :title="area"
        ></base-badge>
      </div>

      <div v-show="showActions" class="actions">
        <base-button
          mode="outline"
          class="button"
          v-show="'non-signé' === document.areas[0]"
          @click="toggleSignatureModal"
          >Signer</base-button
        >

        <base-button
          class="button"
          v-if="isPdf"
          mode="outline"
          @click="showDocument"
          >Afficher</base-button
        >

        <base-button class="button" mode="outline" @click="switchDetails"
          ><i class="fa-solid fa-circle-info"></i
        ></base-button>
        <base-dropdown
          :listOfItem="listOfOptions"
          @setSelectedOption="setNewSelectedOption($event, document)"
        >
        </base-dropdown>
      </div>
    </div>
    <p class="date">Ajouté le {{ document.date }} par : {{ document.owner }}</p>

    <div class="description" v-if="showDetails">
      <h4>{{ document.description }}</h4>
    </div>
    <base-dialog
      title="Suppression de document..."
      :show="showDeletePopUp"
      :confirm="true"
      @close="toggleDeleteModal"
      @actionTask="deleteDocument(document)"
    >
      <div>
        <p style="color: #ff130d; display: flex; justify-content: center">
          Etes-vous sûr de vouloir supprimer ce document ?
        </p>
      </div>
    </base-dialog>
    <base-dialog
      title="Modification de document..."
      :show="showEditPopUp"
      :confirm="true"
      @close="toggleEditModal"
      @actionTask="editDocument"
    >
      <div class="editForm">
        <document-edit-form @save-data="saveData"></document-edit-form>
      </div>
      <p v-if="validate" class="validation-Message">
        Modifications validés merci de confirmer
      </p>
    </base-dialog>
    <base-dialog
      title="Signature de document..."
      :show="showSignaturePopUp"
      :confirm="confirmToggle"
      @close="toggleSignatureModal()"
      @actionTask="signDocument()"
    >
      <div class="form-control">
        <div class="nature">
          <label class="labelNature" for="nature"
            >Merci de choisir la nature de Signature :</label
          >
          <div>
            Visible
            <input type="radio" value="visible" v-model="nature" />
            Non Visible
            <input type="radio" value="inVisible" v-model="nature" />
          </div>
        </div>
        <div v-if="nature === 'visible'" class="nature">
          <label class="label-signature" for="nature"
            >Ajoutez votre label de signature :</label
          >
          <div>
            <div class="labelAndImg">
              <input
                type="labelSignature"
                id="labelSignature"
                v-model.trim="labelSignature"
              />
            </div>
          </div>
        </div>
        <div class="selectOptions">
          <label class="labelOption" for="typeSelect"
            >Merci de choisir le niveau de Signature :</label
          >

          <select name="type" id="type-select" v-model="typeOfSignature">
            <option value="PAdES_BASELINE_B" selected="selected">
              PAdES_BASELINE_B
            </option>
            <option value="PAdES_BASELINE_T">PAdES_BASELINE_T</option>
            <option value="PAdES_BASELINE_LT">PAdES_BASELINE_LT</option>
            <option value="PAdES_BASELINE_LTA">PAdES_BASELINE_LTA</option>
          </select>
        </div>
        <form>
          <label class="label-password-certificate" for="passwordCertificat"
            >Veuillez introduire le mot de passe de la certificat :</label
          >
          <input
            @input="toggleConfirm"
            type="password"
            id="passwordCertificat"
            v-model.trim="passwordCertificat"
          />
          <div class="form-control"></div>
        </form>
      </div>
      <p class="errorMessage" v-if="error">Mot de passe invalide</p>
      <div v-if="isLoading">
        <base-spinner></base-spinner>
      </div>
    </base-dialog>
  </li>
</template>
<script>
import DocumentEditForm from "../../components/Documents/DocumentEditForm.vue";

import BaseDialog from "../ui/BaseDialog.vue";
export default {
  components: { BaseDialog, DocumentEditForm },
  props: ["document"],

  data() {
    return {
      error: null,
      typeOfSignature: "PAdES_BASELINE_B",
      showActions: false,
      validate: false,
      confirmToggle: false,
      showDeletePopUp: false,
      dataWithId: null,
      isPassworEmpty: true,
      nature: "",
      showSignaturePopUp: false,
      showEditPopUp: false,
      deleteModel: false,
      showDetails: false,
      isLoading: false,
      file: "",
      passwordCertificat: "",
      labelSignature: "",
      listOfOptions: {
        options: [
          {
            value: "Modifier",
          },
          {
            value: "Télécharger",
          },
         
          {
            value: "Supprimer",
          },
        ],

        placeholder: "Options ",
        backgroundColor: "#00B1B2",
        textColor: "#0000",
        borderRadius: "3px",
        border: "1px solid gray",
        width: 50,
      },
    };
  },
  computed: {
    isSigned() {
      console.log(document);
      return true;
    },
    documentDetailsLink() {
      return this.$route.path + "/" + this.id;
    },
    isPdf() {
      return this.document.type === "PDF";
    },
  },
  methods: {
    toggleActions() {
      this.showActions = !this.showActions;
    },
    toggleDeleteModal() {
      this.showDeletePopUp = false;
    },
    toggleEditModal() {
      this.showEditPopUp = false;
    },

    toggleSignatureModal() {
      this.passwordCertificat = "";
      this.showSignaturePopUp = !this.showSignaturePopUp;
      this.error = null;
    },
    toggleConfirm() {
      if (this.passwordCertificat && this.passwordCertificat !== "") {
        this.confirmToggle = true;
      } else {
        this.confirmToggle = false;
      }
    },

    switchDetails() {
      this.showDetails = !this.showDetails;
    },
    showDocument() {
      this.$emit("show-document", this.document);
    },
    signDocument() {
      console.log("dsddsdsd", this.isLoading);
      this.isLoading = true;
      const signData = {
        idDocument: this.document.id,
        passwordCertificate: this.passwordCertificat,
        userEmail: this.document.owner,
        typeOfSignature: this.typeOfSignature,
        nature: this.nature,
        label: this.labelSignature,
      };

      this.$store
        .dispatch("documents/signDocument", signData)
        .then((response) => {
          this.$store.dispatch("documents/loadDocuments");

          this.toggleSignatureModal();
          console.log(response);
        })
        .catch((err) => {
          console.log(err.message);

          this.error = true;
        })
        .finally(() => {
          this.isLoading = false;
        });
    },
    setNewSelectedOption(selectedOption) {
      this.showActions = false;

      console.log((this.listOfOptions.placeholder = selectedOption.value));
      if (this.listOfOptions.placeholder === "Supprimer") {
        this.showDeletePopUp = true;
      }
      if (this.listOfOptions.placeholder === "Modifier") {
        this.showEditPopUp = true;
      }
      if (this.listOfOptions.placeholder === "Télécharger") {
        this.downloadFile();
      }
    },
    downloadFile() {
      this.$store.dispatch("documents/downloadDocument", this.document);
    },
    deleteDocument(document) {
      this.$store.dispatch("documents/deleteDocument", document);
    },
    editDocument() {
      console.log(this.documentNewValue);
      this.$store.dispatch("documents/editDocument", this.documentNewValue);
      this.showEditPopUp = false;
    },
    saveData(data) {
      const dataWithId = Object.assign({ id: this.document.id }, data);
      console.log(dataWithId);

      this.documentNewValue = dataWithId;
      this.validate = !this.validate;
    },
  },
};
</script>

<style scoped>
.nature {
  display: flex;
  flex-direction: row;
}
.errorMessage {
  display: flex;
  justify-content: center;
  color: #ff130d;
  font-size: 80%;
}
input:focus {
  outline: none !important;
  border-color: #00b1b2;
  border-radius: 5%;
}
.label-signature {
  margin-right: 21%;
  margin-bottom: 6%;
}
.img-signature {
  margin-right: 23%;
  margin-bottom: 6%;
}
.label-password-certificate {
  margin-right: 2%;
}
.labelNature {
  margin-bottom: 6%;
  margin-right: 14%;
}
.labelOption {
  margin-right: 13%;
}

.form-control {
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-left: 2%;
  margin-top: 3%;
}
.selectOptions {
  margin-bottom: 6%;
}
.description {
  opacity: 50%;
}
.date {
  margin: 0.02rem;
  margin-top: -0.5rem;
  font-size: 0.6rem;
}
.document-title {
  display: flex;
  align-items: center;
}
.icon {
  font-size: 0.7rem;
  display: flex;
  opacity: 65%;
  flex-direction: column;
  padding: 0.01rem;
  margin: 0.08rem;
  margin-right: 0.6rem;
}
.editForm {
  display: flex;
  justify-content: center;
  align-items: center;
}
li {
  border: 1px solid #33333154;
  box-shadow: 0 1px 5px rgba(15, 15, 15, 0.26);
  border-radius: 1px;
  padding: 0.5rem;
  margin: 0.3rem 0;
}
.li {
  justify-content: space-between;
  display: flex;
  margin: 0.03rem 0;
}

h3 {
  font-size: 1.5rem;
}

h3,
h4 {
  margin: 0.5rem 0;
}

.actions {
  display: flex;
  justify-content: flex-end;
}
.validation-Message {
  display: flex;
  justify-content: center;
  color: #f0ad4e;
}
.button {
  margin-inline: 0.2rem;
}
</style>
