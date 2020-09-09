const express = require('express')
const app = express()

const port = process.env.PORT || 8000

//? Routes
const booksRouter = express.Router()

const product = ['brub', 'bruh']

app.get('/', (req, res, next) => {
    console.log(req.query.page)
    res.end(`
    <div>
        <nav>
            <lu>
                <li><a href='/'>Home</a></li>
                <li><a href='/products'>Products</a></li>
            </lu>
        </nav>    
    </div> 
    <h1> Main page</h1>
    `)
})
app.get('/products', (req, res, next) => {
    console.log('Page', req.query.page)
    res.end(`
    <div>
        <nav>
            <lu>
                <li><a href='/'>Home</a></li>
                <li><a href='/products'>Products</a></li>
            </lu>
        </nav>    
    </div> 
    <h1> Produts page</h1>
    `)
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
    console.log(`Server was started on ${port} in ${new Date().toLocaleDateString()}`)
}) 
