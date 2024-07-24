import { useEffect, useState } from "react";
import api from "@/api";
import { Table, Space, Typography, Card } from "antd";
const { Text, Link } = Typography;

const Detail = () => {
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
        title: '成员昵称',
        dataIndex: '成员昵称',
        key: '成员昵称',
      },
      {
        title: '成员ID',
        dataIndex: '成员ID',
        key: '成员ID',
      },
      {
        title: '授权',
        dataIndex: '授权',
        key: '授权',
      },
      {
        title: '桥接',
        dataIndex: '桥接',
        key: '桥接',
      },
      {
        title: 'IP',
        dataIndex: 'IP',
        key: 'IP',
      },
      {
        title: '状态',
        dataIndex: '状态',
        key: '状态',
      },
      {
        title: '对等地址',
        dataIndex: '对等地址',
        key: '对等地址',
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
      <Card title="数链科技">
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

export default Detail;