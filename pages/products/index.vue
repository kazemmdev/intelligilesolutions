<template>
  <div>
    <TheHeader />
    <!-- page broadcrumbs -->
    <section class="PageBkg">
      <div class="container px-4 px-md-4 px-lg-4 pt-4">
        <div class="d-flex flex-row">
          <p class="BroadHome">Home</p>
          <p class="px-2">/</p>
          <p class="BroadSub">Products</p>
        </div>
      </div>
      <!-- About Kandaka section -->
      <div class="container px-4 px-md-4 px-lg-4 pb-3">
         <div class="d-flex flex-row justify-content-between">
           <p class="PageTitle">Products</p> 
           <p class="ResultsTxt">Showing 09 Results</p>
         </div>
      </div>
      <!-- products section -->
       <div class="container px-4 px-md-4 px-lg-4">
        <div class="row gx-5">
            <div class="col-lg-4 div col-md-4 pb-4 py-md-0 py-lg-0">
              <!-- search form -->
              <div class="input-group rounded">
                <input type="search" class="ProductsForm form-control rounded" placeholder="Search Here" aria-label="Search" aria-describedby="search-addon" />
                <span class="input-group-text search" id="search-addon">
                  <i class="bi bi-search"></i>
                </span>
              </div> 
              <!-- Categories -->
              <section class="CatSec mt-4 py-2 px-4">
                 <div class="d-flex flex-row align-items-center py-3">
                  <img src="~/assets/pictures/categorie.svg" class="CatImg" alt="categorie">
                  <p class="px-2 CatTxt m-0"> Categories</p>               
                 </div>
              <!-- categories details -->
                  <div class="d-flex align-items-center justify-content-between">
                      <p class="CategorieTxt">Accesories</p>
                      <p>(5)</p>
                  </div>
                  <hr>
                  <div class="pt-3 d-flex align-items-center justify-content-between">
                      <p class="CategorieTxt">Face care</p>
                      <p>(5)</p>
                  </div>
                  <hr>
                  <div class="pt-3 d-flex align-items-center justify-content-between">
                      <p class="CategorieTxt">Lip care</p>
                      <p>(5)</p>
                  </div>
                  <hr>
                  <div class="pt-3 d-flex align-items-center justify-content-between">
                      <p class="CategorieTxt">Skin care</p>
                      <p>(5)</p>
                  </div>
                   <hr>
                  <div class="pt-3 d-flex align-items-center justify-content-between">
                      <p class="CategorieTxt">Nail care</p>
                      <p>(5)</p>
                  </div>
                  <hr>
                  <div class="pt-3 d-flex align-items-center justify-content-between">
                      <p class="CategorieTxt">Blusher</p>
                      <p>(5)</p>
                  </div>
              </section>
              <!-- Popular Tags -->
                <section class="CatSec mt-4 py-2 px-4">
                 <div class="d-flex flex-row align-items-center py-3">
                  <img src="~/assets/pictures/categorie.svg" class="CatImg" alt="categorie">
                  <p class="px-2 CatTxt m-0">Popular Tags</p>               
                 </div>
                    <hr>
              <!-- categories details -->
                  <div class="d-flex align-items-center justify-content-center">
                    <button type="button" class="mt-3 mx-2 btn btn-sm btn-light btn-rounded">Beauty</button>
                    <button type="button" class="mt-3 mx-2 btn btn-sm btn-light btn-rounded">MakeupArtist</button>
                  </div>
                  <div class="py-3 d-flex align-items-center justify-content-center">
                    <button type="button" class="mx-2 btn btn-sm btn-light btn-rounded">Makeup</button>
                    <button type="button" class="mx-2 btn btn-sm btn-light btn-rounded">Hair</button>
                    <button type="button" class="mx-2 btn btn-sm btn-light btn-rounded">Nails</button>
                  </div>
                   <div class="pb-3 d-flex align-items-center justify-content-center">
                    <button type="button" class="mx-2 btn btn-sm btn-light btn-rounded">Hairstyle</button>
                    <button type="button" class="mx-2 btn btn-sm btn-light btn-rounded">Skincare</button>
                  </div>
              </section>
            </div>
            <div class="col-lg-8 div col-md-8">
                <!-- products list -->
                <div class="container px-0">
                    <div class="row">
                             <!-- Product One -->
                        <div class="col-6 col-lg-4 col-md-4">
                            <img src="~/assets/pictures/ProductTwo.jpg" class="pb-2 w-100" alt="ProductTwo">
                            <div class="d-lg-flex">
                              <!-- star -->
                             <div>
                            <i class="bi bi-star-fill starbi"></i>
                            <i class="bi bi-star-fill starbi"></i>
                            <i class="bi bi-star-fill starbi"></i>
                            <i class="bi bi-star starbi"></i>
                            <i class="bi bi-star starbi"></i>
                              </div>
                              <!-- stars count -->
                              <div>
                                <p class="m-0 my-1  StartCount px-1">(5000)</p>
                              </div>
                                <!-- reviews count --> 
                              <div class="ms-auto">
                                  <p class="m-0 mb-2 mt-lg-1 mb-md-1 reviews text-muted">150 reviews</p>
                              </div>
                            </div>
                            <p class="pt-2 ProductTitle">Sella body butter</p>
                            <p class="ProductTitle">$350.00</p>
                        </div>
                           <!-- Product Two -->
                        <div class="col-6 col-lg-4 col-md-4">
                            <img src="~/assets/pictures/ProductThree.jpg" class="pb-2 w-100" alt="ProductTwo">
                            <div class="d-lg-flex">
                              <!-- star -->
                             <div>
                            <i class="bi bi-star-fill starbi"></i>
                            <i class="bi bi-star-fill starbi"></i>
                            <i class="bi bi-star-fill starbi"></i>
                            <i class="bi bi-star starbi"></i>
                            <i class="bi bi-star starbi"></i>
                              </div>
                              <!-- stars count -->
                              <div>
                                <p class="m-0 my-1  StartCount px-1">(5000)</p>
                              </div>
                                <!-- reviews count --> 
                              <div class="ms-auto">
                                  <p class="m-0 mb-2 mt-lg-1 mb-md-1 reviews text-muted">150 reviews</p>
                              </div>
                            </div>
                            <p class="pt-2 ProductTitle">Sella body butter</p>
                            <p class="ProductTitle">$350.00</p>
                        </div>
                         <!-- Product Three -->
                        <div class="col-6 col-lg-4 col-md-4">
                            <img src="~/assets/pictures/ProductOne.jpg" class="pb-2 w-100" alt="ProductTwo">
                            <div class="d-lg-flex">
                              <!-- star -->
                             <div>
                            <i class="bi bi-star-fill starbi"></i>
                            <i class="bi bi-star-fill starbi"></i>
                            <i class="bi bi-star-fill starbi"></i>
                            <i class="bi bi-star starbi"></i>
                            <i class="bi bi-star starbi"></i>
                              </div>
                              <!-- stars count -->
                              <div>
                                <p class="m-0 my-1  StartCount px-1">(5000)</p>
                              </div>
                                <!-- reviews count --> 
                              <div class="ms-auto">
                                  <p class="m-0 mb-2 mt-lg-1 mb-md-1 reviews text-muted">150 reviews</p>
                              </div>
                            </div>
                            <p class="pt-2 ProductTitle">Sella body butter</p>
                            <p class="ProductTitle">$350.00</p>
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

hr{
  height: 1px !important;
  color: #acaaaa !important;
  width: 100%;
  margin: 0 auto !important;
}

.reviews {
  font-size: 11px;
}

.StartCount {
  font-size: 12px;
  color: #e99d7b;
  margin-top: 5px;
}


.CatTxt:hover {
  cursor: pointer;
  color: #e99d7b;
  transition: 0.5s;
}

.CategorieTxt:hover {
  cursor: pointer;
  color: #e99d7b;
  transition: 0.5s;
}

button {
  color: #5a5a5a;
  border-radius: 8px;
  padding: 10px;
  background-color: #f0f0f0;
  box-shadow: none;
}

.CategorieTxt {
  font-family: 'Open Sans';
  font-size: 11pt;
}

.CatImg {
  width: 15px;
  height: 15px;
}

.CatSec {
  background-color: #f9f9f9;
  border-radius: 5px;
}

.CatTxt {
  font-family: 'Open Sans', sans-serif;
  font-size: 13pt;
  color: #231942;
}

::placeholder {
   padding-left: 10px;
}

.search {
  background-color: #f9f9f9;
  border-top-right-radius: 5px !important;
  border-bottom-right-radius: 5px !important;
  border: 1px solid rgb(235, 235, 235);

}

.ProductsForm {
  border: none;
  background-color: #f9f9f9;
  min-height: 50px;
  border: 1px solid rgb(235, 235, 235);
}

.ProductTitle {
  color: #055452;
  font-family: 'Open Sans';
  font-weight: 600;
  font-size: 12pt;
  line-height: 1.23;
}

.starbi {
   color: #ff6565;
}

.ResultsTxt {
  font-family: 'Open Sans';
  font-size: 12pt;
  color: #231942;
}

.KandakaMail {
  color: #055452;
}

.accordion-button {
  color: #000;
  font-family: 'Open Sans';
  font-weight: 600;
  font-size: 12pt;
  text-align: left;
}

.accordion-body {
  font-family: 'Open Sans';
  font-size: 10pt;
  color: #000;
}

  
.accordion-button:not(.collapsed) {
  background-color: #e99d7b;
  color: #055452;
  font-family: 'Open Sans';
  font-weight: 600;
  font-size: 12pt;
}

.accordion-button::after {
  margin-right: 0 !important;
  background-image: url("~/assets/pictures/accordion.svg");
}

.FaqDesc {
  font-family: 'Open Sans';
  font-size: 10pt;
  line-height: 1.5;
  color: #000;

}

.faq {
  font-family: "Open Sans";
  font-size: 22pt;
  font-weight: bold;
  color: #000;
  font-size: 16pt;
}

.DescTitle {
  color: #055452;
  font-family: 'Open Sans';
  font-size: 14pt;
  font-weight: 600;
}

.Desc {
  font-family: 'Open Sans';
  font-size: 11pt;
  color: #707070;
}

.PageBkg {
  background-image: url("~assets/pictures/PageBack.jpg");
  background-size: cover;
  background-position: top;
  background-repeat: no-repeat;
}

.PageTitle {
  font-family: "Open Sans";
  font-size: 18pt;
  font-weight: 600;
  color: #231942;
}

.BroadHome {
  color: #055452;
  font-family: "Open Sans";
  font-weight: 600;
  line-height: 1.25;
  font-size: 12pt;
}

.BroadSub {
  color: #055452;
  font-family: "Open Sans";
  font-weight: 600;
  line-height: 1.25;
  font-size: 12pt;
}
</style>