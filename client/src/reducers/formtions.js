export default (formations = [], action) => {
  switch (action.type) {
    case 'FETCH_ALL':
      return action.payload;
    case 'DELETE':
      return formations.filter((formation) => formation._id !== action.payload);
    case 'CREATE':
      return [...formations, action.payload];
    case 'UPDATE':
      return formations.map((formation) => (formation._id === action.payload._id ? action.payload : formation));

    default:
      return formations;
  }
};