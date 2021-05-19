const express = require('express')
const server = express()
server.use(express.json())

const mongoose = require('mongoose')
const koder = require('./koderModel')

const DB_USER       = 'beto'
const DB_PASSWORD   = 'beto1234'
const DB_HOST       = 'kodemia-beto.qcaoa.mongodb.net'
const DB_NAME       = 'kodemia'

const url = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`

/*Practica
-GET /koders
  -gender   <-filtrado por queryparam

-POST /koders
   -name
   -lastname
   -age
   -gender
*/   

server.get('/koders', async (request,response) => {
    const genderFilter = request.query.gender
    let findObject = {}
    let message    = 'All koders'

    if(genderFilter){
        findObject = { 
            gender: genderFilter
        }
        message = 'Koders found by gender'
    }

    allKoders= await koder.find(findObject)
    response.json({
        message: message,
        success: true,
        data:{
            koders: allKoders
        }
    })

})

server.post('/koders', async (request,response) => {

    const name      = request.body.name
    const lastname  = request.body.lastname
    const age       = request.body.age
    const gender    = request.body.gender
    let message     = ''
    let status     = false

    await koder.create({
        name: name,
        lastname: lastname,
        age: age,
        gender: gender
    })
        .then((koderCreated)=>{
            message = 'User Created :D  --->' + koderCreated
            status = true
        })
        .catch((error)=>{    
            message = 'Error :(  --->' + error
            status = false
        }) 
    
    response.json({
        message: message,
        success: status,
    })

})

mongoose.connect( url , { useNewUrlParser: true, useUnifiedTopology: true })
.then((conn)=>{
    
    server.listen(8080,()=>{
        console.log('Server listening')
    })
    console.log('DB connected :D: ', conn)
    
})
.catch((error)=>{
    console.log('Error :( :', error)

})
