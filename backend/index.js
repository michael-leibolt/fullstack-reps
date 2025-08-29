require('dotenv').config()

const express = require('express')
const cors = require('cors')
const app = express()
const port = process.env.EXPRESS_PORT
const knex = require('knex')( require('./knexfile')[process.env.NODE_ENV])

app.use(express.json())
app.use(cors())

app.listen(port, () => console.log(`Express has started on ${port}`))

app.get('/', (req,res) => {
  res.status(200).send('Express works')
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
      res.status(404).send(`DB is unable to get that data \n ${err}`)
    }
  })
})