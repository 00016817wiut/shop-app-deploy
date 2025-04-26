import { create } from 'zustand';
import axios from 'axios';


const limit = 12;

const useProductStore = create((set, get) => ({
  products: [],
  loading: false,
  error: null,
  page: 1,

  getProducts: async (page = 1) => {
    set( {loading: true} );
    const skip = (page - 1) * limit;
    
    try {
      const response = await axios.get(
        `https://dummyjson.com/products?limit=${limit}&skip=${skip}`
      );
      set( {products: response.data.products, page} )
    } catch (error) {
      set({error: console.error("Ошибка: " + error.message)})
    } finally {
      set({loading: false})
    }
  },
  nextPage: () => {
    const {page, getProducts, loading} = get();
    if (!loading) getProducts(page + 1);
  },

  prevPage: () => {
    const {page, getProducts, loading} = get();
    if (page > 1 && !loading) getProducts(page - 1);
  },
}))
export default useProductStore;