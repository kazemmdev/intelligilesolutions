

<template>
  <div>
    <TheHeader />
    <!-- page broadcrumbs -->
    <section class="PageBkg">
      <div class="container px-5 px-md-4 px-lg-4 pt-4">
        <div class="d-flex flex-row">
          <nuxt-link to="/">
            <p class="BroadHome">Home</p>
          </nuxt-link>
          <p class="px-2">/</p>
          <p class="BroadSub">Contact</p>
        </div>
      </div>
    <!-- page title -->
    <div class="container px-5 px-md-4 px-lg-4">
      <p class="PageTitle">Contact</p>
    </div>

    <!-- contact text -->
    <div class="container px-5 px-md-4 px-lg-4">
      <div class="row gx-5">
        <div class="col-md-6 col-lg-6 pt-4">
          <p class="CtCTitle">Have any Questions?</p>
          <p class="CtCTitleDesc">
            Please help us to provide better services to customers by sending
            your questions, criticisms and suggestions.
          </p>
           <!-- login form -->
          <form @submit.prevent="FormSubmit" class="my-4">
            <!-- Name input -->
            <div class="form-outline mb-2">
              <label for="input1">Name</label>
              <input placeholder="Your Name" type="text" id="input1" class="InputStyle form-control"/>
              <!--
              <p class="text-danger" v-if="NameCheck">No Empty Name Field</p>
              -->
            </div>
            <!-- Email input -->
            <div class="form-outline mb-2">
              <label for="input2">Email</label>
              <input placeholder="kandaka@example.com" type="email" id="input2" class="InputStyle form-control"/>
              <!--
              <p class="text-danger" v-if="MailCheck">No Empty Email Field</p>
              -->
            </div>
            <!-- subject input -->
            <div class="form-outline mb-2">
              <label for="input3">Subject</label>
               <select class="InputStyle form-control" name="cars" id="cars">
                <option value="volvo">Suggestions</option>
                <option value="saab">Criticism</option>
                <option value="opel">Help</option>
                <option value="audi">Question</option>
              </select>
              <!--
              <p class="text-danger" v-if="PassCheck">
                No Empty Subject Field
              </p>
              -->
            </div>
             <!-- textarea -->
            <div class="form-outline mb-2">
               <label for="input3">Message</label>
               <textarea class="InputStyle form-control" placeholder="your mesage" id="w3review" name="w3review" rows="4" cols="50">
                </textarea>
                <!--
              <p class="text-danger" v-if="AreaCheck">
                No Empty message Field
              </p>
              -->
            </div>
            <!-- Submit button -->
            <button type="submit" class="btn BtnStyle btn-block my-4 SubmitBtnStyle">
              Send a Message
            </button>
          </form>
        </div>
        <div class="col-md-6 col-lg-6">
          <div class="d-none d-md-block d-lg-block MapColor text-center" style="width: 100%; height: 50%; position: relative;">
               <img class="LogoImgStyle w-50" src="~/assets/pictures/logokandaka.svg" alt="logo" />
          </div>
         <!-- info text -->
         <div class="container pt-3">
            <div class="row">
                <div class="col-lg-6 col-md-6"></div>
                <div class="col-lg-6 col-md-6 ps-5"></div>
            </div>
         </div>
         <!-- mail and media -->
          <div class="container-full">
            <div class="row gx-5">
                <div class="col-lg-6">
                    <p class="MapTxt">Contact Information</p>
                    <div class="d-flex align-items-center">
                    <i class="GmailIcon bi bi-envelope-fill"></i> 
                    <p class="FooterSubMenu ps-lg-2 px-lg-2 px-2 pt-2 pt-lg-2">kandakacollections@gmail.com</p>
                    </div>
                </div>
                <div class="col-lg-6 ps-lg-5 pt-lg-0 pt-md-4">
                    <p class="pt-2 pt-md-0 pt-lg-0 MapTxt pb-md-2 pb-lg-2">Social Media</p>
                    <i class="SocialIcons bi bi-facebook px-2"></i>
                    <i class="SocialIcons bi bi-tiktok px-2"></i>
                    <i class="SocialIcons bi bi-youtube px-2"></i>
                    <i class="SocialIcons bi bi-instagram px-2"></i>
                </div>
            </div>
         </div>
        </div>
      </div>
    </div>
    </section>
    <TheFooter />
  </div>
</template>

<script>
import TheHeader from "@/components/Navigation/TheSubpageHeader";
import TheFooter from "@/components/TheFooter";
export default {
  components: {
    TheHeader,
    TheFooter,
  },
};
</script>

<style scoped>

.LogoImgStyle {
    max-height: 100%;
    max-width: 100%;
    width: auto;
    height: auto;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
}

.MapColor {
  background-color: #055452;
  border-radius: 12px;
}

select {
  -webkit-appearance: none;
  -moz-appearance: none !important;
  background: transparent !important;
  background-image: url("~/assets/svg/ArrowDown.svg") !important;
  background-repeat: no-repeat !important;
  background-position-x: 96% !important;
  background-position-y: 20px !important;
}
 .GmailIcon {
  padding: 8px 10px;
  border-radius: 50%;  
  background-color: #e99d7b;
  color: #055452;
 }
.SocialIcons {
  color: #e99d7b;
  font-size: 14pt;
 }
.MapTxt {
    color: #055452;
    font-family: 'Open Sans';
    font-size: 14pt;
    font-weight: 800;
}
label {
    color: #055452;
    padding-top: 10px;
    padding-bottom: 5px;
}
/* form style */
::placeholder {
  color: #6e7689;
  opacity: 1 !important;
}
.BtnStyle {
    font-family: 'Open Sans';
    font-weight: 600;
    font-size: 10pt;
    background-color: #e99d7b !important;
    color: #055452 !important;
    padding: 12px;
    border-radius: 30px;
    width: 30%;
}
@media screen and (max-width: 768px) {
  .BtnStyle {
    width: 100%;
  }
}
    
.InputStyle {
    padding: 13px;
    font-family: 'Open Sans';
    font-weight: 600;
    font-size: 14px;
    border: solid 1.5px #c9c6d1;
    border-radius: 10px;
    color: #6e7689;
}
/*contact title */
.CtCTitle {
  color: #055452;
  font-family: "Open Sans";
  font-size: 20pt;
  font-weight: 800;
  line-height: 1.47;
}
.CtCTitleDesc {
  color: #616161;
  font-family: "Open Sans";
  font-size: 12pt;
}
.PageTitle {
  color: #231942;
  font-family: "Open Sans";
  font-weight: 600;
  font-size: 20pt;
}
.PageBkg {
  background-image: url("~assets/pictures/PageBack.jpg");
  background-size: cover;
  background-position: top;
  background-repeat: no-repeat;
}
.BroadHome {
  color: #055452;
  font-family: "Open Sans";
  font-weight: 600;
  line-height: 1.25;
  font-size: 14pt;
}
.BroadSub {
  color: #055452;
  font-family: "Open Sans";
  font-weight: 600;
  line-height: 1.25;
  font-size: 14pt;
}
</style>