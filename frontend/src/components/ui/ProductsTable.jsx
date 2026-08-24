import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { useProducts } from "@/hooks/useProducts"
import UpdateProduct from "./UpdateProduct"
import { DeleteProduct } from "../DeleteProduct"
function ProductsTable() {
  const {isLoading,products,error}=useProducts()
  return (
   <Table>
  <TableCaption>A list of your recent invoices.</TableCaption>
  <TableHeader>
    <TableRow>
      <TableHead className="w-[100px]">Name</TableHead>
      <TableHead>quantity</TableHead>
      <TableHead>price</TableHead>
      <TableHead className="text-right">Updated At</TableHead>
      <TableHead></TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    {products?.map((product)=>(
      <TableRow>
      <TableCell className="font-medium">{product.name}</TableCell>
      <TableCell>{product.quantity}</TableCell>
      <TableCell>{product.price}</TableCell>
      <TableCell>{product.updatedAt}</TableCell>
      <TableCell>
        <UpdateProduct product={product} key={product._id} /> 
        <DeleteProduct id={product._id}/>
      </TableCell>
    </TableRow>
    ))}
  </TableBody>
</Table>
  )
}

export default ProductsTable