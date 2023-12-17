require('dotenv').config()

//express naam ka object/variable bana liya
const express = require('express')


//app express se bna hai therefore express ki saari
//functionality humne leli hai
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req,res) => {
    res.send('yogesh1789')
})

app.get('/login', (req,res) => {
    res.send('<h1>Shukriya!</h1>')
})


//  '/' lagana na bhulein
app.get('/youtube', (req,res) => {
    res.send('<h2>Lifes Good</h2>')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})