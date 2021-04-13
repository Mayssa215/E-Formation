import axios from "axios";
const url = 'http://localhost:5030/admin/signin';


export const signIn = (signinData) => axios.post(url,signinData );