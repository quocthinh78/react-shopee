import {
  BrowserRouter as Router,
  Switch,
  Redirect
} from "react-router-dom";
import { useSelector } from "react-redux";
import { Route } from "react-router-dom";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Cart from "./pages/Cart";
import Modal from "./components/Modal";
import "./scss/base.scss";
import "./scss/main.scss";
import "./scss/detail.scss";
import "./scss/reset.scss";
import "./scss/cart.scss"
function App() {
  const isModal = useSelector((state) => state.modal.showModal);
  return (
    <Router>
      {!isModal ? "" : <Modal />}
      <Switch>
        <Redirect exact from="/" to="/home" />
        <Route exact path="/home" render={() => <Home />} />
        <Route exact path="/detail/:id" render={() => <Detail />} />
        <Route path="/:slug/:id" render={() => <Home />} />
        <Route path="/cart" render={() => <Cart />} />

      </Switch>
    </Router>
  );
}

export default App;
