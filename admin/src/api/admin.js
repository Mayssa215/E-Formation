import axios from "axios";
const url = 'http://localhost:5030/admin/signin';
const url1 = 'http://localhost:5030/admin';


export const signIn = (signinData) => axios.post(url,signinData );
export const updateadmin = (id, userData) => axios.patch(`${url1}/${id}`, userData);


