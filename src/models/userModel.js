const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {

    userName: String,
    email: String,
    password: String
  },
  { collection: 'chatusers' }, // Make sure 'clients' is a string in quotes

);

module.exports = mongoose.model('ClientModel', userSchema);