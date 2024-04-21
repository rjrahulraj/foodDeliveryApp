import { createContext, useState} from "react";
import { food_list } from "../assets/assets";


export const storeContext  =createContext(null);


const StoreContextProvider=({children})=>{

     const [cartItem, setCartitems]=useState({})

     const addToCart=(itemId)=>{
          if(!cartItem[itemId])
          {
               setCartitems((prev)=>({...prev, [itemId]:1}))
          }
          else{
               setCartitems((prev)=>({...prev, [itemId]:prev[itemId]+1}))
          }
     }
 
     const removeFromCart = (itemId)=>{
          setCartitems((prev)=>({...prev, [itemId]:prev[itemId]-1}));
     }

     const getTotalCartAmount=()=>{
          let TotalAmt=0;
          for(const item in cartItem)
          {
               if(cartItem[item]>0)
               {
                    let itemInfo=food_list.find((product)=>product._id===item);
                    TotalAmt+=itemInfo.price+cartItem[item];
               }
          }

          return TotalAmt;
     }

     const contextValue={
          food_list,
          cartItem,
          setCartitems,
          addToCart,
          removeFromCart,
          getTotalCartAmount
     }

     return (<storeContext.Provider value={contextValue}>
          {children}
     </storeContext.Provider>)
}

export default StoreContextProvider;