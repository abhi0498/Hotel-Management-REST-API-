# Hotel Management REST API

## Installation

### `yarn install`

## Running the server

### `yarn dev`

---

## API Usage

| API Endpoint                 | Method | Usage                                                                 |
| ---------------------------- | ------ | --------------------------------------------------------------------- |
| `/hotel`                     | GET    | Retrive data of all hotels                                            |
| `/hotel?search=<hotel_name>` | GET    | Retrieve data of hotels matching search query                         |
| `/add`                       | POST   | Add a new hotel to the db.                                            |
| `/delete/:hotel_id`          | DELETE | Remove hotel entry from db using hotel_id                             |
| `/update/:hotel_id`          | PATCH  | Change existing hotel data of specific    hotel mathing the hotel_id. |

---

## Parameters for POST and PATCH requests

### Include following parameters in body of POST/PATCH request

    hotel_name: String,
    no_of_rooms: { type: Number, default: 0 },
    available_no_of_rooms: { type: Number, default: 0 },
    location: {
        latitude: Number,
        longitude: Number
    },
    home_page: String,
    phone: String

[View More Projects By Me](https://github.com/abhi0498)
