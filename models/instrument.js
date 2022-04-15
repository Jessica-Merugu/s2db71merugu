const mongoose = require("mongoose")
const instrumentSchema = mongoose.Schema({
    instrument_name: String,
    instrument_size: Number,
    instrument_cost: Number
})
module.exports = mongoose.model("Instrument", instrumentSchema)