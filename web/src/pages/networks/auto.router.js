import Networks from "./index";
import Detail from "./detail";

const NetworksRouter =  [
  {
    path:"/networks", 
    Component:Networks,
  },
  {
    path:"/networks/detail", 
    Component:Detail,
  },
]

export default NetworksRouter