/**
 *
 * entrez la commande suivante:
 * npm install --save express express-session body-parser morgan cors
 * puis node server.js
 * exemple complet à l'adresse https://github.com/Musinux/first-vue-app
 */
const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const cors = require('cors')
const session = require('express-session')

const app = express()

app.use(session({
  secret: 'secret', // changez cette valeur
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false } // ne changez que si vous avez activé le https
}))
app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(cors())

const path = require('path')
app.use(express.static(path.join(__dirname, 'dist/')))

const users = [{
  name: 'admin',
  password: 'admin'
},
{
  name: 'test',
  password: 'test'
}]

const shoe = [{
  id: '1',
  name: 'Originals Falcon',
  price: '90 $',
  brand: 'Adidas',
  img: 'https://i1.adis.ws/i/jpl/jd_336202_a?qlt=80&w=600&h=425&v=1&fmt=webp'
},
{
  id: '2',
  name: 'RS-X',
  price: '110 $',
  brand: 'Puma',
  img: 'https://i1.adis.ws/i/jpl/jd_183890_a?qlt=80&w=600&h=425&v=1&fmt=webp'
},
{
  id: '3',
  name: 'Air Force 1',
  price: '100 $',
  brand: 'Nike',
  img: 'https://i1.adis.ws/i/jpl/jd_333370_a?qlt=80&w=600&h=425&v=1&fmt=webp'
},
{
  id: '4',
  name: 'Air Max 270 React',
  price: '160 $',
  brand: 'Nike',
  img: 'https://i1.adis.ws/i/jpl/jd_333714_a?qlt=80&w=600&h=425&v=1&fmt=webp'
},
{
  id: '5',
  name: 'Originals Stan Smith',
  price: '100 $',
  brand: 'Adidas',
  img: 'https://i1.adis.ws/i/jpl/jd_181801_a?qlt=80&w=600&h=425&v=1&fmt=webp'
},
{
  id: '6',
  name: 'Chuck Taylor All Star Archive High',
  price: '80 $',
  brand: 'Converse',
  img: 'https://i1.adis.ws/i/jpl/jd_152961_a?qlt=80&w=600&h=425&v=1&fmt=webp'
},
{
  id: '7',
  name: 'Old Skool',
  price: '75 $',
  brand: 'Vans',
  img: 'https://i1.adis.ws/i/jpl/jd_058318_a?qlt=80&w=600&h=425&v=1&fmt=webp'
},
{
  id: '8',
  name: 'Ray Tracer',
  price: '85 $',
  brand: 'Fila',
  img: 'https://i1.adis.ws/i/jpl/jd_160659_a?qlt=80&w=600&h=425&v=1&fmt=webp'
},
{
  id: '9',
  name: 'Sk8-Hi',
  price: '85 $',
  brand: 'Vans',
  img: 'https://i1.adis.ws/i/jpl/jd_358096_a?qlt=80&w=600&h=425&v=1&fmt=webp'
},
{
  id: '10',
  name: 'Disruptor II',
  price: '100 $',
  brand: 'Fila',
  img: 'https://i1.adis.ws/i/jpl/jd_165044_a?qlt=80&w=600&h=425&v=1&fmt=webp'
},
{
  id: '11',
  name: 'Air Force 1 Shadow',
  price: '110 $',
  brand: 'Nike',
  img: 'https://i1.adis.ws/i/jpl/jd_333411_a?qlt=80&w=600&h=425&v=1&fmt=webp'
},
{
  id: '12',
  name: 'Goldyn',
  price: '85 $',
  brand: 'Guess',
  img: 'https://i1.adis.ws/i/jpl/jd_173338_a?qlt=80&w=600&h=425&v=1&fmt=webp'
},
{
  id: '13',
  name: '452',
  price: '85 $',
  brand: 'New Balance',
  img: 'https://i1.adis.ws/i/jpl/jd_152456_a?qlt=80&w=600&h=425&v=1&fmt=webp'
},
{
  id: '14',
  name: 'Classic Leather',
  price: '100 $',
  brand: 'Reebok',
  img: 'https://i1.adis.ws/i/jpl/jd_151684_a?qlt=80&w=600&h=425&v=1&fmt=webp'
}]

app.post('/api/register', (req, res) => {
  console.log('req.body', req.body)
  const userSearch = users.find(u => u.name === req.body.name)
  console.log(userSearch)
  if (!userSearch) {
    res.json({
      message: 'error',
      status: true
    })
  } else {
    res.json({
      message: 'good',
      status: false
    })
  }
})

app.post('/api/login', (req, res) => {
  console.log('req.body', req.body)
  console.log(req.session.userId)
  if (!req.session.userId) {
    const user = users.find(u => u.name === req.body.name && u.password === req.body.password)
    if (!user) {
      res.json({
        status: false,
        message: 'error'
      })
    } else {
      // connect the user
      req.session.userId = 1000 // connect the user, and change the id
      res.json({
        status: true,
        message: 'connected',
        name: req.body.name
      })
    }
  } else {
    res.status(401)
    res.json({
      message: 'you are already connected'
    })
  }
})

app.post('/api/registered', (req, res) => {
  console.log('req.body', req.body)
  users.push({
    name: req.body.name,
    password: req.body.password
  })
})

app.post('/api/shoe', (req, res) => {
  console.log('req.body', req.body)
  const shoeSearch = shoe.find(s => s.id === req.body.id)
  console.log(shoeSearch)
  if (!shoeSearch) {
    res.json({
      message: 'error',
      status: false
    })
  } else {
    res.json({
      id: req.body.id,
      name: shoeSearch.name,
      price: shoeSearch.price,
      brand: shoeSearch.brand,
      img: shoeSearch.img
    })
  }
})

const port = process.env.PORT || 4000
app.listen(port, () => {
  console.log(`listening on ${port}`)
})
