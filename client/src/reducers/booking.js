export default (booking = [], action) => {
    switch (action.type) {
case 'CREATE1' :
    return [...booking, action?.payload];
case 'FETCH_ALL1':
   return action?.data;
   case 'Update':
   return action?.data;
case 'DELETE1':
    return booking.filter((book) => book.idtraining !== action.payload);
default:
    return booking;
    }
};