import { useContext } from "react"
import { Products } from "../../data/PRODUCTS"
import { shopContext } from "../../Contexts/ShopContext"
import { CartCard } from "./CartCard"
import { TotalCart } from "./totalCart"



export const Cart = () => {

  const {cartItems } = useContext(shopContext)
  return (<>
    <div className="row">
      {Products.map(p=>{
        if(cartItems?.some(i=>i.id === p.id && i.count > 0))    
          return <CartCard product={p}  key={p.id}/>
      })}
    </div>
    <div className="row bg-dark text-light total-footer ">
      <TotalCart product={Products}/> 
      
     </div>
    </>
  )
}
