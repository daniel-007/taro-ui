(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"258":function(e,t,n){},"31":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.default=void 0;var r=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),o=n(1),a=_interopRequireDefault(o),i=_interopRequireDefault(n(2)),l=n(60),u=n(66),c=_interopRequireDefault(n(62));function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}n(258);var s=function(e){function ToastPage(){var e,t,n;!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,ToastPage);for(var r=arguments.length,o=Array(r),a=0;a<r;a++)o[a]=arguments[a];return t=n=_possibleConstructorReturn(this,(e=ToastPage.__proto__||Object.getPrototypeOf(ToastPage)).call.apply(e,[this].concat(o))),n.config={"navigationBarTitleText":"Taro UI"},_possibleConstructorReturn(n,t)}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(ToastPage,o.Component),r(ToastPage,[{"key":"handleClick","value":function handleClick(e){a.default.atMessage({"message":"消息通知","type":e})}},{"key":"render","value":function render(){return i.default.createElement(l.View,{"className":"page toast-page"},i.default.createElement(c.default,{"title":"Message 消息通知"}),i.default.createElement(l.View,{"className":"doc-body"},i.default.createElement(l.View,{"className":"panel"},i.default.createElement(l.View,{"className":"panel__title"},"基本案例"),i.default.createElement(l.View,{"className":"panel__content"},i.default.createElement(l.View,{"className":"example-item"},i.default.createElement(u.AtButton,{"onClick":this.handleClick.bind(this,"")},"普通消息")),i.default.createElement(l.View,{"className":"example-item"},i.default.createElement(u.AtButton,{"onClick":this.handleClick.bind(this,"success")},"成功消息")),i.default.createElement(l.View,{"className":"example-item"},i.default.createElement(u.AtButton,{"onClick":this.handleClick.bind(this,"error")},"错误消息")),i.default.createElement(l.View,{"className":"example-item"},i.default.createElement(u.AtButton,{"onClick":this.handleClick.bind(this,"warning")},"警告消息")),i.default.createElement(l.View,{"className":"example-item"},i.default.createElement(u.AtButton,{"onClick":this.handleClick.bind(this,"info")},"提示消息"))))),i.default.createElement(u.AtMessage,null))}},{"key":"componentDidMount","value":function componentDidMount(){}},{"key":"componentDidShow","value":function componentDidShow(){}}]),ToastPage}();t.default=s},"62":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.default=void 0;var r=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),o=n(1),a=(_interopRequireDefault(o),_interopRequireDefault(n(2))),i=_interopRequireDefault(n(61)),l=n(60);function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}n(63);var u=function(e){function DocsHeader(){return function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,DocsHeader),function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(DocsHeader.__proto__||Object.getPrototypeOf(DocsHeader)).apply(this,arguments))}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(DocsHeader,o.Component),r(DocsHeader,[{"key":"render","value":function render(){var e=this.props.title;return a.default.createElement(l.View,{"className":"doc-header"},a.default.createElement(l.View,{"className":"doc-header__title"},e))}}]),DocsHeader}();t.default=u,u.defaultProps={"title":"标题"},u.propTypes={"title":i.default.string}},"63":function(e,t,n){}}]);