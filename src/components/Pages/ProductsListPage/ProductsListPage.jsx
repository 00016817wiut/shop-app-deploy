import SearchFilter from "../../Main/SearchFilter";
import ProductCard from "../../ProductCard/ProductCard";
import useSortStore from "../../../store/useSortStore";

const ProductListPage = ({ products, page, nextPage, prevPage }) => {

const sortBy = useSortStore((state) => state.sortBy);
const sortChange = useSortStore((state) => state.sortChange);
const getSortedProducts = useSortStore((state) => state.getSortedProducts);

const sortedProducts = getSortedProducts(products);

return (
  <>
  <SearchFilter sortChange={sortChange} />
  <section className="products">
    <div>
      <div className="products__container">
        <ProductCard sortedProducts={sortedProducts} />
      </div>
      <div className="paging__buttons">
        <button onClick={prevPage} disabled={page === 1}>Назад</button>
        <span>{page}</span>
        <button onClick={nextPage}>Вперед</button>
      </div>
    </div>
  </section>
  </>
)

}
export default ProductListPage