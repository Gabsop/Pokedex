import "./styles/global.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/home";

const Routes = () => {
  return (
    <>
      <Router>
        <Route path="/" exact component={Home} />
      </Router>
    </>
  );
};

export default Routes;
