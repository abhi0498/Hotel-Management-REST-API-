const mongoose = require('mongoose')


const RoomSchema = mongoose.Schema(
    {
        room_number: String,
        floor_number: Number,
        is_available: Boolean
    }
)

module.exports = mongoose.model('Room', RoomSchema)