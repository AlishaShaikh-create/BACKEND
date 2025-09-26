import mongoose from 'mongoose'

async function dbConnect()
{
    try{
        await mongoose.connect('mongodb+srv://alisha:alisha@cluster0.p9pzyia.mongodb.net/')
        console.log("database connected")
    }
    catch(error)
    {
        console.log(error);
    }
}

dbConnect();


