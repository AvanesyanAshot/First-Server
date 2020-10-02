const express = require('express')
const config = require('config')
const cors = require('cors')

const app = express()

//! Middleware
app.use(cors())

const PORT = config.get('port') || 8000

//? Routes
const booksRouter = express.Router()

const product = ['brub', 'bruh']

app.get('/', (req, res, next) => {
    console.log(req.query.page)
    res.send('Hello world')
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

function start() {
    try {
        app.listen(PORT, () => {
            console.log(`Server has been started on ${PORT} in ${new Date().toLocaleDateString()}`)
        })
    } catch (e) {
        console.log('Server error', e.message)
        process.exit(1)
    }
}

start()

