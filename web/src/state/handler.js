
import Storage from "../utils/storage";
import { subscribe } from 'valtio';
const storage = Storage(sessionStorage)

const StateHandler = (data,name) => {
  const key = `ztncui-v2-store.${name}`
  const savedState =storage.get(key);
  if (savedState) {
    Object.assign(data, savedState);
  }
  // 创建订阅，用于持久化状态到storage
  subscribe(data, () => {
    storage.set(key,data)
  });
  
  return {data,key}
}

export default StateHandler;