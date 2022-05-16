import './App.css';
import MaterialHome from './MaterialUI/MaterialHome';
// import Home from './Ecomm/Home';
// import HomePage from './Redux/components/HomePage';
// import {BrowserRouter, Routes,Route} from  "react-router-dom"
// import Navigation from './Ecomm/components/Navigation';
// import Product from './Ecomm/components/Navigation';
// import Shop from './Ecomm/components/Navigation';
// import BlogHome from './Readers Blog/BlogHome';

// import './bootstrap/dist/css/bootstrap.min.css'
// import './bootstrap/js/bootstrap.min.js'
function App() {
  return (
    <div>
     {/* <HomePage/> */}
     {/* <BrowserRouter>
     <Navigation/>
     <Routes>
       <Route exact path="/" element={<Home/>}></Route>
       <Route exact path="/shop" element={<Shop/>}></Route>
       <Route exact path="/product" element={<Product/>}></Route>
     </Routes>
     </BrowserRouter> */}
     {/* <BlogHome/> */}
     <MaterialHome/>
     
    </div>
  );
}

export default App;
