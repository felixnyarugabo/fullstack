import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Field, FieldGroup } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useUpdateProduct } from "@/hooks/useUpdateProduct"
import { Pen } from "lucide-react"

import { useState } from "react"

function UpdateProduct({product}) {
  
  const [quantity,setQuantity]=useState(product.quantity)
  const[price,setPrice]=useState(product.price)  
const[name,setName]=useState(product.name)
const {updateProduct,isUpdating}=useUpdateProduct()
 function handleSubmit(e){
e.preventDefault()  

try {
    updateProduct({id:product._id,productData:{name,quantity,price}})
}catch(err) {
    console.error(err)
}

  
  }
  

  return (
    <Dialog>
      
        <DialogTrigger asChild>
          <Button variant="outline"><Pen/></Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-sm">
          <form onSubmit={handleSubmit }>
          <DialogHeader>
            <DialogTitle>Edit {product.name}</DialogTitle>
            <DialogDescription>
              Make changes to {product.name} here
            </DialogDescription>
          </DialogHeader>
          <FieldGroup>
            <Field>
              <Label htmlFor="name">Name</Label>
              <Input id="name" name="name"   value={name} onChange={e=>setName(e.target.value)}/>
            </Field>
            <Field>
              <Label htmlFor="quantity">quantity</Label>
              <Input id="quantity" name="quantity"  value={quantity} onChange={e=>setQuantity(e.target.value)} />
            </Field>
             <Field>
              <Label htmlFor="price">price</Label>
              <Input id="price" name="price"  value={price} onChange={e=>setPrice(e.target.value)}/>
            </Field>
          </FieldGroup>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button type="submit" disabled={isUpdating}>Save changes</Button>
          </DialogFooter>
          </form>
        </DialogContent>
      
    </Dialog>
  )
}

export default UpdateProduct