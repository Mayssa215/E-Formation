const gouvernorat = (gouvernorat = [], action) => {
    switch (action.type) {
      case 'FETCH_ALL':
        return action.payload;
      default:
        return gouvernorat;
    }
  };
  export default gouvernorat;