import React, { useEffect } from 'react';
import background from '../../assets/img/service/3/illustration-01.png';
import background1 from '../../assets/img/hero/bottle.png';
import background2 from '../../assets/img/service/3/illustration-02.png';
import background3 from '../../assets/img/service/3/illustration-03.png';
import background4 from '../../assets/img/about/3/about-01.jpg';
import background5 from '../../assets/img/about/3/about-02.jpg';
import background6 from '../../assets/img/about/3/about-03.jpg';
import background7 from '../../assets/img/icon/check.png';
import background8 from '../../assets/img/about/3/author.png';
import background14 from '../../assets/img/brand/1.png';
import background15 from '../../assets/img/brand/2.png';
import background16 from '../../assets/img/brand/3.png';
import background17 from '../../assets/img/brand/4.png';
import background18 from '../../assets/img/brand/5.png';
import background19 from '../../assets/img/brand/6.png';
import background21 from '../../assets/img/skill/icon-1.png';
import background22 from '../../assets/img/skill/icon-2.png';
import background23 from '../../assets/img/skill/icon-3.png';
import background25 from '../../assets/img/process/01.png';
import background26 from '../../assets/img/process/02.png';
import background27 from '../../assets/img/process/03.png';
import background28 from '../../assets/img/process/04.png';
import background29 from '../../assets/img/process/05.png';
import background30 from '../../assets/img/cta/cta-icon-01.png';
import Swiper from 'swiper';
import Header from '../../components/header';
import Footer from '../../components/footer';

const HomePage = () => {
  useEffect(() => {
    new Swiper('.swiper-container', {
      loop: true,
      autoplay: { delay: 3000 },
      navigation: {
        nextEl: '.product-button-next',
        prevEl: '.product-button-prev',
      },
    });
  }, []);

  return (
    <>
     <Header />
      {/* Main Body */}
      <main>
      <section class="bd-hero__area">
         <div class="hero__active-2 swiper-container">
               <div class="swiper-wrapper">
                  <div class="swiper-slide">
                     <div class="bd-singel__hero">
                        <div class="hero__height-3 d-flex align-items-center">
                           <div class="bd-hero__banner hero__overlay include__bg" data-background="assets/img/hero/hero-3.jpg"></div>
                           <div class="container">
                              <div class="row">
                                 <div class="col-xl-12">
                                    <div class="bd-hero__box">
                                       <div class="bd-hero__shape" data-animation="fadeInLeft" data-delay=".5s">
                                          <div class="bd-hero__shape-inner">
                                           <img className="about-bg-image" src={background1} alt="farm background" />
                                          </div>
                                       </div>
                                       <div class="bd-hero__content-3 pt-25">
                                          <span data-animation="fadeInUp" data-delay=".3s">Get everytime fresh assets</span>
                                          <h2 data-animation="fadeInUp" data-delay=".5s">fresh milk</h2>
                                          <div class="bd-hero__btn-wrapper" data-animation="fadeInUp" data-delay=".7s">
                                             <a class="bd-hero__btn-3" href="shop.html">Our Products</a>
                                             <a class="bd-hero__btn-4" href="about.html">about us</a>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div class="swiper-slide">
                     <div class="bd-singel__hero">
                        <div class="hero__height-3 d-flex align-items-center">
                           <div class="bd-hero__banner hero__overlay include__bg" data-background="assets/img/hero/hero-7.jpg"></div>
                           <div class="container">
                              <div class="row">
                                 <div class="col-xl-12">
                                    <div class="bd-hero__box">
                                       <div class="bd-hero__shape" data-animation="fadeInLeft" data-delay=".5s">
                                          <div class="bd-hero__shape-inner">
                                            <img className="about-bg-image" src={background1} alt="farm background" />
                                          </div>
                                       </div>
                                       <div class="bd-hero__content-3 pt-25">
                                          <span data-animation="fadeInUp" data-delay=".3s">Welcome to our dairy farm</span>
                                          <h2 data-animation="fadeInUp" data-delay=".5s">dairypress</h2>
                                          <div class="bd-hero__btn-wrapper" data-animation="fadeInUp" data-delay=".7s">
                                             <a class="bd-hero__btn-3" href="shop.html">Our Products</a>
                                             <a class="bd-hero__btn-4" href="about.html">about us</a>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div class="swiper-slide">
                     <div class="bd-singel__hero">
                        <div class="hero__height-3 d-flex align-items-center">
                           <div class="bd-hero__banner hero__overlay include__bg" data-background="assets/img/hero/hero-6.jpg"></div>
                           <div class="container">
                              <div class="row">
                                 <div class="col-xl-12">
                                    <div class="bd-hero__box">
                                       <div class="bd-hero__shape" data-animation="fadeInLeft" data-delay=".5s">
                                          <div class="bd-hero__shape-inner">
                                           <img className="about-bg-image" src={background1} alt="farm background" />
                                          </div>
                                       </div>
                                       <div class="bd-hero__content-3 pt-25">
                                          <span data-animation="fadeInUp" data-delay=".3s">Welcome to our dairy farm</span>
                                          <h2 data-animation="fadeInUp" data-delay=".5s">Milk process</h2>
                                          <div class="bd-hero__btn-wrapper" data-animation="fadeInUp" data-delay=".7s">
                                             <a class="bd-hero__btn-3" href="shop.html">Our Products</a>
                                             <a class="bd-hero__btn-4" href="about.html">about us</a>
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
            </div>
         </section>
      {/* Hero area start */}

      
      {/* Service area start */}
      <section class="bd-serrvice__area pt-120 pb-100">
         <div class="container">
            <div class="row">
               <div class="col-12">
                  <div class="bd-section__title-wrapper text-center mb-50">
                     <span class="bd-sub__title">Services</span>
                     <h2 class="bd-section__title">what we provide</h2>
                  </div>
               </div>
            </div>
            <div class="row">
               <div class="col-xl-4 col-lg-4 col-md-6">
                  <div class="bd-service__item-3 text-center mb-30">
                     <div class="bd-service__thumb-3">
                        <a href="service-details">
                           <img className="about-bg-image" src={background} alt="farm background" />
                        </a>
                     </div>
                     <div class="bd-service__content-3">
                        <h3><a href="product-details.html">fresh meat & milk</a></h3>
                        <p>Content farm is a company that employs large numbers countdown.</p>
                        <a class="bd-link__btn" href="service-details.html">Read More</a>
                     </div>
                  </div>
               </div> 
               <div class="col-xl-4 col-lg-4 col-md-6">
                  <div class="bd-service__item-3 text-center mb-30">
                     <div class="bd-service__thumb-3">
                        <a href="service-details">
                         <img className="about-bg-image" src={background2} alt="farm background" />
                     </a>
                     </div>
                     <div class="bd-service__content-3">
                        <h3><a href="product-details.html">fresh milk & butter.</a></h3>
                        <p>Content farm is a company that employs large numbers countdown.</p>
                        <a class="bd-link__btn" href="service-details.html">Read More</a>
                     </div>
                  </div>
               </div> 
               <div class="col-xl-4 col-lg-4 col-md-6">
                  <div class="bd-service__item-3 text-center mb-30">
                     <div class="bd-service__thumb-3">
                        <a href="service-details">
                          <img className="about-bg-image" src={background3} alt="farm background" />
                        </a>
                     </div>
                     <div class="bd-service__content-3">
                        <h3><a href="product-details.html">fresh meat & milk</a></h3>
                        <p>Content farm is a company that employs large numbers countdown.</p>
                        <a class="bd-link__btn" href="service-details.html">Read More</a>
                     </div>
                  </div>
               </div>
               <div class="bd-service__text">
                  <p>Looking for a place you can trust to keep your vehicles rolling. <a href="service-details.html">Find Out More</a></p>
               </div>
            </div>
         </div>
      </section>
      {/* Service area end */}

      {/* About area start */}
      <section class="bd-about__area-2 about__bg fix pt-120 pb-60" data-background="assets/img/bg/about-bg.jpg">
         <div class="container">
            <div class="row">
               <div class="col-lg-6">
                  <div class="bd-about__thumb-wrapper">
                     <div class="bd-about__thumb-1 about__thumb w-img">
                        <img className="about-bg-image" src={background4} alt="farm background" />
                     </div>
                     <div class="bd-about__thumb-2 about__thumb w-img">
                       <img className="about-bg-image" src={background5} alt="farm background" />
                     </div>
                     <div class="bd-about__thumb-3 about__thumb w-img">
                        <img className="about-bg-image" src={background6} alt="farm background" />
                     </div>
                  </div>
               </div>
               <div class="col-lg-6">
                  <div class="bd-about__content-box-3 mb-60">
                     <div class="bd-section__title-wrapper mb-35">
                        <span class="bd-sub__title">About Us</span>
                        <h2 class="bd-section__title s-2 mb-25">Know About Our
                        Farm & History</h2>
                        <p class="bd-section__paragraph">We have been working in this industry for more than 30 years with
                        trust and honesty. All hands must be on deck if we are to achieve
                        our goal of improving global nutrition.</p>
                     </div>
                     <div class="bd-about__list">
                        <ul>
                           <li> <img className="about-bg-image" src={background7} alt="farm background" /> Our work is guaranteed</li>
                           <li> <img className="about-bg-image" src={background7} alt="farm background" />Our work is guaranteed</li>
                           <li> <img className="about-bg-image" src={background7} alt="farm background" /> Our work is guaranteed</li>
                           <li><img className="about-bg-image" src={background7} alt="farm background" /> Our work is guaranteed</li>
                        </ul>
                     </div>
                     <div class="bd-about__author">
                        <img className="about-bg-image" src={background8} alt="farm background" />
                        <div class="bd-about__author-text">
                           <span>Head Of Idea</span>
                           <h3><a href="team.html">Alonso D. Dowson</a></h3>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
      {/* About area end */}

      {/* Features area start */}
      <section class="bd-product__area fix p-relative pt-120 pb-70">
         <div class="bd-product__bg">
         </div>
         <div class="container">
            <div class="row">
               <div class="bd-section__title-wrapper mb-50">
                  <span class="bd-sub__title">Featured</span>
                  <h2 class="bd-section__title">featured product</h2>
               </div>
             </div>
            <div class="row">
               <div class="col-12">
                  <div class="features__inner p-relative">
                     <div class="product__active swiper-container">
                        <div class="swiper-wrapper">
                           <div class="swiper-slide">
                              <div class="bd-product__item text-center mb-30">
                                 <div class="bd-product__img">

                                 </div>
                                 <div class="bd-product__content">
                                    <h4><a href="#">organic fresh meat</a></h4>
                                    <span class="bd-product__new-price">$45.00</span>
                                 </div>
                                 <div class="bd-product__action">
                                    <a class="cart-btn" href="javascript:void(0)" data-toggle="tooltip" data-placement="top" title="Quick View" data-bs-toggle="modal"><i class="fal fa-cart-arrow-down"></i></a>
                                    <a href="#" data-toggle="tooltip" data-placement="top" title="Quick Shop" data-bs-toggle="modal" data-bs-target="#productmodal"><i class="fal fa-eye"></i></a>
                                    <a class="wishlist-btn" href="javascript:void(0)" data-toggle="tooltip" data-placement="top" title="Quick Wishlist" data-bs-toggle="modal"> <i class="fal fa-heart"></i></a>
                                 </div>
                              </div>
                           </div>
                           <div class="swiper-slide">
                              <div class="bd-product__item text-center mb-30">
                                 <div class="bd-product__img">
                                 </div>
                                 <div class="bd-product__content">
                                    <h4><a href="#">organic fresh milk</a></h4>
                                    <span class="bd-product__new-price">$29.00</span>
                                    <span class="bd-product__old-price"><del>$19.00</del></span>
                                 </div>
                                 <div class="bd-product__action">
                                    <a class="cart-btn" href="javascript:void(0)" data-toggle="tooltip" data-placement="top" title="Quick View" data-bs-toggle="modal"><i class="fal fa-cart-arrow-down"></i></a>
                                    <a href="#" data-toggle="tooltip" data-placement="top" title="Quick Shop" data-bs-toggle="modal" data-bs-target="#productmodal"><i class="fal fa-eye"></i></a>
                                    <a class="wishlist-btn" href="javascript:void(0)" data-toggle="tooltip" data-placement="top" title="Quick Wishlist" data-bs-toggle="modal"> <i class="fal fa-heart"></i></a>
                                 </div>
                              </div>
                           </div>
                           <div class="swiper-slide">
                              <div class="bd-product__item text-center mb-30">
                                 <div class="bd-product__img">
                                 </div>
                                 <div class="bd-product__content">
                                    <h4><a href="#">mikado cheese bar</a></h4>
                                    <span class="bd-product__new-price">$20.00</span>
                                 </div>
                                 <div class="bd-product__action">
                                    <a class="cart-btn" href="javascript:void(0)" data-toggle="tooltip" data-placement="top" title="Quick View" data-bs-toggle="modal"><i class="fal fa-cart-arrow-down"></i></a>
                                    <a href="#" data-toggle="tooltip" data-placement="top" title="Quick Shop" data-bs-toggle="modal" data-bs-target="#productmodal"><i class="fal fa-eye"></i></a>
                                    <a class="wishlist-btn" href="javascript:void(0)" data-toggle="tooltip" data-placement="top" title="Quick Wishlist" data-bs-toggle="modal"> <i class="fal fa-heart"></i></a>
                                 </div>
                              </div>
                           </div>
                           <div class="swiper-slide">
                              <div class="bd-product__item text-center mb-30">
                                 <div class="bd-product__img">
                                 </div>
                                 <div class="bd-product__content">
                                    <h4><a href="#">custard oil 500ml</a></h4>
                                    <span class="bd-product__new-price">$34.00</span>
                                    <span class="bd-product__old-price"><del>$24.00</del></span>
                                 </div>
                                 <div class="bd-product__action">
                                    <a class="cart-btn" href="javascript:void(0)" data-toggle="tooltip" data-placement="top" title="Quick View" data-bs-toggle="modal"><i class="fal fa-cart-arrow-down"></i></a>
                                    <a href="#" data-toggle="tooltip" data-placement="top" title="Quick Shop" data-bs-toggle="modal" data-bs-target="#productmodal"><i class="fal fa-eye"></i></a>
                                    <a class="wishlist-btn" href="javascript:void(0)" data-toggle="tooltip" data-placement="top" title="Quick Wishlist" data-bs-toggle="modal"> <i class="fal fa-heart"></i></a>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div class="product__btn text-center mt-20 mb-50">
                        <a class="bd-theme__btn-4" href="shop.html">more proudcts</a>
                     </div>
                     {/* If we need navigation buttons */}
                     <div class="bd-product__navigatin">
                        <button class="product-button-prev"><i class="far fa-long-arrow-left"></i></button>
                        <button class="product-button-next"><i class="far fa-long-arrow-right"></i></button>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
      {/* Features area end */}

      {/* Brand area start */}
      <div class="bd-brand__area green-bg-2 pt-70 pb-50">
         <div class="container">
            <div class="row align-items-center justify-content-between">
               <div class="bd-brand-__main-wrapper">
                  <div class="bd-brand-active swiper-container">
                     <div class="swiper-wrapper text-center">
                        <div class="swiper-slide">
                           <div class="bd-single__brand-2 mb-30">
                              <a href="#">
                                 <img className="about-bg-image" src={background14} alt="farm background" />
                              </a>
                           </div>
                        </div>
                        <div class="swiper-slide">
                           <div class="bd-single__brand-2 mb-30">
                              <a href="#">
                                 <img className="about-bg-image" src={background15} alt="farm background" />
                              </a>
                           </div>
                        </div>
                        <div class="swiper-slide">
                           <div class="bd-single__brand-2 mb-30">
                              <a href="#">
                                 <img className="about-bg-image" src={background16} alt="farm background" />
                              </a>
                           </div>
                        </div>
                        <div class="swiper-slide">
                           <div class="bd-single__brand-2 mb-30">
                              <a href="#">
                                  <img className="about-bg-image" src={background17} alt="farm background" />
                              </a>
                           </div>
                        </div>
                        <div class="swiper-slide">
                           <div class="bd-single__brand-2 mb-30">
                              <a href="#">
                                <img className="about-bg-image" src={background18} alt="farm background" />
                              </a>
                           </div>
                        </div>
                        <div class="swiper-slide">
                           <div class="bd-single__brand-2 mb-30">
                              <a href="#">
                                  <img className="about-bg-image" src={background19} alt="farm background" />
                              </a>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
      {/* Brand area end */}

      {/* Skill area start */}
      <section class="bd-skill__area pt-120 pb-60">
         <div class="container">
            <div class="row align-items-center">
               <div class="col-xxl-5 col-xl-4 col-lg-6">
                  <div class="bd-skill__left text-lg-end mb-60">
                     <div class="bd-section__title-wrapper mb-45">
                        <span class="bd-sub__title">Skillset</span>
                        <h2 class="bd-section__title s-2 mb-25">#1 Only Ice cube Cream Recipe</h2>
                        <p class="bd-section__paragraph">We have been working in this industry for more than 30
                           year with trust and honesty. All hands must be on deck
                           if we are to achieve our goal.</p>
                     </div>
                     <div class="bd-skill__btn">
                        <a class="bd-theme__btn-4" href="shop.html">more proudcts</a>
                     </div>
                  </div>
               </div>
               <div class="col-xxl-3 col-xl-4 col-lg-6">
                  <div class="bd-skill__image text-center mb-60">
                  </div>
               </div>
               <div class="col-xxl-4 col-xl-4 col-lg-6">
                  <div class="bd-skill__features mb-60">
                     <div class="bd-skill__features-item mb-25">
                        <div class="bd-skill__features-icon">
                            <img className="about-bg-image" src={background21} alt="farm background" />
                        </div>
                        <div class="bd-skill__features-content">
                           <h3>100% Organic Product</h3>
                           <p>Content farm is a company that employ large numbers countdown.</p>
                        </div>
                     </div>
                     <div class="bd-skill__features-item mb-25">
                        <div class="bd-skill__features-icon">
                          <img className="about-bg-image" src={background22} alt="farm background" />
                        </div>
                        <div class="bd-skill__features-content">
                           <h3>100% Organic Product</h3>
                           <p>Content farm is a company that employ large numbers countdown.</p>
                        </div>
                     </div>
                     <div class="bd-skill__features-item mb-25">
                        <div class="bd-skill__features-icon">
                            <img className="about-bg-image" src={background23} alt="farm background" />
                        </div>
                        <div class="bd-skill__features-content">
                           <h3>100% Organic Product</h3>
                           <p>Content farm is a company that employ large numbers countdown.</p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
      {/* Skill area end */}

      {/* Video area start */}
      <section class="bd-video__area video__overlay include__bg pt-120 pb-120" data-background="assets/img/bg/video-bg.jpg"> 
         <div class="container">
            <div class="row justify-content-center">
               <div class="col-12">
                  <div class="bd-video__wrapper text-center">
                     <div class="bd-video__btn d-flex justify-content-center mb-50">
                        <a class="bd-play__btn two popup-video" href="https://www.youtube.com/watch?v=awKCfkT96pg"><i class="fa-solid fa-play"></i></a>
                     </div>
                     <div class="bd-section__title-wrapper mb-40">
                        <span class="bd-sub__title s-2">Intro Video</span>
                        <h2 class="bd-section__title white">ready to experience & <br/>
                        work difference</h2>
                     </div>
                     <div class="bd-video__btn-wrapper">
                        <a class="bd-theme__btn-5" href="contact.html">make appointment</a>
                        <a class="bd-theme__btn-6" href="contact.html">get a quote</a>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
      {/* Video area end */}

      {/* Process area start */}
      <section class="bd-process__area p-relative pt-120 pb-115">
         <div class="bd-process__bg">
         </div>
         <div class="container">
            <div class="row">
               <div class="col-xl-8 col-md-8">
                  <div class="bd-section__title-wrapper mb-50">
                     <span class="bd-sub__title">Process</span>
                     <h2 class="bd-section__title">working process</h2>
                  </div>
               </div>
               <div class="col-xl-4 col-md-4">
                  <div class="processs__btn text-md-end mb-50">
                     <a class="bd-theme__btn-4" href="about.html">more proudcts</a>
                  </div>
               </div>
            </div>
            <div class="bd-process__grid">
               <div class="bd-process__item">
                  <div class="bd-process__thumb w-img">
                     <a href="#">
                       <img className="about-bg-image" src={background25} alt="farm background" />
                     </a>
                     <div class="bd-process__number">
                        <span>01</span>
                     </div>
                  </div>
                  <div class="bd-process__content">
                     <h4><a href="about.html">Market research</a></h4>
                     <span>step one</span>
                  </div>
               </div>
               <div class="bd-process__item">
                  <div class="bd-process__thumb w-img">
                     <a href="#">
                       <img className="about-bg-image" src={background26} alt="farm background" />
                     </a>
                     <div class="bd-process__number">
                        <span>02</span>
                     </div>
                  </div>
                  <div class="bd-process__content">
                     <h4><a href="about.html">Business plans</a></h4>
                     <span>step two</span>
                  </div>
               </div>
               <div class="bd-process__item">
                  <div class="bd-process__thumb w-img">
                     <a href="#">
                       <img className="about-bg-image" src={background27} alt="farm background" />
                     </a>
                     <div class="bd-process__number">
                        <span>03</span>
                     </div>
                  </div>
                  <div class="bd-process__content">
                     <h4><a href="about.html">Management system</a></h4>
                     <span>step three</span>
                  </div>
               </div>
               <div class="bd-process__item">
                  <div class="bd-process__thumb w-img">
                     <a href="#">
                        <img className="about-bg-image" src={background28} alt="farm background" />
                     </a>
                     <div class="bd-process__number">
                        <span>04</span>
                     </div>
                  </div>
                  <div class="bd-process__content">
                     <h4><a href="about.html">Improvement plans</a></h4>
                     <span>step four</span>
                  </div>
               </div>
               <div class="bd-process__item">
                  <div class="bd-process__thumb w-img">
                     <a href="#">
                     <img className="about-bg-image" src={background29} alt="farm background" />
                     </a>
                     <div class="bd-process__number">
                        <span>05</span>
                     </div>
                  </div>
                  <div class="bd-process__content">
                     <h4><a href="#">Performance reports</a></h4>
                     <span>step five</span>
                  </div>
               </div>
            </div>
         </div>
      </section>
      {/* Process area start */}

      {/* Service cta area start */}
      <section class="bd-service__cta-area pb-75">
         <div class="container">
            <div class="bd-service__cta-border"></div>
            <div class="row">
               <div class="col-xl-9 col-lg-12">
                  <div class="bd-service__cta-wrapper mb-30">
                     <div class="bd-service__cta-content">
                         <img className="about-bg-image" src={background30} alt="farm background" />
                        <h3>WE’RE CARING ABOUT OUR <br/>
                           farm GROWTH</h3>
                     </div>
                     <div class="bd-service__cta-paragraph">
                        <p>We have been working in this industry for more than
                           30 years with trust and honesty. All hands must
                           be on deck if we are to achieve</p>
                     </div>
                  </div>
               </div>
               <div class="col-xl-3 col-lg-3 text-end mb-30">
                  <div class="bd-service__cta-btn mt-5 text-xl-end text-start">
                     <a class="bd-theme__btn-4" href="#">get a quote</a>
                  </div>
               </div>
            </div>
         </div>
      </section>
      {/* Service cta area end */}

      {/* News area start */}
      <section class="bd-news__area grey-bg pt-120 pb-120">
         <div class="container">
            <div class="row">
               <div class="bd-section__title-wrapper text-center mb-50">
                  <span class="bd-sub__title">News Feeds</span>
                  <h2 class="bd-section__title">blog & insights</h2>
               </div>
            </div>
            <div class="row">
               <div class="col-xl-4 col-lg-6 col-md-6">
                  <div class="bd-news__item-3 mb-60">
                     <div class="bd-news__date">
                        <h2>10</h2>
                        <span>Jun</span>
                     </div>
                     <div class="bd-news__content-3">
                        <span>Farm, Meat</span>
                        <h3><a href="news-details.html">to influence consumer behavior, also used</a></h3>
                        <p>We have been working in this industry for more than 30 years with trust and honesty. all hands must be.</p>
                        <div class="bd-news__btn">
                           <a class="bd-link__btn" href="news-details.html">Read More</a>
                        </div>
                     </div>
                  </div>
               </div>
               <div class="col-xl-4 col-lg-6 col-md-6">
                  <div class="bd-news__item-3 mb-60">
                     <div class="bd-news__date">
                        <h2>15</h2>
                        <span>Feb</span>
                     </div>
                     <div class="bd-news__content-3">
                        <span>Farm, Milk</span>
                        <h3><a href="news-details.html">to influence consumer behavior, also used</a></h3>
                        <p>We have been working in this industry for more than 30 years with trust and honesty. all hands must be.</p>
                        <div class="bd-news__btn">
                           <a class="bd-link__btn" href="news-details.html">Read More</a>
                        </div>
                     </div>
                  </div>
               </div>
               <div class="col-xl-4 col-lg-6 col-md-6">
                  <div class="bd-news__item-3 mb-60">
                     <div class="bd-news__date">
                        <h2>25</h2>
                        <span>Mar</span>
                     </div>
                     <div class="bd-news__content-3">
                        <span>Farm, Corganic</span>
                        <h3><a href="news-details.html">to influence consumer behavior, also used</a></h3>
                        <p>We have been working in this industry for more than 30 years with trust and honesty. all hands must be.</p>
                        <div class="bd-news__btn">
                           <a class="bd-link__btn" href="news-details.html">Read More</a>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
      {/* News area end */}

   </main>
      <Footer />
    </>
  );
};

export default HomePage;
