//Importing Libraries
const express = require('express')
const mongoose = require('mongoose')
const app = express()
const morgan = require('morgan')
//Importing routes
const roomRoute = require('./routes/room')


//MiddleWare
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(morgan('combined')) //server side requests logging

//Connecting to DB
mongoose
    .connect("mongodb://127.0.0.1:27017/hotel_managment", {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log("Connected to Mongo"))
    .catch(err => console.log(err));


//Defining route for the server
const port = process.env.PORT || 5000;

//Home route
app.get('', (req, res) => {
    res.send('Welcome to Hotel Management API')
})

//USing Imported Routes
app.use('/room', roomRoute)



app.listen(port, () => {
    console.log("Server running on port " + port)
});
