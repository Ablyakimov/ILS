import React, { useState } from 'react'
import { Button, Modal, Form, Input, Space } from 'antd'
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons'
import { useDispatch } from 'react-redux'

import { addNewRoute } from '../store/routeReducer'

const formItemLayoutWithOutLabel = {
  wrapperCol: {
    xs: { span: 24, offset: 0 },
    sm: { span: 20, offset: 4 },
  },
}

const AddRoute = () => {
  const dispatch = useDispatch()
  const [form] = Form.useForm()
  const [isModalOpen, setIsModalOpen] = useState(false)

  const onFinish = (values) => {
    form.resetFields()
    dispatch(addNewRoute(values))
  }

  const showModal = () => {
    setIsModalOpen(true)
  }

  const handleOk = () => {
    form.resetFields()
    setIsModalOpen(false)
  }

  const handleCancel = () => {
    form.resetFields()
    setIsModalOpen(false)
  }

  return (
    <div>
      <Button onClick={() => showModal()} size='large'>
        Добавить маршрут
      </Button>
      <Modal open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <Form
          name='dynamic_form_item'
          {...formItemLayoutWithOutLabel}
          onFinish={onFinish}
          style={{ maxWidth: 400 }}
          form={form}
        >
          <Form.Item
            label='Название маршрута'
            name='routeName'
            rules={[{ required: true, message: 'Введите название маршрута!' }]}
          >
            <Input />
          </Form.Item>
          <Form.List name='waypoints'>
            {(fields, { add, remove }) => (
              <>
                {fields.map(({ key, name, ...restField }) => (
                  <Space
                    key={key}
                    style={{ display: 'flex', marginBottom: 8 }}
                    align='baseline'
                  >
                    <Form.Item
                      {...restField}
                      name={[name, 'lat']}
                      rules={[
                        { required: true, message: 'Напишите первое значение' },
                      ]}
                    >
                      <Input placeholder='Широта' type='number' />
                    </Form.Item>
                    <Form.Item
                      {...restField}
                      name={[name, 'lng']}
                      rules={[
                        { required: true, message: 'Напишите второе значение' },
                      ]}
                    >
                      <Input placeholder='Долгота' type='number' />
                    </Form.Item>
                    <MinusCircleOutlined onClick={() => remove(name)} />
                  </Space>
                ))}
                <Form.Item>
                  <Button
                    type='dashed'
                    onClick={() => add()}
                    block
                    icon={<PlusOutlined />}
                  >
                    Добавить точку
                  </Button>
                </Form.Item>
              </>
            )}
          </Form.List>
          <Form.Item className='modal-button__add'>
            <Button type='primary' htmlType='submit'>
              Добавить маршрут
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  )
}
export default AddRoute
