const express = require('express');
const { body } = require('express-validator');
const itemController = require('../controllers/itemController');
const users_controller = require('../controllers/userController');

const router = express.Router();

router.post('/register', users_controller.register);
router.post('/login', users_controller.login);

// Define item routes
router.get('/', itemController.getAllItems);
router.get('/:id', itemController.getItemById);
router.post(
  '/',
  [
    body('title').notEmpty(),
    body('image').notEmpty(),
    body('author').notEmpty(),
    body('price').isFloat(),
  ],
  itemController.createItem
);
router.put(
  '/:id',
  [
    body('title').notEmpty(),
    body('image').notEmpty(),
    body('author').notEmpty(),
    body('price').isFloat(),
  ],
  itemController.updateItem
);
router.delete('/:id', itemController.deleteItem);

module.exports = router;
