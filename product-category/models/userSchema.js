const { default: mongoose } = require("mongoose");


const userSchema = new mongoose.Schema({
    username: String,
    email : String,
    password: String,
    role: {
        type: String,
        default: "user"
    },
    phone : Number,
}, {
    timestamps: true
})

const user = mongoose.model("user", userSchema);

module.exports = user;