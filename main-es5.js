(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <header class=\"container-header\">{{time}}</header>\n  <img class=\"bang\" src=\"assets/bang.jpg\" />\n  <img class=\"beard\" src=\"assets/beard.jpg\" />\n  <p class=\"do-not-hover\">DO NOT HOVER ME </p>\n  <button class=\"cute-girl\" (click)=\"toggleCute()\">Click for a cute girl!!!!</button>\n  <img  class=\"cute-apoorva\" [class.cute]=\"cuteOpened\" src=\"assets/cuteapoorva.jpg\" />\n  <img  class=\"phonecall\" src=\"assets/phonecall.jpg\" />\n  <img class=\"bestgirl\" src=\"assets/bestgirl.jpg\" />\n  <img class=\"cutebaby\" src=\"assets/cute.jpg\" />\n  <button class=\"survey\" (click)=\"toggleSurvey()\">CLICK HERE TO ENTER A SURVEY TO WIN PRIZES</button>\n  <div [class.survey-open]=\"surveyOpened\" class=\"actual-survey\">\n    \n    <img src=\"assets/cool.jpg\" class=\"cool\" />\n    <h1>WHO LOOKS COOLER?</h1>\n    <input type=\"radio\" > <label>Chris</label><br>\n    <input type=\"radio\" disabled=\"true\" ><label>Apoorva</label><br>\n    <button (click)=\"toggleSurvey()\">SUBMIT ANSWER</button>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n width: 100%;\n height: 100%;\n display: flex;\n justify-content: center;\n align-items: center;\n position: relative;\n\n}\n\n.container-header {\n font-size: 5vw;\n padding: 15px;\n border: 1px solid black;\n z-index: 4;\n}\n\n.bang {\n position: absolute;\n top: 30px;\n left: 20px; \n height: 250px; \n border-radius: 50%;\n -webkit-backface-visibility: hidden;\n         backface-visibility: hidden;\n transition: 1s linear;\n -webkit-transform-style: preserve-3d;\n         transform-style: preserve-3d;\n}\n\n.bang::after{\n position:absolute;\n content:'Hover for bearded apoorva';\n width: 10px;\n left:0;\n bottom: -10px;\n\n}\n\n.beard {\n position: absolute;\n top: 30px;\n left: 20px; \n height: 250px; \n border-radius: 50%;\n opacity: 0;\n transition: 1s linear;\n\n}\n\n.bang:hover{\n opacity: 0;\n}\n\n.beard:hover{\n opacity: 1;\n}\n\n.cute-apoorva {\n z-index: 3;\n}\n\n.cute-girl {\n margin-left: 20px;\n}\n\n.cute {\n display: none;\n}\n\n.do-not-hover {\n position: absolute;\ntop: 0;\n\nleft: 300px;\n\nfont-size: 50px;\n\ncolor: red;\n}\n\n.phonecall {\n position: absolute;\n\n-o-object-fit: contain;\n\n   object-fit: contain;\n\nheight: 400px;\n\nright: 80px;\n\ntop: 30px;\n}\n\n.bestgirl {\n height: 375px;\n\nposition: absolute;\n\nbottom: 0;\n\nleft: 50px;\n}\n\n.cutebaby {\n height: 225px;\n\n position: absolute;\n \n bottom: 0;\n \n right: 50%;\n \n -webkit-animation-name: rotate-around;\n \n         animation-name: rotate-around;\n -webkit-animation-duration: 3s;\n         animation-duration: 3s;\n -webkit-animation-iteration-count: infinite;\n         animation-iteration-count: infinite;\n\n}\n\n.survey {\n position: absolute;\n top: 200px;\n font-size: 30px;\n color: blue;\n}\n\n.actual-survey {\n z-index: 5;\n position: fixed;\n background-color: rgba(0,0,0,0.4);\n width: 100%;\n height: 100%;\n display: flex;\n justify-content: start;\n align-items: center;\n flex-direction: column;\n\n}\n\n.actual-survey label {\n font-size: 50px;\n color: blue;\n}\n\n.actual-survey h1 {\n\n font-size: 50px;\n\ncolor: ORANGE;\n}\n\n.cool {\n display: block;\n height: 500px;\n}\n\n.survey-open {\n display: none;\n}\n\n@-webkit-keyframes rotate-around {\n from {\n  -webkit-transform: rotate(0);\n          transform: rotate(0);\n }\n to {\n  -webkit-transform: rotate(360deg);\n          transform: rotate(360deg);\n }\n}\n\n@keyframes rotate-around {\n from {\n  -webkit-transform: rotate(0);\n          transform: rotate(0);\n }\n to {\n  -webkit-transform: rotate(360deg);\n          transform: rotate(360deg);\n }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyxXQUFXO0NBQ1gsWUFBWTtDQUNaLGFBQWE7Q0FDYix1QkFBdUI7Q0FDdkIsbUJBQW1CO0NBQ25CLGtCQUFrQjs7QUFFbkI7O0FBRUE7Q0FDQyxjQUFjO0NBQ2QsYUFBYTtDQUNiLHVCQUF1QjtDQUN2QixVQUFVO0FBQ1g7O0FBRUE7Q0FDQyxrQkFBa0I7Q0FDbEIsU0FBUztDQUNULFVBQVU7Q0FDVixhQUFhO0NBQ2Isa0JBQWtCO0NBQ2xCLG1DQUEyQjtTQUEzQiwyQkFBMkI7Q0FDM0IscUJBQXFCO0NBQ3JCLG9DQUE0QjtTQUE1Qiw0QkFBNEI7QUFDN0I7O0FBQ0E7Q0FDQyxpQkFBaUI7Q0FDakIsbUNBQW1DO0NBQ25DLFdBQVc7Q0FDWCxNQUFNO0NBQ04sYUFBYTs7QUFFZDs7QUFDQTtDQUNDLGtCQUFrQjtDQUNsQixTQUFTO0NBQ1QsVUFBVTtDQUNWLGFBQWE7Q0FDYixrQkFBa0I7Q0FDbEIsVUFBVTtDQUNWLHFCQUFxQjs7QUFFdEI7O0FBQ0E7Q0FDQyxVQUFVO0FBQ1g7O0FBQ0E7Q0FDQyxVQUFVO0FBQ1g7O0FBQ0E7Q0FDQyxVQUFVO0FBQ1g7O0FBQ0E7Q0FDQyxpQkFBaUI7QUFDbEI7O0FBQ0E7Q0FDQyxhQUFhO0FBQ2Q7O0FBRUE7Q0FDQyxrQkFBa0I7QUFDbkIsTUFBTTs7QUFFTixXQUFXOztBQUVYLGVBQWU7O0FBRWYsVUFBVTtBQUNWOztBQUNBO0NBQ0Msa0JBQWtCOztBQUVuQixzQkFBbUI7O0dBQW5CLG1CQUFtQjs7QUFFbkIsYUFBYTs7QUFFYixXQUFXOztBQUVYLFNBQVM7QUFDVDs7QUFDQTtDQUNDLGFBQWE7O0FBRWQsa0JBQWtCOztBQUVsQixTQUFTOztBQUVULFVBQVU7QUFDVjs7QUFFQTtDQUNDLGFBQWE7O0NBRWIsa0JBQWtCOztDQUVsQixTQUFTOztDQUVULFVBQVU7O0NBRVYscUNBQTZCOztTQUE3Qiw2QkFBNkI7Q0FDN0IsOEJBQXNCO1NBQXRCLHNCQUFzQjtDQUN0QiwyQ0FBbUM7U0FBbkMsbUNBQW1DOztBQUVwQzs7QUFDQTtDQUNDLGtCQUFrQjtDQUNsQixVQUFVO0NBQ1YsZUFBZTtDQUNmLFdBQVc7QUFDWjs7QUFDQTtDQUNDLFVBQVU7Q0FDVixlQUFlO0NBQ2YsaUNBQWlDO0NBQ2pDLFdBQVc7Q0FDWCxZQUFZO0NBQ1osYUFBYTtDQUNiLHNCQUFzQjtDQUN0QixtQkFBbUI7Q0FDbkIsc0JBQXNCOztBQUV2Qjs7QUFDQTtDQUNDLGVBQWU7Q0FDZixXQUFXO0FBQ1o7O0FBQ0E7O0NBRUMsZUFBZTs7QUFFaEIsYUFBYTtBQUNiOztBQUNBO0NBQ0MsY0FBYztDQUNkLGFBQWE7QUFDZDs7QUFDQTtDQUNDLGFBQWE7QUFDZDs7QUFDQTtDQUNDO0VBQ0MsNEJBQW9CO1VBQXBCLG9CQUFvQjtDQUNyQjtDQUNBO0VBQ0MsaUNBQXlCO1VBQXpCLHlCQUF5QjtDQUMxQjtBQUNEOztBQVBBO0NBQ0M7RUFDQyw0QkFBb0I7VUFBcEIsb0JBQW9CO0NBQ3JCO0NBQ0E7RUFDQyxpQ0FBeUI7VUFBekIseUJBQXlCO0NBQzFCO0FBQ0QiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xuIHdpZHRoOiAxMDAlO1xuIGhlaWdodDogMTAwJTtcbiBkaXNwbGF5OiBmbGV4O1xuIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gcG9zaXRpb246IHJlbGF0aXZlO1xuXG59XG5cbi5jb250YWluZXItaGVhZGVyIHtcbiBmb250LXNpemU6IDV2dztcbiBwYWRkaW5nOiAxNXB4O1xuIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuIHotaW5kZXg6IDQ7XG59XG5cbi5iYW5nIHtcbiBwb3NpdGlvbjogYWJzb2x1dGU7XG4gdG9wOiAzMHB4O1xuIGxlZnQ6IDIwcHg7IFxuIGhlaWdodDogMjUwcHg7IFxuIGJvcmRlci1yYWRpdXM6IDUwJTtcbiBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG4gdHJhbnNpdGlvbjogMXMgbGluZWFyO1xuIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XG59XG4uYmFuZzo6YWZ0ZXJ7XG4gcG9zaXRpb246YWJzb2x1dGU7XG4gY29udGVudDonSG92ZXIgZm9yIGJlYXJkZWQgYXBvb3J2YSc7XG4gd2lkdGg6IDEwcHg7XG4gbGVmdDowO1xuIGJvdHRvbTogLTEwcHg7XG5cbn1cbi5iZWFyZCB7XG4gcG9zaXRpb246IGFic29sdXRlO1xuIHRvcDogMzBweDtcbiBsZWZ0OiAyMHB4OyBcbiBoZWlnaHQ6IDI1MHB4OyBcbiBib3JkZXItcmFkaXVzOiA1MCU7XG4gb3BhY2l0eTogMDtcbiB0cmFuc2l0aW9uOiAxcyBsaW5lYXI7XG5cbn1cbi5iYW5nOmhvdmVye1xuIG9wYWNpdHk6IDA7XG59XG4uYmVhcmQ6aG92ZXJ7XG4gb3BhY2l0eTogMTtcbn1cbi5jdXRlLWFwb29ydmEge1xuIHotaW5kZXg6IDM7XG59XG4uY3V0ZS1naXJsIHtcbiBtYXJnaW4tbGVmdDogMjBweDtcbn1cbi5jdXRlIHtcbiBkaXNwbGF5OiBub25lO1xufVxuXG4uZG8tbm90LWhvdmVyIHtcbiBwb3NpdGlvbjogYWJzb2x1dGU7XG50b3A6IDA7XG5cbmxlZnQ6IDMwMHB4O1xuXG5mb250LXNpemU6IDUwcHg7XG5cbmNvbG9yOiByZWQ7XG59XG4ucGhvbmVjYWxsIHtcbiBwb3NpdGlvbjogYWJzb2x1dGU7XG5cbm9iamVjdC1maXQ6IGNvbnRhaW47XG5cbmhlaWdodDogNDAwcHg7XG5cbnJpZ2h0OiA4MHB4O1xuXG50b3A6IDMwcHg7XG59XG4uYmVzdGdpcmwge1xuIGhlaWdodDogMzc1cHg7XG5cbnBvc2l0aW9uOiBhYnNvbHV0ZTtcblxuYm90dG9tOiAwO1xuXG5sZWZ0OiA1MHB4O1xufVxuXG4uY3V0ZWJhYnkge1xuIGhlaWdodDogMjI1cHg7XG5cbiBwb3NpdGlvbjogYWJzb2x1dGU7XG4gXG4gYm90dG9tOiAwO1xuIFxuIHJpZ2h0OiA1MCU7XG4gXG4gYW5pbWF0aW9uLW5hbWU6IHJvdGF0ZS1hcm91bmQ7XG4gYW5pbWF0aW9uLWR1cmF0aW9uOiAzcztcbiBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcblxufVxuLnN1cnZleSB7XG4gcG9zaXRpb246IGFic29sdXRlO1xuIHRvcDogMjAwcHg7XG4gZm9udC1zaXplOiAzMHB4O1xuIGNvbG9yOiBibHVlO1xufVxuLmFjdHVhbC1zdXJ2ZXkge1xuIHotaW5kZXg6IDU7XG4gcG9zaXRpb246IGZpeGVkO1xuIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC40KTtcbiB3aWR0aDogMTAwJTtcbiBoZWlnaHQ6IDEwMCU7XG4gZGlzcGxheTogZmxleDtcbiBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xuIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblxufVxuLmFjdHVhbC1zdXJ2ZXkgbGFiZWwge1xuIGZvbnQtc2l6ZTogNTBweDtcbiBjb2xvcjogYmx1ZTtcbn1cbi5hY3R1YWwtc3VydmV5IGgxIHtcblxuIGZvbnQtc2l6ZTogNTBweDtcblxuY29sb3I6IE9SQU5HRTtcbn1cbi5jb29sIHtcbiBkaXNwbGF5OiBibG9jaztcbiBoZWlnaHQ6IDUwMHB4O1xufVxuLnN1cnZleS1vcGVuIHtcbiBkaXNwbGF5OiBub25lO1xufVxuQGtleWZyYW1lcyByb3RhdGUtYXJvdW5kIHtcbiBmcm9tIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMCk7XG4gfVxuIHRvIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiB9XG59Il19 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.cuteOpened = true;
        this.surveyOpened = true;
        this.title = 'timer';
        this.end = new Date("August 21, 2019 15:37:25").getTime();
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.time = this.getNew();
        window.setInterval(function () {
            _this.getNew();
        }, 1000);
    };
    AppComponent.prototype.getNew = function () {
        var now = new Date().getTime();
        // Find the distance between now and the count down date
        var distance = this.end - now;
        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        // Display the result in the element with id="demo"
        this.time = days + "d " + hours + "h "
            + minutes + "m " + seconds + "s ";
    };
    AppComponent.prototype.toggleCute = function () {
        this.cuteOpened = !this.cuteOpened;
    };
    AppComponent.prototype.toggleSurvey = function () {
        this.surveyOpened = !this.surveyOpened;
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");




var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/chrisphan/Work/timer/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map