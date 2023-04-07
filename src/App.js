import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import Delivery from "./pages/Delivery";
import History from "./pages/History";
import Category from "./pages/Category";

function App() {
  return (
    <div className="App">

      <Layout>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/history" element={<History/>} />
          <Route path="/contacts" element={<Contacts/>} />
          <Route path="/delivery" element={<Delivery/>} />
          <Route path="/categories/:slug" element={<Category/>} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
