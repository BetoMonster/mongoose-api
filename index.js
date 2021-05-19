const express = require('express')
const server = express()
//use server

const mongoose = require('mongoose')
const koder = require('./koderModel')

const DB_USER       = 'beto'
const DB_PASSWORD   = 'beto1234'
const DB_HOST       = 'kodemia-beto.qcaoa.mongodb.net'
const DB_NAME       = 'kodemia'

const url = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`

server.get('/koders', async (request,response) => {

    allKoders= await koder.find({

    })

    response.json({
        message: 'all coders',
        success: true,
        data:{
            koders: allKoders
        }

    })

})

mongoose.connect( url , { useNewUrlParser: true, useUnifiedTopology: true })
.then((conn)=>{
    //aqui ya estamos conectados a la DB
    server.listen(8080,()=>{
        console.log('Server listening')
    })
    console.log('DB connected :D: ', conn)
    
    /*koder.find({gender:'f'})  //Para hacer una consulta se hace a partir del modelo
        .then((kodersFound)=>{
            console.log('kodersFound: ',kodersFound)
        })
        .catch((error)=>{
            console.log('Error: ', error)
        })
    */
    /*koder.create({
        name: 'Mario',
        lastname: 'Andrade',
        age: 21,
        gender: 'm'
    })
        .then((koderCreated)=>{
            console.log('kodersCreated: ',koderCreated)
        })
        .catch((error)=>{
            console.log('Error: ', error)
        })    */
})
.catch((error)=>{
    console.log('Error :( :', error)

})

/*Practica


-GET /koders
  -gender   <-filtrado por queryparam

-POST /koders
   -name
   -lastname
   -age
   -gender
*/   