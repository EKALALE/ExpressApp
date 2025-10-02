// The file is Express server setup with mongodb connection and routing
const express =require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
require('dotenv').config();


const app = express();
const PORT = 3000;
 
// middlewares
app.use(express.json());

//mongodb connection

mongoose.connect(process.env.MONGO_URI )
.then(() => console.log("mongodb connected successefully"))
.catch(err => console.error("Mongodb connection failure or error", err));


// use routes

app.use('/api',routes);

app.listen(PORT,() =>{
    console.log(`server running on http://localhost:${PORT}`);
});
