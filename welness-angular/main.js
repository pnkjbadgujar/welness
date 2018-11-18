(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"src/app/admin/admin.module": [
		"./src/app/admin/admin.module.ts",
		"src-app-admin-admin-module"
	],
	"src/app/customer/customer.module": [
		"./src/app/customer/customer.module.ts",
		"src-app-customer-customer-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return __webpack_require__.e(ids[1]).then(function() {
		var module = __webpack_require__(ids[0]);
		return module;
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_components_login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/components/login/login.component */ "./src/app/shared/components/login/login.component.ts");
/* harmony import */ var _shared_components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/components/page-not-found/page-not-found.component */ "./src/app/shared/components/page-not-found/page-not-found.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _guards_admin_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./guards/admin.guard */ "./src/app/guards/admin.guard.ts");
/* harmony import */ var _shared_components_logout_logout_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/components/logout/logout.component */ "./src/app/shared/components/logout/logout.component.ts");
/* harmony import */ var _shared_components_verify_account_verify_account_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/components/verify-account/verify-account.component */ "./src/app/shared/components/verify-account/verify-account.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    {
        path: '',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"]
    },
    {
        path: 'login',
        component: _shared_components_login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"]
    },
    {
        path: 'verify_email',
        component: _shared_components_verify_account_verify_account_component__WEBPACK_IMPORTED_MODULE_7__["VerifyAccountComponent"]
    },
    {
        path: 'logout',
        component: _shared_components_logout_logout_component__WEBPACK_IMPORTED_MODULE_6__["LogoutComponent"]
    },
    {
        path: 'admin',
        loadChildren: 'src/app/admin/admin.module#AdminModule',
        canLoad: [_guards_admin_guard__WEBPACK_IMPORTED_MODULE_5__["AdminGuard"]]
    },
    {
        path: 'customer',
        loadChildren: 'src/app/customer/customer.module#CustomerModule',
    },
    {
        path: '',
        redirectTo: '',
        pathMatch: 'full'
    },
    { path: '**', component: _shared_components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_3__["PageNotFoundComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ngx-loading-bar></ngx-loading-bar>\n<app-alert></app-alert>\n<router-outlet></router-outlet>\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-bootstrap/utils */ "./node_modules/ngx-bootstrap/utils/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        Object(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["setTheme"])('bs3');
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")],
        }),
        __metadata("design:paramtypes", [])
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _http_interceptors_error_interceptor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./http-interceptors/error-interceptor */ "./src/app/http-interceptors/error-interceptor.ts");
/* harmony import */ var _http_interceptors_auth_interceptor__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./http-interceptors/auth-interceptor */ "./src/app/http-interceptors/auth-interceptor.ts");
/* harmony import */ var _guards_admin_guard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./guards/admin.guard */ "./src/app/guards/admin.guard.ts");
/* harmony import */ var _ngx_loading_bar_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-loading-bar/core */ "./node_modules/@ngx-loading-bar/core/esm5/ngx-loading-bar-core.js");
/* harmony import */ var _home_banner_banner_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./home/banner/banner.component */ "./src/app/home/banner/banner.component.ts");
/* harmony import */ var _home_footer_footer_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./home/footer/footer.component */ "./src/app/home/footer/footer.component.ts");
/* harmony import */ var _home_how_it_works_how_it_works_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./home/how-it-works/how-it-works.component */ "./src/app/home/how-it-works/how-it-works.component.ts");
/* harmony import */ var _home_popular_services_popular_services_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./home/popular-services/popular-services.component */ "./src/app/home/popular-services/popular-services.component.ts");
/* harmony import */ var _home_customer_reviews_customer_reviews_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./home/customer-reviews/customer-reviews.component */ "./src/app/home/customer-reviews/customer-reviews.component.ts");
/* harmony import */ var _home_search_results_search_results_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./home/search-results/search-results.component */ "./src/app/home/search-results/search-results.component.ts");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var _cart_cart_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./cart/cart.module */ "./src/app/cart/cart.module.ts");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
                _home_banner_banner_component__WEBPACK_IMPORTED_MODULE_12__["BannerComponent"],
                _home_footer_footer_component__WEBPACK_IMPORTED_MODULE_13__["FooterComponent"],
                _home_how_it_works_how_it_works_component__WEBPACK_IMPORTED_MODULE_14__["HowItWorksComponent"],
                _home_popular_services_popular_services_component__WEBPACK_IMPORTED_MODULE_15__["PopularServicesComponent"],
                _home_customer_reviews_customer_reviews_component__WEBPACK_IMPORTED_MODULE_16__["CustomerReviewsComponent"],
                _home_search_results_search_results_component__WEBPACK_IMPORTED_MODULE_17__["SearchResultsComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
                _cart_cart_module__WEBPACK_IMPORTED_MODULE_19__["CartModule"],
                _ngx_loading_bar_core__WEBPACK_IMPORTED_MODULE_11__["LoadingBarModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_18__["BsDropdownModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_18__["ModalModule"].forRoot(),
                _agm_core__WEBPACK_IMPORTED_MODULE_20__["AgmCoreModule"].forRoot({
                    apiKey: 'AIzaSyAQuTIVuHYtsYqpjnDs_jxWl42d3485d-w'
                })
            ],
            entryComponents: [
                _home_search_results_search_results_component__WEBPACK_IMPORTED_MODULE_17__["SearchResultsComponent"],
            ],
            providers: [
                _guards_admin_guard__WEBPACK_IMPORTED_MODULE_10__["AdminGuard"],
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HTTP_INTERCEPTORS"], useClass: _http_interceptors_auth_interceptor__WEBPACK_IMPORTED_MODULE_9__["AuthInterceptor"], multi: true },
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HTTP_INTERCEPTORS"], useClass: _http_interceptors_error_interceptor__WEBPACK_IMPORTED_MODULE_8__["ErrorInterceptor"], multi: true },
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/cart/cart-item/cart-item.component.css":
/*!********************************************************!*\
  !*** ./src/app/cart/cart-item/cart-item.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".service-card-right-arrow {\n  position: absolute;\n  right: 30px;\n  cursor: pointer;\n  color: #959595;\n}\n\n.service-card-title {\n}\n\n.service-card-header {\n  font-size: medium;\n  font-weight: bold;\n  padding: 10px\n}\n\n.service-card-body {\n\n}\n\n.thumbnail {\n  cursor: pointer;\n  margin-bottom: 10px;\n  padding: 0;\n}\n\n.thumbnail:hover {\n  border: 1px solid red;\n  box-shadow: 0 0 1px 1px red;\n}\n\n.thumbnail.active {\n  border: 1px solid red;\n}\n\n.service-card-footer {\n  /*background-color: #ddd;*/\n  /*padding: 10px;*/\n  display: flex;\n  height: 62px;\n  background-color: #f9f9f9;\n  padding: 0 16px;\n  align-items: center;\n}\n\nul li {\n  color: #959595;\n}\n\n.add-cart-button {\n  width: 72px;\n  height: 28px;\n  border-radius: 2px;\n  border: 2px solid #fd5c63;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.add-cart-button-title-1 {\n  font-size: 14px;\n  font-weight: 500;\n  line-height: 1.43;\n  color: #fd5c63;\n  height: calc(100% - 2px);\n  flex: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: #fff;\n}\n\n.add-cart-button-plus {\n  width: 22px;\n  display: flex;\n  font-size: 15px;\n  justify-content: center;\n  color: #fd5c63;\n  background-color: #f0f0f0;\n  font-weight: 500;\n  height: 100%;\n}\n\n.original-price {\n  text-decoration: line-through;\n  font-size: 14px;\n  color: #bdbdbd;\n  line-height: 24px;\n}\n\n.price-container {\n  display: flex;\n  flex-wrap: wrap;\n  flex: 1;\n  width: 104px;\n  flex-direction: row;\n}\n\n.given-price {\n  margin-left: 10px;\n  font-size: 18px;\n  line-height: 24px;\n}\n\n.add-cart-button-plus-red {\n  background-color: #fd5c63;\n  color: #f0f0f0;\n}\n"

/***/ }),

/***/ "./src/app/cart/cart-item/cart-item.component.html":
/*!*********************************************************!*\
  !*** ./src/app/cart/cart-item/cart-item.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"thumbnail\">\n  <div class=\"service-card-header\">\n    <span class=\"service-card-title\">hello</span>\n    <span class=\"service-card-right-arrow\">\n            <i class=\"glyphicon glyphicon-circle-arrow-right\"></i>\n          </span>\n  </div>\n  <div class=\"service-card-body\">\n    <ul>\n      <li>Some service</li>\n      <li>Some service</li>\n      <li>Some service</li>\n    </ul>\n  </div>\n  <div class=\"service-card-footer\">\n    <div class=\"price-container\">\n      <div class=\"original-price\">Rs 630</div>\n      <div class=\"given-price\">Rs 558</div>\n    </div>\n    <div>\n      <div class=\"add-cart-button\" *ngIf=\"quantity === 0\" (click)=\"changeQuantity('up')\">\n        <div class=\"add-cart-button-title-1\">Add</div>\n        <div class=\"add-cart-button-plus\">+</div>\n      </div>\n      <div class=\"add-cart-button\" *ngIf=\"quantity > 0\">\n        <div class=\"add-cart-button-plus add-cart-button-plus-red\" (click)=\"changeQuantity('down')\">-</div>\n        <div class=\"add-cart-button-title-1\">{{ quantity }}</div>\n        <div class=\"add-cart-button-plus add-cart-button-plus-red\" (click)=\"changeQuantity('up')\">+</div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/cart/cart-item/cart-item.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/cart/cart-item/cart-item.component.ts ***!
  \*******************************************************/
/*! exports provided: CartItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartItemComponent", function() { return CartItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CartItemComponent = /** @class */ (function () {
    function CartItemComponent() {
        this.quantity = 0;
    }
    CartItemComponent.prototype.ngOnInit = function () {
    };
    CartItemComponent.prototype.changeQuantity = function (action) {
        if (action === 'up') {
            this.quantity += 1;
        }
        else if (action === 'down') {
            this.quantity -= 1;
        }
    };
    CartItemComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cart-item',
            template: __webpack_require__(/*! ./cart-item.component.html */ "./src/app/cart/cart-item/cart-item.component.html"),
            styles: [__webpack_require__(/*! ./cart-item.component.css */ "./src/app/cart/cart-item/cart-item.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CartItemComponent);
    return CartItemComponent;
}());



/***/ }),

/***/ "./src/app/cart/cart.module.ts":
/*!*************************************!*\
  !*** ./src/app/cart/cart.module.ts ***!
  \*************************************/
/*! exports provided: CartModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartModule", function() { return CartModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _cart_item_cart_item_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cart-item/cart-item.component */ "./src/app/cart/cart-item/cart-item.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CartModule = /** @class */ (function () {
    function CartModule() {
    }
    CartModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
            ],
            exports: [
                _cart_item_cart_item_component__WEBPACK_IMPORTED_MODULE_2__["CartItemComponent"]
            ],
            declarations: [_cart_item_cart_item_component__WEBPACK_IMPORTED_MODULE_2__["CartItemComponent"]]
        })
    ], CartModule);
    return CartModule;
}());



/***/ }),

/***/ "./src/app/guards/admin.guard.ts":
/*!***************************************!*\
  !*** ./src/app/guards/admin.guard.ts ***!
  \***************************************/
/*! exports provided: AdminGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminGuard", function() { return AdminGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AdminGuard = /** @class */ (function () {
    function AdminGuard(router, auth) {
        this.router = router;
        this.auth = auth;
    }
    AdminGuard.prototype.canLoad = function (route) {
        var url = route.path;
        console.log('Url:' + url);
        if (this.auth.isAdmin()) {
            return true;
        }
        this.router.navigate(['/login'], { queryParams: { returnUrl: url } });
        return false;
    };
    AdminGuard.prototype.canActivate = function (route, state) {
        if (this.auth.isAdmin()) {
            // logged in so return true
            return true;
        }
        // not logged in so redirect to login page with the return url
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
        return false;
    };
    AdminGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], AdminGuard);
    return AdminGuard;
}());



/***/ }),

/***/ "./src/app/home/banner/banner.component.css":
/*!**************************************************!*\
  !*** ./src/app/home/banner/banner.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Container holding the image and the text */\n.container-fluid {\n  position: relative;\n  text-align: center;\n  color: black;\n  padding: 0;\n  height: 380px;\n}\n.banner-img {\n  height: 380px;\n  width:100%;\n}\n.banner-title {\n  position: absolute;\n  top:0;\n  left: 0;\n  right: 0;\n}\n/* Bottom left text */\n.bottom-left {\n  position: absolute;\n  bottom: 8px;\n  left: 16px;\n}\n/* Top left text */\n.top-left {\n  position: absolute;\n  top: 8px;\n  left: 16px;\n}\n/* Top right text */\n.top-right {\n  position: absolute;\n  top: 8px;\n  right: 16px;\n}\n/* Bottom right text */\n.bottom-right {\n  position: absolute;\n  bottom: 8px;\n  right: 16px;\n}\n/* Centered text */\n.centered {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n}\n.banner-tag-line {\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 80px;\n}\n.banner-tag-line span {\n  font-size: 20px;\n}\n.search-box {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  right: 10%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n}\n.dropdown-menu {\n  min-width: 100%;\n  margin: 0;\n  max-height: 380px;\n  overflow-y: scroll;\n}\n@media screen and (max-width: 480px) {\n  .banner-title h1{\n    font-size: 24px;\n  }\n\n  .banner-tag-line span {\n    font-size: 18px;\n  }\n\n  .search-box {\n    left: 50%;\n    top: 50%;\n    right: -40%;\n  }\n}\n\n\n"

/***/ }),

/***/ "./src/app/home/banner/banner.component.html":
/*!***************************************************!*\
  !*** ./src/app/home/banner/banner.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <img src=\"../../../assets/images/banner.jpg\" class=\"banner-img\" alt=\"Snow\">\n  <div class=\"banner-title\"><h1>{{ bannerTitle }}</h1></div>\n  <div class=\"banner-tag-line\"><span>{{ bannerTagLine }}</span></div>\n  <div class=\"search-box\">\n    <div class=\"row\">\n      <div class=\"col-xs-12 col-sm-12 col-lg-4\">\n        <div class=\"dropdown\">\n          <button style=\"padding: 10px;\" class=\"btn btn-block btn-default dropdown-toggle\" type=\"button\" data-toggle=\"dropdown\">{{ selectedLocation.name }}\n            <span class=\"caret\"></span></button>\n          <ul class=\"dropdown-menu\">\n            <li *ngFor=\"let loc of locationList\"><a>{{ loc.name }}</a></li>\n          </ul>\n        </div>\n      </div>\n      <div class=\"col-xs-12 col-sm-12 col-lg-8\">\n        <div class=\"dropdown\" dropdown>\n          <div class=\"input-group dropdown-toggle\" dropdownToggle>\n            <!--(focusout)=\"isSearchOpen=false\"-->\n            <input style=\"height: 42px;\" type=\"text\" (keyup)=\"this.searchTerm$.next($event.target.value)\" class=\"form-control\" placeholder=\"Search for a service\"\n                   (focus)=\"isSearchOpen=true\">\n            <span class=\"input-group-addon\" style=\"background-color: #ffffff;\"><i class=\"glyphicon glyphicon-search\"></i></span>\n          </div>\n          <ul class=\"dropdown-menu\" *dropdownMenu>\n            <li *ngFor=\"let item of searchItemList\"><a (click)=\"searchResult()\">{{ item.name }}</a></li>\n          </ul>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/home/banner/banner.component.ts":
/*!*************************************************!*\
  !*** ./src/app/home/banner/banner.component.ts ***!
  \*************************************************/
/*! exports provided: BannerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BannerComponent", function() { return BannerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_category_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/category.service */ "./src/app/services/category.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var _search_results_search_results_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../search-results/search-results.component */ "./src/app/home/search-results/search-results.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var BannerComponent = /** @class */ (function () {
    function BannerComponent(categoryService, bsModalService) {
        this.categoryService = categoryService;
        this.bsModalService = bsModalService;
        this.isAlive = true;
        this.selectedLocation = { name: 'Pune', id: 1 };
        this.locationList = [
            { name: 'Pune', id: 1 },
            { name: 'Delhi', id: 2 },
            { name: 'Nashik', id: 3 },
            { name: 'Banglore', id: 4 },
            { name: 'Nagpur', id: 5 },
            { name: 'Aurangabad', id: 6 },
        ];
        this.searchItemList = [
            { name: 'Pune', id: 1 },
            { name: 'Delhi', id: 2 },
            { name: 'Nashik', id: 3 },
            { name: 'Banglore', id: 4 },
            { name: 'Nagpur', id: 5 },
            { name: 'Aurangabad', id: 6 },
        ];
        this.searchTerm$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
    }
    BannerComponent.prototype.ngOnInit = function () {
        this.getCategoryList();
        this.searchTerm$.next();
        this.bannerTitle = 'SAMPLE TEXT FOR WELLNESS';
        this.bannerTagLine = 'Get instant access to reliable and affordable services';
        this.getCategoryList();
    };
    BannerComponent.prototype.searchResult = function () {
        this.bsModalRef = this.bsModalService.show(_search_results_search_results_component__WEBPACK_IMPORTED_MODULE_5__["SearchResultsComponent"], {
            ignoreBackdropClick: true, class: 'modal-lg full-width-modal'
        });
    };
    BannerComponent.prototype.getCategoryList = function () {
        var _this = this;
        this.categoryService.search(this.searchTerm$)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data) { return data.result; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeWhile"])(function () { return _this.isAlive; }))
            .subscribe(function (data) {
            _this.searchItemList = data;
        });
    };
    BannerComponent.prototype.ngOnDestroy = function () { this.isAlive = false; };
    BannerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-banner',
            template: __webpack_require__(/*! ./banner.component.html */ "./src/app/home/banner/banner.component.html"),
            styles: [__webpack_require__(/*! ./banner.component.css */ "./src/app/home/banner/banner.component.css")]
        }),
        __metadata("design:paramtypes", [_services_category_service__WEBPACK_IMPORTED_MODULE_1__["CategoryService"], ngx_bootstrap__WEBPACK_IMPORTED_MODULE_4__["BsModalService"]])
    ], BannerComponent);
    return BannerComponent;
}());



/***/ }),

/***/ "./src/app/home/customer-reviews/customer-reviews.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/home/customer-reviews/customer-reviews.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/customer-reviews/customer-reviews.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/home/customer-reviews/customer-reviews.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  customer-reviews works!\n</p>\n"

/***/ }),

/***/ "./src/app/home/customer-reviews/customer-reviews.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/home/customer-reviews/customer-reviews.component.ts ***!
  \*********************************************************************/
/*! exports provided: CustomerReviewsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerReviewsComponent", function() { return CustomerReviewsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CustomerReviewsComponent = /** @class */ (function () {
    function CustomerReviewsComponent() {
    }
    CustomerReviewsComponent.prototype.ngOnInit = function () {
    };
    CustomerReviewsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-customer-reviews',
            template: __webpack_require__(/*! ./customer-reviews.component.html */ "./src/app/home/customer-reviews/customer-reviews.component.html"),
            styles: [__webpack_require__(/*! ./customer-reviews.component.css */ "./src/app/home/customer-reviews/customer-reviews.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CustomerReviewsComponent);
    return CustomerReviewsComponent;
}());



/***/ }),

/***/ "./src/app/home/footer/footer.component.css":
/*!**************************************************!*\
  !*** ./src/app/home/footer/footer.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".bg-4 {\n  background-color: #2f2f2f; /* Black Gray */\n  color: #fff;\n}\n\n.container-fluid {\n  padding-top: 70px;\n  padding-bottom: 70px;\n}\n"

/***/ }),

/***/ "./src/app/home/footer/footer.component.html":
/*!***************************************************!*\
  !*** ./src/app/home/footer/footer.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"container-fluid bg-4 text-center\">\n\n</footer>\n"

/***/ }),

/***/ "./src/app/home/footer/footer.component.ts":
/*!*************************************************!*\
  !*** ./src/app/home/footer/footer.component.ts ***!
  \*************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/home/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/home/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "main {\n  margin-top: 50px;\n}\n"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-fixed-top\">\n  <div class=\"container\">\n    <div class=\"navbar-header\">\n      <a class=\"navbar-brand\" routerLink=\"/\">Click Eazy</a>\n    </div>\n    <div class=\"navbar-collapse collapse\">\n      <ul class=\"nav navbar-nav navbar-right\">\n        <li appIsAuthenticated><a (click)=\"userSignUp()\"><span class=\"glyphicon glyphicon-user\"></span> Sign Up</a></li>\n        <li appIsAuthenticated><a (click)=\"userLogin()\"><span class=\"glyphicon glyphicon-log-in\"></span> Login</a></li>\n        <li appAuthenticated><a routerLink=\"/logout\"><span class=\"glyphicon glyphicon-log-in\"></span> Logout</a></li>\n      </ul>\n    </div>\n  </div>\n</nav>\n<main>\n  <app-banner></app-banner>\n  <app-how-it-works></app-how-it-works>\n  <app-popular-services></app-popular-services>\n  <app-customer-reviews></app-customer-reviews>\n  <section class=\"container\">\n    <div class=\"clearfix well\">\n      <div class=\"pull-left\">\n      <h2 style=\"margin: 10px 0 0 0;font-size: x-large;\">Are you a professional looking to grow your service business?</h2>\n      </div>\n      <div class=\"pull-right\">\n        <!--href=\"#\" target=\"_blank\"-->\n        <a class=\"btn btn-primary btn-lg ripple\">Join Now</a>\n      </div>\n    </div>\n  </section>\n</main>\n<app-footer></app-footer>\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var _shared_components_user_sign_up_user_sign_up_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/components/user-sign-up/user-sign-up.component */ "./src/app/shared/components/user-sign-up/user-sign-up.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomeComponent = /** @class */ (function () {
    function HomeComponent(bsModalService, router) {
        this.bsModalService = bsModalService;
        this.router = router;
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.ngOnDestroy = function () {
        if (this.bsModalRef) {
            this.bsModalRef.hide();
        }
    };
    HomeComponent.prototype.userSignUp = function () {
        this.bsModalRef = this.bsModalService.show(_shared_components_user_sign_up_user_sign_up_component__WEBPACK_IMPORTED_MODULE_2__["UserSignUpComponent"], { ignoreBackdropClick: true, class: 'modal-md' });
    };
    HomeComponent.prototype.userLogin = function () {
        this.router.navigate(['/login']);
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [ngx_bootstrap__WEBPACK_IMPORTED_MODULE_1__["BsModalService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/home/how-it-works/how-it-works.component.css":
/*!**************************************************************!*\
  !*** ./src/app/home/how-it-works/how-it-works.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".flex-container {\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  flex-wrap: wrap;\n}\n\n.flex-container > div {\n  width: 360px;\n  border: 1px solid #ddd;\n  margin: 10px 15px;\n  padding: 10px;\n}\n"

/***/ }),

/***/ "./src/app/home/how-it-works/how-it-works.component.html":
/*!***************************************************************!*\
  !*** ./src/app/home/how-it-works/how-it-works.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"text-center\">\n<h3>Customer Reviews</h3>\n</div>\n<div class=\"flex-container\">\n  <div>\n    <div>\n      <img src=\"../../../assets/images/customer-avatar.png\" width=\"100\" height=\"100\" alt=\"...\">\n    </div>\n    <hr>\n    <div></div>\n  </div>\n   <div>\n    <div>\n      <img src=\"../../../assets/images/customer-avatar.png\" width=\"100\" height=\"100\" alt=\"...\">\n    </div>\n    <hr>\n    <div></div>\n  </div>\n   <div>\n    <div>\n      <img src=\"../../../assets/images/customer-avatar.png\" width=\"100\" height=\"100\" alt=\"...\">\n    </div>\n    <hr>\n    <div></div>\n  </div>\n</div>\n\n<!--<div class=\"container\">-->\n  <!--<div class=\"text-center\">-->\n    <!--<h3>Customer Reviews</h3>-->\n  <!--</div>-->\n  <!--<div class=\"row\">-->\n    <!--<div class=\"col-sm-6 col-md-4\">-->\n      <!--<div class=\"thumbnail\">-->\n        <!--<div class=\"row\">-->\n          <!--<div class=\"col-sm-4 img-rounded\">-->\n            <!--<img src=\"../../../assets/images/customer-avatar.png\" width=\"100\" height=\"100\" alt=\"...\">-->\n          <!--</div>-->\n          <!--<div class=\"col-sm-8\">-->\n            <!--<h3>Thumbnail label</h3>-->\n          <!--</div>-->\n        <!--</div>-->\n        <!--<hr>-->\n        <!--<div class=\"caption\">-->\n          <!--<p>Hired #stockblockframes as wedding photographer…Great resource through #UrbanClap</p>-->\n        <!--</div>-->\n      <!--</div>-->\n    <!--</div>-->\n    <!--<div class=\"col-sm-6 col-md-4\">-->\n      <!--<div class=\"thumbnail\">-->\n        <!--<div class=\"row\">-->\n          <!--<div class=\"col-sm-4 img-rounded\">-->\n            <!--<img src=\"../../../assets/images/customer-avatar.png\" width=\"100\" height=\"100\" alt=\"...\">-->\n          <!--</div>-->\n          <!--<div class=\"col-sm-8\">-->\n            <!--<h3>Thumbnail label</h3>-->\n          <!--</div>-->\n        <!--</div>-->\n        <!--<hr>-->\n        <!--<div class=\"caption\">-->\n          <!--<p>Hired #stockblockframes as wedding photographer…Great resource through #UrbanClap</p>-->\n        <!--</div>-->\n      <!--</div>-->\n    <!--</div>-->\n    <!--<div class=\"col-sm-6 col-md-4\">-->\n      <!--<div class=\"thumbnail\">-->\n        <!--<div class=\"row\">-->\n          <!--<div class=\"col-sm-4 img-rounded\">-->\n            <!--<img src=\"../../../assets/images/customer-avatar.png\" width=\"100\" height=\"100\" alt=\"...\">-->\n          <!--</div>-->\n          <!--<div class=\"col-sm-8\">-->\n            <!--<h3>Thumbnail label</h3>-->\n          <!--</div>-->\n        <!--</div>-->\n        <!--<hr>-->\n        <!--<div class=\"caption\">-->\n          <!--<p>Hired #stockblockframes as wedding photographer…Great resource through #UrbanClap</p>-->\n        <!--</div>-->\n      <!--</div>-->\n    <!--</div>-->\n  <!--</div>-->\n<!--</div>-->\n"

/***/ }),

/***/ "./src/app/home/how-it-works/how-it-works.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/home/how-it-works/how-it-works.component.ts ***!
  \*************************************************************/
/*! exports provided: HowItWorksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HowItWorksComponent", function() { return HowItWorksComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HowItWorksComponent = /** @class */ (function () {
    function HowItWorksComponent() {
    }
    HowItWorksComponent.prototype.ngOnInit = function () {
    };
    HowItWorksComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-how-it-works',
            template: __webpack_require__(/*! ./how-it-works.component.html */ "./src/app/home/how-it-works/how-it-works.component.html"),
            styles: [__webpack_require__(/*! ./how-it-works.component.css */ "./src/app/home/how-it-works/how-it-works.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HowItWorksComponent);
    return HowItWorksComponent;
}());



/***/ }),

/***/ "./src/app/home/popular-services/popular-services.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/home/popular-services/popular-services.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/popular-services/popular-services.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/home/popular-services/popular-services.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  popular-services works!\n</p>\n"

/***/ }),

/***/ "./src/app/home/popular-services/popular-services.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/home/popular-services/popular-services.component.ts ***!
  \*********************************************************************/
/*! exports provided: PopularServicesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopularServicesComponent", function() { return PopularServicesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PopularServicesComponent = /** @class */ (function () {
    function PopularServicesComponent() {
    }
    PopularServicesComponent.prototype.ngOnInit = function () {
    };
    PopularServicesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-popular-services',
            template: __webpack_require__(/*! ./popular-services.component.html */ "./src/app/home/popular-services/popular-services.component.html"),
            styles: [__webpack_require__(/*! ./popular-services.component.css */ "./src/app/home/popular-services/popular-services.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PopularServicesComponent);
    return PopularServicesComponent;
}());



/***/ }),

/***/ "./src/app/home/search-results/search-results.component.css":
/*!******************************************************************!*\
  !*** ./src/app/home/search-results/search-results.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".modal-footer {\n  background-color: #fbfbfb;\n  padding: 5px 15px;\n}\n\n.modal-header {\n  font-size: large;\n  text-align: center;\n  background-color: #fbfbfb;\n}\n\n.modal-body {\n  padding: 0 15px;\n}\n\nagm-map {\n  height: 300px;\n}\n\n.checkout-box {\n  background-color: #bdbdbd;\n  border-radius: 5px;\n  width: 304px;\n  padding: 15px 10px;\n  cursor: pointer;\n  color: #ddd;\n  display: table;\n}\n\n.checkout-box.active {\n  background-color: #304ffe;\n  color: white;\n}\n\n.checkout-box > div {\n  display: table-cell;\n  vertical-align: middle;\n}\n\n.cart-quantity {\n  border: 1px solid #ddd;\n  text-align: center;\n}\n"

/***/ }),

/***/ "./src/app/home/search-results/search-results.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/home/search-results/search-results.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\n  <span>Salon at Home</span>\n  <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"bsModalRef.hide()\">\n    <span aria-hidden=\"true\">&times;</span>\n  </button>\n</div>\n<div class=\"modal-body\">\n    <div class=\"row\">\n      <div class=\"col-sm-4\" style=\"overflow-y: auto;height: 83vh;\">\n      <div style=\"margin-top: 10px;\">\n        <app-cart-item></app-cart-item>\n        <app-cart-item></app-cart-item>\n        <app-cart-item></app-cart-item>\n        <app-cart-item></app-cart-item>\n        <app-cart-item></app-cart-item>\n        <app-cart-item></app-cart-item>\n        <app-cart-item></app-cart-item>\n        <app-cart-item></app-cart-item>\n        <app-cart-item></app-cart-item>\n      </div>\n    </div>\n    <div class=\"col-sm-8\">\n      <!-- this creates a google map on the page with the given lat/lng from -->\n      <!-- the component as the initial center of the map: -->\n      <agm-map [latitude]=\"lat\" [longitude]=\"lng\">\n        <agm-marker [latitude]=\"lat\" [longitude]=\"lng\"></agm-marker>\n      </agm-map>\n    </div>\n    </div>\n</div>\n<div class=\"modal-footer\">\n <div class=\"checkout-box pull-right active\">\n   <div style=\"width: 38px;\">\n     <div class=\"cart-quantity\">0</div>\n   </div>\n   <div style=\"text-align: left;display: list-item;margin-left: 25px;\">Rs. 0</div>\n   <div style=\"width: 100px;\">Continue <i class=\"glyphicon glyphicon-arrow-right\"></i></div>\n  </div>\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/home/search-results/search-results.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/home/search-results/search-results.component.ts ***!
  \*****************************************************************/
/*! exports provided: SearchResultsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchResultsComponent", function() { return SearchResultsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SearchResultsComponent = /** @class */ (function () {
    function SearchResultsComponent(bsModalRef) {
        this.bsModalRef = bsModalRef;
        this.title = 'welness';
        this.lat = 51.678418;
        this.lng = 7.809007;
    }
    SearchResultsComponent.prototype.ngOnInit = function () {
    };
    SearchResultsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-search-results',
            template: __webpack_require__(/*! ./search-results.component.html */ "./src/app/home/search-results/search-results.component.html"),
            styles: [__webpack_require__(/*! ./search-results.component.css */ "./src/app/home/search-results/search-results.component.css")],
        }),
        __metadata("design:paramtypes", [ngx_bootstrap__WEBPACK_IMPORTED_MODULE_1__["BsModalRef"]])
    ], SearchResultsComponent);
    return SearchResultsComponent;
}());



/***/ }),

/***/ "./src/app/http-interceptors/auth-interceptor.ts":
/*!*******************************************************!*\
  !*** ./src/app/http-interceptors/auth-interceptor.ts ***!
  \*******************************************************/
/*! exports provided: AuthInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function() { return AuthInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _ngx_loading_bar_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-loading-bar/core */ "./node_modules/@ngx-loading-bar/core/esm5/ngx-loading-bar-core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthInterceptor = /** @class */ (function () {
    function AuthInterceptor(auth, loadingBar) {
        this.auth = auth;
        this.loadingBar = loadingBar;
    }
    AuthInterceptor.prototype.intercept = function (req, next) {
        var _this = this;
        // add authorization header with jwt token if available
        var currentUser = this.auth.getUser();
        if (currentUser.token) {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json', 'Authorization': "Token " + currentUser.token });
            req = req.clone({ headers: headers });
        }
        this.loadingBar.start();
        return next.handle(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["finalize"])(function () { return _this.loadingBar.stop(); }));
    };
    AuthInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _ngx_loading_bar_core__WEBPACK_IMPORTED_MODULE_3__["LoadingBarService"]])
    ], AuthInterceptor);
    return AuthInterceptor;
}());



/***/ }),

/***/ "./src/app/http-interceptors/error-interceptor.ts":
/*!********************************************************!*\
  !*** ./src/app/http-interceptors/error-interceptor.ts ***!
  \********************************************************/
/*! exports provided: ErrorInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function() { return ErrorInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ErrorInterceptor = /** @class */ (function () {
    function ErrorInterceptor(auth) {
        this.auth = auth;
    }
    ErrorInterceptor.prototype.intercept = function (request, next) {
        var _this = this;
        return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (err) {
            if (err.status === 401) {
                // auto logout if 401 response returned from api
                _this.auth.logout();
                location.reload(true);
            }
            var error = err.error.message || err.statusText;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(error);
        }));
    };
    ErrorInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], ErrorInterceptor);
    return ErrorInterceptor;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
        this.ADMIN = 1;
        this.VENDOR = 2;
        this.CUSTOMER = 3;
    }
    AuthService.prototype.login = function (formData) {
        var _this = this;
        return this.http.post('/api/login/', formData).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (user) {
            // login successful if there's a jwt token in the response
            if (user && user.token) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                _this.setUser(user);
            }
            return user;
        }));
    };
    AuthService.prototype.userSignUp = function (formData) {
        return this.http.post('/api/user_sign_up/', formData);
    };
    AuthService.prototype.logout = function () {
        // remove user from local storage to log user out
        localStorage.removeItem('user');
        return this.http.get('/api/logout/');
    };
    AuthService.prototype.isAdmin = function () {
        var user = this.getUser();
        return user.type === this.ADMIN;
    };
    AuthService.prototype.isVendor = function () {
        var user = this.getUser();
        return user.type === this.VENDOR;
    };
    AuthService.prototype.isCustomer = function () {
        var user = this.getUser();
        return user.type === this.CUSTOMER;
    };
    AuthService.prototype.setUser = function (user) {
        localStorage.setItem('user', btoa(JSON.stringify(user)));
    };
    AuthService.prototype.getUser = function () {
        var user = new User();
        if (localStorage.getItem('user')) {
            user = JSON.parse(atob(localStorage.getItem('user')));
        }
        return user;
    };
    AuthService.prototype.changeUserPassword = function (formData) {
        return this.http.post('/api/change_user_password/', formData);
    };
    AuthService.prototype.getOtp = function (mobile) {
        return this.http.get('/api/get_otp/', { params: { mobile: mobile } });
    };
    AuthService.prototype.verifyEmail = function (user_id, verification_code) {
        return this.http.get("/api/verify_email/" + user_id + "/", { params: { code: verification_code } });
    };
    AuthService.prototype.hasPermission = function (permission) {
        var user = this.getUser();
        var userType = { admin: this.ADMIN, customer: this.CUSTOMER, vendor: this.VENDOR };
        var _type;
        if (user) {
            if (user.type === this.ADMIN) {
                _type = this.ADMIN;
            }
            else if (user.type === this.VENDOR) {
                _type = this.VENDOR;
            }
            else {
                _type = this.CUSTOMER;
            }
        }
        var flag = false;
        if (_type === this.CUSTOMER) {
            flag = true;
        }
        else if (_type === userType.vendor && _type !== userType.admin) {
            flag = true;
        }
        else if (_type === userType.admin && (_type !== userType.vendor && _type !== userType.customer)) {
            flag = true;
        }
        return flag;
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AuthService);
    return AuthService;
}());

var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());


/***/ }),

/***/ "./src/app/services/category.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/category.service.ts ***!
  \**********************************************/
/*! exports provided: CategoryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryService", function() { return CategoryService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CategoryService = /** @class */ (function () {
    function CategoryService(http) {
        this.http = http;
    }
    CategoryService.prototype.search = function (terms) {
        var _this = this;
        return terms.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["debounceTime"])(300), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (term) { return _this.categories(term); }));
    };
    CategoryService.prototype.categories = function (search) {
        var params = {};
        if (search) {
            params['q'] = search;
        }
        return this.http.get('/api/categories/', { params: params });
    };
    CategoryService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], CategoryService);
    return CategoryService;
}());



/***/ }),

/***/ "./src/app/shared/components/alert/alert.component.css":
/*!*************************************************************!*\
  !*** ./src/app/shared/components/alert/alert.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".alert-top{\n    position: relative;\n    -webkit-animation-name: example; /* Safari 4.0 - 8.0 */\n    -webkit-animation-duration: 2s; /* Safari 4.0 - 8.0 */\n    animation-name: example;\n    animation-duration: 2s;\n}\n\n.alert-div {\n  position: absolute;\n  right: 0;\n  top: 0;\n  width: auto;\n  z-index: 99999;\n}\n\n/* Safari 4.0 - 8.0 */\n\n@-webkit-keyframes example {\n  0% {\n      opacity: 0;\n   }\n   100% {\n      opacity: 1;\n   }\n}\n\n@keyframes example {\n  0% {\n      opacity: 0;\n   }\n   100% {\n      opacity: 1;\n   }\n}\n"

/***/ }),

/***/ "./src/app/shared/components/alert/alert.component.html":
/*!**************************************************************!*\
  !*** ./src/app/shared/components/alert/alert.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"alert-div\">\n  <div *ngFor=\"let alert of alerts\" class=\"{{ cssClass(alert) }} alert-dismissable\">\n     {{alert.message}}\n     <a class=\"close\" (click)=\"removeAlert(alert)\">&times;</a>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/shared/components/alert/alert.component.ts":
/*!************************************************************!*\
  !*** ./src/app/shared/components/alert/alert.component.ts ***!
  \************************************************************/
/*! exports provided: AlertComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertComponent", function() { return AlertComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _alert__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./alert */ "./src/app/shared/components/alert/alert.ts");
/* harmony import */ var _alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./alert.service */ "./src/app/shared/components/alert/alert.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AlertComponent = /** @class */ (function () {
    function AlertComponent(alertService) {
        this.alertService = alertService;
        this.alerts = [];
    }
    AlertComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.alertService.getAlert().subscribe(function (alert) {
            if (!alert) {
                // clear alert when empty array is received
                _this.alerts = [];
                return;
            }
            // add alert to array
            _this.alerts.push(alert);
        });
    };
    AlertComponent.prototype.removeAlert = function (alert) {
        this.alerts = this.alerts.filter(function (x) { return x !== alert; });
    };
    AlertComponent.prototype.cssClass = function (alert) {
        if (!alert) {
            return;
        }
        // return css class based on alert type
        switch (alert.type) {
            case _alert__WEBPACK_IMPORTED_MODULE_1__["AlertType"].Success:
                return 'alert alert-success alert-top';
            case _alert__WEBPACK_IMPORTED_MODULE_1__["AlertType"].Info:
                return 'alert alert-info alert-top';
            case _alert__WEBPACK_IMPORTED_MODULE_1__["AlertType"].Error:
                return 'alert alert-danger alert-top';
            case _alert__WEBPACK_IMPORTED_MODULE_1__["AlertType"].Warning:
                return 'alert alert-warning alert-top';
        }
    };
    AlertComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-alert',
            template: __webpack_require__(/*! ./alert.component.html */ "./src/app/shared/components/alert/alert.component.html"),
            styles: [__webpack_require__(/*! ./alert.component.css */ "./src/app/shared/components/alert/alert.component.css")]
        }),
        __metadata("design:paramtypes", [_alert_service__WEBPACK_IMPORTED_MODULE_2__["AlertService"]])
    ], AlertComponent);
    return AlertComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/alert/alert.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/shared/components/alert/alert.service.ts ***!
  \**********************************************************/
/*! exports provided: AlertService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertService", function() { return AlertService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _alert__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./alert */ "./src/app/shared/components/alert/alert.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AlertService = /** @class */ (function () {
    function AlertService(router) {
        var _this = this;
        this.router = router;
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.keepAfterRouteChange = false;
        this.stopCondition = false;
        // clear alert messages on route change unless 'keepAfterRouteChange' flag is true
        router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationStart"]) {
                if (_this.keepAfterRouteChange) {
                    // only keep for a single route change
                    _this.keepAfterRouteChange = false;
                }
                else {
                    // clear alert messages
                    _this.clear();
                }
            }
        });
    }
    AlertService.prototype.getAlert = function () {
        return this.subject.asObservable();
    };
    AlertService.prototype.success = function (message, keepAfterRouteChange, timeout) {
        var _this = this;
        if (keepAfterRouteChange === void 0) { keepAfterRouteChange = false; }
        if (timeout === void 0) { timeout = 10000; }
        this.stopCondition = false;
        this.clear();
        this.alert(_alert__WEBPACK_IMPORTED_MODULE_2__["AlertType"].Success, message, keepAfterRouteChange);
        Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["interval"])(timeout).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeWhile"])(function () { return !_this.stopCondition; }))
            .subscribe(function (i) {
            // This will be called every 10 seconds until `stopCondition` flag is set to true
            _this.clear();
            _this.stopCondition = true;
        });
    };
    AlertService.prototype.error = function (message, keepAfterRouteChange) {
        if (keepAfterRouteChange === void 0) { keepAfterRouteChange = false; }
        this.clear();
        this.alert(_alert__WEBPACK_IMPORTED_MODULE_2__["AlertType"].Error, message, keepAfterRouteChange);
    };
    AlertService.prototype.info = function (message, keepAfterRouteChange) {
        if (keepAfterRouteChange === void 0) { keepAfterRouteChange = false; }
        this.clear();
        this.alert(_alert__WEBPACK_IMPORTED_MODULE_2__["AlertType"].Info, message, keepAfterRouteChange);
    };
    AlertService.prototype.warn = function (message, keepAfterRouteChange) {
        if (keepAfterRouteChange === void 0) { keepAfterRouteChange = false; }
        this.clear();
        this.alert(_alert__WEBPACK_IMPORTED_MODULE_2__["AlertType"].Warning, message, keepAfterRouteChange);
    };
    AlertService.prototype.alert = function (type, message, keepAfterRouteChange) {
        if (keepAfterRouteChange === void 0) { keepAfterRouteChange = false; }
        this.keepAfterRouteChange = keepAfterRouteChange;
        this.subject.next({ type: type, message: message });
    };
    AlertService.prototype.clear = function () {
        // clear alerts
        this.subject.next();
    };
    AlertService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AlertService);
    return AlertService;
}());



/***/ }),

/***/ "./src/app/shared/components/alert/alert.ts":
/*!**************************************************!*\
  !*** ./src/app/shared/components/alert/alert.ts ***!
  \**************************************************/
/*! exports provided: Alert, AlertType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Alert", function() { return Alert; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertType", function() { return AlertType; });
var Alert = /** @class */ (function () {
    function Alert() {
    }
    return Alert;
}());

var AlertType;
(function (AlertType) {
    AlertType[AlertType["Success"] = 0] = "Success";
    AlertType[AlertType["Error"] = 1] = "Error";
    AlertType[AlertType["Info"] = 2] = "Info";
    AlertType[AlertType["Warning"] = 3] = "Warning";
})(AlertType || (AlertType = {}));


/***/ }),

/***/ "./src/app/shared/components/change-user-password/change-user-password.component.css":
/*!*******************************************************************************************!*\
  !*** ./src/app/shared/components/change-user-password/change-user-password.component.css ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/shared/components/change-user-password/change-user-password.component.html":
/*!********************************************************************************************!*\
  !*** ./src/app/shared/components/change-user-password/change-user-password.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\" novalidate>\n<div class=\"modal-header\">\n  <h4 class=\"modal-title pull-left\">Change Password</h4>\n  <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"bsModalRef.hide()\">\n    <span aria-hidden=\"true\">&times;</span>\n  </button>\n</div>\n<div class=\"modal-body\">\n  <div class=\"row text-center invalid-feedback\" *ngIf=\"response_error\">{{ response_error }}</div>\n  <div class=\"row\">\n    <div class=\"col-sm-12\">\n      <label>Old Password</label><span class=\"invalid-feedback\"> *</span>\n      <input type=\"password\" name=\"name\" class=\"form-control input-sm\" formControlName=\"old_password\">\n      <div class=\"invalid-feedback\" *ngIf=\"errorMessage('old_password', 'required')\">Old Password is required</div>\n      <div class=\"invalid-feedback\" *ngIf=\"errorMessage('old_password', 'minlength')\">Password length at least 6 digit</div>\n      <div class=\"invalid-feedback\" *ngIf=\"errorMessage('old_password', 'pattern')\">Special symbol not allowed</div>\n    </div>\n  </div>\n  <div class=\"row\" style=\"margin-top: 10px;\">\n    <div class=\"col-sm-12\">\n      <label>New Password</label><span class=\"invalid-feedback\"> *</span>\n      <input type=\"password\" name=\"new_password\" maxlength=\"10\" validateEqual=\"confirm_password\" reverse=\"true\" class=\"form-control input-sm\" formControlName=\"new_password\">\n      <div class=\"invalid-feedback\" *ngIf=\"errorMessage('new_password', 'required')\">New Password is required</div>\n      <div class=\"invalid-feedback\" *ngIf=\"errorMessage('new_password', 'minlength')\">Password length at least 6 digit</div>\n      <div class=\"invalid-feedback\" *ngIf=\"errorMessage('new_password', 'pattern')\">Special symbol not allowed</div>\n    </div>\n  </div>\n  <div class=\"row\" style=\"margin-top: 10px;\">\n    <div class=\"col-sm-12\">\n      <label>Confirm Password</label><span class=\"invalid-feedback\"> *</span>\n      <input type=\"password\" name=\"confirm_password\" class=\"form-control input-sm\" validateEqual=\"new_password\" formControlName=\"confirm_password\">\n      <div class=\"invalid-feedback\" *ngIf=\"errorMessage('confirm_password', 'required')\">Confirm Password is required</div>\n      <div class=\"invalid-feedback\" *ngIf=\"errorMessage('confirm_password', 'minlength')\">Password length at least 6 digit</div>\n      <div class=\"invalid-feedback\" *ngIf=\"form.get('confirm_password').invalid || form.get('confirm_password').pristine\">Password mismatch</div>\n      <div class=\"invalid-feedback\" *ngIf=\"errorMessage('confirm_password', 'pattern')\">Special symbol not allowed</div>\n    </div>\n  </div>\n</div>\n<div class=\"modal-footer\">\n  <button type=\"button\" class=\"btn btn-sm btn-default\" (click)=\"bsModalRef.hide()\">Cancel</button>\n  <button type=\"submit\" class=\"btn btn-sm btn-primary\" [disabled]=\"form.invalid\">Save</button>\n</div>\n</form>\n"

/***/ }),

/***/ "./src/app/shared/components/change-user-password/change-user-password.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/shared/components/change-user-password/change-user-password.component.ts ***!
  \******************************************************************************************/
/*! exports provided: ChangeUserPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangeUserPasswordComponent", function() { return ChangeUserPasswordComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _alert_alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../alert/alert.service */ "./src/app/shared/components/alert/alert.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ChangeUserPasswordComponent = /** @class */ (function () {
    function ChangeUserPasswordComponent(bsModalRef, fb, authService, alertService) {
        this.bsModalRef = bsModalRef;
        this.fb = fb;
        this.authService = authService;
        this.alertService = alertService;
        this.isAlive = true;
        this.form = this.fb.group({
            old_password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('.*\\S.*[a-zA-z0-9_-]')]],
            new_password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('.*\\S.*[a-zA-z0-9_-]')]],
            confirm_password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('.*\\S.*[a-zA-z0-9_-]')]]
        });
    }
    ChangeUserPasswordComponent.prototype.ngOnInit = function () {
    };
    ChangeUserPasswordComponent.prototype.ngOnDestroy = function () {
        this.isAlive = false;
    };
    ChangeUserPasswordComponent.prototype.onSubmit = function () {
        var _this = this;
        this.authService.changeUserPassword(this.form.getRawValue()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeWhile"])(function () { return _this.isAlive; })).subscribe(function (response) {
            if (response.error) {
                _this.response_error = response.message;
                _this.alertService.error(response.message);
            }
            else {
                _this.bsModalRef.hide();
                _this.alertService.success(response.message);
            }
        });
    };
    ChangeUserPasswordComponent.prototype.errorMessage = function (control, errorName) {
        return this.form.get(control).hasError(errorName) && (this.form.get(control).dirty || this.form.get(control).touched);
    };
    ChangeUserPasswordComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-change-user-password',
            template: __webpack_require__(/*! ./change-user-password.component.html */ "./src/app/shared/components/change-user-password/change-user-password.component.html"),
            styles: [__webpack_require__(/*! ./change-user-password.component.css */ "./src/app/shared/components/change-user-password/change-user-password.component.css")]
        }),
        __metadata("design:paramtypes", [ngx_bootstrap__WEBPACK_IMPORTED_MODULE_1__["BsModalRef"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _alert_alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"]])
    ], ChangeUserPasswordComponent);
    return ChangeUserPasswordComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/confirm-alert-box/confirm-alert-box.component.css":
/*!*************************************************************************************!*\
  !*** ./src/app/shared/components/confirm-alert-box/confirm-alert-box.component.css ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media screen and (min-width: 768px) {\n  .modal-dialog {\n    width: 50%;\n  }\n}\n"

/***/ }),

/***/ "./src/app/shared/components/confirm-alert-box/confirm-alert-box.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/shared/components/confirm-alert-box/confirm-alert-box.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header custom-modal-header\">\n  <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"onClose()\">\n    <span aria-hidden=\"true\">&times;</span>\n  </button>\n  <h4 class=\"modal-title\">{{ title }}</h4>\n</div>\n<div class=\"modal-body\">\n  {{ body }}\n</div>\n<div class=\"modal-footer\">\n  <button type=\"button\" class=\"btn btn-sm\" ngClass=\"{{actionButtonClass}}\" (click)=\"onActionButton($event)\">{{ actionButtonName }}</button>\n  <button type=\"button\" class=\"btn btn-default btn-sm\" (click)=\"onClose()\">Cancel</button>\n</div>\n"

/***/ }),

/***/ "./src/app/shared/components/confirm-alert-box/confirm-alert-box.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/shared/components/confirm-alert-box/confirm-alert-box.component.ts ***!
  \************************************************************************************/
/*! exports provided: ConfirmAlertBoxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmAlertBoxComponent", function() { return ConfirmAlertBoxComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ConfirmAlertBoxComponent = /** @class */ (function () {
    function ConfirmAlertBoxComponent(bsModelRef, bsModalService) {
        this.bsModelRef = bsModelRef;
        this.bsModalService = bsModalService;
        this.isAlive = true;
        this.title = 'Confirm';
        this.body = '';
        this.actionButtonName = 'Delete';
        this.actionButtonClass = 'btn-danger';
        this.actionButtonEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ConfirmAlertBoxComponent.prototype.ngOnInit = function () {
    };
    ConfirmAlertBoxComponent.prototype.ngOnDestroy = function () {
        this.isAlive = false;
    };
    ConfirmAlertBoxComponent.prototype.onClose = function () {
        this.bsModelRef.hide();
        this.bsModalService.onHide.emit(true);
    };
    ConfirmAlertBoxComponent.prototype.onActionButton = function (event) {
        this.actionButtonEvent.emit(true);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], ConfirmAlertBoxComponent.prototype, "actionButtonEvent", void 0);
    ConfirmAlertBoxComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-confirm-alert-box',
            template: __webpack_require__(/*! ./confirm-alert-box.component.html */ "./src/app/shared/components/confirm-alert-box/confirm-alert-box.component.html"),
            styles: [__webpack_require__(/*! ./confirm-alert-box.component.css */ "./src/app/shared/components/confirm-alert-box/confirm-alert-box.component.css")]
        }),
        __metadata("design:paramtypes", [ngx_bootstrap__WEBPACK_IMPORTED_MODULE_1__["BsModalRef"], ngx_bootstrap__WEBPACK_IMPORTED_MODULE_1__["BsModalService"]])
    ], ConfirmAlertBoxComponent);
    return ConfirmAlertBoxComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/confirm-alert-box/confirm-alert-box.service.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/shared/components/confirm-alert-box/confirm-alert-box.service.ts ***!
  \**********************************************************************************/
/*! exports provided: ConfirmAlertBoxService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmAlertBoxService", function() { return ConfirmAlertBoxService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var _confirm_alert_box_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./confirm-alert-box.component */ "./src/app/shared/components/confirm-alert-box/confirm-alert-box.component.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ConfirmAlertBoxService = /** @class */ (function () {
    function ConfirmAlertBoxService(bsModalService) {
        this.bsModalService = bsModalService;
        this.isAlive = true;
    }
    ConfirmAlertBoxService.prototype.confirmBox = function (obj) {
        var _this = this;
        this.bsModalRef = this.bsModalService.show(_confirm_alert_box_component__WEBPACK_IMPORTED_MODULE_2__["ConfirmAlertBoxComponent"], { ignoreBackdropClick: true });
        this.bsModalRef.content.body = obj.body;
        if (obj.title) {
            this.bsModalRef.content.title = obj.title;
        }
        if (obj.actionButtonClass) {
            this.bsModalRef.content.actionButtonClass = obj.actionButtonClass;
        }
        if (obj.actionButtonName) {
            this.bsModalRef.content.actionButtonName = obj.actionButtonName;
        }
        this.bsModalRef.content.actionButtonEvent
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeWhile"])(function () { return _this.bsModalRef.content.isAlive; })).subscribe(function (data) {
            _this.bsModalRef.hide();
            obj.callback();
        });
    };
    ConfirmAlertBoxService.prototype.onHide = function () {
        return this.bsModalService.onHide;
    };
    ConfirmAlertBoxService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [ngx_bootstrap__WEBPACK_IMPORTED_MODULE_1__["BsModalService"]])
    ], ConfirmAlertBoxService);
    return ConfirmAlertBoxService;
}());



/***/ }),

/***/ "./src/app/shared/components/login/login.component.css":
/*!*************************************************************!*\
  !*** ./src/app/shared/components/login/login.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".login-input-padding {\n  padding-bottom: 10px;\n}\n\n.login-form {\n  box-shadow: 0 0 1px 5px cadetblue;\n  padding: 10px;\n  margin-top:10%;\n  background-color: aliceblue;\n}\n"

/***/ }),

/***/ "./src/app/shared/components/login/login.component.html":
/*!**************************************************************!*\
  !*** ./src/app/shared/components/login/login.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-sm-4 col-sm-offset-4\">\n      <div *ngIf=\"error\" class=\"alert alert-danger\">{{error}}</div>\n      <div class=\"login-form\">\n      <form [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\" novalidate>\n        <div class=\"row\">\n          <div class=\"col-sm-12 text-center\"><h3>Log In</h3></div>\n        </div>\n        <div class=\"row login-input-padding\">\n          <div class=\"col-sm-12\">\n            <input type=\"text\" class=\"form-control input-sm\" placeholder=\"Email\" formControlName=\"username\" name=\"username\">\n            <div *ngIf=\"username.invalid && (username.dirty || username.touched)\" class=\"invalid-feedback\">\n                <div *ngIf=\"username.errors['required']\">Email is required</div>\n                <div *ngIf=\"username.errors['email']\">Invalid Email</div>\n            </div>\n          </div>\n        </div>\n        <div class=\"row login-input-padding\">\n          <div class=\"col-sm-12\">\n            <input type=\"password\" class=\"form-control input-sm\" placeholder=\"Password\" formControlName=\"password\" name=\"password\">\n            <div *ngIf=\"password.invalid && (password.dirty || password.touched)\" class=\"invalid-feedback\">\n                <div *ngIf=\"password.errors['required']\">Password is required</div>\n            </div>\n          </div>\n        </div>\n        <div class=\"row login-input-padding\">\n          <div class=\"col-sm-12\">\n            <button type=\"submit\" class=\"btn btn-primary input-sm btn-block\" [disabled]=\"form.invalid\">Login</button>\n          </div>\n        </div>\n      </form>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/shared/components/login/login.component.ts":
/*!************************************************************!*\
  !*** ./src/app/shared/components/login/login.component.ts ***!
  \************************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = /** @class */ (function () {
    function LoginComponent(fb, authService, route, router) {
        this.fb = fb;
        this.authService = authService;
        this.route = route;
        this.router = router;
        this.loading = false;
        this.error = '';
        this.form = fb.group({
            username: fb.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]),
            password: fb.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])
        });
    }
    LoginComponent.prototype.ngOnInit = function () {
        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
        var user = this.authService.getUser();
        if (user.token) {
            this.router.navigate([this.returnUrl]);
        }
    };
    LoginComponent.prototype.ngOnDestroy = function () {
    };
    Object.defineProperty(LoginComponent.prototype, "username", {
        // convenience getter for easy access to form fields
        get: function () { return this.form.controls['username']; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LoginComponent.prototype, "password", {
        get: function () { return this.form.controls['password']; },
        enumerable: true,
        configurable: true
    });
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        this.loading = true;
        this.authService.login(this.form.getRawValue()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])()).subscribe(function (data) {
            if (data.type === 1) {
                _this.returnUrl = '/admin';
            }
            _this.router.navigate([_this.returnUrl]);
        }, function (error) {
            _this.error = error;
            _this.loading = false;
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/shared/components/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/shared/components/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/logout/logout.component.css":
/*!***************************************************************!*\
  !*** ./src/app/shared/components/logout/logout.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/shared/components/logout/logout.component.html":
/*!****************************************************************!*\
  !*** ./src/app/shared/components/logout/logout.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  logout works!\n</p>\n"

/***/ }),

/***/ "./src/app/shared/components/logout/logout.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/shared/components/logout/logout.component.ts ***!
  \**************************************************************/
/*! exports provided: LogoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoutComponent", function() { return LogoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LogoutComponent = /** @class */ (function () {
    function LogoutComponent(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    LogoutComponent.prototype.ngOnInit = function () {
        var user = this.auth.getUser();
        if (user.token) {
            this.auth.logout().subscribe();
        }
        this.router.navigate(['/']);
    };
    LogoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-logout',
            template: __webpack_require__(/*! ./logout.component.html */ "./src/app/shared/components/logout/logout.component.html"),
            styles: [__webpack_require__(/*! ./logout.component.css */ "./src/app/shared/components/logout/logout.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], LogoutComponent);
    return LogoutComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/page-not-found/page-not-found.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/shared/components/page-not-found/page-not-found.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/shared/components/page-not-found/page-not-found.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/shared/components/page-not-found/page-not-found.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  page-not-found works!\n</p>\n"

/***/ }),

/***/ "./src/app/shared/components/page-not-found/page-not-found.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/shared/components/page-not-found/page-not-found.component.ts ***!
  \******************************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    PageNotFoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-page-not-found',
            template: __webpack_require__(/*! ./page-not-found.component.html */ "./src/app/shared/components/page-not-found/page-not-found.component.html"),
            styles: [__webpack_require__(/*! ./page-not-found.component.css */ "./src/app/shared/components/page-not-found/page-not-found.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/time-picker/time-picker.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/shared/components/time-picker/time-picker.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".glyphicon-chevron-up {\n  cursor: pointer;\n  color: #0972f9;\n}\n\n.glyphicon-chevron-down {\n  cursor: pointer;\n  color: #0972f9;\n}\n\n\n"

/***/ }),

/***/ "./src/app/shared/components/time-picker/time-picker.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/shared/components/time-picker/time-picker.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"form\" novalidate>\n<div>\n  <div style=\"width: 50px;display: inline-block;\">\n    <div class=\"text-center\"><i (click)=\"changeTime(hours, 'UP', 'HH')\" class=\"glyphicon glyphicon-chevron-up\"></i></div>\n    <input type=\"text\" maxlength=\"2\" (change)=\"onChangeInput($event, 'HH')\" formControlName=\"hours\" placeholder=\"HH\" class=\"form-control input-sm text-center\">\n    <div class=\"text-center\"><i (click)=\"changeTime(hours, 'DOWN', 'HH')\" class=\"glyphicon glyphicon-chevron-down\"></i></div>\n  </div>\n  <div style=\"width: 20px;display: inline-block;\"><span style=\"text-align: center;margin-top: -42px;position: absolute;margin-left: 8px;\">:</span></div>\n  <div style=\"width: 50px;display: inline-block;\">\n    <div class=\"text-center\"><i (click)=\"changeTime(minutes, 'UP', 'MM')\" class=\"glyphicon glyphicon-chevron-up\"></i></div>\n    <input type=\"text\" maxlength=\"2\" (change)=\"onChangeInput($event, 'MM')\" formControlName=\"minutes\" placeholder=\"MM\" class=\"form-control input-sm text-center\">\n    <div class=\"text-center\"><i (click)=\"changeTime(minutes, 'DOWN', 'MM')\" class=\"glyphicon glyphicon-chevron-down\"></i></div>\n  </div>\n  <div style=\"width: 15px;display: inline-block;\"></div>\n  <div style=\"width: 50px;display: inline-block;margin-top: 20px;position: absolute;\">\n    <select class=\"form-control input-sm\" (change)=\"updateValue()\" [formControlName]=\"'meridian'\" style=\"width: 60px;display: inline-block;\">\n      <option [value]=\"'AM'\">AM</option><option [value]=\"'PM'\">PM</option>\n    </select>\n  </div>\n</div>\n</form>\n"

/***/ }),

/***/ "./src/app/shared/components/time-picker/time-picker.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/shared/components/time-picker/time-picker.component.ts ***!
  \************************************************************************/
/*! exports provided: TimePickerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimePickerComponent", function() { return TimePickerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TimePickerComponent = /** @class */ (function () {
    function TimePickerComponent(fb) {
        this.fb = fb;
        this.getValue = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this._setValue = '12:00 AM';
        this.hours = '01';
        this.minutes = '00';
        this.meridian = 'AM';
        this.form = this.fb.group({
            hours: [this.hours],
            minutes: [this.minutes],
            meridian: [this.meridian]
        });
    }
    TimePickerComponent.prototype.ngOnInit = function () {
        this.onTimeChange();
    };
    TimePickerComponent.prototype.ngDoCheck = function () {
        if (this.setValue) {
            console.log(this.setValue);
            this._setValue = this.setValue;
            this.onTimeChange();
            this.setValue = '';
        }
    };
    TimePickerComponent.prototype.onTimeChange = function () {
        this._setValue = this._setValue ? this._setValue : '12:00 AM';
        if (this._setValue.length === 8) {
            this.hours = this._setValue.split(':')[0];
            this.meridian = this._setValue.split(' ')[this._setValue.split(' ').length - 1];
            var min = this._setValue.split(':')[this._setValue.split(':').length - 1];
            this.minutes = min.split(' ')[0];
            this.form.patchValue({
                hours: [this.hours],
                minutes: [this.minutes],
                meridian: [this.meridian]
            });
        }
    };
    TimePickerComponent.prototype.onChangeInput = function (event, t) {
        var val;
        val = +event.target.value ? event.target.value : '00';
        if (val.length === 1) {
            val = '0' + val;
        }
        if (t === 'HH') {
            this.hours = val;
            this.form.patchValue({ hours: this.hours });
        }
        else if (t === 'MM') {
            this.minutes = val;
            this.form.patchValue({ minutes: this.minutes });
        }
        this.updateValue();
    };
    TimePickerComponent.prototype.updateValue = function () {
        var v = this.form.getRawValue();
        var t = v.hours + ":" + v.minutes + " " + v.meridian;
        this.getValue.emit(t);
    };
    TimePickerComponent.prototype.changeTime = function (obj, action, t) {
        var num;
        if (action === 'UP') {
            num = +obj + 1;
        }
        else if (action === 'DOWN') {
            num = +obj - 1;
        }
        num = this.fillZero(num);
        if (t === 'HH') {
            if (+num > 12) {
                num = '00';
            }
            if (+num < 0) {
                num = '12';
            }
            this.form.patchValue({ hours: num });
            this.hours = num;
        }
        else if (t === 'MM') {
            if (+num > 60) {
                num = '00';
                this.hours = this.fillZero(+this.hours + 1);
                this.form.patchValue({ hours: this.hours });
            }
            if (+num < 0) {
                num = '60';
                this.hours = this.fillZero(+this.hours - 1);
                this.form.patchValue({ hours: this.hours });
            }
            this.form.patchValue({ minutes: num });
            this.minutes = num;
        }
        this.updateValue();
    };
    TimePickerComponent.prototype.fillZero = function (value) {
        if (value.toString().length === 1) {
            value = '0' + value.toString();
        }
        return value.toString();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], TimePickerComponent.prototype, "getValue", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], TimePickerComponent.prototype, "setValue", void 0);
    TimePickerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-time-picker',
            template: __webpack_require__(/*! ./time-picker.component.html */ "./src/app/shared/components/time-picker/time-picker.component.html"),
            styles: [__webpack_require__(/*! ./time-picker.component.css */ "./src/app/shared/components/time-picker/time-picker.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], TimePickerComponent);
    return TimePickerComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/user-sign-up/user-sign-up.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/shared/components/user-sign-up/user-sign-up.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/shared/components/user-sign-up/user-sign-up.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/shared/components/user-sign-up/user-sign-up.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\n  <h4 class=\"modal-title pull-left\">Sign Up</h4>\n  <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"bsModalRef.hide()\">\n    <span aria-hidden=\"true\">&times;</span>\n  </button>\n</div>\n<div class=\"modal-body\">\n  <div class=\"invalid-feedback\" *ngIf=\"commonError\">{{ commonError }}</div>\n  <ng-container *ngIf=\"step === 1\">\n    <form [formGroup]=\"mobile_form\" (ngSubmit)=\"onMobileSubmit()\" novalidate>\n      <div class=\"row\" style=\"margin-top: 10px;\">\n        <div class=\"col-sm-12\">\n          <label>Mobile Number</label><span class=\"invalid-feedback\"> *</span>\n          <div class=\"input-group\">\n            <span class=\"input-group-addon\">+91</span>\n            <input type=\"text\" name=\"mobile\" class=\"form-control input-sm\" maxlength=\"10\" formControlName=\"mobile\">\n          </div>\n          <div class=\"invalid-feedback\" *ngIf=\"errorMessage(mobile_form, 'mobile', 'required')\">Mobile Number is\n            required\n          </div>\n          <div class=\"invalid-feedback\" *ngIf=\"errorMessage(mobile_form, 'mobile', 'minlength')\">Mobile Number at\n            least 10 digit\n          </div>\n          <div class=\"invalid-feedback\" *ngIf=\"errorMessage(mobile_form, 'mobile', 'maxlength')\">Only 10 digit number\n            allowed\n          </div>\n          <div class=\"invalid-feedback\" *ngIf=\"errorMessage(mobile_form, 'mobile', 'pattern')\">Character or symbol not\n            allowed\n          </div>\n        </div>\n      </div>\n      <div class=\"row\" style=\"margin-top: 10px;\">\n        <div class=\"col-sm-4 col-sm-offset-4\">\n          <button type=\"submit\" [disabled]=\"mobile_form.invalid\" class=\"btn btn-sm btn-block btn-primary\">Get\n            Started\n          </button>\n        </div>\n      </div>\n    </form>\n    <hr>\n    <div class=\"row\" style=\"margin-top: 10px;\">\n      <div class=\"col-sm-12\">\n        <p>Already have Clickeazy account?</p>\n        <a class=\"btn btn-sm btn-primary\" routerLink=\"/login\">Sign In</a>\n      </div>\n    </div>\n  </ng-container>\n  <ng-container *ngIf=\"step === 2\">\n    <div class=\"row\" style=\"margin-top: 10px;\">\n      <div class=\"col-sm-12\">\n        <label>Mobile Number</label><span class=\"invalid-feedback\"> *</span>\n        <div class=\"input-group\">\n          <span class=\"input-group-addon\">+91</span>\n          <input type=\"text\" name=\"mobile\" [value]=\"mobile_form.get('mobile').value\" class=\"form-control input-sm\" maxlength=\"10\" [disabled]=\"true\">\n        </div>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-sm-12\">\n        <p>The OTP has been sent on your registered mobile number. Please enter OTP and verify your mobile.</p>\n      </div>\n    </div>\n    <form [formGroup]=\"otp_form\" (ngSubmit)=\"onOTPSubmit()\" novalidate>\n      <div class=\"row\" style=\"margin-top: 10px;\" *ngIf=\"otp\">\n        <div class=\"col-sm-4 col-sm-offset-4\">\n          <input type=\"text\" class=\"form-control input-sm\" maxlength=\"6\" minlength=\"6\" formControlName=\"otp\">\n          <div class=\"invalid-feedback\" *ngIf=\"errorMsg\">Invalid OTP\n          </div>\n          <div class=\"invalid-feedback\" *ngIf=\"errorMessage(otp_form, 'otp', 'maxlength')\">Only 6 digit number\n            allowed\n          </div>\n          <div class=\"invalid-feedback\" *ngIf=\"errorMessage(otp_form, 'otp', 'pattern')\">Character or symbol not\n            allowed\n          </div>\n        </div>\n      </div>\n      <div class=\"row\" style=\"margin-top: 10px;\">\n        <div class=\"col-sm-4 col-sm-offset-4\">\n          <button type=\"submit\" [disabled]=\"otp_form.invalid\" class=\"btn btn-sm btn-block btn-primary\">\n            Verify OTP\n          </button>\n        </div>\n      </div>\n      <div class=\"row\" style=\"margin-top: 10px;\">\n        <div class=\"col-sm-4 col-sm-offset-4 text-center\">\n          <p *ngIf=\"timer_text\">{{ timer_text }}</p>\n          <a *ngIf=\"timer.minutes === 0 && timer.seconds === 0\" (click)=\"resendOTP()\">Resend OTP</a>\n        </div>\n      </div>\n    </form>\n    <hr>\n    <div class=\"row\" style=\"margin-top: 10px;\">\n      <div class=\"col-sm-12 text-center\">\n        <a (click)=\"editMobileNumber()\">Edit Mobile Number</a>\n      </div>\n    </div>\n  </ng-container>\n  <ng-container *ngIf=\"step === 3\">\n    <form [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\" novalidate>\n      <div class=\"row\" style=\"margin-top: 10px;\">\n        <div class=\"col-sm-12\">\n          <label>Name</label><span class=\"invalid-feedback\"> *</span>\n          <input type=\"text\" name=\"name\" class=\"form-control input-sm\" formControlName=\"name\">\n          <div class=\"invalid-feedback\" *ngIf=\"errorMessage(form, 'name', 'required')\">Name is required</div>\n        </div>\n      </div>\n      <div class=\"row\" style=\"margin-top: 10px;\">\n        <div class=\"col-sm-12\">\n          <label>Email</label><span class=\"invalid-feedback\"> *</span>\n          <input type=\"text\" name=\"email\" class=\"form-control input-sm\" formControlName=\"email\">\n          <div class=\"invalid-feedback\" *ngIf=\"errorMessage(form, 'email', 'required')\">Email is required</div>\n          <div class=\"invalid-feedback\" *ngIf=\"errorMessage(form, 'email', 'email')\">Invalid Email</div>\n        </div>\n      </div>\n      <div class=\"row\" style=\"margin-top: 10px;\">\n        <div class=\"col-sm-12\">\n          <label>Password</label><span class=\"invalid-feedback\"> *</span>\n          <input type=\"password\" name=\"new_password\" maxlength=\"10\" validateEqual=\"confirm_password\" reverse=\"true\" class=\"form-control input-sm\" formControlName=\"password\">\n          <div class=\"invalid-feedback\" *ngIf=\"errorMessage(form, 'password', 'required')\">Password is required</div>\n          <div class=\"invalid-feedback\" *ngIf=\"errorMessage(form, 'password', 'minlength')\">Password length at least 6 digit</div>\n          <div class=\"invalid-feedback\" *ngIf=\"errorMessage(form, 'password', 'pattern')\">Special symbol not allowed</div>\n        </div>\n      </div>\n      <div class=\"row\" style=\"margin-top: 10px;\">\n        <div class=\"col-sm-12\">\n          <label>Confirm Password</label><span class=\"invalid-feedback\"> *</span>\n          <input type=\"password\" name=\"confirm_password\" class=\"form-control input-sm\" validateEqual=\"password\" formControlName=\"confirm_password\">\n          <div class=\"invalid-feedback\" *ngIf=\"errorMessage(form, 'confirm_password', 'required')\">Confirm Password is required</div>\n          <div class=\"invalid-feedback\" *ngIf=\"errorMessage(form, 'confirm_password', 'minlength')\">Password length at least 6 digit</div>\n          <div class=\"invalid-feedback\" *ngIf=\"form.get('confirm_password').invalid || form.get('confirm_password').pristine\">Password mismatch</div>\n          <div class=\"invalid-feedback\" *ngIf=\"errorMessage(form, 'confirm_password', 'pattern')\">Special symbol not allowed</div>\n        </div>\n      </div>\n      <hr>\n      <div class=\"row\" style=\"margin-top: 10px;\">\n        <div class=\"col-sm-12 text-right\">\n          <button type=\"submit\" class=\"btn btn-sm btn-primary\" [disabled]=\"form.invalid\">Save</button>\n        </div>\n      </div>\n    </form>\n  </ng-container>\n  <ng-container *ngIf=\"step === 4\">\n    <div class=\"row\">\n      <div class=\"col-sm-12 text-center\">\n        <div style=\"font-weight: 600;font-size: 20px;padding: 10px;\">Email Verification</div>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-sm-12\">\n        <ul>\n          <li>An Email has been sent to your <b>{{ form.get('email').value }}</b> email address.</li>\n          <li>Please click on verify button on the email to complete account setup.</li>\n        </ul>\n      </div>\n    </div>\n    <hr>\n    <div class=\"row\">\n      <div class=\"col-sm-12 text-center\">\n        <button class=\"btn btn-sm btn-primary\" (click)=\"bsModalRef.hide()\">Close</button>\n      </div>\n    </div>\n  </ng-container>\n</div>\n"

/***/ }),

/***/ "./src/app/shared/components/user-sign-up/user-sign-up.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/shared/components/user-sign-up/user-sign-up.component.ts ***!
  \**************************************************************************/
/*! exports provided: UserSignUpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserSignUpComponent", function() { return UserSignUpComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var UserSignUpComponent = /** @class */ (function () {
    function UserSignUpComponent(bsModalRef, fb, authService) {
        this.bsModalRef = bsModalRef;
        this.fb = fb;
        this.authService = authService;
        this.isAlive = true;
        this.otp = null;
        this.timer = { minutes: 2, seconds: 0 };
        this.mobile_form = this.fb.group({
            mobile: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(10),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(10),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^[0-9]*$')
                ]]
        });
    }
    UserSignUpComponent.prototype.ngOnInit = function () {
        this.step = 1;
    };
    UserSignUpComponent.prototype.ngOnDestroy = function () {
        this.isAlive = false;
    };
    UserSignUpComponent.prototype.onMobileSubmit = function () {
        var formData = this.mobile_form.getRawValue();
        this.getOtp(formData.mobile);
    };
    UserSignUpComponent.prototype.editMobileNumber = function () {
        this.step = 1;
    };
    UserSignUpComponent.prototype.buildOtpForm = function () {
        var _this = this;
        this.otp_form = this.fb.group({
            otp: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^[0-9]*$')]]
        });
        // emit value in sequence every 1 second
        var source = Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["interval"])(1000);
        // output: 0,1,2,3,4,5....
        this.timeInterval = source.subscribe(function (val) { return _this.countdown(); });
    };
    UserSignUpComponent.prototype.buildSignUpForm = function () {
        this.form = this.fb.group({
            mobile: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]],
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('.*\\S.*[a-zA-z0-9_-]')]],
            confirm_password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('.*\\S.*[a-zA-z0-9_-]')]],
        });
        this.form.patchValue({
            mobile: this.mobile_form.get('mobile').value
        });
    };
    UserSignUpComponent.prototype.onSubmit = function () {
        var _this = this;
        this.authService.userSignUp(this.form.getRawValue()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeWhile"])(function () { return _this.isAlive; })).subscribe(function (response) {
            if (response.error) {
                _this.commonError = response.message;
                console.log(response.message);
            }
            else {
                _this.step = 4;
                _this.commonError = null;
            }
        });
    };
    UserSignUpComponent.prototype.onOTPSubmit = function () {
        // if otp matched
        if (this.otp.toString() === this.otp_form.get('otp').value) {
            this.buildSignUpForm();
            // Go to the next step
            this.step = 3;
            this.errorMsg = null;
            this.timeInterval.unsubscribe();
        }
        else {
            this.errorMsg = 'Invalid OTP';
        }
    };
    UserSignUpComponent.prototype.errorMessage = function (form, control, errorName) {
        return form.get(control).hasError(errorName) && (form.get(control).dirty || form.get(control).touched);
    };
    UserSignUpComponent.prototype.getOtp = function (mobile) {
        var _this = this;
        this.authService.getOtp(mobile).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeWhile"])(function () { return _this.isAlive; })).subscribe(function (response) {
            if (response.error) {
            }
            else {
                _this.otp = response.result;
                console.log(_this.otp);
                // initialize otp form
                _this.buildOtpForm();
                // Go to the next step
                _this.step = 2;
            }
        });
    };
    UserSignUpComponent.prototype.resendOTP = function () {
        var _this = this;
        this.getOtp(this.mobile_form.get('mobile').value);
        this.timer = { minutes: 2, seconds: 0 };
        // emit value in sequence every 1 second
        var source = Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["interval"])(1000);
        // output: 0,1,2,3,4,5....
        var subscribe = source.subscribe(function (val) { return _this.countdown(); });
    };
    UserSignUpComponent.prototype.countdown = function () {
        var minutes = this.timer.minutes;
        var seconds = this.timer.seconds;
        this.timer_text = minutes + ' : ' + seconds;
        seconds -= 1;
        if (minutes < 0) {
            return;
        }
        else if (seconds < 0 && minutes !== 0) {
            minutes -= 1;
            seconds = 59;
        }
        else if (seconds < 10 && seconds.toString().length !== 2) {
            this.timer_text = minutes + ' : ' + '0' + seconds;
        }
        if (minutes === 0 && seconds === 0) {
            this.timeInterval.unsubscribe();
            this.timer_text = '';
        }
        this.timer = { minutes: minutes, seconds: seconds };
    };
    UserSignUpComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-sign-up',
            template: __webpack_require__(/*! ./user-sign-up.component.html */ "./src/app/shared/components/user-sign-up/user-sign-up.component.html"),
            styles: [__webpack_require__(/*! ./user-sign-up.component.css */ "./src/app/shared/components/user-sign-up/user-sign-up.component.css")]
        }),
        __metadata("design:paramtypes", [ngx_bootstrap__WEBPACK_IMPORTED_MODULE_2__["BsModalRef"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], UserSignUpComponent);
    return UserSignUpComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/verify-account/verify-account.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/shared/components/verify-account/verify-account.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".bg-success {\n  background-color: #56b756;\n  color: white;\n}\n\n.bg-danger {\n  background-color: #ec6161;\n  color: white;\n}\n"

/***/ }),

/***/ "./src/app/shared/components/verify-account/verify-account.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/shared/components/verify-account/verify-account.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-sm-12 text-center\">\n      <div [ngClass]=\"{'well': true, 'bg-success': !error, 'bg-danger': error}\">\n        {{ message }} <a routerLink=\"/login\" class=\"btn btn-primary btn-sm\" *ngIf=\"!error\">Login</a>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/shared/components/verify-account/verify-account.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/shared/components/verify-account/verify-account.component.ts ***!
  \******************************************************************************/
/*! exports provided: VerifyAccountComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerifyAccountComponent", function() { return VerifyAccountComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var VerifyAccountComponent = /** @class */ (function () {
    function VerifyAccountComponent(activeRoute, authService) {
        this.activeRoute = activeRoute;
        this.authService = authService;
        this.alive = true;
        this.error = true;
    }
    VerifyAccountComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activeRoute.queryParams.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeWhile"])(function () { return _this.alive; })).subscribe(function (queryParams) {
            // do something with the query params
            if (queryParams['code'] && queryParams['user_id']) {
                _this.verifyEmail(queryParams['user_id'], queryParams['code']);
            }
        });
    };
    VerifyAccountComponent.prototype.verifyEmail = function (id, code) {
        var _this = this;
        this.authService.verifyEmail(id, code).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeWhile"])(function () { return _this.alive; })).subscribe(function (response) {
            console.log(response);
            _this.error = response.error;
            _this.message = response.message;
        });
    };
    VerifyAccountComponent.prototype.ngOnDestroy = function () {
        this.alive = false;
    };
    VerifyAccountComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-verify-account',
            template: __webpack_require__(/*! ./verify-account.component.html */ "./src/app/shared/components/verify-account/verify-account.component.html"),
            styles: [__webpack_require__(/*! ./verify-account.component.css */ "./src/app/shared/components/verify-account/verify-account.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], VerifyAccountComponent);
    return VerifyAccountComponent;
}());



/***/ }),

/***/ "./src/app/shared/directives/authenticated.directive.ts":
/*!**************************************************************!*\
  !*** ./src/app/shared/directives/authenticated.directive.ts ***!
  \**************************************************************/
/*! exports provided: AuthenticatedDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticatedDirective", function() { return AuthenticatedDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthenticatedDirective = /** @class */ (function () {
    function AuthenticatedDirective(el, auth) {
        this.el = el;
        this.auth = auth;
        this.allow = false;
    }
    AuthenticatedDirective.prototype.ngOnInit = function () {
        var user = this.auth.getUser();
        if (!user.token) {
            this.el.nativeElement.style.display = 'none';
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], AuthenticatedDirective.prototype, "allow", void 0);
    AuthenticatedDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[appAuthenticated]'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], AuthenticatedDirective);
    return AuthenticatedDirective;
}());



/***/ }),

/***/ "./src/app/shared/directives/equal-validator.directive.ts":
/*!****************************************************************!*\
  !*** ./src/app/shared/directives/equal-validator.directive.ts ***!
  \****************************************************************/
/*! exports provided: EqualValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EqualValidator", function() { return EqualValidator; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var EqualValidator = /** @class */ (function () {
    function EqualValidator(validateEqual, reverse) {
        this.validateEqual = validateEqual;
        this.reverse = reverse;
    }
    EqualValidator_1 = EqualValidator;
    Object.defineProperty(EqualValidator.prototype, "isReverse", {
        get: function () {
            if (!this.reverse) {
                return false;
            }
            return this.reverse === 'true';
        },
        enumerable: true,
        configurable: true
    });
    EqualValidator.prototype.validate = function (c) {
        // self value
        var v = c.value;
        // control value
        var e = c.root.get(this.validateEqual);
        // value not equal
        if (e && v !== e.value && !this.isReverse) {
            return {
                validateEqual: false
            };
        }
        // value equal and reverse
        if (e && v === e.value && this.isReverse) {
            delete e.errors['validateEqual'];
            if (!Object.keys(e.errors).length) {
                e.setErrors(null);
            }
        }
        // value not equal and reverse
        if (e && v !== e.value && this.isReverse) {
            e.setErrors({ validateEqual: false });
        }
        return null;
    };
    EqualValidator = EqualValidator_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[validateEqual][formControlName],[validateEqual][formControl],[validateEqual][ngModel]',
            providers: [
                { provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALIDATORS"], useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return EqualValidator_1; }), multi: true }
            ]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Attribute"])('validateEqual')),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Attribute"])('reverse')),
        __metadata("design:paramtypes", [String, String])
    ], EqualValidator);
    return EqualValidator;
    var EqualValidator_1;
}());



/***/ }),

/***/ "./src/app/shared/directives/is-authenticated.directive.ts":
/*!*****************************************************************!*\
  !*** ./src/app/shared/directives/is-authenticated.directive.ts ***!
  \*****************************************************************/
/*! exports provided: IsAuthenticatedDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsAuthenticatedDirective", function() { return IsAuthenticatedDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var IsAuthenticatedDirective = /** @class */ (function () {
    function IsAuthenticatedDirective(el, auth) {
        this.el = el;
        this.auth = auth;
        this.allow = false;
    }
    IsAuthenticatedDirective.prototype.ngOnInit = function () {
        var user = this.auth.getUser();
        if (user.token) {
            this.el.nativeElement.style.display = 'none';
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], IsAuthenticatedDirective.prototype, "allow", void 0);
    IsAuthenticatedDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[appIsAuthenticated]'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], IsAuthenticatedDirective);
    return IsAuthenticatedDirective;
}());



/***/ }),

/***/ "./src/app/shared/directives/user-permission.directive.ts":
/*!****************************************************************!*\
  !*** ./src/app/shared/directives/user-permission.directive.ts ***!
  \****************************************************************/
/*! exports provided: UserPermissionDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserPermissionDirective", function() { return UserPermissionDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserPermissionDirective = /** @class */ (function () {
    function UserPermissionDirective(el, auth) {
        this.el = el;
        this.auth = auth;
    }
    UserPermissionDirective.prototype.ngOnInit = function () {
        if (!this.auth.hasPermission(this.permission)) {
            this.el.nativeElement.style.display = 'none';
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], UserPermissionDirective.prototype, "permission", void 0);
    UserPermissionDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[appUserPermission]'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], UserPermissionDirective);
    return UserPermissionDirective;
}());



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/shared/components/login/login.component.ts");
/* harmony import */ var _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/page-not-found/page-not-found.component */ "./src/app/shared/components/page-not-found/page-not-found.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _directives_user_permission_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./directives/user-permission.directive */ "./src/app/shared/directives/user-permission.directive.ts");
/* harmony import */ var _directives_is_authenticated_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./directives/is-authenticated.directive */ "./src/app/shared/directives/is-authenticated.directive.ts");
/* harmony import */ var _components_logout_logout_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/logout/logout.component */ "./src/app/shared/components/logout/logout.component.ts");
/* harmony import */ var _directives_authenticated_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./directives/authenticated.directive */ "./src/app/shared/directives/authenticated.directive.ts");
/* harmony import */ var _components_time_picker_time_picker_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/time-picker/time-picker.component */ "./src/app/shared/components/time-picker/time-picker.component.ts");
/* harmony import */ var _components_confirm_alert_box_confirm_alert_box_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/confirm-alert-box/confirm-alert-box.component */ "./src/app/shared/components/confirm-alert-box/confirm-alert-box.component.ts");
/* harmony import */ var _components_confirm_alert_box_confirm_alert_box_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/confirm-alert-box/confirm-alert-box.service */ "./src/app/shared/components/confirm-alert-box/confirm-alert-box.service.ts");
/* harmony import */ var _components_alert_alert_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/alert/alert.component */ "./src/app/shared/components/alert/alert.component.ts");
/* harmony import */ var _components_change_user_password_change_user_password_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/change-user-password/change-user-password.component */ "./src/app/shared/components/change-user-password/change-user-password.component.ts");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var _directives_equal_validator_directive__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./directives/equal-validator.directive */ "./src/app/shared/directives/equal-validator.directive.ts");
/* harmony import */ var _components_user_sign_up_user_sign_up_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/user-sign-up/user-sign-up.component */ "./src/app/shared/components/user-sign-up/user-sign-up.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_verify_account_verify_account_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/verify-account/verify-account.component */ "./src/app/shared/components/verify-account/verify-account.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_17__["RouterModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_14__["ModalModule"].forRoot(),
            ],
            exports: [
                _directives_user_permission_directive__WEBPACK_IMPORTED_MODULE_5__["UserPermissionDirective"],
                _directives_is_authenticated_directive__WEBPACK_IMPORTED_MODULE_6__["IsAuthenticatedDirective"],
                _directives_authenticated_directive__WEBPACK_IMPORTED_MODULE_8__["AuthenticatedDirective"],
                _components_logout_logout_component__WEBPACK_IMPORTED_MODULE_7__["LogoutComponent"],
                _components_time_picker_time_picker_component__WEBPACK_IMPORTED_MODULE_9__["TimePickerComponent"],
                _components_confirm_alert_box_confirm_alert_box_component__WEBPACK_IMPORTED_MODULE_10__["ConfirmAlertBoxComponent"],
                _components_alert_alert_component__WEBPACK_IMPORTED_MODULE_12__["AlertComponent"],
            ],
            entryComponents: [
                _components_confirm_alert_box_confirm_alert_box_component__WEBPACK_IMPORTED_MODULE_10__["ConfirmAlertBoxComponent"],
                _components_change_user_password_change_user_password_component__WEBPACK_IMPORTED_MODULE_13__["ChangeUserPasswordComponent"],
                _components_user_sign_up_user_sign_up_component__WEBPACK_IMPORTED_MODULE_16__["UserSignUpComponent"],
            ],
            providers: [
                _components_confirm_alert_box_confirm_alert_box_service__WEBPACK_IMPORTED_MODULE_11__["ConfirmAlertBoxService"],
            ],
            declarations: [
                _components_login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"],
                _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_3__["PageNotFoundComponent"],
                _directives_user_permission_directive__WEBPACK_IMPORTED_MODULE_5__["UserPermissionDirective"],
                _directives_is_authenticated_directive__WEBPACK_IMPORTED_MODULE_6__["IsAuthenticatedDirective"],
                _directives_authenticated_directive__WEBPACK_IMPORTED_MODULE_8__["AuthenticatedDirective"],
                _components_logout_logout_component__WEBPACK_IMPORTED_MODULE_7__["LogoutComponent"],
                _components_time_picker_time_picker_component__WEBPACK_IMPORTED_MODULE_9__["TimePickerComponent"],
                _components_confirm_alert_box_confirm_alert_box_component__WEBPACK_IMPORTED_MODULE_10__["ConfirmAlertBoxComponent"],
                _components_alert_alert_component__WEBPACK_IMPORTED_MODULE_12__["AlertComponent"],
                _components_change_user_password_change_user_password_component__WEBPACK_IMPORTED_MODULE_13__["ChangeUserPasswordComponent"],
                _directives_equal_validator_directive__WEBPACK_IMPORTED_MODULE_15__["EqualValidator"],
                _components_user_sign_up_user_sign_up_component__WEBPACK_IMPORTED_MODULE_16__["UserSignUpComponent"],
                _components_verify_account_verify_account_component__WEBPACK_IMPORTED_MODULE_18__["VerifyAccountComponent"],
            ]
        })
    ], SharedModule);
    return SharedModule;
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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
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
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/pankajbadgujar/angularjs_project/welness-angular/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map