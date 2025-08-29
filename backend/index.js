require('dotenv').config()

const express = require('express')
const cors = require('cors')
const knex = require('knex')( require('./knexfile')[process.env.NODE_ENV])
const app = express()
const port = process.env.EXPRESS_PORT

app.use(cors())
app.use(express.json())

app.listen(port, () => `Express has started on ${port}`)

app.get('/', (req, res) => {
  res.send('Movies API')
})

app.get('/movies', (req,res) => {
  knex('favorites')
  .select()
  .from('favorites')
  .then(data => {
    res.status(200).send(data)
  })
  .catch(err => {
    if(err){
      res.status(404).send(`Database is unable to respond to that request \n ${err}`)
    }
  })


})

