export default (opinions = [], action) => {
    switch (action.type) {
      case 'FETCH_ALL':
        return action.payload;
      case 'CREATE3':
        return [...opinions, action.payload];
   
      default:
        return opinions;
    }
  };