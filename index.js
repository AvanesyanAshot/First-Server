const express = require('express')

const app = express()

const product = ['brub', 'bruh']

app.get('/', (req, res, next) => {
    console.log(req.query.page)
    res.send('its working')
})
app.get('/products', (req, res, next) => {
    console.log('Page', req.query.page)
    res.send(product)
})
app.get('/products/:id', (req, res, next) => {
    res.send(product[req.params.id])
})
app.listen(5000, () => {
    console.log('Server started', new Date())
}) 
