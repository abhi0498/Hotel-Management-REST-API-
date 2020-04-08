const mongoose = require('mongoose')


const HotelSchema = mongoose.Schema(
    {
        hotel_name: String,
        total_no_of_rooms: { type: Number, default: 0 },
        available_no_of_rooms: { type: Number, default: 0 },
        location: {
            latitude: Number,
            longitude: Number
        },
        home_page: String,
        phone: String
    }
)

module.exports = mongoose.model('Hotel', HotelSchema)