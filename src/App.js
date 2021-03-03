import Header from "./Header";
import './App.css';
import {
    BrowserRouter as Router, useParams,
} from "react-router-dom";

import { withNamespaces } from 'react-i18next';
import MainRouter from "./components/MainRouter";
import Footer from "./Footer";

function App({ t }) {
  const firstPath = window.location.pathname.split('/')[1];
  const language = localStorage.getItem('lang');
  if (language) {console.log()}else if (firstPath) {localStorage.setItem('lang', firstPath);} else {localStorage.setItem('lang','ka')}

  return (
      <Router>
          <Header />
          <MainRouter />
          <Footer />
      </Router>
  );
}

export default withNamespaces()(App);
