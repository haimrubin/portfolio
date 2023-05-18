import { Redirect, Route, Switch } from "react-router-dom";
import "./App.css";
import Footer from "./component/Footer";
import Header from "./component/MainHeader/Header";
import Navigation from "./component/MainHeader/Navigation";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Page404 from "./pages/Page404";
import Proj from "./pages/Proj";

function App() {
  return (
    <div className="App">
        <Header />
      <main>
        <Switch>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/my-projects">
            <Proj />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/" exact>
            <Redirect to="/home" />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="*">
            <Page404 />
          </Route>
        </Switch>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
