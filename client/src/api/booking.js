import axios from 'axios';

const url = 'http://localhost:5030/booking/reserver';
const url1= 'http://localhost:5030/booking/getbyid';
const url2= 'http://localhost:5030/booking/getvalider';
const url3= 'http://localhost:5030/booking/annuler';

const url4= 'http://localhost:5030/booking/delete';

export const reserverformation = (idtraining, RerservationData) => axios.post(url,RerservationData, {params:{idtraining}});
export const  getreservationbyid = (iduser) => axios.get(url1, {params:{iduser}});
export const getreservedtraining = (iduser,page) => axios.get(url2,{params:{iduser,page}});
export const annulerréservation = (iduser,idtraining) => axios.delete(url3,{params:{iduser,idtraining}});
export const réservationCancled = (iduser,idtraining) => axios.delete(url4,{params:{iduser,idtraining}});

