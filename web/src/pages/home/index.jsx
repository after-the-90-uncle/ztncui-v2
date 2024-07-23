import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"
import store, { useStore } from "@/state";
import { Table, Card } from "antd"
import api from "@/api";

const Home = () => {
  const appStateData = useStore("appState");
  let navigate = useNavigate();
  const [state, setState] = useState({
    reload: api.uid,
    dataSource: [],
    pagination: {
      current: 1,
      pageSize: 10,
      pageSizeOptions: [10, 20, 50],
      total: 0,
    }
  });

  useEffect(() => {
  }, []);

  function push() {
    navigate("/login")
  }


  const toPage = ({ current, pageSize, total }) => {
    state.reload = api.uid;
    state.pagination.current = current;
    state.pagination.pageSize = pageSize;
    state.pagination.total = total;
    setState({ ...state });
  };

  function getColumns() {
    return [
      {
        title: '昵称',
        dataIndex: '昵称',
        key: '昵称',
      },
      {
        title: '内网IP',
        dataIndex: '内网IP',
        key: '内网IP',
      },
      {
        title: '状态',
        dataIndex: '状态',
        key: '状态',
      },
      {
        title: 'IP地址',
        dataIndex: 'IP地址',
        key: 'IP地址',
      },
    ]
  }
  return (
    <div >
      <Card
        bordered={true}
        tabList={[
          { key: "1", tab: "检大师" },
          { key: "2", tab: "数链科技" }
        ]}
      >

        <Table
          bordered
          loading={false}
          columns={getColumns()}
          size="middle"
          dataSource={state.dataSource}
          scroll={{ x: 1800 }}
          onChange={toPage}
          rowKey={"_id"}
          pagination={state.pagination}
        />
      </Card>
    </div>
  )
}

export default Home;