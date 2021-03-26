import { Schema, model, Document } from 'mongoose'

interface ProfileInterface extends Document{
    name?:string
    birthday?:Date
    country?:string
    photo?:string
}

const ProfileSchema = new Schema({
    name: String,
    birthday:Date,
    country:String,
    photo:String
}, {
    timestamps: true
})

export default model<ProfileInterface>('Profile', ProfileSchema)