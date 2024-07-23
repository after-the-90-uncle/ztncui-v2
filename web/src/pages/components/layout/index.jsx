
import { useEffect, useState } from "react";
import { useProxy } from 'valtio/utils'
import { useStore } from "@/state";
import { useNavigate, useLocation, Outlet } from "react-router-dom"
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import style from "./index.module.less";
const { Header, Content, Footer } = Layout;

const ZTLayout = () => {
  const userState = useStore("userState")
  const { user } = userState;
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedKeys, setSelectedKeys] = useState([]);
  // const dd = useProxy()
  // console.log(dd, "--dd")
  useEffect(() => {

  }, [])

  function onSelect(item) {
    if (item.key === "logout") {
      return
    }
    navigate(item.key)
    setSelectedKeys([item.key])
  }


  return (
    <Layout className={style.layout}>
      <Header className={style.header}>
        <div className={style.logo} />
        <Menu
          theme="dark"
          mode="horizontal"
          selectedKeys={selectedKeys}
          onSelect={onSelect}
          items={[
            {
              key: '/',
              label: '首页',
            },
            {
              key: '/doaim',
              label: '域名配置',
            },
            {
              key: '/networks',
              label: '局域网管理',
            },
            {
              key: '/users',
              label: '用户管理',
            },
          ]}
        />
      </Header>
      <Content className={style.content}>
        <div className={style.body}>
          <Outlet />
        </div>
      </Content>
      <Footer className={style.footer}>
        Ant Design ©{new Date().getFullYear()} Created by Ant UED
      </Footer>
    </Layout>
  )
}
export default ZTLayout
