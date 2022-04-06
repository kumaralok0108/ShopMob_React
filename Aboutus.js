import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';

class Aboutus extends Component {
	render()  {

  return (
<>
    <div className="main-container">
      <Header/>
      <div className="main">
      <div className="white-bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h2 className="subheading">About Us</h2>
              <br />
              <p>
                Shop on Mobile is a comprehensive platform for the small shopkeepers to create their virtual shop on cloud
              </p>
              <p><b>We</b>are a Start up organization, working on creative ideas for Digital India platform and developing
                Software solutions that are helpful to Public, Society & Government organizations.
              </p>
              <p><b>The Shop on Mobile platform</b>, is for the local Shopkeeper & Customer does not need to sacrifice in this era of online shopping. This platform helps to small business to grow without investing there time & money into creating dedicated online facilities. We provide a platform for anyone and everyone to start, run & grow their business of selling to local customers and keep the trust & personal connect alive. This platform will fight back the large online player and shopping mall with what they have best offer. Like fast delivery, their local choices etc.</p>

              <p><b>Key Product Values:</b></p>
              <p>
                <ul>
                  <li> User can place an order locally for the instant delivery </li>
                  <li> Item(s) price are same as offered by local shops</li>
                  <li> No hidden/extra charges for shopkeeper for selling on the platform</li>
                  <li> No transaction commission, payment directly transferred to shopkeeper</li>

                </ul>
              </p>

              <p><b>Our Team:</b></p>
              <p>
                <b>We</b> are a team of resource with expertise in different technologies and domains. We have expertise in App & Application developent, Application transformation and custom application development. We are adaptive and always learning new things. Our team has done hours of work on API integration, cross platform development be it mobile app, desktop applications, plugins/addons or special devices.
              </p>
          </div>
        </div>
      </div>
    </div>
    </div>
<Footer/>
</div>
</>
    );
}
}
export default Aboutus;