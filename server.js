const cors = require('cors')
const express = require('express');
const app = express();
const axios = require('axios');

app.use(cors())

app.get('/', async (req, res) => {


  try {
    //É o response do axios, mas tirando junto o data junto dentro do response
    const { data } = await axios('https://jsonplaceholder.typicode.com/users')

    return res.json(data)
  } catch (error) {
    console.error(error)
  }
})

app.listen('8080')