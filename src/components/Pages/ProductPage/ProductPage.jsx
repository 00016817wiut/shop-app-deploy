import { Swiper, SwiperSlide } from 'swiper/react';
import { useParams } from 'react-router-dom';
import { Navigation } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css';
import "./ProductPage.css"; 
import "../../../assets/styles/common.css"
import "../../../assets/styles/root.css"

const ProductPage = ({ products }) => {
  
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) return <p className='content'>Продукт не наден :c</p>;
  console.log("Массив с картинками:", product.images);

  return (
    <>
      <section className="product__page content">
        <div className="product__page_container">
        <Swiper navigation={true} modules={[Navigation]} className="product__images">
        {product.images?.map((img, index) => (
          <SwiperSlide key={index}>
            <img className="product__images_item" src={img} alt={`product-${index}`} />
          </SwiperSlide>
        ))} 
        </Swiper>
          <div className="product__details">
            <h1>{product.title}</h1>
            <p>{product.description}</p>
            <p>Stock: {product.stock}</p>
            <p>Price: ${product.price}</p>
            <p>Discount: {Math.round(product.discountPercentage)}%</p>
            <p>Rating: {Math.round(product.rating)}/5</p>
          </div>
        </div>
      </section>


    </>
  );
};

export default ProductPage;
