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
        message: 'connected'
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

app.get('/api/logout', (req, res) => {
  if (!req.session.userId) {
    res.status(401)
    res.json({
      message: 'you are already disconnected'
    })
  } else {
    req.session.userId = 0
    res.json({
      message: 'you are now disconnected'
    })
  }
})

const port = process.env.PORT || 4000
app.listen(port, () => {
  console.log(`listening on ${port}`)
})
