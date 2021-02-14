const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.get('/', (req, res) => {
  res.send('Hello World - Rohith!')
})

app.get('/about', (req, res) => {
    res.send("A node-express example.")
  })
  
  app.get('/contact', (req, res) => {
    res.send("You can contact me on s538294@nwmissouri.edu")
  })
  
  app.get('/help', (req, res) => {
    res.send(`Go to contact page`)
  })

  app.get('/help/:topic', (req, res) => {
    res.send(`Help number ${req.params.topic}`)
  })
  

app.listen(port, () => {
  console.log(`App running at http://localhost:${port}`)
})