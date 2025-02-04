import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {ConfigProvider,theme} from "antd"
import zhCN from 'antd/locale/zh_CN';
import 'dayjs/locale/zh-cn';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <ConfigProvider 
    locale={zhCN}
    theme={{
      
      // linkColor: '#0184ff',
      // successColor: '#52c41a'
    }}
  >
    <App />
  </ConfigProvider>
);

//严格模式会执行 2 遍
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
