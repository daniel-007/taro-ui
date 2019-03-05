(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{"283":function(e,t,a){},"54":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.default=void 0;var n=function(){function defineProperties(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(e,t,a){return t&&defineProperties(e.prototype,t),a&&defineProperties(e,a),e}}(),l=_interopRequireDefault(a(1)),r=_interopRequireDefault(a(2)),o=a(60),i=a(66),c=_interopRequireDefault(a(62));function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}a(283);var u=function(e){function PageSlider(){var e,t,a;!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,PageSlider);for(var n=arguments.length,l=Array(n),r=0;r<n;r++)l[r]=arguments[r];return t=a=_possibleConstructorReturn(this,(e=PageSlider.__proto__||Object.getPrototypeOf(PageSlider)).call.apply(e,[this].concat(l))),a.config={"navigationBarTitleText":"Taro UI"},_possibleConstructorReturn(a,t)}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(PageSlider,l.default.Component),n(PageSlider,[{"key":"render","value":function render(){return r.default.createElement(o.View,{"className":"page"},r.default.createElement(c.default,{"title":"Slider 滑动条"}),r.default.createElement(o.View,{"className":"doc-body"},r.default.createElement(o.View,{"className":"panel"},r.default.createElement(o.View,{"className":"panel__title"},"基础用法"),r.default.createElement(o.View,{"className":"panel__content"},r.default.createElement(o.View,{"className":"example-item"},r.default.createElement(o.View,{"className":"example-item__desc"},"step=1"),r.default.createElement(i.AtSlider,{"step":1,"value":50})))),r.default.createElement(o.View,{"className":"panel"},r.default.createElement(o.View,{"className":"panel__title"},"显示当前 Value"),r.default.createElement(o.View,{"className":"panel__content"},r.default.createElement(o.View,{"className":"example-item"},r.default.createElement(o.View,{"className":"example-item__desc"},"step=1"),r.default.createElement(i.AtSlider,{"step":1,"value":50,"showValue":!0})))),r.default.createElement(o.View,{"className":"panel"},r.default.createElement(o.View,{"className":"panel__title"},"设置最大/最小值"),r.default.createElement(o.View,{"className":"panel__content"},r.default.createElement(o.View,{"className":"example-item"},r.default.createElement(o.View,{"className":"example-item__desc"},"step=1, min=50, max=200"),r.default.createElement(i.AtSlider,{"step":1,"value":100,"min":50,"max":200,"showValue":!0})))),r.default.createElement(o.View,{"className":"panel"},r.default.createElement(o.View,{"className":"panel__title"},"自定义样式"),r.default.createElement(o.View,{"className":"panel__content"},r.default.createElement(o.View,{"className":"example-item"},r.default.createElement(o.View,{"className":"example-item__desc"},"step=1, blockSize=24"),r.default.createElement(i.AtSlider,{"step":1,"value":50,"activeColor":"#4285F4","backgroundColor":"#BDBDBD","blockColor":"#4285F4","blockSize":24})))),r.default.createElement(o.View,{"className":"panel"},r.default.createElement(o.View,{"className":"panel__title"},"禁用状态"),r.default.createElement(o.View,{"className":"panel__content"},r.default.createElement(o.View,{"className":"example-item"},r.default.createElement(o.View,{"className":"example-item__desc"},"step=1, blockSize=24"),r.default.createElement(i.AtSlider,{"step":1,"value":50,"showValue":!0,"disabled":!0}))))))}},{"key":"componentDidMount","value":function componentDidMount(){}},{"key":"componentDidShow","value":function componentDidShow(){}}]),PageSlider}();t.default=u},"62":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.default=void 0;var n=function(){function defineProperties(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(e,t,a){return t&&defineProperties(e.prototype,t),a&&defineProperties(e,a),e}}(),l=a(1),r=(_interopRequireDefault(l),_interopRequireDefault(a(2))),o=_interopRequireDefault(a(61)),i=a(60);function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}a(63);var c=function(e){function DocsHeader(){return function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,DocsHeader),function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(DocsHeader.__proto__||Object.getPrototypeOf(DocsHeader)).apply(this,arguments))}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(DocsHeader,l.Component),n(DocsHeader,[{"key":"render","value":function render(){var e=this.props.title;return r.default.createElement(i.View,{"className":"doc-header"},r.default.createElement(i.View,{"className":"doc-header__title"},e))}}]),DocsHeader}();t.default=c,c.defaultProps={"title":"标题"},c.propTypes={"title":o.default.string}},"63":function(e,t,a){}}]);