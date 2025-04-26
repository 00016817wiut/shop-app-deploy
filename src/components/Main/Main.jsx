import './Main.css';
import ProductListPage from '../Pages/ProductsListPage/ProductsListPage';

const Main = ({ products, page, nextPage, prevPage }) => {

  return (
    <main className="main">
      <div className="main__container content">
        <a href="#" className="products__title">
          Товары
        </a>
        <ProductListPage products={products} page={page} nextPage={nextPage} prevPage={prevPage}/>
      </div>
    </main>
  );
};

export default Main;
