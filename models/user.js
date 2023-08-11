import mongoose,{ Schema } from 'mongoose';

const userSchema = new Schema(
    {
        user_name: String,
        user_pass: String,
        user_phone: String,
        user_nationalId: String,
        user_email: String
    },
    {
        timestamps: true
    }
);

let User;

try{
    User = mongoose.model('User',userSchema);
}catch{
    User = mongoose.model('User')
}

export default User;