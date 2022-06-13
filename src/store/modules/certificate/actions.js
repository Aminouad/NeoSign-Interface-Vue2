import axios from "axios";
export default {
  async addCertificate({ dispatch }, data) {
    console.log("email", data.Owner);
    var bodyFormData = new FormData();
    bodyFormData.append("Owner", data.Owner);
    bodyFormData.append("type", data.type);

    var reader = new FileReader();
    var readerImage = new FileReader();

    reader.readAsArrayBuffer(data.File);
    readerImage.readAsArrayBuffer(data.Image);

    reader.onload = async () => {
      await bodyFormData.append(
        "File",
        new Blob([reader.result]),
        data.File.name
      );
    
    readerImage.onload = async () => {
      await bodyFormData.append(
        "Image",
        new Blob([readerImage.result]),
        data.Image.name
      );
    
    console.log("data",data);
    var access_token = JSON.parse(localStorage.getItem("token"));

    const response = await axios
      .post("https://localhost:7043/api/Certificate/", bodyFormData, {
        headers: { Authorization: `bearer ${access_token}` },
      })
      .then((data) => {
        console.log(data);
        dispatch("loadDocuments");
      });
    console.log(response);
  }}},
};
