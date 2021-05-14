const booking = (state = [] , action) => {
    switch (action.type) {
        case 'FETCH_ALL':
        return action.payload;
          case 'CREATE1' :
            return [...state, action?.data]; 
      default:
        return state;
    }
  } 
  export default booking;