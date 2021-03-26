import { Schema, model, Document } from 'mongoose'
import bcrypt = require('bcrypt')

interface UserInterface extends Document{
    email?:string
    username?:string
    password?:string
}

const UserSchema = new Schema({
    email: {
        type:String,
        required:true,
        select:true
    },
    username: {
        type:String,
        required:true,
        select:true
    },
    password: {
        type:String,
        required:true,
        select:false
    }
}, {
    timestamps: true
})

UserSchema.pre<UserInterface>('save', async function(next){
    this.password = await bcrypt.hashSync(this.password, 10)
    next()
})

export default model<UserInterface>('User', UserSchema)