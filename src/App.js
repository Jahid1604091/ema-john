import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import About from "./pages/About";
import Footer from "./components/Footer";
import Error from "./pages/Error";

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Switch>
      <Route path='/' exact>
        <Home/>
      </Route>
      <Route path='/about' exact component={About}/>
      <Route path='*'>
        <Error/>
      </Route>
      </Switch>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
