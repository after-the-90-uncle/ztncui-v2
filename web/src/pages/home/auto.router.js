import Home from "./index";

const AuthRouter =  [
  {
    path:"/", 
    Component:Home,
    action(){
      console.log("执行")
    }
  },
]

export default AuthRouter