import mongoose from "mongoose";

const connect_mongodb = ()=>{
    try{
        mongoose.connect('mongodb+srv://mrbakhusb:DmizG3Dk9A3HsUwG@cluster1.eo7iiht.mongodb.net/saghf_db')
        console.log('Connected to MongoDB');
    }catch(e){console.log(e)}
}

export default connect_mongodb;