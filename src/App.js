import Header from "./Heaader";
import './App.css';
import {
    BrowserRouter as Router,
} from "react-router-dom";

import { withNamespaces } from 'react-i18next';
import MainRouter from "./components/MainRouter";
import Footer from "./Footer";

function App({ t }) {
  return (
      <Router>
          <Header />
          <MainRouter />
          <Footer />
      </Router>
  );
}

export default withNamespaces()(App);
