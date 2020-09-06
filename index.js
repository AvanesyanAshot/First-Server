const express = require('express')

const app = express()

app.get('/', (req, res, next) => {
    res.send('its working')
})

app.listen(5000, () => {
    console.log('Server started', new Date());
}) 