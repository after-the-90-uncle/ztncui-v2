import { createBrowserRouter } from 'react-router-dom'
import ZTLayout from "@components/layout";
import {redirect} from "react-router-dom"
import store from "@/state";
const pages = require.context('@/pages', true, /\/auto\.router\.js?$/);


const layoutRoutes = [] , noLayoutRoutes = [];

pages.keys().forEach((key) => {
  require(`@/pages/${key.replace("./","")}`).default.forEach((item) => {
    if(item.layout === false){
      noLayoutRoutes.push(item)
    }else{
      layoutRoutes.push(item)
    }
  });
})
export default createBrowserRouter([
  {
    id: "root",
    path: "/",
    Component: ZTLayout,
    children: [...layoutRoutes],
    // loader:() => {
    //   if(!store.userState.user._id){
    //     return redirect("/login")
    //   }
    //   return store.userState.user
    // }
  },
  {
    id: "logout",
    children: [{path:"/logout", },],
    loader:() => {
      return redirect("/login")
    }
  },
  {
    id: "noAuth",
    children: [...noLayoutRoutes],
    loader:() => {
      if(store.userState.user._id){
        return redirect("/")
      }
      return {}
    }
  },
]);
export {
  layoutRoutes,
  noLayoutRoutes
};


