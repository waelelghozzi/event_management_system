
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Event= require('./model/Event');
const upload = require('./middleWare/upload')

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/mession0",{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=> console.log("Connected to DB"))
  .catch(console.error);

// get all events
app.get('/events',async (req,res)=>{
    const events =await Event.find();
    res.json(events);
});

// add a new event


app.post('/event/new',async (req,res)=>{
//app.post('/store',upload.single('image'),server.store)
    const event = new Event({
        title: req.body.title,
        description: req.body.description,
        address:req.body.address,
        image:req.body.image,
        date:req.body.date
    })
    try{
      if(req.file){
        event.image=red.file.path

      }
        const newEvent= await event.save()
        res.status(201).json(newEvent)
    }catch (err) {
        res.status(400).json({ message: err.message })
      }

})

//update event
app.patch('/event/update/:id', getEvent, async (req, res) => {
    if (req.body.title != null) {
      res.event.title = req.body.title
    }
    if (req.body.description != null) {
      res.event.description = req.body.description
    }
    if (req.body.address != null) {
      res.event.address = req.body.address
    }
    if (req.body.date != null) {
      res.event.date = req.body.date
    }
    try {
      const updatedEvent = await res.event.save()
      res.json(updatedEvent)
    } catch (err) {
      res.status(400).json({ message: err.message })
    }
  })

  app.delete('/event/delete/:id', getEvent, async (req, res) => {
    try {
      await res.event.remove()
      res.json({ message: 'Deleted event' })
    } catch (err) {
      res.status(500).json({ message: err.message })
    }
  })
  
  //get event by id
    async function getEvent(req, res, next) {
    let event
    try {
      event = await Event.findById(req.params.id)
      if (event == null) {
        return res.status(404).json({ message: 'Cannot find event' })
      }
    } catch (err) {
      return res.status(500).json({ message: err.message })
    }
  
    res.event = event
    next()
  }
  
  app.listen(3001,()=> console.log("Server started on port 3001"));