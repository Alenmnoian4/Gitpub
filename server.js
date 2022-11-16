
const express = require('express')
const app = require(express())
const port = 3000
const drinks = require('./models/drinks.js')

const choices = (req) => {
    console.log(`${req.method} ${req.url}`)
    console.log(req.params)
    
}

app.get('/', (req, res) => {
    choices(req)
    res.send('Welcome to the Gitpub App!')
})

app.get('/drinks', (req, res) => {
    res.render('index', {drink: drinks})
})

app.get('drinks/:id', (req, res) => {
    res.render('show', {drink: drinks[req.params.id]})
})

app.listen(port, () => {
    console.log('running', port)
})