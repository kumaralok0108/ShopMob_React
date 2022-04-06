import React, {Component} from "react";
import Header from "./Header";
import Footer from "./Footer";

	class Contactus extends Component {
		render()  {
        return (
               
        <div className="main-container">
        <Header/>
        <div className="main">
        <div className="white-bg">
		<div className="container">
		<div className="row">
                <div className="col-lg-12">
		<h2 className="subheading">Contact Us</h2>
		 <br/>
		<p>Have some Questions about features, trial, need a demo or anything else, our team is here to help you.</p>
                <p><b>Send An Email:</b></p>
                <p>
		<ul><a href="mailto:info@shoponmob.com">info@shoponmob.com</a>.</ul>
                </p>
                <p><b>Our Location:</b></p>
		<p>
		<ul>
		 E-57, Phase 8, Industrial Area, Sector 71,<br/>
		Sahibzada Ajit Singh Nagar,<br/>
		Punjab 160071.
		</ul>
                  </p>
                  <p><b>Talk to us:</b></p>
		 <p>
		 <ul>
		 9818555817 / 7986783750 <br/>
		</ul>
		 </p>
                 </div>
	</div>
	</div>
	</div>
        </div>
        <Footer/>
        </div>
           );
} }
export default Contactus;