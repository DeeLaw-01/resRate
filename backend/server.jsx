const express = require('express')
const cors = require('cors')
const axios = require('axios')
const app = express()
const PORT = process.env.PORT || 5000 // Choose a port for your server
// const mysql = require('mysql')
// const bcrypt = require('bcrypt')
const bodyParser = require('body-parser')
const mapDataHost = 'maps-data.p.rapidapi.com'
const mapDataKey = '390a81808amshb88e1c66b12bc8bp178ad7jsn1aa6db6c1036'

app.use(cors({ origin: '*' }))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// Create a connection to the mysql database
// const connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: 'normalpassword123',
//   database: 'resrate'
// })

// connection.connect(err => {
//   if (err) {
//     console.error('Error connecting to the database:', err)
//     return
//   }
//   console.log('Connected to the database.')
// })

app.get('/', (req, res) => {
  res.json({ message: 'Hello from the backend' })
})

// Proxy route to handle requests to the external API
app.get('/searchmaps', async (req, res) => {
  const { query, limit, country, lang, lat, lng, offset, zoom } = req.query

  try {
    const response = await axios.get(
      'https://maps-data.p.rapidapi.com/searchmaps.php',
      {
        params: { query, limit, country, lang, lat, lng, offset, zoom },
        headers: {
          'X-RapidAPI-Key': mapDataKey,
          'X-RapidAPI-Host': mapDataHost
        }
      }
    )
    res.json(response.data)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Error fetching data from external API' })
  }
})

app.get('/nearby', async (req, res) => {
  const { query, limit, country, lang, lat, lng, offset, zoom } = req.query

  try {
    console.log('Iniside DB: reached here')
    const response = await axios.get(
      'https://maps-data.p.rapidapi.com/nearby.php',
      {
        params: { query, limit, country, lang, lat, lng, offset, zoom },
        headers: {
          'X-RapidAPI-Key': mapDataKey,
          'X-RapidAPI-Host': mapDataHost
        }
      }
    )
    res.json(response.data)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Error fetching data from external API' })
  }
})

app.get('/reviews', async (req, res) => {
  const { business_id, country, lang, limit } = req.query
  console.log(business_id, country, lang, limit)
  try {
    const response = await axios.get(
      'https://maps-data.p.rapidapi.com/reviews.php',
      {
        params: { business_id, country, lang, limit },
        headers: {
          'X-RapidAPI-Key': mapDataKey,
          'X-RapidAPI-Host': mapDataHost
        }
      }
    )
    res.json(response.data)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Error fetching data from external API' })
  }
}) /
  // ! ||--------------------------------------------------------------------------------||
  // ! ||                                 MYSQL API CALLS                                ||
  // ! ||--------------------------------------------------------------------------------||

  //   app.post('/register', (req, res) => {
  //     const { username, password, email } = req.body
  //     console.log(username, password, email)
  //     // Call the stored procedure to register the user
  //     connection.query(
  //       'CALL RegisterUser(?, ?, ?, @userExists)',
  //       [username, password, email],
  //       (err, results) => {
  //         console.log(results)
  //         if (err) {
  //           console.error('Error registering user:', err)
  //           return res.status(500).json({ error: 'Error registering user' })
  //         }

  //         // Fetch the result of the variable @userExists
  //         connection.query('SELECT @userExists AS userExists', (err, results) => {
  //           if (err) {
  //             console.error('Error fetching userExists variable:', err)
  //             return res.status(500).json({ error: 'Error registering user' })
  //           }

  //           const userExists = results[0].userExists
  //           console.log('here', userExists)

  //           if (userExists) {
  //             return res.status(400).json({ error: 'User already exists' })
  //           }

  //           res.status(200).json({ message: 'User registered successfully' })
  //         })
  //       }
  //     )
  //   })

  // app.post('/login', (req, res) => {
  //   const { email, password } = req.body
  //   console.log(email, password)
  //   // Call the stored procedure to log the user
  //   connection.query(
  //     'CALL LoginUser(?, ?, @existsUser)',
  //     [email, password],
  //     (err, results) => {
  //       console.log(results)
  //       if (err) {
  //         console.error('Error registering user:', err)
  //         return res.status(500).json({ error: 'Error registering user' })
  //       }

  //       // Fetch the result of the variable @userExists
  //       connection.query('SELECT @existsUser AS existsUser', (err, results) => {
  //         if (err) {
  //           console.error('Error fetching userExists variable:', err)
  //           return res.status(500).json({ error: 'Error registering user' })
  //         }

  //         const existsUser = results[0].existsUser
  //         console.log('here', existsUser)

  //         if (!existsUser) {
  //           return res.status(400).json({ error: 'User does not exists' })
  //         }

  //         res.status(200).json({ message: 'User logged in successfully' })
  //       })
  //     }
  //   )
  // })

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
  })
