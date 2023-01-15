(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_layouts_main_vue"],{

/***/ "./node_modules/@juggle/resize-observer/lib/DOMRectReadOnly.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@juggle/resize-observer/lib/DOMRectReadOnly.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DOMRectReadOnly": () => (/* binding */ DOMRectReadOnly)
/* harmony export */ });
/* harmony import */ var _utils_freeze__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/freeze */ "./node_modules/@juggle/resize-observer/lib/utils/freeze.js");

var DOMRectReadOnly = (function () {
    function DOMRectReadOnly(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.top = this.y;
        this.left = this.x;
        this.bottom = this.top + this.height;
        this.right = this.left + this.width;
        return (0,_utils_freeze__WEBPACK_IMPORTED_MODULE_0__.freeze)(this);
    }
    DOMRectReadOnly.prototype.toJSON = function () {
        var _a = this, x = _a.x, y = _a.y, top = _a.top, right = _a.right, bottom = _a.bottom, left = _a.left, width = _a.width, height = _a.height;
        return { x: x, y: y, top: top, right: right, bottom: bottom, left: left, width: width, height: height };
    };
    DOMRectReadOnly.fromRect = function (rectangle) {
        return new DOMRectReadOnly(rectangle.x, rectangle.y, rectangle.width, rectangle.height);
    };
    return DOMRectReadOnly;
}());



/***/ }),

/***/ "./node_modules/@juggle/resize-observer/lib/ResizeObservation.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@juggle/resize-observer/lib/ResizeObservation.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResizeObservation": () => (/* binding */ ResizeObservation)
/* harmony export */ });
/* harmony import */ var _ResizeObserverBoxOptions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ResizeObserverBoxOptions */ "./node_modules/@juggle/resize-observer/lib/ResizeObserverBoxOptions.js");
/* harmony import */ var _algorithms_calculateBoxSize__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./algorithms/calculateBoxSize */ "./node_modules/@juggle/resize-observer/lib/algorithms/calculateBoxSize.js");
/* harmony import */ var _utils_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/element */ "./node_modules/@juggle/resize-observer/lib/utils/element.js");



var skipNotifyOnElement = function (target) {
    return !(0,_utils_element__WEBPACK_IMPORTED_MODULE_2__.isSVG)(target)
        && !(0,_utils_element__WEBPACK_IMPORTED_MODULE_2__.isReplacedElement)(target)
        && getComputedStyle(target).display === 'inline';
};
var ResizeObservation = (function () {
    function ResizeObservation(target, observedBox) {
        this.target = target;
        this.observedBox = observedBox || _ResizeObserverBoxOptions__WEBPACK_IMPORTED_MODULE_0__.ResizeObserverBoxOptions.CONTENT_BOX;
        this.lastReportedSize = {
            inlineSize: 0,
            blockSize: 0
        };
    }
    ResizeObservation.prototype.isActive = function () {
        var size = (0,_algorithms_calculateBoxSize__WEBPACK_IMPORTED_MODULE_1__.calculateBoxSize)(this.target, this.observedBox, true);
        if (skipNotifyOnElement(this.target)) {
            this.lastReportedSize = size;
        }
        if (this.lastReportedSize.inlineSize !== size.inlineSize
            || this.lastReportedSize.blockSize !== size.blockSize) {
            return true;
        }
        return false;
    };
    return ResizeObservation;
}());



/***/ }),

/***/ "./node_modules/@juggle/resize-observer/lib/ResizeObserver.js":
/*!********************************************************************!*\
  !*** ./node_modules/@juggle/resize-observer/lib/ResizeObserver.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResizeObserver": () => (/* binding */ ResizeObserver)
/* harmony export */ });
/* harmony import */ var _ResizeObserverController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ResizeObserverController */ "./node_modules/@juggle/resize-observer/lib/ResizeObserverController.js");
/* harmony import */ var _utils_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/element */ "./node_modules/@juggle/resize-observer/lib/utils/element.js");


var ResizeObserver = (function () {
    function ResizeObserver(callback) {
        if (arguments.length === 0) {
            throw new TypeError("Failed to construct 'ResizeObserver': 1 argument required, but only 0 present.");
        }
        if (typeof callback !== 'function') {
            throw new TypeError("Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function.");
        }
        _ResizeObserverController__WEBPACK_IMPORTED_MODULE_0__.ResizeObserverController.connect(this, callback);
    }
    ResizeObserver.prototype.observe = function (target, options) {
        if (arguments.length === 0) {
            throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': 1 argument required, but only 0 present.");
        }
        if (!(0,_utils_element__WEBPACK_IMPORTED_MODULE_1__.isElement)(target)) {
            throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element");
        }
        _ResizeObserverController__WEBPACK_IMPORTED_MODULE_0__.ResizeObserverController.observe(this, target, options);
    };
    ResizeObserver.prototype.unobserve = function (target) {
        if (arguments.length === 0) {
            throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': 1 argument required, but only 0 present.");
        }
        if (!(0,_utils_element__WEBPACK_IMPORTED_MODULE_1__.isElement)(target)) {
            throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': parameter 1 is not of type 'Element");
        }
        _ResizeObserverController__WEBPACK_IMPORTED_MODULE_0__.ResizeObserverController.unobserve(this, target);
    };
    ResizeObserver.prototype.disconnect = function () {
        _ResizeObserverController__WEBPACK_IMPORTED_MODULE_0__.ResizeObserverController.disconnect(this);
    };
    ResizeObserver.toString = function () {
        return 'function ResizeObserver () { [polyfill code] }';
    };
    return ResizeObserver;
}());



/***/ }),

/***/ "./node_modules/@juggle/resize-observer/lib/ResizeObserverBoxOptions.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@juggle/resize-observer/lib/ResizeObserverBoxOptions.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResizeObserverBoxOptions": () => (/* binding */ ResizeObserverBoxOptions)
/* harmony export */ });
var ResizeObserverBoxOptions;
(function (ResizeObserverBoxOptions) {
    ResizeObserverBoxOptions["BORDER_BOX"] = "border-box";
    ResizeObserverBoxOptions["CONTENT_BOX"] = "content-box";
    ResizeObserverBoxOptions["DEVICE_PIXEL_CONTENT_BOX"] = "device-pixel-content-box";
})(ResizeObserverBoxOptions || (ResizeObserverBoxOptions = {}));



/***/ }),

/***/ "./node_modules/@juggle/resize-observer/lib/ResizeObserverController.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@juggle/resize-observer/lib/ResizeObserverController.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResizeObserverController": () => (/* binding */ ResizeObserverController)
/* harmony export */ });
/* harmony import */ var _utils_scheduler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/scheduler */ "./node_modules/@juggle/resize-observer/lib/utils/scheduler.js");
/* harmony import */ var _ResizeObservation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ResizeObservation */ "./node_modules/@juggle/resize-observer/lib/ResizeObservation.js");
/* harmony import */ var _ResizeObserverDetail__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ResizeObserverDetail */ "./node_modules/@juggle/resize-observer/lib/ResizeObserverDetail.js");
/* harmony import */ var _utils_resizeObservers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/resizeObservers */ "./node_modules/@juggle/resize-observer/lib/utils/resizeObservers.js");




var observerMap = new WeakMap();
var getObservationIndex = function (observationTargets, target) {
    for (var i = 0; i < observationTargets.length; i += 1) {
        if (observationTargets[i].target === target) {
            return i;
        }
    }
    return -1;
};
var ResizeObserverController = (function () {
    function ResizeObserverController() {
    }
    ResizeObserverController.connect = function (resizeObserver, callback) {
        var detail = new _ResizeObserverDetail__WEBPACK_IMPORTED_MODULE_2__.ResizeObserverDetail(resizeObserver, callback);
        observerMap.set(resizeObserver, detail);
    };
    ResizeObserverController.observe = function (resizeObserver, target, options) {
        var detail = observerMap.get(resizeObserver);
        var firstObservation = detail.observationTargets.length === 0;
        if (getObservationIndex(detail.observationTargets, target) < 0) {
            firstObservation && _utils_resizeObservers__WEBPACK_IMPORTED_MODULE_3__.resizeObservers.push(detail);
            detail.observationTargets.push(new _ResizeObservation__WEBPACK_IMPORTED_MODULE_1__.ResizeObservation(target, options && options.box));
            (0,_utils_scheduler__WEBPACK_IMPORTED_MODULE_0__.updateCount)(1);
            _utils_scheduler__WEBPACK_IMPORTED_MODULE_0__.scheduler.schedule();
        }
    };
    ResizeObserverController.unobserve = function (resizeObserver, target) {
        var detail = observerMap.get(resizeObserver);
        var index = getObservationIndex(detail.observationTargets, target);
        var lastObservation = detail.observationTargets.length === 1;
        if (index >= 0) {
            lastObservation && _utils_resizeObservers__WEBPACK_IMPORTED_MODULE_3__.resizeObservers.splice(_utils_resizeObservers__WEBPACK_IMPORTED_MODULE_3__.resizeObservers.indexOf(detail), 1);
            detail.observationTargets.splice(index, 1);
            (0,_utils_scheduler__WEBPACK_IMPORTED_MODULE_0__.updateCount)(-1);
        }
    };
    ResizeObserverController.disconnect = function (resizeObserver) {
        var _this = this;
        var detail = observerMap.get(resizeObserver);
        detail.observationTargets.slice().forEach(function (ot) { return _this.unobserve(resizeObserver, ot.target); });
        detail.activeTargets.splice(0, detail.activeTargets.length);
    };
    return ResizeObserverController;
}());



/***/ }),

/***/ "./node_modules/@juggle/resize-observer/lib/ResizeObserverDetail.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@juggle/resize-observer/lib/ResizeObserverDetail.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResizeObserverDetail": () => (/* binding */ ResizeObserverDetail)
/* harmony export */ });
var ResizeObserverDetail = (function () {
    function ResizeObserverDetail(resizeObserver, callback) {
        this.activeTargets = [];
        this.skippedTargets = [];
        this.observationTargets = [];
        this.observer = resizeObserver;
        this.callback = callback;
    }
    return ResizeObserverDetail;
}());



/***/ }),

/***/ "./node_modules/@juggle/resize-observer/lib/ResizeObserverEntry.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@juggle/resize-observer/lib/ResizeObserverEntry.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResizeObserverEntry": () => (/* binding */ ResizeObserverEntry)
/* harmony export */ });
/* harmony import */ var _algorithms_calculateBoxSize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./algorithms/calculateBoxSize */ "./node_modules/@juggle/resize-observer/lib/algorithms/calculateBoxSize.js");
/* harmony import */ var _utils_freeze__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/freeze */ "./node_modules/@juggle/resize-observer/lib/utils/freeze.js");


var ResizeObserverEntry = (function () {
    function ResizeObserverEntry(target) {
        var boxes = (0,_algorithms_calculateBoxSize__WEBPACK_IMPORTED_MODULE_0__.calculateBoxSizes)(target);
        this.target = target;
        this.contentRect = boxes.contentRect;
        this.borderBoxSize = (0,_utils_freeze__WEBPACK_IMPORTED_MODULE_1__.freeze)([boxes.borderBoxSize]);
        this.contentBoxSize = (0,_utils_freeze__WEBPACK_IMPORTED_MODULE_1__.freeze)([boxes.contentBoxSize]);
        this.devicePixelContentBoxSize = (0,_utils_freeze__WEBPACK_IMPORTED_MODULE_1__.freeze)([boxes.devicePixelContentBoxSize]);
    }
    return ResizeObserverEntry;
}());



/***/ }),

/***/ "./node_modules/@juggle/resize-observer/lib/ResizeObserverSize.js":
/*!************************************************************************!*\
  !*** ./node_modules/@juggle/resize-observer/lib/ResizeObserverSize.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResizeObserverSize": () => (/* binding */ ResizeObserverSize)
/* harmony export */ });
/* harmony import */ var _utils_freeze__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/freeze */ "./node_modules/@juggle/resize-observer/lib/utils/freeze.js");

var ResizeObserverSize = (function () {
    function ResizeObserverSize(inlineSize, blockSize) {
        this.inlineSize = inlineSize;
        this.blockSize = blockSize;
        (0,_utils_freeze__WEBPACK_IMPORTED_MODULE_0__.freeze)(this);
    }
    return ResizeObserverSize;
}());



/***/ }),

/***/ "./node_modules/@juggle/resize-observer/lib/algorithms/broadcastActiveObservations.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/@juggle/resize-observer/lib/algorithms/broadcastActiveObservations.js ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "broadcastActiveObservations": () => (/* binding */ broadcastActiveObservations)
/* harmony export */ });
/* harmony import */ var _utils_resizeObservers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/resizeObservers */ "./node_modules/@juggle/resize-observer/lib/utils/resizeObservers.js");
/* harmony import */ var _ResizeObserverEntry__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ResizeObserverEntry */ "./node_modules/@juggle/resize-observer/lib/ResizeObserverEntry.js");
/* harmony import */ var _calculateDepthForNode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./calculateDepthForNode */ "./node_modules/@juggle/resize-observer/lib/algorithms/calculateDepthForNode.js");
/* harmony import */ var _calculateBoxSize__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./calculateBoxSize */ "./node_modules/@juggle/resize-observer/lib/algorithms/calculateBoxSize.js");




var broadcastActiveObservations = function () {
    var shallowestDepth = Infinity;
    var callbacks = [];
    _utils_resizeObservers__WEBPACK_IMPORTED_MODULE_0__.resizeObservers.forEach(function processObserver(ro) {
        if (ro.activeTargets.length === 0) {
            return;
        }
        var entries = [];
        ro.activeTargets.forEach(function processTarget(ot) {
            var entry = new _ResizeObserverEntry__WEBPACK_IMPORTED_MODULE_1__.ResizeObserverEntry(ot.target);
            var targetDepth = (0,_calculateDepthForNode__WEBPACK_IMPORTED_MODULE_2__.calculateDepthForNode)(ot.target);
            entries.push(entry);
            ot.lastReportedSize = (0,_calculateBoxSize__WEBPACK_IMPORTED_MODULE_3__.calculateBoxSize)(ot.target, ot.observedBox);
            if (targetDepth < shallowestDepth) {
                shallowestDepth = targetDepth;
            }
        });
        callbacks.push(function resizeObserverCallback() {
            ro.callback.call(ro.observer, entries, ro.observer);
        });
        ro.activeTargets.splice(0, ro.activeTargets.length);
    });
    for (var _i = 0, callbacks_1 = callbacks; _i < callbacks_1.length; _i++) {
        var callback = callbacks_1[_i];
        callback();
    }
    return shallowestDepth;
};



/***/ }),

/***/ "./node_modules/@juggle/resize-observer/lib/algorithms/calculateBoxSize.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@juggle/resize-observer/lib/algorithms/calculateBoxSize.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "calculateBoxSize": () => (/* binding */ calculateBoxSize),
/* harmony export */   "calculateBoxSizes": () => (/* binding */ calculateBoxSizes)
/* harmony export */ });
/* harmony import */ var _ResizeObserverBoxOptions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ResizeObserverBoxOptions */ "./node_modules/@juggle/resize-observer/lib/ResizeObserverBoxOptions.js");
/* harmony import */ var _ResizeObserverSize__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ResizeObserverSize */ "./node_modules/@juggle/resize-observer/lib/ResizeObserverSize.js");
/* harmony import */ var _DOMRectReadOnly__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../DOMRectReadOnly */ "./node_modules/@juggle/resize-observer/lib/DOMRectReadOnly.js");
/* harmony import */ var _utils_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/element */ "./node_modules/@juggle/resize-observer/lib/utils/element.js");
/* harmony import */ var _utils_freeze__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/freeze */ "./node_modules/@juggle/resize-observer/lib/utils/freeze.js");
/* harmony import */ var _utils_global__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/global */ "./node_modules/@juggle/resize-observer/lib/utils/global.js");






var cache = new WeakMap();
var scrollRegexp = /auto|scroll/;
var verticalRegexp = /^tb|vertical/;
var IE = (/msie|trident/i).test(_utils_global__WEBPACK_IMPORTED_MODULE_5__.global.navigator && _utils_global__WEBPACK_IMPORTED_MODULE_5__.global.navigator.userAgent);
var parseDimension = function (pixel) { return parseFloat(pixel || '0'); };
var size = function (inlineSize, blockSize, switchSizes) {
    if (inlineSize === void 0) { inlineSize = 0; }
    if (blockSize === void 0) { blockSize = 0; }
    if (switchSizes === void 0) { switchSizes = false; }
    return new _ResizeObserverSize__WEBPACK_IMPORTED_MODULE_1__.ResizeObserverSize((switchSizes ? blockSize : inlineSize) || 0, (switchSizes ? inlineSize : blockSize) || 0);
};
var zeroBoxes = (0,_utils_freeze__WEBPACK_IMPORTED_MODULE_4__.freeze)({
    devicePixelContentBoxSize: size(),
    borderBoxSize: size(),
    contentBoxSize: size(),
    contentRect: new _DOMRectReadOnly__WEBPACK_IMPORTED_MODULE_2__.DOMRectReadOnly(0, 0, 0, 0)
});
var calculateBoxSizes = function (target, forceRecalculation) {
    if (forceRecalculation === void 0) { forceRecalculation = false; }
    if (cache.has(target) && !forceRecalculation) {
        return cache.get(target);
    }
    if ((0,_utils_element__WEBPACK_IMPORTED_MODULE_3__.isHidden)(target)) {
        cache.set(target, zeroBoxes);
        return zeroBoxes;
    }
    var cs = getComputedStyle(target);
    var svg = (0,_utils_element__WEBPACK_IMPORTED_MODULE_3__.isSVG)(target) && target.ownerSVGElement && target.getBBox();
    var removePadding = !IE && cs.boxSizing === 'border-box';
    var switchSizes = verticalRegexp.test(cs.writingMode || '');
    var canScrollVertically = !svg && scrollRegexp.test(cs.overflowY || '');
    var canScrollHorizontally = !svg && scrollRegexp.test(cs.overflowX || '');
    var paddingTop = svg ? 0 : parseDimension(cs.paddingTop);
    var paddingRight = svg ? 0 : parseDimension(cs.paddingRight);
    var paddingBottom = svg ? 0 : parseDimension(cs.paddingBottom);
    var paddingLeft = svg ? 0 : parseDimension(cs.paddingLeft);
    var borderTop = svg ? 0 : parseDimension(cs.borderTopWidth);
    var borderRight = svg ? 0 : parseDimension(cs.borderRightWidth);
    var borderBottom = svg ? 0 : parseDimension(cs.borderBottomWidth);
    var borderLeft = svg ? 0 : parseDimension(cs.borderLeftWidth);
    var horizontalPadding = paddingLeft + paddingRight;
    var verticalPadding = paddingTop + paddingBottom;
    var horizontalBorderArea = borderLeft + borderRight;
    var verticalBorderArea = borderTop + borderBottom;
    var horizontalScrollbarThickness = !canScrollHorizontally ? 0 : target.offsetHeight - verticalBorderArea - target.clientHeight;
    var verticalScrollbarThickness = !canScrollVertically ? 0 : target.offsetWidth - horizontalBorderArea - target.clientWidth;
    var widthReduction = removePadding ? horizontalPadding + horizontalBorderArea : 0;
    var heightReduction = removePadding ? verticalPadding + verticalBorderArea : 0;
    var contentWidth = svg ? svg.width : parseDimension(cs.width) - widthReduction - verticalScrollbarThickness;
    var contentHeight = svg ? svg.height : parseDimension(cs.height) - heightReduction - horizontalScrollbarThickness;
    var borderBoxWidth = contentWidth + horizontalPadding + verticalScrollbarThickness + horizontalBorderArea;
    var borderBoxHeight = contentHeight + verticalPadding + horizontalScrollbarThickness + verticalBorderArea;
    var boxes = (0,_utils_freeze__WEBPACK_IMPORTED_MODULE_4__.freeze)({
        devicePixelContentBoxSize: size(Math.round(contentWidth * devicePixelRatio), Math.round(contentHeight * devicePixelRatio), switchSizes),
        borderBoxSize: size(borderBoxWidth, borderBoxHeight, switchSizes),
        contentBoxSize: size(contentWidth, contentHeight, switchSizes),
        contentRect: new _DOMRectReadOnly__WEBPACK_IMPORTED_MODULE_2__.DOMRectReadOnly(paddingLeft, paddingTop, contentWidth, contentHeight)
    });
    cache.set(target, boxes);
    return boxes;
};
var calculateBoxSize = function (target, observedBox, forceRecalculation) {
    var _a = calculateBoxSizes(target, forceRecalculation), borderBoxSize = _a.borderBoxSize, contentBoxSize = _a.contentBoxSize, devicePixelContentBoxSize = _a.devicePixelContentBoxSize;
    switch (observedBox) {
        case _ResizeObserverBoxOptions__WEBPACK_IMPORTED_MODULE_0__.ResizeObserverBoxOptions.DEVICE_PIXEL_CONTENT_BOX:
            return devicePixelContentBoxSize;
        case _ResizeObserverBoxOptions__WEBPACK_IMPORTED_MODULE_0__.ResizeObserverBoxOptions.BORDER_BOX:
            return borderBoxSize;
        default:
            return contentBoxSize;
    }
};



/***/ }),

/***/ "./node_modules/@juggle/resize-observer/lib/algorithms/calculateDepthForNode.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@juggle/resize-observer/lib/algorithms/calculateDepthForNode.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "calculateDepthForNode": () => (/* binding */ calculateDepthForNode)
/* harmony export */ });
/* harmony import */ var _utils_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/element */ "./node_modules/@juggle/resize-observer/lib/utils/element.js");

var calculateDepthForNode = function (node) {
    if ((0,_utils_element__WEBPACK_IMPORTED_MODULE_0__.isHidden)(node)) {
        return Infinity;
    }
    var depth = 0;
    var parent = node.parentNode;
    while (parent) {
        depth += 1;
        parent = parent.parentNode;
    }
    return depth;
};



/***/ }),

/***/ "./node_modules/@juggle/resize-observer/lib/algorithms/deliverResizeLoopError.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/@juggle/resize-observer/lib/algorithms/deliverResizeLoopError.js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "deliverResizeLoopError": () => (/* binding */ deliverResizeLoopError)
/* harmony export */ });
var msg = 'ResizeObserver loop completed with undelivered notifications.';
var deliverResizeLoopError = function () {
    var event;
    if (typeof ErrorEvent === 'function') {
        event = new ErrorEvent('error', {
            message: msg
        });
    }
    else {
        event = document.createEvent('Event');
        event.initEvent('error', false, false);
        event.message = msg;
    }
    window.dispatchEvent(event);
};



/***/ }),

/***/ "./node_modules/@juggle/resize-observer/lib/algorithms/gatherActiveObservationsAtDepth.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/@juggle/resize-observer/lib/algorithms/gatherActiveObservationsAtDepth.js ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "gatherActiveObservationsAtDepth": () => (/* binding */ gatherActiveObservationsAtDepth)
/* harmony export */ });
/* harmony import */ var _utils_resizeObservers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/resizeObservers */ "./node_modules/@juggle/resize-observer/lib/utils/resizeObservers.js");
/* harmony import */ var _calculateDepthForNode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./calculateDepthForNode */ "./node_modules/@juggle/resize-observer/lib/algorithms/calculateDepthForNode.js");


var gatherActiveObservationsAtDepth = function (depth) {
    _utils_resizeObservers__WEBPACK_IMPORTED_MODULE_0__.resizeObservers.forEach(function processObserver(ro) {
        ro.activeTargets.splice(0, ro.activeTargets.length);
        ro.skippedTargets.splice(0, ro.skippedTargets.length);
        ro.observationTargets.forEach(function processTarget(ot) {
            if (ot.isActive()) {
                if ((0,_calculateDepthForNode__WEBPACK_IMPORTED_MODULE_1__.calculateDepthForNode)(ot.target) > depth) {
                    ro.activeTargets.push(ot);
                }
                else {
                    ro.skippedTargets.push(ot);
                }
            }
        });
    });
};



/***/ }),

/***/ "./node_modules/@juggle/resize-observer/lib/algorithms/hasActiveObservations.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@juggle/resize-observer/lib/algorithms/hasActiveObservations.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "hasActiveObservations": () => (/* binding */ hasActiveObservations)
/* harmony export */ });
/* harmony import */ var _utils_resizeObservers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/resizeObservers */ "./node_modules/@juggle/resize-observer/lib/utils/resizeObservers.js");

var hasActiveObservations = function () {
    return _utils_resizeObservers__WEBPACK_IMPORTED_MODULE_0__.resizeObservers.some(function (ro) { return ro.activeTargets.length > 0; });
};



/***/ }),

/***/ "./node_modules/@juggle/resize-observer/lib/algorithms/hasSkippedObservations.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/@juggle/resize-observer/lib/algorithms/hasSkippedObservations.js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "hasSkippedObservations": () => (/* binding */ hasSkippedObservations)
/* harmony export */ });
/* harmony import */ var _utils_resizeObservers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/resizeObservers */ "./node_modules/@juggle/resize-observer/lib/utils/resizeObservers.js");

var hasSkippedObservations = function () {
    return _utils_resizeObservers__WEBPACK_IMPORTED_MODULE_0__.resizeObservers.some(function (ro) { return ro.skippedTargets.length > 0; });
};



/***/ }),

/***/ "./node_modules/@juggle/resize-observer/lib/exports/resize-observer.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@juggle/resize-observer/lib/exports/resize-observer.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResizeObserver": () => (/* reexport safe */ _ResizeObserver__WEBPACK_IMPORTED_MODULE_0__.ResizeObserver),
/* harmony export */   "ResizeObserverEntry": () => (/* reexport safe */ _ResizeObserverEntry__WEBPACK_IMPORTED_MODULE_1__.ResizeObserverEntry),
/* harmony export */   "ResizeObserverSize": () => (/* reexport safe */ _ResizeObserverSize__WEBPACK_IMPORTED_MODULE_2__.ResizeObserverSize)
/* harmony export */ });
/* harmony import */ var _ResizeObserver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ResizeObserver */ "./node_modules/@juggle/resize-observer/lib/ResizeObserver.js");
/* harmony import */ var _ResizeObserverEntry__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ResizeObserverEntry */ "./node_modules/@juggle/resize-observer/lib/ResizeObserverEntry.js");
/* harmony import */ var _ResizeObserverSize__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ResizeObserverSize */ "./node_modules/@juggle/resize-observer/lib/ResizeObserverSize.js");





/***/ }),

/***/ "./node_modules/@juggle/resize-observer/lib/utils/element.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@juggle/resize-observer/lib/utils/element.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isElement": () => (/* binding */ isElement),
/* harmony export */   "isHidden": () => (/* binding */ isHidden),
/* harmony export */   "isReplacedElement": () => (/* binding */ isReplacedElement),
/* harmony export */   "isSVG": () => (/* binding */ isSVG)
/* harmony export */ });
var isSVG = function (target) { return target instanceof SVGElement && 'getBBox' in target; };
var isHidden = function (target) {
    if (isSVG(target)) {
        var _a = target.getBBox(), width = _a.width, height = _a.height;
        return !width && !height;
    }
    var _b = target, offsetWidth = _b.offsetWidth, offsetHeight = _b.offsetHeight;
    return !(offsetWidth || offsetHeight || target.getClientRects().length);
};
var isElement = function (obj) {
    var _a;
    if (obj instanceof Element) {
        return true;
    }
    var scope = (_a = obj === null || obj === void 0 ? void 0 : obj.ownerDocument) === null || _a === void 0 ? void 0 : _a.defaultView;
    return !!(scope && obj instanceof scope.Element);
};
var isReplacedElement = function (target) {
    switch (target.tagName) {
        case 'INPUT':
            if (target.type !== 'image') {
                break;
            }
        case 'VIDEO':
        case 'AUDIO':
        case 'EMBED':
        case 'OBJECT':
        case 'CANVAS':
        case 'IFRAME':
        case 'IMG':
            return true;
    }
    return false;
};



/***/ }),

/***/ "./node_modules/@juggle/resize-observer/lib/utils/freeze.js":
/*!******************************************************************!*\
  !*** ./node_modules/@juggle/resize-observer/lib/utils/freeze.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "freeze": () => (/* binding */ freeze)
/* harmony export */ });
var freeze = function (obj) { return Object.freeze(obj); };


/***/ }),

/***/ "./node_modules/@juggle/resize-observer/lib/utils/global.js":
/*!******************************************************************!*\
  !*** ./node_modules/@juggle/resize-observer/lib/utils/global.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "global": () => (/* binding */ global)
/* harmony export */ });
var global = typeof window !== 'undefined' ? window : {};


/***/ }),

/***/ "./node_modules/@juggle/resize-observer/lib/utils/process.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@juggle/resize-observer/lib/utils/process.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "process": () => (/* binding */ process)
/* harmony export */ });
/* harmony import */ var _algorithms_hasActiveObservations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../algorithms/hasActiveObservations */ "./node_modules/@juggle/resize-observer/lib/algorithms/hasActiveObservations.js");
/* harmony import */ var _algorithms_hasSkippedObservations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../algorithms/hasSkippedObservations */ "./node_modules/@juggle/resize-observer/lib/algorithms/hasSkippedObservations.js");
/* harmony import */ var _algorithms_deliverResizeLoopError__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../algorithms/deliverResizeLoopError */ "./node_modules/@juggle/resize-observer/lib/algorithms/deliverResizeLoopError.js");
/* harmony import */ var _algorithms_broadcastActiveObservations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../algorithms/broadcastActiveObservations */ "./node_modules/@juggle/resize-observer/lib/algorithms/broadcastActiveObservations.js");
/* harmony import */ var _algorithms_gatherActiveObservationsAtDepth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../algorithms/gatherActiveObservationsAtDepth */ "./node_modules/@juggle/resize-observer/lib/algorithms/gatherActiveObservationsAtDepth.js");





var process = function () {
    var depth = 0;
    (0,_algorithms_gatherActiveObservationsAtDepth__WEBPACK_IMPORTED_MODULE_4__.gatherActiveObservationsAtDepth)(depth);
    while ((0,_algorithms_hasActiveObservations__WEBPACK_IMPORTED_MODULE_0__.hasActiveObservations)()) {
        depth = (0,_algorithms_broadcastActiveObservations__WEBPACK_IMPORTED_MODULE_3__.broadcastActiveObservations)();
        (0,_algorithms_gatherActiveObservationsAtDepth__WEBPACK_IMPORTED_MODULE_4__.gatherActiveObservationsAtDepth)(depth);
    }
    if ((0,_algorithms_hasSkippedObservations__WEBPACK_IMPORTED_MODULE_1__.hasSkippedObservations)()) {
        (0,_algorithms_deliverResizeLoopError__WEBPACK_IMPORTED_MODULE_2__.deliverResizeLoopError)();
    }
    return depth > 0;
};



/***/ }),

/***/ "./node_modules/@juggle/resize-observer/lib/utils/queueMicroTask.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@juggle/resize-observer/lib/utils/queueMicroTask.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "queueMicroTask": () => (/* binding */ queueMicroTask)
/* harmony export */ });
var trigger;
var callbacks = [];
var notify = function () { return callbacks.splice(0).forEach(function (cb) { return cb(); }); };
var queueMicroTask = function (callback) {
    if (!trigger) {
        var toggle_1 = 0;
        var el_1 = document.createTextNode('');
        var config = { characterData: true };
        new MutationObserver(function () { return notify(); }).observe(el_1, config);
        trigger = function () { el_1.textContent = "".concat(toggle_1 ? toggle_1-- : toggle_1++); };
    }
    callbacks.push(callback);
    trigger();
};



/***/ }),

/***/ "./node_modules/@juggle/resize-observer/lib/utils/queueResizeObserver.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@juggle/resize-observer/lib/utils/queueResizeObserver.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "queueResizeObserver": () => (/* binding */ queueResizeObserver)
/* harmony export */ });
/* harmony import */ var _queueMicroTask__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./queueMicroTask */ "./node_modules/@juggle/resize-observer/lib/utils/queueMicroTask.js");

var queueResizeObserver = function (cb) {
    (0,_queueMicroTask__WEBPACK_IMPORTED_MODULE_0__.queueMicroTask)(function ResizeObserver() {
        requestAnimationFrame(cb);
    });
};



/***/ }),

/***/ "./node_modules/@juggle/resize-observer/lib/utils/resizeObservers.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@juggle/resize-observer/lib/utils/resizeObservers.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "resizeObservers": () => (/* binding */ resizeObservers)
/* harmony export */ });
var resizeObservers = [];



/***/ }),

/***/ "./node_modules/@juggle/resize-observer/lib/utils/scheduler.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@juggle/resize-observer/lib/utils/scheduler.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "scheduler": () => (/* binding */ scheduler),
/* harmony export */   "updateCount": () => (/* binding */ updateCount)
/* harmony export */ });
/* harmony import */ var _process__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./process */ "./node_modules/@juggle/resize-observer/lib/utils/process.js");
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./global */ "./node_modules/@juggle/resize-observer/lib/utils/global.js");
/* harmony import */ var _queueResizeObserver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./queueResizeObserver */ "./node_modules/@juggle/resize-observer/lib/utils/queueResizeObserver.js");



var watching = 0;
var isWatching = function () { return !!watching; };
var CATCH_PERIOD = 250;
var observerConfig = { attributes: true, characterData: true, childList: true, subtree: true };
var events = [
    'resize',
    'load',
    'transitionend',
    'animationend',
    'animationstart',
    'animationiteration',
    'keyup',
    'keydown',
    'mouseup',
    'mousedown',
    'mouseover',
    'mouseout',
    'blur',
    'focus'
];
var time = function (timeout) {
    if (timeout === void 0) { timeout = 0; }
    return Date.now() + timeout;
};
var scheduled = false;
var Scheduler = (function () {
    function Scheduler() {
        var _this = this;
        this.stopped = true;
        this.listener = function () { return _this.schedule(); };
    }
    Scheduler.prototype.run = function (timeout) {
        var _this = this;
        if (timeout === void 0) { timeout = CATCH_PERIOD; }
        if (scheduled) {
            return;
        }
        scheduled = true;
        var until = time(timeout);
        (0,_queueResizeObserver__WEBPACK_IMPORTED_MODULE_2__.queueResizeObserver)(function () {
            var elementsHaveResized = false;
            try {
                elementsHaveResized = (0,_process__WEBPACK_IMPORTED_MODULE_0__.process)();
            }
            finally {
                scheduled = false;
                timeout = until - time();
                if (!isWatching()) {
                    return;
                }
                if (elementsHaveResized) {
                    _this.run(1000);
                }
                else if (timeout > 0) {
                    _this.run(timeout);
                }
                else {
                    _this.start();
                }
            }
        });
    };
    Scheduler.prototype.schedule = function () {
        this.stop();
        this.run();
    };
    Scheduler.prototype.observe = function () {
        var _this = this;
        var cb = function () { return _this.observer && _this.observer.observe(document.body, observerConfig); };
        document.body ? cb() : _global__WEBPACK_IMPORTED_MODULE_1__.global.addEventListener('DOMContentLoaded', cb);
    };
    Scheduler.prototype.start = function () {
        var _this = this;
        if (this.stopped) {
            this.stopped = false;
            this.observer = new MutationObserver(this.listener);
            this.observe();
            events.forEach(function (name) { return _global__WEBPACK_IMPORTED_MODULE_1__.global.addEventListener(name, _this.listener, true); });
        }
    };
    Scheduler.prototype.stop = function () {
        var _this = this;
        if (!this.stopped) {
            this.observer && this.observer.disconnect();
            events.forEach(function (name) { return _global__WEBPACK_IMPORTED_MODULE_1__.global.removeEventListener(name, _this.listener, true); });
            this.stopped = true;
        }
    };
    return Scheduler;
}());
var scheduler = new Scheduler();
var updateCount = function (n) {
    !watching && n > 0 && scheduler.start();
    watching += n;
    !watching && scheduler.stop();
};



/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/right-sidebar.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/right-sidebar.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/side-bar.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/side-bar.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var simplebar_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! simplebar-vue */ "./node_modules/simplebar-vue/dist/simplebar-vue.esm.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    simplebar: simplebar_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/topbar.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/topbar.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var simplebar_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! simplebar-vue */ "./node_modules/simplebar-vue/dist/simplebar-vue.esm.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      current_language: "en"
    };
  },
  components: {
    simplebar: simplebar_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  methods: {
    toggleMenu: function toggleMenu() {
      this.$parent.toggleMenu();
    },
    initFullScreen: function initFullScreen() {
      document.body.classList.toggle("fullscreen-enable");
      if (!document.fullscreenElement && /* alternative standard method */!document.mozFullScreenElement && !document.webkitFullscreenElement) {
        // current working methods
        if (document.documentElement.requestFullscreen) {
          document.documentElement.requestFullscreen();
        } else if (document.documentElement.mozRequestFullScreen) {
          document.documentElement.mozRequestFullScreen();
        } else if (document.documentElement.webkitRequestFullscreen) {
          document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
        }
      } else {
        if (document.cancelFullScreen) {
          document.cancelFullScreen();
        } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen();
        } else if (document.webkitCancelFullScreen) {
          document.webkitCancelFullScreen();
        }
      }
    },
    toggleRightSidebar: function toggleRightSidebar() {
      this.$parent.toggleRightSidebar();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/layouts/main.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/layouts/main.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_topbar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/topbar */ "./resources/js/components/topbar.vue");
/* harmony import */ var _components_side_bar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/side-bar */ "./resources/js/components/side-bar.vue");
/* harmony import */ var _components_right_sidebar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/right-sidebar */ "./resources/js/components/right-sidebar.vue");
/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/footer */ "./resources/js/components/footer.vue");




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    Topbar: _components_topbar__WEBPACK_IMPORTED_MODULE_0__["default"],
    SideBar: _components_side_bar__WEBPACK_IMPORTED_MODULE_1__["default"],
    Rightsidebar: _components_right_sidebar__WEBPACK_IMPORTED_MODULE_2__["default"],
    Footer: _components_footer__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  data: function data() {
    return {};
  },
  computed: {},
  methods: {},
  mounted: function mounted() {}
});

/***/ }),

/***/ "./node_modules/can-use-dom/index.js":
/*!*******************************************!*\
  !*** ./node_modules/can-use-dom/index.js ***!
  \*******************************************/
/***/ ((module) => {

var canUseDOM = !!(
  typeof window !== 'undefined' &&
  window.document &&
  window.document.createElement
);

module.exports = canUseDOM;

/***/ }),

/***/ "./node_modules/core-js/internals/a-callable.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/a-callable.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isCallable = __webpack_require__(/*! ../internals/is-callable */ "./node_modules/core-js/internals/is-callable.js");
var tryToString = __webpack_require__(/*! ../internals/try-to-string */ "./node_modules/core-js/internals/try-to-string.js");

var $TypeError = TypeError;

// `Assert: IsCallable(argument) is true`
module.exports = function (argument) {
  if (isCallable(argument)) return argument;
  throw $TypeError(tryToString(argument) + ' is not a function');
};


/***/ }),

/***/ "./node_modules/core-js/internals/a-possible-prototype.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/internals/a-possible-prototype.js ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isCallable = __webpack_require__(/*! ../internals/is-callable */ "./node_modules/core-js/internals/is-callable.js");

var $String = String;
var $TypeError = TypeError;

module.exports = function (argument) {
  if (typeof argument == 'object' || isCallable(argument)) return argument;
  throw $TypeError("Can't set " + $String(argument) + ' as a prototype');
};


/***/ }),

/***/ "./node_modules/core-js/internals/add-to-unscopables.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/internals/add-to-unscopables.js ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");
var create = __webpack_require__(/*! ../internals/object-create */ "./node_modules/core-js/internals/object-create.js");
var defineProperty = (__webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js").f);

var UNSCOPABLES = wellKnownSymbol('unscopables');
var ArrayPrototype = Array.prototype;

// Array.prototype[@@unscopables]
// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
if (ArrayPrototype[UNSCOPABLES] == undefined) {
  defineProperty(ArrayPrototype, UNSCOPABLES, {
    configurable: true,
    value: create(null)
  });
}

// add a key to Array.prototype[@@unscopables]
module.exports = function (key) {
  ArrayPrototype[UNSCOPABLES][key] = true;
};


/***/ }),

/***/ "./node_modules/core-js/internals/advance-string-index.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/internals/advance-string-index.js ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var charAt = (__webpack_require__(/*! ../internals/string-multibyte */ "./node_modules/core-js/internals/string-multibyte.js").charAt);

// `AdvanceStringIndex` abstract operation
// https://tc39.es/ecma262/#sec-advancestringindex
module.exports = function (S, index, unicode) {
  return index + (unicode ? charAt(S, index).length : 1);
};


/***/ }),

/***/ "./node_modules/core-js/internals/an-instance.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/an-instance.js ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isPrototypeOf = __webpack_require__(/*! ../internals/object-is-prototype-of */ "./node_modules/core-js/internals/object-is-prototype-of.js");

var $TypeError = TypeError;

module.exports = function (it, Prototype) {
  if (isPrototypeOf(Prototype, it)) return it;
  throw $TypeError('Incorrect invocation');
};


/***/ }),

/***/ "./node_modules/core-js/internals/an-object.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/an-object.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");

var $String = String;
var $TypeError = TypeError;

// `Assert: Type(argument) is Object`
module.exports = function (argument) {
  if (isObject(argument)) return argument;
  throw $TypeError($String(argument) + ' is not an object');
};


/***/ }),

/***/ "./node_modules/core-js/internals/array-buffer-non-extensible.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/internals/array-buffer-non-extensible.js ***!
  \***********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// FF26- bug: ArrayBuffers are non-extensible, but Object.isExtensible does not report it
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

module.exports = fails(function () {
  if (typeof ArrayBuffer == 'function') {
    var buffer = new ArrayBuffer(8);
    // eslint-disable-next-line es/no-object-isextensible, es/no-object-defineproperty -- safe
    if (Object.isExtensible(buffer)) Object.defineProperty(buffer, 'a', { value: 8 });
  }
});


/***/ }),

/***/ "./node_modules/core-js/internals/array-for-each.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/array-for-each.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $forEach = (__webpack_require__(/*! ../internals/array-iteration */ "./node_modules/core-js/internals/array-iteration.js").forEach);
var arrayMethodIsStrict = __webpack_require__(/*! ../internals/array-method-is-strict */ "./node_modules/core-js/internals/array-method-is-strict.js");

var STRICT_METHOD = arrayMethodIsStrict('forEach');

// `Array.prototype.forEach` method implementation
// https://tc39.es/ecma262/#sec-array.prototype.foreach
module.exports = !STRICT_METHOD ? function forEach(callbackfn /* , thisArg */) {
  return $forEach(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
// eslint-disable-next-line es/no-array-prototype-foreach -- safe
} : [].forEach;


/***/ }),

/***/ "./node_modules/core-js/internals/array-includes.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/array-includes.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js");
var toAbsoluteIndex = __webpack_require__(/*! ../internals/to-absolute-index */ "./node_modules/core-js/internals/to-absolute-index.js");
var lengthOfArrayLike = __webpack_require__(/*! ../internals/length-of-array-like */ "./node_modules/core-js/internals/length-of-array-like.js");

// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject($this);
    var length = lengthOfArrayLike(O);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare -- NaN check
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare -- NaN check
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) {
      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

module.exports = {
  // `Array.prototype.includes` method
  // https://tc39.es/ecma262/#sec-array.prototype.includes
  includes: createMethod(true),
  // `Array.prototype.indexOf` method
  // https://tc39.es/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod(false)
};


/***/ }),

/***/ "./node_modules/core-js/internals/array-iteration.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/internals/array-iteration.js ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var bind = __webpack_require__(/*! ../internals/function-bind-context */ "./node_modules/core-js/internals/function-bind-context.js");
var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/core-js/internals/function-uncurry-this.js");
var IndexedObject = __webpack_require__(/*! ../internals/indexed-object */ "./node_modules/core-js/internals/indexed-object.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");
var lengthOfArrayLike = __webpack_require__(/*! ../internals/length-of-array-like */ "./node_modules/core-js/internals/length-of-array-like.js");
var arraySpeciesCreate = __webpack_require__(/*! ../internals/array-species-create */ "./node_modules/core-js/internals/array-species-create.js");

var push = uncurryThis([].push);

// `Array.prototype.{ forEach, map, filter, some, every, find, findIndex, filterReject }` methods implementation
var createMethod = function (TYPE) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var IS_FILTER_REJECT = TYPE == 7;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  return function ($this, callbackfn, that, specificCreate) {
    var O = toObject($this);
    var self = IndexedObject(O);
    var boundFunction = bind(callbackfn, that);
    var length = lengthOfArrayLike(self);
    var index = 0;
    var create = specificCreate || arraySpeciesCreate;
    var target = IS_MAP ? create($this, length) : IS_FILTER || IS_FILTER_REJECT ? create($this, 0) : undefined;
    var value, result;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      value = self[index];
      result = boundFunction(value, index, O);
      if (TYPE) {
        if (IS_MAP) target[index] = result; // map
        else if (result) switch (TYPE) {
          case 3: return true;              // some
          case 5: return value;             // find
          case 6: return index;             // findIndex
          case 2: push(target, value);      // filter
        } else switch (TYPE) {
          case 4: return false;             // every
          case 7: push(target, value);      // filterReject
        }
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
  };
};

module.exports = {
  // `Array.prototype.forEach` method
  // https://tc39.es/ecma262/#sec-array.prototype.foreach
  forEach: createMethod(0),
  // `Array.prototype.map` method
  // https://tc39.es/ecma262/#sec-array.prototype.map
  map: createMethod(1),
  // `Array.prototype.filter` method
  // https://tc39.es/ecma262/#sec-array.prototype.filter
  filter: createMethod(2),
  // `Array.prototype.some` method
  // https://tc39.es/ecma262/#sec-array.prototype.some
  some: createMethod(3),
  // `Array.prototype.every` method
  // https://tc39.es/ecma262/#sec-array.prototype.every
  every: createMethod(4),
  // `Array.prototype.find` method
  // https://tc39.es/ecma262/#sec-array.prototype.find
  find: createMethod(5),
  // `Array.prototype.findIndex` method
  // https://tc39.es/ecma262/#sec-array.prototype.findIndex
  findIndex: createMethod(6),
  // `Array.prototype.filterReject` method
  // https://github.com/tc39/proposal-array-filtering
  filterReject: createMethod(7)
};


/***/ }),

/***/ "./node_modules/core-js/internals/array-method-has-species-support.js":
/*!****************************************************************************!*\
  !*** ./node_modules/core-js/internals/array-method-has-species-support.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");
var V8_VERSION = __webpack_require__(/*! ../internals/engine-v8-version */ "./node_modules/core-js/internals/engine-v8-version.js");

var SPECIES = wellKnownSymbol('species');

module.exports = function (METHOD_NAME) {
  // We can't use this feature detection in V8 since it causes
  // deoptimization and serious performance degradation
  // https://github.com/zloirock/core-js/issues/677
  return V8_VERSION >= 51 || !fails(function () {
    var array = [];
    var constructor = array.constructor = {};
    constructor[SPECIES] = function () {
      return { foo: 1 };
    };
    return array[METHOD_NAME](Boolean).foo !== 1;
  });
};


/***/ }),

/***/ "./node_modules/core-js/internals/array-method-is-strict.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/internals/array-method-is-strict.js ***!
  \******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

module.exports = function (METHOD_NAME, argument) {
  var method = [][METHOD_NAME];
  return !!method && fails(function () {
    // eslint-disable-next-line no-useless-call -- required for testing
    method.call(null, argument || function () { return 1; }, 1);
  });
};


/***/ }),

/***/ "./node_modules/core-js/internals/array-reduce.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/array-reduce.js ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var aCallable = __webpack_require__(/*! ../internals/a-callable */ "./node_modules/core-js/internals/a-callable.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");
var IndexedObject = __webpack_require__(/*! ../internals/indexed-object */ "./node_modules/core-js/internals/indexed-object.js");
var lengthOfArrayLike = __webpack_require__(/*! ../internals/length-of-array-like */ "./node_modules/core-js/internals/length-of-array-like.js");

var $TypeError = TypeError;

// `Array.prototype.{ reduce, reduceRight }` methods implementation
var createMethod = function (IS_RIGHT) {
  return function (that, callbackfn, argumentsLength, memo) {
    aCallable(callbackfn);
    var O = toObject(that);
    var self = IndexedObject(O);
    var length = lengthOfArrayLike(O);
    var index = IS_RIGHT ? length - 1 : 0;
    var i = IS_RIGHT ? -1 : 1;
    if (argumentsLength < 2) while (true) {
      if (index in self) {
        memo = self[index];
        index += i;
        break;
      }
      index += i;
      if (IS_RIGHT ? index < 0 : length <= index) {
        throw $TypeError('Reduce of empty array with no initial value');
      }
    }
    for (;IS_RIGHT ? index >= 0 : length > index; index += i) if (index in self) {
      memo = callbackfn(memo, self[index], index, O);
    }
    return memo;
  };
};

module.exports = {
  // `Array.prototype.reduce` method
  // https://tc39.es/ecma262/#sec-array.prototype.reduce
  left: createMethod(false),
  // `Array.prototype.reduceRight` method
  // https://tc39.es/ecma262/#sec-array.prototype.reduceright
  right: createMethod(true)
};


/***/ }),

/***/ "./node_modules/core-js/internals/array-slice-simple.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/internals/array-slice-simple.js ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var toAbsoluteIndex = __webpack_require__(/*! ../internals/to-absolute-index */ "./node_modules/core-js/internals/to-absolute-index.js");
var lengthOfArrayLike = __webpack_require__(/*! ../internals/length-of-array-like */ "./node_modules/core-js/internals/length-of-array-like.js");
var createProperty = __webpack_require__(/*! ../internals/create-property */ "./node_modules/core-js/internals/create-property.js");

var $Array = Array;
var max = Math.max;

module.exports = function (O, start, end) {
  var length = lengthOfArrayLike(O);
  var k = toAbsoluteIndex(start, length);
  var fin = toAbsoluteIndex(end === undefined ? length : end, length);
  var result = $Array(max(fin - k, 0));
  for (var n = 0; k < fin; k++, n++) createProperty(result, n, O[k]);
  result.length = n;
  return result;
};


/***/ }),

/***/ "./node_modules/core-js/internals/array-species-constructor.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/internals/array-species-constructor.js ***!
  \*********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isArray = __webpack_require__(/*! ../internals/is-array */ "./node_modules/core-js/internals/is-array.js");
var isConstructor = __webpack_require__(/*! ../internals/is-constructor */ "./node_modules/core-js/internals/is-constructor.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var SPECIES = wellKnownSymbol('species');
var $Array = Array;

// a part of `ArraySpeciesCreate` abstract operation
// https://tc39.es/ecma262/#sec-arrayspeciescreate
module.exports = function (originalArray) {
  var C;
  if (isArray(originalArray)) {
    C = originalArray.constructor;
    // cross-realm fallback
    if (isConstructor(C) && (C === $Array || isArray(C.prototype))) C = undefined;
    else if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return C === undefined ? $Array : C;
};


/***/ }),

/***/ "./node_modules/core-js/internals/array-species-create.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/internals/array-species-create.js ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arraySpeciesConstructor = __webpack_require__(/*! ../internals/array-species-constructor */ "./node_modules/core-js/internals/array-species-constructor.js");

// `ArraySpeciesCreate` abstract operation
// https://tc39.es/ecma262/#sec-arrayspeciescreate
module.exports = function (originalArray, length) {
  return new (arraySpeciesConstructor(originalArray))(length === 0 ? 0 : length);
};


/***/ }),

/***/ "./node_modules/core-js/internals/check-correctness-of-iteration.js":
/*!**************************************************************************!*\
  !*** ./node_modules/core-js/internals/check-correctness-of-iteration.js ***!
  \**************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var ITERATOR = wellKnownSymbol('iterator');
var SAFE_CLOSING = false;

try {
  var called = 0;
  var iteratorWithReturn = {
    next: function () {
      return { done: !!called++ };
    },
    'return': function () {
      SAFE_CLOSING = true;
    }
  };
  iteratorWithReturn[ITERATOR] = function () {
    return this;
  };
  // eslint-disable-next-line es/no-array-from, no-throw-literal -- required for testing
  Array.from(iteratorWithReturn, function () { throw 2; });
} catch (error) { /* empty */ }

module.exports = function (exec, SKIP_CLOSING) {
  if (!SKIP_CLOSING && !SAFE_CLOSING) return false;
  var ITERATION_SUPPORT = false;
  try {
    var object = {};
    object[ITERATOR] = function () {
      return {
        next: function () {
          return { done: ITERATION_SUPPORT = true };
        }
      };
    };
    exec(object);
  } catch (error) { /* empty */ }
  return ITERATION_SUPPORT;
};


/***/ }),

/***/ "./node_modules/core-js/internals/classof-raw.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/classof-raw.js ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/core-js/internals/function-uncurry-this.js");

var toString = uncurryThis({}.toString);
var stringSlice = uncurryThis(''.slice);

module.exports = function (it) {
  return stringSlice(toString(it), 8, -1);
};


/***/ }),

/***/ "./node_modules/core-js/internals/classof.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/internals/classof.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var TO_STRING_TAG_SUPPORT = __webpack_require__(/*! ../internals/to-string-tag-support */ "./node_modules/core-js/internals/to-string-tag-support.js");
var isCallable = __webpack_require__(/*! ../internals/is-callable */ "./node_modules/core-js/internals/is-callable.js");
var classofRaw = __webpack_require__(/*! ../internals/classof-raw */ "./node_modules/core-js/internals/classof-raw.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var $Object = Object;

// ES3 wrong here
var CORRECT_ARGUMENTS = classofRaw(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (error) { /* empty */ }
};

// getting tag from ES6+ `Object.prototype.toString`
module.exports = TO_STRING_TAG_SUPPORT ? classofRaw : function (it) {
  var O, tag, result;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (tag = tryGet(O = $Object(it), TO_STRING_TAG)) == 'string' ? tag
    // builtinTag case
    : CORRECT_ARGUMENTS ? classofRaw(O)
    // ES3 arguments fallback
    : (result = classofRaw(O)) == 'Object' && isCallable(O.callee) ? 'Arguments' : result;
};


/***/ }),

/***/ "./node_modules/core-js/internals/collection-weak.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/internals/collection-weak.js ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/core-js/internals/function-uncurry-this.js");
var defineBuiltIns = __webpack_require__(/*! ../internals/define-built-ins */ "./node_modules/core-js/internals/define-built-ins.js");
var getWeakData = (__webpack_require__(/*! ../internals/internal-metadata */ "./node_modules/core-js/internals/internal-metadata.js").getWeakData);
var anInstance = __webpack_require__(/*! ../internals/an-instance */ "./node_modules/core-js/internals/an-instance.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var isNullOrUndefined = __webpack_require__(/*! ../internals/is-null-or-undefined */ "./node_modules/core-js/internals/is-null-or-undefined.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var iterate = __webpack_require__(/*! ../internals/iterate */ "./node_modules/core-js/internals/iterate.js");
var ArrayIterationModule = __webpack_require__(/*! ../internals/array-iteration */ "./node_modules/core-js/internals/array-iteration.js");
var hasOwn = __webpack_require__(/*! ../internals/has-own-property */ "./node_modules/core-js/internals/has-own-property.js");
var InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ "./node_modules/core-js/internals/internal-state.js");

var setInternalState = InternalStateModule.set;
var internalStateGetterFor = InternalStateModule.getterFor;
var find = ArrayIterationModule.find;
var findIndex = ArrayIterationModule.findIndex;
var splice = uncurryThis([].splice);
var id = 0;

// fallback for uncaught frozen keys
var uncaughtFrozenStore = function (store) {
  return store.frozen || (store.frozen = new UncaughtFrozenStore());
};

var UncaughtFrozenStore = function () {
  this.entries = [];
};

var findUncaughtFrozen = function (store, key) {
  return find(store.entries, function (it) {
    return it[0] === key;
  });
};

UncaughtFrozenStore.prototype = {
  get: function (key) {
    var entry = findUncaughtFrozen(this, key);
    if (entry) return entry[1];
  },
  has: function (key) {
    return !!findUncaughtFrozen(this, key);
  },
  set: function (key, value) {
    var entry = findUncaughtFrozen(this, key);
    if (entry) entry[1] = value;
    else this.entries.push([key, value]);
  },
  'delete': function (key) {
    var index = findIndex(this.entries, function (it) {
      return it[0] === key;
    });
    if (~index) splice(this.entries, index, 1);
    return !!~index;
  }
};

module.exports = {
  getConstructor: function (wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER) {
    var Constructor = wrapper(function (that, iterable) {
      anInstance(that, Prototype);
      setInternalState(that, {
        type: CONSTRUCTOR_NAME,
        id: id++,
        frozen: undefined
      });
      if (!isNullOrUndefined(iterable)) iterate(iterable, that[ADDER], { that: that, AS_ENTRIES: IS_MAP });
    });

    var Prototype = Constructor.prototype;

    var getInternalState = internalStateGetterFor(CONSTRUCTOR_NAME);

    var define = function (that, key, value) {
      var state = getInternalState(that);
      var data = getWeakData(anObject(key), true);
      if (data === true) uncaughtFrozenStore(state).set(key, value);
      else data[state.id] = value;
      return that;
    };

    defineBuiltIns(Prototype, {
      // `{ WeakMap, WeakSet }.prototype.delete(key)` methods
      // https://tc39.es/ecma262/#sec-weakmap.prototype.delete
      // https://tc39.es/ecma262/#sec-weakset.prototype.delete
      'delete': function (key) {
        var state = getInternalState(this);
        if (!isObject(key)) return false;
        var data = getWeakData(key);
        if (data === true) return uncaughtFrozenStore(state)['delete'](key);
        return data && hasOwn(data, state.id) && delete data[state.id];
      },
      // `{ WeakMap, WeakSet }.prototype.has(key)` methods
      // https://tc39.es/ecma262/#sec-weakmap.prototype.has
      // https://tc39.es/ecma262/#sec-weakset.prototype.has
      has: function has(key) {
        var state = getInternalState(this);
        if (!isObject(key)) return false;
        var data = getWeakData(key);
        if (data === true) return uncaughtFrozenStore(state).has(key);
        return data && hasOwn(data, state.id);
      }
    });

    defineBuiltIns(Prototype, IS_MAP ? {
      // `WeakMap.prototype.get(key)` method
      // https://tc39.es/ecma262/#sec-weakmap.prototype.get
      get: function get(key) {
        var state = getInternalState(this);
        if (isObject(key)) {
          var data = getWeakData(key);
          if (data === true) return uncaughtFrozenStore(state).get(key);
          return data ? data[state.id] : undefined;
        }
      },
      // `WeakMap.prototype.set(key, value)` method
      // https://tc39.es/ecma262/#sec-weakmap.prototype.set
      set: function set(key, value) {
        return define(this, key, value);
      }
    } : {
      // `WeakSet.prototype.add(value)` method
      // https://tc39.es/ecma262/#sec-weakset.prototype.add
      add: function add(value) {
        return define(this, value, true);
      }
    });

    return Constructor;
  }
};


/***/ }),

/***/ "./node_modules/core-js/internals/collection.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/collection.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/core-js/internals/function-uncurry-this.js");
var isForced = __webpack_require__(/*! ../internals/is-forced */ "./node_modules/core-js/internals/is-forced.js");
var defineBuiltIn = __webpack_require__(/*! ../internals/define-built-in */ "./node_modules/core-js/internals/define-built-in.js");
var InternalMetadataModule = __webpack_require__(/*! ../internals/internal-metadata */ "./node_modules/core-js/internals/internal-metadata.js");
var iterate = __webpack_require__(/*! ../internals/iterate */ "./node_modules/core-js/internals/iterate.js");
var anInstance = __webpack_require__(/*! ../internals/an-instance */ "./node_modules/core-js/internals/an-instance.js");
var isCallable = __webpack_require__(/*! ../internals/is-callable */ "./node_modules/core-js/internals/is-callable.js");
var isNullOrUndefined = __webpack_require__(/*! ../internals/is-null-or-undefined */ "./node_modules/core-js/internals/is-null-or-undefined.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var checkCorrectnessOfIteration = __webpack_require__(/*! ../internals/check-correctness-of-iteration */ "./node_modules/core-js/internals/check-correctness-of-iteration.js");
var setToStringTag = __webpack_require__(/*! ../internals/set-to-string-tag */ "./node_modules/core-js/internals/set-to-string-tag.js");
var inheritIfRequired = __webpack_require__(/*! ../internals/inherit-if-required */ "./node_modules/core-js/internals/inherit-if-required.js");

module.exports = function (CONSTRUCTOR_NAME, wrapper, common) {
  var IS_MAP = CONSTRUCTOR_NAME.indexOf('Map') !== -1;
  var IS_WEAK = CONSTRUCTOR_NAME.indexOf('Weak') !== -1;
  var ADDER = IS_MAP ? 'set' : 'add';
  var NativeConstructor = global[CONSTRUCTOR_NAME];
  var NativePrototype = NativeConstructor && NativeConstructor.prototype;
  var Constructor = NativeConstructor;
  var exported = {};

  var fixMethod = function (KEY) {
    var uncurriedNativeMethod = uncurryThis(NativePrototype[KEY]);
    defineBuiltIn(NativePrototype, KEY,
      KEY == 'add' ? function add(value) {
        uncurriedNativeMethod(this, value === 0 ? 0 : value);
        return this;
      } : KEY == 'delete' ? function (key) {
        return IS_WEAK && !isObject(key) ? false : uncurriedNativeMethod(this, key === 0 ? 0 : key);
      } : KEY == 'get' ? function get(key) {
        return IS_WEAK && !isObject(key) ? undefined : uncurriedNativeMethod(this, key === 0 ? 0 : key);
      } : KEY == 'has' ? function has(key) {
        return IS_WEAK && !isObject(key) ? false : uncurriedNativeMethod(this, key === 0 ? 0 : key);
      } : function set(key, value) {
        uncurriedNativeMethod(this, key === 0 ? 0 : key, value);
        return this;
      }
    );
  };

  var REPLACE = isForced(
    CONSTRUCTOR_NAME,
    !isCallable(NativeConstructor) || !(IS_WEAK || NativePrototype.forEach && !fails(function () {
      new NativeConstructor().entries().next();
    }))
  );

  if (REPLACE) {
    // create collection constructor
    Constructor = common.getConstructor(wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER);
    InternalMetadataModule.enable();
  } else if (isForced(CONSTRUCTOR_NAME, true)) {
    var instance = new Constructor();
    // early implementations not supports chaining
    var HASNT_CHAINING = instance[ADDER](IS_WEAK ? {} : -0, 1) != instance;
    // V8 ~ Chromium 40- weak-collections throws on primitives, but should return false
    var THROWS_ON_PRIMITIVES = fails(function () { instance.has(1); });
    // most early implementations doesn't supports iterables, most modern - not close it correctly
    // eslint-disable-next-line no-new -- required for testing
    var ACCEPT_ITERABLES = checkCorrectnessOfIteration(function (iterable) { new NativeConstructor(iterable); });
    // for early implementations -0 and +0 not the same
    var BUGGY_ZERO = !IS_WEAK && fails(function () {
      // V8 ~ Chromium 42- fails only with 5+ elements
      var $instance = new NativeConstructor();
      var index = 5;
      while (index--) $instance[ADDER](index, index);
      return !$instance.has(-0);
    });

    if (!ACCEPT_ITERABLES) {
      Constructor = wrapper(function (dummy, iterable) {
        anInstance(dummy, NativePrototype);
        var that = inheritIfRequired(new NativeConstructor(), dummy, Constructor);
        if (!isNullOrUndefined(iterable)) iterate(iterable, that[ADDER], { that: that, AS_ENTRIES: IS_MAP });
        return that;
      });
      Constructor.prototype = NativePrototype;
      NativePrototype.constructor = Constructor;
    }

    if (THROWS_ON_PRIMITIVES || BUGGY_ZERO) {
      fixMethod('delete');
      fixMethod('has');
      IS_MAP && fixMethod('get');
    }

    if (BUGGY_ZERO || HASNT_CHAINING) fixMethod(ADDER);

    // weak collections should not contains .clear method
    if (IS_WEAK && NativePrototype.clear) delete NativePrototype.clear;
  }

  exported[CONSTRUCTOR_NAME] = Constructor;
  $({ global: true, constructor: true, forced: Constructor != NativeConstructor }, exported);

  setToStringTag(Constructor, CONSTRUCTOR_NAME);

  if (!IS_WEAK) common.setStrong(Constructor, CONSTRUCTOR_NAME, IS_MAP);

  return Constructor;
};


/***/ }),

/***/ "./node_modules/core-js/internals/copy-constructor-properties.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/internals/copy-constructor-properties.js ***!
  \***********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var hasOwn = __webpack_require__(/*! ../internals/has-own-property */ "./node_modules/core-js/internals/has-own-property.js");
var ownKeys = __webpack_require__(/*! ../internals/own-keys */ "./node_modules/core-js/internals/own-keys.js");
var getOwnPropertyDescriptorModule = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ "./node_modules/core-js/internals/object-get-own-property-descriptor.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js");

module.exports = function (target, source, exceptions) {
  var keys = ownKeys(source);
  var defineProperty = definePropertyModule.f;
  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (!hasOwn(target, key) && !(exceptions && hasOwn(exceptions, key))) {
      defineProperty(target, key, getOwnPropertyDescriptor(source, key));
    }
  }
};


/***/ }),

/***/ "./node_modules/core-js/internals/correct-prototype-getter.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/internals/correct-prototype-getter.js ***!
  \********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

module.exports = !fails(function () {
  function F() { /* empty */ }
  F.prototype.constructor = null;
  // eslint-disable-next-line es/no-object-getprototypeof -- required for testing
  return Object.getPrototypeOf(new F()) !== F.prototype;
});


/***/ }),

/***/ "./node_modules/core-js/internals/create-iter-result-object.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/internals/create-iter-result-object.js ***!
  \*********************************************************************/
/***/ ((module) => {

// `CreateIterResultObject` abstract operation
// https://tc39.es/ecma262/#sec-createiterresultobject
module.exports = function (value, done) {
  return { value: value, done: done };
};


/***/ }),

/***/ "./node_modules/core-js/internals/create-non-enumerable-property.js":
/*!**************************************************************************!*\
  !*** ./node_modules/core-js/internals/create-non-enumerable-property.js ***!
  \**************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js");
var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "./node_modules/core-js/internals/create-property-descriptor.js");

module.exports = DESCRIPTORS ? function (object, key, value) {
  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "./node_modules/core-js/internals/create-property-descriptor.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/internals/create-property-descriptor.js ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "./node_modules/core-js/internals/create-property.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/internals/create-property.js ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var toPropertyKey = __webpack_require__(/*! ../internals/to-property-key */ "./node_modules/core-js/internals/to-property-key.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js");
var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "./node_modules/core-js/internals/create-property-descriptor.js");

module.exports = function (object, key, value) {
  var propertyKey = toPropertyKey(key);
  if (propertyKey in object) definePropertyModule.f(object, propertyKey, createPropertyDescriptor(0, value));
  else object[propertyKey] = value;
};


/***/ }),

/***/ "./node_modules/core-js/internals/define-built-in.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/internals/define-built-in.js ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isCallable = __webpack_require__(/*! ../internals/is-callable */ "./node_modules/core-js/internals/is-callable.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js");
var makeBuiltIn = __webpack_require__(/*! ../internals/make-built-in */ "./node_modules/core-js/internals/make-built-in.js");
var defineGlobalProperty = __webpack_require__(/*! ../internals/define-global-property */ "./node_modules/core-js/internals/define-global-property.js");

module.exports = function (O, key, value, options) {
  if (!options) options = {};
  var simple = options.enumerable;
  var name = options.name !== undefined ? options.name : key;
  if (isCallable(value)) makeBuiltIn(value, name, options);
  if (options.global) {
    if (simple) O[key] = value;
    else defineGlobalProperty(key, value);
  } else {
    try {
      if (!options.unsafe) delete O[key];
      else if (O[key]) simple = true;
    } catch (error) { /* empty */ }
    if (simple) O[key] = value;
    else definePropertyModule.f(O, key, {
      value: value,
      enumerable: false,
      configurable: !options.nonConfigurable,
      writable: !options.nonWritable
    });
  } return O;
};


/***/ }),

/***/ "./node_modules/core-js/internals/define-built-ins.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/internals/define-built-ins.js ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var defineBuiltIn = __webpack_require__(/*! ../internals/define-built-in */ "./node_modules/core-js/internals/define-built-in.js");

module.exports = function (target, src, options) {
  for (var key in src) defineBuiltIn(target, key, src[key], options);
  return target;
};


/***/ }),

/***/ "./node_modules/core-js/internals/define-global-property.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/internals/define-global-property.js ***!
  \******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");

// eslint-disable-next-line es/no-object-defineproperty -- safe
var defineProperty = Object.defineProperty;

module.exports = function (key, value) {
  try {
    defineProperty(global, key, { value: value, configurable: true, writable: true });
  } catch (error) {
    global[key] = value;
  } return value;
};


/***/ }),

/***/ "./node_modules/core-js/internals/descriptors.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/descriptors.js ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

// Detect IE8's incomplete defineProperty implementation
module.exports = !fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;
});


/***/ }),

/***/ "./node_modules/core-js/internals/document-all.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/document-all.js ***!
  \********************************************************/
/***/ ((module) => {

var documentAll = typeof document == 'object' && document.all;

// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot
var IS_HTMLDDA = typeof documentAll == 'undefined' && documentAll !== undefined;

module.exports = {
  all: documentAll,
  IS_HTMLDDA: IS_HTMLDDA
};


/***/ }),

/***/ "./node_modules/core-js/internals/document-create-element.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/internals/document-create-element.js ***!
  \*******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");

var document = global.document;
// typeof document.createElement is 'object' in old IE
var EXISTS = isObject(document) && isObject(document.createElement);

module.exports = function (it) {
  return EXISTS ? document.createElement(it) : {};
};


/***/ }),

/***/ "./node_modules/core-js/internals/does-not-exceed-safe-integer.js":
/*!************************************************************************!*\
  !*** ./node_modules/core-js/internals/does-not-exceed-safe-integer.js ***!
  \************************************************************************/
/***/ ((module) => {

var $TypeError = TypeError;
var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF; // 2 ** 53 - 1 == 9007199254740991

module.exports = function (it) {
  if (it > MAX_SAFE_INTEGER) throw $TypeError('Maximum allowed index exceeded');
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/internals/dom-iterables.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/dom-iterables.js ***!
  \*********************************************************/
/***/ ((module) => {

// iterable DOM collections
// flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods
module.exports = {
  CSSRuleList: 0,
  CSSStyleDeclaration: 0,
  CSSValueList: 0,
  ClientRectList: 0,
  DOMRectList: 0,
  DOMStringList: 0,
  DOMTokenList: 1,
  DataTransferItemList: 0,
  FileList: 0,
  HTMLAllCollection: 0,
  HTMLCollection: 0,
  HTMLFormElement: 0,
  HTMLSelectElement: 0,
  MediaList: 0,
  MimeTypeArray: 0,
  NamedNodeMap: 0,
  NodeList: 1,
  PaintRequestList: 0,
  Plugin: 0,
  PluginArray: 0,
  SVGLengthList: 0,
  SVGNumberList: 0,
  SVGPathSegList: 0,
  SVGPointList: 0,
  SVGStringList: 0,
  SVGTransformList: 0,
  SourceBufferList: 0,
  StyleSheetList: 0,
  TextTrackCueList: 0,
  TextTrackList: 0,
  TouchList: 0
};


/***/ }),

/***/ "./node_modules/core-js/internals/dom-token-list-prototype.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/internals/dom-token-list-prototype.js ***!
  \********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// in old WebKit versions, `element.classList` is not an instance of global `DOMTokenList`
var documentCreateElement = __webpack_require__(/*! ../internals/document-create-element */ "./node_modules/core-js/internals/document-create-element.js");

var classList = documentCreateElement('span').classList;
var DOMTokenListPrototype = classList && classList.constructor && classList.constructor.prototype;

module.exports = DOMTokenListPrototype === Object.prototype ? undefined : DOMTokenListPrototype;


/***/ }),

/***/ "./node_modules/core-js/internals/engine-is-node.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/engine-is-node.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var classof = __webpack_require__(/*! ../internals/classof-raw */ "./node_modules/core-js/internals/classof-raw.js");
var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");

module.exports = classof(global.process) == 'process';


/***/ }),

/***/ "./node_modules/core-js/internals/engine-user-agent.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/engine-user-agent.js ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "./node_modules/core-js/internals/get-built-in.js");

module.exports = getBuiltIn('navigator', 'userAgent') || '';


/***/ }),

/***/ "./node_modules/core-js/internals/engine-v8-version.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/engine-v8-version.js ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var userAgent = __webpack_require__(/*! ../internals/engine-user-agent */ "./node_modules/core-js/internals/engine-user-agent.js");

var process = global.process;
var Deno = global.Deno;
var versions = process && process.versions || Deno && Deno.version;
var v8 = versions && versions.v8;
var match, version;

if (v8) {
  match = v8.split('.');
  // in old Chrome, versions of V8 isn't V8 = Chrome / 10
  // but their correct versions are not interesting for us
  version = match[0] > 0 && match[0] < 4 ? 1 : +(match[0] + match[1]);
}

// BrowserFS NodeJS `process` polyfill incorrectly set `.v8` to `0.0`
// so check `userAgent` even if `.v8` exists, but 0
if (!version && userAgent) {
  match = userAgent.match(/Edge\/(\d+)/);
  if (!match || match[1] >= 74) {
    match = userAgent.match(/Chrome\/(\d+)/);
    if (match) version = +match[1];
  }
}

module.exports = version;


/***/ }),

/***/ "./node_modules/core-js/internals/enum-bug-keys.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/enum-bug-keys.js ***!
  \*********************************************************/
/***/ ((module) => {

// IE8- don't enum bug keys
module.exports = [
  'constructor',
  'hasOwnProperty',
  'isPrototypeOf',
  'propertyIsEnumerable',
  'toLocaleString',
  'toString',
  'valueOf'
];


/***/ }),

/***/ "./node_modules/core-js/internals/export.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/internals/export.js ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var getOwnPropertyDescriptor = (__webpack_require__(/*! ../internals/object-get-own-property-descriptor */ "./node_modules/core-js/internals/object-get-own-property-descriptor.js").f);
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/core-js/internals/create-non-enumerable-property.js");
var defineBuiltIn = __webpack_require__(/*! ../internals/define-built-in */ "./node_modules/core-js/internals/define-built-in.js");
var defineGlobalProperty = __webpack_require__(/*! ../internals/define-global-property */ "./node_modules/core-js/internals/define-global-property.js");
var copyConstructorProperties = __webpack_require__(/*! ../internals/copy-constructor-properties */ "./node_modules/core-js/internals/copy-constructor-properties.js");
var isForced = __webpack_require__(/*! ../internals/is-forced */ "./node_modules/core-js/internals/is-forced.js");

/*
  options.target         - name of the target object
  options.global         - target is the global object
  options.stat           - export as static methods of target
  options.proto          - export as prototype methods of target
  options.real           - real prototype method for the `pure` version
  options.forced         - export even if the native feature is available
  options.bind           - bind methods to the target, required for the `pure` version
  options.wrap           - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe         - use the simple assignment of property instead of delete + defineProperty
  options.sham           - add a flag to not completely full polyfills
  options.enumerable     - export as enumerable property
  options.dontCallGetSet - prevent calling a getter on target
  options.name           - the .name of the function if it does not match the key
*/
module.exports = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var FORCED, target, key, targetProperty, sourceProperty, descriptor;
  if (GLOBAL) {
    target = global;
  } else if (STATIC) {
    target = global[TARGET] || defineGlobalProperty(TARGET, {});
  } else {
    target = (global[TARGET] || {}).prototype;
  }
  if (target) for (key in source) {
    sourceProperty = source[key];
    if (options.dontCallGetSet) {
      descriptor = getOwnPropertyDescriptor(target, key);
      targetProperty = descriptor && descriptor.value;
    } else targetProperty = target[key];
    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
    // contained in target
    if (!FORCED && targetProperty !== undefined) {
      if (typeof sourceProperty == typeof targetProperty) continue;
      copyConstructorProperties(sourceProperty, targetProperty);
    }
    // add a flag to not completely full polyfills
    if (options.sham || (targetProperty && targetProperty.sham)) {
      createNonEnumerableProperty(sourceProperty, 'sham', true);
    }
    defineBuiltIn(target, key, sourceProperty, options);
  }
};


/***/ }),

/***/ "./node_modules/core-js/internals/fails.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/internals/fails.js ***!
  \*************************************************/
/***/ ((module) => {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};


/***/ }),

/***/ "./node_modules/core-js/internals/fix-regexp-well-known-symbol-logic.js":
/*!******************************************************************************!*\
  !*** ./node_modules/core-js/internals/fix-regexp-well-known-symbol-logic.js ***!
  \******************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// TODO: Remove from `core-js@4` since it's moved to entry points
__webpack_require__(/*! ../modules/es.regexp.exec */ "./node_modules/core-js/modules/es.regexp.exec.js");
var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this-clause */ "./node_modules/core-js/internals/function-uncurry-this-clause.js");
var defineBuiltIn = __webpack_require__(/*! ../internals/define-built-in */ "./node_modules/core-js/internals/define-built-in.js");
var regexpExec = __webpack_require__(/*! ../internals/regexp-exec */ "./node_modules/core-js/internals/regexp-exec.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/core-js/internals/create-non-enumerable-property.js");

var SPECIES = wellKnownSymbol('species');
var RegExpPrototype = RegExp.prototype;

module.exports = function (KEY, exec, FORCED, SHAM) {
  var SYMBOL = wellKnownSymbol(KEY);

  var DELEGATES_TO_SYMBOL = !fails(function () {
    // String methods call symbol-named RegEp methods
    var O = {};
    O[SYMBOL] = function () { return 7; };
    return ''[KEY](O) != 7;
  });

  var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL && !fails(function () {
    // Symbol-named RegExp methods call .exec
    var execCalled = false;
    var re = /a/;

    if (KEY === 'split') {
      // We can't use real regex here since it causes deoptimization
      // and serious performance degradation in V8
      // https://github.com/zloirock/core-js/issues/306
      re = {};
      // RegExp[@@split] doesn't call the regex's exec method, but first creates
      // a new one. We need to return the patched regex when creating the new one.
      re.constructor = {};
      re.constructor[SPECIES] = function () { return re; };
      re.flags = '';
      re[SYMBOL] = /./[SYMBOL];
    }

    re.exec = function () { execCalled = true; return null; };

    re[SYMBOL]('');
    return !execCalled;
  });

  if (
    !DELEGATES_TO_SYMBOL ||
    !DELEGATES_TO_EXEC ||
    FORCED
  ) {
    var uncurriedNativeRegExpMethod = uncurryThis(/./[SYMBOL]);
    var methods = exec(SYMBOL, ''[KEY], function (nativeMethod, regexp, str, arg2, forceStringMethod) {
      var uncurriedNativeMethod = uncurryThis(nativeMethod);
      var $exec = regexp.exec;
      if ($exec === regexpExec || $exec === RegExpPrototype.exec) {
        if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
          // The native String method already delegates to @@method (this
          // polyfilled function), leasing to infinite recursion.
          // We avoid it by directly calling the native @@method method.
          return { done: true, value: uncurriedNativeRegExpMethod(regexp, str, arg2) };
        }
        return { done: true, value: uncurriedNativeMethod(str, regexp, arg2) };
      }
      return { done: false };
    });

    defineBuiltIn(String.prototype, KEY, methods[0]);
    defineBuiltIn(RegExpPrototype, SYMBOL, methods[1]);
  }

  if (SHAM) createNonEnumerableProperty(RegExpPrototype[SYMBOL], 'sham', true);
};


/***/ }),

/***/ "./node_modules/core-js/internals/freezing.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/internals/freezing.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

module.exports = !fails(function () {
  // eslint-disable-next-line es/no-object-isextensible, es/no-object-preventextensions -- required for testing
  return Object.isExtensible(Object.preventExtensions({}));
});


/***/ }),

/***/ "./node_modules/core-js/internals/function-apply.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/function-apply.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var NATIVE_BIND = __webpack_require__(/*! ../internals/function-bind-native */ "./node_modules/core-js/internals/function-bind-native.js");

var FunctionPrototype = Function.prototype;
var apply = FunctionPrototype.apply;
var call = FunctionPrototype.call;

// eslint-disable-next-line es/no-reflect -- safe
module.exports = typeof Reflect == 'object' && Reflect.apply || (NATIVE_BIND ? call.bind(apply) : function () {
  return call.apply(apply, arguments);
});


/***/ }),

/***/ "./node_modules/core-js/internals/function-bind-context.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/internals/function-bind-context.js ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this-clause */ "./node_modules/core-js/internals/function-uncurry-this-clause.js");
var aCallable = __webpack_require__(/*! ../internals/a-callable */ "./node_modules/core-js/internals/a-callable.js");
var NATIVE_BIND = __webpack_require__(/*! ../internals/function-bind-native */ "./node_modules/core-js/internals/function-bind-native.js");

var bind = uncurryThis(uncurryThis.bind);

// optional / simple context binding
module.exports = function (fn, that) {
  aCallable(fn);
  return that === undefined ? fn : NATIVE_BIND ? bind(fn, that) : function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "./node_modules/core-js/internals/function-bind-native.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/internals/function-bind-native.js ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

module.exports = !fails(function () {
  // eslint-disable-next-line es/no-function-prototype-bind -- safe
  var test = (function () { /* empty */ }).bind();
  // eslint-disable-next-line no-prototype-builtins -- safe
  return typeof test != 'function' || test.hasOwnProperty('prototype');
});


/***/ }),

/***/ "./node_modules/core-js/internals/function-call.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/function-call.js ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var NATIVE_BIND = __webpack_require__(/*! ../internals/function-bind-native */ "./node_modules/core-js/internals/function-bind-native.js");

var call = Function.prototype.call;

module.exports = NATIVE_BIND ? call.bind(call) : function () {
  return call.apply(call, arguments);
};


/***/ }),

/***/ "./node_modules/core-js/internals/function-name.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/function-name.js ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var hasOwn = __webpack_require__(/*! ../internals/has-own-property */ "./node_modules/core-js/internals/has-own-property.js");

var FunctionPrototype = Function.prototype;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getDescriptor = DESCRIPTORS && Object.getOwnPropertyDescriptor;

var EXISTS = hasOwn(FunctionPrototype, 'name');
// additional protection from minified / mangled / dropped function names
var PROPER = EXISTS && (function something() { /* empty */ }).name === 'something';
var CONFIGURABLE = EXISTS && (!DESCRIPTORS || (DESCRIPTORS && getDescriptor(FunctionPrototype, 'name').configurable));

module.exports = {
  EXISTS: EXISTS,
  PROPER: PROPER,
  CONFIGURABLE: CONFIGURABLE
};


/***/ }),

/***/ "./node_modules/core-js/internals/function-uncurry-this-clause.js":
/*!************************************************************************!*\
  !*** ./node_modules/core-js/internals/function-uncurry-this-clause.js ***!
  \************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var classofRaw = __webpack_require__(/*! ../internals/classof-raw */ "./node_modules/core-js/internals/classof-raw.js");
var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/core-js/internals/function-uncurry-this.js");

module.exports = function (fn) {
  // Nashorn bug:
  //   https://github.com/zloirock/core-js/issues/1128
  //   https://github.com/zloirock/core-js/issues/1130
  if (classofRaw(fn) === 'Function') return uncurryThis(fn);
};


/***/ }),

/***/ "./node_modules/core-js/internals/function-uncurry-this.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/internals/function-uncurry-this.js ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var NATIVE_BIND = __webpack_require__(/*! ../internals/function-bind-native */ "./node_modules/core-js/internals/function-bind-native.js");

var FunctionPrototype = Function.prototype;
var call = FunctionPrototype.call;
var uncurryThisWithBind = NATIVE_BIND && FunctionPrototype.bind.bind(call, call);

module.exports = NATIVE_BIND ? uncurryThisWithBind : function (fn) {
  return function () {
    return call.apply(fn, arguments);
  };
};


/***/ }),

/***/ "./node_modules/core-js/internals/get-built-in.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/get-built-in.js ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var isCallable = __webpack_require__(/*! ../internals/is-callable */ "./node_modules/core-js/internals/is-callable.js");

var aFunction = function (argument) {
  return isCallable(argument) ? argument : undefined;
};

module.exports = function (namespace, method) {
  return arguments.length < 2 ? aFunction(global[namespace]) : global[namespace] && global[namespace][method];
};


/***/ }),

/***/ "./node_modules/core-js/internals/get-iterator-method.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/internals/get-iterator-method.js ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var classof = __webpack_require__(/*! ../internals/classof */ "./node_modules/core-js/internals/classof.js");
var getMethod = __webpack_require__(/*! ../internals/get-method */ "./node_modules/core-js/internals/get-method.js");
var isNullOrUndefined = __webpack_require__(/*! ../internals/is-null-or-undefined */ "./node_modules/core-js/internals/is-null-or-undefined.js");
var Iterators = __webpack_require__(/*! ../internals/iterators */ "./node_modules/core-js/internals/iterators.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var ITERATOR = wellKnownSymbol('iterator');

module.exports = function (it) {
  if (!isNullOrUndefined(it)) return getMethod(it, ITERATOR)
    || getMethod(it, '@@iterator')
    || Iterators[classof(it)];
};


/***/ }),

/***/ "./node_modules/core-js/internals/get-iterator.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/get-iterator.js ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var call = __webpack_require__(/*! ../internals/function-call */ "./node_modules/core-js/internals/function-call.js");
var aCallable = __webpack_require__(/*! ../internals/a-callable */ "./node_modules/core-js/internals/a-callable.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var tryToString = __webpack_require__(/*! ../internals/try-to-string */ "./node_modules/core-js/internals/try-to-string.js");
var getIteratorMethod = __webpack_require__(/*! ../internals/get-iterator-method */ "./node_modules/core-js/internals/get-iterator-method.js");

var $TypeError = TypeError;

module.exports = function (argument, usingIterator) {
  var iteratorMethod = arguments.length < 2 ? getIteratorMethod(argument) : usingIterator;
  if (aCallable(iteratorMethod)) return anObject(call(iteratorMethod, argument));
  throw $TypeError(tryToString(argument) + ' is not iterable');
};


/***/ }),

/***/ "./node_modules/core-js/internals/get-method.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/get-method.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var aCallable = __webpack_require__(/*! ../internals/a-callable */ "./node_modules/core-js/internals/a-callable.js");
var isNullOrUndefined = __webpack_require__(/*! ../internals/is-null-or-undefined */ "./node_modules/core-js/internals/is-null-or-undefined.js");

// `GetMethod` abstract operation
// https://tc39.es/ecma262/#sec-getmethod
module.exports = function (V, P) {
  var func = V[P];
  return isNullOrUndefined(func) ? undefined : aCallable(func);
};


/***/ }),

/***/ "./node_modules/core-js/internals/get-substitution.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/internals/get-substitution.js ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/core-js/internals/function-uncurry-this.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");

var floor = Math.floor;
var charAt = uncurryThis(''.charAt);
var replace = uncurryThis(''.replace);
var stringSlice = uncurryThis(''.slice);
var SUBSTITUTION_SYMBOLS = /\$([$&'`]|\d{1,2}|<[^>]*>)/g;
var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&'`]|\d{1,2})/g;

// `GetSubstitution` abstract operation
// https://tc39.es/ecma262/#sec-getsubstitution
module.exports = function (matched, str, position, captures, namedCaptures, replacement) {
  var tailPos = position + matched.length;
  var m = captures.length;
  var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;
  if (namedCaptures !== undefined) {
    namedCaptures = toObject(namedCaptures);
    symbols = SUBSTITUTION_SYMBOLS;
  }
  return replace(replacement, symbols, function (match, ch) {
    var capture;
    switch (charAt(ch, 0)) {
      case '$': return '$';
      case '&': return matched;
      case '`': return stringSlice(str, 0, position);
      case "'": return stringSlice(str, tailPos);
      case '<':
        capture = namedCaptures[stringSlice(ch, 1, -1)];
        break;
      default: // \d\d?
        var n = +ch;
        if (n === 0) return match;
        if (n > m) {
          var f = floor(n / 10);
          if (f === 0) return match;
          if (f <= m) return captures[f - 1] === undefined ? charAt(ch, 1) : captures[f - 1] + charAt(ch, 1);
          return match;
        }
        capture = captures[n - 1];
    }
    return capture === undefined ? '' : capture;
  });
};


/***/ }),

/***/ "./node_modules/core-js/internals/global.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/internals/global.js ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var check = function (it) {
  return it && it.Math == Math && it;
};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
module.exports =
  // eslint-disable-next-line es/no-global-this -- safe
  check(typeof globalThis == 'object' && globalThis) ||
  check(typeof window == 'object' && window) ||
  // eslint-disable-next-line no-restricted-globals -- safe
  check(typeof self == 'object' && self) ||
  check(typeof __webpack_require__.g == 'object' && __webpack_require__.g) ||
  // eslint-disable-next-line no-new-func -- fallback
  (function () { return this; })() || Function('return this')();


/***/ }),

/***/ "./node_modules/core-js/internals/has-own-property.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/internals/has-own-property.js ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/core-js/internals/function-uncurry-this.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");

var hasOwnProperty = uncurryThis({}.hasOwnProperty);

// `HasOwnProperty` abstract operation
// https://tc39.es/ecma262/#sec-hasownproperty
// eslint-disable-next-line es/no-object-hasown -- safe
module.exports = Object.hasOwn || function hasOwn(it, key) {
  return hasOwnProperty(toObject(it), key);
};


/***/ }),

/***/ "./node_modules/core-js/internals/hidden-keys.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/hidden-keys.js ***!
  \*******************************************************/
/***/ ((module) => {

module.exports = {};


/***/ }),

/***/ "./node_modules/core-js/internals/html.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/internals/html.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "./node_modules/core-js/internals/get-built-in.js");

module.exports = getBuiltIn('document', 'documentElement');


/***/ }),

/***/ "./node_modules/core-js/internals/ie8-dom-define.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/ie8-dom-define.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var createElement = __webpack_require__(/*! ../internals/document-create-element */ "./node_modules/core-js/internals/document-create-element.js");

// Thanks to IE8 for its funny defineProperty
module.exports = !DESCRIPTORS && !fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty(createElement('div'), 'a', {
    get: function () { return 7; }
  }).a != 7;
});


/***/ }),

/***/ "./node_modules/core-js/internals/indexed-object.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/indexed-object.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/core-js/internals/function-uncurry-this.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var classof = __webpack_require__(/*! ../internals/classof-raw */ "./node_modules/core-js/internals/classof-raw.js");

var $Object = Object;
var split = uncurryThis(''.split);

// fallback for non-array-like ES3 and non-enumerable old V8 strings
module.exports = fails(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins -- safe
  return !$Object('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof(it) == 'String' ? split(it, '') : $Object(it);
} : $Object;


/***/ }),

/***/ "./node_modules/core-js/internals/inherit-if-required.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/internals/inherit-if-required.js ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isCallable = __webpack_require__(/*! ../internals/is-callable */ "./node_modules/core-js/internals/is-callable.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var setPrototypeOf = __webpack_require__(/*! ../internals/object-set-prototype-of */ "./node_modules/core-js/internals/object-set-prototype-of.js");

// makes subclassing work correct for wrapped built-ins
module.exports = function ($this, dummy, Wrapper) {
  var NewTarget, NewTargetPrototype;
  if (
    // it can work only with native `setPrototypeOf`
    setPrototypeOf &&
    // we haven't completely correct pre-ES6 way for getting `new.target`, so use this
    isCallable(NewTarget = dummy.constructor) &&
    NewTarget !== Wrapper &&
    isObject(NewTargetPrototype = NewTarget.prototype) &&
    NewTargetPrototype !== Wrapper.prototype
  ) setPrototypeOf($this, NewTargetPrototype);
  return $this;
};


/***/ }),

/***/ "./node_modules/core-js/internals/inspect-source.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/inspect-source.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/core-js/internals/function-uncurry-this.js");
var isCallable = __webpack_require__(/*! ../internals/is-callable */ "./node_modules/core-js/internals/is-callable.js");
var store = __webpack_require__(/*! ../internals/shared-store */ "./node_modules/core-js/internals/shared-store.js");

var functionToString = uncurryThis(Function.toString);

// this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper
if (!isCallable(store.inspectSource)) {
  store.inspectSource = function (it) {
    return functionToString(it);
  };
}

module.exports = store.inspectSource;


/***/ }),

/***/ "./node_modules/core-js/internals/internal-metadata.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/internal-metadata.js ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/core-js/internals/function-uncurry-this.js");
var hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ "./node_modules/core-js/internals/hidden-keys.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var hasOwn = __webpack_require__(/*! ../internals/has-own-property */ "./node_modules/core-js/internals/has-own-property.js");
var defineProperty = (__webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js").f);
var getOwnPropertyNamesModule = __webpack_require__(/*! ../internals/object-get-own-property-names */ "./node_modules/core-js/internals/object-get-own-property-names.js");
var getOwnPropertyNamesExternalModule = __webpack_require__(/*! ../internals/object-get-own-property-names-external */ "./node_modules/core-js/internals/object-get-own-property-names-external.js");
var isExtensible = __webpack_require__(/*! ../internals/object-is-extensible */ "./node_modules/core-js/internals/object-is-extensible.js");
var uid = __webpack_require__(/*! ../internals/uid */ "./node_modules/core-js/internals/uid.js");
var FREEZING = __webpack_require__(/*! ../internals/freezing */ "./node_modules/core-js/internals/freezing.js");

var REQUIRED = false;
var METADATA = uid('meta');
var id = 0;

var setMetadata = function (it) {
  defineProperty(it, METADATA, { value: {
    objectID: 'O' + id++, // object ID
    weakData: {}          // weak collections IDs
  } });
};

var fastKey = function (it, create) {
  // return a primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!hasOwn(it, METADATA)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMetadata(it);
  // return object ID
  } return it[METADATA].objectID;
};

var getWeakData = function (it, create) {
  if (!hasOwn(it, METADATA)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMetadata(it);
  // return the store of weak collections IDs
  } return it[METADATA].weakData;
};

// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZING && REQUIRED && isExtensible(it) && !hasOwn(it, METADATA)) setMetadata(it);
  return it;
};

var enable = function () {
  meta.enable = function () { /* empty */ };
  REQUIRED = true;
  var getOwnPropertyNames = getOwnPropertyNamesModule.f;
  var splice = uncurryThis([].splice);
  var test = {};
  test[METADATA] = 1;

  // prevent exposing of metadata key
  if (getOwnPropertyNames(test).length) {
    getOwnPropertyNamesModule.f = function (it) {
      var result = getOwnPropertyNames(it);
      for (var i = 0, length = result.length; i < length; i++) {
        if (result[i] === METADATA) {
          splice(result, i, 1);
          break;
        }
      } return result;
    };

    $({ target: 'Object', stat: true, forced: true }, {
      getOwnPropertyNames: getOwnPropertyNamesExternalModule.f
    });
  }
};

var meta = module.exports = {
  enable: enable,
  fastKey: fastKey,
  getWeakData: getWeakData,
  onFreeze: onFreeze
};

hiddenKeys[METADATA] = true;


/***/ }),

/***/ "./node_modules/core-js/internals/internal-state.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/internal-state.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var NATIVE_WEAK_MAP = __webpack_require__(/*! ../internals/weak-map-basic-detection */ "./node_modules/core-js/internals/weak-map-basic-detection.js");
var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/core-js/internals/create-non-enumerable-property.js");
var hasOwn = __webpack_require__(/*! ../internals/has-own-property */ "./node_modules/core-js/internals/has-own-property.js");
var shared = __webpack_require__(/*! ../internals/shared-store */ "./node_modules/core-js/internals/shared-store.js");
var sharedKey = __webpack_require__(/*! ../internals/shared-key */ "./node_modules/core-js/internals/shared-key.js");
var hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ "./node_modules/core-js/internals/hidden-keys.js");

var OBJECT_ALREADY_INITIALIZED = 'Object already initialized';
var TypeError = global.TypeError;
var WeakMap = global.WeakMap;
var set, get, has;

var enforce = function (it) {
  return has(it) ? get(it) : set(it, {});
};

var getterFor = function (TYPE) {
  return function (it) {
    var state;
    if (!isObject(it) || (state = get(it)).type !== TYPE) {
      throw TypeError('Incompatible receiver, ' + TYPE + ' required');
    } return state;
  };
};

if (NATIVE_WEAK_MAP || shared.state) {
  var store = shared.state || (shared.state = new WeakMap());
  /* eslint-disable no-self-assign -- prototype methods protection */
  store.get = store.get;
  store.has = store.has;
  store.set = store.set;
  /* eslint-enable no-self-assign -- prototype methods protection */
  set = function (it, metadata) {
    if (store.has(it)) throw TypeError(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    store.set(it, metadata);
    return metadata;
  };
  get = function (it) {
    return store.get(it) || {};
  };
  has = function (it) {
    return store.has(it);
  };
} else {
  var STATE = sharedKey('state');
  hiddenKeys[STATE] = true;
  set = function (it, metadata) {
    if (hasOwn(it, STATE)) throw TypeError(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    createNonEnumerableProperty(it, STATE, metadata);
    return metadata;
  };
  get = function (it) {
    return hasOwn(it, STATE) ? it[STATE] : {};
  };
  has = function (it) {
    return hasOwn(it, STATE);
  };
}

module.exports = {
  set: set,
  get: get,
  has: has,
  enforce: enforce,
  getterFor: getterFor
};


/***/ }),

/***/ "./node_modules/core-js/internals/is-array-iterator-method.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/internals/is-array-iterator-method.js ***!
  \********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");
var Iterators = __webpack_require__(/*! ../internals/iterators */ "./node_modules/core-js/internals/iterators.js");

var ITERATOR = wellKnownSymbol('iterator');
var ArrayPrototype = Array.prototype;

// check on default Array iterator
module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayPrototype[ITERATOR] === it);
};


/***/ }),

/***/ "./node_modules/core-js/internals/is-array.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/internals/is-array.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var classof = __webpack_require__(/*! ../internals/classof-raw */ "./node_modules/core-js/internals/classof-raw.js");

// `IsArray` abstract operation
// https://tc39.es/ecma262/#sec-isarray
// eslint-disable-next-line es/no-array-isarray -- safe
module.exports = Array.isArray || function isArray(argument) {
  return classof(argument) == 'Array';
};


/***/ }),

/***/ "./node_modules/core-js/internals/is-callable.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/is-callable.js ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var $documentAll = __webpack_require__(/*! ../internals/document-all */ "./node_modules/core-js/internals/document-all.js");

var documentAll = $documentAll.all;

// `IsCallable` abstract operation
// https://tc39.es/ecma262/#sec-iscallable
module.exports = $documentAll.IS_HTMLDDA ? function (argument) {
  return typeof argument == 'function' || argument === documentAll;
} : function (argument) {
  return typeof argument == 'function';
};


/***/ }),

/***/ "./node_modules/core-js/internals/is-constructor.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/is-constructor.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/core-js/internals/function-uncurry-this.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var isCallable = __webpack_require__(/*! ../internals/is-callable */ "./node_modules/core-js/internals/is-callable.js");
var classof = __webpack_require__(/*! ../internals/classof */ "./node_modules/core-js/internals/classof.js");
var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "./node_modules/core-js/internals/get-built-in.js");
var inspectSource = __webpack_require__(/*! ../internals/inspect-source */ "./node_modules/core-js/internals/inspect-source.js");

var noop = function () { /* empty */ };
var empty = [];
var construct = getBuiltIn('Reflect', 'construct');
var constructorRegExp = /^\s*(?:class|function)\b/;
var exec = uncurryThis(constructorRegExp.exec);
var INCORRECT_TO_STRING = !constructorRegExp.exec(noop);

var isConstructorModern = function isConstructor(argument) {
  if (!isCallable(argument)) return false;
  try {
    construct(noop, empty, argument);
    return true;
  } catch (error) {
    return false;
  }
};

var isConstructorLegacy = function isConstructor(argument) {
  if (!isCallable(argument)) return false;
  switch (classof(argument)) {
    case 'AsyncFunction':
    case 'GeneratorFunction':
    case 'AsyncGeneratorFunction': return false;
  }
  try {
    // we can't check .prototype since constructors produced by .bind haven't it
    // `Function#toString` throws on some built-it function in some legacy engines
    // (for example, `DOMQuad` and similar in FF41-)
    return INCORRECT_TO_STRING || !!exec(constructorRegExp, inspectSource(argument));
  } catch (error) {
    return true;
  }
};

isConstructorLegacy.sham = true;

// `IsConstructor` abstract operation
// https://tc39.es/ecma262/#sec-isconstructor
module.exports = !construct || fails(function () {
  var called;
  return isConstructorModern(isConstructorModern.call)
    || !isConstructorModern(Object)
    || !isConstructorModern(function () { called = true; })
    || called;
}) ? isConstructorLegacy : isConstructorModern;


/***/ }),

/***/ "./node_modules/core-js/internals/is-forced.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/is-forced.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var isCallable = __webpack_require__(/*! ../internals/is-callable */ "./node_modules/core-js/internals/is-callable.js");

var replacement = /#|\.prototype\./;

var isForced = function (feature, detection) {
  var value = data[normalize(feature)];
  return value == POLYFILL ? true
    : value == NATIVE ? false
    : isCallable(detection) ? fails(detection)
    : !!detection;
};

var normalize = isForced.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced.data = {};
var NATIVE = isForced.NATIVE = 'N';
var POLYFILL = isForced.POLYFILL = 'P';

module.exports = isForced;


/***/ }),

/***/ "./node_modules/core-js/internals/is-null-or-undefined.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/internals/is-null-or-undefined.js ***!
  \****************************************************************/
/***/ ((module) => {

// we can't use just `it == null` since of `document.all` special case
// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot-aec
module.exports = function (it) {
  return it === null || it === undefined;
};


/***/ }),

/***/ "./node_modules/core-js/internals/is-object.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/is-object.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isCallable = __webpack_require__(/*! ../internals/is-callable */ "./node_modules/core-js/internals/is-callable.js");
var $documentAll = __webpack_require__(/*! ../internals/document-all */ "./node_modules/core-js/internals/document-all.js");

var documentAll = $documentAll.all;

module.exports = $documentAll.IS_HTMLDDA ? function (it) {
  return typeof it == 'object' ? it !== null : isCallable(it) || it === documentAll;
} : function (it) {
  return typeof it == 'object' ? it !== null : isCallable(it);
};


/***/ }),

/***/ "./node_modules/core-js/internals/is-pure.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/internals/is-pure.js ***!
  \***************************************************/
/***/ ((module) => {

module.exports = false;


/***/ }),

/***/ "./node_modules/core-js/internals/is-symbol.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/is-symbol.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "./node_modules/core-js/internals/get-built-in.js");
var isCallable = __webpack_require__(/*! ../internals/is-callable */ "./node_modules/core-js/internals/is-callable.js");
var isPrototypeOf = __webpack_require__(/*! ../internals/object-is-prototype-of */ "./node_modules/core-js/internals/object-is-prototype-of.js");
var USE_SYMBOL_AS_UID = __webpack_require__(/*! ../internals/use-symbol-as-uid */ "./node_modules/core-js/internals/use-symbol-as-uid.js");

var $Object = Object;

module.exports = USE_SYMBOL_AS_UID ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  var $Symbol = getBuiltIn('Symbol');
  return isCallable($Symbol) && isPrototypeOf($Symbol.prototype, $Object(it));
};


/***/ }),

/***/ "./node_modules/core-js/internals/iterate.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/internals/iterate.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var bind = __webpack_require__(/*! ../internals/function-bind-context */ "./node_modules/core-js/internals/function-bind-context.js");
var call = __webpack_require__(/*! ../internals/function-call */ "./node_modules/core-js/internals/function-call.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var tryToString = __webpack_require__(/*! ../internals/try-to-string */ "./node_modules/core-js/internals/try-to-string.js");
var isArrayIteratorMethod = __webpack_require__(/*! ../internals/is-array-iterator-method */ "./node_modules/core-js/internals/is-array-iterator-method.js");
var lengthOfArrayLike = __webpack_require__(/*! ../internals/length-of-array-like */ "./node_modules/core-js/internals/length-of-array-like.js");
var isPrototypeOf = __webpack_require__(/*! ../internals/object-is-prototype-of */ "./node_modules/core-js/internals/object-is-prototype-of.js");
var getIterator = __webpack_require__(/*! ../internals/get-iterator */ "./node_modules/core-js/internals/get-iterator.js");
var getIteratorMethod = __webpack_require__(/*! ../internals/get-iterator-method */ "./node_modules/core-js/internals/get-iterator-method.js");
var iteratorClose = __webpack_require__(/*! ../internals/iterator-close */ "./node_modules/core-js/internals/iterator-close.js");

var $TypeError = TypeError;

var Result = function (stopped, result) {
  this.stopped = stopped;
  this.result = result;
};

var ResultPrototype = Result.prototype;

module.exports = function (iterable, unboundFunction, options) {
  var that = options && options.that;
  var AS_ENTRIES = !!(options && options.AS_ENTRIES);
  var IS_RECORD = !!(options && options.IS_RECORD);
  var IS_ITERATOR = !!(options && options.IS_ITERATOR);
  var INTERRUPTED = !!(options && options.INTERRUPTED);
  var fn = bind(unboundFunction, that);
  var iterator, iterFn, index, length, result, next, step;

  var stop = function (condition) {
    if (iterator) iteratorClose(iterator, 'normal', condition);
    return new Result(true, condition);
  };

  var callFn = function (value) {
    if (AS_ENTRIES) {
      anObject(value);
      return INTERRUPTED ? fn(value[0], value[1], stop) : fn(value[0], value[1]);
    } return INTERRUPTED ? fn(value, stop) : fn(value);
  };

  if (IS_RECORD) {
    iterator = iterable.iterator;
  } else if (IS_ITERATOR) {
    iterator = iterable;
  } else {
    iterFn = getIteratorMethod(iterable);
    if (!iterFn) throw $TypeError(tryToString(iterable) + ' is not iterable');
    // optimisation for array iterators
    if (isArrayIteratorMethod(iterFn)) {
      for (index = 0, length = lengthOfArrayLike(iterable); length > index; index++) {
        result = callFn(iterable[index]);
        if (result && isPrototypeOf(ResultPrototype, result)) return result;
      } return new Result(false);
    }
    iterator = getIterator(iterable, iterFn);
  }

  next = IS_RECORD ? iterable.next : iterator.next;
  while (!(step = call(next, iterator)).done) {
    try {
      result = callFn(step.value);
    } catch (error) {
      iteratorClose(iterator, 'throw', error);
    }
    if (typeof result == 'object' && result && isPrototypeOf(ResultPrototype, result)) return result;
  } return new Result(false);
};


/***/ }),

/***/ "./node_modules/core-js/internals/iterator-close.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/iterator-close.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var call = __webpack_require__(/*! ../internals/function-call */ "./node_modules/core-js/internals/function-call.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var getMethod = __webpack_require__(/*! ../internals/get-method */ "./node_modules/core-js/internals/get-method.js");

module.exports = function (iterator, kind, value) {
  var innerResult, innerError;
  anObject(iterator);
  try {
    innerResult = getMethod(iterator, 'return');
    if (!innerResult) {
      if (kind === 'throw') throw value;
      return value;
    }
    innerResult = call(innerResult, iterator);
  } catch (error) {
    innerError = true;
    innerResult = error;
  }
  if (kind === 'throw') throw value;
  if (innerError) throw innerResult;
  anObject(innerResult);
  return value;
};


/***/ }),

/***/ "./node_modules/core-js/internals/iterator-create-constructor.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/internals/iterator-create-constructor.js ***!
  \***********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var IteratorPrototype = (__webpack_require__(/*! ../internals/iterators-core */ "./node_modules/core-js/internals/iterators-core.js").IteratorPrototype);
var create = __webpack_require__(/*! ../internals/object-create */ "./node_modules/core-js/internals/object-create.js");
var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "./node_modules/core-js/internals/create-property-descriptor.js");
var setToStringTag = __webpack_require__(/*! ../internals/set-to-string-tag */ "./node_modules/core-js/internals/set-to-string-tag.js");
var Iterators = __webpack_require__(/*! ../internals/iterators */ "./node_modules/core-js/internals/iterators.js");

var returnThis = function () { return this; };

module.exports = function (IteratorConstructor, NAME, next, ENUMERABLE_NEXT) {
  var TO_STRING_TAG = NAME + ' Iterator';
  IteratorConstructor.prototype = create(IteratorPrototype, { next: createPropertyDescriptor(+!ENUMERABLE_NEXT, next) });
  setToStringTag(IteratorConstructor, TO_STRING_TAG, false, true);
  Iterators[TO_STRING_TAG] = returnThis;
  return IteratorConstructor;
};


/***/ }),

/***/ "./node_modules/core-js/internals/iterator-define.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/internals/iterator-define.js ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var call = __webpack_require__(/*! ../internals/function-call */ "./node_modules/core-js/internals/function-call.js");
var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ "./node_modules/core-js/internals/is-pure.js");
var FunctionName = __webpack_require__(/*! ../internals/function-name */ "./node_modules/core-js/internals/function-name.js");
var isCallable = __webpack_require__(/*! ../internals/is-callable */ "./node_modules/core-js/internals/is-callable.js");
var createIteratorConstructor = __webpack_require__(/*! ../internals/iterator-create-constructor */ "./node_modules/core-js/internals/iterator-create-constructor.js");
var getPrototypeOf = __webpack_require__(/*! ../internals/object-get-prototype-of */ "./node_modules/core-js/internals/object-get-prototype-of.js");
var setPrototypeOf = __webpack_require__(/*! ../internals/object-set-prototype-of */ "./node_modules/core-js/internals/object-set-prototype-of.js");
var setToStringTag = __webpack_require__(/*! ../internals/set-to-string-tag */ "./node_modules/core-js/internals/set-to-string-tag.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/core-js/internals/create-non-enumerable-property.js");
var defineBuiltIn = __webpack_require__(/*! ../internals/define-built-in */ "./node_modules/core-js/internals/define-built-in.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");
var Iterators = __webpack_require__(/*! ../internals/iterators */ "./node_modules/core-js/internals/iterators.js");
var IteratorsCore = __webpack_require__(/*! ../internals/iterators-core */ "./node_modules/core-js/internals/iterators-core.js");

var PROPER_FUNCTION_NAME = FunctionName.PROPER;
var CONFIGURABLE_FUNCTION_NAME = FunctionName.CONFIGURABLE;
var IteratorPrototype = IteratorsCore.IteratorPrototype;
var BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;
var ITERATOR = wellKnownSymbol('iterator');
var KEYS = 'keys';
var VALUES = 'values';
var ENTRIES = 'entries';

var returnThis = function () { return this; };

module.exports = function (Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
  createIteratorConstructor(IteratorConstructor, NAME, next);

  var getIterationMethod = function (KIND) {
    if (KIND === DEFAULT && defaultIterator) return defaultIterator;
    if (!BUGGY_SAFARI_ITERATORS && KIND in IterablePrototype) return IterablePrototype[KIND];
    switch (KIND) {
      case KEYS: return function keys() { return new IteratorConstructor(this, KIND); };
      case VALUES: return function values() { return new IteratorConstructor(this, KIND); };
      case ENTRIES: return function entries() { return new IteratorConstructor(this, KIND); };
    } return function () { return new IteratorConstructor(this); };
  };

  var TO_STRING_TAG = NAME + ' Iterator';
  var INCORRECT_VALUES_NAME = false;
  var IterablePrototype = Iterable.prototype;
  var nativeIterator = IterablePrototype[ITERATOR]
    || IterablePrototype['@@iterator']
    || DEFAULT && IterablePrototype[DEFAULT];
  var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);
  var anyNativeIterator = NAME == 'Array' ? IterablePrototype.entries || nativeIterator : nativeIterator;
  var CurrentIteratorPrototype, methods, KEY;

  // fix native
  if (anyNativeIterator) {
    CurrentIteratorPrototype = getPrototypeOf(anyNativeIterator.call(new Iterable()));
    if (CurrentIteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
      if (!IS_PURE && getPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype) {
        if (setPrototypeOf) {
          setPrototypeOf(CurrentIteratorPrototype, IteratorPrototype);
        } else if (!isCallable(CurrentIteratorPrototype[ITERATOR])) {
          defineBuiltIn(CurrentIteratorPrototype, ITERATOR, returnThis);
        }
      }
      // Set @@toStringTag to native iterators
      setToStringTag(CurrentIteratorPrototype, TO_STRING_TAG, true, true);
      if (IS_PURE) Iterators[TO_STRING_TAG] = returnThis;
    }
  }

  // fix Array.prototype.{ values, @@iterator }.name in V8 / FF
  if (PROPER_FUNCTION_NAME && DEFAULT == VALUES && nativeIterator && nativeIterator.name !== VALUES) {
    if (!IS_PURE && CONFIGURABLE_FUNCTION_NAME) {
      createNonEnumerableProperty(IterablePrototype, 'name', VALUES);
    } else {
      INCORRECT_VALUES_NAME = true;
      defaultIterator = function values() { return call(nativeIterator, this); };
    }
  }

  // export additional methods
  if (DEFAULT) {
    methods = {
      values: getIterationMethod(VALUES),
      keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
      entries: getIterationMethod(ENTRIES)
    };
    if (FORCED) for (KEY in methods) {
      if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
        defineBuiltIn(IterablePrototype, KEY, methods[KEY]);
      }
    } else $({ target: NAME, proto: true, forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME }, methods);
  }

  // define iterator
  if ((!IS_PURE || FORCED) && IterablePrototype[ITERATOR] !== defaultIterator) {
    defineBuiltIn(IterablePrototype, ITERATOR, defaultIterator, { name: DEFAULT });
  }
  Iterators[NAME] = defaultIterator;

  return methods;
};


/***/ }),

/***/ "./node_modules/core-js/internals/iterators-core.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/iterators-core.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var isCallable = __webpack_require__(/*! ../internals/is-callable */ "./node_modules/core-js/internals/is-callable.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var create = __webpack_require__(/*! ../internals/object-create */ "./node_modules/core-js/internals/object-create.js");
var getPrototypeOf = __webpack_require__(/*! ../internals/object-get-prototype-of */ "./node_modules/core-js/internals/object-get-prototype-of.js");
var defineBuiltIn = __webpack_require__(/*! ../internals/define-built-in */ "./node_modules/core-js/internals/define-built-in.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");
var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ "./node_modules/core-js/internals/is-pure.js");

var ITERATOR = wellKnownSymbol('iterator');
var BUGGY_SAFARI_ITERATORS = false;

// `%IteratorPrototype%` object
// https://tc39.es/ecma262/#sec-%iteratorprototype%-object
var IteratorPrototype, PrototypeOfArrayIteratorPrototype, arrayIterator;

/* eslint-disable es/no-array-prototype-keys -- safe */
if ([].keys) {
  arrayIterator = [].keys();
  // Safari 8 has buggy iterators w/o `next`
  if (!('next' in arrayIterator)) BUGGY_SAFARI_ITERATORS = true;
  else {
    PrototypeOfArrayIteratorPrototype = getPrototypeOf(getPrototypeOf(arrayIterator));
    if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype = PrototypeOfArrayIteratorPrototype;
  }
}

var NEW_ITERATOR_PROTOTYPE = !isObject(IteratorPrototype) || fails(function () {
  var test = {};
  // FF44- legacy iterators case
  return IteratorPrototype[ITERATOR].call(test) !== test;
});

if (NEW_ITERATOR_PROTOTYPE) IteratorPrototype = {};
else if (IS_PURE) IteratorPrototype = create(IteratorPrototype);

// `%IteratorPrototype%[@@iterator]()` method
// https://tc39.es/ecma262/#sec-%iteratorprototype%-@@iterator
if (!isCallable(IteratorPrototype[ITERATOR])) {
  defineBuiltIn(IteratorPrototype, ITERATOR, function () {
    return this;
  });
}

module.exports = {
  IteratorPrototype: IteratorPrototype,
  BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS
};


/***/ }),

/***/ "./node_modules/core-js/internals/iterators.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/iterators.js ***!
  \*****************************************************/
/***/ ((module) => {

module.exports = {};


/***/ }),

/***/ "./node_modules/core-js/internals/length-of-array-like.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/internals/length-of-array-like.js ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/core-js/internals/to-length.js");

// `LengthOfArrayLike` abstract operation
// https://tc39.es/ecma262/#sec-lengthofarraylike
module.exports = function (obj) {
  return toLength(obj.length);
};


/***/ }),

/***/ "./node_modules/core-js/internals/make-built-in.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/make-built-in.js ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var isCallable = __webpack_require__(/*! ../internals/is-callable */ "./node_modules/core-js/internals/is-callable.js");
var hasOwn = __webpack_require__(/*! ../internals/has-own-property */ "./node_modules/core-js/internals/has-own-property.js");
var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var CONFIGURABLE_FUNCTION_NAME = (__webpack_require__(/*! ../internals/function-name */ "./node_modules/core-js/internals/function-name.js").CONFIGURABLE);
var inspectSource = __webpack_require__(/*! ../internals/inspect-source */ "./node_modules/core-js/internals/inspect-source.js");
var InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ "./node_modules/core-js/internals/internal-state.js");

var enforceInternalState = InternalStateModule.enforce;
var getInternalState = InternalStateModule.get;
// eslint-disable-next-line es/no-object-defineproperty -- safe
var defineProperty = Object.defineProperty;

var CONFIGURABLE_LENGTH = DESCRIPTORS && !fails(function () {
  return defineProperty(function () { /* empty */ }, 'length', { value: 8 }).length !== 8;
});

var TEMPLATE = String(String).split('String');

var makeBuiltIn = module.exports = function (value, name, options) {
  if (String(name).slice(0, 7) === 'Symbol(') {
    name = '[' + String(name).replace(/^Symbol\(([^)]*)\)/, '$1') + ']';
  }
  if (options && options.getter) name = 'get ' + name;
  if (options && options.setter) name = 'set ' + name;
  if (!hasOwn(value, 'name') || (CONFIGURABLE_FUNCTION_NAME && value.name !== name)) {
    if (DESCRIPTORS) defineProperty(value, 'name', { value: name, configurable: true });
    else value.name = name;
  }
  if (CONFIGURABLE_LENGTH && options && hasOwn(options, 'arity') && value.length !== options.arity) {
    defineProperty(value, 'length', { value: options.arity });
  }
  try {
    if (options && hasOwn(options, 'constructor') && options.constructor) {
      if (DESCRIPTORS) defineProperty(value, 'prototype', { writable: false });
    // in V8 ~ Chrome 53, prototypes of some methods, like `Array.prototype.values`, are non-writable
    } else if (value.prototype) value.prototype = undefined;
  } catch (error) { /* empty */ }
  var state = enforceInternalState(value);
  if (!hasOwn(state, 'source')) {
    state.source = TEMPLATE.join(typeof name == 'string' ? name : '');
  } return value;
};

// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
// eslint-disable-next-line no-extend-native -- required
Function.prototype.toString = makeBuiltIn(function toString() {
  return isCallable(this) && getInternalState(this).source || inspectSource(this);
}, 'toString');


/***/ }),

/***/ "./node_modules/core-js/internals/math-trunc.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/math-trunc.js ***!
  \******************************************************/
/***/ ((module) => {

var ceil = Math.ceil;
var floor = Math.floor;

// `Math.trunc` method
// https://tc39.es/ecma262/#sec-math.trunc
// eslint-disable-next-line es/no-math-trunc -- safe
module.exports = Math.trunc || function trunc(x) {
  var n = +x;
  return (n > 0 ? floor : ceil)(n);
};


/***/ }),

/***/ "./node_modules/core-js/internals/number-parse-int.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/internals/number-parse-int.js ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/core-js/internals/function-uncurry-this.js");
var toString = __webpack_require__(/*! ../internals/to-string */ "./node_modules/core-js/internals/to-string.js");
var trim = (__webpack_require__(/*! ../internals/string-trim */ "./node_modules/core-js/internals/string-trim.js").trim);
var whitespaces = __webpack_require__(/*! ../internals/whitespaces */ "./node_modules/core-js/internals/whitespaces.js");

var $parseInt = global.parseInt;
var Symbol = global.Symbol;
var ITERATOR = Symbol && Symbol.iterator;
var hex = /^[+-]?0x/i;
var exec = uncurryThis(hex.exec);
var FORCED = $parseInt(whitespaces + '08') !== 8 || $parseInt(whitespaces + '0x16') !== 22
  // MS Edge 18- broken with boxed symbols
  || (ITERATOR && !fails(function () { $parseInt(Object(ITERATOR)); }));

// `parseInt` method
// https://tc39.es/ecma262/#sec-parseint-string-radix
module.exports = FORCED ? function parseInt(string, radix) {
  var S = trim(toString(string));
  return $parseInt(S, (radix >>> 0) || (exec(hex, S) ? 16 : 10));
} : $parseInt;


/***/ }),

/***/ "./node_modules/core-js/internals/object-assign.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/object-assign.js ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/core-js/internals/function-uncurry-this.js");
var call = __webpack_require__(/*! ../internals/function-call */ "./node_modules/core-js/internals/function-call.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var objectKeys = __webpack_require__(/*! ../internals/object-keys */ "./node_modules/core-js/internals/object-keys.js");
var getOwnPropertySymbolsModule = __webpack_require__(/*! ../internals/object-get-own-property-symbols */ "./node_modules/core-js/internals/object-get-own-property-symbols.js");
var propertyIsEnumerableModule = __webpack_require__(/*! ../internals/object-property-is-enumerable */ "./node_modules/core-js/internals/object-property-is-enumerable.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");
var IndexedObject = __webpack_require__(/*! ../internals/indexed-object */ "./node_modules/core-js/internals/indexed-object.js");

// eslint-disable-next-line es/no-object-assign -- safe
var $assign = Object.assign;
// eslint-disable-next-line es/no-object-defineproperty -- required for testing
var defineProperty = Object.defineProperty;
var concat = uncurryThis([].concat);

// `Object.assign` method
// https://tc39.es/ecma262/#sec-object.assign
module.exports = !$assign || fails(function () {
  // should have correct order of operations (Edge bug)
  if (DESCRIPTORS && $assign({ b: 1 }, $assign(defineProperty({}, 'a', {
    enumerable: true,
    get: function () {
      defineProperty(this, 'b', {
        value: 3,
        enumerable: false
      });
    }
  }), { b: 2 })).b !== 1) return true;
  // should work with symbols and should have deterministic property order (V8 bug)
  var A = {};
  var B = {};
  // eslint-disable-next-line es/no-symbol -- safe
  var symbol = Symbol();
  var alphabet = 'abcdefghijklmnopqrst';
  A[symbol] = 7;
  alphabet.split('').forEach(function (chr) { B[chr] = chr; });
  return $assign({}, A)[symbol] != 7 || objectKeys($assign({}, B)).join('') != alphabet;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars -- required for `.length`
  var T = toObject(target);
  var argumentsLength = arguments.length;
  var index = 1;
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  var propertyIsEnumerable = propertyIsEnumerableModule.f;
  while (argumentsLength > index) {
    var S = IndexedObject(arguments[index++]);
    var keys = getOwnPropertySymbols ? concat(objectKeys(S), getOwnPropertySymbols(S)) : objectKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) {
      key = keys[j++];
      if (!DESCRIPTORS || call(propertyIsEnumerable, S, key)) T[key] = S[key];
    }
  } return T;
} : $assign;


/***/ }),

/***/ "./node_modules/core-js/internals/object-create.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/object-create.js ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* global ActiveXObject -- old IE, WSH */
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var definePropertiesModule = __webpack_require__(/*! ../internals/object-define-properties */ "./node_modules/core-js/internals/object-define-properties.js");
var enumBugKeys = __webpack_require__(/*! ../internals/enum-bug-keys */ "./node_modules/core-js/internals/enum-bug-keys.js");
var hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ "./node_modules/core-js/internals/hidden-keys.js");
var html = __webpack_require__(/*! ../internals/html */ "./node_modules/core-js/internals/html.js");
var documentCreateElement = __webpack_require__(/*! ../internals/document-create-element */ "./node_modules/core-js/internals/document-create-element.js");
var sharedKey = __webpack_require__(/*! ../internals/shared-key */ "./node_modules/core-js/internals/shared-key.js");

var GT = '>';
var LT = '<';
var PROTOTYPE = 'prototype';
var SCRIPT = 'script';
var IE_PROTO = sharedKey('IE_PROTO');

var EmptyConstructor = function () { /* empty */ };

var scriptTag = function (content) {
  return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
};

// Create object with fake `null` prototype: use ActiveX Object with cleared prototype
var NullProtoObjectViaActiveX = function (activeXDocument) {
  activeXDocument.write(scriptTag(''));
  activeXDocument.close();
  var temp = activeXDocument.parentWindow.Object;
  activeXDocument = null; // avoid memory leak
  return temp;
};

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var NullProtoObjectViaIFrame = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = documentCreateElement('iframe');
  var JS = 'java' + SCRIPT + ':';
  var iframeDocument;
  iframe.style.display = 'none';
  html.appendChild(iframe);
  // https://github.com/zloirock/core-js/issues/475
  iframe.src = String(JS);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(scriptTag('document.F=Object'));
  iframeDocument.close();
  return iframeDocument.F;
};

// Check for document.domain and active x support
// No need to use active x approach when document.domain is not set
// see https://github.com/es-shims/es5-shim/issues/150
// variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
// avoid IE GC bug
var activeXDocument;
var NullProtoObject = function () {
  try {
    activeXDocument = new ActiveXObject('htmlfile');
  } catch (error) { /* ignore */ }
  NullProtoObject = typeof document != 'undefined'
    ? document.domain && activeXDocument
      ? NullProtoObjectViaActiveX(activeXDocument) // old IE
      : NullProtoObjectViaIFrame()
    : NullProtoObjectViaActiveX(activeXDocument); // WSH
  var length = enumBugKeys.length;
  while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];
  return NullProtoObject();
};

hiddenKeys[IE_PROTO] = true;

// `Object.create` method
// https://tc39.es/ecma262/#sec-object.create
// eslint-disable-next-line es/no-object-create -- safe
module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    EmptyConstructor[PROTOTYPE] = anObject(O);
    result = new EmptyConstructor();
    EmptyConstructor[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = NullProtoObject();
  return Properties === undefined ? result : definePropertiesModule.f(result, Properties);
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-define-properties.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/internals/object-define-properties.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var V8_PROTOTYPE_DEFINE_BUG = __webpack_require__(/*! ../internals/v8-prototype-define-bug */ "./node_modules/core-js/internals/v8-prototype-define-bug.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js");
var objectKeys = __webpack_require__(/*! ../internals/object-keys */ "./node_modules/core-js/internals/object-keys.js");

// `Object.defineProperties` method
// https://tc39.es/ecma262/#sec-object.defineproperties
// eslint-disable-next-line es/no-object-defineproperties -- safe
exports.f = DESCRIPTORS && !V8_PROTOTYPE_DEFINE_BUG ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var props = toIndexedObject(Properties);
  var keys = objectKeys(Properties);
  var length = keys.length;
  var index = 0;
  var key;
  while (length > index) definePropertyModule.f(O, key = keys[index++], props[key]);
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-define-property.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/internals/object-define-property.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ../internals/ie8-dom-define */ "./node_modules/core-js/internals/ie8-dom-define.js");
var V8_PROTOTYPE_DEFINE_BUG = __webpack_require__(/*! ../internals/v8-prototype-define-bug */ "./node_modules/core-js/internals/v8-prototype-define-bug.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var toPropertyKey = __webpack_require__(/*! ../internals/to-property-key */ "./node_modules/core-js/internals/to-property-key.js");

var $TypeError = TypeError;
// eslint-disable-next-line es/no-object-defineproperty -- safe
var $defineProperty = Object.defineProperty;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var ENUMERABLE = 'enumerable';
var CONFIGURABLE = 'configurable';
var WRITABLE = 'writable';

// `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty
exports.f = DESCRIPTORS ? V8_PROTOTYPE_DEFINE_BUG ? function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPropertyKey(P);
  anObject(Attributes);
  if (typeof O === 'function' && P === 'prototype' && 'value' in Attributes && WRITABLE in Attributes && !Attributes[WRITABLE]) {
    var current = $getOwnPropertyDescriptor(O, P);
    if (current && current[WRITABLE]) {
      O[P] = Attributes.value;
      Attributes = {
        configurable: CONFIGURABLE in Attributes ? Attributes[CONFIGURABLE] : current[CONFIGURABLE],
        enumerable: ENUMERABLE in Attributes ? Attributes[ENUMERABLE] : current[ENUMERABLE],
        writable: false
      };
    }
  } return $defineProperty(O, P, Attributes);
} : $defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPropertyKey(P);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return $defineProperty(O, P, Attributes);
  } catch (error) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw $TypeError('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-get-own-property-descriptor.js":
/*!******************************************************************************!*\
  !*** ./node_modules/core-js/internals/object-get-own-property-descriptor.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var call = __webpack_require__(/*! ../internals/function-call */ "./node_modules/core-js/internals/function-call.js");
var propertyIsEnumerableModule = __webpack_require__(/*! ../internals/object-property-is-enumerable */ "./node_modules/core-js/internals/object-property-is-enumerable.js");
var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "./node_modules/core-js/internals/create-property-descriptor.js");
var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js");
var toPropertyKey = __webpack_require__(/*! ../internals/to-property-key */ "./node_modules/core-js/internals/to-property-key.js");
var hasOwn = __webpack_require__(/*! ../internals/has-own-property */ "./node_modules/core-js/internals/has-own-property.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ../internals/ie8-dom-define */ "./node_modules/core-js/internals/ie8-dom-define.js");

// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
exports.f = DESCRIPTORS ? $getOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject(O);
  P = toPropertyKey(P);
  if (IE8_DOM_DEFINE) try {
    return $getOwnPropertyDescriptor(O, P);
  } catch (error) { /* empty */ }
  if (hasOwn(O, P)) return createPropertyDescriptor(!call(propertyIsEnumerableModule.f, O, P), O[P]);
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-get-own-property-names-external.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/core-js/internals/object-get-own-property-names-external.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* eslint-disable es/no-object-getownpropertynames -- safe */
var classof = __webpack_require__(/*! ../internals/classof-raw */ "./node_modules/core-js/internals/classof-raw.js");
var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js");
var $getOwnPropertyNames = (__webpack_require__(/*! ../internals/object-get-own-property-names */ "./node_modules/core-js/internals/object-get-own-property-names.js").f);
var arraySlice = __webpack_require__(/*! ../internals/array-slice-simple */ "./node_modules/core-js/internals/array-slice-simple.js");

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return $getOwnPropertyNames(it);
  } catch (error) {
    return arraySlice(windowNames);
  }
};

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && classof(it) == 'Window'
    ? getWindowNames(it)
    : $getOwnPropertyNames(toIndexedObject(it));
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-get-own-property-names.js":
/*!*************************************************************************!*\
  !*** ./node_modules/core-js/internals/object-get-own-property-names.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var internalObjectKeys = __webpack_require__(/*! ../internals/object-keys-internal */ "./node_modules/core-js/internals/object-keys-internal.js");
var enumBugKeys = __webpack_require__(/*! ../internals/enum-bug-keys */ "./node_modules/core-js/internals/enum-bug-keys.js");

var hiddenKeys = enumBugKeys.concat('length', 'prototype');

// `Object.getOwnPropertyNames` method
// https://tc39.es/ecma262/#sec-object.getownpropertynames
// eslint-disable-next-line es/no-object-getownpropertynames -- safe
exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys(O, hiddenKeys);
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-get-own-property-symbols.js":
/*!***************************************************************************!*\
  !*** ./node_modules/core-js/internals/object-get-own-property-symbols.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

// eslint-disable-next-line es/no-object-getownpropertysymbols -- safe
exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "./node_modules/core-js/internals/object-get-prototype-of.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/internals/object-get-prototype-of.js ***!
  \*******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var hasOwn = __webpack_require__(/*! ../internals/has-own-property */ "./node_modules/core-js/internals/has-own-property.js");
var isCallable = __webpack_require__(/*! ../internals/is-callable */ "./node_modules/core-js/internals/is-callable.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");
var sharedKey = __webpack_require__(/*! ../internals/shared-key */ "./node_modules/core-js/internals/shared-key.js");
var CORRECT_PROTOTYPE_GETTER = __webpack_require__(/*! ../internals/correct-prototype-getter */ "./node_modules/core-js/internals/correct-prototype-getter.js");

var IE_PROTO = sharedKey('IE_PROTO');
var $Object = Object;
var ObjectPrototype = $Object.prototype;

// `Object.getPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.getprototypeof
// eslint-disable-next-line es/no-object-getprototypeof -- safe
module.exports = CORRECT_PROTOTYPE_GETTER ? $Object.getPrototypeOf : function (O) {
  var object = toObject(O);
  if (hasOwn(object, IE_PROTO)) return object[IE_PROTO];
  var constructor = object.constructor;
  if (isCallable(constructor) && object instanceof constructor) {
    return constructor.prototype;
  } return object instanceof $Object ? ObjectPrototype : null;
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-is-extensible.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/internals/object-is-extensible.js ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var classof = __webpack_require__(/*! ../internals/classof-raw */ "./node_modules/core-js/internals/classof-raw.js");
var ARRAY_BUFFER_NON_EXTENSIBLE = __webpack_require__(/*! ../internals/array-buffer-non-extensible */ "./node_modules/core-js/internals/array-buffer-non-extensible.js");

// eslint-disable-next-line es/no-object-isextensible -- safe
var $isExtensible = Object.isExtensible;
var FAILS_ON_PRIMITIVES = fails(function () { $isExtensible(1); });

// `Object.isExtensible` method
// https://tc39.es/ecma262/#sec-object.isextensible
module.exports = (FAILS_ON_PRIMITIVES || ARRAY_BUFFER_NON_EXTENSIBLE) ? function isExtensible(it) {
  if (!isObject(it)) return false;
  if (ARRAY_BUFFER_NON_EXTENSIBLE && classof(it) == 'ArrayBuffer') return false;
  return $isExtensible ? $isExtensible(it) : true;
} : $isExtensible;


/***/ }),

/***/ "./node_modules/core-js/internals/object-is-prototype-of.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/internals/object-is-prototype-of.js ***!
  \******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/core-js/internals/function-uncurry-this.js");

module.exports = uncurryThis({}.isPrototypeOf);


/***/ }),

/***/ "./node_modules/core-js/internals/object-keys-internal.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/internals/object-keys-internal.js ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/core-js/internals/function-uncurry-this.js");
var hasOwn = __webpack_require__(/*! ../internals/has-own-property */ "./node_modules/core-js/internals/has-own-property.js");
var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js");
var indexOf = (__webpack_require__(/*! ../internals/array-includes */ "./node_modules/core-js/internals/array-includes.js").indexOf);
var hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ "./node_modules/core-js/internals/hidden-keys.js");

var push = uncurryThis([].push);

module.exports = function (object, names) {
  var O = toIndexedObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) !hasOwn(hiddenKeys, key) && hasOwn(O, key) && push(result, key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (hasOwn(O, key = names[i++])) {
    ~indexOf(result, key) || push(result, key);
  }
  return result;
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-keys.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/object-keys.js ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var internalObjectKeys = __webpack_require__(/*! ../internals/object-keys-internal */ "./node_modules/core-js/internals/object-keys-internal.js");
var enumBugKeys = __webpack_require__(/*! ../internals/enum-bug-keys */ "./node_modules/core-js/internals/enum-bug-keys.js");

// `Object.keys` method
// https://tc39.es/ecma262/#sec-object.keys
// eslint-disable-next-line es/no-object-keys -- safe
module.exports = Object.keys || function keys(O) {
  return internalObjectKeys(O, enumBugKeys);
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-property-is-enumerable.js":
/*!*************************************************************************!*\
  !*** ./node_modules/core-js/internals/object-property-is-enumerable.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

var $propertyIsEnumerable = {}.propertyIsEnumerable;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor && !$propertyIsEnumerable.call({ 1: 2 }, 1);

// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor(this, V);
  return !!descriptor && descriptor.enumerable;
} : $propertyIsEnumerable;


/***/ }),

/***/ "./node_modules/core-js/internals/object-set-prototype-of.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/internals/object-set-prototype-of.js ***!
  \*******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* eslint-disable no-proto -- safe */
var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/core-js/internals/function-uncurry-this.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var aPossiblePrototype = __webpack_require__(/*! ../internals/a-possible-prototype */ "./node_modules/core-js/internals/a-possible-prototype.js");

// `Object.setPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.setprototypeof
// Works with __proto__ only. Old v8 can't work with null proto objects.
// eslint-disable-next-line es/no-object-setprototypeof -- safe
module.exports = Object.setPrototypeOf || ('__proto__' in {} ? function () {
  var CORRECT_SETTER = false;
  var test = {};
  var setter;
  try {
    // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
    setter = uncurryThis(Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set);
    setter(test, []);
    CORRECT_SETTER = test instanceof Array;
  } catch (error) { /* empty */ }
  return function setPrototypeOf(O, proto) {
    anObject(O);
    aPossiblePrototype(proto);
    if (CORRECT_SETTER) setter(O, proto);
    else O.__proto__ = proto;
    return O;
  };
}() : undefined);


/***/ }),

/***/ "./node_modules/core-js/internals/object-to-string.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/internals/object-to-string.js ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var TO_STRING_TAG_SUPPORT = __webpack_require__(/*! ../internals/to-string-tag-support */ "./node_modules/core-js/internals/to-string-tag-support.js");
var classof = __webpack_require__(/*! ../internals/classof */ "./node_modules/core-js/internals/classof.js");

// `Object.prototype.toString` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.tostring
module.exports = TO_STRING_TAG_SUPPORT ? {}.toString : function toString() {
  return '[object ' + classof(this) + ']';
};


/***/ }),

/***/ "./node_modules/core-js/internals/ordinary-to-primitive.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/internals/ordinary-to-primitive.js ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var call = __webpack_require__(/*! ../internals/function-call */ "./node_modules/core-js/internals/function-call.js");
var isCallable = __webpack_require__(/*! ../internals/is-callable */ "./node_modules/core-js/internals/is-callable.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");

var $TypeError = TypeError;

// `OrdinaryToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-ordinarytoprimitive
module.exports = function (input, pref) {
  var fn, val;
  if (pref === 'string' && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;
  if (isCallable(fn = input.valueOf) && !isObject(val = call(fn, input))) return val;
  if (pref !== 'string' && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;
  throw $TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "./node_modules/core-js/internals/own-keys.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/internals/own-keys.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "./node_modules/core-js/internals/get-built-in.js");
var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/core-js/internals/function-uncurry-this.js");
var getOwnPropertyNamesModule = __webpack_require__(/*! ../internals/object-get-own-property-names */ "./node_modules/core-js/internals/object-get-own-property-names.js");
var getOwnPropertySymbolsModule = __webpack_require__(/*! ../internals/object-get-own-property-symbols */ "./node_modules/core-js/internals/object-get-own-property-symbols.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");

var concat = uncurryThis([].concat);

// all object keys, includes non-enumerable and symbols
module.exports = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule.f(anObject(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  return getOwnPropertySymbols ? concat(keys, getOwnPropertySymbols(it)) : keys;
};


/***/ }),

/***/ "./node_modules/core-js/internals/regexp-exec-abstract.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/internals/regexp-exec-abstract.js ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var call = __webpack_require__(/*! ../internals/function-call */ "./node_modules/core-js/internals/function-call.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var isCallable = __webpack_require__(/*! ../internals/is-callable */ "./node_modules/core-js/internals/is-callable.js");
var classof = __webpack_require__(/*! ../internals/classof-raw */ "./node_modules/core-js/internals/classof-raw.js");
var regexpExec = __webpack_require__(/*! ../internals/regexp-exec */ "./node_modules/core-js/internals/regexp-exec.js");

var $TypeError = TypeError;

// `RegExpExec` abstract operation
// https://tc39.es/ecma262/#sec-regexpexec
module.exports = function (R, S) {
  var exec = R.exec;
  if (isCallable(exec)) {
    var result = call(exec, R, S);
    if (result !== null) anObject(result);
    return result;
  }
  if (classof(R) === 'RegExp') return call(regexpExec, R, S);
  throw $TypeError('RegExp#exec called on incompatible receiver');
};


/***/ }),

/***/ "./node_modules/core-js/internals/regexp-exec.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/regexp-exec.js ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

/* eslint-disable regexp/no-empty-capturing-group, regexp/no-empty-group, regexp/no-lazy-ends -- testing */
/* eslint-disable regexp/no-useless-quantifier -- testing */
var call = __webpack_require__(/*! ../internals/function-call */ "./node_modules/core-js/internals/function-call.js");
var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/core-js/internals/function-uncurry-this.js");
var toString = __webpack_require__(/*! ../internals/to-string */ "./node_modules/core-js/internals/to-string.js");
var regexpFlags = __webpack_require__(/*! ../internals/regexp-flags */ "./node_modules/core-js/internals/regexp-flags.js");
var stickyHelpers = __webpack_require__(/*! ../internals/regexp-sticky-helpers */ "./node_modules/core-js/internals/regexp-sticky-helpers.js");
var shared = __webpack_require__(/*! ../internals/shared */ "./node_modules/core-js/internals/shared.js");
var create = __webpack_require__(/*! ../internals/object-create */ "./node_modules/core-js/internals/object-create.js");
var getInternalState = (__webpack_require__(/*! ../internals/internal-state */ "./node_modules/core-js/internals/internal-state.js").get);
var UNSUPPORTED_DOT_ALL = __webpack_require__(/*! ../internals/regexp-unsupported-dot-all */ "./node_modules/core-js/internals/regexp-unsupported-dot-all.js");
var UNSUPPORTED_NCG = __webpack_require__(/*! ../internals/regexp-unsupported-ncg */ "./node_modules/core-js/internals/regexp-unsupported-ncg.js");

var nativeReplace = shared('native-string-replace', String.prototype.replace);
var nativeExec = RegExp.prototype.exec;
var patchedExec = nativeExec;
var charAt = uncurryThis(''.charAt);
var indexOf = uncurryThis(''.indexOf);
var replace = uncurryThis(''.replace);
var stringSlice = uncurryThis(''.slice);

var UPDATES_LAST_INDEX_WRONG = (function () {
  var re1 = /a/;
  var re2 = /b*/g;
  call(nativeExec, re1, 'a');
  call(nativeExec, re2, 'a');
  return re1.lastIndex !== 0 || re2.lastIndex !== 0;
})();

var UNSUPPORTED_Y = stickyHelpers.BROKEN_CARET;

// nonparticipating capturing group, copied from es5-shim's String#split patch.
var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;

var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED || UNSUPPORTED_Y || UNSUPPORTED_DOT_ALL || UNSUPPORTED_NCG;

if (PATCH) {
  patchedExec = function exec(string) {
    var re = this;
    var state = getInternalState(re);
    var str = toString(string);
    var raw = state.raw;
    var result, reCopy, lastIndex, match, i, object, group;

    if (raw) {
      raw.lastIndex = re.lastIndex;
      result = call(patchedExec, raw, str);
      re.lastIndex = raw.lastIndex;
      return result;
    }

    var groups = state.groups;
    var sticky = UNSUPPORTED_Y && re.sticky;
    var flags = call(regexpFlags, re);
    var source = re.source;
    var charsAdded = 0;
    var strCopy = str;

    if (sticky) {
      flags = replace(flags, 'y', '');
      if (indexOf(flags, 'g') === -1) {
        flags += 'g';
      }

      strCopy = stringSlice(str, re.lastIndex);
      // Support anchored sticky behavior.
      if (re.lastIndex > 0 && (!re.multiline || re.multiline && charAt(str, re.lastIndex - 1) !== '\n')) {
        source = '(?: ' + source + ')';
        strCopy = ' ' + strCopy;
        charsAdded++;
      }
      // ^(? + rx + ) is needed, in combination with some str slicing, to
      // simulate the 'y' flag.
      reCopy = new RegExp('^(?:' + source + ')', flags);
    }

    if (NPCG_INCLUDED) {
      reCopy = new RegExp('^' + source + '$(?!\\s)', flags);
    }
    if (UPDATES_LAST_INDEX_WRONG) lastIndex = re.lastIndex;

    match = call(nativeExec, sticky ? reCopy : re, strCopy);

    if (sticky) {
      if (match) {
        match.input = stringSlice(match.input, charsAdded);
        match[0] = stringSlice(match[0], charsAdded);
        match.index = re.lastIndex;
        re.lastIndex += match[0].length;
      } else re.lastIndex = 0;
    } else if (UPDATES_LAST_INDEX_WRONG && match) {
      re.lastIndex = re.global ? match.index + match[0].length : lastIndex;
    }
    if (NPCG_INCLUDED && match && match.length > 1) {
      // Fix browsers whose `exec` methods don't consistently return `undefined`
      // for NPCG, like IE8. NOTE: This doesn't work for /(.?)?/
      call(nativeReplace, match[0], reCopy, function () {
        for (i = 1; i < arguments.length - 2; i++) {
          if (arguments[i] === undefined) match[i] = undefined;
        }
      });
    }

    if (match && groups) {
      match.groups = object = create(null);
      for (i = 0; i < groups.length; i++) {
        group = groups[i];
        object[group[0]] = match[group[1]];
      }
    }

    return match;
  };
}

module.exports = patchedExec;


/***/ }),

/***/ "./node_modules/core-js/internals/regexp-flags.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/regexp-flags.js ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");

// `RegExp.prototype.flags` getter implementation
// https://tc39.es/ecma262/#sec-get-regexp.prototype.flags
module.exports = function () {
  var that = anObject(this);
  var result = '';
  if (that.hasIndices) result += 'd';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.dotAll) result += 's';
  if (that.unicode) result += 'u';
  if (that.unicodeSets) result += 'v';
  if (that.sticky) result += 'y';
  return result;
};


/***/ }),

/***/ "./node_modules/core-js/internals/regexp-sticky-helpers.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/internals/regexp-sticky-helpers.js ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");

// babel-minify and Closure Compiler transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError
var $RegExp = global.RegExp;

var UNSUPPORTED_Y = fails(function () {
  var re = $RegExp('a', 'y');
  re.lastIndex = 2;
  return re.exec('abcd') != null;
});

// UC Browser bug
// https://github.com/zloirock/core-js/issues/1008
var MISSED_STICKY = UNSUPPORTED_Y || fails(function () {
  return !$RegExp('a', 'y').sticky;
});

var BROKEN_CARET = UNSUPPORTED_Y || fails(function () {
  // https://bugzilla.mozilla.org/show_bug.cgi?id=773687
  var re = $RegExp('^r', 'gy');
  re.lastIndex = 2;
  return re.exec('str') != null;
});

module.exports = {
  BROKEN_CARET: BROKEN_CARET,
  MISSED_STICKY: MISSED_STICKY,
  UNSUPPORTED_Y: UNSUPPORTED_Y
};


/***/ }),

/***/ "./node_modules/core-js/internals/regexp-unsupported-dot-all.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/internals/regexp-unsupported-dot-all.js ***!
  \**********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");

// babel-minify and Closure Compiler transpiles RegExp('.', 's') -> /./s and it causes SyntaxError
var $RegExp = global.RegExp;

module.exports = fails(function () {
  var re = $RegExp('.', 's');
  return !(re.dotAll && re.exec('\n') && re.flags === 's');
});


/***/ }),

/***/ "./node_modules/core-js/internals/regexp-unsupported-ncg.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/internals/regexp-unsupported-ncg.js ***!
  \******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");

// babel-minify and Closure Compiler transpiles RegExp('(?<a>b)', 'g') -> /(?<a>b)/g and it causes SyntaxError
var $RegExp = global.RegExp;

module.exports = fails(function () {
  var re = $RegExp('(?<a>b)', 'g');
  return re.exec('b').groups.a !== 'b' ||
    'b'.replace(re, '$<a>c') !== 'bc';
});


/***/ }),

/***/ "./node_modules/core-js/internals/require-object-coercible.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/internals/require-object-coercible.js ***!
  \********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isNullOrUndefined = __webpack_require__(/*! ../internals/is-null-or-undefined */ "./node_modules/core-js/internals/is-null-or-undefined.js");

var $TypeError = TypeError;

// `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible
module.exports = function (it) {
  if (isNullOrUndefined(it)) throw $TypeError("Can't call method on " + it);
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/internals/set-to-string-tag.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/set-to-string-tag.js ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var defineProperty = (__webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js").f);
var hasOwn = __webpack_require__(/*! ../internals/has-own-property */ "./node_modules/core-js/internals/has-own-property.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');

module.exports = function (target, TAG, STATIC) {
  if (target && !STATIC) target = target.prototype;
  if (target && !hasOwn(target, TO_STRING_TAG)) {
    defineProperty(target, TO_STRING_TAG, { configurable: true, value: TAG });
  }
};


/***/ }),

/***/ "./node_modules/core-js/internals/shared-key.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/shared-key.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var shared = __webpack_require__(/*! ../internals/shared */ "./node_modules/core-js/internals/shared.js");
var uid = __webpack_require__(/*! ../internals/uid */ "./node_modules/core-js/internals/uid.js");

var keys = shared('keys');

module.exports = function (key) {
  return keys[key] || (keys[key] = uid(key));
};


/***/ }),

/***/ "./node_modules/core-js/internals/shared-store.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/shared-store.js ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var defineGlobalProperty = __webpack_require__(/*! ../internals/define-global-property */ "./node_modules/core-js/internals/define-global-property.js");

var SHARED = '__core-js_shared__';
var store = global[SHARED] || defineGlobalProperty(SHARED, {});

module.exports = store;


/***/ }),

/***/ "./node_modules/core-js/internals/shared.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/internals/shared.js ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ "./node_modules/core-js/internals/is-pure.js");
var store = __webpack_require__(/*! ../internals/shared-store */ "./node_modules/core-js/internals/shared-store.js");

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.26.1',
  mode: IS_PURE ? 'pure' : 'global',
  copyright: '© 2014-2022 Denis Pushkarev (zloirock.ru)',
  license: 'https://github.com/zloirock/core-js/blob/v3.26.1/LICENSE',
  source: 'https://github.com/zloirock/core-js'
});


/***/ }),

/***/ "./node_modules/core-js/internals/string-multibyte.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/internals/string-multibyte.js ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/core-js/internals/function-uncurry-this.js");
var toIntegerOrInfinity = __webpack_require__(/*! ../internals/to-integer-or-infinity */ "./node_modules/core-js/internals/to-integer-or-infinity.js");
var toString = __webpack_require__(/*! ../internals/to-string */ "./node_modules/core-js/internals/to-string.js");
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");

var charAt = uncurryThis(''.charAt);
var charCodeAt = uncurryThis(''.charCodeAt);
var stringSlice = uncurryThis(''.slice);

var createMethod = function (CONVERT_TO_STRING) {
  return function ($this, pos) {
    var S = toString(requireObjectCoercible($this));
    var position = toIntegerOrInfinity(pos);
    var size = S.length;
    var first, second;
    if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;
    first = charCodeAt(S, position);
    return first < 0xD800 || first > 0xDBFF || position + 1 === size
      || (second = charCodeAt(S, position + 1)) < 0xDC00 || second > 0xDFFF
        ? CONVERT_TO_STRING
          ? charAt(S, position)
          : first
        : CONVERT_TO_STRING
          ? stringSlice(S, position, position + 2)
          : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;
  };
};

module.exports = {
  // `String.prototype.codePointAt` method
  // https://tc39.es/ecma262/#sec-string.prototype.codepointat
  codeAt: createMethod(false),
  // `String.prototype.at` method
  // https://github.com/mathiasbynens/String.prototype.at
  charAt: createMethod(true)
};


/***/ }),

/***/ "./node_modules/core-js/internals/string-trim.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/string-trim.js ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/core-js/internals/function-uncurry-this.js");
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");
var toString = __webpack_require__(/*! ../internals/to-string */ "./node_modules/core-js/internals/to-string.js");
var whitespaces = __webpack_require__(/*! ../internals/whitespaces */ "./node_modules/core-js/internals/whitespaces.js");

var replace = uncurryThis(''.replace);
var whitespace = '[' + whitespaces + ']';
var ltrim = RegExp('^' + whitespace + whitespace + '*');
var rtrim = RegExp(whitespace + whitespace + '*$');

// `String.prototype.{ trim, trimStart, trimEnd, trimLeft, trimRight }` methods implementation
var createMethod = function (TYPE) {
  return function ($this) {
    var string = toString(requireObjectCoercible($this));
    if (TYPE & 1) string = replace(string, ltrim, '');
    if (TYPE & 2) string = replace(string, rtrim, '');
    return string;
  };
};

module.exports = {
  // `String.prototype.{ trimLeft, trimStart }` methods
  // https://tc39.es/ecma262/#sec-string.prototype.trimstart
  start: createMethod(1),
  // `String.prototype.{ trimRight, trimEnd }` methods
  // https://tc39.es/ecma262/#sec-string.prototype.trimend
  end: createMethod(2),
  // `String.prototype.trim` method
  // https://tc39.es/ecma262/#sec-string.prototype.trim
  trim: createMethod(3)
};


/***/ }),

/***/ "./node_modules/core-js/internals/symbol-constructor-detection.js":
/*!************************************************************************!*\
  !*** ./node_modules/core-js/internals/symbol-constructor-detection.js ***!
  \************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* eslint-disable es/no-symbol -- required for testing */
var V8_VERSION = __webpack_require__(/*! ../internals/engine-v8-version */ "./node_modules/core-js/internals/engine-v8-version.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

// eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
module.exports = !!Object.getOwnPropertySymbols && !fails(function () {
  var symbol = Symbol();
  // Chrome 38 Symbol has incorrect toString conversion
  // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
  return !String(symbol) || !(Object(symbol) instanceof Symbol) ||
    // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
    !Symbol.sham && V8_VERSION && V8_VERSION < 41;
});


/***/ }),

/***/ "./node_modules/core-js/internals/to-absolute-index.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/to-absolute-index.js ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var toIntegerOrInfinity = __webpack_require__(/*! ../internals/to-integer-or-infinity */ "./node_modules/core-js/internals/to-integer-or-infinity.js");

var max = Math.max;
var min = Math.min;

// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
module.exports = function (index, length) {
  var integer = toIntegerOrInfinity(index);
  return integer < 0 ? max(integer + length, 0) : min(integer, length);
};


/***/ }),

/***/ "./node_modules/core-js/internals/to-indexed-object.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/to-indexed-object.js ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// toObject with fallback for non-array-like ES3 strings
var IndexedObject = __webpack_require__(/*! ../internals/indexed-object */ "./node_modules/core-js/internals/indexed-object.js");
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");

module.exports = function (it) {
  return IndexedObject(requireObjectCoercible(it));
};


/***/ }),

/***/ "./node_modules/core-js/internals/to-integer-or-infinity.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/internals/to-integer-or-infinity.js ***!
  \******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var trunc = __webpack_require__(/*! ../internals/math-trunc */ "./node_modules/core-js/internals/math-trunc.js");

// `ToIntegerOrInfinity` abstract operation
// https://tc39.es/ecma262/#sec-tointegerorinfinity
module.exports = function (argument) {
  var number = +argument;
  // eslint-disable-next-line no-self-compare -- NaN check
  return number !== number || number === 0 ? 0 : trunc(number);
};


/***/ }),

/***/ "./node_modules/core-js/internals/to-length.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/to-length.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var toIntegerOrInfinity = __webpack_require__(/*! ../internals/to-integer-or-infinity */ "./node_modules/core-js/internals/to-integer-or-infinity.js");

var min = Math.min;

// `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength
module.exports = function (argument) {
  return argument > 0 ? min(toIntegerOrInfinity(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};


/***/ }),

/***/ "./node_modules/core-js/internals/to-object.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/to-object.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");

var $Object = Object;

// `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject
module.exports = function (argument) {
  return $Object(requireObjectCoercible(argument));
};


/***/ }),

/***/ "./node_modules/core-js/internals/to-primitive.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/to-primitive.js ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var call = __webpack_require__(/*! ../internals/function-call */ "./node_modules/core-js/internals/function-call.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var isSymbol = __webpack_require__(/*! ../internals/is-symbol */ "./node_modules/core-js/internals/is-symbol.js");
var getMethod = __webpack_require__(/*! ../internals/get-method */ "./node_modules/core-js/internals/get-method.js");
var ordinaryToPrimitive = __webpack_require__(/*! ../internals/ordinary-to-primitive */ "./node_modules/core-js/internals/ordinary-to-primitive.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var $TypeError = TypeError;
var TO_PRIMITIVE = wellKnownSymbol('toPrimitive');

// `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive
module.exports = function (input, pref) {
  if (!isObject(input) || isSymbol(input)) return input;
  var exoticToPrim = getMethod(input, TO_PRIMITIVE);
  var result;
  if (exoticToPrim) {
    if (pref === undefined) pref = 'default';
    result = call(exoticToPrim, input, pref);
    if (!isObject(result) || isSymbol(result)) return result;
    throw $TypeError("Can't convert object to primitive value");
  }
  if (pref === undefined) pref = 'number';
  return ordinaryToPrimitive(input, pref);
};


/***/ }),

/***/ "./node_modules/core-js/internals/to-property-key.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/internals/to-property-key.js ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ "./node_modules/core-js/internals/to-primitive.js");
var isSymbol = __webpack_require__(/*! ../internals/is-symbol */ "./node_modules/core-js/internals/is-symbol.js");

// `ToPropertyKey` abstract operation
// https://tc39.es/ecma262/#sec-topropertykey
module.exports = function (argument) {
  var key = toPrimitive(argument, 'string');
  return isSymbol(key) ? key : key + '';
};


/***/ }),

/***/ "./node_modules/core-js/internals/to-string-tag-support.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/internals/to-string-tag-support.js ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var test = {};

test[TO_STRING_TAG] = 'z';

module.exports = String(test) === '[object z]';


/***/ }),

/***/ "./node_modules/core-js/internals/to-string.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/to-string.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var classof = __webpack_require__(/*! ../internals/classof */ "./node_modules/core-js/internals/classof.js");

var $String = String;

module.exports = function (argument) {
  if (classof(argument) === 'Symbol') throw TypeError('Cannot convert a Symbol value to a string');
  return $String(argument);
};


/***/ }),

/***/ "./node_modules/core-js/internals/try-to-string.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/try-to-string.js ***!
  \*********************************************************/
/***/ ((module) => {

var $String = String;

module.exports = function (argument) {
  try {
    return $String(argument);
  } catch (error) {
    return 'Object';
  }
};


/***/ }),

/***/ "./node_modules/core-js/internals/uid.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/internals/uid.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/core-js/internals/function-uncurry-this.js");

var id = 0;
var postfix = Math.random();
var toString = uncurryThis(1.0.toString);

module.exports = function (key) {
  return 'Symbol(' + (key === undefined ? '' : key) + ')_' + toString(++id + postfix, 36);
};


/***/ }),

/***/ "./node_modules/core-js/internals/use-symbol-as-uid.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/use-symbol-as-uid.js ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* eslint-disable es/no-symbol -- required for testing */
var NATIVE_SYMBOL = __webpack_require__(/*! ../internals/symbol-constructor-detection */ "./node_modules/core-js/internals/symbol-constructor-detection.js");

module.exports = NATIVE_SYMBOL
  && !Symbol.sham
  && typeof Symbol.iterator == 'symbol';


/***/ }),

/***/ "./node_modules/core-js/internals/v8-prototype-define-bug.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/internals/v8-prototype-define-bug.js ***!
  \*******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

// V8 ~ Chrome 36-
// https://bugs.chromium.org/p/v8/issues/detail?id=3334
module.exports = DESCRIPTORS && fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty(function () { /* empty */ }, 'prototype', {
    value: 42,
    writable: false
  }).prototype != 42;
});


/***/ }),

/***/ "./node_modules/core-js/internals/weak-map-basic-detection.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/internals/weak-map-basic-detection.js ***!
  \********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var isCallable = __webpack_require__(/*! ../internals/is-callable */ "./node_modules/core-js/internals/is-callable.js");

var WeakMap = global.WeakMap;

module.exports = isCallable(WeakMap) && /native code/.test(String(WeakMap));


/***/ }),

/***/ "./node_modules/core-js/internals/well-known-symbol.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/well-known-symbol.js ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var shared = __webpack_require__(/*! ../internals/shared */ "./node_modules/core-js/internals/shared.js");
var hasOwn = __webpack_require__(/*! ../internals/has-own-property */ "./node_modules/core-js/internals/has-own-property.js");
var uid = __webpack_require__(/*! ../internals/uid */ "./node_modules/core-js/internals/uid.js");
var NATIVE_SYMBOL = __webpack_require__(/*! ../internals/symbol-constructor-detection */ "./node_modules/core-js/internals/symbol-constructor-detection.js");
var USE_SYMBOL_AS_UID = __webpack_require__(/*! ../internals/use-symbol-as-uid */ "./node_modules/core-js/internals/use-symbol-as-uid.js");

var WellKnownSymbolsStore = shared('wks');
var Symbol = global.Symbol;
var symbolFor = Symbol && Symbol['for'];
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol : Symbol && Symbol.withoutSetter || uid;

module.exports = function (name) {
  if (!hasOwn(WellKnownSymbolsStore, name) || !(NATIVE_SYMBOL || typeof WellKnownSymbolsStore[name] == 'string')) {
    var description = 'Symbol.' + name;
    if (NATIVE_SYMBOL && hasOwn(Symbol, name)) {
      WellKnownSymbolsStore[name] = Symbol[name];
    } else if (USE_SYMBOL_AS_UID && symbolFor) {
      WellKnownSymbolsStore[name] = symbolFor(description);
    } else {
      WellKnownSymbolsStore[name] = createWellKnownSymbol(description);
    }
  } return WellKnownSymbolsStore[name];
};


/***/ }),

/***/ "./node_modules/core-js/internals/whitespaces.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/whitespaces.js ***!
  \*******************************************************/
/***/ ((module) => {

// a string of all valid unicode whitespaces
module.exports = '\u0009\u000A\u000B\u000C\u000D\u0020\u00A0\u1680\u2000\u2001\u2002' +
  '\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.concat.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.concat.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var isArray = __webpack_require__(/*! ../internals/is-array */ "./node_modules/core-js/internals/is-array.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");
var lengthOfArrayLike = __webpack_require__(/*! ../internals/length-of-array-like */ "./node_modules/core-js/internals/length-of-array-like.js");
var doesNotExceedSafeInteger = __webpack_require__(/*! ../internals/does-not-exceed-safe-integer */ "./node_modules/core-js/internals/does-not-exceed-safe-integer.js");
var createProperty = __webpack_require__(/*! ../internals/create-property */ "./node_modules/core-js/internals/create-property.js");
var arraySpeciesCreate = __webpack_require__(/*! ../internals/array-species-create */ "./node_modules/core-js/internals/array-species-create.js");
var arrayMethodHasSpeciesSupport = __webpack_require__(/*! ../internals/array-method-has-species-support */ "./node_modules/core-js/internals/array-method-has-species-support.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");
var V8_VERSION = __webpack_require__(/*! ../internals/engine-v8-version */ "./node_modules/core-js/internals/engine-v8-version.js");

var IS_CONCAT_SPREADABLE = wellKnownSymbol('isConcatSpreadable');

// We can't use this feature detection in V8 since it causes
// deoptimization and serious performance degradation
// https://github.com/zloirock/core-js/issues/679
var IS_CONCAT_SPREADABLE_SUPPORT = V8_VERSION >= 51 || !fails(function () {
  var array = [];
  array[IS_CONCAT_SPREADABLE] = false;
  return array.concat()[0] !== array;
});

var SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('concat');

var isConcatSpreadable = function (O) {
  if (!isObject(O)) return false;
  var spreadable = O[IS_CONCAT_SPREADABLE];
  return spreadable !== undefined ? !!spreadable : isArray(O);
};

var FORCED = !IS_CONCAT_SPREADABLE_SUPPORT || !SPECIES_SUPPORT;

// `Array.prototype.concat` method
// https://tc39.es/ecma262/#sec-array.prototype.concat
// with adding support of @@isConcatSpreadable and @@species
$({ target: 'Array', proto: true, arity: 1, forced: FORCED }, {
  // eslint-disable-next-line no-unused-vars -- required for `.length`
  concat: function concat(arg) {
    var O = toObject(this);
    var A = arraySpeciesCreate(O, 0);
    var n = 0;
    var i, k, length, len, E;
    for (i = -1, length = arguments.length; i < length; i++) {
      E = i === -1 ? O : arguments[i];
      if (isConcatSpreadable(E)) {
        len = lengthOfArrayLike(E);
        doesNotExceedSafeInteger(n + len);
        for (k = 0; k < len; k++, n++) if (k in E) createProperty(A, n, E[k]);
      } else {
        doesNotExceedSafeInteger(n + 1);
        createProperty(A, n++, E);
      }
    }
    A.length = n;
    return A;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.filter.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.filter.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var $filter = (__webpack_require__(/*! ../internals/array-iteration */ "./node_modules/core-js/internals/array-iteration.js").filter);
var arrayMethodHasSpeciesSupport = __webpack_require__(/*! ../internals/array-method-has-species-support */ "./node_modules/core-js/internals/array-method-has-species-support.js");

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('filter');

// `Array.prototype.filter` method
// https://tc39.es/ecma262/#sec-array.prototype.filter
// with adding support of @@species
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT }, {
  filter: function filter(callbackfn /* , thisArg */) {
    return $filter(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.iterator.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.iterator.js ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js");
var addToUnscopables = __webpack_require__(/*! ../internals/add-to-unscopables */ "./node_modules/core-js/internals/add-to-unscopables.js");
var Iterators = __webpack_require__(/*! ../internals/iterators */ "./node_modules/core-js/internals/iterators.js");
var InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ "./node_modules/core-js/internals/internal-state.js");
var defineProperty = (__webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js").f);
var defineIterator = __webpack_require__(/*! ../internals/iterator-define */ "./node_modules/core-js/internals/iterator-define.js");
var createIterResultObject = __webpack_require__(/*! ../internals/create-iter-result-object */ "./node_modules/core-js/internals/create-iter-result-object.js");
var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ "./node_modules/core-js/internals/is-pure.js");
var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");

var ARRAY_ITERATOR = 'Array Iterator';
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(ARRAY_ITERATOR);

// `Array.prototype.entries` method
// https://tc39.es/ecma262/#sec-array.prototype.entries
// `Array.prototype.keys` method
// https://tc39.es/ecma262/#sec-array.prototype.keys
// `Array.prototype.values` method
// https://tc39.es/ecma262/#sec-array.prototype.values
// `Array.prototype[@@iterator]` method
// https://tc39.es/ecma262/#sec-array.prototype-@@iterator
// `CreateArrayIterator` internal method
// https://tc39.es/ecma262/#sec-createarrayiterator
module.exports = defineIterator(Array, 'Array', function (iterated, kind) {
  setInternalState(this, {
    type: ARRAY_ITERATOR,
    target: toIndexedObject(iterated), // target
    index: 0,                          // next index
    kind: kind                         // kind
  });
// `%ArrayIteratorPrototype%.next` method
// https://tc39.es/ecma262/#sec-%arrayiteratorprototype%.next
}, function () {
  var state = getInternalState(this);
  var target = state.target;
  var kind = state.kind;
  var index = state.index++;
  if (!target || index >= target.length) {
    state.target = undefined;
    return createIterResultObject(undefined, true);
  }
  if (kind == 'keys') return createIterResultObject(index, false);
  if (kind == 'values') return createIterResultObject(target[index], false);
  return createIterResultObject([index, target[index]], false);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values%
// https://tc39.es/ecma262/#sec-createunmappedargumentsobject
// https://tc39.es/ecma262/#sec-createmappedargumentsobject
var values = Iterators.Arguments = Iterators.Array;

// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');

// V8 ~ Chrome 45- bug
if (!IS_PURE && DESCRIPTORS && values.name !== 'values') try {
  defineProperty(values, 'name', { value: 'values' });
} catch (error) { /* empty */ }


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.reduce.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.reduce.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var $reduce = (__webpack_require__(/*! ../internals/array-reduce */ "./node_modules/core-js/internals/array-reduce.js").left);
var arrayMethodIsStrict = __webpack_require__(/*! ../internals/array-method-is-strict */ "./node_modules/core-js/internals/array-method-is-strict.js");
var CHROME_VERSION = __webpack_require__(/*! ../internals/engine-v8-version */ "./node_modules/core-js/internals/engine-v8-version.js");
var IS_NODE = __webpack_require__(/*! ../internals/engine-is-node */ "./node_modules/core-js/internals/engine-is-node.js");

var STRICT_METHOD = arrayMethodIsStrict('reduce');
// Chrome 80-82 has a critical bug
// https://bugs.chromium.org/p/chromium/issues/detail?id=1049982
var CHROME_BUG = !IS_NODE && CHROME_VERSION > 79 && CHROME_VERSION < 83;

// `Array.prototype.reduce` method
// https://tc39.es/ecma262/#sec-array.prototype.reduce
$({ target: 'Array', proto: true, forced: !STRICT_METHOD || CHROME_BUG }, {
  reduce: function reduce(callbackfn /* , initialValue */) {
    var length = arguments.length;
    return $reduce(this, callbackfn, length, length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.function.name.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es.function.name.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var FUNCTION_NAME_EXISTS = (__webpack_require__(/*! ../internals/function-name */ "./node_modules/core-js/internals/function-name.js").EXISTS);
var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/core-js/internals/function-uncurry-this.js");
var defineProperty = (__webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js").f);

var FunctionPrototype = Function.prototype;
var functionToString = uncurryThis(FunctionPrototype.toString);
var nameRE = /function\b(?:\s|\/\*[\S\s]*?\*\/|\/\/[^\n\r]*[\n\r]+)*([^\s(/]*)/;
var regExpExec = uncurryThis(nameRE.exec);
var NAME = 'name';

// Function instances `.name` property
// https://tc39.es/ecma262/#sec-function-instances-name
if (DESCRIPTORS && !FUNCTION_NAME_EXISTS) {
  defineProperty(FunctionPrototype, NAME, {
    configurable: true,
    get: function () {
      try {
        return regExpExec(nameRE, functionToString(this))[1];
      } catch (error) {
        return '';
      }
    }
  });
}


/***/ }),

/***/ "./node_modules/core-js/modules/es.object.assign.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es.object.assign.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var assign = __webpack_require__(/*! ../internals/object-assign */ "./node_modules/core-js/internals/object-assign.js");

// `Object.assign` method
// https://tc39.es/ecma262/#sec-object.assign
// eslint-disable-next-line es/no-object-assign -- required for testing
$({ target: 'Object', stat: true, arity: 2, forced: Object.assign !== assign }, {
  assign: assign
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.object.to-string.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/es.object.to-string.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var TO_STRING_TAG_SUPPORT = __webpack_require__(/*! ../internals/to-string-tag-support */ "./node_modules/core-js/internals/to-string-tag-support.js");
var defineBuiltIn = __webpack_require__(/*! ../internals/define-built-in */ "./node_modules/core-js/internals/define-built-in.js");
var toString = __webpack_require__(/*! ../internals/object-to-string */ "./node_modules/core-js/internals/object-to-string.js");

// `Object.prototype.toString` method
// https://tc39.es/ecma262/#sec-object.prototype.tostring
if (!TO_STRING_TAG_SUPPORT) {
  defineBuiltIn(Object.prototype, 'toString', toString, { unsafe: true });
}


/***/ }),

/***/ "./node_modules/core-js/modules/es.parse-int.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/es.parse-int.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var $parseInt = __webpack_require__(/*! ../internals/number-parse-int */ "./node_modules/core-js/internals/number-parse-int.js");

// `parseInt` method
// https://tc39.es/ecma262/#sec-parseint-string-radix
$({ global: true, forced: parseInt != $parseInt }, {
  parseInt: $parseInt
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.regexp.exec.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es.regexp.exec.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var exec = __webpack_require__(/*! ../internals/regexp-exec */ "./node_modules/core-js/internals/regexp-exec.js");

// `RegExp.prototype.exec` method
// https://tc39.es/ecma262/#sec-regexp.prototype.exec
$({ target: 'RegExp', proto: true, forced: /./.exec !== exec }, {
  exec: exec
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.string.iterator.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es.string.iterator.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var charAt = (__webpack_require__(/*! ../internals/string-multibyte */ "./node_modules/core-js/internals/string-multibyte.js").charAt);
var toString = __webpack_require__(/*! ../internals/to-string */ "./node_modules/core-js/internals/to-string.js");
var InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ "./node_modules/core-js/internals/internal-state.js");
var defineIterator = __webpack_require__(/*! ../internals/iterator-define */ "./node_modules/core-js/internals/iterator-define.js");
var createIterResultObject = __webpack_require__(/*! ../internals/create-iter-result-object */ "./node_modules/core-js/internals/create-iter-result-object.js");

var STRING_ITERATOR = 'String Iterator';
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(STRING_ITERATOR);

// `String.prototype[@@iterator]` method
// https://tc39.es/ecma262/#sec-string.prototype-@@iterator
defineIterator(String, 'String', function (iterated) {
  setInternalState(this, {
    type: STRING_ITERATOR,
    string: toString(iterated),
    index: 0
  });
// `%StringIteratorPrototype%.next` method
// https://tc39.es/ecma262/#sec-%stringiteratorprototype%.next
}, function next() {
  var state = getInternalState(this);
  var string = state.string;
  var index = state.index;
  var point;
  if (index >= string.length) return createIterResultObject(undefined, true);
  point = charAt(string, index);
  state.index += point.length;
  return createIterResultObject(point, false);
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.string.match.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es.string.match.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var call = __webpack_require__(/*! ../internals/function-call */ "./node_modules/core-js/internals/function-call.js");
var fixRegExpWellKnownSymbolLogic = __webpack_require__(/*! ../internals/fix-regexp-well-known-symbol-logic */ "./node_modules/core-js/internals/fix-regexp-well-known-symbol-logic.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var isNullOrUndefined = __webpack_require__(/*! ../internals/is-null-or-undefined */ "./node_modules/core-js/internals/is-null-or-undefined.js");
var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/core-js/internals/to-length.js");
var toString = __webpack_require__(/*! ../internals/to-string */ "./node_modules/core-js/internals/to-string.js");
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");
var getMethod = __webpack_require__(/*! ../internals/get-method */ "./node_modules/core-js/internals/get-method.js");
var advanceStringIndex = __webpack_require__(/*! ../internals/advance-string-index */ "./node_modules/core-js/internals/advance-string-index.js");
var regExpExec = __webpack_require__(/*! ../internals/regexp-exec-abstract */ "./node_modules/core-js/internals/regexp-exec-abstract.js");

// @@match logic
fixRegExpWellKnownSymbolLogic('match', function (MATCH, nativeMatch, maybeCallNative) {
  return [
    // `String.prototype.match` method
    // https://tc39.es/ecma262/#sec-string.prototype.match
    function match(regexp) {
      var O = requireObjectCoercible(this);
      var matcher = isNullOrUndefined(regexp) ? undefined : getMethod(regexp, MATCH);
      return matcher ? call(matcher, regexp, O) : new RegExp(regexp)[MATCH](toString(O));
    },
    // `RegExp.prototype[@@match]` method
    // https://tc39.es/ecma262/#sec-regexp.prototype-@@match
    function (string) {
      var rx = anObject(this);
      var S = toString(string);
      var res = maybeCallNative(nativeMatch, rx, S);

      if (res.done) return res.value;

      if (!rx.global) return regExpExec(rx, S);

      var fullUnicode = rx.unicode;
      rx.lastIndex = 0;
      var A = [];
      var n = 0;
      var result;
      while ((result = regExpExec(rx, S)) !== null) {
        var matchStr = toString(result[0]);
        A[n] = matchStr;
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
        n++;
      }
      return n === 0 ? null : A;
    }
  ];
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.string.replace.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es.string.replace.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var apply = __webpack_require__(/*! ../internals/function-apply */ "./node_modules/core-js/internals/function-apply.js");
var call = __webpack_require__(/*! ../internals/function-call */ "./node_modules/core-js/internals/function-call.js");
var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/core-js/internals/function-uncurry-this.js");
var fixRegExpWellKnownSymbolLogic = __webpack_require__(/*! ../internals/fix-regexp-well-known-symbol-logic */ "./node_modules/core-js/internals/fix-regexp-well-known-symbol-logic.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var isCallable = __webpack_require__(/*! ../internals/is-callable */ "./node_modules/core-js/internals/is-callable.js");
var isNullOrUndefined = __webpack_require__(/*! ../internals/is-null-or-undefined */ "./node_modules/core-js/internals/is-null-or-undefined.js");
var toIntegerOrInfinity = __webpack_require__(/*! ../internals/to-integer-or-infinity */ "./node_modules/core-js/internals/to-integer-or-infinity.js");
var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/core-js/internals/to-length.js");
var toString = __webpack_require__(/*! ../internals/to-string */ "./node_modules/core-js/internals/to-string.js");
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");
var advanceStringIndex = __webpack_require__(/*! ../internals/advance-string-index */ "./node_modules/core-js/internals/advance-string-index.js");
var getMethod = __webpack_require__(/*! ../internals/get-method */ "./node_modules/core-js/internals/get-method.js");
var getSubstitution = __webpack_require__(/*! ../internals/get-substitution */ "./node_modules/core-js/internals/get-substitution.js");
var regExpExec = __webpack_require__(/*! ../internals/regexp-exec-abstract */ "./node_modules/core-js/internals/regexp-exec-abstract.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var REPLACE = wellKnownSymbol('replace');
var max = Math.max;
var min = Math.min;
var concat = uncurryThis([].concat);
var push = uncurryThis([].push);
var stringIndexOf = uncurryThis(''.indexOf);
var stringSlice = uncurryThis(''.slice);

var maybeToString = function (it) {
  return it === undefined ? it : String(it);
};

// IE <= 11 replaces $0 with the whole match, as if it was $&
// https://stackoverflow.com/questions/6024666/getting-ie-to-replace-a-regex-with-the-literal-string-0
var REPLACE_KEEPS_$0 = (function () {
  // eslint-disable-next-line regexp/prefer-escape-replacement-dollar-char -- required for testing
  return 'a'.replace(/./, '$0') === '$0';
})();

// Safari <= 13.0.3(?) substitutes nth capture where n>m with an empty string
var REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE = (function () {
  if (/./[REPLACE]) {
    return /./[REPLACE]('a', '$0') === '';
  }
  return false;
})();

var REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function () {
  var re = /./;
  re.exec = function () {
    var result = [];
    result.groups = { a: '7' };
    return result;
  };
  // eslint-disable-next-line regexp/no-useless-dollar-replacements -- false positive
  return ''.replace(re, '$<a>') !== '7';
});

// @@replace logic
fixRegExpWellKnownSymbolLogic('replace', function (_, nativeReplace, maybeCallNative) {
  var UNSAFE_SUBSTITUTE = REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE ? '$' : '$0';

  return [
    // `String.prototype.replace` method
    // https://tc39.es/ecma262/#sec-string.prototype.replace
    function replace(searchValue, replaceValue) {
      var O = requireObjectCoercible(this);
      var replacer = isNullOrUndefined(searchValue) ? undefined : getMethod(searchValue, REPLACE);
      return replacer
        ? call(replacer, searchValue, O, replaceValue)
        : call(nativeReplace, toString(O), searchValue, replaceValue);
    },
    // `RegExp.prototype[@@replace]` method
    // https://tc39.es/ecma262/#sec-regexp.prototype-@@replace
    function (string, replaceValue) {
      var rx = anObject(this);
      var S = toString(string);

      if (
        typeof replaceValue == 'string' &&
        stringIndexOf(replaceValue, UNSAFE_SUBSTITUTE) === -1 &&
        stringIndexOf(replaceValue, '$<') === -1
      ) {
        var res = maybeCallNative(nativeReplace, rx, S, replaceValue);
        if (res.done) return res.value;
      }

      var functionalReplace = isCallable(replaceValue);
      if (!functionalReplace) replaceValue = toString(replaceValue);

      var global = rx.global;
      if (global) {
        var fullUnicode = rx.unicode;
        rx.lastIndex = 0;
      }
      var results = [];
      while (true) {
        var result = regExpExec(rx, S);
        if (result === null) break;

        push(results, result);
        if (!global) break;

        var matchStr = toString(result[0]);
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
      }

      var accumulatedResult = '';
      var nextSourcePosition = 0;
      for (var i = 0; i < results.length; i++) {
        result = results[i];

        var matched = toString(result[0]);
        var position = max(min(toIntegerOrInfinity(result.index), S.length), 0);
        var captures = [];
        // NOTE: This is equivalent to
        //   captures = result.slice(1).map(maybeToString)
        // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
        // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
        // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.
        for (var j = 1; j < result.length; j++) push(captures, maybeToString(result[j]));
        var namedCaptures = result.groups;
        if (functionalReplace) {
          var replacerArgs = concat([matched], captures, position, S);
          if (namedCaptures !== undefined) push(replacerArgs, namedCaptures);
          var replacement = toString(apply(replaceValue, undefined, replacerArgs));
        } else {
          replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
        }
        if (position >= nextSourcePosition) {
          accumulatedResult += stringSlice(S, nextSourcePosition, position) + replacement;
          nextSourcePosition = position + matched.length;
        }
      }
      return accumulatedResult + stringSlice(S, nextSourcePosition);
    }
  ];
}, !REPLACE_SUPPORTS_NAMED_GROUPS || !REPLACE_KEEPS_$0 || REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE);


/***/ }),

/***/ "./node_modules/core-js/modules/es.weak-map.constructor.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/modules/es.weak-map.constructor.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/core-js/internals/function-uncurry-this.js");
var defineBuiltIns = __webpack_require__(/*! ../internals/define-built-ins */ "./node_modules/core-js/internals/define-built-ins.js");
var InternalMetadataModule = __webpack_require__(/*! ../internals/internal-metadata */ "./node_modules/core-js/internals/internal-metadata.js");
var collection = __webpack_require__(/*! ../internals/collection */ "./node_modules/core-js/internals/collection.js");
var collectionWeak = __webpack_require__(/*! ../internals/collection-weak */ "./node_modules/core-js/internals/collection-weak.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var isExtensible = __webpack_require__(/*! ../internals/object-is-extensible */ "./node_modules/core-js/internals/object-is-extensible.js");
var enforceInternalState = (__webpack_require__(/*! ../internals/internal-state */ "./node_modules/core-js/internals/internal-state.js").enforce);
var NATIVE_WEAK_MAP = __webpack_require__(/*! ../internals/weak-map-basic-detection */ "./node_modules/core-js/internals/weak-map-basic-detection.js");

var IS_IE11 = !global.ActiveXObject && 'ActiveXObject' in global;
var InternalWeakMap;

var wrapper = function (init) {
  return function WeakMap() {
    return init(this, arguments.length ? arguments[0] : undefined);
  };
};

// `WeakMap` constructor
// https://tc39.es/ecma262/#sec-weakmap-constructor
var $WeakMap = collection('WeakMap', wrapper, collectionWeak);

// IE11 WeakMap frozen keys fix
// We can't use feature detection because it crash some old IE builds
// https://github.com/zloirock/core-js/issues/485
if (NATIVE_WEAK_MAP && IS_IE11) {
  InternalWeakMap = collectionWeak.getConstructor(wrapper, 'WeakMap', true);
  InternalMetadataModule.enable();
  var WeakMapPrototype = $WeakMap.prototype;
  var nativeDelete = uncurryThis(WeakMapPrototype['delete']);
  var nativeHas = uncurryThis(WeakMapPrototype.has);
  var nativeGet = uncurryThis(WeakMapPrototype.get);
  var nativeSet = uncurryThis(WeakMapPrototype.set);
  defineBuiltIns(WeakMapPrototype, {
    'delete': function (key) {
      if (isObject(key) && !isExtensible(key)) {
        var state = enforceInternalState(this);
        if (!state.frozen) state.frozen = new InternalWeakMap();
        return nativeDelete(this, key) || state.frozen['delete'](key);
      } return nativeDelete(this, key);
    },
    has: function has(key) {
      if (isObject(key) && !isExtensible(key)) {
        var state = enforceInternalState(this);
        if (!state.frozen) state.frozen = new InternalWeakMap();
        return nativeHas(this, key) || state.frozen.has(key);
      } return nativeHas(this, key);
    },
    get: function get(key) {
      if (isObject(key) && !isExtensible(key)) {
        var state = enforceInternalState(this);
        if (!state.frozen) state.frozen = new InternalWeakMap();
        return nativeHas(this, key) ? nativeGet(this, key) : state.frozen.get(key);
      } return nativeGet(this, key);
    },
    set: function set(key, value) {
      if (isObject(key) && !isExtensible(key)) {
        var state = enforceInternalState(this);
        if (!state.frozen) state.frozen = new InternalWeakMap();
        nativeHas(this, key) ? nativeSet(this, key, value) : state.frozen.set(key, value);
      } else nativeSet(this, key, value);
      return this;
    }
  });
}


/***/ }),

/***/ "./node_modules/core-js/modules/es.weak-map.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/es.weak-map.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// TODO: Remove this module from `core-js@4` since it's replaced to module below
__webpack_require__(/*! ../modules/es.weak-map.constructor */ "./node_modules/core-js/modules/es.weak-map.constructor.js");


/***/ }),

/***/ "./node_modules/core-js/modules/web.dom-collections.for-each.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/modules/web.dom-collections.for-each.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var DOMIterables = __webpack_require__(/*! ../internals/dom-iterables */ "./node_modules/core-js/internals/dom-iterables.js");
var DOMTokenListPrototype = __webpack_require__(/*! ../internals/dom-token-list-prototype */ "./node_modules/core-js/internals/dom-token-list-prototype.js");
var forEach = __webpack_require__(/*! ../internals/array-for-each */ "./node_modules/core-js/internals/array-for-each.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/core-js/internals/create-non-enumerable-property.js");

var handlePrototype = function (CollectionPrototype) {
  // some Chrome versions have non-configurable methods on DOMTokenList
  if (CollectionPrototype && CollectionPrototype.forEach !== forEach) try {
    createNonEnumerableProperty(CollectionPrototype, 'forEach', forEach);
  } catch (error) {
    CollectionPrototype.forEach = forEach;
  }
};

for (var COLLECTION_NAME in DOMIterables) {
  if (DOMIterables[COLLECTION_NAME]) {
    handlePrototype(global[COLLECTION_NAME] && global[COLLECTION_NAME].prototype);
  }
}

handlePrototype(DOMTokenListPrototype);


/***/ }),

/***/ "./node_modules/core-js/modules/web.dom-collections.iterator.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/modules/web.dom-collections.iterator.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var DOMIterables = __webpack_require__(/*! ../internals/dom-iterables */ "./node_modules/core-js/internals/dom-iterables.js");
var DOMTokenListPrototype = __webpack_require__(/*! ../internals/dom-token-list-prototype */ "./node_modules/core-js/internals/dom-token-list-prototype.js");
var ArrayIteratorMethods = __webpack_require__(/*! ../modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/core-js/internals/create-non-enumerable-property.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var ITERATOR = wellKnownSymbol('iterator');
var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var ArrayValues = ArrayIteratorMethods.values;

var handlePrototype = function (CollectionPrototype, COLLECTION_NAME) {
  if (CollectionPrototype) {
    // some Chrome versions have non-configurable methods on DOMTokenList
    if (CollectionPrototype[ITERATOR] !== ArrayValues) try {
      createNonEnumerableProperty(CollectionPrototype, ITERATOR, ArrayValues);
    } catch (error) {
      CollectionPrototype[ITERATOR] = ArrayValues;
    }
    if (!CollectionPrototype[TO_STRING_TAG]) {
      createNonEnumerableProperty(CollectionPrototype, TO_STRING_TAG, COLLECTION_NAME);
    }
    if (DOMIterables[COLLECTION_NAME]) for (var METHOD_NAME in ArrayIteratorMethods) {
      // some Chrome versions have non-configurable methods on DOMTokenList
      if (CollectionPrototype[METHOD_NAME] !== ArrayIteratorMethods[METHOD_NAME]) try {
        createNonEnumerableProperty(CollectionPrototype, METHOD_NAME, ArrayIteratorMethods[METHOD_NAME]);
      } catch (error) {
        CollectionPrototype[METHOD_NAME] = ArrayIteratorMethods[METHOD_NAME];
      }
    }
  }
};

for (var COLLECTION_NAME in DOMIterables) {
  handlePrototype(global[COLLECTION_NAME] && global[COLLECTION_NAME].prototype, COLLECTION_NAME);
}

handlePrototype(DOMTokenListPrototype, 'DOMTokenList');


/***/ }),

/***/ "./node_modules/lodash.debounce/index.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash.debounce/index.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the `TypeError` message for "Functions" methods. */
var FUNC_ERROR_TEXT = 'Expected a function';

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof __webpack_require__.g == 'object' && __webpack_require__.g && __webpack_require__.g.Object === Object && __webpack_require__.g;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
    nativeMin = Math.min;

/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */
var now = function() {
  return root.Date.now();
};

/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */
function debounce(func, wait, options) {
  var lastArgs,
      lastThis,
      maxWait,
      result,
      timerId,
      lastCallTime,
      lastInvokeTime = 0,
      leading = false,
      maxing = false,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  wait = toNumber(wait) || 0;
  if (isObject(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  function invokeFunc(time) {
    var args = lastArgs,
        thisArg = lastThis;

    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }

  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time;
    // Start the timer for the trailing edge.
    timerId = setTimeout(timerExpired, wait);
    // Invoke the leading edge.
    return leading ? invokeFunc(time) : result;
  }

  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime,
        result = wait - timeSinceLastCall;

    return maxing ? nativeMin(result, maxWait - timeSinceLastInvoke) : result;
  }

  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime;

    // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.
    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
  }

  function timerExpired() {
    var time = now();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    // Restart the timer.
    timerId = setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge(time) {
    timerId = undefined;

    // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = undefined;
    return result;
  }

  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }

  function flush() {
    return timerId === undefined ? result : trailingEdge(now());
  }

  function debounced() {
    var time = now(),
        isInvoking = shouldInvoke(time);

    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        // Handle invocations in a tight loop.
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && objectToString.call(value) == symbolTag);
}

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

module.exports = debounce;


/***/ }),

/***/ "./node_modules/lodash.memoize/index.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash.memoize/index.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the `TypeError` message for "Functions" methods. */
var FUNC_ERROR_TEXT = 'Expected a function';

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** `Object#toString` result references. */
var funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]';

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof __webpack_require__.g == 'object' && __webpack_require__.g && __webpack_require__.g.Object === Object && __webpack_require__.g;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

/**
 * Checks if `value` is a host object in IE < 9.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
 */
function isHostObject(value) {
  // Many host objects are `Object` objects that can coerce to strings
  // despite having improperly defined `toString` methods.
  var result = false;
  if (value != null && typeof value.toString != 'function') {
    try {
      result = !!(value + '');
    } catch (e) {}
  }
  return result;
}

/** Used for built-in method references. */
var arrayProto = Array.prototype,
    funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/** Built-in value references. */
var splice = arrayProto.splice;

/* Built-in method references that are verified to be native. */
var Map = getNative(root, 'Map'),
    nativeCreate = getNative(Object, 'create');

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
}

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  return this.has(key) && delete this.__data__[key];
}

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
}

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
}

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  return true;
}

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  return getMapData(this, key)['delete'](key);
}

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  getMapData(this, key).set(key, value);
  return this;
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = (isFunction(value) || isHostObject(value)) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to process.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */
function memoize(func, resolver) {
  if (typeof func != 'function' || (resolver && typeof resolver != 'function')) {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function() {
    var args = arguments,
        key = resolver ? resolver.apply(this, args) : args[0],
        cache = memoized.cache;

    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result);
    return result;
  };
  memoized.cache = new (memoize.Cache || MapCache);
  return memoized;
}

// Assign cache to `_.memoize`.
memoize.Cache = MapCache;

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 8-9 which returns 'object' for typed array and other constructors.
  var tag = isObject(value) ? objectToString.call(value) : '';
  return tag == funcTag || tag == genTag;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

module.exports = memoize;


/***/ }),

/***/ "./node_modules/lodash.throttle/index.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash.throttle/index.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the `TypeError` message for "Functions" methods. */
var FUNC_ERROR_TEXT = 'Expected a function';

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof __webpack_require__.g == 'object' && __webpack_require__.g && __webpack_require__.g.Object === Object && __webpack_require__.g;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
    nativeMin = Math.min;

/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */
var now = function() {
  return root.Date.now();
};

/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */
function debounce(func, wait, options) {
  var lastArgs,
      lastThis,
      maxWait,
      result,
      timerId,
      lastCallTime,
      lastInvokeTime = 0,
      leading = false,
      maxing = false,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  wait = toNumber(wait) || 0;
  if (isObject(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  function invokeFunc(time) {
    var args = lastArgs,
        thisArg = lastThis;

    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }

  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time;
    // Start the timer for the trailing edge.
    timerId = setTimeout(timerExpired, wait);
    // Invoke the leading edge.
    return leading ? invokeFunc(time) : result;
  }

  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime,
        result = wait - timeSinceLastCall;

    return maxing ? nativeMin(result, maxWait - timeSinceLastInvoke) : result;
  }

  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime;

    // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.
    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
  }

  function timerExpired() {
    var time = now();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    // Restart the timer.
    timerId = setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge(time) {
    timerId = undefined;

    // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = undefined;
    return result;
  }

  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }

  function flush() {
    return timerId === undefined ? result : trailingEdge(now());
  }

  function debounced() {
    var time = now(),
        isInvoking = shouldInvoke(time);

    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        // Handle invocations in a tight loop.
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}

/**
 * Creates a throttled function that only invokes `func` at most once per
 * every `wait` milliseconds. The throttled function comes with a `cancel`
 * method to cancel delayed `func` invocations and a `flush` method to
 * immediately invoke them. Provide `options` to indicate whether `func`
 * should be invoked on the leading and/or trailing edge of the `wait`
 * timeout. The `func` is invoked with the last arguments provided to the
 * throttled function. Subsequent calls to the throttled function return the
 * result of the last `func` invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the throttled function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.throttle` and `_.debounce`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to throttle.
 * @param {number} [wait=0] The number of milliseconds to throttle invocations to.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=true]
 *  Specify invoking on the leading edge of the timeout.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new throttled function.
 * @example
 *
 * // Avoid excessively updating the position while scrolling.
 * jQuery(window).on('scroll', _.throttle(updatePosition, 100));
 *
 * // Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.
 * var throttled = _.throttle(renewToken, 300000, { 'trailing': false });
 * jQuery(element).on('click', throttled);
 *
 * // Cancel the trailing throttled invocation.
 * jQuery(window).on('popstate', throttled.cancel);
 */
function throttle(func, wait, options) {
  var leading = true,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  if (isObject(options)) {
    leading = 'leading' in options ? !!options.leading : leading;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }
  return debounce(func, wait, {
    'leading': leading,
    'maxWait': wait,
    'trailing': trailing
  });
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && objectToString.call(value) == symbolTag);
}

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

module.exports = throttle;


/***/ }),

/***/ "./node_modules/simplebar-vue/dist/simplebar-vue.esm.js":
/*!**************************************************************!*\
  !*** ./node_modules/simplebar-vue/dist/simplebar-vue.esm.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.concat */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var simplebar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! simplebar */ "./node_modules/simplebar/dist/simplebar.esm.js");
/**
 * simplebar-vue - v1.6.0
 * Vue component for SimpleBar
 * https://grsmto.github.io/simplebar/
 *
 * Made by Piers Olenski
 * Under MIT License
 */




//
var script = {
  name: 'simplebar-vue',
  mounted: function mounted() {
    var options = simplebar__WEBPACK_IMPORTED_MODULE_1__["default"].getOptions(this.$refs.element.attributes);
    this.SimpleBar = new simplebar__WEBPACK_IMPORTED_MODULE_1__["default"](this.$refs.element, options);
  },
  computed: {
    scrollElement: function scrollElement() {
      return this.$refs.scrollElement;
    },
    contentElement: function contentElement() {
      return this.$refs.contentElement;
    }
  }
};

var __vue_script__ = script;
/* template */

var __vue_render__ = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c("div", {
    ref: "element"
  }, [_c("div", {
    staticClass: "simplebar-wrapper"
  }, [_vm._m(0), _vm._v(" "), _c("div", {
    staticClass: "simplebar-mask"
  }, [_c("div", {
    staticClass: "simplebar-offset"
  }, [_c("div", {
    ref: "scrollElement",
    staticClass: "simplebar-content-wrapper"
  }, [_c("div", {
    ref: "contentElement",
    staticClass: "simplebar-content"
  }, [_vm._t("default")], 2)])])]), _vm._v(" "), _c("div", {
    staticClass: "simplebar-placeholder"
  })]), _vm._v(" "), _vm._m(1), _vm._v(" "), _vm._m(2)]);
};

var __vue_staticRenderFns__ = [function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c("div", {
    staticClass: "simplebar-height-auto-observer-wrapper"
  }, [_c("div", {
    staticClass: "simplebar-height-auto-observer"
  })]);
}, function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c("div", {
    staticClass: "simplebar-track simplebar-horizontal"
  }, [_c("div", {
    staticClass: "simplebar-scrollbar"
  })]);
}, function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c("div", {
    staticClass: "simplebar-track simplebar-vertical"
  }, [_c("div", {
    staticClass: "simplebar-scrollbar"
  })]);
}];
__vue_render__._withStripped = true;
/* style */

var __vue_inject_styles__ = undefined;
/* scoped */

var __vue_scope_id__ = undefined;
/* functional template */

var __vue_is_functional_template__ = false;
/* component normalizer */

function __vue_normalize__(template, style, script, scope, functional, moduleIdentifier, createInjector, createInjectorSSR) {
  var component = (typeof script === 'function' ? script.options : script) || {}; // For security concerns, we use only base name in production mode.

  component.__file = "/Users/adriendenat/Sites/simplebar/packages/simplebar-vue/index.vue";

  if (!component.render) {
    component.render = template.render;
    component.staticRenderFns = template.staticRenderFns;
    component._compiled = true;
    if (functional) component.functional = true;
  }

  component._scopeId = scope;

  return component;
}
/* style inject */

/* style inject SSR */


var simplebar = __vue_normalize__({
  render: __vue_render__,
  staticRenderFns: __vue_staticRenderFns__
}, __vue_inject_styles__, __vue_script__, __vue_scope_id__, __vue_is_functional_template__);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (simplebar);


/***/ }),

/***/ "./node_modules/simplebar/dist/simplebar.esm.js":
/*!******************************************************!*\
  !*** ./node_modules/simplebar/dist/simplebar.esm.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var can_use_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! can-use-dom */ "./node_modules/can-use-dom/index.js");
/* harmony import */ var can_use_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(can_use_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.parse-int.js */ "./node_modules/core-js/modules/es.parse-int.js");
/* harmony import */ var core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.assign.js */ "./node_modules/core-js/modules/es.object.assign.js");
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_weak_map_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.weak-map.js */ "./node_modules/core-js/modules/es.weak-map.js");
/* harmony import */ var core_js_modules_es_weak_map_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_weak_map_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var lodash_throttle__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! lodash.throttle */ "./node_modules/lodash.throttle/index.js");
/* harmony import */ var lodash_throttle__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(lodash_throttle__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! lodash.debounce */ "./node_modules/lodash.debounce/index.js");
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var lodash_memoize__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! lodash.memoize */ "./node_modules/lodash.memoize/index.js");
/* harmony import */ var lodash_memoize__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(lodash_memoize__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _juggle_resize_observer__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @juggle/resize-observer */ "./node_modules/@juggle/resize-observer/lib/exports/resize-observer.js");
/* harmony import */ var core_js_modules_es_array_reduce_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.array.reduce.js */ "./node_modules/core-js/modules/es.array.reduce.js");
/* harmony import */ var core_js_modules_es_array_reduce_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_reduce_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_string_match_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.string.match.js */ "./node_modules/core-js/modules/es.string.match.js");
/* harmony import */ var core_js_modules_es_string_match_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_match_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_18__);
/**
 * SimpleBar.js - v5.3.9
 * Scrollbars, simpler.
 * https://grsmto.github.io/simplebar/
 *
 * Made by Adrien Denat from a fork by Jonathan Nicol
 * Under MIT License
 */





















// Helper function to retrieve options from element attributes
var getOptions = function getOptions(obj) {
  var options = Array.prototype.reduce.call(obj, function (acc, attribute) {
    var option = attribute.name.match(/data-simplebar-(.+)/);

    if (option) {
      var key = option[1].replace(/\W+(.)/g, function (x, chr) {
        return chr.toUpperCase();
      });

      switch (attribute.value) {
        case 'true':
          acc[key] = true;
          break;

        case 'false':
          acc[key] = false;
          break;

        case undefined:
          acc[key] = true;
          break;

        default:
          acc[key] = attribute.value;
      }
    }

    return acc;
  }, {});
  return options;
};
function getElementWindow(element) {
  if (!element || !element.ownerDocument || !element.ownerDocument.defaultView) {
    return window;
  }

  return element.ownerDocument.defaultView;
}
function getElementDocument(element) {
  if (!element || !element.ownerDocument) {
    return document;
  }

  return element.ownerDocument;
}

var cachedScrollbarWidth = null;
var cachedDevicePixelRatio = null;

if ((can_use_dom__WEBPACK_IMPORTED_MODULE_2___default())) {
  window.addEventListener('resize', function () {
    if (cachedDevicePixelRatio !== window.devicePixelRatio) {
      cachedDevicePixelRatio = window.devicePixelRatio;
      cachedScrollbarWidth = null;
    }
  });
}

function scrollbarWidth(el) {
  if (cachedScrollbarWidth === null) {
    var document = getElementDocument(el);

    if (typeof document === 'undefined') {
      cachedScrollbarWidth = 0;
      return cachedScrollbarWidth;
    }

    var body = document.body;
    var box = document.createElement('div');
    box.classList.add('simplebar-hide-scrollbar');
    body.appendChild(box);
    var width = box.getBoundingClientRect().right;
    body.removeChild(box);
    cachedScrollbarWidth = width;
  }

  return cachedScrollbarWidth;
}

var SimpleBar = /*#__PURE__*/function () {
  function SimpleBar(element, options) {
    var _this = this;

    this.onScroll = function () {
      var elWindow = getElementWindow(_this.el);

      if (!_this.scrollXTicking) {
        elWindow.requestAnimationFrame(_this.scrollX);
        _this.scrollXTicking = true;
      }

      if (!_this.scrollYTicking) {
        elWindow.requestAnimationFrame(_this.scrollY);
        _this.scrollYTicking = true;
      }
    };

    this.scrollX = function () {
      if (_this.axis.x.isOverflowing) {
        _this.showScrollbar('x');

        _this.positionScrollbar('x');
      }

      _this.scrollXTicking = false;
    };

    this.scrollY = function () {
      if (_this.axis.y.isOverflowing) {
        _this.showScrollbar('y');

        _this.positionScrollbar('y');
      }

      _this.scrollYTicking = false;
    };

    this.onMouseEnter = function () {
      _this.showScrollbar('x');

      _this.showScrollbar('y');
    };

    this.onMouseMove = function (e) {
      _this.mouseX = e.clientX;
      _this.mouseY = e.clientY;

      if (_this.axis.x.isOverflowing || _this.axis.x.forceVisible) {
        _this.onMouseMoveForAxis('x');
      }

      if (_this.axis.y.isOverflowing || _this.axis.y.forceVisible) {
        _this.onMouseMoveForAxis('y');
      }
    };

    this.onMouseLeave = function () {
      _this.onMouseMove.cancel();

      if (_this.axis.x.isOverflowing || _this.axis.x.forceVisible) {
        _this.onMouseLeaveForAxis('x');
      }

      if (_this.axis.y.isOverflowing || _this.axis.y.forceVisible) {
        _this.onMouseLeaveForAxis('y');
      }

      _this.mouseX = -1;
      _this.mouseY = -1;
    };

    this.onWindowResize = function () {
      // Recalculate scrollbarWidth in case it's a zoom
      _this.scrollbarWidth = _this.getScrollbarWidth();

      _this.hideNativeScrollbar();
    };

    this.hideScrollbars = function () {
      _this.axis.x.track.rect = _this.axis.x.track.el.getBoundingClientRect();
      _this.axis.y.track.rect = _this.axis.y.track.el.getBoundingClientRect();

      if (!_this.isWithinBounds(_this.axis.y.track.rect)) {
        _this.axis.y.scrollbar.el.classList.remove(_this.classNames.visible);

        _this.axis.y.isVisible = false;
      }

      if (!_this.isWithinBounds(_this.axis.x.track.rect)) {
        _this.axis.x.scrollbar.el.classList.remove(_this.classNames.visible);

        _this.axis.x.isVisible = false;
      }
    };

    this.onPointerEvent = function (e) {
      var isWithinTrackXBounds, isWithinTrackYBounds;
      _this.axis.x.track.rect = _this.axis.x.track.el.getBoundingClientRect();
      _this.axis.y.track.rect = _this.axis.y.track.el.getBoundingClientRect();

      if (_this.axis.x.isOverflowing || _this.axis.x.forceVisible) {
        isWithinTrackXBounds = _this.isWithinBounds(_this.axis.x.track.rect);
      }

      if (_this.axis.y.isOverflowing || _this.axis.y.forceVisible) {
        isWithinTrackYBounds = _this.isWithinBounds(_this.axis.y.track.rect);
      } // If any pointer event is called on the scrollbar


      if (isWithinTrackXBounds || isWithinTrackYBounds) {
        // Preventing the event's default action stops text being
        // selectable during the drag.
        e.preventDefault(); // Prevent event leaking

        e.stopPropagation();

        if (e.type === 'mousedown') {
          if (isWithinTrackXBounds) {
            _this.axis.x.scrollbar.rect = _this.axis.x.scrollbar.el.getBoundingClientRect();

            if (_this.isWithinBounds(_this.axis.x.scrollbar.rect)) {
              _this.onDragStart(e, 'x');
            } else {
              _this.onTrackClick(e, 'x');
            }
          }

          if (isWithinTrackYBounds) {
            _this.axis.y.scrollbar.rect = _this.axis.y.scrollbar.el.getBoundingClientRect();

            if (_this.isWithinBounds(_this.axis.y.scrollbar.rect)) {
              _this.onDragStart(e, 'y');
            } else {
              _this.onTrackClick(e, 'y');
            }
          }
        }
      }
    };

    this.drag = function (e) {
      var eventOffset;
      var track = _this.axis[_this.draggedAxis].track;
      var trackSize = track.rect[_this.axis[_this.draggedAxis].sizeAttr];
      var scrollbar = _this.axis[_this.draggedAxis].scrollbar;
      var contentSize = _this.contentWrapperEl[_this.axis[_this.draggedAxis].scrollSizeAttr];
      var hostSize = parseInt(_this.elStyles[_this.axis[_this.draggedAxis].sizeAttr], 10);
      e.preventDefault();
      e.stopPropagation();

      if (_this.draggedAxis === 'y') {
        eventOffset = e.pageY;
      } else {
        eventOffset = e.pageX;
      } // Calculate how far the user's mouse is from the top/left of the scrollbar (minus the dragOffset).


      var dragPos = eventOffset - track.rect[_this.axis[_this.draggedAxis].offsetAttr] - _this.axis[_this.draggedAxis].dragOffset; // Convert the mouse position into a percentage of the scrollbar height/width.

      var dragPerc = dragPos / (trackSize - scrollbar.size); // Scroll the content by the same percentage.

      var scrollPos = dragPerc * (contentSize - hostSize); // Fix browsers inconsistency on RTL

      if (_this.draggedAxis === 'x') {
        scrollPos = _this.isRtl && SimpleBar.getRtlHelpers().isRtlScrollbarInverted ? scrollPos - (trackSize + scrollbar.size) : scrollPos;
        scrollPos = _this.isRtl && SimpleBar.getRtlHelpers().isRtlScrollingInverted ? -scrollPos : scrollPos;
      }

      _this.contentWrapperEl[_this.axis[_this.draggedAxis].scrollOffsetAttr] = scrollPos;
    };

    this.onEndDrag = function (e) {
      var elDocument = getElementDocument(_this.el);
      var elWindow = getElementWindow(_this.el);
      e.preventDefault();
      e.stopPropagation();

      _this.el.classList.remove(_this.classNames.dragging);

      elDocument.removeEventListener('mousemove', _this.drag, true);
      elDocument.removeEventListener('mouseup', _this.onEndDrag, true);
      _this.removePreventClickId = elWindow.setTimeout(function () {
        // Remove these asynchronously so we still suppress click events
        // generated simultaneously with mouseup.
        elDocument.removeEventListener('click', _this.preventClick, true);
        elDocument.removeEventListener('dblclick', _this.preventClick, true);
        _this.removePreventClickId = null;
      });
    };

    this.preventClick = function (e) {
      e.preventDefault();
      e.stopPropagation();
    };

    this.el = element;
    this.minScrollbarWidth = 20;
    this.options = Object.assign({}, SimpleBar.defaultOptions, options);
    this.classNames = Object.assign({}, SimpleBar.defaultOptions.classNames, this.options.classNames);
    this.axis = {
      x: {
        scrollOffsetAttr: 'scrollLeft',
        sizeAttr: 'width',
        scrollSizeAttr: 'scrollWidth',
        offsetSizeAttr: 'offsetWidth',
        offsetAttr: 'left',
        overflowAttr: 'overflowX',
        dragOffset: 0,
        isOverflowing: true,
        isVisible: false,
        forceVisible: false,
        track: {},
        scrollbar: {}
      },
      y: {
        scrollOffsetAttr: 'scrollTop',
        sizeAttr: 'height',
        scrollSizeAttr: 'scrollHeight',
        offsetSizeAttr: 'offsetHeight',
        offsetAttr: 'top',
        overflowAttr: 'overflowY',
        dragOffset: 0,
        isOverflowing: true,
        isVisible: false,
        forceVisible: false,
        track: {},
        scrollbar: {}
      }
    };
    this.removePreventClickId = null; // Don't re-instantiate over an existing one

    if (SimpleBar.instances.has(this.el)) {
      return;
    }

    this.recalculate = lodash_throttle__WEBPACK_IMPORTED_MODULE_10___default()(this.recalculate.bind(this), 64);
    this.onMouseMove = lodash_throttle__WEBPACK_IMPORTED_MODULE_10___default()(this.onMouseMove.bind(this), 64);
    this.hideScrollbars = lodash_debounce__WEBPACK_IMPORTED_MODULE_11___default()(this.hideScrollbars.bind(this), this.options.timeout);
    this.onWindowResize = lodash_debounce__WEBPACK_IMPORTED_MODULE_11___default()(this.onWindowResize.bind(this), 64, {
      leading: true
    });
    SimpleBar.getRtlHelpers = lodash_memoize__WEBPACK_IMPORTED_MODULE_12___default()(SimpleBar.getRtlHelpers);
    this.init();
  }
  /**
   * Static properties
   */

  /**
   * Helper to fix browsers inconsistency on RTL:
   *  - Firefox inverts the scrollbar initial position
   *  - IE11 inverts both scrollbar position and scrolling offset
   * Directly inspired by @KingSora's OverlayScrollbars https://github.com/KingSora/OverlayScrollbars/blob/master/js/OverlayScrollbars.js#L1634
   */


  SimpleBar.getRtlHelpers = function getRtlHelpers() {
    var dummyDiv = document.createElement('div');
    dummyDiv.innerHTML = '<div class="hs-dummy-scrollbar-size"><div style="height: 200%; width: 200%; margin: 10px 0;"></div></div>';
    var scrollbarDummyEl = dummyDiv.firstElementChild;
    document.body.appendChild(scrollbarDummyEl);
    var dummyContainerChild = scrollbarDummyEl.firstElementChild;
    scrollbarDummyEl.scrollLeft = 0;
    var dummyContainerOffset = SimpleBar.getOffset(scrollbarDummyEl);
    var dummyContainerChildOffset = SimpleBar.getOffset(dummyContainerChild);
    scrollbarDummyEl.scrollLeft = 999;
    var dummyContainerScrollOffsetAfterScroll = SimpleBar.getOffset(dummyContainerChild);
    return {
      // determines if the scrolling is responding with negative values
      isRtlScrollingInverted: dummyContainerOffset.left !== dummyContainerChildOffset.left && dummyContainerChildOffset.left - dummyContainerScrollOffsetAfterScroll.left !== 0,
      // determines if the origin scrollbar position is inverted or not (positioned on left or right)
      isRtlScrollbarInverted: dummyContainerOffset.left !== dummyContainerChildOffset.left
    };
  };

  SimpleBar.getOffset = function getOffset(el) {
    var rect = el.getBoundingClientRect();
    var elDocument = getElementDocument(el);
    var elWindow = getElementWindow(el);
    return {
      top: rect.top + (elWindow.pageYOffset || elDocument.documentElement.scrollTop),
      left: rect.left + (elWindow.pageXOffset || elDocument.documentElement.scrollLeft)
    };
  };

  var _proto = SimpleBar.prototype;

  _proto.init = function init() {
    // Save a reference to the instance, so we know this DOM node has already been instancied
    SimpleBar.instances.set(this.el, this); // We stop here on server-side

    if ((can_use_dom__WEBPACK_IMPORTED_MODULE_2___default())) {
      this.initDOM();
      this.setAccessibilityAttributes();
      this.scrollbarWidth = this.getScrollbarWidth();
      this.recalculate();
      this.initListeners();
    }
  };

  _proto.initDOM = function initDOM() {
    var _this2 = this;

    // make sure this element doesn't have the elements yet
    if (Array.prototype.filter.call(this.el.children, function (child) {
      return child.classList.contains(_this2.classNames.wrapper);
    }).length) {
      // assume that element has his DOM already initiated
      this.wrapperEl = this.el.querySelector("." + this.classNames.wrapper);
      this.contentWrapperEl = this.options.scrollableNode || this.el.querySelector("." + this.classNames.contentWrapper);
      this.contentEl = this.options.contentNode || this.el.querySelector("." + this.classNames.contentEl);
      this.offsetEl = this.el.querySelector("." + this.classNames.offset);
      this.maskEl = this.el.querySelector("." + this.classNames.mask);
      this.placeholderEl = this.findChild(this.wrapperEl, "." + this.classNames.placeholder);
      this.heightAutoObserverWrapperEl = this.el.querySelector("." + this.classNames.heightAutoObserverWrapperEl);
      this.heightAutoObserverEl = this.el.querySelector("." + this.classNames.heightAutoObserverEl);
      this.axis.x.track.el = this.findChild(this.el, "." + this.classNames.track + "." + this.classNames.horizontal);
      this.axis.y.track.el = this.findChild(this.el, "." + this.classNames.track + "." + this.classNames.vertical);
    } else {
      // Prepare DOM
      this.wrapperEl = document.createElement('div');
      this.contentWrapperEl = document.createElement('div');
      this.offsetEl = document.createElement('div');
      this.maskEl = document.createElement('div');
      this.contentEl = document.createElement('div');
      this.placeholderEl = document.createElement('div');
      this.heightAutoObserverWrapperEl = document.createElement('div');
      this.heightAutoObserverEl = document.createElement('div');
      this.wrapperEl.classList.add(this.classNames.wrapper);
      this.contentWrapperEl.classList.add(this.classNames.contentWrapper);
      this.offsetEl.classList.add(this.classNames.offset);
      this.maskEl.classList.add(this.classNames.mask);
      this.contentEl.classList.add(this.classNames.contentEl);
      this.placeholderEl.classList.add(this.classNames.placeholder);
      this.heightAutoObserverWrapperEl.classList.add(this.classNames.heightAutoObserverWrapperEl);
      this.heightAutoObserverEl.classList.add(this.classNames.heightAutoObserverEl);

      while (this.el.firstChild) {
        this.contentEl.appendChild(this.el.firstChild);
      }

      this.contentWrapperEl.appendChild(this.contentEl);
      this.offsetEl.appendChild(this.contentWrapperEl);
      this.maskEl.appendChild(this.offsetEl);
      this.heightAutoObserverWrapperEl.appendChild(this.heightAutoObserverEl);
      this.wrapperEl.appendChild(this.heightAutoObserverWrapperEl);
      this.wrapperEl.appendChild(this.maskEl);
      this.wrapperEl.appendChild(this.placeholderEl);
      this.el.appendChild(this.wrapperEl);
    }

    if (!this.axis.x.track.el || !this.axis.y.track.el) {
      var track = document.createElement('div');
      var scrollbar = document.createElement('div');
      track.classList.add(this.classNames.track);
      scrollbar.classList.add(this.classNames.scrollbar);
      track.appendChild(scrollbar);
      this.axis.x.track.el = track.cloneNode(true);
      this.axis.x.track.el.classList.add(this.classNames.horizontal);
      this.axis.y.track.el = track.cloneNode(true);
      this.axis.y.track.el.classList.add(this.classNames.vertical);
      this.el.appendChild(this.axis.x.track.el);
      this.el.appendChild(this.axis.y.track.el);
    }

    this.axis.x.scrollbar.el = this.axis.x.track.el.querySelector("." + this.classNames.scrollbar);
    this.axis.y.scrollbar.el = this.axis.y.track.el.querySelector("." + this.classNames.scrollbar);

    if (!this.options.autoHide) {
      this.axis.x.scrollbar.el.classList.add(this.classNames.visible);
      this.axis.y.scrollbar.el.classList.add(this.classNames.visible);
    }

    this.el.setAttribute('data-simplebar', 'init');
  };

  _proto.setAccessibilityAttributes = function setAccessibilityAttributes() {
    var ariaLabel = this.options.ariaLabel || 'scrollable content';
    this.contentWrapperEl.setAttribute('tabindex', '0');
    this.contentWrapperEl.setAttribute('role', 'region');
    this.contentWrapperEl.setAttribute('aria-label', ariaLabel);
  };

  _proto.initListeners = function initListeners() {
    var _this3 = this;

    var elWindow = getElementWindow(this.el); // Event listeners

    if (this.options.autoHide) {
      this.el.addEventListener('mouseenter', this.onMouseEnter);
    }

    ['mousedown', 'click', 'dblclick'].forEach(function (e) {
      _this3.el.addEventListener(e, _this3.onPointerEvent, true);
    });
    ['touchstart', 'touchend', 'touchmove'].forEach(function (e) {
      _this3.el.addEventListener(e, _this3.onPointerEvent, {
        capture: true,
        passive: true
      });
    });
    this.el.addEventListener('mousemove', this.onMouseMove);
    this.el.addEventListener('mouseleave', this.onMouseLeave);
    this.contentWrapperEl.addEventListener('scroll', this.onScroll); // Browser zoom triggers a window resize

    elWindow.addEventListener('resize', this.onWindowResize); // Hack for https://github.com/WICG/ResizeObserver/issues/38

    var resizeObserverStarted = false;
    var resizeAnimationFrameId = null;
    var resizeObserver = elWindow.ResizeObserver || _juggle_resize_observer__WEBPACK_IMPORTED_MODULE_13__.ResizeObserver;
    this.resizeObserver = new resizeObserver(function () {
      if (!resizeObserverStarted || resizeAnimationFrameId !== null) return;
      resizeAnimationFrameId = elWindow.requestAnimationFrame(function () {
        _this3.recalculate();

        resizeAnimationFrameId = null;
      });
    });
    this.resizeObserver.observe(this.el);
    this.resizeObserver.observe(this.contentEl);
    elWindow.requestAnimationFrame(function () {
      resizeObserverStarted = true;
    }); // This is required to detect horizontal scroll. Vertical scroll only needs the resizeObserver.

    this.mutationObserver = new elWindow.MutationObserver(this.recalculate);
    this.mutationObserver.observe(this.contentEl, {
      childList: true,
      subtree: true,
      characterData: true
    });
  };

  _proto.recalculate = function recalculate() {
    var elWindow = getElementWindow(this.el);
    this.elStyles = elWindow.getComputedStyle(this.el);
    this.isRtl = this.elStyles.direction === 'rtl';
    var isHeightAuto = this.heightAutoObserverEl.offsetHeight <= 1;
    var isWidthAuto = this.heightAutoObserverEl.offsetWidth <= 1;
    var contentElOffsetWidth = this.contentEl.offsetWidth;
    var contentWrapperElOffsetWidth = this.contentWrapperEl.offsetWidth;
    var elOverflowX = this.elStyles.overflowX;
    var elOverflowY = this.elStyles.overflowY;
    this.contentEl.style.padding = this.elStyles.paddingTop + " " + this.elStyles.paddingRight + " " + this.elStyles.paddingBottom + " " + this.elStyles.paddingLeft;
    this.wrapperEl.style.margin = "-" + this.elStyles.paddingTop + " -" + this.elStyles.paddingRight + " -" + this.elStyles.paddingBottom + " -" + this.elStyles.paddingLeft;
    var contentElScrollHeight = this.contentEl.scrollHeight;
    var contentElScrollWidth = this.contentEl.scrollWidth;
    this.contentWrapperEl.style.height = isHeightAuto ? 'auto' : '100%'; // Determine placeholder size

    this.placeholderEl.style.width = isWidthAuto ? contentElOffsetWidth + "px" : 'auto';
    this.placeholderEl.style.height = contentElScrollHeight + "px";
    var contentWrapperElOffsetHeight = this.contentWrapperEl.offsetHeight;
    this.axis.x.isOverflowing = contentElScrollWidth > contentElOffsetWidth;
    this.axis.y.isOverflowing = contentElScrollHeight > contentWrapperElOffsetHeight; // Set isOverflowing to false if user explicitely set hidden overflow

    this.axis.x.isOverflowing = elOverflowX === 'hidden' ? false : this.axis.x.isOverflowing;
    this.axis.y.isOverflowing = elOverflowY === 'hidden' ? false : this.axis.y.isOverflowing;
    this.axis.x.forceVisible = this.options.forceVisible === 'x' || this.options.forceVisible === true;
    this.axis.y.forceVisible = this.options.forceVisible === 'y' || this.options.forceVisible === true;
    this.hideNativeScrollbar(); // Set isOverflowing to false if scrollbar is not necessary (content is shorter than offset)

    var offsetForXScrollbar = this.axis.x.isOverflowing ? this.scrollbarWidth : 0;
    var offsetForYScrollbar = this.axis.y.isOverflowing ? this.scrollbarWidth : 0;
    this.axis.x.isOverflowing = this.axis.x.isOverflowing && contentElScrollWidth > contentWrapperElOffsetWidth - offsetForYScrollbar;
    this.axis.y.isOverflowing = this.axis.y.isOverflowing && contentElScrollHeight > contentWrapperElOffsetHeight - offsetForXScrollbar;
    this.axis.x.scrollbar.size = this.getScrollbarSize('x');
    this.axis.y.scrollbar.size = this.getScrollbarSize('y');
    this.axis.x.scrollbar.el.style.width = this.axis.x.scrollbar.size + "px";
    this.axis.y.scrollbar.el.style.height = this.axis.y.scrollbar.size + "px";
    this.positionScrollbar('x');
    this.positionScrollbar('y');
    this.toggleTrackVisibility('x');
    this.toggleTrackVisibility('y');
  }
  /**
   * Calculate scrollbar size
   */
  ;

  _proto.getScrollbarSize = function getScrollbarSize(axis) {
    if (axis === void 0) {
      axis = 'y';
    }

    if (!this.axis[axis].isOverflowing) {
      return 0;
    }

    var contentSize = this.contentEl[this.axis[axis].scrollSizeAttr];
    var trackSize = this.axis[axis].track.el[this.axis[axis].offsetSizeAttr];
    var scrollbarSize;
    var scrollbarRatio = trackSize / contentSize; // Calculate new height/position of drag handle.

    scrollbarSize = Math.max(~~(scrollbarRatio * trackSize), this.options.scrollbarMinSize);

    if (this.options.scrollbarMaxSize) {
      scrollbarSize = Math.min(scrollbarSize, this.options.scrollbarMaxSize);
    }

    return scrollbarSize;
  };

  _proto.positionScrollbar = function positionScrollbar(axis) {
    if (axis === void 0) {
      axis = 'y';
    }

    if (!this.axis[axis].isOverflowing) {
      return;
    }

    var contentSize = this.contentWrapperEl[this.axis[axis].scrollSizeAttr];
    var trackSize = this.axis[axis].track.el[this.axis[axis].offsetSizeAttr];
    var hostSize = parseInt(this.elStyles[this.axis[axis].sizeAttr], 10);
    var scrollbar = this.axis[axis].scrollbar;
    var scrollOffset = this.contentWrapperEl[this.axis[axis].scrollOffsetAttr];
    scrollOffset = axis === 'x' && this.isRtl && SimpleBar.getRtlHelpers().isRtlScrollingInverted ? -scrollOffset : scrollOffset;
    var scrollPourcent = scrollOffset / (contentSize - hostSize);
    var handleOffset = ~~((trackSize - scrollbar.size) * scrollPourcent);
    handleOffset = axis === 'x' && this.isRtl && SimpleBar.getRtlHelpers().isRtlScrollbarInverted ? handleOffset + (trackSize - scrollbar.size) : handleOffset;
    scrollbar.el.style.transform = axis === 'x' ? "translate3d(" + handleOffset + "px, 0, 0)" : "translate3d(0, " + handleOffset + "px, 0)";
  };

  _proto.toggleTrackVisibility = function toggleTrackVisibility(axis) {
    if (axis === void 0) {
      axis = 'y';
    }

    var track = this.axis[axis].track.el;
    var scrollbar = this.axis[axis].scrollbar.el;

    if (this.axis[axis].isOverflowing || this.axis[axis].forceVisible) {
      track.style.visibility = 'visible';
      this.contentWrapperEl.style[this.axis[axis].overflowAttr] = 'scroll';
    } else {
      track.style.visibility = 'hidden';
      this.contentWrapperEl.style[this.axis[axis].overflowAttr] = 'hidden';
    } // Even if forceVisible is enabled, scrollbar itself should be hidden


    if (this.axis[axis].isOverflowing) {
      scrollbar.style.display = 'block';
    } else {
      scrollbar.style.display = 'none';
    }
  };

  _proto.hideNativeScrollbar = function hideNativeScrollbar() {
    this.offsetEl.style[this.isRtl ? 'left' : 'right'] = this.axis.y.isOverflowing || this.axis.y.forceVisible ? "-" + this.scrollbarWidth + "px" : 0;
    this.offsetEl.style.bottom = this.axis.x.isOverflowing || this.axis.x.forceVisible ? "-" + this.scrollbarWidth + "px" : 0;
  }
  /**
   * On scroll event handling
   */
  ;

  _proto.onMouseMoveForAxis = function onMouseMoveForAxis(axis) {
    if (axis === void 0) {
      axis = 'y';
    }

    this.axis[axis].track.rect = this.axis[axis].track.el.getBoundingClientRect();
    this.axis[axis].scrollbar.rect = this.axis[axis].scrollbar.el.getBoundingClientRect();
    var isWithinScrollbarBoundsX = this.isWithinBounds(this.axis[axis].scrollbar.rect);

    if (isWithinScrollbarBoundsX) {
      this.axis[axis].scrollbar.el.classList.add(this.classNames.hover);
    } else {
      this.axis[axis].scrollbar.el.classList.remove(this.classNames.hover);
    }

    if (this.isWithinBounds(this.axis[axis].track.rect)) {
      this.showScrollbar(axis);
      this.axis[axis].track.el.classList.add(this.classNames.hover);
    } else {
      this.axis[axis].track.el.classList.remove(this.classNames.hover);
    }
  };

  _proto.onMouseLeaveForAxis = function onMouseLeaveForAxis(axis) {
    if (axis === void 0) {
      axis = 'y';
    }

    this.axis[axis].track.el.classList.remove(this.classNames.hover);
    this.axis[axis].scrollbar.el.classList.remove(this.classNames.hover);
  };

  /**
   * Show scrollbar
   */
  _proto.showScrollbar = function showScrollbar(axis) {
    if (axis === void 0) {
      axis = 'y';
    }

    var scrollbar = this.axis[axis].scrollbar.el;

    if (!this.axis[axis].isVisible) {
      scrollbar.classList.add(this.classNames.visible);
      this.axis[axis].isVisible = true;
    }

    if (this.options.autoHide) {
      this.hideScrollbars();
    }
  }
  /**
   * Hide Scrollbar
   */
  ;

  /**
   * on scrollbar handle drag movement starts
   */
  _proto.onDragStart = function onDragStart(e, axis) {
    if (axis === void 0) {
      axis = 'y';
    }

    var elDocument = getElementDocument(this.el);
    var elWindow = getElementWindow(this.el);
    var scrollbar = this.axis[axis].scrollbar; // Measure how far the user's mouse is from the top of the scrollbar drag handle.

    var eventOffset = axis === 'y' ? e.pageY : e.pageX;
    this.axis[axis].dragOffset = eventOffset - scrollbar.rect[this.axis[axis].offsetAttr];
    this.draggedAxis = axis;
    this.el.classList.add(this.classNames.dragging);
    elDocument.addEventListener('mousemove', this.drag, true);
    elDocument.addEventListener('mouseup', this.onEndDrag, true);

    if (this.removePreventClickId === null) {
      elDocument.addEventListener('click', this.preventClick, true);
      elDocument.addEventListener('dblclick', this.preventClick, true);
    } else {
      elWindow.clearTimeout(this.removePreventClickId);
      this.removePreventClickId = null;
    }
  }
  /**
   * Drag scrollbar handle
   */
  ;

  _proto.onTrackClick = function onTrackClick(e, axis) {
    var _this4 = this;

    if (axis === void 0) {
      axis = 'y';
    }

    if (!this.options.clickOnTrack) return;
    var elWindow = getElementWindow(this.el);
    this.axis[axis].scrollbar.rect = this.axis[axis].scrollbar.el.getBoundingClientRect();
    var scrollbar = this.axis[axis].scrollbar;
    var scrollbarOffset = scrollbar.rect[this.axis[axis].offsetAttr];
    var hostSize = parseInt(this.elStyles[this.axis[axis].sizeAttr], 10);
    var scrolled = this.contentWrapperEl[this.axis[axis].scrollOffsetAttr];
    var t = axis === 'y' ? this.mouseY - scrollbarOffset : this.mouseX - scrollbarOffset;
    var dir = t < 0 ? -1 : 1;
    var scrollSize = dir === -1 ? scrolled - hostSize : scrolled + hostSize;

    var scrollTo = function scrollTo() {
      if (dir === -1) {
        if (scrolled > scrollSize) {
          var _this4$contentWrapper;

          scrolled -= _this4.options.clickOnTrackSpeed;

          _this4.contentWrapperEl.scrollTo((_this4$contentWrapper = {}, _this4$contentWrapper[_this4.axis[axis].offsetAttr] = scrolled, _this4$contentWrapper));

          elWindow.requestAnimationFrame(scrollTo);
        }
      } else {
        if (scrolled < scrollSize) {
          var _this4$contentWrapper2;

          scrolled += _this4.options.clickOnTrackSpeed;

          _this4.contentWrapperEl.scrollTo((_this4$contentWrapper2 = {}, _this4$contentWrapper2[_this4.axis[axis].offsetAttr] = scrolled, _this4$contentWrapper2));

          elWindow.requestAnimationFrame(scrollTo);
        }
      }
    };

    scrollTo();
  }
  /**
   * Getter for content element
   */
  ;

  _proto.getContentElement = function getContentElement() {
    return this.contentEl;
  }
  /**
   * Getter for original scrolling element
   */
  ;

  _proto.getScrollElement = function getScrollElement() {
    return this.contentWrapperEl;
  };

  _proto.getScrollbarWidth = function getScrollbarWidth() {
    // Try/catch for FF 56 throwing on undefined computedStyles
    try {
      // Detect browsers supporting CSS scrollbar styling and do not calculate
      if (getComputedStyle(this.contentWrapperEl, '::-webkit-scrollbar').display === 'none' || 'scrollbarWidth' in document.documentElement.style || '-ms-overflow-style' in document.documentElement.style) {
        return 0;
      } else {
        return scrollbarWidth(this.el);
      }
    } catch (e) {
      return scrollbarWidth(this.el);
    }
  };

  _proto.removeListeners = function removeListeners() {
    var _this5 = this;

    var elWindow = getElementWindow(this.el); // Event listeners

    if (this.options.autoHide) {
      this.el.removeEventListener('mouseenter', this.onMouseEnter);
    }

    ['mousedown', 'click', 'dblclick'].forEach(function (e) {
      _this5.el.removeEventListener(e, _this5.onPointerEvent, true);
    });
    ['touchstart', 'touchend', 'touchmove'].forEach(function (e) {
      _this5.el.removeEventListener(e, _this5.onPointerEvent, {
        capture: true,
        passive: true
      });
    });
    this.el.removeEventListener('mousemove', this.onMouseMove);
    this.el.removeEventListener('mouseleave', this.onMouseLeave);

    if (this.contentWrapperEl) {
      this.contentWrapperEl.removeEventListener('scroll', this.onScroll);
    }

    elWindow.removeEventListener('resize', this.onWindowResize);

    if (this.mutationObserver) {
      this.mutationObserver.disconnect();
    }

    if (this.resizeObserver) {
      this.resizeObserver.disconnect();
    } // Cancel all debounced functions


    this.recalculate.cancel();
    this.onMouseMove.cancel();
    this.hideScrollbars.cancel();
    this.onWindowResize.cancel();
  }
  /**
   * UnMount mutation observer and delete SimpleBar instance from DOM element
   */
  ;

  _proto.unMount = function unMount() {
    this.removeListeners();
    SimpleBar.instances.delete(this.el);
  }
  /**
   * Check if mouse is within bounds
   */
  ;

  _proto.isWithinBounds = function isWithinBounds(bbox) {
    return this.mouseX >= bbox.left && this.mouseX <= bbox.left + bbox.width && this.mouseY >= bbox.top && this.mouseY <= bbox.top + bbox.height;
  }
  /**
   * Find element children matches query
   */
  ;

  _proto.findChild = function findChild(el, query) {
    var matches = el.matches || el.webkitMatchesSelector || el.mozMatchesSelector || el.msMatchesSelector;
    return Array.prototype.filter.call(el.children, function (child) {
      return matches.call(child, query);
    })[0];
  };

  return SimpleBar;
}();

SimpleBar.defaultOptions = {
  autoHide: true,
  forceVisible: false,
  clickOnTrack: true,
  clickOnTrackSpeed: 40,
  classNames: {
    contentEl: 'simplebar-content',
    contentWrapper: 'simplebar-content-wrapper',
    offset: 'simplebar-offset',
    mask: 'simplebar-mask',
    wrapper: 'simplebar-wrapper',
    placeholder: 'simplebar-placeholder',
    scrollbar: 'simplebar-scrollbar',
    track: 'simplebar-track',
    heightAutoObserverWrapperEl: 'simplebar-height-auto-observer-wrapper',
    heightAutoObserverEl: 'simplebar-height-auto-observer',
    visible: 'simplebar-visible',
    horizontal: 'simplebar-horizontal',
    vertical: 'simplebar-vertical',
    hover: 'simplebar-hover',
    dragging: 'simplebar-dragging'
  },
  scrollbarMinSize: 25,
  scrollbarMaxSize: 0,
  timeout: 1000
};
SimpleBar.instances = new WeakMap();

SimpleBar.initDOMLoadedElements = function () {
  document.removeEventListener('DOMContentLoaded', this.initDOMLoadedElements);
  window.removeEventListener('load', this.initDOMLoadedElements);
  Array.prototype.forEach.call(document.querySelectorAll('[data-simplebar]'), function (el) {
    if (el.getAttribute('data-simplebar') !== 'init' && !SimpleBar.instances.has(el)) new SimpleBar(el, getOptions(el.attributes));
  });
};

SimpleBar.removeObserver = function () {
  this.globalObserver.disconnect();
};

SimpleBar.initHtmlApi = function () {
  this.initDOMLoadedElements = this.initDOMLoadedElements.bind(this); // MutationObserver is IE11+

  if (typeof MutationObserver !== 'undefined') {
    // Mutation observer to observe dynamically added elements
    this.globalObserver = new MutationObserver(SimpleBar.handleMutations);
    this.globalObserver.observe(document, {
      childList: true,
      subtree: true
    });
  } // Taken from jQuery `ready` function
  // Instantiate elements already present on the page


  if (document.readyState === 'complete' || document.readyState !== 'loading' && !document.documentElement.doScroll) {
    // Handle it asynchronously to allow scripts the opportunity to delay init
    window.setTimeout(this.initDOMLoadedElements);
  } else {
    document.addEventListener('DOMContentLoaded', this.initDOMLoadedElements);
    window.addEventListener('load', this.initDOMLoadedElements);
  }
};

SimpleBar.handleMutations = function (mutations) {
  mutations.forEach(function (mutation) {
    Array.prototype.forEach.call(mutation.addedNodes, function (addedNode) {
      if (addedNode.nodeType === 1) {
        if (addedNode.hasAttribute('data-simplebar')) {
          !SimpleBar.instances.has(addedNode) && document.documentElement.contains(addedNode) && new SimpleBar(addedNode, getOptions(addedNode.attributes));
        } else {
          Array.prototype.forEach.call(addedNode.querySelectorAll('[data-simplebar]'), function (el) {
            if (el.getAttribute('data-simplebar') !== 'init' && !SimpleBar.instances.has(el) && document.documentElement.contains(el)) new SimpleBar(el, getOptions(el.attributes));
          });
        }
      }
    });
    Array.prototype.forEach.call(mutation.removedNodes, function (removedNode) {
      if (removedNode.nodeType === 1) {
        if (removedNode.getAttribute('data-simplebar') === 'init') {
          SimpleBar.instances.has(removedNode) && !document.documentElement.contains(removedNode) && SimpleBar.instances.get(removedNode).unMount();
        } else {
          Array.prototype.forEach.call(removedNode.querySelectorAll('[data-simplebar="init"]'), function (el) {
            SimpleBar.instances.has(el) && !document.documentElement.contains(el) && SimpleBar.instances.get(el).unMount();
          });
        }
      }
    });
  });
};

SimpleBar.getOptions = getOptions;
/**
 * HTML API
 * Called only in a browser env.
 */

if ((can_use_dom__WEBPACK_IMPORTED_MODULE_2___default())) {
  SimpleBar.initHtmlApi();
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SimpleBar);
//# sourceMappingURL=simplebar.esm.js.map


/***/ }),

/***/ "./resources/js/components/footer.vue":
/*!********************************************!*\
  !*** ./resources/js/components/footer.vue ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _footer_vue_vue_type_template_id_585a4226___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./footer.vue?vue&type=template&id=585a4226& */ "./resources/js/components/footer.vue?vue&type=template&id=585a4226&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}


/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  script,
  _footer_vue_vue_type_template_id_585a4226___WEBPACK_IMPORTED_MODULE_0__.render,
  _footer_vue_vue_type_template_id_585a4226___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/footer.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/right-sidebar.vue":
/*!***************************************************!*\
  !*** ./resources/js/components/right-sidebar.vue ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _right_sidebar_vue_vue_type_template_id_96433a20_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./right-sidebar.vue?vue&type=template&id=96433a20&scoped=true& */ "./resources/js/components/right-sidebar.vue?vue&type=template&id=96433a20&scoped=true&");
/* harmony import */ var _right_sidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./right-sidebar.vue?vue&type=script&lang=js& */ "./resources/js/components/right-sidebar.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _right_sidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _right_sidebar_vue_vue_type_template_id_96433a20_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _right_sidebar_vue_vue_type_template_id_96433a20_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "96433a20",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/right-sidebar.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/side-bar.vue":
/*!**********************************************!*\
  !*** ./resources/js/components/side-bar.vue ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _side_bar_vue_vue_type_template_id_9d4b1530_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./side-bar.vue?vue&type=template&id=9d4b1530&scoped=true& */ "./resources/js/components/side-bar.vue?vue&type=template&id=9d4b1530&scoped=true&");
/* harmony import */ var _side_bar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./side-bar.vue?vue&type=script&lang=js& */ "./resources/js/components/side-bar.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _side_bar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _side_bar_vue_vue_type_template_id_9d4b1530_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _side_bar_vue_vue_type_template_id_9d4b1530_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "9d4b1530",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/side-bar.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/topbar.vue":
/*!********************************************!*\
  !*** ./resources/js/components/topbar.vue ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _topbar_vue_vue_type_template_id_5d3c11a9___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./topbar.vue?vue&type=template&id=5d3c11a9& */ "./resources/js/components/topbar.vue?vue&type=template&id=5d3c11a9&");
/* harmony import */ var _topbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./topbar.vue?vue&type=script&lang=js& */ "./resources/js/components/topbar.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _topbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _topbar_vue_vue_type_template_id_5d3c11a9___WEBPACK_IMPORTED_MODULE_0__.render,
  _topbar_vue_vue_type_template_id_5d3c11a9___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/topbar.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/layouts/main.vue":
/*!*********************************************!*\
  !*** ./resources/js/views/layouts/main.vue ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _main_vue_vue_type_template_id_de3c3304___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.vue?vue&type=template&id=de3c3304& */ "./resources/js/views/layouts/main.vue?vue&type=template&id=de3c3304&");
/* harmony import */ var _main_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main.vue?vue&type=script&lang=js& */ "./resources/js/views/layouts/main.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _main_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _main_vue_vue_type_template_id_de3c3304___WEBPACK_IMPORTED_MODULE_0__.render,
  _main_vue_vue_type_template_id_de3c3304___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/layouts/main.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/right-sidebar.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/components/right-sidebar.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_right_sidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./right-sidebar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/right-sidebar.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_right_sidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/side-bar.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/components/side-bar.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_side_bar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./side-bar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/side-bar.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_side_bar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/topbar.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./resources/js/components/topbar.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_topbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./topbar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/topbar.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_topbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/layouts/main.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./resources/js/views/layouts/main.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_main_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./main.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/layouts/main.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_main_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/footer.vue?vue&type=template&id=585a4226&":
/*!***************************************************************************!*\
  !*** ./resources/js/components/footer.vue?vue&type=template&id=585a4226& ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_footer_vue_vue_type_template_id_585a4226___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_footer_vue_vue_type_template_id_585a4226___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_footer_vue_vue_type_template_id_585a4226___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./footer.vue?vue&type=template&id=585a4226& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/footer.vue?vue&type=template&id=585a4226&");


/***/ }),

/***/ "./resources/js/components/right-sidebar.vue?vue&type=template&id=96433a20&scoped=true&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/components/right-sidebar.vue?vue&type=template&id=96433a20&scoped=true& ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_right_sidebar_vue_vue_type_template_id_96433a20_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_right_sidebar_vue_vue_type_template_id_96433a20_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_right_sidebar_vue_vue_type_template_id_96433a20_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./right-sidebar.vue?vue&type=template&id=96433a20&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/right-sidebar.vue?vue&type=template&id=96433a20&scoped=true&");


/***/ }),

/***/ "./resources/js/components/side-bar.vue?vue&type=template&id=9d4b1530&scoped=true&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/side-bar.vue?vue&type=template&id=9d4b1530&scoped=true& ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_side_bar_vue_vue_type_template_id_9d4b1530_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_side_bar_vue_vue_type_template_id_9d4b1530_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_side_bar_vue_vue_type_template_id_9d4b1530_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./side-bar.vue?vue&type=template&id=9d4b1530&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/side-bar.vue?vue&type=template&id=9d4b1530&scoped=true&");


/***/ }),

/***/ "./resources/js/components/topbar.vue?vue&type=template&id=5d3c11a9&":
/*!***************************************************************************!*\
  !*** ./resources/js/components/topbar.vue?vue&type=template&id=5d3c11a9& ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_topbar_vue_vue_type_template_id_5d3c11a9___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_topbar_vue_vue_type_template_id_5d3c11a9___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_topbar_vue_vue_type_template_id_5d3c11a9___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./topbar.vue?vue&type=template&id=5d3c11a9& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/topbar.vue?vue&type=template&id=5d3c11a9&");


/***/ }),

/***/ "./resources/js/views/layouts/main.vue?vue&type=template&id=de3c3304&":
/*!****************************************************************************!*\
  !*** ./resources/js/views/layouts/main.vue?vue&type=template&id=de3c3304& ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_main_vue_vue_type_template_id_de3c3304___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_main_vue_vue_type_template_id_de3c3304___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_main_vue_vue_type_template_id_de3c3304___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./main.vue?vue&type=template&id=de3c3304& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/layouts/main.vue?vue&type=template&id=de3c3304&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/footer.vue?vue&type=template&id=585a4226&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/footer.vue?vue&type=template&id=585a4226& ***!
  \******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm._m(0)
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("footer", { staticClass: "footer" }, [
      _c("div", { staticClass: "container-fluid" }, [
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-sm-6" }, [
            _vm._v("\n        2020 © Nazox.\n      "),
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-sm-6" }, [
            _c("div", { staticClass: "text-sm-right d-none d-sm-block" }, [
              _vm._v("\n          Crafted with\n          "),
              _c("i", { staticClass: "mdi mdi-heart text-danger" }),
              _vm._v(" by Themesdesign\n        "),
            ]),
          ]),
        ]),
      ]),
    ])
  },
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/right-sidebar.vue?vue&type=template&id=96433a20&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/right-sidebar.vue?vue&type=template&id=96433a20&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div")
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/side-bar.vue?vue&type=template&id=9d4b1530&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/side-bar.vue?vue&type=template&id=9d4b1530&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm._m(0)
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "vertical-menu mm-active" }, [
      _c(
        "div",
        { staticClass: "h-100 mm-show", attrs: { "data-simplebar": "init" } },
        [
          _c(
            "div",
            {
              staticClass: "simplebar-wrapper",
              staticStyle: { margin: "0px" },
            },
            [
              _c(
                "div",
                { staticClass: "simplebar-height-auto-observer-wrapper" },
                [_c("div", { staticClass: "simplebar-height-auto-observer" })]
              ),
              _c("div", { staticClass: "simplebar-mask" }, [
                _c(
                  "div",
                  {
                    staticClass: "simplebar-offset",
                    staticStyle: { right: "-16.6667px", bottom: "0px" },
                  },
                  [
                    _c(
                      "div",
                      {
                        staticClass: "simplebar-content-wrapper",
                        staticStyle: {
                          height: "100%",
                          overflow: "hidden scroll",
                        },
                      },
                      [
                        _c(
                          "div",
                          {
                            staticClass: "simplebar-content",
                            staticStyle: { padding: "0px" },
                          },
                          [
                            _c(
                              "div",
                              {
                                staticClass: "mm-active",
                                attrs: { id: "sidebar-menu" },
                              },
                              [
                                _c(
                                  "ul",
                                  {
                                    staticClass:
                                      "metismenu list-unstyled mm-show",
                                    attrs: { id: "side-menu" },
                                  },
                                  [
                                    _c("li", { staticClass: "menu-title" }, [
                                      _vm._v("Menu"),
                                    ]),
                                    _vm._v(" "),
                                    _c("li", { staticClass: "mm-active" }, [
                                      _c(
                                        "a",
                                        {
                                          staticClass: "waves-effect active",
                                          attrs: { href: "index.html" },
                                        },
                                        [
                                          _c("i", {
                                            staticClass: "ri-dashboard-line",
                                          }),
                                          _c(
                                            "span",
                                            {
                                              staticClass:
                                                "badge badge-pill badge-success float-right",
                                            },
                                            [_vm._v("3")]
                                          ),
                                          _vm._v(" "),
                                          _c("span", [_vm._v("Dashboard")]),
                                        ]
                                      ),
                                    ]),
                                    _vm._v(" "),
                                    _c("li", [
                                      _c(
                                        "a",
                                        {
                                          staticClass: "waves-effect",
                                          attrs: { href: "calendar.html" },
                                        },
                                        [
                                          _c("i", {
                                            staticClass: "ri-calendar-2-line",
                                          }),
                                          _vm._v(" "),
                                          _c("span", [_vm._v("Calendar")]),
                                        ]
                                      ),
                                    ]),
                                    _vm._v(" "),
                                    _c("li", [
                                      _c(
                                        "a",
                                        {
                                          staticClass: "waves-effect",
                                          attrs: { href: "apps-chat.html" },
                                        },
                                        [
                                          _c("i", {
                                            staticClass: "ri-chat-1-line",
                                          }),
                                          _vm._v(" "),
                                          _c("span", [_vm._v("Chat")]),
                                        ]
                                      ),
                                    ]),
                                    _vm._v(" "),
                                    _c("li", [
                                      _c(
                                        "a",
                                        {
                                          staticClass: "has-arrow waves-effect",
                                          attrs: {
                                            href: "javascript: void(0);",
                                          },
                                        },
                                        [
                                          _c("i", {
                                            staticClass: "ri-store-2-line",
                                          }),
                                          _vm._v(" "),
                                          _c("span", [_vm._v("Ecommerce")]),
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "ul",
                                        {
                                          staticClass: "sub-menu mm-collapse",
                                          attrs: { "aria-expanded": "false" },
                                        },
                                        [
                                          _c("li", [
                                            _c(
                                              "a",
                                              {
                                                attrs: {
                                                  href: "ecommerce-products.html",
                                                },
                                              },
                                              [_vm._v("Products")]
                                            ),
                                          ]),
                                          _vm._v(" "),
                                          _c("li", [
                                            _c(
                                              "a",
                                              {
                                                attrs: {
                                                  href: "ecommerce-product-detail.html",
                                                },
                                              },
                                              [_vm._v("Product Detail")]
                                            ),
                                          ]),
                                          _vm._v(" "),
                                          _c("li", [
                                            _c(
                                              "a",
                                              {
                                                attrs: {
                                                  href: "ecommerce-orders.html",
                                                },
                                              },
                                              [_vm._v("Orders")]
                                            ),
                                          ]),
                                          _vm._v(" "),
                                          _c("li", [
                                            _c(
                                              "a",
                                              {
                                                attrs: {
                                                  href: "ecommerce-customers.html",
                                                },
                                              },
                                              [_vm._v("Customers")]
                                            ),
                                          ]),
                                          _vm._v(" "),
                                          _c("li", [
                                            _c(
                                              "a",
                                              {
                                                attrs: {
                                                  href: "ecommerce-cart.html",
                                                },
                                              },
                                              [_vm._v("Cart")]
                                            ),
                                          ]),
                                          _vm._v(" "),
                                          _c("li", [
                                            _c(
                                              "a",
                                              {
                                                attrs: {
                                                  href: "ecommerce-checkout.html",
                                                },
                                              },
                                              [_vm._v("Checkout")]
                                            ),
                                          ]),
                                          _vm._v(" "),
                                          _c("li", [
                                            _c(
                                              "a",
                                              {
                                                attrs: {
                                                  href: "ecommerce-shops.html",
                                                },
                                              },
                                              [_vm._v("Shops")]
                                            ),
                                          ]),
                                          _vm._v(" "),
                                          _c("li", [
                                            _c(
                                              "a",
                                              {
                                                attrs: {
                                                  href: "ecommerce-add-product.html",
                                                },
                                              },
                                              [_vm._v("Add Product")]
                                            ),
                                          ]),
                                        ]
                                      ),
                                    ]),
                                    _vm._v(" "),
                                    _c("li", [
                                      _c(
                                        "a",
                                        {
                                          staticClass: "has-arrow waves-effect",
                                          attrs: {
                                            href: "javascript: void(0);",
                                          },
                                        },
                                        [
                                          _c("i", {
                                            staticClass: "ri-mail-send-line",
                                          }),
                                          _vm._v(" "),
                                          _c("span", [_vm._v("Email")]),
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "ul",
                                        {
                                          staticClass: "sub-menu mm-collapse",
                                          attrs: { "aria-expanded": "false" },
                                        },
                                        [
                                          _c("li", [
                                            _c(
                                              "a",
                                              {
                                                attrs: {
                                                  href: "email-inbox.html",
                                                },
                                              },
                                              [_vm._v("Inbox")]
                                            ),
                                          ]),
                                          _vm._v(" "),
                                          _c("li", [
                                            _c(
                                              "a",
                                              {
                                                attrs: {
                                                  href: "email-read.html",
                                                },
                                              },
                                              [_vm._v("Read Email")]
                                            ),
                                          ]),
                                        ]
                                      ),
                                    ]),
                                    _vm._v(" "),
                                    _c("li", [
                                      _c(
                                        "a",
                                        {
                                          staticClass: "waves-effect",
                                          attrs: {
                                            href: "apps-kanban-board.html",
                                          },
                                        },
                                        [
                                          _c("i", {
                                            staticClass: "ri-artboard-2-line",
                                          }),
                                          _vm._v(" "),
                                          _c("span", [_vm._v("Kanban Board")]),
                                        ]
                                      ),
                                    ]),
                                    _vm._v(" "),
                                    _c("li", [
                                      _c(
                                        "a",
                                        {
                                          staticClass: "has-arrow waves-effect",
                                          attrs: {
                                            href: "javascript: void(0);",
                                          },
                                        },
                                        [
                                          _c("i", {
                                            staticClass: "ri-layout-3-line",
                                          }),
                                          _vm._v(" "),
                                          _c("span", [_vm._v("Layouts")]),
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "ul",
                                        {
                                          staticClass: "sub-menu mm-collapse",
                                          attrs: { "aria-expanded": "false" },
                                        },
                                        [
                                          _c("li", [
                                            _c(
                                              "a",
                                              {
                                                attrs: {
                                                  href: "layouts-horizontal.html",
                                                },
                                              },
                                              [_vm._v("Horizontal")]
                                            ),
                                          ]),
                                          _vm._v(" "),
                                          _c("li", [
                                            _c(
                                              "a",
                                              {
                                                attrs: {
                                                  href: "layouts-light-sidebar.html",
                                                },
                                              },
                                              [_vm._v("Light Sidebar")]
                                            ),
                                          ]),
                                          _vm._v(" "),
                                          _c("li", [
                                            _c(
                                              "a",
                                              {
                                                attrs: {
                                                  href: "layouts-compact-sidebar.html",
                                                },
                                              },
                                              [_vm._v("Compact Sidebar")]
                                            ),
                                          ]),
                                          _vm._v(" "),
                                          _c("li", [
                                            _c(
                                              "a",
                                              {
                                                attrs: {
                                                  href: "layouts-icon-sidebar.html",
                                                },
                                              },
                                              [_vm._v("Icon Sidebar")]
                                            ),
                                          ]),
                                          _vm._v(" "),
                                          _c("li", [
                                            _c(
                                              "a",
                                              {
                                                attrs: {
                                                  href: "layouts-boxed.html",
                                                },
                                              },
                                              [_vm._v("Boxed Layout")]
                                            ),
                                          ]),
                                          _vm._v(" "),
                                          _c("li", [
                                            _c(
                                              "a",
                                              {
                                                attrs: {
                                                  href: "layouts-preloader.html",
                                                },
                                              },
                                              [_vm._v("Preloader")]
                                            ),
                                          ]),
                                        ]
                                      ),
                                    ]),
                                    _vm._v(" "),
                                    _c("li", { staticClass: "menu-title" }, [
                                      _vm._v("Pages"),
                                    ]),
                                    _vm._v(" "),
                                    _c("li", [
                                      _c(
                                        "a",
                                        {
                                          staticClass: "has-arrow waves-effect",
                                          attrs: {
                                            href: "javascript: void(0);",
                                          },
                                        },
                                        [
                                          _c("i", {
                                            staticClass:
                                              "ri-account-circle-line",
                                          }),
                                          _vm._v(" "),
                                          _c("span", [
                                            _vm._v("Authentication"),
                                          ]),
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "ul",
                                        {
                                          staticClass: "sub-menu mm-collapse",
                                          attrs: { "aria-expanded": "false" },
                                        },
                                        [
                                          _c("li", [
                                            _c(
                                              "a",
                                              {
                                                attrs: {
                                                  href: "auth-login.html",
                                                },
                                              },
                                              [_vm._v("Login")]
                                            ),
                                          ]),
                                          _vm._v(" "),
                                          _c("li", [
                                            _c(
                                              "a",
                                              {
                                                attrs: {
                                                  href: "auth-register.html",
                                                },
                                              },
                                              [_vm._v("Register")]
                                            ),
                                          ]),
                                          _vm._v(" "),
                                          _c("li", [
                                            _c(
                                              "a",
                                              {
                                                attrs: {
                                                  href: "auth-recoverpw.html",
                                                },
                                              },
                                              [_vm._v("Recover Password")]
                                            ),
                                          ]),
                                          _vm._v(" "),
                                          _c("li", [
                                            _c(
                                              "a",
                                              {
                                                attrs: {
                                                  href: "auth-lock-screen.html",
                                                },
                                              },
                                              [_vm._v("Lock Screen")]
                                            ),
                                          ]),
                                        ]
                                      ),
                                    ]),
                                    _vm._v(" "),
                                    _c("li", [
                                      _c(
                                        "a",
                                        {
                                          staticClass: "has-arrow waves-effect",
                                          attrs: {
                                            href: "javascript: void(0);",
                                          },
                                        },
                                        [
                                          _c("i", {
                                            staticClass: "ri-profile-line",
                                          }),
                                          _vm._v(" "),
                                          _c("span", [_vm._v("Utility")]),
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "ul",
                                        {
                                          staticClass: "sub-menu mm-collapse",
                                          attrs: { "aria-expanded": "false" },
                                        },
                                        [
                                          _c("li", [
                                            _c(
                                              "a",
                                              {
                                                attrs: {
                                                  href: "pages-starter.html",
                                                },
                                              },
                                              [_vm._v("Starter Page")]
                                            ),
                                          ]),
                                          _vm._v(" "),
                                          _c("li", [
                                            _c(
                                              "a",
                                              {
                                                attrs: {
                                                  href: "pages-maintenance.html",
                                                },
                                              },
                                              [_vm._v("Maintenance")]
                                            ),
                                          ]),
                                          _vm._v(" "),
                                          _c("li", [
                                            _c(
                                              "a",
                                              {
                                                attrs: {
                                                  href: "pages-comingsoon.html",
                                                },
                                              },
                                              [_vm._v("Coming Soon")]
                                            ),
                                          ]),
                                          _vm._v(" "),
                                          _c("li", [
                                            _c(
                                              "a",
                                              {
                                                attrs: {
                                                  href: "pages-timeline.html",
                                                },
                                              },
                                              [_vm._v("Timeline")]
                                            ),
                                          ]),
                                          _vm._v(" "),
                                          _c("li", [
                                            _c(
                                              "a",
                                              {
                                                attrs: {
                                                  href: "pages-faqs.html",
                                                },
                                              },
                                              [_vm._v("FAQs")]
                                            ),
                                          ]),
                                          _vm._v(" "),
                                          _c("li", [
                                            _c(
                                              "a",
                                              {
                                                attrs: {
                                                  href: "pages-pricing.html",
                                                },
                                              },
                                              [_vm._v("Pricing")]
                                            ),
                                          ]),
                                          _vm._v(" "),
                                          _c("li", [
                                            _c(
                                              "a",
                                              {
                                                attrs: {
                                                  href: "pages-404.html",
                                                },
                                              },
                                              [_vm._v("Error 404")]
                                            ),
                                          ]),
                                          _vm._v(" "),
                                          _c("li", [
                                            _c(
                                              "a",
                                              {
                                                attrs: {
                                                  href: "pages-500.html",
                                                },
                                              },
                                              [_vm._v("Error 500")]
                                            ),
                                          ]),
                                        ]
                                      ),
                                    ]),
                                    _vm._v(" "),
                                    _c("li", { staticClass: "menu-title" }, [
                                      _vm._v("Components"),
                                    ]),
                                    _vm._v(" "),
                                    _c("li", [
                                      _c(
                                        "a",
                                        {
                                          staticClass: "has-arrow waves-effect",
                                          attrs: {
                                            href: "javascript: void(0);",
                                          },
                                        },
                                        [
                                          _c("i", {
                                            staticClass:
                                              "ri-pencil-ruler-2-line",
                                          }),
                                          _vm._v(" "),
                                          _c("span", [_vm._v("UI Elements")]),
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "ul",
                                        {
                                          staticClass: "sub-menu mm-collapse",
                                          attrs: { "aria-expanded": "false" },
                                        },
                                        [
                                          _c("li", [
                                            _c(
                                              "a",
                                              {
                                                attrs: {
                                                  href: "ui-alerts.html",
                                                },
                                              },
                                              [_vm._v("Alerts")]
                                            ),
                                          ]),
                                          _vm._v(" "),
                                          _c("li", [
                                            _c(
                                              "a",
                                              {
                                                attrs: {
                                                  href: "ui-buttons.html",
                                                },
                                              },
                                              [_vm._v("Buttons")]
                                            ),
                                          ]),
                                          _vm._v(" "),
                                          _c("li", [
                                            _c(
                                              "a",
                                              {
                                                attrs: {
                                                  href: "ui-cards.html",
                                                },
                                              },
                                              [_vm._v("Cards")]
                                            ),
                                          ]),
                                          _vm._v(" "),
                                          _c("li", [
                                            _c(
                                              "a",
                                              {
                                                attrs: {
                                                  href: "ui-carousel.html",
                                                },
                                              },
                                              [_vm._v("Carousel")]
                                            ),
                                          ]),
                                          _vm._v(" "),
                                          _c("li", [
                                            _c(
                                              "a",
                                              {
                                                attrs: {
                                                  href: "ui-dropdowns.html",
                                                },
                                              },
                                              [_vm._v("Dropdowns")]
                                            ),
                                          ]),
                                          _vm._v(" "),
                                          _c("li", [
                                            _c(
                                              "a",
                                              {
                                                attrs: { href: "ui-grid.html" },
                                              },
                                              [_vm._v("Grid")]
                                            ),
                                          ]),
                                          _vm._v(" "),
                                          _c("li", [
                                            _c(
                                              "a",
                                              {
                                                attrs: {
                                                  href: "ui-images.html",
                                                },
                                              },
                                              [_vm._v("Images")]
                                            ),
                                          ]),
                                          _vm._v(" "),
                                          _c("li", [
                                            _c(
                                              "a",
                                              {
                                                attrs: {
                                                  href: "ui-lightbox.html",
                                                },
                                              },
                                              [_vm._v("Lightbox")]
                                            ),
                                          ]),
                                          _vm._v(" "),
                                          _c("li", [
                                            _c(
                                              "a",
                                              {
                                                attrs: {
                                                  href: "ui-modals.html",
                                                },
                                              },
                                              [_vm._v("Modals")]
                                            ),
                                          ]),
                                          _vm._v(" "),
                                          _c("li", [
                                            _c(
                                              "a",
                                              {
                                                attrs: {
                                                  href: "ui-rangeslider.html",
                                                },
                                              },
                                              [_vm._v("Range Slider")]
                                            ),
                                          ]),
                                          _vm._v(" "),
                                          _c("li", [
                                            _c(
                                              "a",
                                              {
                                                attrs: {
                                                  href: "ui-roundslider.html",
                                                },
                                              },
                                              [_vm._v("Round Slider")]
                                            ),
                                          ]),
                                          _vm._v(" "),
                                          _c("li", [
                                            _c(
                                              "a",
                                              {
                                                attrs: {
                                                  href: "ui-session-timeout.html",
                                                },
                                              },
                                              [_vm._v("Session Timeout")]
                                            ),
                                          ]),
                                          _vm._v(" "),
                                          _c("li", [
                                            _c(
                                              "a",
                                              {
                                                attrs: {
                                                  href: "ui-progressbars.html",
                                                },
                                              },
                                              [_vm._v("Progress Bars")]
                                            ),
                                          ]),
                                          _vm._v(" "),
                                          _c("li", [
                                            _c(
                                              "a",
                                              {
                                                attrs: {
                                                  href: "ui-sweet-alert.html",
                                                },
                                              },
                                              [_vm._v("Sweet Alerts")]
                                            ),
                                          ]),
                                          _vm._v(" "),
                                          _c("li", [
                                            _c(
                                              "a",
                                              {
                                                attrs: {
                                                  href: "ui-tabs-accordions.html",
                                                },
                                              },
                                              [_vm._v("Tabs & Accordions")]
                                            ),
                                          ]),
                                          _vm._v(" "),
                                          _c("li", [
                                            _c(
                                              "a",
                                              {
                                                attrs: {
                                                  href: "ui-typography.html",
                                                },
                                              },
                                              [_vm._v("Typography")]
                                            ),
                                          ]),
                                          _vm._v(" "),
                                          _c("li", [
                                            _c(
                                              "a",
                                              {
                                                attrs: {
                                                  href: "ui-video.html",
                                                },
                                              },
                                              [_vm._v("Video")]
                                            ),
                                          ]),
                                          _vm._v(" "),
                                          _c("li", [
                                            _c(
                                              "a",
                                              {
                                                attrs: {
                                                  href: "ui-general.html",
                                                },
                                              },
                                              [_vm._v("General")]
                                            ),
                                          ]),
                                          _vm._v(" "),
                                          _c("li", [
                                            _c(
                                              "a",
                                              {
                                                attrs: {
                                                  href: "ui-rating.html",
                                                },
                                              },
                                              [_vm._v("Rating")]
                                            ),
                                          ]),
                                          _vm._v(" "),
                                          _c("li", [
                                            _c(
                                              "a",
                                              {
                                                attrs: {
                                                  href: "ui-notifications.html",
                                                },
                                              },
                                              [_vm._v("Notifications")]
                                            ),
                                          ]),
                                        ]
                                      ),
                                    ]),
                                    _vm._v(" "),
                                    _c("li", [
                                      _c(
                                        "a",
                                        {
                                          staticClass: "waves-effect",
                                          attrs: {
                                            href: "javascript: void(0);",
                                          },
                                        },
                                        [
                                          _c("i", {
                                            staticClass: "ri-eraser-fill",
                                          }),
                                          _vm._v(" "),
                                          _c(
                                            "span",
                                            {
                                              staticClass:
                                                "badge badge-pill badge-danger float-right",
                                            },
                                            [_vm._v("6")]
                                          ),
                                          _vm._v(" "),
                                          _c("span", [_vm._v("Forms")]),
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "ul",
                                        {
                                          staticClass: "sub-menu mm-collapse",
                                          attrs: { "aria-expanded": "false" },
                                        },
                                        [
                                          _c("li", [
                                            _c(
                                              "a",
                                              {
                                                attrs: {
                                                  href: "form-elements.html",
                                                },
                                              },
                                              [_vm._v("Elements")]
                                            ),
                                          ]),
                                          _vm._v(" "),
                                          _c("li", [
                                            _c(
                                              "a",
                                              {
                                                attrs: {
                                                  href: "form-validation.html",
                                                },
                                              },
                                              [_vm._v("Validation")]
                                            ),
                                          ]),
                                          _vm._v(" "),
                                          _c("li", [
                                            _c(
                                              "a",
                                              {
                                                attrs: {
                                                  href: "form-advanced.html",
                                                },
                                              },
                                              [_vm._v("Advanced Plugins")]
                                            ),
                                          ]),
                                          _vm._v(" "),
                                          _c("li", [
                                            _c(
                                              "a",
                                              {
                                                attrs: {
                                                  href: "form-editors.html",
                                                },
                                              },
                                              [_vm._v("Editors")]
                                            ),
                                          ]),
                                          _vm._v(" "),
                                          _c("li", [
                                            _c(
                                              "a",
                                              {
                                                attrs: {
                                                  href: "form-uploads.html",
                                                },
                                              },
                                              [_vm._v("File Upload")]
                                            ),
                                          ]),
                                          _vm._v(" "),
                                          _c("li", [
                                            _c(
                                              "a",
                                              {
                                                attrs: {
                                                  href: "form-xeditable.html",
                                                },
                                              },
                                              [_vm._v("X-editable")]
                                            ),
                                          ]),
                                          _vm._v(" "),
                                          _c("li", [
                                            _c(
                                              "a",
                                              {
                                                attrs: {
                                                  href: "form-wizard.html",
                                                },
                                              },
                                              [_vm._v("Wizard")]
                                            ),
                                          ]),
                                          _vm._v(" "),
                                          _c("li", [
                                            _c(
                                              "a",
                                              {
                                                attrs: {
                                                  href: "form-mask.html",
                                                },
                                              },
                                              [_vm._v("Mask")]
                                            ),
                                          ]),
                                        ]
                                      ),
                                    ]),
                                    _vm._v(" "),
                                    _c("li", [
                                      _c(
                                        "a",
                                        {
                                          staticClass: "has-arrow waves-effect",
                                          attrs: {
                                            href: "javascript: void(0);",
                                          },
                                        },
                                        [
                                          _c("i", {
                                            staticClass: "ri-table-2",
                                          }),
                                          _vm._v(" "),
                                          _c("span", [_vm._v("Tables")]),
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "ul",
                                        {
                                          staticClass: "sub-menu mm-collapse",
                                          attrs: { "aria-expanded": "false" },
                                        },
                                        [
                                          _c("li", [
                                            _c(
                                              "a",
                                              {
                                                attrs: {
                                                  href: "tables-basic.html",
                                                },
                                              },
                                              [_vm._v("Basic Tables")]
                                            ),
                                          ]),
                                          _vm._v(" "),
                                          _c("li", [
                                            _c(
                                              "a",
                                              {
                                                attrs: {
                                                  href: "tables-datatable.html",
                                                },
                                              },
                                              [_vm._v("Data Tables")]
                                            ),
                                          ]),
                                          _vm._v(" "),
                                          _c("li", [
                                            _c(
                                              "a",
                                              {
                                                attrs: {
                                                  href: "tables-responsive.html",
                                                },
                                              },
                                              [_vm._v("Responsive Table")]
                                            ),
                                          ]),
                                          _vm._v(" "),
                                          _c("li", [
                                            _c(
                                              "a",
                                              {
                                                attrs: {
                                                  href: "tables-editable.html",
                                                },
                                              },
                                              [_vm._v("Editable Table")]
                                            ),
                                          ]),
                                        ]
                                      ),
                                    ]),
                                    _vm._v(" "),
                                    _c("li", [
                                      _c(
                                        "a",
                                        {
                                          staticClass: "has-arrow waves-effect",
                                          attrs: {
                                            href: "javascript: void(0);",
                                          },
                                        },
                                        [
                                          _c("i", {
                                            staticClass: "ri-bar-chart-line",
                                          }),
                                          _vm._v(" "),
                                          _c("span", [_vm._v("Charts")]),
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "ul",
                                        {
                                          staticClass: "sub-menu mm-collapse",
                                          attrs: { "aria-expanded": "false" },
                                        },
                                        [
                                          _c("li", [
                                            _c(
                                              "a",
                                              {
                                                attrs: {
                                                  href: "charts-apex.html",
                                                },
                                              },
                                              [_vm._v("Apexcharts")]
                                            ),
                                          ]),
                                          _vm._v(" "),
                                          _c("li", [
                                            _c(
                                              "a",
                                              {
                                                attrs: {
                                                  href: "charts-chartjs.html",
                                                },
                                              },
                                              [_vm._v("Chartjs")]
                                            ),
                                          ]),
                                          _vm._v(" "),
                                          _c("li", [
                                            _c(
                                              "a",
                                              {
                                                attrs: {
                                                  href: "charts-flot.html",
                                                },
                                              },
                                              [_vm._v("Flot")]
                                            ),
                                          ]),
                                          _vm._v(" "),
                                          _c("li", [
                                            _c(
                                              "a",
                                              {
                                                attrs: {
                                                  href: "charts-knob.html",
                                                },
                                              },
                                              [_vm._v("Jquery Knob")]
                                            ),
                                          ]),
                                          _vm._v(" "),
                                          _c("li", [
                                            _c(
                                              "a",
                                              {
                                                attrs: {
                                                  href: "charts-sparkline.html",
                                                },
                                              },
                                              [_vm._v("Sparkline")]
                                            ),
                                          ]),
                                        ]
                                      ),
                                    ]),
                                    _vm._v(" "),
                                    _c("li", [
                                      _c(
                                        "a",
                                        {
                                          staticClass: "has-arrow waves-effect",
                                          attrs: {
                                            href: "javascript: void(0);",
                                          },
                                        },
                                        [
                                          _c("i", {
                                            staticClass: "ri-brush-line",
                                          }),
                                          _vm._v(" "),
                                          _c("span", [_vm._v("Icons")]),
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "ul",
                                        {
                                          staticClass: "sub-menu mm-collapse",
                                          attrs: { "aria-expanded": "false" },
                                        },
                                        [
                                          _c("li", [
                                            _c(
                                              "a",
                                              {
                                                attrs: {
                                                  href: "icons-remix.html",
                                                },
                                              },
                                              [_vm._v("Remix Icons")]
                                            ),
                                          ]),
                                          _vm._v(" "),
                                          _c("li", [
                                            _c(
                                              "a",
                                              {
                                                attrs: {
                                                  href: "icons-materialdesign.html",
                                                },
                                              },
                                              [_vm._v("Material Design")]
                                            ),
                                          ]),
                                          _vm._v(" "),
                                          _c("li", [
                                            _c(
                                              "a",
                                              {
                                                attrs: {
                                                  href: "icons-dripicons.html",
                                                },
                                              },
                                              [_vm._v("Dripicons")]
                                            ),
                                          ]),
                                          _vm._v(" "),
                                          _c("li", [
                                            _c(
                                              "a",
                                              {
                                                attrs: {
                                                  href: "icons-fontawesome.html",
                                                },
                                              },
                                              [_vm._v("Font awesome 5")]
                                            ),
                                          ]),
                                        ]
                                      ),
                                    ]),
                                    _vm._v(" "),
                                    _c("li", [
                                      _c(
                                        "a",
                                        {
                                          staticClass: "has-arrow waves-effect",
                                          attrs: {
                                            href: "javascript: void(0);",
                                          },
                                        },
                                        [
                                          _c("i", {
                                            staticClass: "ri-map-pin-line",
                                          }),
                                          _vm._v(" "),
                                          _c("span", [_vm._v("Maps")]),
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "ul",
                                        {
                                          staticClass: "sub-menu mm-collapse",
                                          attrs: { "aria-expanded": "false" },
                                        },
                                        [
                                          _c("li", [
                                            _c(
                                              "a",
                                              {
                                                attrs: {
                                                  href: "maps-google.html",
                                                },
                                              },
                                              [_vm._v("Google Maps")]
                                            ),
                                          ]),
                                          _vm._v(" "),
                                          _c("li", [
                                            _c(
                                              "a",
                                              {
                                                attrs: {
                                                  href: "maps-vector.html",
                                                },
                                              },
                                              [_vm._v("Vector Maps")]
                                            ),
                                          ]),
                                        ]
                                      ),
                                    ]),
                                    _vm._v(" "),
                                    _c("li", [
                                      _c(
                                        "a",
                                        {
                                          staticClass: "has-arrow waves-effect",
                                          attrs: {
                                            href: "javascript: void(0);",
                                          },
                                        },
                                        [
                                          _c("i", {
                                            staticClass: "ri-share-line",
                                          }),
                                          _vm._v(" "),
                                          _c("span", [_vm._v("Multi Level")]),
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "ul",
                                        {
                                          staticClass: "sub-menu mm-collapse",
                                          attrs: { "aria-expanded": "true" },
                                        },
                                        [
                                          _c("li", [
                                            _c(
                                              "a",
                                              {
                                                attrs: {
                                                  href: "javascript: void(0);",
                                                },
                                              },
                                              [_vm._v("Level 1.1")]
                                            ),
                                          ]),
                                          _vm._v(" "),
                                          _c("li", [
                                            _c(
                                              "a",
                                              {
                                                staticClass: "has-arrow",
                                                attrs: {
                                                  href: "javascript: void(0);",
                                                },
                                              },
                                              [_vm._v("Level 1.2")]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "ul",
                                              {
                                                staticClass:
                                                  "sub-menu mm-collapse",
                                                attrs: {
                                                  "aria-expanded": "true",
                                                },
                                              },
                                              [
                                                _c("li", [
                                                  _c(
                                                    "a",
                                                    {
                                                      attrs: {
                                                        href: "javascript: void(0);",
                                                      },
                                                    },
                                                    [_vm._v("Level 2.1")]
                                                  ),
                                                ]),
                                                _vm._v(" "),
                                                _c("li", [
                                                  _c(
                                                    "a",
                                                    {
                                                      attrs: {
                                                        href: "javascript: void(0);",
                                                      },
                                                    },
                                                    [_vm._v("Level 2.2")]
                                                  ),
                                                ]),
                                              ]
                                            ),
                                          ]),
                                        ]
                                      ),
                                    ]),
                                  ]
                                ),
                              ]
                            ),
                          ]
                        ),
                      ]
                    ),
                  ]
                ),
              ]),
              _c("div", {
                staticClass: "simplebar-placeholder",
                staticStyle: { width: "auto", height: "877px" },
              }),
            ]
          ),
          _c(
            "div",
            {
              staticClass: "simplebar-track simplebar-horizontal",
              staticStyle: { visibility: "hidden" },
            },
            [
              _c("div", {
                staticClass: "simplebar-scrollbar",
                staticStyle: {
                  transform: "translate3d(0px, 0px, 0px)",
                  display: "none",
                },
              }),
            ]
          ),
          _c(
            "div",
            {
              staticClass: "simplebar-track simplebar-vertical",
              staticStyle: { visibility: "visible" },
            },
            [
              _c("div", {
                staticClass: "simplebar-scrollbar",
                staticStyle: {
                  height: "31px",
                  transform: "translate3d(0px, 0px, 0px)",
                  display: "block",
                },
              }),
            ]
          ),
        ]
      ),
    ])
  },
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/topbar.vue?vue&type=template&id=5d3c11a9&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/topbar.vue?vue&type=template&id=5d3c11a9& ***!
  \******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("header", { attrs: { id: "page-topbar" } }, [
    _c("div", { staticClass: "navbar-header" }, [
      _c("div", { staticClass: "d-flex" }, [
        _vm._m(0),
        _vm._v(" "),
        _c(
          "button",
          {
            staticClass:
              "btn btn-sm px-3 font-size-24 header-item waves-effect",
            attrs: { type: "button", id: "vertical-menu-btn" },
            on: {
              click: function ($event) {
                return _vm.toggleMenu()
              },
            },
          },
          [_c("i", { staticClass: "ri-menu-2-line align-middle" })]
        ),
        _vm._v(" "),
        _vm._m(1),
        _vm._v(" "),
        _vm._m(2),
      ]),
      _vm._v(" "),
      _vm._m(3),
    ]),
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "navbar-brand-box" }, [
      _c(
        "a",
        { staticClass: "logo logo-dark", attrs: { href: "index.html" } },
        [
          _c("span", { staticClass: "logo-sm" }, [
            _c("img", {
              attrs: {
                src: "/assets/images/logo-sm-dark.png",
                alt: "",
                height: "22",
              },
            }),
          ]),
          _vm._v(" "),
          _c("span", { staticClass: "logo-lg" }, [
            _c("img", {
              attrs: {
                src: "/assets/images/logo-dark.png",
                alt: "",
                height: "20",
              },
            }),
          ]),
        ]
      ),
      _vm._v(" "),
      _c(
        "a",
        { staticClass: "logo logo-light", attrs: { href: "index.html" } },
        [
          _c("span", { staticClass: "logo-sm" }, [
            _c("img", {
              attrs: {
                src: "/assets/images/logo-sm-light.png",
                alt: "",
                height: "22",
              },
            }),
          ]),
          _vm._v(" "),
          _c("span", { staticClass: "logo-lg" }, [
            _c("img", {
              attrs: {
                src: "/assets/images/logo-light.png",
                alt: "",
                height: "20",
              },
            }),
          ]),
        ]
      ),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("form", { staticClass: "app-search d-none d-lg-block" }, [
      _c("div", { staticClass: "position-relative" }, [
        _c("input", {
          staticClass: "form-control",
          attrs: { type: "text", placeholder: "Search..." },
        }),
        _vm._v(" "),
        _c("span", { staticClass: "ri-search-line" }),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "dropdown dropdown-mega d-none d-lg-block ml-2" },
      [
        _c(
          "button",
          {
            staticClass: "btn header-item waves-effect",
            attrs: {
              type: "button",
              "data-toggle": "dropdown",
              "aria-haspopup": "false",
              "aria-expanded": "false",
            },
          },
          [
            _vm._v("\n          Mega Menu\n          "),
            _c("i", { staticClass: "mdi mdi-chevron-down" }),
          ]
        ),
        _vm._v(" "),
        _c("div", { staticClass: "dropdown-menu dropdown-megamenu" }, [
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-sm-8" }, [
              _c("div", { staticClass: "row" }, [
                _c("div", { staticClass: "col-md-4" }, [
                  _c("h5", { staticClass: "font-size-14 mt-0" }, [
                    _vm._v("UI Components"),
                  ]),
                  _vm._v(" "),
                  _c("ul", { staticClass: "list-unstyled megamenu-list" }, [
                    _c("li", [
                      _c("a", { attrs: { href: "javascript:void(0);" } }, [
                        _vm._v("Lightbox"),
                      ]),
                    ]),
                    _vm._v(" "),
                    _c("li", [
                      _c("a", { attrs: { href: "javascript:void(0);" } }, [
                        _vm._v("Range Slider"),
                      ]),
                    ]),
                    _vm._v(" "),
                    _c("li", [
                      _c("a", { attrs: { href: "javascript:void(0);" } }, [
                        _vm._v("Sweet Alert"),
                      ]),
                    ]),
                    _vm._v(" "),
                    _c("li", [
                      _c("a", { attrs: { href: "javascript:void(0);" } }, [
                        _vm._v("Rating"),
                      ]),
                    ]),
                    _vm._v(" "),
                    _c("li", [
                      _c("a", { attrs: { href: "javascript:void(0);" } }, [
                        _vm._v("Forms"),
                      ]),
                    ]),
                    _vm._v(" "),
                    _c("li", [
                      _c("a", { attrs: { href: "javascript:void(0);" } }, [
                        _vm._v("Tables"),
                      ]),
                    ]),
                    _vm._v(" "),
                    _c("li", [
                      _c("a", { attrs: { href: "javascript:void(0);" } }, [
                        _vm._v("Charts"),
                      ]),
                    ]),
                  ]),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-md-4" }, [
                  _c("h5", { staticClass: "font-size-14 mt-0" }, [
                    _vm._v("Applications"),
                  ]),
                  _vm._v(" "),
                  _c("ul", { staticClass: "list-unstyled megamenu-list" }, [
                    _c("li", [
                      _c("a", { attrs: { href: "javascript:void(0);" } }, [
                        _vm._v("Ecommerce"),
                      ]),
                    ]),
                    _vm._v(" "),
                    _c("li", [
                      _c("a", { attrs: { href: "javascript:void(0);" } }, [
                        _vm._v("Calendar"),
                      ]),
                    ]),
                    _vm._v(" "),
                    _c("li", [
                      _c("a", { attrs: { href: "javascript:void(0);" } }, [
                        _vm._v("Email"),
                      ]),
                    ]),
                    _vm._v(" "),
                    _c("li", [
                      _c("a", { attrs: { href: "javascript:void(0);" } }, [
                        _vm._v("Projects"),
                      ]),
                    ]),
                    _vm._v(" "),
                    _c("li", [
                      _c("a", { attrs: { href: "javascript:void(0);" } }, [
                        _vm._v("Tasks"),
                      ]),
                    ]),
                    _vm._v(" "),
                    _c("li", [
                      _c("a", { attrs: { href: "javascript:void(0);" } }, [
                        _vm._v("Contacts"),
                      ]),
                    ]),
                  ]),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-md-4" }, [
                  _c("h5", { staticClass: "font-size-14 mt-0" }, [
                    _vm._v("Extra Pages"),
                  ]),
                  _vm._v(" "),
                  _c("ul", { staticClass: "list-unstyled megamenu-list" }, [
                    _c("li", [
                      _c("a", { attrs: { href: "javascript:void(0);" } }, [
                        _vm._v("Light Sidebar"),
                      ]),
                    ]),
                    _vm._v(" "),
                    _c("li", [
                      _c("a", { attrs: { href: "javascript:void(0);" } }, [
                        _vm._v("Compact Sidebar"),
                      ]),
                    ]),
                    _vm._v(" "),
                    _c("li", [
                      _c("a", { attrs: { href: "javascript:void(0);" } }, [
                        _vm._v("Horizontal layout"),
                      ]),
                    ]),
                    _vm._v(" "),
                    _c("li", [
                      _c("a", { attrs: { href: "javascript:void(0);" } }, [
                        _vm._v("Maintenance"),
                      ]),
                    ]),
                    _vm._v(" "),
                    _c("li", [
                      _c("a", { attrs: { href: "javascript:void(0);" } }, [
                        _vm._v("Coming Soon"),
                      ]),
                    ]),
                    _vm._v(" "),
                    _c("li", [
                      _c("a", { attrs: { href: "javascript:void(0);" } }, [
                        _vm._v("Timeline"),
                      ]),
                    ]),
                    _vm._v(" "),
                    _c("li", [
                      _c("a", { attrs: { href: "javascript:void(0);" } }, [
                        _vm._v("FAQs"),
                      ]),
                    ]),
                  ]),
                ]),
              ]),
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-sm-4" }, [
              _c("div", { staticClass: "row" }, [
                _c("div", { staticClass: "col-sm-6" }, [
                  _c("h5", { staticClass: "font-size-14 mt-0" }, [
                    _vm._v("UI Components"),
                  ]),
                  _vm._v(" "),
                  _c("ul", { staticClass: "list-unstyled megamenu-list" }, [
                    _c("li", [
                      _c("a", { attrs: { href: "javascript:void(0);" } }, [
                        _vm._v("Lightbox"),
                      ]),
                    ]),
                    _vm._v(" "),
                    _c("li", [
                      _c("a", { attrs: { href: "javascript:void(0);" } }, [
                        _vm._v("Range Slider"),
                      ]),
                    ]),
                    _vm._v(" "),
                    _c("li", [
                      _c("a", { attrs: { href: "javascript:void(0);" } }, [
                        _vm._v("Sweet Alert"),
                      ]),
                    ]),
                    _vm._v(" "),
                    _c("li", [
                      _c("a", { attrs: { href: "javascript:void(0);" } }, [
                        _vm._v("Rating"),
                      ]),
                    ]),
                    _vm._v(" "),
                    _c("li", [
                      _c("a", { attrs: { href: "javascript:void(0);" } }, [
                        _vm._v("Forms"),
                      ]),
                    ]),
                    _vm._v(" "),
                    _c("li", [
                      _c("a", { attrs: { href: "javascript:void(0);" } }, [
                        _vm._v("Tables"),
                      ]),
                    ]),
                    _vm._v(" "),
                    _c("li", [
                      _c("a", { attrs: { href: "javascript:void(0);" } }, [
                        _vm._v("Charts"),
                      ]),
                    ]),
                  ]),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-sm-5" }, [
                  _c("div", [
                    _c("img", {
                      staticClass: "img-fluid mx-auto d-block",
                      attrs: {
                        src: "/assets/images/megamenu-img.png",
                        alt: "",
                      },
                    }),
                  ]),
                ]),
              ]),
            ]),
          ]),
        ]),
      ]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "d-flex" }, [
      _c("div", { staticClass: "dropdown d-inline-block d-lg-none ml-2" }, [
        _c(
          "button",
          {
            staticClass: "btn header-item noti-icon waves-effect",
            attrs: {
              type: "button",
              id: "page-header-search-dropdown",
              "data-toggle": "dropdown",
              "aria-haspopup": "true",
              "aria-expanded": "false",
            },
          },
          [_c("i", { staticClass: "ri-search-line" })]
        ),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass:
              "dropdown-menu dropdown-menu-lg dropdown-menu-right p-0",
            attrs: { "aria-labelledby": "page-header-search-dropdown" },
          },
          [
            _c("form", { staticClass: "p-3" }, [
              _c("div", { staticClass: "form-group m-0" }, [
                _c("div", { staticClass: "input-group" }, [
                  _c("input", {
                    staticClass: "form-control",
                    attrs: { type: "text", placeholder: "Search ..." },
                  }),
                  _vm._v(" "),
                  _c("div", { staticClass: "input-group-append" }, [
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-primary",
                        attrs: { type: "submit" },
                      },
                      [_c("i", { staticClass: "ri-search-line" })]
                    ),
                  ]),
                ]),
              ]),
            ]),
          ]
        ),
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "dropdown d-none d-sm-inline-block" }, [
        _c(
          "button",
          {
            staticClass: "btn header-item waves-effect",
            attrs: {
              type: "button",
              "data-toggle": "dropdown",
              "aria-haspopup": "true",
              "aria-expanded": "false",
            },
          },
          [
            _c("img", {
              attrs: {
                src: "/assets/images/flags/us.jpg",
                alt: "Header Language",
                height: "16",
              },
            }),
          ]
        ),
        _vm._v(" "),
        _c("div", { staticClass: "dropdown-menu dropdown-menu-right" }, [
          _c(
            "a",
            {
              staticClass: "dropdown-item notify-item",
              attrs: { href: "javascript:void(0);" },
            },
            [
              _c("img", {
                staticClass: "mr-1",
                attrs: {
                  src: "/assets/images/flags/spain.jpg",
                  alt: "user-image",
                  height: "12",
                },
              }),
              _vm._v(" "),
              _c("span", { staticClass: "align-middle" }, [_vm._v("Spanish")]),
            ]
          ),
          _vm._v(" "),
          _c(
            "a",
            {
              staticClass: "dropdown-item notify-item",
              attrs: { href: "javascript:void(0);" },
            },
            [
              _c("img", {
                staticClass: "mr-1",
                attrs: {
                  src: "/assets/images/flags/germany.jpg",
                  alt: "user-image",
                  height: "12",
                },
              }),
              _vm._v(" "),
              _c("span", { staticClass: "align-middle" }, [_vm._v("German")]),
            ]
          ),
          _vm._v(" "),
          _c(
            "a",
            {
              staticClass: "dropdown-item notify-item",
              attrs: { href: "javascript:void(0);" },
            },
            [
              _c("img", {
                staticClass: "mr-1",
                attrs: {
                  src: "/assets/images/flags/italy.jpg",
                  alt: "user-image",
                  height: "12",
                },
              }),
              _vm._v(" "),
              _c("span", { staticClass: "align-middle" }, [_vm._v("Italian")]),
            ]
          ),
          _vm._v(" "),
          _c(
            "a",
            {
              staticClass: "dropdown-item notify-item",
              attrs: { href: "javascript:void(0);" },
            },
            [
              _c("img", {
                staticClass: "mr-1",
                attrs: {
                  src: "/assets/images/flags/russia.jpg",
                  alt: "user-image",
                  height: "12",
                },
              }),
              _vm._v(" "),
              _c("span", { staticClass: "align-middle" }, [_vm._v("Russian")]),
            ]
          ),
        ]),
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "dropdown d-none d-lg-inline-block ml-1" }, [
        _c(
          "button",
          {
            staticClass: "btn header-item noti-icon waves-effect",
            attrs: {
              type: "button",
              "data-toggle": "dropdown",
              "aria-haspopup": "true",
              "aria-expanded": "false",
            },
          },
          [_c("i", { staticClass: "ri-apps-2-line" })]
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "dropdown-menu dropdown-menu-lg dropdown-menu-right" },
          [
            _c("div", { staticClass: "px-lg-2" }, [
              _c("div", { staticClass: "row no-gutters" }, [
                _c("div", { staticClass: "col" }, [
                  _c(
                    "a",
                    { staticClass: "dropdown-icon-item", attrs: { href: "#" } },
                    [
                      _c("img", {
                        attrs: {
                          src: "/assets/images/brands/github.png",
                          alt: "Github",
                        },
                      }),
                      _vm._v(" "),
                      _c("span", [_vm._v("GitHub")]),
                    ]
                  ),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col" }, [
                  _c(
                    "a",
                    { staticClass: "dropdown-icon-item", attrs: { href: "#" } },
                    [
                      _c("img", {
                        attrs: {
                          src: "/assets/images/brands/bitbucket.png",
                          alt: "bitbucket",
                        },
                      }),
                      _vm._v(" "),
                      _c("span", [_vm._v("Bitbucket")]),
                    ]
                  ),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col" }, [
                  _c(
                    "a",
                    { staticClass: "dropdown-icon-item", attrs: { href: "#" } },
                    [
                      _c("img", {
                        attrs: {
                          src: "/assets/images/brands/dribbble.png",
                          alt: "dribbble",
                        },
                      }),
                      _vm._v(" "),
                      _c("span", [_vm._v("Dribbble")]),
                    ]
                  ),
                ]),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "row no-gutters" }, [
                _c("div", { staticClass: "col" }, [
                  _c(
                    "a",
                    { staticClass: "dropdown-icon-item", attrs: { href: "#" } },
                    [
                      _c("img", {
                        attrs: {
                          src: "/assets/images/brands/dropbox.png",
                          alt: "dropbox",
                        },
                      }),
                      _vm._v(" "),
                      _c("span", [_vm._v("Dropbox")]),
                    ]
                  ),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col" }, [
                  _c(
                    "a",
                    { staticClass: "dropdown-icon-item", attrs: { href: "#" } },
                    [
                      _c("img", {
                        attrs: {
                          src: "/assets/images/brands/mail_chimp.png",
                          alt: "mail_chimp",
                        },
                      }),
                      _vm._v(" "),
                      _c("span", [_vm._v("Mail Chimp")]),
                    ]
                  ),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col" }, [
                  _c(
                    "a",
                    { staticClass: "dropdown-icon-item", attrs: { href: "#" } },
                    [
                      _c("img", {
                        attrs: {
                          src: "/assets/images/brands/slack.png",
                          alt: "slack",
                        },
                      }),
                      _vm._v(" "),
                      _c("span", [_vm._v("Slack")]),
                    ]
                  ),
                ]),
              ]),
            ]),
          ]
        ),
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "dropdown d-none d-lg-inline-block ml-1" }, [
        _c(
          "button",
          {
            staticClass: "btn header-item noti-icon waves-effect",
            attrs: { type: "button", "data-toggle": "fullscreen" },
          },
          [_c("i", { staticClass: "ri-fullscreen-line" })]
        ),
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "dropdown d-inline-block" }, [
        _c(
          "button",
          {
            staticClass: "btn header-item noti-icon waves-effect",
            attrs: {
              type: "button",
              id: "page-header-notifications-dropdown",
              "data-toggle": "dropdown",
              "aria-haspopup": "true",
              "aria-expanded": "false",
            },
          },
          [
            _c("i", { staticClass: "ri-notification-3-line" }),
            _vm._v(" "),
            _c("span", { staticClass: "noti-dot" }),
          ]
        ),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass:
              "dropdown-menu dropdown-menu-lg dropdown-menu-right p-0",
            attrs: { "aria-labelledby": "page-header-notifications-dropdown" },
          },
          [
            _c("div", { staticClass: "p-3" }, [
              _c("div", { staticClass: "row align-items-center" }, [
                _c("div", { staticClass: "col" }, [
                  _c("h6", { staticClass: "m-0" }, [_vm._v(" Notifications ")]),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-auto" }, [
                  _c("a", { staticClass: "small", attrs: { href: "#!" } }, [
                    _vm._v(" View All"),
                  ]),
                ]),
              ]),
            ]),
            _vm._v(" "),
            _c(
              "div",
              {
                staticStyle: { "max-height": "230px" },
                attrs: { "data-simplebar": "" },
              },
              [
                _c(
                  "a",
                  {
                    staticClass: "text-reset notification-item",
                    attrs: { href: "" },
                  },
                  [
                    _c("div", { staticClass: "media" }, [
                      _c("div", { staticClass: "avatar-xs mr-3" }, [
                        _c(
                          "span",
                          {
                            staticClass:
                              "avatar-title bg-primary rounded-circle font-size-16",
                          },
                          [_c("i", { staticClass: "ri-shopping-cart-line" })]
                        ),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "media-body" }, [
                        _c("h6", { staticClass: "mt-0 mb-1" }, [
                          _vm._v("Your order is placed"),
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "font-size-12 text-muted" }, [
                          _c("p", { staticClass: "mb-1" }, [
                            _vm._v("If several languages coalesce the grammar"),
                          ]),
                          _vm._v(" "),
                          _c("p", { staticClass: "mb-0" }, [
                            _c("i", { staticClass: "mdi mdi-clock-outline" }),
                            _vm._v(" 3 min ago"),
                          ]),
                        ]),
                      ]),
                    ]),
                  ]
                ),
                _vm._v(" "),
                _c(
                  "a",
                  {
                    staticClass: "text-reset notification-item",
                    attrs: { href: "" },
                  },
                  [
                    _c("div", { staticClass: "media" }, [
                      _c("img", {
                        staticClass: "mr-3 rounded-circle avatar-xs",
                        attrs: {
                          src: "/assets/images/users/avatar-3.jpg",
                          alt: "user-pic",
                        },
                      }),
                      _vm._v(" "),
                      _c("div", { staticClass: "media-body" }, [
                        _c("h6", { staticClass: "mt-0 mb-1" }, [
                          _vm._v("James Lemire"),
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "font-size-12 text-muted" }, [
                          _c("p", { staticClass: "mb-1" }, [
                            _vm._v("It will seem like simplified English."),
                          ]),
                          _vm._v(" "),
                          _c("p", { staticClass: "mb-0" }, [
                            _c("i", { staticClass: "mdi mdi-clock-outline" }),
                            _vm._v(" 1 hours ago"),
                          ]),
                        ]),
                      ]),
                    ]),
                  ]
                ),
                _vm._v(" "),
                _c(
                  "a",
                  {
                    staticClass: "text-reset notification-item",
                    attrs: { href: "" },
                  },
                  [
                    _c("div", { staticClass: "media" }, [
                      _c("div", { staticClass: "avatar-xs mr-3" }, [
                        _c(
                          "span",
                          {
                            staticClass:
                              "avatar-title bg-success rounded-circle font-size-16",
                          },
                          [_c("i", { staticClass: "ri-checkbox-circle-line" })]
                        ),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "media-body" }, [
                        _c("h6", { staticClass: "mt-0 mb-1" }, [
                          _vm._v("Your item is shipped"),
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "font-size-12 text-muted" }, [
                          _c("p", { staticClass: "mb-1" }, [
                            _vm._v("If several languages coalesce the grammar"),
                          ]),
                          _vm._v(" "),
                          _c("p", { staticClass: "mb-0" }, [
                            _c("i", { staticClass: "mdi mdi-clock-outline" }),
                            _vm._v(" 3 min ago"),
                          ]),
                        ]),
                      ]),
                    ]),
                  ]
                ),
                _vm._v(" "),
                _c(
                  "a",
                  {
                    staticClass: "text-reset notification-item",
                    attrs: { href: "" },
                  },
                  [
                    _c("div", { staticClass: "media" }, [
                      _c("img", {
                        staticClass: "mr-3 rounded-circle avatar-xs",
                        attrs: {
                          src: "/assets/images/users/avatar-4.jpg",
                          alt: "user-pic",
                        },
                      }),
                      _vm._v(" "),
                      _c("div", { staticClass: "media-body" }, [
                        _c("h6", { staticClass: "mt-0 mb-1" }, [
                          _vm._v("Salena Layfield"),
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "font-size-12 text-muted" }, [
                          _c("p", { staticClass: "mb-1" }, [
                            _vm._v(
                              "As a skeptical Cambridge friend of mine occidental."
                            ),
                          ]),
                          _vm._v(" "),
                          _c("p", { staticClass: "mb-0" }, [
                            _c("i", { staticClass: "mdi mdi-clock-outline" }),
                            _vm._v(" 1 hours ago"),
                          ]),
                        ]),
                      ]),
                    ]),
                  ]
                ),
              ]
            ),
            _vm._v(" "),
            _c("div", { staticClass: "p-2 border-top" }, [
              _c(
                "a",
                {
                  staticClass:
                    "btn btn-sm btn-link font-size-14 btn-block text-center",
                  attrs: { href: "javascript:void(0)" },
                },
                [
                  _c("i", { staticClass: "mdi mdi-arrow-right-circle mr-1" }),
                  _vm._v(" View More..\n            "),
                ]
              ),
            ]),
          ]
        ),
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "dropdown d-inline-block user-dropdown" }, [
        _c(
          "button",
          {
            staticClass: "btn header-item waves-effect",
            attrs: {
              type: "button",
              id: "page-header-user-dropdown",
              "data-toggle": "dropdown",
              "aria-haspopup": "true",
              "aria-expanded": "false",
            },
          },
          [
            _c("img", {
              staticClass: "rounded-circle header-profile-user",
              attrs: {
                src: "/assets/images/users/avatar-2.jpg",
                alt: "Header Avatar",
              },
            }),
            _vm._v(" "),
            _c("span", { staticClass: "d-none d-xl-inline-block ml-1" }, [
              _vm._v("Kevin"),
            ]),
            _vm._v(" "),
            _c("i", {
              staticClass: "mdi mdi-chevron-down d-none d-xl-inline-block",
            }),
          ]
        ),
        _vm._v(" "),
        _c("div", { staticClass: "dropdown-menu dropdown-menu-right" }, [
          _c("a", { staticClass: "dropdown-item", attrs: { href: "#" } }, [
            _c("i", { staticClass: "ri-user-line align-middle mr-1" }),
            _vm._v(" Profile"),
          ]),
          _vm._v(" "),
          _c("a", { staticClass: "dropdown-item", attrs: { href: "#" } }, [
            _c("i", { staticClass: "ri-wallet-2-line align-middle mr-1" }),
            _vm._v(" My Wallet"),
          ]),
          _vm._v(" "),
          _c(
            "a",
            { staticClass: "dropdown-item d-block", attrs: { href: "#" } },
            [
              _c(
                "span",
                { staticClass: "badge badge-success float-right mt-1" },
                [_vm._v("11")]
              ),
              _c("i", { staticClass: "ri-settings-2-line align-middle mr-1" }),
              _vm._v(" Settings"),
            ]
          ),
          _vm._v(" "),
          _c("a", { staticClass: "dropdown-item", attrs: { href: "#" } }, [
            _c("i", { staticClass: "ri-lock-unlock-line align-middle mr-1" }),
            _vm._v(" Lock screen"),
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "dropdown-divider" }),
          _vm._v(" "),
          _c(
            "a",
            { staticClass: "dropdown-item text-danger", attrs: { href: "#" } },
            [
              _c("i", {
                staticClass: "ri-shut-down-line align-middle mr-1 text-danger",
              }),
              _vm._v(" Logout"),
            ]
          ),
        ]),
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "dropdown d-inline-block" }, [
        _c(
          "button",
          {
            staticClass:
              "btn header-item noti-icon right-bar-toggle waves-effect",
            attrs: { type: "button" },
          },
          [_c("i", { staticClass: "ri-settings-2-line" })]
        ),
      ]),
    ])
  },
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/layouts/main.vue?vue&type=template&id=de3c3304&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/layouts/main.vue?vue&type=template&id=de3c3304& ***!
  \*******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("div", { staticClass: "page-main" }, [
      _c("div", { staticClass: "app-header header sticky" }, [
        _c("div", { staticClass: "container-fluid main-container" }, [
          _c("div", { staticClass: "d-flex" }, [
            _c("a", {
              staticClass: "app-sidebar__toggle",
              attrs: {
                "aria-label": "Hide Sidebar",
                "data-bs-toggle": "sidebar",
                href: "#",
              },
            }),
            _vm._v(" "),
            _vm._m(0),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "main-header-center ms-3 d-none d-xl-block" },
              [
                _c("input", {
                  staticClass: "form-control",
                  attrs: {
                    placeholder: "Search for results...",
                    type: "search",
                  },
                }),
                _vm._v(" "),
                _c("button", { staticClass: "btn" }, [
                  _c(
                    "svg",
                    {
                      attrs: {
                        xmlns: "http://www.w3.org/2000/svg",
                        "enable-background": "new 0 0 24 24",
                        viewBox: "0 0 24 24",
                      },
                    },
                    [
                      _c("path", {
                        attrs: {
                          d: "M21.2529297,17.6464844l-2.8994141-2.8994141c-0.0021973-0.0021973-0.0043945-0.0043945-0.0065918-0.0065918c-0.8752441-0.8721313-2.2249146-0.9760132-3.2143555-0.3148804l-0.8467407-0.8467407c1.0981445-1.2668457,1.7143555-2.887146,1.715332-4.5747681c0.0021973-3.8643799-3.1286621-6.9989014-6.993042-7.0011597S2.0092773,5.1315308,2.007019,8.9959106S5.1356201,15.994812,9,15.9970703c1.6889038,0.0029907,3.3114014-0.6120605,4.5789185-1.7111206l0.84729,0.84729c-0.6630859,0.9924316-0.5566406,2.3459473,0.3208618,3.2202759l2.8994141,2.8994141c0.4780884,0.4786987,1.1271973,0.7471313,1.8037109,0.7460938c0.6766357,0.0001831,1.3256226-0.2686768,1.803894-0.7472534C22.2493286,20.2558594,22.2488403,18.6417236,21.2529297,17.6464844z M9.0084229,14.9970703c-3.3120728,0.0023193-5.9989624-2.6807861-6.0012817-5.9928589S5.6879272,3.005249,9,3.0029297c1.5910034-0.0026855,3.1175537,0.628479,4.2421875,1.7539062c1.1252441,1.1238403,1.7579956,2.6486206,1.7590942,4.2389526C15.0036011,12.3078613,12.3204956,14.994751,9.0084229,14.9970703z M20.5458984,20.5413818c-0.604126,0.6066284-1.5856934,0.6087036-2.1923828,0.0045166l-2.8994141-2.8994141c-0.2913818-0.2910156-0.4549561-0.6861572-0.4544678-1.0979614C15.0006714,15.6928101,15.6951294,15,16.5507812,15.0009766c0.4109497-0.0005493,0.8051758,0.1624756,1.0957031,0.453125l2.8994141,2.8994141C21.1482544,18.9584351,21.1482544,19.9364624,20.5458984,20.5413818z",
                        },
                      }),
                    ]
                  ),
                ]),
              ]
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "d-flex order-lg-2 ms-auto header-right-icons" },
              [
                _c(
                  "div",
                  { staticClass: "dropdown d-xl-none d-md-block d-none" },
                  [
                    _c(
                      "a",
                      {
                        staticClass: "nav-link icon",
                        attrs: { href: "#", "data-bs-toggle": "dropdown" },
                      },
                      [
                        _c(
                          "svg",
                          {
                            attrs: {
                              xmlns: "http://www.w3.org/2000/svg",
                              "enable-background": "new 0 0 24 24",
                              viewBox: "0 0 24 24",
                            },
                          },
                          [
                            _c("path", {
                              attrs: {
                                fill: "",
                                d: "M21.2529297,17.6464844l-2.8994141-2.8994141c-0.0021973-0.0021973-0.0043945-0.0043945-0.0065918-0.0065918c-0.8752441-0.8721313-2.2249146-0.9760132-3.2143555-0.3148804l-0.8467407-0.8467407c1.0981445-1.2668457,1.7143555-2.887146,1.715332-4.5747681c0.0021973-3.8643799-3.1286621-6.9989014-6.993042-7.0011597S2.0092773,5.1315308,2.007019,8.9959106S5.1356201,15.994812,9,15.9970703c1.6889038,0.0029907,3.3114014-0.6120605,4.5789185-1.7111206l0.84729,0.84729c-0.6630859,0.9924316-0.5566406,2.3459473,0.3208618,3.2202759l2.8994141,2.8994141c0.4780884,0.4786987,1.1271973,0.7471313,1.8037109,0.7460938c0.6766357,0.0001831,1.3256226-0.2686768,1.803894-0.7472534C22.2493286,20.2558594,22.2488403,18.6417236,21.2529297,17.6464844z M9.0084229,14.9970703c-3.3120728,0.0023193-5.9989624-2.6807861-6.0012817-5.9928589S5.6879272,3.005249,9,3.0029297c1.5910034-0.0026855,3.1175537,0.628479,4.2421875,1.7539062c1.1252441,1.1238403,1.7579956,2.6486206,1.7590942,4.2389526C15.0036011,12.3078613,12.3204956,14.994751,9.0084229,14.9970703z M20.5458984,20.5413818c-0.604126,0.6066284-1.5856934,0.6087036-2.1923828,0.0045166l-2.8994141-2.8994141c-0.2913818-0.2910156-0.4549561-0.6861572-0.4544678-1.0979614C15.0006714,15.6928101,15.6951294,15,16.5507812,15.0009766c0.4109497-0.0005493,0.8051758,0.1624756,1.0957031,0.453125l2.8994141,2.8994141C21.1482544,18.9584351,21.1482544,19.9364624,20.5458984,20.5413818z",
                              },
                            }),
                          ]
                        ),
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass:
                          "dropdown-menu header-search dropdown-menu-start",
                      },
                      [
                        _c("div", { staticClass: "input-group w-100 p-2" }, [
                          _c("input", {
                            staticClass: "form-control",
                            attrs: { type: "text", placeholder: "Search...." },
                          }),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "input-group-text btn btn-primary" },
                            [
                              _c(
                                "svg",
                                {
                                  attrs: {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    "enable-background": "new 0 0 24 24",
                                    viewBox: "0 0 24 24",
                                  },
                                },
                                [
                                  _c("path", {
                                    attrs: {
                                      d: "M21.2529297,17.6464844l-2.8994141-2.8994141c-0.0021973-0.0021973-0.0043945-0.0043945-0.0065918-0.0065918c-0.8752441-0.8721313-2.2249146-0.9760132-3.2143555-0.3148804l-0.8467407-0.8467407c1.0981445-1.2668457,1.7143555-2.887146,1.715332-4.5747681c0.0021973-3.8643799-3.1286621-6.9989014-6.993042-7.0011597S2.0092773,5.1315308,2.007019,8.9959106S5.1356201,15.994812,9,15.9970703c1.6889038,0.0029907,3.3114014-0.6120605,4.5789185-1.7111206l0.84729,0.84729c-0.6630859,0.9924316-0.5566406,2.3459473,0.3208618,3.2202759l2.8994141,2.8994141c0.4780884,0.4786987,1.1271973,0.7471313,1.8037109,0.7460938c0.6766357,0.0001831,1.3256226-0.2686768,1.803894-0.7472534C22.2493286,20.2558594,22.2488403,18.6417236,21.2529297,17.6464844z M9.0084229,14.9970703c-3.3120728,0.0023193-5.9989624-2.6807861-6.0012817-5.9928589S5.6879272,3.005249,9,3.0029297c1.5910034-0.0026855,3.1175537,0.628479,4.2421875,1.7539062c1.1252441,1.1238403,1.7579956,2.6486206,1.7590942,4.2389526C15.0036011,12.3078613,12.3204956,14.994751,9.0084229,14.9970703z M20.5458984,20.5413818c-0.604126,0.6066284-1.5856934,0.6087036-2.1923828,0.0045166l-2.8994141-2.8994141c-0.2913818-0.2910156-0.4549561-0.6861572-0.4544678-1.0979614C15.0006714,15.6928101,15.6951294,15,16.5507812,15.0009766c0.4109497-0.0005493,0.8051758,0.1624756,1.0957031,0.453125l2.8994141,2.8994141C21.1482544,18.9584351,21.1482544,19.9364624,20.5458984,20.5413818z",
                                    },
                                  }),
                                ]
                              ),
                            ]
                          ),
                        ]),
                      ]
                    ),
                  ]
                ),
                _vm._v(" "),
                _vm._m(1),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass: "navbar navbar-collapse responsive-navbar p-0",
                  },
                  [
                    _c(
                      "div",
                      {
                        staticClass: "collapse navbar-collapse",
                        attrs: { id: "navbarSupportedContent-4" },
                      },
                      [
                        _c("div", { staticClass: "d-flex order-lg-2" }, [
                          _c(
                            "div",
                            { staticClass: "dropdown d-md-none d-flex" },
                            [
                              _c(
                                "a",
                                {
                                  staticClass: "nav-link icon",
                                  attrs: {
                                    href: "#",
                                    "data-bs-toggle": "dropdown",
                                  },
                                },
                                [
                                  _c(
                                    "svg",
                                    {
                                      staticClass: "header-icon",
                                      attrs: {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        "enable-background": "new 0 0 24 24",
                                        viewBox: "0 0 24 24",
                                      },
                                    },
                                    [
                                      _c("path", {
                                        attrs: {
                                          d: "M21.2529297,17.6464844l-2.8994141-2.8994141c-0.0021973-0.0021973-0.0043945-0.0043945-0.0065918-0.0065918c-0.8752441-0.8721313-2.2249146-0.9760132-3.2143555-0.3148804l-0.8467407-0.8467407c1.0981445-1.2668457,1.7143555-2.887146,1.715332-4.5747681c0.0021973-3.8643799-3.1286621-6.9989014-6.993042-7.0011597S2.0092773,5.1315308,2.007019,8.9959106S5.1356201,15.994812,9,15.9970703c1.6889038,0.0029907,3.3114014-0.6120605,4.5789185-1.7111206l0.84729,0.84729c-0.6630859,0.9924316-0.5566406,2.3459473,0.3208618,3.2202759l2.8994141,2.8994141c0.4780884,0.4786987,1.1271973,0.7471313,1.8037109,0.7460938c0.6766357,0.0001831,1.3256226-0.2686768,1.803894-0.7472534C22.2493286,20.2558594,22.2488403,18.6417236,21.2529297,17.6464844z M9.0084229,14.9970703c-3.3120728,0.0023193-5.9989624-2.6807861-6.0012817-5.9928589S5.6879272,3.005249,9,3.0029297c1.5910034-0.0026855,3.1175537,0.628479,4.2421875,1.7539062c1.1252441,1.1238403,1.7579956,2.6486206,1.7590942,4.2389526C15.0036011,12.3078613,12.3204956,14.994751,9.0084229,14.9970703z M20.5458984,20.5413818c-0.604126,0.6066284-1.5856934,0.6087036-2.1923828,0.0045166l-2.8994141-2.8994141c-0.2913818-0.2910156-0.4549561-0.6861572-0.4544678-1.0979614C15.0006714,15.6928101,15.6951294,15,16.5507812,15.0009766c0.4109497-0.0005493,0.8051758,0.1624756,1.0957031,0.453125l2.8994141,2.8994141C21.1482544,18.9584351,21.1482544,19.9364624,20.5458984,20.5413818z",
                                        },
                                      }),
                                    ]
                                  ),
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                {
                                  staticClass:
                                    "dropdown-menu header-search dropdown-menu-start",
                                },
                                [
                                  _c(
                                    "div",
                                    { staticClass: "input-group w-100 p-2" },
                                    [
                                      _c("input", {
                                        staticClass: "form-control",
                                        attrs: {
                                          type: "text",
                                          placeholder: "Search....",
                                        },
                                      }),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        {
                                          staticClass:
                                            "input-group-text btn btn-primary",
                                        },
                                        [
                                          _c(
                                            "svg",
                                            {
                                              attrs: {
                                                xmlns:
                                                  "http://www.w3.org/2000/svg",
                                                "enable-background":
                                                  "new 0 0 24 24",
                                                viewBox: "0 0 24 24",
                                              },
                                            },
                                            [
                                              _c("path", {
                                                attrs: {
                                                  d: "M21.2529297,17.6464844l-2.8994141-2.8994141c-0.0021973-0.0021973-0.0043945-0.0043945-0.0065918-0.0065918c-0.8752441-0.8721313-2.2249146-0.9760132-3.2143555-0.3148804l-0.8467407-0.8467407c1.0981445-1.2668457,1.7143555-2.887146,1.715332-4.5747681c0.0021973-3.8643799-3.1286621-6.9989014-6.993042-7.0011597S2.0092773,5.1315308,2.007019,8.9959106S5.1356201,15.994812,9,15.9970703c1.6889038,0.0029907,3.3114014-0.6120605,4.5789185-1.7111206l0.84729,0.84729c-0.6630859,0.9924316-0.5566406,2.3459473,0.3208618,3.2202759l2.8994141,2.8994141c0.4780884,0.4786987,1.1271973,0.7471313,1.8037109,0.7460938c0.6766357,0.0001831,1.3256226-0.2686768,1.803894-0.7472534C22.2493286,20.2558594,22.2488403,18.6417236,21.2529297,17.6464844z M9.0084229,14.9970703c-3.3120728,0.0023193-5.9989624-2.6807861-6.0012817-5.9928589S5.6879272,3.005249,9,3.0029297c1.5910034-0.0026855,3.1175537,0.628479,4.2421875,1.7539062c1.1252441,1.1238403,1.7579956,2.6486206,1.7590942,4.2389526C15.0036011,12.3078613,12.3204956,14.994751,9.0084229,14.9970703z M20.5458984,20.5413818c-0.604126,0.6066284-1.5856934,0.6087036-2.1923828,0.0045166l-2.8994141-2.8994141c-0.2913818-0.2910156-0.4549561-0.6861572-0.4544678-1.0979614C15.0006714,15.6928101,15.6951294,15,16.5507812,15.0009766c0.4109497-0.0005493,0.8051758,0.1624756,1.0957031,0.453125l2.8994141,2.8994141C21.1482544,18.9584351,21.1482544,19.9364624,20.5458984,20.5413818z",
                                                },
                                              }),
                                            ]
                                          ),
                                        ]
                                      ),
                                    ]
                                  ),
                                ]
                              ),
                            ]
                          ),
                          _vm._v(" "),
                          _vm._m(2),
                          _vm._v(" "),
                          _c("div", { staticClass: "dropdown d-flex" }, [
                            _c(
                              "a",
                              {
                                staticClass:
                                  "nav-link icon theme-layout nav-link-bg layout-setting",
                              },
                              [
                                _c("span", { staticClass: "dark-layout" }, [
                                  _c(
                                    "svg",
                                    {
                                      attrs: {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        "enable-background": "new 0 0 24 24",
                                        viewBox: "0 0 24 24",
                                      },
                                    },
                                    [
                                      _c("path", {
                                        attrs: {
                                          d: "M22.0482178,13.2746582c-0.1265259-0.2453003-0.4279175-0.3416138-0.6732178-0.2150879C20.1774902,13.6793823,18.8483887,14.0019531,17.5,14c-0.8480835-0.0005493-1.6913452-0.1279297-2.50177-0.3779297c-4.4887085-1.3847046-7.0050049-6.1460571-5.6203003-10.6347656c0.0320435-0.1033325,0.0296021-0.2142944-0.0068359-0.3161621C9.2781372,2.411377,8.9921875,2.2761841,8.7324219,2.3691406C4.6903076,3.800293,1.9915771,7.626709,2,11.9146729C2.0109863,17.4956055,6.5440674,22.0109863,12.125,22c4.9342651,0.0131226,9.1534424-3.5461426,9.9716797-8.4121094C22.1149292,13.4810181,22.0979614,13.3710327,22.0482178,13.2746582z M16.0877075,20.0958252c-4.5321045,2.1853027-9.9776611,0.2828979-12.1630249-4.2492065S3.6417236,5.8689575,8.1738281,3.6835938C8.0586548,4.2776489,8.0004272,4.8814087,8,5.4865723C7.9962769,10.7369385,12.2495728,14.9962769,17.5,15c1.1619263,0.0023193,2.3140869-0.2119751,3.3974609-0.6318359C20.1879272,16.8778076,18.4368896,18.9630127,16.0877075,20.0958252z",
                                        },
                                      }),
                                    ]
                                  ),
                                ]),
                                _vm._v(" "),
                                _c("span", { staticClass: "light-layout" }, [
                                  _c(
                                    "svg",
                                    {
                                      attrs: {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        "enable-background": "new 0 0 24 24",
                                        viewBox: "0 0 24 24",
                                      },
                                    },
                                    [
                                      _c("path", {
                                        attrs: {
                                          d: "M6.3427734,16.9501953l-1.4140625,1.4140625c-0.09375,0.09375-0.1463623,0.2208862-0.1464233,0.3534546c0,0.276123,0.2238159,0.5,0.499939,0.500061c0.1326294,0.0001831,0.2598877-0.0525513,0.3535156-0.1464844l1.4140015-1.4140625c0.0024414-0.0023804,0.0047607-0.0047607,0.0071411-0.0071411c0.1932373-0.1971436,0.1900635-0.5137329-0.0071411-0.7069702C6.8526001,16.7498169,6.5360718,16.7529907,6.3427734,16.9501953z M6.3427734,7.0498047c0.0936279,0.0939331,0.2208862,0.1466675,0.3535156,0.1464844c0.1325684,0,0.2597046-0.0526733,0.3534546-0.1464233c0.1952515-0.1952515,0.1953125-0.5118408,0.000061-0.7070923L5.6356812,4.9287109c-0.1943359-0.1904907-0.5054321-0.1904907-0.6998291,0C4.7386475,5.1220093,4.7354736,5.4385376,4.9287109,5.6357422L6.3427734,7.0498047z M12,5h0.0006104C12.2765503,4.9998169,12.5001831,4.776001,12.5,4.5v-2C12.5,2.223877,12.276123,2,12,2s-0.5,0.223877-0.5,0.5v2.0006104C11.5001831,4.7765503,11.723999,5.0001831,12,5z M17.3037109,7.1962891c0.1326294,0.0001831,0.2598877-0.0525513,0.3535156-0.1464844l1.4140625-1.4141235c0.0023804-0.0023193,0.0047607-0.0046997,0.0070801-0.0070801c0.1932983-0.1972046,0.1900635-0.5137329-0.0070801-0.7070312c-0.1972046-0.1932373-0.5137329-0.1900635-0.7070312,0.0071411l-1.4140625,1.4140625c-0.09375,0.09375-0.1463623,0.2208862-0.1464233,0.3534546C16.803772,6.9723511,17.0275879,7.196228,17.3037109,7.1962891z M5,12c0-0.276123-0.223877-0.5-0.5-0.5h-2C2.223877,11.5,2,11.723877,2,12s0.223877,0.5,0.5,0.5h2C4.776123,12.5,5,12.276123,5,12z M17.6572266,16.9502563c-0.0023804-0.0023804-0.0046997-0.0047607-0.0070801-0.0070801c-0.1972046-0.1932983-0.5137329-0.1901245-0.7070312,0.0070801c-0.1932373,0.1971436-0.1901245,0.5136719,0.0070801,0.7069702l1.4140625,1.4140625c0.0936279,0.0939331,0.2208252,0.1466675,0.3534546,0.1464844c0.1325684,0,0.2597046-0.0526733,0.3534546-0.1463623c0.1953125-0.1952515,0.1953125-0.5118408,0.0001221-0.7070923L17.6572266,16.9502563z M12,19c-0.276123,0-0.5,0.223877-0.5,0.5v2.0005493C11.5001831,21.7765503,11.723999,22.0001831,12,22h0.0006104c0.2759399-0.0001831,0.4995728-0.223999,0.4993896-0.5v-2C12.5,19.223877,12.276123,19,12,19z M21.5,11.5h-2c-0.276123,0-0.5,0.223877-0.5,0.5s0.223877,0.5,0.5,0.5h2c0.276123,0,0.5-0.223877,0.5-0.5S21.776123,11.5,21.5,11.5z M12,6.5c-3.0375366,0-5.5,2.4624634-5.5,5.5s2.4624634,5.5,5.5,5.5c3.0360107-0.0037842,5.4962158-2.4639893,5.5-5.5C17.5,8.9624634,15.0375366,6.5,12,6.5z M12,16.5c-2.4852905,0-4.5-2.0147095-4.5-4.5S9.5147095,7.5,12,7.5c2.4841309,0.0026855,4.4973145,2.0158691,4.5,4.5C16.5,14.4852905,14.4852905,16.5,12,16.5z",
                                        },
                                      }),
                                    ]
                                  ),
                                ]),
                              ]
                            ),
                          ]),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              staticClass:
                                "dropdown d-md-flex source-container",
                            },
                            [
                              _c(
                                "a",
                                {
                                  staticClass: "nav-link icon shortcut-icn",
                                  attrs: { "data-bs-toggle": "dropdown" },
                                },
                                [
                                  _c(
                                    "svg",
                                    {
                                      attrs: {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        "enable-background": "new 0 0 24 24",
                                        viewBox: "0 0 24 24",
                                      },
                                    },
                                    [
                                      _c("path", {
                                        attrs: {
                                          d: "M10.5,13h-7C3.2,13,3,13.2,3,13.5v7C3,20.8,3.2,21,3.5,21h7c0.3,0,0.5-0.2,0.5-0.5v-7C11,13.2,10.8,13,10.5,13z M10,20H4v-6h6V20z M10.5,3h-7C3.2,3,3,3.2,3,3.5v7C3,10.8,3.2,11,3.5,11h7c0.3,0,0.5-0.2,0.5-0.5v-7C11,3.2,10.8,3,10.5,3z M10,10H4V4h6V10z M20.5,3h-7C13.2,3,13,3.2,13,3.5v7c0,0.3,0.2,0.5,0.5,0.5h7c0.3,0,0.5-0.2,0.5-0.5v-7C21,3.2,20.8,3,20.5,3z M20,10h-6V4h6V10z M20.5,16.5h-3v-3c0-0.3-0.2-0.5-0.5-0.5s-0.5,0.2-0.5,0.5v3h-3c-0.3,0-0.5,0.2-0.5,0.5s0.2,0.5,0.5,0.5h3v3c0,0.3,0.2,0.5,0.5,0.5h0c0.3,0,0.5-0.2,0.5-0.5v-3h3c0.3,0,0.5-0.2,0.5-0.5S20.8,16.5,20.5,16.5z",
                                        },
                                      }),
                                    ]
                                  ),
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                {
                                  staticClass:
                                    "dropdown-menu dropdown-menu-end dropdown-menu-arrow source-logo-menu pt-2 pb-2",
                                },
                                [
                                  _c(
                                    "div",
                                    {
                                      staticClass:
                                        "drop-heading border-bottom d-f-ai-c",
                                    },
                                    [
                                      _c(
                                        "h6",
                                        { staticClass: "mb-0 fs-15 text-dark" },
                                        [_vm._v("SHORTCUTS")]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        { staticClass: "ms-auto d-flex" },
                                        [
                                          _c(
                                            "a",
                                            {
                                              staticClass: "util-main d-f-ai-c",
                                              attrs: { href: "#" },
                                            },
                                            [
                                              _c(
                                                "svg",
                                                {
                                                  staticClass: "edit-icn",
                                                  attrs: {
                                                    xmlns:
                                                      "http://www.w3.org/2000/svg",
                                                    "enable-background":
                                                      "new 0 0 24 24",
                                                    viewBox: "0 0 24 24",
                                                  },
                                                },
                                                [
                                                  _c("path", {
                                                    attrs: {
                                                      d: "M21.8534546,7.1464844l-5-5c0-0.000061-0.000061-0.0001221-0.0001221-0.0001221c-0.1951904-0.1951904-0.5117188-0.1951294-0.7068481,0.0001221l-14,14C2.0526733,16.2402344,2,16.3673706,2,16.5v5.0005493C2.0001831,21.7765503,2.223999,22.0001831,2.5,22h5c0.1326294,0,0.2597656-0.0527344,0.3534546-0.1465454l14-14c0.000061,0,0.0001221-0.000061,0.0001831-0.0001221C22.0487671,7.6581421,22.0487061,7.3416138,21.8534546,7.1464844z M7.2930298,21H3v-4.2930298l10.671814-10.671814l4.2926025,4.293457L7.2930298,21z M18.6714478,9.621582l-4.2926636-4.293396L16.5,3.2069702L20.7930298,7.5L18.6714478,9.621582z",
                                                    },
                                                  }),
                                                ]
                                              ),
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "a",
                                            {
                                              staticClass:
                                                "util-main ms-1 d-f-ai-c",
                                              attrs: { href: "#" },
                                            },
                                            [
                                              _c(
                                                "svg",
                                                {
                                                  staticClass: "add-icn",
                                                  attrs: {
                                                    xmlns:
                                                      "http://www.w3.org/2000/svg",
                                                    "enable-background":
                                                      "new 0 0 24 24",
                                                    viewBox: "0 0 24 24",
                                                  },
                                                },
                                                [
                                                  _c("path", {
                                                    attrs: {
                                                      d: "M19.5,11.5h-7v-7C12.5,4.223877,12.276123,4,12,4s-0.5,0.223877-0.5,0.5v7h-7C4.223877,11.5,4,11.723877,4,12s0.223877,0.5,0.5,0.5h7v7.0005493C11.5001831,19.7765503,11.723999,20.0001831,12,20h0.0006104c0.2759399-0.0001831,0.4995728-0.223999,0.4993896-0.5v-7h7c0.276123,0,0.5-0.223877,0.5-0.5S19.776123,11.5,19.5,11.5z",
                                                    },
                                                  }),
                                                ]
                                              ),
                                            ]
                                          ),
                                        ]
                                      ),
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "px-2 pb-4 pt-2" }, [
                                    _c("div", { staticClass: "row mb-2" }, [
                                      _c("div", { staticClass: "col d-flex" }, [
                                        _c(
                                          "a",
                                          {
                                            staticClass:
                                              "dropdown-menu-item text-muted source-logo-container",
                                            attrs: { href: "#" },
                                          },
                                          [
                                            _c(
                                              "svg",
                                              {
                                                staticClass: "source-logo",
                                                attrs: {
                                                  xmlns:
                                                    "http://www.w3.org/2000/svg",
                                                  "enable-background":
                                                    "new 0 0 24 24",
                                                  viewBox: "0 0 24 24",
                                                },
                                              },
                                              [
                                                _c("path", {
                                                  attrs: {
                                                    d: "M12.1124268,2.0010986C7.6941528,1.9389648,4.0620728,5.4703979,4,9.8886719c0,5.4482422,7.3642578,11.7285156,7.6777344,11.9931641C11.7677002,21.958313,11.881958,22.0001831,12,22c0.118042,0.0001831,0.2322998-0.041687,0.3222656-0.1181641C12.6357422,21.6171875,20,15.3369141,20,9.8886719C19.9391479,5.5579224,16.4431763,2.0619507,12.1124268,2.0010986z M12,20.8339844C10.5839844,19.5625,5,14.2666016,5,9.8886719C5.0353394,6.0553589,8.166626,2.973877,12,3c3.833374-0.026123,6.9647217,3.0553589,7,6.8886719C19,14.2626953,13.414978,19.5615234,12,20.8339844z M12,7c-1.6568604,0-3,1.3431396-3,3s1.3431396,3,3,3c1.6561279-0.0018311,2.9981689-1.3438721,3-3C15,8.3431396,13.6568604,7,12,7z M12,12c-1.1045532,0-2-0.8954468-2-2s0.8954468-2,2-2c1.1040039,0.0014038,1.9985962,0.8959961,2,2C14,11.1045532,13.1045532,12,12,12z",
                                                  },
                                                }),
                                              ]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "span",
                                              { staticClass: "mt-1" },
                                              [_vm._v("Maps")]
                                            ),
                                          ]
                                        ),
                                      ]),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        { staticClass: "col d-flex p-0" },
                                        [
                                          _c(
                                            "a",
                                            {
                                              staticClass:
                                                "dropdown-menu-item text-muted source-logo-container",
                                              attrs: { href: "calendar2.html" },
                                            },
                                            [
                                              _c(
                                                "svg",
                                                {
                                                  staticClass: "source-logo",
                                                  attrs: {
                                                    xmlns:
                                                      "http://www.w3.org/2000/svg",
                                                    "enable-background":
                                                      "new 0 0 24 24",
                                                    viewBox: "0 0 24 24",
                                                  },
                                                },
                                                [
                                                  _c("path", {
                                                    attrs: {
                                                      d: "M19.5,4h-3V2.5C16.5,2.223877,16.276123,2,16,2s-0.5,0.223877-0.5,0.5V4h-7V2.5C8.5,2.223877,8.276123,2,8,2S7.5,2.223877,7.5,2.5V4H4.4995117c-1.380127,0.0014648-2.4985352,1.119873-2.5,2.5v13c0.0014648,1.380127,1.119873,2.4985352,2.5,2.5H19.5c1.380188-0.0012817,2.4987183-1.119812,2.5-2.5v-13C21.9987183,5.119812,20.880188,4.0012817,19.5,4z M21,19.5c-0.0009155,0.828064-0.671936,1.4990845-1.5,1.5H4.4995117c-0.828064-0.0009155-1.4990845-0.671936-1.5-1.5V11H21V19.5z M21,10H2.9995117V6.5c0.0009155-0.828064,0.671936-1.4990845,1.5-1.5H7.5v1.5c0,0.0001831,0,0.0003662,0,0.0006104C7.5001831,6.7765503,7.723999,7.0001831,8,7c0.0001831,0,0.0003662,0,0.0006104,0C8.2765503,6.9998169,8.5001831,6.776001,8.5,6.5V5h7v1.5c0,0.0001831,0,0.0003662,0,0.0006104C15.5001831,6.7765503,15.723999,7.0001831,16,7c0.0001831,0,0.0003662,0,0.0006104,0C16.2765503,6.9998169,16.5001831,6.776001,16.5,6.5V5h3c0.828064,0.0009155,1.4990845,0.671936,1.5,1.5V10z",
                                                    },
                                                  }),
                                                ]
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "span",
                                                { staticClass: "mt-1" },
                                                [_vm._v("Calendar")]
                                              ),
                                            ]
                                          ),
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c("div", { staticClass: "col d-flex" }, [
                                        _c(
                                          "a",
                                          {
                                            staticClass:
                                              "dropdown-menu-item text-muted source-logo-container",
                                            attrs: { href: "mail-inbox.html" },
                                          },
                                          [
                                            _c(
                                              "svg",
                                              {
                                                staticClass: "source-logo",
                                                attrs: {
                                                  xmlns:
                                                    "http://www.w3.org/2000/svg",
                                                  "enable-background":
                                                    "new 0 0 24 24",
                                                  viewBox: "0 0 24 24",
                                                },
                                              },
                                              [
                                                _c("path", {
                                                  attrs: {
                                                    d: "M19.5,4h-15C3.119812,4.0012817,2.0012817,5.119812,2,6.5v11c0.0012817,1.380188,1.119812,2.4987183,2.5,2.5h15c1.380188-0.0012817,2.4987183-1.119812,2.5-2.5v-11C21.9987183,5.119812,20.880188,4.0012817,19.5,4z M21,17.5c-0.0009155,0.828064-0.671936,1.4990845-1.5,1.5h-15c-0.828064-0.0009155-1.4990845-0.671936-1.5-1.5V8.0913696l8.7392578,5.3353882c0.0080566,0.0048828,0.0184326,0.0030518,0.0266724,0.0075073C11.836731,13.4725952,11.9138184,13.500061,12,13.5c0.0905762,0.000061,0.1763306-0.0263672,0.2519531-0.0707397c0.0026855-0.0015869,0.0061646-0.0008545,0.0087891-0.0025024L21,8.0913696V17.5z M21,6.9194946l-0.2387695,0.145752c-0.0070801,0.0038452-0.0150146,0.0037842-0.0219727,0.0079956l-8.7313843,5.3359985L12,12.4140625l-0.0078735-0.0048218L3.2607422,7.0732422C3.2603149,7.072998,3.2598877,7.0727539,3.2594604,7.0724487c-0.006958-0.0042114-0.0149536-0.0041504-0.0220337-0.0079956L3,6.9194946V6.5C3.0009155,5.671936,3.671936,5.0009155,4.5,5h15c0.828064,0.0009155,1.4990845,0.671936,1.5,1.5V6.9194946z",
                                                  },
                                                }),
                                              ]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "span",
                                              { staticClass: "mt-1" },
                                              [_vm._v("Inbox")]
                                            ),
                                          ]
                                        ),
                                      ]),
                                    ]),
                                    _vm._v(" "),
                                    _c("div", { staticClass: "row mb-2" }, [
                                      _c("div", { staticClass: "col d-flex" }, [
                                        _c(
                                          "a",
                                          {
                                            staticClass:
                                              "dropdown-menu-item text-muted source-logo-container",
                                            attrs: { href: "chat.html" },
                                          },
                                          [
                                            _c(
                                              "svg",
                                              {
                                                staticClass: "source-logo",
                                                attrs: {
                                                  xmlns:
                                                    "http://www.w3.org/2000/svg",
                                                  "enable-background":
                                                    "new 0 0 24 24",
                                                  viewBox: "0 0 24 24",
                                                },
                                              },
                                              [
                                                _c("path", {
                                                  attrs: {
                                                    d: "M18.5,2h-13C4.119812,2.0012817,3.0012817,3.119812,3,4.5v12c0.0012817,1.380188,1.119812,2.4987183,2.5,2.5h3.2930298l2.8534546,2.8535156C11.7401123,21.9474487,11.8673706,22.0001831,12,22c0.1326294,0.0001221,0.2598267-0.0525513,0.3535156-0.1464844L15.2069702,19H18.5c1.380188-0.0012817,2.4987183-1.119812,2.5-2.5v-12C20.9987183,3.119812,19.880188,2.0012817,18.5,2z M20,16.5c-0.0009155,0.828064-0.671936,1.4990845-1.5,1.5H15c-0.1326294,0-0.2597656,0.0526733-0.3535156,0.1464844L12,20.7929688l-2.6464844-2.6464844C9.2597656,18.0526733,9.1326294,18,9,18H5.5c-0.828064-0.0009155-1.4990845-0.671936-1.5-1.5v-12C4.0009155,3.671936,4.671936,3.0009155,5.5,3h13c0.828064,0.0009155,1.4990845,0.671936,1.5,1.5V16.5z",
                                                  },
                                                }),
                                              ]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "span",
                                              { staticClass: "mt-1" },
                                              [_vm._v("Chat")]
                                            ),
                                          ]
                                        ),
                                      ]),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        { staticClass: "col d-flex p-0" },
                                        [
                                          _c(
                                            "a",
                                            {
                                              staticClass:
                                                "dropdown-menu-item text-muted source-logo-container",
                                              attrs: { href: "#" },
                                            },
                                            [
                                              _c(
                                                "svg",
                                                {
                                                  staticClass: "source-logo",
                                                  attrs: {
                                                    xmlns:
                                                      "http://www.w3.org/2000/svg",
                                                    "enable-background":
                                                      "new 0 0 24 24",
                                                    viewBox: "0 0 24 24",
                                                  },
                                                },
                                                [
                                                  _c("path", {
                                                    attrs: {
                                                      d: "M19,5h-6.1396484l-0.3163452-0.9492188C12.1364746,2.8253784,10.989624,1.9989014,9.6982422,2H5C3.3438721,2.0018311,2.0018311,3.3438721,2,5v13c0.0018311,1.6561279,1.3438721,2.9981689,3,3h14c1.6561279-0.0018311,2.9981689-1.3438721,3-3V8C21.9981689,6.3438721,20.6561279,5.0018311,19,5z M21,18c-0.0014038,1.1040039-0.8959961,1.9985962-2,2H5c-1.1040039-0.0014038-1.9985962-0.8959961-2-2V5c0.0014038-1.1040039,0.8959961-1.9985962,2-2h4.6982422c0.8607788-0.0007324,1.6251831,0.550293,1.8964844,1.3671875l0.4306641,1.2910156C12.09375,5.8622437,12.28479,5.9998169,12.5,6H19c1.1040039,0.0014038,1.9985962,0.8959961,2,2V18z",
                                                    },
                                                  }),
                                                ]
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "span",
                                                { staticClass: "mt-1" },
                                                [_vm._v("Files")]
                                              ),
                                            ]
                                          ),
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c("div", { staticClass: "col d-flex" }, [
                                        _c(
                                          "a",
                                          {
                                            staticClass:
                                              "dropdown-menu-item text-muted source-logo-container",
                                            attrs: { href: "products.html" },
                                          },
                                          [
                                            _c(
                                              "svg",
                                              {
                                                staticClass: "source-logo",
                                                attrs: {
                                                  xmlns:
                                                    "http://www.w3.org/2000/svg",
                                                  "enable-background":
                                                    "new 0 0 24 24",
                                                  viewBox: "0 0 24 24",
                                                },
                                              },
                                              [
                                                _c("path", {
                                                  attrs: {
                                                    d: "M22,2H1.9993896C1.7234497,2.0001831,1.4998169,2.223999,1.5,2.5v4c0.0009766,1.0394897,0.6361694,1.9294434,1.5390625,2.3065796C3.0140381,8.8660889,3,8.9313965,3,9v12.5005493C3.0001831,21.7765503,3.223999,22.0001831,3.5,22h17.0006104C20.7765503,21.9998169,21.0001831,21.776001,21,21.5V9c0-0.0686035-0.0140381-0.1339111-0.0390625-0.1934204C21.8638306,8.4294434,22.4990234,7.5394897,22.5,6.5V2.4993896C22.4998169,2.2234497,22.276001,1.9998169,22,2z M14.5,3h3v3.5C17.5,7.3284302,16.8284302,8,16,8s-1.5-0.6715698-1.5-1.5V3z M10.5,3h3v3.5C13.5,7.3284302,12.8284302,8,12,8s-1.5-0.6715698-1.5-1.5V3z M6.5,3h3v3.5C9.5,7.3284302,8.8284302,8,8,8S6.5,7.3284302,6.5,6.5V3z M2.5,6.5V3h3v3.5C5.5,7.3284302,4.8284302,8,4,8S2.5,7.3284302,2.5,6.5z M15,21H9v-5c0-1.6568604,1.3431396-3,3-3s3,1.3431396,3,3V21z M20,21h-4v-5c0-2.2091675-1.7908325-4-4-4s-4,1.7908325-4,4v5H4V9c0.8217163-0.0007935,1.5443726-0.4028931,2-1.0151367C6.4556274,8.5971069,7.1782837,8.9992065,8,9c0.8217163-0.0007935,1.5443726-0.4028931,2-1.0151367C10.4556274,8.5971069,11.1782837,8.9992065,12,9c0.8217163-0.0007935,1.5443726-0.4028931,2-1.0151367C14.4556274,8.5971069,15.1782837,8.9992065,16,9c0.8217163-0.0007935,1.5443726-0.4028931,2-1.0151367C18.4556274,8.5971069,19.1782837,8.9992065,20,9V21z M21.5,6.5C21.5,7.3284302,20.8284302,8,20,8s-1.5-0.6715698-1.5-1.5V3h3V6.5z",
                                                  },
                                                }),
                                              ]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "span",
                                              { staticClass: "mt-1" },
                                              [_vm._v("Shopping")]
                                            ),
                                          ]
                                        ),
                                      ]),
                                    ]),
                                    _vm._v(" "),
                                    _c("div", { staticClass: "row" }, [
                                      _c("div", { staticClass: "col d-flex" }, [
                                        _c(
                                          "a",
                                          {
                                            staticClass:
                                              "dropdown-menu-item text-muted source-logo-container",
                                            attrs: { href: "chat.html" },
                                          },
                                          [
                                            _c(
                                              "svg",
                                              {
                                                staticClass: "source-logo",
                                                attrs: {
                                                  xmlns:
                                                    "http://www.w3.org/2000/svg",
                                                  "enable-background":
                                                    "new 0 0 24 24",
                                                  viewBox: "0 0 24 24",
                                                },
                                              },
                                              [
                                                _c("path", {
                                                  attrs: {
                                                    d: "M17.3809204,13.3710938C18.934082,12.5227661,20,10.8944092,20,9c0-2.7614136-2.2385864-5-5-5c-0.140625,0.0025635-0.2809448,0.0146484-0.4199219,0.0361328l-0.1357422,0.0175781c-0.0012207,0.0001221-0.0024414,0.0002441-0.0036621,0.0004272c-0.2744141,0.0317383-0.4711304,0.2799072-0.4393921,0.5543213c0.0317993,0.2744141,0.2799683,0.4711304,0.5543823,0.4393921l0.1591797-0.0205078C14.8092041,5.0118408,14.9044189,5.0027466,15,5c2.2091675,0,4,1.7908325,4,4s-1.7908325,4-4,4c-0.276123,0-0.5,0.223877-0.5,0.5S14.723877,14,15,14c3.6798096,0.008728,6.7261353,2.8618774,6.9755859,6.5332031C21.9933472,20.7957764,22.2114258,20.9998169,22.4746094,21c0.0107422,0,0.0214844,0,0.0332031-0.0009766c0.2755127-0.0184937,0.4840088-0.2566528,0.4658203-0.5322266C22.7439575,17.0975952,20.4518433,14.3356323,17.3809204,13.3710938z M11.3793945,13.3696289C12.9319458,12.5209961,13.9978027,10.8936157,14,9c0-2.7614136-2.2385864-5-5-5S4,6.2385864,4,9c0,1.8936157,1.0650635,3.5214233,2.6171265,4.3700562c-3.0588379,0.9575195-5.3679199,3.706665-5.5907593,7.0967407c-0.0181885,0.2755737,0.1903076,0.5137329,0.4658203,0.5322266c0.0041504,0.0003052,0.0083618,0.0006104,0.0125122,0.0008545c0.2723999,0.0146484,0.5050659-0.1942749,0.5197144-0.4666748c0.2295532-3.5004272,3.0177612-6.2886963,6.5181885-6.5181885c3.8525391-0.2526245,7.1804199,2.6656494,7.4329834,6.5181885C15.9933472,20.7957764,16.2114258,20.9998169,16.4746094,21c0.0107422,0,0.0214844,0,0.0332031-0.0009766c0.2755737-0.0184937,0.4840088-0.2566528,0.4658203-0.5322266C16.7530518,17.1099243,14.4707031,14.3337402,11.3793945,13.3696289z M9,13c-2.2091675,0-4-1.7908325-4-4s1.7908325-4,4-4c2.208252,0.0021973,3.9978027,1.791748,4,4C13,11.2091675,11.2091675,13,9,13z",
                                                  },
                                                }),
                                              ]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "span",
                                              { staticClass: "mt-1" },
                                              [_vm._v("Contacts")]
                                            ),
                                          ]
                                        ),
                                      ]),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        { staticClass: "col d-flex p-0" },
                                        [
                                          _c(
                                            "a",
                                            {
                                              staticClass:
                                                "dropdown-menu-item text-muted source-logo-container",
                                              attrs: { href: "#" },
                                            },
                                            [
                                              _c(
                                                "svg",
                                                {
                                                  staticClass: "source-logo",
                                                  attrs: {
                                                    xmlns:
                                                      "http://www.w3.org/2000/svg",
                                                    "enable-background":
                                                      "new 0 0 24 24",
                                                    viewBox: "0 0 24 24",
                                                  },
                                                },
                                                [
                                                  _c("path", {
                                                    attrs: {
                                                      d: "M2.5,12h7c0.0001831,0,0.0003662,0,0.0006104,0C9.7765503,11.9998169,10.0001831,11.776001,10,11.5v-7c0-0.0001831,0-0.0003662,0-0.0006104C9.9998169,4.2234497,9.776001,3.9998169,9.5,4h-7C2.4998169,4,2.4996338,4,2.4993896,4C2.2234497,4.0001831,1.9998169,4.223999,2,4.5v7c0,0.0001831,0,0.0003662,0,0.0005493C2.0001831,11.7765503,2.223999,12.0001831,2.5,12z M3,5h6v6H3V5z M12.5,8h9C21.776123,8,22,7.776123,22,7.5S21.776123,7,21.5,7h-9C12.223877,7,12,7.223877,12,7.5S12.223877,8,12.5,8z M21.5,15h-19C2.223877,15,2,15.223877,2,15.5S2.223877,16,2.5,16h19c0.276123,0,0.5-0.223877,0.5-0.5S21.776123,15,21.5,15z M13.5,19h-11C2.223877,19,2,19.223877,2,19.5S2.223877,20,2.5,20h11c0.276123,0,0.5-0.223877,0.5-0.5S13.776123,19,13.5,19z M21.5,11h-9c-0.276123,0-0.5,0.223877-0.5,0.5s0.223877,0.5,0.5,0.5h9c0.276123,0,0.5-0.223877,0.5-0.5S21.776123,11,21.5,11z",
                                                    },
                                                  }),
                                                ]
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "span",
                                                { staticClass: "mt-1" },
                                                [_vm._v("Blog")]
                                              ),
                                            ]
                                          ),
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c("div", { staticClass: "col d-flex" }, [
                                        _c(
                                          "a",
                                          {
                                            staticClass:
                                              "dropdown-menu-item text-muted source-logo-container",
                                            attrs: { href: "products.html" },
                                          },
                                          [
                                            _c(
                                              "svg",
                                              {
                                                staticClass: "source-logo",
                                                attrs: {
                                                  xmlns:
                                                    "http://www.w3.org/2000/svg",
                                                  "enable-background":
                                                    "new 0 0 24 24",
                                                  viewBox: "0 0 24 24",
                                                },
                                              },
                                              [
                                                _c("path", {
                                                  attrs: {
                                                    d: "M21.5,21h-19C2.223877,21,2,21.223877,2,21.5S2.223877,22,2.5,22h19c0.276123,0,0.5-0.223877,0.5-0.5S21.776123,21,21.5,21z M4.5,18.0888672h5c0.1326294,0,0.2597656-0.0527344,0.3534546-0.1465454l10-10c0.000061,0,0.0001221-0.000061,0.0001831-0.0001221c0.1951294-0.1952515,0.1950684-0.5117188-0.0001831-0.7068481l-5-5c0-0.000061-0.000061-0.0001221-0.0001221-0.0001221c-0.1951904-0.1951904-0.5117188-0.1951294-0.7068481,0.0001221l-10,10C4.0526733,12.3291016,4,12.4562378,4,12.5888672v5c0,0.0001831,0,0.0003662,0,0.0005493C4.0001831,17.8654175,4.223999,18.0890503,4.5,18.0888672z M14.5,3.2958984l4.2930298,4.2929688l-2.121582,2.121582l-4.2926025-4.293396L14.5,3.2958984z M5,12.7958984l6.671814-6.671814l4.2926025,4.293396l-6.6713867,6.6713867H5V12.7958984z",
                                                  },
                                                }),
                                              ]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "span",
                                              { staticClass: "mt-1" },
                                              [_vm._v("Forms")]
                                            ),
                                          ]
                                        ),
                                      ]),
                                    ]),
                                  ]),
                                ]
                              ),
                            ]
                          ),
                          _vm._v(" "),
                          _c("div", { staticClass: "dropdown d-md-flex" }, [
                            _c(
                              "a",
                              {
                                staticClass:
                                  "nav-link icon full-screen-link nav-link-bg",
                              },
                              [
                                _c(
                                  "svg",
                                  {
                                    attrs: {
                                      xmlns: "http://www.w3.org/2000/svg",
                                      "enable-background": "new 0 0 24 24",
                                      viewBox: "0 0 24 24",
                                    },
                                  },
                                  [
                                    _c("path", {
                                      attrs: {
                                        d: "M8.5,21H3v-5.5C3,15.223877,2.776123,15,2.5,15S2,15.223877,2,15.5v6.0005493C2.0001831,21.7765503,2.223999,22.0001831,2.5,22h6C8.776123,22,9,21.776123,9,21.5S8.776123,21,8.5,21z M8.5,2H2.4993896C2.2234497,2.0001831,1.9998169,2.223999,2,2.5v6.0005493C2.0001831,8.7765503,2.223999,9.0001831,2.5,9h0.0006104C2.7765503,8.9998169,3.0001831,8.776001,3,8.5V3h5.5C8.776123,3,9,2.776123,9,2.5S8.776123,2,8.5,2z M21.5,15c-0.276123,0-0.5,0.223877-0.5,0.5V21h-5.5c-0.276123,0-0.5,0.223877-0.5,0.5s0.223877,0.5,0.5,0.5h6.0006104C21.7765503,21.9998169,22.0001831,21.776001,22,21.5v-6C22,15.223877,21.776123,15,21.5,15z M21.5,2h-6C15.223877,2,15,2.223877,15,2.5S15.223877,3,15.5,3H21v5.5005493C21.0001831,8.7765503,21.223999,9.0001831,21.5,9h0.0006104C21.7765503,8.9998169,22.0001831,8.776001,22,8.5V2.4993896C21.9998169,2.2234497,21.776001,1.9998169,21.5,2z",
                                      },
                                    }),
                                  ]
                                ),
                              ]
                            ),
                          ]),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "dropdown d-flex shopping-cart" },
                            [
                              _c(
                                "a",
                                {
                                  staticClass: "nav-link icon text-center",
                                  attrs: {
                                    href: "javascript:void(0);",
                                    "data-bs-toggle": "dropdown",
                                    "aria-expanded": "false",
                                  },
                                },
                                [
                                  _c(
                                    "svg",
                                    {
                                      attrs: {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        "enable-background": "new 0 0 24 24",
                                        viewBox: "0 0 24 24",
                                      },
                                    },
                                    [
                                      _c("path", {
                                        attrs: {
                                          d: "M9,18c-1.1045532,0-2,0.8954468-2,2s0.8954468,2,2,2c1.1040039-0.0014038,1.9985962-0.8959961,2-2C11,18.8954468,10.1045532,18,9,18z M9,21c-0.5523071,0-1-0.4476929-1-1s0.4476929-1,1-1c0.552124,0.0003662,0.9996338,0.447876,1,1C10,20.5523071,9.5523071,21,9,21z M17,18c-1.1045532,0-2,0.8954468-2,2s0.8954468,2,2,2c1.1040039-0.0014038,1.9985962-0.8959961,2-2C19,18.8954468,18.1045532,18,17,18z M17,21c-0.5523071,0-1-0.4476929-1-1s0.4476929-1,1-1c0.552124,0.0003662,0.9996338,0.447876,1,1C18,20.5523071,17.5523071,21,17,21z M19.4985352,12.0502319l1.9848633-7.4213257c0.0111694-0.0419312,0.0167847-0.085083,0.0167847-0.128479C21.5002441,4.2241211,21.2763062,4.000061,21,4H5.9198608L5.4835205,2.371582C5.4249268,2.1530151,5.2268677,2.0009766,5.0005493,2.0009766H3.5048218C3.5031128,2.0009766,3.501709,2,3.5,2C3.223877,2,3,2.223877,3,2.5S3.223877,3,3.5,3v0.0009766L4.6162109,3l2.579834,9.6288452C7.2546387,12.8477783,7.453064,13,7.6796875,13H11h6.8603516H19c0.8284302,0,1.5,0.6715698,1.5,1.5S19.8284302,16,19,16H5c-0.276123,0-0.5,0.223877-0.5,0.5S4.723877,17,5,17h14c1.3807373,0,2.5-1.1192627,2.5-2.5C21.5,13.2900391,20.6403809,12.2813721,19.4985352,12.0502319z M18.4761963,12h-0.6158447H11H8.0634766L6.1878052,5h14.1608276L18.4761963,12z",
                                        },
                                      }),
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "span",
                                    {
                                      staticClass: "badge bg-info header-badge",
                                    },
                                    [_vm._v("4")]
                                  ),
                                ]
                              ),
                              _vm._v(" "),
                              _vm._m(3),
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "dropdown d-md-flex message" },
                            [
                              _c(
                                "a",
                                {
                                  staticClass: "nav-link icon text-center",
                                  attrs: {
                                    href: "javascript:void(0);",
                                    "data-bs-toggle": "dropdown",
                                    "aria-expanded": "false",
                                  },
                                },
                                [
                                  _c(
                                    "svg",
                                    {
                                      attrs: {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        "enable-background": "new 0 0 24 24",
                                        viewBox: "0 0 24 24",
                                      },
                                    },
                                    [
                                      _c("path", {
                                        attrs: {
                                          d: "M17.4541016,11H6.5458984c-0.276123,0-0.5,0.223877-0.5,0.5s0.223877,0.5,0.5,0.5h10.9082031c0.276123,0,0.5-0.223877,0.5-0.5S17.7302246,11,17.4541016,11z M19.5,2h-15C3.119812,2.0012817,2.0012817,3.119812,2,4.5v11c0.0012817,1.380188,1.119812,2.4987183,2.5,2.5h12.7930298l3.8534546,3.8535156C21.2402344,21.9473267,21.3673706,22,21.5,22c0.276123,0,0.5-0.223877,0.5-0.5v-17C21.9987183,3.119812,20.880188,2.0012817,19.5,2z M21,20.2929688l-3.1464844-3.1464844C17.7597656,17.0526733,17.6326294,17,17.5,17h-13c-0.828064-0.0009155-1.4990845-0.671936-1.5-1.5v-11C3.0009155,3.671936,3.671936,3.0009155,4.5,3h15c0.828064,0.0009155,1.4990845,0.671936,1.5,1.5V20.2929688z M17.4541016,8H6.5458984c-0.276123,0-0.5,0.223877-0.5,0.5s0.223877,0.5,0.5,0.5h10.9082031c0.276123,0,0.5-0.223877,0.5-0.5S17.7302246,8,17.4541016,8z",
                                        },
                                      }),
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c("span", { staticClass: "pulse-danger" }),
                                ]
                              ),
                              _vm._v(" "),
                              _vm._m(4),
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "dropdown d-md-flex notifications" },
                            [
                              _c(
                                "a",
                                {
                                  staticClass: "nav-link icon",
                                  attrs: { "data-bs-toggle": "dropdown" },
                                },
                                [
                                  _c(
                                    "svg",
                                    {
                                      attrs: {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        "enable-background": "new 0 0 24 24",
                                        viewBox: "0 0 24 24",
                                      },
                                    },
                                    [
                                      _c("path", {
                                        attrs: {
                                          d: "M18,14.1V10c0-3.1-2.4-5.7-5.5-6V2.5C12.5,2.2,12.3,2,12,2s-0.5,0.2-0.5,0.5V4C8.4,4.3,6,6.9,6,10v4.1c-1.1,0.2-2,1.2-2,2.4v2C4,18.8,4.2,19,4.5,19h3.7c0.5,1.7,2,3,3.8,3c1.8,0,3.4-1.3,3.8-3h3.7c0.3,0,0.5-0.2,0.5-0.5v-2C20,15.3,19.1,14.3,18,14.1z M7,10c0-2.8,2.2-5,5-5s5,2.2,5,5v4H7V10z M13,20.8c-1.6,0.5-3.3-0.3-3.8-1.8h5.6C14.5,19.9,13.8,20.5,13,20.8z M19,18H5v-1.5C5,15.7,5.7,15,6.5,15h11c0.8,0,1.5,0.7,1.5,1.5V18z",
                                        },
                                      }),
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c("span", { staticClass: "pulse" }),
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                {
                                  staticClass:
                                    "dropdown-menu dropdown-menu-end dropdown-menu-arrow",
                                },
                                [
                                  _vm._m(5),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    {
                                      staticClass:
                                        "notifications-menu ps3 overflow-hidden",
                                    },
                                    [
                                      _c(
                                        "a",
                                        {
                                          staticClass: "dropdown-item",
                                          attrs: { href: "chat.html" },
                                        },
                                        [
                                          _c(
                                            "div",
                                            {
                                              staticClass:
                                                "notification-each d-flex",
                                            },
                                            [
                                              _c(
                                                "div",
                                                {
                                                  staticClass:
                                                    "me-3 notifyimg bg-primary brround",
                                                },
                                                [
                                                  _c(
                                                    "svg",
                                                    {
                                                      attrs: {
                                                        xmlns:
                                                          "http://www.w3.org/2000/svg",
                                                        "enable-background":
                                                          "new 0 0 24 24",
                                                        viewBox: "0 0 24 24",
                                                      },
                                                    },
                                                    [
                                                      _c("path", {
                                                        attrs: {
                                                          d: "M17.4541016,11H6.5458984c-0.276123,0-0.5,0.223877-0.5,0.5s0.223877,0.5,0.5,0.5h10.9082031c0.276123,0,0.5-0.223877,0.5-0.5S17.7302246,11,17.4541016,11z M19.5,2h-15C3.119812,2.0012817,2.0012817,3.119812,2,4.5v11c0.0012817,1.380188,1.119812,2.4987183,2.5,2.5h12.7930298l3.8534546,3.8535156C21.2402344,21.9473267,21.3673706,22,21.5,22c0.276123,0,0.5-0.223877,0.5-0.5v-17C21.9987183,3.119812,20.880188,2.0012817,19.5,2z M21,20.2929688l-3.1464844-3.1464844C17.7597656,17.0526733,17.6326294,17,17.5,17h-13c-0.828064-0.0009155-1.4990845-0.671936-1.5-1.5v-11C3.0009155,3.671936,3.671936,3.0009155,4.5,3h15c0.828064,0.0009155,1.4990845,0.671936,1.5,1.5V20.2929688z M17.4541016,8H6.5458984c-0.276123,0-0.5,0.223877-0.5,0.5s0.223877,0.5,0.5,0.5h10.9082031c0.276123,0,0.5-0.223877,0.5-0.5S17.7302246,8,17.4541016,8z",
                                                        },
                                                      }),
                                                    ]
                                                  ),
                                                ]
                                              ),
                                              _vm._v(" "),
                                              _vm._m(6),
                                            ]
                                          ),
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "a",
                                        {
                                          staticClass: "dropdown-item",
                                          attrs: { href: "chat.html" },
                                        },
                                        [
                                          _c(
                                            "div",
                                            {
                                              staticClass:
                                                "notification-each d-flex",
                                            },
                                            [
                                              _c(
                                                "div",
                                                {
                                                  staticClass:
                                                    "me-3 notifyimg bg-secondary brround",
                                                },
                                                [
                                                  _c(
                                                    "svg",
                                                    {
                                                      attrs: {
                                                        xmlns:
                                                          "http://www.w3.org/2000/svg",
                                                        "enable-background":
                                                          "new 0 0 24 24",
                                                        viewBox: "0 0 24 24",
                                                      },
                                                    },
                                                    [
                                                      _c("path", {
                                                        attrs: {
                                                          d: "M17.5078125,22.9736328h-12.5c-2.2081909-0.0023804-3.9976196-1.7918091-4-4v-8.5c0-0.276123-0.223877-0.5-0.5-0.5s-0.5,0.223877-0.5,0.5v8.5c0.0032349,2.7600708,2.2399292,4.9967651,5,5h12.5c0.276123,0,0.5-0.223877,0.5-0.5S17.7839355,22.9736328,17.5078125,22.9736328z M21.0078125,3.9736328h-14c-1.6561279,0.0018311-2.9981689,1.3438721-3,3v10c0.0018311,1.6561279,1.3438721,2.9981689,3,3h14c1.6561279-0.0018311,2.9981689-1.3438721,3-3v-10C24.0059814,5.3175049,22.6639404,3.9754639,21.0078125,3.9736328z M7.0078125,4.9736328h14c0.3700562,0.0004883,0.7122192,0.1081543,1.0094604,0.2835693l-6.9489136,6.9489136c-0.5864868,0.5839844-1.534668,0.5839844-2.1210938,0L5.9985962,5.256958C6.2957764,5.081665,6.6378784,4.9740601,7.0078125,4.9736328z M23.0078125,16.9736328c-0.0014038,1.1039429-0.8959961,1.9985352-2,2h-14c-1.1040649-0.0012817-1.9987183-0.8959351-2-2v-10c0.0004272-0.3701782,0.1082153-0.7124634,0.2836914-1.0097656l6.9487305,6.9492188c0.4683838,0.4692993,1.1045532,0.7325439,1.7675781,0.7314453c0.6630249,0.0010986,1.2991333-0.262146,1.7675781-0.7314453l6.9488525-6.9489136c0.175415,0.2972412,0.2830811,0.6394043,0.2835693,1.0094604V16.9736328z",
                                                        },
                                                      }),
                                                    ]
                                                  ),
                                                ]
                                              ),
                                              _vm._v(" "),
                                              _vm._m(7),
                                            ]
                                          ),
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "a",
                                        {
                                          staticClass: "dropdown-item",
                                          attrs: { href: "cart.html" },
                                        },
                                        [
                                          _c(
                                            "div",
                                            {
                                              staticClass:
                                                "notification-each d-flex",
                                            },
                                            [
                                              _c(
                                                "div",
                                                {
                                                  staticClass:
                                                    "me-3 notifyimg bg-info brround",
                                                },
                                                [
                                                  _c(
                                                    "svg",
                                                    {
                                                      attrs: {
                                                        xmlns:
                                                          "http://www.w3.org/2000/svg",
                                                        "enable-background":
                                                          "new 0 0 24 24",
                                                        viewBox: "0 0 24 24",
                                                      },
                                                    },
                                                    [
                                                      _c("path", {
                                                        attrs: {
                                                          d: "M19.5,7H16V5.9169922c0-2.2091064-1.7908325-4-4-4s-4,1.7908936-4,4V7H4.5C4.4998169,7,4.4996338,7,4.4993896,7C4.2234497,7.0001831,3.9998169,7.223999,4,7.5V19c0.0018311,1.6561279,1.3438721,2.9981689,3,3h10c1.6561279-0.0018311,2.9981689-1.3438721,3-3V7.5c0-0.0001831,0-0.0003662,0-0.0006104C19.9998169,7.2234497,19.776001,6.9998169,19.5,7z M9,5.9169922c0-1.6568604,1.3431396-3,3-3s3,1.3431396,3,3V7H9V5.9169922z M19,19c-0.0014038,1.1040039-0.8959961,1.9985962-2,2H7c-1.1040039-0.0014038-1.9985962-0.8959961-2-2V8h3v2.5C8,10.776123,8.223877,11,8.5,11S9,10.776123,9,10.5V8h6v2.5c0,0.0001831,0,0.0003662,0,0.0005493C15.0001831,10.7765503,15.223999,11.0001831,15.5,11c0.0001831,0,0.0003662,0,0.0006104,0C15.7765503,10.9998169,16.0001831,10.776001,16,10.5V8h3V19z",
                                                        },
                                                      }),
                                                    ]
                                                  ),
                                                ]
                                              ),
                                              _vm._v(" "),
                                              _vm._m(8),
                                            ]
                                          ),
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "a",
                                        {
                                          staticClass: "dropdown-item",
                                          attrs: { href: "blog-details.html" },
                                        },
                                        [
                                          _c(
                                            "div",
                                            {
                                              staticClass:
                                                "notification-each d-flex",
                                            },
                                            [
                                              _c(
                                                "div",
                                                {
                                                  staticClass:
                                                    "me-3 notifyimg bg-warning brround",
                                                },
                                                [
                                                  _c(
                                                    "svg",
                                                    {
                                                      attrs: {
                                                        xmlns:
                                                          "http://www.w3.org/2000/svg",
                                                        "enable-background":
                                                          "new 0 0 24 24",
                                                        viewBox: "0 0 24 24",
                                                      },
                                                    },
                                                    [
                                                      _c("path", {
                                                        attrs: {
                                                          d: "M8,13c-0.276123,0-0.5,0.223877-0.5,0.5v2c0,0.0001831,0,0.0003662,0,0.0005493C7.5001831,15.7765503,7.723999,16.0001831,8,16c0.0001831,0,0.0003662,0,0.0006104,0C8.2765503,15.9998169,8.5001831,15.776001,8.5,15.5v-2C8.5,13.223877,8.276123,13,8,13z M12,10c-0.276123,0-0.5,0.223877-0.5,0.5v5c0,0.0001831,0,0.0003662,0,0.0005493C11.5001831,15.7765503,11.723999,16.0001831,12,16c0.0001831,0,0.0003662,0,0.0006104,0c0.2759399-0.0001831,0.4995728-0.223999,0.4993896-0.5v-5C12.5,10.223877,12.276123,10,12,10z M19.4152832,5.2902832c-3.7055054-4.09552-10.02948-4.4117432-14.125-0.7062988c-4.09552,3.7055054-4.4117432,10.02948-0.7062988,14.125l-2.4375,2.4375c-0.09375,0.09375-0.1464233,0.2208862-0.1464233,0.3534546C2,21.776062,2.223877,21.999939,2.5,22H12c2.4794312-0.000061,4.8704224-0.9212646,6.7089844-2.5847168C22.8045654,15.7097778,23.1207275,9.3858032,19.4152832,5.2902832z M12,21H3.7069702l1.928772-1.9287109c0.000061-0.000061,0.0001221-0.0001221,0.0001221-0.0001831c0.1951904-0.1952515,0.1951294-0.5117188-0.0001221-0.7068481C3.9483643,16.6768799,3.0002441,14.3883667,3,12.0020142c-0.0005493-4.9700317,4.0279541-8.9994507,8.9979858-9c4.9699707-0.0005493,8.9994507,4.0279541,9,8.9979858C20.9985352,16.9699707,16.9700317,20.9994507,12,21z M16,8c-0.276123,0-0.5,0.223877-0.5,0.5v7c0,0.0001831,0,0.0003662,0,0.0005493C15.5001831,15.7765503,15.723999,16.0001831,16,16c0.0001831,0,0.0003662,0,0.0006104,0c0.2759399-0.0001831,0.4995728-0.223999,0.4993896-0.5v-7C16.5,8.223877,16.276123,8,16,8z",
                                                        },
                                                      }),
                                                    ]
                                                  ),
                                                ]
                                              ),
                                              _vm._v(" "),
                                              _vm._m(9),
                                            ]
                                          ),
                                        ]
                                      ),
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c("div", {
                                    staticClass: "dropdown-divider m-0",
                                  }),
                                  _vm._v(" "),
                                  _vm._m(10),
                                ]
                              ),
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "dropdown d-md-flex profile-1" },
                            [
                              _vm._m(11),
                              _vm._v(" "),
                              _c(
                                "div",
                                {
                                  staticClass:
                                    "dropdown-menu dropdown-menu-end dropdown-menu-arrow",
                                },
                                [
                                  _c(
                                    "a",
                                    {
                                      staticClass: "dropdown-item",
                                      attrs: { href: "profile.html" },
                                    },
                                    [
                                      _c(
                                        "svg",
                                        {
                                          staticClass: "w-inner-icn",
                                          attrs: {
                                            xmlns: "http://www.w3.org/2000/svg",
                                            "enable-background":
                                              "new 0 0 24 24",
                                            viewBox: "0 0 24 24",
                                          },
                                        },
                                        [
                                          _c("path", {
                                            attrs: {
                                              d: "M14.6650391,13.3672485C16.6381226,12.3842773,17.9974365,10.3535767,18,8c0-3.3137207-2.6862793-6-6-6S6,4.6862793,6,8c0,2.3545532,1.3595581,4.3865967,3.3334961,5.3690186c-3.6583862,1.0119019-6.5859375,4.0562134-7.2387695,8.0479736c-0.0002441,0.0013428-0.0004272,0.0026855-0.0006714,0.0040283c-0.0447388,0.272583,0.1399536,0.5297852,0.4125366,0.5745239c0.272522,0.0446777,0.5297241-0.1400146,0.5744629-0.4125366c0.624939-3.8344727,3.6308594-6.8403931,7.465332-7.465332c4.9257812-0.8027954,9.5697632,2.5395508,10.3725586,7.465332C20.9594727,21.8233643,21.1673584,21.9995117,21.4111328,22c0.0281372,0.0001831,0.0562134-0.0021362,0.0839844-0.0068359h0.0001831c0.2723389-0.0458984,0.4558716-0.303833,0.4099731-0.5761719C21.2677002,17.5184937,18.411377,14.3986206,14.6650391,13.3672485z M12,13c-2.7614136,0-5-2.2385864-5-5s2.2385864-5,5-5c2.7600708,0.0032349,4.9967651,2.2399292,5,5C17,10.7614136,14.7614136,13,12,13z",
                                            },
                                          }),
                                        ]
                                      ),
                                      _vm._v(
                                        "\n                        Profile\n                      "
                                      ),
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "a",
                                    {
                                      staticClass: "dropdown-item",
                                      attrs: { href: "mail-compose.html" },
                                    },
                                    [
                                      _c(
                                        "svg",
                                        {
                                          staticClass: "w-inner-icn",
                                          attrs: {
                                            xmlns: "http://www.w3.org/2000/svg",
                                            "enable-background":
                                              "new 0 0 24 24",
                                            viewBox: "0 0 24 24",
                                          },
                                        },
                                        [
                                          _c("path", {
                                            attrs: {
                                              d: "M19.5,7H18V6c-0.0018311-1.6561279-1.3438721-2.9981689-3-3H4.5C3.119812,3.0012817,2.0012817,4.119812,2,5.5V18c0.0018311,1.6561279,1.3438721,2.9981689,3,3h14.5c1.380188-0.0012817,2.4987183-1.119812,2.5-2.5v-9C21.9987183,8.119812,20.880188,7.0012817,19.5,7z M4.5,4H15c1.1040039,0.0014038,1.9985962,0.8959961,2,2v1H4.5C3.6715698,7,3,6.3284302,3,5.5S3.6715698,4,4.5,4z M21,16h-2c-1.1045532,0-2-0.8954468-2-2s0.8954468-2,2-2h2V16z M21,11h-2c-1.6568604,0-3,1.3431396-3,3s1.3431396,3,3,3h2v1.5c-0.0009155,0.828064-0.671936,1.4990845-1.5,1.5H5c-1.1040039-0.0014038-1.9985962-0.8959961-2-2V7.4990234C3.4321899,7.8247681,3.9588013,8.0006714,4.5,8h15c0.828064,0.0009155,1.4990845,0.671936,1.5,1.5V11z",
                                            },
                                          }),
                                        ]
                                      ),
                                      _vm._v(
                                        "\n                        My Wallet\n                        "
                                      ),
                                      _c(
                                        "span",
                                        {
                                          staticClass:
                                            "badge bg-secondary float-end",
                                        },
                                        [_vm._v("3")]
                                      ),
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "a",
                                    {
                                      staticClass: "dropdown-item",
                                      attrs: { href: "mail-inbox.html" },
                                    },
                                    [
                                      _c(
                                        "svg",
                                        {
                                          staticClass: "w-inner-icn",
                                          attrs: {
                                            xmlns: "http://www.w3.org/2000/svg",
                                            "enable-background":
                                              "new 0 0 24 24",
                                            viewBox: "0 0 24 24",
                                          },
                                        },
                                        [
                                          _c("path", {
                                            attrs: {
                                              d: "M12,8.5c-1.9329834,0-3.5,1.5670166-3.5,3.5s1.5670166,3.5,3.5,3.5c1.9320068-0.0023193,3.4976807-1.5679932,3.5-3.5C15.5,10.0670166,13.9329834,8.5,12,8.5z M12,14.5c-1.3807373,0-2.5-1.1192627-2.5-2.5s1.1192627-2.5,2.5-2.5c1.380127,0.0014648,2.4985352,1.119873,2.5,2.5C14.5,13.3807373,13.3807373,14.5,12,14.5z M21.1582031,10.0253906l-1.8867188-0.6289062c-0.0222168-0.0074463-0.0439453-0.0164185-0.0648804-0.0268555c-0.2470093-0.12323-0.3474121-0.4234009-0.2241821-0.6704102l0.8896484-1.7783203c0.0960083-0.1925659,0.0582275-0.4248657-0.09375-0.5771484l-2.1210938-2.1220703c-0.1524658-0.1516113-0.3845215-0.1893311-0.5771484-0.09375l-1.7792969,0.8896484c-0.0209961,0.010437-0.0426636,0.0194092-0.0648804,0.0268555c-0.2618408,0.0874023-0.5449829-0.0540771-0.6323853-0.315918l-0.6289062-1.8867188C13.90625,2.6377563,13.71521,2.5001831,13.5,2.5h-3c-0.21521-0.0001221-0.40625,0.1376343-0.4741821,0.3417969L9.3969116,4.7285156C9.3518677,4.8665161,9.24823,4.9776001,9.1137085,5.0322266c-0.1335449,0.057373-0.2857666,0.052002-0.414978-0.0146484L6.9204102,4.1279297c-0.1925049-0.0960693-0.4249268-0.0583496-0.5771484,0.09375L4.2216797,6.34375c-0.1522217,0.1521606-0.1900024,0.3846436-0.09375,0.5771484l0.8896484,1.7783203c0.0107422,0.0214233,0.0198975,0.0435791,0.0274658,0.0662842c0.086792,0.2616577-0.0548706,0.5441284-0.3165283,0.6309814l-1.8867188,0.6289062C2.6377563,10.09375,2.5001831,10.28479,2.5,10.5v3c0.0001831,0.21521,0.1377563,0.40625,0.3417969,0.4746094l1.8862305,0.6289062c0.0224609,0.0074463,0.0444336,0.0165405,0.0656128,0.0270996c0.2468872,0.12323,0.347168,0.4232788,0.223938,0.670166l-0.8896484,1.7783203c-0.0962524,0.1925049-0.0584717,0.4249878,0.09375,0.5771484l2.1216431,2.1220703c0.1523438,0.1519165,0.3845825,0.1896362,0.5771484,0.09375l1.7783203-0.8896484c0.1289673-0.067627,0.2816162-0.072998,0.4150391-0.0146484c0.1344604,0.0546265,0.2380981,0.1657104,0.2831421,0.3037109l0.6289062,1.8867188C10.093811,21.3623657,10.2848511,21.500061,10.5,21.5h3c0.21521-0.0001831,0.40625-0.1378174,0.4746094-0.3418579l0.6289062-1.8867188c0.0074463-0.0222168,0.0164185-0.0438843,0.0268555-0.0648804c0.12323-0.2470093,0.4234009-0.3474121,0.6704102-0.2241821l1.7792969,0.8896484c0.192688,0.0950928,0.4244995,0.0574341,0.5771484-0.09375l2.1210938-2.1220703c0.1519775-0.1522217,0.1897583-0.3845825,0.09375-0.5771484l-0.8896484-1.7783203c-0.0651855-0.1295776-0.0705566-0.2811279-0.0146484-0.414978c0.0546265-0.1342773,0.1657715-0.2375488,0.3037109-0.2822266l1.8867188-0.6289062C21.3622437,13.90625,21.4998169,13.71521,21.5,13.5v-3C21.4998169,10.28479,21.3622437,10.09375,21.1582031,10.0253906z M20.5,13.1396484l-1.5449219,0.5146484c-0.0671997,0.0223999-0.1326904,0.0495605-0.1960449,0.0811768c-0.7410889,0.3704224-1.0415649,1.2714844-0.6711426,2.0125732l0.7285156,1.4560547l-1.6113281,1.6123047l-1.4570312-0.7285156c-0.0639648-0.0320435-0.130127-0.0594482-0.197998-0.0820312c-0.7856445-0.2613525-1.6343994,0.1636353-1.895752,0.9492188L13.1396484,20.5h-2.2792969l-0.5151978-1.5449219c-0.0223389-0.0669556-0.0493774-0.1322021-0.0809326-0.1953125c-0.3702393-0.741394-1.2714233-1.0421753-2.0128174-0.671875l-1.4559937,0.7285156l-1.6118164-1.6123047l0.7285156-1.4560547c0.0314941-0.0631104,0.0585327-0.128418,0.0808716-0.1953125c0.2622681-0.7861938-0.1623535-1.6361084-0.9485474-1.8984375L3.5,13.1396484v-2.2792969l1.5449219-0.5145874c0.0666504-0.0222778,0.1317139-0.0492554,0.1945801-0.0806274c0.7416382-0.3701782,1.0427856-1.2714844,0.6726074-2.0131226L5.1835938,6.7958984l1.6118774-1.6123047l1.4559937,0.7285156C8.3145752,5.9436646,8.3798218,5.9707031,8.4467773,5.993042c0.7860718,0.2623901,1.6359863-0.1620483,1.8984375-0.9481201L10.8603516,3.5h2.2792969l0.5147095,1.5449219c0.022583,0.0678711,0.0499878,0.1340332,0.0820312,0.197998c0.3707275,0.7403564,1.2713623,1.039917,2.0117188,0.6691895l1.4569702-0.7285156l1.6113281,1.6123657l-0.7285156,1.4560547c-0.0320435,0.0639038-0.0594482,0.1300659-0.0820312,0.197937c-0.2613525,0.7856445,0.1636353,1.6343384,0.9492188,1.895752L20.5,10.8603516V13.1396484z",
                                            },
                                          }),
                                        ]
                                      ),
                                      _vm._v(
                                        "\n                        Settings\n                      "
                                      ),
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "a",
                                    {
                                      staticClass: "dropdown-item",
                                      attrs: { href: "faq.html" },
                                    },
                                    [
                                      _c(
                                        "svg",
                                        {
                                          staticClass: "w-inner-icn",
                                          attrs: {
                                            xmlns: "http://www.w3.org/2000/svg",
                                            "enable-background":
                                              "new 0 0 24 24",
                                            viewBox: "0 0 24 24",
                                          },
                                        },
                                        [
                                          _c("path", {
                                            attrs: {
                                              d: "M2.5,9c0.0001831,0,0.0003662,0,0.0006104,0C2.7765503,8.9998169,3.0001831,8.776001,3,8.5V3h5.5C8.776123,3,9,2.776123,9,2.5S8.776123,2,8.5,2h-6C2.4998169,2,2.4996338,2,2.4993896,2C2.2234497,2.0001831,1.9998169,2.223999,2,2.5v6c0,0.0001831,0,0.0003662,0,0.0005493C2.0001831,8.7765503,2.223999,9.0001831,2.5,9z M8.5,21H3v-5.5C3,15.223877,2.776123,15,2.5,15S2,15.223877,2,15.5v6c0,0.0001831,0,0.0003662,0,0.0005493C2.0001831,21.7765503,2.223999,22.0001831,2.5,22h6C8.776123,22,9,21.776123,9,21.5S8.776123,21,8.5,21z M21.5,2h-6C15.223877,2,15,2.223877,15,2.5S15.223877,3,15.5,3H21v5.5c0,0.0001831,0,0.0003662,0,0.0005493C21.0001831,8.7765503,21.223999,9.0001831,21.5,9c0.0001831,0,0.0003662,0,0.0006104,0C21.7765503,8.9998169,22.0001831,8.776001,22,8.5v-6c0-0.0001831,0-0.0003662,0-0.0006104C21.9998169,2.2234497,21.776001,1.9998169,21.5,2z M17,16v-4c-0.0014038-1.1040039-0.8959961-1.9985962-2-2V9c0-1.6568604-1.3431396-3-3-3S9,7.3431396,9,9v1c-1.1040039,0.0014038-1.9985962,0.8959961-2,2v4c0.0014038,1.1040039,0.8959961,1.9985962,2,2h6C16.1040039,17.9985962,16.9985962,17.1040039,17,16z M10,9c0-1.1045532,0.8954468-2,2-2s2,0.8954468,2,2v1h-4V9z M8,16v-4c0.0003662-0.552124,0.447876-0.9996338,1-1h0.5h5h0.0006104H15c0.552124,0.0003662,0.9996338,0.447876,1,1v4c-0.0003662,0.552124-0.447876,0.9996338-1,1H9C8.447876,16.9996338,8.0003662,16.552124,8,16z M21.5,15c-0.276123,0-0.5,0.223877-0.5,0.5V21h-5.5c-0.276123,0-0.5,0.223877-0.5,0.5s0.223877,0.5,0.5,0.5h6c0.0001831,0,0.0003662,0,0.0006104,0C21.7765503,21.9998169,22.0001831,21.776001,22,21.5v-6C22,15.223877,21.776123,15,21.5,15z",
                                            },
                                          }),
                                        ]
                                      ),
                                      _vm._v(
                                        "\n                        Lock Screen\n                      "
                                      ),
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "a",
                                    {
                                      staticClass: "dropdown-item",
                                      attrs: { href: "login.html" },
                                    },
                                    [
                                      _c(
                                        "svg",
                                        {
                                          staticClass: "w-inner-icn",
                                          attrs: {
                                            xmlns: "http://www.w3.org/2000/svg",
                                            "enable-background":
                                              "new 0 0 24 24",
                                            viewBox: "0 0 24 24",
                                          },
                                        },
                                        [
                                          _c("path", {
                                            attrs: {
                                              d: "M10.6523438,16.140625c-0.09375,0.09375-0.1464233,0.2208862-0.1464233,0.3534546c0,0.276123,0.2238159,0.5,0.499939,0.500061c0.1326294,0.0001221,0.2598267-0.0525513,0.3534546-0.1464844l4.4941406-4.4941406c0.000061-0.000061,0.0001221-0.000061,0.0001831-0.0001221c0.1951294-0.1952515,0.1950684-0.5117188-0.0001831-0.7068481L11.359314,7.1524048c-0.1937256-0.1871338-0.5009155-0.1871338-0.6947021,0c-0.1986084,0.1918335-0.2041016,0.5083618-0.0122681,0.7069702L14.2930298,11.5H2.5C2.223877,11.5,2,11.723877,2,12s0.223877,0.5,0.5,0.5h11.7930298L10.6523438,16.140625z M16.4199829,3.0454102C11.4741821,0.5905762,5.4748535,2.6099243,3.0200195,7.5556641C2.8970337,7.8029175,2.9978027,8.1030884,3.2450562,8.2260742C3.4923706,8.3490601,3.7925415,8.248291,3.9155273,8.0010376c0.8737793-1.7612305,2.300354-3.1878052,4.0615845-4.0615845C12.428833,1.730835,17.828064,3.5492554,20.0366821,8.0010376c2.2085571,4.4517212,0.3901367,9.8509521-4.0615845,12.0595703c-4.4517212,2.2085571-9.8510132,0.3901367-12.0595703-4.0615845c-0.1229858-0.2473145-0.4231567-0.3480835-0.6704102-0.2250977c-0.2473145,0.1229858-0.3480835,0.4230957-0.2250977,0.6704102c1.6773682,3.4109497,5.1530762,5.5667114,8.9541016,5.5537109c3.7976685,0.0003662,7.2676392-2.1509399,8.9560547-5.5526733C23.3850098,11.4996338,21.3657227,5.5002441,16.4199829,3.0454102z",
                                            },
                                          }),
                                        ]
                                      ),
                                      _vm._v(
                                        "\n                        Log out\n                      "
                                      ),
                                    ]
                                  ),
                                ]
                              ),
                            ]
                          ),
                        ]),
                      ]
                    ),
                  ]
                ),
              ]
            ),
          ]),
        ]),
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "sticky" }, [
        _c("div", {
          staticClass: "app-sidebar__overlay",
          attrs: { "data-bs-toggle": "sidebar" },
        }),
        _vm._v(" "),
        _c("div", { staticClass: "app-sidebar" }, [
          _vm._m(12),
          _vm._v(" "),
          _c("div", { staticClass: "main-sidemenu" }, [
            _c(
              "div",
              {
                staticClass: "slide-left disabled",
                attrs: { id: "slide-left" },
              },
              [
                _c(
                  "svg",
                  {
                    attrs: {
                      xmlns: "http://www.w3.org/2000/svg",
                      fill: "#7b8191",
                      width: "24",
                      height: "24",
                      viewBox: "0 0 24 24",
                    },
                  },
                  [
                    _c("path", {
                      attrs: {
                        d: "M13.293 6.293 7.586 12l5.707 5.707 1.414-1.414L10.414 12l4.293-4.293z",
                      },
                    }),
                  ]
                ),
              ]
            ),
            _vm._v(" "),
            _c("ul", { staticClass: "side-menu" }, [
              _vm._m(13),
              _vm._v(" "),
              _c("li", { staticClass: "slide" }, [
                _c(
                  "a",
                  {
                    staticClass: "side-menu__item has-link",
                    attrs: { "data-bs-toggle": "slide", href: "index.html" },
                  },
                  [
                    _c(
                      "svg",
                      {
                        staticClass: "side-menu__icon",
                        attrs: {
                          xmlns: "http://www.w3.org/2000/svg",
                          "enable-background": "new 0 0 24 24",
                          viewBox: "0 0 24 24",
                        },
                      },
                      [
                        _c("path", {
                          attrs: {
                            d: "M19.9794922,7.9521484l-6-5.2666016c-1.1339111-0.9902344-2.8250732-0.9902344-3.9589844,0l-6,5.2666016C3.3717041,8.5219116,2.9998169,9.3435669,3,10.2069702V19c0.0018311,1.6561279,1.3438721,2.9981689,3,3h2.5h7c0.0001831,0,0.0003662,0,0.0006104,0H18c1.6561279-0.0018311,2.9981689-1.3438721,3-3v-8.7930298C21.0001831,9.3435669,20.6282959,8.5219116,19.9794922,7.9521484z M15,21H9v-6c0.0014038-1.1040039,0.8959961-1.9985962,2-2h2c1.1040039,0.0014038,1.9985962,0.8959961,2,2V21z M20,19c-0.0014038,1.1040039-0.8959961,1.9985962-2,2h-2v-6c-0.0018311-1.6561279-1.3438721-2.9981689-3-3h-2c-1.6561279,0.0018311-2.9981689,1.3438721-3,3v6H6c-1.1040039-0.0014038-1.9985962-0.8959961-2-2v-8.7930298C3.9997559,9.6313477,4.2478027,9.0836182,4.6806641,8.7041016l6-5.2666016C11.0455933,3.1174927,11.5146484,2.9414673,12,2.9423828c0.4853516-0.0009155,0.9544067,0.1751099,1.3193359,0.4951172l6,5.2665405C19.7521973,9.0835571,20.0002441,9.6313477,20,10.2069702V19z",
                          },
                        }),
                      ]
                    ),
                    _vm._v(" "),
                    _c("span", { staticClass: "side-menu__label" }, [
                      _vm._v("Dashboard"),
                    ]),
                  ]
                ),
              ]),
              _vm._v(" "),
              _vm._m(14),
              _vm._v(" "),
              _c("li", { staticClass: "slide" }, [
                _c(
                  "a",
                  {
                    staticClass: "side-menu__item",
                    attrs: { "data-bs-toggle": "slide", href: "#" },
                  },
                  [
                    _c(
                      "svg",
                      {
                        staticClass: "side-menu__icon",
                        attrs: {
                          xmlns: "http://www.w3.org/2000/svg",
                          "enable-background": "new 0 0 24 24",
                          viewBox: "0 0 24 24",
                        },
                      },
                      [
                        _c("path", {
                          attrs: {
                            d: "M21.5,21h-19C2.223877,21,2,21.223877,2,21.5S2.223877,22,2.5,22h19c0.276123,0,0.5-0.223877,0.5-0.5S21.776123,21,21.5,21z M4.5,18.0888672h5c0.1326294,0,0.2597656-0.0527344,0.3534546-0.1465454l10-10c0.000061,0,0.0001221-0.000061,0.0001831-0.0001221c0.1951294-0.1952515,0.1950684-0.5117188-0.0001831-0.7068481l-5-5c0-0.000061-0.000061-0.0001221-0.0001221-0.0001221c-0.1951904-0.1951904-0.5117188-0.1951294-0.7068481,0.0001221l-10,10C4.0526733,12.3291016,4,12.4562378,4,12.5888672v5c0,0.0001831,0,0.0003662,0,0.0005493C4.0001831,17.8654175,4.223999,18.0890503,4.5,18.0888672z M14.5,3.2958984l4.2930298,4.2929688l-2.121582,2.121582l-4.2926025-4.293396L14.5,3.2958984z M5,12.7958984l6.671814-6.671814l4.2926025,4.293396l-6.6713867,6.6713867H5V12.7958984z",
                          },
                        }),
                      ]
                    ),
                    _vm._v(" "),
                    _c("span", { staticClass: "side-menu__label" }, [
                      _vm._v("Forms"),
                    ]),
                    _c("i", { staticClass: "angle fa fa-angle-right" }),
                  ]
                ),
                _vm._v(" "),
                _vm._m(15),
              ]),
              _vm._v(" "),
              _c("li", { staticClass: "slide" }, [
                _c(
                  "a",
                  {
                    staticClass: "side-menu__item",
                    attrs: { "data-bs-toggle": "slide", href: "#" },
                  },
                  [
                    _c(
                      "svg",
                      {
                        staticClass: "side-menu__icon",
                        attrs: {
                          xmlns: "http://www.w3.org/2000/svg",
                          "enable-background": "new 0 0 24 24",
                          viewBox: "0 0 24 24",
                        },
                      },
                      [
                        _c("path", {
                          attrs: {
                            d: "M19,2H9C7.3438721,2.0018311,6.0018311,3.3438721,6,5v1H5C3.3438721,6.0018311,2.0018311,7.3438721,2,9v10c0.0018311,1.6561279,1.3438721,2.9981689,3,3h10c1.6561279-0.0018311,2.9981689-1.3438721,3-3v-1h1c1.6561279-0.0018311,2.9981689-1.3438721,3-3V5C21.9981689,3.3438721,20.6561279,2.0018311,19,2z M17,19c-0.0014038,1.1040039-0.8959961,1.9985962-2,2H5c-1.1040039-0.0014038-1.9985962-0.8959961-2-2v-8h14V19z M17,10H3V9c0.0014038-1.1040039,0.8959961-1.9985962,2-2h10c1.1040039,0.0014038,1.9985962,0.8959961,2,2V10z M21,15c-0.0014038,1.1040039-0.8959961,1.9985962-2,2h-1V9c-0.0008545-0.7719116-0.3010864-1.4684448-0.7803345-2H21V15z M21,6H7V5c0.0014038-1.1040039,0.8959961-1.9985962,2-2h10c1.1040039,0.0014038,1.9985962,0.8959961,2,2V6z",
                          },
                        }),
                      ]
                    ),
                    _vm._v(" "),
                    _c("span", { staticClass: "side-menu__label" }, [
                      _vm._v("Tables"),
                    ]),
                    _c("i", { staticClass: "angle fa fa-angle-right" }),
                  ]
                ),
                _vm._v(" "),
                _vm._m(16),
              ]),
              _vm._v(" "),
              _c("li", { staticClass: "slide" }, [
                _c(
                  "a",
                  {
                    staticClass: "side-menu__item has-link",
                    attrs: {
                      "data-bs-toggle": "slide",
                      href: "landing.html",
                      target: "_blank",
                    },
                  },
                  [
                    _c(
                      "svg",
                      {
                        staticClass: "side-menu__icon",
                        attrs: {
                          xmlns: "http://www.w3.org/2000/svg",
                          "enable-background": "new 0 0 24 24",
                          viewBox: "0 0 24 24",
                        },
                      },
                      [
                        _c("path", {
                          attrs: {
                            d: "M21.6,2.7c0-0.2-0.2-0.3-0.4-0.4c-3.8-1-7.9,0.3-10.4,3.3L9.5,7.1L6.8,6.4C5.7,6,4.6,6.5,4.1,7.5L2,11.2c0,0,0,0.1-0.1,0.1c-0.1,0.3,0.1,0.5,0.4,0.6l3.4,0.7c-0.3,0.9-0.6,1.8-0.7,2.7c0,0.2,0,0.3,0.1,0.4l3,2.9c0.1,0.1,0.2,0.1,0.4,0.1c0,0,0,0,0,0c0.9-0.1,1.9-0.3,2.8-0.6l0.7,3.3c0,0.2,0.3,0.4,0.5,0.4c0.1,0,0.2,0,0.2-0.1l3.7-2.1c0.9-0.5,1.3-1.6,1.1-2.6l-0.7-2.9l1.4-1.3C21.3,10.5,22.6,6.5,21.6,2.7z M3.2,11.1L4.9,8c0.3-0.6,0.9-0.8,1.5-0.6l2.3,0.6L7.7,9.2c-0.6,0.8-1.2,1.6-1.6,2.5L3.2,11.1z M16,19l-3.1,1.8l-0.6-2.9c0.9-0.4,1.7-1,2.5-1.6l1.3-1.2l0.6,2.3C16.7,18,16.5,18.7,16,19z M17.6,12.3l-3.5,3.2c-1.5,1.3-3.4,2.1-5.4,2.3l-2.6-2.6c0.3-2,1.1-3.9,2.4-5.4L10.1,8c0,0,0.1-0.1,0.1-0.1l1.4-1.6c2.2-2.6,5.8-3.8,9.1-3.1C21.4,6.6,20.3,10.1,17.6,12.3z M16.4,5.6c-1.1,0-1.9,0.9-1.9,1.9s0.9,1.9,1.9,1.9c1.1,0,1.9-0.9,1.9-1.9C18.3,6.5,17.5,5.6,16.4,5.6z M16.4,8.5c-0.5,0-0.9-0.4-0.9-0.9c0-0.5,0.4-0.9,0.9-0.9c0.5,0,0.9,0.4,0.9,0.9C17.3,8.1,16.9,8.5,16.4,8.5z",
                          },
                        }),
                      ]
                    ),
                    _vm._v(" "),
                    _c("span", { staticClass: "side-menu__label" }, [
                      _vm._v("Landing"),
                    ]),
                    _vm._v(" "),
                    _c(
                      "span",
                      { staticClass: "badge badge-sm bg-secondary badge-hide" },
                      [_vm._v("new")]
                    ),
                  ]
                ),
              ]),
              _vm._v(" "),
              _c("li", { staticClass: "slide" }, [
                _c(
                  "a",
                  {
                    staticClass: "side-menu__item",
                    attrs: { "data-bs-toggle": "slide", href: "#" },
                  },
                  [
                    _c(
                      "svg",
                      {
                        staticClass: "side-menu__icon",
                        attrs: {
                          xmlns: "http://www.w3.org/2000/svg",
                          "enable-background": "new 0 0 24 24",
                          viewBox: "0 0 24 24",
                        },
                      },
                      [
                        _c("path", {
                          attrs: {
                            d: "M21.5,21H20V4.5C20,4.223877,19.776123,4,19.5,4S19,4.223877,19,4.5V21h-3v-8.5c0-0.276123-0.223877-0.5-0.5-0.5S15,12.223877,15,12.5V21h-3V8.5C12,8.223877,11.776123,8,11.5,8S11,8.223877,11,8.5V21H8v-4.5C8,16.223877,7.776123,16,7.5,16S7,16.223877,7,16.5V21H3V2.5C3,2.223877,2.776123,2,2.5,2S2,2.223877,2,2.5v19.0005493C2.0001831,21.7765503,2.223999,22.0001831,2.5,22h19c0.276123,0,0.5-0.223877,0.5-0.5S21.776123,21,21.5,21z",
                          },
                        }),
                      ]
                    ),
                    _vm._v(" "),
                    _c("span", { staticClass: "side-menu__label" }, [
                      _vm._v("Charts"),
                    ]),
                    _c("i", { staticClass: "angle fa fa-angle-right" }),
                  ]
                ),
                _vm._v(" "),
                _vm._m(17),
              ]),
              _vm._v(" "),
              _c("li", { staticClass: "slide" }, [
                _c(
                  "a",
                  {
                    staticClass: "side-menu__item",
                    attrs: { "data-bs-toggle": "slide", href: "#" },
                  },
                  [
                    _c(
                      "svg",
                      {
                        staticClass: "side-menu__icon",
                        attrs: {
                          xmlns: "http://www.w3.org/2000/svg",
                          "enable-background": "new 0 0 24 24",
                          viewBox: "0 0 24 24",
                        },
                      },
                      [
                        _c("path", {
                          attrs: {
                            d: "M12,2C6.4771729,2,2,6.4771729,2,12s4.4771729,10,10,10c5.5201416-0.0064697,9.9935303-4.4798584,10-10C22,6.4771729,17.5228271,2,12,2z M19.7819214,7.5h-9.2255249l2.5594482-4.4225464C15.9681396,3.4337769,18.4015503,5.1206055,19.7819214,7.5z M14.0211182,8.5l2.0198364,3.503479L14.0192871,15.5H9.9798584l-2.0228882-3.5084229L9.9776611,8.5H14.0211182z M12,3c0.0019531,0,0.0038452,0.0003052,0.0057983,0.0003052L7.380249,10.991272L4.8326416,6.5727539C6.4761353,4.4058838,9.0706177,3,12,3z M3,12c0-1.6405029,0.4459839-3.1737671,1.2128296-4.49823L8.8244019,15.5H3.7061157C3.2515259,14.4241333,3,13.2414551,3,12z M4.2138672,16.5h9.2272339l-2.5576782,4.423584C8.0288696,20.5695801,5.5935059,18.8815918,4.2138672,16.5z M12,21c-0.0021362,0-0.0041504-0.0003052-0.0062866-0.0003052l4.6235962-7.996582l2.550354,4.4237671C17.524231,19.5939941,14.9295654,21,12,21z M15.1746826,8.5h5.1159668C20.7460938,9.5758057,20.9986572,10.7584839,21,12c0,1.6407471-0.446106,3.1741943-1.2131348,4.4987183L15.1746826,8.5z",
                          },
                        }),
                      ]
                    ),
                    _vm._v(" "),
                    _c("span", { staticClass: "side-menu__label" }, [
                      _vm._v("Icons"),
                    ]),
                    _c("i", { staticClass: "angle fa fa-angle-right" }),
                  ]
                ),
                _vm._v(" "),
                _vm._m(18),
              ]),
              _vm._v(" "),
              _c("li", { staticClass: "slide" }, [
                _c(
                  "a",
                  {
                    staticClass: "side-menu__item",
                    attrs: { "data-bs-toggle": "slide", href: "#" },
                  },
                  [
                    _c(
                      "svg",
                      {
                        staticClass: "side-menu__icon",
                        attrs: {
                          xmlns: "http://www.w3.org/2000/svg",
                          "enable-background": "new 0 0 24 24",
                          viewBox: "0 0 24 24",
                        },
                      },
                      [
                        _c("path", {
                          attrs: {
                            d: "M12.1124268,2.0010986C7.6941528,1.9389648,4.0620728,5.4703979,4,9.8886719c0,5.4482422,7.3642578,11.7285156,7.6777344,11.9931641C11.7677002,21.958313,11.881958,22.0001831,12,22c0.118042,0.0001831,0.2322998-0.041687,0.3222656-0.1181641C12.6357422,21.6171875,20,15.3369141,20,9.8886719C19.9391479,5.5579224,16.4431763,2.0619507,12.1124268,2.0010986z M12,20.8339844C10.5839844,19.5625,5,14.2666016,5,9.8886719C5.0353394,6.0553589,8.166626,2.973877,12,3c3.833374-0.026123,6.9647217,3.0553589,7,6.8886719C19,14.2626953,13.414978,19.5615234,12,20.8339844z M12,7c-1.6568604,0-3,1.3431396-3,3s1.3431396,3,3,3c1.6561279-0.0018311,2.9981689-1.3438721,3-3C15,8.3431396,13.6568604,7,12,7z M12,12c-1.1045532,0-2-0.8954468-2-2s0.8954468-2,2-2c1.1040039,0.0014038,1.9985962,0.8959961,2,2C14,11.1045532,13.1045532,12,12,12z",
                          },
                        }),
                      ]
                    ),
                    _vm._v(" "),
                    _c("span", { staticClass: "side-menu__label" }, [
                      _vm._v("Maps"),
                    ]),
                    _c("i", { staticClass: "angle fa fa-angle-right" }),
                  ]
                ),
                _vm._v(" "),
                _vm._m(19),
              ]),
              _vm._v(" "),
              _vm._m(20),
              _vm._v(" "),
              _c("li", { staticClass: "slide" }, [
                _c(
                  "a",
                  {
                    staticClass: "side-menu__item",
                    attrs: { "data-bs-toggle": "slide", href: "#" },
                  },
                  [
                    _c(
                      "svg",
                      {
                        staticClass: "side-menu__icon",
                        attrs: {
                          xmlns: "http://www.w3.org/2000/svg",
                          "enable-background": "new 0 0 24 24",
                          viewBox: "0 0 24 24",
                        },
                      },
                      [
                        _c("path", {
                          attrs: {
                            d: "M18,14c-1.4293213,0-2.6744385,0.7554932-3.3817749,1.8830566l-4.9604492-2.2773438C9.8745117,13.1135864,9.9994507,12.5721436,10,12c0-0.5722656-0.1245728-1.1138916-0.3410645-1.6062012l4.9593506-2.2767944C15.3256226,9.2445068,16.5707397,10,18,10c2.208252-0.0021973,3.9978027-1.791748,4-4c0-2.2091675-1.7908325-4-4-4s-4,1.7908325-4,4c0,0.4233398,0.0836182,0.8234253,0.2055054,1.2064209L9.1296997,9.5366821C8.3972168,8.607666,7.2749023,8,6,8c-2.2091675,0-4,1.7908325-4,4s1.7908325,4,4,4c1.2741699-0.0012817,2.3956909-0.6087646,3.1281738-1.5372925l5.0773315,2.3308716C14.0836182,17.1765747,14,17.5766602,14,18c0,2.2091675,1.7908325,4,4,4c2.208252-0.0021973,3.9978027-1.791748,4-4C22,15.7908325,20.2091675,14,18,14z M18,3c1.6561279,0.0018311,2.9981689,1.3438721,3,3c0,1.6568604-1.3431396,3-3,3s-3-1.3431396-3-3S16.3431396,3,18,3z M6,15c-1.6568604,0-3-1.3431396-3-3s1.3431396-3,3-3c1.6561279,0.0018311,2.9981689,1.3438721,3,3C9,13.6568604,7.6568604,15,6,15z M18,21c-1.6568604,0-3-1.3431396-3-3s1.3431396-3,3-3c1.6561279,0.0018311,2.9981689,1.3438721,3,3C21,19.6568604,19.6568604,21,18,21z",
                          },
                        }),
                      ]
                    ),
                    _vm._v(" "),
                    _c("span", { staticClass: "side-menu__label" }, [
                      _vm._v("Sub-menus"),
                    ]),
                    _c("i", { staticClass: "angle fa fa-angle-right" }),
                  ]
                ),
                _vm._v(" "),
                _vm._m(21),
              ]),
              _vm._v(" "),
              _vm._m(22),
              _vm._v(" "),
              _c("li", { staticClass: "slide" }, [
                _c(
                  "a",
                  {
                    staticClass: "side-menu__item",
                    attrs: { "data-bs-toggle": "slide", href: "#" },
                  },
                  [
                    _c(
                      "svg",
                      {
                        staticClass: "side-menu__icon",
                        attrs: {
                          xmlns: "http://www.w3.org/2000/svg",
                          "enable-background": "new 0 0 24 24",
                          viewBox: "0 0 24 24",
                        },
                      },
                      [
                        _c("path", {
                          attrs: {
                            d: "M21.5,13h-8.0005493C13.2234497,13.0001831,12.9998169,13.223999,13,13.5v8.0005493C13.0001831,21.7765503,13.223999,22.0001831,13.5,22h8.0006104C21.7765503,21.9998169,22.0001831,21.776001,22,21.5v-8.0006104C21.9998169,13.2234497,21.776001,12.9998169,21.5,13z M21,21h-7v-7h7V21z M10.5,2H2.4993896C2.2234497,2.0001831,1.9998169,2.223999,2,2.5v8.0005493C2.0001831,10.7765503,2.223999,11.0001831,2.5,11h8.0006104C10.7765503,10.9998169,11.0001831,10.776001,11,10.5V2.4993896C10.9998169,2.2234497,10.776001,1.9998169,10.5,2z M10,10H3V3h7V10z M10.5,13H2.4993896C2.2234497,13.0001831,1.9998169,13.223999,2,13.5v8.0005493C2.0001831,21.7765503,2.223999,22.0001831,2.5,22h8.0006104C10.7765503,21.9998169,11.0001831,21.776001,11,21.5v-8.0006104C10.9998169,13.2234497,10.776001,12.9998169,10.5,13z M10,21H3v-7h7V21z M21.5,2h-8.0005493C13.2234497,2.0001831,12.9998169,2.223999,13,2.5v8.0005493C13.0001831,10.7765503,13.223999,11.0001831,13.5,11h8.0006104C21.7765503,10.9998169,22.0001831,10.776001,22,10.5V2.4993896C21.9998169,2.2234497,21.776001,1.9998169,21.5,2z M21,10h-7V3h7V10z",
                          },
                        }),
                      ]
                    ),
                    _vm._v(" "),
                    _c("span", { staticClass: "side-menu__label" }, [
                      _vm._v("Apps"),
                    ]),
                    _c("i", { staticClass: "angle fa fa-angle-right" }),
                  ]
                ),
                _vm._v(" "),
                _vm._m(23),
              ]),
              _vm._v(" "),
              _c("li", { staticClass: "slide" }, [
                _c(
                  "a",
                  {
                    staticClass: "side-menu__item",
                    attrs: { "data-bs-toggle": "slide", href: "#" },
                  },
                  [
                    _c(
                      "svg",
                      {
                        staticClass: "side-menu__icon",
                        attrs: {
                          xmlns: "http://www.w3.org/2000/svg",
                          "enable-background": "new 0 0 24 24",
                          viewBox: "0 0 24 24",
                        },
                      },
                      [
                        _c("path", {
                          attrs: {
                            d: "M16.6766357,7.3233643C15.7435303,4.2431641,12.8848267,2,9.5,2C5.3578491,2,2,5.3578491,2,9.5c0,3.3848267,2.2431641,6.2435303,5.3233643,7.1766357C8.2564697,19.7568359,11.1151733,22,14.5,22c4.1402588-0.0045166,7.4954834-3.3597412,7.5-7.5C22,11.1151733,19.7568359,8.2564697,16.6766357,7.3233643z M16,9.5c0,0.8760376-0.1757202,1.7103882-0.4899292,2.4730225l-3.4830933-3.4830933C12.7896118,8.1757202,13.6239624,8,14.5,8c0.4649658,0.0005493,0.9176636,0.0518799,1.3549194,0.1450806C15.9481201,8.5823364,15.9994507,9.0350342,16,9.5z M15.0283203,12.906311c-0.5328369,0.862854-1.2597656,1.5897217-2.1226807,2.1224365l-3.9343872-3.9343872c0.5328369-0.8630981,1.2598877-1.5901489,2.1229858-2.1230469L15.0283203,12.906311z M7.0787354,15.5289917C4.6891479,14.5682983,3,12.2332764,3,9.5C3,5.9101562,5.9101562,3,9.5,3c2.7313232,0.0031738,5.06427,1.6907959,6.0264893,4.0783081C15.1900635,7.0321655,14.8491211,7,14.5,7C10.3578491,7,7,10.3578491,7,14.5C7,14.8500366,7.0323486,15.1917114,7.0787354,15.5289917z M8,14.5c0-0.8759766,0.1757812-1.7103271,0.4899292-2.4729614l3.4830322,3.4830322C11.2103271,15.8242188,10.3759766,16,9.5,16c-0.465332,0-0.918457-0.0509644-1.3560791-0.1439209C8.0509644,15.418457,8,14.965332,8,14.5z M14.5,21c-2.7332764,0-5.0682983-1.6891479-6.0289917-4.0787354C8.8082886,16.9676514,9.1499634,17,9.5,17c4.1402588-0.0045166,7.4954834-3.3597412,7.5-7.5c0-0.3491211-0.0321655-0.6900635-0.0783081-1.0264893C19.3092041,9.43573,20.9968262,11.7686768,21,14.5C21,18.0898438,18.0898438,21,14.5,21z",
                          },
                        }),
                      ]
                    ),
                    _vm._v(" "),
                    _c("span", { staticClass: "side-menu__label" }, [
                      _vm._v("UI Elements"),
                    ]),
                    _c("i", { staticClass: "angle fa fa-angle-right" }),
                  ]
                ),
                _vm._v(" "),
                _vm._m(24),
              ]),
              _vm._v(" "),
              _c("li", { staticClass: "slide" }, [
                _c(
                  "a",
                  {
                    staticClass: "side-menu__item",
                    attrs: { "data-bs-toggle": "slide", href: "#" },
                  },
                  [
                    _c(
                      "svg",
                      {
                        staticClass: "side-menu__icon",
                        attrs: {
                          xmlns: "http://www.w3.org/2000/svg",
                          "enable-background": "new 0 0 24 24",
                          viewBox: "0 0 24 24",
                        },
                      },
                      [
                        _c("path", {
                          attrs: {
                            d: "M20.6601562,7c-0.767334-1.3284302-2.5855103-1.836853-4.8673706-1.5704346C14.8826904,3.3205566,13.5338745,2,12,2S9.1172485,3.3204956,8.2071533,5.4296265C5.9249268,5.1627808,4.1060181,5.6706543,3.3398438,7c-0.7667847,1.3283081-0.2972412,3.1570435,1.074585,5c-1.3718262,1.8429565-1.8413696,3.6716919-1.074646,5c0.6367188,1.1025391,1.9942017,1.6435547,3.7421875,1.6435547c0.3729858-0.0189819,0.7437134-0.0548096,1.112915-0.1002197C9.1050415,20.6685791,10.4594116,22,12,22s2.8949585-1.3314209,3.8051147-3.456665c0.3692017,0.0454102,0.7399292,0.0812378,1.112915,0.1002197c1.7469482,0,3.1063843-0.5410156,3.7421265-1.6435547c0.7667847-1.3283081,0.2972412-3.1570435-1.074585-5C20.9573975,10.1570435,21.4269409,8.3283081,20.6601562,7z M15.6480713,8.3894043C15.2786865,8.1427612,14.8995972,7.9006348,14.5,7.6699219c-0.3996582-0.230835-0.7990723-0.4382935-1.1974487-0.6350098c0.6378784-0.2148438,1.2570801-0.3780518,1.8477173-0.4918823C15.3469238,7.1115112,15.5151978,7.7294312,15.6480713,8.3894043z M12,3c1.0654297,0,2.0482178,0.9987793,2.7738037,2.5901489c-0.8824463,0.1806641-1.8171387,0.4703369-2.7739868,0.8580933C11.0432129,6.06073,10.1085815,5.7709351,9.2261353,5.59021C9.9517212,3.9987793,10.9345093,3,12,3z M8.8425293,6.5646973c0.6322021,0.1143799,1.2553101,0.2702026,1.866333,0.4645996C10.3067017,7.2276001,9.9035645,7.4368286,9.5,7.6699219C9.1004028,7.9006348,8.7213135,8.1427612,8.3519287,8.3894043C8.4831543,7.7377319,8.6489868,7.1273193,8.8425293,6.5646973z M4.2050781,7.5c0.6743774-0.8552856,1.7492065-1.2923584,2.8291016-1.1503906c0.2658691,0.0151367,0.5303345,0.0407715,0.7941895,0.0700073c-0.2806396,0.8480225-0.494751,1.7927856-0.6360474,2.8049927C6.3783569,9.859436,5.6602173,10.5241089,5.0626221,11.197998C4.0467529,9.7736816,3.6727905,8.4230347,4.2050781,7.5z M7.0488892,13.3538208C6.5440674,12.9088745,6.0932007,12.4544067,5.6994019,12c0.3937988-0.4544067,0.8446655-0.9089355,1.3494873-1.3538818C7.0200195,11.0892944,7,11.5386353,7,12S7.0200195,12.9107056,7.0488892,13.3538208z M4.2050781,16.5c-0.5322876-0.9230347-0.1583252-2.2736816,0.8575439-3.697998c0.5975952,0.6738892,1.3157349,1.338562,2.1296997,1.9733887c0.1427002,1.0221558,0.3591309,1.9763184,0.6437988,2.8307495C6.0949097,17.7734375,4.7382812,17.4219971,4.2050781,16.5z M8.3519287,15.6105957C8.7213135,15.8572388,9.1004028,16.0993652,9.5,16.3300781c0.3783569,0.2339478,0.7686157,0.4447021,1.1637573,0.6447144c-0.6261597,0.2092285-1.2341309,0.3692017-1.8143921,0.4810181C8.652832,16.8876953,8.4847412,16.2700806,8.3519287,15.6105957z M12,21c-1.0717163,0-2.0603027-1.0095215-2.7870483-2.6173096C10.1655884,18.2009888,11.0983276,17.9318848,12,17.5773926c0.9016113,0.3544922,1.8344116,0.6235962,2.7870483,0.8052979C14.0603027,19.9904785,13.0717163,21,12,21z M15.1503906,17.456543c-0.5805054-0.1118164-1.1887207-0.2718506-1.8151245-0.4812622C13.7307739,16.7751465,14.1212769,16.56427,14.5,16.3300781c0.3995972-0.2307129,0.7786865-0.4728394,1.1480713-0.7194824C15.5151978,16.2703857,15.3470459,16.8881836,15.1503906,17.456543z M15.8648682,14.2316284C15.2859497,14.6641235,14.6652832,15.0805054,14,15.4648438c-0.6655884,0.3839111-1.3366699,0.7131958-2.0007935,0.9981689C11.3355713,16.1780396,10.6650391,15.8487549,10,15.4648438c-0.6652832-0.3843384-1.2859497-0.8007202-1.8648682-1.2332153C8.0501099,13.5140381,8,12.7683105,8,12s0.0501099-1.5140381,0.1351318-2.2316284C8.7140503,9.3358765,9.3347168,8.9194946,10,8.5351562c0.6747437-0.3895264,1.3552246-0.7230835,2.0283813-1.0108032C12.7068481,7.8132324,13.3676758,8.1464844,14,8.5351562c0.6652832,0.3843384,1.2859497,0.8007202,1.8648682,1.2332153C15.9498901,10.4859619,16,11.2316895,16,12S15.9498901,13.5140381,15.8648682,14.2316284z M19.7949219,7.5c0.5322876,0.9230347,0.1583252,2.2736816-0.8575439,3.697998c-0.5975952-0.6738892-1.3157349-1.338562-2.1296997-1.9733887c-0.1427612-1.022644-0.359314-1.9771729-0.644165-2.8319092C17.90448,6.2254639,19.2612915,6.5772095,19.7949219,7.5z M16.9511108,10.6461182C17.4559326,11.0910645,17.9067993,11.5455933,18.3005981,12c-0.3937988,0.4544067-0.8446655,0.9088745-1.3494873,1.3538208C16.9799805,12.9107056,17,12.4613647,17,12S16.9799805,11.0892944,16.9511108,10.6461182z M19.7949219,16.5c-0.5328369,0.9221191-1.8897095,1.2739868-3.6312866,1.1068115c0.28479-0.8546143,0.5013428-1.80896,0.644043-2.8314209c0.8139648-0.6348267,1.5321045-1.2994995,2.1296997-1.9733887C19.9532471,14.2263184,20.3272095,15.5769653,19.7949219,16.5z",
                          },
                        }),
                      ]
                    ),
                    _vm._v(" "),
                    _c("span", { staticClass: "side-menu__label" }, [
                      _vm._v("Advanced UI"),
                    ]),
                    _c("i", { staticClass: "angle fa fa-angle-right" }),
                  ]
                ),
                _vm._v(" "),
                _vm._m(25),
              ]),
              _vm._v(" "),
              _vm._m(26),
              _vm._v(" "),
              _c("li", { staticClass: "slide" }, [
                _c(
                  "a",
                  {
                    staticClass: "side-menu__item",
                    attrs: { "data-bs-toggle": "slide", href: "#" },
                  },
                  [
                    _c(
                      "svg",
                      {
                        staticClass: "side-menu__icon",
                        attrs: {
                          xmlns: "http://www.w3.org/2000/svg",
                          "enable-background": "new 0 0 24 24",
                          viewBox: "0 0 24 24",
                        },
                      },
                      [
                        _c("path", {
                          attrs: {
                            d: "M19.8535156,8.1464844l-6-6C13.7597656,2.0526733,13.6326294,2,13.5,2H7C5.3438721,2.0018311,4.0018311,3.3438721,4,5v14c0.0018311,1.6561279,1.3438721,2.9981689,3,3h10c1.6561279-0.0018311,2.9981689-1.3438721,3-3V8.5C20,8.3673706,19.9473267,8.2402344,19.8535156,8.1464844z M14,3.7069702L18.2930298,8H14V3.7069702z M19,19c-0.0014038,1.1040039-0.8959961,1.9985962-2,2H7c-1.1040039-0.0014038-1.9985962-0.8959961-2-2V5c0.0014038-1.1040039,0.8959961-1.9985962,2-2h6v5.5c0,0.0001831,0,0.0003662,0,0.0005493C13.0001831,8.7765503,13.223999,9.0001831,13.5,9H19V19z",
                          },
                        }),
                      ]
                    ),
                    _vm._v(" "),
                    _c("span", { staticClass: "side-menu__label" }, [
                      _vm._v("Pages"),
                    ]),
                    _c("i", { staticClass: "angle fa fa-angle-right" }),
                  ]
                ),
                _vm._v(" "),
                _vm._m(27),
              ]),
              _vm._v(" "),
              _c("li", { staticClass: "slide" }, [
                _c(
                  "a",
                  {
                    staticClass: "side-menu__item",
                    attrs: { "data-bs-toggle": "slide", href: "#" },
                  },
                  [
                    _c(
                      "svg",
                      {
                        staticClass: "side-menu__icon",
                        attrs: {
                          xmlns: "http://www.w3.org/2000/svg",
                          "enable-background": "new 0 0 24 24",
                          viewBox: "0 0 24 24",
                        },
                      },
                      [
                        _c("path", {
                          attrs: {
                            d: "M2.25,8.4521484l9.5,5.4804688C11.8259277,13.9767456,11.9121704,14,12,14s0.1740723-0.0232544,0.25-0.0673828l9.5-5.4804688c0.0759888-0.0438843,0.1390381-0.1069946,0.1829224-0.1829224C22.071106,8.0300293,21.9891968,7.7241211,21.75,7.5859375l-9.5-5.4755859c-0.1550903-0.0878906-0.3449097-0.0878906-0.5,0l-9.5,5.4755859C2.1740112,7.6298218,2.1109619,7.6929321,2.0670776,7.7688599C1.928894,8.0080566,2.0108032,8.3139648,2.25,8.4521484z M12,3.1210938l8.4990234,4.8984375L12,12.9228516L3.5009766,8.0195312L12,3.1210938z M21.2479858,15.5263672L12,20.9208984l-9.2481079-5.3945312c-0.2384033-0.1391602-0.5444336-0.0587158-0.6835938,0.1796875s-0.0587158,0.5444336,0.1796875,0.6835938l9.5,5.5419922C11.8244019,21.9765015,11.911377,22.0001221,12,22c0.088562,0.0001221,0.1755371-0.0234985,0.2518921-0.0683594l9.5-5.5419922c0.2384033-0.1391602,0.3188477-0.4451904,0.1796875-0.6835938S21.4863892,15.387207,21.2479858,15.5263672z M21.2479858,11.5263672L12,16.9208984l-9.2481079-5.3945312c-0.2384033-0.1391602-0.5444336-0.0587158-0.6835938,0.1796875s-0.0587158,0.5444336,0.1796875,0.6835938l9.5,5.5419922C11.8244019,17.9765015,11.911377,18.0001221,12,18c0.088562,0.0001221,0.1755371-0.0234985,0.2518921-0.0683594l9.5-5.5419922c0.2384033-0.1391602,0.3188477-0.4451904,0.1796875-0.6835938S21.4863892,11.387207,21.2479858,11.5263672z",
                          },
                        }),
                      ]
                    ),
                    _vm._v(" "),
                    _c("span", { staticClass: "side-menu__label" }, [
                      _vm._v("Utilities"),
                    ]),
                    _c("i", { staticClass: "angle fa fa-angle-right" }),
                  ]
                ),
                _vm._v(" "),
                _vm._m(28),
              ]),
            ]),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "slide-right", attrs: { id: "slide-right" } },
              [
                _c(
                  "svg",
                  {
                    attrs: {
                      xmlns: "http://www.w3.org/2000/svg",
                      fill: "#7b8191",
                      width: "24",
                      height: "24",
                      viewBox: "0 0 24 24",
                    },
                  },
                  [
                    _c("path", {
                      attrs: {
                        d: "M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z",
                      },
                    }),
                  ]
                ),
              ]
            ),
          ]),
        ]),
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "app-content main-content mt-0" }, [
        _c("div", { staticClass: "side-app" }, [
          _c("div", { staticClass: "main-container container-fluid" }, [
            _vm._m(29),
            _vm._v(" "),
            _c("div", { staticClass: "row" }, [
              _c(
                "div",
                { staticClass: "col-lg-6 col-sm-12 col-md-6 col-xl-3" },
                [
                  _c("div", { staticClass: "card overflow-hidden" }, [
                    _c("div", { staticClass: "card-body" }, [
                      _c("div", { staticClass: "row" }, [
                        _vm._m(30),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "col col-auto top-icn dash" },
                          [
                            _c(
                              "div",
                              {
                                staticClass:
                                  "counter-icon bg-primary dash ms-auto box-shadow-primary",
                              },
                              [
                                _c(
                                  "svg",
                                  {
                                    staticClass: "fill-white",
                                    attrs: {
                                      xmlns: "http://www.w3.org/2000/svg",
                                      "enable-background": "new 0 0 24 24",
                                      viewBox: "0 0 24 24",
                                    },
                                  },
                                  [
                                    _c("path", {
                                      attrs: {
                                        d: "M12,8c-2.2091675,0-4,1.7908325-4,4s1.7908325,4,4,4c2.208252-0.0021973,3.9978027-1.791748,4-4C16,9.7908325,14.2091675,8,12,8z M12,15c-1.6568604,0-3-1.3431396-3-3s1.3431396-3,3-3c1.6561279,0.0018311,2.9981689,1.3438721,3,3C15,13.6568604,13.6568604,15,12,15z M21.960022,11.8046875C19.9189453,6.9902344,16.1025391,4,12,4s-7.9189453,2.9902344-9.960022,7.8046875c-0.0537109,0.1246948-0.0537109,0.2659302,0,0.390625C4.0810547,17.0097656,7.8974609,20,12,20s7.9190063-2.9902344,9.960022-7.8046875C22.0137329,12.0706177,22.0137329,11.9293823,21.960022,11.8046875z M12,19c-3.6396484,0-7.0556641-2.6767578-8.9550781-7C4.9443359,7.6767578,8.3603516,5,12,5s7.0556641,2.6767578,8.9550781,7C19.0556641,16.3232422,15.6396484,19,12,19z",
                                      },
                                    }),
                                  ]
                                ),
                              ]
                            ),
                          ]
                        ),
                      ]),
                    ]),
                  ]),
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "col-lg-6 col-sm-12 col-md-6 col-xl-3" },
                [
                  _c("div", { staticClass: "card overflow-hidden" }, [
                    _c("div", { staticClass: "card-body" }, [
                      _c("div", { staticClass: "row" }, [
                        _vm._m(31),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "col col-auto top-icn dash" },
                          [
                            _c(
                              "div",
                              {
                                staticClass:
                                  "counter-icon bg-secondary dash ms-auto box-shadow-secondary",
                              },
                              [
                                _c(
                                  "svg",
                                  {
                                    staticClass: "fill-white",
                                    attrs: {
                                      xmlns: "http://www.w3.org/2000/svg",
                                      "enable-background": "new 0 0 24 24",
                                      viewBox: "0 0 24 24",
                                    },
                                  },
                                  [
                                    _c("path", {
                                      attrs: {
                                        d: "M19.5,7H16V5.9169922c0-2.2091064-1.7908325-4-4-4s-4,1.7908936-4,4V7H4.5C4.4998169,7,4.4996338,7,4.4993896,7C4.2234497,7.0001831,3.9998169,7.223999,4,7.5V19c0.0018311,1.6561279,1.3438721,2.9981689,3,3h10c1.6561279-0.0018311,2.9981689-1.3438721,3-3V7.5c0-0.0001831,0-0.0003662,0-0.0006104C19.9998169,7.2234497,19.776001,6.9998169,19.5,7z M9,5.9169922c0-1.6568604,1.3431396-3,3-3s3,1.3431396,3,3V7H9V5.9169922z M19,19c-0.0014038,1.1040039-0.8959961,1.9985962-2,2H7c-1.1040039-0.0014038-1.9985962-0.8959961-2-2V8h3v2.5C8,10.776123,8.223877,11,8.5,11S9,10.776123,9,10.5V8h6v2.5c0,0.0001831,0,0.0003662,0,0.0005493C15.0001831,10.7765503,15.223999,11.0001831,15.5,11c0.0001831,0,0.0003662,0,0.0006104,0C15.7765503,10.9998169,16.0001831,10.776001,16,10.5V8h3V19z",
                                      },
                                    }),
                                  ]
                                ),
                              ]
                            ),
                          ]
                        ),
                      ]),
                    ]),
                  ]),
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "col-lg-6 col-sm-12 col-md-6 col-xl-3" },
                [
                  _c("div", { staticClass: "card overflow-hidden" }, [
                    _c("div", { staticClass: "card-body" }, [
                      _c("div", { staticClass: "row" }, [
                        _vm._m(32),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "col col-auto top-icn dash" },
                          [
                            _c(
                              "div",
                              {
                                staticClass:
                                  "counter-icon bg-info dash ms-auto box-shadow-info",
                              },
                              [
                                _c(
                                  "svg",
                                  {
                                    staticClass: "fill-white",
                                    attrs: {
                                      xmlns: "http://www.w3.org/2000/svg",
                                      "enable-background": "new 0 0 24 24",
                                      viewBox: "0 0 24 24",
                                    },
                                  },
                                  [
                                    _c("path", {
                                      attrs: {
                                        d: "M7.5,12C7.223877,12,7,12.223877,7,12.5v5.0005493C7.0001831,17.7765503,7.223999,18.0001831,7.5,18h0.0006104C7.7765503,17.9998169,8.0001831,17.776001,8,17.5v-5C8,12.223877,7.776123,12,7.5,12z M19,2H5C3.3438721,2.0018311,2.0018311,3.3438721,2,5v14c0.0018311,1.6561279,1.3438721,2.9981689,3,3h14c1.6561279-0.0018311,2.9981689-1.3438721,3-3V5C21.9981689,3.3438721,20.6561279,2.0018311,19,2z M21,19c-0.0014038,1.1040039-0.8959961,1.9985962-2,2H5c-1.1040039-0.0014038-1.9985962-0.8959961-2-2V5c0.0014038-1.1040039,0.8959961-1.9985962,2-2h14c1.1040039,0.0014038,1.9985962,0.8959961,2,2V19z M12,6c-0.276123,0-0.5,0.223877-0.5,0.5v11.0005493C11.5001831,17.7765503,11.723999,18.0001831,12,18h0.0006104c0.2759399-0.0001831,0.4995728-0.223999,0.4993896-0.5v-11C12.5,6.223877,12.276123,6,12,6z M16.5,10c-0.276123,0-0.5,0.223877-0.5,0.5v7.0005493C16.0001831,17.7765503,16.223999,18.0001831,16.5,18h0.0006104C16.7765503,17.9998169,17.0001831,17.776001,17,17.5v-7C17,10.223877,16.776123,10,16.5,10z",
                                      },
                                    }),
                                  ]
                                ),
                              ]
                            ),
                          ]
                        ),
                      ]),
                    ]),
                  ]),
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "col-lg-6 col-sm-12 col-md-6 col-xl-3" },
                [
                  _c("div", { staticClass: "card overflow-hidden" }, [
                    _c("div", { staticClass: "card-body" }, [
                      _c("div", { staticClass: "row" }, [
                        _vm._m(33),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "col col-auto top-icn dash" },
                          [
                            _c(
                              "div",
                              {
                                staticClass:
                                  "counter-icon bg-warning dash ms-auto box-shadow-warning",
                              },
                              [
                                _c(
                                  "svg",
                                  {
                                    staticClass: "fill-white",
                                    attrs: {
                                      xmlns: "http://www.w3.org/2000/svg",
                                      "enable-background": "new 0 0 24 24",
                                      viewBox: "0 0 24 24",
                                    },
                                  },
                                  [
                                    _c("path", {
                                      attrs: {
                                        d: "M9,10h2.5c0.276123,0,0.5-0.223877,0.5-0.5S11.776123,9,11.5,9H10V8c0-0.276123-0.223877-0.5-0.5-0.5S9,7.723877,9,8v1c-1.1045532,0-2,0.8954468-2,2s0.8954468,2,2,2h1c0.5523071,0,1,0.4476929,1,1s-0.4476929,1-1,1H7.5C7.223877,15,7,15.223877,7,15.5S7.223877,16,7.5,16H9v1.0005493C9.0001831,17.2765503,9.223999,17.5001831,9.5,17.5h0.0006104C9.7765503,17.4998169,10.0001831,17.276001,10,17v-1c1.1045532,0,2-0.8954468,2-2s-0.8954468-2-2-2H9c-0.5523071,0-1-0.4476929-1-1S8.4476929,10,9,10z M21.5,12H17V2.5c0.000061-0.0875244-0.0228882-0.1735229-0.0665283-0.2493896c-0.1375732-0.2393188-0.4431152-0.3217773-0.6824951-0.1842041l-3.2460327,1.8603516L9.7481079,2.0654297c-0.1536865-0.0878906-0.3424072-0.0878906-0.4960938,0l-3.256897,1.8613281L2.7490234,2.0664062C2.6731567,2.0227661,2.5871582,1.9998779,2.4996338,1.9998779C2.2235718,2.000061,1.9998779,2.223938,2,2.5v17c0.0012817,1.380188,1.119812,2.4987183,2.5,2.5H19c1.6561279-0.0018311,2.9981689-1.3438721,3-3v-6.5006104C21.9998169,12.2234497,21.776001,11.9998169,21.5,12z M4.5,21c-0.828064-0.0009155-1.4990845-0.671936-1.5-1.5V3.3623047l2.7412109,1.5712891c0.1575928,0.0872192,0.348877,0.0875854,0.5068359,0.0009766L9.5,3.0761719l3.2519531,1.8583984c0.157959,0.0866089,0.3492432,0.0862427,0.5068359-0.0009766L16,3.3623047V19c0.0008545,0.7719116,0.3010864,1.4684448,0.7803345,2H4.5z M21,19c0,1.1045532-0.8954468,2-2,2s-2-0.8954468-2-2v-6h4V19z",
                                      },
                                    }),
                                  ]
                                ),
                              ]
                            ),
                          ]
                        ),
                      ]),
                    ]),
                  ]),
                ]
              ),
            ]),
            _vm._v(" "),
            _vm._m(34),
            _vm._v(" "),
            _vm._m(35),
            _vm._v(" "),
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-12 col-sm-12" }, [
                _c("div", { staticClass: "card product-sales-main" }, [
                  _vm._m(36),
                  _vm._v(" "),
                  _c("div", { staticClass: "card-body" }, [
                    _c("div", { staticClass: "table-responsive" }, [
                      _c(
                        "table",
                        {
                          staticClass: "table text-nowrap mb-0 table-bordered",
                          attrs: { id: "data-table" },
                        },
                        [
                          _vm._m(37),
                          _vm._v(" "),
                          _c("tbody", { staticClass: "table-body" }, [
                            _c("tr", [
                              _vm._m(38),
                              _vm._v(" "),
                              _vm._m(39),
                              _vm._v(" "),
                              _vm._m(40),
                              _vm._v(" "),
                              _c(
                                "td",
                                {
                                  staticClass: "text-danger fs-14 fw-semibold",
                                },
                                [_vm._v("31 Oct 21")]
                              ),
                              _vm._v(" "),
                              _vm._m(41),
                              _vm._v(" "),
                              _c("td", [
                                _c(
                                  "div",
                                  { staticClass: "d-flex align-items-stretch" },
                                  [
                                    _c(
                                      "a",
                                      {
                                        staticClass:
                                          "btn btn-sm btn-outline-primary border me-2",
                                        attrs: {
                                          "data-bs-toggle": "tooltip",
                                          "data-bs-original-title":
                                            "Mark As Completed",
                                        },
                                      },
                                      [
                                        _c(
                                          "svg",
                                          {
                                            attrs: {
                                              xmlns:
                                                "http://www.w3.org/2000/svg",
                                              "enable-background":
                                                "new 0 0 24 24",
                                              height: "20",
                                              width: "16",
                                              viewBox: "0 0 24 24",
                                            },
                                          },
                                          [
                                            _c("path", {
                                              attrs: {
                                                d: "M15.8085327,8.6464844l-5.6464233,5.6464844l-2.4707031-2.4697266c-0.0023804-0.0023804-0.0047607-0.0047607-0.0072021-0.0071411c-0.1972046-0.1932373-0.5137329-0.1900635-0.7069702,0.0071411c-0.1932983,0.1972656-0.1900635,0.5137939,0.0071411,0.7070312l2.8242188,2.8232422C9.9022217,15.4474487,10.02948,15.5001831,10.1621094,15.5c0.1326294,0.0001221,0.2598267-0.0525513,0.3534546-0.1464844l6-6c0.0023804-0.0023804,0.0047607-0.0046997,0.0071411-0.0071411c0.1932373-0.1972046,0.1900635-0.5137329-0.0071411-0.7069702C16.3183594,8.446106,16.0018311,8.4493408,15.8085327,8.6464844z M12,2C6.4771729,2,2,6.4771729,2,12s4.4771729,10,10,10c5.5201416-0.0064697,9.9935303-4.4798584,10-10C22,6.4771729,17.5228271,2,12,2z M12,21c-4.9705811,0-9-4.0294189-9-9s4.0294189-9,9-9c4.9683228,0.0054321,8.9945679,4.0316772,9,9C21,16.9705811,16.9705811,21,12,21z",
                                              },
                                            }),
                                          ]
                                        ),
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "a",
                                      {
                                        staticClass:
                                          "btn btn-sm btn-outline-secondary border me-2",
                                        attrs: {
                                          "data-bs-toggle": "tooltip",
                                          "data-bs-original-title": "Delete",
                                        },
                                      },
                                      [
                                        _c(
                                          "svg",
                                          {
                                            attrs: {
                                              xmlns:
                                                "http://www.w3.org/2000/svg",
                                              height: "20",
                                              viewBox: "0 0 24 24",
                                              width: "16",
                                            },
                                          },
                                          [
                                            _c("path", {
                                              attrs: {
                                                d: "M0 0h24v24H0V0z",
                                                fill: "none",
                                              },
                                            }),
                                            _vm._v(" "),
                                            _c("path", {
                                              attrs: {
                                                d: "M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9zm7.5-5l-1-1h-5l-1 1H5v2h14V4h-3.5z",
                                              },
                                            }),
                                          ]
                                        ),
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _vm._m(42),
                                    _vm._v(" "),
                                    _vm._m(43),
                                  ]
                                ),
                              ]),
                            ]),
                            _vm._v(" "),
                            _c("tr", [
                              _vm._m(44),
                              _vm._v(" "),
                              _vm._m(45),
                              _vm._v(" "),
                              _vm._m(46),
                              _vm._v(" "),
                              _c(
                                "td",
                                {
                                  staticClass: "text-danger fs-14 fw-semibold",
                                },
                                [_vm._v("01 Nov 21")]
                              ),
                              _vm._v(" "),
                              _vm._m(47),
                              _vm._v(" "),
                              _c("td", [
                                _c(
                                  "div",
                                  { staticClass: "d-flex align-items-stretch" },
                                  [
                                    _c(
                                      "a",
                                      {
                                        staticClass:
                                          "btn btn-sm btn-outline-primary border me-2",
                                        attrs: {
                                          "data-bs-toggle": "tooltip",
                                          "data-bs-original-title":
                                            "Mark As Completed",
                                        },
                                      },
                                      [
                                        _c(
                                          "svg",
                                          {
                                            attrs: {
                                              xmlns:
                                                "http://www.w3.org/2000/svg",
                                              "enable-background":
                                                "new 0 0 24 24",
                                              height: "20",
                                              width: "16",
                                              viewBox: "0 0 24 24",
                                            },
                                          },
                                          [
                                            _c("path", {
                                              attrs: {
                                                d: "M15.8085327,8.6464844l-5.6464233,5.6464844l-2.4707031-2.4697266c-0.0023804-0.0023804-0.0047607-0.0047607-0.0072021-0.0071411c-0.1972046-0.1932373-0.5137329-0.1900635-0.7069702,0.0071411c-0.1932983,0.1972656-0.1900635,0.5137939,0.0071411,0.7070312l2.8242188,2.8232422C9.9022217,15.4474487,10.02948,15.5001831,10.1621094,15.5c0.1326294,0.0001221,0.2598267-0.0525513,0.3534546-0.1464844l6-6c0.0023804-0.0023804,0.0047607-0.0046997,0.0071411-0.0071411c0.1932373-0.1972046,0.1900635-0.5137329-0.0071411-0.7069702C16.3183594,8.446106,16.0018311,8.4493408,15.8085327,8.6464844z M12,2C6.4771729,2,2,6.4771729,2,12s4.4771729,10,10,10c5.5201416-0.0064697,9.9935303-4.4798584,10-10C22,6.4771729,17.5228271,2,12,2z M12,21c-4.9705811,0-9-4.0294189-9-9s4.0294189-9,9-9c4.9683228,0.0054321,8.9945679,4.0316772,9,9C21,16.9705811,16.9705811,21,12,21z",
                                              },
                                            }),
                                          ]
                                        ),
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "a",
                                      {
                                        staticClass:
                                          "btn btn-sm btn-outline-secondary border me-2",
                                        attrs: {
                                          "data-bs-toggle": "tooltip",
                                          "data-bs-original-title": "Delete",
                                        },
                                      },
                                      [
                                        _c(
                                          "svg",
                                          {
                                            attrs: {
                                              xmlns:
                                                "http://www.w3.org/2000/svg",
                                              height: "20",
                                              viewBox: "0 0 24 24",
                                              width: "16",
                                            },
                                          },
                                          [
                                            _c("path", {
                                              attrs: {
                                                d: "M0 0h24v24H0V0z",
                                                fill: "none",
                                              },
                                            }),
                                            _vm._v(" "),
                                            _c("path", {
                                              attrs: {
                                                d: "M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9zm7.5-5l-1-1h-5l-1 1H5v2h14V4h-3.5z",
                                              },
                                            }),
                                          ]
                                        ),
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _vm._m(48),
                                    _vm._v(" "),
                                    _vm._m(49),
                                  ]
                                ),
                              ]),
                            ]),
                            _vm._v(" "),
                            _c("tr", [
                              _vm._m(50),
                              _vm._v(" "),
                              _vm._m(51),
                              _vm._v(" "),
                              _vm._m(52),
                              _vm._v(" "),
                              _c(
                                "td",
                                {
                                  staticClass: "text-danger fs-14 fw-semibold",
                                },
                                [_vm._v("08 Nov 21")]
                              ),
                              _vm._v(" "),
                              _vm._m(53),
                              _vm._v(" "),
                              _c("td", [
                                _c(
                                  "div",
                                  { staticClass: "d-flex align-items-stretch" },
                                  [
                                    _c(
                                      "a",
                                      {
                                        staticClass:
                                          "btn btn-sm btn-outline-primary border me-2",
                                        attrs: {
                                          "data-bs-toggle": "tooltip",
                                          "data-bs-original-title":
                                            "Mark As Completed",
                                        },
                                      },
                                      [
                                        _c(
                                          "svg",
                                          {
                                            attrs: {
                                              xmlns:
                                                "http://www.w3.org/2000/svg",
                                              "enable-background":
                                                "new 0 0 24 24",
                                              height: "20",
                                              width: "16",
                                              viewBox: "0 0 24 24",
                                            },
                                          },
                                          [
                                            _c("path", {
                                              attrs: {
                                                d: "M15.8085327,8.6464844l-5.6464233,5.6464844l-2.4707031-2.4697266c-0.0023804-0.0023804-0.0047607-0.0047607-0.0072021-0.0071411c-0.1972046-0.1932373-0.5137329-0.1900635-0.7069702,0.0071411c-0.1932983,0.1972656-0.1900635,0.5137939,0.0071411,0.7070312l2.8242188,2.8232422C9.9022217,15.4474487,10.02948,15.5001831,10.1621094,15.5c0.1326294,0.0001221,0.2598267-0.0525513,0.3534546-0.1464844l6-6c0.0023804-0.0023804,0.0047607-0.0046997,0.0071411-0.0071411c0.1932373-0.1972046,0.1900635-0.5137329-0.0071411-0.7069702C16.3183594,8.446106,16.0018311,8.4493408,15.8085327,8.6464844z M12,2C6.4771729,2,2,6.4771729,2,12s4.4771729,10,10,10c5.5201416-0.0064697,9.9935303-4.4798584,10-10C22,6.4771729,17.5228271,2,12,2z M12,21c-4.9705811,0-9-4.0294189-9-9s4.0294189-9,9-9c4.9683228,0.0054321,8.9945679,4.0316772,9,9C21,16.9705811,16.9705811,21,12,21z",
                                              },
                                            }),
                                          ]
                                        ),
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "a",
                                      {
                                        staticClass:
                                          "btn btn-sm btn-outline-secondary border me-2",
                                        attrs: {
                                          "data-bs-toggle": "tooltip",
                                          "data-bs-original-title": "Delete",
                                        },
                                      },
                                      [
                                        _c(
                                          "svg",
                                          {
                                            attrs: {
                                              xmlns:
                                                "http://www.w3.org/2000/svg",
                                              height: "20",
                                              viewBox: "0 0 24 24",
                                              width: "16",
                                            },
                                          },
                                          [
                                            _c("path", {
                                              attrs: {
                                                d: "M0 0h24v24H0V0z",
                                                fill: "none",
                                              },
                                            }),
                                            _vm._v(" "),
                                            _c("path", {
                                              attrs: {
                                                d: "M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9zm7.5-5l-1-1h-5l-1 1H5v2h14V4h-3.5z",
                                              },
                                            }),
                                          ]
                                        ),
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _vm._m(54),
                                    _vm._v(" "),
                                    _vm._m(55),
                                  ]
                                ),
                              ]),
                            ]),
                            _vm._v(" "),
                            _c("tr", [
                              _vm._m(56),
                              _vm._v(" "),
                              _vm._m(57),
                              _vm._v(" "),
                              _vm._m(58),
                              _vm._v(" "),
                              _c(
                                "td",
                                {
                                  staticClass: "text-danger fs-14 fw-semibold",
                                },
                                [_vm._v("04 Nov 21")]
                              ),
                              _vm._v(" "),
                              _vm._m(59),
                              _vm._v(" "),
                              _c("td", [
                                _c(
                                  "div",
                                  { staticClass: "d-flex align-items-stretch" },
                                  [
                                    _c(
                                      "a",
                                      {
                                        staticClass:
                                          "btn btn-sm btn-outline-primary border me-2",
                                        attrs: {
                                          "data-bs-toggle": "tooltip",
                                          "data-bs-original-title":
                                            "Mark As Completed",
                                        },
                                      },
                                      [
                                        _c(
                                          "svg",
                                          {
                                            attrs: {
                                              xmlns:
                                                "http://www.w3.org/2000/svg",
                                              "enable-background":
                                                "new 0 0 24 24",
                                              height: "20",
                                              width: "16",
                                              viewBox: "0 0 24 24",
                                            },
                                          },
                                          [
                                            _c("path", {
                                              attrs: {
                                                d: "M15.8085327,8.6464844l-5.6464233,5.6464844l-2.4707031-2.4697266c-0.0023804-0.0023804-0.0047607-0.0047607-0.0072021-0.0071411c-0.1972046-0.1932373-0.5137329-0.1900635-0.7069702,0.0071411c-0.1932983,0.1972656-0.1900635,0.5137939,0.0071411,0.7070312l2.8242188,2.8232422C9.9022217,15.4474487,10.02948,15.5001831,10.1621094,15.5c0.1326294,0.0001221,0.2598267-0.0525513,0.3534546-0.1464844l6-6c0.0023804-0.0023804,0.0047607-0.0046997,0.0071411-0.0071411c0.1932373-0.1972046,0.1900635-0.5137329-0.0071411-0.7069702C16.3183594,8.446106,16.0018311,8.4493408,15.8085327,8.6464844z M12,2C6.4771729,2,2,6.4771729,2,12s4.4771729,10,10,10c5.5201416-0.0064697,9.9935303-4.4798584,10-10C22,6.4771729,17.5228271,2,12,2z M12,21c-4.9705811,0-9-4.0294189-9-9s4.0294189-9,9-9c4.9683228,0.0054321,8.9945679,4.0316772,9,9C21,16.9705811,16.9705811,21,12,21z",
                                              },
                                            }),
                                          ]
                                        ),
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "a",
                                      {
                                        staticClass:
                                          "btn btn-sm btn-outline-secondary border me-2",
                                        attrs: {
                                          "data-bs-toggle": "tooltip",
                                          "data-bs-original-title": "Delete",
                                        },
                                      },
                                      [
                                        _c(
                                          "svg",
                                          {
                                            attrs: {
                                              xmlns:
                                                "http://www.w3.org/2000/svg",
                                              height: "20",
                                              viewBox: "0 0 24 24",
                                              width: "16",
                                            },
                                          },
                                          [
                                            _c("path", {
                                              attrs: {
                                                d: "M0 0h24v24H0V0z",
                                                fill: "none",
                                              },
                                            }),
                                            _vm._v(" "),
                                            _c("path", {
                                              attrs: {
                                                d: "M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9zm7.5-5l-1-1h-5l-1 1H5v2h14V4h-3.5z",
                                              },
                                            }),
                                          ]
                                        ),
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _vm._m(60),
                                    _vm._v(" "),
                                    _vm._m(61),
                                  ]
                                ),
                              ]),
                            ]),
                            _vm._v(" "),
                            _c("tr", [
                              _vm._m(62),
                              _vm._v(" "),
                              _vm._m(63),
                              _vm._v(" "),
                              _vm._m(64),
                              _vm._v(" "),
                              _c(
                                "td",
                                {
                                  staticClass: "text-danger fs-14 fw-semibold",
                                },
                                [_vm._v("29 Oct 21")]
                              ),
                              _vm._v(" "),
                              _vm._m(65),
                              _vm._v(" "),
                              _c("td", [
                                _c(
                                  "div",
                                  { staticClass: "d-flex align-items-stretch" },
                                  [
                                    _c(
                                      "a",
                                      {
                                        staticClass:
                                          "btn btn-sm btn-outline-primary border me-2",
                                        attrs: {
                                          "data-bs-toggle": "tooltip",
                                          "data-bs-original-title":
                                            "Mark As Completed",
                                        },
                                      },
                                      [
                                        _c(
                                          "svg",
                                          {
                                            attrs: {
                                              xmlns:
                                                "http://www.w3.org/2000/svg",
                                              "enable-background":
                                                "new 0 0 24 24",
                                              height: "20",
                                              width: "16",
                                              viewBox: "0 0 24 24",
                                            },
                                          },
                                          [
                                            _c("path", {
                                              attrs: {
                                                d: "M15.8085327,8.6464844l-5.6464233,5.6464844l-2.4707031-2.4697266c-0.0023804-0.0023804-0.0047607-0.0047607-0.0072021-0.0071411c-0.1972046-0.1932373-0.5137329-0.1900635-0.7069702,0.0071411c-0.1932983,0.1972656-0.1900635,0.5137939,0.0071411,0.7070312l2.8242188,2.8232422C9.9022217,15.4474487,10.02948,15.5001831,10.1621094,15.5c0.1326294,0.0001221,0.2598267-0.0525513,0.3534546-0.1464844l6-6c0.0023804-0.0023804,0.0047607-0.0046997,0.0071411-0.0071411c0.1932373-0.1972046,0.1900635-0.5137329-0.0071411-0.7069702C16.3183594,8.446106,16.0018311,8.4493408,15.8085327,8.6464844z M12,2C6.4771729,2,2,6.4771729,2,12s4.4771729,10,10,10c5.5201416-0.0064697,9.9935303-4.4798584,10-10C22,6.4771729,17.5228271,2,12,2z M12,21c-4.9705811,0-9-4.0294189-9-9s4.0294189-9,9-9c4.9683228,0.0054321,8.9945679,4.0316772,9,9C21,16.9705811,16.9705811,21,12,21z",
                                              },
                                            }),
                                          ]
                                        ),
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "a",
                                      {
                                        staticClass:
                                          "btn btn-sm btn-outline-secondary border me-2",
                                        attrs: {
                                          "data-bs-toggle": "tooltip",
                                          "data-bs-original-title": "Delete",
                                        },
                                      },
                                      [
                                        _c(
                                          "svg",
                                          {
                                            attrs: {
                                              xmlns:
                                                "http://www.w3.org/2000/svg",
                                              height: "20",
                                              viewBox: "0 0 24 24",
                                              width: "16",
                                            },
                                          },
                                          [
                                            _c("path", {
                                              attrs: {
                                                d: "M0 0h24v24H0V0z",
                                                fill: "none",
                                              },
                                            }),
                                            _vm._v(" "),
                                            _c("path", {
                                              attrs: {
                                                d: "M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9zm7.5-5l-1-1h-5l-1 1H5v2h14V4h-3.5z",
                                              },
                                            }),
                                          ]
                                        ),
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _vm._m(66),
                                    _vm._v(" "),
                                    _vm._m(67),
                                  ]
                                ),
                              ]),
                            ]),
                          ]),
                        ]
                      ),
                    ]),
                  ]),
                ]),
              ]),
            ]),
          ]),
        ]),
      ]),
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "modal fade", attrs: { id: "Vertically" } }, [
      _c(
        "div",
        {
          staticClass: "modal-dialog modal-dialog-centered task-view-modal",
          attrs: { role: "document" },
        },
        [
          _c("div", { staticClass: "modal-content modal-content-demo" }, [
            _vm._m(68),
            _vm._v(" "),
            _vm._m(69),
            _vm._v(" "),
            _c("div", { staticClass: "modal-footer p-0 border-top-0" }, [
              _vm._m(70),
              _vm._v(" "),
              _c("div", { staticClass: "tab-content w-100" }, [
                _c(
                  "div",
                  {
                    staticClass: "tab-pane active task-files-tab",
                    attrs: { id: "task-files" },
                  },
                  [
                    _c("div", { staticClass: "row" }, [
                      _c("div", { staticClass: "file-upload-text" }, [
                        _c("input", {
                          attrs: {
                            type: "file",
                            id: "task-file-input",
                            multiple: "",
                          },
                        }),
                        _vm._v(" "),
                        _c(
                          "label",
                          {
                            staticClass: "text-primary",
                            attrs: { for: "task-file-input" },
                          },
                          [
                            _c(
                              "svg",
                              {
                                staticClass: "w-inner-icn text-primary",
                                attrs: {
                                  xmlns: "http://www.w3.org/2000/svg",
                                  "enable-background": "new 0 0 24 24",
                                  viewBox: "0 0 24 24",
                                },
                              },
                              [
                                _c("path", {
                                  attrs: {
                                    d: "M16,11.5h-3.5V8c0-0.276123-0.223877-0.5-0.5-0.5S11.5,7.723877,11.5,8v3.5H8c-0.276123,0-0.5,0.223877-0.5,0.5s0.223877,0.5,0.5,0.5h3.5v3.5005493C11.5001831,16.2765503,11.723999,16.5001831,12,16.5h0.0006104C12.2765503,16.4998169,12.5001831,16.276001,12.5,16v-3.5H16c0.276123,0,0.5-0.223877,0.5-0.5S16.276123,11.5,16,11.5z M12,2C6.4771729,2,2,6.4771729,2,12s4.4771729,10,10,10c5.5202026-0.0062866,9.9937134-4.4797974,10-10C22,6.4771729,17.5228271,2,12,2z M12,21c-4.9705811,0-9-4.0294189-9-9s4.0294189-9,9-9c4.9682617,0.0056152,8.9943848,4.0317383,9,9C21,16.9705811,16.9705811,21,12,21z",
                                  },
                                }),
                              ]
                            ),
                            _vm._v(
                              "\n                    Upload Files\n                    "
                            ),
                            _c("span", { staticClass: "text-muted" }),
                          ]
                        ),
                        _vm._v(" "),
                        _c("i", { staticClass: "fa fa-times-circle remove" }),
                      ]),
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "row" }, [
                      _c("div", { staticClass: "mt-3" }, [
                        _c(
                          "table",
                          { staticClass: "table table-bordered br-7" },
                          [
                            _vm._m(71),
                            _vm._v(" "),
                            _c("tbody", [
                              _c("tr", [
                                _c("td", [
                                  _c("div", { staticClass: "recent-files" }, [
                                    _c(
                                      "svg",
                                      {
                                        staticClass:
                                          "file-manager-icon w-icn me-2",
                                        attrs: {
                                          xmlns: "http://www.w3.org/2000/svg",
                                          viewBox: "0 0 24 24",
                                        },
                                      },
                                      [
                                        _c("path", {
                                          attrs: {
                                            fill: "#b6dfff",
                                            d: "M20,8.99969l-7-7H7a3,3,0,0,0-3,3v14a3,3,0,0,0,3,3H17a3,3,0,0,0,3-3Z",
                                          },
                                        }),
                                        _vm._v(" "),
                                        _c("path", {
                                          attrs: {
                                            fill: "#86cbff",
                                            d: "M20 8.99969H15a2 2 0 0 1-2-2v-5zM19 22a.99974.99974 0 0 1-1-1V19a1 1 0 0 1 2 0v2A.99974.99974 0 0 1 19 22zM19 17a1.03391 1.03391 0 0 1-.71-.29.99108.99108 0 0 1-.21045-1.08984A1.14883 1.14883 0 0 1 18.29 15.29a1.02673 1.02673 0 0 1 .32959-.21.91433.91433 0 0 1 .76025 0 1.03418 1.03418 0 0 1 .33008.21 1.15772 1.15772 0 0 1 .21.33008A.98919.98919 0 0 1 19.71 16.71a1.15384 1.15384 0 0 1-.33008.21A.9994.9994 0 0 1 19 17zM15 18H9a1 1 0 0 1 0-2h6a1 1 0 0 1 0 2zM15 14H9a1 1 0 0 1 0-2h6a1 1 0 0 1 0 2zM10 10H9A1 1 0 0 1 9 8h1a1 1 0 0 1 0 2z",
                                          },
                                        }),
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "span",
                                      {
                                        staticClass:
                                          "mb-1 font-weight-semibold",
                                      },
                                      [_vm._v("noa documentation")]
                                    ),
                                  ]),
                                ]),
                                _vm._v(" "),
                                _vm._m(72),
                                _vm._v(" "),
                                _vm._m(73),
                                _vm._v(" "),
                                _vm._m(74),
                              ]),
                              _vm._v(" "),
                              _c("tr", [
                                _c("td", [
                                  _c("div", { staticClass: "recent-files" }, [
                                    _c(
                                      "svg",
                                      {
                                        staticClass:
                                          "file-manager-icon w-icn me-2",
                                        attrs: {
                                          xmlns: "http://www.w3.org/2000/svg",
                                          "enable-background": "new 0 0 24 24",
                                          viewBox: "0 0 24 24",
                                        },
                                      },
                                      [
                                        _c("path", {
                                          attrs: {
                                            fill: "#f2c8db",
                                            d: "M14,18H5c-1.65611-0.00181-2.99819-1.34389-3-3V9c0.00181-1.65611,1.34389-2.99819,3-3h9c1.65611,0.00181,2.99819,1.34389,3,3v6C16.99819,16.65611,15.65611,17.99819,14,18z",
                                          },
                                        }),
                                        _vm._v(" "),
                                        _c("path", {
                                          attrs: {
                                            fill: "#eaa4c4",
                                            d: "M21.89465,7.55359c-0.24683-0.49432-0.8476-0.69495-1.34192-0.44812l-3.56421,1.7821C16.98999,8.92572,16.99994,8.96149,17,9v6c-0.00006,0.03851-0.01001,0.07428-0.01147,0.11243l3.56421,1.7821C20.69165,16.96381,20.84479,16.99994,21,17c0.55212-0.00037,0.99969-0.44788,1-1V8C21.99994,7.84503,21.96387,7.6922,21.89465,7.55359z",
                                          },
                                        }),
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "span",
                                      {
                                        staticClass:
                                          "mb-1 font-weight-semibold",
                                      },
                                      [_vm._v("sample video")]
                                    ),
                                  ]),
                                ]),
                                _vm._v(" "),
                                _vm._m(75),
                                _vm._v(" "),
                                _vm._m(76),
                                _vm._v(" "),
                                _vm._m(77),
                              ]),
                              _vm._v(" "),
                              _c("tr", { staticClass: "row-last" }, [
                                _c("td", [
                                  _c("div", { staticClass: "recent-files" }, [
                                    _c(
                                      "svg",
                                      {
                                        staticClass:
                                          "file-manager-icon w-icn me-2",
                                        attrs: {
                                          xmlns: "http://www.w3.org/2000/svg",
                                          "enable-background": "new 0 0 24 24",
                                          viewBox: "0 0 24 24",
                                        },
                                      },
                                      [
                                        _c("path", {
                                          attrs: {
                                            fill: "#c8e4a6",
                                            d: "M13.5,9C12.67157,9,12,8.32843,12,7.5S12.67157,6,13.5,6S15,6.67157,15,7.5C14.9991,8.32805,14.32805,8.9991,13.5,9z",
                                          },
                                        }),
                                        _vm._v(" "),
                                        _c("path", {
                                          attrs: {
                                            fill: "#add679",
                                            d: "M19,2H5C3.34515,2.00483,2.00483,3.34515,2,5v8.86l3.88-3.88c1.18747-1.13,3.05253-1.13,4.24,0l2.87139,2.887l0.88752-0.88751c1.17344-1.16662,3.06874-1.16662,4.24218,0L22,15.8584V5C21.99517,3.34515,20.65485,2.00483,19,2z M13.5,9C12.67157,9,12,8.32843,12,7.5S12.67157,6,13.5,6S15,6.67157,15,7.5C14.9991,8.32805,14.32805,8.9991,13.5,9z",
                                          },
                                        }),
                                        _vm._v(" "),
                                        _c("path", {
                                          attrs: {
                                            fill: "#8FBD56",
                                            d: "M10.12,9.98c-1.18747-1.13-3.05253-1.13-4.24,0L2,13.86V19c0.00484,1.65484,1.34516,2.99516,3,3h14c0.81512-0.00034,1.59497-0.3325,2.16-0.92L10.12,9.98z",
                                          },
                                        }),
                                        _vm._v(" "),
                                        _c("path", {
                                          attrs: {
                                            fill: "#c8e4a6",
                                            d: "M22,15.8584l-3.87891-3.87891c-1.17345-1.1666-3.06873-1.1666-4.24218,0L12.99139,12.867l8.16425,8.20856C21.69776,20.5208,22.00089,19.77567,22,19V15.8584z",
                                          },
                                        }),
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "span",
                                      {
                                        staticClass:
                                          "mb-1 font-weight-semibold",
                                      },
                                      [_vm._v("sample image")]
                                    ),
                                  ]),
                                ]),
                                _vm._v(" "),
                                _vm._m(78),
                                _vm._v(" "),
                                _vm._m(79),
                                _vm._v(" "),
                                _vm._m(80),
                              ]),
                            ]),
                          ]
                        ),
                      ]),
                    ]),
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "tab-pane", attrs: { id: "task-subtask" } },
                  [
                    _c("div", { staticClass: "row" }, [
                      _c("div", { staticClass: "col-md-12" }, [
                        _c(
                          "div",
                          { staticClass: "d-flex add-task-container" },
                          [
                            _c("input", {
                              staticClass: "form-control wp-40 subtask-input",
                              attrs: {
                                type: "text",
                                placeholder: "Type Task Here...",
                                id: "subTaskInput",
                              },
                            }),
                            _vm._v(" "),
                            _c(
                              "a",
                              {
                                staticClass:
                                  "text-teritary text-center ms-2 me-2",
                                attrs: {
                                  href: "javascript:void(0)",
                                  role: "button",
                                  id: "addTask",
                                },
                              },
                              [
                                _c(
                                  "svg",
                                  {
                                    staticClass: "w-inner-icn text-teritary",
                                    attrs: {
                                      xmlns: "http://www.w3.org/2000/svg",
                                      "enable-background": "new 0 0 24 24",
                                      viewBox: "0 0 24 24",
                                    },
                                  },
                                  [
                                    _c("path", {
                                      attrs: {
                                        d: "M16,11.5h-3.5V8c0-0.276123-0.223877-0.5-0.5-0.5S11.5,7.723877,11.5,8v3.5H8c-0.276123,0-0.5,0.223877-0.5,0.5s0.223877,0.5,0.5,0.5h3.5v3.5005493C11.5001831,16.2765503,11.723999,16.5001831,12,16.5h0.0006104C12.2765503,16.4998169,12.5001831,16.276001,12.5,16v-3.5H16c0.276123,0,0.5-0.223877,0.5-0.5S16.276123,11.5,16,11.5z M12,2C6.4771729,2,2,6.4771729,2,12s4.4771729,10,10,10c5.5202026-0.0062866,9.9937134-4.4797974,10-10C22,6.4771729,17.5228271,2,12,2z M12,21c-4.9705811,0-9-4.0294189-9-9s4.0294189-9,9-9c4.9682617,0.0056152,8.9943848,4.0317383,9,9C21,16.9705811,16.9705811,21,12,21z",
                                      },
                                    }),
                                  ]
                                ),
                                _vm._v(
                                  "\n                      Add\n                    "
                                ),
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "a",
                              {
                                staticClass: "text-primary text-center ms-2",
                                attrs: {
                                  href: "javascript:void(0)",
                                  role: "button",
                                  id: "completedAll",
                                },
                              },
                              [
                                _c(
                                  "svg",
                                  {
                                    staticClass: "w-inner-icn text-primary",
                                    attrs: {
                                      xmlns: "http://www.w3.org/2000/svg",
                                      "enable-background": "new 0 0 24 24",
                                      viewBox: "0 0 24 24",
                                    },
                                  },
                                  [
                                    _c("path", {
                                      attrs: {
                                        d: "M15.8085327,8.6464844l-5.6464233,5.6464844l-2.4707031-2.4697266c-0.0023804-0.0023804-0.0047607-0.0047607-0.0072021-0.0071411c-0.1972046-0.1932373-0.5137329-0.1900635-0.7069702,0.0071411c-0.1932983,0.1972656-0.1900635,0.5137939,0.0071411,0.7070312l2.8242188,2.8232422C9.9022217,15.4474487,10.02948,15.5001831,10.1621094,15.5c0.1326294,0.0001221,0.2598267-0.0525513,0.3534546-0.1464844l6-6c0.0023804-0.0023804,0.0047607-0.0046997,0.0071411-0.0071411c0.1932373-0.1972046,0.1900635-0.5137329-0.0071411-0.7069702C16.3183594,8.446106,16.0018311,8.4493408,15.8085327,8.6464844z M12,2C6.4771729,2,2,6.4771729,2,12s4.4771729,10,10,10c5.5201416-0.0064697,9.9935303-4.4798584,10-10C22,6.4771729,17.5228271,2,12,2z M12,21c-4.9705811,0-9-4.0294189-9-9s4.0294189-9,9-9c4.9683228,0.0054321,8.9945679,4.0316772,9,9C21,16.9705811,16.9705811,21,12,21z",
                                      },
                                    }),
                                  ]
                                ),
                                _vm._v(
                                  "\n                      Mark All\n                    "
                                ),
                              ]
                            ),
                          ]
                        ),
                        _vm._v(" "),
                        _c("label", {
                          staticClass: "w-100 d-block text-danger",
                          attrs: { for: "subTaskInput", id: "errorNote" },
                        }),
                      ]),
                    ]),
                    _vm._v(" "),
                    _vm._m(81),
                    _vm._v(" "),
                    _c("div", { staticClass: "row" }, [
                      _c("div", { staticClass: "col-md-12 text-end mt-3" }, [
                        _c(
                          "a",
                          {
                            staticClass: "text-danger",
                            attrs: {
                              href: "javascript:void(0)",
                              role: "button",
                              id: "deleteAllTasks",
                            },
                          },
                          [
                            _c(
                              "svg",
                              {
                                staticClass: "w-inner-icn text-danger",
                                attrs: {
                                  xmlns: "http://www.w3.org/2000/svg",
                                  "enable-background": "new 0 0 24 24",
                                  viewBox: "0 0 24 24",
                                },
                              },
                              [
                                _c("path", {
                                  attrs: {
                                    d: "M16,11.5h-3.5V8c0-0.276123-0.223877-0.5-0.5-0.5S11.5,7.723877,11.5,8v3.5H8c-0.276123,0-0.5,0.223877-0.5,0.5s0.223877,0.5,0.5,0.5h3.5v3.5005493C11.5001831,16.2765503,11.723999,16.5001831,12,16.5h0.0006104C12.2765503,16.4998169,12.5001831,16.276001,12.5,16v-3.5H16c0.276123,0,0.5-0.223877,0.5-0.5S16.276123,11.5,16,11.5z M12,2C6.4771729,2,2,6.4771729,2,12s4.4771729,10,10,10c5.5202026-0.0062866,9.9937134-4.4797974,10-10C22,6.4771729,17.5228271,2,12,2z M12,21c-4.9705811,0-9-4.0294189-9-9s4.0294189-9,9-9c4.9682617,0.0056152,8.9943848,4.0317383,9,9C21,16.9705811,16.9705811,21,12,21z",
                                  },
                                }),
                              ]
                            ),
                            _vm._v(
                              "\n                    Delete All\n                  "
                            ),
                          ]
                        ),
                      ]),
                    ]),
                  ]
                ),
                _vm._v(" "),
                _vm._m(82),
                _vm._v(" "),
                _vm._m(83),
              ]),
            ]),
          ]),
        ]
      ),
    ]),
    _vm._v(" "),
    _vm._m(84),
    _vm._v(" "),
    _vm._m(85),
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "a",
      { staticClass: "logo-horizontal", attrs: { href: "index.html" } },
      [
        _c("img", {
          staticClass: "header-brand-img desktop-logo",
          attrs: { src: "/assets/images/brand/logo.png", alt: "logo" },
        }),
        _vm._v(" "),
        _c("img", {
          staticClass: "header-brand-img light-logo1",
          attrs: { src: "/assets/images/brand/logo-3.png", alt: "logo" },
        }),
      ]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "button",
      {
        staticClass: "navbar-toggler navresponsive-toggler d-md-none ms-auto",
        attrs: {
          type: "button",
          "data-bs-toggle": "collapse",
          "data-bs-target": "#navbarSupportedContent-4",
          "aria-controls": "navbarSupportedContent-4",
          "aria-expanded": "false",
          "aria-label": "Toggle navigation",
        },
      },
      [_c("span", { staticClass: "navbar-toggler-icon fe fe-more-vertical" })]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass:
          "dropdown d-md-flex main-header-notification flag-dropdown",
      },
      [
        _c(
          "a",
          {
            staticClass: "nav-link icon text-center country-nav-link",
            attrs: {
              "data-bs-target": "#country-selector",
              "data-bs-toggle": "modal",
            },
          },
          [
            _c("img", {
              staticClass: "header-icons language",
              attrs: { alt: "", src: "/assets/images/flags/us_flag.jpg" },
            }),
          ]
        ),
      ]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "dropdown-menu dropdown-menu-end dropdown-menu-arrow" },
      [
        _c("div", { staticClass: "drop-heading border-bottom" }, [
          _c("div", { staticClass: "d-flex" }, [
            _c("h6", { staticClass: "mt-1 mb-0 fs-15 text-dark" }, [
              _vm._v("Shopping Cart"),
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "ms-auto" }, [
              _c(
                "span",
                {
                  staticClass:
                    "xm-title badge bg-secondary text-white fw-normal fs-11 badge-pill",
                },
                [
                  _c(
                    "a",
                    {
                      staticClass: "showall-text text-white",
                      attrs: { href: "javascript:void(0);" },
                    },
                    [_vm._v("Remove All")]
                  ),
                ]
              ),
            ]),
          ]),
        ]),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "header-dropdown-list cart-menu ps4 overflow-hidden" },
          [
            _c(
              "a",
              {
                staticClass: "dropdown-item d-flex p-4",
                attrs: { href: "cart.html" },
              },
              [
                _c("span", {
                  staticClass:
                    "avatar avatar-lg br-5 me-3 align-self-center cover-image",
                  attrs: {
                    "data-bs-image-src": "/assets/images/ecommerce/1.jpg",
                  },
                }),
                _vm._v(" "),
                _c("div", { staticClass: "wp-60 cart-desc mt-1" }, [
                  _c(
                    "p",
                    { staticClass: "fs-13 mb-0 lh-1 mb-1 text-dark fw-500" },
                    [_vm._v("TrueBasket Metal Single Pot")]
                  ),
                  _vm._v(" "),
                  _c("p", { staticClass: "fs-12 fw-300 lh-1 mb-0" }, [
                    _vm._v("Status: "),
                    _c("span", { staticClass: "text-green" }, [
                      _vm._v("In Stock"),
                    ]),
                  ]),
                  _vm._v(" "),
                  _c("span", { staticClass: "fs-12 fw-300 lh-1 mb-0" }, [
                    _vm._v("Quantity: 01"),
                  ]),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "ms-auto text-end d-flex fs-16" }, [
                  _c(
                    "span",
                    {
                      staticClass:
                        "fs-16 text-dark d-none d-sm-block fw-semibold",
                    },
                    [
                      _vm._v(
                        "\n                              $129\n                            "
                      ),
                    ]
                  ),
                ]),
              ]
            ),
            _vm._v(" "),
            _c(
              "a",
              {
                staticClass: "dropdown-item d-flex p-4",
                attrs: { href: "cart.html" },
              },
              [
                _c("span", {
                  staticClass:
                    "avatar avatar-lg br-5 me-3 align-self-center cover-image",
                  attrs: {
                    "data-bs-image-src": "/assets/images/ecommerce/2.jpg",
                  },
                }),
                _vm._v(" "),
                _c("div", { staticClass: "wp-60 cart-desc mt-1" }, [
                  _c(
                    "p",
                    { staticClass: "fs-13 mb-0 lh-1 mb-1 text-dark fw-500" },
                    [_vm._v("Authentic chair with Canopy")]
                  ),
                  _vm._v(" "),
                  _c("p", { staticClass: "fs-12 fw-300 lh-1 mb-0" }, [
                    _vm._v("Status: "),
                    _c("span", { staticClass: "text-green" }, [
                      _vm._v("In Stock"),
                    ]),
                  ]),
                  _vm._v(" "),
                  _c("span", { staticClass: "fs-12 fw-300 lh-1 mb-0" }, [
                    _vm._v("Quantity: 03"),
                  ]),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "ms-auto text-end d-flex fs-16" }, [
                  _c(
                    "span",
                    {
                      staticClass:
                        "fs-16 text-dark d-none d-sm-block fw-semibold",
                    },
                    [
                      _vm._v(
                        "\n                              $99\n                            "
                      ),
                    ]
                  ),
                ]),
              ]
            ),
            _vm._v(" "),
            _c(
              "a",
              {
                staticClass: "dropdown-item d-flex p-4",
                attrs: { href: "cart.html" },
              },
              [
                _c("span", {
                  staticClass:
                    "avatar avatar-lg br-5 me-3 align-self-center cover-image",
                  attrs: {
                    "data-bs-image-src": "/assets/images/ecommerce/3.jpg",
                  },
                }),
                _vm._v(" "),
                _c("div", { staticClass: "wp-60 cart-desc mt-1" }, [
                  _c(
                    "p",
                    { staticClass: "fs-13 mb-0 lh-1 mb-1 text-dark fw-500" },
                    [_vm._v("Casual Sneakers Canvas")]
                  ),
                  _vm._v(" "),
                  _c("p", { staticClass: "fs-12 fw-300 lh-1 mb-0" }, [
                    _vm._v("Status: "),
                    _c("span", { staticClass: "text-green" }, [
                      _vm._v("In Stock"),
                    ]),
                  ]),
                  _vm._v(" "),
                  _c("span", { staticClass: "fs-12 fw-300 lh-1 mb-0" }, [
                    _vm._v("Quantity: 03"),
                  ]),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "ms-auto text-end d-flex fs-16" }, [
                  _c(
                    "span",
                    {
                      staticClass:
                        "fs-16 text-dark d-none d-sm-block fw-semibold",
                    },
                    [
                      _vm._v(
                        "\n                              $299\n                            "
                      ),
                    ]
                  ),
                ]),
              ]
            ),
            _vm._v(" "),
            _c(
              "a",
              {
                staticClass: "dropdown-item d-flex p-4",
                attrs: { href: "cart.html" },
              },
              [
                _c("span", {
                  staticClass:
                    "avatar avatar-lg br-5 me-3 align-self-center cover-image",
                  attrs: {
                    "data-bs-image-src": "/assets/images/ecommerce/4.jpg",
                  },
                }),
                _vm._v(" "),
                _c("div", { staticClass: "wp-60 cart-desc mt-1" }, [
                  _c(
                    "p",
                    { staticClass: "fs-13 mb-0 lh-1 mb-1 text-dark fw-500" },
                    [_vm._v("Branded Head Phones")]
                  ),
                  _vm._v(" "),
                  _c("p", { staticClass: "fs-12 fw-300 lh-1 mb-0" }, [
                    _vm._v("Status: "),
                    _c("span", { staticClass: "text-danger" }, [
                      _vm._v("No Stock"),
                    ]),
                  ]),
                  _vm._v(" "),
                  _c("span", { staticClass: "fs-12 fw-300 lh-1 mb-0" }, [
                    _vm._v("Quantity: 01"),
                  ]),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "ms-auto text-end d-flex fs-16" }, [
                  _c(
                    "span",
                    {
                      staticClass:
                        "fs-16 text-dark d-none d-sm-block fw-semibold",
                    },
                    [
                      _vm._v(
                        "\n                              $249\n                            "
                      ),
                    ]
                  ),
                ]),
              ]
            ),
            _vm._v(" "),
            _c(
              "a",
              {
                staticClass: "dropdown-item d-flex p-4",
                attrs: { href: "cart.html" },
              },
              [
                _c("span", {
                  staticClass:
                    "avatar avatar-lg br-5 me-3 align-self-center cover-image",
                  attrs: {
                    "data-bs-image-src": "/assets/images/ecommerce/5.jpg",
                  },
                }),
                _vm._v(" "),
                _c("div", { staticClass: "wp-60 cart-desc mt-1" }, [
                  _c(
                    "p",
                    { staticClass: "fs-13 mb-0 lh-1 mb-1 text-dark fw-500" },
                    [_vm._v("camera lens (16mm f/1.4)")]
                  ),
                  _vm._v(" "),
                  _c("p", { staticClass: "fs-12 fw-300 lh-1 mb-0" }, [
                    _vm._v("Status: "),
                    _c("span", { staticClass: "text-green" }, [
                      _vm._v("In Stock"),
                    ]),
                  ]),
                  _vm._v(" "),
                  _c("span", { staticClass: "fs-12 fw-300 lh-1 mb-0" }, [
                    _vm._v("Quantity: 02"),
                  ]),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "ms-auto text-end d-flex fs-16" }, [
                  _c(
                    "span",
                    {
                      staticClass:
                        "fs-16 text-dark d-none d-sm-block fw-semibold",
                    },
                    [
                      _vm._v(
                        "\n                              $1,279\n                            "
                      ),
                    ]
                  ),
                ]),
              ]
            ),
          ]
        ),
        _vm._v(" "),
        _c("div", { staticClass: "dropdown-divider m-0" }),
        _vm._v(" "),
        _c("div", { staticClass: "text-center p-3" }, [
          _c("a", { staticClass: "btn btn-primary" }, [_vm._v("Checkout")]),
        ]),
      ]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass: "dropdown-menu dropdown-menu-end dropdown-menu-arrow",
        attrs: { "data-bs-popper": "none" },
      },
      [
        _c("div", { staticClass: "drop-heading border-bottom" }, [
          _c("div", { staticClass: "d-flex" }, [
            _c("h6", { staticClass: "mt-1 mb-0 fs-15 text-dark" }, [
              _vm._v("Messages"),
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "ms-auto" }, [
              _c(
                "span",
                {
                  staticClass:
                    "xm-title badge bg-secondary text-white fw-normal fs-11 badge-pill",
                },
                [
                  _c(
                    "a",
                    {
                      staticClass: "showall-text text-white",
                      attrs: { href: "javascript:void(0);" },
                    },
                    [_vm._v("Clear")]
                  ),
                ]
              ),
            ]),
          ]),
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "message-menu ps2 overflow-hidden" }, [
          _c(
            "a",
            {
              staticClass: "dropdown-item d-flex",
              attrs: { href: "chat.html" },
            },
            [
              _c("span", {
                staticClass:
                  "avatar avatar-md brround me-3 align-self-center cover-image",
                staticStyle: {
                  background:
                    'url("../assets/images/users/1.jpg") center center',
                },
                attrs: { "data-bs-image-src": "/assets/images/users/1.jpg" },
              }),
              _vm._v(" "),
              _c("div", { staticClass: "wd-90p" }, [
                _c("div", { staticClass: "d-flex" }, [
                  _c("h5", { staticClass: "mb-1" }, [_vm._v("Hawaii Hilton")]),
                  _vm._v(" "),
                  _c("small", { staticClass: "text-muted ms-auto text-end" }, [
                    _vm._v(" 11.07 am "),
                  ]),
                ]),
                _vm._v(" "),
                _c("span", { staticClass: "fs-12 text-muted" }, [
                  _vm._v("Wanted to submit project by tomorrow...."),
                ]),
              ]),
            ]
          ),
          _vm._v(" "),
          _c(
            "a",
            {
              staticClass: "dropdown-item d-flex",
              attrs: { href: "chat.html" },
            },
            [
              _c("span", {
                staticClass:
                  "avatar avatar-md brround me-3 align-self-center cover-image",
                staticStyle: {
                  background:
                    'url("../assets/images/users/15.jpg") center center',
                },
                attrs: { "data-bs-image-src": "/assets/images/users/15.jpg" },
              }),
              _vm._v(" "),
              _c("div", { staticClass: "wd-90p" }, [
                _c("div", { staticClass: "d-flex" }, [
                  _c("h5", { staticClass: "mb-1" }, [_vm._v("Hermoini")]),
                  _vm._v(" "),
                  _c("small", { staticClass: "text-muted ms-auto text-end" }, [
                    _vm._v(" 12.32 am "),
                  ]),
                ]),
                _vm._v(" "),
                _c("span", { staticClass: "fs-12 text-muted" }, [
                  _vm._v("Planning for next big update......"),
                ]),
              ]),
            ]
          ),
          _vm._v(" "),
          _c(
            "a",
            {
              staticClass: "dropdown-item d-flex",
              attrs: { href: "chat.html" },
            },
            [
              _c("span", {
                staticClass:
                  "avatar avatar-md brround me-3 align-self-center cover-image",
                staticStyle: {
                  background:
                    'url("../assets/images/users/12.jpg") center center',
                },
                attrs: { "data-bs-image-src": "/assets/images/users/12.jpg" },
              }),
              _vm._v(" "),
              _c("div", { staticClass: "wd-90p" }, [
                _c("div", { staticClass: "d-flex" }, [
                  _c("h5", { staticClass: "mb-1" }, [_vm._v("Buenda osas")]),
                  _vm._v(" "),
                  _c("small", { staticClass: "text-muted ms-auto text-end" }, [
                    _vm._v(" 2:17 am "),
                  ]),
                ]),
                _vm._v(" "),
                _c("span", { staticClass: "fs-12 text-muted" }, [
                  _vm._v("Ready to submit future data..."),
                ]),
              ]),
            ]
          ),
          _vm._v(" "),
          _c(
            "a",
            {
              staticClass: "dropdown-item d-flex",
              attrs: { href: "chat.html" },
            },
            [
              _c("span", {
                staticClass:
                  "avatar avatar-md brround me-3 align-self-center cover-image",
                staticStyle: {
                  background:
                    'url("../assets/images/users/4.jpg") center center',
                },
                attrs: { "data-bs-image-src": "/assets/images/users/4.jpg" },
              }),
              _vm._v(" "),
              _c("div", { staticClass: "wd-90p" }, [
                _c("div", { staticClass: "d-flex" }, [
                  _c("h5", { staticClass: "mb-1" }, [_vm._v("Gabby gibson")]),
                  _vm._v(" "),
                  _c("small", { staticClass: "text-muted ms-auto text-end" }, [
                    _vm._v(" 7:55 am "),
                  ]),
                ]),
                _vm._v(" "),
                _c("span", { staticClass: "fs-12 text-muted" }, [
                  _vm._v("Cleared all statistics from last year......"),
                ]),
              ]),
            ]
          ),
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "dropdown-divider m-0" }),
        _vm._v(" "),
        _c("div", { staticClass: "text-center p-3" }, [
          _c("a", { staticClass: "btn btn-primary" }, [
            _vm._v("View All Messages"),
          ]),
        ]),
      ]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "drop-heading border-bottom" }, [
      _c("div", { staticClass: "d-flex" }, [
        _c("h6", { staticClass: "mt-1 mb-0 fs-15 text-dark" }, [
          _vm._v("Notifications"),
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "ms-auto" }, [
          _c(
            "span",
            {
              staticClass:
                "xm-title badge bg-secondary text-white fw-normal fs-11 badge-pill",
            },
            [
              _c(
                "a",
                {
                  staticClass: "showall-text text-white",
                  attrs: { href: "javascript:void(0);" },
                },
                [_vm._v("Clear")]
              ),
            ]
          ),
        ]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [
      _c("span", { staticClass: "notification-label mb-1" }, [
        _vm._v("New Message Received"),
      ]),
      _vm._v(" "),
      _c("span", { staticClass: "notification-subtext text-muted" }, [
        _vm._v("2 hours ago"),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [
      _c("span", { staticClass: "notification-label mb-1" }, [
        _vm._v("New Mail Received"),
      ]),
      _vm._v(" "),
      _c("span", { staticClass: "notification-subtext text-muted" }, [
        _vm._v("1 week ago"),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [
      _c("span", { staticClass: "notification-label mb-1" }, [
        _vm._v("New Order Received"),
      ]),
      _vm._v(" "),
      _c("span", { staticClass: "notification-subtext text-muted" }, [
        _vm._v("1 day ago"),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [
      _c("span", { staticClass: "notification-label mb-1" }, [
        _vm._v("New Comment Received"),
      ]),
      _vm._v(" "),
      _c("span", { staticClass: "notification-subtext text-muted" }, [
        _vm._v("1 day ago"),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "text-center p-3" }, [
      _c("a", { staticClass: "btn btn-primary" }, [
        _vm._v("View All Notifications"),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "a",
      {
        staticClass: "nav-link pe-2 leading-none d-flex animate",
        attrs: { href: "#", "data-bs-toggle": "dropdown" },
      },
      [
        _c("span", [
          _c("img", {
            staticClass: "avatar profile-user brround cover-image",
            attrs: { src: "/assets/images/faces/6.jpg", alt: "profile-user" },
          }),
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "text-center p-1 d-flex d-lg-none-max" }, [
          _c("h6", { staticClass: "mb-0", attrs: { id: "profile-heading" } }, [
            _vm._v("Elena"),
            _c("i", { staticClass: "user-angle ms-1 fa fa-angle-down" }),
          ]),
        ]),
      ]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "side-header" }, [
      _c("a", { staticClass: "header-brand1", attrs: { href: "index.html" } }, [
        _c("img", {
          staticClass: "header-brand-img desktop-logo",
          attrs: { src: "/assets/images/brand/logo.png", alt: "logo" },
        }),
        _vm._v(" "),
        _c("img", {
          staticClass: "header-brand-img toggle-logo",
          attrs: { src: "/assets/images/brand/logo-1.png", alt: "logo" },
        }),
        _vm._v(" "),
        _c("img", {
          staticClass: "header-brand-img light-logo",
          attrs: { src: "/assets/images/brand/logo-2.png", alt: "logo" },
        }),
        _vm._v(" "),
        _c("img", {
          staticClass: "header-brand-img light-logo1",
          attrs: { src: "/assets/images/brand/logo-3.png", alt: "logo" },
        }),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("li", [_c("h3", [_vm._v("Menu")])])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("li", [_c("h3", [_vm._v("Components")])])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("ul", { staticClass: "slide-menu" }, [
      _c("li", { staticClass: "side-menu-label1" }, [
        _c("a", { attrs: { href: "javascript:void(0)" } }, [_vm._v("Forms")]),
      ]),
      _vm._v(" "),
      _c("li", [
        _c(
          "a",
          { staticClass: "slide-item", attrs: { href: "form-elements.html" } },
          [_vm._v("Form Elements")]
        ),
      ]),
      _vm._v(" "),
      _c("li", [
        _c(
          "a",
          { staticClass: "slide-item", attrs: { href: "form-layouts.html" } },
          [_vm._v("Form Layouts")]
        ),
      ]),
      _vm._v(" "),
      _c("li", [
        _c(
          "a",
          {
            staticClass: "slide-item",
            attrs: { href: "form-validation.html" },
          },
          [_vm._v("Form Validation")]
        ),
      ]),
      _vm._v(" "),
      _c("li", [
        _c(
          "a",
          { staticClass: "slide-item", attrs: { href: "form-advanced.html" } },
          [_vm._v("Form Advanced")]
        ),
      ]),
      _vm._v(" "),
      _c("li", [
        _c(
          "a",
          { staticClass: "slide-item", attrs: { href: "wysiwyag.html" } },
          [_vm._v("Form Editors")]
        ),
      ]),
      _vm._v(" "),
      _c("li", [
        _c(
          "a",
          { staticClass: "slide-item", attrs: { href: "form-editable.html" } },
          [_vm._v("Form editable")]
        ),
      ]),
      _vm._v(" "),
      _c("li", [
        _c(
          "a",
          { staticClass: "slide-item", attrs: { href: "form-wizard.html" } },
          [_vm._v("Form Wizard")]
        ),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("ul", { staticClass: "slide-menu" }, [
      _c("li", { staticClass: "side-menu-label1" }, [
        _c("a", { attrs: { href: "javascript:void(0)" } }, [_vm._v("Tables")]),
      ]),
      _vm._v(" "),
      _c("li", [
        _c("a", { staticClass: "slide-item", attrs: { href: "tables.html" } }, [
          _vm._v("Default Table"),
        ]),
      ]),
      _vm._v(" "),
      _c("li", [
        _c(
          "a",
          { staticClass: "slide-item", attrs: { href: "datatable.html" } },
          [_vm._v("Data Tables")]
        ),
      ]),
      _vm._v(" "),
      _c("li", [
        _c(
          "a",
          { staticClass: "slide-item", attrs: { href: "table-editable.html" } },
          [_vm._v("Editable Tables")]
        ),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("ul", { staticClass: "slide-menu" }, [
      _c("li", { staticClass: "side-menu-label1" }, [
        _c("a", { attrs: { href: "javascript:void(0)" } }, [_vm._v("Charts")]),
      ]),
      _vm._v(" "),
      _c("li", [
        _c(
          "a",
          { staticClass: "slide-item", attrs: { href: "chart-echart.html" } },
          [_vm._v(" ECharts")]
        ),
      ]),
      _vm._v(" "),
      _c("li", [
        _c(
          "a",
          { staticClass: "slide-item", attrs: { href: "chart-chartjs.html" } },
          [_vm._v("Chart Js")]
        ),
      ]),
      _vm._v(" "),
      _c("li", [
        _c(
          "a",
          { staticClass: "slide-item", attrs: { href: "chart-flot.html" } },
          [_vm._v(" Flot Charts")]
        ),
      ]),
      _vm._v(" "),
      _c("li", [
        _c(
          "a",
          { staticClass: "slide-item", attrs: { href: "chart-morris.html" } },
          [_vm._v(" Morris Charts")]
        ),
      ]),
      _vm._v(" "),
      _c("li", [
        _c(
          "a",
          { staticClass: "slide-item", attrs: { href: "chart-nvd3.html" } },
          [_vm._v("Nvd3 Charts")]
        ),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("ul", { staticClass: "slide-menu" }, [
      _c("li", { staticClass: "side-menu-label1" }, [
        _c("a", { attrs: { href: "javascript:void(0)" } }, [_vm._v("Icons")]),
      ]),
      _vm._v(" "),
      _c("li", [
        _c("a", { staticClass: "slide-item", attrs: { href: "icons.html" } }, [
          _vm._v("Font Awesome"),
        ]),
      ]),
      _vm._v(" "),
      _c("li", [
        _c("a", { staticClass: "slide-item", attrs: { href: "icons2.html" } }, [
          _vm._v(" Material Design Icons"),
        ]),
      ]),
      _vm._v(" "),
      _c("li", [
        _c("a", { staticClass: "slide-item", attrs: { href: "icons3.html" } }, [
          _vm._v(" Simple Line Icons"),
        ]),
      ]),
      _vm._v(" "),
      _c("li", [
        _c("a", { staticClass: "slide-item", attrs: { href: "icons4.html" } }, [
          _vm._v(" Feather Icons"),
        ]),
      ]),
      _vm._v(" "),
      _c("li", [
        _c("a", { staticClass: "slide-item", attrs: { href: "icons5.html" } }, [
          _vm._v(" Ionic Icons"),
        ]),
      ]),
      _vm._v(" "),
      _c("li", [
        _c("a", { staticClass: "slide-item", attrs: { href: "icons6.html" } }, [
          _vm._v(" Flag Icons"),
        ]),
      ]),
      _vm._v(" "),
      _c("li", [
        _c("a", { staticClass: "slide-item", attrs: { href: "icons7.html" } }, [
          _vm._v(" pe7 Icons"),
        ]),
      ]),
      _vm._v(" "),
      _c("li", [
        _c("a", { staticClass: "slide-item", attrs: { href: "icons8.html" } }, [
          _vm._v(" Themify Icons"),
        ]),
      ]),
      _vm._v(" "),
      _c("li", [
        _c("a", { staticClass: "slide-item", attrs: { href: "icons9.html" } }, [
          _vm._v("Typicons Icons"),
        ]),
      ]),
      _vm._v(" "),
      _c("li", [
        _c(
          "a",
          { staticClass: "slide-item", attrs: { href: "icons10.html" } },
          [_vm._v("Weather Icons")]
        ),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("ul", { staticClass: "slide-menu" }, [
      _c("li", { staticClass: "side-menu-label1" }, [
        _c("a", { attrs: { href: "javascript:void(0)" } }, [_vm._v("Maps")]),
      ]),
      _vm._v(" "),
      _c("li", [
        _c("a", { staticClass: "slide-item", attrs: { href: "maps1.html" } }, [
          _vm._v("Leaflet Maps"),
        ]),
      ]),
      _vm._v(" "),
      _c("li", [
        _c("a", { staticClass: "slide-item", attrs: { href: "maps2.html" } }, [
          _vm._v("Mapel Maps"),
        ]),
      ]),
      _vm._v(" "),
      _c("li", [
        _c("a", { staticClass: "slide-item", attrs: { href: "maps.html" } }, [
          _vm._v("Vector Maps"),
        ]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("li", [_c("h3", [_vm._v("Submenu's")])])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("ul", { staticClass: "slide-menu" }, [
      _c("li", { staticClass: "side-menu-label1" }, [
        _c("a", { attrs: { href: "javascript:void(0)" } }, [
          _vm._v("Sub-menus"),
        ]),
      ]),
      _vm._v(" "),
      _c("li", [
        _c("a", { staticClass: "slide-item", attrs: { href: "#" } }, [
          _vm._v("Submenu-1"),
        ]),
      ]),
      _vm._v(" "),
      _c("li", { staticClass: "sub-slide" }, [
        _c(
          "a",
          {
            staticClass: "sub-side-menu__item",
            attrs: { "data-bs-toggle": "sub-slide", href: "#" },
          },
          [
            _c("span", { staticClass: "sub-side-menu__label" }, [
              _vm._v("Submenu-2"),
            ]),
            _c("i", { staticClass: "sub-angle fa fa-angle-right" }),
          ]
        ),
        _vm._v(" "),
        _c("ul", { staticClass: "sub-slide-menu" }, [
          _c("li", [
            _c("a", { staticClass: "sub-slide-item", attrs: { href: "#" } }, [
              _vm._v("Submenu-2.1"),
            ]),
          ]),
          _vm._v(" "),
          _c("li", [
            _c("a", { staticClass: "sub-slide-item", attrs: { href: "#" } }, [
              _vm._v("Submenu-2.2"),
            ]),
          ]),
          _vm._v(" "),
          _c("li", { staticClass: "sub-slide2" }, [
            _c(
              "a",
              {
                staticClass: "sub-side-menu__item2",
                attrs: { href: "#", "data-bs-toggle": "sub-slide2" },
              },
              [
                _c("span", { staticClass: "sub-side-menu__label2" }, [
                  _vm._v("Submenu-2.3"),
                ]),
                _c("i", { staticClass: "sub-angle2 fa fa-angle-right" }),
              ]
            ),
            _vm._v(" "),
            _c("ul", { staticClass: "sub-slide-menu2" }, [
              _c("li", [
                _c(
                  "a",
                  { staticClass: "sub-slide-item2", attrs: { href: "#" } },
                  [_vm._v("Submenu-2.3.1")]
                ),
              ]),
              _vm._v(" "),
              _c("li", [
                _c(
                  "a",
                  { staticClass: "sub-slide-item2", attrs: { href: "#" } },
                  [_vm._v("Submenu-2.3.2")]
                ),
              ]),
              _vm._v(" "),
              _c("li", [
                _c(
                  "a",
                  { staticClass: "sub-slide-item2", attrs: { href: "#" } },
                  [_vm._v("Submenu-2.3.3")]
                ),
              ]),
            ]),
          ]),
          _vm._v(" "),
          _c("li", [
            _c("a", { staticClass: "sub-slide-item", attrs: { href: "#" } }, [
              _vm._v("Submenu-2.4"),
            ]),
          ]),
          _vm._v(" "),
          _c("li", [
            _c("a", { staticClass: "sub-slide-item", attrs: { href: "#" } }, [
              _vm._v("Submenu-2.5"),
            ]),
          ]),
        ]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("li", [_c("h3", [_vm._v("Web Apps")])])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("ul", { staticClass: "slide-menu" }, [
      _c("li", { staticClass: "side-menu-label1" }, [
        _c("a", { attrs: { href: "javascript:void(0)" } }, [_vm._v("Apps")]),
      ]),
      _vm._v(" "),
      _c("li", [
        _c(
          "a",
          { staticClass: "slide-item", attrs: { href: "calendar2.html" } },
          [_vm._v("Calendar")]
        ),
      ]),
      _vm._v(" "),
      _c("li", [
        _c("a", { staticClass: "slide-item", attrs: { href: "chat.html" } }, [
          _vm._v("Chat"),
        ]),
      ]),
      _vm._v(" "),
      _c("li", { staticClass: "sub-slide" }, [
        _c(
          "a",
          {
            staticClass: "sub-side-menu__item",
            attrs: { "data-bs-toggle": "sub-slide", href: "#" },
          },
          [
            _c("span", { staticClass: "sub-side-menu__label" }, [
              _vm._v("E-Commerce"),
            ]),
            _c("i", { staticClass: "sub-angle fa fa-angle-right" }),
          ]
        ),
        _vm._v(" "),
        _c("ul", { staticClass: "sub-slide-menu" }, [
          _c("li", [
            _c(
              "a",
              { staticClass: "sub-slide-item", attrs: { href: "cart.html" } },
              [_vm._v("Cart")]
            ),
          ]),
          _vm._v(" "),
          _c("li", [
            _c(
              "a",
              {
                staticClass: "sub-slide-item",
                attrs: { href: "checkout.html" },
              },
              [_vm._v("Checkout")]
            ),
          ]),
          _vm._v(" "),
          _c("li", [
            _c(
              "a",
              {
                staticClass: "sub-slide-item",
                attrs: { href: "products.html" },
              },
              [_vm._v("Products")]
            ),
          ]),
          _vm._v(" "),
          _c("li", [
            _c(
              "a",
              {
                staticClass: "sub-slide-item",
                attrs: { href: "product-details.html" },
              },
              [_vm._v("Product-Details")]
            ),
          ]),
          _vm._v(" "),
          _c("li", [
            _c(
              "a",
              {
                staticClass: "sub-slide-item",
                attrs: { href: "wishlist.html" },
              },
              [_vm._v("Wishlist")]
            ),
          ]),
        ]),
      ]),
      _vm._v(" "),
      _c("li", { staticClass: "sub-slide" }, [
        _c(
          "a",
          {
            staticClass: "sub-side-menu__item",
            attrs: { "data-bs-toggle": "sub-slide", href: "#" },
          },
          [
            _c("span", { staticClass: "sub-side-menu__label" }, [
              _vm._v("File Manager"),
            ]),
            _c("i", { staticClass: "sub-angle fa fa-angle-right" }),
          ]
        ),
        _vm._v(" "),
        _c("ul", { staticClass: "sub-slide-menu" }, [
          _c("li", [
            _c(
              "a",
              {
                staticClass: "sub-slide-item",
                attrs: { href: "file-manager.html" },
              },
              [_vm._v("Files")]
            ),
          ]),
          _vm._v(" "),
          _c("li", [
            _c(
              "a",
              {
                staticClass: "sub-slide-item",
                attrs: { href: "file-manager-1.html" },
              },
              [_vm._v("File Manager")]
            ),
          ]),
          _vm._v(" "),
          _c("li", [
            _c(
              "a",
              {
                staticClass: "sub-slide-item",
                attrs: { href: "file-manager-2.html" },
              },
              [_vm._v("File Details")]
            ),
          ]),
        ]),
      ]),
      _vm._v(" "),
      _c("li", { staticClass: "sub-slide" }, [
        _c(
          "a",
          {
            staticClass: "sub-side-menu__item",
            attrs: { "data-bs-toggle": "sub-slide", href: "#" },
          },
          [
            _c("span", { staticClass: "sub-side-menu__label" }, [
              _vm._v("E-Mail"),
            ]),
            _c("i", { staticClass: "sub-angle fa fa-angle-right" }),
          ]
        ),
        _vm._v(" "),
        _c("ul", { staticClass: "sub-slide-menu" }, [
          _c("li", [
            _c(
              "a",
              {
                staticClass: "sub-slide-item",
                attrs: { href: "mail-inbox.html" },
              },
              [_vm._v("Inbox")]
            ),
          ]),
          _vm._v(" "),
          _c("li", [
            _c(
              "a",
              {
                staticClass: "sub-slide-item",
                attrs: { href: "mail-compose.html" },
              },
              [_vm._v("Compose Mail")]
            ),
          ]),
          _vm._v(" "),
          _c("li", [
            _c(
              "a",
              {
                staticClass: "sub-slide-item",
                attrs: { href: "mail-read.html" },
              },
              [_vm._v("Read Mail")]
            ),
          ]),
          _vm._v(" "),
          _c("li", [
            _c(
              "a",
              {
                staticClass: "sub-slide-item",
                attrs: { href: "mail-settings.html" },
              },
              [_vm._v("Mail Settings")]
            ),
          ]),
        ]),
      ]),
      _vm._v(" "),
      _c("li", { staticClass: "sub-slide" }, [
        _c(
          "a",
          {
            staticClass: "sub-side-menu__item",
            attrs: { "data-bs-toggle": "sub-slide", href: "#" },
          },
          [
            _c("span", { staticClass: "sub-side-menu__label" }, [
              _vm._v("Invoices"),
            ]),
            _c("i", { staticClass: "sub-angle fa fa-angle-right" }),
          ]
        ),
        _vm._v(" "),
        _c("ul", { staticClass: "sub-slide-menu" }, [
          _c("li", [
            _c(
              "a",
              {
                staticClass: "sub-slide-item",
                attrs: { href: "invoice-list.html" },
              },
              [_vm._v("Invoice List")]
            ),
          ]),
          _vm._v(" "),
          _c("li", [
            _c(
              "a",
              {
                staticClass: "sub-slide-item",
                attrs: { href: "invoice-details.html" },
              },
              [_vm._v("Invoice Details")]
            ),
          ]),
          _vm._v(" "),
          _c("li", [
            _c(
              "a",
              {
                staticClass: "sub-slide-item",
                attrs: { href: "invoice-create.html" },
              },
              [_vm._v("Create Invoice")]
            ),
          ]),
          _vm._v(" "),
          _c("li", [
            _c(
              "a",
              {
                staticClass: "sub-slide-item",
                attrs: { href: "invoice-timelog.html" },
              },
              [_vm._v("Time Log Invoice")]
            ),
          ]),
          _vm._v(" "),
          _c("li", [
            _c(
              "a",
              {
                staticClass: "sub-slide-item",
                attrs: { href: "invoice-edit.html" },
              },
              [_vm._v("Edit Invoice")]
            ),
          ]),
        ]),
      ]),
      _vm._v(" "),
      _c("li", { staticClass: "sub-slide" }, [
        _c(
          "a",
          {
            staticClass: "sub-side-menu__item",
            attrs: { "data-bs-toggle": "sub-slide", href: "#" },
          },
          [
            _c("span", { staticClass: "sub-side-menu__label" }, [
              _vm._v("Projects"),
            ]),
            _c("i", { staticClass: "sub-angle fa fa-angle-right" }),
          ]
        ),
        _vm._v(" "),
        _c("ul", { staticClass: "sub-slide-menu" }, [
          _c("li", [
            _c(
              "a",
              {
                staticClass: "sub-slide-item",
                attrs: { href: "projects.html" },
              },
              [_vm._v("Projects")]
            ),
          ]),
          _vm._v(" "),
          _c("li", [
            _c(
              "a",
              {
                staticClass: "sub-slide-item",
                attrs: { href: "projects-list.html" },
              },
              [_vm._v("Projects List")]
            ),
          ]),
          _vm._v(" "),
          _c("li", [
            _c(
              "a",
              {
                staticClass: "sub-slide-item",
                attrs: { href: "project-details.html" },
              },
              [_vm._v("Project Details")]
            ),
          ]),
          _vm._v(" "),
          _c("li", [
            _c(
              "a",
              {
                staticClass: "sub-slide-item",
                attrs: { href: "project-new.html" },
              },
              [_vm._v("Project New")]
            ),
          ]),
          _vm._v(" "),
          _c("li", [
            _c(
              "a",
              {
                staticClass: "sub-slide-item",
                attrs: { href: "project-edit.html" },
              },
              [_vm._v("Edit Project")]
            ),
          ]),
        ]),
      ]),
      _vm._v(" "),
      _c("li", [
        _c(
          "a",
          { staticClass: "slide-item", attrs: { href: "ticket-details.html" } },
          [_c("span", { staticClass: "side-menu__label" }, [_vm._v("Tickets")])]
        ),
      ]),
      _vm._v(" "),
      _c("li", { staticClass: "sub-slide" }, [
        _c(
          "a",
          {
            staticClass: "sub-side-menu__item",
            attrs: { "data-bs-toggle": "sub-slide", href: "#" },
          },
          [
            _c("span", { staticClass: "sub-side-menu__label" }, [
              _vm._v("Tasks"),
            ]),
            _c("i", { staticClass: "sub-angle fa fa-angle-right" }),
          ]
        ),
        _vm._v(" "),
        _c("ul", { staticClass: "sub-slide-menu" }, [
          _c("li", [
            _c(
              "a",
              {
                staticClass: "sub-slide-item",
                attrs: { href: "tasks-list.html" },
              },
              [_vm._v("Task List")]
            ),
          ]),
          _vm._v(" "),
          _c("li", [
            _c(
              "a",
              {
                staticClass: "sub-slide-item",
                attrs: { href: "task-edit.html" },
              },
              [_vm._v("Edit Task")]
            ),
          ]),
          _vm._v(" "),
          _c("li", [
            _c(
              "a",
              {
                staticClass: "sub-slide-item",
                attrs: { href: "task-create.html" },
              },
              [_vm._v("Create Task")]
            ),
          ]),
        ]),
      ]),
      _vm._v(" "),
      _c("li", { staticClass: "sub-slide" }, [
        _c(
          "a",
          {
            staticClass: "sub-side-menu__item",
            attrs: { "data-bs-toggle": "sub-slide", href: "#" },
          },
          [
            _c("span", { staticClass: "sub-side-menu__label" }, [
              _vm._v("Clients"),
            ]),
            _c("i", { staticClass: "sub-angle fa fa-angle-right" }),
          ]
        ),
        _vm._v(" "),
        _c("ul", { staticClass: "sub-slide-menu" }, [
          _c("li", [
            _c(
              "a",
              {
                staticClass: "sub-slide-item",
                attrs: { href: "clients.html" },
              },
              [_vm._v("Clients")]
            ),
          ]),
          _vm._v(" "),
          _c("li", [
            _c(
              "a",
              {
                staticClass: "sub-slide-item",
                attrs: { href: "client-create.html" },
              },
              [_vm._v("Add Client")]
            ),
          ]),
        ]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("ul", { staticClass: "slide-menu" }, [
      _c("li", { staticClass: "side-menu-label1" }, [
        _c("a", { attrs: { href: "javascript:void(0)" } }, [
          _vm._v("UI Elements"),
        ]),
      ]),
      _vm._v(" "),
      _c("li", [
        _c("a", { staticClass: "slide-item", attrs: { href: "alerts.html" } }, [
          _vm._v("Alerts"),
        ]),
      ]),
      _vm._v(" "),
      _c("li", [
        _c("a", { staticClass: "slide-item", attrs: { href: "avatar.html" } }, [
          _vm._v("Avatar"),
        ]),
      ]),
      _vm._v(" "),
      _c("li", [
        _c("a", { staticClass: "slide-item", attrs: { href: "badge.html" } }, [
          _vm._v("Badges"),
        ]),
      ]),
      _vm._v(" "),
      _c("li", [
        _c(
          "a",
          { staticClass: "slide-item", attrs: { href: "breadcrumbs.html" } },
          [_vm._v("Breadcrumbs")]
        ),
      ]),
      _vm._v(" "),
      _c("li", [
        _c(
          "a",
          { staticClass: "slide-item", attrs: { href: "buttons.html" } },
          [_vm._v("Buttons")]
        ),
      ]),
      _vm._v(" "),
      _c("li", [
        _c("a", { staticClass: "slide-item", attrs: { href: "colors.html" } }, [
          _vm._v("Colors"),
        ]),
      ]),
      _vm._v(" "),
      _c("li", [
        _c(
          "a",
          { staticClass: "slide-item", attrs: { href: "dropdown.html" } },
          [_vm._v("Dropdown")]
        ),
      ]),
      _vm._v(" "),
      _c("li", [
        _c(
          "a",
          { staticClass: "slide-item", attrs: { href: "gallery.html" } },
          [_vm._v("Gallery")]
        ),
      ]),
      _vm._v(" "),
      _c("li", [
        _c(
          "a",
          { staticClass: "slide-item", attrs: { href: "loaders.html" } },
          [_vm._v("Loaders")]
        ),
      ]),
      _vm._v(" "),
      _c("li", [
        _c(
          "a",
          { staticClass: "slide-item", attrs: { href: "navigation.html" } },
          [_vm._v("Navigation")]
        ),
      ]),
      _vm._v(" "),
      _c("li", [
        _c("a", { staticClass: "slide-item", attrs: { href: "notify.html" } }, [
          _vm._v("Notifications"),
        ]),
      ]),
      _vm._v(" "),
      _c("li", [
        _c(
          "a",
          { staticClass: "slide-item", attrs: { href: "offcanvas.html" } },
          [_vm._v("Offcanvas")]
        ),
      ]),
      _vm._v(" "),
      _c("li", [
        _c(
          "a",
          { staticClass: "slide-item", attrs: { href: "pagination.html" } },
          [_vm._v("Pagination")]
        ),
      ]),
      _vm._v(" "),
      _c("li", [
        _c("a", { staticClass: "slide-item", attrs: { href: "panels.html" } }, [
          _vm._v("Panels"),
        ]),
      ]),
      _vm._v(" "),
      _c("li", [
        _c(
          "a",
          { staticClass: "slide-item", attrs: { href: "rangeslider.html" } },
          [_vm._v("Range Slider")]
        ),
      ]),
      _vm._v(" "),
      _c("li", [
        _c("a", { staticClass: "slide-item", attrs: { href: "scroll.html" } }, [
          _vm._v("Scroll"),
        ]),
      ]),
      _vm._v(" "),
      _c("li", [
        _c("a", { staticClass: "slide-item", attrs: { href: "tags.html" } }, [
          _vm._v("Tags"),
        ]),
      ]),
      _vm._v(" "),
      _c("li", [
        _c(
          "a",
          { staticClass: "slide-item", attrs: { href: "thumbnails.html" } },
          [_vm._v("Thumbnails")]
        ),
      ]),
      _vm._v(" "),
      _c("li", [
        _c(
          "a",
          { staticClass: "slide-item", attrs: { href: "treeview.html" } },
          [_vm._v("Treeview")]
        ),
      ]),
      _vm._v(" "),
      _c("li", [
        _c(
          "a",
          { staticClass: "slide-item", attrs: { href: "typography.html" } },
          [_vm._v("Typography")]
        ),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("ul", { staticClass: "slide-menu" }, [
      _c("li", { staticClass: "side-menu-label1" }, [
        _c("a", { attrs: { href: "javascript:void(0)" } }, [
          _vm._v("Advanced UI"),
        ]),
      ]),
      _vm._v(" "),
      _c("li", [
        _c(
          "a",
          { staticClass: "slide-item", attrs: { href: "accordion.html" } },
          [_vm._v("Accordions")]
        ),
      ]),
      _vm._v(" "),
      _c("li", [
        _c(
          "a",
          { staticClass: "slide-item", attrs: { href: "carousel.html" } },
          [_vm._v("Carousel")]
        ),
      ]),
      _vm._v(" "),
      _c("li", [
        _c("a", { staticClass: "slide-item", attrs: { href: "cards.html" } }, [
          _vm._v("Cards"),
        ]),
      ]),
      _vm._v(" "),
      _c("li", [
        _c(
          "a",
          { staticClass: "slide-item", attrs: { href: "counters.html" } },
          [_vm._v("Counters")]
        ),
      ]),
      _vm._v(" "),
      _c("li", [
        _c("a", { staticClass: "slide-item", attrs: { href: "modal.html" } }, [
          _vm._v("Modals"),
        ]),
      ]),
      _vm._v(" "),
      _c("li", [
        _c(
          "a",
          { staticClass: "slide-item", attrs: { href: "timeline.html" } },
          [_vm._v("Timeline")]
        ),
      ]),
      _vm._v(" "),
      _c("li", [
        _c(
          "a",
          { staticClass: "slide-item", attrs: { href: "sweetalert.html" } },
          [_vm._v("Sweet-Alerts")]
        ),
      ]),
      _vm._v(" "),
      _c("li", [
        _c("a", { staticClass: "slide-item", attrs: { href: "rating.html" } }, [
          _vm._v("Rating"),
        ]),
      ]),
      _vm._v(" "),
      _c("li", [
        _c(
          "a",
          { staticClass: "slide-item", attrs: { href: "mediaobject.html" } },
          [_vm._v("Media Object")]
        ),
      ]),
      _vm._v(" "),
      _c("li", [
        _c("a", { staticClass: "slide-item", attrs: { href: "tabs.html" } }, [
          _vm._v("Tabs"),
        ]),
      ]),
      _vm._v(" "),
      _c("li", [
        _c(
          "a",
          {
            staticClass: "slide-item",
            attrs: { href: "tooltipandpopover.html" },
          },
          [_vm._v("Tooltip and Popover")]
        ),
      ]),
      _vm._v(" "),
      _c("li", [
        _c(
          "a",
          { staticClass: "slide-item", attrs: { href: "progress.html" } },
          [_vm._v("Progress Bars")]
        ),
      ]),
      _vm._v(" "),
      _c("li", [
        _c(
          "a",
          { staticClass: "slide-item", attrs: { href: "footers.html" } },
          [_vm._v("Footers")]
        ),
      ]),
      _vm._v(" "),
      _c("li", [
        _c(
          "a",
          { staticClass: "slide-item", attrs: { href: "users-list.html" } },
          [_vm._v("Users List")]
        ),
      ]),
      _vm._v(" "),
      _c("li", [
        _c(
          "a",
          {
            staticClass: "slide-item",
            attrs: { href: "file-attachments.html" },
          },
          [_vm._v("File Attachments")]
        ),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("li", [_c("h3", [_vm._v("Pages")])])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("ul", { staticClass: "slide-menu" }, [
      _c("li", { staticClass: "side-menu-label1" }, [
        _c("a", { attrs: { href: "javascript:void(0)" } }, [_vm._v("Pages")]),
      ]),
      _vm._v(" "),
      _c("li", { staticClass: "sub-slide" }, [
        _c(
          "a",
          {
            staticClass: "sub-side-menu__item",
            attrs: { "data-bs-toggle": "sub-slide", href: "#" },
          },
          [
            _c("span", { staticClass: "sub-side-menu__label" }, [
              _vm._v("Authentication"),
            ]),
            _c("i", { staticClass: "sub-angle fa fa-angle-right" }),
          ]
        ),
        _vm._v(" "),
        _c("ul", { staticClass: "sub-slide-menu" }, [
          _c("li", [
            _c(
              "a",
              { staticClass: "sub-slide-item", attrs: { href: "login.html" } },
              [_vm._v("Sign In")]
            ),
          ]),
          _vm._v(" "),
          _c("li", [
            _c(
              "a",
              {
                staticClass: "sub-slide-item",
                attrs: { href: "register.html" },
              },
              [_vm._v("Sign Up")]
            ),
          ]),
          _vm._v(" "),
          _c("li", [
            _c(
              "a",
              {
                staticClass: "sub-slide-item",
                attrs: { href: "forgot-password.html" },
              },
              [_vm._v("Forgot Password")]
            ),
          ]),
          _vm._v(" "),
          _c("li", [
            _c(
              "a",
              {
                staticClass: "sub-slide-item",
                attrs: { href: "lockscreen.html" },
              },
              [_vm._v("Lockscreen")]
            ),
          ]),
          _vm._v(" "),
          _c("li", [
            _c(
              "a",
              {
                staticClass: "sub-slide-item",
                attrs: { href: "construction.html" },
              },
              [_vm._v("UnderConstruction")]
            ),
          ]),
        ]),
      ]),
      _vm._v(" "),
      _c("li", { staticClass: "sub-slide" }, [
        _c(
          "a",
          {
            staticClass: "sub-side-menu__item",
            attrs: { "data-bs-toggle": "sub-slide", href: "#" },
          },
          [
            _c("span", { staticClass: "sub-side-menu__label" }, [
              _vm._v("Error Pages"),
            ]),
            _c("i", { staticClass: "sub-angle fa fa-angle-right" }),
          ]
        ),
        _vm._v(" "),
        _c("ul", { staticClass: "sub-slide-menu" }, [
          _c("li", [
            _c(
              "a",
              { staticClass: "sub-slide-item", attrs: { href: "404.html" } },
              [_vm._v("404 Error")]
            ),
          ]),
          _vm._v(" "),
          _c("li", [
            _c(
              "a",
              { staticClass: "sub-slide-item", attrs: { href: "500.html" } },
              [_vm._v("500 Error")]
            ),
          ]),
          _vm._v(" "),
          _c("li", [
            _c(
              "a",
              { staticClass: "sub-slide-item", attrs: { href: "501.html" } },
              [_vm._v("501 Error")]
            ),
          ]),
        ]),
      ]),
      _vm._v(" "),
      _c("li", [
        _c(
          "a",
          { staticClass: "slide-item", attrs: { href: "settings.html" } },
          [_vm._v("Settings")]
        ),
      ]),
      _vm._v(" "),
      _c("li", [
        _c(
          "a",
          { staticClass: "slide-item", attrs: { href: "profile.html" } },
          [_vm._v("Profile")]
        ),
      ]),
      _vm._v(" "),
      _c("li", [
        _c("a", { staticClass: "slide-item", attrs: { href: "about.html" } }, [
          _vm._v("About Company"),
        ]),
      ]),
      _vm._v(" "),
      _c("li", [
        _c(
          "a",
          { staticClass: "slide-item", attrs: { href: "services.html" } },
          [_vm._v("Services")]
        ),
      ]),
      _vm._v(" "),
      _c("li", [
        _c(
          "a",
          { staticClass: "slide-item", attrs: { href: "switcher.html" } },
          [_vm._v("Switcher")]
        ),
      ]),
      _vm._v(" "),
      _c("li", [
        _c("a", { staticClass: "slide-item", attrs: { href: "terms.html" } }, [
          _vm._v("Terms"),
        ]),
      ]),
      _vm._v(" "),
      _c("li", [
        _c("a", { staticClass: "slide-item", attrs: { href: "faq.html" } }, [
          _vm._v("Faq's"),
        ]),
      ]),
      _vm._v(" "),
      _c("li", [
        _c(
          "a",
          { staticClass: "slide-item", attrs: { href: "pricing.html" } },
          [_vm._v("Pricing")]
        ),
      ]),
      _vm._v(" "),
      _c("li", { staticClass: "sub-slide" }, [
        _c(
          "a",
          {
            staticClass: "sub-side-menu__item",
            attrs: { "data-bs-toggle": "sub-slide", href: "#" },
          },
          [
            _c("span", { staticClass: "sub-side-menu__label" }, [
              _vm._v("Blog"),
            ]),
            _c("i", { staticClass: "sub-angle fa fa-angle-right" }),
          ]
        ),
        _vm._v(" "),
        _c("ul", { staticClass: "sub-slide-menu" }, [
          _c("li", [
            _c(
              "a",
              { staticClass: "sub-slide-item", attrs: { href: "blog.html" } },
              [_vm._v("Blog")]
            ),
          ]),
          _vm._v(" "),
          _c("li", [
            _c(
              "a",
              {
                staticClass: "sub-slide-item",
                attrs: { href: "blog-details.html" },
              },
              [_vm._v("Blog Details")]
            ),
          ]),
          _vm._v(" "),
          _c("li", [
            _c(
              "a",
              {
                staticClass: "sub-slide-item",
                attrs: { href: "blog-edit.html" },
              },
              [_vm._v("Edit Post")]
            ),
          ]),
        ]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("ul", { staticClass: "slide-menu" }, [
      _c("li", { staticClass: "side-menu-label1" }, [
        _c("a", { attrs: { href: "javascript:void(0)" } }, [
          _vm._v("Utilities"),
        ]),
      ]),
      _vm._v(" "),
      _c("li", [
        _c(
          "a",
          { staticClass: "slide-item", attrs: { href: "background.html" } },
          [_vm._v("Background")]
        ),
      ]),
      _vm._v(" "),
      _c("li", [
        _c("a", { staticClass: "slide-item", attrs: { href: "border.html" } }, [
          _vm._v("Border"),
        ]),
      ]),
      _vm._v(" "),
      _c("li", [
        _c(
          "a",
          { staticClass: "slide-item", attrs: { href: "display.html" } },
          [_vm._v("Display")]
        ),
      ]),
      _vm._v(" "),
      _c("li", [
        _c("a", { staticClass: "slide-item", attrs: { href: "flex.html" } }, [
          _vm._v("Flex"),
        ]),
      ]),
      _vm._v(" "),
      _c("li", [
        _c("a", { staticClass: "slide-item", attrs: { href: "height.html" } }, [
          _vm._v("Height"),
        ]),
      ]),
      _vm._v(" "),
      _c("li", [
        _c("a", { staticClass: "slide-item", attrs: { href: "margin.html" } }, [
          _vm._v("Margin"),
        ]),
      ]),
      _vm._v(" "),
      _c("li", [
        _c(
          "a",
          { staticClass: "slide-item", attrs: { href: "padding.html" } },
          [_vm._v("Padding")]
        ),
      ]),
      _vm._v(" "),
      _c("li", [
        _c(
          "a",
          { staticClass: "slide-item", attrs: { href: "position.html" } },
          [_vm._v("Position")]
        ),
      ]),
      _vm._v(" "),
      _c("li", [
        _c("a", { staticClass: "slide-item", attrs: { href: "width.html" } }, [
          _vm._v("Width"),
        ]),
      ]),
      _vm._v(" "),
      _c("li", [
        _c(
          "a",
          { staticClass: "slide-item", attrs: { href: "opacity.html" } },
          [_vm._v("Opacity")]
        ),
      ]),
      _vm._v(" "),
      _c("li", [
        _c("a", { staticClass: "slide-item", attrs: { href: "empty.html" } }, [
          _vm._v("Empty Page"),
        ]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "page-header" }, [
      _c("div", [
        _c("h1", { staticClass: "page-title" }, [_vm._v("Dashboard")]),
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "ms-auto pageheader-btn" }, [
        _c("ol", { staticClass: "breadcrumb" }, [
          _c("li", { staticClass: "breadcrumb-item" }, [
            _c("a", { attrs: { href: "javascript:void(0);" } }, [
              _vm._v("Home"),
            ]),
          ]),
          _vm._v(" "),
          _c(
            "li",
            {
              staticClass: "breadcrumb-item active",
              attrs: { "aria-current": "page" },
            },
            [_vm._v("Dashboard")]
          ),
        ]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col" }, [
      _c("h3", { staticClass: "mb-2 fw-semibold" }, [_vm._v("1,12,324")]),
      _vm._v(" "),
      _c("p", { staticClass: "text-muted fs-13 mb-0" }, [
        _vm._v("Daily Visitors"),
      ]),
      _vm._v(" "),
      _c("p", { staticClass: "text-muted mb-0 mt-2 fs-12" }, [
        _c(
          "span",
          { staticClass: "icn-box text-success fw-semibold fs-13 me-1" },
          [
            _c("i", { staticClass: "fa fa-long-arrow-up" }),
            _vm._v("\n                          42%"),
          ]
        ),
        _vm._v(
          "\n                        since last month\n                      "
        ),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col" }, [
      _c("h3", { staticClass: "mb-2 fw-semibold" }, [_vm._v("12,563")]),
      _vm._v(" "),
      _c("p", { staticClass: "text-muted fs-13 mb-0" }, [
        _vm._v("Total Orders"),
      ]),
      _vm._v(" "),
      _c("p", { staticClass: "text-muted mb-0 mt-2 fs-12" }, [
        _c(
          "span",
          { staticClass: "icn-box text-danger fw-semibold fs-13 me-1" },
          [
            _c("i", { staticClass: "fa fa-long-arrow-down" }),
            _vm._v("\n                          12%"),
          ]
        ),
        _vm._v(
          "\n                        since last month\n                      "
        ),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col" }, [
      _c("h3", { staticClass: "mb-2 fw-semibold" }, [_vm._v("$5,178")]),
      _vm._v(" "),
      _c("p", { staticClass: "text-muted fs-13 mb-0" }, [
        _vm._v("Conversion Rate"),
      ]),
      _vm._v(" "),
      _c("p", { staticClass: "text-muted mb-0 mt-2 fs-12" }, [
        _c(
          "span",
          { staticClass: "icn-box text-success fw-semibold fs-13 me-1" },
          [
            _c("i", { staticClass: "fa fa-long-arrow-up" }),
            _vm._v("\n                          27%"),
          ]
        ),
        _vm._v(
          "\n                        since last month\n                      "
        ),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col" }, [
      _c("h3", { staticClass: "mb-2 fw-semibold" }, [_vm._v("$43,987")]),
      _vm._v(" "),
      _c("p", { staticClass: "text-muted fs-13 mb-0" }, [_vm._v("Avg Orders")]),
      _vm._v(" "),
      _c("p", { staticClass: "text-muted mb-0 mt-2 fs-12" }, [
        _c(
          "span",
          { staticClass: "icn-box text-success fw-semibold fs-13 me-1" },
          [
            _c("i", { staticClass: "fa fa-long-arrow-up" }),
            _vm._v("\n                          9%"),
          ]
        ),
        _vm._v(
          "\n                        since last month\n                      "
        ),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-sm-12 col-md-12 col-xl-4 col-lg-6" }, [
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-lg-12 col-xl-12 col-md-6 col-sm-12" }, [
            _c("div", { staticClass: "card" }, [
              _c("div", { staticClass: "card-body pb-2" }, [
                _c("div", { staticClass: "title-head mb-3" }, [
                  _c("h3", { staticClass: "mb-5 card-title" }, [
                    _vm._v("Revenue By channel"),
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "storage-percent" }, [
                    _c(
                      "div",
                      {
                        staticClass:
                          "progress fileprogress h-auto ps-0 shadow1",
                      },
                      [
                        _c("span", {
                          staticClass:
                            "progress-bar progress-bar-xs wd-15p received",
                          attrs: {
                            role: "progressbar",
                            "aria-valuenow": "25",
                            "aria-valuemin": "0",
                            "aria-valuemax": "100",
                          },
                        }),
                        _vm._v(" "),
                        _c("span", {
                          staticClass:
                            "progress-bar progress-bar-xs wd-15p download",
                          attrs: {
                            role: "progressbar",
                            "aria-valuenow": "25",
                            "aria-valuemin": "0",
                            "aria-valuemax": "100",
                          },
                        }),
                        _vm._v(" "),
                        _c("span", {
                          staticClass:
                            "progress-bar progress-bar-xs wd-15p shared",
                          attrs: {
                            role: "progressbar",
                            "aria-valuenow": "25",
                            "aria-valuemin": "0",
                            "aria-valuemax": "100",
                          },
                        }),
                        _vm._v(" "),
                        _c("span", {
                          staticClass:
                            "progress-bar progress-bar-xs wd-15p my-images",
                          attrs: {
                            role: "progressbar",
                            "aria-valuenow": "25",
                            "aria-valuemin": "0",
                            "aria-valuemax": "100",
                          },
                        }),
                      ]
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "remaining-storage" }, [
                      _c("div", { staticClass: "text-muted fs-13 mb-1 mt-3" }, [
                        _vm._v("Total Revenue Earned"),
                      ]),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "fw-semibold fs-14 mb-1 mt-3" },
                        [_vm._v("$345,3467.72")]
                      ),
                    ]),
                  ]),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "content-main mt-5" }, [
                  _c("ul", { staticClass: "task-list1 row mx-auto" }, [
                    _c("li", { staticClass: "col-xl-6" }, [
                      _c("span", { staticClass: "mb-0 fs-13 me-1" }, [
                        _c("i", { staticClass: "task-icon1 bg-primary me-3" }),
                        _vm._v("Direct"),
                      ]),
                      _vm._v(" "),
                      _c(
                        "span",
                        { staticClass: "text-success fw-semibold fs-12" },
                        [
                          _c("span", { staticClass: "mx-1" }, [
                            _c("i", { staticClass: "fa fa-caret-up" }),
                          ]),
                          _vm._v(" "),
                          _c("span", {}, [_vm._v("(42.34%)")]),
                        ]
                      ),
                    ]),
                    _vm._v(" "),
                    _c("li", { staticClass: "col-xl-6" }, [
                      _c("span", { staticClass: "mb-0 fs-13 me-1" }, [
                        _c("i", { staticClass: "task-icon1 bg-secondary" }),
                        _vm._v("Referral"),
                      ]),
                      _vm._v(" "),
                      _c(
                        "span",
                        { staticClass: "text-danger fw-semibold fs-12" },
                        [
                          _c("span", { staticClass: "mx-1" }, [
                            _c("i", { staticClass: "fa fa-caret-down" }),
                          ]),
                          _vm._v(" "),
                          _c("span", {}, [_vm._v("(13%)")]),
                        ]
                      ),
                    ]),
                    _vm._v(" "),
                    _c("li", { staticClass: "col-xl-6" }, [
                      _c("span", { staticClass: "mb-0 fs-13 me-1" }, [
                        _c("i", { staticClass: "task-icon1 bg-custom-yellow" }),
                        _vm._v("Social"),
                      ]),
                      _vm._v(" "),
                      _c(
                        "span",
                        { staticClass: "text-success fw-semibold fs-12" },
                        [
                          _c("span", { staticClass: "mx-1" }, [
                            _c("i", { staticClass: "fa fa-caret-up" }),
                          ]),
                          _vm._v(" "),
                          _c("span", {}, [_vm._v("(62%)")]),
                        ]
                      ),
                    ]),
                    _vm._v(" "),
                    _c("li", { staticClass: "col-xl-6 mb-xl-0" }, [
                      _c("span", { staticClass: "mb-0 fs-13 me-1" }, [
                        _c("i", { staticClass: "task-icon1 bg-teritary" }),
                        _vm._v("Organic Search"),
                      ]),
                      _vm._v(" "),
                      _c(
                        "span",
                        { staticClass: "text-success fw-semibold fs-12" },
                        [
                          _c("span", { staticClass: "mx-1" }, [
                            _c("i", { staticClass: "fa fa-caret-up" }),
                          ]),
                          _vm._v(" "),
                          _c("span", {}, [_vm._v("(22.46%)")]),
                        ]
                      ),
                    ]),
                  ]),
                ]),
              ]),
            ]),
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-xl-12 col-lg-12 col-md-6 col-sm-12" }, [
            _c("div", { staticClass: "card overflow-hidden" }, [
              _c("div", { staticClass: "card-header border-bottom" }, [
                _c("h4", { staticClass: "card-title fw-semibold" }, [
                  _vm._v("Latest Transactions"),
                ]),
                _vm._v(" "),
                _c("a", { staticClass: "ms-auto", attrs: { href: "#" } }, [
                  _vm._v("View All"),
                ]),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "card-body p-0 customers mt-1" }, [
                _c("div", { staticClass: "list-group py-1" }, [
                  _c(
                    "a",
                    {
                      staticClass: "border-0",
                      attrs: { href: "javascript:void(0);" },
                    },
                    [
                      _c("div", { staticClass: "list-group-item border-0" }, [
                        _c(
                          "div",
                          { staticClass: "media mt-0 align-items-center" },
                          [
                            _c("div", { staticClass: "transaction-icon" }, [
                              _c("i", { staticClass: "fe fe-chevrons-right" }),
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "media-body" }, [
                              _c(
                                "div",
                                { staticClass: "d-flex align-items-center" },
                                [
                                  _c("div", { staticClass: "mt-0" }, [
                                    _c(
                                      "h5",
                                      {
                                        staticClass:
                                          "mb-1 fs-13 fw-normal text-dark",
                                      },
                                      [
                                        _vm._v("To Bel Bcron Bank"),
                                        _c(
                                          "span",
                                          {
                                            staticClass:
                                              "fs-13 fw-semibold ms-1",
                                          },
                                          [_vm._v("Savings Section")]
                                        ),
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "p",
                                      { staticClass: "mb-0 fs-12 text-muted" },
                                      [_vm._v("Transfer 4.53pm")]
                                    ),
                                  ]),
                                  _vm._v(" "),
                                  _c("span", { staticClass: "ms-auto fs-13" }, [
                                    _c(
                                      "span",
                                      { staticClass: "float-end text-dark" },
                                      [_vm._v("-$2,543")]
                                    ),
                                  ]),
                                ]
                              ),
                            ]),
                          ]
                        ),
                      ]),
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "a",
                    {
                      staticClass: "border-0",
                      attrs: { href: "javascript:void(0);" },
                    },
                    [
                      _c("div", { staticClass: "list-group-item border-0" }, [
                        _c(
                          "div",
                          { staticClass: "media mt-0 align-items-center" },
                          [
                            _c("div", { staticClass: "transaction-icon" }, [
                              _c("i", { staticClass: "fe fe-briefcase" }),
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "media-body" }, [
                              _c(
                                "div",
                                { staticClass: "d-flex align-items-center" },
                                [
                                  _c("div", { staticClass: "mt-0" }, [
                                    _c(
                                      "h5",
                                      {
                                        staticClass:
                                          "mb-1 fs-13 fw-normal text-dark",
                                      },
                                      [
                                        _vm._v("Payment For "),
                                        _c(
                                          "span",
                                          {
                                            staticClass:
                                              "fs-13 fw-semibold ms-1",
                                          },
                                          [_vm._v("Day Job")]
                                        ),
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "p",
                                      { staticClass: "mb-0 fs-12 text-muted" },
                                      [_vm._v("Received 2.45pm")]
                                    ),
                                  ]),
                                  _vm._v(" "),
                                  _c("span", { staticClass: "ms-auto fs-13" }, [
                                    _c(
                                      "span",
                                      { staticClass: "float-end text-dark" },
                                      [_vm._v("+$32,543")]
                                    ),
                                  ]),
                                ]
                              ),
                            ]),
                          ]
                        ),
                      ]),
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "a",
                    {
                      staticClass: "border-0",
                      attrs: { href: "javascript:void(0);" },
                    },
                    [
                      _c("div", { staticClass: "list-group-item border-0" }, [
                        _c(
                          "div",
                          { staticClass: "media mt-0 align-items-center" },
                          [
                            _c("div", { staticClass: "transaction-icon" }, [
                              _c("i", { staticClass: "fe fe-dollar-sign" }),
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "media-body" }, [
                              _c(
                                "div",
                                { staticClass: "d-flex align-items-center" },
                                [
                                  _c("div", { staticClass: "mt-0" }, [
                                    _c(
                                      "h5",
                                      {
                                        staticClass:
                                          "mb-1 fs-13 fw-normal text-dark",
                                      },
                                      [
                                        _vm._v("Bought items from"),
                                        _c(
                                          "span",
                                          {
                                            staticClass:
                                              "fs-13 fw-semibold ms-1",
                                          },
                                          [_vm._v("Ecommerce site")]
                                        ),
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "p",
                                      { staticClass: "mb-0 fs-12 text-muted" },
                                      [_vm._v("Payment 8.00am")]
                                    ),
                                  ]),
                                  _vm._v(" "),
                                  _c("span", { staticClass: "ms-auto fs-13" }, [
                                    _c(
                                      "span",
                                      { staticClass: "float-end text-dark" },
                                      [_vm._v("-$256")]
                                    ),
                                  ]),
                                ]
                              ),
                            ]),
                          ]
                        ),
                      ]),
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "a",
                    {
                      staticClass: "border-0",
                      attrs: { href: "javascript:void(0);" },
                    },
                    [
                      _c("div", { staticClass: "list-group-item border-0" }, [
                        _c(
                          "div",
                          { staticClass: "media mt-0 align-items-center" },
                          [
                            _c("div", { staticClass: "transaction-icon" }, [
                              _c("i", { staticClass: "fe fe-file-text" }),
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "media-body" }, [
                              _c(
                                "div",
                                { staticClass: "d-flex align-items-center" },
                                [
                                  _c("div", { staticClass: "mt-0" }, [
                                    _c(
                                      "h5",
                                      {
                                        staticClass:
                                          "mb-1 fs-13 fw-normal text-dark",
                                      },
                                      [
                                        _vm._v("Paid Monthly Expenses"),
                                        _c(
                                          "span",
                                          {
                                            staticClass:
                                              "fs-13 fw-semibold ms-1",
                                          },
                                          [_vm._v("Bills & Loans")]
                                        ),
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "p",
                                      { staticClass: "mb-0 fs-12 text-muted" },
                                      [_vm._v("Payment 6.43am")]
                                    ),
                                  ]),
                                  _vm._v(" "),
                                  _c("span", { staticClass: "ms-auto fs-13" }, [
                                    _c(
                                      "span",
                                      { staticClass: "float-end text-dark" },
                                      [_vm._v("-$1,298")]
                                    ),
                                  ]),
                                ]
                              ),
                            ]),
                          ]
                        ),
                      ]),
                    ]
                  ),
                ]),
              ]),
            ]),
          ]),
        ]),
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-sm-12 col-md-12 col-lg-6 col-xl-8" }, [
        _c("div", { staticClass: "card" }, [
          _c("div", { staticClass: "card-header border-bottom" }, [
            _c("h3", { staticClass: "card-title" }, [_vm._v("Sales")]),
            _vm._v(" "),
            _c("div", { staticClass: "ms-auto" }, [
              _c("div", { staticClass: "btn-group p-0 ms-auto" }, [
                _c(
                  "button",
                  {
                    staticClass: "btn btn-primary-light btn-sm disabled",
                    attrs: { type: "button" },
                  },
                  [_vm._v("2021")]
                ),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    staticClass: "btn btn-primary-light btn-sm",
                    attrs: { type: "button" },
                  },
                  [_vm._v("2022")]
                ),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    staticClass: "btn btn-primary-light btn-sm disabled",
                    attrs: { type: "button" },
                  },
                  [_vm._v("2023")]
                ),
              ]),
            ]),
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "card-body" }, [
            _c("div", { staticClass: "sales-stats d-flex" }, [
              _c("div", [
                _c("div", { staticClass: "text-muted fs-13" }, [
                  _vm._v("Total Sales\n                        "),
                  _c("span", { staticClass: "p-2 br-5 text-success" }, [
                    _c("i", { staticClass: "fe fe-arrow-up-right" }),
                  ]),
                ]),
                _vm._v(" "),
                _c("h3", { staticClass: "fw-semibold" }, [
                  _vm._v("$582,857.97"),
                ]),
                _vm._v(" "),
                _c("div", [
                  _c("span", { staticClass: "text-success fs-13 me-1" }, [
                    _vm._v("32%"),
                  ]),
                  _vm._v("Increase Since last Year"),
                ]),
              ]),
            ]),
            _vm._v(" "),
            _c("div", { attrs: { id: "chartD" } }),
          ]),
        ]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-xl-4 col-md-12" }, [
        _c("div", { staticClass: "card" }, [
          _c("div", { staticClass: "card-header border-bottom" }, [
            _c("h4", { staticClass: "card-title fw-semibold" }, [
              _vm._v("Daily Activity"),
            ]),
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "card-body pb-0" }, [
            _c("ul", { staticClass: "task-list" }, [
              _c("li", [
                _c("i", { staticClass: "task-icon bg-primary" }),
                _vm._v(" "),
                _c("p", { staticClass: "fw-semibold mb-1 fs-13" }, [
                  _vm._v("New Products Introduced"),
                  _c(
                    "span",
                    { staticClass: "text-muted fs-12 ms-2 ms-auto float-end" },
                    [_vm._v("1:43 pm")]
                  ),
                ]),
                _vm._v(" "),
                _c("p", { staticClass: "text-muted fs-12" }, [
                  _vm._v("Lorem ipsum dolor sit."),
                  _c(
                    "a",
                    { staticClass: "fw-semibold ms-1", attrs: { href: "#" } },
                    [
                      _vm._v(
                        "Product\n                          Light Launched"
                      ),
                    ]
                  ),
                ]),
              ]),
              _vm._v(" "),
              _c("li", [
                _c("i", { staticClass: "task-icon bg-secondary" }),
                _vm._v(" "),
                _c("p", { staticClass: "fw-semibold mb-1 fs-13" }, [
                  _vm._v("Hermoine Replied"),
                  _c(
                    "span",
                    { staticClass: "text-muted fs-12 ms-2 float-end" },
                    [_vm._v("6:12 am")]
                  ),
                ]),
                _vm._v(" "),
                _c("p", { staticClass: "text-muted fs-12" }, [
                  _vm._v("Hermoine replied to your post on"),
                  _c(
                    "a",
                    { staticClass: "fw-semibold ms-1", attrs: { href: "#" } },
                    [_vm._v(" Detailed Blog")]
                  ),
                ]),
              ]),
              _vm._v(" "),
              _c("li", [
                _c("i", { staticClass: "task-icon bg-info" }),
                _vm._v(" "),
                _c("p", { staticClass: "fw-semibold mb-1 fs-13" }, [
                  _vm._v("New Request"),
                  _c(
                    "span",
                    { staticClass: "text-muted fs-12 ms-2 float-end" },
                    [_vm._v("11:22\n                          am")]
                  ),
                ]),
                _vm._v(" "),
                _c("p", { staticClass: "text-muted fs-12" }, [
                  _vm._v("Corner sent you a request"),
                  _c(
                    "a",
                    { staticClass: "fw-semibold ms-1", attrs: { href: "#" } },
                    [_vm._v("\n                          Facebook")]
                  ),
                ]),
              ]),
              _vm._v(" "),
              _c("li", [
                _c("i", { staticClass: "task-icon bg-warning" }),
                _vm._v(" "),
                _c("p", { staticClass: "fw-semibold mb-1 fs-13" }, [
                  _vm._v("Task Due"),
                  _c(
                    "span",
                    { staticClass: "text-muted fs-12 ms-2 float-end" },
                    [_vm._v("4:32\n                          pm")]
                  ),
                ]),
                _vm._v(" "),
                _c("p", { staticClass: "text-muted mb-0 fs-12" }, [
                  _vm._v("Task has to be completed "),
                  _c(
                    "a",
                    { staticClass: "fw-semibold ms-1", attrs: { href: "#" } },
                    [_vm._v("\n                          New Project")]
                  ),
                ]),
              ]),
              _vm._v(" "),
              _c("li", { staticClass: "mb-2" }, [
                _c("i", { staticClass: "task-icon bg-primary" }),
                _vm._v(" "),
                _c("p", { staticClass: "fw-semibold mb-1 fs-13" }, [
                  _vm._v("Maggice Liked"),
                  _c(
                    "span",
                    { staticClass: "text-muted fs-12 ms-2 float-end" },
                    [_vm._v("5\n                          mins ago")]
                  ),
                ]),
                _vm._v(" "),
                _c("p", { staticClass: "text-muted mb-0 fs-12" }, [
                  _vm._v("Maggice bruce liked your article "),
                  _c(
                    "a",
                    { staticClass: "fw-semibold ms-1", attrs: { href: "#" } },
                    [_vm._v(" Article on Projects")]
                  ),
                ]),
              ]),
            ]),
          ]),
        ]),
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-xl-4 col-md-12" }, [
        _c("div", { staticClass: "card overflow-hidden" }, [
          _c("div", { staticClass: "card-header border-bottom" }, [
            _c("div", [
              _c("h3", { staticClass: "card-title" }, [_vm._v("Timeline")]),
            ]),
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "card-body" }, [
            _c("div", { staticClass: "tl-container" }, [
              _c("div", { staticClass: "tl-blog primary" }, [
                _c(
                  "div",
                  {
                    staticClass: "tl-img rounded-circle bg-primary-transparent",
                  },
                  [
                    _c("i", {
                      staticClass: "fe fe-user-plus text-primary text-17",
                    }),
                  ]
                ),
                _vm._v(" "),
                _c("div", { staticClass: "tl-details d-flex" }, [
                  _c("p", [
                    _c("span", { staticClass: "tl-title-main" }, [
                      _vm._v(" Mr White "),
                    ]),
                    _vm._v(
                      " Started following you\n                          "
                    ),
                    _c("span", { staticClass: "d-flex text-muted fs-12" }, [
                      _vm._v("10 Jan 2022"),
                    ]),
                  ]),
                  _vm._v(" "),
                  _c("p", { staticClass: "ms-auto text-13" }, [
                    _c("span", { staticClass: "badge bg-primary text-white" }, [
                      _vm._v("1m"),
                    ]),
                  ]),
                ]),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "tl-blog secondary" }, [
                _c(
                  "div",
                  {
                    staticClass:
                      "tl-img rounded-circle bg-secondary-transparent",
                  },
                  [
                    _c("i", {
                      staticClass:
                        "fe fe-message-circle text-secondary text-17",
                    }),
                  ]
                ),
                _vm._v(" "),
                _c("div", { staticClass: "tl-details d-flex" }, [
                  _c("p", [
                    _c("span", { staticClass: "tl-title-main" }, [
                      _vm._v(" Caroline "),
                    ]),
                    _vm._v(" 1 Commented applied\n                          "),
                    _c("span", { staticClass: "d-flex text-muted fs-12" }, [
                      _vm._v("09 Jan 2022"),
                    ]),
                  ]),
                  _vm._v(" "),
                  _c("p", { staticClass: "ms-auto text-13" }, [
                    _c(
                      "span",
                      { staticClass: "badge bg-secondary text-white" },
                      [_vm._v("2m")]
                    ),
                  ]),
                ]),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "tl-blog teritary" }, [
                _c(
                  "div",
                  { staticClass: "tl-img rounded-circle bg-info-transparent" },
                  [
                    _c("i", {
                      staticClass: "fe fe-clipboard text-info text-17",
                    }),
                  ]
                ),
                _vm._v(" "),
                _c("div", { staticClass: "tl-details d-flex" }, [
                  _c("p", [
                    _c("span", { staticClass: "tl-title-main" }, [
                      _vm._v(" Juliette "),
                    ]),
                    _vm._v(" posted a new article\n                          "),
                    _c("span", { staticClass: "d-flex text-muted fs-12" }, [
                      _vm._v("07 Jan 2022"),
                    ]),
                  ]),
                  _vm._v(" "),
                  _c("p", { staticClass: "ms-auto text-13" }, [
                    _c("span", { staticClass: "badge bg-info text-white" }, [
                      _vm._v("3m"),
                    ]),
                  ]),
                ]),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "tl-blog custom-yellow" }, [
                _c(
                  "div",
                  {
                    staticClass: "tl-img rounded-circle bg-warning-transparent",
                  },
                  [
                    _c("i", {
                      staticClass: "fe fe-thumbs-up text-warning text-17",
                    }),
                  ]
                ),
                _vm._v(" "),
                _c("div", { staticClass: "tl-details d-flex" }, [
                  _c("p", [
                    _c("span", { staticClass: "tl-title-main" }, [
                      _vm._v(" Akimov "),
                    ]),
                    _vm._v(" liked your site\n                          "),
                    _c("span", { staticClass: "d-flex text-muted fs-12" }, [
                      _vm._v("07 Dec 2022"),
                    ]),
                  ]),
                  _vm._v(" "),
                  _c("p", { staticClass: "ms-auto text-13" }, [
                    _c("span", { staticClass: "badge bg-warning text-white" }, [
                      _vm._v("4m"),
                    ]),
                  ]),
                ]),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "tl-blog primary" }, [
                _c(
                  "div",
                  {
                    staticClass: "tl-img rounded-circle bg-primary-transparent",
                  },
                  [_c("i", { staticClass: "fe fe-book text-primary text-17" })]
                ),
                _vm._v(" "),
                _c("div", { staticClass: "tl-details d-flex" }, [
                  _c("p", { staticClass: "mb-0" }, [
                    _c("span", { staticClass: "tl-title-main" }, [
                      _vm._v(" Emilie "),
                    ]),
                    _vm._v("sent you a feedback\n                          "),
                    _c("span", { staticClass: "d-flex text-muted fs-12" }, [
                      _vm._v("06 Jan 2022"),
                    ]),
                  ]),
                  _vm._v(" "),
                  _c("p", { staticClass: "ms-auto text-13 mb-0" }, [
                    _c("span", { staticClass: "badge bg-orange text-white" }, [
                      _vm._v("5m"),
                    ]),
                  ]),
                ]),
              ]),
            ]),
          ]),
        ]),
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-xl-4 col-md-12" }, [
        _c("div", { staticClass: "card overflow-hidden" }, [
          _c(
            "div",
            { staticClass: "card-header title-submenu border-bottom" },
            [_c("h3", { staticClass: "card-title" }, [_vm._v("To-Do List")])]
          ),
          _vm._v(" "),
          _c("div", { staticClass: "card-body" }, [
            _c("div", { staticClass: "todo-container" }, [
              _c("div", { staticClass: "todo-blog primary" }, [
                _c("label", { staticClass: "todo-img" }, [
                  _c("input", {
                    staticClass: "todo-checkbox",
                    attrs: {
                      type: "checkbox",
                      name: "todo-checkbox",
                      checked: "checked",
                    },
                  }),
                  _vm._v(" "),
                  _c("span", { staticClass: "checkmark" }),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "todo-details d-flex" }, [
                  _c("p", { staticClass: "mb-0" }, [
                    _vm._v(
                      "Design a UI Dashboard for client\n                          "
                    ),
                    _c("span", { staticClass: "d-flex text-muted fs-12" }, [
                      _vm._v("3 days remaining"),
                    ]),
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "ms-auto text-13 fw-semibold" }, [
                    _c(
                      "a",
                      {
                        staticClass: "btn btn-sm btn-outline-light",
                        attrs: { href: "javascript:void(0)" },
                      },
                      [_vm._v("Edit")]
                    ),
                  ]),
                ]),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "todo-blog secondary" }, [
                _c("label", { staticClass: "todo-img" }, [
                  _c("input", {
                    staticClass: "todo-checkbox",
                    attrs: {
                      type: "checkbox",
                      name: "todo-checkbox",
                      checked: "checked",
                    },
                  }),
                  _vm._v(" "),
                  _c("span", { staticClass: "checkmark" }),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "todo-details d-flex" }, [
                  _c("p", { staticClass: "mb-0" }, [
                    _vm._v(
                      "Design a UI Dashboard for client\n                          "
                    ),
                    _c("span", { staticClass: "d-flex text-muted fs-12" }, [
                      _vm._v("3 days remaining"),
                    ]),
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "ms-auto text-13 fw-semibold" }, [
                    _c(
                      "a",
                      {
                        staticClass: "btn btn-sm btn-outline-light",
                        attrs: { href: "javascript:void(0)" },
                      },
                      [_vm._v("Edit")]
                    ),
                  ]),
                ]),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "todo-blog teritary" }, [
                _c("label", { staticClass: "todo-img" }, [
                  _c("input", {
                    staticClass: "todo-checkbox",
                    attrs: { type: "checkbox", name: "todo-checkbox" },
                  }),
                  _vm._v(" "),
                  _c("span", { staticClass: "checkmark" }),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "todo-details d-flex" }, [
                  _c("p", { staticClass: "mb-0" }, [
                    _vm._v(
                      "Design a UI Dashboard for client\n                          "
                    ),
                    _c("span", { staticClass: "d-flex text-muted fs-12" }, [
                      _vm._v("3 days remaining"),
                    ]),
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "ms-auto text-13 fw-semibold" }, [
                    _c(
                      "a",
                      {
                        staticClass: "btn btn-sm btn-outline-light",
                        attrs: { href: "javascript:void(0)" },
                      },
                      [_vm._v("Edit")]
                    ),
                  ]),
                ]),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "todo-blog custom-yellow" }, [
                _c("label", { staticClass: "todo-img" }, [
                  _c("input", {
                    staticClass: "todo-checkbox",
                    attrs: {
                      type: "checkbox",
                      name: "todo-checkbox",
                      checked: "checked",
                    },
                  }),
                  _vm._v(" "),
                  _c("span", { staticClass: "checkmark" }),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "todo-details d-flex" }, [
                  _c("p", { staticClass: "mb-0" }, [
                    _vm._v(
                      "Design a UI Dashboard for client\n                          "
                    ),
                    _c("span", { staticClass: "d-flex text-muted fs-12" }, [
                      _vm._v("3 days remaining"),
                    ]),
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "ms-auto text-13 fw-semibold" }, [
                    _c(
                      "a",
                      {
                        staticClass: "btn btn-sm btn-outline-light",
                        attrs: { href: "javascript:void(0)" },
                      },
                      [_vm._v("Edit")]
                    ),
                  ]),
                ]),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "todo-blog primary" }, [
                _c("label", { staticClass: "todo-img" }, [
                  _c("input", {
                    staticClass: "todo-checkbox",
                    attrs: { type: "checkbox", name: "todo-checkbox" },
                  }),
                  _vm._v(" "),
                  _c("span", { staticClass: "checkmark" }),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "todo-details d-flex" }, [
                  _c("p", { staticClass: "mb-0" }, [
                    _vm._v(
                      "Design a UI Dashboard for client\n                          "
                    ),
                    _c("span", { staticClass: "d-flex text-muted fs-12" }, [
                      _vm._v("3 days remaining"),
                    ]),
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "ms-auto text-13 fw-semibold" }, [
                    _c(
                      "a",
                      {
                        staticClass: "btn btn-sm btn-outline-light",
                        attrs: { href: "javascript:void(0)" },
                      },
                      [_vm._v("Edit")]
                    ),
                  ]),
                ]),
              ]),
            ]),
          ]),
        ]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-header border-bottom" }, [
      _c("h3", { staticClass: "card-title mb-0" }, [_vm._v("Task List")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", { staticClass: "table-head" }, [
      _c("tr", [
        _c("th", { staticClass: "bg-transparent border-bottom-0 wp-15" }, [
          _vm._v("Assigned To"),
        ]),
        _vm._v(" "),
        _c("th", { staticClass: "bg-transparent border-bottom-0" }, [
          _vm._v("Task"),
        ]),
        _vm._v(" "),
        _c("th", { staticClass: "bg-transparent border-bottom-0" }, [
          _vm._v("Project"),
        ]),
        _vm._v(" "),
        _c("th", { staticClass: "bg-transparent border-bottom-0" }, [
          _vm._v("Due Date"),
        ]),
        _vm._v(" "),
        _c("th", { staticClass: "bg-transparent border-bottom-0" }, [
          _vm._v("Status"),
        ]),
        _vm._v(" "),
        _c("th", { staticClass: "bg-transparent border-bottom-0 no-btn" }, [
          _vm._v("Action"),
        ]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", [
      _c("div", { staticClass: "d-flex align-items-center" }, [
        _c("span", {
          staticClass: "data-image avatar avatar-md rounded-circle",
          staticStyle: {
            "background-image": "url(../assets/images/users/11.jpg)",
          },
        }),
        _vm._v(" "),
        _c("div", { staticClass: "user-details ms-2" }, [
          _c("h6", { staticClass: "mb-0" }, [_vm._v("Skyler Hilda")]),
          _vm._v(" "),
          _c("span", { staticClass: "text-muted fs-12" }, [
            _vm._v("member@spruko.com"),
          ]),
        ]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", { staticClass: "text-muted fs-14 fw-semibold" }, [
      _c(
        "a",
        {
          staticClass: "text-dark",
          attrs: {
            href: "#",
            "data-bs-target": "#Vertically",
            "data-bs-toggle": "modal",
          },
        },
        [
          _vm._v(
            "Sit sed takimata sanctus\n                              invidunt"
          ),
        ]
      ),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", { staticClass: "text-muted fs-13" }, [
      _c(
        "a",
        { staticClass: "text-dark", attrs: { href: "project-details.html" } },
        [_vm._v("Noa Dashboard\n                              UI")]
      ),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", [
      _c("div", { staticClass: "form-group mb-0" }, [
        _c("ul", [
          _c("li", { staticClass: "select-status" }, [
            _c(
              "select",
              {
                staticClass: "form-control select2-status-search",
                attrs: { "data-placeholder": "Select Status" },
              },
              [
                _c("option", { attrs: { value: "IP", selected: "" } }, [
                  _vm._v("In Progress"),
                ]),
                _vm._v(" "),
                _c("option", { attrs: { value: "OH" } }, [_vm._v("On Hold")]),
                _vm._v(" "),
                _c("option", { attrs: { value: "CP" } }, [_vm._v("Completed")]),
              ]
            ),
          ]),
        ]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "a",
      {
        staticClass:
          "border br-5 px-2 py-1 d-flex align-items-center justify-content-center",
        attrs: {
          href: "#",
          "data-bs-toggle": "dropdown",
          "aria-haspopup": "true",
          "aria-expanded": "false",
        },
      },
      [_c("i", { staticClass: "fe fe-more-vertical" })]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "dropdown-menu dropdown-menu-start" }, [
      _c("a", { staticClass: "dropdown-item", attrs: { href: "#" } }, [
        _c("i", { staticClass: "fe fe-edit-2 me-2" }),
        _vm._v(" Edit"),
      ]),
      _vm._v(" "),
      _c("a", { staticClass: "dropdown-item", attrs: { href: "#" } }, [
        _c("i", { staticClass: "fe fe-info me-2" }),
        _vm._v(" Info"),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", [
      _c("div", { staticClass: "d-flex align-items-center" }, [
        _c("span", {
          staticClass: "data-image avatar avatar-md rounded-circle",
          staticStyle: {
            "background-image": "url(../assets/images/users/12.jpg)",
          },
        }),
        _vm._v(" "),
        _c("div", { staticClass: "user-details ms-2" }, [
          _c("h6", { staticClass: "mb-0" }, [_vm._v("Daniel Obrien")]),
          _vm._v(" "),
          _c("span", { staticClass: "text-muted fs-12" }, [
            _vm._v("member@spruko.com"),
          ]),
        ]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", { staticClass: "text-muted fs-14 fw-semibold" }, [
      _c(
        "a",
        {
          staticClass: "text-dark",
          attrs: {
            href: "#",
            "data-bs-target": "#Vertically",
            "data-bs-toggle": "modal",
          },
        },
        [_vm._v("Diam lorem dolor no lorem.")]
      ),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", { staticClass: "text-muted fs-13" }, [
      _c(
        "a",
        { staticClass: "text-dark", attrs: { href: "project-details.html" } },
        [_vm._v("Noa Dashboard\n                              UI")]
      ),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", [
      _c("div", { staticClass: "form-group mb-0" }, [
        _c("ul", [
          _c("li", { staticClass: "select-status" }, [
            _c(
              "select",
              {
                staticClass: "form-control select2-status-search",
                attrs: { "data-placeholder": "Select Status" },
              },
              [
                _c("option", { attrs: { value: "IP" } }, [
                  _vm._v("In Progress"),
                ]),
                _vm._v(" "),
                _c("option", { attrs: { value: "OH", selected: "" } }, [
                  _vm._v("On Hold"),
                ]),
                _vm._v(" "),
                _c("option", { attrs: { value: "CP" } }, [_vm._v("Completed")]),
              ]
            ),
          ]),
        ]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "a",
      {
        staticClass:
          "border br-5 px-2 py-1 d-flex align-items-center justify-content-center",
        attrs: {
          href: "#",
          "data-bs-toggle": "dropdown",
          "aria-haspopup": "true",
          "aria-expanded": "false",
        },
      },
      [_c("i", { staticClass: "fe fe-more-vertical" })]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "dropdown-menu dropdown-menu-start" }, [
      _c("a", { staticClass: "dropdown-item", attrs: { href: "#" } }, [
        _c("i", { staticClass: "fe fe-edit-2 me-2" }),
        _vm._v(" Edit"),
      ]),
      _vm._v(" "),
      _c("a", { staticClass: "dropdown-item", attrs: { href: "#" } }, [
        _c("i", { staticClass: "fe fe-info me-2" }),
        _vm._v(" Info"),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", [
      _c("div", { staticClass: "d-flex align-items-center" }, [
        _c("span", {
          staticClass: "data-image avatar avatar-md rounded-circle",
          staticStyle: {
            "background-image": "url(../assets/images/users/13.jpg)",
          },
        }),
        _vm._v(" "),
        _c("div", { staticClass: "user-details ms-2" }, [
          _c("h6", { staticClass: "mb-0" }, [_vm._v("William Turner")]),
          _vm._v(" "),
          _c("span", { staticClass: "text-muted fs-12" }, [
            _vm._v("member@spruko.com"),
          ]),
        ]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", { staticClass: "text-muted fs-14 fw-semibold" }, [
      _c(
        "a",
        {
          staticClass: "text-dark",
          attrs: {
            href: "#",
            "data-bs-target": "#Vertically",
            "data-bs-toggle": "modal",
          },
        },
        [
          _vm._v(
            "Amet clita sea ut dolor consetetur,\n                              elitr."
          ),
        ]
      ),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", { staticClass: "text-muted fs-13" }, [
      _c(
        "a",
        { staticClass: "text-dark", attrs: { href: "project-details.html" } },
        [_vm._v("Noa Dashboard\n                              UI")]
      ),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", [
      _c("div", { staticClass: "form-group mb-0" }, [
        _c("ul", [
          _c("li", { staticClass: "select-status" }, [
            _c(
              "select",
              {
                staticClass: "form-control select2-status-search",
                attrs: { "data-placeholder": "Select Status" },
              },
              [
                _c("option", { attrs: { value: "IP" } }, [
                  _vm._v("In Progress"),
                ]),
                _vm._v(" "),
                _c("option", { attrs: { value: "OH", selected: "" } }, [
                  _vm._v("On Hold"),
                ]),
                _vm._v(" "),
                _c("option", { attrs: { value: "CP" } }, [_vm._v("Completed")]),
              ]
            ),
          ]),
        ]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "a",
      {
        staticClass:
          "border br-5 px-2 py-1 d-flex align-items-center justify-content-center",
        attrs: {
          href: "#",
          "data-bs-toggle": "dropdown",
          "aria-haspopup": "true",
          "aria-expanded": "false",
        },
      },
      [_c("i", { staticClass: "fe fe-more-vertical" })]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "dropdown-menu dropdown-menu-start" }, [
      _c("a", { staticClass: "dropdown-item", attrs: { href: "#" } }, [
        _c("i", { staticClass: "fe fe-edit-2 me-2" }),
        _vm._v(" Edit"),
      ]),
      _vm._v(" "),
      _c("a", { staticClass: "dropdown-item", attrs: { href: "#" } }, [
        _c("i", { staticClass: "fe fe-info me-2" }),
        _vm._v(" Info"),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", [
      _c("div", { staticClass: "d-flex align-items-center" }, [
        _c("span", {
          staticClass: "data-image avatar avatar-md rounded-circle",
          staticStyle: {
            "background-image": "url(../assets/images/users/4.jpg)",
          },
        }),
        _vm._v(" "),
        _c("div", { staticClass: "user-details ms-2" }, [
          _c("h6", { staticClass: "mb-0" }, [_vm._v("Olena Tyrell")]),
          _vm._v(" "),
          _c("span", { staticClass: "text-muted fs-12" }, [
            _vm._v("member@spruko.com"),
          ]),
        ]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", { staticClass: "text-muted fs-14 fw-semibold" }, [
      _c(
        "a",
        {
          staticClass: "text-dark",
          attrs: {
            href: "#",
            "data-bs-target": "#Vertically",
            "data-bs-toggle": "modal",
          },
        },
        [_vm._v("Est sea erat at kasd.")]
      ),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", { staticClass: "text-muted fs-13" }, [
      _c(
        "a",
        { staticClass: "text-dark", attrs: { href: "project-details.html" } },
        [_vm._v("Noa Dashboard\n                              UI")]
      ),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", [
      _c("div", { staticClass: "form-group mb-0" }, [
        _c("ul", [
          _c("li", { staticClass: "select-status" }, [
            _c(
              "select",
              {
                staticClass: "form-control select2-status-search",
                attrs: { "data-placeholder": "Select Status" },
              },
              [
                _c("option", { attrs: { value: "IP", selected: "" } }, [
                  _vm._v("In Progress"),
                ]),
                _vm._v(" "),
                _c("option", { attrs: { value: "OH" } }, [_vm._v("On Hold")]),
                _vm._v(" "),
                _c("option", { attrs: { value: "CP" } }, [_vm._v("Completed")]),
              ]
            ),
          ]),
        ]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "a",
      {
        staticClass:
          "border br-5 px-2 py-1 d-flex align-items-center justify-content-center",
        attrs: {
          href: "#",
          "data-bs-toggle": "dropdown",
          "aria-haspopup": "true",
          "aria-expanded": "false",
        },
      },
      [_c("i", { staticClass: "fe fe-more-vertical" })]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "dropdown-menu dropdown-menu-start" }, [
      _c("a", { staticClass: "dropdown-item", attrs: { href: "#" } }, [
        _c("i", { staticClass: "fe fe-edit-2 me-2" }),
        _vm._v(" Edit"),
      ]),
      _vm._v(" "),
      _c("a", { staticClass: "dropdown-item", attrs: { href: "#" } }, [
        _c("i", { staticClass: "fe fe-info me-2" }),
        _vm._v(" Info"),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", [
      _c("div", { staticClass: "d-flex align-items-center" }, [
        _c("span", {
          staticClass: "data-image avatar avatar-md rounded-circle",
          staticStyle: {
            "background-image": "url(../assets/images/users/5.jpg)",
          },
        }),
        _vm._v(" "),
        _c("div", { staticClass: "user-details ms-2" }, [
          _c("h6", { staticClass: "mb-0" }, [_vm._v("Emilie Benett")]),
          _vm._v(" "),
          _c("span", { staticClass: "text-muted fs-12" }, [
            _vm._v("member@spruko.com"),
          ]),
        ]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", { staticClass: "text-muted fs-14 fw-semibold" }, [
      _c(
        "a",
        {
          staticClass: "text-dark",
          attrs: {
            href: "#",
            "data-bs-target": "#Vertically",
            "data-bs-toggle": "modal",
          },
        },
        [
          _vm._v(
            "Rebum gubergren at kasd takimata\n                              clita."
          ),
        ]
      ),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", { staticClass: "text-muted fs-13" }, [
      _c(
        "a",
        { staticClass: "text-dark", attrs: { href: "project-details.html" } },
        [_vm._v("Noa Dashboard\n                              UI")]
      ),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", [
      _c("div", { staticClass: "form-group mb-0" }, [
        _c("ul", [
          _c("li", { staticClass: "select-status" }, [
            _c(
              "select",
              {
                staticClass: "form-control select2-status-search",
                attrs: { "data-placeholder": "Select Status" },
              },
              [
                _c("option", { attrs: { value: "IP" } }, [
                  _vm._v("In Progress"),
                ]),
                _vm._v(" "),
                _c("option", { attrs: { value: "OH" } }, [_vm._v("On Hold")]),
                _vm._v(" "),
                _c("option", { attrs: { value: "CP", selected: "" } }, [
                  _vm._v("Completed"),
                ]),
              ]
            ),
          ]),
        ]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "a",
      {
        staticClass:
          "border br-5 px-2 py-1 d-flex align-items-center justify-content-center",
        attrs: {
          href: "#",
          "data-bs-toggle": "dropdown",
          "aria-haspopup": "true",
          "aria-expanded": "false",
        },
      },
      [_c("i", { staticClass: "fe fe-more-vertical" })]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "dropdown-menu dropdown-menu-start" }, [
      _c("a", { staticClass: "dropdown-item", attrs: { href: "#" } }, [
        _c("i", { staticClass: "fe fe-edit-2 me-2" }),
        _vm._v(" Edit"),
      ]),
      _vm._v(" "),
      _c("a", { staticClass: "dropdown-item", attrs: { href: "#" } }, [
        _c("i", { staticClass: "fe fe-info me-2" }),
        _vm._v(" Info"),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal-header p-5" }, [
      _c("h4", { staticClass: "modal-title text-dark" }, [
        _vm._v("#1. Sit sed takimata sanctus invidunt"),
      ]),
      _c(
        "button",
        {
          staticClass: "btn-close",
          attrs: {
            "aria-label": "Close",
            "data-bs-dismiss": "modal",
            type: "button",
          },
        },
        [_c("span", { attrs: { "aria-hidden": "true" } }, [_vm._v("×")])]
      ),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal-body" }, [
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-md-12 d-flex mb-4" }, [
          _c("p", { staticClass: "m-0 wp-30 text-muted" }, [
            _vm._v("Project Name"),
          ]),
          _vm._v(" "),
          _c("p", { staticClass: "m-0 wp-70 text-dark" }, [
            _vm._v("Noa Dashboard UI"),
          ]),
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-md-12 d-flex mb-4" }, [
          _c("p", { staticClass: "m-0 wp-30 text-muted" }, [
            _vm._v("Assigned To"),
          ]),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "m-0 wp-70 text-dark d-flex align-items-center" },
            [
              _c("div", { staticClass: "me-2" }, [
                _c("img", {
                  staticClass: "rounded-circle avatar-sm",
                  attrs: {
                    alt: "User Avatar",
                    src: "/assets/images/users/7.jpg",
                  },
                }),
              ]),
              _vm._v(" "),
              _c("div", [
                _c("p", { staticClass: "mb-1" }, [_vm._v("Daniel Obrien")]),
              ]),
            ]
          ),
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-md-12 d-flex mb-4" }, [
          _c("p", { staticClass: "m-0 wp-30 text-muted" }, [
            _vm._v("Start Date"),
          ]),
          _vm._v(" "),
          _c("p", { staticClass: "m-0 wp-70 text-dark" }, [
            _vm._v("30-10-2021"),
          ]),
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-md-12 d-flex mb-4" }, [
          _c("p", { staticClass: "m-0 wp-30 text-muted" }, [_vm._v("Status")]),
          _vm._v(" "),
          _c("div", { staticClass: "m-0 wp-70 text-dark" }, [
            _c("span", { staticClass: "mb-0 mt-1 status-main in-progress" }, [
              _vm._v("In Progress"),
            ]),
          ]),
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-md-12 d-flex mb-4" }, [
          _c("p", { staticClass: "m-0 wp-30 text-muted" }, [
            _vm._v("End Date"),
          ]),
          _vm._v(" "),
          _c("p", { staticClass: "m-0 wp-70 text-dark" }, [_vm._v("---")]),
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-md-12 d-flex mb-4" }, [
          _c("p", { staticClass: "m-0 wp-30 text-muted" }, [
            _vm._v("Description"),
          ]),
          _vm._v(" "),
          _c("p", { staticClass: "m-0 wp-70 text-dark" }, [
            _vm._v(
              "Kasd dolore lorem eos stet at, dolor ipsum elitr sea amet amet stet\n                justo, sed."
            ),
          ]),
        ]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "tabs-menu4 w-100" }, [
      _c(
        "nav",
        { staticClass: "nav border-bottom px-4 d-block d-lg-flex flex-2" },
        [
          _c(
            "a",
            {
              staticClass:
                "nav-link border border-bottom-0 py-1 br-5 mx-1 mx-md-1 active",
              attrs: { "data-bs-toggle": "tab", href: "#task-files" },
            },
            [_vm._v("\n                Files\n              ")]
          ),
          _vm._v(" "),
          _c(
            "a",
            {
              staticClass:
                "nav-link border border-bottom-0 py-1 br-5 mx-1 mx-md-1",
              attrs: { "data-bs-toggle": "tab", href: "#task-subtask" },
            },
            [_vm._v("\n                Sub Task\n              ")]
          ),
          _vm._v(" "),
          _c(
            "a",
            {
              staticClass:
                "nav-link border border-bottom-0 py-1 br-5 mx-1 mx-md-1",
              attrs: { "data-bs-toggle": "tab", href: "#task-tracktime" },
            },
            [_vm._v("\n                Track Time\n              ")]
          ),
          _vm._v(" "),
          _c(
            "a",
            {
              staticClass:
                "nav-link border border-bottom-0 py-1 br-5 mx-1 mx-md-1",
              attrs: { "data-bs-toggle": "tab", href: "#task-comments" },
            },
            [_vm._v("\n                Comments\n              ")]
          ),
        ]
      ),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", { staticClass: "row-first" }, [
        _c("th", [_vm._v("File Name")]),
        _vm._v(" "),
        _c("th", [_vm._v("Date")]),
        _vm._v(" "),
        _c("th", [_vm._v("Type")]),
        _vm._v(" "),
        _c("th", [_vm._v("Size")]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", [
      _c("span", { staticClass: "text-muted modified-date" }, [
        _vm._v("07/10/21, 03:30"),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", [_c("span", [_vm._v("doc")])])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", [
      _c("span", { staticClass: "text-muted file-size" }, [_vm._v("15kb")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", [
      _c("span", { staticClass: "text-muted modified-date" }, [
        _vm._v("07/10/21, 03:30"),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", [_c("span", [_vm._v("mp4")])])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", [
      _c("span", { staticClass: "text-muted file-size" }, [_vm._v("30mb")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", [
      _c("span", { staticClass: "text-muted modified-date" }, [
        _vm._v("07/10/21, 03:30"),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", [_c("span", [_vm._v("jpeg")])])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", [
      _c("span", { staticClass: "text-muted file-size" }, [_vm._v("15kb")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-md-12 mt-3" }, [
        _c("ul", { staticClass: "sub-list-container" }, [
          _c("li", { staticClass: "sub-list-item task-completed" }, [
            _c("div", { staticClass: "sub-list-main" }, [
              _c("div", { staticClass: "check-btn" }),
              _vm._v(" "),
              _c(
                "span",
                {
                  staticClass: "sub-list-text text-muted",
                  attrs: { onclick: "taskCompleted(event)" },
                },
                [
                  _vm._v(
                    "Gubergren vero nonumy\n                          vero no."
                  ),
                ]
              ),
            ]),
            _vm._v(" "),
            _c("i", { staticClass: "fe fe-trash delete-main text-muted" }),
          ]),
          _vm._v(" "),
          _c("li", { staticClass: "sub-list-item" }, [
            _c("div", { staticClass: "sub-list-main" }, [
              _c("div", { staticClass: "check-btn" }),
              _vm._v(" "),
              _c(
                "span",
                {
                  staticClass: "sub-list-text text-muted",
                  attrs: { onclick: "taskCompleted(event)" },
                },
                [
                  _vm._v(
                    "Duo no elitr diam labore\n                          sit invidunt. Magna gubergren erat."
                  ),
                ]
              ),
            ]),
            _vm._v(" "),
            _c("i", { staticClass: "fe fe-trash delete-main text-muted" }),
          ]),
          _vm._v(" "),
          _c("li", { staticClass: "sub-list-item" }, [
            _c("div", { staticClass: "sub-list-main" }, [
              _c("div", { staticClass: "check-btn" }),
              _vm._v(" "),
              _c(
                "span",
                {
                  staticClass: "sub-list-text text-muted",
                  attrs: { onclick: "taskCompleted(event)" },
                },
                [
                  _vm._v(
                    "Consetetur clita diam\n                          est eos invidunt. Eirmod magna."
                  ),
                ]
              ),
            ]),
            _vm._v(" "),
            _c("i", { staticClass: "fe fe-trash delete-main text-muted" }),
          ]),
        ]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "tab-pane", attrs: { id: "task-tracktime" } },
      [
        _c("div", { staticClass: "row" }, [
          _c("table", { staticClass: "table table-bordered" }, [
            _c("thead", [
              _c("tr", { staticClass: "row-first" }, [
                _c("th", { staticClass: "bg-transparent border-bottom-0" }, [
                  _vm._v("Team Member"),
                ]),
                _vm._v(" "),
                _c("th", { staticClass: "bg-transparent border-bottom-0" }, [
                  _vm._v("Start Date & Time"),
                ]),
                _vm._v(" "),
                _c("th", { staticClass: "bg-transparent border-bottom-0" }, [
                  _vm._v("End Date & Time"),
                ]),
                _vm._v(" "),
                _c("th", { staticClass: "bg-transparent border-bottom-0" }, [
                  _vm._v("Total Time"),
                ]),
              ]),
            ]),
            _vm._v(" "),
            _c("tbody", [
              _c("tr", [
                _c("td", [
                  _c("div", { staticClass: "d-flex align-items-center" }, [
                    _c("div", { staticClass: "me-2" }, [
                      _c("img", {
                        staticClass: "rounded-circle avatar-md",
                        attrs: {
                          alt: "User Avatar",
                          src: "/assets/images/users/8.jpg",
                        },
                      }),
                    ]),
                    _vm._v(" "),
                    _c("div", [
                      _c("h6", { staticClass: "mb-1" }, [
                        _vm._v("Skyler Hilda"),
                      ]),
                      _vm._v(" "),
                      _c("span", { staticClass: "text-muted fs-12" }, [
                        _vm._v("member@spruko.com"),
                      ]),
                    ]),
                  ]),
                ]),
                _vm._v(" "),
                _c("td", { staticClass: "text-muted fs-13 fw-semibold" }, [
                  _vm._v("31 Oct 21 & 14:56"),
                ]),
                _vm._v(" "),
                _c("td", { staticClass: "text-muted fs-13 fw-semibold" }, [
                  _vm._v("01 Nov 21 & 09:35"),
                ]),
                _vm._v(" "),
                _c("td", { staticClass: "text-dark fs-13 fw-semibold" }, [
                  _vm._v("Days: 4"),
                  _c("br"),
                  _vm._v("Hours: 10"),
                  _c("br"),
                  _vm._v("Minutes: 22"),
                ]),
              ]),
              _vm._v(" "),
              _c("tr", [
                _c("td", [
                  _c("div", { staticClass: "d-flex align-items-center" }, [
                    _c("div", { staticClass: "me-2" }, [
                      _c("img", {
                        staticClass: "rounded-circle avatar-md",
                        attrs: {
                          alt: "User Avatar",
                          src: "/assets/images/users/2.jpg",
                        },
                      }),
                    ]),
                    _vm._v(" "),
                    _c("div", [
                      _c("h6", { staticClass: "mb-1" }, [
                        _vm._v("Lisa Morgan"),
                      ]),
                      _vm._v(" "),
                      _c("span", { staticClass: "text-muted fs-12" }, [
                        _vm._v("member@spruko.com"),
                      ]),
                    ]),
                  ]),
                ]),
                _vm._v(" "),
                _c("td", { staticClass: "text-muted fs-13 fw-semibold" }, [
                  _vm._v("30 Oct 21 & 12:56"),
                ]),
                _vm._v(" "),
                _c("td", { staticClass: "text-muted fs-13 fw-semibold" }, [
                  _vm._v("11 Nov 21 & 09:35"),
                ]),
                _vm._v(" "),
                _c("td", { staticClass: "text-dark fs-13 fw-semibold" }, [
                  _vm._v("Days: 15"),
                  _c("br"),
                  _vm._v("Hours: 12"),
                  _c("br"),
                  _vm._v("Minutes: 52"),
                ]),
              ]),
              _vm._v(" "),
              _c("tr", [
                _c("td", [
                  _c("div", { staticClass: "d-flex align-items-center" }, [
                    _c("div", { staticClass: "me-2" }, [
                      _c("img", {
                        staticClass: "rounded-circle avatar-md",
                        attrs: {
                          alt: "User Avatar",
                          src: "/assets/images/users/11.jpg",
                        },
                      }),
                    ]),
                    _vm._v(" "),
                    _c("div", [
                      _c("h6", { staticClass: "mb-1" }, [
                        _vm._v("Tyler Durder"),
                      ]),
                      _vm._v(" "),
                      _c("span", { staticClass: "text-muted fs-12" }, [
                        _vm._v("member@spruko.com"),
                      ]),
                    ]),
                  ]),
                ]),
                _vm._v(" "),
                _c("td", { staticClass: "text-muted fs-13 fw-semibold" }, [
                  _vm._v("15 Oct 21 & 15:56"),
                ]),
                _vm._v(" "),
                _c("td", { staticClass: "text-muted fs-13 fw-semibold" }, [
                  _vm._v("01 Nov 21 & 16:40"),
                ]),
                _vm._v(" "),
                _c("td", { staticClass: "text-dark fs-13 fw-semibold" }, [
                  _vm._v("Days: 18"),
                  _c("br"),
                  _vm._v("Hours: 8"),
                  _c("br"),
                  _vm._v("Minutes: 52"),
                ]),
              ]),
              _vm._v(" "),
              _c("tr", { staticClass: "row-last" }, [
                _c("td", [
                  _c("div", { staticClass: "d-flex align-items-center" }, [
                    _c("div", { staticClass: "me-2" }, [
                      _c("img", {
                        staticClass: "rounded-circle avatar-lg",
                        attrs: {
                          alt: "User Avatar",
                          src: "/assets/images/users/14.jpg",
                        },
                      }),
                    ]),
                    _vm._v(" "),
                    _c("div", [
                      _c("h6", { staticClass: "mb-1" }, [
                        _vm._v("Jorah Randy"),
                      ]),
                      _vm._v(" "),
                      _c("span", { staticClass: "text-muted fs-12" }, [
                        _vm._v("member@spruko.com"),
                      ]),
                    ]),
                  ]),
                ]),
                _vm._v(" "),
                _c("td", { staticClass: "text-muted fs-13 fw-semibold" }, [
                  _vm._v("18 Oct 21 & 10:30"),
                ]),
                _vm._v(" "),
                _c("td", { staticClass: "text-muted fs-13 fw-semibold" }, [
                  _vm._v("09 Nov 21 & 09:45"),
                ]),
                _vm._v(" "),
                _c("td", { staticClass: "text-dark fs-13 fw-semibold" }, [
                  _vm._v("Days: 22"),
                  _c("br"),
                  _vm._v("Hours: 10"),
                  _c("br"),
                  _vm._v("Minutes: 12"),
                ]),
              ]),
            ]),
          ]),
        ]),
      ]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "tab-pane", attrs: { id: "task-comments" } },
      [
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "mt-5" }, [
            _c("div", { staticClass: "media mb-5 overflow-visible" }, [
              _c("div", { staticClass: "me-3" }, [
                _c("a", { attrs: { href: "profile.html" } }, [
                  _c("img", {
                    staticClass: "media-object rounded-circle thumb-sm",
                    attrs: { alt: "64x64", src: "/assets/images/users/5.jpg" },
                  }),
                ]),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "media-body overflow-visible" }, [
                _c("div", { staticClass: "border mb-5 p-4 br-5" }, [
                  _c("nav", { staticClass: "nav float-end" }, [
                    _c("div", { staticClass: "dropdown" }, [
                      _c(
                        "a",
                        {
                          staticClass: "nav-link text-muted fs-16 p-0 ps-4",
                          attrs: {
                            href: "javascript:;",
                            "data-bs-toggle": "dropdown",
                            role: "button",
                            "aria-haspopup": "true",
                            "aria-expanded": "false",
                          },
                        },
                        [_c("i", { staticClass: "fe fe-more-vertical" })]
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "dropdown-menu dropdown-menu-end" },
                        [
                          _c(
                            "a",
                            {
                              staticClass: "dropdown-item",
                              attrs: { href: "#" },
                            },
                            [
                              _c("i", { staticClass: "fe fe-edit me-1" }),
                              _vm._v(" Edit"),
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "a",
                            {
                              staticClass: "dropdown-item",
                              attrs: { href: "#" },
                            },
                            [
                              _c("i", {
                                staticClass: "fe fe-corner-up-left me-1",
                              }),
                              _vm._v(" Reply"),
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "a",
                            {
                              staticClass: "dropdown-item",
                              attrs: { href: "#" },
                            },
                            [
                              _c("i", { staticClass: "fe fe-flag me-1" }),
                              _vm._v(" Report Abuse"),
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "a",
                            {
                              staticClass: "dropdown-item",
                              attrs: { href: "#" },
                            },
                            [
                              _c("i", { staticClass: "fe fe-trash-2 me-1" }),
                              _vm._v(" Delete"),
                            ]
                          ),
                        ]
                      ),
                    ]),
                  ]),
                  _vm._v(" "),
                  _c("h5", { staticClass: "mt-0" }, [
                    _vm._v("Gavin Murray "),
                    _c("span", { staticClass: "text-muted fs-12 ms-1" }, [
                      _vm._v("1 Day ago"),
                    ]),
                  ]),
                  _vm._v(" "),
                  _c("span", [
                    _c("i", { staticClass: "fe fe-thumb-up text-danger" }),
                  ]),
                  _vm._v(" "),
                  _c("p", { staticClass: "font-13 text-muted" }, [
                    _vm._v(
                      "Lorem ipsum dolor sit amet, quis Neque porro quisquam est,\n                          nostrud exercitation ullamco laboris commodo consequat. There’s an old maxim that states,\n                          “No fun for the writer, no fun for the reader.”No matter\n                          what industry you’re working in, as a blogger, you should live and die by this statement.\n                        "
                    ),
                  ]),
                  _vm._v(" "),
                  _c(
                    "a",
                    { staticClass: "like", attrs: { href: "javascript:;" } },
                    [
                      _c(
                        "span",
                        {
                          staticClass:
                            "badge btn-danger-light rounded-pill py-2 px-3",
                        },
                        [
                          _c("i", { staticClass: "fe fe-heart me-1" }),
                          _vm._v("56"),
                        ]
                      ),
                    ]
                  ),
                  _vm._v(" "),
                  _c("span", { staticClass: "reply", attrs: { id: "1" } }, [
                    _c("a", { attrs: { href: "javascript:;" } }, [
                      _c(
                        "span",
                        {
                          staticClass:
                            "badge btn-info-light rounded-pill py-2 px-3",
                        },
                        [
                          _c("i", { staticClass: "fe fe-corner-up-left me-1" }),
                          _vm._v("Reply"),
                        ]
                      ),
                    ]),
                  ]),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "media mb-5 overflow-visible" }, [
                  _c("div", { staticClass: "me-3" }, [
                    _c("a", { attrs: { href: "profile.html" } }, [
                      _c("img", {
                        staticClass: "media-object rounded-circle thumb-sm",
                        attrs: {
                          alt: "64x64",
                          src: "/assets/images/users/2.jpg",
                        },
                      }),
                    ]),
                  ]),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass:
                        "media-body border p-4 overflow-visible br-5",
                    },
                    [
                      _c("nav", { staticClass: "nav float-end" }, [
                        _c("div", { staticClass: "dropdown" }, [
                          _c(
                            "a",
                            {
                              staticClass: "nav-link text-muted fs-16 p-0 ps-4",
                              attrs: {
                                href: "javascript:;",
                                "data-bs-toggle": "dropdown",
                                role: "button",
                                "aria-haspopup": "true",
                                "aria-expanded": "false",
                              },
                            },
                            [_c("i", { staticClass: "fe fe-more-vertical" })]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "dropdown-menu dropdown-menu-end" },
                            [
                              _c(
                                "a",
                                {
                                  staticClass: "dropdown-item",
                                  attrs: { href: "#" },
                                },
                                [
                                  _c("i", { staticClass: "fe fe-edit me-1" }),
                                  _vm._v(" Edit"),
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "a",
                                {
                                  staticClass: "dropdown-item",
                                  attrs: { href: "#" },
                                },
                                [
                                  _c("i", {
                                    staticClass: "fe fe-corner-up-left me-1",
                                  }),
                                  _vm._v(" Reply"),
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "a",
                                {
                                  staticClass: "dropdown-item",
                                  attrs: { href: "#" },
                                },
                                [
                                  _c("i", { staticClass: "fe fe-flag me-1" }),
                                  _vm._v(" Report Abuse"),
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "a",
                                {
                                  staticClass: "dropdown-item",
                                  attrs: { href: "#" },
                                },
                                [
                                  _c("i", {
                                    staticClass: "fe fe-trash-2 me-1",
                                  }),
                                  _vm._v(" Delete"),
                                ]
                              ),
                            ]
                          ),
                        ]),
                      ]),
                      _vm._v(" "),
                      _c("h5", { staticClass: "mt-0" }, [
                        _vm._v("Mozelle Belt "),
                        _c(
                          "span",
                          {
                            staticClass:
                              "text-muted fs-12 ms-1 bg-normal-light",
                          },
                          [
                            _vm._v(
                              "Reply to\n                              Gavin Murray"
                            ),
                          ]
                        ),
                        _c("span", { staticClass: "text-muted fs-12 ms-1" }, [
                          _vm._v("2 min ago"),
                        ]),
                      ]),
                      _vm._v(" "),
                      _c("span", [
                        _c("i", { staticClass: "fe fe-thumb-up text-danger" }),
                      ]),
                      _vm._v(" "),
                      _c("p", { staticClass: "font-13 text-muted" }, [
                        _vm._v(
                          "Nostrud exercitation ullamco laboris commodo consequat.\n                            There’s an old maxim that states, “No fun for the writer, no fun for the reader.”No matter\n                            what industry you’re working in, as a blogger, you should\n                            live and die by this statement."
                        ),
                      ]),
                      _vm._v(" "),
                      _c(
                        "a",
                        {
                          staticClass: "like",
                          attrs: { href: "javascript:;" },
                        },
                        [
                          _c(
                            "span",
                            {
                              staticClass:
                                "badge btn-danger-light rounded-pill py-2 px-3",
                            },
                            [
                              _c("i", { staticClass: "fe fe-heart me-1" }),
                              _vm._v("56"),
                            ]
                          ),
                        ]
                      ),
                      _vm._v(" "),
                      _c("span", { staticClass: "reply", attrs: { id: "2" } }, [
                        _c("a", { attrs: { href: "javascript:;" } }, [
                          _c(
                            "span",
                            {
                              staticClass:
                                "badge btn-info-light rounded-pill py-2 px-3",
                            },
                            [
                              _c("i", {
                                staticClass: "fe fe-corner-up-left me-1",
                              }),
                              _vm._v("Reply"),
                            ]
                          ),
                        ]),
                      ]),
                    ]
                  ),
                ]),
              ]),
            ]),
          ]),
        ]),
      ]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "modal fade", attrs: { id: "country-selector" } },
      [
        _c(
          "div",
          {
            staticClass: "modal-dialog modal-lg modal-dialog-centered",
            attrs: { role: "document" },
          },
          [
            _c("div", { staticClass: "modal-content country-select-modal" }, [
              _c("div", { staticClass: "modal-header" }, [
                _c("h6", { staticClass: "modal-title" }, [
                  _vm._v("Choose Country"),
                ]),
                _c(
                  "button",
                  {
                    staticClass: "btn-close",
                    attrs: {
                      "aria-label": "Close",
                      "data-bs-dismiss": "modal",
                      type: "button",
                    },
                  },
                  [
                    _c("span", { attrs: { "aria-hidden": "true" } }, [
                      _vm._v("×"),
                    ]),
                  ]
                ),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "modal-body" }, [
                _c("ul", { staticClass: "row row-sm p-3" }, [
                  _c("li", { staticClass: "col-lg-4 mb-2" }, [
                    _c(
                      "a",
                      {
                        staticClass: "btn btn-country btn-lg btn-block active",
                      },
                      [
                        _c("span", { staticClass: "country-selector" }, [
                          _c("img", {
                            staticClass: "me-2 language",
                            attrs: {
                              alt: "unitedstates",
                              src: "/assets/images/flags/us_flag.jpg",
                            },
                          }),
                        ]),
                        _vm._v("United States\n              "),
                      ]
                    ),
                  ]),
                  _vm._v(" "),
                  _c("li", { staticClass: "col-lg-4 mb-2" }, [
                    _c(
                      "a",
                      { staticClass: "btn btn-country btn-lg btn-block" },
                      [
                        _c("span", { staticClass: "country-selector" }, [
                          _c("img", {
                            staticClass: "me-2 language",
                            attrs: {
                              alt: "italy",
                              src: "/assets/images/flags/italy_flag.jpg",
                            },
                          }),
                        ]),
                        _vm._v("Italy\n              "),
                      ]
                    ),
                  ]),
                  _vm._v(" "),
                  _c("li", { staticClass: "col-lg-4 mb-2" }, [
                    _c(
                      "a",
                      { staticClass: "btn btn-country btn-lg btn-block" },
                      [
                        _c("span", { staticClass: "country-selector" }, [
                          _c("img", {
                            staticClass: "me-2 language",
                            attrs: {
                              alt: "spain",
                              src: "/assets/images/flags/spain_flag.jpg",
                            },
                          }),
                        ]),
                        _vm._v("Spain\n              "),
                      ]
                    ),
                  ]),
                  _vm._v(" "),
                  _c("li", { staticClass: "col-lg-4 mb-2" }, [
                    _c(
                      "a",
                      { staticClass: "btn btn-country btn-lg btn-block" },
                      [
                        _c("span", { staticClass: "country-selector" }, [
                          _c("img", {
                            staticClass: "me-2 language",
                            attrs: {
                              alt: "india",
                              src: "/assets/images/flags/india_flag.jpg",
                            },
                          }),
                        ]),
                        _vm._v("India\n              "),
                      ]
                    ),
                  ]),
                  _vm._v(" "),
                  _c("li", { staticClass: "col-lg-4 mb-2" }, [
                    _c(
                      "a",
                      { staticClass: "btn btn-country btn-lg btn-block" },
                      [
                        _c("span", { staticClass: "country-selector" }, [
                          _c("img", {
                            staticClass: "me-2 language",
                            attrs: {
                              alt: "french",
                              src: "/assets/images/flags/french_flag.jpg",
                            },
                          }),
                        ]),
                        _vm._v("French\n              "),
                      ]
                    ),
                  ]),
                  _vm._v(" "),
                  _c("li", { staticClass: "col-lg-4 mb-2" }, [
                    _c(
                      "a",
                      { staticClass: "btn btn-country btn-lg btn-block" },
                      [
                        _c("span", { staticClass: "country-selector" }, [
                          _c("img", {
                            staticClass: "me-2 language",
                            attrs: {
                              alt: "russia",
                              src: "/assets/images/flags/russia_flag.jpg",
                            },
                          }),
                        ]),
                        _vm._v("Russia\n              "),
                      ]
                    ),
                  ]),
                  _vm._v(" "),
                  _c("li", { staticClass: "col-lg-4 mb-2" }, [
                    _c(
                      "a",
                      { staticClass: "btn btn-country btn-lg btn-block" },
                      [
                        _c("span", { staticClass: "country-selector" }, [
                          _c("img", {
                            staticClass: "me-2 language",
                            attrs: {
                              alt: "germany",
                              src: "/assets/images/flags/germany_flag.jpg",
                            },
                          }),
                        ]),
                        _vm._v("Germany\n              "),
                      ]
                    ),
                  ]),
                  _vm._v(" "),
                  _c("li", { staticClass: "col-lg-4 mb-2" }, [
                    _c(
                      "a",
                      { staticClass: "btn btn-country btn-lg btn-block" },
                      [
                        _c("span", { staticClass: "country-selector" }, [
                          _c("img", {
                            staticClass: "me-2 language",
                            attrs: {
                              alt: "argentina",
                              src: "/assets/images/flags/argentina_flag.jpg",
                            },
                          }),
                        ]),
                        _vm._v("Argentina\n              "),
                      ]
                    ),
                  ]),
                  _vm._v(" "),
                  _c("li", { staticClass: "col-lg-4 mb-2" }, [
                    _c(
                      "a",
                      { staticClass: "btn btn-country btn-lg btn-block" },
                      [
                        _c("span", { staticClass: "country-selector" }, [
                          _c("img", {
                            staticClass: "me-2 language",
                            attrs: {
                              alt: "uae",
                              src: "/assets/images/flags/uae_flag.jpg",
                            },
                          }),
                        ]),
                        _vm._v("UAE\n              "),
                      ]
                    ),
                  ]),
                  _vm._v(" "),
                  _c("li", { staticClass: "col-lg-4 mb-2" }, [
                    _c(
                      "a",
                      { staticClass: "btn btn-country btn-lg btn-block" },
                      [
                        _c("span", { staticClass: "country-selector" }, [
                          _c("img", {
                            staticClass: "me-2 language",
                            attrs: {
                              alt: "austria",
                              src: "/assets/images/flags/austria_flag.jpg",
                            },
                          }),
                        ]),
                        _vm._v("Austria\n              "),
                      ]
                    ),
                  ]),
                  _vm._v(" "),
                  _c("li", { staticClass: "col-lg-4 mb-2" }, [
                    _c(
                      "a",
                      { staticClass: "btn btn-country btn-lg btn-block" },
                      [
                        _c("span", { staticClass: "country-selector" }, [
                          _c("img", {
                            staticClass: "me-2 language",
                            attrs: {
                              alt: "mexico",
                              src: "/assets/images/flags/mexico_flag.jpg",
                            },
                          }),
                        ]),
                        _vm._v("Mexico\n              "),
                      ]
                    ),
                  ]),
                  _vm._v(" "),
                  _c("li", { staticClass: "col-lg-4 mb-2" }, [
                    _c(
                      "a",
                      { staticClass: "btn btn-country btn-lg btn-block" },
                      [
                        _c("span", { staticClass: "country-selector" }, [
                          _c("img", {
                            staticClass: "me-2 language",
                            attrs: {
                              alt: "china",
                              src: "/assets/images/flags/china_flag.jpg",
                            },
                          }),
                        ]),
                        _vm._v("China\n              "),
                      ]
                    ),
                  ]),
                  _vm._v(" "),
                  _c("li", { staticClass: "col-lg-4 mb-2" }, [
                    _c(
                      "a",
                      { staticClass: "btn btn-country btn-lg btn-block" },
                      [
                        _c("span", { staticClass: "country-selector" }, [
                          _c("img", {
                            staticClass: "me-2 language",
                            attrs: {
                              alt: "poland",
                              src: "/assets/images/flags/poland_flag.jpg",
                            },
                          }),
                        ]),
                        _vm._v("Poland\n              "),
                      ]
                    ),
                  ]),
                  _vm._v(" "),
                  _c("li", { staticClass: "col-lg-4 mb-2" }, [
                    _c(
                      "a",
                      { staticClass: "btn btn-country btn-lg btn-block" },
                      [
                        _c("span", { staticClass: "country-selector" }, [
                          _c("img", {
                            staticClass: "me-2 language",
                            attrs: {
                              alt: "canada",
                              src: "/assets/images/flags/canada_flag.jpg",
                            },
                          }),
                        ]),
                        _vm._v("Canada\n              "),
                      ]
                    ),
                  ]),
                  _vm._v(" "),
                  _c("li", { staticClass: "col-lg-4 mb-2" }, [
                    _c(
                      "a",
                      { staticClass: "btn btn-country btn-lg btn-block" },
                      [
                        _c("span", { staticClass: "country-selector" }, [
                          _c("img", {
                            staticClass: "me-2 language",
                            attrs: {
                              alt: "malaysia",
                              src: "/assets/images/flags/malaysia_flag.jpg",
                            },
                          }),
                        ]),
                        _vm._v("Malaysia\n              "),
                      ]
                    ),
                  ]),
                ]),
              ]),
            ]),
          ]
        ),
      ]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("footer", { staticClass: "footer" }, [
      _c("div", { staticClass: "container" }, [
        _c("div", { staticClass: "row align-items-center flex-row-reverse" }, [
          _c("div", { staticClass: "col-md-12 col-sm-12 text-center" }, [
            _vm._v("\n          Copyright © 2022 "),
            _c("a", { attrs: { href: "#" } }, [_vm._v("Noa")]),
            _vm._v(". Designed with "),
            _c("span", { staticClass: "fa fa-heart text-danger" }),
            _vm._v(" by "),
            _c("a", { attrs: { href: "#" } }, [_vm._v(" Spruko ")]),
            _vm._v(" All rights reserved\n        "),
          ]),
        ]),
      ]),
    ])
  },
]
render._withStripped = true



/***/ })

}]);