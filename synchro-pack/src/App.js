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
                            <h2>2 Dias Tour</h2>
                            <h1>Visite as Ilhas Maldivas</h1>
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
                            <h2>Pacote 10 dias!</h2>
                            <h1>De Grecia a Espanha</h1>
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
                            <h2>Explore nossa agencia de viagens</h2>
                            <h1>Agencia</h1>
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
                            <h2>Experimente a</h2>
                            <h1>Melhor viagem de todos os tempos!</h1>
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
                                    <h2>Agende agora!</h2>
                                    <span>Melhor preço online!</span>
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
                                    <label for="guests">Categorias</label>
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
                      <h3>Viagens Incríveis</h3>
                      <p>A dona aranha subiu pela parede, veio a chuva forte e a derrubou. Já passou a chuva o sol ja vai surgindo e a dona aranha continua a subir.</p>
                    </div>
                  </div>
                  <div className="col-md-3 animate-box text-center">
                    <div className="services">
                      <span className="icon">
                        <i className="flaticon-boat"></i>
                      </span>
                      <h3>Cruzeiros</h3>
                      <p>A dona aranha subiu pela parede, veio a chuva forte e a derrubou. Já passou a chuva o sol ja vai surgindo e a dona aranha continua a subir.</p>
                    </div>
                  </div>
                  <div className="col-md-3 animate-box text-center">
                    <div className="services">
                      <span className="icon">
                        <i className="flaticon-car"></i>
                      </span>
                      <h3>Agende sua viagem!</h3>
                      <p>A dona aranha subiu pela parede, veio a chuva forte e a derrubou. Já passou a chuva o sol ja vai surgindo e a dona aranha continua a subir.</p>
                    </div>
                  </div>
                  <div className="col-md-3 animate-box text-center">
                    <div className="services">
                      <span className="icon">
                        <i className="flaticon-postcard"></i>
                      </span>
                      <h3>Suporte</h3>
                      <p>A dona aranha subiu pela parede, veio a chuva forte e a derrubou. Já passou a chuva o sol ja vai surgindo e a dona aranha continua a subir.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        
            <div className="colorlib-tour colorlib-light-grey">
              <div className="container">
                <div className="row">
                  <div className="col-md-6 col-md-offset-3 text-center colorlib-heading animate-box">
                    <h2>Destinos em alta!</h2>
                    <p>A dona aranha subiu pela parede, veio a chuva forte e a derrubou. Já passou a chuva o sol ja vai surgindo e a dona aranha continua a subir.</p>
                  </div>
                </div>
              </div>
              <div className="tour-wrap">
                <a href="#" className="tour-entry animate-box">
                  <div className="tour-img" style={{backgroundImage: "url('images/tour-1.jpg')"}}>
                  </div>
                  <span className="desc">
                    <p className="star"><span><i className="icon-star-full"></i><i className="icon-star-full"></i><i className="icon-star-full"></i><i className="icon-star-full"></i><i className="icon-star-full"></i></span> 545 Reviews</p>
                    <h2>Atena Grecia</h2>
                    <span className="city">Atena, Grecia</span>
                    <span className="price">R$450</span>
                  </span>
                </a>
                <a href="#" className="tour-entry animate-box">
                  <div className="tour-img" style={{backgroundImage: "url('images/tour-2.jpg')"}}>
                  </div>
                  <span className="desc">
                    <p className="star"><span><i className="icon-star-full"></i><i className="icon-star-full"></i><i className="icon-star-full"></i><i className="icon-star-full"></i><i className="icon-star-full"></i></span> 545 Reviews</p>
                    <h2>Tailandia</h2>
                    <span className="city">Atena, Grecia</span>
                    <span className="price">R$450</span>
                  </span>
                </a>
                <a href="#" className="tour-entry animate-box">
                  <div className="tour-img" style={{backgroundImage: "url('images/tour-3.jpg')"}}>
                  </div>
                  <span className="desc">
                    <p className="star"><span><i className="icon-star-full"></i><i className="icon-star-full"></i><i className="icon-star-full"></i><i className="icon-star-full"></i><i className="icon-star-full"></i></span> 545 Reviews</p>
                    <h2>Filipinas</h2>
                    <span className="city">Lipa, Filipinas</span>
                    <span className="price">R$450</span>
                  </span>
                </a>
                <a href="#" className="tour-entry animate-box">
                  <div className="tour-img" style={{backgroundImage: "url('images/tour-4.jpg')"}}>
                  </div>
                  <span className="desc">
                    <p className="star"><span><i className="icon-star-full"></i><i className="icon-star-full"></i><i className="icon-star-full"></i><i className="icon-star-full"></i><i className="icon-star-full"></i></span> 545 Reviews</p>
                    <h2>Grecia</h2>
                    <span className="city">Atena, Grecia</span>
                    <span className="price">R$450</span>
                  </span>
                </a>
                <a href="#" className="tour-entry animate-box">
                  <div className="tour-img" style={{backgroundImage: "url('images/tour-5.jpg')"}}>
                  </div>
                  <span className="desc">
                    <p className="star"><span><i className="icon-star-full"></i><i className="icon-star-full"></i><i className="icon-star-full"></i><i className="icon-star-full"></i><i className="icon-star-full"></i></span> 545 Reviews</p>
                    <h2>Grecia</h2>
                    <span className="city">Atena, Grecia</span>
                    <span className="price">R$450</span>
                  </span>
                </a>
                <a href="#" className="tour-entry animate-box">
                  <div className="tour-img" style={{backgroundImage: "url('images/tour-6.jpg')"}}>
                  </div>
                  <span className="desc">
                    <p className="star"><span><i className="icon-star-full"></i><i className="icon-star-full"></i><i className="icon-star-full"></i><i className="icon-star-full"></i><i className="icon-star-full"></i></span> 545 Reviews</p>
                    <h2>Grecia</h2>
                    <span className="city">Atena, Grecia</span>
                    <span className="price">R$450</span>
                  </span>
                </a>
                <a href="#" className="tour-entry animate-box">
                  <div className="tour-img" style={{backgroundImage: "url('images/tour-7.jpg')"}}>
                  </div>
                  <span className="desc">
                    <p className="star"><span><i className="icon-star-full"></i><i className="icon-star-full"></i><i className="icon-star-full"></i><i className="icon-star-full"></i><i className="icon-star-full"></i></span> 545 Reviews</p>
                    <h2>Grecia</h2>
                    <span className="city">Atena, Grecia</span>
                    <span className="price">R$450</span>
                  </span>
                </a>
                <a href="#" className="tour-entry animate-box">
                  <div className="tour-img" style={{backgroundImage: "url('images/tour-8.jpg')"}}>
                  </div>
                  <span className="desc">
                    <p className="star"><span><i className="icon-star-full"></i><i className="icon-star-full"></i><i className="icon-star-full"></i><i className="icon-star-full"></i><i className="icon-star-full"></i></span> 545 Reviews</p>
                    <h2>Grecia</h2>
                    <span className="city">Atena, Grecia</span>
                    <span className="price">R$450</span>
                  </span>
                </a>
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
                          <h3 className="title">Oferta limitada!</h3>
                          <p>Oferta promoção ofertaaaa dinheiro menos mais promoção pra voce aproveite!.</p>
                          <p><a href="#" className="btn btn-primary">Agende Agora</a> <a href="#" className="btn btn-primary btn-outline">Leia mais</a></p>
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
                    <h2>Hoteis</h2>
                    <p>hoteis pra voce dormir gostosinho descansar bora dormir gente.</p>
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
                      <li>CI Rua dos Escoteiros</li>
                      <li><a href="tel://1234567920">+ 123456789</a></li>
                      <li><a href="mailto:info@yoursite.com">info@yoursite.com</a></li>
                      <li><a href="#">yoursite.com</a></li>
                    </ul>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12 text-center">
                    
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
