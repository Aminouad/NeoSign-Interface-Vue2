import axios from "axios";
export default {
  async login(context, payload) {
    const responseToken = await axios.post(
      "https://localhost:7043/api/Auth/login",
      {
        email: payload.email,
        password: payload.password,
        returnSecureToken: true,
      }
    );
    let responseOK = responseToken.status === 200;

    if (
      responseOK &&
      (responseToken.data === "User not found." ||
        responseToken.data === "Wrong password.")
    ) {
      //  console.log(response);
      const error = new Error(
        "Authentification erronée! Merci de vérifier vos données"
      );
      throw error;
    }

    if (responseToken && responseOK) {
      var access_token = responseToken.data;
      localStorage.setItem("token", JSON.stringify(access_token));
      /* var decoded = jwt_decode(response.data)
        console.log('decoded', decoded)
            console.log(decoded); */

      const responseUserInfo = await axios.get(
        "https://localhost:7043/api/Auth",
        {
          headers: { Authorization: `bearer ${access_token}` },
        }
      );
      localStorage.setItem(
        "userId",
        JSON.stringify(responseUserInfo.data.userName)
      );
      localStorage.setItem(
        "role",
        JSON.stringify(responseUserInfo.data.role)
      );

        context.commit("setUser", {
          token: access_token,
          userId: responseUserInfo.data.userName,
          role: responseUserInfo.data.role,
        });
    }
  },
  logout({commit}) {
    commit("logout")
  }
};
