const mongoose = require('mongoose')

const laptopSchema = new mongoose.Schema({
  title: {
    type:String,
    required:true
  },
  model:{
    type:Number,
    required:true
  },
  description:{
    type:String,
    required:true
  }
})

module.exports = mongoose.model('Laptop', laptopSchema)