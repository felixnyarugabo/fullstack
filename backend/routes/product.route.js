import express from "express"
import { creatProduct, deleteProduct, getProduct, getProducts, upDateProduct } from "../controllers/product.controller.js"

const router = express.Router()

router.get("/", getProducts)
router.post("/", creatProduct)
router.patch("/:id", upDateProduct)
router.get("/:id", getProduct)
router.delete("/:id", deleteProduct)

export default router
