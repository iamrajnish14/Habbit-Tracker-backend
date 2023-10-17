/** ------------------ IMPORTING MONGOOSE ------------------ **/
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
//Creating Schema
const habitSchema = new Schema(
    {
        content: { type: String, required: true },
        
        dates: [{
            date: String,
            complete: String
        }],
    },
    { timestamps: true });

/** ------------------ EXPORTING MODEL ------------------ **/
module.exports = mongoose.model('Habit', habitSchema);