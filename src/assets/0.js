webpackJsonp([0],{

/***/ "4fE7":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "cmui-font/8e7baace3c3e7575c8f1e0fca9aa9a9d.svg";

/***/ }),

/***/ "6DkM":
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

var Render = function (_React$Component) {
    _inherits(Render, _React$Component);

    function Render() {
        _classCallCheck(this, Render);

        return _possibleConstructorReturn(this, (Render.__proto__ || Object.getPrototypeOf(Render)).apply(this, arguments));
    }

    _createClass(Render, [{
        key: 'addRow',
        value: function addRow() {
            this.refs.tableForm.addRow();
        }
    }, {
        key: 'deleteRow',
        value: function deleteRow(id) {
            this.refs.tableForm.removeRowById(id);
            this.updateItem();
        }
    }, {
        key: 'updateItem',
        value: function updateItem() {
            if (this.props.onChange) {
                var ret = this.refs.tableForm.getData();
                ret = ret.map(function (item) {
                    return {
                        id: item.value,
                        text: item.text
                    };
                });
                this.props.onChange(ret);
            }
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            if (this.props.value) {
                var value = this.props.value;
                value.forEach(function (item) {
                    _this2.refs.tableForm.addRow({
                        value: item.id,
                        text: item.text
                    });
                });
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

            var scope = this;
            var columns = [{
                name: 'value',
                type: 'text',
                text: 'value'
            }, {
                name: 'text',
                type: 'text',
                text: 'text'
            }, {
                name: 'op',
                text: '操作',
                format: function format(value, col, row) {
                    return _react2.default.createElement(
                        'a',
                        {
                            href: 'javascript:void(0)',
                            onClick: scope.deleteRow.bind(scope, row.id),
                            className: 'text-blue delete-btn',
                            'data-id': '+row.id+'
                        },
                        _react2.default.createElement('i', { className: 'fa fa-trash' })
                    );
                }
            }];
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(_components.FontIcon, {
                    icon: 'plus',
                    onClick: function onClick() {
                        _this3.addRow();
                    }
                }),
                _react2.default.createElement(_components.TableForm, { columns: columns, ref: 'tableForm', className: 'form-table text-center', onChange: function onChange() {
                        _this3.updateItem();
                    } })
            );
        }
    }]);

    return Render;
}(_react2.default.Component);

exports.default = Render;

/***/ }),

/***/ "6jWi":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__("CwoH");

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__("NKHc");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _jsoneditor = __webpack_require__("2WFL");

var _jsoneditor2 = _interopRequireDefault(_jsoneditor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Messages = function (_React$Component) {
    _inherits(Messages, _React$Component);

    function Messages() {
        _classCallCheck(this, Messages);

        return _possibleConstructorReturn(this, (Messages.__proto__ || Object.getPrototypeOf(Messages)).apply(this, arguments));
    }

    _createClass(Messages, [{
        key: 'reset',
        value: function reset(data) {
            this.editor.set(data);
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            var container = _reactDom2.default.findDOMNode(this.refs.messages);
            var options = {
                mode: 'tree',
                name: 'messages',
                search: false,
                onChange: function onChange() {
                    if (_this2.props.onChange) {
                        _this2.props.onChange(_this2.editor.get());
                    }
                }
            };
            this.editor = new _jsoneditor2.default(container, options);
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement('div', { ref: 'messages', style: { height: 200 } });
        }
    }]);

    return Messages;
}(_react2.default.Component);

exports.default = Messages;

/***/ }),

/***/ "9BH+":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("lv9O");
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__("b3GF")(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/sass-loader/lib/loader.js!./form.scss", function() {
			var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/sass-loader/lib/loader.js!./form.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "HoGA":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("cQAH");
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__("b3GF")(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../css-loader/index.js!./jsoneditor.css", function() {
			var newContent = require("!!../../css-loader/index.js!./jsoneditor.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "TP16":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    'Form': {
        'types': {
            className: 'string',
            style: 'object',
            grid: 'number',
            action: 'string',
            method: ['post', 'get', 'ajax', 'custom'],
            target: 'string',
            submitText: 'string',
            layout: 'string',
            labelWidth: 'number',
            useDefaultSubmitBtn: 'bool'
        },
        'default': {
            method: 'get',
            submitText: '保存',
            layout: 'stack-inline',
            useDefaultSubmitBtn: true
        }
    },
    'input': {
        'types': {
            name: 'string',
            value: 'number',
            className: 'string',
            style: 'object',
            grid: 'number',
            type: ['input', 'number', 'integer'],
            placeholder: 'string',
            label: 'string'
        },
        'default': {
            type: 'text',
            label: 'Undefined'
        }
    },
    'inputnumber': {
        'types': {
            name: 'string',
            value: 'number',
            className: 'string',
            style: 'object',
            min: 'number',
            max: 'number',
            step: 'number',
            label: 'string',
            disabled: 'bool'
        },
        'default': {
            min: 0,
            max: 100,
            step: 1,
            label: 'Undefined'
        }
    },
    'radio': {
        'types': {
            name: 'string',
            value: 'string',
            className: 'string',
            style: 'object',
            label: 'string',
            disabled: 'bool',
            data: 'item',
            stick: 'bool',
            layout: 'string',
            url: 'string'
        },
        'default': {
            label: 'Undefined',
            layout: 'inline'
        }
    },
    'checkbox': {
        'types': {
            name: 'string',
            value: 'string',
            className: 'string',
            style: 'object',
            label: 'string',
            disabled: 'bool',
            data: 'item',
            layout: 'string',
            url: 'string'
        },
        'default': {
            label: 'Undefined',
            layout: 'inline'
        }
    },
    'switch': {
        'types': {
            name: 'string',
            value: 'string',
            className: 'string',
            style: 'object',
            label: 'string',
            disabled: 'bool',
            checked: 'bool',
            size: ['default', 'small'],
            checkedText: 'string',
            unCheckedText: 'string',
            layout: 'string'
        },
        'default': {
            label: 'Undefined',
            size: 'default'
        }
    },
    'textarea': {
        'types': {
            name: 'string',
            value: 'string',
            className: 'string',
            style: 'object',
            label: 'string',
            disabled: 'bool',
            height: 'number',
            autoHeight: 'bool',
            grid: 'number'
        },
        'default': {
            label: 'Undefined'
        }
    },
    'file': {
        'types': {
            name: 'string',
            className: 'string',
            style: 'object',
            label: 'string',
            disabled: 'bool'
        },
        'default': {
            label: 'Undefined'
        }
    },
    'select': {
        'types': {
            name: 'string',
            value: 'string',
            label: 'string',
            className: 'string',
            style: 'object',
            disabled: 'bool',
            placeholder: 'string',
            valueField: 'string',
            textField: 'string',
            sep: 'string',
            optionsTpl: 'string',
            multi: 'bool',
            hasEmptyOption: 'bool',
            choiceText: 'string',
            url: 'string',
            data: 'item'
        },
        'default': {
            label: 'Undefined',
            sep: ',',
            multi: false,
            hasEmptyOption: false,
            choiceText: '--请选择--'
        }
    },
    'datetime': {
        'types': {
            name: 'string',
            value: 'string',
            className: 'string',
            style: 'object',
            label: 'string',
            disabled: 'bool',
            placeholder: 'string',
            timeOnly: 'bool',
            dateOnly: 'bool',
            monthOnly: 'bool',
            yearOnly: 'bool',
            format: 'string'
        },
        'default': {
            label: 'Undefined'
        }
    },
    'daterange': {
        'types': {
            startName: 'string',
            endName: 'string',
            value: 'string',
            className: 'string',
            style: 'object',
            label: 'string',
            disabled: 'bool',
            maxRange: 'number',
            startDate: 'string',
            endDate: 'string',
            sep: 'string'
        },
        'default': {
            label: 'Undefined',
            startName: 'startDate',
            endName: 'endDate',
            sep: '~'
        }
    },
    'row': {
        'types': {
            className: 'string',
            style: 'object'
        },
        'default': {
            className: 'cm-form-inline'
        }
    },
    'button': {
        'types': {
            label: 'string',
            className: 'string',
            style: 'object',
            theme: 'string',
            icon: 'string',
            iconAlign: ['left', 'right'],
            raised: 'bool',
            flat: 'bool',
            disabled: 'bool',
            href: 'string',
            target: 'string',
            size: ['small', 'default', 'large']
        },
        'default': {
            label: 'BUTTON',
            theme: 'primary',
            size: 'default',
            iconAlign: 'left'
        }
    },
    'label': {
        'types': {
            label: 'string',
            className: 'string',
            style: 'object'
        },
        'default': {
            label: 'Undefined'
        }
    },
    'promote': {
        'types': {
            label: 'string',
            className: 'string',
            style: 'object'
        },
        'default': {
            label: 'Undefined'
        }
    }
};

/***/ }),

/***/ "cQAH":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("lcwS")(undefined);
// imports


// module
exports.push([module.i, "/* reset styling (prevent conflicts with bootstrap, materialize.css, etc.) */\n\ndiv.jsoneditor .jsoneditor-search input {\n  height: auto;\n  border: inherit;\n}\n\ndiv.jsoneditor .jsoneditor-search input:focus {\n  border: none !important;\n  box-shadow: none !important;\n}\n\ndiv.jsoneditor table {\n  border-collapse: collapse;\n  width: auto;\n}\n\ndiv.jsoneditor td,\ndiv.jsoneditor th {\n  padding: 0;\n  display: table-cell;\n  text-align: left;\n  vertical-align: inherit;\n  border-radius: inherit;\n}\n\n\ndiv.jsoneditor-field,\ndiv.jsoneditor-value,\ndiv.jsoneditor-readonly {\n  border: 1px solid transparent;\n  min-height: 16px;\n  min-width: 32px;\n  padding: 2px;\n  margin: 1px;\n  word-wrap: break-word;\n  float: left;\n}\n\n/* adjust margin of p elements inside editable divs, needed for Opera, IE */\n\ndiv.jsoneditor-field p,\ndiv.jsoneditor-value p {\n  margin: 0;\n}\n\ndiv.jsoneditor-value {\n  word-break: break-word;\n}\n\ndiv.jsoneditor-readonly {\n  min-width: 16px;\n  color: gray;\n}\n\ndiv.jsoneditor-empty {\n  border-color: lightgray;\n  border-style: dashed;\n  border-radius: 2px;\n}\n\ndiv.jsoneditor-field.jsoneditor-empty::after,\ndiv.jsoneditor-value.jsoneditor-empty::after {\n  pointer-events: none;\n  color: lightgray;\n  font-size: 8pt;\n}\n\ndiv.jsoneditor-field.jsoneditor-empty::after {\n  content: \"field\";\n}\n\ndiv.jsoneditor-value.jsoneditor-empty::after {\n  content: \"value\";\n}\n\ndiv.jsoneditor-value.jsoneditor-url,\na.jsoneditor-value.jsoneditor-url {\n  color: green;\n  text-decoration: underline;\n}\n\na.jsoneditor-value.jsoneditor-url {\n  display: inline-block;\n  padding: 2px;\n  margin: 2px;\n}\n\na.jsoneditor-value.jsoneditor-url:hover,\na.jsoneditor-value.jsoneditor-url:focus {\n  color: #ee422e;\n}\n\ndiv.jsoneditor td.jsoneditor-separator {\n  padding: 3px 0;\n  vertical-align: top;\n  color: gray;\n}\n\ndiv.jsoneditor-field[contenteditable=true]:focus,\ndiv.jsoneditor-field[contenteditable=true]:hover,\ndiv.jsoneditor-value[contenteditable=true]:focus,\ndiv.jsoneditor-value[contenteditable=true]:hover,\ndiv.jsoneditor-field.jsoneditor-highlight,\ndiv.jsoneditor-value.jsoneditor-highlight {\n  background-color: #FFFFAB;\n  border: 1px solid yellow;\n  border-radius: 2px;\n}\n\ndiv.jsoneditor-field.jsoneditor-highlight-active,\ndiv.jsoneditor-field.jsoneditor-highlight-active:focus,\ndiv.jsoneditor-field.jsoneditor-highlight-active:hover,\ndiv.jsoneditor-value.jsoneditor-highlight-active,\ndiv.jsoneditor-value.jsoneditor-highlight-active:focus,\ndiv.jsoneditor-value.jsoneditor-highlight-active:hover {\n  background-color: #ffee00;\n  border: 1px solid #ffc700;\n  border-radius: 2px;\n}\n\ndiv.jsoneditor-value.jsoneditor-string {\n  color: #008000;\n}\n\ndiv.jsoneditor-value.jsoneditor-object,\ndiv.jsoneditor-value.jsoneditor-array {\n  min-width: 16px;\n  color: #808080;\n}\n\ndiv.jsoneditor-value.jsoneditor-number {\n  color: #ee422e;\n}\n\ndiv.jsoneditor-value.jsoneditor-boolean {\n  color: #ff8c00;\n}\n\ndiv.jsoneditor-value.jsoneditor-null {\n  color: #004ED0;\n}\n\ndiv.jsoneditor-value.jsoneditor-invalid {\n  color: #000000;\n}\n\ndiv.jsoneditor-tree button {\n  width: 24px;\n  height: 24px;\n  padding: 0;\n  margin: 0;\n  border: none;\n  cursor: pointer;\n  background: transparent url(" + __webpack_require__("4fE7") + ");\n}\n\ndiv.jsoneditor-mode-view tr.jsoneditor-expandable td.jsoneditor-tree,\ndiv.jsoneditor-mode-form tr.jsoneditor-expandable td.jsoneditor-tree {\n  cursor: pointer;\n}\n\ndiv.jsoneditor-tree button.jsoneditor-collapsed {\n  background-position: 0 -48px;\n}\n\ndiv.jsoneditor-tree button.jsoneditor-expanded {\n  background-position: 0 -72px;\n}\n\ndiv.jsoneditor-tree button.jsoneditor-contextmenu {\n  background-position: -48px -72px;\n}\n\ndiv.jsoneditor-tree button.jsoneditor-contextmenu:hover,\ndiv.jsoneditor-tree button.jsoneditor-contextmenu:focus,\ndiv.jsoneditor-tree button.jsoneditor-contextmenu.jsoneditor-selected,\ntr.jsoneditor-selected.jsoneditor-first button.jsoneditor-contextmenu {\n  background-position: -48px -48px;\n}\n\ndiv.jsoneditor-tree *:focus {\n  outline: none;\n}\n\ndiv.jsoneditor-tree button:focus {\n  /* TODO: nice outline for buttons with focus\n  outline: #97B0F8 solid 2px;\n  box-shadow: 0 0 8px #97B0F8;\n  */\n  background-color: #f5f5f5;\n  outline: #e5e5e5 solid 1px;\n}\n\ndiv.jsoneditor-tree button.jsoneditor-invisible {\n  visibility: hidden;\n  background: none;\n}\n\ndiv.jsoneditor {\n  color: #1A1A1A;\n  border: 1px solid #3883fa;\n  -moz-box-sizing: border-box;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n  width: 100%;\n  height: 100%;\n  position: relative;\n  padding: 0;\n  line-height: 100%;\n}\n\ndiv.jsoneditor-tree table.jsoneditor-tree {\n  border-collapse: collapse;\n  border-spacing: 0;\n  width: 100%;\n  margin: 0;\n}\n\ndiv.jsoneditor-outer {\n  position: static;\n  width: 100%;\n  height: 100%;\n  margin: -35px 0 0 0;\n  padding: 35px 0 0 0;\n  -moz-box-sizing: border-box;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n}\n\ntextarea.jsoneditor-text,\n.ace-jsoneditor {\n  min-height: 150px;\n}\n\ndiv.jsoneditor-tree {\n  width: 100%;\n  height: 100%;\n  position: relative;\n  overflow: auto;\n}\n\ntextarea.jsoneditor-text {\n  width: 100%;\n  height: 100%;\n  margin: 0;\n  -moz-box-sizing: border-box;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n  outline-width: 0;\n  border: none;\n  background-color: white;\n  resize: none;\n}\n\ntr.jsoneditor-highlight,\ntr.jsoneditor-selected {\n  background-color: #e6e6e6;\n}\n\ntr.jsoneditor-selected button.jsoneditor-dragarea,\ntr.jsoneditor-selected button.jsoneditor-contextmenu {\n  visibility: hidden;\n}\n\ntr.jsoneditor-selected.jsoneditor-first button.jsoneditor-dragarea,\ntr.jsoneditor-selected.jsoneditor-first button.jsoneditor-contextmenu {\n  visibility: visible;\n}\n\ndiv.jsoneditor-tree button.jsoneditor-dragarea {\n  background: url(" + __webpack_require__("4fE7") + ") -72px -72px;\n  cursor: move;\n}\n\ndiv.jsoneditor-tree button.jsoneditor-dragarea:hover,\ndiv.jsoneditor-tree button.jsoneditor-dragarea:focus,\ntr.jsoneditor-selected.jsoneditor-first button.jsoneditor-dragarea {\n  background-position: -72px -48px;\n}\n\ndiv.jsoneditor tr,\ndiv.jsoneditor th,\ndiv.jsoneditor td {\n  padding: 0;\n  margin: 0;\n}\n\ndiv.jsoneditor td {\n  vertical-align: top;\n}\n\ndiv.jsoneditor td.jsoneditor-tree {\n  vertical-align: top;\n}\n\ndiv.jsoneditor-field,\ndiv.jsoneditor-value,\ndiv.jsoneditor td,\ndiv.jsoneditor th,\ndiv.jsoneditor textarea,\n.jsoneditor-schema-error {\n  font-family: droid sans mono, consolas, monospace, courier new, courier, sans-serif;\n  font-size: 10pt;\n  color: #1A1A1A;\n}\n\n/* popover */\n\n.jsoneditor-schema-error {\n  cursor: default;\n  display: inline-block;\n  /*font-family: arial, sans-serif;*/\n  height: 24px;\n  line-height: 24px;\n  position: relative;\n  text-align: center;\n  width: 24px;\n}\n\ndiv.jsoneditor-tree .jsoneditor-schema-error {\n  width: 24px;\n  height: 24px;\n  padding: 0;\n  margin: 0 4px 0 0;\n  background: url(" + __webpack_require__("4fE7") + ")  -168px -48px;\n}\n\n.jsoneditor-schema-error .jsoneditor-popover {\n  background-color: #4c4c4c;\n  border-radius: 3px;\n  box-shadow: 0 0 5px rgba(0,0,0,0.4);\n  color: #fff;\n  display: none;\n  padding: 7px 10px;\n  position: absolute;\n  width: 200px;\n  z-index: 4;\n}\n\n.jsoneditor-schema-error .jsoneditor-popover.jsoneditor-above {\n  bottom: 32px;\n  left: -98px;\n}\n\n.jsoneditor-schema-error .jsoneditor-popover.jsoneditor-below {\n  top: 32px;\n  left: -98px;\n}\n\n.jsoneditor-schema-error .jsoneditor-popover.jsoneditor-left {\n  top: -7px;\n  right: 32px;\n}\n\n.jsoneditor-schema-error .jsoneditor-popover.jsoneditor-right {\n  top: -7px;\n  left: 32px;\n}\n\n.jsoneditor-schema-error .jsoneditor-popover:before {\n  border-right: 7px solid transparent;\n  border-left: 7px solid transparent;\n  content: '';\n  display: block;\n  left: 50%;\n  margin-left: -7px;\n  position: absolute;\n}\n\n.jsoneditor-schema-error .jsoneditor-popover.jsoneditor-above:before {\n  border-top: 7px solid #4c4c4c;\n  bottom: -7px;\n}\n\n.jsoneditor-schema-error .jsoneditor-popover.jsoneditor-below:before {\n  border-bottom: 7px solid #4c4c4c;\n  top: -7px;\n}\n\n.jsoneditor-schema-error .jsoneditor-popover.jsoneditor-left:before {\n  border-left: 7px solid #4c4c4c;\n  border-top: 7px solid transparent;\n  border-bottom: 7px solid transparent;\n  content: '';\n  top: 19px;\n  right: -14px;\n  left: inherit;\n  margin-left: inherit;\n  margin-top: -7px;\n  position: absolute;\n}\n\n.jsoneditor-schema-error .jsoneditor-popover.jsoneditor-right:before {\n  border-right: 7px solid #4c4c4c;\n  border-top: 7px solid transparent;\n  border-bottom: 7px solid transparent;\n  content: '';\n  top: 19px;\n  left: -14px;\n  margin-left: inherit;\n  margin-top: -7px;\n  position: absolute;\n}\n\n.jsoneditor-schema-error:hover .jsoneditor-popover,\n.jsoneditor-schema-error:focus .jsoneditor-popover {\n  display: block;\n  -webkit-animation: fade-in .3s linear 1, move-up .3s linear 1;\n  -moz-animation: fade-in .3s linear 1, move-up .3s linear 1;\n  -ms-animation: fade-in .3s linear 1, move-up .3s linear 1;\n}\n\n@-webkit-keyframes fade-in {\n  from {\n    opacity: 0;\n  }\n\n  to {\n    opacity: 1;\n  }\n}\n\n@-moz-keyframes fade-in {\n  from {\n    opacity: 0;\n  }\n\n  to {\n    opacity: 1;\n  }\n}\n\n@-ms-keyframes fade-in {\n  from {\n    opacity: 0;\n  }\n\n  to {\n    opacity: 1;\n  }\n}\n\n/*@-webkit-keyframes move-up {*/\n\n/*from   { bottom: 24px; }*/\n\n/*to { bottom: 32px; }*/\n\n/*}*/\n\n/*@-moz-keyframes move-up {*/\n\n/*from   { bottom: 24px; }*/\n\n/*to { bottom: 32px; }*/\n\n/*}*/\n\n/*@-ms-keyframes move-up {*/\n\n/*from   { bottom: 24px; }*/\n\n/*to { bottom: 32px; }*/\n\n/*}*/\n\n/* JSON schema errors displayed at the bottom of the editor in mode text and code */\n\n.jsoneditor .jsoneditor-text-errors {\n  width: 100%;\n  border-collapse: collapse;\n  background-color: #ffef8b;\n  border-top: 1px solid #ffd700;\n}\n\n.jsoneditor .jsoneditor-text-errors td {\n  padding: 3px 6px;\n  vertical-align: middle;\n}\n\n.jsoneditor-text-errors .jsoneditor-schema-error {\n  border: none;\n  width: 24px;\n  height: 24px;\n  padding: 0;\n  margin: 0 4px 0 0;\n  background: url(" + __webpack_require__("4fE7") + ")  -168px -48px;\n}\n/* ContextMenu - main menu */\n\ndiv.jsoneditor-contextmenu-root {\n  position: relative;\n  width: 0;\n  height: 0;\n}\n\ndiv.jsoneditor-contextmenu {\n  position: absolute;\n  box-sizing: content-box;\n  z-index: 99999;\n}\n\ndiv.jsoneditor-contextmenu ul,\ndiv.jsoneditor-contextmenu li {\n  box-sizing: content-box;\n  position: relative;\n}\n\ndiv.jsoneditor-contextmenu ul {\n  position: relative;\n  left: 0;\n  top: 0;\n  width: 128px;\n  background: white;\n  border: 1px solid #d3d3d3;\n  box-shadow: 2px 2px 12px rgba(128, 128, 128, 0.3);\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\ndiv.jsoneditor-contextmenu ul li button {\n  position: relative;\n  padding: 0 4px 0 0;\n  margin: 0;\n  width: 128px;\n  height: auto;\n  border: none;\n  cursor: pointer;\n  color: #4d4d4d;\n  background: transparent;\n  font-size: 10pt;\n  font-family: arial, sans-serif;\n  box-sizing: border-box;\n  text-align: left;\n}\n\n/* Fix button padding in firefox */\n\ndiv.jsoneditor-contextmenu ul li button::-moz-focus-inner {\n  padding: 0;\n  border: 0;\n}\n\ndiv.jsoneditor-contextmenu ul li button:hover,\ndiv.jsoneditor-contextmenu ul li button:focus {\n  color: #1a1a1a;\n  background-color: #f5f5f5;\n  outline: none;\n}\n\ndiv.jsoneditor-contextmenu ul li button.jsoneditor-default {\n  width: 96px;\n  /* 128px - 32px */\n}\n\ndiv.jsoneditor-contextmenu ul li button.jsoneditor-expand {\n  float: right;\n  width: 32px;\n  height: 24px;\n  border-left: 1px solid #e5e5e5;\n}\n\ndiv.jsoneditor-contextmenu div.jsoneditor-icon {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 24px;\n  height: 24px;\n  border: none;\n  padding: 0;\n  margin: 0;\n  background-image: url(" + __webpack_require__("4fE7") + ");\n}\n\ndiv.jsoneditor-contextmenu ul li ul div.jsoneditor-icon {\n  margin-left: 24px;\n}\n\ndiv.jsoneditor-contextmenu div.jsoneditor-text {\n  padding: 4px 0 4px 24px;\n  word-wrap: break-word;\n}\n\ndiv.jsoneditor-contextmenu div.jsoneditor-text.jsoneditor-right-margin {\n  padding-right: 24px;\n}\n\ndiv.jsoneditor-contextmenu ul li button div.jsoneditor-expand {\n  position: absolute;\n  top: 0;\n  right: 0;\n  width: 24px;\n  height: 24px;\n  padding: 0;\n  margin: 0 4px 0 0;\n  background: url(" + __webpack_require__("4fE7") + ") 0 -72px;\n  opacity: 0.4;\n}\n\ndiv.jsoneditor-contextmenu ul li button:hover div.jsoneditor-expand,\ndiv.jsoneditor-contextmenu ul li button:focus div.jsoneditor-expand,\ndiv.jsoneditor-contextmenu ul li.jsoneditor-selected div.jsoneditor-expand,\ndiv.jsoneditor-contextmenu ul li button.jsoneditor-expand:hover div.jsoneditor-expand,\ndiv.jsoneditor-contextmenu ul li button.jsoneditor-expand:focus div.jsoneditor-expand {\n  opacity: 1;\n}\n\ndiv.jsoneditor-contextmenu div.jsoneditor-separator {\n  height: 0;\n  border-top: 1px solid #e5e5e5;\n  padding-top: 5px;\n  margin-top: 5px;\n}\n\ndiv.jsoneditor-contextmenu button.jsoneditor-remove > div.jsoneditor-icon {\n  background-position: -24px -24px;\n}\n\ndiv.jsoneditor-contextmenu button.jsoneditor-remove:hover > div.jsoneditor-icon,\ndiv.jsoneditor-contextmenu button.jsoneditor-remove:focus > div.jsoneditor-icon {\n  background-position: -24px 0;\n}\n\ndiv.jsoneditor-contextmenu button.jsoneditor-append > div.jsoneditor-icon {\n  background-position: 0 -24px;\n}\n\ndiv.jsoneditor-contextmenu button.jsoneditor-append:hover > div.jsoneditor-icon,\ndiv.jsoneditor-contextmenu button.jsoneditor-append:focus > div.jsoneditor-icon {\n  background-position: 0 0;\n}\n\ndiv.jsoneditor-contextmenu button.jsoneditor-insert > div.jsoneditor-icon {\n  background-position: 0 -24px;\n}\n\ndiv.jsoneditor-contextmenu button.jsoneditor-insert:hover > div.jsoneditor-icon,\ndiv.jsoneditor-contextmenu button.jsoneditor-insert:focus > div.jsoneditor-icon {\n  background-position: 0 0;\n}\n\ndiv.jsoneditor-contextmenu button.jsoneditor-duplicate > div.jsoneditor-icon {\n  background-position: -48px -24px;\n}\n\ndiv.jsoneditor-contextmenu button.jsoneditor-duplicate:hover > div.jsoneditor-icon,\ndiv.jsoneditor-contextmenu button.jsoneditor-duplicate:focus > div.jsoneditor-icon {\n  background-position: -48px 0;\n}\n\ndiv.jsoneditor-contextmenu button.jsoneditor-sort-asc > div.jsoneditor-icon {\n  background-position: -168px -24px;\n}\n\ndiv.jsoneditor-contextmenu button.jsoneditor-sort-asc:hover > div.jsoneditor-icon,\ndiv.jsoneditor-contextmenu button.jsoneditor-sort-asc:focus > div.jsoneditor-icon {\n  background-position: -168px 0;\n}\n\ndiv.jsoneditor-contextmenu button.jsoneditor-sort-desc > div.jsoneditor-icon {\n  background-position: -192px -24px;\n}\n\ndiv.jsoneditor-contextmenu button.jsoneditor-sort-desc:hover > div.jsoneditor-icon,\ndiv.jsoneditor-contextmenu button.jsoneditor-sort-desc:focus > div.jsoneditor-icon {\n  background-position: -192px 0;\n}\n\n/* ContextMenu - sub menu */\n\ndiv.jsoneditor-contextmenu ul li button.jsoneditor-selected,\ndiv.jsoneditor-contextmenu ul li button.jsoneditor-selected:hover,\ndiv.jsoneditor-contextmenu ul li button.jsoneditor-selected:focus {\n  color: white;\n  background-color: #ee422e;\n}\n\ndiv.jsoneditor-contextmenu ul li {\n  overflow: hidden;\n}\n\ndiv.jsoneditor-contextmenu ul li ul {\n  display: none;\n  position: relative;\n  left: -10px;\n  top: 0;\n  border: none;\n  box-shadow: inset 0 0 10px rgba(128, 128, 128, 0.5);\n  padding: 0 10px;\n  /* TODO: transition is not supported on IE8-9 */\n  -webkit-transition: all 0.3s ease-out;\n  -moz-transition: all 0.3s ease-out;\n  -o-transition: all 0.3s ease-out;\n  transition: all 0.3s ease-out;\n}\n\n\n\ndiv.jsoneditor-contextmenu ul li ul li button {\n  padding-left: 24px;\n  animation: all ease-in-out 1s;\n}\n\ndiv.jsoneditor-contextmenu ul li ul li button:hover,\ndiv.jsoneditor-contextmenu ul li ul li button:focus {\n  background-color: #f5f5f5;\n}\n\ndiv.jsoneditor-contextmenu button.jsoneditor-type-string > div.jsoneditor-icon {\n  background-position: -144px -24px;\n}\n\ndiv.jsoneditor-contextmenu button.jsoneditor-type-string:hover > div.jsoneditor-icon,\ndiv.jsoneditor-contextmenu button.jsoneditor-type-string:focus > div.jsoneditor-icon,\ndiv.jsoneditor-contextmenu button.jsoneditor-type-string.jsoneditor-selected > div.jsoneditor-icon {\n  background-position: -144px 0;\n}\n\ndiv.jsoneditor-contextmenu button.jsoneditor-type-auto > div.jsoneditor-icon {\n  background-position: -120px -24px;\n}\n\ndiv.jsoneditor-contextmenu button.jsoneditor-type-auto:hover > div.jsoneditor-icon,\ndiv.jsoneditor-contextmenu button.jsoneditor-type-auto:focus > div.jsoneditor-icon,\ndiv.jsoneditor-contextmenu button.jsoneditor-type-auto.jsoneditor-selected > div.jsoneditor-icon {\n  background-position: -120px 0;\n}\n\ndiv.jsoneditor-contextmenu button.jsoneditor-type-object > div.jsoneditor-icon {\n  background-position: -72px -24px;\n}\n\ndiv.jsoneditor-contextmenu button.jsoneditor-type-object:hover > div.jsoneditor-icon,\ndiv.jsoneditor-contextmenu button.jsoneditor-type-object:focus > div.jsoneditor-icon,\ndiv.jsoneditor-contextmenu button.jsoneditor-type-object.jsoneditor-selected > div.jsoneditor-icon {\n  background-position: -72px 0;\n}\n\ndiv.jsoneditor-contextmenu button.jsoneditor-type-array > div.jsoneditor-icon {\n  background-position: -96px -24px;\n}\n\ndiv.jsoneditor-contextmenu button.jsoneditor-type-array:hover > div.jsoneditor-icon,\ndiv.jsoneditor-contextmenu button.jsoneditor-type-array:focus > div.jsoneditor-icon,\ndiv.jsoneditor-contextmenu button.jsoneditor-type-array.jsoneditor-selected > div.jsoneditor-icon {\n  background-position: -96px 0;\n}\n\ndiv.jsoneditor-contextmenu button.jsoneditor-type-modes > div.jsoneditor-icon {\n  background-image: none;\n  width: 6px;\n}\ndiv.jsoneditor-menu {\n  width: 100%;\n  height: 35px;\n  padding: 2px;\n  margin: 0;\n  -moz-box-sizing: border-box;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n  color: white;\n  background-color: #3883fa;\n  border-bottom: 1px solid #3883fa;\n}\n\ndiv.jsoneditor-menu > button,\ndiv.jsoneditor-menu > div.jsoneditor-modes > button {\n  width: 26px;\n  height: 26px;\n  margin: 2px;\n  padding: 0;\n  border-radius: 2px;\n  border: 1px solid transparent;\n  background: transparent url(" + __webpack_require__("4fE7") + ");\n  color: white;\n  opacity: 0.8;\n  font-family: arial, sans-serif;\n  font-size: 10pt;\n  float: left;\n}\n\ndiv.jsoneditor-menu > button:hover,\ndiv.jsoneditor-menu > div.jsoneditor-modes > button:hover {\n  background-color: rgba(255,255,255,0.2);\n  border: 1px solid rgba(255,255,255,0.4);\n}\n\ndiv.jsoneditor-menu > button:focus,\ndiv.jsoneditor-menu > button:active,\ndiv.jsoneditor-menu > div.jsoneditor-modes > button:focus,\ndiv.jsoneditor-menu > div.jsoneditor-modes > button:active {\n  background-color: rgba(255,255,255,0.3);\n}\n\ndiv.jsoneditor-menu > button:disabled,\ndiv.jsoneditor-menu > div.jsoneditor-modes > button:disabled {\n  opacity: 0.5;\n}\n\ndiv.jsoneditor-menu > button.jsoneditor-collapse-all {\n  background-position: 0 -96px;\n}\n\ndiv.jsoneditor-menu > button.jsoneditor-expand-all {\n  background-position: 0 -120px;\n}\n\ndiv.jsoneditor-menu > button.jsoneditor-undo {\n  background-position: -24px -96px;\n}\n\ndiv.jsoneditor-menu > button.jsoneditor-undo:disabled {\n  background-position: -24px -120px;\n}\n\ndiv.jsoneditor-menu > button.jsoneditor-redo {\n  background-position: -48px -96px;\n}\n\ndiv.jsoneditor-menu > button.jsoneditor-redo:disabled {\n  background-position: -48px -120px;\n}\n\ndiv.jsoneditor-menu > button.jsoneditor-compact {\n  background-position: -72px -96px;\n}\n\ndiv.jsoneditor-menu > button.jsoneditor-format {\n  background-position: -72px -120px;\n}\n\ndiv.jsoneditor-menu > div.jsoneditor-modes {\n  display: inline-block;\n  float: left;\n}\n\ndiv.jsoneditor-menu > div.jsoneditor-modes > button {\n  background-image: none;\n  width: auto;\n  padding-left: 6px;\n  padding-right: 6px;\n}\n\ndiv.jsoneditor-menu > button.jsoneditor-separator,\ndiv.jsoneditor-menu > div.jsoneditor-modes > button.jsoneditor-separator {\n  margin-left: 10px;\n}\n\ndiv.jsoneditor-menu a {\n  font-family: arial, sans-serif;\n  font-size: 10pt;\n  color: white;\n  opacity: 0.8;\n  vertical-align: middle;\n}\n\ndiv.jsoneditor-menu a:hover {\n  opacity: 1;\n}\n\ndiv.jsoneditor-menu a.jsoneditor-poweredBy {\n  font-size: 8pt;\n  position: absolute;\n  right: 0;\n  top: 0;\n  padding: 10px;\n}\ntable.jsoneditor-search input,\ntable.jsoneditor-search div.jsoneditor-results {\n  font-family: arial, sans-serif;\n  font-size: 10pt;\n  color: #1A1A1A;\n  background: transparent;\n  /* For Firefox */\n}\n\ntable.jsoneditor-search div.jsoneditor-results {\n  color: white;\n  padding-right: 5px;\n  line-height: 24px;\n}\n\ntable.jsoneditor-search {\n  position: absolute;\n  right: 4px;\n  top: 4px;\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\ntable.jsoneditor-search div.jsoneditor-frame {\n  border: 1px solid transparent;\n  background-color: white;\n  padding: 0 2px;\n  margin: 0;\n}\n\ntable.jsoneditor-search div.jsoneditor-frame table {\n  border-collapse: collapse;\n}\n\ntable.jsoneditor-search input {\n  width: 120px;\n  border: none;\n  outline: none;\n  margin: 1px;\n  line-height: 20px;\n}\n\ntable.jsoneditor-search button {\n  width: 16px;\n  height: 24px;\n  padding: 0;\n  margin: 0;\n  border: none;\n  background: url(" + __webpack_require__("4fE7") + ");\n  vertical-align: top;\n}\n\ntable.jsoneditor-search button:hover {\n  background-color: transparent;\n}\n\ntable.jsoneditor-search button.jsoneditor-refresh {\n  width: 18px;\n  background-position: -99px -73px;\n}\n\ntable.jsoneditor-search button.jsoneditor-next {\n  cursor: pointer;\n  background-position: -124px -73px;\n}\n\ntable.jsoneditor-search button.jsoneditor-next:hover {\n  background-position: -124px -49px;\n}\n\ntable.jsoneditor-search button.jsoneditor-previous {\n  cursor: pointer;\n  background-position: -148px -73px;\n  margin-right: 2px;\n}\n\ntable.jsoneditor-search button.jsoneditor-previous:hover {\n  background-position: -148px -49px;\n}\ndiv.jsoneditor div.autocomplete.dropdown {\n  position: absolute;\n  background: white;\n  box-shadow: 2px 2px 12px rgba(128, 128, 128, 0.3);\n  border: 1px solid #d3d3d3;\n  z-index: 100;\n  overflow-x: hidden;\n  overflow-y: auto;\n  cursor: default;\n  margin: 0;\n  padding-left: 2pt;\n  padding-right: 5pt;\n  text-align: left;\n  outline: 0;\n  font-family: droid sans mono, consolas, monospace, courier new, courier, sans-serif;\n  font-size: 10pt;\n}\n\ndiv.jsoneditor div.autocomplete.dropdown .item {\n  color: #333;\n}\n\ndiv.jsoneditor div.autocomplete.dropdown .item.hover {\n  background-color: #ddd;\n}\n\ndiv.jsoneditor div.autocomplete.hint {\n  color: #aaa;\n  top: 4px;\n  left: 4px;\n}", ""]);

// exports


/***/ }),

/***/ "lv9O":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("lcwS")(undefined);
// imports


// module
exports.push([module.i, ".cm-layout-content {\n  padding-top: 0; }\n\n.cm-form {\n  padding: 30px;\n  border: 1px dashed #ccc; }\n\n.form-table .cm-form-control {\n  width: 80px; }\n\n.form-item {\n  border: 1px dashed #ccc;\n  padding: 10px;\n  position: relative; }\n\n.form-item-row {\n  position: relative;\n  border: 2px dashed #ccc;\n  padding: 15px; }\n  .form-item-row.active {\n    border: 2px dashed #20A0FF; }\n\n.cm-form-row .form-item {\n  display: inline-block; }\n  .cm-form-row .form-item.block {\n    display: block; }\n\n.form-tools {\n  position: absolute;\n  right: 3px;\n  top: 3px;\n  color: #20A0FF;\n  cursor: pointer; }\n", ""]);

// exports


/***/ }),

/***/ "mzEI":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__("CwoH");

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__("NKHc");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _jsoneditor = __webpack_require__("2WFL");

var _jsoneditor2 = _interopRequireDefault(_jsoneditor);

__webpack_require__("HoGA");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Rules = function (_React$Component) {
    _inherits(Rules, _React$Component);

    function Rules() {
        _classCallCheck(this, Rules);

        return _possibleConstructorReturn(this, (Rules.__proto__ || Object.getPrototypeOf(Rules)).apply(this, arguments));
    }

    _createClass(Rules, [{
        key: 'reset',
        value: function reset(data) {
            this.editor.set(data);
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            var container = _reactDom2.default.findDOMNode(this.refs.rules);
            var options = {
                mode: 'tree',
                name: 'rules',
                search: false,
                onChange: function onChange() {
                    if (_this2.props.onChange) {
                        _this2.props.onChange(_this2.editor.get());
                    }
                }
            };
            this.editor = new _jsoneditor2.default(container, options);
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement('div', { ref: 'rules', style: { height: 200 } });
        }
    }]);

    return Rules;
}(_react2.default.Component);

exports.default = Rules;

/***/ }),

/***/ "sYkQ":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__("CwoH");

var _react2 = _interopRequireDefault(_react);

var _components = __webpack_require__("ZouD");

var _data2Form = __webpack_require__("te8S");

var _data2Form2 = _interopRequireDefault(_data2Form);

var _itemRender = __webpack_require__("6DkM");

var _itemRender2 = _interopRequireDefault(_itemRender);

var _rules = __webpack_require__("mzEI");

var _rules2 = _interopRequireDefault(_rules);

var _messages = __webpack_require__("6jWi");

var _messages2 = _interopRequireDefault(_messages);

var _types = __webpack_require__("TP16");

var _types2 = _interopRequireDefault(_types);

__webpack_require__("9BH+");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Content = _components.Layout.Content;
var UUID = _components.Utils.UUID;
var Item = _components.Menu.Item;

var Page = function (_React$Component) {
    _inherits(Page, _React$Component);

    function Page(props) {
        _classCallCheck(this, Page);

        var _this = _possibleConstructorReturn(this, (Page.__proto__ || Object.getPrototypeOf(Page)).call(this, props));

        _this.elements = {};
        var formEle = {
            identify: 'form',
            method: 'get',
            action: '',
            layout: 'stack-inline',
            items: []
        };
        _this.elements[formEle.identify] = formEle;
        _this.containerItem = formEle;
        _this.state = {
            component: 'Form',
            ref: 'form',
            formData: {
                'Form': formEle
            }
        };
        return _this;
    }

    _createClass(Page, [{
        key: 'switchComponent',
        value: function switchComponent(comp, ref) {
            if (comp === 'Form') {
                this.refs.data2form.onClick(null);
                this.containerItem = this.state.formData.Form;
            }
            this.setState({
                component: comp,
                ref: ref
            });
        }
    }, {
        key: 'showProps',
        value: function showProps() {
            var comp = this.state.component;
            var propTypes = _types2.default[comp].types;
            var defaultValues = _types2.default[comp]['default'];
            var lastProps = this.elements[this.state.ref];

            defaultValues = Object.assign(lastProps, defaultValues);
            var ret = [];
            for (var key in propTypes) {
                if (Object.prototype.hasOwnProperty.call(propTypes, key)) {
                    ret.push(this.showProp(key, propTypes[key], defaultValues[key]));
                }
            }
            if (this.refs.rules && this.refs.rules.compKey !== this.state.ref) {
                this.refs.rules.compKey = this.state.ref;
                this.refs.rules.reset(lastProps.rules || {});
            }
            return ret;
        }
    }, {
        key: 'showProp',
        value: function showProp(name, type, val) {
            if (type === 'string') {
                return this.showStringProp(name, type, val);
            }
            if (type === 'number') {
                return this.showNumberProp(name, type, val);
            }
            if (type === 'object') {
                return this.showObjectProp(name, type, val);
            }
            if (type instanceof Array) {
                return this.showOneOfProp(name, type, val);
            }
            if (type === 'bool') {
                return this.showBooleanProp(name, type, val);
            }
            if (type === 'item') {
                return this.showItemProp(name, type, val);
            }
        }
    }, {
        key: 'showStringProp',
        value: function showStringProp(name, type, defaultValue) {
            return _react2.default.createElement(_components.FormControl, { key: name, value: defaultValue, type: 'text', name: name,
                label: name + ': ', onChange: this.changeProperty.bind(this, name, 'string')
            });
        }
    }, {
        key: 'showNumberProp',
        value: function showNumberProp(name, type, defaultValue) {
            return _react2.default.createElement(_components.FormControl, { key: name, value: defaultValue, type: 'number', name: name,
                label: name + ': ', onChange: this.changeProperty.bind(this, name, 'string')
            });
        }
    }, {
        key: 'showObjectProp',
        value: function showObjectProp(name, type, defaultValue) {
            return _react2.default.createElement(_components.FormControl, { key: name, value: JSON.stringify(defaultValue), type: 'textarea', name: name,
                label: name + ': ', height: 50, onChange: this.changeProperty.bind(this, name, 'object')
            });
        }
    }, {
        key: 'showOneOfProp',
        value: function showOneOfProp(name, type, defaultValue) {
            var data = type.map(function (item) {
                return { id: item, text: item };
            });
            return _react2.default.createElement(_components.FormControl, { key: name, value: defaultValue, type: 'radio', name: name,
                label: name + ': ', data: data, stick: true, onChange: this.changeProperty.bind(this, name, 'string')
            });
        }
    }, {
        key: 'showBooleanProp',
        value: function showBooleanProp(name, type, defaultValue) {
            return _react2.default.createElement(_components.FormControl, {
                key: name,
                checked: defaultValue,
                type: 'switch',
                name: name,
                label: name + ': ',
                size: 'small',
                onChange: this.changeProperty.bind(this, name, 'bool') });
        }
    }, {
        key: 'showItemProp',
        value: function showItemProp(name, type, defaultValue) {
            return _react2.default.createElement(_itemRender2.default, {
                key: name,
                name: name,
                value: defaultValue,
                onChange: this.changeProperty.bind(this, name, 'array')
            });
        }
    }, {
        key: 'changeProperty',
        value: function changeProperty(name, type, value) {
            if (type === 'object') {
                try {
                    if (value !== '') {
                        value = JSON.parse(value);
                    }
                } catch (e) {
                    console.log(e);
                }
            }

            if (type === 'bool') {
                value = !value;
            }

            var compProps = this.elements[this.state.ref];
            compProps[name] = value;
            if (value === '') {
                delete compProps[name];
            }
            this.setState({
                formData: this.state.formData
            });

            this.getConfig();
        }
    }, {
        key: 'updateRules',
        value: function updateRules(rules) {
            var compProps = this.elements[this.state.ref];
            if (compProps.type && compProps.type !== 'row') {
                compProps['rules'] = rules;
                this.setState({
                    formData: this.state.formData
                });

                this.getConfig();
            }
        }
    }, {
        key: 'updateMessages',
        value: function updateMessages(messages) {
            var compProps = this.elements[this.state.ref];
            if (compProps.type && compProps.type !== 'row') {
                compProps['messages'] = messages;
                this.setState({
                    formData: this.state.formData
                });

                this.getConfig();
            }
        }
    }, {
        key: 'onSelectItem',
        value: function onSelectItem(item) {
            var _this2 = this;

            if (item) {
                var type = item.getType();
                window.setTimeout(function () {
                    _this2.setState({
                        component: type,
                        ref: item.getIdentify()
                    });
                }, 10);
            }
        }
    }, {
        key: 'selectContainer',
        value: function selectContainer(item) {
            this.containerItem = item;
        }
    }, {
        key: 'addElement',
        value: function addElement(ele) {
            if (this.containerItem.items) {
                this.containerItem.items.push(ele);
            } else {
                if (!this.containerItem.children) {
                    this.containerItem.children = [];
                }
                this.containerItem.children.push(ele);
            }
        }
    }, {
        key: 'getConfig',
        value: function getConfig() {
            var data = this.state.formData.Form;
            data = JSON.parse(JSON.stringify(data));
            delete data.identify;
            for (var i = 0; i < data.items.length; i++) {
                delete data.items[i].identify;
                delete data.items[i].block;
                if (data.items[i].children) {
                    this.deleteIdentify(data.items[i].children);
                }
            }
            this.refs.result.setValue(JSON.stringify(data, null, 4));
        }
    }, {
        key: 'deleteIdentify',
        value: function deleteIdentify(arr) {
            for (var i = 0; i < arr.length; i++) {
                delete arr[i].identify;
                delete arr[i].block;
            }
        }
    }, {
        key: 'addControl',
        value: function addControl(item) {
            var _this3 = this;

            var type = item.props['data-item'];
            var block = item.props['block'];

            var ele = {
                identify: UUID.v4(),
                name: type,
                type: type,
                block: block,
                label: 'Undefined'
            };
            if (type === 'row') {
                ele.children = [];
                delete ele.label;
            }
            this.elements[ele.identify] = ele;
            if (type === 'row') {
                this.state.formData.Form.items.push(ele);
            } else {
                this.addElement(ele);
            }

            this.setState({
                formData: this.state.formData,
                component: type,
                ref: ele.identify
            });

            window.setTimeout(function () {
                _this3.getConfig();
            }, 0);
        }
    }, {
        key: 'onRemoveItem',
        value: function onRemoveItem() {
            if (this.refs.rules) {
                this.refs.rules.reset({});
            }
            this.getConfig();
        }
    }, {
        key: 'onSortItem',
        value: function onSortItem() {
            this.getConfig();
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.getConfig();
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                _components.Layout,
                null,
                _react2.default.createElement(
                    _components.Sider,
                    { width: 150 },
                    _react2.default.createElement(
                        _components.Menu,
                        { onClick: this.addControl.bind(this), style: { width: 150 } },
                        _react2.default.createElement(
                            Item,
                            { 'data-item': 'input' },
                            'Input'
                        ),
                        _react2.default.createElement(
                            Item,
                            { 'data-item': 'inputnumber' },
                            'InputNumber'
                        ),
                        _react2.default.createElement(
                            Item,
                            { 'data-item': 'radio' },
                            'Radio'
                        ),
                        _react2.default.createElement(
                            Item,
                            { 'data-item': 'checkbox' },
                            'CheckBox'
                        ),
                        _react2.default.createElement(
                            Item,
                            { 'data-item': 'switch' },
                            'Switch'
                        ),
                        _react2.default.createElement(
                            Item,
                            { 'data-item': 'textarea' },
                            'TextArea'
                        ),
                        _react2.default.createElement(
                            Item,
                            { 'data-item': 'upload' },
                            'Upload'
                        ),
                        _react2.default.createElement(
                            Item,
                            { 'data-item': 'select' },
                            'Select'
                        ),
                        _react2.default.createElement(
                            Item,
                            { 'data-item': 'datetime' },
                            'DateTime'
                        ),
                        _react2.default.createElement(
                            Item,
                            { 'data-item': 'daterange' },
                            'DateRange'
                        ),
                        _react2.default.createElement(
                            Item,
                            { 'data-item': 'row' },
                            'Row'
                        ),
                        _react2.default.createElement(
                            Item,
                            { 'data-item': 'button' },
                            'Button'
                        ),
                        _react2.default.createElement(
                            Item,
                            { 'data-item': 'label' },
                            'Label'
                        ),
                        _react2.default.createElement(
                            Item,
                            { 'data-item': 'promote', block: true },
                            'Promote'
                        )
                    )
                ),
                _react2.default.createElement(
                    Content,
                    { style: { padding: 0 } },
                    _react2.default.createElement(
                        _components.Card,
                        { title: '\u8868\u5355' },
                        _react2.default.createElement(
                            'div',
                            { onClick: this.switchComponent.bind(this, 'Form', 'form') },
                            _react2.default.createElement(_data2Form2.default, { ref: 'data2form', data: this.state.formData.Form,
                                onSelect: this.selectContainer.bind(this),
                                onClick: this.onSelectItem.bind(this),
                                onRemove: this.onRemoveItem.bind(this),
                                onSort: this.onSortItem.bind(this)
                            })
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'mt-20' },
                            _react2.default.createElement(
                                'span',
                                null,
                                '\u6700\u7EC8\u7ED3\u6784'
                            ),
                            _react2.default.createElement(_components.TextArea, { autoHeight: true, grid: 1, ref: 'result', height: 300 })
                        )
                    )
                ),
                _react2.default.createElement(
                    _components.Sider,
                    { style: { width: 400 } },
                    _react2.default.createElement(
                        _components.Card,
                        { title: 'Props' },
                        _react2.default.createElement(
                            _components.Form,
                            { labelWidth: 80, useDefaultSubmitBtn: false },
                            this.showProps()
                        )
                    ),
                    _react2.default.createElement(
                        _components.Card,
                        { title: 'Rules' },
                        _react2.default.createElement(_rules2.default, { ref: 'rules', onChange: this.updateRules.bind(this) })
                    ),
                    _react2.default.createElement(
                        _components.Card,
                        { title: 'Messages' },
                        _react2.default.createElement(_messages2.default, { ref: 'messages', onChange: this.updateMessages.bind(this) })
                    )
                )
            );
        }
    }]);

    return Page;
}(_react2.default.Component);

exports.default = Page;

/***/ }),

/***/ "te8S":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__("CwoH");

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__("9qb7");

var _classnames2 = _interopRequireDefault(_classnames);

var _components = __webpack_require__("ZouD");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Data2Form = function (_React$Component) {
    _inherits(Data2Form, _React$Component);

    function Data2Form(props) {
        _classCallCheck(this, Data2Form);

        var _this = _possibleConstructorReturn(this, (Data2Form.__proto__ || Object.getPrototypeOf(Data2Form)).call(this, props));

        _this.state = {
            data: props.data || {},
            initData: props.initData || {}
        };

        _this.itemIndex = 0;
        _this.selectedItem = null;
        return _this;
    }

    _createClass(Data2Form, [{
        key: 'mergeProps',
        value: function mergeProps(target, source, props) {
            if (props) {
                props.forEach(function (prop) {
                    if (source[prop] !== undefined) {
                        target[prop] = source[prop];
                    }
                });
            }
        }
    }, {
        key: 'onChange',
        value: function onChange(item, value, selectItem) {
            item.value = value;

            if (this.props.onChange) {
                this.props.onChange(item, value, selectItem);
            }

            this.emit('change', item, value, selectItem);
        }
    }, {
        key: 'onClick',
        value: function onClick(item) {
            if (this.selectedItem) {
                this.selectedItem.unSelect();
            }
            this.selectedItem = item;

            if (this.props.onClick) {
                this.props.onClick(item);
            }
        }
    }, {
        key: 'onSelect',
        value: function onSelect(item) {
            if (this.props.onSelect) {
                this.props.onSelect(item);
            }
        }
    }, {
        key: 'onRemove',
        value: function onRemove(formItem, item, items) {
            if (this.props.onRemove) {
                this.props.onRemove(formItem, item, items);
            }
            this.setState({
                data: this.state.data
            });
        }
    }, {
        key: 'onSort',
        value: function onSort() {
            if (this.props.onSort) {
                this.props.onSort();
            }
            this.setState({
                data: this.state.data
            });
        }
    }, {
        key: 'renderItems',
        value: function renderItems(items) {
            var _this2 = this;

            if (items) {
                return items.map(function (item) {
                    return _react2.default.createElement(FormItem, {
                        onClick: _this2.onClick.bind(_this2),
                        onRemove: _this2.onRemove.bind(_this2),
                        onSort: _this2.onSort.bind(_this2),
                        items: items,
                        item: item,
                        key: item.identify,
                        form: _this2 });
                });
            }
            return null;
        }
    }, {
        key: 'renderFormRow',
        value: function renderFormRow(item) {
            var items = this.renderItems(item.children);
            return _react2.default.createElement(
                _components.Form.Row,
                _extends({}, item.props, { key: this.itemIndex++ }),
                items
            );
        }
    }, {
        key: 'getForm',
        value: function getForm() {
            return this.refs.form;
        }
    }, {
        key: 'getFormItems',
        value: function getFormItems() {
            this.refs.form.getItems();
        }
    }, {
        key: 'isValid',
        value: function isValid() {
            return this.refs.form.isValid();
        }
    }, {
        key: 'getFormData',
        value: function getFormData() {
            return this.refs.form.getFormParams();
        }
    }, {
        key: 'setFormData',
        value: function setFormData(data) {
            this.setState({ initData: data });
        }
    }, {
        key: 'getFormControl',
        value: function getFormControl(name) {
            return this.refs.form.getFormControl(name);
        }
    }, {
        key: 'getItem',
        value: function getItem(name) {
            return this.refs.form.getItem(name);
        }
    }, {
        key: 'render',
        value: function render() {
            var formData = this.state.data;
            var formProps = Object.assign({}, formData.props || {});
            this.mergeProps(formProps, formData, ['action', 'method', 'encType']);
            return _react2.default.createElement(
                _components.Form,
                _extends({ ref: 'form' }, formProps),
                this.renderItems(formData.items)
            );
        }
    }]);

    return Data2Form;
}(_react2.default.Component);

var FormItem = function (_React$Component2) {
    _inherits(FormItem, _React$Component2);

    function FormItem(props) {
        _classCallCheck(this, FormItem);

        var _this3 = _possibleConstructorReturn(this, (FormItem.__proto__ || Object.getPrototypeOf(FormItem)).call(this, props));

        _this3.state = {
            item: props.item,
            active: false
        };
        return _this3;
    }

    _createClass(FormItem, [{
        key: 'getType',
        value: function getType() {
            return this.state.item.type;
        }
    }, {
        key: 'update',
        value: function update(item) {
            this.setState({ item: item });
        }
    }, {
        key: 'getName',
        value: function getName() {
            return this.state.item.name;
        }
    }, {
        key: 'getIdentify',
        value: function getIdentify() {
            return this.state.item.identify;
        }
    }, {
        key: 'select',
        value: function select() {
            this.setState({ active: true });
            this.props.form.onSelect(this.state.item);
        }
    }, {
        key: 'unSelect',
        value: function unSelect() {
            this.setState({ active: false });
        }
    }, {
        key: 'onClick',
        value: function onClick(e) {
            e.preventDefault();
            e.stopPropagation();
            if (this.props.onClick) {
                this.props.onClick(this);
            }

            if (this.state.item.type === 'row') {
                this.select();
            }
        }
    }, {
        key: 'removeItem',
        value: function removeItem(e) {
            e.preventDefault();
            e.stopPropagation();
            if (this.props.items) {
                var index = this.props.items.indexOf(this.state.item);
                this.props.items.splice(index, 1);

                if (this.props.onRemove) {
                    this.props.onRemove(this, this.state.item, this.props.items);
                }
            }
        }
    }, {
        key: 'sortItem',
        value: function sortItem(e) {
            e.preventDefault();
            e.stopPropagation();
            if (this.props.items) {
                var index = this.props.items.indexOf(this.state.item);
                if (index === 0) {
                    return;
                }
                var temp = this.props.items[index];
                this.props.items[index] = this.props.items[index - 1];
                this.props.items[index - 1] = temp;

                if (this.props.onSort) {
                    this.props.onSort(this);
                }
            }
        }
    }, {
        key: 'mergeProps',
        value: function mergeProps(target, source, props) {
            if (props) {
                props.forEach(function (prop) {
                    if (source[prop] !== undefined) {
                        target[prop] = source[prop];
                    }
                });
            }
        }
    }, {
        key: 'renderItem',
        value: function renderItem(itemProps) {
            if (itemProps.type === 'button') {
                return _react2.default.createElement(
                    _components.Button,
                    itemProps,
                    itemProps.label
                );
            } else if (itemProps.type === 'label') {
                return _react2.default.createElement(
                    'span',
                    itemProps,
                    itemProps.label
                );
            } else if (itemProps.type === 'promote') {
                return _react2.default.createElement(
                    'div',
                    itemProps,
                    itemProps.label
                );
            } else {
                return _react2.default.createElement(_components.FormControl, _extends({}, itemProps, { label: itemProps.label }));
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var item = this.state.item;
            if (item.type !== 'row') {
                var itemProps = Object.assign({}, item.props || {});
                itemProps = Object.assign(itemProps, item);

                for (var key in itemProps) {
                    if (itemProps[key] === '') {
                        delete itemProps[key];
                    }
                }
                var className = (0, _classnames2.default)('form-item', {
                    block: item.block
                });
                return _react2.default.createElement(
                    'div',
                    { onClick: this.onClick.bind(this), className: className },
                    _react2.default.createElement(
                        'div',
                        { className: 'form-tools' },
                        _react2.default.createElement(_components.FontIcon, { icon: 'level-up', onClick: this.sortItem.bind(this), className: 'mr-5' }),
                        _react2.default.createElement(_components.FontIcon, { icon: 'trash', onClick: this.removeItem.bind(this) })
                    ),
                    this.renderItem(itemProps)
                );
            } else {
                var items = this.props.form.renderItems(item.children);
                var _itemProps = Object.assign({}, item.props || {});
                _itemProps = Object.assign(_itemProps, item);
                for (var _key in _itemProps) {
                    if (_itemProps[_key] === '') {
                        delete _itemProps[_key];
                    }
                }
                var _className = (0, _classnames2.default)('form-item-row', {
                    active: this.state.active
                });
                return _react2.default.createElement(
                    'div',
                    { onClick: this.onClick.bind(this), className: _className },
                    _react2.default.createElement(
                        'div',
                        { className: 'form-tools' },
                        _react2.default.createElement(_components.FontIcon, { icon: 'level-up', onClick: this.sortItem.bind(this), className: 'mr-5' }),
                        _react2.default.createElement(_components.FontIcon, { icon: 'trash', onClick: this.removeItem.bind(this) })
                    ),
                    _react2.default.createElement(
                        _components.Form.Row,
                        _extends({}, _itemProps, { key: item.name }),
                        items
                    )
                );
            }
        }
    }]);

    return FormItem;
}(_react2.default.Component);

exports.default = Data2Form;

/***/ })

});