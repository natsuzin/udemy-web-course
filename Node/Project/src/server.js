const port = 3003 // sempre que for executar uma aplicação com rede, é necessário declarar uma porta
// porta é um processo dentro de um computador, é o que permite a comunicação com outro

const express = require('express')
const app = express()
app.use(express.json())
const database = require('./database')

app.get('/products', (req, res, next) => {
    console.log('Middleware 1...')
    next()
})

app.get('/products', (req, res) => {
    res.send(database.getAllProducts())
})

app.get('/products/:id', (req, res) => {
    res.send(database.getProduct(req.params.id))
})

app.post('/products', (req, res) => {
    const product = database.saveProduct({
        name: req.body.name,
        price: req.body.price
    })
    res.send(product)
})

app.listen(port, () => {
    console.log(`Servidor executando na porta ${port}`)
})

