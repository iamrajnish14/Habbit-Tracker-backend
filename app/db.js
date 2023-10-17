/** ------------------ IMPORTING PACKAGE ------------------ **/
const dotenv = require("dotenv");

dotenv.config();

const mongoose = require('mongoose');
/** ------------------ EXPORTING DB ------------------ **/
exports.connectMongoose =()=>{
    mongoose.set("strictQuery", false);
    mongoose.connect('mongodb://127.0.0.1:/Habbit-Tracker', { useNewUrlParser: true })
    .then((e)=>console.log("Connected to Mongodb => Habit-Tracker"))
    .catch((e)=>console.log("Not Connect Mongodb", e));
}
