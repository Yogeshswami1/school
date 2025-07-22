import React from 'react'
import { Table, Card, Popconfirm, Button, message } from 'antd'
import axios from 'axios'
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

const StudentList = ({ students, onStudentDeleted }) => {
  const handleDelete = async (id) => {
    try {
      await axios.delete(`${BACKEND_URL}/api/students/${id}`)
      message.success('Student deleted successfully!')
      onStudentDeleted() // 👈 refresh list
    } catch (err) {
      message.error('Failed to delete student')
    }
  }

  const columns = [
    { title: 'Name', dataIndex: 'name' },
    { title: 'Roll No', dataIndex: 'rollNo' },
    { title: 'Class', dataIndex: 'className' },
    { title: 'Contact', dataIndex: 'contact' },
    {
      title: 'Action',
      render: (_, record) => (
        <Popconfirm
          title="Are you sure to delete?"
          onConfirm={() => handleDelete(record._id)}
          okText="Yes"
          cancelText="No"
        >
          <Button danger type="link">Delete</Button>
        </Popconfirm>
      ),
    },
  ]

  return (
    <Card title="All Students">
      <Table dataSource={students} columns={columns} rowKey="_id" />
    </Card>
  )
}

export default StudentList
