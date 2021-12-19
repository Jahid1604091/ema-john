
import Home from "./pages/Home";
import {BrowserRouter,Route,Switch} from 'react-router-dom'

import Footer from "./components/Footer";
import Error from "./pages/Error";
import ReviewOrder from "./pages/ReviewOrder";
import ProductDetails from "./components/ProductDetails";
import PlaceOrder from "./pages/PlaceOrder";

function App() {
  return (
    <BrowserRouter>
   
      <Switch>
      <Route path='/' exact>
        <Home/>
      </Route>
      <Route path='/order-review' exact component={ReviewOrder}/>
      <Route path='/product/:key' exact component={ProductDetails}/>
      <Route path='/place-order/' exact component={PlaceOrder}/>
      <Route path='*'>
        <Error/>
      </Route>
      </Switch>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
