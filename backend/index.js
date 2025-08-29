require('dotenv').config()


const express = require('express')
const cors = require('cors')
const app = express()
const port = process.env.EXPRESS_PORT

//app.use(cors())
//app.use(express.json())

app.listen(port, () => `Express has started on ${port}`)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

