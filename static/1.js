webpackJsonp([1],{

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

/***/ "2mMT":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _reduxActions = __webpack_require__("bKsd");

var _index = __webpack_require__("/C1n");

var WebAPI = _interopRequireWildcard(_index);

var _reactRouterRedux = __webpack_require__("zKE0");

var _types = __webpack_require__("RjGF");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var actions = {
    save: function save(data) {
        return function () {
            var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(dispatch, getState) {
                var ret;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                if (!getState().mockState.isFetching) {
                                    _context.next = 2;
                                    break;
                                }

                                return _context.abrupt('return');

                            case 2:

                                dispatch(actions.beginFetch());

                                _context.next = 5;
                                return WebAPI.mockInterfaceAdd(data);

                            case 5:
                                ret = _context.sent;

                                dispatch(actions.doneFetch(ret));

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

    goBack: function goBack() {
        return function () {
            var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee2(dispatch, getState) {
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                dispatch((0, _reactRouterRedux.goBack)());

                            case 1:
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

    beginFetch: function beginFetch() {
        return {
            type: _types.INTERFACE_SAVE_BEGIN
        };
    },

    doneFetch: function doneFetch(ret) {
        return {
            type: _types.INTERFACE_SAVE_DONE,
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

/***/ }),

/***/ "4fE7":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "cmui-font/8e7baace3c3e7575c8f1e0fca9aa9a9d.svg";

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

/***/ "cQAH":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("lcwS")(undefined);
// imports


// module
exports.push([module.i, "/* reset styling (prevent conflicts with bootstrap, materialize.css, etc.) */\n\ndiv.jsoneditor .jsoneditor-search input {\n  height: auto;\n  border: inherit;\n}\n\ndiv.jsoneditor .jsoneditor-search input:focus {\n  border: none !important;\n  box-shadow: none !important;\n}\n\ndiv.jsoneditor table {\n  border-collapse: collapse;\n  width: auto;\n}\n\ndiv.jsoneditor td,\ndiv.jsoneditor th {\n  padding: 0;\n  display: table-cell;\n  text-align: left;\n  vertical-align: inherit;\n  border-radius: inherit;\n}\n\n\ndiv.jsoneditor-field,\ndiv.jsoneditor-value,\ndiv.jsoneditor-readonly {\n  border: 1px solid transparent;\n  min-height: 16px;\n  min-width: 32px;\n  padding: 2px;\n  margin: 1px;\n  word-wrap: break-word;\n  float: left;\n}\n\n/* adjust margin of p elements inside editable divs, needed for Opera, IE */\n\ndiv.jsoneditor-field p,\ndiv.jsoneditor-value p {\n  margin: 0;\n}\n\ndiv.jsoneditor-value {\n  word-break: break-word;\n}\n\ndiv.jsoneditor-readonly {\n  min-width: 16px;\n  color: gray;\n}\n\ndiv.jsoneditor-empty {\n  border-color: lightgray;\n  border-style: dashed;\n  border-radius: 2px;\n}\n\ndiv.jsoneditor-field.jsoneditor-empty::after,\ndiv.jsoneditor-value.jsoneditor-empty::after {\n  pointer-events: none;\n  color: lightgray;\n  font-size: 8pt;\n}\n\ndiv.jsoneditor-field.jsoneditor-empty::after {\n  content: \"field\";\n}\n\ndiv.jsoneditor-value.jsoneditor-empty::after {\n  content: \"value\";\n}\n\ndiv.jsoneditor-value.jsoneditor-url,\na.jsoneditor-value.jsoneditor-url {\n  color: green;\n  text-decoration: underline;\n}\n\na.jsoneditor-value.jsoneditor-url {\n  display: inline-block;\n  padding: 2px;\n  margin: 2px;\n}\n\na.jsoneditor-value.jsoneditor-url:hover,\na.jsoneditor-value.jsoneditor-url:focus {\n  color: #ee422e;\n}\n\ndiv.jsoneditor td.jsoneditor-separator {\n  padding: 3px 0;\n  vertical-align: top;\n  color: gray;\n}\n\ndiv.jsoneditor-field[contenteditable=true]:focus,\ndiv.jsoneditor-field[contenteditable=true]:hover,\ndiv.jsoneditor-value[contenteditable=true]:focus,\ndiv.jsoneditor-value[contenteditable=true]:hover,\ndiv.jsoneditor-field.jsoneditor-highlight,\ndiv.jsoneditor-value.jsoneditor-highlight {\n  background-color: #FFFFAB;\n  border: 1px solid yellow;\n  border-radius: 2px;\n}\n\ndiv.jsoneditor-field.jsoneditor-highlight-active,\ndiv.jsoneditor-field.jsoneditor-highlight-active:focus,\ndiv.jsoneditor-field.jsoneditor-highlight-active:hover,\ndiv.jsoneditor-value.jsoneditor-highlight-active,\ndiv.jsoneditor-value.jsoneditor-highlight-active:focus,\ndiv.jsoneditor-value.jsoneditor-highlight-active:hover {\n  background-color: #ffee00;\n  border: 1px solid #ffc700;\n  border-radius: 2px;\n}\n\ndiv.jsoneditor-value.jsoneditor-string {\n  color: #008000;\n}\n\ndiv.jsoneditor-value.jsoneditor-object,\ndiv.jsoneditor-value.jsoneditor-array {\n  min-width: 16px;\n  color: #808080;\n}\n\ndiv.jsoneditor-value.jsoneditor-number {\n  color: #ee422e;\n}\n\ndiv.jsoneditor-value.jsoneditor-boolean {\n  color: #ff8c00;\n}\n\ndiv.jsoneditor-value.jsoneditor-null {\n  color: #004ED0;\n}\n\ndiv.jsoneditor-value.jsoneditor-invalid {\n  color: #000000;\n}\n\ndiv.jsoneditor-tree button {\n  width: 24px;\n  height: 24px;\n  padding: 0;\n  margin: 0;\n  border: none;\n  cursor: pointer;\n  background: transparent url(" + __webpack_require__("4fE7") + ");\n}\n\ndiv.jsoneditor-mode-view tr.jsoneditor-expandable td.jsoneditor-tree,\ndiv.jsoneditor-mode-form tr.jsoneditor-expandable td.jsoneditor-tree {\n  cursor: pointer;\n}\n\ndiv.jsoneditor-tree button.jsoneditor-collapsed {\n  background-position: 0 -48px;\n}\n\ndiv.jsoneditor-tree button.jsoneditor-expanded {\n  background-position: 0 -72px;\n}\n\ndiv.jsoneditor-tree button.jsoneditor-contextmenu {\n  background-position: -48px -72px;\n}\n\ndiv.jsoneditor-tree button.jsoneditor-contextmenu:hover,\ndiv.jsoneditor-tree button.jsoneditor-contextmenu:focus,\ndiv.jsoneditor-tree button.jsoneditor-contextmenu.jsoneditor-selected,\ntr.jsoneditor-selected.jsoneditor-first button.jsoneditor-contextmenu {\n  background-position: -48px -48px;\n}\n\ndiv.jsoneditor-tree *:focus {\n  outline: none;\n}\n\ndiv.jsoneditor-tree button:focus {\n  /* TODO: nice outline for buttons with focus\n  outline: #97B0F8 solid 2px;\n  box-shadow: 0 0 8px #97B0F8;\n  */\n  background-color: #f5f5f5;\n  outline: #e5e5e5 solid 1px;\n}\n\ndiv.jsoneditor-tree button.jsoneditor-invisible {\n  visibility: hidden;\n  background: none;\n}\n\ndiv.jsoneditor {\n  color: #1A1A1A;\n  border: 1px solid #3883fa;\n  -moz-box-sizing: border-box;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n  width: 100%;\n  height: 100%;\n  position: relative;\n  padding: 0;\n  line-height: 100%;\n}\n\ndiv.jsoneditor-tree table.jsoneditor-tree {\n  border-collapse: collapse;\n  border-spacing: 0;\n  width: 100%;\n  margin: 0;\n}\n\ndiv.jsoneditor-outer {\n  position: static;\n  width: 100%;\n  height: 100%;\n  margin: -35px 0 0 0;\n  padding: 35px 0 0 0;\n  -moz-box-sizing: border-box;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n}\n\ntextarea.jsoneditor-text,\n.ace-jsoneditor {\n  min-height: 150px;\n}\n\ndiv.jsoneditor-tree {\n  width: 100%;\n  height: 100%;\n  position: relative;\n  overflow: auto;\n}\n\ntextarea.jsoneditor-text {\n  width: 100%;\n  height: 100%;\n  margin: 0;\n  -moz-box-sizing: border-box;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n  outline-width: 0;\n  border: none;\n  background-color: white;\n  resize: none;\n}\n\ntr.jsoneditor-highlight,\ntr.jsoneditor-selected {\n  background-color: #e6e6e6;\n}\n\ntr.jsoneditor-selected button.jsoneditor-dragarea,\ntr.jsoneditor-selected button.jsoneditor-contextmenu {\n  visibility: hidden;\n}\n\ntr.jsoneditor-selected.jsoneditor-first button.jsoneditor-dragarea,\ntr.jsoneditor-selected.jsoneditor-first button.jsoneditor-contextmenu {\n  visibility: visible;\n}\n\ndiv.jsoneditor-tree button.jsoneditor-dragarea {\n  background: url(" + __webpack_require__("4fE7") + ") -72px -72px;\n  cursor: move;\n}\n\ndiv.jsoneditor-tree button.jsoneditor-dragarea:hover,\ndiv.jsoneditor-tree button.jsoneditor-dragarea:focus,\ntr.jsoneditor-selected.jsoneditor-first button.jsoneditor-dragarea {\n  background-position: -72px -48px;\n}\n\ndiv.jsoneditor tr,\ndiv.jsoneditor th,\ndiv.jsoneditor td {\n  padding: 0;\n  margin: 0;\n}\n\ndiv.jsoneditor td {\n  vertical-align: top;\n}\n\ndiv.jsoneditor td.jsoneditor-tree {\n  vertical-align: top;\n}\n\ndiv.jsoneditor-field,\ndiv.jsoneditor-value,\ndiv.jsoneditor td,\ndiv.jsoneditor th,\ndiv.jsoneditor textarea,\n.jsoneditor-schema-error {\n  font-family: droid sans mono, consolas, monospace, courier new, courier, sans-serif;\n  font-size: 10pt;\n  color: #1A1A1A;\n}\n\n/* popover */\n\n.jsoneditor-schema-error {\n  cursor: default;\n  display: inline-block;\n  /*font-family: arial, sans-serif;*/\n  height: 24px;\n  line-height: 24px;\n  position: relative;\n  text-align: center;\n  width: 24px;\n}\n\ndiv.jsoneditor-tree .jsoneditor-schema-error {\n  width: 24px;\n  height: 24px;\n  padding: 0;\n  margin: 0 4px 0 0;\n  background: url(" + __webpack_require__("4fE7") + ")  -168px -48px;\n}\n\n.jsoneditor-schema-error .jsoneditor-popover {\n  background-color: #4c4c4c;\n  border-radius: 3px;\n  box-shadow: 0 0 5px rgba(0,0,0,0.4);\n  color: #fff;\n  display: none;\n  padding: 7px 10px;\n  position: absolute;\n  width: 200px;\n  z-index: 4;\n}\n\n.jsoneditor-schema-error .jsoneditor-popover.jsoneditor-above {\n  bottom: 32px;\n  left: -98px;\n}\n\n.jsoneditor-schema-error .jsoneditor-popover.jsoneditor-below {\n  top: 32px;\n  left: -98px;\n}\n\n.jsoneditor-schema-error .jsoneditor-popover.jsoneditor-left {\n  top: -7px;\n  right: 32px;\n}\n\n.jsoneditor-schema-error .jsoneditor-popover.jsoneditor-right {\n  top: -7px;\n  left: 32px;\n}\n\n.jsoneditor-schema-error .jsoneditor-popover:before {\n  border-right: 7px solid transparent;\n  border-left: 7px solid transparent;\n  content: '';\n  display: block;\n  left: 50%;\n  margin-left: -7px;\n  position: absolute;\n}\n\n.jsoneditor-schema-error .jsoneditor-popover.jsoneditor-above:before {\n  border-top: 7px solid #4c4c4c;\n  bottom: -7px;\n}\n\n.jsoneditor-schema-error .jsoneditor-popover.jsoneditor-below:before {\n  border-bottom: 7px solid #4c4c4c;\n  top: -7px;\n}\n\n.jsoneditor-schema-error .jsoneditor-popover.jsoneditor-left:before {\n  border-left: 7px solid #4c4c4c;\n  border-top: 7px solid transparent;\n  border-bottom: 7px solid transparent;\n  content: '';\n  top: 19px;\n  right: -14px;\n  left: inherit;\n  margin-left: inherit;\n  margin-top: -7px;\n  position: absolute;\n}\n\n.jsoneditor-schema-error .jsoneditor-popover.jsoneditor-right:before {\n  border-right: 7px solid #4c4c4c;\n  border-top: 7px solid transparent;\n  border-bottom: 7px solid transparent;\n  content: '';\n  top: 19px;\n  left: -14px;\n  margin-left: inherit;\n  margin-top: -7px;\n  position: absolute;\n}\n\n.jsoneditor-schema-error:hover .jsoneditor-popover,\n.jsoneditor-schema-error:focus .jsoneditor-popover {\n  display: block;\n  -webkit-animation: fade-in .3s linear 1, move-up .3s linear 1;\n  -moz-animation: fade-in .3s linear 1, move-up .3s linear 1;\n  -ms-animation: fade-in .3s linear 1, move-up .3s linear 1;\n}\n\n@-webkit-keyframes fade-in {\n  from {\n    opacity: 0;\n  }\n\n  to {\n    opacity: 1;\n  }\n}\n\n@-moz-keyframes fade-in {\n  from {\n    opacity: 0;\n  }\n\n  to {\n    opacity: 1;\n  }\n}\n\n@-ms-keyframes fade-in {\n  from {\n    opacity: 0;\n  }\n\n  to {\n    opacity: 1;\n  }\n}\n\n/*@-webkit-keyframes move-up {*/\n\n/*from   { bottom: 24px; }*/\n\n/*to { bottom: 32px; }*/\n\n/*}*/\n\n/*@-moz-keyframes move-up {*/\n\n/*from   { bottom: 24px; }*/\n\n/*to { bottom: 32px; }*/\n\n/*}*/\n\n/*@-ms-keyframes move-up {*/\n\n/*from   { bottom: 24px; }*/\n\n/*to { bottom: 32px; }*/\n\n/*}*/\n\n/* JSON schema errors displayed at the bottom of the editor in mode text and code */\n\n.jsoneditor .jsoneditor-text-errors {\n  width: 100%;\n  border-collapse: collapse;\n  background-color: #ffef8b;\n  border-top: 1px solid #ffd700;\n}\n\n.jsoneditor .jsoneditor-text-errors td {\n  padding: 3px 6px;\n  vertical-align: middle;\n}\n\n.jsoneditor-text-errors .jsoneditor-schema-error {\n  border: none;\n  width: 24px;\n  height: 24px;\n  padding: 0;\n  margin: 0 4px 0 0;\n  background: url(" + __webpack_require__("4fE7") + ")  -168px -48px;\n}\n/* ContextMenu - main menu */\n\ndiv.jsoneditor-contextmenu-root {\n  position: relative;\n  width: 0;\n  height: 0;\n}\n\ndiv.jsoneditor-contextmenu {\n  position: absolute;\n  box-sizing: content-box;\n  z-index: 99999;\n}\n\ndiv.jsoneditor-contextmenu ul,\ndiv.jsoneditor-contextmenu li {\n  box-sizing: content-box;\n  position: relative;\n}\n\ndiv.jsoneditor-contextmenu ul {\n  position: relative;\n  left: 0;\n  top: 0;\n  width: 128px;\n  background: white;\n  border: 1px solid #d3d3d3;\n  box-shadow: 2px 2px 12px rgba(128, 128, 128, 0.3);\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\ndiv.jsoneditor-contextmenu ul li button {\n  position: relative;\n  padding: 0 4px 0 0;\n  margin: 0;\n  width: 128px;\n  height: auto;\n  border: none;\n  cursor: pointer;\n  color: #4d4d4d;\n  background: transparent;\n  font-size: 10pt;\n  font-family: arial, sans-serif;\n  box-sizing: border-box;\n  text-align: left;\n}\n\n/* Fix button padding in firefox */\n\ndiv.jsoneditor-contextmenu ul li button::-moz-focus-inner {\n  padding: 0;\n  border: 0;\n}\n\ndiv.jsoneditor-contextmenu ul li button:hover,\ndiv.jsoneditor-contextmenu ul li button:focus {\n  color: #1a1a1a;\n  background-color: #f5f5f5;\n  outline: none;\n}\n\ndiv.jsoneditor-contextmenu ul li button.jsoneditor-default {\n  width: 96px;\n  /* 128px - 32px */\n}\n\ndiv.jsoneditor-contextmenu ul li button.jsoneditor-expand {\n  float: right;\n  width: 32px;\n  height: 24px;\n  border-left: 1px solid #e5e5e5;\n}\n\ndiv.jsoneditor-contextmenu div.jsoneditor-icon {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 24px;\n  height: 24px;\n  border: none;\n  padding: 0;\n  margin: 0;\n  background-image: url(" + __webpack_require__("4fE7") + ");\n}\n\ndiv.jsoneditor-contextmenu ul li ul div.jsoneditor-icon {\n  margin-left: 24px;\n}\n\ndiv.jsoneditor-contextmenu div.jsoneditor-text {\n  padding: 4px 0 4px 24px;\n  word-wrap: break-word;\n}\n\ndiv.jsoneditor-contextmenu div.jsoneditor-text.jsoneditor-right-margin {\n  padding-right: 24px;\n}\n\ndiv.jsoneditor-contextmenu ul li button div.jsoneditor-expand {\n  position: absolute;\n  top: 0;\n  right: 0;\n  width: 24px;\n  height: 24px;\n  padding: 0;\n  margin: 0 4px 0 0;\n  background: url(" + __webpack_require__("4fE7") + ") 0 -72px;\n  opacity: 0.4;\n}\n\ndiv.jsoneditor-contextmenu ul li button:hover div.jsoneditor-expand,\ndiv.jsoneditor-contextmenu ul li button:focus div.jsoneditor-expand,\ndiv.jsoneditor-contextmenu ul li.jsoneditor-selected div.jsoneditor-expand,\ndiv.jsoneditor-contextmenu ul li button.jsoneditor-expand:hover div.jsoneditor-expand,\ndiv.jsoneditor-contextmenu ul li button.jsoneditor-expand:focus div.jsoneditor-expand {\n  opacity: 1;\n}\n\ndiv.jsoneditor-contextmenu div.jsoneditor-separator {\n  height: 0;\n  border-top: 1px solid #e5e5e5;\n  padding-top: 5px;\n  margin-top: 5px;\n}\n\ndiv.jsoneditor-contextmenu button.jsoneditor-remove > div.jsoneditor-icon {\n  background-position: -24px -24px;\n}\n\ndiv.jsoneditor-contextmenu button.jsoneditor-remove:hover > div.jsoneditor-icon,\ndiv.jsoneditor-contextmenu button.jsoneditor-remove:focus > div.jsoneditor-icon {\n  background-position: -24px 0;\n}\n\ndiv.jsoneditor-contextmenu button.jsoneditor-append > div.jsoneditor-icon {\n  background-position: 0 -24px;\n}\n\ndiv.jsoneditor-contextmenu button.jsoneditor-append:hover > div.jsoneditor-icon,\ndiv.jsoneditor-contextmenu button.jsoneditor-append:focus > div.jsoneditor-icon {\n  background-position: 0 0;\n}\n\ndiv.jsoneditor-contextmenu button.jsoneditor-insert > div.jsoneditor-icon {\n  background-position: 0 -24px;\n}\n\ndiv.jsoneditor-contextmenu button.jsoneditor-insert:hover > div.jsoneditor-icon,\ndiv.jsoneditor-contextmenu button.jsoneditor-insert:focus > div.jsoneditor-icon {\n  background-position: 0 0;\n}\n\ndiv.jsoneditor-contextmenu button.jsoneditor-duplicate > div.jsoneditor-icon {\n  background-position: -48px -24px;\n}\n\ndiv.jsoneditor-contextmenu button.jsoneditor-duplicate:hover > div.jsoneditor-icon,\ndiv.jsoneditor-contextmenu button.jsoneditor-duplicate:focus > div.jsoneditor-icon {\n  background-position: -48px 0;\n}\n\ndiv.jsoneditor-contextmenu button.jsoneditor-sort-asc > div.jsoneditor-icon {\n  background-position: -168px -24px;\n}\n\ndiv.jsoneditor-contextmenu button.jsoneditor-sort-asc:hover > div.jsoneditor-icon,\ndiv.jsoneditor-contextmenu button.jsoneditor-sort-asc:focus > div.jsoneditor-icon {\n  background-position: -168px 0;\n}\n\ndiv.jsoneditor-contextmenu button.jsoneditor-sort-desc > div.jsoneditor-icon {\n  background-position: -192px -24px;\n}\n\ndiv.jsoneditor-contextmenu button.jsoneditor-sort-desc:hover > div.jsoneditor-icon,\ndiv.jsoneditor-contextmenu button.jsoneditor-sort-desc:focus > div.jsoneditor-icon {\n  background-position: -192px 0;\n}\n\n/* ContextMenu - sub menu */\n\ndiv.jsoneditor-contextmenu ul li button.jsoneditor-selected,\ndiv.jsoneditor-contextmenu ul li button.jsoneditor-selected:hover,\ndiv.jsoneditor-contextmenu ul li button.jsoneditor-selected:focus {\n  color: white;\n  background-color: #ee422e;\n}\n\ndiv.jsoneditor-contextmenu ul li {\n  overflow: hidden;\n}\n\ndiv.jsoneditor-contextmenu ul li ul {\n  display: none;\n  position: relative;\n  left: -10px;\n  top: 0;\n  border: none;\n  box-shadow: inset 0 0 10px rgba(128, 128, 128, 0.5);\n  padding: 0 10px;\n  /* TODO: transition is not supported on IE8-9 */\n  -webkit-transition: all 0.3s ease-out;\n  -moz-transition: all 0.3s ease-out;\n  -o-transition: all 0.3s ease-out;\n  transition: all 0.3s ease-out;\n}\n\n\n\ndiv.jsoneditor-contextmenu ul li ul li button {\n  padding-left: 24px;\n  animation: all ease-in-out 1s;\n}\n\ndiv.jsoneditor-contextmenu ul li ul li button:hover,\ndiv.jsoneditor-contextmenu ul li ul li button:focus {\n  background-color: #f5f5f5;\n}\n\ndiv.jsoneditor-contextmenu button.jsoneditor-type-string > div.jsoneditor-icon {\n  background-position: -144px -24px;\n}\n\ndiv.jsoneditor-contextmenu button.jsoneditor-type-string:hover > div.jsoneditor-icon,\ndiv.jsoneditor-contextmenu button.jsoneditor-type-string:focus > div.jsoneditor-icon,\ndiv.jsoneditor-contextmenu button.jsoneditor-type-string.jsoneditor-selected > div.jsoneditor-icon {\n  background-position: -144px 0;\n}\n\ndiv.jsoneditor-contextmenu button.jsoneditor-type-auto > div.jsoneditor-icon {\n  background-position: -120px -24px;\n}\n\ndiv.jsoneditor-contextmenu button.jsoneditor-type-auto:hover > div.jsoneditor-icon,\ndiv.jsoneditor-contextmenu button.jsoneditor-type-auto:focus > div.jsoneditor-icon,\ndiv.jsoneditor-contextmenu button.jsoneditor-type-auto.jsoneditor-selected > div.jsoneditor-icon {\n  background-position: -120px 0;\n}\n\ndiv.jsoneditor-contextmenu button.jsoneditor-type-object > div.jsoneditor-icon {\n  background-position: -72px -24px;\n}\n\ndiv.jsoneditor-contextmenu button.jsoneditor-type-object:hover > div.jsoneditor-icon,\ndiv.jsoneditor-contextmenu button.jsoneditor-type-object:focus > div.jsoneditor-icon,\ndiv.jsoneditor-contextmenu button.jsoneditor-type-object.jsoneditor-selected > div.jsoneditor-icon {\n  background-position: -72px 0;\n}\n\ndiv.jsoneditor-contextmenu button.jsoneditor-type-array > div.jsoneditor-icon {\n  background-position: -96px -24px;\n}\n\ndiv.jsoneditor-contextmenu button.jsoneditor-type-array:hover > div.jsoneditor-icon,\ndiv.jsoneditor-contextmenu button.jsoneditor-type-array:focus > div.jsoneditor-icon,\ndiv.jsoneditor-contextmenu button.jsoneditor-type-array.jsoneditor-selected > div.jsoneditor-icon {\n  background-position: -96px 0;\n}\n\ndiv.jsoneditor-contextmenu button.jsoneditor-type-modes > div.jsoneditor-icon {\n  background-image: none;\n  width: 6px;\n}\ndiv.jsoneditor-menu {\n  width: 100%;\n  height: 35px;\n  padding: 2px;\n  margin: 0;\n  -moz-box-sizing: border-box;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n  color: white;\n  background-color: #3883fa;\n  border-bottom: 1px solid #3883fa;\n}\n\ndiv.jsoneditor-menu > button,\ndiv.jsoneditor-menu > div.jsoneditor-modes > button {\n  width: 26px;\n  height: 26px;\n  margin: 2px;\n  padding: 0;\n  border-radius: 2px;\n  border: 1px solid transparent;\n  background: transparent url(" + __webpack_require__("4fE7") + ");\n  color: white;\n  opacity: 0.8;\n  font-family: arial, sans-serif;\n  font-size: 10pt;\n  float: left;\n}\n\ndiv.jsoneditor-menu > button:hover,\ndiv.jsoneditor-menu > div.jsoneditor-modes > button:hover {\n  background-color: rgba(255,255,255,0.2);\n  border: 1px solid rgba(255,255,255,0.4);\n}\n\ndiv.jsoneditor-menu > button:focus,\ndiv.jsoneditor-menu > button:active,\ndiv.jsoneditor-menu > div.jsoneditor-modes > button:focus,\ndiv.jsoneditor-menu > div.jsoneditor-modes > button:active {\n  background-color: rgba(255,255,255,0.3);\n}\n\ndiv.jsoneditor-menu > button:disabled,\ndiv.jsoneditor-menu > div.jsoneditor-modes > button:disabled {\n  opacity: 0.5;\n}\n\ndiv.jsoneditor-menu > button.jsoneditor-collapse-all {\n  background-position: 0 -96px;\n}\n\ndiv.jsoneditor-menu > button.jsoneditor-expand-all {\n  background-position: 0 -120px;\n}\n\ndiv.jsoneditor-menu > button.jsoneditor-undo {\n  background-position: -24px -96px;\n}\n\ndiv.jsoneditor-menu > button.jsoneditor-undo:disabled {\n  background-position: -24px -120px;\n}\n\ndiv.jsoneditor-menu > button.jsoneditor-redo {\n  background-position: -48px -96px;\n}\n\ndiv.jsoneditor-menu > button.jsoneditor-redo:disabled {\n  background-position: -48px -120px;\n}\n\ndiv.jsoneditor-menu > button.jsoneditor-compact {\n  background-position: -72px -96px;\n}\n\ndiv.jsoneditor-menu > button.jsoneditor-format {\n  background-position: -72px -120px;\n}\n\ndiv.jsoneditor-menu > div.jsoneditor-modes {\n  display: inline-block;\n  float: left;\n}\n\ndiv.jsoneditor-menu > div.jsoneditor-modes > button {\n  background-image: none;\n  width: auto;\n  padding-left: 6px;\n  padding-right: 6px;\n}\n\ndiv.jsoneditor-menu > button.jsoneditor-separator,\ndiv.jsoneditor-menu > div.jsoneditor-modes > button.jsoneditor-separator {\n  margin-left: 10px;\n}\n\ndiv.jsoneditor-menu a {\n  font-family: arial, sans-serif;\n  font-size: 10pt;\n  color: white;\n  opacity: 0.8;\n  vertical-align: middle;\n}\n\ndiv.jsoneditor-menu a:hover {\n  opacity: 1;\n}\n\ndiv.jsoneditor-menu a.jsoneditor-poweredBy {\n  font-size: 8pt;\n  position: absolute;\n  right: 0;\n  top: 0;\n  padding: 10px;\n}\ntable.jsoneditor-search input,\ntable.jsoneditor-search div.jsoneditor-results {\n  font-family: arial, sans-serif;\n  font-size: 10pt;\n  color: #1A1A1A;\n  background: transparent;\n  /* For Firefox */\n}\n\ntable.jsoneditor-search div.jsoneditor-results {\n  color: white;\n  padding-right: 5px;\n  line-height: 24px;\n}\n\ntable.jsoneditor-search {\n  position: absolute;\n  right: 4px;\n  top: 4px;\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\ntable.jsoneditor-search div.jsoneditor-frame {\n  border: 1px solid transparent;\n  background-color: white;\n  padding: 0 2px;\n  margin: 0;\n}\n\ntable.jsoneditor-search div.jsoneditor-frame table {\n  border-collapse: collapse;\n}\n\ntable.jsoneditor-search input {\n  width: 120px;\n  border: none;\n  outline: none;\n  margin: 1px;\n  line-height: 20px;\n}\n\ntable.jsoneditor-search button {\n  width: 16px;\n  height: 24px;\n  padding: 0;\n  margin: 0;\n  border: none;\n  background: url(" + __webpack_require__("4fE7") + ");\n  vertical-align: top;\n}\n\ntable.jsoneditor-search button:hover {\n  background-color: transparent;\n}\n\ntable.jsoneditor-search button.jsoneditor-refresh {\n  width: 18px;\n  background-position: -99px -73px;\n}\n\ntable.jsoneditor-search button.jsoneditor-next {\n  cursor: pointer;\n  background-position: -124px -73px;\n}\n\ntable.jsoneditor-search button.jsoneditor-next:hover {\n  background-position: -124px -49px;\n}\n\ntable.jsoneditor-search button.jsoneditor-previous {\n  cursor: pointer;\n  background-position: -148px -73px;\n  margin-right: 2px;\n}\n\ntable.jsoneditor-search button.jsoneditor-previous:hover {\n  background-position: -148px -49px;\n}\ndiv.jsoneditor div.autocomplete.dropdown {\n  position: absolute;\n  background: white;\n  box-shadow: 2px 2px 12px rgba(128, 128, 128, 0.3);\n  border: 1px solid #d3d3d3;\n  z-index: 100;\n  overflow-x: hidden;\n  overflow-y: auto;\n  cursor: default;\n  margin: 0;\n  padding-left: 2pt;\n  padding-right: 5pt;\n  text-align: left;\n  outline: 0;\n  font-family: droid sans mono, consolas, monospace, courier new, courier, sans-serif;\n  font-size: 10pt;\n}\n\ndiv.jsoneditor div.autocomplete.dropdown .item {\n  color: #333;\n}\n\ndiv.jsoneditor div.autocomplete.dropdown .item.hover {\n  background-color: #ddd;\n}\n\ndiv.jsoneditor div.autocomplete.hint {\n  color: #aaa;\n  top: 4px;\n  left: 4px;\n}", ""]);

// exports


/***/ }),

/***/ "cglW":
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

var _JSONEditor = __webpack_require__("eAOa");

var _JSONEditor2 = _interopRequireDefault(_JSONEditor);

var _redux = __webpack_require__("Vz5A");

var _interface_add = __webpack_require__("2mMT");

var _interface_add2 = _interopRequireDefault(_interface_add);

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
        key: 'saveInterface',
        value: function saveInterface() {
            var actions = this.props.actions;

            if (this.refs.form.isValid()) {
                var data = this.refs.form.getFormParams();
                actions.save(data);
            }
        }
    }, {
        key: 'goBack',
        value: function goBack() {
            var actions = this.props.actions;

            actions.goBack();
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            var actions = this.props.actions;

            actions.clear();
            _components.Notification.clear();
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _props = this.props,
                state = _props.state,
                params = _props.params;
            var ret = state.ret,
                isFetching = state.isFetching;


            if (ret && !ret.success) {
                _components.Notification.error({
                    title: '提示',
                    desc: '创建接口失败'
                });
            }

            var width = { width: 450 };
            return _react2.default.createElement(
                _components.Spin.SVGSpin,
                { spinning: isFetching },
                _react2.default.createElement(
                    'div',
                    { style: { width: 580, margin: '0 auto', padding: '50px 0' }, key: 'add_interface' },
                    _react2.default.createElement(
                        _components.Form,
                        { ref: 'form', layout: 'stack-inline', labelWidth: 80, useDefaultSubmitBtn: false },
                        _react2.default.createElement(_components.FormControl, { type: 'hidden', name: 'prj_id', value: params.projectId }),
                        _react2.default.createElement(_components.FormControl, { type: 'text', ref: 'url', name: 'url', label: 'URL: ', itemStyle: width, required: true, rules: {
                                remote: function remote() {
                                    return '/interface/exist?prj_id=' + params.projectId + '&url=' + _this2.refs.url.getValue();
                                }
                            }, messages: { remote: '已存在' } }),
                        _react2.default.createElement(_components.FormControl, { type: 'switch', name: 'type', label: 'Type: ', checkedText: 'post', unCheckedText: 'get' }),
                        _react2.default.createElement(_components.FormControl, { type: 'switch', name: 'jsonp', label: 'JSONP: ', checkedText: 'yes', unCheckedText: 'no' }),
                        _react2.default.createElement(
                            _components.Form.Row,
                            { className: 'cm-form-inline' },
                            _react2.default.createElement(_components.FormControl, { type: 'switch', name: 'lazy', label: 'Lazy: ', checkedText: 'on', unCheckedText: 'off' }),
                            _react2.default.createElement(_components.FormControl, { type: 'text', name: 'lazyTime', style: { width: 60 }, grid: 1, value: 0 }),
                            _react2.default.createElement(
                                'span',
                                null,
                                'ms'
                            )
                        ),
                        _react2.default.createElement(_components.FormControl, { type: 'text', name: 'desc', label: 'Desc: ', height: 80, itemStyle: width }),
                        _react2.default.createElement(_components.FormControl, { type: 'json', className: 'top-label-group', required: true, name: 'template', label: 'Template: ', height: 500, width: 450 })
                    ),
                    _react2.default.createElement(
                        'div',
                        { style: { marginLeft: 90, marginTop: 60 } },
                        _react2.default.createElement(
                            _components.Button,
                            { raised: true, theme: 'primary', onClick: this.saveInterface.bind(this) },
                            '\u4FDD \u5B58'
                        )
                    ),
                    _react2.default.createElement(_components.MessageBox, { ref: 'tip', title: '\u63D0\u793A', msg: '\u521B\u5EFA\u63A5\u53E3\u6210\u529F', open: ret && ret.success, confirm: this.goBack.bind(this) })
                )
            );
        }
    }]);

    return Page;
}(_react.Component);

var mapStateToProps = function mapStateToProps(state, props) {
    return {
        state: state.interfaceAdd,
        params: props.params
    };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return {
        actions: (0, _redux.bindActionCreators)(_interface_add2.default, dispatch)
    };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Page);

/***/ }),

/***/ "eAOa":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__("CwoH");

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__("NKHc");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _jsoneditor = __webpack_require__("2WFL");

var _jsoneditor2 = _interopRequireDefault(_jsoneditor);

var _components = __webpack_require__("ZouD");

__webpack_require__("HoGA");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Comp = function (_Component) {
    _inherits(Comp, _Component);

    function Comp() {
        _classCallCheck(this, Comp);

        return _possibleConstructorReturn(this, (Comp.__proto__ || Object.getPrototypeOf(Comp)).apply(this, arguments));
    }

    _createClass(Comp, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            if (JSON.stringify(nextProps.json) !== JSON.stringify(this.props.json)) {
                this.setData(nextProps.json);
            }
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            var container = _reactDom2.default.findDOMNode(this.refs.editor);
            var options = {
                mode: this.props.mode,
                name: this.props.name,
                search: false,
                onChange: this.props.onChange ? this.props.onChange.bind(this) : null
            };
            this.editor = new _jsoneditor2.default(container, options, this.props.json);
            this.editor.expandAll();
        }
    }, {
        key: 'setData',
        value: function setData(json) {
            this.editor.set(json);
            this.editor.expandAll();
        }
    }, {
        key: 'getData',
        value: function getData() {
            return this.editor.get();
        }
    }, {
        key: 'getValue',
        value: function getValue() {
            return JSON.stringify(this.editor.get());
        }
    }, {
        key: 'setValue',
        value: function setValue(value) {
            if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object') {
                try {
                    value = JSON.parse(value);
                } catch (e) {
                    value = {};
                }

                this.setData(value);
            }
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement('div', { style: { height: this.props.height, width: this.props.width }, ref: 'editor' });
        }
    }]);

    return Comp;
}(_react.Component);

_components.FormControl.register(Comp, 'json', 'string');

exports.default = Comp;

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

/***/ })

});