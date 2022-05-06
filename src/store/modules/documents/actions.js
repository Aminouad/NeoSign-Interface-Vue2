export default {
    addDocument(context,data) {
        const documentData = {
            id:'d6',
            name: data.name,
            type: data.type,
            description:data.description,
            date: data.date,
            areas: data.areas,

            path:data.path
  
        };
        context.commit('addDocument',documentData)
    }
  
  };

  