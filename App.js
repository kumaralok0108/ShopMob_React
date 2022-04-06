import './App.css';
import React, { Component } from 'react';
//import Aboutus from './Aboutus';
import { BrowserRouter as Router, Routes, Route, Link, } from 'react-router-dom';
import Home from './Home';
import Aboutus from './Aboutus';
import Contactus from './Contactus';
import TermsConditions from './Termsconditions';
import PrivacyPolicy from './Privacypolicy';
import Faq from './Faq';
import ReturnRefund from './Returnrefund';


class App extends Component {
	render()  {
    return (

      <Router>
        <Routes>
          <Route exact path="/" element={<Home></Home>} />
          <Route path="/Aboutus" element={<Aboutus></Aboutus>} />
          <Route path="/Contactus" element={<Contactus></Contactus>} />
          <Route path="/TermsConditions" element={<TermsConditions></TermsConditions>} />
          <Route path="/PrivacyPolicy" element={<PrivacyPolicy></PrivacyPolicy>} />
          <Route path="/ReturnRefund" element={<ReturnRefund></ReturnRefund>} />
          <Route path="/Faq" element={<Faq></Faq>} />
        </Routes>
    </Router>
  
 );
}
}
export default App;

