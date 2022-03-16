// import mongoose
const mongoose = require('mongoose');

// export the database for use
module.exports = (DB) => {
    mongoose.connect(`mongodb://localhost/${DB}`)
        .then(() => console.log(`connect to ${DB} database`))
        .catch(err => console.log(`ERROR CAN NOT CONNECT to ${DB}`, err))
}