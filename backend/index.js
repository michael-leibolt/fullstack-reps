require('dotenv').config()

const express = require('express')
const app = express()
const cors = require('cors')
const knex = require('knex')( require('./knexfile')[process.env.NODE_ENV])
const port = process.env.EXPRESS_PORT

app.use(express.json())
app.use(cors())

app.listen(port, () => console.log(`Express started on ${port}`))

app.get('/', (req,res) => {
  res.status(200).send('Good Request to Movies API')
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
      res.status(404).send(`Bad Request \n ${err}`)
    }
  })
})