webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/Layout/Header/index.js":
/*!*******************************************!*\
  !*** ./components/Layout/Header/index.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_drawer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/drawer */ "./node_modules/antd/lib/drawer/index.js");
/* harmony import */ var antd_lib_drawer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_drawer__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/button */ "./node_modules/antd/lib/button/index.js");
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.browser.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style */ "./components/Layout/Header/style.js");
/* harmony import */ var _LeftMenu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./LeftMenu */ "./components/Layout/Header/LeftMenu.js");
/* harmony import */ var _RightMenu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./RightMenu */ "./components/Layout/Header/RightMenu.js");




function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







class Header extends react__WEBPACK_IMPORTED_MODULE_3__["Component"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      visible: false
    });

    _defineProperty(this, "showDrawer", () => {
      this.setState({
        visible: true
      });
    });

    _defineProperty(this, "onClose", () => {
      this.setState({
        visible: false
      });
    });
  }

  render() {
    const {
      visible
    } = this.state;
    return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("div", {
      css: _style__WEBPACK_IMPORTED_MODULE_5__["headerCls"]
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("nav", {
      className: "menuBar"
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("div", {
      className: "logo"
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
      href: "/"
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("img", {
      src: "http://clipart-library.com/images_k/coca-cola-logo-transparent-background/coca-cola-logo-transparent-background-6.png",
      alt: "logo",
      height: "500",
      width: "150"
    }))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("div", {
      className: "menuCon"
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("div", {
      className: "leftMenu"
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_LeftMenu__WEBPACK_IMPORTED_MODULE_6__["default"], null)), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("div", {
      className: "rightMenu"
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_RightMenu__WEBPACK_IMPORTED_MODULE_7__["default"], null)), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default.a, {
      className: "barsMenu",
      onClick: this.showDrawer
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("span", {
      className: "barsBtn"
    })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(antd_lib_drawer__WEBPACK_IMPORTED_MODULE_0___default.a, {
      css: _style__WEBPACK_IMPORTED_MODULE_5__["drawerCls"],
      placement: "right",
      closable: false,
      onClose: this.onClose,
      visible: visible
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_LeftMenu__WEBPACK_IMPORTED_MODULE_6__["default"], null), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_RightMenu__WEBPACK_IMPORTED_MODULE_7__["default"], {
      mode: "vertical",
      onClose: this.onClose
    })))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ })

})
//# sourceMappingURL=index.js.5281717b8cc251dfa05b.hot-update.js.map