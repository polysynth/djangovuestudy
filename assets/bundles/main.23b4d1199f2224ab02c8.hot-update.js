webpackHotUpdate("main",{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./assets/js/components/Demo.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./assets/js/components/Demo.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("//\n//\n//\n//\n//\n//\nconst util = __webpack_require__(/*! util */ \"./node_modules/util/util.js\");\n\nconsole.log(\"object received: \", util.inspect(this));\n\n//# sourceURL=webpack:///./assets/js/components/Demo.vue?./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/util/node_modules/inherits/inherits_browser.js":
/*!*********************************************************************!*\
  !*** ./node_modules/util/node_modules/inherits/inherits_browser.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("if (typeof Object.create === 'function') {\n  // implementation from standard node.js 'util' module\n  module.exports = function inherits(ctor, superCtor) {\n    ctor.super_ = superCtor\n    ctor.prototype = Object.create(superCtor.prototype, {\n      constructor: {\n        value: ctor,\n        enumerable: false,\n        writable: true,\n        configurable: true\n      }\n    });\n  };\n} else {\n  // old school shim for old browsers\n  module.exports = function inherits(ctor, superCtor) {\n    ctor.super_ = superCtor\n    var TempCtor = function () {}\n    TempCtor.prototype = superCtor.prototype\n    ctor.prototype = new TempCtor()\n    ctor.prototype.constructor = ctor\n  }\n}\n\n\n//# sourceURL=webpack:///./node_modules/util/node_modules/inherits/inherits_browser.js?");

/***/ }),

/***/ "./node_modules/util/support/isBufferBrowser.js":
/*!******************************************************!*\
  !*** ./node_modules/util/support/isBufferBrowser.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function isBuffer(arg) {\n  return arg && typeof arg === 'object'\n    && typeof arg.copy === 'function'\n    && typeof arg.fill === 'function'\n    && typeof arg.readUInt8 === 'function';\n}\n\n//# sourceURL=webpack:///./node_modules/util/support/isBufferBrowser.js?");

/***/ }),

/***/ "./node_modules/util/util.js":
/*!***********************************!*\
  !*** ./node_modules/util/util.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(process) {// Copyright Joyent, Inc. and other Node contributors.\n//\n// Permission is hereby granted, free of charge, to any person obtaining a\n// copy of this software and associated documentation files (the\n// \"Software\"), to deal in the Software without restriction, including\n// without limitation the rights to use, copy, modify, merge, publish,\n// distribute, sublicense, and/or sell copies of the Software, and to permit\n// persons to whom the Software is furnished to do so, subject to the\n// following conditions:\n//\n// The above copyright notice and this permission notice shall be included\n// in all copies or substantial portions of the Software.\n//\n// THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS\n// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF\n// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN\n// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,\n// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR\n// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE\n// USE OR OTHER DEALINGS IN THE SOFTWARE.\n\nvar getOwnPropertyDescriptors = Object.getOwnPropertyDescriptors ||\n  function getOwnPropertyDescriptors(obj) {\n    var keys = Object.keys(obj);\n    var descriptors = {};\n    for (var i = 0; i < keys.length; i++) {\n      descriptors[keys[i]] = Object.getOwnPropertyDescriptor(obj, keys[i]);\n    }\n    return descriptors;\n  };\n\nvar formatRegExp = /%[sdj%]/g;\nexports.format = function(f) {\n  if (!isString(f)) {\n    var objects = [];\n    for (var i = 0; i < arguments.length; i++) {\n      objects.push(inspect(arguments[i]));\n    }\n    return objects.join(' ');\n  }\n\n  var i = 1;\n  var args = arguments;\n  var len = args.length;\n  var str = String(f).replace(formatRegExp, function(x) {\n    if (x === '%%') return '%';\n    if (i >= len) return x;\n    switch (x) {\n      case '%s': return String(args[i++]);\n      case '%d': return Number(args[i++]);\n      case '%j':\n        try {\n          return JSON.stringify(args[i++]);\n        } catch (_) {\n          return '[Circular]';\n        }\n      default:\n        return x;\n    }\n  });\n  for (var x = args[i]; i < len; x = args[++i]) {\n    if (isNull(x) || !isObject(x)) {\n      str += ' ' + x;\n    } else {\n      str += ' ' + inspect(x);\n    }\n  }\n  return str;\n};\n\n\n// Mark that a method should not be used.\n// Returns a modified function which warns once by default.\n// If --no-deprecation is set, then it is a no-op.\nexports.deprecate = function(fn, msg) {\n  if (typeof process !== 'undefined' && process.noDeprecation === true) {\n    return fn;\n  }\n\n  // Allow for deprecating things in the process of starting up.\n  if (typeof process === 'undefined') {\n    return function() {\n      return exports.deprecate(fn, msg).apply(this, arguments);\n    };\n  }\n\n  var warned = false;\n  function deprecated() {\n    if (!warned) {\n      if (process.throwDeprecation) {\n        throw new Error(msg);\n      } else if (process.traceDeprecation) {\n        console.trace(msg);\n      } else {\n        console.error(msg);\n      }\n      warned = true;\n    }\n    return fn.apply(this, arguments);\n  }\n\n  return deprecated;\n};\n\n\nvar debugs = {};\nvar debugEnviron;\nexports.debuglog = function(set) {\n  if (isUndefined(debugEnviron))\n    debugEnviron = process.env.NODE_DEBUG || '';\n  set = set.toUpperCase();\n  if (!debugs[set]) {\n    if (new RegExp('\\\\b' + set + '\\\\b', 'i').test(debugEnviron)) {\n      var pid = process.pid;\n      debugs[set] = function() {\n        var msg = exports.format.apply(exports, arguments);\n        console.error('%s %d: %s', set, pid, msg);\n      };\n    } else {\n      debugs[set] = function() {};\n    }\n  }\n  return debugs[set];\n};\n\n\n/**\n * Echos the value of a value. Trys to print the value out\n * in the best way possible given the different types.\n *\n * @param {Object} obj The object to print out.\n * @param {Object} opts Optional options object that alters the output.\n */\n/* legacy: obj, showHidden, depth, colors*/\nfunction inspect(obj, opts) {\n  // default options\n  var ctx = {\n    seen: [],\n    stylize: stylizeNoColor\n  };\n  // legacy...\n  if (arguments.length >= 3) ctx.depth = arguments[2];\n  if (arguments.length >= 4) ctx.colors = arguments[3];\n  if (isBoolean(opts)) {\n    // legacy...\n    ctx.showHidden = opts;\n  } else if (opts) {\n    // got an \"options\" object\n    exports._extend(ctx, opts);\n  }\n  // set default options\n  if (isUndefined(ctx.showHidden)) ctx.showHidden = false;\n  if (isUndefined(ctx.depth)) ctx.depth = 2;\n  if (isUndefined(ctx.colors)) ctx.colors = false;\n  if (isUndefined(ctx.customInspect)) ctx.customInspect = true;\n  if (ctx.colors) ctx.stylize = stylizeWithColor;\n  return formatValue(ctx, obj, ctx.depth);\n}\nexports.inspect = inspect;\n\n\n// http://en.wikipedia.org/wiki/ANSI_escape_code#graphics\ninspect.colors = {\n  'bold' : [1, 22],\n  'italic' : [3, 23],\n  'underline' : [4, 24],\n  'inverse' : [7, 27],\n  'white' : [37, 39],\n  'grey' : [90, 39],\n  'black' : [30, 39],\n  'blue' : [34, 39],\n  'cyan' : [36, 39],\n  'green' : [32, 39],\n  'magenta' : [35, 39],\n  'red' : [31, 39],\n  'yellow' : [33, 39]\n};\n\n// Don't use 'blue' not visible on cmd.exe\ninspect.styles = {\n  'special': 'cyan',\n  'number': 'yellow',\n  'boolean': 'yellow',\n  'undefined': 'grey',\n  'null': 'bold',\n  'string': 'green',\n  'date': 'magenta',\n  // \"name\": intentionally not styling\n  'regexp': 'red'\n};\n\n\nfunction stylizeWithColor(str, styleType) {\n  var style = inspect.styles[styleType];\n\n  if (style) {\n    return '\\u001b[' + inspect.colors[style][0] + 'm' + str +\n           '\\u001b[' + inspect.colors[style][1] + 'm';\n  } else {\n    return str;\n  }\n}\n\n\nfunction stylizeNoColor(str, styleType) {\n  return str;\n}\n\n\nfunction arrayToHash(array) {\n  var hash = {};\n\n  array.forEach(function(val, idx) {\n    hash[val] = true;\n  });\n\n  return hash;\n}\n\n\nfunction formatValue(ctx, value, recurseTimes) {\n  // Provide a hook for user-specified inspect functions.\n  // Check that value is an object with an inspect function on it\n  if (ctx.customInspect &&\n      value &&\n      isFunction(value.inspect) &&\n      // Filter out the util module, it's inspect function is special\n      value.inspect !== exports.inspect &&\n      // Also filter out any prototype objects using the circular check.\n      !(value.constructor && value.constructor.prototype === value)) {\n    var ret = value.inspect(recurseTimes, ctx);\n    if (!isString(ret)) {\n      ret = formatValue(ctx, ret, recurseTimes);\n    }\n    return ret;\n  }\n\n  // Primitive types cannot have properties\n  var primitive = formatPrimitive(ctx, value);\n  if (primitive) {\n    return primitive;\n  }\n\n  // Look up the keys of the object.\n  var keys = Object.keys(value);\n  var visibleKeys = arrayToHash(keys);\n\n  if (ctx.showHidden) {\n    keys = Object.getOwnPropertyNames(value);\n  }\n\n  // IE doesn't make error fields non-enumerable\n  // http://msdn.microsoft.com/en-us/library/ie/dww52sbt(v=vs.94).aspx\n  if (isError(value)\n      && (keys.indexOf('message') >= 0 || keys.indexOf('description') >= 0)) {\n    return formatError(value);\n  }\n\n  // Some type of object without properties can be shortcutted.\n  if (keys.length === 0) {\n    if (isFunction(value)) {\n      var name = value.name ? ': ' + value.name : '';\n      return ctx.stylize('[Function' + name + ']', 'special');\n    }\n    if (isRegExp(value)) {\n      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');\n    }\n    if (isDate(value)) {\n      return ctx.stylize(Date.prototype.toString.call(value), 'date');\n    }\n    if (isError(value)) {\n      return formatError(value);\n    }\n  }\n\n  var base = '', array = false, braces = ['{', '}'];\n\n  // Make Array say that they are Array\n  if (isArray(value)) {\n    array = true;\n    braces = ['[', ']'];\n  }\n\n  // Make functions say that they are functions\n  if (isFunction(value)) {\n    var n = value.name ? ': ' + value.name : '';\n    base = ' [Function' + n + ']';\n  }\n\n  // Make RegExps say that they are RegExps\n  if (isRegExp(value)) {\n    base = ' ' + RegExp.prototype.toString.call(value);\n  }\n\n  // Make dates with properties first say the date\n  if (isDate(value)) {\n    base = ' ' + Date.prototype.toUTCString.call(value);\n  }\n\n  // Make error with message first say the error\n  if (isError(value)) {\n    base = ' ' + formatError(value);\n  }\n\n  if (keys.length === 0 && (!array || value.length == 0)) {\n    return braces[0] + base + braces[1];\n  }\n\n  if (recurseTimes < 0) {\n    if (isRegExp(value)) {\n      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');\n    } else {\n      return ctx.stylize('[Object]', 'special');\n    }\n  }\n\n  ctx.seen.push(value);\n\n  var output;\n  if (array) {\n    output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);\n  } else {\n    output = keys.map(function(key) {\n      return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);\n    });\n  }\n\n  ctx.seen.pop();\n\n  return reduceToSingleString(output, base, braces);\n}\n\n\nfunction formatPrimitive(ctx, value) {\n  if (isUndefined(value))\n    return ctx.stylize('undefined', 'undefined');\n  if (isString(value)) {\n    var simple = '\\'' + JSON.stringify(value).replace(/^\"|\"$/g, '')\n                                             .replace(/'/g, \"\\\\'\")\n                                             .replace(/\\\\\"/g, '\"') + '\\'';\n    return ctx.stylize(simple, 'string');\n  }\n  if (isNumber(value))\n    return ctx.stylize('' + value, 'number');\n  if (isBoolean(value))\n    return ctx.stylize('' + value, 'boolean');\n  // For some reason typeof null is \"object\", so special case here.\n  if (isNull(value))\n    return ctx.stylize('null', 'null');\n}\n\n\nfunction formatError(value) {\n  return '[' + Error.prototype.toString.call(value) + ']';\n}\n\n\nfunction formatArray(ctx, value, recurseTimes, visibleKeys, keys) {\n  var output = [];\n  for (var i = 0, l = value.length; i < l; ++i) {\n    if (hasOwnProperty(value, String(i))) {\n      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,\n          String(i), true));\n    } else {\n      output.push('');\n    }\n  }\n  keys.forEach(function(key) {\n    if (!key.match(/^\\d+$/)) {\n      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,\n          key, true));\n    }\n  });\n  return output;\n}\n\n\nfunction formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {\n  var name, str, desc;\n  desc = Object.getOwnPropertyDescriptor(value, key) || { value: value[key] };\n  if (desc.get) {\n    if (desc.set) {\n      str = ctx.stylize('[Getter/Setter]', 'special');\n    } else {\n      str = ctx.stylize('[Getter]', 'special');\n    }\n  } else {\n    if (desc.set) {\n      str = ctx.stylize('[Setter]', 'special');\n    }\n  }\n  if (!hasOwnProperty(visibleKeys, key)) {\n    name = '[' + key + ']';\n  }\n  if (!str) {\n    if (ctx.seen.indexOf(desc.value) < 0) {\n      if (isNull(recurseTimes)) {\n        str = formatValue(ctx, desc.value, null);\n      } else {\n        str = formatValue(ctx, desc.value, recurseTimes - 1);\n      }\n      if (str.indexOf('\\n') > -1) {\n        if (array) {\n          str = str.split('\\n').map(function(line) {\n            return '  ' + line;\n          }).join('\\n').substr(2);\n        } else {\n          str = '\\n' + str.split('\\n').map(function(line) {\n            return '   ' + line;\n          }).join('\\n');\n        }\n      }\n    } else {\n      str = ctx.stylize('[Circular]', 'special');\n    }\n  }\n  if (isUndefined(name)) {\n    if (array && key.match(/^\\d+$/)) {\n      return str;\n    }\n    name = JSON.stringify('' + key);\n    if (name.match(/^\"([a-zA-Z_][a-zA-Z_0-9]*)\"$/)) {\n      name = name.substr(1, name.length - 2);\n      name = ctx.stylize(name, 'name');\n    } else {\n      name = name.replace(/'/g, \"\\\\'\")\n                 .replace(/\\\\\"/g, '\"')\n                 .replace(/(^\"|\"$)/g, \"'\");\n      name = ctx.stylize(name, 'string');\n    }\n  }\n\n  return name + ': ' + str;\n}\n\n\nfunction reduceToSingleString(output, base, braces) {\n  var numLinesEst = 0;\n  var length = output.reduce(function(prev, cur) {\n    numLinesEst++;\n    if (cur.indexOf('\\n') >= 0) numLinesEst++;\n    return prev + cur.replace(/\\u001b\\[\\d\\d?m/g, '').length + 1;\n  }, 0);\n\n  if (length > 60) {\n    return braces[0] +\n           (base === '' ? '' : base + '\\n ') +\n           ' ' +\n           output.join(',\\n  ') +\n           ' ' +\n           braces[1];\n  }\n\n  return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];\n}\n\n\n// NOTE: These type checking functions intentionally don't use `instanceof`\n// because it is fragile and can be easily faked with `Object.create()`.\nfunction isArray(ar) {\n  return Array.isArray(ar);\n}\nexports.isArray = isArray;\n\nfunction isBoolean(arg) {\n  return typeof arg === 'boolean';\n}\nexports.isBoolean = isBoolean;\n\nfunction isNull(arg) {\n  return arg === null;\n}\nexports.isNull = isNull;\n\nfunction isNullOrUndefined(arg) {\n  return arg == null;\n}\nexports.isNullOrUndefined = isNullOrUndefined;\n\nfunction isNumber(arg) {\n  return typeof arg === 'number';\n}\nexports.isNumber = isNumber;\n\nfunction isString(arg) {\n  return typeof arg === 'string';\n}\nexports.isString = isString;\n\nfunction isSymbol(arg) {\n  return typeof arg === 'symbol';\n}\nexports.isSymbol = isSymbol;\n\nfunction isUndefined(arg) {\n  return arg === void 0;\n}\nexports.isUndefined = isUndefined;\n\nfunction isRegExp(re) {\n  return isObject(re) && objectToString(re) === '[object RegExp]';\n}\nexports.isRegExp = isRegExp;\n\nfunction isObject(arg) {\n  return typeof arg === 'object' && arg !== null;\n}\nexports.isObject = isObject;\n\nfunction isDate(d) {\n  return isObject(d) && objectToString(d) === '[object Date]';\n}\nexports.isDate = isDate;\n\nfunction isError(e) {\n  return isObject(e) &&\n      (objectToString(e) === '[object Error]' || e instanceof Error);\n}\nexports.isError = isError;\n\nfunction isFunction(arg) {\n  return typeof arg === 'function';\n}\nexports.isFunction = isFunction;\n\nfunction isPrimitive(arg) {\n  return arg === null ||\n         typeof arg === 'boolean' ||\n         typeof arg === 'number' ||\n         typeof arg === 'string' ||\n         typeof arg === 'symbol' ||  // ES6 symbol\n         typeof arg === 'undefined';\n}\nexports.isPrimitive = isPrimitive;\n\nexports.isBuffer = __webpack_require__(/*! ./support/isBuffer */ \"./node_modules/util/support/isBufferBrowser.js\");\n\nfunction objectToString(o) {\n  return Object.prototype.toString.call(o);\n}\n\n\nfunction pad(n) {\n  return n < 10 ? '0' + n.toString(10) : n.toString(10);\n}\n\n\nvar months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',\n              'Oct', 'Nov', 'Dec'];\n\n// 26 Feb 16:19:34\nfunction timestamp() {\n  var d = new Date();\n  var time = [pad(d.getHours()),\n              pad(d.getMinutes()),\n              pad(d.getSeconds())].join(':');\n  return [d.getDate(), months[d.getMonth()], time].join(' ');\n}\n\n\n// log is just a thin wrapper to console.log that prepends a timestamp\nexports.log = function() {\n  console.log('%s - %s', timestamp(), exports.format.apply(exports, arguments));\n};\n\n\n/**\n * Inherit the prototype methods from one constructor into another.\n *\n * The Function.prototype.inherits from lang.js rewritten as a standalone\n * function (not on Function.prototype). NOTE: If this file is to be loaded\n * during bootstrapping this function needs to be rewritten using some native\n * functions as prototype setup using normal JavaScript does not work as\n * expected during bootstrapping (see mirror.js in r114903).\n *\n * @param {function} ctor Constructor function which needs to inherit the\n *     prototype.\n * @param {function} superCtor Constructor function to inherit prototype from.\n */\nexports.inherits = __webpack_require__(/*! inherits */ \"./node_modules/util/node_modules/inherits/inherits_browser.js\");\n\nexports._extend = function(origin, add) {\n  // Don't do anything if add isn't an object\n  if (!add || !isObject(add)) return origin;\n\n  var keys = Object.keys(add);\n  var i = keys.length;\n  while (i--) {\n    origin[keys[i]] = add[keys[i]];\n  }\n  return origin;\n};\n\nfunction hasOwnProperty(obj, prop) {\n  return Object.prototype.hasOwnProperty.call(obj, prop);\n}\n\nvar kCustomPromisifiedSymbol = typeof Symbol !== 'undefined' ? Symbol('util.promisify.custom') : undefined;\n\nexports.promisify = function promisify(original) {\n  if (typeof original !== 'function')\n    throw new TypeError('The \"original\" argument must be of type Function');\n\n  if (kCustomPromisifiedSymbol && original[kCustomPromisifiedSymbol]) {\n    var fn = original[kCustomPromisifiedSymbol];\n    if (typeof fn !== 'function') {\n      throw new TypeError('The \"util.promisify.custom\" argument must be of type Function');\n    }\n    Object.defineProperty(fn, kCustomPromisifiedSymbol, {\n      value: fn, enumerable: false, writable: false, configurable: true\n    });\n    return fn;\n  }\n\n  function fn() {\n    var promiseResolve, promiseReject;\n    var promise = new Promise(function (resolve, reject) {\n      promiseResolve = resolve;\n      promiseReject = reject;\n    });\n\n    var args = [];\n    for (var i = 0; i < arguments.length; i++) {\n      args.push(arguments[i]);\n    }\n    args.push(function (err, value) {\n      if (err) {\n        promiseReject(err);\n      } else {\n        promiseResolve(value);\n      }\n    });\n\n    try {\n      original.apply(this, args);\n    } catch (err) {\n      promiseReject(err);\n    }\n\n    return promise;\n  }\n\n  Object.setPrototypeOf(fn, Object.getPrototypeOf(original));\n\n  if (kCustomPromisifiedSymbol) Object.defineProperty(fn, kCustomPromisifiedSymbol, {\n    value: fn, enumerable: false, writable: false, configurable: true\n  });\n  return Object.defineProperties(\n    fn,\n    getOwnPropertyDescriptors(original)\n  );\n}\n\nexports.promisify.custom = kCustomPromisifiedSymbol\n\nfunction callbackifyOnRejected(reason, cb) {\n  // `!reason` guard inspired by bluebird (Ref: https://goo.gl/t5IS6M).\n  // Because `null` is a special error value in callbacks which means \"no error\n  // occurred\", we error-wrap so the callback consumer can distinguish between\n  // \"the promise rejected with null\" or \"the promise fulfilled with undefined\".\n  if (!reason) {\n    var newReason = new Error('Promise was rejected with a falsy value');\n    newReason.reason = reason;\n    reason = newReason;\n  }\n  return cb(reason);\n}\n\nfunction callbackify(original) {\n  if (typeof original !== 'function') {\n    throw new TypeError('The \"original\" argument must be of type Function');\n  }\n\n  // We DO NOT return the promise as it gives the user a false sense that\n  // the promise is actually somehow related to the callback's execution\n  // and that the callback throwing will reject the promise.\n  function callbackified() {\n    var args = [];\n    for (var i = 0; i < arguments.length; i++) {\n      args.push(arguments[i]);\n    }\n\n    var maybeCb = args.pop();\n    if (typeof maybeCb !== 'function') {\n      throw new TypeError('The last argument must be of type Function');\n    }\n    var self = this;\n    var cb = function() {\n      return maybeCb.apply(self, arguments);\n    };\n    // In true node style we process the callback on `nextTick` with all the\n    // implications (stack, `uncaughtException`, `async_hooks`)\n    original.apply(this, args)\n      .then(function(ret) { process.nextTick(cb, null, ret) },\n            function(rej) { process.nextTick(callbackifyOnRejected, rej, cb) });\n  }\n\n  Object.setPrototypeOf(callbackified, Object.getPrototypeOf(original));\n  Object.defineProperties(callbackified,\n                          getOwnPropertyDescriptors(original));\n  return callbackified;\n}\nexports.callbackify = callbackify;\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../process/browser.js */ \"./node_modules/process/browser.js\")))\n\n//# sourceURL=webpack:///./node_modules/util/util.js?");

/***/ })

})