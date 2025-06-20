import React from 'react';
import logo from '../assets/img/logo/logo-4.png';
import logoo from '../assets/img/icon/cart-icon.png';
import cartIcon from '../assets/img/icon/hamburger-icon-2.png';
const Header = () => {
  return (
    <header>
      {/* Header Top */}
      <div class="bd-header__top-area-2 pg-bg">
         <div class="container">
            <div class="row align-items-center">
               <div class="col-xl-8 col-lg-9">
                  <div class="bd-header__contact">
                     <ul>
                        <li><a href="mailto:info@webmail.com"><i class="fa-solid fa-envelope-open"></i>info@webmail.com</a></li>
                        <li><a href="tel:89789790899"><i class="fa-solid fa-phone"></i>897 897 908 99</a></li>
                        <li><span><i class="fa-solid fa-clock"></i>Mon - fri: 09:00 - 17:00 / Close on sunday</span></li>
                     </ul>
                  </div>
               </div>
               <div class="col-xl-4 col-lg-3 d-none d-lg-block">
                  <div class="bd-header__social text-end">
                     <ul>
                        <li><a href="#"><i class="fa-brands fa-facebook-f"></i></a></li>
                        <li><a href="#"><i class="fa-brands fa-twitter"></i></a></li>
                        <li><a href="#"><i class="fa-brands fa-behance-square"></i></a></li>
                        <li><a href="#"><i class="fa-brands fa-youtube"></i></a></li>
                        <li><a href="#"><i class="fa-brands fa-linkedin"></i></a></li>
                     </ul>
                  </div>
               </div>
            </div>
         </div>
      </div>
      {/* Navbar menu */}
       <div id="header-sticky" class="bd-header__area-3">
         <div class="container">
            <div class="bd-header__main-3">
               <div class="row g-0 align-items-center">
                  <div class="col-xl-2 col-lg-2 col-md-4 col-4 p-0">
                     <div class="bd-header__logo-3">
                        <a href="index.html">
                              <img className="about-bg-image" src={logo} alt="farm background" />
                        </a>
                     </div>
                  </div>
                  <div class="col-xl-8 col-lg-8 col-md-4 d-none d-md-block">
                     <div class="bd-header__menu-wrapper-3 pl-40">
                        <div class="main-menu main-menu-3 d-none d-none d-lg-block">
                           <nav id="mobile-menu">
                              <ul>
                                 <li class="has-dropdown">
                                    <a href="index.html">Home</a>
                                    <ul class="submenu">
                                       <li><a href="index.html">Home Style 1</a></li>
                                       <li><a href="index-2.html">Home Style 2</a></li>
                                       <li><a href="index-3.html">Home Style 3</a></li>
                                    </ul>
                                 </li>
                                 <li>
                                    <a href="about.html">About</a>
                                 </li>
                                 <li class="has-dropdown">
                                    <a href="#">Pages</a>
                                    <ul class="submenu">
                                       <li><a href="team.html">Team</a></li>
                                       <li><a href="team-details.html">Team Details</a></li>
                                       <li><a href="gallery.html">Gallery</a></li>
                                       <li><a href="faq.html">Faq</a></li>
                                       <li><a href="shop.html">Shop</a></li>
                                       <li><a href="product-details.html">Product Details</a></li> 
                                       <li><a href="wishlist.html">Wishlist</a></li>
                                       <li><a href="cart.html">Cart</a></li>
                                       <li><a href="checkout.html">Checkout</a></li>
                                       <li><a href="login.html">Login</a></li>
                                       <li><a href="register.html">Register</a></li>
                                       <li><a href="error.html">404 Page</a></li>
                                    </ul>
                                 </li>
                                 <li class="has-dropdown">
                                    <a href="service.html">Service</a>
                                    <ul class="submenu">
                                       <li><a href="service.html">Service</a></li>
                                       <li><a href="service-details.html">Service details</a></li>
                                    </ul>
                                 </li>
                                 <li class="has-dropdown">
                                    <a href="news.html">News</a>
                                    <ul class="submenu">
                                       <li><a href="news.html">News</a></li>
                                       <li><a href="news-details.html">News Details</a></li>
                                       <li><a href="news-layout-1.html">Grid Layout 1</a></li>
                                       <li><a href="news-layout-2.html">Grid Layout 2</a></li>
                                       <li><a href="news-layout-3.html">Grid Layout 3</a></li>
                                    </ul>
                                 </li>
                                 <li>
                                    <a href="contact.html">Contact</a>
                                 </li>
                              </ul>
                           </nav>
                        </div>
                     </div>
                  </div>
                  <div class="col-xl-2 col-lg-2 col-md-4 col-8">
                     <div class="bd-header__right d-flex align-items-center justify-content-end">
                        <div class="bd-header__action d-flex align-items-center d-none d-sm-block">
                           <ul>
                              <li>
                                 <div class="bd-search__box">
                                    <div class="search-toggle">
                                       <i class="header-search__btn fa-regular fa-magnifying-glass"></i>
                                       <i class="header-search__close fa-regular fa-xmark"></i>
                                    </div>
                                    <div class="bd-search__form p-relative">
                                       <form action="#">
                                          <input type="text" placeholder="Search here..."/>
                                          <button type="submit">
                                             <i class="fal fa-search"></i>
                                          </button>
                                       </form>
                                    </div>
                                 </div>
                                 <button classname="shoping__toggle">
                                    <img className="about-bg-image" src={logoo} alt="farm background" />
                                 </button>
                              </li>
                           </ul>
                        </div>
                        <div class="bd-header__hamburger ml-20">
                           <button class="side-toggle">
                             <img className="about-bg-image" src={cartIcon} alt="farm background" />
                           </button>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
    </header>
  )
};

export default Header;
