/**
 * Created by saqib on 7/3/2018.
 */

const express = require('express')
// to parse json data
const bodyParser = require('body-parser')
// server to be hosted on different domain
const cors = require('cors')
// print logs on console as script changes
const morgan = require('morgan')

const app = express()

app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

app.get('/status', (req, res) => {
    res.send({
        message: 'Holaaaaaaaaaaaa'
    })
})

app.listen(process.env.PORT || 8081)