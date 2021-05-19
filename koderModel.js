
const mongoose =require ('mongoose')


//schema 
const koderSchema = new mongoose.Schema({ 
    name: {
        type: String,
        minLength: 2,
        maxLenght: 100,
        require: true 
    },
    lastname:{
        type: String,
        minLength: 2,
        maxLenght: 100,
        require: true 
    },
    age: {
        type: Number,
        min: 0,
        max: 150,
        require: true 
    },
    gender: {
        type: String,
        enum: ['m', 'f'],
        require: true 
    }

})

//model
const model = mongoose.model('koders', koderSchema) 

module.exports = model
