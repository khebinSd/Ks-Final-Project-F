import { useSelector } from "react-redux";
import { ordersApi } from "../../api/ordersApi"

export const postOrder= async (order,customerId=1)=>{
    
    // const currentUser = useSelector((state) => state.users.currentUser);

    try{
        //mando quemado del user 1 hasta que kenan tenga el contexto de usuario  logeado
        const resp = await ordersApi.post(`/orders/user/${customerId}`,order)
        return resp.data

    }catch(error){
        throw new Error(error.message)
    }
}