import "./App.css";
import Header from "./page/Header.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { dataHeader, dataImagePenthouse } from "./DataImage.js";
import Search from "./page/Search";
import { Data } from "./context";
import { DatalistItemSearch } from "./DataImage.js";
import Itemhouse from "./page/ItemHouse";
import { useState } from "react";
import Login from "./page/Login";
import Blog from "./page/Blog";
import Contact from "./page/Contact";
import Introduce from "./page/Introduce";
import FAQ from "./page/FAQ";
import Cart from "./page/Cart";

function App() {
  const [indexImage, setIndexImage] = useState(3);
  return (
    <div className="App ">
      <Data.Provider
        value={{
          dataHeader,
          dataImagePenthouse,
          DatalistItemSearch,
          indexImage,
          setIndexImage,
        }}
      >
        <Router>
          <Routes>
            <Route path="/" element={<Header />}></Route>
            <Route path="/hotel" element={<Search />}></Route>
            <Route path="/hotel/:id" element={<Itemhouse />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/blog" element={<Blog />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="/introduce" element={<Introduce />}></Route>
            <Route path="/faq" element={<FAQ />}></Route>
            <Route path="/cart" element={<Cart />}></Route>
          </Routes>
        </Router>
      </Data.Provider>
    </div>
  );
}

export default App;
