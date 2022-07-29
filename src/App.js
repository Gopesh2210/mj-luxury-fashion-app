import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/header';
import Home from './components/home';
import Footer from './components/footer';
import Collection1 from "./components/collection_1";
import Collection2 from "./components/collection_2";
import Discover from "./components/discover";
import DesignerSample from './components/common/designer-sample';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
            <Header/>
            <Routes>
                    <Route path="/" element={<Home />}/>
                    <Route path="/seasonal_collection" element={<Collection1/>} />
                    <Route path="/premium_collection" element={<Collection2/>} />
                    <Route path="/designer_sample" element={<DesignerSample/>} />
                    <Route path="/discover" element={<Discover/>} />
                    {/* <Route path="*" element={<NoPage/>} />§ */}
            </Routes>
        </BrowserRouter>
      <Footer/>
    </div>
  );
}


export default App;
