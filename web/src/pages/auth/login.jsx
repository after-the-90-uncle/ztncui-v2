import React from "react";
// import { useProxy } from 'valtio';
import { useProxy } from 'valtio/utils'
import appState from "@/state/app.state";

const Login = () => {
  const appStateData = useProxy(appState.data);
  return <div>

    登录 yeman{appStateData.count}
  </div>
}

export default Login;