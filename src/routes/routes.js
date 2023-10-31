const express = require("express");
const { getAllClients, getClient, createClient, updateClient, deleteClient } = require('../controllers/userController');

const router = express.Router();

router.get('/', getAllClients);
router.get('/:id', getClient);
router.post('/', createClient);
router.put('/:id', updateClient);
router.delete('/:id', deleteClient);




module.exports = router;