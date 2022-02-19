// import logo from './logo.svg';
import './App.css';
import Home from './Home';
import Now from './Components/Now/Now';
import Blog from './Components/Blog/Blog';
import NewPost from './Components/Blog/notes/newPortfolioPost';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/new-portfolio-post">
            <NewPost />
          </Route>
          <Route path="/blog">
            <Blog />
          </Route>
          <Route path="/now">
            <Now />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
    // <div className="App">
    //   <Home/>
    // </div>
  );

}