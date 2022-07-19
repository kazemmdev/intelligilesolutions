<template>
<div>
<TheHeader />  
<section class="PageBkg404">
<div class="container">
  <div class="row">
    <div class="col-lg-6 col-md-6">
      <img src="~/assets/pictures/404error.svg" class="w-100" alt="">
    </div>
     <div class="col-lg-6 col-md-6 text-center mt-5">
      <p class="NotFound">Page not Found</p>
      <p class="NotFoundDesc py-4 px-4">The page you are looking for doesn't exist. Looks like you are in the wrong place.Let us guide you back!</p>
      <button class="btn BackHomeBtn">
        Back to Home Page
      </button>
    </div>
  </div>
</div>
</section>

<TheFooter />
</div> 
</template>


<script>
import TheHeader from "@/components/Navigation/TheHeader";
import TheFooter from "@/components/TheFooter";


export default {
    components: {
    TheHeader,
    TheFooter
  },
}
</script>

<style scoped>

 .BackHomeBtn {
  text-transform: capitalize;
  color: #055452;
  background-color: #e99d7b;
  box-shadow: none;
  border-radius: 30px;
  padding: 10px 20px;
  font-weight: bold;
 }

 .NotFoundDesc {
  color: #6d7170;
  font-family: 'Open Sans';
  line-height: 1.47;
  font-size: 13pt;
 }

 .NotFound {
  color: #055452;
  font-family: 'Open Sans';
  font-size: 25pt;
  font-weight: bold;
  letter-spacing: 2px;
 }

 .PageBkg404 {
  background-image: url("~assets/pictures/PageBack.jpg");
  background-size: cover;
  background-position: top;
  background-repeat: no-repeat;
}
</style>
