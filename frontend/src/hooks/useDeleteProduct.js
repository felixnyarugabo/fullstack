import { deleteProduct as deleteProductApi } from "@/services/apiProduct"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { toast } from "sonner"

export const useDeletProduct=()=>{
    const queryClient=useQueryClient()

    const {mutate:deleteProduct,isPending:isDeleting}=useMutation({
        mutationFn:({id})=>deleteProductApi(id),
        onSuccess:()=>{
            toast.success("product deleted succesfully")
            queryClient.invalidateQueries({
                queryKey:["products"]
            })
        },
        onerror:()=>{
            toast.error("failed to delete product")
        }
    })

    return{deleteProduct,isDeleting}
}