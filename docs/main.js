(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\HP\Desktop\portfolio\src\main.ts */"zUnb");


/***/ }),

/***/ "84zG":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _presentation_presentation_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../presentation/presentation.component */ "gVBG");
/* harmony import */ var _skills_skills_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../skills/skills.component */ "fGbd");
/* harmony import */ var _interests_interests_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../interests/interests.component */ "ZSS5");





class AboutComponent {
    constructor() { }
    onWindowScroll() {
        this.scrollFunction();
    }
    ngOnInit() {
    }
    onscroll() {
        this.scrollFunction();
    }
    scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            document.getElementById("btn-back-to-top").style.display = "block";
        }
        else {
            document.getElementById("btn-back-to-top").style.display = "none";
        }
    }
    topFunction() {
        document.body.scrollTop = 0; //For Safari
        document.documentElement.scrollTop = 0; //For Chrome, Firefox, IE and Opera
    }
}
AboutComponent.ɵfac = function AboutComponent_Factory(t) { return new (t || AboutComponent)(); };
AboutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutComponent, selectors: [["app-about"]], hostBindings: function AboutComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function AboutComponent_scroll_HostBindingHandler() { return ctx.onWindowScroll(); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    } }, decls: 5, vars: 0, consts: [["type", "button", "id", "btn-back-to-top", 1, "btn", "btn-lg", 3, "click"], [1, "bi", "bi-arrow-up"]], template: function AboutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-presentation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-skills");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-interests");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AboutComponent_Template_button_click_3_listener() { return ctx.topFunction(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_presentation_presentation_component__WEBPACK_IMPORTED_MODULE_1__["PresentationComponent"], _skills_skills_component__WEBPACK_IMPORTED_MODULE_2__["SkillsComponent"], _interests_interests_component__WEBPACK_IMPORTED_MODULE_3__["InterestsComponent"]], styles: ["#btn-back-to-top[_ngcontent-%COMP%] {\r\n  position: fixed;\r\n  bottom: 20px;\r\n  right: 20px;\r\n  background-color: #005238;\r\n  color: #fff;\r\n  border-radius: 50%;\r\n  display: none;\r\n  z-index: 1;\r\n}\r\n#btn-back-to-top[_ngcontent-%COMP%]:hover {\r\n  background-color: #127757;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWJvdXQvYWJvdXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQWU7RUFDZixZQUFZO0VBQ1osV0FBVztFQUNYLHlCQUF5QjtFQUN6QixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixVQUFVO0FBQ1o7QUFDQTtFQUNFLHlCQUF5QjtBQUMzQiIsImZpbGUiOiJzcmMvYXBwL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjYnRuLWJhY2stdG8tdG9wIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgYm90dG9tOiAyMHB4O1xyXG4gIHJpZ2h0OiAyMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDUyMzg7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbiAgei1pbmRleDogMTtcclxufVxyXG4jYnRuLWJhY2stdG8tdG9wOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTI3NzU3O1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-about',
                templateUrl: './about.component.html',
                styleUrls: ['./about.component.css']
            }]
    }], function () { return []; }, { onWindowScroll: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ["window:scroll", []]
        }] }); })();


/***/ }),

/***/ "9vUh":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../footer/footer.component */ "fp1T");



class HomeComponent {
    constructor() { }
    onWindowScroll() {
        this.scrollFunction();
    }
    ngOnInit() {
    }
    onscroll() {
        this.scrollFunction();
    }
    scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            document.getElementById("btn-back-to-top").style.display = "block";
        }
        else {
            document.getElementById("btn-back-to-top").style.display = "none";
        }
    }
    topFunction() {
        document.body.scrollTop = 0; //For Safari
        document.documentElement.scrollTop = 0; //For Chrome, Firefox, IE and Opera
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], hostBindings: function HomeComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function HomeComponent_scroll_HostBindingHandler() { return ctx.onWindowScroll(); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    } }, decls: 12, vars: 0, consts: [["id", "home", 1, "landing"], [1, "container"], [1, "box"], ["href", "assets/cv/Malek.pdf", "download", "", 1, "main-btn"], ["type", "button", "id", "btn-back-to-top", 1, "btn", "btn-lg", 3, "click"], [1, "bi", "bi-arrow-up"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Hello, I'm Malek");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Welcome to my World");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Download my cv");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_9_listener() { return ctx.topFunction(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "app-footer");
    } }, directives: [_footer_footer_component__WEBPACK_IMPORTED_MODULE_1__["FooterComponent"]], styles: [".landing[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    min-height: 100vh;\r\n    display: flex;\r\n    align-items: center;\r\n    background: url('landing.jpg') no-repeat;\r\n    background-size: cover;\r\n    background-position: center;\r\n    background-attachment: fixed;\r\n  }\r\n  .landing[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n  }\r\n  .landing[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], .landing[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n    color: rgb(15, 1, 1);\r\n    line-height: 1.5;\r\n    animation: fadeInLeft 1.3s ease-in-out;\r\n  }\r\n  .landing[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n    font-size: 55px;\r\n    font-weight: bold;\r\n  }\r\n  .landing[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n    font-size: 30px;\r\n    font-weight: bold;\r\n  }\r\n  @keyframes fadeInLeft {\r\n    from {\r\n      opacity: 0;\r\n      transform: translateX(-300px);\r\n    }\r\n    to {\r\n      opacity: 1;\r\n    }\r\n  }\r\n  .landing[_ngcontent-%COMP%]   .main-btn[_ngcontent-%COMP%] {\r\n    background-color: #005238;\r\n    color: #fff;\r\n    text-decoration: none;\r\n    font-size: 15px;\r\n    font-weight: 600;\r\n    padding: 15px;\r\n    text-transform: uppercase;\r\n    border-radius: 30px;\r\n    display: inline-block;\r\n    transition: 0.7s ease;\r\n    margin-top: 25px;\r\n  }\r\n  .landing[_ngcontent-%COMP%]   .main-btn[_ngcontent-%COMP%]:hover {\r\n    background-color: #127757;\r\n    transform: scale(1.1);\r\n  }\r\n  #btn-back-to-top[_ngcontent-%COMP%] {\r\n    position: fixed;\r\n    bottom: 20px;\r\n    right: 20px;\r\n    background-color: #005238;\r\n    color: #fff;\r\n    border-radius: 50%;\r\n    display: none;\r\n    z-index: 1;\r\n    width: 55px;\r\n    height: 55px;\r\n  }\r\n  #btn-back-to-top[_ngcontent-%COMP%]:hover {\r\n    background-color: #127757;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsd0NBQTBEO0lBQzFELHNCQUFzQjtJQUN0QiwyQkFBMkI7SUFDM0IsNEJBQTRCO0VBQzlCO0VBQ0E7SUFDRSxrQkFBa0I7RUFDcEI7RUFDQTs7SUFFRSxvQkFBb0I7SUFDcEIsZ0JBQWdCO0lBQ2hCLHNDQUFzQztFQUN4QztFQUNBO0lBQ0UsZUFBZTtJQUNmLGlCQUFpQjtFQUNuQjtFQUNBO0lBQ0UsZUFBZTtJQUNmLGlCQUFpQjtFQUNuQjtFQUNBO0lBQ0U7TUFDRSxVQUFVO01BQ1YsNkJBQTZCO0lBQy9CO0lBQ0E7TUFDRSxVQUFVO0lBQ1o7RUFDRjtFQUNBO0lBQ0UseUJBQXlCO0lBQ3pCLFdBQVc7SUFDWCxxQkFBcUI7SUFDckIsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IseUJBQXlCO0lBQ3pCLG1CQUFtQjtJQUNuQixxQkFBcUI7SUFDckIscUJBQXFCO0lBQ3JCLGdCQUFnQjtFQUNsQjtFQUNBO0lBQ0UseUJBQXlCO0lBQ3pCLHFCQUFxQjtFQUN2QjtFQUVBO0lBQ0UsZUFBZTtJQUNmLFlBQVk7SUFDWixXQUFXO0lBQ1gseUJBQXlCO0lBQ3pCLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLFVBQVU7SUFDVixXQUFXO0lBQ1gsWUFBWTtFQUNkO0VBQ0E7SUFDRSx5QkFBeUI7RUFDM0IiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sYW5kaW5nIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQ6IHVybCguLy4uLy4uL2Fzc2V0cy9pbWdzL2xhbmRpbmcuanBnKSBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcclxuICB9XHJcbiAgLmxhbmRpbmcgLmJveCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG4gIC5sYW5kaW5nIGgxLFxyXG4gIC5sYW5kaW5nIGgyIHtcclxuICAgIGNvbG9yOiByZ2IoMTUsIDEsIDEpO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcclxuICAgIGFuaW1hdGlvbjogZmFkZUluTGVmdCAxLjNzIGVhc2UtaW4tb3V0O1xyXG4gIH1cclxuICAubGFuZGluZyBoMSB7XHJcbiAgICBmb250LXNpemU6IDU1cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICB9XHJcbiAgLmxhbmRpbmcgaDIge1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgfVxyXG4gIEBrZXlmcmFtZXMgZmFkZUluTGVmdCB7XHJcbiAgICBmcm9tIHtcclxuICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0zMDBweCk7XHJcbiAgICB9XHJcbiAgICB0byB7XHJcbiAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5sYW5kaW5nIC5tYWluLWJ0biB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA1MjM4O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgcGFkZGluZzogMTVweDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgdHJhbnNpdGlvbjogMC43cyBlYXNlO1xyXG4gICAgbWFyZ2luLXRvcDogMjVweDtcclxuICB9XHJcbiAgLmxhbmRpbmcgLm1haW4tYnRuOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxMjc3NTc7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XHJcbiAgfVxyXG5cclxuICAjYnRuLWJhY2stdG8tdG9wIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGJvdHRvbTogMjBweDtcclxuICAgIHJpZ2h0OiAyMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwNTIzODtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICB3aWR0aDogNTVweDtcclxuICAgIGhlaWdodDogNTVweDtcclxuICB9XHJcbiAgI2J0bi1iYWNrLXRvLXRvcDpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTI3NzU3O1xyXG4gIH1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.css']
            }]
    }], function () { return []; }, { onWindowScroll: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ["window:scroll", []]
        }] }); })();


/***/ }),

/***/ "AytR":
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
const environment = {
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

/***/ "Q0x9":
/*!********************************************!*\
  !*** ./src/app/resume/resume.component.ts ***!
  \********************************************/
/*! exports provided: ResumeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResumeComponent", function() { return ResumeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! aos */ "9a8T");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_1__);



class ResumeComponent {
    constructor() { }
    onWindowScroll() {
        this.scrollFunction();
    }
    ngOnInit() {
        aos__WEBPACK_IMPORTED_MODULE_1___default.a.init();
    }
    onscroll() {
        this.scrollFunction();
    }
    scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            document.getElementById("btn-back-to-top").style.display = "block";
        }
        else {
            document.getElementById("btn-back-to-top").style.display = "none";
        }
    }
    topFunction() {
        document.body.scrollTop = 0; //For Safari
        document.documentElement.scrollTop = 0; //For Chrome, Firefox, IE and Opera
    }
}
ResumeComponent.ɵfac = function ResumeComponent_Factory(t) { return new (t || ResumeComponent)(); };
ResumeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ResumeComponent, selectors: [["app-resume"]], hostBindings: function ResumeComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function ResumeComponent_scroll_HostBindingHandler() { return ctx.onWindowScroll(); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    } }, decls: 29, vars: 0, consts: [["data-aos", "fade-up", "data-aos-duration", "1000", "data-aos-once", "true", 1, "resume"], [1, "main-heading"], [1, "container"], [1, "timeline-content"], [1, "title"], [1, "left"], [1, "content"], [1, "clearfix"], [1, "right"], ["type", "button", "id", "btn-back-to-top", 1, "btn", "btn-lg", 3, "click"], [1, "bi", "bi-arrow-up"]], template: function ResumeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Resume");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Education");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Master Of Services And Network Security");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "2019 - 2021");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Applied Licence In Industrial IT");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "2016 - 2019");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Bachelor In Technical Sciences");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "2015 - 2016");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ResumeComponent_Template_button_click_27_listener() { return ctx.topFunction(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".main-heading[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    font-weight: 600;\r\n    font-size: 28px;\r\n    position: relative;\r\n    margin-bottom: 65px;\r\n    color: #626262;\r\n    text-transform: uppercase;\r\n  }\r\n  .main-heading[_ngcontent-%COMP%]::before {\r\n    content: \"\";\r\n    position: absolute;\r\n    background-color: #005238;\r\n    left: 50%;\r\n    transform: translateX(-50%);\r\n    bottom: -25px;\r\n    width: 50px;\r\n    height: 3px;\r\n  }\r\n  #btn-back-to-top[_ngcontent-%COMP%] {\r\n    position: fixed;\r\n    bottom: 20px;\r\n    right: 20px;\r\n    background-color: #005238;\r\n    color: #fff;\r\n    border-radius: 50%;\r\n    display: none;\r\n    z-index: 1;\r\n  }\r\n  #btn-back-to-top[_ngcontent-%COMP%]:hover {\r\n    background-color: #127757;\r\n  }\r\n  \r\n  .resume[_ngcontent-%COMP%] {\r\n    margin-top: 140px;\r\n    margin-bottom: 50px;\r\n  }\r\n  .resume[_ngcontent-%COMP%]   .timeline-content[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    overflow: hidden;\r\n  }\r\n  .resume[_ngcontent-%COMP%]   .timeline-content[_ngcontent-%COMP%]:before {\r\n    content: \"\";\r\n    width: 3px;\r\n    height: 100%;\r\n    background-color: #005238;\r\n    position: absolute;\r\n    left: 50%;\r\n    margin-left: -1px;\r\n    top: 0;\r\n  }\r\n  .resume[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\r\n    margin: 20px auto;\r\n    width: 20%;\r\n    background-color: #005238;\r\n    position: relative;\r\n    z-index: 2;\r\n    border-radius: 4px;\r\n    text-align: center;\r\n    color: #fff;\r\n    padding: 10px 30px;\r\n    font-weight: 600;\r\n    font-size: 22px;\r\n    margin-bottom: 45px;\r\n  }\r\n  .resume[_ngcontent-%COMP%]   .timeline-content[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%], .resume[_ngcontent-%COMP%]   .timeline-content[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%] {\r\n    width: calc(50% - 25px);\r\n    margin-bottom: 40px;\r\n    position: relative;\r\n  }\r\n  .resume[_ngcontent-%COMP%]   .timeline-content[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%] {\r\n    float: left;\r\n  }\r\n  .resume[_ngcontent-%COMP%]   .timeline-content[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]:before {\r\n    right: -35px;\r\n  }\r\n  .resume[_ngcontent-%COMP%]   .timeline-content[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%] {\r\n    float: right;\r\n  }\r\n  .resume[_ngcontent-%COMP%]   .timeline-content[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]:before {\r\n    left: -35px;\r\n  }\r\n  .resume[_ngcontent-%COMP%]   .timeline-content[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]:before, .resume[_ngcontent-%COMP%]   .timeline-content[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]:before {\r\n    content: \"\";\r\n    width: 20px;\r\n    height: 20px;\r\n    border: 3px solid #005238;\r\n    background-color: #fff;\r\n    position: absolute;\r\n    border-radius: 50%;\r\n    top: 20px;\r\n  }\r\n  .clearfix[_ngcontent-%COMP%] {\r\n    clear: both;\r\n  }\r\n  .resume[_ngcontent-%COMP%]   .timeline-content[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\r\n    padding: 30px;\r\n    background-color: #f5f5f5;\r\n  }\r\n  .resume[_ngcontent-%COMP%]   .timeline-content[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\r\n    color: #005238;\r\n    font-size: 17px;\r\n    text-transform: uppercase;\r\n    font-weight: bold;\r\n  }\r\n  .resume[_ngcontent-%COMP%]   .timeline-content[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    font-size: 17px;\r\n    font-weight: 600;\r\n    color: #626262;\r\n  }\r\n  @media (max-width: 992px) {\r\n    .resume[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\r\n      width: 60%;\r\n    }\r\n    .resume[_ngcontent-%COMP%]   .timeline-content[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%], .resume[_ngcontent-%COMP%]   .timeline-content[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%] {\r\n      width: 100%;\r\n      margin-bottom: 20px;\r\n    }\r\n    .resume[_ngcontent-%COMP%]   .timeline-content[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]:before, .resume[_ngcontent-%COMP%]   .timeline-content[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]:before {\r\n      display: none;\r\n    }\r\n    .resume[_ngcontent-%COMP%]   .timeline-content[_ngcontent-%COMP%] {\r\n      text-align: center;\r\n    }\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVzdW1lL3Jlc3VtZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdDQUFnQztFQUM5QjtJQUNFLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsY0FBYztJQUNkLHlCQUF5QjtFQUMzQjtFQUNBO0lBQ0UsV0FBVztJQUNYLGtCQUFrQjtJQUNsQix5QkFBeUI7SUFDekIsU0FBUztJQUNULDJCQUEyQjtJQUMzQixhQUFhO0lBQ2IsV0FBVztJQUNYLFdBQVc7RUFDYjtFQUNBO0lBQ0UsZUFBZTtJQUNmLFlBQVk7SUFDWixXQUFXO0lBQ1gseUJBQXlCO0lBQ3pCLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLFVBQVU7RUFDWjtFQUNBO0lBQ0UseUJBQXlCO0VBQzNCO0VBQ0EsOEJBQThCO0VBRTlCO0lBQ0UsaUJBQWlCO0lBQ2pCLG1CQUFtQjtFQUNyQjtFQUNBO0lBQ0Usa0JBQWtCO0lBQ2xCLGdCQUFnQjtFQUNsQjtFQUNBO0lBQ0UsV0FBVztJQUNYLFVBQVU7SUFDVixZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsaUJBQWlCO0lBQ2pCLE1BQU07RUFDUjtFQUNBO0lBQ0UsaUJBQWlCO0lBQ2pCLFVBQVU7SUFDVix5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixtQkFBbUI7RUFDckI7RUFDQTs7SUFFRSx1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGtCQUFrQjtFQUNwQjtFQUNBO0lBQ0UsV0FBVztFQUNiO0VBQ0E7SUFDRSxZQUFZO0VBQ2Q7RUFDQTtJQUNFLFlBQVk7RUFDZDtFQUNBO0lBQ0UsV0FBVztFQUNiO0VBQ0E7O0lBRUUsV0FBVztJQUNYLFdBQVc7SUFDWCxZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLFNBQVM7RUFDWDtFQUNBO0lBQ0UsV0FBVztFQUNiO0VBQ0E7SUFDRSxhQUFhO0lBQ2IseUJBQXlCO0VBQzNCO0VBQ0E7SUFDRSxjQUFjO0lBQ2QsZUFBZTtJQUNmLHlCQUF5QjtJQUN6QixpQkFBaUI7RUFDbkI7RUFDQTtJQUNFLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsY0FBYztFQUNoQjtFQUNBO0lBQ0U7TUFDRSxVQUFVO0lBQ1o7SUFDQTs7TUFFRSxXQUFXO01BQ1gsbUJBQW1CO0lBQ3JCO0lBQ0E7O01BRUUsYUFBYTtJQUNmO0lBQ0E7TUFDRSxrQkFBa0I7SUFDcEI7RUFDRiIsImZpbGUiOiJzcmMvYXBwL3Jlc3VtZS9yZXN1bWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIC0tLS0tICMgU3RhcnQgVGl0bGUgIyAtLS0tLSAqL1xyXG4gIC5tYWluLWhlYWRpbmcge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGZvbnQtc2l6ZTogMjhweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG1hcmdpbi1ib3R0b206IDY1cHg7XHJcbiAgICBjb2xvcjogIzYyNjI2MjtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgfVxyXG4gIC5tYWluLWhlYWRpbmc6OmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwNTIzODtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcclxuICAgIGJvdHRvbTogLTI1cHg7XHJcbiAgICB3aWR0aDogNTBweDtcclxuICAgIGhlaWdodDogM3B4O1xyXG4gIH1cclxuICAjYnRuLWJhY2stdG8tdG9wIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGJvdHRvbTogMjBweDtcclxuICAgIHJpZ2h0OiAyMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwNTIzODtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgfVxyXG4gICNidG4tYmFjay10by10b3A6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzEyNzc1NztcclxuICB9XHJcbiAgLyogLS0tLS0gIyBFbmQgVGl0bGUgIyAtLS0tLSAqL1xyXG5cclxuICAucmVzdW1lIHtcclxuICAgIG1hcmdpbi10b3A6IDE0MHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNTBweDtcclxuICB9XHJcbiAgLnJlc3VtZSAudGltZWxpbmUtY29udGVudCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIH1cclxuICAucmVzdW1lIC50aW1lbGluZS1jb250ZW50OmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgd2lkdGg6IDNweDtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDUyMzg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICBtYXJnaW4tbGVmdDogLTFweDtcclxuICAgIHRvcDogMDtcclxuICB9XHJcbiAgLnJlc3VtZSAudGl0bGUge1xyXG4gICAgbWFyZ2luOiAyMHB4IGF1dG87XHJcbiAgICB3aWR0aDogMjAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwNTIzODtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHotaW5kZXg6IDI7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHBhZGRpbmc6IDEwcHggMzBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA0NXB4O1xyXG4gIH1cclxuICAucmVzdW1lIC50aW1lbGluZS1jb250ZW50IC5sZWZ0LFxyXG4gIC5yZXN1bWUgLnRpbWVsaW5lLWNvbnRlbnQgLnJpZ2h0IHtcclxuICAgIHdpZHRoOiBjYWxjKDUwJSAtIDI1cHgpO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNDBweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB9XHJcbiAgLnJlc3VtZSAudGltZWxpbmUtY29udGVudCAubGVmdCB7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICB9XHJcbiAgLnJlc3VtZSAudGltZWxpbmUtY29udGVudCAubGVmdDpiZWZvcmUge1xyXG4gICAgcmlnaHQ6IC0zNXB4O1xyXG4gIH1cclxuICAucmVzdW1lIC50aW1lbGluZS1jb250ZW50IC5yaWdodCB7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgfVxyXG4gIC5yZXN1bWUgLnRpbWVsaW5lLWNvbnRlbnQgLnJpZ2h0OmJlZm9yZSB7XHJcbiAgICBsZWZ0OiAtMzVweDtcclxuICB9XHJcbiAgLnJlc3VtZSAudGltZWxpbmUtY29udGVudCAubGVmdDpiZWZvcmUsXHJcbiAgLnJlc3VtZSAudGltZWxpbmUtY29udGVudCAucmlnaHQ6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICB3aWR0aDogMjBweDtcclxuICAgIGhlaWdodDogMjBweDtcclxuICAgIGJvcmRlcjogM3B4IHNvbGlkICMwMDUyMzg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgdG9wOiAyMHB4O1xyXG4gIH1cclxuICAuY2xlYXJmaXgge1xyXG4gICAgY2xlYXI6IGJvdGg7XHJcbiAgfVxyXG4gIC5yZXN1bWUgLnRpbWVsaW5lLWNvbnRlbnQgLmNvbnRlbnQge1xyXG4gICAgcGFkZGluZzogMzBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XHJcbiAgfVxyXG4gIC5yZXN1bWUgLnRpbWVsaW5lLWNvbnRlbnQgLmNvbnRlbnQgaDMge1xyXG4gICAgY29sb3I6ICMwMDUyMzg7XHJcbiAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgfVxyXG4gIC5yZXN1bWUgLnRpbWVsaW5lLWNvbnRlbnQgLmNvbnRlbnQgcCB7XHJcbiAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgY29sb3I6ICM2MjYyNjI7XHJcbiAgfVxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA5OTJweCkge1xyXG4gICAgLnJlc3VtZSAudGl0bGUge1xyXG4gICAgICB3aWR0aDogNjAlO1xyXG4gICAgfVxyXG4gICAgLnJlc3VtZSAudGltZWxpbmUtY29udGVudCAubGVmdCxcclxuICAgIC5yZXN1bWUgLnRpbWVsaW5lLWNvbnRlbnQgLnJpZ2h0IHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICB9XHJcbiAgICAucmVzdW1lIC50aW1lbGluZS1jb250ZW50IC5sZWZ0OmJlZm9yZSxcclxuICAgIC5yZXN1bWUgLnRpbWVsaW5lLWNvbnRlbnQgLnJpZ2h0OmJlZm9yZSB7XHJcbiAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbiAgICAucmVzdW1lIC50aW1lbGluZS1jb250ZW50IHtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG4gIH0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ResumeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-resume',
                templateUrl: './resume.component.html',
                styleUrls: ['./resume.component.css']
            }]
    }], function () { return []; }, { onWindowScroll: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ["window:scroll", []]
        }] }); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navbar/navbar.component */ "kWWo");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");




class AppComponent {
    constructor() {
        this.title = 'portfolio';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
    } }, directives: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__["NavbarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./navbar/navbar.component */ "kWWo");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./footer/footer.component */ "fp1T");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./about/about.component */ "84zG");
/* harmony import */ var _resume_resume_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./resume/resume.component */ "Q0x9");
/* harmony import */ var _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./portfolio/portfolio.component */ "zyDg");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./contact/contact.component */ "bzTf");
/* harmony import */ var _presentation_presentation_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./presentation/presentation.component */ "gVBG");
/* harmony import */ var _skills_skills_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./skills/skills.component */ "fGbd");
/* harmony import */ var _interests_interests_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./interests/interests.component */ "ZSS5");















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"],
        _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"],
        _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
        _about_about_component__WEBPACK_IMPORTED_MODULE_7__["AboutComponent"],
        _resume_resume_component__WEBPACK_IMPORTED_MODULE_8__["ResumeComponent"],
        _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_9__["PortfolioComponent"],
        _contact_contact_component__WEBPACK_IMPORTED_MODULE_10__["ContactComponent"],
        _presentation_presentation_component__WEBPACK_IMPORTED_MODULE_11__["PresentationComponent"],
        _skills_skills_component__WEBPACK_IMPORTED_MODULE_12__["SkillsComponent"],
        _interests_interests_component__WEBPACK_IMPORTED_MODULE_13__["InterestsComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"],
                    _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"],
                    _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
                    _about_about_component__WEBPACK_IMPORTED_MODULE_7__["AboutComponent"],
                    _resume_resume_component__WEBPACK_IMPORTED_MODULE_8__["ResumeComponent"],
                    _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_9__["PortfolioComponent"],
                    _contact_contact_component__WEBPACK_IMPORTED_MODULE_10__["ContactComponent"],
                    _presentation_presentation_component__WEBPACK_IMPORTED_MODULE_11__["PresentationComponent"],
                    _skills_skills_component__WEBPACK_IMPORTED_MODULE_12__["SkillsComponent"],
                    _interests_interests_component__WEBPACK_IMPORTED_MODULE_13__["InterestsComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "ZSS5":
/*!**************************************************!*\
  !*** ./src/app/interests/interests.component.ts ***!
  \**************************************************/
/*! exports provided: InterestsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InterestsComponent", function() { return InterestsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! aos */ "9a8T");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_1__);



class InterestsComponent {
    constructor() { }
    ngOnInit() {
        aos__WEBPACK_IMPORTED_MODULE_1___default.a.init();
    }
}
InterestsComponent.ɵfac = function InterestsComponent_Factory(t) { return new (t || InterestsComponent)(); };
InterestsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: InterestsComponent, selectors: [["app-interests"]], decls: 23, vars: 0, consts: [[1, "interests"], ["data-aos", "zoom-in", "data-aos-duration", "1000", "data-aos-once", "true", 1, "main-heading"], [1, "container"], [1, "row"], [1, "col-sm-6", "col-md-6", "col-lg-4"], ["data-work", "Swimming", 1, "box", "mb-3", "bg-white"], ["src", "assets/imgs/interests/interests01.jpg", "alt", "", "data-aos", "zoom-in", "data-aos-duration", "1000", "data-aos-once", "true", 1, "img-fluid"], ["data-work", "Trainning", 1, "box", "mb-3", "bg-white"], ["src", "assets/imgs/interests/interests02.jpg", "alt", "", "data-aos", "zoom-in", "data-aos-duration", "1000", "data-aos-once", "true", 1, "img-fluid"], ["data-work", "Hiking", 1, "box", "mb-3", "bg-white"], ["src", "assets/imgs/interests/interests03.jpg", "alt", "", "data-aos", "zoom-in", "data-aos-duration", "1000", "data-aos-once", "true", 1, "img-fluid"], ["data-work", "Camping", 1, "box", "mb-3", "bg-white"], ["src", "assets/imgs/interests/interests04.jpg", "alt", "", "data-aos", "zoom-in", "data-aos-duration", "1000", "data-aos-once", "true", 1, "img-fluid"], ["data-work", "Coding", 1, "box", "mb-3", "bg-white"], ["src", "assets/imgs/interests/interests05.jpg", "alt", "", "data-aos", "zoom-in", "data-aos-duration", "1000", "data-aos-once", "true", 1, "img-fluid"], ["data-work", "Cooking", 1, "box", "mb-3", "bg-white"], ["src", "assets/imgs/interests/interests06.jpg", "alt", "", "data-aos", "zoom-in", "data-aos-duration", "1000", "data-aos-once", "true", 1, "img-fluid"]], template: function InterestsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Interests ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".main-heading[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    font-weight: 600;\r\n    font-size: 28px;\r\n    position: relative;\r\n    margin-bottom: 65px;\r\n    color: #626262;\r\n    text-transform: uppercase;\r\n  }\r\n  .main-heading[_ngcontent-%COMP%]::before {\r\n    content: \"\";\r\n    position: absolute;\r\n    background-color: #005238;\r\n    left: 50%;\r\n    transform: translateX(-50%);\r\n    bottom: -25px;\r\n    width: 50px;\r\n    height: 3px;\r\n  }\r\n  #btn-back-to-top[_ngcontent-%COMP%] {\r\n    position: fixed;\r\n    bottom: 20px;\r\n    right: 20px;\r\n    background-color: #005238;\r\n    color: #fff;\r\n    border-radius: 50%;\r\n    display: none;\r\n    z-index: 1;\r\n  }\r\n  #btn-back-to-top[_ngcontent-%COMP%]:hover {\r\n    background-color: #127757;\r\n  }\r\n  \r\n  .interests[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    height: 17rem;\r\n    width: 26rem;\r\n  }\r\n  @media (max-width: 565px) {\r\n    .interests[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n      width: 100%;\r\n    }\r\n  }\r\n  .interests[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%] {\r\n    padding: 5px;\r\n    overflow: hidden;\r\n    position: relative;\r\n  }\r\n  .interests[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]::before {\r\n    content: attr(data-work);\r\n    position: absolute;\r\n    background-color: rgb(185 220 164 / 75%);\r\n    width: calc(100% - 10px);\r\n    height: calc(100% - 10px);\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    font-weight: bold;\r\n    color: white;\r\n    transition: 0.3s;\r\n    font-size: 1.5rem;\r\n    transform: translateX(calc(-100% - 5px));\r\n    z-index: 20;\r\n  }\r\n  .interests[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]:hover::before {\r\n    transform: translateX(0);\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW50ZXJlc3RzL2ludGVyZXN0cy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJFQUFFLGdDQUFnQztFQUNoQztJQUNFLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsY0FBYztJQUNkLHlCQUF5QjtFQUMzQjtFQUNBO0lBQ0UsV0FBVztJQUNYLGtCQUFrQjtJQUNsQix5QkFBeUI7SUFDekIsU0FBUztJQUNULDJCQUEyQjtJQUMzQixhQUFhO0lBQ2IsV0FBVztJQUNYLFdBQVc7RUFDYjtFQUNBO0lBQ0UsZUFBZTtJQUNmLFlBQVk7SUFDWixXQUFXO0lBQ1gseUJBQXlCO0lBQ3pCLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLFVBQVU7RUFDWjtFQUNBO0lBQ0UseUJBQXlCO0VBQzNCO0VBQ0EsOEJBQThCO0VBRTlCO0lBQ0UsYUFBYTtJQUNiLFlBQVk7RUFDZDtFQUNBO0lBQ0U7TUFDRSxXQUFXO0lBQ2I7RUFDRjtFQUNBO0lBQ0UsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixrQkFBa0I7RUFDcEI7RUFDQTtJQUNFLHdCQUF3QjtJQUN4QixrQkFBa0I7SUFDbEIsd0NBQXdDO0lBQ3hDLHdCQUF3QjtJQUN4Qix5QkFBeUI7SUFDekIsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLHdDQUF3QztJQUN4QyxXQUFXO0VBQ2I7RUFDQTtJQUNFLHdCQUF3QjtFQUMxQiIsImZpbGUiOiJzcmMvYXBwL2ludGVyZXN0cy9pbnRlcmVzdHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiAgLyogLS0tLS0gIyBTdGFydCBUaXRsZSAjIC0tLS0tICovXHJcbiAgLm1haW4taGVhZGluZyB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgZm9udC1zaXplOiAyOHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNjVweDtcclxuICAgIGNvbG9yOiAjNjI2MjYyO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICB9XHJcbiAgLm1haW4taGVhZGluZzo6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA1MjM4O1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xyXG4gICAgYm90dG9tOiAtMjVweDtcclxuICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgaGVpZ2h0OiAzcHg7XHJcbiAgfVxyXG4gICNidG4tYmFjay10by10b3Age1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgYm90dG9tOiAyMHB4O1xyXG4gICAgcmlnaHQ6IDIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA1MjM4O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgei1pbmRleDogMTtcclxuICB9XHJcbiAgI2J0bi1iYWNrLXRvLXRvcDpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTI3NzU3O1xyXG4gIH1cclxuICAvKiAtLS0tLSAjIEVuZCBUaXRsZSAjIC0tLS0tICovXHJcblxyXG4gIC5pbnRlcmVzdHMgLnJvdyBpbWcge1xyXG4gICAgaGVpZ2h0OiAxN3JlbTtcclxuICAgIHdpZHRoOiAyNnJlbTtcclxuICB9XHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDU2NXB4KSB7XHJcbiAgICAuaW50ZXJlc3RzIC5yb3cgaW1nIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5pbnRlcmVzdHMgLnJvdyAuYm94IHtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgfVxyXG4gIC5pbnRlcmVzdHMgLnJvdyAuYm94OjpiZWZvcmUge1xyXG4gICAgY29udGVudDogYXR0cihkYXRhLXdvcmspO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE4NSAyMjAgMTY0IC8gNzUlKTtcclxuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAxMHB4KTtcclxuICAgIGhlaWdodDogY2FsYygxMDAlIC0gMTBweCk7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjNzO1xyXG4gICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoY2FsYygtMTAwJSAtIDVweCkpO1xyXG4gICAgei1pbmRleDogMjA7XHJcbiAgfVxyXG4gIC5pbnRlcmVzdHMgLnJvdyAuYm94OmhvdmVyOjpiZWZvcmUge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xyXG4gIH0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InterestsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-interests',
                templateUrl: './interests.component.html',
                styleUrls: ['./interests.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "bzTf":
/*!**********************************************!*\
  !*** ./src/app/contact/contact.component.ts ***!
  \**********************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! aos */ "9a8T");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_1__);



class ContactComponent {
    constructor() { }
    onWindowScroll() {
        this.scrollFunction();
    }
    ngOnInit() {
        aos__WEBPACK_IMPORTED_MODULE_1___default.a.init();
    }
    onscroll() {
        this.scrollFunction();
    }
    scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            document.getElementById("btn-back-to-top").style.display = "block";
        }
        else {
            document.getElementById("btn-back-to-top").style.display = "none";
        }
    }
    topFunction() {
        document.body.scrollTop = 0; //For Safari
        document.documentElement.scrollTop = 0; //For Chrome, Firefox, IE and Opera
    }
}
ContactComponent.ɵfac = function ContactComponent_Factory(t) { return new (t || ContactComponent)(); };
ContactComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContactComponent, selectors: [["app-contact"]], hostBindings: function ContactComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function ContactComponent_scroll_HostBindingHandler() { return ctx.onWindowScroll(); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    } }, decls: 34, vars: 0, consts: [["data-aos", "fade-up", "data-aos-duration", "1000", "data-aos-once", "true", 1, "contact"], [1, "main-heading"], [1, "container"], [1, "row", "text-center"], [1, "col-sm-6", "col-md-4", "col-lg-4", "mb-4"], [1, "card", "border-0"], [1, "h1", "mt-4"], [1, "bi", "bi-geo-alt"], [1, "card-body", "text-center"], [1, "card-title"], [1, "bi", "bi-envelope"], [1, "bi", "bi-telephone"], ["type", "button", "id", "btn-back-to-top", 1, "btn", "btn-lg", 3, "click"], [1, "bi", "bi-arrow-up"]], template: function ContactComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Location");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Tunisia");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "koukimalek97@gmail.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Call");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "(+216) 58 787 449");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ContactComponent_Template_button_click_32_listener() { return ctx.topFunction(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".main-heading[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    font-weight: 600;\r\n    font-size: 28px;\r\n    position: relative;\r\n    margin-bottom: 65px;\r\n    color: #626262;\r\n    text-transform: uppercase;\r\n    margin-top: 140px;\r\n  }\r\n.main-heading[_ngcontent-%COMP%]::before {\r\n    content: \"\";\r\n    position: absolute;\r\n    background-color: #005238;\r\n    left: 50%;\r\n    transform: translateX(-50%);\r\n    bottom: -25px;\r\n    width: 50px;\r\n    height: 3px;\r\n  }\r\n#btn-back-to-top[_ngcontent-%COMP%] {\r\n    position: fixed;\r\n    bottom: 20px;\r\n    right: 20px;\r\n    background-color: #005238;\r\n    color: #fff;\r\n    border-radius: 50%;\r\n    display: none;\r\n    z-index: 1;\r\n  }\r\n#btn-back-to-top[_ngcontent-%COMP%]:hover {\r\n    background-color: #127757;\r\n  }\r\n\r\n.contact[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\r\n    color: #fff;\r\n    background-color: rgb(18 119 80 / 75%);\r\n  }\r\n.contact[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\r\n    font-weight: bold;\r\n    color: #fff;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0NBQWdDO0FBQ2hDO0lBQ0ksa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixjQUFjO0lBQ2QseUJBQXlCO0lBQ3pCLGlCQUFpQjtFQUNuQjtBQUNBO0lBQ0UsV0FBVztJQUNYLGtCQUFrQjtJQUNsQix5QkFBeUI7SUFDekIsU0FBUztJQUNULDJCQUEyQjtJQUMzQixhQUFhO0lBQ2IsV0FBVztJQUNYLFdBQVc7RUFDYjtBQUNBO0lBQ0UsZUFBZTtJQUNmLFlBQVk7SUFDWixXQUFXO0lBQ1gseUJBQXlCO0lBQ3pCLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLFVBQVU7RUFDWjtBQUNBO0lBQ0UseUJBQXlCO0VBQzNCO0FBQ0EsOEJBQThCO0FBRTlCO0lBQ0UsV0FBVztJQUNYLHNDQUFzQztFQUN4QztBQUNBO0lBQ0UsaUJBQWlCO0lBQ2pCLFdBQVc7RUFDYiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhY3QvY29udGFjdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogLS0tLS0gIyBTdGFydCBUaXRsZSAjIC0tLS0tICovXHJcbi5tYWluLWhlYWRpbmcge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGZvbnQtc2l6ZTogMjhweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG1hcmdpbi1ib3R0b206IDY1cHg7XHJcbiAgICBjb2xvcjogIzYyNjI2MjtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBtYXJnaW4tdG9wOiAxNDBweDtcclxuICB9XHJcbiAgLm1haW4taGVhZGluZzo6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA1MjM4O1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xyXG4gICAgYm90dG9tOiAtMjVweDtcclxuICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgaGVpZ2h0OiAzcHg7XHJcbiAgfVxyXG4gICNidG4tYmFjay10by10b3Age1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgYm90dG9tOiAyMHB4O1xyXG4gICAgcmlnaHQ6IDIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA1MjM4O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgei1pbmRleDogMTtcclxuICB9XHJcbiAgI2J0bi1iYWNrLXRvLXRvcDpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTI3NzU3O1xyXG4gIH1cclxuICAvKiAtLS0tLSAjIEVuZCBUaXRsZSAjIC0tLS0tICovXHJcblxyXG4gIC5jb250YWN0IC5jYXJkIHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE4IDExOSA4MCAvIDc1JSk7XHJcbiAgfVxyXG4gIC5jb250YWN0IC5jYXJkIGg0IHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgfSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-contact',
                templateUrl: './contact.component.html',
                styleUrls: ['./contact.component.css']
            }]
    }], function () { return []; }, { onWindowScroll: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ["window:scroll", []]
        }] }); })();


/***/ }),

/***/ "fGbd":
/*!********************************************!*\
  !*** ./src/app/skills/skills.component.ts ***!
  \********************************************/
/*! exports provided: SkillsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkillsComponent", function() { return SkillsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! aos */ "9a8T");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_1__);



class SkillsComponent {
    constructor() { }
    ngOnInit() {
        aos__WEBPACK_IMPORTED_MODULE_1___default.a.init();
    }
}
SkillsComponent.ɵfac = function SkillsComponent_Factory(t) { return new (t || SkillsComponent)(); };
SkillsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SkillsComponent, selectors: [["app-skills"]], decls: 35, vars: 0, consts: [["data-aos", "fade-up", "data-aos-duration", "1000", "data-aos-once", "true", 1, "skills"], [1, "main-heading"], [1, "container"], [1, "row"], [1, "col-lg-6", "col-sm-12"], [1, "skill"], [1, "the-progress"], ["data-width", "100%", 2, "width", "100%"], ["data-width", "90%", 2, "width", "90%"], ["data-width", "60%", 2, "width", "60%"], ["data-width", "50%", 2, "width", "50%"]], template: function SkillsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Skills");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Html ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "100%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Css ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "90%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "JavaScript ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "60%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Angular ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "50%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".main-heading[_ngcontent-%COMP%] {\r\n        text-align: center;\r\n        font-weight: 600;\r\n        font-size: 28px;\r\n        position: relative;\r\n        margin-bottom: 65px;\r\n        color: #626262;\r\n        text-transform: uppercase;\r\n      }\r\n    .main-heading[_ngcontent-%COMP%]::before {\r\n        content: \"\";\r\n        position: absolute;\r\n        background-color: #005238;\r\n        left: 50%;\r\n        transform: translateX(-50%);\r\n        bottom: -25px;\r\n        width: 50px;\r\n        height: 3px;\r\n      }\r\n    #btn-back-to-top[_ngcontent-%COMP%] {\r\n        position: fixed;\r\n        bottom: 20px;\r\n        right: 20px;\r\n        background-color: #005238;\r\n        color: #fff;\r\n        border-radius: 50%;\r\n        display: none;\r\n        z-index: 1;\r\n      }\r\n    #btn-back-to-top[_ngcontent-%COMP%]:hover {\r\n        background-color: #127757;\r\n      }\r\n    \r\n    .skills[_ngcontent-%COMP%] {\r\n    margin-bottom: 120px;\r\n    margin-top: 60px;\r\n  }\r\n    .row[_ngcontent-%COMP%]   .skill[_ngcontent-%COMP%] {\r\n    margin-bottom: 20px;\r\n  }\r\n    .skill[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    font-weight: bold;\r\n    font-size: 15px;\r\n    text-transform: uppercase;\r\n  }\r\n    .skill[_ngcontent-%COMP%]   .the-progress[_ngcontent-%COMP%] {\r\n    height: 10px;\r\n    background-color: #eee;\r\n    position: relative;\r\n  }\r\n    .skill[_ngcontent-%COMP%]   .the-progress[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    left: 0;\r\n    top: 0;\r\n    height: 100%;\r\n    background-color: #005238;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2tpbGxzL3NraWxscy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJJQUFJLGdDQUFnQztJQUNoQztRQUNJLGtCQUFrQjtRQUNsQixnQkFBZ0I7UUFDaEIsZUFBZTtRQUNmLGtCQUFrQjtRQUNsQixtQkFBbUI7UUFDbkIsY0FBYztRQUNkLHlCQUF5QjtNQUMzQjtJQUNBO1FBQ0UsV0FBVztRQUNYLGtCQUFrQjtRQUNsQix5QkFBeUI7UUFDekIsU0FBUztRQUNULDJCQUEyQjtRQUMzQixhQUFhO1FBQ2IsV0FBVztRQUNYLFdBQVc7TUFDYjtJQUNBO1FBQ0UsZUFBZTtRQUNmLFlBQVk7UUFDWixXQUFXO1FBQ1gseUJBQXlCO1FBQ3pCLFdBQVc7UUFDWCxrQkFBa0I7UUFDbEIsYUFBYTtRQUNiLFVBQVU7TUFDWjtJQUNBO1FBQ0UseUJBQXlCO01BQzNCO0lBQ0EsOEJBQThCO0lBRWxDO0lBQ0Usb0JBQW9CO0lBQ3BCLGdCQUFnQjtFQUNsQjtJQUNBO0lBQ0UsbUJBQW1CO0VBQ3JCO0lBQ0E7SUFDRSxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsZUFBZTtJQUNmLHlCQUF5QjtFQUMzQjtJQUNBO0lBQ0UsWUFBWTtJQUNaLHNCQUFzQjtJQUN0QixrQkFBa0I7RUFDcEI7SUFDQTtJQUNFLGtCQUFrQjtJQUNsQixPQUFPO0lBQ1AsTUFBTTtJQUNOLFlBQVk7SUFDWix5QkFBeUI7RUFDM0IiLCJmaWxlIjoic3JjL2FwcC9za2lsbHMvc2tpbGxzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIgICAgLyogLS0tLS0gIyBTdGFydCBUaXRsZSAjIC0tLS0tICovXHJcbiAgICAubWFpbi1oZWFkaW5nIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICBmb250LXNpemU6IDI4cHg7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDY1cHg7XHJcbiAgICAgICAgY29sb3I6ICM2MjYyNjI7XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgfVxyXG4gICAgICAubWFpbi1oZWFkaW5nOjpiZWZvcmUge1xyXG4gICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDUyMzg7XHJcbiAgICAgICAgbGVmdDogNTAlO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcclxuICAgICAgICBib3R0b206IC0yNXB4O1xyXG4gICAgICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgICAgIGhlaWdodDogM3B4O1xyXG4gICAgICB9XHJcbiAgICAgICNidG4tYmFjay10by10b3Age1xyXG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICBib3R0b206IDIwcHg7XHJcbiAgICAgICAgcmlnaHQ6IDIwcHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwNTIzODtcclxuICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICB6LWluZGV4OiAxO1xyXG4gICAgICB9XHJcbiAgICAgICNidG4tYmFjay10by10b3A6aG92ZXIge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxMjc3NTc7XHJcbiAgICAgIH1cclxuICAgICAgLyogLS0tLS0gIyBFbmQgVGl0bGUgIyAtLS0tLSAqL1xyXG5cclxuICAuc2tpbGxzIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDEyMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogNjBweDtcclxuICB9XHJcbiAgLnJvdyAuc2tpbGwge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICB9XHJcbiAgLnNraWxsIHAge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgfVxyXG4gIC5za2lsbCAudGhlLXByb2dyZXNzIHtcclxuICAgIGhlaWdodDogMTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgfVxyXG4gIC5za2lsbCAudGhlLXByb2dyZXNzIHNwYW4ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHRvcDogMDtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDUyMzg7XHJcbiAgfSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SkillsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-skills',
                templateUrl: './skills.component.html',
                styleUrls: ['./skills.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "fp1T":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 16, vars: 0, consts: [[1, "footer"], [1, "social"], ["routerLink", "", 1, "facebook"], [1, "bi", "bi-facebook"], ["routerLink", "", 1, "instagram"], [1, "bi", "bi-instagram"], ["routerLink", "", 1, "linkedin"], [1, "bi", "bi-linkedin"], [1, "copyright", "mt-0"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "\u00A9 Copyright ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Malek");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, ". All Rights Reserved");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: [".footer[_ngcontent-%COMP%] {\r\n    background-color: #eaecee;\r\n    text-align: center;\r\n    padding: 30px;\r\n  }\r\n  .footer[_ngcontent-%COMP%]   .social[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n  }\r\n  .footer[_ngcontent-%COMP%]   .social[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n    margin-right: 10px;\r\n    list-style: none;\r\n  }\r\n  .footer[_ngcontent-%COMP%]   .social[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    color: white;\r\n    display: inline-flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    width: 35px;\r\n    height: 35px;\r\n    border-radius: 50%;\r\n  }\r\n  .footer[_ngcontent-%COMP%]   .social[_ngcontent-%COMP%]   .facebook[_ngcontent-%COMP%] {\r\n    background-color: #1877f2;\r\n  }\r\n  .footer[_ngcontent-%COMP%]   .social[_ngcontent-%COMP%]   .facebook[_ngcontent-%COMP%]:hover {\r\n    background-color: #5897eb;\r\n  }\r\n  .footer[_ngcontent-%COMP%]   .social[_ngcontent-%COMP%]   .instagram[_ngcontent-%COMP%] {\r\n    background-color: #dd2a7b;\r\n  }\r\n  .footer[_ngcontent-%COMP%]   .social[_ngcontent-%COMP%]   .instagram[_ngcontent-%COMP%]:hover {\r\n    background-color: #db659a;\r\n  }\r\n  .footer[_ngcontent-%COMP%]   .social[_ngcontent-%COMP%]   .linkedin[_ngcontent-%COMP%] {\r\n    background-color: #0077b5;\r\n  }\r\n  .footer[_ngcontent-%COMP%]   .social[_ngcontent-%COMP%]   .linkedin[_ngcontent-%COMP%]:hover {\r\n    background-color: #2197d6;\r\n  }\r\n  .footer[_ngcontent-%COMP%]   .copyright[_ngcontent-%COMP%] {\r\n    color: #626262;\r\n    font-weight: 400;\r\n    font-size: 15px;\r\n  }\r\n  .footer[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n    font-weight: bold;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJFQUFFO0lBQ0UseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixhQUFhO0VBQ2Y7RUFDQTtJQUNFLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0VBQ3JCO0VBQ0E7SUFDRSxrQkFBa0I7SUFDbEIsZ0JBQWdCO0VBQ2xCO0VBQ0E7SUFDRSxZQUFZO0lBQ1osb0JBQW9CO0lBQ3BCLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7RUFDcEI7RUFDQTtJQUNFLHlCQUF5QjtFQUMzQjtFQUNBO0lBQ0UseUJBQXlCO0VBQzNCO0VBQ0E7SUFDRSx5QkFBeUI7RUFDM0I7RUFDQTtJQUNFLHlCQUF5QjtFQUMzQjtFQUNBO0lBQ0UseUJBQXlCO0VBQzNCO0VBQ0E7SUFDRSx5QkFBeUI7RUFDM0I7RUFDQTtJQUNFLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsZUFBZTtFQUNqQjtFQUNBO0lBQ0UsaUJBQWlCO0VBQ25CIiwiZmlsZSI6InNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiICAuZm9vdGVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlYWVjZWU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAzMHB4O1xyXG4gIH1cclxuICAuZm9vdGVyIC5zb2NpYWwge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB9XHJcbiAgLmZvb3RlciAuc29jaWFsIGxpIHtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgfVxyXG4gIC5mb290ZXIgLnNvY2lhbCBsaSBhIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgd2lkdGg6IDM1cHg7XHJcbiAgICBoZWlnaHQ6IDM1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgfVxyXG4gIC5mb290ZXIgLnNvY2lhbCAuZmFjZWJvb2sge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE4NzdmMjtcclxuICB9XHJcbiAgLmZvb3RlciAuc29jaWFsIC5mYWNlYm9vazpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTg5N2ViO1xyXG4gIH1cclxuICAuZm9vdGVyIC5zb2NpYWwgLmluc3RhZ3JhbSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGQyYTdiO1xyXG4gIH1cclxuICAuZm9vdGVyIC5zb2NpYWwgLmluc3RhZ3JhbTpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGI2NTlhO1xyXG4gIH1cclxuICAuZm9vdGVyIC5zb2NpYWwgLmxpbmtlZGluIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDc3YjU7XHJcbiAgfVxyXG4gIC5mb290ZXIgLnNvY2lhbCAubGlua2VkaW46aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIxOTdkNjtcclxuICB9XHJcbiAgLmZvb3RlciAuY29weXJpZ2h0IHtcclxuICAgIGNvbG9yOiAjNjI2MjYyO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICB9XHJcbiAgLmZvb3RlciBzcGFuIHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIH0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "gVBG":
/*!********************************************************!*\
  !*** ./src/app/presentation/presentation.component.ts ***!
  \********************************************************/
/*! exports provided: PresentationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PresentationComponent", function() { return PresentationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! aos */ "9a8T");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_1__);



class PresentationComponent {
    constructor() { }
    ngOnInit() {
        aos__WEBPACK_IMPORTED_MODULE_1___default.a.init();
    }
}
PresentationComponent.ɵfac = function PresentationComponent_Factory(t) { return new (t || PresentationComponent)(); };
PresentationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PresentationComponent, selectors: [["app-presentation"]], decls: 35, vars: 0, consts: [["data-aos", "fade-up", "data-aos-duration", "1000", "data-aos-once", "true", 1, "about"], [1, "main-heading"], [1, "container"], [1, "image"], ["src", "assets/imgs/about.jpg", 1, "img-fluid"], [1, "text"], [1, "card", "border-0", "mb-4"], [1, "fw-bold", "text-dark"], [1, "card", "border-0"]], template: function PresentationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "About");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " I am a person who is passionate about everything related to IT and I am quite ambitious when it comes to discovering new technologies. I always try to develop my knowledge and skills in the IT world on my own with only personal knowledge and for this reason I consider myself self-taught. I would like to acquire new skills and challenges to enhance my experience in the professional world. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Birthday :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " 07 August 1997");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Phone :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " (+216) 58 787 449");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "City :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Tunisia");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Age :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " 25");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Degree :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " Master");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Email :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " koukimalek97@gmail.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".main-heading[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    font-weight: 600;\r\n    font-size: 28px;\r\n    position: relative;\r\n    margin-bottom: 65px;\r\n    color: #626262;\r\n    text-transform: uppercase;\r\n  }\r\n  .main-heading[_ngcontent-%COMP%]::before {\r\n    content: \"\";\r\n    position: absolute;\r\n    background-color: #005238;\r\n    left: 50%;\r\n    transform: translateX(-50%);\r\n    bottom: -25px;\r\n    width: 50px;\r\n    height: 3px;\r\n  }\r\n  #btn-back-to-top[_ngcontent-%COMP%] {\r\n    position: fixed;\r\n    bottom: 20px;\r\n    right: 20px;\r\n    background-color: #005238;\r\n    color: #fff;\r\n    border-radius: 50%;\r\n    display: none;\r\n    z-index: 1;\r\n  }\r\n  #btn-back-to-top[_ngcontent-%COMP%]:hover {\r\n    background-color: #127757;\r\n  }\r\n  \r\n  .about[_ngcontent-%COMP%] {\r\n    margin-top: 140px;\r\n  }\r\n  .about[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    float: left;\r\n    width: 504;\r\n    height: 255px;\r\n    margin-right: 30px;\r\n  }\r\n  .about[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\r\n    text-align: justify;\r\n    line-height: 1.5;\r\n    font-size: 15px;\r\n    color: #626262;\r\n  }\r\n  .about[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\r\n    line-height: 0;\r\n  }\r\n  @media (max-width: 992px) {\r\n    .about[_ngcontent-%COMP%] {\r\n      margin-bottom: 25px;\r\n    }\r\n    .about[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\r\n      display: flex;\r\n      justify-content: center;\r\n      align-items: center;\r\n      flex-wrap: wrap;\r\n    }\r\n    .about[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n      display: block;\r\n      margin: auto;\r\n    }\r\n    .about[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\r\n      margin-top: 15px;\r\n    }\r\n  }\r\n  @media (min-width: 992px) {\r\n    .about[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\r\n      float: left;\r\n      margin-right: 145px;\r\n    }\r\n    .about[_ngcontent-%COMP%] {\r\n      min-height: 63vh;\r\n    }\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJlc2VudGF0aW9uL3ByZXNlbnRhdGlvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJFQUFFLGdDQUFnQztFQUNoQztJQUNFLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsY0FBYztJQUNkLHlCQUF5QjtFQUMzQjtFQUNBO0lBQ0UsV0FBVztJQUNYLGtCQUFrQjtJQUNsQix5QkFBeUI7SUFDekIsU0FBUztJQUNULDJCQUEyQjtJQUMzQixhQUFhO0lBQ2IsV0FBVztJQUNYLFdBQVc7RUFDYjtFQUNBO0lBQ0UsZUFBZTtJQUNmLFlBQVk7SUFDWixXQUFXO0lBQ1gseUJBQXlCO0lBQ3pCLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLFVBQVU7RUFDWjtFQUNBO0lBQ0UseUJBQXlCO0VBQzNCO0VBQ0EsOEJBQThCO0VBRTlCO0lBQ0UsaUJBQWlCO0VBQ25CO0VBQ0E7SUFDRSxXQUFXO0lBQ1gsVUFBVTtJQUNWLGFBQWE7SUFDYixrQkFBa0I7RUFDcEI7RUFDQTtJQUNFLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGNBQWM7RUFDaEI7RUFDQTtJQUNFLGNBQWM7RUFDaEI7RUFDQTtJQUNFO01BQ0UsbUJBQW1CO0lBQ3JCO0lBQ0E7TUFDRSxhQUFhO01BQ2IsdUJBQXVCO01BQ3ZCLG1CQUFtQjtNQUNuQixlQUFlO0lBQ2pCO0lBQ0E7TUFDRSxjQUFjO01BQ2QsWUFBWTtJQUNkO0lBQ0E7TUFDRSxnQkFBZ0I7SUFDbEI7RUFDRjtFQUNBO0lBQ0U7TUFDRSxXQUFXO01BQ1gsbUJBQW1CO0lBQ3JCO0lBQ0E7TUFDRSxnQkFBZ0I7SUFDbEI7RUFDRiIsImZpbGUiOiJzcmMvYXBwL3ByZXNlbnRhdGlvbi9wcmVzZW50YXRpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiAgLyogLS0tLS0gIyBTdGFydCBUaXRsZSAjIC0tLS0tICovXHJcbiAgLm1haW4taGVhZGluZyB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgZm9udC1zaXplOiAyOHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNjVweDtcclxuICAgIGNvbG9yOiAjNjI2MjYyO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICB9XHJcbiAgLm1haW4taGVhZGluZzo6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA1MjM4O1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xyXG4gICAgYm90dG9tOiAtMjVweDtcclxuICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgaGVpZ2h0OiAzcHg7XHJcbiAgfVxyXG4gICNidG4tYmFjay10by10b3Age1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgYm90dG9tOiAyMHB4O1xyXG4gICAgcmlnaHQ6IDIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA1MjM4O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgei1pbmRleDogMTtcclxuICB9XHJcbiAgI2J0bi1iYWNrLXRvLXRvcDpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTI3NzU3O1xyXG4gIH1cclxuICAvKiAtLS0tLSAjIEVuZCBUaXRsZSAjIC0tLS0tICovXHJcblxyXG4gIC5hYm91dCB7XHJcbiAgICBtYXJnaW4tdG9wOiAxNDBweDtcclxuICB9XHJcbiAgLmFib3V0IC5jb250YWluZXIgaW1nIHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgd2lkdGg6IDUwNDtcclxuICAgIGhlaWdodDogMjU1cHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDMwcHg7XHJcbiAgfVxyXG4gIC5hYm91dCAuY29udGFpbmVyIC50ZXh0IHtcclxuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XHJcbiAgICBsaW5lLWhlaWdodDogMS41O1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgY29sb3I6ICM2MjYyNjI7XHJcbiAgfVxyXG4gIC5hYm91dCAuY29udGFpbmVyIC5jYXJkIHtcclxuICAgIGxpbmUtaGVpZ2h0OiAwO1xyXG4gIH1cclxuICBAbWVkaWEgKG1heC13aWR0aDogOTkycHgpIHtcclxuICAgIC5hYm91dCB7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XHJcbiAgICB9XHJcbiAgICAuYWJvdXQgLmNvbnRhaW5lciB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICB9XHJcbiAgICAuYWJvdXQgLmNvbnRhaW5lciBpbWcge1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgfVxyXG4gICAgLmFib3V0IC5jb250YWluZXIgLnRleHQge1xyXG4gICAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gICAgfVxyXG4gIH1cclxuICBAbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcclxuICAgIC5hYm91dCAuY29udGFpbmVyIC5jYXJkIHtcclxuICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogMTQ1cHg7XHJcbiAgICB9XHJcbiAgICAuYWJvdXQge1xyXG4gICAgICBtaW4taGVpZ2h0OiA2M3ZoO1xyXG4gICAgfVxyXG4gIH0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PresentationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-presentation',
                templateUrl: './presentation.component.html',
                styleUrls: ['./presentation.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "kWWo":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class NavbarComponent {
    constructor() { }
    ngOnInit() {
    }
}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(); };
NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["app-navbar"]], decls: 36, vars: 0, consts: [[1, "header-wrap"], [1, "mainInner"], ["type", "checkbox", "id", "off-navmenu", 1, "off-navmenu", "hidden"], ["for", "off-navmenu", 1, "cover", "navC"], [1, "navbar-title"], [1, "title"], [1, "navbar-menu"], [1, "navbar-close"], ["for", "off-navmenu"], ["viewBox", "0 0 24 24"], ["x1", "18", "x2", "6", "y1", "6", "y2", "18"], ["x1", "6", "x2", "18", "y1", "6", "y2", "18"], ["routerLink", "", 1, "link"], ["routerLink", "/about", 1, "link"], ["routerLink", "/resume", 1, "link"], ["routerLink", "/portfolio", 1, "link"], ["routerLink", "/contact", 1, "link"], [1, "navbar-icon"], ["aria-label", "Navigation menu", "for", "off-navmenu"], ["x1", "3", "x2", "21", "y1", "12", "y2", "12"], ["x1", "3", "x2", "21", "y1", "6", "y2", "6"], ["x1", "3", "x2", "21", "y1", "18", "y2", "18"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Malek");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "nav", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "svg", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "line", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "line", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "About");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Resume");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Portfolio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "label", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "svg", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "line", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "line", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "line", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: ["body[_ngcontent-%COMP%] {\r\n    font-family: \"Roboto\", sans-serif;\r\n  }\r\n\r\n  .header-wrap[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    text-decoration: none;\r\n  }\r\n\r\n  .header-wrap[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n    opacity: .7;\r\n  }\r\n\r\n  svg[_ngcontent-%COMP%] {\r\n    width: 20px;\r\n    height: 20px;\r\n    stroke: #8f8c8c;\r\n    margin-bottom: 10px;\r\n    cursor: pointer;\r\n  }\r\n\r\n  .header-wrap[_ngcontent-%COMP%]   .hidden[_ngcontent-%COMP%] {\r\n    display: none;\r\n  }\r\n\r\n  .header-wrap[_ngcontent-%COMP%]   .cover[_ngcontent-%COMP%] {\r\n    display: block;\r\n    position: fixed;\r\n    right: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    background-color: transparent;\r\n    z-index: 2;\r\n    opacity: 0;\r\n    visibility: hidden;\r\n    transition: .2s ease;\r\n  }\r\n\r\n  .header-wrap[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    position: fixed;\r\n    top: 0;\r\n    right: 0;\r\n    left: 0;\r\n    z-index: 10;\r\n    \r\n    background-color: #f6f8fa;\r\n    box-shadow: 0 0 10px #eaecee;\r\n  }\r\n\r\n  .header-wrap[_ngcontent-%COMP%]   .mainInner[_ngcontent-%COMP%] {\r\n    max-width: calc(1050px + 40px);\r\n    height: 50px;\r\n    padding: 0 20px;\r\n    margin: 10px auto;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n  }\r\n\r\n  .header-wrap[_ngcontent-%COMP%]   .navbar-title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n    color: #005238;\r\n    font-size: 35px;\r\n    margin-top: 10px;\r\n    margin-bottom: 10px;\r\n    font-weight: 500;\r\n    font-family: \"Brush Script MT\";\r\n  }\r\n\r\n  .header-wrap[_ngcontent-%COMP%]   .navbar-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    list-style: none;\r\n  }\r\n\r\n  .header-wrap[_ngcontent-%COMP%]   .navbar-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:not(:last-child) {\r\n    margin-right: 30px;\r\n  }\r\n\r\n  .header-wrap[_ngcontent-%COMP%]   .navbar-menu[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    align-items: center;\r\n    color: #626262;\r\n    font-family: \"Roboto\", sans-serif;\r\n    font-size: 14px;\r\n    font-weight: 700;\r\n  }\r\n\r\n  .header-wrap[_ngcontent-%COMP%]   .navbar-menu[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]:focus, .header-wrap[_ngcontent-%COMP%]   .navbar-menu[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]:hover {\r\n    color: #005238;\r\n  }\r\n\r\n  .navbar-close[_ngcontent-%COMP%], .navbar-icon[_ngcontent-%COMP%], .navbar-icon[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\r\n    display: none;\r\n    align-items: center;\r\n  }\r\n\r\n  @media screen and (max-width: 640px) {\r\n    .navbar-menu[_ngcontent-%COMP%] {\r\n      position: fixed;\r\n      top: 0;\r\n      right: -100%;\r\n      bottom: 0;\r\n      width: 75%;\r\n      height: 100vh;\r\n      background-color: #070F16;\r\n      z-index: 20;\r\n      opacity: 0;\r\n      visibility: hidden;\r\n      transition: .2s ease;\r\n    }\r\n  \r\n    .navbar-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\r\n      flex-direction: column;\r\n    }\r\n  \r\n    .navbar-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:not(:last-child) {\r\n      margin: 0;\r\n    }\r\n  \r\n    .navbar-menu[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%] {\r\n      padding: 14px 22px\r\n    }\r\n    \r\n    .navbar-close[_ngcontent-%COMP%], .navbar-icon[_ngcontent-%COMP%], .navbar-icon[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\r\n      display: flex;\r\n    }\r\n  \r\n    .navbar-close[_ngcontent-%COMP%] {\r\n      padding: 14px 22px;\r\n      justify-content: flex-end;\r\n    }\r\n  \r\n    .navbar-close[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\r\n      display: flex;\r\n      align-items: center;\r\n    }\r\n  \r\n    .navbar-close[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]::before {\r\n      content: '';\r\n      font-size: 14px;\r\n      color: #E0E0E2;\r\n      opacity: .9;\r\n      cursor: pointer;\r\n    }\r\n  \r\n    .off-navmenu[_ngcontent-%COMP%]:checked    ~ .navbar-menu[_ngcontent-%COMP%] {\r\n      right: 0;\r\n      visibility: visible;\r\n      opacity: 1;\r\n    }\r\n  \r\n    .off-navmenu[_ngcontent-%COMP%]:checked    ~ .navC[_ngcontent-%COMP%] {\r\n      -webkit-backdrop-filter: blur(2px);\r\n              backdrop-filter: blur(2px);\r\n      background-color: rgba(0,0,0,0.8);\r\n      opacity: 10;\r\n      visibility: visible;\r\n    }\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJFQUFFO0lBQ0UsaUNBQWlDO0VBQ25DOztFQUVBO0lBQ0UscUJBQXFCO0VBQ3ZCOztFQUVBO0lBQ0UsV0FBVztFQUNiOztFQUVBO0lBQ0UsV0FBVztJQUNYLFlBQVk7SUFDWixlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxhQUFhO0VBQ2Y7O0VBRUE7SUFDRSxjQUFjO0lBQ2QsZUFBZTtJQUNmLFFBQVE7SUFDUixTQUFTO0lBQ1QsT0FBTztJQUNQLDZCQUE2QjtJQUM3QixVQUFVO0lBQ1YsVUFBVTtJQUNWLGtCQUFrQjtJQUNsQixvQkFBb0I7RUFDdEI7O0VBRUE7SUFDRSxXQUFXO0lBQ1gsZUFBZTtJQUNmLE1BQU07SUFDTixRQUFRO0lBQ1IsT0FBTztJQUNQLFdBQVc7SUFDWDs7O0tBR0M7SUFDRCx5QkFBeUI7SUFDekIsNEJBQTRCO0VBQzlCOztFQUVBO0lBQ0UsOEJBQThCO0lBQzlCLFlBQVk7SUFDWixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsOEJBQThCO0VBQ2hDOztFQUVBO0lBQ0UsY0FBYztJQUNkLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQiw4QkFBOEI7RUFDaEM7O0VBRUE7SUFDRSxhQUFhO0lBQ2IsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0Usa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0UsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixjQUFjO0lBQ2QsaUNBQWlDO0lBQ2pDLGVBQWU7SUFDZixnQkFBZ0I7RUFDbEI7O0VBRUE7O0lBRUUsY0FBYztFQUNoQjs7RUFFQTtJQUNFLGFBQWE7SUFDYixtQkFBbUI7RUFDckI7O0VBRUE7SUFDRTtNQUNFLGVBQWU7TUFDZixNQUFNO01BQ04sWUFBWTtNQUNaLFNBQVM7TUFDVCxVQUFVO01BQ1YsYUFBYTtNQUNiLHlCQUF5QjtNQUN6QixXQUFXO01BQ1gsVUFBVTtNQUNWLGtCQUFrQjtNQUNsQixvQkFBb0I7SUFDdEI7O0lBRUE7TUFDRSxzQkFBc0I7SUFDeEI7O0lBRUE7TUFDRSxTQUFTO0lBQ1g7O0lBRUE7TUFDRTtJQUNGOztJQUVBO01BQ0UsYUFBYTtJQUNmOztJQUVBO01BQ0Usa0JBQWtCO01BQ2xCLHlCQUF5QjtJQUMzQjs7SUFFQTtNQUNFLGFBQWE7TUFDYixtQkFBbUI7SUFDckI7O0lBRUE7TUFDRSxXQUFXO01BQ1gsZUFBZTtNQUNmLGNBQWM7TUFDZCxXQUFXO01BQ1gsZUFBZTtJQUNqQjs7SUFFQTtNQUNFLFFBQVE7TUFDUixtQkFBbUI7TUFDbkIsVUFBVTtJQUNaOztJQUVBO01BQ0Usa0NBQTBCO2NBQTFCLDBCQUEwQjtNQUMxQixpQ0FBaUM7TUFDakMsV0FBVztNQUNYLG1CQUFtQjtJQUNyQjtFQUNGIiwiZmlsZSI6InNyYy9hcHAvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiICBib2R5IHtcclxuICAgIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xyXG4gIH1cclxuXHJcbiAgLmhlYWRlci13cmFwIGEge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIH1cclxuICBcclxuICAuaGVhZGVyLXdyYXAgYTpob3ZlciB7XHJcbiAgICBvcGFjaXR5OiAuNztcclxuICB9XHJcbiAgXHJcbiAgc3ZnIHtcclxuICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgc3Ryb2tlOiAjOGY4YzhjO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcbiAgXHJcbiAgLmhlYWRlci13cmFwIC5oaWRkZW4ge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbiAgXHJcbiAgLmhlYWRlci13cmFwIC5jb3ZlciB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgei1pbmRleDogMjtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICB0cmFuc2l0aW9uOiAuMnMgZWFzZTtcclxuICB9XHJcbiAgXHJcbiAgLmhlYWRlci13cmFwIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgei1pbmRleDogMTA7XHJcbiAgICAvKlxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI3NCk7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgMTBweCAjZGRkO1xyXG4gICAgKi9cclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNmY4ZmE7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgMTBweCAjZWFlY2VlO1xyXG4gIH1cclxuICBcclxuICAuaGVhZGVyLXdyYXAgLm1haW5Jbm5lciB7XHJcbiAgICBtYXgtd2lkdGg6IGNhbGMoMTA1MHB4ICsgNDBweCk7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICBwYWRkaW5nOiAwIDIwcHg7XHJcbiAgICBtYXJnaW46IDEwcHggYXV0bztcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIH1cclxuICBcclxuICAuaGVhZGVyLXdyYXAgLm5hdmJhci10aXRsZSBoMSB7XHJcbiAgICBjb2xvcjogIzAwNTIzODtcclxuICAgIGZvbnQtc2l6ZTogMzVweDtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGZvbnQtZmFtaWx5OiBcIkJydXNoIFNjcmlwdCBNVFwiO1xyXG4gIH1cclxuICBcclxuICAuaGVhZGVyLXdyYXAgLm5hdmJhci1tZW51IHVsIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gIH1cclxuICBcclxuICAuaGVhZGVyLXdyYXAgLm5hdmJhci1tZW51IHVsIGxpOm5vdCg6bGFzdC1jaGlsZCkge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xyXG4gIH1cclxuICBcclxuICAuaGVhZGVyLXdyYXAgLm5hdmJhci1tZW51IC5saW5rIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgY29sb3I6ICM2MjYyNjI7XHJcbiAgICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgfVxyXG5cclxuICAuaGVhZGVyLXdyYXAgLm5hdmJhci1tZW51IC5saW5rOmZvY3VzLFxyXG4gIC5oZWFkZXItd3JhcCAubmF2YmFyLW1lbnUgLmxpbms6aG92ZXIge1xyXG4gICAgY29sb3I6ICMwMDUyMzg7XHJcbiAgfVxyXG5cclxuICAubmF2YmFyLWNsb3NlLCAubmF2YmFyLWljb24sIC5uYXZiYXItaWNvbiA+ICoge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgfVxyXG4gIFxyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY0MHB4KSB7XHJcbiAgICAubmF2YmFyLW1lbnUge1xyXG4gICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgIHRvcDogMDtcclxuICAgICAgcmlnaHQ6IC0xMDAlO1xyXG4gICAgICBib3R0b206IDA7XHJcbiAgICAgIHdpZHRoOiA3NSU7XHJcbiAgICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwNzBGMTY7XHJcbiAgICAgIHotaW5kZXg6IDIwO1xyXG4gICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICAgIHRyYW5zaXRpb246IC4ycyBlYXNlO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLm5hdmJhci1tZW51IHVsIHtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIH1cclxuICBcclxuICAgIC5uYXZiYXItbWVudSB1bCBsaTpub3QoOmxhc3QtY2hpbGQpIHtcclxuICAgICAgbWFyZ2luOiAwO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLm5hdmJhci1tZW51IC5saW5rIHtcclxuICAgICAgcGFkZGluZzogMTRweCAyMnB4XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5uYXZiYXItY2xvc2UsIC5uYXZiYXItaWNvbiwgLm5hdmJhci1pY29uID4gKiB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAubmF2YmFyLWNsb3NlIHtcclxuICAgICAgcGFkZGluZzogMTRweCAyMnB4O1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLm5hdmJhci1jbG9zZSBsYWJlbCB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAubmF2YmFyLWNsb3NlIGxhYmVsOjpiZWZvcmUge1xyXG4gICAgICBjb250ZW50OiAnJztcclxuICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICBjb2xvcjogI0UwRTBFMjtcclxuICAgICAgb3BhY2l0eTogLjk7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIH1cclxuICBcclxuICAgIC5vZmYtbmF2bWVudTpjaGVja2VkIH4gLm5hdmJhci1tZW51IHtcclxuICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbiAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAub2ZmLW5hdm1lbnU6Y2hlY2tlZCB+IC5uYXZDIHtcclxuICAgICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDJweCk7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC44KTtcclxuICAgICAgb3BhY2l0eTogMTA7XHJcbiAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbiAgICB9XHJcbiAgfSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-navbar',
                templateUrl: './navbar.component.html',
                styleUrls: ['./navbar.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about/about.component */ "84zG");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact/contact.component */ "bzTf");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./portfolio/portfolio.component */ "zyDg");
/* harmony import */ var _resume_resume_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./resume/resume.component */ "Q0x9");









const routes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"] },
    { path: 'about', component: _about_about_component__WEBPACK_IMPORTED_MODULE_2__["AboutComponent"] },
    { path: 'resume', component: _resume_resume_component__WEBPACK_IMPORTED_MODULE_6__["ResumeComponent"] },
    { path: 'portfolio', component: _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_5__["PortfolioComponent"] },
    { path: 'contact', component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_3__["ContactComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ }),

/***/ "zyDg":
/*!**************************************************!*\
  !*** ./src/app/portfolio/portfolio.component.ts ***!
  \**************************************************/
/*! exports provided: PortfolioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortfolioComponent", function() { return PortfolioComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! aos */ "9a8T");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_1__);



class PortfolioComponent {
    constructor() { }
    onWindowScroll() {
        this.scrollFunction();
    }
    ngOnInit() {
        aos__WEBPACK_IMPORTED_MODULE_1___default.a.init();
    }
    onscroll() {
        this.scrollFunction();
    }
    scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            document.getElementById("btn-back-to-top").style.display = "block";
        }
        else {
            document.getElementById("btn-back-to-top").style.display = "none";
        }
    }
    topFunction() {
        document.body.scrollTop = 0; //For Safari
        document.documentElement.scrollTop = 0; //For Chrome, Firefox, IE and Opera
    }
}
PortfolioComponent.ɵfac = function PortfolioComponent_Factory(t) { return new (t || PortfolioComponent)(); };
PortfolioComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PortfolioComponent, selectors: [["app-portfolio"]], hostBindings: function PortfolioComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function PortfolioComponent_scroll_HostBindingHandler() { return ctx.onWindowScroll(); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    } }, decls: 21, vars: 0, consts: [["data-aos", "fade-up", "data-aos-duration", "1000", "data-aos-once", "true", 1, "portfolio"], [1, "main-heading"], [1, "container"], [1, "row"], [1, "col-md-6", "col-lg-4"], ["href", "https://project-dev2.github.io/ProjectCabinet/", "target", "_blank"], [1, "card", "mb-4", "border-0"], ["src", "assets/imgs/portfolio/portfolio01.png"], ["href", "https://project-dev2.github.io/ProjectSchool/", "target", "_blank"], ["src", "assets/imgs/portfolio/portfolio02.png"], ["href", "https://project-dev2.github.io/ProjectPara/", "target", "_blank"], ["src", "assets/imgs/portfolio/portfolio03.png"], ["type", "button", "id", "btn-back-to-top", 1, "btn", "btn-lg", 3, "click"], [1, "bi", "bi-arrow-up"]], template: function PortfolioComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Portfolio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Some Works from my portfolio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PortfolioComponent_Template_button_click_19_listener() { return ctx.topFunction(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".main-heading[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    font-weight: 600;\r\n    font-size: 28px;\r\n    position: relative;\r\n    margin-bottom: 65px;\r\n    color: #626262;\r\n    text-transform: uppercase;\r\n  }\r\n  .main-heading[_ngcontent-%COMP%]::before {\r\n    content: \"\";\r\n    position: absolute;\r\n    background-color: #005238;\r\n    left: 50%;\r\n    transform: translateX(-50%);\r\n    bottom: -25px;\r\n    width: 50px;\r\n    height: 3px;\r\n  }\r\n  #btn-back-to-top[_ngcontent-%COMP%] {\r\n    position: fixed;\r\n    bottom: 20px;\r\n    right: 20px;\r\n    background-color: #005238;\r\n    color: #fff;\r\n    border-radius: 50%;\r\n    display: none;\r\n    z-index: 1;\r\n  }\r\n  #btn-back-to-top[_ngcontent-%COMP%]:hover {\r\n    background-color: #127757;\r\n  }\r\n  \r\n  .portfolio[_ngcontent-%COMP%] {\r\n    margin-top: 140px;\r\n    margin-bottom: 50px;\r\n  }\r\n  .portfolio[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    font-size: 22px;\r\n    color: #7e7e7e;\r\n    text-align: center;\r\n    text-transform: uppercase;\r\n    font-weight: 400;\r\n    margin-bottom: 25px;\r\n  }\r\n  .portfolio[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\r\n    box-shadow: 0 2px 15px rgb(0 0 0 / 10%);\r\n    overflow: hidden;\r\n    transition: transform 0.3s,\r\n      box-shadow 0.3s;\r\n  }\r\n  .articles[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%] {\r\n    box-shadow: 0 2px 15px rgb(0 0 0 / 10%);\r\n    background-color: white;\r\n    border-radius: 6px;\r\n    overflow: hidden;\r\n    transition: transform 0.3s,\r\n      box-shadow 0.3s;\r\n  }\r\n  .portfolio[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:hover {\r\n    transform: translateY(-10px);\r\n    box-shadow: 0 2px 15px rgb(0 0 0 / 20%);\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9ydGZvbGlvL3BvcnRmb2xpby5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJFQUFFLGdDQUFnQztFQUNoQztJQUNFLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsY0FBYztJQUNkLHlCQUF5QjtFQUMzQjtFQUNBO0lBQ0UsV0FBVztJQUNYLGtCQUFrQjtJQUNsQix5QkFBeUI7SUFDekIsU0FBUztJQUNULDJCQUEyQjtJQUMzQixhQUFhO0lBQ2IsV0FBVztJQUNYLFdBQVc7RUFDYjtFQUNBO0lBQ0UsZUFBZTtJQUNmLFlBQVk7SUFDWixXQUFXO0lBQ1gseUJBQXlCO0lBQ3pCLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLFVBQVU7RUFDWjtFQUNBO0lBQ0UseUJBQXlCO0VBQzNCO0VBQ0EsOEJBQThCO0VBRTlCO0lBQ0UsaUJBQWlCO0lBQ2pCLG1CQUFtQjtFQUNyQjtFQUNBO0lBQ0UsZUFBZTtJQUNmLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLGdCQUFnQjtJQUNoQixtQkFBbUI7RUFDckI7RUFDQTtJQUNFLHVDQUF1QztJQUN2QyxnQkFBZ0I7SUFDaEI7cUJBQ2lCO0VBQ25CO0VBQ0E7SUFDRSx1Q0FBdUM7SUFDdkMsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEI7cUJBQ2lCO0VBQ25CO0VBQ0E7SUFDRSw0QkFBNEI7SUFDNUIsdUNBQXVDO0VBQ3pDIiwiZmlsZSI6InNyYy9hcHAvcG9ydGZvbGlvL3BvcnRmb2xpby5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiICAvKiAtLS0tLSAjIFN0YXJ0IFRpdGxlICMgLS0tLS0gKi9cclxuICAubWFpbi1oZWFkaW5nIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBmb250LXNpemU6IDI4cHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA2NXB4O1xyXG4gICAgY29sb3I6ICM2MjYyNjI7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIH1cclxuICAubWFpbi1oZWFkaW5nOjpiZWZvcmUge1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDUyMzg7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XHJcbiAgICBib3R0b206IC0yNXB4O1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbiAgICBoZWlnaHQ6IDNweDtcclxuICB9XHJcbiAgI2J0bi1iYWNrLXRvLXRvcCB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBib3R0b206IDIwcHg7XHJcbiAgICByaWdodDogMjBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDUyMzg7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gIH1cclxuICAjYnRuLWJhY2stdG8tdG9wOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxMjc3NTc7XHJcbiAgfVxyXG4gIC8qIC0tLS0tICMgRW5kIFRpdGxlICMgLS0tLS0gKi9cclxuXHJcbiAgLnBvcnRmb2xpbyB7XHJcbiAgICBtYXJnaW4tdG9wOiAxNDBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XHJcbiAgfVxyXG4gIC5wb3J0Zm9saW8gcCB7XHJcbiAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICBjb2xvcjogIzdlN2U3ZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjVweDtcclxuICB9XHJcbiAgLnBvcnRmb2xpbyAuY2FyZCB7XHJcbiAgICBib3gtc2hhZG93OiAwIDJweCAxNXB4IHJnYigwIDAgMCAvIDEwJSk7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MsXHJcbiAgICAgIGJveC1zaGFkb3cgMC4zcztcclxuICB9XHJcbiAgLmFydGljbGVzIC5ib3gge1xyXG4gICAgYm94LXNoYWRvdzogMCAycHggMTVweCByZ2IoMCAwIDAgLyAxMCUpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MsXHJcbiAgICAgIGJveC1zaGFkb3cgMC4zcztcclxuICB9XHJcbiAgLnBvcnRmb2xpbyAuY2FyZDpob3ZlciB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwcHgpO1xyXG4gICAgYm94LXNoYWRvdzogMCAycHggMTVweCByZ2IoMCAwIDAgLyAyMCUpO1xyXG4gIH0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PortfolioComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-portfolio',
                templateUrl: './portfolio.component.html',
                styleUrls: ['./portfolio.component.css']
            }]
    }], function () { return []; }, { onWindowScroll: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ["window:scroll", []]
        }] }); })();


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map