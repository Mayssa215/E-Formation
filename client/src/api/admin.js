import axios from "axios";
const url = 'http://localhost:5010/admin/signin';


export const signIn = (signinData) => axios.post(url,signinData );