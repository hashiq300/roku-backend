const express = require('express');
const server = express();
const port = process.env.PORT || 5050;
const movieRoute = require("./routes/movie")
const cors = require("cors")

// configure the back end to accept incoming data
// either as a JSON payload or as form data (encoded url strings)
server.use(cors());
server.use(express.json());
server.use(express.urlencoded({ extended: false })); // url?key=value&&key=value

// this route manages user data
server.use('/ums', require('./routes/api'));

server.use("/api/movie",movieRoute)

server.listen(port, () => {
    console.log(`server is running on ${port}`);
})
