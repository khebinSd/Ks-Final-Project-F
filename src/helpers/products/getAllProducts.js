import { productsApi } from "../../api/productsApi"

export const getAllProducts= async ()=>{
    try{

        const resp = await productsApi.get(`/products/all`)
        return resp.data

    }catch(error){
        throw new Error(error.message)
    }
}