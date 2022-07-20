<template>
  <div class="BodyBackground">
    <!--- navigation section -->
    <TheHeader />
    <!-- slider section Desktop -->
  <section class="d-none d-md-block d-lg-block pt-md-3">
        <div class="container px-5">
          <div class="row">
            <div class="col-12">
                <img style="height: 70vh;" src="~/assets/pictures/sliderback.jpg" class="w-100" alt="">
            </div>
          </div>
        </div>
      <!-- slider text section -->
      <div class="container">
        <div class="row">
          <div class="col-lg-4 text-white">
            <p class="SliderTxt">HEALTHY CARE</p>
            <p class="SliderDesc">
              Kandaka Company is proud to provide its cosmetic products with the latest technology methods to its consumers.
            </p>
            <button type="button" class="btn btn-warning SliderBtn">shop now</button>
          </div>
          <div class="col-lg-8 text-center">
          </div>
        </div>
      </div>
  </section>
  <!-- slider section mobile -->
    <div class="container g-lg-none d-md-none text-center mt-5 SliderMbBkg p-5">
        <p class="MobileSliderTxtTitle text-white text-end px-5">HEALTHY CARE</p>
        <p class="MobileSliderTxtDesc text-white text-end px-5">
          Kandaka Company is proud to provide its 
          cosmetic products with the latest technology 
          methods to its consumers.
        </p>
      <button type="button" class="btn btn-warning SliderMobileBtn">shop now</button>
    </div>
    <!-- product categorie section -->
    <!-- Desktop version -->
  <section class="d-none d-lg-block">
    <div class="container px-lg-5 py-4 px-5">
      <div class="container px-lg-5 pt-3">
        <div class="row px-5">
          <div class="col-lg">
            <img src="~/assets/pictures/categorie1.png" alt="" class="w-100">
            <p class="CategorieTxt text-center mt-3">Hair Care</p>
          </div>
          <div class="col-lg">
            <img src="~/assets/pictures/categorie2.png" alt="" class="w-100">
            <p class="CategorieTxt text-center mt-3">Lip Care</p>
          </div>
          <div class="col-lg">
            <img src="~/assets/pictures/categorie3.png" alt="" class="w-100">
            <p class="CategorieTxt text-center mt-3">Skin Care</p>
          </div>
          <div class="col-lg">
            <img src="~/assets/pictures/categorie4.png" alt="" class="w-100">
            <p class="CategorieTxt text-center mt-3">Accessories</p>
          </div>
          <div class="col-lg">
            <img src="~/assets/pictures/categorie5.png" alt="" class="w-100">
            <p class="CategorieTxt text-center mt-3">Perfume</p>
          </div>
        </div>
      </div>
    </div>
    </section>

    <!-- Mobile And Tablet version -->
    <section class="d-lg-none pt-4">
    <div class="container px-lg-5 px-5 pt-md-0">
      <div class="container px-lg-5">
        <div class="row">
          <div class="col col-md-4 ">
            <img src="~/assets/pictures/categorie1.png" alt="" class="w-100">
            <p class="CategorieTxt text-center mt-3">Hair Care</p>
          </div>
          <div class="col col-md-4">
            <img src="~/assets/pictures/categorie2.png" alt="" class="w-100">
            <p class="CategorieTxt text-center mt-3">Lip Care</p>
          </div>
          <div class="col col-md-4">
            <img src="~/assets/pictures/categorie3.png" alt="" class="w-100">
            <p class="CategorieTxt text-center mt-3">Skin Care</p>
          </div>
        </div>
      </div>
    </div>
    </section>

  <!-- off products section -->
    <section class="offbackground">
    <div class="container">
      <div class="row">
          <div class="col-lg-4">
            <p class="OffTxt">Trending Discounts</p>
            <p class="OffDesc">
              The best discount code for 
              the customers of the cosmetics company.
            </p>
            <!-- slider arrows -->
            <div v-if="DspPrimeArrow" @mouseover="ChangeArrowState" class="d-flex flex-row align-items-center">
                <img class="OffLeftArrow ArrowsPosition px-4" src="~/assets/pictures/LeftArrow.svg" alt="LeftArrow">
                <img class="OffRightArrow" src="~/assets/pictures/RightArrow.svg" alt="RightArrow">
            </div>
            <!-- slider arrows oposite color -->
            <div v-if="!DspPrimeArrow" @mouseover="ChangeArrowState" class="d-flex flex-row align-items-center">
                <img style="transform: rotate(180deg);" class="OffLeftArrow px-4 ArrowsPosition" src="~/assets/pictures/RightArrow.svg" alt="RightArrow">
                <img style="transform: rotate(180deg);" class="OffRightArrow" src="~/assets/pictures/LeftArrow.svg" alt="LeftArrow">
            </div>
          <img class="offimg d-none d-lg-block" src="~/assets/pictures/offimg.svg" alt="">
        </div>       
         <div class="col-lg-8 OffCarousel">
              <div class="OffProdSlider">
                    <!-- Off Slider Item -->
                  <div class="container px-5 px-lg-2 px-md-2">
                      <!-- discount baner section -->
                        <div class="container-full OffBaner3"></div>
                      <!-- off Card look section -->
                      <div class="container-full OffCard">
                        <p class="text-center OffCardTxt">
                          Get $ 50.00 off your next full price purchase!
                        </p>
                        <hr>
                       <!-- card look price and button -->
                       <div class="d-flex flex-row align-items-center justify-content-between">
                         <p class="CardPrice">$ 50.00</p>
                          <button type="button" class="CardButton btn btn-sm">Get Offer</button>
                        </div>       
                      </div>
                   </div>

                    <!-- Off Slider Item -->
                  <div class="container px-5 px-lg-2 px-md-2">
                      <!-- discount baner section -->
                        <div class="container-full OffBaner2"></div>
                      <!-- off Card look section -->
                      <div class="container-full OffCard">
                        <p class="text-center OffCardTxt">
                          Get $ 50.00 off your next full price purchase!
                        </p>
                        <hr>
                       <!-- card look price and button -->
                       <div class="d-flex flex-row align-items-center justify-content-between">
                         <p class="CardPrice">$ 50.00</p>
                          <button type="button" class="CardButton btn btn-sm">Get Offer</button>
                        </div>       
                      </div>
                   </div>

                        <!-- Off Slider Item -->
                  <div class="container px-5 px-lg-2 px-md-2">
                      <!-- discount baner section -->
                        <div class="container-full OffBaner"></div>
                      <!-- off Card look section -->
                      <div class="container-full OffCard">
                        <p class="text-center OffCardTxt">
                          Get $ 50.00 off your next full price purchase!
                        </p>
                        <hr>
                       <!-- card look price and button -->
                       <div class="d-flex flex-row align-items-center justify-content-between">
                         <p class="CardPrice">$ 50.00</p>
                          <button type="button" class="CardButton btn btn-sm">Get Offer</button>
                        </div>       
                      </div>
                   </div>

                    <!-- Off Slider Item -->
                  <div class="container px-5 px-lg-2 px-md-2">
                      <!-- discount baner section -->
                        <div class="container-full OffBaner4"></div>
                      <!-- off Card look section -->
                      <div class="container-full OffCard">
                        <p class="text-center OffCardTxt">
                          Get $ 50.00 off your next full price purchase!
                        </p>
                        <hr>
                       <!-- card look price and button -->
                       <div class="d-flex flex-row align-items-center justify-content-between">
                         <p class="CardPrice">$ 50.00</p>
                          <button type="button" class="CardButton btn btn-sm">Get Offer</button>
                        </div>       
                      </div>
                   </div>

                    <!-- Off Slider Item -->
                  <div class="container px-5 px-lg-2 px-md-2">
                      <!-- discount baner section -->
                        <div class="container-full OffBaner"></div>
                      <!-- off Card look section -->
                      <div class="container-full OffCard">
                        <p class="text-center OffCardTxt">
                          Get $ 50.00 off your next full price purchase!
                        </p>
                        <hr>
                       <!-- card look price and button -->
                       <div class="d-flex flex-row align-items-center justify-content-between">
                         <p class="CardPrice">$ 50.00</p>
                          <button type="button" class="CardButton btn btn-sm">Get Offer</button>
                        </div>       
                      </div>
                   </div>

                    <!-- Off Slider Item -->
                  <div class="container px-5 px-lg-2 px-md-2">
                      <!-- discount baner section -->
                        <div class="container-full OffBaner"></div>
                      <!-- off Card look section -->
                      <div class="container-full OffCard">
                        <p class="text-center OffCardTxt">
                          Get $ 50.00 off your next full price purchase!
                        </p>
                        <hr>
                       <!-- card look price and button -->
                       <div class="d-flex flex-row align-items-center justify-content-between">
                         <p class="CardPrice">$ 50.00</p>
                          <button type="button" class="CardButton btn btn-sm">Get Offer</button>
                        </div>       
                      </div>
                   </div>

                    <!-- Off Slider Item -->
                  <div class="container px-5 px-lg-2 px-md-2">
                      <!-- discount baner section -->
                        <div class="container-full OffBaner"></div>
                      <!-- off Card look section -->
                      <div class="container-full OffCard">
                        <p class="text-center OffCardTxt">
                          Get $ 50.00 off your next full price purchase!
                        </p>
                        <hr>
                       <!-- card look price and button -->
                       <div class="d-flex flex-row align-items-center justify-content-between">
                         <p class="CardPrice">$ 50.00</p>
                          <button type="button" class="CardButton btn btn-sm">Get Offer</button>
                        </div>       
                      </div>
                   </div>

                    <!-- Off Slider Item -->
                  <div class="container px-5 px-lg-2 px-md-2">
                      <!-- discount baner section -->
                        <div class="container-full OffBaner"></div>
                      <!-- off Card look section -->
                      <div class="container-full OffCard">
                        <p class="text-center OffCardTxt">
                          Get $ 50.00 off your next full price purchase!
                        </p>
                        <hr>
                       <!-- card look price and button -->
                       <div class="d-flex flex-row align-items-center justify-content-between">
                         <p class="CardPrice">$ 50.00</p>
                          <button type="button" class="CardButton btn btn-sm">Get Offer</button>
                        </div>       
                      </div>
                   </div>

                    <!-- Off Slider Item -->
                  <div class="container px-5 px-lg-2 px-md-2">
                      <!-- discount baner section -->
                        <div class="container-full OffBaner"></div>
                      <!-- off Card look section -->
                      <div class="container-full OffCard">
                        <p class="text-center OffCardTxt">
                          Get $ 50.00 off your next full price purchase!
                        </p>
                        <hr>
                       <!-- card look price and button -->
                       <div class="d-flex flex-row align-items-center justify-content-between">
                         <p class="CardPrice">$ 50.00</p>
                          <button type="button" class="CardButton btn btn-sm">Get Offer</button>
                        </div>       
                      </div>
                   </div>
       
              </div>
        </div>
      </div>
    </div>
    </section>
    <!-- top products section -->
    <section class="py-lg-5 mt-5 mt-lg-0 pt-5 pt-lg-0">
      <div class="container py-lg-4">
        <div class="row">
          <div class="col-lg-12 text-center">
            <p class="hr TopProducts text-dark">
              <span class="toptextback">
                Top Products
              </span>
            </p>
          </div>
          <!-- top products text -->
          <p class="text-center pt-5 pb-3 text-muted">
            List of the newest and best-selling cosmetic <br> products of our company
          </p>   
             <!-- top products slider -->    
              <div class="TopProdSlider">
                <div>
                  <img src="~/assets/pictures/categorie1.png" class="w-100" alt="">
                </div>
                <div>
                  <img src="~/assets/pictures/categorie2.png" class="w-100" alt="">
                </div>
                <div>
                  <img src="~/assets/pictures/categorie3.png" class="w-100" alt="">
                </div>
                <div>
                  <img src="~/assets/pictures/categorie4.png" class="w-100" alt="">
                </div>
                <div>
                  <img src="~/assets/pictures/categorie5.png" class="w-100" alt="">
                </div>
              </div>
              <!-- arrows inside flex -->
              <div class="SlideArrowPosition d-flex flex-row align-items-cemter justify-content-between px-5">
                <div class="TopProdRight">
                <i class=" SlideBtn bi bi-caret-left"></i>
                </div>
                <div class="TopProdLeft">
                <i class="SlideBtn bi bi-caret-right"></i>
                </div>
              </div>
        </div>
      </div>
    </section>
   <!-- best products section -->
    <section class="py-lg-5 mt-lg-0 pt-5 pt-lg-0">
      <div class="container py-lg-4">
        <div class="row">
          <div class="col-lg-12 text-center">
            <p class="hr text-dark">
              <span class="BestProducts">
                Best Products
              </span>
            </p>
          </div>
          <!-- Best products text -->
          <p class="text-center pt-5 text-muted">
            List of the newest and best-selling cosmetic <br> products of our company
          </p>
              <div class="BestProdSlider">
                <div>
                  <img src="~/assets/pictures/categorie1.png" class="w-100" alt="">
                </div>
                <div>
                  <img src="~/assets/pictures/categorie2.png" class="w-100" alt="">
                </div>
                <div>
                  <img src="~/assets/pictures/categorie3.png" class="w-100" alt="">
                </div>
                <div>
                  <img src="~/assets/pictures/categorie4.png" class="w-100" alt="">
                </div>
                <div>
                  <img src="~/assets/pictures/categorie5.png" class="w-100" alt="">
                </div>
              </div>
                   <!-- arrows inside flex -->
              <div class="SlideArrowPosition d-flex flex-row align-items-cemter justify-content-between px-5">
                <div class="BestProdLeft">
                <i class=" SlideBtn bi bi-caret-left"></i>
                </div>
                <div class="BestProdRight">
                <i class="SlideBtn bi bi-caret-right"></i>
                </div>
              </div>
        </div>
      </div>
    </section>
    <TheFooter />
  </div>
</template>

<script>


/* 
import axios from "axios"; 
*/
import TheHeader from "@/components/Navigation/TheHeader";
import TheFooter from "@/components/TheFooter";
export default {
  components: {
    TheHeader,
    TheFooter,
  },

  data() {
    return {
      DspPrimeArrow: true
    }
  },
  methods: {
    ChangeArrowState() {
      this.DspPrimeArrow = !this.DspPrimeArrow;
    }
  }, 

  mounted() {
    
    $(function () {
      // top products slider
      $('.TopProdSlider').slick({
        arrows: true,
        infinite: false,
        slidesToScroll: 1,
        slidesToShow: 4,
        accessibility: true,
        variableWidth: false,
        focusOnSelect: false,
        centerMode: false,
        nextArrow: $(".TopProdLeft"),
        prevArrow: $(".TopProdRight"),
        responsive: [
          {
            breakpoint: 992,
            settings: {
              slidesToScroll: 2,
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToScroll: 2,
              slidesToShow: 2,
            },
          },
           {
            breakpoint: 500,
            settings: {
              slidesToScroll: 1,
              slidesToShow: 1,
            },
          },
        ],
      })
      
      // Best products slider
    $('.BestProdSlider').slick({
        dots: false,
        arrows: true,
        infinite: false,
        slidesToScroll: 1,
        slidesToShow: 4,
        accessibility: true,
        variableWidth: false,
        focusOnSelect: false,
        centerMode: false,
        nextArrow: $(".BestProdRight"),
        prevArrow: $(".BestProdLeft"),
        responsive: [
          {
            breakpoint: 992,
            settings: {
              slidesToScroll: 2,
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToScroll: 2,
              slidesToShow: 2,
            },
          },
           {
            breakpoint: 500,
            settings: {
              slidesToScroll: 1,
              slidesToShow: 1,
            },
          },
        ],
      })

      //Off Products slider
         $('.OffProdSlider').slick({
        dots: false,
        arrows: true,
        infinite: false,
        slidesToScroll: 1,
        slidesToShow: 3,
        accessibility: true,
        variableWidth: false,
        focusOnSelect: false,
        centerMode: false,
        nextArrow: $(".OffRightArrow"),
        prevArrow: $(".OffLeftArrow"),
        responsive: [
          {
            breakpoint: 992,
            settings: {
              slidesToScroll: 2,
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToScroll: 2,
              slidesToShow: 2,
            },
          },
           {
            breakpoint: 500,
            settings: {
              slidesToScroll: 1,
              slidesToShow: 1,
            },
          },
        ],
      })

    })
  },
};

</script>


<style scoped>

.OffRightArrow, .OffLeftArrow  {
  cursor: pointer;
}



.SlideBtn {
  cursor: pointer;
  background-color: rgba(204, 204, 204, 0.50);
  border-radius: 50%;
  padding: 8px;
  font-size: 13pt;
}

.SlideArrowPosition {
  margin-top: -17%;
  z-index: 1;
}

@media screen and (max-width: 992px) {
  .SlideArrowPosition {
    margin-top: -35%;
  }
}
  
/* slider section */
.slider {
  border-radius: 30px;
}

.SliderTxt {
  margin-top: -110%;
  margin-left: 20%;
  font-family: Playfair Display;
  font-weight: 800;
  font-size: 25pt;
}

  

.SliderDesc {
  text-align: left;
  margin-left: 20%;
}

.SliderBtn {
  font-family: 'Open Sans';
  font-weight: 400 !important;
  font-size: 10pt !important;
  margin-left: 20%;
  border-radius: 30px !important;
  background-color: #f0b86c !important;
  color: #492e25;
  border: none !important;
  letter-spacing: 3px;
  padding: 8px 17px !important;
  text-transform: capitalize;
  box-shadow: none;

}

.SliderBtn:hover {
  box-shadow: none;
  background-color: #ffc07f !important;
  color:#fff;
  font-family: 'Open Sans';
  font-weight: 700 !important;
  transition: 0.5s;
}


.SliderMobileBtn {

  font-family: 'Open Sans';
  font-weight: 400 !important;
  font-size: 10pt !important;
  border-radius: 30px !important;
  background-color: #f0b86c !important;
  color: #492e25;
  border: none !important;
  letter-spacing: 3px;
  padding: 8px 17px !important;
  text-transform: capitalize;
}

@media all and (max-width: 990px) {

  .SliderTxt {
    margin-top: -45%;
    margin-left: 10%;
    font-family: Playfair Display;
    font-weight: 800;
    font-size: 25pt;
  }

  .SliderDesc {
    text-align: left;
    margin-left: 10%;
    width: 300px;
  }

  .SliderBtn {
    margin-left: 10%;
  }
  
}

.SliderMbBkg {
  background-image: url("~assets/pictures/SliderMbBkg.png");
  background-position: top;
  background-repeat: no-repeat;
  background-size: cover; 
  min-height: 70vh;
}


.MobileSliderTxtTitle {
 font-family: Playfair Display;
 font-size: 18pt;
 font-weight: 800;
 color: #e3e3e3;
 padding-top: 80%;
}

@media screen and (max-width: 320px) {
  .MobileSliderTxtTitle {
    padding-top: 115%;
    font-size: 15pt;
  }
}

.MobileSliderTxtDesc {
  font-family: 'Open Sans';
  font-weight: 400;
  font-size: 10pt;
}

@media screen and (max-width: 320px) {
  .MobileSliderTxtDesc {
    display: none;
  }
}
  
/*categiroe section */
.CategorieTxt {
  font-family: 'Open Sans';
  font-weight: 600;
  font-size: 12pt;
}

/* off section*/
.offbackground {
  background-image: url("~assets/pictures/offbackground.svg");
  background-position: left;
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 450px;
}

.OffCarousel {
  margin-top: 95px !important;
}

@media screen and (max-width: 768px) {
  .OffCarousel {
    margin-top: 45px !important;
  }
}
  

.offimg {
  margin-top: 20px;
  width: 90%;
}

.OffTxt {
  margin-left: 11%;
  margin-top: 10%;
  font-family: Playfair Display;
  font-weight: 700;
  font-size: 22pt;
}

.OffDesc {
  font-family: Poppins;
  margin-left: 12%;
  font-size: 12pt;
  text-align: left;
  color: #606060;
}

.ArrowsPosition {
  margin-left: 5%;
}

.OffSinglePicBackPos {
  margin-left: 1.5px;
}

.OffBaner {
  background-image: url("~/assets/pictures/off1.jpg");
  background-position: top;
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 190px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

.OffBaner2 {
  background-image: url("~/assets/pictures/off2.jpg");
  background-position: top;
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 190px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

.OffBaner3 {
  background-image: url("~/assets/pictures/off3.jpg");
  background-position: top;
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 190px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

.OffBaner4 {
  background-image: url("~/assets/pictures/off1.jpg");
  background-position: top;
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 190px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

.OffCard {
  background-image: url("~/assets/pictures/OffSinglePicBackground.svg");
  background-position: top;
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 100px;
}

.OffCardTxt {
  padding:  16px 10px 0px 10px;
  color: #2a2446;
  font-family: 'Open Sans';
  font-size: 7pt;
}

.CardPrice {
  color: #65a79f;
  font-family: 'Open Sans';
  font-size: 15pt;
  font-style: italic;
  position: relative;
  top: 16px;
  left: 10px;
}

.CardButton {
  font-family: 'Open Sans';
  font-weight: 600 !important;
  box-shadow: none !important;
  border-radius: 6px;
  background-color: #f0b86c !important;
  font-size: 7pt !important;
  padding: 5px !important;
  position: relative;
  top: 10px;
  right: 10px;
}

/* top products */

.TopProducts {
  font-family: Playfair Display !important;
  font-weight: 400;
  font-size: 35pt;
  width: 35%;
  margin: 0 auto;
}

@media screen and (max-width: 500px) {
  .TopProducts {
    font-size: 20pt;
  }
}

.hr {
  width: 100%;
  border-bottom: 2px solid #f0b86c;
  line-height: 0.2em;
}

.toptextback {
  background-color: #fafafa;
  padding: 0 30px;
}

/* best products */
.BestProducts {
  font-family: Playfair Display !important;
  font-weight: 600 !important;
  font-size: 35pt;
  width: 35%;
  margin: 0 auto;  
  background-color: #fafafa;
  padding: 0 30px;
}

@media screen and (max-width: 500px) {
  .BestProducts {
    font-size: 20pt;
  }
}

</style>
