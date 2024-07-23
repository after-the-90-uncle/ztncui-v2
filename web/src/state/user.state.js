import { proxy } from 'valtio';
import StateHandler from './handler';

const userState = proxy({
  user:{},
});


export default StateHandler(userState,"userState");


