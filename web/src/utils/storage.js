import objectPath from "object-path";
function Storage(store,storeKey='DgIotFrontend') {
  return {
    set: function (key, value) {
      if (!store) {
        return
      }
      const app = this.get(storeKey) || {}
      objectPath.set(app, key, value);
      if (!value) {
        return
      }
      store.setItem(storeKey, JSON.stringify(app))
    },
    get: function (key) {
      if (!store) {
        return
      }

      let value = store.getItem(storeKey);
      if (!value) return;
      const app = JSON.parse(value) ||{}
      return objectPath.get(app, key);
    },
    getOnce: function (key) {
      return this.get(key, true)
    },
    del: function (key) {
      if (!store) {
        return
      }
      const app = this.get(storeKey) || {};
      objectPath.del(app, key);
      store.setItem(storeKey, JSON.stringify(app))
    },
    clear: function () {
      store.clear()
    }
  }
}

export default Storage;

