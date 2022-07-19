
exports.ids = [11];
exports.modules = {

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./components/SavedBox.vue?vue&type=template&id=2818a01e&scoped=true&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', {
    staticClass: "col col-xl-6 g-3"
  }, [_vm._ssrNode("<div class=\"border box\" data-v-2818a01e>", "</div>", [_vm._ssrNode("<div class=\"box-body\" data-v-2818a01e>", "</div>", [_vm._ssrNode("<img id=\"thumb\"" + _vm._ssrAttr("src", _vm.thumb) + " alt data-v-2818a01e> "), _vm._ssrNode("<div data-v-2818a01e>", "</div>", [_vm._ssrNode("<h5 data-v-2818a01e>" + _vm._ssrEscape(_vm._s(_vm.title)) + "</h5> <p data-v-2818a01e>" + _vm._ssrEscape("$" + _vm._s(_vm.price)) + "</p> "), _c('product-score', {
    attrs: {
      "score": _vm.score
    }
  })], 2)], 2), _vm._ssrNode(" <div class=\"box-buttons\" data-v-2818a01e><button class=\"button-add\" data-v-2818a01e>Add To Cart</button> <button class=\"button-remove\" data-v-2818a01e><img" + _vm._ssrAttr("src", __webpack_require__(95)) + " width=\"12\" alt data-v-2818a01e>\n        Delete\n      </button></div>")], 2)]);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./components/SavedBox.vue?vue&type=template&id=2818a01e&scoped=true&

// EXTERNAL MODULE: ./components/ProductScore.vue + 4 modules
var ProductScore = __webpack_require__(78);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/SavedBox.vue?vue&type=script&lang=js&

/* harmony default export */ var SavedBoxvue_type_script_lang_js_ = ({
  name: "SavedBox",
  components: {
    ProductScore: ProductScore["a" /* default */]
  },
  props: ['thumb', 'title', 'price', 'score']
});
// CONCATENATED MODULE: ./components/SavedBox.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_SavedBoxvue_type_script_lang_js_ = (SavedBoxvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/SavedBox.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(96)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_SavedBoxvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "2818a01e",
  "3e7066fe"
  
)

/* harmony default export */ var SavedBox = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./pages/saved/index.vue?vue&type=template&id=aa51d51e&scoped=true&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', {
    staticClass: "px-4 px-sm-0"
  }, [_c('Portal', {
    attrs: {
      "to": "under-header"
    }
  }, [_c('div', {
    staticClass: "container-full d-lg-none py-2 subNavPage px-4"
  }, [_c('div', {
    staticClass: "row w-100 justify-content-between g-0"
  }, [_c('nuxt-link', {
    staticClass: "col d-flex align-items-center gap-3 text-dark text-decoration-none",
    attrs: {
      "to": "/profile"
    }
  }, [_c('img', {
    attrs: {
      "src": __webpack_require__(76),
      "alt": ""
    }
  }), _vm._v(" "), _c('span', [_vm._v("Back")])]), _vm._v(" "), _c('div', {
    staticClass: "col-auto g-0"
  })], 1)])]), _vm._ssrNode(" <h3 class=\"pb-2\" data-v-aa51d51e>My Saved</h3> "), _vm._ssrNode("<div class=\"container g-0 mb-10\" data-v-aa51d51e>", "</div>", [_vm._ssrNode("<div class=\"row row-cols-1 row-xl-cols-2\" data-v-aa51d51e>", "</div>", _vm._l(_vm.data, function (item) {
    return _c('SavedBox', {
      key: item.id,
      attrs: {
        "title": item.title,
        "thumb": item.thumb,
        "price": item.price,
        "score": item.score
      }
    });
  }), 1)])], 2);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/saved/index.vue?vue&type=template&id=aa51d51e&scoped=true&

// EXTERNAL MODULE: ./components/ProductScore.vue + 4 modules
var ProductScore = __webpack_require__(78);

// EXTERNAL MODULE: ./components/SavedBox.vue + 4 modules
var SavedBox = __webpack_require__(117);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/saved/index.vue?vue&type=script&lang=js&


/* harmony default export */ var savedvue_type_script_lang_js_ = ({
  name: "index",
  components: {
    SavedBox: SavedBox["a" /* default */],
    ProductScore: ProductScore["a" /* default */]
  },
  layout: "profile",

  data() {
    return {
      data: [{
        id: 1,
        thumb: "/images/img1.jpg",
        title: "Sella body butter",
        score: 3,
        price: 350
      }, {
        id: 2,
        thumb: "/images/img1.jpg",
        title: "Sella body butter",
        score: 3,
        price: 350
      }, {
        id: 3,
        thumb: "/images/img1.jpg",
        title: "Sella body butter",
        score: 2,
        price: 350
      }, {
        id: 4,
        thumb: "/images/img1.jpg",
        title: "Sella body butter",
        score: 1,
        price: 350
      }, {
        id: 5,
        thumb: "/images/img1.jpg",
        title: "Sella body butter",
        score: 4,
        price: 350
      }]
    };
  }

});
// CONCATENATED MODULE: ./pages/saved/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_savedvue_type_script_lang_js_ = (savedvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/saved/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_savedvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "aa51d51e",
  "1d25fd00"
  
)

/* harmony default export */ var saved = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 76:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI3LjE3MyIgaGVpZ2h0PSIxNC4wMDEiIHZpZXdCb3g9IjAgMCA3LjE3MyAxNC4wMDEiPgogICAgPHBhdGggZD0ibS44NzggNC44ODEgNC41OS00LjU5YTEgMSAwIDEgMSAxLjQxIDEuNDJsLTQuNiA0LjU4YTEgMSAwIDAgMCAwIDEuNDJsNC42IDQuNThhMSAxIDAgMCAxLTEuNDEgMS40MmwtNC41OS00LjU5YTMgMyAwIDAgMSAwLTQuMjR6Ii8+Cjwvc3ZnPgo="

/***/ }),

/***/ 78:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./components/ProductScore.vue?vue&type=template&id=322b786e&scoped=true&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', {
    staticClass: "d-flex align-items-center gap-1"
  }, [_vm._ssrNode(_vm._ssrList(_vm.score, function (item, i) {
    return "<img" + _vm._ssrAttr("src", __webpack_require__(81)) + " alt width=\"18\" data-v-322b786e>";
  }) + " " + _vm._ssrList(5 - _vm.score, function (item, j) {
    return "<img" + _vm._ssrAttr("src", __webpack_require__(82)) + " alt width=\"18\" data-v-322b786e>";
  }))]);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./components/ProductScore.vue?vue&type=template&id=322b786e&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ProductScore.vue?vue&type=script&lang=js&
/* harmony default export */ var ProductScorevue_type_script_lang_js_ = ({
  name: "ProductScore",
  props: ['score']
});
// CONCATENATED MODULE: ./components/ProductScore.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_ProductScorevue_type_script_lang_js_ = (ProductScorevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/ProductScore.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_ProductScorevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "322b786e",
  "7f2ea79d"
  
)

/* harmony default export */ var ProductScore = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 81:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMS42OTIiIGhlaWdodD0iMjAuNzQ1IiB2aWV3Qm94PSIwIDAgMjEuNjkyIDIwLjc0NSI+CiAgICA8cGF0aCBkYXRhLW5hbWU9InN0YXIgKDEpIiBkPSJtMTEuODk0IDEuNyAyLjQ0NiA0Ljk1NWExLjE2OCAxLjE2OCAwIDAgMCAuODguNjM5bDUuNDcxLjhhMS4xNjggMS4xNjggMCAwIDEgLjY0NyAxLjk5MkwxNy4zOCAxMy45NGExLjE2OCAxLjE2OCAwIDAgMC0uMzM2IDEuMDM0bC45MzQgNS40NDlhMS4xNjggMS4xNjggMCAwIDEtMS42OTUgMS4yMzJsLTQuODkzLTIuNTczYTEuMTY5IDEuMTY5IDAgMCAwLTEuMDg3IDBMNS40MSAyMS42NTVhMS4xNjggMS4xNjggMCAwIDEtMS42OTUtMS4yMzJsLjkzNC01LjQ0OWExLjE2OCAxLjE2OCAwIDAgMC0uMzM2LTEuMDM0TC4zNTUgMTAuMDgyQTEuMTY4IDEuMTY4IDAgMCAxIDEgOC4wODlsNS40NzEtLjhhMS4xNjggMS4xNjggMCAwIDAgLjg4LS42MzlMOS44IDEuN2ExLjE2OCAxLjE2OCAwIDAgMSAyLjA5NCAweiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLS4wMDEgLTEuMDQ3KSIgc3R5bGU9ImZpbGw6I2VkOGExOSIvPgo8L3N2Zz4K"

/***/ }),

/***/ 82:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMi43MTkiIGhlaWdodD0iMjEuNzY0IiB2aWV3Qm94PSIwIDAgMjIuNzE5IDIxLjc2NCI+CiAgICA8cGF0aCBkYXRhLW5hbWU9InN0YXIgKDEpIiBkPSJtMTEuODk0IDEuNyAyLjQ0NiA0Ljk1NWExLjE2OCAxLjE2OCAwIDAgMCAuODguNjM5bDUuNDcxLjhhMS4xNjggMS4xNjggMCAwIDEgLjY0NyAxLjk5MkwxNy4zOCAxMy45NGExLjE2OCAxLjE2OCAwIDAgMC0uMzM2IDEuMDM0bC45MzQgNS40NDlhMS4xNjggMS4xNjggMCAwIDEtMS42OTUgMS4yMzJsLTQuODkzLTIuNTczYTEuMTY5IDEuMTY5IDAgMCAwLTEuMDg3IDBMNS40MSAyMS42NTVhMS4xNjggMS4xNjggMCAwIDEtMS42OTUtMS4yMzJsLjkzNC01LjQ0OWExLjE2OCAxLjE2OCAwIDAgMC0uMzM2LTEuMDM0TC4zNTUgMTAuMDgyQTEuMTY4IDEuMTY4IDAgMCAxIDEgOC4wODlsNS40NzEtLjhhMS4xNjggMS4xNjggMCAwIDAgLjg4LS42MzlMOS44IDEuN2ExLjE2OCAxLjE2OCAwIDAgMSAyLjA5NCAweiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLjUxMyAtLjU0NykiIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiNlZDhhMTkiLz4KPC9zdmc+Cg=="

/***/ }),

/***/ 83:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(97);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("6d98ccb5", content, true, context)
};

/***/ }),

/***/ 95:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNi4wNzkiIGhlaWdodD0iMTkuMjk1IiB2aWV3Qm94PSIwIDAgMTYuMDc5IDE5LjI5NSI+CiAgICA8cGF0aCBkYXRhLW5hbWU9IlBhdGggNDcxODEiIGQ9Ik0xNy4yNzUgMy4yMTZoLTIuNDkyQTQuMDI3IDQuMDI3IDAgMCAwIDEwLjg0NCAwSDkuMjM2QTQuMDI3IDQuMDI3IDAgMCAwIDUuMyAzLjIxNkgyLjhhLjguOCAwIDEgMCAwIDEuNjA4aC44djEwLjQ1MWE0LjAyNSA0LjAyNSAwIDAgMCA0LjAyIDQuMDJoNC44MjRhNC4wMjUgNC4wMjUgMCAwIDAgNC4wMi00LjAyVjQuODI0aC44YS44LjggMCAwIDAgMC0xLjYwOHpNOS4yMzYgMS42MDhoMS42MDhhMi40MTcgMi40MTcgMCAwIDEgMi4yNzQgMS42MDhINi45NjFhMi40MTcgMi40MTcgMCAwIDEgMi4yNzUtMS42MDh6bTUuNjI4IDEzLjY2N2EyLjQxMiAyLjQxMiAwIDAgMS0yLjQxMiAyLjQxMkg3LjYyOGEyLjQxMiAyLjQxMiAwIDAgMS0yLjQxMi0yLjQxMlY0LjgyNGg5LjY0OHoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yKSIgc3R5bGU9ImZpbGw6I2Q2NDU1MyIvPgo8L3N2Zz4K"

/***/ }),

/***/ 96:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SavedBox_vue_vue_type_style_index_0_id_2818a01e_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(83);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SavedBox_vue_vue_type_style_index_0_id_2818a01e_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SavedBox_vue_vue_type_style_index_0_id_2818a01e_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SavedBox_vue_vue_type_style_index_0_id_2818a01e_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SavedBox_vue_vue_type_style_index_0_id_2818a01e_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 97:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".box[data-v-2818a01e]{display:flex;flex-direction:column;padding:10px;align-items:center;justify-content:space-between;border-radius:8px;box-shadow:0 1px 3px 0 rgba(0,0,0,.09)}.box-body[data-v-2818a01e]{display:flex;width:100%;padding-bottom:10px}.box-body #thumb[data-v-2818a01e]{width:100px;object-fit:contain;margin-right:8px;border-radius:8px;overflow:hidden}.box-body p[data-v-2818a01e]{font-size:20px;margin-bottom:5px}.box-buttons[data-v-2818a01e]{display:flex;gap:4px;width:100%}.button-add[data-v-2818a01e]{flex:2;font-size:14px;color:#364958;background-color:#e99d7b;border:none;border-radius:6px;padding:4px 20px;transition:all .3s ease-in-out}.button-add[data-v-2818a01e]:hover{background-color:#e8926a}.button-remove[data-v-2818a01e]{flex:1;font-size:14px;display:flex;align-items:center;justify-content:center;gap:4px;color:#d64553;background-color:#fff;border:1px solid #c6c6c6;border-radius:6px;padding:4px 20px;transition:all .3s ease-in-out}.button-remove[data-v-2818a01e]:hover{background-color:#eee}@media (min-width:576px){.box[data-v-2818a01e]{flex-direction:row}.box-body[data-v-2818a01e]{padding-bottom:0}.box-buttons[data-v-2818a01e]{flex-direction:column;width:40%}}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

};;
//# sourceMappingURL=index.js.map