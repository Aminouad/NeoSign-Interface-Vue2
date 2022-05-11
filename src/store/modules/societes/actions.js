export default {
    addSociete(context,data) {
        const societeData = {
           
                id:'d6',
                name: data.name,
                contact: data.email,
                password:data.password,
                date: data.date,
                etats: data.etats,
  
        };
        context.commit('addSociete',societeData)
    }
  
  };

 