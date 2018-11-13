webpackJsonp([4],{

/***/ "/C1n":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mockInterfaceURL = exports.mockInterfaceCopy = exports.mockInterfaceDelete = exports.mockInterfaceAdd = exports.mockInterfaceTemplate = exports.mockInterfaceSchema = exports.mockInterfaceMockData = exports.mockInterfaceDetail = exports.mockInterfaceList = exports.mockProjectDelete = exports.mockProjectAdd = exports.mockProjectList = undefined;

var _fetch = __webpack_require__("r8Fr");

var _fetch2 = _interopRequireDefault(_fetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mockProjectList = exports.mockProjectList = function mockProjectList() {
  return (0, _fetch2.default)('/project/list', {});
};
var mockProjectAdd = exports.mockProjectAdd = function mockProjectAdd(data) {
  return (0, _fetch2.default)('/project/add', data, 'POST');
};
var mockProjectDelete = exports.mockProjectDelete = function mockProjectDelete(id) {
  return (0, _fetch2.default)('/project/delete/' + id, {});
};

var mockInterfaceList = exports.mockInterfaceList = function mockInterfaceList(projectId) {
  return (0, _fetch2.default)('/interface/list/' + projectId, {});
};
var mockInterfaceDetail = exports.mockInterfaceDetail = function mockInterfaceDetail(id) {
  return (0, _fetch2.default)('/interface/detail/' + id, {});
};
var mockInterfaceMockData = exports.mockInterfaceMockData = function mockInterfaceMockData(intf) {
  return (0, _fetch2.default)('/mock/' + intf.project.name + '/' + intf.url, {});
};
var mockInterfaceSchema = exports.mockInterfaceSchema = function mockInterfaceSchema(id, schema) {
  return (0, _fetch2.default)('/interface/saveSchema', { id: id, schema: schema }, 'POST');
};
var mockInterfaceTemplate = exports.mockInterfaceTemplate = function mockInterfaceTemplate(id, template) {
  return (0, _fetch2.default)('/interface/saveTemplate', { id: id, template: template }, 'GET');
};
var mockInterfaceAdd = exports.mockInterfaceAdd = function mockInterfaceAdd(data) {
  return (0, _fetch2.default)('/interface/add', data, 'POST');
};
var mockInterfaceDelete = exports.mockInterfaceDelete = function mockInterfaceDelete(id) {
  return (0, _fetch2.default)('/interface/delete/' + id, {});
};
var mockInterfaceCopy = exports.mockInterfaceCopy = function mockInterfaceCopy(id) {
  return (0, _fetch2.default)('/interface/copy/' + id, {});
};
var mockInterfaceURL = exports.mockInterfaceURL = function mockInterfaceURL(id, url) {
  return (0, _fetch2.default)('/interface/url', { id: id, url: url });
};

/***/ }),

/***/ "Zq/2":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__("CwoH");

var _react2 = _interopRequireDefault(_react);

var _components = __webpack_require__("ZouD");

var _reactRedux = __webpack_require__("Lf13");

var _redux = __webpack_require__("Vz5A");

var _interfaces = __webpack_require__("yIZp");

var _interfaces2 = _interopRequireDefault(_interfaces);

var _reactRouterDom = __webpack_require__("VGOX");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Page = function (_Component) {
    _inherits(Page, _Component);

    function Page() {
        _classCallCheck(this, Page);

        return _possibleConstructorReturn(this, (Page.__proto__ || Object.getPrototypeOf(Page)).apply(this, arguments));
    }

    _createClass(Page, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            var _props = this.props,
                actions = _props.actions,
                params = _props.params;

            actions.list(params.projectId);
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            var actions = this.props.actions;

            actions.clear();
            _components.Notification.clear();
        }
    }, {
        key: 'switchLayout',
        value: function switchLayout(btn) {
            var type = btn.props["data-type"];
            var actions = this.props.actions;

            actions.switchLayout(type);
        }
    }, {
        key: 'showDeleteConfirm',
        value: function showDeleteConfirm(id) {
            _components.Notification.close('delete_confirm');
            _components.Notification.question({
                title: 'Tip',
                duration: 0,
                key: 'delete_confirm',
                desc: 'delete this interface ?',
                btn: _react2.default.createElement(
                    _components.Button,
                    { flat: true, theme: 'primary', onClick: this.deleteInterface.bind(this, id) },
                    'confirm'
                )
            });
        }
    }, {
        key: 'deleteInterface',
        value: function deleteInterface(id) {
            var actions = this.props.actions;

            actions.deleteInterface(id);
        }
    }, {
        key: 'showCopyConfirm',
        value: function showCopyConfirm(id) {
            _components.Notification.close('copy_confirm');
            _components.Notification.question({
                title: 'Tip',
                duration: 0,
                key: 'copy_confirm',
                desc: 'copy this interface ?',
                btn: _react2.default.createElement(
                    _components.Button,
                    { flat: true, theme: 'primary', onClick: this.copyInterface.bind(this, id) },
                    'confirm'
                )
            });
        }
    }, {
        key: 'copyInterface',
        value: function copyInterface(id) {
            var actions = this.props.actions;

            actions.copyInterface(id);
        }
    }, {
        key: 'listInterfaces',
        value: function listInterfaces(interfaces) {
            var _this2 = this;

            if (interfaces) {
                return interfaces.map(function (intf) {
                    var type = intf.dataType === 'array' ? _react2.default.createElement(_components.FontIcon, { icon: 'array', font: 'tools', color: '#13CE66', style: { fontSize: 20 }, className: 'mr-10', title: '\u6570\u7EC4\u7C7B\u578B\u6570\u636E' }) : _react2.default.createElement(_components.FontIcon, { icon: 'obj', font: 'tools', color: '#13CE66', style: { fontSize: 20 }, className: 'mr-10', title: '\u5BF9\u8C61\u7C7B\u578B\u6570\u636E' });
                    var lazy = intf.lazy ? _react2.default.createElement(
                        'span',
                        null,
                        _react2.default.createElement(_components.FontIcon, { icon: 'lazy', font: 'tools', className: 'mr-5', title: '\u5EF6\u65F6' }),
                        _react2.default.createElement(
                            'span',
                            { className: 'mr-10' },
                            intf.lazyTime
                        )
                    ) : null;
                    return _react2.default.createElement(
                        _components.Card,
                        { style: { color: '#20A0FF', minWidth: 600 },
                            className: 'mb-15 animated zoomIn' },
                        _react2.default.createElement(_components.FontIcon, { icon: 'api', font: 'tools', style: { fontSize: 30 }, className: 'mr-10' }),
                        intf.schema ? _react2.default.createElement(_components.FontIcon, { icon: 'rule', font: 'tools', className: 'mr-10', style: { fontSize: 20 }, color: '#13CE66' }) : null,
                        type,
                        _react2.default.createElement(
                            'div',
                            { className: 'pull-right mr-10' },
                            lazy,
                            _react2.default.createElement(_components.FontIcon, { icon: 'request', font: 'tools', className: 'mr-5', title: '\u8BF7\u6C42\u6570' }),
                            _react2.default.createElement(
                                'span',
                                { className: 'mr-10' },
                                intf.reqNum
                            ),
                            _react2.default.createElement(_components.FontIcon, { icon: 'clock', font: 'tools', className: 'mr-10', title: '\u521B\u5EFA\u65F6\u95F4' }),
                            _react2.default.createElement(
                                'span',
                                null,
                                intf.ct_time
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { style: { fontSize: 24 } },
                            _react2.default.createElement(
                                _reactRouterDom.Link,
                                { to: '/interface/' + intf.id },
                                _react2.default.createElement(
                                    'span',
                                    { className: 'mr-15' },
                                    intf.url
                                )
                            ),
                            _react2.default.createElement(
                                'span',
                                { className: 'text-promote mr-20 ml-10' },
                                intf.desc ? '(' + intf.desc + ')' : ''
                            ),
                            _react2.default.createElement(
                                'span',
                                { className: 'pull-right' },
                                _react2.default.createElement(_components.FontIcon, { className: 'text-success mr-5', icon: 'copy', font: 'tools',
                                    style: { fontSize: 15 }, title: '\u590D\u5236\u63A5\u53E3',
                                    onClick: _this2.showCopyConfirm.bind(_this2, intf.id) }),
                                _react2.default.createElement(_components.FontIcon, { className: 'text-danger', icon: 'delete', font: 'tools',
                                    style: { fontSize: 15 }, title: '\u5220\u9664\u63A5\u53E3',
                                    onClick: _this2.showDeleteConfirm.bind(_this2, intf.id) })
                            )
                        ),
                        intf.ispassed ? _react2.default.createElement(_components.FontIcon, { icon: 'pass', font: 'tools', className: 'mr-10', style: { fontSize: 65, position: 'absolute', right: -13, top: -21 } }) : null
                    );
                });
            }
            return null;
        }
    }, {
        key: 'gridInterfaces',
        value: function gridInterfaces(interfaces) {
            var _this3 = this;

            if (interfaces) {
                return interfaces.map(function (intf) {
                    var type = intf.dataType === 'array' ? _react2.default.createElement(_components.FontIcon, { icon: 'array', font: 'tools', color: '#13CE66', style: { fontSize: 20 }, className: 'mr-10', title: '\u6570\u7EC4\u7C7B\u578B\u6570\u636E' }) : _react2.default.createElement(_components.FontIcon, { icon: 'obj', font: 'tools', color: '#13CE66', style: { fontSize: 20 }, className: 'mr-10', title: '\u5BF9\u8C61\u7C7B\u578B\u6570\u636E' });
                    var lazy = intf.lazy ? _react2.default.createElement(
                        'span',
                        null,
                        _react2.default.createElement(_components.FontIcon, { icon: 'lazy', font: 'tools', className: 'mr-5', title: '\u5EF6\u65F6' }),
                        _react2.default.createElement(
                            'span',
                            { className: 'mr-10' },
                            intf.lazyTime
                        )
                    ) : null;
                    return _react2.default.createElement(
                        _components.Col,
                        { grid: 0.25 },
                        _react2.default.createElement(
                            _components.Card,
                            { style: { color: '#20A0FF' },
                                className: 'mb-15 project-item animated flipInX' },
                            _react2.default.createElement(
                                'div',
                                { style: { whiteSpace: 'nowrap' } },
                                _react2.default.createElement(_components.FontIcon, { icon: 'api', font: 'tools', style: { fontSize: 30 }, className: 'mr-10' }),
                                intf.schema ? _react2.default.createElement(_components.FontIcon, { icon: 'rule', font: 'tools', className: 'mr-10', style: { fontSize: 20 }, color: '#13CE66' }) : null,
                                type,
                                _react2.default.createElement(
                                    'div',
                                    { className: 'pull-right mr-10 mt-10', style: { whiteSpace: 'nowrap' } },
                                    lazy,
                                    _react2.default.createElement(_components.FontIcon, { icon: 'request', font: 'tools', className: 'mr-5', title: '\u8BF7\u6C42\u6570' }),
                                    _react2.default.createElement(
                                        'span',
                                        { className: 'mr-10' },
                                        intf.reqNum
                                    )
                                )
                            ),
                            _react2.default.createElement(
                                'div',
                                { style: { fontSize: 20, position: 'relative' } },
                                _react2.default.createElement(
                                    _reactRouterDom.Link,
                                    { to: '/interface/' + intf.id },
                                    _react2.default.createElement(
                                        'span',
                                        { className: 'mr-15' },
                                        intf.url
                                    )
                                ),
                                _react2.default.createElement(
                                    'span',
                                    { style: { position: 'absolute', right: 10, top: 0 } },
                                    _react2.default.createElement(_components.FontIcon, { className: 'text-success mr-5', icon: 'copy', font: 'tools',
                                        style: { fontSize: 15 }, title: '\u590D\u5236\u63A5\u53E3',
                                        onClick: _this3.showCopyConfirm.bind(_this3, intf.id) }),
                                    _react2.default.createElement(_components.FontIcon, { className: 'text-danger', icon: 'delete', font: 'tools',
                                        style: { fontSize: 15 }, title: '\u5220\u9664\u63A5\u53E3',
                                        onClick: _this3.showDeleteConfirm.bind(_this3, intf.id) })
                                )
                            ),
                            intf.ispassed ? _react2.default.createElement(_components.FontIcon, { icon: 'pass', font: 'tools', className: 'mr-10', style: { fontSize: 65, position: 'absolute', right: -13, top: -21 } }) : null
                        )
                    );
                });
            }
            return null;
        }
    }, {
        key: 'renderInterfaces',
        value: function renderInterfaces() {
            var state = this.props.state;
            var interfacesData = state.interfacesData,
                layout = state.layout;


            if (interfacesData) {
                if (layout === 'list') {
                    return this.listInterfaces(interfacesData.interfaces);
                } else {
                    return _react2.default.createElement(
                        _components.Row,
                        null,
                        this.gridInterfaces(interfacesData.interfaces)
                    );
                }
            }

            return null;
        }
    }, {
        key: 'delSomeStatus',
        value: function delSomeStatus() {
            this.delDeleteStatus();

            this.delCopyStatus();
        }
    }, {
        key: 'delDeleteStatus',
        value: function delDeleteStatus() {
            var _props2 = this.props,
                state = _props2.state,
                params = _props2.params,
                actions = _props2.actions;
            var deleteFlag = state.deleteFlag;


            if (deleteFlag) {
                _components.Notification.close('delete_confirm');
                if (!deleteFlag.success) {
                    _components.Notification.error({
                        title: '提示',
                        desc: '删除失败'
                    });
                } else {
                    actions.list(params.projectId);
                }
            }
        }
    }, {
        key: 'delCopyStatus',
        value: function delCopyStatus() {
            var _props3 = this.props,
                state = _props3.state,
                params = _props3.params,
                actions = _props3.actions;
            var copyFlag = state.copyFlag;


            if (copyFlag) {
                _components.Notification.close('copy_confirm');
                if (!copyFlag.success) {
                    _components.Notification.error({
                        title: '提示',
                        desc: '复制失败'
                    });
                } else {
                    actions.list(params.projectId);
                }
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _props4 = this.props,
                state = _props4.state,
                params = _props4.params;
            var layout = state.layout,
                interfacesData = state.interfacesData;

            this.delSomeStatus();

            return _react2.default.createElement(
                'div',
                { style: { padding: 50 }, key: 'interface_list' },
                _react2.default.createElement(
                    'div',
                    { className: 'inner-vertical-align' },
                    _react2.default.createElement(_components.FontIcon, { font: 'tools', icon: 'apis', color: '#20A0FF', className: 'mr-10', style: { fontSize: 50 } }),
                    _react2.default.createElement(
                        'span',
                        null,
                        interfacesData ? interfacesData.project.alias : '',
                        '\uFF08/',
                        interfacesData ? interfacesData.project.name : '',
                        '\uFF09\u9879\u76EE\u63A5\u53E3\u5217\u8868'
                    ),
                    _react2.default.createElement(
                        'span',
                        { className: 'pull-right mt-20', style: { fontSize: 14 } },
                        _react2.default.createElement(
                            _reactRouterDom.Link,
                            { to: '/interfaces_add/' + params.projectId },
                            _react2.default.createElement(
                                _components.Button,
                                { theme: 'primary', raised: true, className: 'mr-10' },
                                '\u6DFB\u52A0\u63A5\u53E3'
                            )
                        ),
                        _react2.default.createElement(
                            _components.ButtonGroup,
                            { style: { color: '#20A0FF' }, onSelect: this.switchLayout.bind(this) },
                            _react2.default.createElement(_components.Button, { icon: 'th-large', theme: 'primary', active: layout === 'grid', 'data-type': 'grid' }),
                            _react2.default.createElement(_components.Button, { icon: 'th-list', theme: 'primary', active: layout === 'list', 'data-type': 'list' })
                        )
                    )
                ),
                this.renderInterfaces()
            );
        }
    }]);

    return Page;
}(_react.Component);

var mapStateToProps = function mapStateToProps(state, props) {
    return {
        state: state.interfaces,
        params: props.params,
        match: props.match
    };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return {
        actions: (0, _redux.bindActionCreators)(_interfaces2.default, dispatch)
    };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Page);

/***/ }),

/***/ "r8Fr":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var HOST = "";

exports.default = function () {
	var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
		var url = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
		var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
		var type = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'GET';
		var method = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'fetch';
		var dataStr, requestConfig, response, responseJson;
		return regeneratorRuntime.wrap(function _callee$(_context) {
			while (1) {
				switch (_context.prev = _context.next) {
					case 0:
						type = type.toUpperCase();
						url = HOST + url;

						if (type == 'GET') {
							dataStr = '';

							Object.keys(data).forEach(function (key) {
								dataStr += key + '=' + data[key] + '&';
							});

							if (dataStr !== '') {
								dataStr = dataStr.substr(0, dataStr.lastIndexOf('&'));
								url = url + '?' + dataStr;
							}
                        }
                        if(url.indexOf('?') !== -1){
                            url = url + '&_=' +new Date().getTime();
                        } else {
                            url += '?_=' +new Date().getTime();
                        }

						if (!(window.fetch && method == 'fetch')) {
							_context.next = 21;
							break;
						}

						requestConfig = {
							credentials: 'include',
							method: type,
							headers: {
								'Accept': 'application/json',
								'Content-Type': 'application/json'
							},
							mode: "cors",
							cache: "force-cache"
						};


						if (type == 'POST') {
							Object.defineProperty(requestConfig, 'body', {
								value: JSON.stringify(data)
							});
						}

						_context.prev = 6;
						_context.next = 9;
						return fetch(url, requestConfig);

					case 9:
						response = _context.sent;
						_context.next = 12;
						return response.json();

					case 12:
						responseJson = _context.sent;
						return _context.abrupt('return', responseJson);

					case 16:
						_context.prev = 16;
						_context.t0 = _context['catch'](6);
						throw new Error(_context.t0);

					case 19:
						_context.next = 22;
						break;

					case 21:
						return _context.abrupt('return', new Promise(function (resolve, reject) {
							var requestObj = void 0;
							if (window.XMLHttpRequest) {
								requestObj = new XMLHttpRequest();
							} else {
								requestObj = new ActiveXObject();
							}

							var sendData = '';
							if (type == 'POST') {
								sendData = JSON.stringify(data);
							}

							requestObj.open(type, url, true);
							requestObj.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
							requestObj.send(sendData);

							requestObj.onreadystatechange = function () {
								if (requestObj.readyState == 4) {
									if (requestObj.status == 200) {
										var obj = requestObj.response;
										if ((typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) !== 'object') {
											obj = JSON.parse(obj);
										}
										resolve(obj);
									} else {
										reject(requestObj);
									}
								}
							};
						}));

					case 22:
					case 'end':
						return _context.stop();
				}
			}
		}, _callee, undefined, [[6, 16]]);
	}));

	return function () {
		return _ref.apply(this, arguments);
	};
}();

/***/ }),

/***/ "yIZp":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _reduxActions = __webpack_require__("bKsd");

var _index = __webpack_require__("/C1n");

var WebAPI = _interopRequireWildcard(_index);

var _types = __webpack_require__("RjGF");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var actions = {
    list: function list(projectId) {
        return function () {
            var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(dispatch, getState) {
                var list;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                if (!getState().interfaces.isFetching) {
                                    _context.next = 2;
                                    break;
                                }

                                return _context.abrupt('return');

                            case 2:
                                dispatch(actions.beginFetch());

                                _context.next = 5;
                                return WebAPI.mockInterfaceList(projectId);

                            case 5:
                                list = _context.sent;

                                dispatch(actions.doneFetch(list));

                            case 7:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, undefined);
            }));

            return function (_x, _x2) {
                return _ref.apply(this, arguments);
            };
        }();
    },

    beginFetch: function beginFetch() {
        return {
            type: _types.BEGIN_GET_INTERFACES
        };
    },

    doneFetch: function doneFetch(projects) {
        return {
            type: _types.INTERFACES_LIST,
            payload: projects
        };
    },

    switchLayout: function switchLayout(layout) {
        return {
            type: _types.INTERFACES_LAYOUT,
            payload: layout
        };
    },

    deleteInterface: function deleteInterface(id) {
        return function () {
            var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee2(dispatch, getState) {
                var ret;
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                if (!getState().interfaces.isFetching) {
                                    _context2.next = 2;
                                    break;
                                }

                                return _context2.abrupt('return');

                            case 2:

                                dispatch(actions.beginFetch());

                                _context2.next = 5;
                                return WebAPI.mockInterfaceDelete(id);

                            case 5:
                                ret = _context2.sent;

                                dispatch(actions.doneDelete(ret));

                            case 7:
                            case 'end':
                                return _context2.stop();
                        }
                    }
                }, _callee2, undefined);
            }));

            return function (_x3, _x4) {
                return _ref2.apply(this, arguments);
            };
        }();
    },

    doneDelete: function doneDelete(ret) {
        return {
            type: _types.INTERFACE_DELETE_DONE,
            payload: ret
        };
    },

    copyInterface: function copyInterface(id) {
        return function () {
            var _ref3 = _asyncToGenerator(regeneratorRuntime.mark(function _callee3(dispatch, getState) {
                var ret;
                return regeneratorRuntime.wrap(function _callee3$(_context3) {
                    while (1) {
                        switch (_context3.prev = _context3.next) {
                            case 0:
                                if (!getState().interfaces.isFetching) {
                                    _context3.next = 2;
                                    break;
                                }

                                return _context3.abrupt('return');

                            case 2:

                                dispatch(actions.beginFetch());

                                _context3.next = 5;
                                return WebAPI.mockInterfaceCopy(id);

                            case 5:
                                ret = _context3.sent;

                                dispatch(actions.doneCopy(ret));

                            case 7:
                            case 'end':
                                return _context3.stop();
                        }
                    }
                }, _callee3, undefined);
            }));

            return function (_x5, _x6) {
                return _ref3.apply(this, arguments);
            };
        }();
    },

    doneCopy: function doneCopy(ret) {
        return {
            type: _types.INTERFACE_COPY_DONE,
            payload: ret
        };
    },

    clear: function clear() {
        return {
            type: 'clear'
        };
    }
};

exports.default = actions;

/***/ })

});