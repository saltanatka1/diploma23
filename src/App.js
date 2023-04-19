import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import Delivery from "./pages/Delivery";
import History from "./pages/History";
import Category from "./pages/Category";
import NotFound from "./pages/NotFound";
import { createContext, useEffect, useState } from "react";
import { categoryCollection, productsCollection } from "./firebase";
import { getDocs } from "firebase/firestore";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import ThankYou from "./pages/ThankYou";

export const AppContext = createContext({
  categories: [],
  products: [],
  //контекст для корзины
  cart: {},
  setCart: () => {},
});

function App() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState(() => {
    return JSON.parse(localStorage.getItem('cart'))||{};
  });

  useEffect(() => {
    localStorage.setItem('cart',JSON.stringify(cart));
  },[cart]);

  useEffect(() => {
    //выполнить только однажды
    getDocs(categoryCollection) //получать категории
      .then(({ docs }) => {
        //когда категоии загрузились
        setCategories(
          //обновить состаяние
          docs.map((doc) => ({
            //новый массив
            ...doc.data(), //из свойств name,stug
            id: doc.id, // и свойства id
          }))
        );
      });

    getDocs(productsCollection) //получать категории
      .then(({ docs }) => {
        //когда категоии загрузились
        setProducts(
          //обновить состаяние
          docs.map((doc) => ({
            //новый массив
            ...doc.data(), //из свойств name,stug
            id: doc.id, // и свойства id
          }))
        );
      });
  }, []);

  return (
    <div className="App">
      <AppContext.Provider value={{ categories, products, cart, setCart }}>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/history" element={<History />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/delivery" element={<Delivery />} />
            <Route path="/categories/:slug" element={<Category />} />
            <Route path="/products/:slug" element={<Product />} />
            <Route path="/cart/" element={<Cart />} />
            <Route path="/thank-you" element={<ThankYou/>}/>

            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </AppContext.Provider>
    </div>
  );
}

export default App;
