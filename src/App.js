import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./pages/about";
import Projects from "./pages/projects";
import Contact from "./pages/contact";
import Header from "./components/header";
import Footer from "./components/footer";

function TodoList() {
  return (
    <Router>
      <Header />
      <Route exact path="/" component={About}/>
      <Route path="/projects" component={Projects}/>
      <Route path="/contact" component={Contact}/>
      <Footer />
    </Router>
  );
}

export default TodoList;
