
exports.ids = [4];
exports.modules = {

/***/ 124:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(145);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("07a551ce", content, true, context)
};

/***/ }),

/***/ 144:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_9b65b028_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(124);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_9b65b028_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_9b65b028_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_9b65b028_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_9b65b028_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 145:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(8);
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(146);
var ___CSS_LOADER_URL_IMPORT_1___ = __webpack_require__(41);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "select[data-v-9b65b028]{-webkit-appearance:none;-moz-appearance:none!important;background:transparent!important;background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ")!important;background-repeat:no-repeat!important;background-position-x:96%!important;background-position-y:20px!important}.GmailIcon[data-v-9b65b028]{padding:8px 10px;border-radius:50%;background-color:#e99d7b;color:#055452}.SocialIcons[data-v-9b65b028]{color:#e99d7b;font-size:14pt}.MapTxt[data-v-9b65b028]{color:#055452;font-family:Open Sans;font-size:14pt;font-weight:800}label[data-v-9b65b028]{color:#055452;padding-top:10px;padding-bottom:5px}[data-v-9b65b028]::placeholder{color:#6e7689;opacity:1!important}.BtnStyle[data-v-9b65b028]{font-family:Open Sans;font-weight:600;font-size:10pt;background-color:#e99d7b!important;color:#055452!important;padding:12px;border-radius:30px;width:30%}@media screen and (max-width:768px){.BtnStyle[data-v-9b65b028]{width:100%}}.InputStyle[data-v-9b65b028]{padding:13px;font-family:Open Sans;font-weight:600;font-size:14px;border:1.5px solid #c9c6d1;border-radius:10px;color:#6e7689}.CtCTitle[data-v-9b65b028]{color:#055452;font-family:Open Sans;font-size:20pt;font-weight:800;line-height:1.47}.CtCTitleDesc[data-v-9b65b028]{color:#616161;font-family:Open Sans;font-size:12pt}.PageTitle[data-v-9b65b028]{color:#231942;font-family:Open Sans;font-weight:600;font-size:20pt}.PageBkg[data-v-9b65b028]{background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");background-size:cover;background-position:top;background-repeat:no-repeat}.BroadHome[data-v-9b65b028],.BroadSub[data-v-9b65b028]{color:#055452;font-family:Open Sans;font-weight:600;line-height:1.25;font-size:14pt}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 146:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNS42MDUiIGhlaWdodD0iOC45ODciIHZpZXdCb3g9IjAgMCAxNS42MDUgOC45ODciPg0KICA8cGF0aCBpZD0iZmktcnItY2FyZXQtZG93biIgZD0iTTYuNTk0LDlIMTkuODRhMS4xODUsMS4xODUsMCwwLDEsLjgyOSwyLjAyNmwtNi42MTEsNi42MTFhMS4xODUsMS4xODUsMCwwLDEtMS42ODIsMEw1Ljc2NSwxMS4wMjZBMS4xODUsMS4xODUsMCwwLDEsNi41OTQsOVoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC01LjQxNCAtOSkiLz4NCjwvc3ZnPg0K"

/***/ }),

/***/ 192:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./pages/contact/index.vue?vue&type=template&id=9b65b028&scoped=true&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', [_c('TheHeader'), _vm._ssrNode(" "), _vm._ssrNode("<section class=\"PageBkg\" data-v-9b65b028>", "</section>", [_vm._ssrNode("<div class=\"container px-5 px-md-4 px-lg-4 pt-4\" data-v-9b65b028>", "</div>", [_vm._ssrNode("<div class=\"d-flex flex-row\" data-v-9b65b028>", "</div>", [_c('nuxt-link', {
    attrs: {
      "to": "/"
    }
  }, [_c('p', {
    staticClass: "BroadHome"
  }, [_vm._v("Home")])]), _vm._ssrNode(" <p class=\"px-2\" data-v-9b65b028>/</p> <p class=\"BroadSub\" data-v-9b65b028>Contact</p>")], 2)]), _vm._ssrNode(" <div class=\"container px-5 px-md-4 px-lg-4\" data-v-9b65b028><p class=\"PageTitle\" data-v-9b65b028>Contact</p></div> <div class=\"container px-5 px-md-4 px-lg-4\" data-v-9b65b028><div class=\"row gx-5\" data-v-9b65b028><div class=\"col-md-6 col-lg-6 pt-4\" data-v-9b65b028><p class=\"CtCTitle\" data-v-9b65b028>Have any Questions?</p> <p class=\"CtCTitleDesc\" data-v-9b65b028>\n          Please help us to provide better services to customers by sending\n          your questions, criticisms and suggestions.\n        </p> <form class=\"my-4\" data-v-9b65b028><div class=\"form-outline mb-2\" data-v-9b65b028><label for=\"input1\" data-v-9b65b028>Name</label> <input placeholder=\"Your Name\" type=\"text\" id=\"input1\" class=\"InputStyle form-control\" data-v-9b65b028></div> <div class=\"form-outline mb-2\" data-v-9b65b028><label for=\"input2\" data-v-9b65b028>Email</label> <input placeholder=\"kandaka@example.com\" type=\"email\" id=\"input2\" class=\"InputStyle form-control\" data-v-9b65b028></div> <div class=\"form-outline mb-2\" data-v-9b65b028><label for=\"input3\" data-v-9b65b028>Subject</label> <select name=\"cars\" id=\"cars\" class=\"InputStyle form-control\" data-v-9b65b028><option value=\"volvo\" data-v-9b65b028>Suggestions</option> <option value=\"saab\" data-v-9b65b028>Criticism</option> <option value=\"opel\" data-v-9b65b028>Help</option> <option value=\"audi\" data-v-9b65b028>Question</option></select></div> <div class=\"form-outline mb-2\" data-v-9b65b028><label for=\"input3\" data-v-9b65b028>Message</label> <textarea placeholder=\"your mesage\" id=\"w3review\" name=\"w3review\" rows=\"4\" cols=\"50\" class=\"InputStyle form-control\" data-v-9b65b028></textarea></div> <button type=\"submit\" class=\"btn BtnStyle btn-block my-4 SubmitBtnStyle\" data-v-9b65b028>\n            Send a Message\n          </button></form></div> <div class=\"col-md-6 col-lg-6\" data-v-9b65b028><iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d79041.6241066565!2d-1.317627087803903!3d51.75039548720793!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48713380adc41faf%3A0xc820dba8cb547402!2sOxford%2C%20UK!5e0!3m2!1sen!2s!4v1657945325020!5m2!1sen!2s\" allowfullscreen=\"allowfullscreen\" loading=\"lazy\" referrerpolicy=\"no-referrer-when-downgrade\" style=\"border:0; width: 100%; height: 50%;\" data-v-9b65b028></iframe> <div class=\"container pt-3\" data-v-9b65b028><div class=\"row\" data-v-9b65b028><div class=\"col-lg-6 col-md-6\" data-v-9b65b028></div> <div class=\"col-lg-6 col-md-6 ps-5\" data-v-9b65b028></div></div></div> <div class=\"container-full\" data-v-9b65b028><div class=\"row gx-5\" data-v-9b65b028><div class=\"col-lg-6\" data-v-9b65b028><p class=\"MapTxt\" data-v-9b65b028>Contact Information</p> <div class=\"d-flex align-items-center\" data-v-9b65b028><i class=\"GmailIcon bi bi-envelope-fill\" data-v-9b65b028></i> <p class=\"FooterSubMenu ps-lg-2 px-lg-2 px-2 pt-2 pt-lg-2\" data-v-9b65b028>kandakacollections@gmail.com</p></div></div> <div class=\"col-lg-6 ps-lg-5 pt-lg-0 pt-md-4\" data-v-9b65b028><p class=\"pt-2 pt-md-0 pt-lg-0 MapTxt pb-md-2 pb-lg-2\" data-v-9b65b028>Social Media</p> <i class=\"SocialIcons bi bi-facebook px-2\" data-v-9b65b028></i> <i class=\"SocialIcons bi bi-tiktok px-2\" data-v-9b65b028></i> <i class=\"SocialIcons bi bi-youtube px-2\" data-v-9b65b028></i> <i class=\"SocialIcons bi bi-whatsapp px-2\" data-v-9b65b028></i> <i class=\"SocialIcons bi bi-instagram px-2\" data-v-9b65b028></i></div></div></div></div></div></div>")], 2), _vm._ssrNode(" "), _c('TheFooter')], 2);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/contact/index.vue?vue&type=template&id=9b65b028&scoped=true&

// EXTERNAL MODULE: ./components/Navigation/TheSubpageHeader.vue + 4 modules
var TheSubpageHeader = __webpack_require__(89);

// EXTERNAL MODULE: ./components/TheFooter.vue + 4 modules
var TheFooter = __webpack_require__(13);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/contact/index.vue?vue&type=script&lang=js&


/* harmony default export */ var contactvue_type_script_lang_js_ = ({
  components: {
    TheHeader: TheSubpageHeader["a" /* default */],
    TheFooter: TheFooter["a" /* default */]
  }
});
// CONCATENATED MODULE: ./pages/contact/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_contactvue_type_script_lang_js_ = (contactvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/contact/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(144)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_contactvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "9b65b028",
  "0efa904e"
  
)

/* harmony default export */ var contact = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 76:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(79);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("4d69cffb", content, true, context)
};

/***/ }),

/***/ 78:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TheSubpageHeader_vue_vue_type_style_index_0_id_2b653379_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TheSubpageHeader_vue_vue_type_style_index_0_id_2b653379_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TheSubpageHeader_vue_vue_type_style_index_0_id_2b653379_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TheSubpageHeader_vue_vue_type_style_index_0_id_2b653379_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TheSubpageHeader_vue_vue_type_style_index_0_id_2b653379_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 79:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "nav a[data-v-2b653379]{color:#055452!important;font-family:Playfair Display!important;font-weight:700;font-size:18px}nav a[data-v-2b653379]:hover{color:#e99d7b!important}.logo[data-v-2b653379]{border-radius:50%;width:97px}@media screen and (max-width:320px){.logo[data-v-2b653379]{display:none}}@media (max-width:994px){.logo[data-v-2b653379]{border-radius:50%;width:70px}.SearchIcon[data-v-2b653379]{border-radius:50%}.SearchIcon[data-v-2b653379],.ShopIcon[data-v-2b653379]{width:40px;background-color:#e99d7b;padding:9px}.ShopIcon[data-v-2b653379]{border-radius:40%}}[data-v-2b653379]::placeholder{font-family:Open Sans,sans-serif;font-size:14px;opacity:1!important}input[data-v-2b653379]:focus{width:120%;border:1px solid #e99d7b!important}input[data-v-2b653379]:focus::placeholder{color:#e99d7b;transition:.3s}.MobileMenuBack[data-v-2b653379]{box-shadow:0 1.5px 3px 0 rgba(0,0,0,.09)}.MobileMenuIcon[data-v-2b653379]{margin-top:30px;cursor:pointer}.searchbtn[data-v-2b653379]{margin-left:-36px!important;transition:.5}.FocusedBtn[data-v-2b653379],.searchbtn[data-v-2b653379]{background-color:#e99d7b!important;margin-top:0;height:37px;width:37px;z-index:1;box-shadow:none}.FocusedBtn[data-v-2b653379]{margin-left:5px!important;animation-name:move;animation-duration:.5s}.searchicon[data-v-2b653379]{color:#055452;position:relative;right:2px}.searchicon[data-v-2b653379]:hover{color:#fff;transition:.3s}.shopicon[data-v-2b653379]{color:#055452;position:relative;right:1px}.shopicon[data-v-2b653379]:hover{color:#fff;transition:.3s}.inputstyle[data-v-2b653379]{border:.5px solid #707070!important;border-radius:30px!important}.loginbtn[data-v-2b653379]{background-color:#e99d7b!important;height:45px;border-radius:30px!important;box-shadow:none;margin-top:-4px}.loginicon[data-v-2b653379]{color:#055452;font-size:15pt}.loginicon[data-v-2b653379]:hover{color:#fff;transition:.3s}.signintext[data-v-2b653379]{font-weight:600;font-size:16px;color:#055452;font-family:Open Sans;font-style:normal;padding:8px}.signintext[data-v-2b653379]:hover{color:#fff;transition:.3s}.shopbtn[data-v-2b653379]{background-color:#e99d7b!important;border-radius:50%!important;margin-right:10px;height:40px;width:40px;box-shadow:none}@media (max-width:1200px){.SearchForm[data-v-2b653379]{display:none}}.SubPageMenuBkg[data-v-2b653379]{box-shadow:0 1.5px 3px 0 rgba(0,0,0,.09)}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 89:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./components/Navigation/TheSubpageHeader.vue?vue&type=template&id=2b653379&scoped=true&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('header', {
    staticClass: "SubPageMenuBkg position-relative mb-4"
  }, [_vm._ssrNode("<div class=\"container py-4 d-none d-lg-block\" data-v-2b653379>", "</div>", [_vm._ssrNode("<div class=\"row justify-content-between\" data-v-2b653379>", "</div>", [_vm._ssrNode("<div class=\"col-lg-1\" data-v-2b653379><img" + _vm._ssrAttr("src", __webpack_require__(12)) + " alt=\"logo\" class=\"logo\" data-v-2b653379></div> "), _vm._ssrNode("<div class=\"col-auto col-lg-5 text-start pe-5\" data-v-2b653379>", "</div>", [_vm._ssrNode("<nav class=\"navbar shadow-0 navbar-expand-lg py-4 pe-2\" data-v-2b653379>", "</nav>", [_vm._ssrNode("<div id=\"navmenu\" class=\"collapse navbar-collapse\" data-v-2b653379>", "</div>", [_vm._ssrNode("<ul class=\"navbar-nav\" data-v-2b653379>", "</ul>", [_c('nuxt-link', {
    staticClass: "nav-link",
    attrs: {
      "to": "/"
    }
  }, [_vm._v("\n                Home\n              ")]), _vm._ssrNode(" "), _vm._ssrNode("<li class=\"nav-item px-3\" data-v-2b653379>", "</li>", [_c('nuxt-link', {
    staticClass: "nav-link",
    attrs: {
      "to": "/about"
    }
  }, [_vm._v("\n                  About\n                ")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li class=\"nav-item px-3\" data-v-2b653379>", "</li>", [_c('nuxt-link', {
    staticClass: "nav-link",
    attrs: {
      "to": "/products"
    }
  }, [_vm._v("\n                Products\n              ")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li class=\"nav-item px-3\" data-v-2b653379>", "</li>", [_c('nuxt-link', {
    staticClass: "nav-link",
    attrs: {
      "to": "/contact"
    }
  }, [_vm._v("\n                  Contact\n                ")])], 1)], 2)])])]), _vm._ssrNode(" <div class=\"col-lg-3 text-end py-4 SearchForm\" data-v-2b653379><div class=\"d-flex flex-row\" data-v-2b653379><div class=\"form-outline\" data-v-2b653379><input placeholder=\"Search...\" type=\"search\" id=\"form1\" class=\"form-control inputstyle\" data-v-2b653379></div> <button type=\"button\"" + _vm._ssrClass("btn searchbtn rounded-circle", _vm.OnFocusCss) + " data-v-2b653379><i class=\"bi bi-search searchicon\" data-v-2b653379></i></button></div></div> "), _vm._ssrNode("<div class=\"col-lg-3 text-start py-4 d-flex flex-row flex-row-reverse\" data-v-2b653379>", "</div>", [_c('TheNavMenu'), _vm._ssrNode(" <button type=\"button\" class=\"btn shopbtn\" data-v-2b653379><i class=\"bi bi-bag shopicon\" data-v-2b653379></i></button>")], 2)], 2)]), _vm._ssrNode(" <div class=\"container-full d-lg-none pt-3 px-4\" data-v-2b653379><div class=\"row g-0 border-bottom pb-3\" data-v-2b653379><div class=\"col-4\" data-v-2b653379><div class=\"d-flex flex-row align-items-center mt-3\" data-v-2b653379><img" + _vm._ssrAttr("src", __webpack_require__(38)) + " alt=\"search\" class=\"SearchIcon\" data-v-2b653379> <div class=\"px-1\" data-v-2b653379></div> <img" + _vm._ssrAttr("src", __webpack_require__(39)) + " alt=\"search\" class=\"ShopIcon\" data-v-2b653379></div></div> <div class=\"col-4 text-center\" data-v-2b653379><img" + _vm._ssrAttr("src", __webpack_require__(12)) + " alt=\"logo\" class=\"logo\" data-v-2b653379></div> <div class=\"col-4 text-start\" data-v-2b653379><img" + _vm._ssrAttr("src", __webpack_require__(40)) + " alt=\"menu\" class=\"MobileMenuIcon\" data-v-2b653379></div></div></div> "), _vm.MobileMenu ? _c('TheMobileMenuModal', {
    attrs: {
      "menu_status": _vm.MobileMenu
    },
    on: {
      "SendModalStatus": _vm.DisableMobileMenu
    }
  }) : _vm._e(), _vm._ssrNode(" "), _vm._t("default")], 2);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./components/Navigation/TheSubpageHeader.vue?vue&type=template&id=2b653379&scoped=true&

// EXTERNAL MODULE: ./components/Navigation/TheMobileMenuModal.vue + 4 modules
var TheMobileMenuModal = __webpack_require__(15);

// EXTERNAL MODULE: ./components/Navigation/TheNavMenu.vue + 9 modules
var TheNavMenu = __webpack_require__(14);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Navigation/TheSubpageHeader.vue?vue&type=script&lang=js&


/* harmony default export */ var TheSubpageHeadervue_type_script_lang_js_ = ({
  name: "TheHeader",
  components: {
    TheNavMenu: TheNavMenu["a" /* default */],
    TheMobileMenuModal: TheMobileMenuModal["a" /* default */]
  },
  props: ["menu_data"],

  data() {
    return {
      Focused: false,
      MobileMenu: false
    };
  },

  methods: {
    OnFocus() {
      this.Focused = true;
    },

    OnBlur() {
      this.Focused = false;
    },

    EnableMobileMenu() {
      this.MobileMenu = true;
    },

    DisableMobileMenu() {
      this.MobileMenu = false;
    }

  },
  computed: {
    OnFocusCss() {
      return this.Focused ? 'FocusedBtn' : 'searchbtn';
    }

  }
});
// CONCATENATED MODULE: ./components/Navigation/TheSubpageHeader.vue?vue&type=script&lang=js&
 /* harmony default export */ var Navigation_TheSubpageHeadervue_type_script_lang_js_ = (TheSubpageHeadervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/Navigation/TheSubpageHeader.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(78)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Navigation_TheSubpageHeadervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "2b653379",
  "a6841488"
  
)

/* harmony default export */ var TheSubpageHeader = __webpack_exports__["a"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map