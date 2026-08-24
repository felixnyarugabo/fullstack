import { Product } from "../models/product.model.js"

export const getProducts= async (req,res)=>{
try {
    const products=await Product.find({}).sort({updatedAt:-1})
    res.status(200).json(products)
} catch (error) {
     res.status(500).json({message:error.message})
}
}

export const creatProduct=async (req,res)=>{
try {
    const product=await Product.create(req.body)
    res.status(200).json(product)
} catch (error) {
    console.log(error);
    res.status(500).json({
        message:error.message
    })
}
}

export const getProduct= async (req,res)=>{
try {
    const{id}=req.params
    const product=await Product.findById(id)
    if(!product){
        res.status(404).json({
            message:"product not found"
        })
    }

    res.status(200).json(product)
} catch (error) {
    res.status(500).json({
        message:error.message
    })
}
}
export const upDateProduct=async (req,res)=>{
const {id} =req.params
const product=await Product.findByIdAndUpdate(id,req.body)
if(!product){
    res.status(404).json({message:"product not found"})

}
res.status(200).json(product)
}
export const deleteProduct= async (req,res)=>{
try {
    const {id}=req.params
    const product=await Product.findByIdAndDelete(id)
    if(!product){
        res.status(404).json({
            message:"product not found"
        })
    }

    res.status(200).json({
        message:"product deleted succesfuly"
    })
} catch (error) {
    console.log(error)
    res.status(500).json({
        message:error.message
    })
    
}
}