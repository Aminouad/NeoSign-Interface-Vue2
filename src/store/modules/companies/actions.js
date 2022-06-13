import axios from "axios";
export default {
  async addCompany(context, data) {
    var masterEmail = JSON.parse(localStorage.getItem("userEmail"));
    var role = "Admin" + data.name;

    const comapanyData = {
      contact: data.email,
      name: data.name,
      role: role,
      phone: data.phone,
      address: data.address,
      etat: data.etat,
      date: data.date,
      password: data.password,
      master: masterEmail,
    };

    var access_token = JSON.parse(localStorage.getItem("token"));
    await axios.post(
      "https://localhost:7043/api/company/register",
      comapanyData,
      {
        headers: { Authorization: `bearer ${access_token}` },
      }
    );
    context.commit("addCompany", comapanyData);
  },
  async deleteCompany({ dispatch }, data) {
    var access_token = JSON.parse(localStorage.getItem("token"));
    await axios
      .delete("https://localhost:7043/api/Company/" + data, {
        headers: { Authorization: `bearer ${access_token}` },
      })
      .then(() => {
        dispatch("loadCompanies");
      });
  },
  async loadCompanies({ commit }) {
    var access_token = JSON.parse(localStorage.getItem("token"));
    const response = await axios.get("https://localhost:7043/api/Company/", {
      headers: { Authorization: `bearer ${access_token}` },
    });
    const responseData = response.data;
    let responseOK = response.status === 200;

    if (!responseOK) {
      const error = new Error(responseData.message || "Erreur de serveur!");
      throw error;
    }
    const companies = [];
    for (const key in responseData) {
      const document = {
        id: responseData[key].Id,
        name: responseData[key].Name,
        contact: responseData[key].Contact,
        phone: responseData[key].Phone,
        address: responseData[key].Address,
        etats: [responseData[key].Etat],
        date: responseData[key].Date,
      };
      companies.push(document);
    }
    commit("setCompanies", companies);
  },
};
