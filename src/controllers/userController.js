const ClientsModel = require('../models/userModel');

//mostrar todos los clientes
const getAllClients = async (req, res) => {
  try {
    const clients = await ClientsModel.find();
    res.status(200).json(clients);
  } catch (error) {
    res.json({
      message: error.message
    });
  }
}

const getClient = async (req, res) => {
  try {
    const id = req.params.id
    await ClientsModel.findById({ _id: id }).then((client) => {
      res.status(200).json(client);
    })

  }
  catch (error) {
    res.json({
      message: error.message
    })
  }
}

const createClient = async (req, res) => {
  try {
    await ClientsModel.create(req.body)
    res.status(200).json({
      "mensaje": "Cliente creado correctamente"
    })
  }
  catch (error) {
    res.json({
      message: error.message
    })
  }
}

const updateClient = async (req, res) => {
  try {
    const id = req.params.id
    await ClientsModel.updateOne({ _id: id }, req.body).then(res => {
      console.log(res)
    })
    res.status(200).json({
      "mensaje": "Cliente modificado correctamente"
    })
  }
  catch (error) {
    res.json({
      message: error.message
    })
  }
}

const deleteClient = async (req, res) => {
  try {
    const id = req.params.id
    await ClientsModel.deleteOne({ _id: id })
    res.status(200).json({
      "mensaje": "Cliente eliminado correctamente"
    })
  }
  catch (error) {
    res.json({
      message: error.message
    })
  }
}

module.exports = { getAllClients, getClient, createClient, updateClient, deleteClient };