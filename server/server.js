
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express();
const PORT = 8000;
const DB = "review_db"

// limit 50mb to fix the 413 (Payload Too Large) .json({limit: '50mb'}) and urlencoded({limit: '50mb'}) 02/04/2022
app.use(cors(), express.json({limit: '50mb'}), express.urlencoded({ extended: true, limit: '50mb' }))


// link mongoose db
require('./config/mongoose.config')(DB)
// link product route
require("./routes/product.route")(app)
require("./routes/review.route")(app)

app.listen(PORT, () => console.log(`server up on port: ${PORT}`))