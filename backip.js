import React, { Component } from "react";
import { BrowserRouter as Router, Routes ,Route, Link } from 'react-router-dom';
import Home from './Home';
import aboutus from './aboutus';
import Contactus from './contactus';
import TermsConditions from './Termsconditions';
import PrivacyPolicy from './Privacypolicy';
import Faq from './Faq';
import ReturnRefund from './Returnrefund';

class Footer extends Component {
	render()  {
        return (
      <Router>
		<div className="coppy">
 			<div className="container text-center">
				<p>© 2021 Shop on Mobile . All rights reserved. </p>
				<p>
			<Link to = {'/aboutus'}> About Us </Link> | <Link to = {'/Contactus'}> Contact Us </Link> |<Link to = {'/TermsConditions'}>Terms & Conditions</Link> | 
				<Link to = {'/PrivacyPolicy'}>Privacy Policy</Link> |<Link to = {'/ReturnRefund'}>Return & Refund</Link> | <Link to={'/Faq'}>FAQ</Link> | <Link to = {'/'}>Home</Link> </p>

				<Routes>
					<Route exact path='/' element={Home} />
					<Route path='/aboutus' element={Aboutus} />
					<Route path='/Contactus' element={Contactus} />
					<Route path='/TermsConditions' element={TermsConditions} />
					<Route path='/PrivacyPolicy' element={PrivacyPolicy} />
					<Route path='/ReturnRefund' element={ReturnRefund} />
					<Route path='/Faq' element={Faq} />
				</Routes>
			
 			</div>
		</div>
		</Router>
     );
 }
}

export default Footer;

import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route, Link, } from 'react-router-dom';
import Home from './Home';
import Aboutus from './Aboutus';
import Contactus from './Contactus';
import TermsConditions from './Termsconditions';
import PrivacyPolicy from './Privacypolicy';
import Faq from './Faq';
import ReturnRefund from './Returnrefund';

class Footer extends Component {
	render() {
		return (

			<Router>
				<div className="coppy">
					<div className="container text-center">
						<p>© 2021 Shop on Mobile . All rights reserved. </p>
						<ul>
							<li><Link to={'/Aboutus'}> About Us </Link> |</li> 
							<li><Link to={'/Contactus'}> Contact Us </Link> |</li>
							<li><Link to={'/TermsConditions'}>Terms & Conditions</Link> |</li>
							<li><Link to={'/PrivacyPolicy'}>Privacy Policy</Link> |</li>
							<li><Link to={'/ReturnRefund'}>Return & Refund</Link> |</li>
							 <li><Link to={'/Faq'}>FAQ</Link> |</li>
							  <li><Link to={'/'}>Home</Link></li>
						</ul>
						</div>
				</div>
				<Routes>
					<Route exact path="/" element={<Home />} />
					<Route exact path="/Aboutus" element={<Aboutus />} />
					<Route exact path="/Contactus" element={<Contactus />} />
					<Route exact path="/TermsConditions" element={<TermsConditions />} />
					<Route exact path="/PrivacyPolicy" element={<PrivacyPolicy />} />
					<Route exact path="/ReturnRefund" element={<ReturnRefund />} />
					<Route exact path="/Faq" element={<Faq />} />
				</Routes>

			
			</Router>
		);
	}
}

export default Footer;