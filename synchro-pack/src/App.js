import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component{
  render(){
    return (
      <div classNameName="App">
        <body>
		
          <div className="colorlib-loader"/>
        
          <div id="page">
            <nav className="colorlib-nav" role="navigation">
              <div className="top-menu">
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-xs-2" id="colorlib-logo">
                      <a href="index.html">SYNCHRO</a>                      
                    </div>
                    <div className="col-xs-10 text-right menu-1">
                      <ul>
                        <li className="active"><a href="index.html">Home</a></li>
                        <li className="has-dropdown">
                          <a href="tours.html">Vôos</a>
                          <ul className="dropdown">
                            <li><a href="#">Destinos</a></li>
                            <li><a href="#">Promoções</a></li>
                            <li><a href="#">Booking</a></li>
                          </ul>
                        </li>
                        <li><a href="hotels.html">Hotel</a></li>
                        <li><a href="contact.html">Contato</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </nav>
            <aside id="colorlib-hero">
              <div className="flexslider">
                <ul className="slides">
                  <li style={{backgroundImage: "url('images/img_bg_1.jpg')"}}>
                    <div className="overlay"></div>
                    <div className="container-fluid">
                      <div className="row">
                        <div className="col-md-6 col-md-offset-3 col-sm-12 col-xs-12 slider-text">
                          <div className="slider-text-inner text-center">
                            <h2>2 Days Tour</h2>
                            <h1>Amazing Maldives Tour</h1>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li style={{backgroundImage: "url('images/img_bg_2.jpg')"}}>
                    <div className="overlay"></div>
                    <div className="container-fluid">
                      <div className="row">
                        <div className="col-md-6 col-md-offset-3 col-sm-12 col-xs-12 slider-text">
                          <div className="slider-text-inner text-center">
                            <h2>10 Days Cruises</h2>
                            <h1>From Greece to Spain</h1>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li style={{backgroundImage: "url('images/img_bg_5.jpg')"}}>
                    <div className="overlay"></div>
                    <div className="container-fluids">
                      <div className="row">
                        <div className="col-md-6 col-md-offset-3 col-sm-12 col-xs-12 slider-text">
                          <div className="slider-text-inner text-center">
                            <h2>Explore our most tavel agency</h2>
                            <h1>Our Travel Agency</h1>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li style={{backgroundImage: "url('images/img_bg_4.jpg')"}}>
                    <div className="overlay"></div>
                    <div className="container-fluid">
                      <div className="row">
                        <div className="col-md-6 col-md-offset-3 col-sm-12 col-xs-12 slider-text">
                          <div className="slider-text-inner text-center">
                            <h2>Experience the</h2>
                            <h1>Best Trip Ever</h1>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>	   	
                  </ul>
                </div>
            </aside>
            <div id="colorlib-reservation">
               
                <div classNameName="row">
                  <div classNameName="search-wrap">
                    <div classNameName="container">
                    
                    </div>
                    <div classNameName="tab-content">
                      <div id="flight" classNameName="tab-pane fade in active">
                        <form method="post" classNameName="colorlib-form">
                                <div classNameName="row">
                                <div classNameName="col-md-3">
                                  <div className="form-group">
                                    <label for="date">Destino:</label>
                                    <div className="form-field">
                                      <input type="text" id="location" className="form-control" placeholder="Search Location"/>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-md-2">
                                  <div className="form-group">
                                    <label for="date">Check-in:</label>
                                    <div className="form-field">
                                      <i className="icon icon-calendar2"></i>
                                      <input type="text" id="date" className="form-control date" placeholder="Check-in date"/>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-md-2">
                                  <div className="form-group">
                                    <label for="date">Check-out:</label>
                                    <div className="form-field">
                                      <i className="icon icon-calendar2"></i>
                                      <input type="text" id="date" className="form-control date" placeholder="Check-out date"/>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-md-3">
                                  <div className="form-group">
                                    <label for="guests">Guest</label>
                                    <div className="form-field">
                                      <i className="icon icon-arrow-down3"></i>
                                      <select name="people" id="people" className="form-control">
                                        <option value="#">1</option>
                                        <option value="#">2</option>
                                        <option value="#">3</option>
                                        <option value="#">4</option>
                                        <option value="#">5+</option>
                                      </select>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-md-2">
                                  <input type="submit" name="submit" id="submit" value="Find Flights" className="btn btn-primary btn-block"/>
                                </div>
                              </div>
                            </form>
                        </div>
                        <div id="hotel" className="tab-pane fade">
                          <form method="post" className="colorlib-form">
                                <div className="row">
                                <div className="col-md-2">
                                  <div className="booknow">
                                    <h2>Book Now</h2>
                                    <span>Best Price Online</span>
                                  </div>
                                </div>
                                <div className="col-md-3">
                                  <div className="form-group">
                                    <label for="date">Check-in:</label>
                                    <div className="form-field">
                                      <i className="icon icon-calendar2"></i>
                                      <input type="text" id="date" className="form-control date" placeholder="Check-in date"/>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-md-3">
                                  <div className="form-group">
                                    <label for="date">Check-out:</label>
                                    <div className="form-field">
                                      <i className="icon icon-calendar2"></i>
                                      <input type="text" id="date" className="form-control date" placeholder="Check-out date"/>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-md-2">
                                  <div className="form-group">
                                    <label for="guests">Guest</label>
                                    <div className="form-field">
                                      <i className="icon icon-arrow-down3"></i>
                                      <select name="people" id="people" className="form-control">
                                        <option value="#">1</option>
                                        <option value="#">2</option>
                                        <option value="#">3</option>
                                        <option value="#">4</option>
                                        <option value="#">5+</option>
                                      </select>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-md-2">
                                  <input type="submit" name="submit" id="submit" value="Find Hotel" className="btn btn-primary btn-block"/>
                                </div>
                              </div>
                            </form>
                      </div>
                      <div id="car" className="tab-pane fade">
                        <form method="post" className="colorlib-form">
                                <div className="row">
                                <div className="col-md-4">
                                  <div className="form-group">
                                    <label for="date">Where:</label>
                                    <div className="form-field">
                                      <input type="text" id="location" className="form-control" placeholder="Search Location"/>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-md-3">
                                  <div className="form-group">
                                    <label for="date">Start Date:</label>
                                    <div className="form-field">
                                      <i className="icon icon-calendar2"></i>
                                      <input type="text" id="date" className="form-control date" placeholder="Check-in date"/>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-md-3">
                                  <div className="form-group">
                                    <label for="date">Return Date:</label>
                                    <div className="form-field">
                                      <i className="icon icon-calendar2"></i>
                                      <input type="text" id="date" className="form-control date" placeholder="Check-out date"/>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-md-2">
                                  <input type="submit" name="submit" id="submit" value="Find Car" className="btn btn-primary btn-block"/>
                                </div>
                              </div>
                            </form>
                      </div>
                      <div id="cruises" className="tab-pane fade">
                          <form method="post" className="colorlib-form">
                                <div className="row">
                                <div className="col-md-4">
                                  <div className="form-group">
                                    <label for="date">Where:</label>
                                    <div className="form-field">
                                      <input type="text" id="location" className="form-control" placeholder="Search Location"/>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-md-3">
                                  <div className="form-group">
                                    <label for="date">Start Date:</label>
                                    <div className="form-field">
                                      <i className="icon icon-calendar2"></i>
                                      <input type="text" id="date" className="form-control date" placeholder="Check-in date"/>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-md-3">
                                  <div className="form-group">
                                    <label for="guests">Categories</label>
                                    <div className="form-field">
                                      <i className="icon icon-arrow-down3"></i>
                                      <select name="category" id="category" className="form-control">
                                        <option value="#">Suite</option>
                                        <option value="#">Super Deluxe</option>
                                        <option value="#">Balcony</option>
                                        <option value="#">Economy</option>
                                        <option value="#">Luxury</option>
                                      </select>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-md-2">
                                  <input type="submit" name="submit" id="submit" value="Find Cruises" className="btn btn-primary btn-block"/>
                                </div>
                              </div>
                            </form>
                      </div>
                      </div>
                  </div>
                </div>
              </div>
            </div>
        
            <div id="colorlib-services">
              <div className="container">
                <div className="row no-gutters">
                  <div className="col-md-3 animate-box text-center aside-stretch">
                    <div className="services">
                      <span className="icon">
                        <i className="flaticon-around"></i>
                      </span>
                      <h3>Amazing Travel</h3>
                      <p>Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies</p>
                    </div>
                  </div>
                  <div className="col-md-3 animate-box text-center">
                    <div className="services">
                      <span className="icon">
                        <i className="flaticon-boat"></i>
                      </span>
                      <h3>Our Cruises</h3>
                      <p>Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies</p>
                    </div>
                  </div>
                  <div className="col-md-3 animate-box text-center">
                    <div className="services">
                      <span className="icon">
                        <i className="flaticon-car"></i>
                      </span>
                      <h3>Book Your Trip</h3>
                      <p>Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies</p>
                    </div>
                  </div>
                  <div className="col-md-3 animate-box text-center">
                    <div className="services">
                      <span className="icon">
                        <i className="flaticon-postcard"></i>
                      </span>
                      <h3>Nice Support</h3>
                      <p>Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        
            <div className="colorlib-tour colorlib-light-grey">
              <div className="container">
                <div className="row">
                  <div className="col-md-6 col-md-offset-3 text-center colorlib-heading animate-box">
                    <h2>Popular Destination</h2>
                    <p>We love to tell our successful far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                  </div>
                </div>
              </div>
              <div className="tour-wrap">
                <a href="#" className="tour-entry animate-box">
                  <div className="tour-img" style={{backgroundImage: "url('images/tour-1.jpg')"}}>
                  </div>
                  <span className="desc">
                    <p className="star"><span><i className="icon-star-full"></i><i className="icon-star-full"></i><i className="icon-star-full"></i><i className="icon-star-full"></i><i className="icon-star-full"></i></span> 545 Reviews</p>
                    <h2>Athens, Greece</h2>
                    <span className="city">Athens, Greece</span>
                    <span className="price">$450</span>
                  </span>
                </a>
                <a href="#" className="tour-entry animate-box">
                  <div className="tour-img" style={{backgroundImage: "url('images/tour-2.jpg')"}}>
                  </div>
                  <span className="desc">
                    <p className="star"><span><i className="icon-star-full"></i><i className="icon-star-full"></i><i className="icon-star-full"></i><i className="icon-star-full"></i><i className="icon-star-full"></i></span> 545 Reviews</p>
                    <h2>Family Tour in Thailand</h2>
                    <span className="city">Athens, Greece</span>
                    <span className="price">$450</span>
                  </span>
                </a>
                <a href="#" className="tour-entry animate-box">
                  <div className="tour-img" style={{backgroundImage: "url('images/tour-3.jpg')"}}>
                  </div>
                  <span className="desc">
                    <p className="star"><span><i className="icon-star-full"></i><i className="icon-star-full"></i><i className="icon-star-full"></i><i className="icon-star-full"></i><i className="icon-star-full"></i></span> 545 Reviews</p>
                    <h2>Family Tour in Philippines</h2>
                    <span className="city">Lipa, Philippines</span>
                    <span className="price">$450</span>
                  </span>
                </a>
                <a href="#" className="tour-entry animate-box">
                  <div className="tour-img" style={{backgroundImage: "url('images/tour-4.jpg')"}}>
                  </div>
                  <span className="desc">
                    <p className="star"><span><i className="icon-star-full"></i><i className="icon-star-full"></i><i className="icon-star-full"></i><i className="icon-star-full"></i><i className="icon-star-full"></i></span> 545 Reviews</p>
                    <h2>Family Tour in Greece</h2>
                    <span className="city">Athens, Greece</span>
                    <span className="price">$450</span>
                  </span>
                </a>
                <a href="#" className="tour-entry animate-box">
                  <div className="tour-img" style={{backgroundImage: "url('images/tour-5.jpg')"}}>
                  </div>
                  <span className="desc">
                    <p className="star"><span><i className="icon-star-full"></i><i className="icon-star-full"></i><i className="icon-star-full"></i><i className="icon-star-full"></i><i className="icon-star-full"></i></span> 545 Reviews</p>
                    <h2>Family Tour in Greece</h2>
                    <span className="city">Athens, Greece</span>
                    <span className="price">$450</span>
                  </span>
                </a>
                <a href="#" className="tour-entry animate-box">
                  <div className="tour-img" style={{backgroundImage: "url('images/tour-6.jpg')"}}>
                  </div>
                  <span className="desc">
                    <p className="star"><span><i className="icon-star-full"></i><i className="icon-star-full"></i><i className="icon-star-full"></i><i className="icon-star-full"></i><i className="icon-star-full"></i></span> 545 Reviews</p>
                    <h2>Family Tour in Greece</h2>
                    <span className="city">Athens, Greece</span>
                    <span className="price">$450</span>
                  </span>
                </a>
                <a href="#" className="tour-entry animate-box">
                  <div className="tour-img" style={{backgroundImage: "url('images/tour-7.jpg')"}}>
                  </div>
                  <span className="desc">
                    <p className="star"><span><i className="icon-star-full"></i><i className="icon-star-full"></i><i className="icon-star-full"></i><i className="icon-star-full"></i><i className="icon-star-full"></i></span> 545 Reviews</p>
                    <h2>Family Tour in Greece</h2>
                    <span className="city">Athens, Greece</span>
                    <span className="price">$450</span>
                  </span>
                </a>
                <a href="#" className="tour-entry animate-box">
                  <div className="tour-img" style={{backgroundImage: "url('images/tour-8.jpg')"}}>
                  </div>
                  <span className="desc">
                    <p className="star"><span><i className="icon-star-full"></i><i className="icon-star-full"></i><i className="icon-star-full"></i><i className="icon-star-full"></i><i className="icon-star-full"></i></span> 545 Reviews</p>
                    <h2>Family Tour in Greece</h2>
                    <span className="city">Athens, Greece</span>
                    <span className="price">$450</span>
                  </span>
                </a>
              </div>
            </div>
        
        
            <div id="colorlib-blog">
              <div className="container">
                <div className="row">
                  <div className="col-md-6 col-md-offset-3 text-center colorlib-heading animate-box">
                    <h2>Recent Blog</h2>
                    <p>We love to tell our successful far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                  </div>
                </div>
                <div className="blog-flex">
                  <div className="f-entry-img" style={{backgroundImage: "url('images/blog-3.jpg')"}}>
                  </div>
                  <div className="blog-entry aside-stretch-right">
                    <div className="row">
                      <div className="col-md-12 animate-box">
                        <a href="blog.html" className="blog-post">
                          <span className="img" style={{backgroundImage: "url('images/blog-1.jpg')"}}></span>
                          <div className="desc">
                            <span className="date">Feb 22, 2018</span>
                            <h3>A Definitive Guide to the Best Dining</h3>
                            <span className="cat">Activities</span>
                          </div>
                        </a>
                      </div>
                      <div className="col-md-12 animate-box">
                        <a href="blog.html" className="blog-post">
                          <span className="img" style={{backgroundImage: "url('images/blog-2.jpg')"}}></span>
                          <div className="desc">
                            <span className="date">Feb 22, 2018</span>
                            <h3>How These 5 People Found The Path to Their Dream Trip</h3>
                            <span className="cat">Activities</span>
                          </div>
                        </a>
                      </div>
                      <div className="col-md-12 animate-box">
                        <a href="blog.html" className="blog-post">
                          <span className="img" style={{backgroundImage: "url('images/blog-4.jpg')"}}></span>
                          <div className="desc">
                            <span className="date">Feb 22, 2018</span>
                            <h3>Our Secret Island Boat Tour Is just for You</h3>
                            <span className="cat">Activities</span>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        
            <div id="colorlib-intro" className="intro-img" style={{backgroundImage: "url('images/cover-img-1.jpg')"}} data-stellar-background-ratio="0.5">
              <div className="overlay"></div>
              <div className="container">
                <div className="row">
                  <div className="col-md-6 animate-box">
                    <div className="intro-desc">
                      <div className="text-salebox">
                        <div className="text-lefts">
                          <div className="sale-box">
                            <div className="sale-box-top">
                              <h2 className="number">45</h2>
                              <span className="sup-1">%</span>
                              <span className="sup-2">Off</span>
                            </div>
                            <h2 className="text-sale">Sale</h2>
                          </div>
                        </div>
                        <div className="text-rights">
                          <h3 className="title">Just hurry up limited offer!</h3>
                          <p>Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                          <p><a href="#" className="btn btn-primary">Book Now</a> <a href="#" className="btn btn-primary btn-outline">Read more</a></p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 animate-box">
                    <div className="video-wrap">
                      <div className="video colorlib-video" style={{backgroundImage: "url('images/img_bg_2.jpg')"}}>
                        <a href="https://vimeo.com/channels/staffpicks/93951774" className="popup-vimeo"><i className="icon-video"></i></a>
                        <div className="video-overlay"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        
            <div id="colorlib-hotel">
              <div className="container">
                <div className="row">
                  <div className="col-md-6 col-md-offset-3 text-center colorlib-heading animate-box">
                    <h2>Recommended Hotels</h2>
                    <p>We love to tell our successful far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12 animate-box">
                    <div className="owl-carousel">
                      <div className="item">
                        <div className="hotel-entry">
                          <a href="hotels.html" className="hotel-img" style={{backgroundImage: "url('images/hotel-1.jpg')"}}>
                            <p className="price"><span>$120</span><small> /night</small></p>
                          </a>
                          <div className="desc">
                            <p className="star"><span><i className="icon-star-full"></i><i className="icon-star-full"></i><i className="icon-star-full"></i><i className="icon-star-full"></i><i className="icon-star-full"></i></span> 545 Reviews</p>
                            <h3><a href="#">Hotel Edison</a></h3>
                            <span className="place">New York, USA</span>
                            <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                          </div>
                        </div>
                      </div>
                      <div className="item">
                        <div className="hotel-entry">
                          <a href="hotels.html" className="hotel-img" style={{backgroundImage: "url('images/hotel-2.jpg')"}}>
                            <p className="price"><span>$120</span><small> /night</small></p>
                          </a>
                          <div className="desc">
                            <p className="star"><span><i className="icon-star-full"></i><i className="icon-star-full"></i><i className="icon-star-full"></i><i className="icon-star-full"></i><i className="icon-star-full"></i></span> 545 Reviews</p>
                            <h3><a href="#">Hotel Edison</a></h3>
                            <span className="place">New York, USA</span>
                            <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                          </div>
                        </div>
                      </div>
                      <div className="item">
                        <div className="hotel-entry">
                          <a href="hotels.html" className="hotel-img" style={{backgroundImage: "url('images/hotel-3.jpg')"}}>
                            <p className="price"><span>$120</span><small> /night</small></p>
                          </a>
                          <div className="desc">
                            <p className="star"><span><i className="icon-star-full"></i><i className="icon-star-full"></i><i className="icon-star-full"></i><i className="icon-star-full"></i><i className="icon-star-full"></i></span> 545 Reviews</p>
                            <h3><a href="#">Hotel Edison</a></h3>
                            <span className="place">New York, USA</span>
                            <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                          </div>
                        </div>
                      </div>
                      <div className="item">
                        <div className="hotel-entry">
                          <a href="hotels.html" className="hotel-img" style={{backgroundImage: "url('images/hotel-4.jpg')"}}>
                            <p className="price"><span>$120</span><small> /night</small></p>
                          </a>
                          <div className="desc">
                            <p className="star"><span><i className="icon-star-full"></i><i className="icon-star-full"></i><i className="icon-star-full"></i><i className="icon-star-full"></i><i className="icon-star-full"></i></span> 545 Reviews</p>
                            <h3><a href="#">Hotel Edison</a></h3>
                            <span className="place">New York, USA</span>
                            <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        
            <div id="colorlib-testimony" className="colorlib-light-grey">
              <div className="container">
                <div className="row">
                  <div className="col-md-6 col-md-offset-3 text-center colorlib-heading animate-box">
                    <h2>Our Satisfied Guests says</h2>
                    <p>We love to tell our successful far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-8 col-md-offset-2 animate-box">						
                    <div className="owl-carousel2">
                      <div className="item">
                        <div className="testimony text-center">
                          <span className="img-user" style={{backgroundImage: "url('images/person1.jpg')"}}></span>
                          <span className="user">Alysha Myers</span>
                          <small>Miami Florida, USA</small>
                          <blockquote>
                            <p>" A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                          </blockquote>
                        </div>
                      </div>
                      <div className="item">
                        <div className="testimony text-center">
                          <span className="img-user" style={{backgroundImage: "url('images/person2.jpg')"}}></span>
                          <span className="user">James Fisher</span>
                          <small>New York, USA</small>
                          <blockquote>
                            <p>One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.</p>
                          </blockquote>
                        </div>
                      </div>
                      <div className="item">
                        <div className="testimony text-center">
                          <span className="img-user" style={{backgroundImage: "url('images/person3.jpg')"}}></span>
                          <span className="user">Jacob Webb</span>
                          <small>Athens, Greece</small>
                          <blockquote>
                            <p>Alphabet Village and the subline of her own road, the Line Lane. Pityful a rethoric question ran over her cheek, then she continued her way.</p>
                          </blockquote>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>	
              </div>
            </div>
        
            <div className="colorlib-tour">
              <div className="container">
                <div className="row">
                  <div className="col-md-6 col-md-offset-3 text-center colorlib-heading animate-box">
                    <h2>Most Popular Travel Countries</h2>
                    <p>We love to tell our successful far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <div className="f-tour">
                      <div className="row row-pb-md">
                        <div className="col-md-6">
                          <div className="row">
                            <div className="col-md-6 animate-box">
                              <a  href="tours.html" className="f-tour-img" style={{backgroundImage: "url('images/tour-1.jpg')"}}>
                                <div className="desc">
                                  <h3>Rome - 5 Days</h3>
                                  <p className="price"><span>$120</span> <small>/ person</small></p>
                                </div>
                              </a>
                            </div>
                            <div className="col-md-6 animate-box">
                              <a  href="tours.html" className="f-tour-img" style={{backgroundImage: "url('images/tour-2.jpg')"}}>
                                <div className="desc">
                                  <h3>Rome - 5 Days</h3>
                                  <p className="price"><span>$120</span> <small>/ person</small></p>
                                </div>
                              </a>
                            </div>
                            <div className="col-md-6 animate-box">
                              <a  href="tours.html" className="f-tour-img" style={{backgroundImage: "url('images/tour-3.jpg')"}}>
                                <div className="desc">
                                  <h3>Rome - 5 Days</h3>
                                  <p className="price"><span>$120</span> <small>/ person</small></p>
                                </div>
                              </a>
                            </div>
                            <div className="col-md-6 animate-box">
                              <a  href="tours.html" className="f-tour-img" style={{backgroundImage: "url('images/tour-4.jpg')"}}>
                                <div className="desc">
                                  <h3>Rome - 5 Days</h3>
                                  <p className="price"><span>$120</span> <small>/ person</small></p>
                                </div>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6 animate-box">
                          <div className="desc">
                            <div className="row">
                              <div className="col-md-12">
                                <h3>Italy, Europe</h3>
                                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                              </div>
                              <div className="col-md-12">
                                <h4>Best Tours City</h4>
                                <div className="row">
                                  <div className="col-md-4 col-sm-4 col-xs-4">
                                    <ul>
                                      <li><a href="#">Rome</a></li>
                                      <li><a href="#">Milan</a></li>
                                      <li><a href="#">Genoa</a></li>
                                      <li><a href="#">Verona</a></li>
                                    </ul>
                                  </div>
                                  <div className="col-md-4 col-sm-4 col-xs-4">
                                    <ul>
                                      <li><a href="#">Venice</a></li>
                                      <li><a href="#">Bologna</a></li>
                                      <li><a href="#">Trieste</a></li>
                                      <li><a href="#">Florence</a></li>
                                    </ul>
                                  </div>
                                  <div className="col-md-4 col-sm-4 col-xs-4">
                                    <ul>
                                      <li><a href="#">Palermo</a></li>
                                      <li><a href="#">Siena</a></li>
                                      <li><a href="#">San Marino</a></li>
                                      <li><a href="#">Naples</a></li>
                                    </ul>
                                  </div>
                                </div>
                                <p><a href="tours.html" className="btn btn-primary">View All Places</a></p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
        
                    <div className="f-tour">
                      <div className="row">
                        <div className="col-md-6 col-md-push-6">
                          <div className="row">
                            <div className="col-md-6 animate-box">
                              <a  href="tours.html" className="f-tour-img" style={{backgroundImage: "url('images/tour-5.jpg')"}}>
                                <div className="desc">
                                  <h3>Rome - 5 Days</h3>
                                  <p className="price"><span>$120</span> <small>/ person</small></p>
                                </div>
                              </a>
                            </div>
                            <div className="col-md-6 animate-box">
                              <a  href="tours.html" className="f-tour-img" style={{backgroundImage: "url('images/tour-6.jpg')"}}>
                                <div className="desc">
                                  <h3>Rome - 5 Days</h3>
                                  <p className="price"><span>$120</span> <small>/ person</small></p>
                                </div>
                              </a>
                            </div>
                            <div className="col-md-6 animate-box">
                              <a  href="tours.html" className="f-tour-img" style={{backgroundImage: "url('images/tour-7.jpg')"}}>
                                <div className="desc">
                                  <h3>Rome - 5 Days</h3>
                                  <p className="price"><span>$120</span> <small>/ person</small></p>
                                </div>
                              </a>
                            </div>
                            <div className="col-md-6 animate-box">
                              <a  href="tours.html" className="f-tour-img" style={{backgroundImage: "url('images/tour-8.jpg')"}}>
                                <div className="desc">
                                  <h3>Rome - 5 Days</h3>
                                  <p className="price"><span>$120</span> <small>/ person</small></p>
                                </div>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6 animate-box col-md-pull-6 text-right">
                          <div className="desc">
                            <div className="row">
                              <div className="col-md-12">
                                <h3>Athens, Greece</h3>
                                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                              </div>
                              <div className="col-md-12">
                                <h4>Best Tours City</h4>
                                <div className="row">
                                  <div className="col-md-4 col-sm-4 col-xs-4">
                                    <ul>
                                      <li><a href="#">Rome</a></li>
                                      <li><a href="#">Milan</a></li>
                                      <li><a href="#">Genoa</a></li>
                                      <li><a href="#">Verona</a></li>
                                    </ul>
                                  </div>
                                  <div className="col-md-4 col-sm-4 col-xs-4">
                                    <ul>
                                      <li><a href="#">Venice</a></li>
                                      <li><a href="#">Bologna</a></li>
                                      <li><a href="#">Trieste</a></li>
                                      <li><a href="#">Florence</a></li>
                                    </ul>
                                  </div>
                                  <div className="col-md-4 col-sm-4 col-xs-4">
                                    <ul>
                                      <li><a href="#">Palermo</a></li>
                                      <li><a href="#">Siena</a></li>
                                      <li><a href="#">San Marino</a></li>
                                      <li><a href="#">Naples</a></li>
                                    </ul>
                                  </div>
                                </div>
                                <p><a href="tours.html" className="btn btn-primary">View All Places</a></p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        
          
            <div id="colorlib-subscribe" style={{backgroundImage: "url('images/img_bg_2.jpg')"}} data-stellar-background-ratio="0.5">
              <div className="overlay"></div>
              <div className="container">
                <div className="row">
                  <div className="col-md-6 col-md-offset-3 text-center colorlib-heading animate-box">
                    <h2>Sign Up for a Newsletter</h2>
                    <p>Sign up for our mailing list to get latest updates and offers.</p>
                    <form className="form-inline qbstp-header-subscribe">
                      <div className="row">
                        <div className="col-md-12 col-md-offset-0">
                          <div className="form-group">
                            <input type="text" className="form-control" id="email" placeholder="Enter your email"/>
                            <button type="submit" className="btn btn-primary">Subscribe</button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
        
            <footer id="colorlib-footer" role="contentinfo">
              <div className="container">
                <div className="row row-pb-md">
                  <div className="col-md-3 colorlib-widget">
                    <h4>Tour Agency</h4>
                    <p>Facilis ipsum reprehenderit nemo molestias. Aut cum mollitia reprehenderit. Eos cumque dicta adipisci architecto culpa amet.</p>
                    <p>
                      <ul className="colorlib-social-icons">
                        <li><a href="#"><i className="icon-twitter"></i></a></li>
                        <li><a href="#"><i className="icon-facebook"></i></a></li>
                        <li><a href="#"><i className="icon-linkedin"></i></a></li>
                        <li><a href="#"><i className="icon-dribbble"></i></a></li>
                      </ul>
                    </p>
                  </div>
                  <div className="col-md-2 colorlib-widget">
                    <h4>Book Now</h4>
                    <p>
                      <ul className="colorlib-footer-links">
                        <li><a href="#">Flight</a></li>
                        <li><a href="#">Hotels</a></li>
                        <li><a href="#">Tour</a></li>
                        <li><a href="#">Car Rent</a></li>
                        <li><a href="#">Beach &amp; Resorts</a></li>
                        <li><a href="#">Cruises</a></li>
                      </ul>
                    </p>
                  </div>
                  <div className="col-md-2 colorlib-widget">
                    <h4>Top Deals</h4>
                    <p>
                      <ul className="colorlib-footer-links">
                        <li><a href="#">Edina Hotel</a></li>
                        <li><a href="#">Quality Suites</a></li>
                        <li><a href="#">The Hotel Zephyr</a></li>
                        <li><a href="#">Da Vinci Villa</a></li>
                        <li><a href="#">Hotel Epikk</a></li>
                      </ul>
                    </p>
                  </div>
                  <div className="col-md-2">
                    <h4>Blog Post</h4>
                    <ul className="colorlib-footer-links">
                      <li><a href="#">The Ultimate Packing List For Female Travelers</a></li>
                      <li><a href="#">How These 5 People Found The Path to Their Dream Trip</a></li>
                      <li><a href="#">A Definitive Guide to the Best Dining and Drinking Venues in the City</a></li>
                    </ul>
                  </div>
        
                  <div className="col-md-3 col-md-push-1">
                    <h4>Contact Information</h4>
                    <ul className="colorlib-footer-links">
                      <li>291 South 21th Street, Suite 721 New York NY 10016</li>
                      <li><a href="tel://1234567920">+ 1235 2355 98</a></li>
                      <li><a href="mailto:info@yoursite.com">info@yoursite.com</a></li>
                      <li><a href="#">yoursite.com</a></li>
                    </ul>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12 text-center">
                    <p>
                       Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->
        Copyright &copy; All rights reserved | This template is made with <i className="icon-heart2" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
        
                      <span className="block">Demo Images: <a href="http://unsplash.co/" target="_blank">Unsplash</a> , <a href="http://pexels.com/" target="_blank">Pexels.com</a></span>
                    </p>
                  </div>
                </div>
              </div>
            </footer>
          
        
          <div className="gototop js-top">
            <a href="#" className="js-gotop"><i className="icon-arrow-up2"></i></a>
          </div>
        
    
    
  
    </body>
        
      </div>
    );
  }
  
}

export default App;
