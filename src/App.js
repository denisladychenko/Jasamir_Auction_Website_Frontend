import React from 'react';
import {HashRouter as Router, Switch, Route, Redirect} from "react-router-dom";




import HomePage from "./home/page/HomePage.jsx";
import AboutPage from "./about/page/AboutPage.jsx";
import AppraisalsPage from "./appraisals/page/AppraisalsPage.jsx";
import ContactPage from "./contact/page/ContactPage.jsx";
import BuyPage from "./buy/page/BuyPage.jsx";
import SellPage from "./sell/page/SellPage.jsx";
import LocationsPage from "./locations/page/LocationsPage.jsx";
import MailingListPage from "./mailing_list/page/MailingListPage.jsx";
import CatalogueAuctionsPage from "./catalogue_auctions/page/CatalogueAuctionsPage.jsx";
import NavBar from "./shared/Navigation/NavBar.jsx";
import Footer from "./shared/Footer/Footer.jsx";
import CenteredModal from "./shared/components/CenteredModal.jsx";
import './App.css';

function App() {
    const [modalShow, setModalShow] = React.useState(false);
  
  return (
    <Router>
      <NavBar />
      <Switch>
        
        <Route path="/buy" exact>
          <BuyPage />
        </Route>
        <Route path="/sell" exact>
          <SellPage />
        </Route>
        <Route path="/about" exact>
          <AboutPage />
        </Route>
        <Route path="/appraisals" exact>
          <AppraisalsPage />
        </Route>
        <Route path="/catalogue-auctions" exact>
          <CatalogueAuctionsPage />
        </Route>
        <Route path="/locations" exact>
          <LocationsPage />
        </Route>
        <Route path="/contact" exact>
          <ContactPage />
        </Route>
        <Route path="/mailing-list" exact>
          <MailingListPage />
        </Route>
        <Route path="/" exact>
          <Redirect to="/home" />
        </Route>
        <Route path="/home" exact>
          <HomePage />
        </Route>
        
      </Switch>
      <Footer className="footer"/>
  
        <CenteredModal 
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
    </Router>
  );
}

export default App;
