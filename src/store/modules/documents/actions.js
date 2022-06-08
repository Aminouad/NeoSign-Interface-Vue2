import axios from "axios";
export default {
  async addDocument({ dispatch }, data) {
    var userEmail = JSON.parse(localStorage.getItem("userEmail"));
     console.log(data);
    var bodyFormData = new FormData();
    bodyFormData.append("Name", data.name);
    bodyFormData.append("Type", data.type);
    bodyFormData.append("Description", data.description);
    bodyFormData.append("Owner", userEmail);
    bodyFormData.append("Path", data.path);
    bodyFormData.append("Date", data.date);

    bodyFormData.append("Etat", data.areas[0]);
    var reader = new FileReader();
    reader.readAsArrayBuffer(data.file);
    reader.onload = async () => {
      bodyFormData.append("File", new Blob([reader.result]), data.file.name);
      var access_token = JSON.parse(localStorage.getItem("token"));

      const response = await axios
        .post("https://localhost:7043/api/Document/", bodyFormData, {
          headers: { Authorization: `bearer ${access_token}` },
        })
        .then((data) => {
          console.log(data);
          dispatch("loadDocuments");
        });
      console.log(response);
    };
  },
  async signDocument({ state }, data) {
    var access_token = JSON.parse(localStorage.getItem("token"));
    console.log("action",data);
    console.log("state", state);
    return axios.post(
      "https://localhost:7043/api/Signature/",
      {
        idDocument: data.idDocument,
        passwordCertificate: data.passwordCertificate,
        typeOfSignature:data.typeOfSignature,
        userEmail: data.userEmail
      },
      {
        headers: { Authorization: `bearer ${access_token}` },
      }
    )
    .then((data) => {
         console.log("action",data);

    });

    //console.log(response);
  },

  async loadDocuments({ commit }) {
    var access_token = JSON.parse(localStorage.getItem("token"));
    var userId = JSON.parse(localStorage.getItem("userId"));
    const response = await axios.get(
      "https://localhost:7043/api/Document/" + userId,
      {
        headers: { Authorization: `bearer ${access_token}` },
      }
    );
    //console.log(response);

    const responseData = response.data;
    let responseOK = response.status === 200;

    if (!responseOK) {
      const error = new Error(responseData.message || "Erreur de serveur!");
      throw error;
    }
    const documents = [];
    console.log(responseData);
    for (const key in responseData) {
      const document = {
        id: responseData[key].Id,
        name: responseData[key].Name,
        type: responseData[key].Type,
        description: responseData[key].Description,
        date: responseData[key].Date,
        areas: [responseData[key].Etat],
        path: responseData[key].Path,
        owner: responseData[key].User.Email,
      };
      documents.push(document);
    }
    commit("setDocuments", documents);
  },
  async deleteDocument({ dispatch }, data) {
    var access_token = JSON.parse(localStorage.getItem("token"));
    console.log(data);
    const response = await axios
      .delete("https://localhost:7043/api/Document/" + data.id, {
        headers: { Authorization: `bearer ${access_token}` },
      })
      .then((data) => {
        console.log(data);
        dispatch("loadDocuments");
      });
    console.log(response);
  },
  async editDocument({ dispatch }, payload) {
    var access_token = JSON.parse(localStorage.getItem("token"));

    const response = await axios
      .put(
        "https://localhost:7043/api/Document/",
        {
          id: payload.id,
          name: payload.name,
          description: payload.description,
        },
        {
          headers: { Authorization: `bearer ${access_token}` },
        }
      )
      .then((data) => {
        console.log(data);
        dispatch("loadDocuments");
      });
    console.log(response);
  },
  async downloadDocument({ state }, data) {
    console.log("path", data);
    var path = `https://localhost:7043/${data.path}`;
    console.log(state);
    fetch(path)
      .then((res) => res.blob())
      .then((blob) => {
        var url = window.URL.createObjectURL(blob);
        var a = document.createElement("a");
        a.href = url;
        a.download = `${data.name}.${data.type}`;
        document.body.appendChild(a); // we need to append the element to the dom -> otherwise it will not work in firefox
        a.click();
        a.remove(); //a
      });
  },
};
