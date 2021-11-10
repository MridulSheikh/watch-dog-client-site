import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Switch,Route} from 'react-router-dom';
import Navigation from './components/Shared/Navigation/Navigation';
import Home from './page/home/Home';
import Footer from './components/Shared/Footer/Footer';
import Explore from './page/explore/Explore';
function App() {
  return (
    <div className="App">
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
    </Switch>
    <Footer></Footer>
    </BrowserRouter>
   </div>
  );
}

export default App;
