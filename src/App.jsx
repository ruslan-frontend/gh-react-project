import { Routes, Route, BrowserRouter } from "react-router-dom";
import Products from "./pages/Products/Products.jsx";
import Basket from "./pages/Basket/Basket.jsx";
import Plate from "./pages/Plate/Plate.jsx";
import Header from "./components/Header/Header.jsx";
import Autorization from "./pages/Autorization/Autorizaton.jsx";
import "./App.scss";

function App() {
    return (
        <BrowserRouter>
            <Header />
            <main className="main">
                <Routes>
                    <Route path='/signup' element={<Autorization />} />
                    <Route path='/signin' element={<Autorization />} />
                    <Route path="/" element={<Products />} />
                    <Route path="/cart" element={<Basket />} />
                    <Route path="/plate/:id" element={<Plate />} />
                </Routes>
            </main>
        </BrowserRouter>
    );
}

export default App;
