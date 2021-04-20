import { Switch, Route } from "react-router-dom";

import "./App.css";

import Navbar from "./components/Navbar";

import HomePage from './pages/HomePage';
import BlogPage from './pages/BlogPage';
import JobDetailPage from './pages/JobDetailPage';
import FourOhFourPage from "./pages/404Page";

function App() {
  console.log('App Component has rendered to the screen')
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/blog" component={BlogPage} />
        <Route path="/jobs/:id" component={JobDetailPage} />
        <Route path="/*" component={FourOhFourPage} />
      </Switch>
    </div>
  );
}

export default App;
