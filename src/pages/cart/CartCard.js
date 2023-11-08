import { useContext } from "react"
import { shopContext } from "../../Contexts/ShopContext"



export const CartCard = ({product}) => {

    const {cartItems , addToCart , removeFromCart , deleteItemFromCart} =useContext(shopContext)
  return (
    <div className="d-flex flex-row bg-dark text-light align-items-center justify-content-between">
  <div className="p-2 "><img src={product.imageUrl} alt={product.name}  style={{width :"150px", height:"150px"}}/></div>
  <div className="p-2 ">
  <div className="d-flex flex-column">
  <div className="p-2 ">name : {product.name}</div>
  <div className="p-2 ">Count : {cartItems?.find(i=> i.id === product.id)?.count}</div>
  <div className="p-2 ">Price : {product.price}</div>
  <div className="p-2 ">TotalPrice : {cartItems?.find(i=> i.id === product.id)?.count * product.price } $</div>
</div>
  </div>
  <div className="p-2 ">
    <button className="btn btn-sm btn-primary" onClick={()=>addToCart(product.id)} > + </button>
    <button className="btn btn-sm btn-danger" onClick={()=>removeFromCart(product.id)} > - </button>
    <button className="btn btn-danger" onClick={()=>deleteItemFromCart(product.id)}>Remove From Cart</button>
  </div>
</div>
  )
}
