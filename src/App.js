import {
  BrowserRouter as Router,
  Switch,
} from "react-router-dom";
import { Route } from "react-router-dom";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Cart from "./pages/Cart";
import "./scss/base.scss";
import "./scss/main.scss";
import "./scss/detail.scss";
import "./scss/reset.scss";
import "./scss/cart.scss"
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" render={() => <Home />} />
        <Route path="/detail/:id" render={() => <Detail />} />
        <Route path="/cart" render={() => <Cart />} />
      </Switch>
    </Router>
  );
}

export default App;
