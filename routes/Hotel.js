const express = require('express')
const router = express.Router()
const hotel = require('../models/Hotel')

//Get requests
router.get('/', (req, res) => {             //Route for getting hotels
    const searchQuery = req.query['search'] //Extract search query from url
    if (searchQuery) {                      //If search query exists in url
        hotel.find({ hotel_name: searchQuery })
            .then((data) => {
                if (data.length < 1) {
                    res.send("No results found")
                }
                else {
                    res.send(data)
                }
            })
    }
    else {                                                  //If no search query exists in url
        hotel.find()
            .then((data) => {
                res.send(data)
            })
    }


})



// router.route('/available').get((req, res) => {   //Route for available hotels
//     hotel.find({ available: true })
//         .then((data) => {
//             res.send(data)
//         })
// })


//Post requests
router.post('/add', (req, res) => {       //Add a new hotel
    const hotelDetails = {
        hotel_name: req.body.hotel_name,
        total_no_of_rooms: req.body.no_of_rooms,
        available_no_of_rooms: req.body.available_no_of_rooms,
        no_of_floors: req.body.no_of_floors,
        location: req.body.location,
        home_page: req.body.home_page,
        phone: req.body.phone
    }
    hotel.create(hotelDetails)
        .then((data) => {
            res.send(data)
        })
})


router.patch('/update/:hotel_id', (req, res) => {       //Add a new hotel

    hotel.updateOne({ _id: req.params.hotel_id }, {
        $set: {
            hotel_name: req.body.hotel_name,
            total_no_of_rooms: req.body.no_of_rooms,
            available_no_of_rooms: req.body.available_no_of_rooms,
            no_of_floors: req.body.no_of_floors,
            location: req.body.location,
            home_page: req.body.home_page,
            phone: req.body.phone
        }
    })
        .then((data) => {
            res.send(data)
        })
})

router.delete('/delete/:hotel_id', (req, res) => {       //Delete a  hotel using hotel_NO
    hotel.deleteOne({ _id: req.params.hotel_id })
        .then((data) => {
            res.send(data)
        })
})




//routes to change hotel availability
// router.patch('/book/:hotel_no', (req, res) => {       //Book  a  hotel using hotel_NO
//     hotel.updateOne({ hotel_number: req.params.hotel_no }, { $set: { is_available: false } })
//         .then((data) => {
//             if (data.nModified === 0)
//                 res.send('hotel is already booked.')
//             else res.send('Successfully booked')
//         })
// })


// router.patch('/unbook/:hotel_no', (req, res) => {       //UnBook  a  hotel using hotel_NO
//     hotel.updateOne({ hotel_number: req.params.hotel_no }, { $set: { is_available: true } })
//         .then((data) => {
//             if (data.nModified === 0)
//                 res.send('hotel is not booked.')
//             else res.send('Successfully unbooked')
//         })
// })


module.exports = router