import React, { useMemo } from 'react'
import { Button, Table } from 'antd'
import { useDispatch } from 'react-redux'
import { removeRoute, selectRoute } from '../store/routeReducer'
import { DeleteOutlined } from '@ant-design/icons'
import AddRoute from './AddRoute'

const FlightsTable = ({ allRoutes }) => {
  const dispatch = useDispatch()

  const columns = useMemo(
    () => [
      {
        title: 'Id',
        dataIndex: 'key',
      },
      {
        title: 'Название',
        dataIndex: 'routeName',
      },
      {
        title: 'Точки',
        dataIndex: 'waypoints',
        render: (waypoints) =>
          waypoints.map((waypoint) => (
            <div>
              {waypoint.lat} {waypoint.lng}
            </div>
          )),
      },
      {
        title: 'Удалить',
        key: 'delete',
        render: (_, route) => (
          <Button
            onClick={() => dispatch(removeRoute(route.key))}
            icon={<DeleteOutlined />}
            size='large'
          />
        ),
      },
    ],
    []
  )

  const onChange = (_, selectedRows) => {
    dispatch(selectRoute(selectedRows[0]))
  }

  return (
    <div>
      <Table
        rowSelection={{
          type: 'radio',
          onChange,
        }}
        size='small'
        columns={columns}
        dataSource={allRoutes}
        pagination={{
          pageSize: 5,
        }}
        scroll={{
          x: 'auto',
          y: 240,
        }}
      />
      <AddRoute />
    </div>
  )
}
export default FlightsTable
