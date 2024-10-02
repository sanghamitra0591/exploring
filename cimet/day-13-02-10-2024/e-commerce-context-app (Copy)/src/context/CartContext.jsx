import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({children}) => {
    const [cart, setCart] = useState([]);

    const addToCart = (productToBeAdded) => {
        setCart(prev=>[...prev, {...productToBeAdded, quantity: 1}])
    }

    const updateQuantity = (id, type) => {
        if(type==="increment"){
            setCart(prev=>prev.map(el=>{
                if(el.id===id){
                    const newQuantity = el.quantity+1;
                    return{...el, quantity:newQuantity}
                }
                return el
            }))
        }else{
            setCart(prev=>prev.map(el=>{
                if(el.id===id){
                    const newQuantity = el.quantity-1;
                    return{...el, quantity:newQuantity}
                }
                return el
            }))
        }
    }

    return <CartContext.Provider value={{cart, addToCart, updateQuantity}}>{children}</CartContext.Provider>
}

export default CartContextProvider;