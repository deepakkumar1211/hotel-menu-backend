import {mongoose, Schema} from "mongoose";

const menuItemSchema = new Schema (
    {
        category: {
            type: String,
            enum: ["starter", "drinks", "main course", "dessert", "beverages"],
            required: true,
        },
        name: { 
            type: String, 
            required: true 
        },
        description: { 
            type: String
        },
        imageUrl: { 
            type: 
            String 
        },
        price: { 
            type: Number, 
            required: true 
        },
    }
)


export const MenuItemHotel1 = mongoose.model("MenuItemHotel1", menuItemSchema);

