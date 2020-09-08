const express = require('express')

const app = express()
const port = 5000

//? Routes
const booksRouter = express.Router()

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


booksRouter.get('/', (req, res, next) => {
    res.send('books')
})
booksRouter.get('/about', (req, res, next) => {
    res.send('about books')
})

app.use('/books', booksRouter)
app.listen(port, () => {
    console.log('Server started in', port, new Date())
}) 
