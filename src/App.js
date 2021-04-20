import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./pages/about";
import Projects from "./pages/projects";
import Contact from "./pages/contact";
import Header from "./components/header";
import Footer from "./components/footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faMobileAlt, faFileDownload } from '@fortawesome/free-solid-svg-icons';

library.add(fab, faEnvelope, faMobileAlt, faFileDownload);

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
