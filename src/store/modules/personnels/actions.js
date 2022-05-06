export default {
    addPersonnel(context,data) {
        const personnelData = {
            id:'p6',
            name: data.name,
            email: data.email,
            password: data.password,
            date:data.date,
            position: data.position,
            areas: data.etat,


  
        };
        context.commit('addPersonnel',personnelData)
    }
  
  };
