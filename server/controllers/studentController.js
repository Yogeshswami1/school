import Student from '../models/Student.js'

// Add new student
export const addStudent = async (req, res) => {
  try {
    const newStudent = new Student(req.body)
    await newStudent.save()
    res.status(201).json(newStudent)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}

// Get all students
export const getStudents = async (req, res) => {
  try {
    const students = await Student.find().sort({ createdAt: -1 })
    res.json(students)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}
export const deleteStudent = async (req, res) => {
  try {
    const student = await Student.findByIdAndDelete(req.params.id)
    if (!student) {
      return res.status(404).json({ message: 'Student not found' })
    }
    res.status(200).json({ message: 'Student deleted successfully' })
  } catch (error) {
    res.status(500).json({ message: 'Error deleting student', error })
  }
}
