const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EventSchema = new Schema({
    title:{
        type: String,
        required:true
    },
    description:{
        type: String,
        required:true
    },
    date:{
        type: Date,
        required:true
        //,default: Date.now
    },
    address:{
        type: String,
        required:true
    },
    image: {
        type: String,
    }

})

const Event = mongoose.model("Event",EventSchema);
module.exports=Event;