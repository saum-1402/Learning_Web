const express = require('express')
const app = express()
const port = 3000
// const bodyParser = require('body-parser')

app.use(express.json());
app.use(express.urlencoded({ extended: true }))
const usernames = []
const passwords = []

//this is the get the html file from the server
app.get('/', (req, res) => {
  res.sendFile(__dirname+'/index.html')
})

//this is to give the 
app.post('/', (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  console.log(username)
  console.log(password)
  usernames.push(username)
  passwords.push(password)
  
  res.send('Form filled')

  res.redirect('/welcome')
})

app.get('/welcome', (req, res) => {
  res.send('Welcome')

})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})