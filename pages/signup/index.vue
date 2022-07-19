<template>
<section>
  <div>
    <!-- Desktop And Tablet version -->
    <section class="background d-none d-md-block d-lg-block">
         <div class="container">
            <div class="container pt-5">
                <div class="container pt-3">
                    <div class="row pt-4">
                        <div class="pt-5 col-lg-6 col-md-6 bg-white px-5">
                            <p class="LoginTitle text-center">Sign Up</p>
                            <p class="text-center text-muted">Please register by completing the information below</p>
                            <!-- login form -->
                                <form @submit.prevent="FormSubmit" class="my-5">
                                    <!-- Name input -->
                                    <div class="form-outline mb-2">
                                        <input v-model="name" placeholder="Your Name" type="text" id="input1" class="InputStyle form-control" />
                                        <p class="text-danger" v-if="NameCheck">No Empty Name Field</p>
                                    </div>
                                    <!-- Email input -->
                                    <div class="form-outline mb-2">
                                        <input v-model="email" placeholder="kandaka@example.com" type="email" id="input2" class="InputStyle form-control" />
                                        <p class="text-danger" v-if="MailCheck">No Empty Email Field</p>
                                    </div>
                                    <!-- Password input -->
                                    <div class="form-outline mb-2">
                                        <input v-model="password" placeholder="Password" type="password" id="input3" class="InputStyle form-control" />
                                        <p class="text-danger" v-if="PassCheck">No Empty Password Field</p>
                                    </div>
                                    <p class="my-4 text-center terms">
                                        By pressing “Create Account” you agree to our 
                                        <span class="TermSpan"> terms & conditions </span>
                                    </p>
                                    <!-- Submit button -->
                                    <button type="submit" class="btn BtnStyle btn-block mb-4 SubmitBtnStyle">
                                        Continue
                                    </button>
                                    <!-- flex column -->
                                    <div class="d-flex flex-row pb-4">
                                        <p class="SignUpTxt">Already have account?</p>
                                        <nuxt-link to="/login">
                                        <p class="SignUpTxt pe-2 text-muted">Log in</p>
                                        </nuxt-link>
                                    </div>        
                                    <!-- google login -->
                                    <div class="Devider"></div>
                                    <p class="DeviderTxt text-muted text-center">
                                        OR
                                    </p>
                                    <!-- google button -->
                                    <div class="text-center mt-5">
                                    <a class="btn GoogleBtn" role="button">
                                        <img 
                                        width="40px"
                                        class="pe-2"
                                        src="~assets/pictures/GoogleIcon.png" />
                                        Continue with Google
                                    </a>                   
                                    </div>        
                              </form>
                            <!-- end login form -->    
                        </div>
                        <div class="col-lg-6 col-md-6 LeftBkg text-center py-5">
                            <img src="~assets/pictures/SignUpRight.svg" class="w-100" alt="logo">
                        </div>
                    </div>
                </div>
            </div>
         </div>
    </section>    
    <!-- Mobile version -->
    <section class="d-md-none d-lg-none container MobileBkg pb-5">
         <div class="text-center py-2">
             <img src="~assets/pictures/logokandaka.png" class="MobileLogo" alt="logo">
        </div>
            <div class="py-4 bg-white px-3 FormMobileBkgStyle">
                            <p class="mt-3 LoginTitle text-center">Sign up</p>
                            <p class="text-center text-muted">Please register by completing the information below</p>
                            <!-- login form -->
                                <form @submit.prevent="FormSubmit" class="my-4">
                                       <!-- Name input -->
                                    <div class="form-outline mb-2">
                                        <input v-model="name" placeholder="Your Name" type="text" id="input1" class="InputStyle form-control" />
                                        <p class="text-danger" v-if="NameCheck">No Empty Name Field</p>
                                    </div>
                                    <!-- Email input -->
                                    <div class="form-outline mb-2">
                                        <input v-model="email" placeholder="kandaka@example.com" type="email" id="input2" class="InputStyle form-control" />
                                        <p class="text-danger" v-if="MailCheck">No Empty Email Field</p>
                                    </div>
                                    <!-- Password input -->
                                    <div class="form-outline mb-2">
                                        <input v-model="password" placeholder="Password" type="password" id="input3" class="InputStyle form-control" />
                                        <p class="text-danger" v-if="PassCheck">No Empty Password Field</p>
                                    </div>
                                    <p class="my-4 text-center terms">
                                        By pressing “Create Account” you agree to our 
                                        <span class="TermSpan"> terms & conditions </span>
                                    </p>
                                    <!-- Submit button -->
                                    <button type="submit" class="btn BtnStyle btn-block mb-4 SubmitBtnStyle">
                                        Create Account
                                    </button>
                                    <!-- flex column -->
                                    <div class="d-flex flex-row pb-4">
                                        <p class="SignUpTxt">Already have account?</p>
                                        <nuxt-link to="/login">
                                        <p class="SignUpTxt pe-2 text-muted">Log In</p>
                                        </nuxt-link>
                                    </div>        
                                    <!-- google login -->
                                    <div class="Devider"></div>
                                    <p class="DeviderTxt text-muted text-center">
                                        OR
                                    </p>
                                    <!-- google button -->
                                    <div class="text-center mt-5">
                                    <a class="btn GoogleBtn" role="button">
                                        <img 
                                        width="40px"
                                        class="pe-2"
                                        src="~assets/pictures/GoogleIcon.png" />
                                        Continue with Google
                                    </a>                   
                                    </div>        
                              </form>
                            <!-- end login form -->    
                        </div>
    </section>
  </div>
</section>    
</template>

<script>
export default {
   data() {
        return {
            name: '',
            email: '',
            password: '',
            MailCheck: false,
            PassCheck: false,
            NameCheck: false
        }
   },

    methods: {
        FormSubmit() {
            if(!this.name) {
                this.NameCheck = true
            } else {
                this.NameCheck = false
            }
            if(!this.email) {
                this.MailCheck = true;
            } else {
                this.MailCheck = false;
            }
            if(!this.password) {
                this.PassCheck = true;
            } else {
                this.PassCheck = false;
            }
            if(this.email && this.password) {
                alert('FormSubmited');
            }
        },
    }
    
}
</script>


<style scoped>
.TermSpan {
   color: #e99d7b;
   text-decoration: underline;
}

.terms {
    font-family: 'Open Sans';
    font-weight: normal;
    line-height: 1.25;
    color: #8a9ead;
    font-size: 10pt;
}

.FormMobileBkgStyle {
    border-radius: 15px;
}

.MobileLogo {
    width: 70%;
}

::placeholder {
  color: #6e7689;
  opacity: 1 !important;
}

.MobileBkg {
    background-color: #055452;
    min-height: 100vh;
}

.GoogleBtn {
    font-family: 'Open Sans';
    font-weight: 600;
    font-size: 12pt;
    text-transform: capitalize;
    box-shadow: none;
    border: solid 1px #c9c6d1;
    padding: 15px;
    width: 100%;
}

@media screen and (max-width: 320px) {
    .GoogleBtn {
        font-size: 8pt;
    }    
}


.Devider {
    border-bottom: 1px solid #e6e6e6;
}

.DeviderTxt {
    font-family: 'Open Sans';
    font-size: 16px;
    background-color: #ffff;
    width: 50px;
    margin: -13px auto;
}

.SignUpTxt {
  font-family: 'Open Sans';
  font-weight: 600;  
  color: #231942;
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

.background {
    background-image: url("~assets/pictures/LoginBkgPic.jpeg");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    height: 100vh;
}

.LeftBkg {
    background-color: #ffff;
}

.LoginTitle {
    font-family: 'Open Sans';
    font-weight: 600;
    font-size: 18pt;
}

.BtnStyle {
    font-family: 'Open Sans';
    font-weight: 600;
    font-size: 12pt;
    background-color: #055452 !important;
    color: #fff !important;
}

.SubmitBtnStyle {
    font-family: 'Open Sans';
    font-weight: 600;
    font-size: 12pt;
    padding: 18px;
    border-radius: 8px;
    text-transform: capitalize;
}

@media screen and (max-width: 320px) {
    .SubmitBtnStyle {
        font-size: 10pt;
        padding: 15px;
    }    
}

</style>