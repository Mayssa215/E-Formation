export default (favorite = [], action) => {
    switch (action.type) {
case 'CREATE2' :
    return [...favorite, action?.data];
case 'FETCH_ALL2':
   return action?.data;
   case 'Delete':
    return action?.data;
    case 'Delete1':
        return favorite.filter((f) => f.idtraining !== action.idtraining);
    default:
    return favorite;
    }
};