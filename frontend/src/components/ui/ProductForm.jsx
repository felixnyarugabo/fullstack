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

import { useState } from "react"

export default function ProductForm() {
  const [quantity,setQuantity]=useState("")
  const[price,setPrice]=useState("")
  const [error,setError]=useState('')
  const [isLoading,setIsLoading]=useState(true) 
  const[name,setName]=useState("")
 async function handleSubmit(e){

e.preventDefault()  

if(!name|| !quantity|| !price)return
const res= await fetch("http://localhost:4000/api/products",{
  method:"POST",
   headers: {
    "Content-Type":"application/json"
   },
   body:JSON.stringify({
    name,
    quantity,
    price
   })
  })
  if(!res.ok ) throw new Error("failled to create")
    const data = await res.json()
  console.log(data)
  
  }
  

  return (
    <Dialog>
      
        <DialogTrigger asChild>
          <Button variant="outline">Open Dialog</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-sm">
          <form onSubmit={handleSubmit }>
          <DialogHeader>
            <DialogTitle>Edit profile</DialogTitle>
            <DialogDescription>
              Make changes to your profile here. Click save when you&apos;re
              done.
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
            <Button type="submit">Save changes</Button>
          </DialogFooter>
          </form>
        </DialogContent>
      
    </Dialog>
  )
}
