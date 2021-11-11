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
function App() {
  return (
    <>
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
    </Switch>
    <Footer></Footer>
    </BrowserRouter>
    </AuthProvider>
   </>
  );
}

export default App;
