const express = require('express')
const corss = require('cors')
const app = express()
const port = 8081

const climbers = [
  {
    id: '1',
    img: 'https://woguclimbing.com/wp-content/uploads/2017/06/alex-honnold-freerider-Jimmy-Chin-1024x539.jpg',
    name: 'Alex Honnold',
    age: '36',
    nationality: 'Estados Unidos',
    achievements: [
      'Primer ascenso en solitario y sin cuerda de El Capitán en Yosemite',

      'Ganador de múltiples premios de escalada',

      "Autor del libro 'Alone on the Wall'"
    ],
    link: 'http://www.alexhonnold.com/'
  },
  {
    id: '2',
    img: 'https://www.deaventura.pe/blog/wp-content/uploads/2014/11/Lynn-en-Nose.jpg',
    name: 'Lynn Hill',
    age: '60',
    nationality: 'Estados Unidos',
    achievements: [
      "Primera persona en escalar la vía 'The Nose' de El Capitán en Yosemite en libre",

      'Ganadora de múltiples campeonatos mundiales de escalada',

      "Autora del libro 'Climbing Free'"
    ],
    link: 'https://lynnhillclimbing.com/'
  },
  {
    id: '3',
    img: 'https://phantom-elmundo.unidadeditorial.es/db5769edebf93b0cdfb9feb050e3a7e2/crop/0x497/1146x1258/resize/746/f/jpg/assets/multimedia/imagenes/2020/07/29/15960458319949.jpg',
    name: 'Chris Sharma',
    age: '40',
    nationality: 'Estados Unidos',
    achievements: [
      "Primer ascenso de la vía 'Biographie' en Céüse, Francia",

      'Ganador de múltiples competencias de escalada deportiva',

      "Creador de la serie de videos de escalada 'Progression'"
    ],
    link: ''
  },
  {
    id: '4',
    img: 'https://www.lacrux.com/wp-content/uploads/2018/04/Warum-Adam-Ondra-Silence-mit-9c-bewertete-1024x444.jpg',
    name: 'Adam Ondra',
    age: '30',
    nationality: 'República Checa',
    achievements: [
      "Primer ascenso de la vía 'Silence' en Flatanger Cave, Noruega",

      'Ganador de múltiples campeonatos mundiales de escalada',

      'Primer escalador en encadenar una vía de grado 5.15c'
    ],
    link: 'https://www.adamondra.com/'
  },
  {
    id: '5',
    img: 'https://woguclimbing.com/wp-content/uploads/2019/08/Janja-Garnbret-web-1024x795.jpg',
    name: 'Janja Garnbret',
    age: '22',
    nationality: 'Eslovenia',
    achievements: [
      'Ganadora de múltiples campeonatos mundiales de escalada en dificultad y combinada',
      'Medallista de oro en los Juegos Olímpicos de Tokio 2020 en la modalidad de escalada combinada',
      'Primera mujer en encadenar una vía de grado 5.15b'
    ],
    link: 'https://janja-garnbret.com/'
  },
  {
    id: '6',
    img: 'https://woguclimbing.com/wp-content/uploads/2018/10/Margo-Hayes-8c-Oliana_web-1024x641.jpg',
    name: 'Margo Hayes',
    age: '30',
    nationality: 'Estados Unidos',
    achievements: ['Primera mujer escaladora en hacer 9a+'],
    link: ''
  }
]
const routes = [
  {
    id:'1',
    name: 'Ghandi',
    crag: 'Valdegovia',
    grade: '8a'
  },
  {
    id:'2',
    name: 'El juego de Ender',
    crag: 'Peña Pintada',
    grade: '8a'
  },
  {
    id:'3',
    name: 'Reload',
    crag: 'Fin del Mundo',
    grade: '8a'
  },
  {
    id:'4',
    name: 'Crianza Matanza',
    crag: 'Cuenca',
    grade: '8a'
  },
  {
    id:'5',
    name: 'Han Solo',
    crag: 'Cuenca',
    grade: '8a'
  },
  {
    id:'6',
    name: 'Mama Africa',
    crag: 'Cuenca',
    grade: '8a'
  },
  {
    id:'7',
    name: 'Nieve de Mayo',
    crag: 'Cuenca',
    grade: '8a'
  },
  {
    id:'8',
    name: 'Las travesuras de Alejandra',
    crag: 'Cuenca',
    grade: '8a'
  },
  {
    id:'9',
    name: 'Sindrome de Stendhal',
    crag: 'Rumenes',
    grade: '7c+'
  },
  {
    id:'10',
    name: 'El club del Marisco',
    crag: 'Valdegovia',
    grade: '7c+'
  },
  {
    id:'11',
    name: 'La Sombra de Ender',
    crag: 'Peña Pintada',
    grade: '7c+'
  },
  {
    id:'12',
    name: 'Granma',
    crag: 'Estragüeña',
    grade: '7c'
  },
  {
    id:'13',
    name: 'Involucion',
    crag: 'Fin del Mundo',
    grade: '7c'
  }
]

app.listen(port, () => {
  console.log(`Example app listening on por ${port}`)
})

app.use(corss())
app.use(express.json())

// Middleware to intercept the response body, adding to locals so we can log later.
app.use((req, res, next) => {
  const oldJson = res.json
  res.json = (body) => {
    res.locals.body = body
    return oldJson.call(res, body)
  }
  next()
})


// Middleware to log in console the request and body response.
app.use(function (req, res, next) {
  if (req.url !== '/') {
    res?.on('finish', () => {
      const response = res.locals.body
      const details = {
        method: req?.method,
        url: req?.path,
        status: res.statusCode,
        code: res.statusMessage,
        body: response || {}
      }
      console.log(details)
    })
  }
  next()
})

app.post('/user/login', (req, res) => {
  const user = req.body
  if (user.username === 'katherine' && user.password === 'zambrano') {
    res.send(true)
  } else {
    res.status(404).send({ data: 'User not found!' })
  }
})

app.post('/climbers/new', (req, res) => {
  const climber = req.body
  console.log('climber: ', climber)
  let nextClimberId = (parseInt(climbers.at(-1).id) + 1).toString()
  climbers.push({ id: nextClimberId, ...climber })
  res.send(climbers)
})

app.get('/climbers/getAll', (req, res) => {
  res.send(climbers)
})

app.put('/climbers/mod', (req, res) => {
  const updatedClimber = req.body
  let index = climbers.findIndex((climber) => climber.id === updatedClimber.id)
  if (index !== -1) {
    climbers[index] = { ...updatedClimber }
  }
  res.send(climbers)
})

//backend for routes on climbing

app.get('/routes/getAll',(req,res)=>{
  res.send(routes)
})
app.post('/routes/new', (req, res) => {
  const route = req.body
  console.log('route: ', route)
  let nextRouteId = (parseInt(routes.at(-1).id) + 1).toString()
  routes.push({ id: nextRouteId, ...route })
  res.send(routes)
})