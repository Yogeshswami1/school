    import React, { useState } from 'react'
    import { Form, Input, Button, message, Card } from 'antd'
    import axios from 'axios'
    const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

    const StudentForm = ({ onStudentAdded }) => {
    const [loading, setLoading] = useState(false)

    const onFinish = async (values) => {
        try {
        setLoading(true)
        await axios.post(`${BACKEND_URL}/api/students`, values)
        message.success('Student added successfully!')
        onStudentAdded() // 👈 important: refresh list

        setLoading(false)
        } catch (err) {
        message.error('Failed to add student')
        setLoading(false)
        }
    }

    return (
        <Card title="Add Student">
        <Form layout="vertical" onFinish={onFinish}>
            <Form.Item name="name" label="Full Name" rules={[{ required: true }]}>
            <Input placeholder="Enter student name" />
            </Form.Item>

            <Form.Item name="rollNo" label="Roll No" rules={[{ required: true }]}>
            <Input placeholder="Enter roll number" />
            </Form.Item>

            <Form.Item name="className" label="Class" rules={[{ required: true }]}>
            <Input placeholder="e.g. 10A" />
            </Form.Item>

            <Form.Item name="contact" label="Contact">
            <Input placeholder="Phone or Email" />
            </Form.Item>

            <Form.Item>
            <Button type="primary" htmlType="submit" loading={loading}>
                Add Student
            </Button>
            </Form.Item>
        </Form>
        </Card>
    )
    }

    export default StudentForm
