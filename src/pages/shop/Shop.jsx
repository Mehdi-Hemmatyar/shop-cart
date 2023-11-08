 import { Products } from "../../data/PRODUCTS"
import { ProductCard } from "./ProductCard"

export const Shop = () => {
  return (
    <>
    <h1>Shop</h1>
    <div className="row">
        {Products.map(p=>{
          return  <ProductCard product={p} key={p.id} />
        })}
    </div>
    </>
  )
}
