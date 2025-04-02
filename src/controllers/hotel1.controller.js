import { MenuItemHotel1 } from "../models/hotel1Menu.model.js";

// Get all menu items
const getMenuItems = async (req, res) => {
    try {
        const menuItems = await MenuItemHotel1.find();
        res.json(menuItems);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Add a new menu item
const addMenuItem = async (req, res) => {
    try {
        const { category, name, description, imageUrl, price } = req.body;
        const newItem = new MenuItemHotel1({ category, name, description, imageUrl, price });
        await newItem.save();
        res.status(201).json(newItem);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Update a menu item
const updateMenuItem = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedItem = await MenuItemHotel1.findByIdAndUpdate(id, req.body, { new: true });
        res.json(updatedItem);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete a menu item
const deleteMenuItem = async (req, res) => {
    try {
        const { id } = req.params;
        await MenuItemHotel1.findByIdAndDelete(id);
        res.json({ message: "Menu item deleted" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


export {
    getMenuItems,
    addMenuItem,
    updateMenuItem,
    deleteMenuItem
}
