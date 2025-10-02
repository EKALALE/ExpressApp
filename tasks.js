//MOONGOOSE MODEL
const mongoose =require('mongoose');

//defining schema
const TaskSchema = new mongoose.Schema({
    title:{type:String
        ,required:true
    },
    description:String,
    completed:{type:Boolean,
        default:false}
},
    {timestamps:true}
);
 
// create a model
 const Task = mongoose.model('Task',TaskSchema);
 module.exports = Task;
