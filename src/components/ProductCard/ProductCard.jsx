import cart from "../../assets/icons/cart.svg";
import { useNavigate } from 'react-router-dom';
import rating from  "../../assets/icons/rating.svg";
import './Product.css'





const ProductCard = ({sortedProducts}) => {

  const navigate = useNavigate(); 

  return (
    <div className="products">
      {sortedProducts.map((product) => (
        <div className="products__item" key={product.id} >
          <div className="products__item-sub">
            <img src={product.thumbnail} className="products__item-img" alt="product-img" onClick={() => navigate(`/product/${product.id}`)}/>
            <p className="products__item-descr">{product.title}</p>
            <p className="product__rating">{product.rating} <span><img src={rating} alt="" /></span></p>
            <p className="products__item-descr">В наличии: {parseInt(product.stock)}</p>
            </div>
            <div className="products__item-info">
              <p>${Math.floor(product.price * 10)/10}</p>
              <a href="#" className="products__cart">
                <img src={cart} alt="" />
              </a>
          </div>
        </div>
  ))}
  </div>
  )

}

export default ProductCard;