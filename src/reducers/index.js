import {combineReducers} from 'redux'
import { authReducer as auth } from '../components/utils/OAuth2'

//import counterReducer from './counterReducer'
import categoria from './categoria-reducer'
import oficina from './oficina-reducer'
import tipoTrabajador from './tipoTrabajador-reducer'
import trabajador from './trabajador-reducer'
//import ecomm from './ecommReducer'
import themeReducer from './appLayoutReducer'


var reducers = combineReducers({
  auth: auth,
   // counter: counterReducer,
  categoria: categoria,
  oficina: oficina,
  tipoTrabajador: tipoTrabajador,
  trabajador: trabajador,
  //  ecomm: ecomm,
  theme:themeReducer,

});

export default reducers;