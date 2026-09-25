import { createContext, useState } from 'react'

export const UserContext = createContext()

export const CartProvider = ({children}) =>{
    const [cart, setCart] = useState([])

    const addToCart = (product) =>{
        setCart((prev)=>{
            const alreadyExists = prev.some(
                (item) => item.id === product.id
            )

            if(alreadyExists){
                return prev;
            }

            return [...prev, product];
        })
    }

    return(
        <UserContext.Provider value={{cart, setCart, addToCart}}>
            {children}
        </UserContext.Provider>
    )

}