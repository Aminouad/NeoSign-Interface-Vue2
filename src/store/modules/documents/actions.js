import axios from "axios";
export default {
  async addDocument({dispatch}, data) {
    var userEmail = JSON.parse(localStorage.getItem("userEmail"));

    var bodyFormData = new FormData();
    bodyFormData.append("Name", data.name);
    bodyFormData.append("Type", data.type);
    bodyFormData.append("Description", data.description);
    bodyFormData.append("Owner", userEmail);
    bodyFormData.append("Path", data.path);
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
          dispatch("loadDocuments")
        });
      console.log(response);
    };
  },
  async loadDocuments({commit}) {
    console.log("load");
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
      const error = new Error(responseData.message || "Failed to fetch!");
      throw error;
    }
    const documents = [];

    for (const key in responseData) {
      const document = {
        id: key,
        name: responseData[key].Name,
        type: responseData[key].Type,
        description: responseData[key].Description,
        areas: [responseData[key].Etat],
        path: responseData[key].Path,
      };
      documents.push(document);
    }
    commit("setDocuments", documents);
  },
};
