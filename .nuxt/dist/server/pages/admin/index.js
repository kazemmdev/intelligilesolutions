
exports.ids = [2];
exports.modules = {

/***/ 122:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(153);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("98f65392", content, true, context)
};

/***/ }),

/***/ 143:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICAgIDxwYXRoIGRhdGEtbmFtZT0iUGF0aCAyNzgwNSIgZD0iTTcgMEg0YTQgNCAwIDAgMC00IDR2M2E0IDQgMCAwIDAgNCA0aDNhNCA0IDAgMCAwIDQtNFY0YTQgNCAwIDAgMC00LTR6bTIgN2EyIDIgMCAwIDEtMiAySDRhMiAyIDAgMCAxLTItMlY0YTIgMiAwIDAgMSAyLTJoM2EyIDIgMCAwIDEgMiAyeiIgc3R5bGU9ImZpbGw6I2ZmZiIvPgogICAgPHBhdGggZGF0YS1uYW1lPSJQYXRoIDI3ODA2IiBkPSJNMjAgMGgtM2E0IDQgMCAwIDAtNCA0djNhNCA0IDAgMCAwIDQgNGgzYTQgNCAwIDAgMCA0LTRWNGE0IDQgMCAwIDAtNC00em0yIDdhMiAyIDAgMCAxLTIgMmgtM2EyIDIgMCAwIDEtMi0yVjRhMiAyIDAgMCAxIDItMmgzYTIgMiAwIDAgMSAyIDJ6IiBzdHlsZT0iZmlsbDojZmZmIi8+CiAgICA8cGF0aCBkYXRhLW5hbWU9IlBhdGggMjc4MDciIGQ9Ik03IDEzSDRhNCA0IDAgMCAwLTQgNHYzYTQgNCAwIDAgMCA0IDRoM2E0IDQgMCAwIDAgNC00di0zYTQgNCAwIDAgMC00LTR6bTIgN2EyIDIgMCAwIDEtMiAySDRhMiAyIDAgMCAxLTItMnYtM2EyIDIgMCAwIDEgMi0yaDNhMiAyIDAgMCAxIDIgMnoiIHN0eWxlPSJmaWxsOiNmZmYiLz4KICAgIDxwYXRoIGRhdGEtbmFtZT0iUGF0aCAyNzgwOCIgZD0iTTIwIDEzaC0zYTQgNCAwIDAgMC00IDR2M2E0IDQgMCAwIDAgNCA0aDNhNCA0IDAgMCAwIDQtNHYtM2E0IDQgMCAwIDAtNC00em0yIDdhMiAyIDAgMCAxLTIgMmgtM2EyIDIgMCAwIDEtMi0ydi0zYTIgMiAwIDAgMSAyLTJoM2EyIDIgMCAwIDEgMiAyeiIgc3R5bGU9ImZpbGw6I2ZmZiIvPgo8L3N2Zz4K"

/***/ }),

/***/ 144:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNC4wMDEiIGhlaWdodD0iMjEuOTc3IiB2aWV3Qm94PSIwIDAgMjQuMDAxIDIxLjk3NyI+CiAgICA8cGF0aCBkPSJNNCA2YTIuOTgyIDIuOTgyIDAgMCAxLTIuMTIyLS44NzlMLjMzNCAzLjc0N2ExIDEgMCAwIDEgMS4zMzItMS40OTRsMS41ODUgMS40MTRhMSAxIDAgMCAwIDEuNDU2LjA0TDguMzExLjI3NmExIDEgMCAwIDEgMS4zNzggMS40NDhMNi4xIDUuMTM4QTIuOTY0IDIuOTY0IDAgMCAxIDQgNnptMjAtMmExIDEgMCAwIDAtMS0xSDEzYTEgMSAwIDAgMCAwIDJoMTBhMSAxIDAgMCAwIDEtMXpNNi4xIDEzLjEzOGwzLjU4OS0zLjQxNGExIDEgMCAxIDAtMS4zNzgtMS40NDhsLTMuNiAzLjQzMWExLjAyMyAxLjAyMyAwIDAgMS0xLjQxNCAwbC0xLjU5LTEuNTg1YTEgMSAwIDEgMC0xLjQxNCAxLjQxNGwxLjU4NSAxLjU4NWEzIDMgMCAwIDAgNC4yMjYuMDE3ek0yNCAxMmExIDEgMCAwIDAtMS0xSDEzYTEgMSAwIDAgMCAwIDJoMTBhMSAxIDAgMCAwIDEtMXpNNi4xIDIxLjEzOGwzLjU4NS0zLjQxNGExIDEgMCAxIDAtMS4zNzgtMS40NDhsLTMuNiAzLjQzMWExIDEgMCAwIDEtMS40NTYtLjA0bC0xLjU4NS0xLjQxNGExIDEgMCAxIDAtMS4zMzIgMS40OTRsMS41NDQgMS4zNzRhMyAzIDAgMCAwIDQuMjI2LjAxN3pNMjQgMjBhMSAxIDAgMCAwLTEtMUgxM2ExIDEgMCAwIDAgMCAyaDEwYTEgMSAwIDAgMCAxLTF6IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSguMDAxIC0uMDIzKSIgc3R5bGU9ImZpbGw6I2ZmZiIvPgo8L3N2Zz4K"

/***/ }),

/***/ 145:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMy45NzEiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMy45NzEgMjAiPgogICAgPHBhdGggZD0iTTIxIDEyLjQyNFYxMWE5IDkgMCAwIDAtMTggMHYxLjQyNEE1IDUgMCAwIDAgNSAyMmEyIDIgMCAwIDAgMi0ydi02YTIgMiAwIDAgMC0yLTJ2LTFhNyA3IDAgMCAxIDE0IDB2MWEyIDIgMCAwIDAtMiAydjZoLTNhMSAxIDAgMCAwIDAgMmg1YTUgNSAwIDAgMCAyLTkuNTc2ek01IDIwYTMgMyAwIDAgMSAwLTZ6bTE0IDB2LTZhMyAzIDAgMCAxIDAgNnoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0uMDE0IC0yKSIgc3R5bGU9ImZpbGw6I2ZmZiIvPgo8L3N2Zz4K"

/***/ }),

/***/ 146:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICAgIDxwYXRoIGQ9Ik0yNCAxMGEuOTg4Ljk4OCAwIDAgMC0uMDI0LS4yMTdsLTEuMy01Ljg2OEE0Ljk2OCA0Ljk2OCAwIDAgMCAxNy43OTIgMEg2LjIwOGE0Ljk2OCA0Ljk2OCAwIDAgMC00Ljg4IDMuOTE1TC4wMjQgOS43ODNBLjk4OC45ODggMCAwIDAgMCAxMHYxYTMuOTg0IDMuOTg0IDAgMCAwIDEgMi42NDNWMTlhNS4wMDYgNS4wMDYgMCAwIDAgNSA1aDEyYTUuMDA2IDUuMDA2IDAgMCAwIDUtNXYtNS4zNTdBMy45ODQgMy45ODQgMCAwIDAgMjQgMTF6bS0yMiAuMTA5IDEuMjgtNS43NkEyLjk4MiAyLjk4MiAwIDAgMSA2LjIwOCAySDd2M2ExIDEgMCAwIDAgMiAwVjJoNnYzYTEgMSAwIDAgMCAyIDBWMmguNzkyYTIuOTgyIDIuOTgyIDAgMCAxIDIuOTI4IDIuMzQ5bDEuMjggNS43NlYxMWEyIDIgMCAwIDEtMiAyaC0xYTIgMiAwIDAgMS0yLTIgMSAxIDAgMCAwLTIgMCAyIDIgMCAwIDEtMiAyaC0yYTIgMiAwIDAgMS0yLTIgMSAxIDAgMCAwLTIgMCAyIDIgMCAwIDEtMiAySDRhMiAyIDAgMCAxLTItMnpNMTggMjJINmEzIDMgMCAwIDEtMy0zdi00LjEyN0EzLjk3OCAzLjk3OCAwIDAgMCA0IDE1aDFhMy45OSAzLjk5IDAgMCAwIDMtMS4zNTdBMy45OSAzLjk5IDAgMCAwIDExIDE1aDJhMy45OSAzLjk5IDAgMCAwIDMtMS4zNTdBMy45OSAzLjk5IDAgMCAwIDE5IDE1aDFhMy45NzggMy45NzggMCAwIDAgMS0uMTI3VjE5YTMgMyAwIDAgMS0zIDN6IiBzdHlsZT0iZmlsbDojZmZmIi8+Cjwvc3ZnPgo="

/***/ }),

/***/ 147:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/subadmin.58ef83c.svg";

/***/ }),

/***/ 148:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNC4wMDEiIHZpZXdCb3g9IjAgMCAyNCAyNC4wMDEiPgogICAgPHBhdGggZD0iTTI0IDE2djVhMyAzIDAgMCAxLTMgM2gtNWE4IDggMCAwIDEtNi45Mi00IDEwLjk2OCAxMC45NjggMCAwIDAgMi4yNDItLjI0OEE1Ljk4OCA1Ljk4OCAwIDAgMCAxNiAyMmg1YTEgMSAwIDAgMCAxLTF2LTVhNS45ODggNS45ODggMCAwIDAtMi4yNTItNC42NzhBMTAuOTY4IDEwLjk2OCAwIDAgMCAyMCA5LjA4IDggOCAwIDAgMSAyNCAxNnptLTYuMDIzLTYuMzQ5QTkgOSAwIDAgMCA4LjM0OS4wMjMgOS40MTggOS40MTggMCAwIDAgMCA5LjI5NHY1LjA0QzAgMTYuODY2IDEuNTA3IDE4IDMgMThoNS43YTkuNDE5IDkuNDE5IDAgMCAwIDkuMjc3LTguMzQ5em0tNC4wMjctNS42YTcuMDE4IDcuMDE4IDAgMCAxIDIuMDMyIDUuNDZBNy4zNjQgNy4zNjQgMCAwIDEgOC43IDE2SDNjLS45MjggMC0xLTEuMjc1LTEtMS42NjZ2LTUuMDRhNy4zNjIgNy4zNjIgMCAwIDEgNi40OS03LjI3NlE4LjczOSAyIDguOTg4IDJhNy4wMTIgNy4wMTIgMCAwIDEgNC45NjIgMi4wNTF6IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIC4wMDEpIiBzdHlsZT0iZmlsbDojZmZmIi8+Cjwvc3ZnPgo="

/***/ }),

/***/ 149:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMi40NzkiIGhlaWdodD0iMjIuNDc5IiB2aWV3Qm94PSIwIDAgMjIuNDc5IDIyLjQ3OSI+CiAgICA8cGF0aCBkYXRhLW5hbWU9IlBhdGggMjc4MTciIGQ9Ik0xNy44IDBoLTQuNjg3YS45MzcuOTM3IDAgMSAwIDAgMS44NzNIMTcuOGEyLjc2NCAyLjc2NCAwIDAgMSAxLjIuMjgxTC4yNzQgMjAuODhBLjkzNy45MzcgMCAxIDAgMS42IDIyLjJMMjAuMzI1IDMuNDhhMi43NjQgMi43NjQgMCAwIDEgLjI4MSAxLjJ2NC42ODZhLjkzNy45MzcgMCAxIDAgMS44NzMgMFY0LjY4M0E0LjY4OSA0LjY4OSAwIDAgMCAxNy44IDB6IiBzdHlsZT0iZmlsbDojZmZmIi8+CiAgICA8cGF0aCBkYXRhLW5hbWU9IlBhdGggMjc4MTgiIGQ9Ik01Ljc0NyA5LjQ5M0EzLjc0NyAzLjc0NyAwIDEgMCAyIDUuNzQ3YTMuNzQ3IDMuNzQ3IDAgMCAwIDMuNzQ3IDMuNzQ2em0wLTUuNjJhMS44NzMgMS44NzMgMCAxIDEtMS44NzQgMS44NzQgMS44NzMgMS44NzMgMCAwIDEgMS44NzQtMS44NzR6IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtLjEyNyAtLjEyNykiIHN0eWxlPSJmaWxsOiNmZmYiLz4KICAgIDxwYXRoIGRhdGEtbmFtZT0iUGF0aCAyNzgxOSIgZD0iTTE3Ljc0NyAxNGEzLjc0NyAzLjc0NyAwIDEgMCAzLjc0NyAzLjc0N0EzLjc0NyAzLjc0NyAwIDAgMCAxNy43NDcgMTR6bTAgNS42MmExLjg3MyAxLjg3MyAwIDEgMSAxLjg3My0xLjg3MyAxLjg3MyAxLjg3MyAwIDAgMS0xLjg3MyAxLjg3M3oiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0uODg3IC0uODg3KSIgc3R5bGU9ImZpbGw6I2ZmZiIvPgo8L3N2Zz4K"

/***/ }),

/***/ 150:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICAgIDxwYXRoIGRhdGEtbmFtZT0iUGF0aCAyNzgwOSIgZD0iTTIwIDBINGE0IDQgMCAwIDAtNCA0djEyYTQgNCAwIDAgMCA0IDRoMi45bDQuNDUxIDMuNzYzYTEgMSAwIDAgMCAxLjI5MiAwTDE3LjEgMjBIMjBhNCA0IDAgMCAwIDQtNFY0YTQgNCAwIDAgMC00LTR6bTIgMTZhMiAyIDAgMCAxLTIgMmgtMi45YTIgMiAwIDAgMC0xLjI5MS40NzNMMTIgMjEuNjlsLTMuODA3LTMuMjE3QTIgMiAwIDAgMCA2LjkgMThINGEyIDIgMCAwIDEtMi0yVjRhMiAyIDAgMCAxIDItMmgxNmEyIDIgMCAwIDEgMiAyeiIgc3R5bGU9ImZpbGw6I2ZmZiIvPgogICAgPHBhdGggZGF0YS1uYW1lPSJQYXRoIDI3ODEwIiBkPSJNNyA3aDVhMSAxIDAgMCAwIDAtMkg3YTEgMSAwIDAgMCAwIDJ6IiBzdHlsZT0iZmlsbDojZmZmIi8+CiAgICA8cGF0aCBkYXRhLW5hbWU9IlBhdGggMjc4MTEiIGQ9Ik0xNyA5SDdhMSAxIDAgMCAwIDAgMmgxMGExIDEgMCAwIDAgMC0yeiIgc3R5bGU9ImZpbGw6I2ZmZiIvPgogICAgPHBhdGggZGF0YS1uYW1lPSJQYXRoIDI3ODEyIiBkPSJNMTcgMTNIN2ExIDEgMCAwIDAgMCAyaDEwYTEgMSAwIDAgMCAwLTJ6IiBzdHlsZT0iZmlsbDojZmZmIi8+Cjwvc3ZnPgo="

/***/ }),

/***/ 151:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMS41MDMiIGhlaWdodD0iMjEuNzM0IiB2aWV3Qm94PSIwIDAgMjEuNTAzIDIxLjczNCI+CiAgICA8cGF0aCBkYXRhLW5hbWU9IlBhdGggMTEzMSIgZD0iTTEwLjM5MyAxMy41ODRhLjkwNi45MDYgMCAwIDAtLjkwNi45MDZ2Mi43MTdhMi43MTcgMi43MTcgMCAwIDEtMi43MTcgMi43MTZINC41MjhhMi43MTcgMi43MTcgMCAwIDEtMi43MTctMi43MTdWNC41MjhhMi43MTcgMi43MTcgMCAwIDEgMi43MTctMi43MTdINi43N2EyLjcxNyAyLjcxNyAwIDAgMSAyLjcxNyAyLjcxN3YyLjcxN2EuOTA2LjkwNiAwIDEgMCAxLjgxMSAwVjQuNTI4QTQuNTMzIDQuNTMzIDAgMCAwIDYuNzcgMEg0LjUyOEE0LjUzMyA0LjUzMyAwIDAgMCAwIDQuNTI4djEyLjY3OGE0LjUzMyA0LjUzMyAwIDAgMCA0LjUyOCA0LjUyOEg2Ljc3YTQuNTMzIDQuNTMzIDAgMCAwIDQuNTMtNC41MjhWMTQuNDlhLjkwNi45MDYgMCAwIDAtLjkwNy0uOTA2eiIgc3R5bGU9ImZpbGw6I2ZmZiIvPgogICAgPHBhdGggZGF0YS1uYW1lPSJQYXRoIDExMzIiIGQ9Im0yMS4xOCA5LjQxOC00LjE1My00LjE1M2EuOTA2LjkwNiAwIDEgMC0xLjI4MSAxLjI4MWwzLjg2IDMuODYtMTMuNy4wMjdhLjkwNi45MDYgMCAxIDAgMCAxLjgxMWwxMy43NTQtLjAyOC0zLjkxNSAzLjkxNmEuOTA2LjkwNiAwIDEgMCAxLjI4MSAxLjI4MWw0LjE1My00LjE1M2EyLjcxNyAyLjcxNyAwIDAgMCAuMDAxLTMuODQyeiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLS40NzIgLS40NzIpIiBzdHlsZT0iZmlsbDojZmZmIi8+Cjwvc3ZnPgo="

/***/ }),

/***/ 152:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_ce5b4a06_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(122);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_ce5b4a06_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_ce5b4a06_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_ce5b4a06_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_ce5b4a06_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 153:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(8);
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(154);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".IconDist[data-v-ce5b4a06]{margin-top:35px}.ItemsColor[data-v-ce5b4a06]{color:#fff}.SideBkg[data-v-ce5b4a06]{background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");background-repeat:no-repeat;background-position:50%;background-size:cover;min-height:100vh;border-top-right-radius:30px;border-bottom-right-radius:30px}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 154:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/AdminSidebar.1433b1f.png";

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./pages/admin/index.vue?vue&type=template&id=ce5b4a06&scoped=true&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('section', [_vm._ssrNode("<div class=\"container-full\" data-v-ce5b4a06><div class=\"row gx-0\" data-v-ce5b4a06><div class=\"col-md-2 col-lg-2 SideBkg text-center\" data-v-ce5b4a06><img" + _vm._ssrAttr("src", __webpack_require__(37)) + " alt=\"KandakaLogo\" class=\"w-50\" data-v-ce5b4a06> <div class=\"d-flex align-items-center justify-content-start px-4 pt-4\" data-v-ce5b4a06><img" + _vm._ssrAttr("src", __webpack_require__(143)) + " alt=\"DashBoardIcon\" class=\"DashBoardIcon\" data-v-ce5b4a06> <p class=\"m-0 ItemsColor px-3\" data-v-ce5b4a06>Dashboards</p></div> <div class=\"d-flex align-items-center justify-content-start px-4 IconDist\" data-v-ce5b4a06><img" + _vm._ssrAttr("src", __webpack_require__(144)) + " alt=\"DashBoardIcon\" class=\"DashBoardIcon\" data-v-ce5b4a06> <p class=\"m-0 ItemsColor px-3\" data-v-ce5b4a06>Orders</p></div> <div class=\"d-flex align-items-center justify-content-start px-4 IconDist\" data-v-ce5b4a06><img" + _vm._ssrAttr("src", __webpack_require__(145)) + " alt=\"DashBoardIcon\" class=\"DashBoardIcon\" data-v-ce5b4a06> <p class=\"m-0 ItemsColor px-3\" data-v-ce5b4a06>Tickets</p></div> <div class=\"d-flex align-items-center justify-content-start px-4 IconDist\" data-v-ce5b4a06><img" + _vm._ssrAttr("src", __webpack_require__(146)) + " alt=\"DashBoardIcon\" class=\"DashBoardIcon\" data-v-ce5b4a06> <p class=\"m-0 ItemsColor px-3\" data-v-ce5b4a06>Products</p></div> <div class=\"d-flex align-items-center justify-content-start px-4 IconDist\" data-v-ce5b4a06><img" + _vm._ssrAttr("src", __webpack_require__(147)) + " alt=\"DashBoardIcon\" class=\"DashBoardIcon\" data-v-ce5b4a06> <p class=\"m-0 ItemsColor px-3\" data-v-ce5b4a06>Sub Admin</p></div> <div class=\"d-flex align-items-center justify-content-start px-4 IconDist\" data-v-ce5b4a06><img" + _vm._ssrAttr("src", __webpack_require__(148)) + " alt=\"DashBoardIcon\" class=\"DashBoardIcon\" data-v-ce5b4a06> <p class=\"m-0 ItemsColor px-3\" data-v-ce5b4a06>Contact</p></div> <div class=\"d-flex align-items-center justify-content-start px-4 IconDist\" data-v-ce5b4a06><img" + _vm._ssrAttr("src", __webpack_require__(149)) + " alt=\"DashBoardIcon\" class=\"DashBoardIcon\" data-v-ce5b4a06> <p class=\"m-0 ItemsColor px-3\" data-v-ce5b4a06>Discounts</p></div> <div class=\"d-flex align-items-center justify-content-start px-4 IconDist\" data-v-ce5b4a06><img" + _vm._ssrAttr("src", __webpack_require__(150)) + " alt=\"DashBoardIcon\" class=\"DashBoardIcon\" data-v-ce5b4a06> <p class=\"m-0 ItemsColor px-3\" data-v-ce5b4a06>Comments</p></div> <div class=\"d-flex align-items-center justify-content-start px-4 IconDist\" data-v-ce5b4a06><img" + _vm._ssrAttr("src", __webpack_require__(151)) + " alt=\"DashBoardIcon\" class=\"DashBoardIcon\" data-v-ce5b4a06> <p class=\"m-0 ItemsColor px-3\" data-v-ce5b4a06>Exit</p></div></div> <div class=\"col-md-10 col-lg-10 px-5\" data-v-ce5b4a06><div class=\"container-full bg-white SearchStyle\" data-v-ce5b4a06></div></div></div></div>")]);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/admin/index.vue?vue&type=template&id=ce5b4a06&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/admin/index.vue?vue&type=script&lang=js&
/* harmony default export */ var adminvue_type_script_lang_js_ = ({});
// CONCATENATED MODULE: ./pages/admin/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_adminvue_type_script_lang_js_ = (adminvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/admin/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(152)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_adminvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "ce5b4a06",
  "03279070"
  
)

/* harmony default export */ var admin = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map