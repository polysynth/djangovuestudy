webpackHotUpdate("main",{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./assets/js/components/Demo.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./assets/js/components/Demo.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.js\");\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);\n//\n//\n//\n//\n//\n//\nconst util = __webpack_require__(/*! util */ \"./node_modules/util/util.js\");\n\nconsole.log(\"object received: \", undefined);\n\nconst component = vue__WEBPACK_IMPORTED_MODULE_0___default.a.component('name', {\n  data: function (payload) {\n    console.log(\"PAYLOAD OBJECT: \", payload.$attrs.prop);\n    const fromDjango = payload.$attrs.prop;\n\n    for (var prop in fromDjango) {\n      if (fromDjango.hasOwnProperty(prop)) {\n        console.log(`KEY: ${prop},   VAL: ${fromDjango[prop]}`);\n        var newP = document.createElement(\"p\");\n        var payLoadText = document.createTextNode(fromDjango[prop]);\n        newP.appendChild(payLoadText);\n        var currentDiv = document.getElementById(\"foo\");\n        document.body.insertBefore(newP, currentDiv);\n      }\n    }\n\n    return {\n      data: payload\n    };\n  }\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (component);\n\n//# sourceURL=webpack:///./assets/js/components/Demo.vue?./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options");

/***/ })

})