const Item = require('../models/itemModel');

// Get all items
const getAllItems = async (req, res) => {
  try {
    const items = await Item.find();
    res.json(items);
  } catch (error) {
    console.error('Error retrieving items:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Get a specific item by ID
const getItemById = async (req, res) => {
  try {
    const item = await Item.findById(req.params.id);
    if (!item) {
      return res.status(404).json({ message: 'Item not found' });
    }
    res.json(item);
  } catch (error) {
    console.error('Error retrieving item:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Create a new item
const createItem = async (req, res) => {
  const { title, image, author, price } = req.body;

  try {
    const newItem = new Item({ title, image, author, price });
    const savedItem = await newItem.save();
    res.json(savedItem);
  } catch (error) {
    console.error('Error creating item:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Update an existing item
const updateItem = async (req, res) => {
  try {
    const item = await Item.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!item) {
      return res.status(404).json({ message: 'Item not found' });
    }
    res.json(item);
  } catch (error) {
    console.error('Error updating item:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Delete an item
const deleteItem = async (req, res) => {
  try {
    const item = await Item.findByIdAndDelete(req.params.id);
    if (!item) {
      return res.status(404).json({ message: 'Item not found' });
    }
    res.json({ message: 'Item deleted' });
  } catch (error) {
    console.error('Error deleting item:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = {
  getAllItems,
  getItemById,
  createItem,
  updateItem,
  deleteItem,
};
