import { useProxy } from 'valtio/utils'
const states = require.context('@/state', true, /\.state\.js?$/);
const store = {};
states.keys().forEach((key) => {
  const state = require(`@/state/${key.replace("./","")}`).default;
  store[state.key.replace("ztncui-v2-store.","")] = state.data;
})
function useStore(key){
  if(!store[key]){
    console.log(store)
    throw new Error(`只能监听:${Object.keys(store).join(",")}`);
  }
  return useProxy(store[key])
}
export {useStore};
export default store;
