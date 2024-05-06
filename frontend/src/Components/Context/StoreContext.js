import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const StoreContext = createContext(null);
const StoreContextProvider=(props)=>{
    const [cartItems,setCartItems]=useState({});
    const url = "http://localhost:4999";
    const[token,setToken]=useState("")
    const [cosmetics_list,setCosmeticList]=useState([])

    const addToCart= async (itemId)=>{
        if(!cartItems[itemId]){
            setCartItems((prev)=>({...prev,[itemId]:1}))
        }else
        {
            setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        }
        if(token)
        {
            await axios.post(url+"/api/cart/add",{itemId},{headers:{token}});
        }
    }
    const removeFromCart=async(itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
        if(token)
        {
            await axios.post(url+"/api/cart/remove",{itemId},{headers:{token}})
        }
    }
    const getTotalCartAmount=()=>
    {
        let TotalAmount=0
        for(const item in cartItems)
        {
            if(cartItems[item]>0)
            {
                let itemInfo=cosmetics_list.find((product)=>product._id===item);
                TotalAmount+=itemInfo.price*cartItems[item];
            }
            
        }
        return TotalAmount;
    }
    const fetchCosmeticList= async () =>{
        try{
        const response= await axios.get(url+"/api/cosmetic/list");
        setCosmeticList(response.data.data);
        }catch(error)
        {
            console.error(error.message);
        }
    }
    const localCartData=async(token)=>{
        const response=await axios.post(url+"/api/cart/get",{},{headers:{token}})
        setCartItems(response.data.cartData)
    }
    useEffect(()=>{
       
        async function loadData()
        {
            await fetchCosmeticList();
            if(localStorage.getItem("token"))
            {
                setToken(localStorage.getItem("token"));
                await localCartData(localStorage.getItem("token"))
            }

        }
        loadData();
    },[])

    const contextValue={
        cosmetics_list,
        cartItems,
        setCartItems,
        addToCart,removeFromCart,
        getTotalCartAmount,
        url,
        token,
        setToken


    }
    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}
export default StoreContextProvider