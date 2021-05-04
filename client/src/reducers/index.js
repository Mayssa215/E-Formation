import { combineReducers } from 'redux';

import formations from './trainings';
import categorie from './categorie';
import formateur from './former';
import centre from './centre';
import gouvernorat from './gouvernorat';
import cities from './cities';
import authification from './authentification';
import booking from './booking';
import favorite from './favorite';
import opinions from './opinion';


export default combineReducers({ formations,categorie, formateur, centre, gouvernorat, cities,authification,booking,favorite,opinions
});
