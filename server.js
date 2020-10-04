const express = require('express')

const app = express()

const bodyParser = require('body-parser')

const morgan = require('morgan')

const serialRouter = require('./api/routes/central/serial')

const { port } = require("./config")

app.use(bodyParser.json())

app.use(bodyParser.urlencoded( { extended: true } ) )

app.use(morgan('tiny'))

app.use("/api/central/serial", serialRouter)

const server = app.listen(port, () => {

  console.log("App listening at http://localhost:" + port)

})

const io = require('./lib/socket').listen(server)

