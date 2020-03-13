import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';

class App extends React.Component {
  render(){
    return(
      <div className="App">
        <body>

<div className="super_container">
      <Header>

      </Header>


	-- Menu --

	<div className="menu">
		<div className="menu_header d-flex flex-row align-items-center justify-content-start">
			<div className="menu_logo"><a href="index.html">Travello</a></div>
			<div className="menu_close_container ml-auto"><div className="menu_close"><div></div><div></div></div></div>
		</div>
		<div className="menu_content">
			<ul>
				<li><a href="inex.html">Home</a></li>
				<li><a href="about.html">About us</a></li>
				<li><a href="#">Services</a></li>
				<li><a href="news.html">News</a></li>
				<li><a href="contact.html">Contact</a></li>
			</ul>
		</div>
		<div className="menu_social">
			<div className="menu_phone ml-auto">Call us: 00-56 445 678 33</div>
			<ul className="d-flex flex-row align-items-start justify-content-start">
				<li><a href="#"><i className="fa fa-pinterest" aria-hidden="true"></i></a></li>
				<li><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
				<li><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
				<li><a href="#"><i className="fa fa-dribbble" aria-hidden="true"></i></a></li>
				<li><a href="#"><i className="fa fa-behance" aria-hidden="true"></i></a></li>
				<li><a href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
			</ul>
		</div>
	</div>
	
	 Home 

	<div className="home">
		
		 Home Slider
		<div className="home_slider_container">
			<div className="owl-carousel owl-theme home_slider">
				
				 Slide 
				<div className="owl-item">
					<div className="background_image" style={{backgroundImage:"url('images/home_slider.jpg')"}}></div>
					<div className="home_slider_content_container">
						<div className="container">
							<div className="row">
								<div className="col">
									<div className="home_slider_content">
										<div className="home_title"><h2>Let us take you away</h2></div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				 Slide 
				<div className="owl-item">
					<div className="background_image" style={{backgroundImage:"url('images/home_slider.jpg')"}}></div>
					<div className="home_slider_content_container">
						<div className="container">
							<div className="row">
								<div className="col">
									<div className="home_slider_content">
										<div className="home_title"><h2>Let us take you away</h2></div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				 Slide 
				<div className="owl-item">
					<div className="background_image" style={{backgroundImage:"url('images/home_slider.jpg')"}}></div>
					<div className="home_slider_content_container">
						<div className="container">
							<div className="row">
								<div className="col">
									<div className="home_slider_content">
										<div className="home_title"><h2>Let us take you away</h2></div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

			</div>

			<div className="home_page_nav">
				<ul className="d-flex flex-column align-items-end justify-content-end">
					<li><a href="#" data-scroll-to="#destinations">Offers<span>01</span></a></li>
					<li><a href="#" data-scroll-to="#testimonials">Testimonials<span>02</span></a></li>
					<li><a href="#" data-scroll-to="#news">Latest<span>03</span></a></li>
				</ul>
			</div>
		</div>
	</div>

	 Search 

	<div className="home_search">
		<div className="container">
			<div className="row">
				<div className="col">
					<div className="home_search_container">
						<div className="home_search_title">Search for your trip</div>
						<div className="home_search_content">
							<form action="#" className="home_search_form" id="home_search_form">
								<div className="d-flex flex-lg-row flex-column align-items-start justify-content-lg-between justify-content-start">
									<input type="text" className="search_input search_input_1" placeholder="City" required="required"/>
									<input type="text" className="search_input search_input_2" placeholder="Departure" required="required"/>
									<input type="text" className="search_input search_input_3" placeholder="Arrival" required="required"/>
									<input type="text" className="search_input search_input_4" placeholder="Budget" required="required"/>
									<button className="home_search_button">search</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>

	 Intro 
   
	<div className="intro">
		<div className="intro_background" style={{backgroundImage:"url('images/intro.png')"}}></div>
		<div className="container">
			<div className="row">
				<div className="col">
					<div className="intro_container">
						<div className="row">

							-- Intro Item -->
							<div class="col-lg-4 intro_col">
								<div className="intro_item d-flex flex-row align-items-end justify-content-start">
									<div className="intro_icon"><img src="images/beach.svg" alt=""/></div>
									<div className="intro_content">
										<div className="intro_title">Top Destinations</div>
										<div className="intro_subtitle"><p>Nulla pretium tincidunt felis, nec.</p></div>
									</div>
								</div>
							</div>

							-- Intro Item -->
							<div className="col-lg-4 intro_col">
								<div className="intro_item d-flex flex-row align-items-end justify-content-start">
									<div className="intro_icon"><img src="images/wallet.svg" alt=""/></div>
									<div className="intro_content">
										<div className="intro_title">The Best Prices</div>
										<div className="intro_subtitle"><p>Sollicitudin mauris lobortis in.</p></div>
									</div>
								</div>
							</div>

							-- Intro Item -->
							<div className="col-lg-4 intro_col">
								<div className="intro_item d-flex flex-row align-items-end justify-content-start">
									<div className="intro_icon"><img src="images/suitcase.svg" alt=""/></div>
									<div className="intro_content">
										<div className="intro_title">Amazing Services</div>
										<div className="intro_subtitle"><p>Nulla pretium tincidunt felis, nec.</p></div>
									</div>
								</div>
							</div>

						</div>
					</div>
				</div>		
			</div>
		</div>
	</div>

	-- Destinations -->

	<div className="destinations" id="destinations">
		<div className="container">
			<div className="row">
				<div className="col text-center">
					<div className="section_subtitle">simply amazing places</div>
					<div className="section_title"><h2>Popular Destinations</h2></div>
				</div>
			</div>
			<div className="row destinations_row">
				<div className="col">
					<div className="destinations_container item_grid">

						-- Destination -->
						<div className="destination item">
							<div className="destination_image">
								<img src="images/destination_1.jpg" alt=""/>
								<div className="spec_offer text-center"><a href="#">Special Offer</a></div>
							</div>
							<div className="destination_content">
								<div className="destination_title"><a href="destinations.html">Bali</a></div>
								<div className="destination_subtitle"><p>Nulla pretium tincidunt felis, nec.</p></div>
								<div className="destination_price">From $679</div>
							</div>
						</div>

						-- Destination -->
						<div className="destination item">
							<div className="destination_image">
								<img src="images/destination_2.jpg" alt=""/>
							</div>
							<div className="destination_content">
								<div className="destination_title"><a href="destinations.html">Indonesia</a></div>
								<div className="destination_subtitle"><p>Nulla pretium tincidunt felis, nec.</p></div>
								<div className="destination_price">From $679</div>
							</div>
						</div>

					 -- Destination -->
						<div className="destination item">
							<div className="destination_image">
								<img src="images/destination_3.jpg" alt=""/>
							</div>
							<div className="destination_content">
								<div className="destination_title"><a href="destinations.html">San Francisco</a></div>
								<div className="destination_subtitle"><p>Nulla pretium tincidunt felis, nec.</p></div>
								<div className="destination_price">From $679</div>
							</div>
						</div>

						-- Destination -->
						<div className="destination item">
							<div className="destination_image">
								<img src="images/destination_4.jpg" alt=""/>
							</div>
							<div className="destination_content">
								<div className="destination_title"><a href="destinations.html">Paris</a></div>
								<div className="destination_subtitle"><p>Nulla pretium tincidunt felis, nec.</p></div>
								<div className="destination_price">From $679</div>
							</div>
						</div>

						-- Destination -->
						<div className="destination item">
							<div className="destination_image">
								<img src="images/destination_5.jpg" alt=""/>
							</div>
							<div className="destination_content">
								<div className="destination_title"><a href="destinations.html">Phi Phi Island</a></div>
								<div className="destination_subtitle"><p>Nulla pretium tincidunt felis, nec.</p></div>
								<div className="destination_price">From $679</div>
							</div>
						</div>

						-- Destination -->
						<div className="destination item">
							<div className="destination_image">
								<img src="images/destination_6.jpg" alt=""/>
							</div>
							<div className="destination_content">
								<div className="destination_title"><a href="destinations.html">Mykonos</a></div>
								<div className="destination_subtitle"><p>Nulla pretium tincidunt felis, nec.</p></div>
								<div className="destination_price">From $679</div>
							</div>
						</div>

					</div>
				</div>
			</div>
		</div>
	</div>

	-- Testimonials -->

	<div className="testimonials" id="testimonials">
		<div className="parallax_background parallax-window" data-parallax="scroll" data-image-src="images/testimonials.jpg" data-speed="0.8"></div>
		<div className="container">
			<div className="row">
				<div className="col text-center">
					<div className="section_subtitle">simply amazing places</div>
					<div className="section_title"><h2>Testimonials</h2></div>
				</div>
			</div>
			<div className="row testimonials_row">
				<div className="col">

					-- Testimonials Slider -->
					<div className="testimonials_slider_container">
						<div className="owl-carousel owl-theme testimonials_slider">
							
							-- Slide -->
							<div className="owl-item text-center">
								<div className="testimonial">Lorem ipsum dolor sit amet, consectetur adipiscing elit. lobortis dolor. Cras placerat lectus a posuere aliquet. Curabitur quis vehicula odio.</div>
								<div className="testimonial_author">
									<div className="testimonial_author_content d-flex flex-row align-items-end justify-content-start">
										<div>john turner,</div>
										<div>client</div>
									</div>
								</div>
							</div>

							-- Slide -->
							<div className="owl-item text-center">
								<div className="testimonial">Lorem ipsum dolor sit amet, consectetur adipiscing elit. lobortis dolor. Cras placerat lectus a posuere aliquet. Curabitur quis vehicula odio.</div>
								<div className="testimonial_author">
									<div className="testimonial_author_content d-flex flex-row align-items-end justify-content-start">
										<div>john turner,</div>
										<div>client</div>
									</div>
								</div>
							</div>

							-- Slide -->
							<div className="owl-item text-center">
								<div className="testimonial">Lorem ipsum dolor sit amet, consectetur adipiscing elit. lobortis dolor. Cras placerat lectus a posuere aliquet. Curabitur quis vehicula odio.</div>
								<div className="testimonial_author">
									<div className="testimonial_author_content d-flex flex-row align-items-end justify-content-start">
										<div>john turner,</div>
										<div>client</div>
									</div>
								</div>
							</div>

						</div>
					</div>
				</div>
			</div>
		</div>
		<div className="test_nav">
			<ul className="d-flex flex-column align-items-end justify-content-end">
				<li><a href="#">City Breaks Clients<span>01</span></a></li>
				<li><a href="#">Cruises Clients<span>02</span></a></li>
				<li><a href="#">All Inclusive Clients<span>03</span></a></li>
			</ul>
		</div>
	</div>

	-- News -->

	<div className="news" id="news">
		<div className="container">
			<div className="row">
				<div className="col-xl-8">
					<div className="news_container">
						
						-- News Post -->
						<div className="news_post d-flex flex-md-row flex-column align-items-start justify-content-start">
							<div className="news_post_image"><img src="images/news_1.jpg" alt=""/></div>
							<div className="news_post_content">
								<div className="news_post_date d-flex flex-row align-items-end justify-content-start">
									<div>02</div>
									<div>june</div>
								</div>
								<div className="news_post_title"><a href="#">Best tips to travel light</a></div>
								<div className="news_post_category">
									<ul>
										<li><a href="#">lifestyle & travel</a></li>
									</ul>
								</div>
								<div className="news_post_text">
									<p>Pellentesque sit amet elementum ccumsan sit amet mattis eget, tristique at leo. Vivamus massa.Tempor massa et laoreet.</p>
								</div>
							</div>
						</div>

						-- News Post -->
						<div className="news_post d-flex flex-md-row flex-column align-items-start justify-content-start">
							<div className="news_post_image"><img src="images/news_2.jpg" alt=""/></div>
							<div className="news_post_content">
								<div className="news_post_date d-flex flex-row align-items-end justify-content-start">
									<div>01</div>
									<div>june</div>
								</div>
								<div className="news_post_title"><a href="#">Best tips to travel light</a></div>
								<div className="news_post_category">
									<ul>
										<li><a href="#">lifestyle & travel</a></li>
									</ul>
								</div>
								<div className="news_post_text">
									<p>Tempor massa et laoreet malesuada. Pellentesque sit amet elementum ccumsan sit amet mattis eget, tristique at leo.</p>
								</div>
							</div>
						</div>

						-- News Post -->
						<div className="news_post d-flex flex-md-row flex-column align-items-start justify-content-start">
							<div className="news_post_image"><img src="images/news_3.jpg" alt=""/></div>
							<div className="news_post_content">
								<div className="news_post_date d-flex flex-row align-items-end justify-content-start">
									<div>29</div>
									<div>may</div>
								</div>
								<div className="news_post_title"><a href="#">Best tips to travel light</a></div>
								<div className="news_post_category">
									<ul>
										<li><a href="#">lifestyle & travel</a></li>
									</ul>
								</div>
								<div className="news_post_text">
									<p>Vivamus massa.Tempor massa et laoreet malesuada. Aliquam nulla nisl, accumsan sit amet mattis.</p>
								</div>
							</div>
						</div>

					</div>
				</div>
        
				-- News Sidebar -->
				<div className="col-xl-4">
					<div className="travello">
						<div className="background_image" style={{backgroundImage:"url('images/travello.jpg')"}}></div>
						<div className="travello_content">
							<div className="travello_content_inner">
								<div></div>
								<div></div>
							</div>
						</div>
						<div className="travello_container">
							<a href="#">
								<div className="d-flex flex-column align-items-center justify-content-end">
									<span className="travello_title">Get a 20% Discount</span>
									<span className="travello_subtitle">Buy Your Vacation Online Now</span>
								</div>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>

	-- Footer -->

	<footer className="footer">
		<div className="parallax_background parallax-window" data-parallax="scroll" data-image-src="images/footer_1.jpg" data-speed="0.8"></div>
		<div className="container">
			<div className="row">
				<div className="col">
					<div className="newsletter">
						<div className="newsletter_title_container text-center">
							<div className="newsletter_title">Subscribe to our newsletter to get the latest trends & news</div>
							<div className="newsletter_subtitle">Join our database NOW!</div>
						</div>
						<div className="newsletter_form_container">
							<form action="#" class="newsletter_form d-flex flex-md-row flex-column align-items-start justify-content-between" id="newsletter_form">
								<div className="d-flex flex-md-row flex-column align-items-start justify-content-between">
									<div><input type="text" className="newsletter_input newsletter_input_name" id="newsletter_input_name" placeholder="Name" required="required"/><div className="input_border"></div></div>
									<div><input type="email" className="newsletter_input newsletter_input_email" id="newsletter_input_email" placeholder="Your e-mail" required="required"/><div className="input_border"></div></div>
								</div>
								<div><button className="newsletter_button">subscribe</button></div>
							</form>
						</div>
					</div>
				</div>
			</div>
			<div className="row footer_contact_row">
				<div className="col-xl-10 offset-xl-1">
					<div className="row">

						-- Footer Contact Item -->
						<div className="col-xl-4 footer_contact_col">
							<div class="footer_contact_item d-flex flex-column align-items-center justify-content-start text-center">
								<div className="footer_contact_icon"><img src="images/sign.svg" alt=""/></div>
								<div className="footer_contact_title">give us a call</div>
								<div className="footer_contact_list">
									<ul>
										<li>Office Landline: +44 5567 32 664 567</li>
										<li>Mobile: +44 5567 89 3322 332</li>
									</ul>
								</div>
							</div>
						</div>

						-- Footer Contact Item -->
						<div className="col-xl-4 footer_contact_col">
							<div className="footer_contact_item d-flex flex-column align-items-center justify-content-start text-center">
								<div className="footer_contact_icon"><img src="images/trekking.svg" alt=""/></div>
								<div className="footer_contact_title">come & drop by</div>
								<div className="footer_contact_list">
									<ul style="max-width:190px">
										<li>4124 Barnes Street, Sanford, FL 32771</li>
									</ul>
								</div>
							</div>
						</div>

					  -- Footer Contact Item -->
						<div className="col-xl-4 footer_contact_col">
							<div className="footer_contact_item d-flex flex-column align-items-center justify-content-start text-center">
								<div className="footer_contact_icon"><img src="images/around.svg" alt=""/></div>
								<div className="footer_contact_title">send us a message</div>
								<div className="footer_contact_list">
									<ul>
										<li>youremail@gmail.com</li>
										<li>Office@yourbusinessname.com</li>
									</ul>
								</div>
							</div>
						</div>

					</div>
				</div>
			</div>
		</div>
		<div className="col text-center">-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->
Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <i className="fa fa-heart-o" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --> </div>
	</footer>
</div>

<script src="js/jquery-3.2.1.min.js"></script>
<script src="styles/bootstrap4/popper.js"></script>
<script src="styles/bootstrap4/bootstrap.min.js"></script>
<script src="plugins/OwlCarousel2-2.2.1/owl.carousel.js"></script>
<script src="plugins/Isotope/isotope.pkgd.min.js"></script>
<script src="plugins/scrollTo/jquery.scrollTo.min.js"></script>
<script src="plugins/easing/easing.js"></script>
<script src="plugins/parallax-js-master/parallax.min.js"></script>
<script src="js/custom.js"></script>
</body>
      </div>   
    );
  }
}

export default App;
