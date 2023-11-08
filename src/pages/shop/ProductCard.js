import { useContext } from "react"
import { shopContext } from "../../Contexts/ShopContext"


export const ProductCard = ({product}) => {

  const {cartItems , addToCart ,removeFromCart} = useContext(shopContext)

  const isInCart = cartItems?.some(item => item.id === product.id && item.count > 0)

  return (
    <div className="card col-sm-4 bg-dark text-light " style={{justifyContent: "center", alignItems: "center"}}>
        <img className="card-img-top" style={{width:"100%",height: "50%"}} src={product.imageUrl} alt={product.name}/>
        <div className="card-body">
            <h4 className="card-title">{product.name}</h4>
            <div className="card-text">
              <p>{product.description}</p>
              <h6>{product.price}$</h6>
            </div>
            <div className="card-footer">
              {isInCart ? <> <button className="btn btn-primary btn-sm" onClick={()=>addToCart(product.id)}>+</button>
              <span className="mx-2">{cartItems?.filter((item)=> item.id === product.id)[0]?.count}</span>
              <button className="btn btn-danger btn-sm" onClick={()=>removeFromCart(product.id)}>-</button></> : <button className="btn btn-success" onClick={()=>addToCart(product.id)}>Add To Cart</button>}
            </div>
        </div>
    </div>
  )
}
