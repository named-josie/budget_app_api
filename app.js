const express = require('express');
const transactionsController = require('./Controllers/transactions.controller')
const cors = require('cors');
const app = express();



app.use(cors());
app.use(express.json());
app.get('/', (req, res) => {
  res.send('Welcome to Budget App Backend!')
})
app.use((req, res, next) => {
  console.log('REQUEST MADE', req.method, req.url)
  next()
})
app.use('/transactions', transactionsController)
app.use('*', (req, res) => {
  res.status(404).send('Oops! Nothing to see here.')
})
module.exports = app