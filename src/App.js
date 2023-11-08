
import './App.css';

import '../node_modules/bootstrap/dist/css/bootstrap.rtl.min.css'

import {BrowserRouter as Router , Routes ,Route} from 'react-router-dom'
import { Shop } from './pages/shop/Shop';
import { Cart } from './pages/cart/Cart';
import { Navbar } from './components/Navbar';
import { ShopContextProvider } from './Contexts/ShopContext';

function App() {
  return (
    <div className="App">
      <ShopContextProvider>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Shop/>} />
          <Route path='/cart' element={<Cart/>}/>
        </Routes>
      </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
