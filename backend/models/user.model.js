const mongoose = require("mongoose")
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId
const uniqueValidator = require("mongoose-unique-validator")

const UserSchema = new Schema({
    email : { type: String, unique: true, required: true },
    password : { type: String, required: true },
    tasks : [{ type: ObjectId, ref: "Task" }] ,
    // date : { type: ObjectId, ref: "Day", required: true },
})

UserSchema.plugin(uniqueValidator)

module.exports = mongoose.model('User', UserSchema)
