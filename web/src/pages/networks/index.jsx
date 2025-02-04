import { useEffect, useState } from "react";
import api from "@/api";
import { Table, Space, Typography, Card } from "antd";
const { Text, Link } = Typography;

const Networks = () => {
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

  }, [])

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
        title: '网络名称',
        dataIndex: '网络名称',
        key: '网络名称',
      },
      {
        title: '网络ID',
        dataIndex: '网络ID',
        key: '网络ID',
      },
      {
        title: '操作',
        dataIndex: 'action',
        key: 'action',
        render: () => {
          return (
            <Space>
              <Link href="#" target="_blank">管理</Link>
              <Link >删除</Link>
            </Space>
          )
        }
      },
    ]
  }

  return (
    <div>
      <Card title="网络列表">
        <Table
          bordered
          loading={false}
          columns={getColumns()}
          size="small"
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


export default Networks;