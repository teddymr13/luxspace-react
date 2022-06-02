import "./assets/css/app.css";
import HomePage from "./pages/HomePage";
import Details from "./pages/Details";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Provider from "./helpers/hooks/useGlobalContext";
function App() {
  return (
    <Provider>
      <Router>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/categories/:idc' component={Details} />
          <Route path='/categories/:idc/products/:idp' component={Details} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
