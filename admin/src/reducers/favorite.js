const favorite = (favorite = [] , action) => {
    switch (action.type) {
        case 'FETCH_ALL':
        return action.payload;
          case 'CREATE' :
            return [...favorite, action?.data]; 
      default:
        return favorite;
    }
  } 
  export default favorite;