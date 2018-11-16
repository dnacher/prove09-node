const express = require('express')
const app = express()
const port = 5000
const url = require('url');

app.set('port', (process.env.PORT || 5000));

app.get('/', (req, res) => res.send('<h1>Hello World</h1>'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))