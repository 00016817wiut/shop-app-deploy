import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './components/Main/Main';
import NavBar from './components/NavBar/NavBar';
import Header from './components/Header/Header';
import ProductPage from './components/Pages/ProductPage/ProductPage';
import useProductStore from './store/useProductStore';
import Footer from './components/Footer/Footer';

const App = () => {
  const { getProducts, products, loading, error, page, nextPage, prevPage} = useProductStore();

  useEffect(() => {
    getProducts(page); 
  }, []);

  return (
    <>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={
          <>
          <Header/>
            {loading && products.length === 0 ? (
              <div className='loading'>
                <p className="content">Загрузка продуктов...</p>
              </div>
            ) : error ? (
              <p className="content">Ошибка: {error}</p>
            ) : (
              <Main products={products} page={page} nextPage={nextPage} prevPage={prevPage} />
            )}
          </>
        }>  
        </Route>
        <Route path="/product/:id" element={<ProductPage products={products}/>}></Route>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </>
  );
};

export default App;
