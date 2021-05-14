const categorie=  (categorie = [], action) => {
    switch (action.type) {
      case 'FETCH_ALL':
        return action.payload;
        case 'CREATE' :
          return [...categorie, action.payload]; 
          case 'UPDATE':
        return categorie.map((categ) => (categ._id === action.payload._id ? action.payload : categ));
        case 'DELETE':
          return categorie.filter((categ) => categ._id !== action.payload);
      default:
        return categorie;
    }
  };
  export default categorie;