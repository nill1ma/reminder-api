import { Schema, model, Document } from 'mongoose'

interface ReminderInterface extends Document{
    title?:string
    eventDate?:Date
    local?:string
}

const ReminderSchema = new Schema({
    title: String,
    eventDate:Date,
    local:String,
}, {
    timestamps: true
})

export default model<ReminderInterface>('Reminder', ReminderSchema)