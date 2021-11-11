import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Switch,Route} from 'react-router-dom';
import Navigation from './components/Shared/Navigation/Navigation';
import Home from './page/home/Home';
import Footer from './components/Shared/Footer/Footer';
import Explore from './page/explore/Explore';
import Login from './page/Athuntication/Login/Login';
import AuthProvider from './context/AuthProvider';
import Registration from './page/Athuntication/Regitration/Registration';
import ProductDetails from './page/product details/ProductDetails';
import PrivateRoute from './components/Private route/PrivateRoute';
import Shipping from './components/procced to shipping/Shipping';
function App() {
  return (
    <div className="App">
    <AuthProvider>
    <BrowserRouter>
    <Navigation />
    <Switch>
    <Route exact path="/">
      <Home></Home>
    </Route>
    <Route path="/home">
      <Home></Home>
    </Route>
    <Route path="/explore">
     <Explore></Explore>
    </Route>
    <Route path="/login">
     <Login></Login>
    </Route>
    <Route path="/registration">
    <Registration></Registration>
    </Route>
    <Route exact path="/shipping/:ProductId">
    <Shipping></Shipping>
    </Route>
    <PrivateRoute path="/details/:ProductId">
    <ProductDetails></ProductDetails>
    </PrivateRoute>
    </Switch>
    <Footer></Footer>
    </BrowserRouter>
    </AuthProvider>
   </div>
  );
}

export default App;
