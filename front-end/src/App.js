import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./views/Home";
import ContactBook from "./views/ContactBook";
import Login from "./views/Login";

function App() {
  return (
    <Router>
      <div className="app">
        <div className="background"></div>
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/ContactBook">
              <ContactBook />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
