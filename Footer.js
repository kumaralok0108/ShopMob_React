import React, { Component } from "react";
import {  Link, } from 'react-router-dom';


class Footer extends Component {
	render() {
		return (
			
			<div className="coppy">
					<div className="container text-center">
						<p>© 2021 Shop on Mobile . All rights reserved. </p>
							<Link to='/Aboutus'> About Us </Link> | <Link to='/Contactus'> Contact Us </Link> |<Link to='/TermsConditions'>Terms & Conditions</Link> |
							<Link to='/PrivacyPolicy'>Privacy Policy</Link> |<Link to='/ReturnRefund'>Return & Refund</Link> | <Link to='/Faq'>FAQ</Link> | <Link to='/'>Home</Link>
					</div>
			
	 				
				</div>
		);
	}
}
export default Footer;