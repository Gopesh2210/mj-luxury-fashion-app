import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/header';
import Home from './components/home';
import Footer from './components/footer';
import Collection1 from "./components/collection_1_kaliya";
import Collection2 from "./components/collection_2_luxe_1";
import Discover from "./components/discover";
import DesignerSample from './components/common/designer-sample';
import {routePaths} from './config/routePaths'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
            <Header/>
            <Routes>
                    <Route path={routePaths[0].path} element={<Home />}/>
                    <Route path={routePaths[1].path}  element={<DesignerSample/>} />
                    <Route path={routePaths[2].path} element={<Collection1/>} />
                    <Route path={routePaths[3].path}  element={<Collection2/>} />
                    <Route path={routePaths[4].path}  element={<Discover/>} />
                    {/* <Route path="*" element={<NoPage/>} />§ */}
            </Routes>
        </BrowserRouter>
      <Footer/>
    </div>
  );
}


export default App;
