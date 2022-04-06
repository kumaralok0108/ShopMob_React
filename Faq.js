
import React, {Component} from 'react';
import Header from './Header';
import Footer from './Footer';

class Faq extends Component {
	render()  {

  return (

    <div className="main-container">
      <Header/>
      <div class="main">
      <div id="accordion">
      <div className="card">
    <div className="card-header" id="headingOne">
      <h5 className="mb-0">
        <button className="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
         What is Shop On Mobile App?
        </button>
      </h5>
    </div>

    <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
      <div className="card-body">
        Shop on mobile is an app. It provides a digital platform on cloud, where small and middle-class shopkeeper can create their shops on cloud and sell their products online. At otherside the local users can search the nearby shop and place the order. Users (Shopkeeper & Customer) need to install this in their smart phone and register themself.<br/>
        <br/>Shop-on-Mobile has two interfaces<br/>
		<b>Shopkeeper:</b> Shopkeeper, can register and create their shop on cloud. And the shop will run like a physical shop.<br/>
		<b>User:</b> User can register his/herself in this app. User can search near shop and place the order like grocery, vegetables & fruits, Milk, Medicine etc.

      </div>
    </div>
  </div>
  <div className="card">
    <div className="card-header" id="headingTwo">
      <h5 className="mb-0">
        <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
         What is the major problem Shop on Mobile trying to solve?
        </button>
      </h5>
    </div>
    <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
      <div className="card-body">
        Shop on Mobile solves the major problem of proving the digital platform for the small and middleclass shopkeeper to compete with the big online platform. This will directly help the digital India program too.
      </div>
    </div>
  </div>
  <div className="card">
      <div className="card-header" id="headingThree">
        <h5 className="mb-0">
          <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
           Who can get benefit from the shop on mobile platform?
          </button>
        </h5>
      </div>
      <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordion">
        <div className="card-body">
          The shopkeeper/merchant,in the shop on mobile platform intend to create the shop on digital platform and would like to increase sale and footprint in the local area. It's an extension of their business and fight back the large online player and shopping mall with what they have best offer.<br/>
		  The local users/customers does not need to sacrifice in this era of online shopping their local choices, this platform keeps alive the trust and bond with the local trusted retailer.

        </div>
      </div>
  </div>
  <div className="card">
    <div className="card-header" id="headingFour">
      <h5 className="mb-0">
        <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
          What are the key features of the shop-on mobile platform?
        </button>
      </h5>
    </div>
    <div id="collapseFour" className="collapse" aria-labelledby="headingFour" data-parent="#accordion">
      <div className="card-body">
       	Few key features are:
	   <ul>
	   		<li>User can place an order locally for the instant delivery </li>
	   		<li>Item(s) price are same as offered by local shops</li>
	   		<li>No hidden/extra charge for shopkeeper for selling on the platform</li>
	   		<li>No transaction commission, payment directly transferred to shopkeeper</li>
	  </ul>
      </div>
    </div>
  </div>
  <div className="card">
      <div className="card-header" id="heading5">
        <h5 className="mb-0">
          <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapse5" aria-expanded="false" aria-controls="collapse5">
            Who can be benefited from Shop on Mobile platform?
          </button>
        </h5>
      </div>
      <div id="collapse5" className="collapse" aria-labelledby="heading5" data-parent="#accordion">
        <div className="card-body">
          Small and Middle class Shopkeeper/Merchant like Vegetables & Fruit vendors / Grocery shop / Dairy , Street vendors, Small food corners etc. can create their degital shop in Shop on Mobile platform. Similarly, the Senior citizens, women, Physical disable or other people who are not able to go outside due to the odd time or other dependence etc.

        </div>
      </div>
  </div>
  <div className="card">
      <div className="card-header" id="heading6">
        <h5 className="mb-0">
          <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapse6" aria-expanded="false" aria-controls="collapse6">
            How this platform will help in Pandemic Situation?
          </button>
        </h5>
      </div>
      <div id="collapse6" className="collapse" aria-labelledby="heading6" data-parent="#accordion">
        <div className="card-body">
          This platform is very helpful in the Covid pandemic situation. Shopkeeper can easily maintain the social distance and Shopkeeper can run the shop without any fear and restrictions<br/>
          <ul>
            <li>Shop crowd can be limited, as user can place the order from the app</li>
            <li>User will get notification whenever the order get ready along pickup time</li>
            <li>Only authorized person/user can visit the shop and pick the order</li>
            <li>Online payment option / user can pay in cash while picking the order</li>
            <li>Local administrator body can browse the shop in the app and allow them to function in controlled manner</li>
            <li>Local administrator body can list these shops in their website /charter with open & close timing</li>
            <li>Shopkeeper can run there shop without any fear and restrictions</li>
		</ul>
        </div>
      </div>
  </div>
  <div className="card">
      <div className="card-header" id="heading7">
        <h5 className="mb-0">
          <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapse7" aria-expanded="false" aria-controls="collapse7">
           What are the potential benefits for the shopkeeper?
          </button>
        </h5>
      </div>
      <div id="collapse7" className="collapse" aria-labelledby="heading7" data-parent="#accordion">
        <div className="card-body">
          In the era of online shopping Local shopkeepers / small business unable to grow without creating dedicated online facilities. Investment of time & money to build a digital channel is costly and time-consuming effort. Shop on Mobile providing a platform for anyone and everyone to start, run & grow their business of selling to local customers and keep the trust & personal connect alive. Few features worth mentioning are:
		  <ul>
		  	<li>Payment directly transferred to shopkeeper account </li>
		  	<li>No Transactional/hidden charges</li>
		  	<li>No hidden/extra charge for shopkeeper for selling on the platform</li>
		  	<li>Daily shop status displayed on the Shopkeeper dashboard</li>
		  	<li>Customer data bank  </li>
		  	<li>Can able to change the product price, place the discount and Sale</li>
		  	<li>Able to increase the sale and local footprint </li>
		  </ul>
        </div>
      </div>
  </div>

  <div className="card">
      <div className="card-header" id="heading8">
        <h5 className="mb-0">
          <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapse8" aria-expanded="false" aria-controls="collapseFour">
           What are the prerequisites for a shopkeeper to use the Shop on mobile platform?
          </button>
        </h5>
      </div>
      <div id="collapse8" className="collapse" aria-labelledby="heading8" data-parent="#accordion">
        <div className="card-body">
          Shopkeeper must have a smart Android mobile. Shopkeeper need to install the app from the Android platform and register him. Please note at the time of registration, he should be at his shop, because it capture the location coordinates (longitude and latitudes). Shopkeeper must have to share the shop image, list of the products, price and min & max product quantity, if possible, to share the product image(s).<br/>
		  In case of chemist/pharmacy, need to upload the image of chemist license issued by the Pharmacy council of India (PCI).

        </div>
      </div>
  </div>

  <div className="card">
      <div className="card-header" id="heading9">
        <h5 className="mb-0">
          <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapse9" aria-expanded="false" aria-controls="collapse9">
            What is the registration process?
          </button>
        </h5>
      </div>
      <div id="collapse9" className="collapse" aria-labelledby="heading9" data-parent="#accordion">
        <div className="card-body">
          After installing the app,
		  <ul>
		  	<li>Shopkeeper/User need to enter his register mobile no</li>
		 	<li>6 digits OTP send on the registered mobile no </li>
		 	<li>OTP number must have to be entered in the OTP box</li>
		 	<li>If user/shopkeeper did not receive the OTP, in that case, use need to click the resend the OTP button</li>
		 	<li>If again user/shopkeeper didn't receive the OTP then s(he) must have to check his/her mobile no and enter the correct 10 digits mobile no</li>
		 	<li>New screen will be opened, for the shopkeeper registration, user need to register him/her self as a shopkeeper</li>
		 	<li>Fill all the below require information </li>
		 	 <ul>
		 	 	<li>Shop /User Image</li>
		 		<li>First Name</li>
		 		<li>Last Name </li>
		  		<li>Email-id</li>
		  		<li>Sex Male/Female</li>
		  		<li>Age</li>
		  		<li>Shop Address</li>
		  		<li>State</li>
		  		<li>City</li>
		  	</ul>
		  	<li>After filling all, Shopkeeper/ user need to submit</li>
		  	<li>On successful submitting, shopkeeper get the “Successfully submit the detail, shop on mobile back office team will verify the detail and approve 	it, else they will contact with you”</li>
		  	<li>On successful verification, user will get the shop activation confirmation</li>
		  	<li>In other case, user will get the call from the back office to fill / correct the pending information</li>
		</ul>
        </div>
      </div>
  </div>
  <div className="card">
      <div className="card-header" id="heading10">
        <h5 className="mb-0">
          <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapse10" aria-expanded="false" aria-controls="collapse10">
            How Shopkeeper use the platform?
          </button>
        </h5>
      </div>
      <div id="collapse10" className="collapse" aria-labelledby="heading10" data-parent="#accordion">
        <div className="card-body">
          After completing the registration, shopkeeper information needs to verify by the back office. After the verification, back office activates the shop. Now, the shopkeeper needs to re-login with the registered mobile no and able to view the shop.
        </div>
      </div>
  </div>
  <div className="card">
      <div className="card-header" id="heading11">
        <h5 className="mb-0">
          <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapse11" aria-expanded="false" aria-controls="collapse11">
            What shopkeeper need to be done after activation of the shop?
          </button>
        </h5>
      </div>
      <div id="collapse11" className="collapse" aria-labelledby="heading11" data-parent="#accordion">
        <div className="card-body">
          On successful activation, shopkeeper is able to view the shop Home page, having the following information
		  <ul>
		  	<li>Shop Name displayed on the header</li>
		  	<li>Address of the Shop </li>
		  	<li>If shopkeeper upload the shop image, the thumb Image of the Shop is displayed in the header</li>
		  	<li>Dashboard:  following information display in the shopkeeper dashboard</li>
		  		<ul>
		  			<li>My Message Orders and its current value</li>
		  				<ul>
		  					<li>New</li>
		  					<li>Accepted</li>
		  					<li>On hold</li>
		  					<li>In process</li>
		  					<li>Completed</li>
		  				</ul>
		  			<li>My Cart Orders and its current value</li>
		  				<ul>
		  					<li>New</li>
		  					<li>Accepted</li>
		  					<li>On hold</li>
		  					<li>In process</li>
		  					<li>Completed</li>
		  				</ul>
		  			<li>My Customer and its current value</li>
		  				<ul>
		  					<li>Total Customer </li>
		  				</ul>
		  			<li>My Product and its current value</li>
		  				<ul>
		  					<li>Total Product (Active) </li>
		  				</ul>
		  		</ul>
		  <li>Shopkeeper can click the individual dashboard to get more detail</li>
		</ul>
        </div>
      </div>
  </div>
  <div className="card">
      <div className="card-header" id="heading12">
        <h5 className="mb-0">
          <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapse12" aria-expanded="false" aria-controls="collapse12">
            What are the different types of order in app?
          </button>
        </h5>
      </div>
      <div id="collapse12" className="collapse" aria-labelledby="heading12" data-parent="#accordion">
        <div className="card-body">
          Customer/User can place order in the following two different ways<br/>
		  <b>My Cart Order:</b> Customer can choose the items from the shop product list and put them in a cart and place the order<br/>
		  <b>My Message/Chat Order:</b> Customer can also place the order with the help of “Chat & Order” button, displayed on the right corner of the shop. While click on the “Chat & Order” button a message/chat window open. User/customer can write an order in the chat window or upload the order image and submit it.
        </div>
      </div>
  </div>
  <div className="card">
      <div className="card-header" id="heading13">
        <h5 className="mb-0">
          <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapse13" aria-expanded="false" aria-controls="collapse13">
            How the shopkeeper processes the order?
          </button>
        </h5>
      </div>
      <div id="collapse13" className="collapse" aria-labelledby="heading13" data-parent="#accordion">
        <div className="card-body">
          Shopkeeper need to follow the following steps to process any types (Cart /Message) of order
			  <ul>
				<li>Accept the order or Reject the order (based on the customer location)</li>
				<li>After accepted the order, item(s) details will open </li>
				<li>Shopkeeper verifying the order details and server the order. Order status changed to processing  </li>
				<li>In case not able to server the order, shopkeeper can cancel the order and specify the reason of rejection </li>
				<li>After packing the order, the order status change to “Pending for delivery” </li>
				<li>On Cash on Delivery, order out for delivery and status changed to Out for Delivery</li>
				<li>On successful delivery, the order status change to delivered and order get completed and status marked as completed</li>
			</ul>
        </div>
      </div>
  </div>
  <div className="card">
        <div className="card-header" id="heading14">
          <h5 className="mb-0">
            <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapse14" aria-expanded="false" aria-controls="collapse14">
              What is the different between Cart and Message/Chat orders?
            </button>
          </h5>
        </div>
        <div id="collapse14" className="collapse" aria-labelledby="heading14" data-parent="#accordion">
          <div className="card-body">
            <ul>
            	<li>In Cart order, user can choose the product from the shop product list and place the order.  Another way is the message/chat order, here user can type the product details (product name, quantity etc.) or user can create a items list on paper and click picture & upload in the chat window</li>
				<li>Cart order, user could not able to change the submit order item list. But, in the message/chat order, user can change order list after the final submit. User can chat with the shopkeeper.  Incase mentioned product is not available; shopkeeper can also inform the user in advance and suggest the alternate option</li>
				<li>While placing the cart order user know the placed order total amount at the time of submit order. But in the Message/Cart order, shopkeeper can create the bill while packing the order and upload the bill along with the total amount and it will be displayed on the user message/chat order window screen</li>
			</ul>
          </div>
        </div>
  </div>
  <div className="card">
        <div className="card-header" id="heading15">
          <h5 className="mb-0">
            <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapse15" aria-expanded="false" aria-controls="collapse15">
              What is new order status?
            </button>
          </h5>
        </div>
        <div id="collapse15" className="collapse" aria-labelledby="heading15" data-parent="#accordion">
          <div className="card-body">
            The moment the order is submitted by the user either from Cart / message the order is called a new order.
          </div>
        </div>
  </div>
  <div className="card">
        <div className="card-header" id="heading16">
          <h5 className="mb-0">
            <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapse16" aria-expanded="false" aria-controls="collapse16">
             What is the different between Reject and Cancel Order?
            </button>
          </h5>
        </div>
        <div id="collapse16" className="collapse" aria-labelledby="heading16" data-parent="#accordion">
          <div className="card-body">
            Reject order means, the Shopkeeper is not able to serve the order in that area or locality. Shopkeeper can decide based on the address mention in the order. <br/>
            Cancel order means, the mentioned items are not available or the delivery destination/ locality is far away from the shop.
          </div>
        </div>
  </div>
  <div className="card">
        <div className="card-header" id="heading17">
          <h5 className="mb-0">
            <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapse17" aria-expanded="false" aria-controls="collapse17">
              What is accept order status means and how the order become Accepted?
            </button>
          </h5>
        </div>
        <div id="collapse17" className="collapse" aria-labelledby="heading17" data-parent="#accordion">
          <div className="card-body">
           Accept status means that the order has been accepted by the shopkeeper and now, s(he) will able to view the order list.<br/>
		   In the order list, if shopkeeper click on the Accept button, the order status changed to accepted and the same time user also get the notification that order has been accepted by the shopkeeper.
          </div>
        </div>
  </div>
  <div className="card">
        <div className="card-header" id="heading18">
          <h5 className="mb-0">
            <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapse18" aria-expanded="false" aria-controls="collapse18">
              What are the different payments option in the app?
            </button>
          </h5>
        </div>
        <div id="collapse18" className="collapse" aria-labelledby="heading18" data-parent="#accordion">
          <div className="card-body">
            Shopkeeper can accept the payment in two different way
				<ul>
  					<li>Cash on Delivery (COD): it means, at the time of order delivery to the user, and s(he) have to pay the billing amount  </li>
					<li>Online payment: User can pay the bill amount with the help online option like UPI (BHIM), e-wallets (PayTm, Mobikwik, PhonePe ), Card (Credit /Debit card), Netbanking   etc. </li>
			  </ul>
          </div>
        </div>
  </div>
  <div className="card">
        <div className="card-header" id="heading19">
          <h5 className="mb-0">
            <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapse19" aria-expanded="false" aria-controls="collapse19">
            How the online payment will come to shopkeeper account?
            </button>
          </h5>
        </div>
        <div id="collapse19" className="collapse" aria-labelledby="heading19" data-parent="#accordion">
          <div className="card-body">
            In the online payment option, shopkeeper can choose the UPI payment option, in this option bill payment amount get instantly transferred to shopkeeper account.  App will not be taking any charge on any payment transaction.
          </div>
        </div>
  </div>
  <div className="card">
          <div className="card-header" id="heading20">
            <h5 className="mb-0">
              <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapse20" aria-expanded="false" aria-controls="collapse20">
                Is App taking any charge on the bill payment?
              </button>
            </h5>
          </div>
          <div id="collapse20" className="collapse" aria-labelledby="heading20" data-parent="#accordion">
            <div className="card-body">
            	 No, Shop on Mobile app will not be taking any charge from the shopkeeper for any bill payment or any financial transaction in between shopkeeper and user.
            </div>
          </div>
  </div>
  <div className="card">
          <div className="card-header" id="heading21">
            <h5 className="mb-0">
              <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapse21" aria-expanded="false" aria-controls="collapse21">
             	What different type of delivery method supported by the app?
              </button>
            </h5>
          </div>
          <div id="collapse21" className="collapse" aria-labelledby="heading21" data-parent="#accordion">
            <div className="card-body">
				 Shop on Mobile app supports
				 <ul>
					<li>Home Delivery: Customer can opt the home delivery. But, the customer can only opt this facility, if the shop had mentioned this in his shop.</li>
					<li>Pick from Shop:  In this option, customer can pick his order from the shop and shopkeeper also need to mention this option in the shop.</li>
				</ul>
            </div>
          </div>
  </div>
  <div className="card">
          <div className="card-header" id="heading22">
            <h5 className="mb-0">
              <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapse22" aria-expanded="false" aria-controls="collapse22">
                How the online payment will come to shopkeeper account?
              </button>
            </h5>
          </div>
          <div id="collapse22" className="collapse" aria-labelledby="heading22" data-parent="#accordion">
            <div className="card-body">
              In the online payment option, shopkeeper can choose the UPI payment option, in this option bill payment amount get instantly transferred to shopkeeper account.  App will not be taking any charge on any payment transaction.
            </div>
          </div>
  </div>
  <div className="card">
          <div className="card-header" id="heading23">
            <h5 className="mb-0">
              <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapse23" aria-expanded="false" aria-controls="collapse23">
                What shopkeeper will do with the accepted order?
              </button>
            </h5>
          </div>
          <div id="collapse23" className="collapse" aria-labelledby="heading23" data-parent="#accordion">
            <div className="card-body">
              In both (Cart/Message) order types, the Shopkeeper first check the list of the order and process / server the order and the order status changed to processing.
			  <ul>
				 	<li>Incase shopkeeper, would not able to serve the order list, he can cancel the order at the accepted stage</li>
				  	<li>A small difference in the chat order, as per the user mentioned instruction, if shopkeeper has some confusion, s(he) can chat with the 	user and get the clarification and serve the order </li>
				  	<li>Shopkeeper can also offer the alternate option, if both are agreed, then shopkeeper can serve the order </li>
				  	<li>else shopkeeper can cancel the order at this stage </li>
			 </ul>
            </div>
          </div>
  </div>
  <div className="card">
          <div className="card-header" id="heading24">
            <h5 className="mb-0">
              <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapse24" aria-expanded="false" aria-controls="collapse24">
                What is On-Hold Order status and when the order is on-Hold?
              </button>
            </h5>
          </div>
          <div id="collapse24" className="collapse" aria-labelledby="heading24" data-parent="#accordion">
            <div className="card-body">
				 In case if shopkeeper need to get the clarification on order or not able to understand the customer instructions. The order status change to On-Hold from In-process. In Message/chat order, the moment shopkeeper start chatting with the user, the order status get changed to On-Hold.
            </div>
          </div>
  </div>
  <div className="card">
          <div className="card-header" id="heading25">
            <h5 className="mb-0">
              <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapse25" aria-expanded="false" aria-controls="collapse25">
                How the On-Hold Order change to In-process?
              </button>
            </h5>
          </div>
          <div id="collapse25" className="collapse" aria-labelledby="heading25" data-parent="#accordion">
            <div className="card-body">
             As soon as shopkeeper and user agreed and Ok with the solution, the status again changed In-Progress from On-hold.
            </div>
          </div>
  </div>

  <div className="card">
          <div className="card-header" id="heading26">
            <h5 className="mb-0">
              <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapse26" aria-expanded="false" aria-controls="collapse26">
             	How the In-Process order work?
              </button>
            </h5>
          </div>
          <div id="collapse26" className="collapse" aria-labelledby="heading26" data-parent="#accordion">
            <div className="card-body">
             After Accepted order, the order status changed to in-process, following steps needs to perform here
			 <ul>
			 	<li>In Cart Order</li>
					 <ul>
						<li>Shopkeeper collect the items as per the order</li>
						<li>Click the Order packed button</li>
					 </ul>
			 	<li>In Message/Chat order</li>
			 		<ul>
			 			<li>As per the user list, Shopkeeper collect the items</li>
			 			<li>Create the bill of mentioned items</li>
			 			<li>Upload the bill image</li>
			 			<li>Enter the bill amount in the pop-up screen and press the Place button</li>
			 			<li>Customer need to pay the bill, as per the opted payment option</li>
							<ul>
							 	<li>UPI option</li>
			 						<ul>
			 							<li>Customer needs to pay the bill with the help of UPI link</li>
			 							<li>On successful payment, shopkeeper got the payment message</li>
			 							<li>Pack the items</li>
			 							<li>After pack all the items, shopkeeper Press the Packed order button</li>
			 						</ul>
			 					<li>COD option</li>
			 						<ul>
			 							<li>The payment will be collected at the time of delivery</li>
			 							<li>Pack the items</li>
			 							<li>Once done, Press the Packed order button</li>
									</ul>
							</ul>
					</ul>
		     </ul>
            </div>
          </div>
  </div>
  <div className="card">
          <div className="card-header" id="heading27">
            <h5 className="mb-0">
              <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapse27" aria-expanded="false" aria-controls="collapse27">
                What is Completed Order and how its work?
              </button>
            </h5>
          </div>
          <div id="collapse27" className="collapse" aria-labelledby="heading27" data-parent="#accordion">
            <div className="card-body">
              The complete order work similar in both the Cart & Message Order. On Successful delivery / pick from shop, the order status changed to complete. <br/>
			  As soon as, shopkeeper get the delivery notification of the order, s(he) press the Delivered order button on the screen.
            </div>
          </div>
  </div>
  <div className="card">
          <div className="card-header" id="heading28">
            <h5 className="mb-0">
              <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapse28" aria-expanded="false" aria-controls="collapse28">
                After Completed the Order, what would be the next step?
              </button>
            </h5>
          </div>
          <div id="collapse28" className="collapse" aria-labelledby="heading28" data-parent="#accordion">
            <div className="card-body">
             Once order status changed to completed, it work
			 <ul>
			 	<li>Shopkeeper</li>
			 		<ul>
			 			<li>In shopkeeper dashboard updated</li>
			 			<li>The order moved to completed bucket </li>
			 			<li>Color of the order cart changed to Grey </li>
			 			<li>Completed order number get increased</li>
			 		</ul>
			 	<li>Customer/User</li>
			 		<ul>
			 			<li>After completed the order, the Shopkeeper screen get refreshed </li>
			 			<li>Now, user can able to place new order in the same shop </li>
			 			<li>Completed Order moved from the shop to My Order page, under order history tab </li>
			 			<li>User can able to view the list of all the completed order</li>
			 			<li>With the help of repeat button, user can repeat the complete order from the list</li>
					</ul>
			</ul>

            </div>
          </div>
  </div>
  <div className="card">
          <div className="card-header" id="heading29">
            <h5 className="mb-0">
              <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapse29" aria-expanded="false" aria-controls="collapse29">
                How the user uses the shop on mobile?
              </button>
            </h5>
          </div>
          <div id="collapse29" className="collapse" aria-labelledby="heading29" data-parent="#accordion">
            <div className="card-body">
              Any user can register themselves in the shop on mobile app and use this app. This app will all the near shop (App registered shop) of the user area. User can choose the shop as per the need and place the order. If no shop registered in the user area, then app will show no registered shop, hence not able to serve.
            </div>
          </div>
  </div>
  <div className="card">
          <div className="card-header" id="heading30">
            <h5 className="mb-0">
              <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapse30" aria-expanded="false" aria-controls="collapse30">
                How the shop on mobile helps the general public?
              </button>
            </h5>
          </div>
          <div id="collapse30" className="collapse" aria-labelledby="heading30" data-parent="#accordion">
            <div className="card-body">
              This app will like an online market, where any user can register themselves, choose the require near shops in their local area (~3 Kms), check the items uploaded by the shopkeeper, choose the required items and place the order. It works similar way, like you go to shop in your near shopping area. This app will help in many ways
			  <ul>
			  	<li>In Covid situation, </li>
			 		<ul>
			 		 	<li>This App is very helpful to maintain the social distancing</li>
			 			<li>Very useful for the senior citizens as govt advise them, not to go outside</li>
			 			<li>Help to the local shopkeeper to retain their business  </li>
			 		</ul>
			 	<li>Very help app for the senior citizens e.g in a family, parents and children staying in different cities, children /family member, can choose the parent city & location, choose the local shop as per their requirement and place the order. The order will be delivered within hours</li>
			 	<li>This app will very help for the Young girls & ladies, cannot go out due to some family reason or feel shy to buy the ladies product from the male shopkeeper / salesman</li>
			 	<li>This app is also help to nuclear families, one partner is having long working and would not able to contribute much inhouse shopping</li>
            </ul>
            </div>
          </div>
  </div>
  <div className="card">
          <div className="card-header" id="heading31">
            <h5 className="mb-0">
              <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapse31" aria-expanded="false" aria-controls="collapse31">
                How user can register himself?
              </button>
            </h5>
          </div>
          <div id="collapse31" className="collapse" aria-labelledby="heading31" data-parent="#accordion">
            <div className="card-body">
              Any User can go to Android play store and download & install the Shop on Mobile app.
			  	<ul>
					  <li>First time user needs to register himself with his mobile no</li>
					  <li>OTP will be sent to his registered mobile no </li>
					  <li>After enter the 6 digits OTP, registration page will open</li>
					  <li>User have to enter all the required information and submit</li>
					  <li>On successful registration, user will able to login in app and view all the near shops in his area</li>
				</ul>
            </div>
          </div>
  </div>
  <div className="card">
          <div className="card-header" id="heading32">
            <h5 className="mb-0">
              <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapse32" aria-expanded="false" aria-controls="collapse32">
                How the user view / searches the near shops?
              </button>
            </h5>
          </div>
          <div id="collapse32" className="collapse" aria-labelledby="heading32" data-parent="#accordion">
            <div className="card-body">
              As per the user GPS locations, list of all the registered shop(s) near to him/her will be appeared on user screen. From that list user can able to choose the shop as per their need
            </div>
          </div>
  </div>
  <div className="card">
            <div className="card-header" id="heading33">
              <h5 className="mb-0">
                <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapse33" aria-expanded="false" aria-controls="collapse33">
                 How the user places the order from app?
                </button>
              </h5>
            </div>
            <div id="collapse33" className="collapse" aria-labelledby="heading33" data-parent="#accordion">
              <div className="card-body">
                In any shop, user can place an order in two different ways
				<ul>
					<li>Cart & Order</li>
					  <ul>
						<li>User can choose the product from the product list</li>
						<li>Put them in the cart</li>
						<li>User can increase or decrease the order quantity</li>
						<li>Use have to choose the delivery option</li>
							<ul>
								<li>Home delivery</li>
								<li>Pick from Shop</li>
							</ul>
						<li>Need to choose the payment option</li>
							<ul>
								<li>Cash on Delivery </li>
								<li>Digital Payment</li>
							</ul>
						<li>If user have any discount coupon, S(he) can click the coupon button and add the discount coupon </li>
						<li>Place the order</li>
						<li>On successful order generation </li>
							<ul>
								<li>User can view his/her order list</li>
								<li>Quantity and Price of each item(s)</li>
								<li>Discount if applicable </li>
								<li>Total amount</li>
								<li>Delivery type</li>
								<li>Payment option</li>
								<li>Order Status (New/Accepted/In-process/ On-hold/Completed)</li>
								<li>Delivery Address   </li>
							</ul>
					</ul>
				<li>Chat & Order</li>
					<ul>
						<li>User can choose the delivery address</li>
							<ul>
								<li>Registered address</li>
								<li>New address</li>
									<ul>
										<li>User can add the new address details </li>
										<li>Submit</li>
									</ul>
							</ul>
						<li>Use have to choose the delivery option</li>
							<ul>
								<li>Home delivery</li>
								<li>Pick from Shop</li>
							</ul>
						<li>Need to choose the payment option</li>
							<ul>
								<li>Cash on Delivery </li>
								<li>Digital Payment</li>
							</ul>
						<li>In chat window </li>
							<ul>
								<li>User need to type the order list and mentioned item</li>
									<ul>
										<li>Name</li>
										<li>Quantity</li>
										<li>Specific brand, if user know</li>
										<li>If user need to mentioned the specific instruction, user can type in the chat window and submit</li>
									</ul>
								<li>2.	User can have another option </li>
									<ul>
										<li>Click the picture with the help on camera button and submit</li>
										<li>If user need to mentioned the specific instruction, user can type that in chat </li>
									</ul>
								<li>On click the upload button, the order gets submit. </li>
								<li>Appearing the check button on, instruction(s), image(s) it means the order submitted successfully and the order id will be generated. </li>
								<li>If user need to cancel the submitted order, User need to click the cancel button but before the shopkeeper accept the order</li>
								<li>On cancel the order, the chat window get refresh. The new screen appears, here user can place the new order as per the mention “Chat & Order” steps</li>
								<li>User can able to view the order status on the screen (New/Accepted/In-process/ On-hold/Completed)</li>
							</ul>
              		</ul>
              </ul>
              </div>
            </div>
  </div>
  <div className="card">
          <div className="card-header" id="heading34">
            <h5 className="mb-0">
              <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapse34" aria-expanded="false" aria-controls="collapse34">
                  What are different ways the user places the order?
              </button>
            </h5>
          </div>
          <div id="collapse34" className="collapse" aria-labelledby="heading34" data-parent="#accordion">
            <div className="card-body">
              User can place the order in two different ways
			  <ul>
			   		<li>Cart and order</li>
			   		<li>Chat/message and Order</li>
			  </ul>
            </div>
          </div>
  </div>
  <div className="card">
          <div className="card-header" id="heading35">
            <h5 className="mb-0">
              <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapse35" aria-expanded="false" aria-controls="collapse35">
                  Can user cancel the order?
              </button>
            </h5>
          </div>
          <div id="collapse35" className="collapse" aria-labelledby="heading35" data-parent="#accordion">
            <div className="card-body">
              Yes, in chat and order user can cancel the submitted order but before accepted by the shopkeeper
            </div>
          </div>
  </div>
  <div className="card">
          <div className="card-header" id="heading36">
            <h5 className="mb-0">
              <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapse36" aria-expanded="false" aria-controls="collapse36">
                  What are the different types to payment option available in Shop-On-Mobile?
              </button>
            </h5>
          </div>
          <div id="collapse36" className="collapse" aria-labelledby="heading36" data-parent="#accordion">
            <div className="card-body">
              Shop-on mobile support two different types of payment
			  <ul>
			  	<li>Cash on delivery </li>
			  		<ul>
			  			<li>Here user will pay the order bill at the time of delivery in cash </li>
			  			<li>At the time pick and order user can pay the cash and collect the order</li>
			  		</ul>
			  	<li>Digital payment (UPI)</li>
			  		<ul>
				  		<li>User have option to pay the bill amount with the help of UPI payment option </li>
					</ul>
                </ul>
            </div>
          </div>
  </div>
  <div className="card">
          <div className="card-header" id="heading37">
            <h5 className="mb-0">
              <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapse37" aria-expanded="false" aria-controls="collapse37">
                How the online payment will come to shopkeeper account?
              </button>
            </h5>
          </div>
          <div id="collapse37" className="collapse" aria-labelledby="heading37" data-parent="#accordion">
            <div className="card-body">
              In the online payment option, shopkeeper can choose the UPI payment option, in this option bill payment amount get instantly transferred to shopkeeper account.  App will not be taking any charge on any payment transaction.
            </div>
          </div>
  </div>
  </div>
  </div>
<Footer/>
</div>
    );
}
}
export default Faq;