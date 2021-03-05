export default (centre = [], action) => {
    switch (action.type) {
      case 'FETCH_ALL':
        return action.payload;
    
      
      default:
        return centre;
    }
  }
  