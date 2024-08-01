import React, { createContext, useContext, useState } from 'react'

const CartContext = createContext()

export const useCart = () => useContext(CartContext) //hook

export const CartProvider = ({ children }) => {
        const [cartItems, setCartItems ] = useState([])

        const addToCart = (item) => {
            setCartItems((prevItems) => {
                const existingItem = prevItems.find((i) => i.id === item.id)
                
                if(existingItem) {
                    return prevItems.map((i) =>
                        i.id === item.id ? {...i, quantity: i.quantity + item.quantity } : i
                )
            }
            
            return [...prevItems, item]
        })
        }


        const removeFromCart = (id) => {
            setCartItems((prevItems) => prevItems.filter((item) => item.id !== id))
        }

        const clearCart = () => {
            setCartItems([])
        }

        const value = {
            cartItems,
            addToCart,
            removeFromCart,
            clearCart,
        }

        return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}