const mongoose = require('mongoose')
const dbUtill = require('../dbUtill/utills')

const doctorSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      max: 255
    },
    email: {
      type: String,
      required: true,
      max: 255,
      unique: true
    },
    password: {
      type: String,
      required: true,
      max: 1024,
      min: 6
    },
    field: {
      type: String,
      required: true
    },
    dob: {
      type: Date,
      required: true
    }
  },
  { timestamps: true }
)

module.exports = mongoose.model(dbUtill.DOCTOR, doctorSchema)

<<<<<<< HEAD
//sdfsadfhsjdf
//sdfjhsjdfsdfasssss
=======
//hello hi therer

>>>>>>> a9d777a50cac9138496461bc9d7fb498c6be0616
