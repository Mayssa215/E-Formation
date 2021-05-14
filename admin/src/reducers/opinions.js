const opinions=  (opinions = [], action) => {
    switch (action.type) {
      case 'FETCH_ALL':
        return action.payload;
        case 'CREATE' :
          return [...opinions, action.payload]; 
          case 'update':
            return action.payload;
            case 'DELETE':
          return opinions.filter((opinion) => opinion._id !== action.payload);
      default:
        return opinions;
    }
  };
  export default opinions;