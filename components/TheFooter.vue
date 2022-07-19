<template>
<section>
  <!-- Footer Section -->
  <!-- Desktop version -->
  <footer class="FooterBkg d-none d-lg-block">
    <div class="container px-5 pb-5">
      <div class="container">
        <div class="col-lg-12 contactbg">
          <!-- contact us content -->
          <div class="container">
            <div class="row">
              <!-- text section -->
              <div class="col-lg-6 text-left">
                <p class="text-dark ContactTitle">Join With Us</p>
                <p class="text-dark ContactDesc">
                  Please enter your email and be informed of our <br />
                  latest events.
                </p>
              </div>
                <!-- form section -->
              <div class="col-lg-6 text-center">
                   <div class="d-flex flex-row FormSection">
                          <div class="form-outline">
                            <input placeholder="Enter your email" type="search" id="form2" class="form-control ContactInputStyle" />
                          </div>
                          <button type="button" class="btn ContactBtn">
                            <i class="bi bi-forward ContactIcon"></i>
                          </button>
                    </div>
              </div>
            </div>         
          </div>
        </div>
            <!-- Footer Columns Container -->
            <div class="container">           
              <div class="row gx-5">
                  <div class="col-lg-5 text-end">
                    <!-- kandaka logo -->
                     <img class="KandakaFooter py-4" src="~/assets/pictures/FoooterLogo.svg" alt="kandakalogo">
                    <!-- footer text --> 
                     <p class="FooterLogoTxt">
                      Kandaka Company is one of the first brands of cosmetics 
                       in Sudan, which has the most prestigious certificates in 
                       the world from international organizations.
                    </p>
                    <!-- footer icons -->
                    <i class="SocialIcons bi bi-facebook px-2"></i>
                    <i class="SocialIcons bi bi-tiktok px-2"></i>
                    <i class="SocialIcons bi bi-youtube px-2"></i>
                    <i class="SocialIcons bi bi-whatsapp px-2"></i>
                    <i class="SocialIcons bi bi-instagram px-2"></i>
                  </div>
                  <div class="col-lg-2">
                    <p class="FooterMenu py-4">Menu</p>
                    <p class="FooterSubMenu">Shop</p>
                    <p class="FooterSubMenu">Privacy</p>
                    <p class="FooterSubMenu">My Account</p>
                    <p class="FooterSubMenu">About us</p>
                    <p class="FooterSubMenu">Contact</p>
                  </div>
                  <div class="col-lg-2">
                    <p class="FooterMenu py-4">Shop Products</p>
                    <p class="FooterSubMenu">Skin Care</p>
                    <p class="FooterSubMenu">Lip Care</p>
                    <p class="FooterSubMenu">jewelry</p>
                    <p class="FooterSubMenu">Nails</p>
                    <p class="FooterSubMenu">Scarf</p>
                  </div>
                  <div class="col-lg-2">
                    <p class="FooterMenu py-4">Contact information</p>
                    <div class="d-flex flex-row align-items-center">
                    <i class="GmailIcon bi bi-envelope-fill"></i> 
                    <p class="FooterSubMenu ps-2 mt-2">kandakacollections@gmail.com</p>
                    </div>
                  </div>
              </div>
            </div>
      </div>
    </div>
  </footer>

  <!-- Mobile and tablet version -->
    <div class="container-full d-lg-none MobileFooterBackground mt-5 px-3">
      <div class="container FooterMobileForm">
          <div class="row">
              <div class="col-12">
                  <p class="MobileFooterTitle text-center mt-5 pt-4">Join With US</p>
                  <p class="MobileFooterDesc text-center">
                    Please enter your email and be informed of our latest events
                  </p>
                     <div class="d-flex flex-row FormMobileSection justify-content-center mt-4 mt-md-5 mt-lg-0">
                          <div class="form-outline">
                            <input type="search" id="form3" class="form-control ContactInputStyle" placeholder="enter your email" />
                          </div>
                          <button type="button" class="btn ContactBtn">
                            <i class="bi bi-forward ContactIcon"></i>
                          </button>
                    </div>
              </div>
        </div> 
      </div>
             <!-- footer info -->
               <div class="text-center">
                    <!-- kandaka logo -->
                     <img class="KandakaMobileFooter py-5" src="~/assets/pictures/FoooterLogo.svg" alt="kandakalogo">
                    <!-- footer text --> 
                     <p class="FooterMobileLogoTxt pb-4 px-4">
                      Kandaka Company is one of the first brands of cosmetics 
                       in Sudan, which has the most prestigious certificates in 
                       the world from international organizations.
                    </p>
                    <!-- footer icons -->
                    <div class="pb-4">
                    <i class="SocialIcons bi bi-facebook px-2"></i>
                    <i class="SocialIcons bi bi-tiktok px-2"></i>
                    <i class="SocialIcons bi bi-youtube px-2"></i>
                    <i class="SocialIcons bi bi-whatsapp px-2"></i>
                    <i class="SocialIcons bi bi-instagram px-2"></i>
                  </div>
                  <!-- footer links -->
                  <div class="container pb-4 LinksPadding">
                    <div class="row">
                        <div class="col-6 text-end">
                          <p class="FooterResponsiveMenu">Menu</p>
                          <p class="FtrSubMenu">Shop</p>
                          <p class="FtrSubMenu">Privacy</p>
                          <p class="FtrSubMenu">My Account</p>
                          <p class="FtrSubMenu">About us</p>
                          <p class="FtrSubMenu">Contact</p>
                        </div>
                        <div class="col-6 text-end">
                            <p class="FooterResponsiveMenu">Shop Products</p>
                            <p class="FtrSubMenu">Skin Care</p>
                            <p class="FtrSubMenu">Lip Care</p>
                            <p class="FtrSubMenu">jewelry</p>
                            <p class="FtrSubMenu">Nails</p>
                            <p class="FtrSubMenu">Scarf</p>
                        </div>
                    </div>
                  </div> 
              </div>   
    </div>

  <!-- copyright section -->
  <!-- desktop version -->
    <section class="copyright py-2 pt-5 pt-lg-0 pt-md-0 d-none d-lg-block">
      <div class="container">
        <div class="container">
          <div class="row">
            <div class="col-lg-6">
              <p class="CopyrightTxt">@2022 Kandaka collections Lic.All rights reserved.</p>
            </div>
            <div class="col-lg-6">
                 <div class="payments d-flex flex-row align-items-center">
                    <img class="px-2" src="~/assets/pictures/visa.svg" alt="visa">
                    <img class="px-2" src="~/assets/pictures/paypal.svg" alt="master">
                    <img class="px-2" src="~/assets/pictures/master.svg" alt="paypal">
                    <img class="px-2" src="~/assets/pictures/bitcoin.svg" alt="bitcoin">
                </div>
            </div>
          </div>
        </div>
      </div>
  </section>  

   <!-- tablet and mobile version -->
     <section class="copyright py-2 pt-5 pt-lg-0 pt-md-0 d-lg-none">
      <div class="container">
        <div class="container">
          <div class="row">
            <div class="col-lg-6">
              <p class="CopyrightTxt text-center">
                @2022 Kandaka collections Lic.All rights reserved.
              </p>
            </div>
            <div class="col-lg-6">
                 <div class="text-center"> 
                    <img class="px-1" src="~/assets/pictures/visa.svg" alt="visa">
                    <img class="px-0" src="~/assets/pictures/paypal.svg" alt="master">
                    <img class="px-1" src="~/assets/pictures/master.svg" alt="paypal">
                    <img class="px-0" src="~/assets/pictures/bitcoin.svg" alt="bitcoin">
                </div>
            </div>
          </div>
        </div>
      </div>
  </section>  
</section>
</template>

<script>
export default {
  props: ["footer_data"],
};
</script>

<style scoped>

::placeholder {
  position: absolute;
  color: #a1a2a1;
  top: 10px;
  right: 170px;
  font-family: 'Open Sans';
  font-size: 8pt;
  font-style: italic;
  font-weight: normal;
  opacity: 1 !important;
}
/* Footer section */
.FooterBkg {
  background-image: url("~assets/pictures/footerbkg.svg");
  background-position: top;
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 50vh;
}

.FooterMobileForm {
  background-image: url("~assets/pictures/FooterFormBkg.png");
  background-position: top;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 30px;
  min-height: 350px;
}

.MobileFooterTitle {
  font-family: 'Open Sans';
  font-size: 16pt;
  font-weight: 600;
  color: #000;
}

.MobileFooterDesc {
  font-family: 'Open Sans';
  font-size: 12pt;
  font-weight: 600;
  color: #2a2446;
  width:  100%;
  margin: 0 auto;
}

.KandakaFooter {
  width: 110px;
  margin-left: 15%;
}

.KandakaMobileFooter {
  width: 110px;;
}

.contactbg {
  background-image: url("~assets/pictures/contactbg.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  padding: 0px 70px;
  min-height: 280px;
  border-radius: 16px;
}

.ContactTitle {
 margin-top: 90px; 
 font-family: 'Open Sans';
 font-weight: 600;
 font-size: 26pt;
}

.ContactDesc {
  font-family: 'Open Sans';
  font-weight: 600;
  font-size: 12pt;
}

.FormSection {
  margin-top: 160px; 
  margin-left: 10px;
}

.ContactInputStyle {
  border: 0.5px solid #707070 !important;
  background-color: #fafafa !important;
  width: 100% !important;
}

.ContactBtn {
background-color: #055452 !important;
margin-left: -36px !important;
margin-top: 0px;
height: 37px;
width: 37px;
z-index: 1;
}

.ContactIcon {
  color: #fafafa;
  position: relative;
  right: 2px;
 }

 .FormLabel {
  position: absolute;
  color: #a1a2a1;
  top: 10px;
  right: 170px;
  font-family: 'Open Sans';
  font-size: 8pt;
  font-style: italic;
  font-weight: normal;
 }

 .FooterLogoTxt {
  font-family: 'Open Sans';
  font-weight: 600;
  font-size: 12pt;
  color: #fafafa;
  text-align: left;
 }

 .FooterMobileLogoTxt {
  font-family: 'Open Sans';
  font-weight: 600;
  font-size: 12pt;
  color: #fafafa;
  text-align: center;
 }

 @media screen and (max-width: 320px) {
  .FooterMobileLogoTxt {
    text-align: justify;
  }
 }

 .SocialIcons {
  color: #e99d7b;
  font-size: 14pt;
 }

 .FooterMenu {
  font-family: 'Open Sans';
  font-weight: 600;
  font-size: 12pt;
  color: #e99d7b;
  text-align: left;
  margin-top: 50%;
 }

 .FooterResponsiveMenu {
  font-family: 'Open Sans';
  font-weight: 600;
  font-size: 12pt;
  color: #e99d7b;
  margin-top: 10%;
 }

 .FooterSubMenu {
  font-family: 'Open Sans';
  font-weight: 600;
  font-size: 10pt;
  color: #fff;
  text-align: left;
 }


 .FtrSubMenu {
  font-family: 'Open Sans';
  font-weight: 600;
  font-size: 10pt;
  color: #fff;
 }

 .LinksPadding {
  padding: 0px 0px 0px 20% !important;
 }

 .MobileFooterBackground {
  background-image: url("~assets/pictures/MbFtBkg.svg");
  background-position: top;
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 100vh;
  margin-top: 20px;
 }

 .GmailIcon {
  padding: 5px 9px;
  border-radius: 50%;
  background-color: #e99d7b;
  color: #055452;
 }

 .copyright {
  background-color: #fafafa;
 }

 .CopyrightTxt {
  margin-top: 3%;
  margin-left: 8%;
  font-family: 'Open Sans';
  font-weight: 600;
  font-size: 11pt;
 }

 .payments {
  margin-top: 2%;
  margin-left: 40%;
 }
</style>