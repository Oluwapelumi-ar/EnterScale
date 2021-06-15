import { BrowserRouter , Route, Switch } from "react-router-dom";
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Header from "./Components/Header";


function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <Header></Header>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/About'>
          <About />
        </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
