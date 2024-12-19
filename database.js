import mongoose from 'mongoose'

const connection = async ()=>{
    mongoose.connect('mongodb://localhost:27017/School').then(()=>{
    console.log("Connection was successful")
}).catch((err)=>{
    console.log("The database was not connected : ", err);
})}

export default connection
