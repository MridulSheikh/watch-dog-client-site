import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Switch,Route} from 'react-router-dom';
import Navigation from './components/Shared/Navigation/Navigation';
import Home from './page/home/Home';
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
    </Switch>
    </BrowserRouter>
   </div>
  );
}

export default App;
