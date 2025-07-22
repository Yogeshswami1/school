import React, { useEffect, useState } from 'react'
import StudentForm from '../components/StudentForm'
import StudentList from '../components/StudentList'
import { Row, Col, message } from 'antd'
import axios from 'axios'
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

const Home = () => {
  const [students, setStudents] = useState([])

  const fetchStudents = async () => {
    try {
      const res = await axios.get(`${BACKEND_URL}/api/students`)
      setStudents(res.data)
    } catch (err) {
      message.error('Failed to fetch students')
    }
  }

  useEffect(() => {
    fetchStudents()
  }, [])

  return (
    <Row gutter={[20, 20]}>
      <Col xs={24} md={10}>
        <StudentForm onStudentAdded={fetchStudents} />
      </Col>
      <Col xs={24} md={14}>
        <StudentList students={students} onStudentDeleted={fetchStudents} />
      </Col>
    </Row>
  )
}

export default Home
