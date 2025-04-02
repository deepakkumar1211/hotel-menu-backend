import { Router } from "express";
import { 
    getMenuItems,
    updateMenuItem,
    addMenuItem,
    deleteMenuItem
} from "../controllers/hotel1.controller.js";

const router = Router()

router.route("/get-menu-items").get(getMenuItems);

router.route("/add-menu-item").post(addMenuItem);

router.route("/update-menu-item/:id").put(updateMenuItem);

router.route("/delete-menu-item/:id").delete(deleteMenuItem);

export default router