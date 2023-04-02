import mongoose from "mongoose";

const DB_OPTIONS = {
    dbName: 'BOOKDB',
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    family: 4,
}


const connectDB = async (DATABASE_URL)=>{
    try{
        await mongoose.connect(DATABASE_URL,DB_OPTIONS);
        console.log("connected successfully....");
    } catch(err){
        console.log(err);
    }
}
export default connectDB