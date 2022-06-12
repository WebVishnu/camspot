const path = require('path')
const express = require('express')
const hbs = require('hbs')
const app = express()


app.use(express.json())
app.use(express.urlencoded({ extended: false }))

const port = process.env.PORT || 3000

// =================================================================

const staticPath = path.join(__dirname, '/public')
const templatePath = path.join(__dirname, '/templates/views')
const partialsPath = path.join(__dirname, 'templates/partials')



// SETTING VIEW ENGINE
app.set('view engine', 'hbs')
app.set('views', templatePath)

// REGISTERING PARTIALS
hbs.registerPartials(partialsPath)

// STATIC PATH
app.use(express.static(staticPath))


app.get('/', (req, res) => {
    res.render('index/index')
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
    console.log(`click here to visit : http://localhost:${port}`)
})