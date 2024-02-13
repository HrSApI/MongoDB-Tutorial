const { model, Schema } = require('mongoose');

const LoginSchema = new Schema({
    Username: { type: String },
    Email: { type: String },
    Password: { type: String }
})

const Login = model("login", LoginSchema)

module.exports = Login;