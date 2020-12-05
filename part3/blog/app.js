const config = require("./utils/config");
const express = require("express");
const app = express();
const middleware = require("./utils/middleware")
const blogsRouter = require("./controllers/blogs")
const cors = require("cors");
const logger = require("./utils/logger");
const mongoose = require("mongoose");

logger.info(`connecting to`, config.MONGODB_URI, process.env.NODE_ENV);

mongoose.connect(config.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })
    .then(() => logger.info("Connected to mongoose"))
    .catch(error => logger.error("Error connecting to Mongoose", error.message))

app.use(cors());
app.use(express.static("build"));
app.use(express.json());
app.use(middleware.requestLogger)

app.use('/', blogsRouter)

app.use(middleware.unknownEndpoint)
app.use(middleware.errorHandler)

module.exports = app;