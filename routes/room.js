const express = require('express')
const router = express.Router()
const Room = require('../models/Room')

//Get requests
router.get('/', (req, res) => {             //Route for getting rooms
    const searchQuery = req.query['search'] //Extract search query from url
    if (searchQuery) {                      //If search query exists in url
        Room.find({ room_number: searchQuery })
            .then((data) => {
                if (data.length < 1) {
                    res.send("No results found")
                }
                else {                      //If no search query exists in url
                    res.send(data)
                }
            })
    }
    else {
        Room.find()
            .then((data) => {
                res.send(data)
            })
    }


})



router.get('/available', (req, res) => {   //Route for available rooms
    Room.find({ available: true })
        .then((data) => {
            res.send(data)
        })
})


//Post requests
router.post('/add', (req, res) => {       //Add a new room
    const RoomDetails = {
        room_number: req.body.room_number,
        floor_number: req.body.floor_number,
        is_available: req.body.availability
    }
    console.log(req.body)
    Room.create(RoomDetails)
        .then((data) => {
            res.send(data)
        })
})



module.exports = router