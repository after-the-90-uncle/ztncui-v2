import { proxy } from 'valtio';
import StateHandler from './handler';

// 创建一个 Valtio 状态对象
const appState = proxy({
  
});


export default StateHandler(appState,"appState");


