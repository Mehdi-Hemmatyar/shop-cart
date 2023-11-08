
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons"
import { useContext } from "react"
import { shopContext } from "../Contexts/ShopContext"

export const Navbar = () => {

  const {quantity} = useContext(shopContext)
  return (
    
    <nav className="navbar navbar-expand-sm bg-dark justify-content-right navbar-dark">
  <div className="container">
    <Link to="/" className="navbar-brand">Shopping Cart Project</Link>
    <ul className="navbar-nav ">
        <li className="nav-item">
            <Link to="/" className="nav-link" >Shop</Link>
        </li>
        <li className="nav-item">
            <Link to="/cart" className="nav-link">
                <FontAwesomeIcon icon={faShoppingCart}/>
                <span className="badge bg-danger" >{quantity > 0 && quantity}</span>
                 </Link>
        </li>
    </ul>
  </div>

</nav>
  )
}
