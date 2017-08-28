webpackJsonp([5],{

/***/ "KunY":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__("CwoH");

var _react2 = _interopRequireDefault(_react);

var _components = __webpack_require__("ZouD");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Page = function (_React$Component) {
    _inherits(Page, _React$Component);

    function Page() {
        _classCallCheck(this, Page);

        return _possibleConstructorReturn(this, (Page.__proto__ || Object.getPrototypeOf(Page)).apply(this, arguments));
    }

    _createClass(Page, [{
        key: 'open',
        value: function open() {
            this.refs.dialog.open();
        }
    }, {
        key: 'openMsg',
        value: function openMsg() {
            this.refs.msg.show();
        }
    }, {
        key: 'notification',
        value: function notification() {
            _components.notification.success({
                title: "Notification Title",
                desc: "This is the content of the notification. This is the content of the notification. This is the content of the notification."
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var menu = _react2.default.createElement(
                _components.Menu,
                null,
                _react2.default.createElement(
                    _components.Menu.Item,
                    null,
                    'item1'
                ),
                _react2.default.createElement(
                    _components.Menu.Item,
                    null,
                    'item2'
                ),
                _react2.default.createElement(
                    _components.Menu.Item,
                    null,
                    '\u9000\u51FA'
                ),
                _react2.default.createElement(
                    _components.Menu.Item,
                    { disabled: true },
                    'item4(disabled)'
                )
            );

            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    _components.Dialog,
                    { title: 'Title', ref: 'dialog' },
                    _react2.default.createElement(
                        'p',
                        null,
                        'asdasdas'
                    )
                ),
                _react2.default.createElement(
                    _components.Button,
                    { theme: 'primary', onClick: this.open.bind(this) },
                    'asd'
                ),
                _react2.default.createElement(
                    _components.Dropdown,
                    { action: 'click', overlay: menu },
                    _react2.default.createElement(
                        'a',
                        null,
                        'asd'
                    )
                ),
                _react2.default.createElement(
                    _components.Form,
                    { method: 'ajax', layout: 'stack-inline' },
                    _react2.default.createElement(_components.FormControl, { label: 'Input', type: 'text', name: 'input', required: true }),
                    _react2.default.createElement(_components.FormControl, { label: 'CheckBox', type: 'checkbox', name: 'checkbox', data: [{ id: "1", text: "Iphone" }, { id: "2", text: "Android" }] }),
                    _react2.default.createElement(_components.FormControl, { label: 'Radio', type: 'radio', name: 'radio', data: [{ id: "1", text: "Iphone" }, { id: "2", text: "Android" }] }),
                    _react2.default.createElement(_components.FormControl, { label: 'Select', type: 'select', name: 'select', data: [{ id: "1", text: "Iphone" }, { id: "2", text: "Android" }] }),
                    _react2.default.createElement(_components.FormControl, { label: 'DateTime', type: 'datetime', name: 'datetime' }),
                    _react2.default.createElement(_components.FormControl, { label: 'DateRange', type: 'daterange', name: 'daterange' }),
                    _react2.default.createElement(_components.FormControl, { label: 'InputNumber', type: 'inputnumber', name: 'inputnumber' })
                ),
                _react2.default.createElement(_components.IconButton, { style: { fontSize: 15 }, icon: 'save' }),
                _react2.default.createElement(_components.Logo, null),
                _react2.default.createElement(_components.MessageBox, { title: 'Tip', msg: 'msgContent', ref: 'msg' }),
                _react2.default.createElement(
                    _components.Button,
                    { theme: 'primary', onClick: this.openMsg.bind(this) },
                    'asd'
                ),
                _react2.default.createElement(
                    _components.Button,
                    { theme: 'primary', onClick: this.notification.bind(this) },
                    'asd'
                ),
                _react2.default.createElement(_components.Pagination, { current: 1, total: 1000, pageSize: 10 }),
                _react2.default.createElement(_components.Progress, { value: 50, type: 'circle' }),
                _react2.default.createElement(
                    _components.Slick,
                    { current: 0, style: { width: 300 } },
                    _react2.default.createElement(
                        _components.Slick.Item,
                        null,
                        '1'
                    ),
                    _react2.default.createElement(
                        _components.Slick.Item,
                        null,
                        '2'
                    )
                ),
                _react2.default.createElement(_components.Spin.WaterSpin, { size: 100, percent: 50 }),
                _react2.default.createElement(_components.Switch, null),
                _react2.default.createElement(_components.Tab, { data: [{
                        id: "1",
                        text: "Tab1",
                        component: _react2.default.createElement(
                            'a',
                            null,
                            'asdasd'
                        )
                    }, {
                        id: "2",
                        text: "Tab2",
                        component: _react2.default.createElement(
                            'a',
                            null,
                            'asdasd'
                        )
                    }] }),
                _react2.default.createElement(_components.Table, { data: [], columns: [{ type: "index", text: "#" }, { type: "checkbox", text: "#" }, { name: "a", text: "字段1" }] }),
                _react2.default.createElement(_components.Upload, { name: 'file' })
            );
        }
    }]);

    return Page;
}(_react2.default.Component);

exports.default = Page;

/***/ })

});