import { useMutation, useQueryClient } from "@tanstack/react-query"
// import { on } from "node:cluster"
import { upDateProduct as updateProductApi } from "@/services/apiProduct"



export function useUpdateProduct(){
    const queryClient=useQueryClient()
    const {mutate:updateProduct,isPending:isUpdating}=useMutation({
        mutationFn:({id,productData})=>updateProductApi(id,productData),
    onSuccess:()=>{        
            queryClient.invalidateQueries({
                queryKey:["products"]
            })
        
    },
    onError:(err)=>{
       
    }
})
     return {updateProduct,isUpdating}   
    }
