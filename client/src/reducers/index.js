import { combineReducers } from 'redux';

import formations from './formtions';
import categorie from './categorie';
import formateur from './formateur';
import centre from './centre';

export default combineReducers({ formations,categorie, formateur, centre
});
