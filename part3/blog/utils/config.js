require("dotenv").config();

const PORT = process.env.PORT;
let MONGODB_URI = process.env.MONGODB_URI;

process.env.NODE_ENV == "test" ? MONGODB_URI = process.env.TEST_MONGODB_URI : null

module.exports = { PORT, MONGODB_URI }