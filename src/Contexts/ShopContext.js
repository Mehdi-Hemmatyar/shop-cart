import { createContext, useEffect, useState } from "react";




export const shopContext = createContext(null)


export const ShopContextProvider = (props)=>{
  
    const [cartItems , setCartItems] = useState()

    useEffect(()=>{
        const shop_data = localStorage.getItem("shop_cart_items")
        setCartItems(!!JSON.parse(shop_data) ? JSON.parse(shop_data) : [])
    },[])

    useEffect(()=>{
        if(cartItems !== undefined)
        localStorage.setItem("shop_cart_items" , JSON.stringify(cartItems))
    },[cartItems])

    const addToCart =(itemId)=>{
        if (!cartItems?.find((i)=>i.id === itemId)){
        setCartItems([...cartItems , {id : itemId , count : 1}])    
        console.log(cartItems)
        } else
        setCartItems(cartItems.map( i => {
           if (i.id=== itemId)
           return{ ...i , count: i.count + 1}
        else return i
        }))

        

    }

    const removeFromCart =(itemId)=>{
        setCartItems(cartItems.map(item =>{
            if (item.id === itemId && item.count > 0)
            return{...item , count : item.count -1}
        else return item
        }))
    }

    const deleteItemFromCart = (itemId)=>{
        setCartItems(cartItems.map(item=>{
            if (item.id === itemId )
            return {...item , count : 0}
        else return item
        }))

    }

    const handleDeleteCart=()=>{
        setCartItems([])
        localStorage.removeItem("shop_cart_items")
    }

    


    const quantity = cartItems?.reduce((total , cuurent)=> {return total + cuurent.count} , 0 )

    const contextValue ={cartItems , addToCart ,removeFromCart, deleteItemFromCart , quantity , handleDeleteCart}

    return <shopContext.Provider value={contextValue}>{props.children}</shopContext.Provider>
}