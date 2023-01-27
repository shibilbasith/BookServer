// import mongoose

const mongoose = require('mongoose')

require('dotenv').config();
// const dbUrl = process.env.DATABASE || 3000;

const dbUrl = "mongodb+srv://shibil:i7YBoOi8JWgVfy0I@cluster0.u5aebd5.mongodb.net/library?retryWrites=true&w=majority"


mongoose.set('strictQuery', false);

async function connect() {
    try {
        await mongoose.connect(dbUrl,()=>{
            console.log("connected to mongoDB")
        });
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error(error);
    }
  }
  connect(); 

// define connection string

// mongoose.connect(DB_URI,()=>{
//     console.log("connected to mongoDB")
// })

// create model to store all products 

const Books = mongoose.model('Book',{
    id:Number,
    title:String,
    price:Number,
    description:String,
    image:String,
    download:String,
    read:String
})

const Featured = mongoose.model('Featuredbook',{
    id:Number,
    title:String,
    price:Number,
    description:String,
    image:String,
    download:String,
    read:String
})


const Popular = mongoose.model('Popularbook',{
    id:Number,
    title:String,
    price:Number,
    description:String,
    image:String,
    download:String,
    read:String
})

    /*WISHLIST*/
//create model to add wishlist books
//create a collection in mongodb
//create a model
const Wishlist=mongoose.model('Wishlist',{
    id:Number,
    title:String,
    price:Number,
    description:String,
    image:String,
    download:String,
    read:String
})

     /*CART*/
//create model to add cart books
const Cart=mongoose.model('Cart',{
    id:Number,
    title:String,
    price:Number,
    description:String,
    image:String,
    download:String,
    read:String
})


     /*LIBRARY*/
//create model library books
const Library=mongoose.model('Library',{
    id:Number,
    title:String,
    price:Number,
    description:String,
    image:String,
    download:String,
    read:String
})





module.exports = {
    Books,
    Wishlist,
    Cart,
    Library,
    Featured,
    Popular

}