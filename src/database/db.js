const mongoose = require('mongoose');

const url = 'mongodb://localhost:27017/chatusers'; // Agrega el nombre de la base de datos

mongoose.connect(url, { dbName: 'chatusers' }); // Especifica la base de datos

const db = mongoose.connection;
db.on('open', () => {
  console.log("Conectado a la bd");
});
db.on('error', (error) => {
  console.log("Error al conectarse a la bd:", error);
});

module.exports = db;