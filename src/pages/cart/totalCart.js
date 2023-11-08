import { useContext } from "react"
import { shopContext } from "../../Contexts/ShopContext"


export const TotalCart = ({ product }) => {


  const { cartItems , handleDeleteCart } = useContext(shopContext)

  const totalPrice = cartItems?.reduce((total, current) => {
    const productPrice = product?.find(p => p.id === current.id)?.price
    const productCount = current?.count
    return total += (productPrice * productCount);
  }, 0)

  return (<>
    <div className="col-3"> Your Total Price is : </div>
    <div className="col-6 " >{totalPrice > 0 ? totalPrice + "$$$" : ""}
    {!!cartItems ? <button className="btn btn-primary " onClick={handleDeleteCart} > Empty Cart </button> : ""}
    
    </div>
    <div className="col-3">
      <button className="btn btn-success" >Click To Pay</button>
    
    </div>

  </>)
}
