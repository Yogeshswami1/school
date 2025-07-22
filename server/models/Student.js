import mongoose from 'mongoose'

const studentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  rollNo: { type: String, required: true, unique: true },
  className: { type: String, required: true },
  contact: { type: String },
}, {
  timestamps: true,
})

export default mongoose.model('Student', studentSchema)
