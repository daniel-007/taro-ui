(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{"22":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.default=void 0;var o=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),r=_interopRequireDefault(n(1)),a=_interopRequireDefault(n(2)),u=n(60),i=n(66),l=_interopRequireDefault(n(62));function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}n(248);var c=function(e){function CountDownPage(){var e,t,n;!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,CountDownPage);for(var o=arguments.length,r=Array(o),a=0;a<o;a++)r[a]=arguments[a];return t=n=_possibleConstructorReturn(this,(e=CountDownPage.__proto__||Object.getPrototypeOf(CountDownPage)).call.apply(e,[this].concat(r))),n.config={"navigationBarTitleText":"Taro UI"},_possibleConstructorReturn(n,t)}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(CountDownPage,r.default.Component),o(CountDownPage,[{"key":"onTimeUp","value":function onTimeUp(){r.default.showToast({"title":"时间到","icon":"success","duration":2e3})}},{"key":"render","value":function render(){return a.default.createElement(u.View,{"className":"page"},a.default.createElement(l.default,{"title":"CountDown 倒计时"}),a.default.createElement(u.View,{"className":"doc-body"},a.default.createElement(u.View,{"className":"panel"},a.default.createElement(u.View,{"className":"panel__title"},"一般用法"),a.default.createElement(u.View,{"className":"panel__content"},a.default.createElement(i.AtCountdown,{"minutes":1,"seconds":10})),a.default.createElement(u.View,{"className":"panel__content"},a.default.createElement(i.AtCountdown,{"isShowDay":!0,"hours":1,"minutes":1,"seconds":10}))),a.default.createElement(u.View,{"className":"panel"},a.default.createElement(u.View,{"className":"panel__title"},"自定义格式化"),a.default.createElement(u.View,{"className":"panel__content"},a.default.createElement(i.AtCountdown,{"format":{"hours":":","minutes":":","seconds":""},"minutes":1,"seconds":10}))),a.default.createElement(u.View,{"className":"panel"},a.default.createElement(u.View,{"className":"panel__title"},"卡片式"),a.default.createElement(u.View,{"className":"panel__content"},a.default.createElement(i.AtCountdown,{"isCard":!0,"minutes":1,"seconds":10})),a.default.createElement(u.View,{"className":"panel__content"},a.default.createElement(i.AtCountdown,{"isCard":!0,"isShowDay":!0,"day":1,"minutes":1,"seconds":10,"format":{"day":"天","hours":":","minutes":":","seconds":""}}))),a.default.createElement(u.View,{"className":"panel"},a.default.createElement(u.View,{"className":"panel__title"},"自定义倒计时回调事件"),a.default.createElement(u.View,{"className":"panel__content"},a.default.createElement(i.AtCountdown,{"format":{"hours":":","minutes":":","seconds":""},"seconds":10,"onTimeUp":this.onTimeUp.bind(this)})))))}},{"key":"componentDidMount","value":function componentDidMount(){}},{"key":"componentDidShow","value":function componentDidShow(){}}]),CountDownPage}();t.default=c},"248":function(e,t,n){},"62":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.default=void 0;var o=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),r=n(1),a=(_interopRequireDefault(r),_interopRequireDefault(n(2))),u=_interopRequireDefault(n(61)),i=n(60);function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}n(63);var l=function(e){function DocsHeader(){return function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,DocsHeader),function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(DocsHeader.__proto__||Object.getPrototypeOf(DocsHeader)).apply(this,arguments))}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(DocsHeader,r.Component),o(DocsHeader,[{"key":"render","value":function render(){var e=this.props.title;return a.default.createElement(i.View,{"className":"doc-header"},a.default.createElement(i.View,{"className":"doc-header__title"},e))}}]),DocsHeader}();t.default=l,l.defaultProps={"title":"标题"},l.propTypes={"title":u.default.string}},"63":function(e,t,n){}}]);