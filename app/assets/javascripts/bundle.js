/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!**************************************!*\
  !*** ./app/assets/frontend/main.jsx ***!
  \**************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _greet = __webpack_require__(/*! ./greet */ 1);
	
	var _greet2 = _interopRequireDefault(_greet);
	
	var _TweetBox = __webpack_require__(/*! ./components/TweetBox */ 2);
	
	var _TweetBox2 = _interopRequireDefault(_TweetBox);
	
	var _TweetsList = __webpack_require__(/*! ./components/TweetsList */ 3);
	
	var _TweetsList2 = _interopRequireDefault(_TweetsList);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // This file uses jsx syntax
	
	
	var mockTweets = [{ id: 1, name: 'Paul Brescia', body: 'My #FirstTweet' }, { id: 2, name: 'Paul Brescia', body: 'My #SecondTweet' }, { id: 3, name: 'Paul Brescia', body: 'My #ThirdTweet' }];
	
	var Main = function (_React$Component) {
	  _inherits(Main, _React$Component);
	
	  function Main() {
	    _classCallCheck(this, Main);
	
	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Main).apply(this, arguments));
	  }
	
	  _createClass(Main, [{
	    key: "render",
	    value: function render() {
	      return React.createElement(
	        "div",
	        { className: "container" },
	        React.createElement(_TweetBox2.default, null),
	        React.createElement(_TweetsList2.default, { tweets: mockTweets })
	      );
	    }
	  }]);
	
	  return Main;
	}(React.Component);
	
	var documentReady = function documentReady() {
	  React.render(React.createElement(Main, null), document.getElementById('react'));
	};
	
	$(documentReady);

/***/ },
/* 1 */
/*!***************************************!*\
  !*** ./app/assets/frontend/greet.jsx ***!
  \***************************************/
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	// This file uses jsx syntax
	
	var Greet = function (_React$Component) {
	  _inherits(Greet, _React$Component);
	
	  function Greet() {
	    _classCallCheck(this, Greet);
	
	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Greet).apply(this, arguments));
	  }
	
	  _createClass(Greet, [{
	    key: "render",
	    value: function render() {
	      return React.createElement(
	        "h2",
	        null,
	        "Hello Greet"
	      );
	    }
	  }]);
	
	  return Greet;
	}(React.Component);
	
	exports.default = Greet;

/***/ },
/* 2 */
/*!*****************************************************!*\
  !*** ./app/assets/frontend/components/TweetBox.jsx ***!
  \*****************************************************/
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var TweetBox = function (_React$Component) {
	  _inherits(TweetBox, _React$Component);
	
	  function TweetBox() {
	    _classCallCheck(this, TweetBox);
	
	    return _possibleConstructorReturn(this, Object.getPrototypeOf(TweetBox).apply(this, arguments));
	  }
	
	  _createClass(TweetBox, [{
	    key: "render",
	    value: function render() {
	      return React.createElement(
	        "div",
	        { className: "row" },
	        React.createElement(
	          "form",
	          null,
	          React.createElement(
	            "div",
	            { className: "input-field" },
	            React.createElement("textarea", { className: "materialize-textarea" }),
	            React.createElement(
	              "label",
	              null,
	              "What's happening?"
	            ),
	            React.createElement(
	              "button",
	              { className: "btn right" },
	              "Tweet"
	            )
	          )
	        )
	      );
	    }
	  }]);
	
	  return TweetBox;
	}(React.Component);
	
	exports.default = TweetBox;

/***/ },
/* 3 */
/*!*******************************************************!*\
  !*** ./app/assets/frontend/components/TweetsList.jsx ***!
  \*******************************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Tweet = __webpack_require__(/*! ./Tweet */ 4);
	
	var _Tweet2 = _interopRequireDefault(_Tweet);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var TweetsList = function (_React$Component) {
	  _inherits(TweetsList, _React$Component);
	
	  function TweetsList() {
	    _classCallCheck(this, TweetsList);
	
	    return _possibleConstructorReturn(this, Object.getPrototypeOf(TweetsList).apply(this, arguments));
	  }
	
	  _createClass(TweetsList, [{
	    key: "render",
	    value: function render() {
	      var tweets = this.props.tweets.map(function (tweet) {
	        return React.createElement(_Tweet2.default, _extends({ key: tweet.id }, tweet));
	      });
	      return React.createElement(
	        "div",
	        null,
	        React.createElement(
	          "ul",
	          { className: "collection" },
	          tweets
	        )
	      );
	    }
	  }]);
	
	  return TweetsList;
	}(React.Component);
	
	exports.default = TweetsList;

/***/ },
/* 4 */
/*!**************************************************!*\
  !*** ./app/assets/frontend/components/Tweet.jsx ***!
  \**************************************************/
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Tweets = function (_React$Component) {
	  _inherits(Tweets, _React$Component);
	
	  function Tweets() {
	    _classCallCheck(this, Tweets);
	
	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Tweets).apply(this, arguments));
	  }
	
	  _createClass(Tweets, [{
	    key: "render",
	    value: function render() {
	      return React.createElement(
	        "li",
	        { className: "collection-item avatar" },
	        React.createElement(
	          "i",
	          { className: "material-icons circle" },
	          "person_pin"
	        ),
	        React.createElement(
	          "span",
	          { className: "title" },
	          this.props.name
	        ),
	        React.createElement(
	          "p",
	          null,
	          this.props.body
	        )
	      );
	    }
	  }]);
	
	  return Tweets;
	}(React.Component);
	
	exports.default = Tweets;

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map