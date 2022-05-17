const express = require('express')

const router = express.Router()
const Laptop = require('../models/laptop')
const app = express()


//Getting all laptops
router.get('/', async (req:any, res:any) => {
  const laptops = await Laptop.find()
  res.status(200).json(laptops)
})


router.post('/', async(req:any, res:any) => {
  const laptop = new Laptop({
    title:req.body.title,
    description:req.body.description,
    model:req.body.model
  })

  try {
    const newLaptop = await laptop.save();
    res.status(201).json(newLaptop)
  } catch(err:any){
    res.status(400).json(err.message)
  }

})

module.exports = router