import axios from 'axios'

export default {
   
    async addSociete(context,data) {
        var masterEmail = JSON.parse(localStorage.getItem("userEmail"));
        var role='Admin'+data.name;

        const societeData = {
           
            "contact": data.email,
            "name": data.name,
            "role": role,
            "etat": data.etat,
            "date": data.date,
            "password":data.password,
            "master":masterEmail

    };


        
          var access_token = JSON.parse(localStorage.getItem("token"));
        console.log(societeData);
          const response = await axios
            .post("https://localhost:7043/api/company/register", societeData, {
              headers: { Authorization: `bearer ${access_token}` },
            })
            .then((data) => {
              console.log(data);
            });
          console.log(response);
          context.commit('addSociete',societeData)

      },


    /* addSociete(context,data) {
        const societeData = {
           
                id:'d6',
                name: data.name,
                contact: data.email,
                password:data.password,
                date: data.date,
                etats: data.etats,
  
        };
        context.commit('addSociete',societeData)
    } */
  
  };

 