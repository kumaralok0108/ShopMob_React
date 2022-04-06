import React, {Component} from 'react';
import Footer from './Footer';

class Home extends Component {
	render() {
  return (
    <div className="main-container">
      <div className="header-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
			
              <a className="navbar-brand" href="/Home" >
                <img src={"img/logo.png"} alt="logo" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="main">
        <div className="banner-row">
          <img src={"img/banner-img.png"} alt="logo" />
          <div className="container">
            <div className="row flex-row">
              <div className="col-lg-4">
                <ul className="top-btn">
                  <a href="https://play.google.com/store/apps/details?id=com.avrsh.local.myshop" target="_blank" rel="noreferrer">
                  <img src={"img/get-btn.png"} alt="Developer Chutiya hai"/></a>
                </ul>
              </div>
              <div className="col-lg-8">

              </div>

            </div>
          </div>
        </div>
      </div>
      <div className="white-bg">
			<div className="container">
				<div className="row">
					<div className="col-lg-12">
					<p id="in-frist">Our Aim is to bring new ways of household & Grocery shopping to our customers connecting to their trusted local retailers from the comfort of their homes</p>
					<p id="in-frist">Focus is to keep alive the trust and bond of local trusted retailers with their customers with a win-win deal of connecting at the shortest period and delivery as and when desired. The platform is based on the idea that customers do not need to sacrifice in this era of online shopping their local choices. Its all about trust between the buyer and seller that we aim to maintain. Also, our team’s aim is to bring to our customer new level of customer satisfaction with no difference in cost. </p>
					<p id="in-frist">For sellers, the platform provides unique opportunity to serve their local customers with pride and improve their business at no additional cost. Its an extension of their business and fight back the large online platforms with what they have best to offer. Its no more big fish eat small fish, it is time to come on the forefront and drive your business to new heights. This will position our seller way ahead to other local sellers.
					</p>
					<p id="in-frist">This platform is all what is needed by small business to grow without investing their time & money into creating dedicated online facilities. We provide a platform for anyone and everyone to start, run & grow their business of selling to local customers and keep the trust & personal connect alive.  </p>
					</div>
					<div className="col-lg-6">
						<ul className="listing">
							<li>Must have a smart phone</li>
							<li>Shopkeepers need to Register his shop in app</li>
							<li>Mentioned all the shop details in App (Owner, Lic no, location etc ...)</li>
							{/* <!--<li>He can opt the Monthly or Year subscription</li> --> */}
						</ul>
					</div>
					<div className="col-lg-6">
						<ul className="listing">
							<li>Shop owner need to update his Shop logo</li>
							<li>Delivery timing</li>
							<li>Delivery boys detail (Name, Photo, Phone No etc.)</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
		{/* <!-- white-bg area end -->

	<!-- green-bg area start --> */}

		<div className="green-bg">
			<div className="container">
				<div className="row">
					<div className="col-lg-12">
					<p id="in-frist">Customer just need to locate or invite their local retailers & grocery shops on this app and order their favourite items for instant delivery. User can search the local shops (Chemists/vegetables/grocery/dairy etc.), near to his/her place from our app and place the order. In case of medicine order, our app has a facility to upload the prescription while placing the order.  Local chemist/shopkeeper on acceptance of the order. Can upload the bill and confirm expected time of deliver to the buyer. Buyer has different option to pay the bill like cash-on-delivery, opt the online payment, PayTM etc. User history maintain for future order and any other personal use.</p>
					</div>
					<div className="row light-green">
						<div className="col-lg-12">
					            <p><b>This app will cover all the B2C issues. Likes</b></p>
					</div>
					<div className="col-lg-5">
						<ul className="listing">
							<li>B2C websites specific target audience</li>
							<li>Not cover the specific area and locations</li>
							<li>Take lots of time to deliver the medicines</li>
						</ul>
					</div>
					<div className="col-lg-2"></div>
					<div className="col-lg-5">
						<ul className="listing">
							<li>Help to grow the local business</li>
							<li>This facility is use in happy scenario but in case <br/> <span className="list-brk">of emergency we cannot opt this option.</span>  </li>
						</ul>
					</div>
				</div>
				</div>
			</div>
		</div>
		{/* <!-- green-bg area end -->

		<!-- icon-box area start --> */}
		<div className="icon-boxs">
			<div className="container">
					<div className="row">
						<div className="col-lg-4">
							<div className="icon-box">
								<img src={"img/marketing.png"} alt="images not found"/>
								<h3>Target Audience</h3>
								<p>
									Shopkeepers,<br/>
									Chemist,<br/>
									Hospitals,<br/>
									Patient<br/>
									(who don't have time time or have certain dependence like old age, ladies not able to go outside due to odd time or other dependence etc.)

								</p>
							</div>
						</div>
            <div className="col-lg-4">
							<div className="icon-box">
					
							</div>
						</div>

						<div className="col-lg-4">
							<div className="icon-box">
                  <img src={"img/Hand_Shake.png"} alt="images not found" />
								<h3>Benefits</h3>
								<p>
									User can place an order locally for instant deliver.<br/>
									Single solution for Shopkeepers.<br/>
									No need to create the app for particular retailer shop.<br/>
									No hidden, other charges, payment directly transfered to shopkeepers Account.<br/>
									This can be work around the clock in many areas.<br/>
									Sales can be increase and able to compete the B2C business.<br/>
             {/* <!--  	No Payment and transaction charges for the shopkeepers.<br/> --> */}

								</p>
							</div>
						</div>
			
					</div>
				</div>

		</div>
		{/* <!-- icon-box area end --> */}

{/* <!-- plan area start --> */}
		<div className="plan-row">
			<div className="container">
					<div className="row">
						<div className="col-lg-12">
							 <h2 className="heading">Select a plan</h2>
						
							 <br/>
								<p className="text">Currently this app is free to all the shopkeepers and users. Local retailers just need to register themselves on this app and provide few basic details through your smart phone & that all you need. </p>
						</div>
					</div>
				</div>

		</div>
		{/* <!-- plan area end -->

  <!-- Shop On Mobile area start --> */}
		<div className="shop-row">
			<div className="container">
					<div className="row">
						<div className="col-lg-12">
							 <h2 className="heading">Shop On Mobile</h2>
							 <br/>
							 <h2 className="subheading">How do I Join?</h2>
							 <br/>
								<p className="text">Download and install the app from play store and register yourself as a shopkeeper or an users</p>
								<br/>
								<ul className="top-btn">
									<a href="https://play.google.com/store/apps/details?id=com.avrsh.local.myshop" target="_blank" rel="noreferrer">
									<img src={"img/get-btn.png"} alt="Home Banner"/></a>
								</ul>
						</div>
					</div>
				</div>

		</div>
	
	<Footer/>

</div>
      );
}
}

export default Home;