import { combineReducers } from 'redux';
import formations from './trainings';

import categorie from './categorie';
import booking from './booking';
import gouvernorat from './gouvernorat';
import cities from './cities';
import authification from './authentification';
import favorite from './favorite';
import opinions from './opinions';
export default combineReducers({authification,formations,cities,gouvernorat,categorie,booking,favorite,opinions
});
