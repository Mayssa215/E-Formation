import axios from 'axios';

const url = 'http://localhost:5030/user/signup';
const url1 = 'http://localhost:5030/user/signin';
const url2= 'http://localhost:5030/user/forgetpassword';
const url3= 'http://localhost:5030/user/resetpassword';
const url4= 'http://localhost:5030/user';




export const signUp = ( signData ) => axios.post(url, signData);
export const signIn = (signinData) => axios.post(url1,signinData );
export const forgetpass = (emailData) =>axios.put(url2,emailData);
export const restpass = (resetinfos) =>axios.put(url3,resetinfos);
export const updateUser = (id, userData) => axios.patch(`${url4}/${id}`, userData);
