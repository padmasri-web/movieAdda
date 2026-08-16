const mongoose =require('mongoose')

const Mschema=new mongoose.Schema({
    name:{
        type:String,
        trim:true,
        required:true
    },
    year:Number,
    img:{
        type:String,
        // required:true,
        default:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlya3kRleYghAMuX-ckvg_KJC21bq3yhSDUg&s"
    },
    desc:{
        type:String,
    },
    ratings:[{
        rating:{
            type:Number,
            min:0,
            max:5
        },
        comment:String

    }],
    
})

const Movie=mongoose.model('Movie',Mschema)

module.exports= Movie; //to use this variable in other files