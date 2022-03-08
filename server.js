const express = require('express')
const app = express()
const {greeting} = require('./user')

app.get('/', (req,res) => res.send('This App is running properly!'))
app.get('/ping', (req,res) => res.send('Pong!'))
app.get('/youtube', (req,res) => res.send('Hello, youtube indonesia!'))
app.get('/hello/:name', (req,res) => {
    res.json({message:greeting(req.params.name)})
})

const PORT = process.env.PORT || 4000
app.listen(PORT, () => {
    console.log(`This app running on http://localhost:${PORT}!`)
})
module.exports = app