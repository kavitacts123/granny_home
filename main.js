"use strict";
(self["webpackChunkgranny_home"] = self["webpackChunkgranny_home"] || []).push([["main"],{

/***/ 82912:
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AboutComponent: () => (/* binding */ AboutComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 34456);


const _c0 = ["carousel1"];
class AboutComponent {
  ngAfterViewInit() {
    if (this.carousel1) {
      $(this.carousel1.nativeElement).owlCarousel({
        loop: true,
        margin: 20,
        nav: false,
        dots: true,
        // Enable dots navigation
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        responsive: {
          0: {
            items: 1
          },
          600: {
            items: 2
          },
          1000: {
            items: 2
          }
        }
      });
    }
  }
  static #_ = this.ɵfac = function AboutComponent_Factory(t) {
    return new (t || AboutComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: AboutComponent,
    selectors: [["app-about"]],
    viewQuery: function AboutComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.carousel1 = _t.first);
      }
    },
    decls: 113,
    vars: 0,
    consts: [["carousel1", ""], [1, "banner", "py"], [1, "banner-sec", "banner_text"], [1, "about"], [1, "container"], [1, "row"], [1, "col-12", "col-lg-6"], [1, "about-img"], ["src", "./assets/images/ab2.png"], [1, "about-text"], [1, "design-sec", "py"], [1, "col-12", "col-xl-4", "col-lg-6", "col-md-6"], [1, "design"], [1, "design_text"], [1, "testimonial", "py"], [1, "col-12", "col-xl-6", "col-md-12", "col-lg-12"], [1, "test_text"], [1, "card"], [1, "card-body", "subtitle"], [1, "title"], [1, "card_2"], [1, "owl-carousel", "owl-theme"], [1, "item"], ["src", "./assets/images/jane.png"], ["src", "./assets/images/stars.png", 1, "stars"], [1, "items-p"], [1, "subscribe", "py"], [1, "subscribe1"], [1, "sub_img"], ["src", "./assets/images/subscribe.png"], [1, "sub_text"], ["action", "/action_page.php"], ["type", "email", "placeholder", "Your email address", "aria-label", "Your email address", 1, "form-control"], ["type", "button", 1, "btn", "btn-success"]],
    template: function AboutComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main")(1, "section", 1)(2, "div", 2)(3, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "About Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "section", 3)(6, "div", 4)(7, "div", 5)(8, "div", 6)(9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6)(12, "div", 9)(13, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "ABOUT US");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Proin Gravida Nibh Vel Velit ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "section", 10)(22, "div", 4)(23, "div", 5)(24, "div", 11)(25, "div", 12)(26, "div", 13)(27, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Proin Gravida");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 11)(32, "div", 12)(33, "div", 13)(34, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Aenean Sollicitudin");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "ed non mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 11)(39, "div", 12)(40, "div", 13)(41, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Morbi Accumsan");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Sed ut imperdiet nisi. Proin condimentum fermentum nunc. Etiam pharetra, erat sed fermentum feugiat");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "section", 14)(46, "div", 4)(47, "div", 5)(48, "div", 15)(49, "div", 16)(50, "div", 17)(51, "div", 18)(52, "h4", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, " TESTIMONIALS ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Proin Gravida Nibh Vel Velit Auctor ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 15)(57, "div", 20)(58, "div", 21, 0)(60, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "img", 23)(62, "img", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Jane & Mark T.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "h6", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Boulder, CO");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.Duis sed odio sit amet nibh vulputate cursus a sit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "img", 23)(71, "img", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Jane & Mark T.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "h6", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "Boulder, CO");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.Duis sed odio sit amet nibh vulputate cursus a sit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](79, "img", 23)(80, "img", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "Jane & Mark T.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "h6", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "Boulder, CO");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.Duis sed odio sit amet nibh vulputate cursus a sit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](88, "img", 23)(89, "img", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "Jane & Mark T.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "h6", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "Boulder, CO");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.Duis sed odio sit amet nibh vulputate cursus a sit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "section", 26)(97, "div", 4)(98, "div", 27)(99, "div", 5)(100, "div", 6)(101, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](102, "img", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "div", 6)(104, "div", 30)(105, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, " Proin Gravida Nibh Vel Velit Auctor");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, " Proin gravida nibh vel velit auctor Proin gravida nibh vel velit auctor");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "form", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](110, "input", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "button", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "Subscribe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()()();
      }
    },
    dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgForm],
    styles: ["\n\n.py[_ngcontent-%COMP%] {\n    padding-top: 50px;\n    padding-bottom: 50px;\n}\nh1[_ngcontent-%COMP%]{\n    font-size: 90px;\n}\n\nh2[_ngcontent-%COMP%] {\n    font-size: 70px;\n}\nh3[_ngcontent-%COMP%]{\n    font-size: 60px;\n}\nh4[_ngcontent-%COMP%]{\n    font-size: 40px;\n}\nh5[_ngcontent-%COMP%]{\n    font-size: 30px;\n}\nh6[_ngcontent-%COMP%]{\n    font-size: 20px;\n}\np[_ngcontent-%COMP%]{\n    font-size: 24px;\n}\na[_ngcontent-%COMP%]{\n    font-size: 24px;\n}\n\n.banner-sec[_ngcontent-%COMP%] {\n    padding-bottom: 50px;\n}\n\n.banner[_ngcontent-%COMP%] {\n    background-image: url('about_img.png');\n    background-size: cover;\n    height: 700px;\n}\n\n.banner_text[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:before, \n.banner_text[_ngcontent-%COMP%]:after {\n    content: \" \";\n    grid-area: 1 / 1 / 2 / 2;\n    display: table;\n}\n\n.banner[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    padding: 17% 9%;\n    color: white;\n    font-weight: 600;\n}\n\n\n\n\n\n.about[_ngcontent-%COMP%] {\n    margin-top: 50px;\n}\n\n.about-text[_ngcontent-%COMP%] {\n    margin-top: 80px;\n}\n\n\n\n\n.about-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 100%;\n}\n.about-text[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{\n    color: #208678;\n}\n.about-text[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], p[_ngcontent-%COMP%]{\n    margin-bottom: 20px;\n}\n\n\n\n\n\n\n\n\n\n\n\n.design[_ngcontent-%COMP%] {\n    height: 260px;\n    box-shadow: -3px 5px 10px rgba(0, 0, 0, .2);\n    padding: 10px 15px;\n    \n\n}\n\n.design[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    margin-top: 10px;\n}\n\n.design_text[_ngcontent-%COMP%] {\n    text-align: center;\n    padding: 0px 15px;\n}\n.design_text[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{\n    \n\n    text-align: left;\n}\n.design_text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\n    text-align: left;\n}\n\n\n\n\n\n\n\n\n\n.testimonial[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    padding-left: 60px;\n}\n\n.testimonial[_ngcontent-%COMP%] {\n    \n\n    padding-top: 50px;\n    padding-bottom: 50px;\n    max-width: 100%;\n}\n\n.testimonial[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%] {\n    text-align: center;\n}\n\n.testimonial[_ngcontent-%COMP%]   .owl-nav[_ngcontent-%COMP%] {\n    display: none;\n}\n\n.testimonial[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 30%;\n    margin-left: auto;\n    margin-right: auto;\n}\n\n.testimonial[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n    padding-left: 20px;\n    border: #f3fcfb;\n    \n\n}\n\n.testimonial[_ngcontent-%COMP%]   .card_2[_ngcontent-%COMP%] {\n    \n\n    text-align: center;\n}\n\n\n.test_text[_ngcontent-%COMP%] {\n    margin-top: 20%;\n}\n\n\n\n\n\n\n.subtitle[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]:before {\n    content: '';\n    position: absolute;\n    left: 20px;\n    top: 13%;\n    transform: translateY(-50%);\n    width: 50px;\n    height: 2px;\n    \n\n}\n.testimonial[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n    padding-left: 60px;\n}\n.testimonial[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n    padding: 0;\n}\n\n.testimonial[_ngcontent-%COMP%]   .items-p[_ngcontent-%COMP%] {\n    font-weight: bold;\n}\n\n.testimonial[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-style: italic;\n}\n\n.testimonial[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%] {\n    \n\n    margin-right: 20px;\n    padding: 20px 20px;\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n    margin-top: 20px;\n    margin-bottom: 20px;\n    margin-left: 10px;\n}\n\n.testimonial[_ngcontent-%COMP%]   .stars[_ngcontent-%COMP%] {\n    margin-bottom: 10px;\n    margin-top: 10px;\n    height: 20px;\n}\n\n\n\n\n\n\n\n.subscribe[_ngcontent-%COMP%] {\n    padding-top: 20px;\n    padding-bottom: 20px;\n}\n\n.subscribe[_ngcontent-%COMP%]   .subscribe1[_ngcontent-%COMP%] {\n    background-color: #208678;\n    border-radius: 20px;\n    margin-top: 50px;\n}\n\n.subscribe[_ngcontent-%COMP%]   .sub_img[_ngcontent-%COMP%] {\n    padding-top: 20px;\n    padding-bottom: 20px;\n}\n\n.subscribe[_ngcontent-%COMP%]   .sub_img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 100%;\n}\n\n.subscribe[_ngcontent-%COMP%]   .sub_text[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    color: white;\n    font-size: 55px;\n}\n\n.subscribe[_ngcontent-%COMP%]   .sub_text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    color: white;\n    margin-top: 10px;\n    margin-right: 10px;\n}\n\n.subscribe[_ngcontent-%COMP%]   .sub_text[_ngcontent-%COMP%] {\n    padding: 20px;\n}\n\n.subscribe[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n    display: flex;\n    margin-top: 20px;\n}\n\n.subscribe[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n    display: inline;\n    width: 50%;\n    padding: 10px 10px;\n    background-color: white;\n    border-color: white;\n    border-radius: 0;\n}\n\n.subscribe[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    padding: 10px 30px;\n    color: white;\n    background-color: #4b4b4b;\n    border-color: #4b4b4b;\n    border-radius: 0;\n}\n\n\n\n\n@media only screen and (min-width: 1441px){}\n\n@media only screen and (max-width: 1199px) {\n    h1[_ngcontent-%COMP%]{\n        font-size: 57px;\n    }\n    \n    h2[_ngcontent-%COMP%] {\n        font-size: 38px;\n    }\n    h3[_ngcontent-%COMP%]{\n        font-size: 35px;\n    }\n    h4[_ngcontent-%COMP%]{\n        font-size: 25px;\n    }\n    h5[_ngcontent-%COMP%]{\n        font-size: 20px;\n    }\n    h6[_ngcontent-%COMP%]{\n        font-size: 18px;\n    }\n    p[_ngcontent-%COMP%]{\n        font-size: 20px;\n    }\n    a[_ngcontent-%COMP%]{\n        font-size: 20px;\n    }\n    .banner[_ngcontent-%COMP%] {\n        height: 500px;\n    }\n    .subscribe[_ngcontent-%COMP%]   .sub_text[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n        font-size: 35px;\n        margin-right: 10px;\n    }\n    .subscribe[_ngcontent-%COMP%] {\n        padding-top: 0;\n        padding-bottom: 20px;\n    }\n    .design[_ngcontent-%COMP%]{\n        height: 241px;\n        padding: 30px;\n    }\n    .test_text[_ngcontent-%COMP%] {\n        margin-top: 0;\n    }\n    .about-text[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], p[_ngcontent-%COMP%] {\n        margin-bottom: 10px;\n    }\n    .about-text[_ngcontent-%COMP%] {\n        margin-top: 20px;\n    }\n}\n\n\n@media only screen and (max-width: 991px) {\n    .py[_ngcontent-%COMP%] {\n        padding-top: 20px;\n        padding-bottom: 20px;\n    }\n    .banner[_ngcontent-%COMP%] {\n        height: 350px;\n    }\n\n    .grid[_ngcontent-%COMP%] {\n        padding-top: 100px;\n    }\n\n    .grid_serv[_ngcontent-%COMP%] {\n        margin-bottom: 20px;\n    }\n\n    .grid[_ngcontent-%COMP%]   .card_img[_ngcontent-%COMP%] {\n        \n\n        max-width: 100%;\n    }\n\n    .designed[_ngcontent-%COMP%]   .des_text[_ngcontent-%COMP%] {\n        height: 310px;\n    }\n\n    .designed[_ngcontent-%COMP%]   .des_text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n        font-size: 18px;\n    }\n\n    .date[_ngcontent-%COMP%] {\n        margin-top: 10px;\n        font-size: 18px;\n    }\n\n    .law-unit[_ngcontent-%COMP%] {\n        padding-left: 23px;\n        font-size: 17px;\n    }\n\n    .law-unit[_ngcontent-%COMP%]:before {\n        width: 20px;\n    }\n\n    .project_item[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n        font-size: 20px;\n        line-height: 0;\n        text-align: left;\n        margin-bottom: 15px;\n    }\n    .design[_ngcontent-%COMP%] {\n        height: 210px;\n        padding: 20px;\n        margin-bottom: 20px;\n    }\n    .design_text[_ngcontent-%COMP%] {\n        text-align: center;\n        padding: 0;\n    }\n}\n\n@media only screen and (max-width: 767px) {}\n\n@media only screen and (max-width: 575px) {\n    h1[_ngcontent-%COMP%]{\n        font-size: 35px;\n    }\n    h2[_ngcontent-%COMP%]{\n        font-size: 32px;\n    }\n\n    p[_ngcontent-%COMP%]{\n        font-size: 18px;\n    }\n    .grid_text[_ngcontent-%COMP%] {\n        padding: 5px 14px;\n    }\n    .banner[_ngcontent-%COMP%] {\n        height: 260px;\n    }\n    .banner[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n        padding: 27% 6%;\n    }\n    .card[_ngcontent-%COMP%] {\n        padding-left: 0;\n    }\n    .grid[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{\n        width: 100%;\n    }\n    .grid[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n        padding: 20px;\n    }\n    .design[_ngcontent-%COMP%] {\n        height: 180px;\n    }\n    .testimonial[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n        padding-left: 0;\n    }\n    .testimonial[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n        padding-left: 40px;\n    }\n\n    .subtitle[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]:before {\n        left: 0;\n        top: 12%;\n        width: 35px;\n    }\n    .project[_ngcontent-%COMP%]   .project_item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n        width: 100%;\n    }\n    .services[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n        width: 100%;\n    }\n\n    .project_item[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n\n        line-height: 15px;\n    }\n\n    .testimonial[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n        padding-left: 40px;\n    }\n    .subscribe[_ngcontent-%COMP%]   .sub_text[_ngcontent-%COMP%] {\n        padding: 20px;\n    }\n    .card-body[_ngcontent-%COMP%]{\n        padding: 0;\n    }\n    .grid[_ngcontent-%COMP%]{\n        padding: 0;\n        padding-top: 80px;\n    }\n    .subscribe[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n        width: 100%;\n    }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYWJvdXQvYWJvdXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxtQkFBbUI7QUFDbkI7SUFDSSxpQkFBaUI7SUFDakIsb0JBQW9CO0FBQ3hCO0FBQ0E7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksZUFBZTtBQUNuQjtBQUNBO0lBQ0ksZUFBZTtBQUNuQjtBQUNBO0lBQ0ksZUFBZTtBQUNuQjtBQUNBO0lBQ0ksZUFBZTtBQUNuQjtBQUNBO0lBQ0ksZUFBZTtBQUNuQjtBQUNBO0lBQ0ksZUFBZTtBQUNuQjtBQUNBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLHNDQUF3RDtJQUN4RCxzQkFBc0I7SUFDdEIsYUFBYTtBQUNqQjs7QUFFQTs7SUFFSSxZQUFZO0lBQ1osd0JBQXdCO0lBQ3hCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsWUFBWTtJQUNaLGdCQUFnQjtBQUNwQjs7QUFFQSxtQkFBbUI7OztBQUduQjtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQSxpQkFBaUI7O0FBRWpCO0lBQ0ksV0FBVztBQUNmO0FBQ0E7SUFDSSxjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUEsaUJBQWlCOztBQUVqQixrQkFBa0I7QUFDbEI7O0dBRUc7O0FBRUg7SUFDSSxhQUFhO0lBQ2IsMkNBQTJDO0lBQzNDLGtCQUFrQjtJQUNsQiw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxvQkFBb0I7SUFDcEIsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUEsa0JBQWtCOzs7QUFHbEIsZUFBZTs7O0FBR2Y7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSwrQkFBK0I7SUFDL0IsaUJBQWlCO0lBQ2pCLG9CQUFvQjtJQUNwQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLFVBQVU7SUFDVixpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZiwrQkFBK0I7QUFDbkM7O0FBRUE7SUFDSSwrQkFBK0I7SUFDL0Isa0JBQWtCO0FBQ3RCOzs7QUFHQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7O0dBRUc7O0FBRUg7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixRQUFRO0lBQ1IsMkJBQTJCO0lBQzNCLFdBQVc7SUFDWCxXQUFXO0lBQ1gseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLDZCQUE2QjtJQUM3QixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLDRFQUE0RTtJQUM1RSxnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsWUFBWTtBQUNoQjs7O0FBR0EsZUFBZTs7QUFFZixhQUFhO0FBQ2I7SUFDSSxpQkFBaUI7SUFDakIsb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLG1CQUFtQjtJQUNuQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLFVBQVU7SUFDVixrQkFBa0I7SUFDbEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLHlCQUF5QjtJQUN6QixxQkFBcUI7SUFDckIsZ0JBQWdCO0FBQ3BCOzs7QUFHQSxjQUFjO0FBQ2QsMkNBQTJDOztBQUUzQztJQUNJO1FBQ0ksZUFBZTtJQUNuQjs7SUFFQTtRQUNJLGVBQWU7SUFDbkI7SUFDQTtRQUNJLGVBQWU7SUFDbkI7SUFDQTtRQUNJLGVBQWU7SUFDbkI7SUFDQTtRQUNJLGVBQWU7SUFDbkI7SUFDQTtRQUNJLGVBQWU7SUFDbkI7SUFDQTtRQUNJLGVBQWU7SUFDbkI7SUFDQTtRQUNJLGVBQWU7SUFDbkI7SUFDQTtRQUNJLGFBQWE7SUFDakI7SUFDQTtRQUNJLGVBQWU7UUFDZixrQkFBa0I7SUFDdEI7SUFDQTtRQUNJLGNBQWM7UUFDZCxvQkFBb0I7SUFDeEI7SUFDQTtRQUNJLGFBQWE7UUFDYixhQUFhO0lBQ2pCO0lBQ0E7UUFDSSxhQUFhO0lBQ2pCO0lBQ0E7UUFDSSxtQkFBbUI7SUFDdkI7SUFDQTtRQUNJLGdCQUFnQjtJQUNwQjtBQUNKOzs7QUFHQTtJQUNJO1FBQ0ksaUJBQWlCO1FBQ2pCLG9CQUFvQjtJQUN4QjtJQUNBO1FBQ0ksYUFBYTtJQUNqQjs7SUFFQTtRQUNJLGtCQUFrQjtJQUN0Qjs7SUFFQTtRQUNJLG1CQUFtQjtJQUN2Qjs7SUFFQTtRQUNJLGlCQUFpQjtRQUNqQixlQUFlO0lBQ25COztJQUVBO1FBQ0ksYUFBYTtJQUNqQjs7SUFFQTtRQUNJLGVBQWU7SUFDbkI7O0lBRUE7UUFDSSxnQkFBZ0I7UUFDaEIsZUFBZTtJQUNuQjs7SUFFQTtRQUNJLGtCQUFrQjtRQUNsQixlQUFlO0lBQ25COztJQUVBO1FBQ0ksV0FBVztJQUNmOztJQUVBO1FBQ0ksZUFBZTtRQUNmLGNBQWM7UUFDZCxnQkFBZ0I7UUFDaEIsbUJBQW1CO0lBQ3ZCO0lBQ0E7UUFDSSxhQUFhO1FBQ2IsYUFBYTtRQUNiLG1CQUFtQjtJQUN2QjtJQUNBO1FBQ0ksa0JBQWtCO1FBQ2xCLFVBQVU7SUFDZDtBQUNKOztBQUVBLDJDQUEyQzs7QUFFM0M7SUFDSTtRQUNJLGVBQWU7SUFDbkI7SUFDQTtRQUNJLGVBQWU7SUFDbkI7O0lBRUE7UUFDSSxlQUFlO0lBQ25CO0lBQ0E7UUFDSSxpQkFBaUI7SUFDckI7SUFDQTtRQUNJLGFBQWE7SUFDakI7SUFDQTtRQUNJLGVBQWU7SUFDbkI7SUFDQTtRQUNJLGVBQWU7SUFDbkI7SUFDQTtRQUNJLFdBQVc7SUFDZjtJQUNBO1FBQ0ksYUFBYTtJQUNqQjtJQUNBO1FBQ0ksYUFBYTtJQUNqQjtJQUNBO1FBQ0ksZUFBZTtJQUNuQjtJQUNBO1FBQ0ksa0JBQWtCO0lBQ3RCOztJQUVBO1FBQ0ksT0FBTztRQUNQLFFBQVE7UUFDUixXQUFXO0lBQ2Y7SUFDQTtRQUNJLFdBQVc7SUFDZjtJQUNBO1FBQ0ksV0FBVztJQUNmOztJQUVBOztRQUVJLGlCQUFpQjtJQUNyQjs7SUFFQTtRQUNJLGtCQUFrQjtJQUN0QjtJQUNBO1FBQ0ksYUFBYTtJQUNqQjtJQUNBO1FBQ0ksVUFBVTtJQUNkO0lBQ0E7UUFDSSxVQUFVO1FBQ1YsaUJBQWlCO0lBQ3JCO0lBQ0E7UUFDSSxXQUFXO0lBQ2Y7QUFDSiIsInNvdXJjZXNDb250ZW50IjpbIi8qIGJhbm5lciBTZWN0aW9uICovXHJcbi5weSB7XHJcbiAgICBwYWRkaW5nLXRvcDogNTBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiA1MHB4O1xyXG59XHJcbmgxe1xyXG4gICAgZm9udC1zaXplOiA5MHB4O1xyXG59XHJcblxyXG5oMiB7XHJcbiAgICBmb250LXNpemU6IDcwcHg7XHJcbn1cclxuaDN7XHJcbiAgICBmb250LXNpemU6IDYwcHg7XHJcbn1cclxuaDR7XHJcbiAgICBmb250LXNpemU6IDQwcHg7XHJcbn1cclxuaDV7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbn1cclxuaDZ7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbn1cclxucHtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxufVxyXG5he1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG59XHJcblxyXG4uYmFubmVyLXNlYyB7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNTBweDtcclxufVxyXG5cclxuLmJhbm5lciB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vYXNzZXRzL2ltYWdlcy9hYm91dF9pbWcucG5nKTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBoZWlnaHQ6IDcwMHB4O1xyXG59XHJcblxyXG4uYmFubmVyX3RleHQgOmJlZm9yZSxcclxuLmJhbm5lcl90ZXh0OmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6IFwiIFwiO1xyXG4gICAgZ3JpZC1hcmVhOiAxIC8gMSAvIDIgLyAyO1xyXG4gICAgZGlzcGxheTogdGFibGU7XHJcbn1cclxuXHJcbi5iYW5uZXIgaDEge1xyXG4gICAgcGFkZGluZzogMTclIDklO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG5cclxuLyogYmFubmVyIFNlY3Rpb24gKi9cclxuXHJcblxyXG4uYWJvdXQge1xyXG4gICAgbWFyZ2luLXRvcDogNTBweDtcclxufVxyXG5cclxuLmFib3V0LXRleHQge1xyXG4gICAgbWFyZ2luLXRvcDogODBweDtcclxufVxyXG5cclxuLyphYm91dCBzZWN0aW9uICovXHJcblxyXG4uYWJvdXQtaW1nIGltZyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG4uYWJvdXQtdGV4dCBoNHtcclxuICAgIGNvbG9yOiAjMjA4Njc4O1xyXG59XHJcbi5hYm91dC10ZXh0IGg0LCBoMiwgcHtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuXHJcbi8qYWJvdXQgc2VjdGlvbiAqL1xyXG5cclxuLypkZXNpZ24gc2VjdGlvbiAqL1xyXG4vKiAuZGVzaWduLXNlYyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxufSAqL1xyXG5cclxuLmRlc2lnbiB7XHJcbiAgICBoZWlnaHQ6IDI2MHB4O1xyXG4gICAgYm94LXNoYWRvdzogLTNweCA1cHggMTBweCByZ2JhKDAsIDAsIDAsIC4yKTtcclxuICAgIHBhZGRpbmc6IDEwcHggMTVweDtcclxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IHdoaXRlOyAqL1xyXG59XHJcblxyXG4uZGVzaWduIGgzIHtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbn1cclxuXHJcbi5kZXNpZ25fdGV4dCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAwcHggMTVweDtcclxufVxyXG4uZGVzaWduX3RleHQgaDV7XHJcbiAgICAvKiBjb2xvcjogIzIwODY3ODsgKi9cclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuLmRlc2lnbl90ZXh0IHB7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcblxyXG4vKmRlc2lnbiBzZWN0aW9uICovXHJcblxyXG5cclxuLyp0ZXN0aW1vbmlhbHMqL1xyXG5cclxuXHJcbi50ZXN0aW1vbmlhbCAuY2FyZCBoMyB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDYwcHg7XHJcbn1cclxuXHJcbi50ZXN0aW1vbmlhbCB7XHJcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiAjZjNmY2ZiOyAqL1xyXG4gICAgcGFkZGluZy10b3A6IDUwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNTBweDtcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxufVxyXG5cclxuLnRlc3RpbW9uaWFsIC5pdGVtIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnRlc3RpbW9uaWFsIC5vd2wtbmF2IHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi50ZXN0aW1vbmlhbCAuaXRlbSBpbWcge1xyXG4gICAgd2lkdGg6IDMwJTtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG59XHJcblxyXG4udGVzdGltb25pYWwgLmNhcmQge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG4gICAgYm9yZGVyOiAjZjNmY2ZiO1xyXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogI2YzZmNmYjsgKi9cclxufVxyXG5cclxuLnRlc3RpbW9uaWFsIC5jYXJkXzIge1xyXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogI2YzZmNmYjsgKi9cclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuXHJcbi50ZXN0X3RleHQge1xyXG4gICAgbWFyZ2luLXRvcDogMjAlO1xyXG59XHJcblxyXG4vKiAuc3VidGl0bGV7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn0gKi9cclxuXHJcbi5zdWJ0aXRsZSAudGl0bGU6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogMjBweDtcclxuICAgIHRvcDogMTMlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbiAgICBoZWlnaHQ6IDJweDtcclxuICAgIC8qIGJhY2tncm91bmQ6ICMyMDg2Nzg7ICovXHJcbn1cclxuLnRlc3RpbW9uaWFsIC5jYXJkIGg0IHtcclxuICAgIHBhZGRpbmctbGVmdDogNjBweDtcclxufVxyXG4udGVzdGltb25pYWwgLmNhcmQtYm9keSB7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG4udGVzdGltb25pYWwgLml0ZW1zLXAge1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi50ZXN0aW1vbmlhbCAuaXRlbSBwIHtcclxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxufVxyXG5cclxuLnRlc3RpbW9uaWFsIC5pdGVtIHtcclxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IHdoaXRlOyAqL1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG4gICAgcGFkZGluZzogMjBweCAyMHB4O1xyXG4gICAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDZweCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE5KTtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbn1cclxuXHJcbi50ZXN0aW1vbmlhbCAuc3RhcnMge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcbn1cclxuXHJcblxyXG4vKnRlc3RpbW9uaWFscyovXHJcblxyXG4vKiBzdWJzY3JpYmUqL1xyXG4uc3Vic2NyaWJlIHtcclxuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XHJcbn1cclxuXHJcbi5zdWJzY3JpYmUgLnN1YnNjcmliZTEge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIwODY3ODtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG59XHJcblxyXG4uc3Vic2NyaWJlIC5zdWJfaW1nIHtcclxuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XHJcbn1cclxuXHJcbi5zdWJzY3JpYmUgLnN1Yl9pbWcgaW1nIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uc3Vic2NyaWJlIC5zdWJfdGV4dCBoMyB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXNpemU6IDU1cHg7XHJcbn1cclxuXHJcbi5zdWJzY3JpYmUgLnN1Yl90ZXh0IHAge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxufVxyXG5cclxuLnN1YnNjcmliZSAuc3ViX3RleHQge1xyXG4gICAgcGFkZGluZzogMjBweDtcclxufVxyXG5cclxuLnN1YnNjcmliZSBmb3JtIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG59XHJcblxyXG4uc3Vic2NyaWJlIC5mb3JtLWNvbnRyb2wge1xyXG4gICAgZGlzcGxheTogaW5saW5lO1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIHBhZGRpbmc6IDEwcHggMTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgYm9yZGVyLWNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbn1cclxuXHJcbi5zdWJzY3JpYmUgLmJ0biB7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDMwcHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGI0YjRiO1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjNGI0YjRiO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMDtcclxufVxyXG5cclxuXHJcbi8qIHN1YnNjcmliZSAqL1xyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE0NDFweCl7fVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMTk5cHgpIHtcclxuICAgIGgxe1xyXG4gICAgICAgIGZvbnQtc2l6ZTogNTdweDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgaDIge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMzhweDtcclxuICAgIH1cclxuICAgIGgze1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMzVweDtcclxuICAgIH1cclxuICAgIGg0e1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgIH1cclxuICAgIGg1e1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIH1cclxuICAgIGg2e1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIH1cclxuICAgIHB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgfVxyXG4gICAgYXtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICB9XHJcbiAgICAuYmFubmVyIHtcclxuICAgICAgICBoZWlnaHQ6IDUwMHB4O1xyXG4gICAgfVxyXG4gICAgLnN1YnNjcmliZSAuc3ViX3RleHQgaDMge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMzVweDtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICB9XHJcbiAgICAuc3Vic2NyaWJlIHtcclxuICAgICAgICBwYWRkaW5nLXRvcDogMDtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcclxuICAgIH1cclxuICAgIC5kZXNpZ257XHJcbiAgICAgICAgaGVpZ2h0OiAyNDFweDtcclxuICAgICAgICBwYWRkaW5nOiAzMHB4O1xyXG4gICAgfVxyXG4gICAgLnRlc3RfdGV4dCB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMDtcclxuICAgIH1cclxuICAgIC5hYm91dC10ZXh0IGg0LCBoMiwgcCB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIH1cclxuICAgIC5hYm91dC10ZXh0IHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTFweCkge1xyXG4gICAgLnB5IHtcclxuICAgICAgICBwYWRkaW5nLXRvcDogMjBweDtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcclxuICAgIH1cclxuICAgIC5iYW5uZXIge1xyXG4gICAgICAgIGhlaWdodDogMzUwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmdyaWQge1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAxMDBweDtcclxuICAgIH1cclxuXHJcbiAgICAuZ3JpZF9zZXJ2IHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5ncmlkIC5jYXJkX2ltZyB7XHJcbiAgICAgICAgLyogd2lkdGg6IDEwMCU7ICovXHJcbiAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG5cclxuICAgIC5kZXNpZ25lZCAuZGVzX3RleHQge1xyXG4gICAgICAgIGhlaWdodDogMzEwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmRlc2lnbmVkIC5kZXNfdGV4dCBwIHtcclxuICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmRhdGUge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5sYXctdW5pdCB7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAyM3B4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgIH1cclxuXHJcbiAgICAubGF3LXVuaXQ6YmVmb3JlIHtcclxuICAgICAgICB3aWR0aDogMjBweDtcclxuICAgIH1cclxuXHJcbiAgICAucHJvamVjdF9pdGVtIGg0IHtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDA7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgfVxyXG4gICAgLmRlc2lnbiB7XHJcbiAgICAgICAgaGVpZ2h0OiAyMTBweDtcclxuICAgICAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICB9XHJcbiAgICAuZGVzaWduX3RleHQge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7fVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NzVweCkge1xyXG4gICAgaDF7XHJcbiAgICAgICAgZm9udC1zaXplOiAzNXB4O1xyXG4gICAgfVxyXG4gICAgaDJ7XHJcbiAgICAgICAgZm9udC1zaXplOiAzMnB4O1xyXG4gICAgfVxyXG5cclxuICAgIHB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgfVxyXG4gICAgLmdyaWRfdGV4dCB7XHJcbiAgICAgICAgcGFkZGluZzogNXB4IDE0cHg7XHJcbiAgICB9XHJcbiAgICAuYmFubmVyIHtcclxuICAgICAgICBoZWlnaHQ6IDI2MHB4O1xyXG4gICAgfVxyXG4gICAgLmJhbm5lciBoMSB7XHJcbiAgICAgICAgcGFkZGluZzogMjclIDYlO1xyXG4gICAgfVxyXG4gICAgLmNhcmQge1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMDtcclxuICAgIH1cclxuICAgIC5ncmlkIC5idG57XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgICAuZ3JpZCAuY2FyZC1ib2R5IHtcclxuICAgICAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgfVxyXG4gICAgLmRlc2lnbiB7XHJcbiAgICAgICAgaGVpZ2h0OiAxODBweDtcclxuICAgIH1cclxuICAgIC50ZXN0aW1vbmlhbCAuY2FyZCB7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAwO1xyXG4gICAgfVxyXG4gICAgLnRlc3RpbW9uaWFsIC5jYXJkIGg0IHtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDQwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLnN1YnRpdGxlIC50aXRsZTpiZWZvcmUge1xyXG4gICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgdG9wOiAxMiU7XHJcbiAgICAgICAgd2lkdGg6IDM1cHg7XHJcbiAgICB9XHJcbiAgICAucHJvamVjdCAucHJvamVjdF9pdGVtIGltZyB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgICAuc2VydmljZXMgLml0ZW0gaW1nIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuXHJcbiAgICAucHJvamVjdF9pdGVtIGg0IHtcclxuXHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE1cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLnRlc3RpbW9uaWFsIC5jYXJkIGgzIHtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDQwcHg7XHJcbiAgICB9XHJcbiAgICAuc3Vic2NyaWJlIC5zdWJfdGV4dCB7XHJcbiAgICAgICAgcGFkZGluZzogMjBweDtcclxuICAgIH1cclxuICAgIC5jYXJkLWJvZHl7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgIH1cclxuICAgIC5ncmlke1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDgwcHg7XHJcbiAgICB9XHJcbiAgICAuc3Vic2NyaWJlIC5mb3JtLWNvbnRyb2wge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 94114:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppRoutingModule: () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home/home.component */ 27824);
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./about/about.component */ 82912);
/* harmony import */ var _booking_form_booking_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./booking-form/booking-form.component */ 62350);
/* harmony import */ var _blog_blog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./blog/blog.component */ 42242);
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contact/contact.component */ 78712);
/* harmony import */ var _form2_form2_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./form2/form2.component */ 80652);
/* harmony import */ var _form2_destination_destination_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./form2/destination/destination.component */ 24031);
/* harmony import */ var _form2_date_date_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./form2/date/date.component */ 84629);
/* harmony import */ var _form2_rooms_rooms_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./form2/rooms/rooms.component */ 73755);
/* harmony import */ var _form2_hotel_list_hotel_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./form2/hotel-list/hotel-list.component */ 21091);
/* harmony import */ var _form2_payment_payment_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./form2/payment/payment.component */ 64559);
/* harmony import */ var _signin_signin_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./signin/signin.component */ 99550);
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./login/login.component */ 3644);
/* harmony import */ var _texteditor_texteditor_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./texteditor/texteditor.component */ 56066);
/* harmony import */ var _graph_graph_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./graph/graph.component */ 72844);
/* harmony import */ var _form2_hotel_list2_hotel_list2_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./form2/hotel-list2/hotel-list2.component */ 14459);
/* harmony import */ var _form2_hotel_list3_hotel_list3_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./form2/hotel-list3/hotel-list3.component */ 70335);
/* harmony import */ var _form2_hotel_list4_hotel_list4_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./form2/hotel-list4/hotel-list4.component */ 15623);
/* harmony import */ var _form2_hotel_list5_hotel_list5_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./form2/hotel-list5/hotel-list5.component */ 26651);
/* harmony import */ var _form_receipt_form_receipt_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./form-receipt/form-receipt.component */ 86816);
/* harmony import */ var _form2_pdf_pdf_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./form2/pdf/pdf.component */ 65947);
/* harmony import */ var _successful_successful_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./successful/successful.component */ 36722);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/core */ 37580);

























const routes = [{
  path: '',
  redirectTo: '/home',
  pathMatch: 'full'
}, {
  path: 'home',
  component: _home_home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent
}, {
  path: 'about',
  component: _about_about_component__WEBPACK_IMPORTED_MODULE_1__.AboutComponent
}, {
  path: 'booking-form',
  component: _booking_form_booking_form_component__WEBPACK_IMPORTED_MODULE_2__.BookingFormComponent
}, {
  path: 'blog',
  component: _blog_blog_component__WEBPACK_IMPORTED_MODULE_3__.BlogComponent
}, {
  path: 'contact',
  component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_4__.ContactComponent
}, {
  path: 'signin',
  component: _signin_signin_component__WEBPACK_IMPORTED_MODULE_11__.SigninComponent
}, {
  path: 'login',
  component: _login_login_component__WEBPACK_IMPORTED_MODULE_12__.LoginComponent
}, {
  path: "texteditor",
  component: _texteditor_texteditor_component__WEBPACK_IMPORTED_MODULE_13__.TexteditorComponent
}, {
  path: "graph",
  component: _graph_graph_component__WEBPACK_IMPORTED_MODULE_14__.GraphComponent
}, {
  path: 'form-receipt',
  component: _form_receipt_form_receipt_component__WEBPACK_IMPORTED_MODULE_19__.FormReceiptComponent
}, {
  path: 'successful',
  component: _successful_successful_component__WEBPACK_IMPORTED_MODULE_21__.SuccessfulComponent
}, {
  path: 'form2',
  component: _form2_form2_component__WEBPACK_IMPORTED_MODULE_5__.Form2Component,
  children: [{
    path: 'date',
    component: _form2_date_date_component__WEBPACK_IMPORTED_MODULE_7__.DateComponent
  }, {
    path: 'hotel_list',
    component: _form2_hotel_list_hotel_list_component__WEBPACK_IMPORTED_MODULE_9__.HotelListComponent
  }, {
    path: 'hotel_list2',
    component: _form2_hotel_list2_hotel_list2_component__WEBPACK_IMPORTED_MODULE_15__.HotelList2Component
  }, {
    path: 'hotel_list3',
    component: _form2_hotel_list3_hotel_list3_component__WEBPACK_IMPORTED_MODULE_16__.HotelList3Component
  }, {
    path: 'hotel_list4',
    component: _form2_hotel_list4_hotel_list4_component__WEBPACK_IMPORTED_MODULE_17__.HotelList4Component
  }, {
    path: 'hotel_list5',
    component: _form2_hotel_list5_hotel_list5_component__WEBPACK_IMPORTED_MODULE_18__.HotelList5Component
  }, {
    path: 'destination',
    component: _form2_destination_destination_component__WEBPACK_IMPORTED_MODULE_6__.DestinationComponent
  }, {
    path: 'rooms',
    component: _form2_rooms_rooms_component__WEBPACK_IMPORTED_MODULE_8__.RoomsComponent
  }, {
    path: 'payment',
    component: _form2_payment_payment_component__WEBPACK_IMPORTED_MODULE_10__.PaymentComponent
  }, {
    path: 'pdf',
    component: _form2_pdf_pdf_component__WEBPACK_IMPORTED_MODULE_20__.PdfComponent
  }, {
    path: '',
    redirectTo: 'date',
    pathMatch: 'full'
  } // Default child route
  ]
}, {
  path: '**',
  redirectTo: ''
} // Wildcard route for 404
];
class AppRoutingModule {
  static #_ = this.ɵfac = function AppRoutingModule_Factory(t) {
    return new (t || AppRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdefineNgModule"]({
    type: AppRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_23__.RouterModule.forRoot(routes, {
      useHash: true
    }), _angular_router__WEBPACK_IMPORTED_MODULE_23__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_23__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_23__.RouterModule]
  });
})();

/***/ }),

/***/ 20092:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header/header.component */ 42152);
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer/footer.component */ 60708);




class AppComponent {
  static #_ = this.ɵfac = function AppComponent_Factory(t) {
    return new (t || AppComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: AppComponent,
    selectors: [["app-root"]],
    decls: 4,
    vars: 0,
    template: function AppComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "main");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "app-footer");
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterOutlet, _header_header_component__WEBPACK_IMPORTED_MODULE_0__.HeaderComponent, _footer_footer_component__WEBPACK_IMPORTED_MODULE_1__.FooterComponent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 50635:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppModule: () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 48418);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/input */ 95541);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/core */ 74646);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/material/datepicker */ 61977);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/platform-browser */ 80436);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 94114);
/* harmony import */ var ngx_daterangepicker_material__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ngx-daterangepicker-material */ 82435);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/platform-browser/animations */ 43835);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/material/form-field */ 24950);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/material/button */ 84175);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @angular/material/icon */ 93840);
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ 98379);
/* harmony import */ var ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ngx-bootstrap/locale */ 34875);
/* harmony import */ var ngx_dropzone__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ngx-dropzone */ 53947);
/* harmony import */ var ngx_editor__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ngx-editor */ 71813);
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ng2-charts */ 16045);
/* harmony import */ var _kolkov_angular_editor__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @kolkov/angular-editor */ 89021);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/material/checkbox */ 97024);
/* harmony import */ var ngx_quill__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ngx-quill */ 12041);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 20092);
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about/about.component */ 82912);
/* harmony import */ var _blog_blog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./blog/blog.component */ 42242);
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contact/contact.component */ 78712);
/* harmony import */ var _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./gallery/gallery.component */ 57992);
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./header/header.component */ 42152);
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./footer/footer.component */ 60708);
/* harmony import */ var _form2_form2_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./form2/form2.component */ 80652);
/* harmony import */ var _booking_form_booking_form_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./booking-form/booking-form.component */ 62350);
/* harmony import */ var _form2_destination_destination_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./form2/destination/destination.component */ 24031);
/* harmony import */ var _form2_date_date_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./form2/date/date.component */ 84629);
/* harmony import */ var _form2_rooms_rooms_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./form2/rooms/rooms.component */ 73755);
/* harmony import */ var _form2_hotel_list_hotel_list_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./form2/hotel-list/hotel-list.component */ 21091);
/* harmony import */ var _form2_payment_payment_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./form2/payment/payment.component */ 64559);
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./home/home.component */ 27824);
/* harmony import */ var _signin_signin_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./signin/signin.component */ 99550);
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./login/login.component */ 3644);
/* harmony import */ var _graph_graph_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./graph/graph.component */ 72844);
/* harmony import */ var _texteditor_texteditor_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./texteditor/texteditor.component */ 56066);
/* harmony import */ var _form2_hotel_list2_hotel_list2_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./form2/hotel-list2/hotel-list2.component */ 14459);
/* harmony import */ var _form2_hotel_list3_hotel_list3_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./form2/hotel-list3/hotel-list3.component */ 70335);
/* harmony import */ var _form2_hotel_list4_hotel_list4_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./form2/hotel-list4/hotel-list4.component */ 15623);
/* harmony import */ var _form2_hotel_list5_hotel_list5_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./form2/hotel-list5/hotel-list5.component */ 26651);
/* harmony import */ var _form_receipt_form_receipt_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./form-receipt/form-receipt.component */ 86816);
/* harmony import */ var _form2_pdf_pdf_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./form2/pdf/pdf.component */ 65947);
/* harmony import */ var _successful_successful_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./successful/successful.component */ 36722);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/core */ 37580);






















































(0,ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_27__.defineLocale)('en-gb', ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_27__.enGbLocale);
class AppModule {
  static #_ = this.ɵfac = function AppModule_Factory(t) {
    return new (t || AppModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵdefineNgModule"]({
    type: AppModule,
    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵdefineInjector"]({
    providers: [(0,_angular_platform_browser__WEBPACK_IMPORTED_MODULE_29__.provideClientHydration)(), (0,ng2_charts__WEBPACK_IMPORTED_MODULE_30__.provideCharts)((0,ng2_charts__WEBPACK_IMPORTED_MODULE_30__.withDefaultRegisterables)())],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_29__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_31__.ReactiveFormsModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_32__.NgbModule, _angular_forms__WEBPACK_IMPORTED_MODULE_31__.FormsModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_33__.MatInputModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_34__.MatNativeDateModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_35__.MatDatepickerModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_36__.BrowserAnimationsModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_37__.MatFormFieldModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_38__.MatCheckboxModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_39__.MatButtonModule, _kolkov_angular_editor__WEBPACK_IMPORTED_MODULE_40__.AngularEditorModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_41__.MatIconModule, ngx_dropzone__WEBPACK_IMPORTED_MODULE_42__.NgxDropzoneModule, ngx_quill__WEBPACK_IMPORTED_MODULE_43__.QuillModule.forRoot(), ngx_editor__WEBPACK_IMPORTED_MODULE_44__.NgxEditorModule.forRoot({
      locals: {
        bold: 'Bold',
        italic: 'Italic',
        code: 'Code',
        underline: 'Underline'
        // Add more localized button names as needed
      }
    }), ngx_daterangepicker_material__WEBPACK_IMPORTED_MODULE_45__.NgxDaterangepickerMd.forRoot(), ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_46__.BsDatepickerModule.forRoot()]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _about_about_component__WEBPACK_IMPORTED_MODULE_2__.AboutComponent, _blog_blog_component__WEBPACK_IMPORTED_MODULE_3__.BlogComponent, _contact_contact_component__WEBPACK_IMPORTED_MODULE_4__.ContactComponent, _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_5__.GalleryComponent, _header_header_component__WEBPACK_IMPORTED_MODULE_6__.HeaderComponent, _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__.FooterComponent, _form2_form2_component__WEBPACK_IMPORTED_MODULE_8__.Form2Component, _booking_form_booking_form_component__WEBPACK_IMPORTED_MODULE_9__.BookingFormComponent, _form2_destination_destination_component__WEBPACK_IMPORTED_MODULE_10__.DestinationComponent, _form2_date_date_component__WEBPACK_IMPORTED_MODULE_11__.DateComponent, _form2_rooms_rooms_component__WEBPACK_IMPORTED_MODULE_12__.RoomsComponent, _form2_hotel_list_hotel_list_component__WEBPACK_IMPORTED_MODULE_13__.HotelListComponent, _form2_payment_payment_component__WEBPACK_IMPORTED_MODULE_14__.PaymentComponent, _home_home_component__WEBPACK_IMPORTED_MODULE_15__.HomeComponent, _signin_signin_component__WEBPACK_IMPORTED_MODULE_16__.SigninComponent, _login_login_component__WEBPACK_IMPORTED_MODULE_17__.LoginComponent, _graph_graph_component__WEBPACK_IMPORTED_MODULE_18__.GraphComponent, _texteditor_texteditor_component__WEBPACK_IMPORTED_MODULE_19__.TexteditorComponent, _form2_hotel_list2_hotel_list2_component__WEBPACK_IMPORTED_MODULE_20__.HotelList2Component, _form2_hotel_list3_hotel_list3_component__WEBPACK_IMPORTED_MODULE_21__.HotelList3Component, _form2_hotel_list4_hotel_list4_component__WEBPACK_IMPORTED_MODULE_22__.HotelList4Component, _form2_hotel_list5_hotel_list5_component__WEBPACK_IMPORTED_MODULE_23__.HotelList5Component, _form_receipt_form_receipt_component__WEBPACK_IMPORTED_MODULE_24__.FormReceiptComponent, _form2_pdf_pdf_component__WEBPACK_IMPORTED_MODULE_25__.PdfComponent, _successful_successful_component__WEBPACK_IMPORTED_MODULE_26__.SuccessfulComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_29__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_31__.ReactiveFormsModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_32__.NgbModule, _angular_forms__WEBPACK_IMPORTED_MODULE_31__.FormsModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_33__.MatInputModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_34__.MatNativeDateModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_35__.MatDatepickerModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_36__.BrowserAnimationsModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_37__.MatFormFieldModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_38__.MatCheckboxModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_39__.MatButtonModule, _kolkov_angular_editor__WEBPACK_IMPORTED_MODULE_40__.AngularEditorModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_41__.MatIconModule, ng2_charts__WEBPACK_IMPORTED_MODULE_30__.BaseChartDirective, ngx_dropzone__WEBPACK_IMPORTED_MODULE_42__.NgxDropzoneModule, ngx_quill__WEBPACK_IMPORTED_MODULE_43__.QuillModule, ngx_editor__WEBPACK_IMPORTED_MODULE_44__.NgxEditorModule, ngx_daterangepicker_material__WEBPACK_IMPORTED_MODULE_45__.NgxDaterangepickerMd, ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_46__.BsDatepickerModule]
  });
})();

/***/ }),

/***/ 42242:
/*!****************************************!*\
  !*** ./src/app/blog/blog.component.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BlogComponent: () => (/* binding */ BlogComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37580);

class BlogComponent {
  static #_ = this.ɵfac = function BlogComponent_Factory(t) {
    return new (t || BlogComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: BlogComponent,
    selectors: [["app-blog"]],
    decls: 2,
    vars: 0,
    template: function BlogComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "blog works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    },
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 62350:
/*!********************************************************!*\
  !*** ./src/app/booking-form/booking-form.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BookingFormComponent: () => (/* binding */ BookingFormComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var ngx_dropzone__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-dropzone */ 53947);





function BookingFormComponent_div_15_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "First name is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function BookingFormComponent_div_15_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "First name must be at least 2 characters long.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function BookingFormComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BookingFormComponent_div_15_div_1_Template, 2, 0, "div", 48)(2, BookingFormComponent_div_15_div_2_Template, 2, 0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const firstName_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", firstName_r3.errors == null ? null : firstName_r3.errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", firstName_r3.errors == null ? null : firstName_r3.errors["minlength"]);
  }
}
function BookingFormComponent_div_22_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "First name is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function BookingFormComponent_div_22_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "First name must be at least 2 characters long.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function BookingFormComponent_div_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BookingFormComponent_div_22_div_1_Template, 2, 0, "div", 48)(2, BookingFormComponent_div_22_div_2_Template, 2, 0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const lastName_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", lastName_r4.errors == null ? null : lastName_r4.errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", lastName_r4.errors == null ? null : lastName_r4.errors["minlength"]);
  }
}
function BookingFormComponent_div_31_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Email is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function BookingFormComponent_div_31_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Invalid email format.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function BookingFormComponent_div_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BookingFormComponent_div_31_div_1_Template, 2, 0, "div", 48)(2, BookingFormComponent_div_31_div_2_Template, 2, 0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const email_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", email_r5.errors == null ? null : email_r5.errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", email_r5.errors == null ? null : email_r5.errors["email"]);
  }
}
function BookingFormComponent_div_38_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Phone number is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function BookingFormComponent_div_38_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Invalid phone number format (should be 10 digits).");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function BookingFormComponent_div_38_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BookingFormComponent_div_38_div_1_Template, 2, 0, "div", 48)(2, BookingFormComponent_div_38_div_2_Template, 2, 0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const phone_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", phone_r6.errors == null ? null : phone_r6.errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", phone_r6.errors == null ? null : phone_r6.errors["pattern"]);
  }
}
function BookingFormComponent_div_57_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "location selection is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function BookingFormComponent_div_57_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BookingFormComponent_div_57_div_1_Template, 2, 0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const location_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", location_r7.errors == null ? null : location_r7.errors["required"]);
  }
}
function BookingFormComponent_option_66_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const type_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", type_r8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](type_r8);
  }
}
function BookingFormComponent_div_67_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "RoomType selection is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function BookingFormComponent_div_67_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BookingFormComponent_div_67_div_1_Template, 2, 0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const roomType_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", roomType_r9.errors == null ? null : roomType_r9.errors["required"]);
  }
}
function BookingFormComponent_div_76_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Check-in date is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function BookingFormComponent_div_76_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BookingFormComponent_div_76_div_1_Template, 2, 0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const checkinDate_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", checkinDate_r10.errors == null ? null : checkinDate_r10.errors["required"]);
  }
}
function BookingFormComponent_div_83_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Check-out date is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function BookingFormComponent_div_83_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Check-out date must be after check-in date.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function BookingFormComponent_div_83_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BookingFormComponent_div_83_div_1_Template, 2, 0, "div", 48)(2, BookingFormComponent_div_83_div_2_Template, 2, 0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const checkoutDate_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", checkoutDate_r11.errors == null ? null : checkoutDate_r11.errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", checkoutDate_r11.errors == null ? null : checkoutDate_r11.errors["min"]);
  }
}
function BookingFormComponent_ngx_dropzone_preview_91_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngx-dropzone-preview", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("removed", function BookingFormComponent_ngx_dropzone_preview_91_Template_ngx_dropzone_preview_removed_0_listener() {
      const f_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12).$implicit;
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r13.onRemove(f_r13));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ngx-dropzone-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const f_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("removable", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", f_r13.name, " (", f_r13.type, ")");
  }
}
class BookingFormComponent {
  constructor(formBuilder) {
    this.formBuilder = formBuilder;
    this.roomTypes = ['Standard', 'Deluxe', 'Suite', 'Family Room'];
    this.files = [];
  }
  ngOnInit() {
    this.bookingForm = this.formBuilder.group({
      firstName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.minLength(2)]],
      lastName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.minLength(2)]],
      location: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required, this.locationValidator]],
      file: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required],
      checkinDate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required],
      checkoutDate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required],
      numberOfAdults: [1, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.min(1)]],
      numberOfChildren: [0, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.min(0)]
      // Add other form controls as needed
    });
  }
  locationValidator(control) {
    const locationValue = control.value;
    if (locationValue === 'Select Location') {
      return {
        locationError: true
      };
    }
    return null;
  }
  onSelect(event) {
    console.log(event);
    this.files.push(...event.addedFiles);
    const formData = new FormData();
    for (var i = 0; i < this.files.length; i++) {
      formData.append("file[]", this.files[i]);
    }
  }
  onRemove(event) {
    this.files.splice(this.files.indexOf(event), 1);
  }
  updateCheckOutMinDate() {
    if (this.bookingForm.value.checkoutDate < this.bookingForm.value.checkinDate) {
      this.bookingForm.patchValue({
        checkoutDate: this.bookingForm.value.checkinDate
      });
    }
  }
  calculateDuration() {
    const checkin = new Date(this.bookingForm.value.checkinDate);
    const checkout = new Date(this.bookingForm.value.checkoutDate);
    const diffTime = Math.abs(checkout.getTime() - checkin.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  }
  isValidDateRange() {
    return new Date(this.bookingForm.value.checkoutDate) > new Date(this.bookingForm.value.checkinDate);
  }
  increment(controlName) {
    const currentValue = this.bookingForm.value[controlName];
    this.bookingForm.patchValue({
      [controlName]: currentValue + 1
    });
  }
  decrement(controlName) {
    const currentValue = this.bookingForm.value[controlName];
    if (currentValue > 0) {
      this.bookingForm.patchValue({
        [controlName]: currentValue - 1
      });
    }
  }
  submitForm(form) {
    if (form.valid) {
      // Handle the form submission logic here
      console.log('Form submitted:', form.value);
    }
  }
  handleFormSubmit(form) {
    this.submitForm(form);
    this.showAlert();
  }
  showAlert() {
    alert('Form submitted!');
  }
  static #_ = this.ɵfac = function BookingFormComponent_Factory(t) {
    return new (t || BookingFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormBuilder));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: BookingFormComponent,
    selectors: [["app-booking-form"]],
    decls: 95,
    vars: 20,
    consts: [["bookingForm", "ngForm"], ["firstName", "ngModel"], ["lastName", "ngModel"], ["email", "ngModel"], ["phone", "ngModel"], ["location", "ngModel"], ["roomType", "ngModel"], ["checkinDate", "ngModel"], ["checkoutDate", "ngModel"], [1, "form1"], [1, "container"], [1, "form_text"], [1, "booking-form", 3, "ngSubmit"], [1, "form-heading"], [1, "row"], [1, "col-md-6"], [1, "form-group"], ["for", "firstName"], ["type", "text", "id", "firstName", "name", "firstName", "required", "", "minlength", "2", 1, "form-control", 3, "ngModelChange", "ngModel"], ["class", "text-danger", 4, "ngIf"], ["for", "name"], ["type", "text", "id", "lastName", "name", "lastName", "required", "", "minlength", "2", 1, "form-control", 3, "ngModelChange", "ngModel"], ["for", "age"], ["type", "email", "id", "email", "name", "email", "required", "", "email", "", 1, "form-control", 3, "ngModelChange", "ngModel"], ["for", "phone"], ["type", "tel", "id", "phone", "name", "phone", "required", "", "pattern", "[0-9]{10}", 1, "form-control", 3, "ngModelChange", "ngModel"], ["for", "location"], ["id", "location", "name", "location", "required", "", 1, "form-control", 3, "ngModelChange", "ngModel"], ["value", ""], ["value", "New York"], ["value", "Los Angeles"], ["value", "Chicago"], ["value", "San Francisco"], ["for", "roomType"], ["id", "roomType", "name", "roomType", "required", "", 1, "form-control", 3, "ngModelChange", "ngModel"], [3, "value", 4, "ngFor", "ngForOf"], ["for", "checkinDate"], ["type", "date", "id", "checkinDate", "name", "checkinDate", "required", "", 1, "form-control", 3, "ngModelChange", "ngModel"], ["for", "checkoutDate"], ["type", "date", "id", "checkoutDate", "name", "checkoutDate", "required", "", 1, "form-control", 3, "ngModelChange", "ngModel", "min"], [3, "change"], [1, "upload"], ["src", "./assets/images/drop.jpeg", 1, "upload_img"], [1, "drop_input"], [3, "removable", "removed", 4, "ngFor", "ngForOf"], [1, "submit"], ["type", "submit", 1, "btn", "btn-success", 3, "disabled"], [1, "text-danger"], [4, "ngIf"], [3, "value"], [3, "removed", "removable"]],
    template: function BookingFormComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9)(1, "div", 10)(2, "div", 11)(3, "form", 12, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function BookingFormComponent_Template_form_ngSubmit_3_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
          const bookingForm_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
          ctx.submitForm(bookingForm_r2);
          return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.showAlert());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Booking-form ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 13)(8, "div", 14)(9, "div", 15)(10, "div", 16)(11, "label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "First Name:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "input", 18, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayListener"]("ngModelChange", function BookingFormComponent_Template_input_ngModelChange_13_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
          const bookingForm_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayBindingSet"](bookingForm_r2.value.firstName, $event) || (bookingForm_r2.value.firstName = $event);
          return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"]($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, BookingFormComponent_div_15_Template, 3, 2, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 15)(17, "div", 16)(18, "label", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Last Name:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "input", 21, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayListener"]("ngModelChange", function BookingFormComponent_Template_input_ngModelChange_20_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
          const bookingForm_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayBindingSet"](bookingForm_r2.value.lastName, $event) || (bookingForm_r2.value.lastName = $event);
          return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"]($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, BookingFormComponent_div_22_Template, 3, 2, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 13)(24, "div", 14)(25, "div", 15)(26, "div", 16)(27, "label", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Email Id:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "input", 23, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayListener"]("ngModelChange", function BookingFormComponent_Template_input_ngModelChange_29_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
          const bookingForm_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayBindingSet"](bookingForm_r2.value.email, $event) || (bookingForm_r2.value.email = $event);
          return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"]($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, BookingFormComponent_div_31_Template, 3, 2, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 15)(33, "div", 16)(34, "label", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Phone Number:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "input", 25, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayListener"]("ngModelChange", function BookingFormComponent_Template_input_ngModelChange_36_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
          const bookingForm_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayBindingSet"](bookingForm_r2.value.phone, $event) || (bookingForm_r2.value.phone = $event);
          return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"]($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, BookingFormComponent_div_38_Template, 3, 2, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 13)(40, "div", 14)(41, "div", 15)(42, "div", 16)(43, "label", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Location:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "select", 27, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayListener"]("ngModelChange", function BookingFormComponent_Template_select_ngModelChange_45_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
          const bookingForm_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayBindingSet"](bookingForm_r2.value.location, $event) || (bookingForm_r2.value.location = $event);
          return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"]($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "option", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Select Location");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "option", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "New York");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "option", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Los Angeles");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "option", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Chicago");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "option", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "San Francisco");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](57, BookingFormComponent_div_57_Template, 2, 1, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 15)(59, "div", 16)(60, "label", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Room Type:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "select", 34, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayListener"]("ngModelChange", function BookingFormComponent_Template_select_ngModelChange_62_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
          const bookingForm_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayBindingSet"](bookingForm_r2.value.roomType, $event) || (bookingForm_r2.value.roomType = $event);
          return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"]($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "option", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Select Room Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](66, BookingFormComponent_option_66_Template, 2, 2, "option", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](67, BookingFormComponent_div_67_Template, 2, 1, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 13)(69, "div", 14)(70, "div", 15)(71, "div", 16)(72, "label", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Check-in Date:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "input", 37, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayListener"]("ngModelChange", function BookingFormComponent_Template_input_ngModelChange_74_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
          const bookingForm_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayBindingSet"](bookingForm_r2.value.checkinDate, $event) || (bookingForm_r2.value.checkinDate = $event);
          return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"]($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](76, BookingFormComponent_div_76_Template, 2, 1, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 15)(78, "div", 16)(79, "label", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "Check-out Date:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "input", 39, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayListener"]("ngModelChange", function BookingFormComponent_Template_input_ngModelChange_81_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
          const bookingForm_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayBindingSet"](bookingForm_r2.value.checkoutDate, $event) || (bookingForm_r2.value.checkoutDate = $event);
          return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"]($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](83, BookingFormComponent_div_83_Template, 3, 2, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "ngx-dropzone", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function BookingFormComponent_Template_ngx_dropzone_change_84_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.onSelect($event));
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 41)(86, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](87, "img", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div")(89, "h5", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "Drag and drop file here");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](91, BookingFormComponent_ngx_dropzone_preview_91_Template, 3, 3, "ngx-dropzone-preview", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div", 45)(93, "button", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
      }
      if (rf & 2) {
        const bookingForm_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
        const firstName_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](14);
        const lastName_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](21);
        const email_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](30);
        const phone_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](37);
        const location_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](46);
        const roomType_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](63);
        const checkinDate_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](75);
        const checkoutDate_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](82);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayProperty"]("ngModel", bookingForm_r2.value.firstName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", firstName_r3.invalid && (firstName_r3.dirty || firstName_r3.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayProperty"]("ngModel", bookingForm_r2.value.lastName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", lastName_r4.invalid && (lastName_r4.dirty || lastName_r4.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayProperty"]("ngModel", bookingForm_r2.value.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", email_r5.invalid && (email_r5.dirty || email_r5.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayProperty"]("ngModel", bookingForm_r2.value.phone);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", phone_r6.invalid && (phone_r6.dirty || phone_r6.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayProperty"]("ngModel", bookingForm_r2.value.location);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", location_r7.invalid && (location_r7.dirty || location_r7.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayProperty"]("ngModel", bookingForm_r2.value.roomType);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.roomTypes);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", roomType_r9.invalid && (roomType_r9.dirty || roomType_r9.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayProperty"]("ngModel", bookingForm_r2.value.checkinDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", checkinDate_r10.invalid && (checkinDate_r10.dirty || checkinDate_r10.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayProperty"]("ngModel", bookingForm_r2.value.checkoutDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("min", bookingForm_r2.value.checkinDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", checkoutDate_r11.invalid && (checkoutDate_r11.dirty || checkoutDate_r11.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.files);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", bookingForm_r2.invalid || !ctx.isValidDateRange());
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.MinLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.PatternValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.EmailValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgForm, ngx_dropzone__WEBPACK_IMPORTED_MODULE_3__.NgxDropzoneComponent, ngx_dropzone__WEBPACK_IMPORTED_MODULE_3__.NgxDropzoneLabelDirective, ngx_dropzone__WEBPACK_IMPORTED_MODULE_3__.NgxDropzonePreviewComponent],
    styles: [".form1[_ngcontent-%COMP%] {\n    margin-top: 50px;\n    margin-bottom: 50px;\n\n}\n\nh2[_ngcontent-%COMP%] {\n    text-align: center;\n    margin-bottom: 20px;\n    font-weight: 800;\n    font-size: 30px;\n    color: white;\n}\n\n.form_text[_ngcontent-%COMP%] {\n    max-width: 500px;\n    padding-top: 20px;\n    border-radius: 10px;\n    margin-left: auto;\n    margin-right: auto;\n    background: rgba(255, 255, 255, 0.9); \n    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2); \n    width: 100%;\n    z-index: 1; \n    background: url('bg3-img.jpg') no-repeat center center; \n    background-size: cover;\n    position: relative;\n    background-position: center;\n}\n\n.form_text[_ngcontent-%COMP%]::before {\n    content: '';\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background: rgba(0, 0, 0, 0.5); \n\n    filter: blur(8px); \n\n    z-index: -1; \n\n}\n.upload[_ngcontent-%COMP%] {\n    display: block;\n    margin-left: auto;\n    margin-right: auto;\n}\n\n.upload_img[_ngcontent-%COMP%] {\n    height: 130px;\n}\n\n.drop_input[_ngcontent-%COMP%] {\n    text-align: center;\n    width: 100%;\n}\nngx-dropzone[_ngcontent-%COMP%] {\n    height: auto;\n}\nngx-dropzone-label[_ngcontent-%COMP%] {\n    overflow: auto;\n}\n\ninput[type=text][_ngcontent-%COMP%], \ninput[type=email][_ngcontent-%COMP%], \ninput[type=date][_ngcontent-%COMP%], \ninput[type=time][_ngcontent-%COMP%] {\n    width: 100%;\n    font-size: 16px;\n    border: 1px solid #ccc;\n    border-radius: 4px;\n    box-sizing: border-box;\n}\n\n.input-group[_ngcontent-%COMP%] {\n    background-color: transparent;\n    border-style: solid;\n    border-color: white;\n    height: 45px;\n    width: 100%;\n    border-radius: 4px;\n    display: flex;\n\n}\n\nbutton.btn.btn-succes[_ngcontent-%COMP%] {\n    background-color: #494949;\n    color: white;\n}\n\nselect#location[_ngcontent-%COMP%] {\n    width: 100%;\n    font-size: 16px;\n    border: 1px solid #ccc;\n    border-radius: 4px;\n    box-sizing: border-box;\n    display: block;\n}\n\nlabel[_ngcontent-%COMP%] {\n    font-weight: bold;\n    font-size: 13px;\n    color: white;\n}\n\n.form-group[_ngcontent-%COMP%] {\n    margin-bottom: 10px;\n}\n\n.form-heading[_ngcontent-%COMP%] {\n    width: 100%;\n    \n\n}\n\ninput#phone[_ngcontent-%COMP%] {\n    width: 100%;\n    font-size: 16px;\n    border: 1px solid #ccc;\n    border-radius: 4px;\n    box-sizing: border-box;\n    display: block;\n}\n\ninput#age[_ngcontent-%COMP%] {\n    width: 100%;\n    font-size: 16px;\n    border: 1px solid #ccc;\n    border-radius: 4px;\n    box-sizing: border-box;\n    display: block;\n}\n\nselect#roomType[_ngcontent-%COMP%] {\n    width: 100%;\n    font-size: 16px;\n    border: 1px solid #ccc;\n    border-radius: 4px;\n    box-sizing: border-box;\n    display: block;\n}\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\ninput#numberOfAdults[_ngcontent-%COMP%] {\n    border: transparent;\n    margin-left: auto;\n    margin-right: auto;\n    text-align: center;\n    font-size: 14px;\n    height: 37px;\n    width: 30px;\n}\n\ninput#numberOfChildren[_ngcontent-%COMP%] {\n    border: transparent;\n    margin-left: auto;\n    margin-right: auto;\n    text-align: center;\n    font-size: 14px;\n    height: 37px;\n    width: 30px;\n}\n\nbutton[_ngcontent-%COMP%] {\n    color: white;\n    border: none;\n    cursor: pointer;\n    margin-bottom: 20px;\n    margin-top: 20px;\n    width: 100%;\n    padding: 10px 20px;\n}\n\n.booking-form[_ngcontent-%COMP%] {\n    max-width: 400px;\n    margin: 0 auto;\n    \n\n    border-radius: 5px;\n    \n\n}\n\ninput[type=\"file\"][_ngcontent-%COMP%] {\n    display: block;\n    margin-top: 0.5rem;\n}\n\nselect[_ngcontent-%COMP%] {\n    width: 100%;\n    padding: 0.375rem 0.75rem;\n    font-size: 1rem;\n    line-height: 1.5;\n    color: #495057;\n    background-color: #fff;\n    background-clip: padding-box;\n    border: 1px solid #ced4da;\n    border-radius: 0.25rem;\n    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n}\n\n.error-message[_ngcontent-%COMP%] {\n    color: red;\n    font-size: 0.875rem;\n    margin-top: 0.25rem;\n}\n\n\n@media only screen and (max-width: 575px) {\n    h2[_ngcontent-%COMP%] {\n        text-align: center;\n        margin-bottom: 20px;\n        font-weight: 800;\n        font-size: 25px;\n    }\n\n    form.booking-form[_ngcontent-%COMP%] {\n        max-width: 350px;\n    }\n\n    .form1[_ngcontent-%COMP%] {\n        margin-top: 95px;\n        margin-bottom: 51px;\n    }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYm9va2luZy1mb3JtL2Jvb2tpbmctZm9ybS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0lBQ2hCLG1CQUFtQjs7QUFFdkI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsb0NBQW9DO0lBQ3BDLHVDQUF1QztJQUN2QyxXQUFXO0lBQ1gsVUFBVTtJQUNWLHNEQUEwRTtJQUMxRSxzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLE9BQU87SUFDUCxXQUFXO0lBQ1gsWUFBWTtJQUNaLDhCQUE4QixFQUFFLDhCQUE4QjtJQUM5RCxpQkFBaUIsRUFBRSxtQ0FBbUM7SUFDdEQsV0FBVyxFQUFFLHFDQUFxQztBQUN0RDtBQUNBO0lBQ0ksY0FBYztJQUNkLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7QUFDZjtBQUNBO0lBQ0ksWUFBWTtBQUNoQjtBQUNBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTs7OztJQUlJLFdBQVc7SUFDWCxlQUFlO0lBQ2Ysc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSw2QkFBNkI7SUFDN0IsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osV0FBVztJQUNYLGtCQUFrQjtJQUNsQixhQUFhOztBQUVqQjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGVBQWU7SUFDZixzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLHNCQUFzQjtJQUN0QixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksV0FBVztJQUNYLCtCQUErQjtBQUNuQzs7QUFFQTtJQUNJLFdBQVc7SUFDWCxlQUFlO0lBQ2Ysc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixzQkFBc0I7SUFDdEIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxlQUFlO0lBQ2Ysc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixzQkFBc0I7SUFDdEIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxlQUFlO0lBQ2Ysc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixzQkFBc0I7SUFDdEIsY0FBYztBQUNsQjs7QUFFQTs7Ozs7Ozs7Ozs7OztHQWFHOztBQUVIO0lBQ0ksbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixZQUFZO0lBQ1osV0FBVztBQUNmOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixZQUFZO0lBQ1osV0FBVztBQUNmOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7SUFDWixlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCw0QkFBNEI7SUFDNUIsa0JBQWtCO0lBQ2xCLCtCQUErQjtBQUNuQzs7QUFFQTtJQUNJLGNBQWM7SUFDZCxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gseUJBQXlCO0lBQ3pCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLHNCQUFzQjtJQUN0Qiw0QkFBNEI7SUFDNUIseUJBQXlCO0lBQ3pCLHNCQUFzQjtJQUN0Qix3RUFBd0U7QUFDNUU7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsbUJBQW1CO0lBQ25CLG1CQUFtQjtBQUN2Qjs7O0FBR0E7SUFDSTtRQUNJLGtCQUFrQjtRQUNsQixtQkFBbUI7UUFDbkIsZ0JBQWdCO1FBQ2hCLGVBQWU7SUFDbkI7O0lBRUE7UUFDSSxnQkFBZ0I7SUFDcEI7O0lBRUE7UUFDSSxnQkFBZ0I7UUFDaEIsbUJBQW1CO0lBQ3ZCO0FBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9ybTEge1xyXG4gICAgbWFyZ2luLXRvcDogNTBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XHJcblxyXG59XHJcblxyXG5oMiB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmZvcm1fdGV4dCB7XHJcbiAgICBtYXgtd2lkdGg6IDUwMHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOSk7IFxyXG4gICAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSgwLCAwLCAwLCAwLjIpOyBcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgei1pbmRleDogMTsgXHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uL2Fzc2V0cy9pbWFnZXMvYmczLWltZy5qcGcnKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlcjsgXHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG59XHJcblxyXG4uZm9ybV90ZXh0OjpiZWZvcmUge1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNSk7IC8qIERhcmsgb3ZlcmxheSB3aXRoIG9wYWNpdHkgKi9cclxuICAgIGZpbHRlcjogYmx1cig4cHgpOyAvKiBBZGp1c3QgYmx1ciBzdHJlbmd0aCBhcyBuZWVkZWQgKi9cclxuICAgIHotaW5kZXg6IC0xOyAvKiBQbGFjZSBvdmVybGF5IGJlaGluZCB0aGUgY29udGVudCAqL1xyXG59XHJcbi51cGxvYWQge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxufVxyXG5cclxuLnVwbG9hZF9pbWcge1xyXG4gICAgaGVpZ2h0OiAxMzBweDtcclxufVxyXG5cclxuLmRyb3BfaW5wdXQge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxubmd4LWRyb3B6b25lIHtcclxuICAgIGhlaWdodDogYXV0bztcclxufVxyXG5uZ3gtZHJvcHpvbmUtbGFiZWwge1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9dGV4dF0sXHJcbmlucHV0W3R5cGU9ZW1haWxdLFxyXG5pbnB1dFt0eXBlPWRhdGVdLFxyXG5pbnB1dFt0eXBlPXRpbWVdIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuXHJcbi5pbnB1dC1ncm91cCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICBib3JkZXItY29sb3I6IHdoaXRlO1xyXG4gICAgaGVpZ2h0OiA0NXB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG5cclxufVxyXG5cclxuYnV0dG9uLmJ0bi5idG4tc3VjY2VzIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0OTQ5NDk7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbnNlbGVjdCNsb2NhdGlvbiB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbmxhYmVsIHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uZm9ybS1ncm91cCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG4uZm9ybS1oZWFkaW5nIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogI2YzZmNmYjsgKi9cclxufVxyXG5cclxuaW5wdXQjcGhvbmUge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG5pbnB1dCNhZ2Uge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG5zZWxlY3Qjcm9vbVR5cGUge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4vKiBpbnB1dFt0eXBlPXRleHRdLFxyXG5pbnB1dFt0eXBlPWVtYWlsXSxcclxuaW5wdXRbdHlwZT1hZ2VdLFxyXG5pbnB1dFt0eXBlPWRhdGVdLFxyXG5pbnB1dFt0eXBlPXRpbWVdXHJcbntcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBwYWRkaW5nOiA4cHg7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG59ICovXHJcblxyXG5pbnB1dCNudW1iZXJPZkFkdWx0cyB7XHJcbiAgICBib3JkZXI6IHRyYW5zcGFyZW50O1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBoZWlnaHQ6IDM3cHg7XHJcbiAgICB3aWR0aDogMzBweDtcclxufVxyXG5cclxuaW5wdXQjbnVtYmVyT2ZDaGlsZHJlbiB7XHJcbiAgICBib3JkZXI6IHRyYW5zcGFyZW50O1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBoZWlnaHQ6IDM3cHg7XHJcbiAgICB3aWR0aDogMzBweDtcclxufVxyXG5cclxuYnV0dG9uIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XHJcbn1cclxuXHJcbi5ib29raW5nLWZvcm0ge1xyXG4gICAgbWF4LXdpZHRoOiA0MDBweDtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgI2NjYzsgKi9cclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6ICNmOWY5Zjk7ICovXHJcbn1cclxuXHJcbmlucHV0W3R5cGU9XCJmaWxlXCJdIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luLXRvcDogMC41cmVtO1xyXG59XHJcblxyXG5zZWxlY3Qge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAwLjM3NXJlbSAwLjc1cmVtO1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcclxuICAgIGNvbG9yOiAjNDk1MDU3O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2VkNGRhO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcclxuICAgIHRyYW5zaXRpb246IGJvcmRlci1jb2xvciAwLjE1cyBlYXNlLWluLW91dCwgYm94LXNoYWRvdyAwLjE1cyBlYXNlLWluLW91dDtcclxufVxyXG5cclxuLmVycm9yLW1lc3NhZ2Uge1xyXG4gICAgY29sb3I6IHJlZDtcclxuICAgIGZvbnQtc2l6ZTogMC44NzVyZW07XHJcbiAgICBtYXJnaW4tdG9wOiAwLjI1cmVtO1xyXG59XHJcblxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NzVweCkge1xyXG4gICAgaDIge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgfVxyXG5cclxuICAgIGZvcm0uYm9va2luZy1mb3JtIHtcclxuICAgICAgICBtYXgtd2lkdGg6IDM1MHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5mb3JtMSB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogOTVweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiA1MXB4O1xyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 78712:
/*!**********************************************!*\
  !*** ./src/app/contact/contact.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ContactComponent: () => (/* binding */ ContactComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37580);

class ContactComponent {
  static #_ = this.ɵfac = function ContactComponent_Factory(t) {
    return new (t || ContactComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: ContactComponent,
    selectors: [["app-contact"]],
    decls: 2,
    vars: 0,
    template: function ContactComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "contact works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    },
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 60708:
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FooterComponent: () => (/* binding */ FooterComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 51567);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _footerservices_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../footerservices.service */ 55002);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 60316);






function FooterComponent_footer_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "footer", 1)(1, "div", 2)(2, "div", 3)(3, "div", 4)(4, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.Duis sed odio sit amet nibh vulputate cursus a sit");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "ul", 8)(9, "li")(10, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "i", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "li")(13, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "i", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "li")(16, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "li")(19, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "i", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "li")(22, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "i", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 15)(25, "div", 5)(26, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Quick Link");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "ul", 16)(29, "li")(30, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Home");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "li")(33, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "About Us");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "li")(36, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "Services");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "li")(39, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "Gallery");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "li")(42, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "Blog");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "li")(45, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "Contact");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "div", 15)(48, "div", 5)(49, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, "Contact");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "ul", 23)(52, "li", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](53, "i", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "p", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55, "0123-456789");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "li", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](57, "i", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "p", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](59, "info@grannyflat.io");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "li", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](61, "i", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "p", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](63, "Proin gravida nibh vel velit auctor aliquet.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](64, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "div", 3)(66, "div", 29)(67, "div", 30)(68, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](69, "Grannyflat 2024\u00A9 All Rights Reserve");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "div", 31)(71, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](72, "Terms & conditions");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](74, " Privacy Policy");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
  }
}
class FooterComponent {
  constructor(router, footerService) {
    this.router = router;
    this.footerService = footerService;
    this.showFooter = true;
    this.hideRoutes = ['/booking-form', '/form2', "/login", "/signin", "/graph", "/texteditor", '/form2/destination', '/form2/hotel_list', '/form2/hotel_list2', '/form2/hotel_list3', '/form2/hotel_list4', '/form2/hotel_list5', '/form-receipt', '/form2/date', '/form2/rooms', '/form2/peoples', '/form2/payment', '/form2/pdf', "/successful"];
  }
  ngOnInit() {
    // Subscribe to footer visibility changes from the service
    this.footerService.showFooter$.subscribe(show => {
      this.showFooter = show;
    });
    // Subscribe to router events to hide/show footer based on the route
    this.router.events.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.filter)(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__.NavigationEnd)).subscribe(() => {
      const currentRoute = this.router.url;
      if (this.hideRoutes.includes(currentRoute)) {
        this.footerService.hideFooter();
      } else {
        this.footerService.showFooter();
      }
    });
  }
  static #_ = this.ɵfac = function FooterComponent_Factory(t) {
    return new (t || FooterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_footerservices_service__WEBPACK_IMPORTED_MODULE_0__.FooterservicesService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: FooterComponent,
    selectors: [["app-footer"]],
    decls: 1,
    vars: 1,
    consts: [["class", "footer", 4, "ngIf"], [1, "footer"], [1, "container"], [1, "row"], [1, "col-12", "col-lg-6", "col-md-12"], [1, "footer_nav"], ["src", "./assets/images/nav_img.png"], [1, "footer-p"], [1, "list-unstyled"], ["href", "#"], [1, "fa-brands", "fa-facebook-f"], [1, "fa-brands", "fa-twitter"], [1, "fa-brands", "fa-pinterest-p"], [1, "fa-brands", "fa-instagram"], [1, "fa-brands", "fa-linkedin-in"], [1, "col-12", "col-lg-3", "col-md-6"], [1, "list"], ["routerLink", "/"], ["routerLink", "/about"], ["routerLink", "/services"], ["routerLink", "/gallery"], ["routerLink", "/blog"], ["routerLink", "/contact"], [1, "contact1"], [1, "contact_text"], [1, "fa-solid", "fa-phone-volume"], [1, "contact_p"], [1, "fa-solid", "fa-envelope"], [1, "fa-solid", "fa-location-dot"], [1, "copyright"], [1, "copyright_p"], [1, "copyright_list"]],
    template: function FooterComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, FooterComponent_footer_0_Template, 75, 0, "footer", 0);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showFooter);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink],
    styles: ["\n\n\nh1[_ngcontent-%COMP%]{\n    font-size: 90px;\n}\n\nh2[_ngcontent-%COMP%] {\n    font-size: 70px;\n}\nh3[_ngcontent-%COMP%]{\n    font-size: 60px;\n}\nh4[_ngcontent-%COMP%]{\n    font-size: 40px;\n}\nh5[_ngcontent-%COMP%]{\n    font-size: 30px;\n}\nh6[_ngcontent-%COMP%]{\n    font-size: 20px;\n}\np[_ngcontent-%COMP%]{\n    font-size: 24px;\n}\n a[_ngcontent-%COMP%]{\n  font-size: 24px;\n}\n\n.footer[_ngcontent-%COMP%] {\n    \n\n    \n\n    padding-top: 50px;\n    padding-bottom: 20px;\n    max-width: 100%;\n}\n\n.footer[_ngcontent-%COMP%]   .footer-p[_ngcontent-%COMP%] {\n    margin-top: 10px;\n    padding-top: 10px;\n    padding-right: 120px;\n}\n\na[_ngcontent-%COMP%] {\n    text-decoration: none;\n}\n\nh5[_ngcontent-%COMP%] {\n    color: #208678;\n}\n\n.footer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    margin-top: 0;\n    margin-bottom: 10px;\n}\n\n.footer[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n    padding-left: 0;\n    padding-top: 10px;\n    list-style: none;\n}\n\n.footer[_ngcontent-%COMP%]   .fa-brands[_ngcontent-%COMP%] {\n    background-color: #208678;\n    color: white;\n    height: 35px;\n    width: 35px;\n    font-size: 25px;\n    margin-right: 10px;\n    padding-top: 5px;\n    margin-top: 10px;\n    text-align: center;\n}\n\n.footer[_ngcontent-%COMP%]   .list-unstyled[_ngcontent-%COMP%] {\n    display: flex;\n}\n\n.footer[_ngcontent-%COMP%]   .contact1[_ngcontent-%COMP%] {\n    margin-top: 0;\n}\n\n.footer[_ngcontent-%COMP%]   .contact_text[_ngcontent-%COMP%] {\n    display: flex;\n}\n\n.footer[_ngcontent-%COMP%]   .contact_p[_ngcontent-%COMP%] {\n    margin-left: 10px;\n}\n\n.footer[_ngcontent-%COMP%]   .contact_text[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    font-size: 24px;\n    margin-top: 5px;\n}\n.footer_nav[_ngcontent-%COMP%]{\n    justify-content: space-between;\n}\n.footer[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%] {\n    opacity: 2.25;\n}\n.copyright[_ngcontent-%COMP%] {\n    display: flex;\n}\n\n.copyright_list[_ngcontent-%COMP%] {\n    list-style: none;\n    margin-left: auto;\n    display: flex;\n}\n\n.copyright_list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    margin-right: 10px;\n    font-size: 24px;\n}\n\n\n\n@media only screen and (max-width: 1199px){\np[_ngcontent-%COMP%]{\n    font-size: 20px;\n}\n a[_ngcontent-%COMP%]{\n  font-size: 20px;\n}\n.footer[_ngcontent-%COMP%]   .footer-p[_ngcontent-%COMP%] {\n    padding-right: 61px;\n}\n\n.copyright_list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    font-size: 20px;\n}\n}\n\n@media only screen and (max-width: 991px){\n}\n\n@media only screen and (max-width: 575px){\n    .copyright[_ngcontent-%COMP%] {\n        display: block;\n    }   \n    .copyright_list[_ngcontent-%COMP%] {\n        display: block;\n    } \n    .copyright_list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n        margin-bottom: 10px;\n    }\n    .footer[_ngcontent-%COMP%]   .footer-p[_ngcontent-%COMP%] {\n        padding-right: 0;\n    }\n} \n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxXQUFXOztBQUVYO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGVBQWU7QUFDbkI7Q0FDQztFQUNDLGVBQWU7QUFDakI7O0FBRUE7SUFDSSw2QkFBNkI7SUFDN0Isa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixvQkFBb0I7SUFDcEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osWUFBWTtJQUNaLFdBQVc7SUFDWCxlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGVBQWU7QUFDbkI7QUFDQTtJQUNJLDhCQUE4QjtBQUNsQztBQUNBO0lBQ0ksYUFBYTtBQUNqQjtBQUNBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixlQUFlO0FBQ25CO0FBQ0EsVUFBVTs7QUFFVjtBQUNBO0lBQ0ksZUFBZTtBQUNuQjtDQUNDO0VBQ0MsZUFBZTtBQUNqQjtBQUNBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7SUFDSTtRQUNJLGNBQWM7SUFDbEI7SUFDQTtRQUNJLGNBQWM7SUFDbEI7SUFDQTtRQUNJLG1CQUFtQjtJQUN2QjtJQUNBO1FBQ0ksZ0JBQWdCO0lBQ3BCO0FBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLyogZm9vdGVyICovXHJcblxyXG5oMXtcclxuICAgIGZvbnQtc2l6ZTogOTBweDtcclxufVxyXG5cclxuaDIge1xyXG4gICAgZm9udC1zaXplOiA3MHB4O1xyXG59XHJcbmgze1xyXG4gICAgZm9udC1zaXplOiA2MHB4O1xyXG59XHJcbmg0e1xyXG4gICAgZm9udC1zaXplOiA0MHB4O1xyXG59XHJcbmg1e1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG59XHJcbmg2e1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG59XHJcbnB7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbn1cclxuIGF7XHJcbiAgZm9udC1zaXplOiAyNHB4O1xyXG59XHJcblxyXG4uZm9vdGVyIHtcclxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IHdoaXRlOyAqL1xyXG4gICAgLyogY29sb3I6IGJsYWNrOyAqL1xyXG4gICAgcGFkZGluZy10b3A6IDUwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmZvb3RlciAuZm9vdGVyLXAge1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMTIwcHg7XHJcbn1cclxuXHJcbmEge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG5oNSB7XHJcbiAgICBjb2xvcjogIzIwODY3ODtcclxufVxyXG5cclxuLmZvb3RlciBwIHtcclxuICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG4uZm9vdGVyIHVsIHtcclxuICAgIHBhZGRpbmctbGVmdDogMDtcclxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxufVxyXG5cclxuLmZvb3RlciAuZmEtYnJhbmRzIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMDg2Nzg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBoZWlnaHQ6IDM1cHg7XHJcbiAgICB3aWR0aDogMzVweDtcclxuICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgIHBhZGRpbmctdG9wOiA1cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uZm9vdGVyIC5saXN0LXVuc3R5bGVkIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbi5mb290ZXIgLmNvbnRhY3QxIHtcclxuICAgIG1hcmdpbi10b3A6IDA7XHJcbn1cclxuXHJcbi5mb290ZXIgLmNvbnRhY3RfdGV4dCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4uZm9vdGVyIC5jb250YWN0X3Age1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbn1cclxuXHJcbi5mb290ZXIgLmNvbnRhY3RfdGV4dCBpIHtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIG1hcmdpbi10b3A6IDVweDtcclxufVxyXG4uZm9vdGVyX25hdntcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG4uZm9vdGVyIGhyIHtcclxuICAgIG9wYWNpdHk6IDIuMjU7XHJcbn1cclxuLmNvcHlyaWdodCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4uY29weXJpZ2h0X2xpc3Qge1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxufVxyXG5cclxuLmNvcHlyaWdodF9saXN0IGxpIHtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxufVxyXG4vKmZvb3RlciAqL1xyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMTk5cHgpe1xyXG5we1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG59XHJcbiBhe1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG4uZm9vdGVyIC5mb290ZXItcCB7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA2MXB4O1xyXG59XHJcblxyXG4uY29weXJpZ2h0X2xpc3QgbGkge1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG59XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkxcHgpe1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU3NXB4KXtcclxuICAgIC5jb3B5cmlnaHQge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgfSAgIFxyXG4gICAgLmNvcHlyaWdodF9saXN0IHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIH0gXHJcbiAgICAuY29weXJpZ2h0X2xpc3QgbGkge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICB9XHJcbiAgICAuZm9vdGVyIC5mb290ZXItcCB7XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogMDtcclxuICAgIH1cclxufSAiXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 55002:
/*!*******************************************!*\
  !*** ./src/app/footerservices.service.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FooterservicesService: () => (/* binding */ FooterservicesService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 75797);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);


class FooterservicesService {
  constructor() {
    this.showFooterSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(true);
    this.showFooter$ = this.showFooterSubject.asObservable();
  }
  hideFooter() {
    this.showFooterSubject.next(false);
  }
  showFooter() {
    this.showFooterSubject.next(true);
  }
  static #_ = this.ɵfac = function FooterservicesService_Factory(t) {
    return new (t || FooterservicesService)();
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: FooterservicesService,
    factory: FooterservicesService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 86816:
/*!********************************************************!*\
  !*** ./src/app/form-receipt/form-receipt.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FormReceiptComponent: () => (/* binding */ FormReceiptComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 60316);


class FormReceiptComponent {
  constructor() {
    this.booking = {
      hotelAddress: '123 Main St, Anytown, USA',
      hotelPhone: '0123-456789',
      hotelEmail: 'info@grannyflat.io',
      location: 'Shimla',
      bookingRef: 'XYZ123',
      checkInDate: new Date('2024-08-10'),
      checkOutDate: new Date('2024-08-15'),
      roomType: 'Cottage Room',
      pricePerRoom: 2000,
      totalRoom: 2,
      numberOfAdults: 2,
      numberOfChildren: 2,
      breakfast1: '$500',
      wifi1: '$300',
      parking1: 'Not Included',
      breakfast2: '$500',
      wifi2: 'Not Included',
      parking2: 'Not Included',
      firstName: 'John',
      lastName: 'Doe',
      phone: '(123) 456-7890',
      email: 'john.doe@example.com',
      guestName: 'John Doe',
      numberOfGuests: 4,
      totalAmount: 5300,
      paymentMethod: 'Credit Card',
      transactionId: 'ABC123456789',
      dateOfPayment: new Date('2024-08-18'),
      specialRequests: 'Late check-in',
      additionalNotes: 'Enjoy your stay!'
    };
  }
  ngOnInit() {}
  static #_ = this.ɵfac = function FormReceiptComponent_Factory(t) {
    return new (t || FormReceiptComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: FormReceiptComponent,
    selectors: [["app-form-receipt"]],
    decls: 207,
    vars: 36,
    consts: [[1, "receipt"], [1, "container"], [1, "receipt-table"], ["colspan", "2"], ["colspan", "3"]],
    template: function FormReceiptComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Booking Receipt");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "table", 2)(5, "thead")(6, "tr")(7, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Hotel Information");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "tbody")(10, "tr")(11, "td")(12, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Hotel Address:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "tr")(17, "td")(18, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Hotel Phone:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "tr")(23, "td")(24, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Hotel Email:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "thead")(29, "tr")(30, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Person Information");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "tbody")(33, "tr")(34, "td")(35, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "First Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "tr")(40, "td")(41, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Last Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "tr")(46, "td")(47, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Phone No:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "tr")(52, "td")(53, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Email:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "table", 2)(58, "thead")(59, "tr")(60, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Booking Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "tbody")(63, "tr")(64, "td")(65, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Location:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "tr")(70, "td")(71, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Booking Reference Number:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "tr")(76, "td")(77, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "Check-in Date:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](81, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "tr")(83, "td")(84, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "Check-out Date:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](88, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "table", 2)(90, "thead")(91, "tr")(92, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "Room Information");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "tbody")(95, "tr")(96, "td")(97, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "Room Type:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "tr")(102, "td")(103, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "Price per Room:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](107, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "tr")(109, "td")(110, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, "Total Room:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "tr")(115, "td")(116, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, "Number of Adults:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "tr")(121, "td")(122, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, "Number of Children:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "table", 2)(127, "thead")(128, "tr")(129, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](130, "Additional Charges");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "thead")(132, "tr")(133, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](134, "Room 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "tbody")(136, "tr")(137, "td")(138, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](139, "Breakfast:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "td")(141, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](142, "Wifi:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "td")(144, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](145, "Parking:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "tr")(147, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](148);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](150);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](152);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "thead")(154, "tr")(155, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](156, "Room 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "tbody")(158, "tr")(159, "td")(160, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](161, "Breakfast:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "td")(163, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](164, "Wifi:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "td")(166, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](167, "Parking:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "tr")(169, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](170);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](172);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](174);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "table", 2)(176, "thead")(177, "tr")(178, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](179, "Payment Information");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "tbody")(181, "tr")(182, "td")(183, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](184, "Total Amount Charged:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](186);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](187, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](188, "tr")(189, "td")(190, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](191, "Payment Method:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](192, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](193);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](194, "tr")(195, "td")(196, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](197, "Transaction ID:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](198, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](199);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](200, "tr")(201, "td")(202, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](203, "Date of Payment:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](204, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](205);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](206, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.booking.hotelAddress);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.booking.hotelPhone);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.booking.hotelEmail);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.booking.firstName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.booking.lastName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.booking.hotelPhone);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.booking.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.booking.location);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.booking.bookingRef);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](81, 26, ctx.booking.checkInDate));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](88, 28, ctx.booking.checkOutDate));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.booking.roomType);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](107, 30, ctx.booking.pricePerRoom));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.booking.totalRoom);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.booking.numberOfAdults);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.booking.numberOfChildren);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.booking.breakfast1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.booking.wifi1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.booking.parking1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.booking.breakfast2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.booking.wifi2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.booking.parking2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](187, 32, ctx.booking.totalAmount));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.booking.paymentMethod);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.booking.transactionId);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](206, 34, ctx.booking.dateOfPayment));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CurrencyPipe, _angular_common__WEBPACK_IMPORTED_MODULE_1__.DatePipe],
    styles: [".receipt[_ngcontent-%COMP%] {\n    font-family: Arial, sans-serif;\n    margin: 20px;\n}\n\n.container[_ngcontent-%COMP%] {\n    max-width: 800px;\n    margin: 0 auto;\n    border: 1px solid grey;\n    \n}\n\nh2[_ngcontent-%COMP%] {\n    margin-top: 20px;\n    text-align: center;\n    margin-bottom: 20px;\n}\n\n.receipt-table[_ngcontent-%COMP%] {\n    width: 100%;\n    border-collapse: collapse;\n    margin-bottom: 20px;\n}\n\n.receipt-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .receipt-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    border: 1px solid #ddd;\n    padding: 8px;\n}\n\n.receipt-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n    \n\n    text-align: left;\n}\n\n.receipt-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    text-align: left;\n}\n\n.receipt-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n    \n\n    font-weight: bold;\n}\n\n@media only screen and (max-width: 575px){\ntd[_ngcontent-%COMP%] {\n    font-size: 13px;\n}\nstrong[_ngcontent-%COMP%] {\n    font-size: 13px;\n}\nth[_ngcontent-%COMP%] {\n    font-size: 15px;\n}\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZm9ybS1yZWNlaXB0L2Zvcm0tcmVjZWlwdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksOEJBQThCO0lBQzlCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLHNCQUFzQjs7QUFFMUI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCx5QkFBeUI7SUFDekIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSwrQkFBK0I7SUFDL0IsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksK0JBQStCO0lBQy9CLGlCQUFpQjtBQUNyQjs7QUFFQTtBQUNBO0lBQ0ksZUFBZTtBQUNuQjtBQUNBO0lBQ0ksZUFBZTtBQUNuQjtBQUNBO0lBQ0ksZUFBZTtBQUNuQjtBQUNBIiwic291cmNlc0NvbnRlbnQiOlsiLnJlY2VpcHQge1xyXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBzYW5zLXNlcmlmO1xyXG4gICAgbWFyZ2luOiAyMHB4O1xyXG59XHJcblxyXG4uY29udGFpbmVyIHtcclxuICAgIG1heC13aWR0aDogODAwcHg7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyZXk7XHJcbiAgICBcclxufVxyXG5cclxuaDIge1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuXHJcbi5yZWNlaXB0LXRhYmxlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuXHJcbi5yZWNlaXB0LXRhYmxlIHRoLCAucmVjZWlwdC10YWJsZSB0ZCB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xyXG4gICAgcGFkZGluZzogOHB4O1xyXG59XHJcblxyXG4ucmVjZWlwdC10YWJsZSB0aCB7XHJcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyOyAqL1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG5cclxuLnJlY2VpcHQtdGFibGUgdGQge1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG5cclxuLnJlY2VpcHQtdGFibGUgdGhlYWQgdGgge1xyXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjsgKi9cclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU3NXB4KXtcclxudGQge1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG59XHJcbnN0cm9uZyB7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbn1cclxudGgge1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG59XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 84629:
/*!**********************************************!*\
  !*** ./src/app/form2/date/date.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DateComponent: () => (/* binding */ DateComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 34456);




function DateComponent_div_24_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Location selection is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function DateComponent_div_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DateComponent_div_24_div_1_Template, 2, 0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const locationField_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", locationField_r3.errors == null ? null : locationField_r3.errors["required"]);
  }
}
function DateComponent_div_33_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Check-in date is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function DateComponent_div_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DateComponent_div_33_div_1_Template, 2, 0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const checkinDateField_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", checkinDateField_r4.errors == null ? null : checkinDateField_r4.errors["required"]);
  }
}
function DateComponent_div_40_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Check-out date is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function DateComponent_div_40_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DateComponent_div_40_div_1_Template, 2, 0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const checkoutDateField_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", checkoutDateField_r5.errors == null ? null : checkoutDateField_r5.errors["required"]);
  }
}
function DateComponent_div_41_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28)(1, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Check-out date must be after the check-in date and cannot be the same day.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
}
class DateComponent {
  constructor(router) {
    this.router = router;
    this.location = '';
    this.checkinDate = '';
    this.checkoutDate = '';
    this.minCheckinDate = '';
    this.minCheckoutDate = '';
    this.errorMessage = ''; // Property to hold error messages
  }
  ngOnInit() {
    this.updateMinCheckinDate();
  }
  // Method to set the minimum check-in date to today
  updateMinCheckinDate() {
    const today = new Date();
    this.minCheckinDate = today.toISOString().split('T')[0];
    this.checkinDate = this.minCheckinDate;
    this.updateMinCheckoutDate(); // Initialize minCheckoutDate
  }
  // Method to update the minimum date for check-out based on check-in date
  updateMinCheckoutDate() {
    if (this.checkinDate) {
      this.minCheckoutDate = new Date(this.checkinDate).toISOString().split('T')[0];
    }
  }
  // Method to handle form submission
  submitForm(form) {
    if (form.valid && this.validateDateRange()) {
      console.log('Form Submitted:', {
        location: this.location,
        checkinDate: this.checkinDate,
        checkoutDate: this.checkoutDate
      });
      // Determine the route based on the selected location
      const routes = {
        'Amritsar': '/form2/hotel_list',
        'Himachal': '/form2/hotel_list2',
        'Mumbai': '/form2/hotel_list3',
        'Goa': '/form2/hotel_list4',
        'Delhi': '/form2/hotel_list5'
      };
      const route = routes[this.location];
      if (route) {
        this.router.navigate([route]);
      } else {
        console.error('Invalid location selected');
      }
    } else {
      console.log('Form is invalid or date range is incorrect');
    }
  }
  // Method to validate date range
  validateDateRange() {
    if (!this.checkinDate || !this.checkoutDate) {
      this.errorMessage = 'Both check-in and checkout dates must be selected.';
      return false;
    }
    const checkin = new Date(this.checkinDate);
    const checkout = new Date(this.checkoutDate);
    if (checkout <= checkin) {
      this.errorMessage = 'Checkout date must be after the check-in date.';
      return false;
    }
    this.errorMessage = ''; // Clear error message if validation passes
    return true;
  }
  static #_ = this.ɵfac = function DateComponent_Factory(t) {
    return new (t || DateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: DateComponent,
    selectors: [["app-date"]],
    decls: 46,
    vars: 10,
    consts: [["dateForm", "ngForm"], ["locationField", "ngModel"], ["checkinDateField", "ngModel"], ["checkoutDateField", "ngModel"], [1, "date"], [1, "container"], [1, "date_text"], [3, "ngSubmit"], [1, "form-group"], ["for", "location"], ["id", "location", "name", "location", "required", "", 1, "form-control", 3, "ngModelChange", "ngModel"], ["value", ""], ["value", "Amritsar"], ["value", "Himachal"], ["value", "Mumbai"], ["value", "Goa"], ["value", "Delhi"], ["class", "text-danger", 4, "ngIf"], [1, "form-heading"], [1, "row"], [1, "col-md-6"], ["for", "checkinDate"], ["type", "date", "id", "checkinDate", "name", "checkinDate", "required", "", 1, "form-control", 3, "ngModelChange", "change", "ngModel"], ["for", "checkoutDate"], ["type", "date", "id", "checkoutDate", "name", "checkoutDate", "required", "", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "submit"], [1, "right_btn"], ["type", "submit", 1, "btn", "btn-success", 3, "disabled"], [1, "text-danger"], [4, "ngIf"], [1, "validation_same"]],
    template: function DateComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 4)(1, "div", 5)(2, "div", 6)(3, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Select Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", 7, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function DateComponent_Template_form_ngSubmit_5_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
          const dateForm_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);
          return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.submitForm(dateForm_r2));
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 8)(8, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Location:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "select", 10, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayListener"]("ngModelChange", function DateComponent_Template_select_ngModelChange_10_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayBindingSet"](ctx.location, $event) || (ctx.location = $event);
          return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"]($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Select Location");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Amritsar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Himachal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Mumbai");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "option", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Goa");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "option", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Delhi");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, DateComponent_div_24_Template, 2, 1, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 18)(26, "div", 19)(27, "div", 20)(28, "div", 8)(29, "label", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Check-in Date:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "input", 22, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayListener"]("ngModelChange", function DateComponent_Template_input_ngModelChange_31_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayBindingSet"](ctx.checkinDate, $event) || (ctx.checkinDate = $event);
          return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"]($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function DateComponent_Template_input_change_31_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.updateMinCheckoutDate());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, DateComponent_div_33_Template, 2, 1, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 20)(35, "div", 8)(36, "label", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Check-out Date:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "input", 24, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayListener"]("ngModelChange", function DateComponent_Template_input_ngModelChange_38_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayBindingSet"](ctx.checkoutDate, $event) || (ctx.checkoutDate = $event);
          return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"]($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](40, DateComponent_div_40_Template, 2, 1, "div", 17)(41, DateComponent_div_41_Template, 3, 0, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 25)(43, "div", 26)(44, "button", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()();
      }
      if (rf & 2) {
        const dateForm_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);
        const locationField_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](11);
        const checkinDateField_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](32);
        const checkoutDateField_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayProperty"]("ngModel", ctx.location);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", locationField_r3.invalid && (locationField_r3.dirty || locationField_r3.untouched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayProperty"]("ngModel", ctx.checkinDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("min", ctx.minCheckinDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", checkinDateField_r4.invalid && (checkinDateField_r4.dirty || checkinDateField_r4.untouched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayProperty"]("ngModel", ctx.checkoutDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("min", ctx.minCheckoutDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", checkoutDateField_r5.invalid && (checkoutDateField_r5.dirty || checkoutDateField_r5.untouched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (checkoutDateField_r5.touched || dateForm_r2.submitted) && !ctx.validateDateRange());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", dateForm_r2.invalid);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgForm],
    styles: ["label[_ngcontent-%COMP%] {\n  font-size: 24px;\n  color: white;\n}\n\nh1[_ngcontent-%COMP%] {\n  font-size: 90px;\n}\n\nh2[_ngcontent-%COMP%] {\n  font-size: 70px;\n}\n\nh3[_ngcontent-%COMP%] {\n  font-size: 60px;\n}\n\nh4[_ngcontent-%COMP%] {\n  font-size: 40px;\n}\n\nh5[_ngcontent-%COMP%] {\n  font-size: 30px;\n}\n\nh6[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n\np[_ngcontent-%COMP%] {\n  font-size: 24px;\n}\n\na[_ngcontent-%COMP%] {\n  font-size: 24px;\n}\n\n.form-control[_ngcontent-%COMP%] {\n  font-size: 24px;\n}\n.text-danger[_ngcontent-%COMP%] {\n  color: #dc3545;\n  font-size: 24px;\n}\n\n.date[_ngcontent-%COMP%] {\n  padding: 20px;\n  margin-left: auto;\n  margin-right: auto;\n  width: 100%;\n  \n\n}\n\n.form-group[_ngcontent-%COMP%] {\n  margin-bottom: 50px;\n  text-align: left;\n}\n\n\n\n.datepicker-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.datepicker-wrapper[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  padding-right: 40px;\n  \n\n}\n\n.datepicker-wrapper[_ngcontent-%COMP%]   .calendar-btn[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  right: 10px;\n  \n\n  transform: translateY(-50%);\n  z-index: 10;\n  border: none;\n  background: none;\n  cursor: pointer;\n}\n\n.datepicker-wrapper[_ngcontent-%COMP%]   .calendar-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n\n.alert[_ngcontent-%COMP%] {\n  margin-top: 5px;\n}\n\n.submit[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n\n.right_btn[_ngcontent-%COMP%] {\n  margin-left: auto;\n}\n\n.right_btn[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin: 0 5px;\n}\n\n.btn[_ngcontent-%COMP%] {\n  font-size: 24px;\n  padding: 10px 40px;\n}\n\n.validation_same[_ngcontent-%COMP%] {\n  margin-top: 10px;\n}\n\n\n\nbutton.btn.btn-primary[_ngcontent-%COMP%] {\n  background-color: #4b4b4b;\n  border-color: #4b4b4b;\n}\n\nbutton.btn.btn-succes[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  background-color: #208678;\n  color: white;\n}\n\nlabel[_ngcontent-%COMP%] {\n  color: #208678;\n}\n\nh2[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 20px;\n  font-weight: 800;\n  color: #208678;\n}\n\n\n\n.datepicker-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.datepicker-wrapper[_ngcontent-%COMP%]   .calendar[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 10px;\n  \n\n  top: 50%;\n  transform: translateY(-50%);\n  z-index: 10;\n  \n\n}\n\n.datepicker-wrapper[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  padding-right: 40px;\n  \n\n}\n\n.datepicker-wrapper[_ngcontent-%COMP%]   .ngb-dp[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 100%;\n  \n\n  left: 0;\n  z-index: 1000;\n  \n\n}\n\n@media only screen and (min-width: 1441px) {}\n\n@media only screen and (max-width: 1199px) {\n  h1[_ngcontent-%COMP%] {\n    font-size: 57px;\n  }\n\n  h2[_ngcontent-%COMP%] {\n    font-size: 38px;\n  }\n\n  h3[_ngcontent-%COMP%] {\n    font-size: 35px;\n  }\n\n  h4[_ngcontent-%COMP%] {\n    font-size: 25px;\n  }\n\n  h5[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n\n  h6[_ngcontent-%COMP%] {\n    font-size: 18px;\n  }\n\n  p[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n\n  a[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n  .form-control[_ngcontent-%COMP%]{\n    font-size: 20px;\n  }\n  .text-danger[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n\n}\n\n@media only screen and (max-width: 991px) {\n\n  .btn[_ngcontent-%COMP%] {\n    padding: 6px 24px;\n  }\n}\n\n@media only screen and (max-width: 767px) {}\n\n@media only screen and (max-width: 575px) {\n\n  h1[_ngcontent-%COMP%] {\n    font-size: 35px;\n  }\n\n  h2[_ngcontent-%COMP%] {\n    font-size: 32px;\n  }\n\n  p[_ngcontent-%COMP%] {\n    font-size: 18px;\n  }\n  a[_ngcontent-%COMP%]{ \n    font-size: 18px;\n  }\n\n  label[_ngcontent-%COMP%] {\n    font-size: 15px;\n  }\n\n  .form-control[_ngcontent-%COMP%] {\n    font-size: 15px;\n  }\n\n  .btn[_ngcontent-%COMP%] {\n    font-size: 15px;\n    padding: 6px 24px;\n  }\n\n  .validation_same[_ngcontent-%COMP%] {\n    font-size: 12px;\n  }\n\n  .date[_ngcontent-%COMP%] {\n    margin-top: 0px;\n  }\n\n  .form-group[_ngcontent-%COMP%] {\n    margin-bottom: 10px;\n    text-align: left;\n  }\n\n  h2[_ngcontent-%COMP%] {\n    margin-bottom: 10px;\n  }\n  .text-danger[_ngcontent-%COMP%] {\n    color: #dc3545;\n    font-size: 18px;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZm9ybTIvZGF0ZS9kYXRlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQTtFQUNFLGVBQWU7RUFDZixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7QUFDQTtFQUNFLGNBQWM7RUFDZCxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLGlDQUFpQztBQUNuQzs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixnQkFBZ0I7QUFDbEI7Ozs7QUFJQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixrQ0FBa0M7QUFDcEM7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFdBQVc7RUFDWCx3QkFBd0I7RUFDeEIsMkJBQTJCO0VBQzNCLFdBQVc7RUFDWCxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxlQUFlO0VBQ2Ysa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBLDhFQUE4RTtBQUM5RTtFQUNFLHlCQUF5QjtFQUN6QixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIseUJBQXlCO0VBQ3pCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixjQUFjO0FBQ2hCOztBQUVBLHVCQUF1QjtBQUN2QjtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gscUJBQXFCO0VBQ3JCLFFBQVE7RUFDUiwyQkFBMkI7RUFDM0IsV0FBVztFQUNYLDRDQUE0QztBQUM5Qzs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQiwrQ0FBK0M7QUFDakQ7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULG1EQUFtRDtFQUNuRCxPQUFPO0VBQ1AsYUFBYTtFQUNiLHFEQUFxRDtBQUN2RDs7QUFFQSw0Q0FBNEM7O0FBRTVDO0VBQ0U7SUFDRSxlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsZUFBZTtFQUNqQjtFQUNBO0lBQ0UsZUFBZTtFQUNqQjtFQUNBO0lBQ0UsZUFBZTtFQUNqQjs7QUFFRjs7QUFFQTs7RUFFRTtJQUNFLGlCQUFpQjtFQUNuQjtBQUNGOztBQUVBLDJDQUEyQzs7QUFFM0M7O0VBRUU7SUFDRSxlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLGVBQWU7RUFDakI7RUFDQTtJQUNFLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLGVBQWU7SUFDZixpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLG1CQUFtQjtJQUNuQixnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxtQkFBbUI7RUFDckI7RUFDQTtJQUNFLGNBQWM7SUFDZCxlQUFlO0VBQ2pCO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbmxhYmVsIHtcclxuICBmb250LXNpemU6IDI0cHg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG5oMSB7XHJcbiAgZm9udC1zaXplOiA5MHB4O1xyXG59XHJcblxyXG5oMiB7XHJcbiAgZm9udC1zaXplOiA3MHB4O1xyXG59XHJcblxyXG5oMyB7XHJcbiAgZm9udC1zaXplOiA2MHB4O1xyXG59XHJcblxyXG5oNCB7XHJcbiAgZm9udC1zaXplOiA0MHB4O1xyXG59XHJcblxyXG5oNSB7XHJcbiAgZm9udC1zaXplOiAzMHB4O1xyXG59XHJcblxyXG5oNiB7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG59XHJcblxyXG5wIHtcclxuICBmb250LXNpemU6IDI0cHg7XHJcbn1cclxuXHJcbmEge1xyXG4gIGZvbnQtc2l6ZTogMjRweDtcclxufVxyXG5cclxuLmZvcm0tY29udHJvbCB7XHJcbiAgZm9udC1zaXplOiAyNHB4O1xyXG59XHJcbi50ZXh0LWRhbmdlciB7XHJcbiAgY29sb3I6ICNkYzM1NDU7XHJcbiAgZm9udC1zaXplOiAyNHB4O1xyXG59XHJcblxyXG4uZGF0ZSB7XHJcbiAgcGFkZGluZzogMjBweDtcclxuICBtYXJnaW4tbGVmdDogYXV0bztcclxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogIzNhYzFhZTMzOyAqL1xyXG59XHJcblxyXG4uZm9ybS1ncm91cCB7XHJcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcblxyXG5cclxuXHJcbi5kYXRlcGlja2VyLXdyYXBwZXIge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLmRhdGVwaWNrZXItd3JhcHBlciAuZm9ybS1jb250cm9sIHtcclxuICBwYWRkaW5nLXJpZ2h0OiA0MHB4O1xyXG4gIC8qIFNwYWNlIGZvciB0aGUgY2FsZW5kYXIgYnV0dG9uICovXHJcbn1cclxuXHJcbi5kYXRlcGlja2VyLXdyYXBwZXIgLmNhbGVuZGFyLWJ0biB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNTAlO1xyXG4gIHJpZ2h0OiAxMHB4O1xyXG4gIC8qIEFkanVzdCBhcyBuZWNlc3NhcnkgKi9cclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgei1pbmRleDogMTA7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uZGF0ZXBpY2tlci13cmFwcGVyIC5jYWxlbmRhci1idG4gaSB7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG59XHJcblxyXG4uYWxlcnQge1xyXG4gIG1hcmdpbi10b3A6IDVweDtcclxufVxyXG5cclxuLnN1Ym1pdCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuXHJcbi5yaWdodF9idG4ge1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG59XHJcblxyXG4ucmlnaHRfYnRuIGJ1dHRvbiB7XHJcbiAgbWFyZ2luOiAwIDVweDtcclxufVxyXG5cclxuLmJ0biB7XHJcbiAgZm9udC1zaXplOiAyNHB4O1xyXG4gIHBhZGRpbmc6IDEwcHggNDBweDtcclxufVxyXG5cclxuLnZhbGlkYXRpb25fc2FtZSB7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG5cclxuLyogWW91IGNhbiBhZGQgZ2xvYmFsIHN0eWxlcyB0byB0aGlzIGZpbGUsIGFuZCBhbHNvIGltcG9ydCBvdGhlciBzdHlsZSBmaWxlcyAqL1xyXG5idXR0b24uYnRuLmJ0bi1wcmltYXJ5IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGI0YjRiO1xyXG4gIGJvcmRlci1jb2xvcjogIzRiNGI0YjtcclxufVxyXG5cclxuYnV0dG9uLmJ0bi5idG4tc3VjY2VzIHtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMyMDg2Nzg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG5sYWJlbCB7XHJcbiAgY29sb3I6ICMyMDg2Nzg7XHJcbn1cclxuXHJcbmgyIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICBmb250LXdlaWdodDogODAwO1xyXG4gIGNvbG9yOiAjMjA4Njc4O1xyXG59XHJcblxyXG4vKiBkYXRlLmNvbXBvbmVudC5jc3MgKi9cclxuLmRhdGVwaWNrZXItd3JhcHBlciB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4uZGF0ZXBpY2tlci13cmFwcGVyIC5jYWxlbmRhciB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHJpZ2h0OiAxMHB4O1xyXG4gIC8qIEFkanVzdCBhcyBuZWVkZWQgKi9cclxuICB0b3A6IDUwJTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgei1pbmRleDogMTA7XHJcbiAgLyogTWFrZSBzdXJlIGl0J3Mgb24gdG9wIG9mIG90aGVyIGVsZW1lbnRzICovXHJcbn1cclxuXHJcbi5kYXRlcGlja2VyLXdyYXBwZXIgLmZvcm0tY29udHJvbCB7XHJcbiAgcGFkZGluZy1yaWdodDogNDBweDtcclxuICAvKiBBZGp1c3QgcGFkZGluZyB0byBtYWtlIHJvb20gZm9yIHRoZSBidXR0b24gKi9cclxufVxyXG5cclxuLmRhdGVwaWNrZXItd3JhcHBlciAubmdiLWRwIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAxMDAlO1xyXG4gIC8qIEVuc3VyZSB0aGUgZGF0ZSBwaWNrZXIgYXBwZWFycyBiZWxvdyB0aGUgaW5wdXQgKi9cclxuICBsZWZ0OiAwO1xyXG4gIHotaW5kZXg6IDEwMDA7XHJcbiAgLyogTWFrZSBzdXJlIHRoZSBkYXRlIHBpY2tlciBpcyBhYm92ZSBvdGhlciBjb250ZW50ICovXHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTQ0MXB4KSB7fVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMTk5cHgpIHtcclxuICBoMSB7XHJcbiAgICBmb250LXNpemU6IDU3cHg7XHJcbiAgfVxyXG5cclxuICBoMiB7XHJcbiAgICBmb250LXNpemU6IDM4cHg7XHJcbiAgfVxyXG5cclxuICBoMyB7XHJcbiAgICBmb250LXNpemU6IDM1cHg7XHJcbiAgfVxyXG5cclxuICBoNCB7XHJcbiAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgfVxyXG5cclxuICBoNSB7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgfVxyXG5cclxuICBoNiB7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgfVxyXG5cclxuICBwIHtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICB9XHJcblxyXG4gIGEge1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gIH1cclxuICAuZm9ybS1jb250cm9se1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gIH1cclxuICAudGV4dC1kYW5nZXIge1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkxcHgpIHtcclxuXHJcbiAgLmJ0biB7XHJcbiAgICBwYWRkaW5nOiA2cHggMjRweDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHt9XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU3NXB4KSB7XHJcblxyXG4gIGgxIHtcclxuICAgIGZvbnQtc2l6ZTogMzVweDtcclxuICB9XHJcblxyXG4gIGgyIHtcclxuICAgIGZvbnQtc2l6ZTogMzJweDtcclxuICB9XHJcblxyXG4gIHAge1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gIH1cclxuICBheyBcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICB9XHJcblxyXG4gIGxhYmVsIHtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICB9XHJcblxyXG4gIC5mb3JtLWNvbnRyb2wge1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gIH1cclxuXHJcbiAgLmJ0biB7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBwYWRkaW5nOiA2cHggMjRweDtcclxuICB9XHJcblxyXG4gIC52YWxpZGF0aW9uX3NhbWUge1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gIH1cclxuXHJcbiAgLmRhdGUge1xyXG4gICAgbWFyZ2luLXRvcDogMHB4O1xyXG4gIH1cclxuXHJcbiAgLmZvcm0tZ3JvdXAge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgfVxyXG5cclxuICBoMiB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gIH1cclxuICAudGV4dC1kYW5nZXIge1xyXG4gICAgY29sb3I6ICNkYzM1NDU7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 24031:
/*!************************************************************!*\
  !*** ./src/app/form2/destination/destination.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DestinationComponent: () => (/* binding */ DestinationComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var ngx_dropzone__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-dropzone */ 53947);





function DestinationComponent_div_17_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "First name is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function DestinationComponent_div_17_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "First name must be at least 3 characters long.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function DestinationComponent_div_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DestinationComponent_div_17_div_1_Template, 2, 0, "div", 39)(2, DestinationComponent_div_17_div_2_Template, 2, 0, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const firstName_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", firstName_r3.errors == null ? null : firstName_r3.errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", firstName_r3.errors == null ? null : firstName_r3.errors["minlength"]);
  }
}
function DestinationComponent_div_24_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Last name is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function DestinationComponent_div_24_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Last name must be at least 3 characters long.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function DestinationComponent_div_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DestinationComponent_div_24_div_1_Template, 2, 0, "div", 39)(2, DestinationComponent_div_24_div_2_Template, 2, 0, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const lastName_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", lastName_r4.errors == null ? null : lastName_r4.errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", lastName_r4.errors == null ? null : lastName_r4.errors["minlength"]);
  }
}
function DestinationComponent_div_32_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Email is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function DestinationComponent_div_32_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Invalid email format.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function DestinationComponent_div_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DestinationComponent_div_32_div_1_Template, 2, 0, "div", 39)(2, DestinationComponent_div_32_div_2_Template, 2, 0, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const email_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", email_r5.errors == null ? null : email_r5.errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", email_r5.errors == null ? null : email_r5.errors["email"]);
  }
}
function DestinationComponent_div_39_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Phone number is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function DestinationComponent_div_39_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Invalid phone number format (should be 10 digits).");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function DestinationComponent_div_39_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DestinationComponent_div_39_div_1_Template, 2, 0, "div", 39)(2, DestinationComponent_div_39_div_2_Template, 2, 0, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const phone_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", phone_r6.errors == null ? null : phone_r6.errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", phone_r6.errors == null ? null : phone_r6.errors["pattern"]);
  }
}
function DestinationComponent_ngx_dropzone_preview_47_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngx-dropzone-preview", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("removed", function DestinationComponent_ngx_dropzone_preview_47_Template_ngx_dropzone_preview_removed_0_listener() {
      const f_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7).$implicit;
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r8.onRemove(f_r8));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ngx-dropzone-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const f_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("removable", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", f_r8.name, " (", f_r8.type, ")");
  }
}
function DestinationComponent_div_48_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r8.errorMessage);
  }
}
function DestinationComponent_div_52_div_10_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "First name must be at least 2 characters long.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function DestinationComponent_div_52_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DestinationComponent_div_52_div_10_div_1_Template, 2, 0, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const guestFirstName_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", guestFirstName_r12.errors == null ? null : guestFirstName_r12.errors["minlength"]);
  }
}
function DestinationComponent_div_52_div_17_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Last name must be at least 2 characters long.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function DestinationComponent_div_52_div_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DestinationComponent_div_52_div_17_div_1_Template, 2, 0, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const guestLastName_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", guestLastName_r13.errors == null ? null : guestLastName_r13.errors["minlength"]);
  }
}
function DestinationComponent_div_52_div_23_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Invalid email format.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function DestinationComponent_div_52_div_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DestinationComponent_div_52_div_23_div_1_Template, 2, 0, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const guestEmail_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", guestEmail_r14.errors == null ? null : guestEmail_r14.errors["email"]);
  }
}
function DestinationComponent_div_52_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 42)(1, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 13)(4, "div", 14)(5, "div", 15)(6, "label", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "First Name:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 44, 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayListener"]("ngModelChange", function DestinationComponent_div_52_Template_input_ngModelChange_8_listener($event) {
      const guest_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10).$implicit;
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayBindingSet"](guest_r11.firstName, $event) || (guest_r11.firstName = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, DestinationComponent_div_52_div_10_Template, 2, 1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 14)(12, "div", 15)(13, "label", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Last Name:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "input", 44, 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayListener"]("ngModelChange", function DestinationComponent_div_52_Template_input_ngModelChange_15_listener($event) {
      const guest_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10).$implicit;
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayBindingSet"](guest_r11.lastName, $event) || (guest_r11.lastName = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, DestinationComponent_div_52_div_17_Template, 2, 1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 15)(19, "label", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Email:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "input", 45, 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayListener"]("ngModelChange", function DestinationComponent_div_52_Template_input_ngModelChange_21_listener($event) {
      const guest_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10).$implicit;
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayBindingSet"](guest_r11.email, $event) || (guest_r11.email = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, DestinationComponent_div_52_div_23_Template, 2, 1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 46)(25, "button", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DestinationComponent_div_52_Template_button_click_25_listener() {
      const i_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10).index;
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r8.removeGuest(i_r15));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Remove Guest");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const guest_r11 = ctx.$implicit;
    const i_r15 = ctx.index;
    const guestFirstName_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);
    const guestLastName_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](16);
    const guestEmail_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Guest ", i_r15 + 1, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("for", "guestFirstName-", i_r15, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "guestFirstName-", i_r15, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("name", "guestFirstName-", i_r15, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayProperty"]("ngModel", guest_r11.firstName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", guestFirstName_r12.invalid && (guestFirstName_r12.dirty || guestFirstName_r12.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("for", "guestLastName-", i_r15, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "guestLastName-", i_r15, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("name", "guestLastName-", i_r15, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayProperty"]("ngModel", guest_r11.lastName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", guestLastName_r13.invalid && (guestLastName_r13.dirty || guestLastName_r13.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("for", "guestEmail-", i_r15, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "guestEmail-", i_r15, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("name", "guestEmail-", i_r15, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayProperty"]("ngModel", guest_r11.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", guestEmail_r14.invalid && (guestEmail_r14.dirty || guestEmail_r14.touched));
  }
}
class DestinationComponent {
  constructor(router) {
    this.router = router;
    this.formData = {
      mainPerson: {
        firstName: '',
        lastName: '',
        email: '',
        phone: ''
      },
      guests: []
    };
    this.files = [];
    this.errorMessage = null;
    // Maximum file size allowed (2MB in bytes)
    this.MAX_FILE_SIZE = 2 * 1024 * 1024;
  }
  ngOnInit() {}
  // Method to handle form submission
  submitForm(form) {
    if (form.valid && this.isFormValid()) {
      console.log('Form Submitted:', this.formData);
      this.router.navigate(['/form2/payment']);
      // Add navigation or further processing here
    } else {
      console.log('Form is invalid');
    }
  }
  // Method to add a new guest
  addGuest() {
    this.formData.guests.push({
      firstName: '',
      lastName: '',
      email: ''
    });
  }
  removeGuest(index) {
    this.formData.guests.splice(index, 1);
  }
  // Method to handle file selection
  onSelect(event) {
    this.errorMessage = null; // Reset error message
    // Iterate through the selected files
    for (const file of event.addedFiles) {
      if (file.size > this.MAX_FILE_SIZE) {
        this.errorMessage = 'File size exceeds 2MB. Please select a smaller file.';
      } else {
        this.files.push(file); // Add valid file
      }
    }
  }
  onRemove(file) {
    // Remove the file from the list
    this.files = this.files.filter(f => f !== file);
  }
  // Method to check if the form data is valid
  isFormValid() {
    const mainPerson = this.formData.mainPerson;
    const guests = this.formData.guests;
    // Check if main person fields are filled
    const isMainPersonValid = mainPerson.firstName.trim() !== '' && mainPerson.lastName.trim() !== '' && this.isEmailValid(mainPerson.email) && mainPerson.phone?.trim() !== '';
    // Check if all guests fields are filled
    const areGuestsValid = guests.every(guest => guest.firstName.trim() !== '' && guest.lastName.trim() !== '' && this.isEmailValid(guest.email));
    return isMainPersonValid && areGuestsValid;
  }
  // Method to validate email format
  isEmailValid(email) {
    // Simple email regex pattern
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email.trim());
  }
  static #_ = this.ɵfac = function DestinationComponent_Factory(t) {
    return new (t || DestinationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: DestinationComponent,
    selectors: [["app-destination"]],
    decls: 63,
    vars: 12,
    consts: [["bookingForm", "ngForm"], ["firstName", "ngModel"], ["lastName", "ngModel"], ["email", "ngModel"], ["phone", "ngModel"], ["guestFirstName", "ngModel"], ["guestLastName", "ngModel"], ["guestEmail", "ngModel"], [1, "destination"], [1, "container"], [1, "dest_text"], [3, "ngSubmit"], [1, "section-header"], [1, "row"], [1, "col-md-6"], [1, "form-group"], ["for", "firstName"], ["type", "text", "id", "firstName", "name", "firstName", "required", "", "minlength", "3", 1, "form-control", 3, "ngModelChange", "ngModel"], ["class", "text-danger", 4, "ngIf"], ["for", "lastName"], ["type", "text", "id", "lastName", "name", "lastName", "required", "", "minlength", "3", 1, "form-control", 3, "ngModelChange", "ngModel"], ["for", "email"], ["type", "email", "id", "email", "name", "email", "required", "", "email", "", 1, "form-control", 3, "ngModelChange", "ngModel"], ["for", "phone"], ["type", "tel", "id", "phone", "name", "phone", "required", "", "pattern", "[0-9]{10}", 1, "form-control", 3, "ngModelChange", "ngModel"], [3, "change"], [1, "upload"], ["src", "./assets/images/drop.jpeg", "alt", "Drop file here", 1, "upload_img"], [1, "drop_input"], [3, "removable", "removed", 4, "ngFor", "ngForOf"], ["class", "error-message", 4, "ngIf"], ["class", "guest-entry", 4, "ngFor", "ngForOf"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], [1, "submit"], [1, "left_btn"], ["color", "primary", "routerLink", "/form2/rooms", 1, "btn", "btn-primary"], [1, "right_btn"], ["type", "submit", 1, "btn", "btn-success", 3, "disabled"], [1, "text-danger"], [4, "ngIf"], [3, "removed", "removable"], [1, "error-message"], [1, "guest-entry"], [3, "for"], ["type", "text", "minlength", "2", 1, "form-control", 3, "ngModelChange", "id", "name", "ngModel"], ["type", "email", "email", "", 1, "form-control", 3, "ngModelChange", "id", "name", "ngModel"], [1, "d_btn"], ["type", "button", 1, "btn", "btn-danger", 3, "click"]],
    template: function DestinationComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8)(1, "div", 9)(2, "div", 10)(3, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", 11, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function DestinationComponent_Template_form_ngSubmit_5_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
          const bookingForm_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);
          return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.submitForm(bookingForm_r2));
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 12)(8, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Main Person");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 13)(11, "div", 14)(12, "div", 15)(13, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "First Name:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "input", 17, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayListener"]("ngModelChange", function DestinationComponent_Template_input_ngModelChange_15_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayBindingSet"](ctx.formData.mainPerson.firstName, $event) || (ctx.formData.mainPerson.firstName = $event);
          return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"]($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, DestinationComponent_div_17_Template, 3, 2, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 14)(19, "div", 15)(20, "label", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Last Name:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "input", 20, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayListener"]("ngModelChange", function DestinationComponent_Template_input_ngModelChange_22_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayBindingSet"](ctx.formData.mainPerson.lastName, $event) || (ctx.formData.mainPerson.lastName = $event);
          return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"]($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, DestinationComponent_div_24_Template, 3, 2, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 13)(26, "div", 14)(27, "div", 15)(28, "label", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Email:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "input", 22, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayListener"]("ngModelChange", function DestinationComponent_Template_input_ngModelChange_30_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayBindingSet"](ctx.formData.mainPerson.email, $event) || (ctx.formData.mainPerson.email = $event);
          return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"]($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, DestinationComponent_div_32_Template, 3, 2, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 14)(34, "div", 15)(35, "label", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Phone:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "input", 24, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayListener"]("ngModelChange", function DestinationComponent_Template_input_ngModelChange_37_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayBindingSet"](ctx.formData.mainPerson.phone, $event) || (ctx.formData.mainPerson.phone = $event);
          return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"]($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](39, DestinationComponent_div_39_Template, 3, 2, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "ngx-dropzone", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function DestinationComponent_Template_ngx_dropzone_change_40_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.onSelect($event));
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 26)(42, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "img", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div")(45, "p", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Drag and drop file here");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](47, DestinationComponent_ngx_dropzone_preview_47_Template, 3, 3, "ngx-dropzone-preview", 29)(48, DestinationComponent_div_48_Template, 2, 1, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 12)(50, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Guests");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](52, DestinationComponent_div_52_Template, 27, 25, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 15)(54, "button", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DestinationComponent_Template_button_click_54_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.addGuest());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Add Guest");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 33)(57, "div", 34)(58, "button", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Prev");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 36)(61, "button", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()();
      }
      if (rf & 2) {
        const firstName_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](16);
        const lastName_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](23);
        const email_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](31);
        const phone_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayProperty"]("ngModel", ctx.formData.mainPerson.firstName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", firstName_r3.invalid && (firstName_r3.dirty || firstName_r3.untouched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayProperty"]("ngModel", ctx.formData.mainPerson.lastName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", lastName_r4.invalid && (lastName_r4.dirty || lastName_r4.untouched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayProperty"]("ngModel", ctx.formData.mainPerson.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", email_r5.invalid && (email_r5.dirty || email_r5.untouched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayProperty"]("ngModel", ctx.formData.mainPerson.phone);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", phone_r6.invalid && (phone_r6.dirty || phone_r6.untouched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.files);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.errorMessage);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.formData.guests);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.isFormValid());
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.MinLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.PatternValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.EmailValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgForm, ngx_dropzone__WEBPACK_IMPORTED_MODULE_4__.NgxDropzoneComponent, ngx_dropzone__WEBPACK_IMPORTED_MODULE_4__.NgxDropzoneLabelDirective, ngx_dropzone__WEBPACK_IMPORTED_MODULE_4__.NgxDropzonePreviewComponent],
    styles: ["h1[_ngcontent-%COMP%] {\n  font-size: 90px;\n}\n\nh2[_ngcontent-%COMP%] {\n  font-size: 70px;\n}\n\nh3[_ngcontent-%COMP%] {\n  font-size: 60px;\n}\n\nh4[_ngcontent-%COMP%] {\n  font-size: 40px;\n  color: #208678;\n  margin-top: 10px;\n}\n\nh5[_ngcontent-%COMP%] {\n  font-size: 30px;\n}\n\nh6[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n\np[_ngcontent-%COMP%] {\n  font-size: 24px;\n}\n\na[_ngcontent-%COMP%] {\n  font-size: 24px;\n}\n\nlabel[_ngcontent-%COMP%] {\n  font-size: 24px;\n}\n\n.form-control[_ngcontent-%COMP%] {\n  font-size: 24px;\n}\ninput[_ngcontent-%COMP%]{\n  font-size: 24px;\n}\n\n.destination[_ngcontent-%COMP%] {\n  padding: 20px;\n  margin-left: auto;\n  margin-right: auto;\n  width: 100%;\n}\n\n.input[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:hover {\n  color: green;\n}\n\n.guest-entry[_ngcontent-%COMP%] {\n  text-align: left;\n}\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nh2[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 20px;\n  font-weight: 800;\n  color: #208678;\n}\n\nh3[_ngcontent-%COMP%] {\n  color: #208678;\n  text-align: left;\n  margin-top: 10px;\n}\n\nh5[_ngcontent-%COMP%] {\n  color: #208678;\n  text-align: left;\n}\n\nlabel[_ngcontent-%COMP%] {\n  text-align: left;\n  color: #208678;\n}\n\n.btn[_ngcontent-%COMP%] {\n  width: 100%;\n  font-size: 24px;\n  padding: 10px 40px;\n}\n\n\n\n.destination1[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n  \n\n  padding: 30px;\n  \n\n  border-radius: 10px;\n  \n\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\n  \n\n}\n\nbutton.btn.btn-succes[_ngcontent-%COMP%] {\n  padding: 4px 20px;\n  background-color: #208678;\n  color: white;\n\n}\n\nbutton.btn.btn-primary[_ngcontent-%COMP%] {\n  background-color: #4b4b4b;\n  border-color: #4b4b4b;\n  width: 100%;\n}\n\n.submit[_ngcontent-%COMP%] {\n  display: flex;\n  margin-top: 20px;\n}\n\n.right_btn[_ngcontent-%COMP%] {\n  margin-left: auto;\n}\n.text-danger[_ngcontent-%COMP%] {\n  color: #dc3545;\n  font-size: 24px;\n}\n\n\n\n.form_control[_ngcontent-%COMP%] {\n  font-weight: bold;\n  color: #208678;\n  \n\n}\n\n\n\n.form_input[_ngcontent-%COMP%] {\n  width: 100%;\n  \n\n  padding: 10px;\n  \n\n  margin-top: 8px;\n  \n\n  margin-bottom: 15px;\n  \n\n  border: 1px solid #ccc;\n  \n\n  border-radius: 4px;\n  box-sizing: border-box;\n}\n\n\n\n\n.form-group[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n  text-align: left;\n}\n\n.text-danger[_ngcontent-%COMP%] {\n  color: red;\n  font-size: 24px;\n  margin-top: 5px;\n}\n\n\n\n.upload[_ngcontent-%COMP%] {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.upload_img[_ngcontent-%COMP%] {\n  height: 130px;\n}\n.d_btn[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-bottom: 25px;\n}\n\n.drop_input[_ngcontent-%COMP%] {\n  text-align: center;\n  width: 100%;\n  font-size: 24px;\n  color: #666;\n}\n\nngx-dropzone[_ngcontent-%COMP%] {\n  height: 200px;\n}\n\nngx-dropzone-label[_ngcontent-%COMP%] {\n  overflow: auto;\n}\n\n.error-message[_ngcontent-%COMP%] {\n  color: red;\n  font-size: 24px;\n  margin-top: 10px;\n}\n\n\n@media only screen and (max-width: 1199px) {\n\n  h1[_ngcontent-%COMP%] {\n    font-size: 57px;\n  }\n\n  h2[_ngcontent-%COMP%] {\n    font-size: 38px;\n  }\n\n  h3[_ngcontent-%COMP%] {\n    font-size: 35px;\n  }\n\n  h4[_ngcontent-%COMP%] {\n    font-size: 25px;\n  }\n\n  h5[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n\n  h6[_ngcontent-%COMP%] {\n    font-size: 18px;\n  }\n\n  p[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n\n  a[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n  .text-danger[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n}\n\n@media only screen and (max-width: 991px) {}\n\n@media only screen and (max-width: 575px) {\n\n  h1[_ngcontent-%COMP%] {\n    font-size: 35px;\n  }\n\n  h2[_ngcontent-%COMP%] {\n    font-size: 32px;\n  }\n\n  p[_ngcontent-%COMP%] {\n    font-size: 18px;\n  }\n\n  a[_ngcontent-%COMP%] {\n    font-size: 18px;\n  }\n  input[_ngcontent-%COMP%]{\n    font-size: 18px;\n  }\n\n  label[_ngcontent-%COMP%] {\n    font-size: 15px;\n  }\n\n  .form-control[_ngcontent-%COMP%] {\n    font-size: 15px;\n  }\n  .text-danger[_ngcontent-%COMP%] {\n    font-size: 18px;\n  }\n\n  .btn[_ngcontent-%COMP%] {\n    font-size: 15px;\n    padding: 6px 24px;\n  }\n\n  h2[_ngcontent-%COMP%] {\n    margin-bottom: 10px;\n    margin-top: 0;\n  }\n  .form-control[_ngcontent-%COMP%] {\n    font-size: 12px;\n  }\n\n  select[_ngcontent-%COMP%], \n   input[type=\"text\"][_ngcontent-%COMP%] {\n    font-size: 12px;\n  }\n\n  .btn[_ngcontent-%COMP%] {\n    font-size: 15px;\n    padding: 6px 24px;\n  }\n\n  h3[_ngcontent-%COMP%] {\n    font-size: 18px;\n  }\n\n  h5[_ngcontent-%COMP%] {\n    font-size: 17px;\n  }\n\n  .destination[_ngcontent-%COMP%] {\n    margin-top: 0px;\n  }\n\n  .form-group[_ngcontent-%COMP%] {\n    margin-bottom: 10px;\n  }\n\n  .drop_input[_ngcontent-%COMP%] {\n    font-size: 15px;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZm9ybTIvZGVzdGluYXRpb24vZGVzdGluYXRpb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixjQUFjO0VBQ2QsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsV0FBVztBQUNiOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBLDhFQUE4RTs7QUFFOUU7Ozs7Ozs7Ozs7R0FVRzs7QUFFSDtFQUNFLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxlQUFlO0VBQ2Ysa0JBQWtCO0FBQ3BCOztBQUVBLG1DQUFtQztBQUNuQztFQUNFLHlCQUF5QjtFQUN6QixxQkFBcUI7RUFDckIsYUFBYTtFQUNiLHNDQUFzQztFQUN0QyxtQkFBbUI7RUFDbkIsb0JBQW9CO0VBQ3BCLHVDQUF1QztFQUN2QyxrQ0FBa0M7QUFDcEM7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIseUJBQXlCO0VBQ3pCLFlBQVk7O0FBRWQ7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIscUJBQXFCO0VBQ3JCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGFBQWE7RUFDYixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLGNBQWM7RUFDZCxlQUFlO0FBQ2pCOztBQUVBLDRCQUE0QjtBQUM1QjtFQUNFLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2QseUJBQXlCO0FBQzNCOztBQUVBLHVDQUF1QztBQUN2QztFQUNFLFdBQVc7RUFDWCxlQUFlO0VBQ2YsYUFBYTtFQUNiLDBCQUEwQjtFQUMxQixlQUFlO0VBQ2YsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsc0JBQXNCO0FBQ3hCOztBQUVBLDhCQUE4Qjs7QUFFOUI7RUFDRSxtQkFBbUI7RUFDbkIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGVBQWU7RUFDZixlQUFlO0FBQ2pCOztBQUVBLCtCQUErQjtBQUMvQjtFQUNFLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtBQUNmO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxlQUFlO0VBQ2YsV0FBVztBQUNiOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFVBQVU7RUFDVixlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCOzs7QUFHQTs7RUFFRTtJQUNFLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxlQUFlO0VBQ2pCO0VBQ0E7SUFDRSxlQUFlO0VBQ2pCO0FBQ0Y7O0FBRUEsMkNBQTJDOztBQUUzQzs7RUFFRTtJQUNFLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLGVBQWU7RUFDakI7RUFDQTtJQUNFLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsZUFBZTtFQUNqQjtFQUNBO0lBQ0UsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLGVBQWU7SUFDZixpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxtQkFBbUI7SUFDbkIsYUFBYTtFQUNmO0VBQ0E7SUFDRSxlQUFlO0VBQ2pCOztFQUVBOztJQUVFLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxlQUFlO0lBQ2YsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0UsZUFBZTtFQUNqQjtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaDEge1xyXG4gIGZvbnQtc2l6ZTogOTBweDtcclxufVxyXG5cclxuaDIge1xyXG4gIGZvbnQtc2l6ZTogNzBweDtcclxufVxyXG5cclxuaDMge1xyXG4gIGZvbnQtc2l6ZTogNjBweDtcclxufVxyXG5cclxuaDQge1xyXG4gIGZvbnQtc2l6ZTogNDBweDtcclxuICBjb2xvcjogIzIwODY3ODtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcblxyXG5oNSB7XHJcbiAgZm9udC1zaXplOiAzMHB4O1xyXG59XHJcblxyXG5oNiB7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG59XHJcblxyXG5wIHtcclxuICBmb250LXNpemU6IDI0cHg7XHJcbn1cclxuXHJcbmEge1xyXG4gIGZvbnQtc2l6ZTogMjRweDtcclxufVxyXG5cclxubGFiZWwge1xyXG4gIGZvbnQtc2l6ZTogMjRweDtcclxufVxyXG5cclxuLmZvcm0tY29udHJvbCB7XHJcbiAgZm9udC1zaXplOiAyNHB4O1xyXG59XHJcbmlucHV0e1xyXG4gIGZvbnQtc2l6ZTogMjRweDtcclxufVxyXG5cclxuLmRlc3RpbmF0aW9uIHtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gIG1hcmdpbi1yaWdodDogYXV0bztcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmlucHV0IDpob3ZlciB7XHJcbiAgY29sb3I6IGdyZWVuO1xyXG59XHJcblxyXG4uZ3Vlc3QtZW50cnkge1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuXHJcbi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cclxuXHJcbi8qIC5kZXN0X3RleHQ6OmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41KTsgLyogRGFyayBvdmVybGF5IHdpdGggb3BhY2l0eSBcclxuICAgIGZpbHRlcjogYmx1cig4cHgpOyAvKiBBZGp1c3QgYmx1ciBzdHJlbmd0aCBhcyBuZWVkZWQgXHJcbiAgICB6LWluZGV4OiAtMTsgLyogUGxhY2Ugb3ZlcmxheSBiZWhpbmQgdGhlIGNvbnRlbnQgXHJcbn0gKi9cclxuXHJcbmgyIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICBmb250LXdlaWdodDogODAwO1xyXG4gIGNvbG9yOiAjMjA4Njc4O1xyXG59XHJcblxyXG5oMyB7XHJcbiAgY29sb3I6ICMyMDg2Nzg7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcblxyXG5oNSB7XHJcbiAgY29sb3I6ICMyMDg2Nzg7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG5cclxubGFiZWwge1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgY29sb3I6ICMyMDg2Nzg7XHJcbn1cclxuXHJcbi5idG4ge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGZvbnQtc2l6ZTogMjRweDtcclxuICBwYWRkaW5nOiAxMHB4IDQwcHg7XHJcbn1cclxuXHJcbi8qIFN0eWxpbmcgZm9yIHRoZSBmb3JtIGNvbnRhaW5lciAqL1xyXG4uZGVzdGluYXRpb24xIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG4gIC8qIFdoaXRlIGJhY2tncm91bmQgKi9cclxuICBwYWRkaW5nOiAzMHB4O1xyXG4gIC8qIFBhZGRpbmcgaW5zaWRlIHRoZSBmb3JtIGNvbnRhaW5lciAqL1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgLyogUm91bmRlZCBjb3JuZXJzICovXHJcbiAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gIC8qIFNoYWRvdyBmb3IgYSBzbGlnaHQgZWxldmF0aW9uICovXHJcbn1cclxuXHJcbmJ1dHRvbi5idG4uYnRuLXN1Y2NlcyB7XHJcbiAgcGFkZGluZzogNHB4IDIwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIwODY3ODtcclxuICBjb2xvcjogd2hpdGU7XHJcblxyXG59XHJcblxyXG5idXR0b24uYnRuLmJ0bi1wcmltYXJ5IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGI0YjRiO1xyXG4gIGJvcmRlci1jb2xvcjogIzRiNGI0YjtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLnN1Ym1pdCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG59XHJcblxyXG4ucmlnaHRfYnRuIHtcclxuICBtYXJnaW4tbGVmdDogYXV0bztcclxufVxyXG4udGV4dC1kYW5nZXIge1xyXG4gIGNvbG9yOiAjZGMzNTQ1O1xyXG4gIGZvbnQtc2l6ZTogMjRweDtcclxufVxyXG5cclxuLyogU3R5bGluZyBmb3IgZm9ybSBsYWJlbHMgKi9cclxuLmZvcm1fY29udHJvbCB7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgY29sb3I6ICMyMDg2Nzg7XHJcbiAgLyogQm9sZCBmb250IGZvciBsYWJlbHMgKi9cclxufVxyXG5cclxuLyogU3R5bGluZyBmb3IgZm9ybSBpbnB1dHMgYW5kIHNlbGVjdCAqL1xyXG4uZm9ybV9pbnB1dCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgLyogRnVsbCB3aWR0aCAqL1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgLyogUGFkZGluZyBpbnNpZGUgaW5wdXRzICovXHJcbiAgbWFyZ2luLXRvcDogOHB4O1xyXG4gIC8qIFRvcCBtYXJnaW4gKi9cclxuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gIC8qIEJvdHRvbSBtYXJnaW4gKi9cclxuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG4gIC8qIExpZ2h0IGdyYXkgYm9yZGVyICovXHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuXHJcbi8qIFN0eWxpbmcgZm9yIHN1Ym1pdCBidXR0b24gKi9cclxuXHJcbi5mb3JtLWdyb3VwIHtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuXHJcbi50ZXh0LWRhbmdlciB7XHJcbiAgY29sb3I6IHJlZDtcclxuICBmb250LXNpemU6IDI0cHg7XHJcbiAgbWFyZ2luLXRvcDogNXB4O1xyXG59XHJcblxyXG4vKiBDb250YWluZXIgZm9yIHRoZSBkcm9wem9uZSAqL1xyXG4udXBsb2FkIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBtYXJnaW4tbGVmdDogYXV0bztcclxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbn1cclxuXHJcbi51cGxvYWRfaW1nIHtcclxuICBoZWlnaHQ6IDEzMHB4O1xyXG59XHJcbi5kX2J0biB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcclxufVxyXG5cclxuLmRyb3BfaW5wdXQge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB3aWR0aDogMTAwJTtcclxuICBmb250LXNpemU6IDI0cHg7XHJcbiAgY29sb3I6ICM2NjY7XHJcbn1cclxuXHJcbm5neC1kcm9wem9uZSB7XHJcbiAgaGVpZ2h0OiAyMDBweDtcclxufVxyXG5cclxubmd4LWRyb3B6b25lLWxhYmVsIHtcclxuICBvdmVyZmxvdzogYXV0bztcclxufVxyXG5cclxuLmVycm9yLW1lc3NhZ2Uge1xyXG4gIGNvbG9yOiByZWQ7XHJcbiAgZm9udC1zaXplOiAyNHB4O1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbn1cclxuXHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDExOTlweCkge1xyXG5cclxuICBoMSB7XHJcbiAgICBmb250LXNpemU6IDU3cHg7XHJcbiAgfVxyXG5cclxuICBoMiB7XHJcbiAgICBmb250LXNpemU6IDM4cHg7XHJcbiAgfVxyXG5cclxuICBoMyB7XHJcbiAgICBmb250LXNpemU6IDM1cHg7XHJcbiAgfVxyXG5cclxuICBoNCB7XHJcbiAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgfVxyXG5cclxuICBoNSB7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgfVxyXG5cclxuICBoNiB7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgfVxyXG5cclxuICBwIHtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICB9XHJcblxyXG4gIGEge1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gIH1cclxuICAudGV4dC1kYW5nZXIge1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTFweCkge31cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTc1cHgpIHtcclxuXHJcbiAgaDEge1xyXG4gICAgZm9udC1zaXplOiAzNXB4O1xyXG4gIH1cclxuXHJcbiAgaDIge1xyXG4gICAgZm9udC1zaXplOiAzMnB4O1xyXG4gIH1cclxuXHJcbiAgcCB7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgfVxyXG5cclxuICBhIHtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICB9XHJcbiAgaW5wdXR7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgfVxyXG5cclxuICBsYWJlbCB7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgfVxyXG5cclxuICAuZm9ybS1jb250cm9sIHtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICB9XHJcbiAgLnRleHQtZGFuZ2VyIHtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICB9XHJcblxyXG4gIC5idG4ge1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgcGFkZGluZzogNnB4IDI0cHg7XHJcbiAgfVxyXG5cclxuICBoMiB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMDtcclxuICB9XHJcbiAgLmZvcm0tY29udHJvbCB7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgfVxyXG5cclxuICBzZWxlY3QsXHJcbiAgaW5wdXRbdHlwZT1cInRleHRcIl0ge1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gIH1cclxuXHJcbiAgLmJ0biB7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBwYWRkaW5nOiA2cHggMjRweDtcclxuICB9XHJcblxyXG4gIGgzIHtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICB9XHJcblxyXG4gIGg1IHtcclxuICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICB9XHJcblxyXG4gIC5kZXN0aW5hdGlvbiB7XHJcbiAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgfVxyXG5cclxuICAuZm9ybS1ncm91cCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gIH1cclxuXHJcbiAgLmRyb3BfaW5wdXQge1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gIH1cclxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 80652:
/*!******************************************!*\
  !*** ./src/app/form2/form2.component.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Form2Component: () => (/* binding */ Form2Component)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 95072);



const _c0 = () => ["/form2/date"];
const _c1 = () => ({
  exact: true
});
const _c2 = () => ["/form2/hotel_list"];
const _c3 = () => ["/form2/rooms"];
const _c4 = () => ["/form2/destination"];
const _c5 = () => ["/form2/payment"];
class Form2Component {
  constructor(fb, router, route) {
    this.fb = fb;
    this.router = router;
    this.route = route;
    this.formStep = 1; // Default to the first step
    this.totalSteps = 5; // Total number of steps in your form
    // Initialize forms for each step
    this.form = this.fb.group({
      step1: this.fb.group({
        checkinDate: [''],
        checkoutDate: ['']
      }),
      step2: this.fb.group({
        hotelName: [''],
        hotelLocation: ['']
      }),
      step3: this.fb.group({
        roomType: [''],
        numberOfRooms: [1]
      }),
      step4: this.fb.group({
        destination: ['']
      }),
      step5: this.fb.group({
        paymentMethod: [''],
        cardDetails: ['']
      })
    });
  }
  ngOnInit() {
    this.route.firstChild?.params.subscribe(params => {
      const step = params['step'];
      if (step) {
        this.formStep = this.getStepNumber(step);
      }
    });
  }
  getCurrentForm() {
    switch (this.formStep) {
      case 1:
        return this.form.get('step1');
      case 2:
        return this.form.get('step2');
      case 3:
        return this.form.get('step3');
      case 4:
        return this.form.get('step4');
      case 5:
        return this.form.get('step5');
      default:
        return this.form.get('step1');
    }
  }
  nextStep() {
    if (this.formStep < this.totalSteps) {
      this.formStep++;
      this.router.navigate([`/form2/${this.getStepPath(this.formStep)}`]);
    }
  }
  prevStep() {
    if (this.formStep > 1) {
      this.formStep--;
      this.router.navigate([`/form2/${this.getStepPath(this.formStep)}`]);
    }
  }
  getStepPath(step) {
    switch (step) {
      case 1:
        return 'date';
      case 2:
        return 'hotel_list';
      case 3:
        return 'rooms';
      case 4:
        return 'destination';
      case 5:
        return 'payment';
      default:
        return 'date';
    }
  }
  getStepNumber(path) {
    switch (path) {
      case 'date':
        return 1;
      case 'hotel_list':
        return 2;
      case 'rooms':
        return 3;
      case 'destination':
        return 4;
      case 'payment':
        return 5;
      default:
        return 1;
    }
  }
  getProgress() {
    return `${this.formStep / this.totalSteps * 100}%`;
  }
  submit() {
    if (this.form.valid) {
      console.log('Form submitted successfully:', this.form.value);
      // Add form submission logic here
    } else {
      console.error('Form is invalid');
    }
  }
  static #_ = this.ɵfac = function Form2Component_Factory(t) {
    return new (t || Form2Component)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.ActivatedRoute));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: Form2Component,
    selectors: [["app-form2"]],
    decls: 19,
    vars: 20,
    consts: [[1, "form"], [1, "container"], [1, "form-layout"], [1, "steps-column"], [1, "steps"], ["routerLinkActive", "active", 3, "routerLink", "routerLinkActiveOptions"], [1, "form-column"], [1, "progress-bar"], [1, "form2-container"]],
    template: function Form2Component_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](10, _c0))("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](11, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](12, _c2))("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](13, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](14, _c3))("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](15, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](16, _c4))("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](17, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](18, _c5))("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](19, _c1));
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterOutlet, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLinkActive],
    styles: ["General[_ngcontent-%COMP%]   styling[_ngcontent-%COMP%]   for[_ngcontent-%COMP%]   progress[_ngcontent-%COMP%]   bar[_ngcontent-%COMP%]   and[_ngcontent-%COMP%]   steps[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%] {\n  background: url('/../assets/images/bg4-img.webp') no-repeat;\n  background-size: cover;\n}\n\n\n\n\n\n\n\n.form-layout[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n  max-width: 950px;\n  margin-left: auto;\n  margin-right: auto;\n  \n\n  padding-top: 50px;\n}\n\n.steps-column[_ngcontent-%COMP%] {\n  width: 20%;\n  \n\n  border-top-left-radius: 10px;\n  border-bottom-left-radius: 10px;\n\n  background-color: #208678;\n}\n\n.steps[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  \n\n  padding-top: 40px;\n}\n\n.steps[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: block;\n  width: 30px;\n  height: 30px;\n  line-height: 30px;\n  text-align: center;\n  border-radius: 50%;\n  background-color: #e0e0e0;\n  color: #000;\n  text-decoration: none;\n  font-weight: bold;\n  margin-bottom: 50px;\n  \n\n}\n\n.steps[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%] {\n  background-color: #1a4e47;\n  \n\n  color: #fff;\n  \n\n}\n\n.form-column[_ngcontent-%COMP%] {\n  width: 80%;\n  \n\n  \n\n  border-top-right-radius: 10px;\n  border-bottom-right-radius: 10px;\n}\n\n.progress-bar[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n@media only screen and (max-width: 575px) {\n  .steps-column[_ngcontent-%COMP%] {\n    width: 100%;\n    padding-right: 0;\n    border-top-left-radius: 10px;\n    border-bottom-left-radius: 0px;\n    border-top-right-radius: 10px;\n    border-bottom-right-radius: 0px;\n  }\n\n  .form-column[_ngcontent-%COMP%] {\n    width: 100%;\n    \n\n    border-top-right-radius: 0px;\n    border-bottom-right-radius: 10px;\n    border-top-left-radius: 0px;\n    border-bottom-left-radius: 10px;\n  }\n\n  .steps[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    padding-top: 0;\n  }\n\n  .form-layout[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    width: 100%;\n    max-width: none;\n    margin-left: auto;\n    margin-right: auto;\n    margin-top: 0;\n    padding-top: 20px;\n  }\n\n  .steps[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    margin-bottom: 20px;\n    margin-left: auto;\n    margin-right: auto;\n    margin-top: 20px;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZm9ybTIvZm9ybTIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDJEQUEyRDtFQUMzRCxzQkFBc0I7QUFDeEI7O0FBRUE7OztLQUdLOztBQUVMO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsNEJBQTRCO0VBQzVCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFVBQVU7RUFDVixxQkFBcUI7RUFDckIsNEJBQTRCO0VBQzVCLCtCQUErQjs7RUFFL0IseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsNEJBQTRCO0VBQzVCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxXQUFXO0VBQ1gsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixXQUFXO0VBQ1gscUJBQXFCO0VBQ3JCLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLHlDQUF5QztFQUN6QyxXQUFXO0VBQ1gsbUNBQW1DO0FBQ3JDOztBQUVBO0VBQ0UsVUFBVTtFQUNWLHFCQUFxQjtFQUNyQiw2QkFBNkI7RUFDN0IsNkJBQTZCO0VBQzdCLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFO0lBQ0UsV0FBVztJQUNYLGdCQUFnQjtJQUNoQiw0QkFBNEI7SUFDNUIsOEJBQThCO0lBQzlCLDZCQUE2QjtJQUM3QiwrQkFBK0I7RUFDakM7O0VBRUE7SUFDRSxXQUFXO0lBQ1gsNkJBQTZCO0lBQzdCLDRCQUE0QjtJQUM1QixnQ0FBZ0M7SUFDaEMsMkJBQTJCO0lBQzNCLCtCQUErQjtFQUNqQzs7RUFFQTtJQUNFLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLGNBQWM7RUFDaEI7O0VBRUE7SUFDRSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFdBQVc7SUFDWCxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0VBQ2xCO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJHZW5lcmFsIHN0eWxpbmcgZm9yIHByb2dyZXNzIGJhciBhbmQgc3RlcHMgLmZvcm0ge1xyXG4gIGJhY2tncm91bmQ6IHVybCgnLy4uL2Fzc2V0cy9pbWFnZXMvYmc0LWltZy53ZWJwJykgbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbn1cclxuXHJcbi8qIC5jb250YWluZXIge1xyXG4gICAgbWF4LXdpZHRoOiAxMjAwcHg7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICB9ICovXHJcblxyXG4uZm9ybS1sYXlvdXQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXgtd2lkdGg6IDk1MHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAvKiBib3JkZXI6IDFweCBzb2xpZCBncmV5OyAqL1xyXG4gIHBhZGRpbmctdG9wOiA1MHB4O1xyXG59XHJcblxyXG4uc3RlcHMtY29sdW1uIHtcclxuICB3aWR0aDogMjAlO1xyXG4gIC8qIEFkanVzdCBhcyBuZWVkZWQgKi9cclxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMHB4O1xyXG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDEwcHg7XHJcblxyXG4gIGJhY2tncm91bmQtY29sb3I6ICMyMDg2Nzg7XHJcbn1cclxuXHJcbi5zdGVwcyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgLyogQWxpZ24gc3RlcHMgdG8gdGhlIGxlZnQgKi9cclxuICBwYWRkaW5nLXRvcDogNDBweDtcclxufVxyXG5cclxuLnN0ZXBzIGEge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHdpZHRoOiAzMHB4O1xyXG4gIGhlaWdodDogMzBweDtcclxuICBsaW5lLWhlaWdodDogMzBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlMGUwZTA7XHJcbiAgY29sb3I6ICMwMDA7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XHJcbiAgLyogU3BhY2UgYmV0d2VlbiBzdGVwcyAqL1xyXG59XHJcblxyXG4uc3RlcHMgYS5hY3RpdmUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMxYTRlNDc7XHJcbiAgLyogQmFja2dyb3VuZCBjb2xvciBmb3IgdGhlIGFjdGl2ZSBzdGVwICovXHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgLyogVGV4dCBjb2xvciBmb3IgdGhlIGFjdGl2ZSBzdGVwICovXHJcbn1cclxuXHJcbi5mb3JtLWNvbHVtbiB7XHJcbiAgd2lkdGg6IDgwJTtcclxuICAvKiBBZGp1c3QgYXMgbmVlZGVkICovXHJcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7ICovXHJcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEwcHg7XHJcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDEwcHg7XHJcbn1cclxuXHJcbi5wcm9ncmVzcy1iYXIge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU3NXB4KSB7XHJcbiAgLnN0ZXBzLWNvbHVtbiB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDA7XHJcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMHB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMHB4O1xyXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEwcHg7XHJcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMHB4O1xyXG4gIH1cclxuXHJcbiAgLmZvcm0tY29sdW1uIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7ICovXHJcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMHB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDEwcHg7XHJcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwcHg7XHJcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxMHB4O1xyXG4gIH1cclxuXHJcbiAgLnN0ZXBzIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBhZGRpbmctdG9wOiAwO1xyXG4gIH1cclxuXHJcbiAgLmZvcm0tbGF5b3V0IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXgtd2lkdGg6IG5vbmU7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcclxuICB9XHJcblxyXG4gIC5zdGVwcyBhIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 14459:
/*!************************************************************!*\
  !*** ./src/app/form2/hotel-list2/hotel-list2.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HotelList2Component: () => (/* binding */ HotelList2Component)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ 93840);




function HotelList2Component_li_6_mat_icon_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function HotelList2Component_li_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 8)(1, "div", 9)(2, "div", 10)(3, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 11)(10, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Rating:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, HotelList2Component_li_6_mat_icon_12_Template, 2, 0, "mat-icon", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 13)(14, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Book Now");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const hotel_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](hotel_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("location: ", hotel_r1.location, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("price: \u20B9", hotel_r1.price, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", hotel_r1.ratingStars);
  }
}
class HotelList2Component {
  constructor() {
    // Initialize hotels array with dummy data (replace with actual data loading logic)
    this.hotels = [{
      name: 'Hotel 1',
      location: 'Himachal',
      rating: 4,
      price: 2000
    }, {
      name: 'Hotel 2',
      location: 'Himachal',
      rating: 2,
      price: 1500
    }
    // Add more hotels as needed
    ];
    // Enhance each hotel object with a 'ratingStars' property
    this.hotels.forEach(hotel => {
      hotel.ratingStars = Array(hotel.rating).fill('star'); // Creates an array of 'star' strings based on rating
    });
  }
  static #_ = this.ɵfac = function HotelList2Component_Factory(t) {
    return new (t || HotelList2Component)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: HotelList2Component,
    selectors: [["app-hotel-list2"]],
    decls: 11,
    vars: 1,
    consts: [[1, "list"], [1, "container"], [1, "list_text"], [1, "hotel-list"], ["class", "hotel-item", 4, "ngFor", "ngForOf"], [1, "submit"], [1, "left_btn"], ["color", "primary", "routerLink", "/form2/date", 1, "btn", "btn-primary"], [1, "hotel-item"], [1, "hotel-sec"], [1, "hotel-info"], [1, "rating"], ["color", "primary", 4, "ngFor", "ngForOf"], [1, "booking-btn"], ["color", "primary", "routerLink", "/form2/rooms", 1, "btn", "btn-succes"], ["color", "primary"], [1, "fa-solid", "fa-star"]],
    template: function HotelList2Component_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Hotel List");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, HotelList2Component_li_6_Template, 16, 4, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5)(8, "div", 6)(9, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Prev");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.hotels);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink, _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__.MatIcon],
    styles: ["h1[_ngcontent-%COMP%]{\n  font-size: 90px;\n}\n\nh2[_ngcontent-%COMP%] {\n  font-size: 70px;\n}\nh3[_ngcontent-%COMP%]{\n  font-size: 60px;\n}\nh4[_ngcontent-%COMP%]{\n  font-size: 40px;\n}\nh5[_ngcontent-%COMP%]{\n  font-size: 30px;\n}\nh6[_ngcontent-%COMP%]{\n  font-size: 20px;\n}\np[_ngcontent-%COMP%]{\n  font-size: 24px;\n}\na[_ngcontent-%COMP%]{\nfont-size: 24px;\n}\n\n.form-control[_ngcontent-%COMP%] {\n  font-size: 24px;\n} \n.list[_ngcontent-%COMP%] {\n  padding: 20px;\n  margin-left: auto;\n  margin-right: auto;\n  width: 100%;\n  }\n  \n  h2[_ngcontent-%COMP%] {\n    margin-bottom: 20px;\n  }\n  .hotel-list[_ngcontent-%COMP%] {\n    list-style-type: none;\n    padding: 0;\n  }\n  \n  .hotel-item[_ngcontent-%COMP%] {\n    margin-bottom: 20px;\n    padding: 20px;\n    border: 1px solid #ddd;\n    border-radius: 8px;\n    background-color: #fff;\n  }\n  .hotel-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\n    color: black;\n  }\n  .hotel-info[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{\n    color: #208678;\n  }\n\n  \n  button.btn.btn-success[_ngcontent-%COMP%] {\n    padding: 4px 20px;\n  \n  }\n  .mat-icon[_ngcontent-%COMP%] {\n    -webkit-user-select: none;\n    user-select: none;\n    background-repeat: no-repeat;\n    display: inline-block;\n    fill: currentColor;\n    height: 35px;\n    overflow: hidden;\n  }\n  \n  p[_ngcontent-%COMP%] {\n    margin-top: 0;\n    margin-bottom: 0;\n    font-size: 20px;\n  }\n  \n  .submit[_ngcontent-%COMP%] {\n    display: flex;\n    margin-top: 20px;\n  }\n  \n  .right_btn[_ngcontent-%COMP%] {\n    margin-left: auto;\n  }\n  \n  i.fa-solid.fa-star[_ngcontent-%COMP%] {\n    color: orange;\n    font-size: 15px;\n  }\n  \n  .hotel-sec[_ngcontent-%COMP%] {\n    display: flex;\n  }\n  \n  .booking-btn[_ngcontent-%COMP%] {\n    margin-left: auto;\n    margin-top: 30px;\n  }\n  \n  .booking-btn[_ngcontent-%COMP%]   button.btn.btn-success[_ngcontent-%COMP%] {\n    margin-top: 15px;\n    padding: 6px 20px;\n  }\n  \n  .rating[_ngcontent-%COMP%] {\n    display: flex;\n  }\n  .rating[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\n    margin-right: 10px;\n  }\n  \n  \n\n  \n  \n  h2[_ngcontent-%COMP%] {\n    text-align: center;\n    margin-bottom: 20px;\n    font-weight: 800;\n    color: #208678;\n  }\n  button.btn.btn-primary[_ngcontent-%COMP%] {\n    background-color: #4b4b4b;\n    border-color: #4b4b4b;\n  }\n  \n  button.btn.btn-succes[_ngcontent-%COMP%] {\n    margin-top: 10px;\n    background-color: #208678;\n    color: white;\n  }\n  .btn[_ngcontent-%COMP%] {\n    font-size: 24px;\n    padding: 10px 40px;\n  }\n  .hotel-info[_ngcontent-%COMP%] {\n    text-align: left;\n  }\n  \n  \n  @media only screen and (max-width: 1199px) {\n    h1[_ngcontent-%COMP%]{\n      font-size: 57px;\n  }\n  \n  h2[_ngcontent-%COMP%] {\n      font-size: 38px;\n  }\n  h3[_ngcontent-%COMP%]{\n      font-size: 35px;\n  }\n  h4[_ngcontent-%COMP%]{\n      font-size: 25px;\n  }\n  h5[_ngcontent-%COMP%]{\n      font-size: 20px;\n  }\n  h6[_ngcontent-%COMP%]{\n      font-size: 18px;\n  }\n  p[_ngcontent-%COMP%]{\n      font-size: 20px;\n  }\n  a[_ngcontent-%COMP%]{\n      font-size: 20px;\n  }\n  }\n  \n  @media only screen and (max-width: 991px) {\n  \n  }\n  \n  @media only screen and (max-width: 575px){\n    h1[_ngcontent-%COMP%]{\n      font-size: 35px;\n  }\n  h2[_ngcontent-%COMP%]{\n      font-size: 32px;\n  }\n\n  p[_ngcontent-%COMP%]{\n      font-size: 18px;\n  }\n  label[_ngcontent-%COMP%] {\n    font-size: 15px;\n    color: white;\n  }\n  .form-control[_ngcontent-%COMP%]{\n  font-size: 12px;\n  }\n  select[_ngcontent-%COMP%], input[type=\"text\"][_ngcontent-%COMP%] {\n  font-size: 12px;\n  }\n  .btn[_ngcontent-%COMP%] {\n  font-size: 15px;\n  padding: 6px 24px;\n  }\n  h4[_ngcontent-%COMP%]{\n    font-size: 18px;\n  }\n  p[_ngcontent-%COMP%]{\n    font-size: 15px;\n  }\n  .material-icons[_ngcontent-%COMP%] {\n    font-size: 17px;\n  }\n  .hotel-item[_ngcontent-%COMP%] {\n    padding: 10px;\n  }\n  .list[_ngcontent-%COMP%] {\n    margin-top: 30px;\n  }\n  .hotel-sec[_ngcontent-%COMP%]{\n    display: block;\n  }\n  .booking-btn[_ngcontent-%COMP%] {\n    margin-left: 0;\n    margin-top: 10px;\n    text-align: left;\n  }\n  button.btn.btn-succes[_ngcontent-%COMP%] {\n    margin-top: 0;\n    width: 100%;\n  }\n  .mat-icon[_ngcontent-%COMP%] { \n    height: auto;\n  }\n  \n  }\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZm9ybTIvaG90ZWwtbGlzdDIvaG90ZWwtbGlzdDIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxlQUFlO0FBQ2pCO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1g7O0VBRUE7SUFDRSxtQkFBbUI7RUFDckI7RUFDQTtJQUNFLHFCQUFxQjtJQUNyQixVQUFVO0VBQ1o7O0VBRUE7SUFDRSxtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsc0JBQXNCO0VBQ3hCO0VBQ0E7SUFDRSxZQUFZO0VBQ2Q7RUFDQTtJQUNFLGNBQWM7RUFDaEI7OztFQUdBO0lBQ0UsaUJBQWlCOztFQUVuQjtFQUNBO0lBQ0UseUJBQXlCO0lBQ3pCLGlCQUFpQjtJQUNqQiw0QkFBNEI7SUFDNUIscUJBQXFCO0lBQ3JCLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UsYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsYUFBYTtJQUNiLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLGFBQWE7SUFDYixlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsYUFBYTtFQUNmOztFQUVBO0lBQ0UsaUJBQWlCO0lBQ2pCLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLGdCQUFnQjtJQUNoQixpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxhQUFhO0VBQ2Y7RUFDQTtJQUNFLGtCQUFrQjtFQUNwQjs7RUFFQSw4RUFBOEU7OztFQUc5RTtJQUNFLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLGNBQWM7RUFDaEI7RUFDQTtJQUNFLHlCQUF5QjtJQUN6QixxQkFBcUI7RUFDdkI7O0VBRUE7SUFDRSxnQkFBZ0I7SUFDaEIseUJBQXlCO0lBQ3pCLFlBQVk7RUFDZDtFQUNBO0lBQ0UsZUFBZTtJQUNmLGtCQUFrQjtFQUNwQjtFQUNBO0lBQ0UsZ0JBQWdCO0VBQ2xCOzs7RUFHQTtJQUNFO01BQ0UsZUFBZTtFQUNuQjs7RUFFQTtNQUNJLGVBQWU7RUFDbkI7RUFDQTtNQUNJLGVBQWU7RUFDbkI7RUFDQTtNQUNJLGVBQWU7RUFDbkI7RUFDQTtNQUNJLGVBQWU7RUFDbkI7RUFDQTtNQUNJLGVBQWU7RUFDbkI7RUFDQTtNQUNJLGVBQWU7RUFDbkI7RUFDQTtNQUNJLGVBQWU7RUFDbkI7RUFDQTs7RUFFQTs7RUFFQTs7RUFFQTtJQUNFO01BQ0UsZUFBZTtFQUNuQjtFQUNBO01BQ0ksZUFBZTtFQUNuQjs7RUFFQTtNQUNJLGVBQWU7RUFDbkI7RUFDQTtJQUNFLGVBQWU7SUFDZixZQUFZO0VBQ2Q7RUFDQTtFQUNBLGVBQWU7RUFDZjtFQUNBO0VBQ0EsZUFBZTtFQUNmO0VBQ0E7RUFDQSxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCO0VBQ0E7SUFDRSxlQUFlO0VBQ2pCO0VBQ0E7SUFDRSxlQUFlO0VBQ2pCO0VBQ0E7SUFDRSxlQUFlO0VBQ2pCO0VBQ0E7SUFDRSxhQUFhO0VBQ2Y7RUFDQTtJQUNFLGdCQUFnQjtFQUNsQjtFQUNBO0lBQ0UsY0FBYztFQUNoQjtFQUNBO0lBQ0UsY0FBYztJQUNkLGdCQUFnQjtJQUNoQixnQkFBZ0I7RUFDbEI7RUFDQTtJQUNFLGFBQWE7SUFDYixXQUFXO0VBQ2I7RUFDQTtJQUNFLFlBQVk7RUFDZDs7RUFFQSIsInNvdXJjZXNDb250ZW50IjpbImgxe1xyXG4gIGZvbnQtc2l6ZTogOTBweDtcclxufVxyXG5cclxuaDIge1xyXG4gIGZvbnQtc2l6ZTogNzBweDtcclxufVxyXG5oM3tcclxuICBmb250LXNpemU6IDYwcHg7XHJcbn1cclxuaDR7XHJcbiAgZm9udC1zaXplOiA0MHB4O1xyXG59XHJcbmg1e1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxufVxyXG5oNntcclxuICBmb250LXNpemU6IDIwcHg7XHJcbn1cclxucHtcclxuICBmb250LXNpemU6IDI0cHg7XHJcbn1cclxuYXtcclxuZm9udC1zaXplOiAyNHB4O1xyXG59XHJcblxyXG4uZm9ybS1jb250cm9sIHtcclxuICBmb250LXNpemU6IDI0cHg7XHJcbn0gXHJcbi5saXN0IHtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gIG1hcmdpbi1yaWdodDogYXV0bztcclxuICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgXHJcbiAgaDIge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICB9XHJcbiAgLmhvdGVsLWxpc3Qge1xyXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gICAgcGFkZGluZzogMDtcclxuICB9XHJcbiAgXHJcbiAgLmhvdGVsLWl0ZW0ge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICB9XHJcbiAgLmhvdGVsLWluZm8gcHtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICB9XHJcbiAgLmhvdGVsLWluZm8gaDR7XHJcbiAgICBjb2xvcjogIzIwODY3ODtcclxuICB9XHJcblxyXG4gIFxyXG4gIGJ1dHRvbi5idG4uYnRuLXN1Y2Nlc3Mge1xyXG4gICAgcGFkZGluZzogNHB4IDIwcHg7XHJcbiAgXHJcbiAgfVxyXG4gIC5tYXQtaWNvbiB7XHJcbiAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgZmlsbDogY3VycmVudENvbG9yO1xyXG4gICAgaGVpZ2h0OiAzNXB4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB9XHJcbiAgXHJcbiAgcCB7XHJcbiAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICB9XHJcbiAgXHJcbiAgLnN1Ym1pdCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICB9XHJcbiAgXHJcbiAgLnJpZ2h0X2J0biB7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICB9XHJcbiAgXHJcbiAgaS5mYS1zb2xpZC5mYS1zdGFyIHtcclxuICAgIGNvbG9yOiBvcmFuZ2U7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5ob3RlbC1zZWMge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICB9XHJcbiAgXHJcbiAgLmJvb2tpbmctYnRuIHtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXRvcDogMzBweDtcclxuICB9XHJcbiAgXHJcbiAgLmJvb2tpbmctYnRuIGJ1dHRvbi5idG4uYnRuLXN1Y2Nlc3Mge1xyXG4gICAgbWFyZ2luLXRvcDogMTVweDtcclxuICAgIHBhZGRpbmc6IDZweCAyMHB4O1xyXG4gIH1cclxuICBcclxuICAucmF0aW5nIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgfVxyXG4gIC5yYXRpbmcgcHtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICB9XHJcbiAgXHJcbiAgLyogWW91IGNhbiBhZGQgZ2xvYmFsIHN0eWxlcyB0byB0aGlzIGZpbGUsIGFuZCBhbHNvIGltcG9ydCBvdGhlciBzdHlsZSBmaWxlcyAqL1xyXG4gIFxyXG4gIFxyXG4gIGgyIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICBmb250LXdlaWdodDogODAwO1xyXG4gICAgY29sb3I6ICMyMDg2Nzg7XHJcbiAgfVxyXG4gIGJ1dHRvbi5idG4uYnRuLXByaW1hcnkge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzRiNGI0YjtcclxuICAgIGJvcmRlci1jb2xvcjogIzRiNGI0YjtcclxuICB9XHJcbiAgXHJcbiAgYnV0dG9uLmJ0bi5idG4tc3VjY2VzIHtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjA4Njc4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gIH1cclxuICAuYnRuIHtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIHBhZGRpbmc6IDEwcHggNDBweDtcclxuICB9XHJcbiAgLmhvdGVsLWluZm8ge1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMTk5cHgpIHtcclxuICAgIGgxe1xyXG4gICAgICBmb250LXNpemU6IDU3cHg7XHJcbiAgfVxyXG4gIFxyXG4gIGgyIHtcclxuICAgICAgZm9udC1zaXplOiAzOHB4O1xyXG4gIH1cclxuICBoM3tcclxuICAgICAgZm9udC1zaXplOiAzNXB4O1xyXG4gIH1cclxuICBoNHtcclxuICAgICAgZm9udC1zaXplOiAyNXB4O1xyXG4gIH1cclxuICBoNXtcclxuICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gIH1cclxuICBoNntcclxuICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gIH1cclxuICBwe1xyXG4gICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgfVxyXG4gIGF7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICB9XHJcbiAgfVxyXG4gIFxyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkxcHgpIHtcclxuICBcclxuICB9XHJcbiAgXHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NzVweCl7XHJcbiAgICBoMXtcclxuICAgICAgZm9udC1zaXplOiAzNXB4O1xyXG4gIH1cclxuICBoMntcclxuICAgICAgZm9udC1zaXplOiAzMnB4O1xyXG4gIH1cclxuXHJcbiAgcHtcclxuICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gIH1cclxuICBsYWJlbCB7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgfVxyXG4gIC5mb3JtLWNvbnRyb2x7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIH1cclxuICBzZWxlY3QsIGlucHV0W3R5cGU9XCJ0ZXh0XCJdIHtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgfVxyXG4gIC5idG4ge1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICBwYWRkaW5nOiA2cHggMjRweDtcclxuICB9XHJcbiAgaDR7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgfVxyXG4gIHB7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgfVxyXG4gIC5tYXRlcmlhbC1pY29ucyB7XHJcbiAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgfVxyXG4gIC5ob3RlbC1pdGVtIHtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgfVxyXG4gIC5saXN0IHtcclxuICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgfVxyXG4gIC5ob3RlbC1zZWN7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcbiAgLmJvb2tpbmctYnRuIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgfVxyXG4gIGJ1dHRvbi5idG4uYnRuLXN1Y2NlcyB7XHJcbiAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIC5tYXQtaWNvbiB7IFxyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gIH1cclxuICBcclxuICB9Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 70335:
/*!************************************************************!*\
  !*** ./src/app/form2/hotel-list3/hotel-list3.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HotelList3Component: () => (/* binding */ HotelList3Component)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ 93840);




function HotelList3Component_li_6_mat_icon_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function HotelList3Component_li_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 8)(1, "div", 9)(2, "div", 10)(3, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 11)(10, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Rating:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, HotelList3Component_li_6_mat_icon_12_Template, 2, 0, "mat-icon", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 13)(14, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Book Now");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const hotel_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](hotel_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("location: ", hotel_r1.location, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("price: \u20B9", hotel_r1.price, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", hotel_r1.ratingStars);
  }
}
class HotelList3Component {
  constructor() {
    this.hotels = []; // Define the hotels property here
  }
  ngOnInit() {
    // Initialize hotels with data here
    this.hotels = [{
      name: 'Hotel A',
      location: 'Mumbai',
      rating: 5,
      price: 1000
    }, {
      name: 'Hotel B',
      location: 'Mumbai',
      rating: 3,
      price: 1200
    }, {
      name: 'Hotel C',
      location: 'Mumbai',
      rating: 2,
      price: 1500
    }, {
      name: 'Hotel D',
      location: 'Mumbai',
      rating: 4,
      price: 2000
    }
    // Add more hotel data as needed
    ];
    this.hotels.forEach(hotel => {
      hotel.ratingStars = Array(hotel.rating).fill('star'); // Creates an array of 'star' strings based on rating
    });
  }
  static #_ = this.ɵfac = function HotelList3Component_Factory(t) {
    return new (t || HotelList3Component)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: HotelList3Component,
    selectors: [["app-hotel-list3"]],
    decls: 11,
    vars: 1,
    consts: [[1, "list"], [1, "container"], [1, "list_text"], [1, "hotel-list"], ["class", "hotel-item", 4, "ngFor", "ngForOf"], [1, "submit"], [1, "left_btn"], ["color", "primary", "routerLink", "/form2/date", 1, "btn", "btn-primary"], [1, "hotel-item"], [1, "hotel-sec"], [1, "hotel-info"], [1, "rating"], ["color", "primary", 4, "ngFor", "ngForOf"], [1, "booking-btn"], ["color", "primary", "routerLink", "/form2/rooms", 1, "btn", "btn-succes"], ["color", "primary"], [1, "fa-solid", "fa-star"]],
    template: function HotelList3Component_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Hotel List");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, HotelList3Component_li_6_Template, 16, 4, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5)(8, "div", 6)(9, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Prev");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.hotels);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink, _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__.MatIcon],
    styles: ["h1[_ngcontent-%COMP%]{\n  font-size: 90px;\n}\n\nh2[_ngcontent-%COMP%] {\n  font-size: 70px;\n}\nh3[_ngcontent-%COMP%]{\n  font-size: 60px;\n}\nh4[_ngcontent-%COMP%]{\n  font-size: 40px;\n}\nh5[_ngcontent-%COMP%]{\n  font-size: 30px;\n}\nh6[_ngcontent-%COMP%]{\n  font-size: 20px;\n}\np[_ngcontent-%COMP%]{\n  font-size: 24px;\n}\na[_ngcontent-%COMP%]{\nfont-size: 24px;\n}\n\n.form-control[_ngcontent-%COMP%] {\n  font-size: 24px;\n}\n.list[_ngcontent-%COMP%] {\n  padding: 20px;\n  margin-left: auto;\n  margin-right: auto;\n  width: 100%;\n  }\n  \n  h2[_ngcontent-%COMP%] {\n    margin-bottom: 20px;\n  }\n  .hotel-info[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{\n    color: #208678;\n  }\n  .hotel-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\n    color: black;\n  }\n  \n  .hotel-list[_ngcontent-%COMP%] {\n    list-style-type: none;\n    padding: 0;\n  }\n  \n  .hotel-item[_ngcontent-%COMP%] {\n    margin-bottom: 20px;\n    padding: 20px;\n    border: 1px solid #ddd;\n    border-radius: 8px;\n    background-color: #fff;\n  }\n  \n  button.btn.btn-success[_ngcontent-%COMP%] {\n    padding: 4px 20px;\n  \n  }\n  .mat-icon[_ngcontent-%COMP%] {\n    -webkit-user-select: none;\n    user-select: none;\n    background-repeat: no-repeat;\n    display: inline-block;\n    fill: currentColor;\n    height: 35px;\n    overflow: hidden;\n  }\n  \n  p[_ngcontent-%COMP%] {\n    margin-top: 0;\n    margin-bottom: 0;\n    font-size: 20px;\n  }\n  \n  .submit[_ngcontent-%COMP%] {\n    display: flex;\n    margin-top: 20px;\n  }\n  \n  .right_btn[_ngcontent-%COMP%] {\n    margin-left: auto;\n  }\n  \n  i.fa-solid.fa-star[_ngcontent-%COMP%] {\n    color: orange;\n    font-size: 15px;\n  }\n  \n  .hotel-sec[_ngcontent-%COMP%] {\n    display: flex;\n  }\n  \n  .booking-btn[_ngcontent-%COMP%] {\n    margin-left: auto;\n    margin-top: 30px;\n  }\n  \n  .booking-btn[_ngcontent-%COMP%]   button.btn.btn-success[_ngcontent-%COMP%] {\n    margin-top: 15px;\n    padding: 6px 20px;\n  }\n  \n  .rating[_ngcontent-%COMP%] {\n    display: flex;\n  }\n  \n  \n\n  \n  h2[_ngcontent-%COMP%] {\n    text-align: center;\n    margin-bottom: 20px;\n    font-weight: 800;\n    color: #208678;\n  }\n  .rating[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\n    margin-right: 10px;\n  }\n  button.btn.btn-primary[_ngcontent-%COMP%] {\n    background-color: #4b4b4b;\n    border-color: #4b4b4b;\n  }\n  \n  button.btn.btn-succes[_ngcontent-%COMP%] {\n    margin-top: 10px;\n    background-color: #208678;\n    color: white;\n  }\n  \n  .btn[_ngcontent-%COMP%] {\n    font-size: 24px;\n    padding: 10px 40px;\n  }\n  .hotel-info[_ngcontent-%COMP%] {\n    text-align: left;\n  }\n  \n  \n  @media only screen and (max-width: 1199px) {\n    h1[_ngcontent-%COMP%]{\n      font-size: 57px;\n  }\n  \n  h2[_ngcontent-%COMP%] {\n      font-size: 38px;\n  }\n  h3[_ngcontent-%COMP%]{\n      font-size: 35px;\n  }\n  h4[_ngcontent-%COMP%]{\n      font-size: 25px;\n  }\n  h5[_ngcontent-%COMP%]{\n      font-size: 20px;\n  }\n  h6[_ngcontent-%COMP%]{\n      font-size: 18px;\n  }\n  p[_ngcontent-%COMP%]{\n      font-size: 20px;\n  }\n  a[_ngcontent-%COMP%]{\n      font-size: 20px;\n  }\n  }\n  \n  @media only screen and (max-width: 991px) {\n  \n  }\n  \n  @media only screen and (max-width: 575px){\n    h1[_ngcontent-%COMP%]{\n      font-size: 35px;\n  }\n  h2[_ngcontent-%COMP%]{\n      font-size: 32px;\n  }\n\n  p[_ngcontent-%COMP%]{\n      font-size: 18px;\n  }\n  label[_ngcontent-%COMP%] {\n    font-size: 15px;\n    color: white;\n  }\n  .form-control[_ngcontent-%COMP%]{\n  font-size: 12px;\n  }\n  select[_ngcontent-%COMP%], input[type=\"text\"][_ngcontent-%COMP%] {\n  font-size: 12px;\n  }\n  .btn[_ngcontent-%COMP%] {\n  font-size: 15px;\n  padding: 6px 24px;\n  }\n  h4[_ngcontent-%COMP%]{\n    font-size: 18px;\n  }\n  p[_ngcontent-%COMP%]{\n    font-size: 15px;\n  }\n  .material-icons[_ngcontent-%COMP%] {\n    font-size: 17px;\n  }\n  .hotel-item[_ngcontent-%COMP%] {\n    padding: 10px;\n  }\n  .list[_ngcontent-%COMP%] {\n    margin-top: 30px;\n  }\n  .hotel-sec[_ngcontent-%COMP%]{\n    display: block;\n  }\n  .booking-btn[_ngcontent-%COMP%] {\n    margin-left: 0;\n    margin-top: 10px;\n    text-align: left;\n  }\n  button.btn.btn-succes[_ngcontent-%COMP%] {\n    margin-top: 0;\n    width: 100%;\n  }\n  .mat-icon[_ngcontent-%COMP%] { \n    height: auto;\n  }\n  }\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZm9ybTIvaG90ZWwtbGlzdDMvaG90ZWwtbGlzdDMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxlQUFlO0FBQ2pCO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1g7O0VBRUE7SUFDRSxtQkFBbUI7RUFDckI7RUFDQTtJQUNFLGNBQWM7RUFDaEI7RUFDQTtJQUNFLFlBQVk7RUFDZDs7RUFFQTtJQUNFLHFCQUFxQjtJQUNyQixVQUFVO0VBQ1o7O0VBRUE7SUFDRSxtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsc0JBQXNCO0VBQ3hCOztFQUVBO0lBQ0UsaUJBQWlCOztFQUVuQjtFQUNBO0lBQ0UseUJBQXlCO0lBQ3pCLGlCQUFpQjtJQUNqQiw0QkFBNEI7SUFDNUIscUJBQXFCO0lBQ3JCLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UsYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsYUFBYTtJQUNiLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLGFBQWE7SUFDYixlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsYUFBYTtFQUNmOztFQUVBO0lBQ0UsaUJBQWlCO0lBQ2pCLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLGdCQUFnQjtJQUNoQixpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxhQUFhO0VBQ2Y7O0VBRUEsOEVBQThFOztFQUU5RTtJQUNFLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLGNBQWM7RUFDaEI7RUFDQTtJQUNFLGtCQUFrQjtFQUNwQjtFQUNBO0lBQ0UseUJBQXlCO0lBQ3pCLHFCQUFxQjtFQUN2Qjs7RUFFQTtJQUNFLGdCQUFnQjtJQUNoQix5QkFBeUI7SUFDekIsWUFBWTtFQUNkOztFQUVBO0lBQ0UsZUFBZTtJQUNmLGtCQUFrQjtFQUNwQjtFQUNBO0lBQ0UsZ0JBQWdCO0VBQ2xCOzs7RUFHQTtJQUNFO01BQ0UsZUFBZTtFQUNuQjs7RUFFQTtNQUNJLGVBQWU7RUFDbkI7RUFDQTtNQUNJLGVBQWU7RUFDbkI7RUFDQTtNQUNJLGVBQWU7RUFDbkI7RUFDQTtNQUNJLGVBQWU7RUFDbkI7RUFDQTtNQUNJLGVBQWU7RUFDbkI7RUFDQTtNQUNJLGVBQWU7RUFDbkI7RUFDQTtNQUNJLGVBQWU7RUFDbkI7RUFDQTs7RUFFQTs7RUFFQTs7RUFFQTtJQUNFO01BQ0UsZUFBZTtFQUNuQjtFQUNBO01BQ0ksZUFBZTtFQUNuQjs7RUFFQTtNQUNJLGVBQWU7RUFDbkI7RUFDQTtJQUNFLGVBQWU7SUFDZixZQUFZO0VBQ2Q7RUFDQTtFQUNBLGVBQWU7RUFDZjtFQUNBO0VBQ0EsZUFBZTtFQUNmO0VBQ0E7RUFDQSxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCO0VBQ0E7SUFDRSxlQUFlO0VBQ2pCO0VBQ0E7SUFDRSxlQUFlO0VBQ2pCO0VBQ0E7SUFDRSxlQUFlO0VBQ2pCO0VBQ0E7SUFDRSxhQUFhO0VBQ2Y7RUFDQTtJQUNFLGdCQUFnQjtFQUNsQjtFQUNBO0lBQ0UsY0FBYztFQUNoQjtFQUNBO0lBQ0UsY0FBYztJQUNkLGdCQUFnQjtJQUNoQixnQkFBZ0I7RUFDbEI7RUFDQTtJQUNFLGFBQWE7SUFDYixXQUFXO0VBQ2I7RUFDQTtJQUNFLFlBQVk7RUFDZDtFQUNBIiwic291cmNlc0NvbnRlbnQiOlsiaDF7XHJcbiAgZm9udC1zaXplOiA5MHB4O1xyXG59XHJcblxyXG5oMiB7XHJcbiAgZm9udC1zaXplOiA3MHB4O1xyXG59XHJcbmgze1xyXG4gIGZvbnQtc2l6ZTogNjBweDtcclxufVxyXG5oNHtcclxuICBmb250LXNpemU6IDQwcHg7XHJcbn1cclxuaDV7XHJcbiAgZm9udC1zaXplOiAzMHB4O1xyXG59XHJcbmg2e1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG5we1xyXG4gIGZvbnQtc2l6ZTogMjRweDtcclxufVxyXG5he1xyXG5mb250LXNpemU6IDI0cHg7XHJcbn1cclxuXHJcbi5mb3JtLWNvbnRyb2wge1xyXG4gIGZvbnQtc2l6ZTogMjRweDtcclxufVxyXG4ubGlzdCB7XHJcbiAgcGFkZGluZzogMjBweDtcclxuICBtYXJnaW4tbGVmdDogYXV0bztcclxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIFxyXG4gIGgyIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgfVxyXG4gIC5ob3RlbC1pbmZvIGg0e1xyXG4gICAgY29sb3I6ICMyMDg2Nzg7XHJcbiAgfVxyXG4gIC5ob3RlbC1pbmZvIHB7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgfVxyXG4gIFxyXG4gIC5ob3RlbC1saXN0IHtcclxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgfVxyXG4gIFxyXG4gIC5ob3RlbC1pdGVtIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgfVxyXG4gIFxyXG4gIGJ1dHRvbi5idG4uYnRuLXN1Y2Nlc3Mge1xyXG4gICAgcGFkZGluZzogNHB4IDIwcHg7XHJcbiAgXHJcbiAgfVxyXG4gIC5tYXQtaWNvbiB7XHJcbiAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgZmlsbDogY3VycmVudENvbG9yO1xyXG4gICAgaGVpZ2h0OiAzNXB4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB9XHJcbiAgXHJcbiAgcCB7XHJcbiAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICB9XHJcbiAgXHJcbiAgLnN1Ym1pdCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICB9XHJcbiAgXHJcbiAgLnJpZ2h0X2J0biB7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICB9XHJcbiAgXHJcbiAgaS5mYS1zb2xpZC5mYS1zdGFyIHtcclxuICAgIGNvbG9yOiBvcmFuZ2U7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5ob3RlbC1zZWMge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICB9XHJcbiAgXHJcbiAgLmJvb2tpbmctYnRuIHtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXRvcDogMzBweDtcclxuICB9XHJcbiAgXHJcbiAgLmJvb2tpbmctYnRuIGJ1dHRvbi5idG4uYnRuLXN1Y2Nlc3Mge1xyXG4gICAgbWFyZ2luLXRvcDogMTVweDtcclxuICAgIHBhZGRpbmc6IDZweCAyMHB4O1xyXG4gIH1cclxuICBcclxuICAucmF0aW5nIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cclxuICBcclxuICBoMiB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICAgIGNvbG9yOiAjMjA4Njc4O1xyXG4gIH1cclxuICAucmF0aW5nIHB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgfVxyXG4gIGJ1dHRvbi5idG4uYnRuLXByaW1hcnkge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzRiNGI0YjtcclxuICAgIGJvcmRlci1jb2xvcjogIzRiNGI0YjtcclxuICB9XHJcbiAgXHJcbiAgYnV0dG9uLmJ0bi5idG4tc3VjY2VzIHtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjA4Njc4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gIH1cclxuICBcclxuICAuYnRuIHtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIHBhZGRpbmc6IDEwcHggNDBweDtcclxuICB9XHJcbiAgLmhvdGVsLWluZm8ge1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMTk5cHgpIHtcclxuICAgIGgxe1xyXG4gICAgICBmb250LXNpemU6IDU3cHg7XHJcbiAgfVxyXG4gIFxyXG4gIGgyIHtcclxuICAgICAgZm9udC1zaXplOiAzOHB4O1xyXG4gIH1cclxuICBoM3tcclxuICAgICAgZm9udC1zaXplOiAzNXB4O1xyXG4gIH1cclxuICBoNHtcclxuICAgICAgZm9udC1zaXplOiAyNXB4O1xyXG4gIH1cclxuICBoNXtcclxuICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gIH1cclxuICBoNntcclxuICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gIH1cclxuICBwe1xyXG4gICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgfVxyXG4gIGF7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICB9XHJcbiAgfVxyXG4gIFxyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkxcHgpIHtcclxuICBcclxuICB9XHJcbiAgXHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NzVweCl7XHJcbiAgICBoMXtcclxuICAgICAgZm9udC1zaXplOiAzNXB4O1xyXG4gIH1cclxuICBoMntcclxuICAgICAgZm9udC1zaXplOiAzMnB4O1xyXG4gIH1cclxuXHJcbiAgcHtcclxuICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gIH1cclxuICBsYWJlbCB7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgfVxyXG4gIC5mb3JtLWNvbnRyb2x7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIH1cclxuICBzZWxlY3QsIGlucHV0W3R5cGU9XCJ0ZXh0XCJdIHtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgfVxyXG4gIC5idG4ge1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICBwYWRkaW5nOiA2cHggMjRweDtcclxuICB9XHJcbiAgaDR7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgfVxyXG4gIHB7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgfVxyXG4gIC5tYXRlcmlhbC1pY29ucyB7XHJcbiAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgfVxyXG4gIC5ob3RlbC1pdGVtIHtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgfVxyXG4gIC5saXN0IHtcclxuICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgfVxyXG4gIC5ob3RlbC1zZWN7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcbiAgLmJvb2tpbmctYnRuIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgfVxyXG4gIGJ1dHRvbi5idG4uYnRuLXN1Y2NlcyB7XHJcbiAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIC5tYXQtaWNvbiB7IFxyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gIH1cclxuICB9Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 15623:
/*!************************************************************!*\
  !*** ./src/app/form2/hotel-list4/hotel-list4.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HotelList4Component: () => (/* binding */ HotelList4Component)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ 93840);




function HotelList4Component_li_6_mat_icon_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function HotelList4Component_li_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 8)(1, "div", 9)(2, "div", 10)(3, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 11)(10, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Rating:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, HotelList4Component_li_6_mat_icon_12_Template, 2, 0, "mat-icon", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 13)(14, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Book Now");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const hotel_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](hotel_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("location: ", hotel_r1.location, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("price: \u20B9", hotel_r1.price, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", hotel_r1.ratingStars);
  }
}
class HotelList4Component {
  constructor() {
    // Initialize hotels array with dummy data (replace with actual data loading logic)
    this.hotels = [{
      name: 'Hotel 1',
      location: 'Goa',
      rating: 5,
      price: 1000
    }, {
      name: 'Hotel 2',
      location: 'Goa',
      rating: 4,
      price: 1500
    }, {
      name: 'Hotel 3',
      location: 'Goa',
      rating: 3,
      price: 2000
    }
    // Add more hotels as needed
    ];
    // Enhance each hotel object with a 'ratingStars' property
    this.hotels.forEach(hotel => {
      hotel.ratingStars = Array(hotel.rating).fill('star'); // Creates an array of 'star' strings based on rating
    });
  }
  static #_ = this.ɵfac = function HotelList4Component_Factory(t) {
    return new (t || HotelList4Component)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: HotelList4Component,
    selectors: [["app-hotel-list4"]],
    decls: 11,
    vars: 1,
    consts: [[1, "list"], [1, "container"], [1, "list_text"], [1, "hotel-list"], ["class", "hotel-item", 4, "ngFor", "ngForOf"], [1, "submit"], [1, "left_btn"], ["color", "primary", "routerLink", "/form2/date", 1, "btn", "btn-primary"], [1, "hotel-item"], [1, "hotel-sec"], [1, "hotel-info"], [1, "rating"], ["color", "primary", 4, "ngFor", "ngForOf"], [1, "booking-btn"], ["color", "primary", "routerLink", "/form2/rooms", 1, "btn", "btn-succes"], ["color", "primary"], [1, "fa-solid", "fa-star"]],
    template: function HotelList4Component_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Hotel List");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, HotelList4Component_li_6_Template, 16, 4, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5)(8, "div", 6)(9, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Prev");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.hotels);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink, _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__.MatIcon],
    styles: ["h1[_ngcontent-%COMP%]{\n  font-size: 90px;\n}\n\nh2[_ngcontent-%COMP%] {\n  font-size: 70px;\n}\nh3[_ngcontent-%COMP%]{\n  font-size: 60px;\n}\nh4[_ngcontent-%COMP%]{\n  font-size: 40px;\n}\nh5[_ngcontent-%COMP%]{\n  font-size: 30px;\n}\nh6[_ngcontent-%COMP%]{\n  font-size: 20px;\n}\np[_ngcontent-%COMP%]{\n  font-size: 24px;\n}\na[_ngcontent-%COMP%]{\nfont-size: 24px;\n}\n\n.form-control[_ngcontent-%COMP%] {\n  font-size: 24px;\n}\n.list[_ngcontent-%COMP%] {\n  padding: 20px;\n  margin-left: auto;\n  margin-right: auto;\n  width: 100%;\n  }\n  \n  h2[_ngcontent-%COMP%] {\n    margin-bottom: 20px;\n  }\n  \n  .hotel-list[_ngcontent-%COMP%] {\n    list-style-type: none;\n    padding: 0;\n  }\n  \n  .hotel-item[_ngcontent-%COMP%] {\n    margin-bottom: 20px;\n    padding: 20px;\n    border: 1px solid #ddd;\n    border-radius: 8px;\n    background-color: #fff;\n  }\n  \n  button.btn.btn-success[_ngcontent-%COMP%] {\n    padding: 4px 20px;\n  \n  }\n  .mat-icon[_ngcontent-%COMP%] {\n    -webkit-user-select: none;\n    user-select: none;\n    background-repeat: no-repeat;\n    display: inline-block;\n    fill: currentColor;\n    height: 35px;\n    overflow: hidden;\n  }\n  .hotel-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\n    color: black;\n  }\n  .hotel-info[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{\n    color: #208678;\n  }\n  \n  p[_ngcontent-%COMP%] {\n    margin-top: 0;\n    margin-bottom: 0;\n    font-size: 20px;\n  }\n  \n  .submit[_ngcontent-%COMP%] {\n    display: flex;\n    margin-top: 20px;\n  }\n  \n  .right_btn[_ngcontent-%COMP%] {\n    margin-left: auto;\n  }\n  \n  i.fa-solid.fa-star[_ngcontent-%COMP%] {\n    color: orange;\n    font-size: 15px;\n  }\n  .rating[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\n    margin-right: 10px;\n  }\n  \n  .hotel-sec[_ngcontent-%COMP%] {\n    display: flex;\n  }\n  \n  .booking-btn[_ngcontent-%COMP%] {\n    margin-left: auto;\n    margin-top: 30px;\n  }\n  \n  .booking-btn[_ngcontent-%COMP%]   button.btn.btn-success[_ngcontent-%COMP%] {\n    margin-top: 15px;\n    padding: 6px 20px;\n  }\n  \n  .rating[_ngcontent-%COMP%] {\n    display: flex;\n  }\n  \n  \n\n  \n  h2[_ngcontent-%COMP%] {\n    text-align: center;\n    margin-bottom: 20px;\n    font-weight: 800;\n    color: #208678;\n  }\n\n  button.btn.btn-primary[_ngcontent-%COMP%] {\n    background-color: #4b4b4b;\n    border-color: #4b4b4b;\n  }\n  \n  button.btn.btn-succes[_ngcontent-%COMP%] {\n    margin-top: 10px;\n    background-color: #208678;\n    color: white;\n  }\n  \n  .btn[_ngcontent-%COMP%] {\n    font-size: 24px;\n    padding: 10px 40px;\n  }\n  .hotel-info[_ngcontent-%COMP%] {\n    text-align: left;\n  }\n  \n  \n  @media only screen and (max-width: 1199px) {\n    h1[_ngcontent-%COMP%]{\n      font-size: 57px;\n  }\n  \n  h2[_ngcontent-%COMP%] {\n      font-size: 38px;\n  }\n  h3[_ngcontent-%COMP%]{\n      font-size: 35px;\n  }\n  h4[_ngcontent-%COMP%]{\n      font-size: 25px;\n  }\n  h5[_ngcontent-%COMP%]{\n      font-size: 20px;\n  }\n  h6[_ngcontent-%COMP%]{\n      font-size: 18px;\n  }\n  p[_ngcontent-%COMP%]{\n      font-size: 20px;\n  }\n  a[_ngcontent-%COMP%]{\n      font-size: 20px;\n  }\n  }\n  \n  @media only screen and (max-width: 991px) {\n  \n  }\n  \n  @media only screen and (max-width: 575px){\n    h1[_ngcontent-%COMP%]{\n      font-size: 35px;\n  }\n  h2[_ngcontent-%COMP%]{\n      font-size: 32px;\n  }\n\n  p[_ngcontent-%COMP%]{\n      font-size: 18px;\n  }\n  label[_ngcontent-%COMP%] {\n    font-size: 15px;\n    color: white;\n  }\n  .form-control[_ngcontent-%COMP%]{\n  font-size: 12px;\n  }\n  select[_ngcontent-%COMP%], input[type=\"text\"][_ngcontent-%COMP%] {\n  font-size: 12px;\n  }\n  .btn[_ngcontent-%COMP%] {\n  font-size: 15px;\n  padding: 6px 24px;\n  }\n  h4[_ngcontent-%COMP%]{\n    font-size: 18px;\n  }\n  p[_ngcontent-%COMP%]{\n    font-size: 15px;\n  }\n  .material-icons[_ngcontent-%COMP%] {\n    font-size: 17px;\n  }\n  .hotel-item[_ngcontent-%COMP%] {\n    padding: 10px;\n  }\n  .list[_ngcontent-%COMP%] {\n    margin-top: 30px;\n  }\n  .hotel-sec[_ngcontent-%COMP%]{\n    display: block;\n  }\n  .booking-btn[_ngcontent-%COMP%] {\n    margin-left: 0;\n    margin-top: 10px;\n    text-align: left;\n  }\n  button.btn.btn-succes[_ngcontent-%COMP%] {\n    margin-top: 0;\n    width: 100%;\n  }\n  .mat-icon[_ngcontent-%COMP%] { \n    height: auto;\n  }\n  \n  }\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZm9ybTIvaG90ZWwtbGlzdDQvaG90ZWwtbGlzdDQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxlQUFlO0FBQ2pCO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1g7O0VBRUE7SUFDRSxtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxxQkFBcUI7SUFDckIsVUFBVTtFQUNaOztFQUVBO0lBQ0UsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLHNCQUFzQjtFQUN4Qjs7RUFFQTtJQUNFLGlCQUFpQjs7RUFFbkI7RUFDQTtJQUNFLHlCQUF5QjtJQUN6QixpQkFBaUI7SUFDakIsNEJBQTRCO0lBQzVCLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGdCQUFnQjtFQUNsQjtFQUNBO0lBQ0UsWUFBWTtFQUNkO0VBQ0E7SUFDRSxjQUFjO0VBQ2hCOztFQUVBO0lBQ0UsYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsYUFBYTtJQUNiLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLGFBQWE7SUFDYixlQUFlO0VBQ2pCO0VBQ0E7SUFDRSxrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxhQUFhO0VBQ2Y7O0VBRUE7SUFDRSxpQkFBaUI7SUFDakIsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLGFBQWE7RUFDZjs7RUFFQSw4RUFBOEU7O0VBRTlFO0lBQ0Usa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsY0FBYztFQUNoQjs7RUFFQTtJQUNFLHlCQUF5QjtJQUN6QixxQkFBcUI7RUFDdkI7O0VBRUE7SUFDRSxnQkFBZ0I7SUFDaEIseUJBQXlCO0lBQ3pCLFlBQVk7RUFDZDs7RUFFQTtJQUNFLGVBQWU7SUFDZixrQkFBa0I7RUFDcEI7RUFDQTtJQUNFLGdCQUFnQjtFQUNsQjs7O0VBR0E7SUFDRTtNQUNFLGVBQWU7RUFDbkI7O0VBRUE7TUFDSSxlQUFlO0VBQ25CO0VBQ0E7TUFDSSxlQUFlO0VBQ25CO0VBQ0E7TUFDSSxlQUFlO0VBQ25CO0VBQ0E7TUFDSSxlQUFlO0VBQ25CO0VBQ0E7TUFDSSxlQUFlO0VBQ25CO0VBQ0E7TUFDSSxlQUFlO0VBQ25CO0VBQ0E7TUFDSSxlQUFlO0VBQ25CO0VBQ0E7O0VBRUE7O0VBRUE7O0VBRUE7SUFDRTtNQUNFLGVBQWU7RUFDbkI7RUFDQTtNQUNJLGVBQWU7RUFDbkI7O0VBRUE7TUFDSSxlQUFlO0VBQ25CO0VBQ0E7SUFDRSxlQUFlO0lBQ2YsWUFBWTtFQUNkO0VBQ0E7RUFDQSxlQUFlO0VBQ2Y7RUFDQTtFQUNBLGVBQWU7RUFDZjtFQUNBO0VBQ0EsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQjtFQUNBO0lBQ0UsZUFBZTtFQUNqQjtFQUNBO0lBQ0UsZUFBZTtFQUNqQjtFQUNBO0lBQ0UsZUFBZTtFQUNqQjtFQUNBO0lBQ0UsYUFBYTtFQUNmO0VBQ0E7SUFDRSxnQkFBZ0I7RUFDbEI7RUFDQTtJQUNFLGNBQWM7RUFDaEI7RUFDQTtJQUNFLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0VBQ2xCO0VBQ0E7SUFDRSxhQUFhO0lBQ2IsV0FBVztFQUNiO0VBQ0E7SUFDRSxZQUFZO0VBQ2Q7O0VBRUEiLCJzb3VyY2VzQ29udGVudCI6WyJoMXtcclxuICBmb250LXNpemU6IDkwcHg7XHJcbn1cclxuXHJcbmgyIHtcclxuICBmb250LXNpemU6IDcwcHg7XHJcbn1cclxuaDN7XHJcbiAgZm9udC1zaXplOiA2MHB4O1xyXG59XHJcbmg0e1xyXG4gIGZvbnQtc2l6ZTogNDBweDtcclxufVxyXG5oNXtcclxuICBmb250LXNpemU6IDMwcHg7XHJcbn1cclxuaDZ7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG59XHJcbnB7XHJcbiAgZm9udC1zaXplOiAyNHB4O1xyXG59XHJcbmF7XHJcbmZvbnQtc2l6ZTogMjRweDtcclxufVxyXG5cclxuLmZvcm0tY29udHJvbCB7XHJcbiAgZm9udC1zaXplOiAyNHB4O1xyXG59XHJcbi5saXN0IHtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gIG1hcmdpbi1yaWdodDogYXV0bztcclxuICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgXHJcbiAgaDIge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICB9XHJcbiAgXHJcbiAgLmhvdGVsLWxpc3Qge1xyXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gICAgcGFkZGluZzogMDtcclxuICB9XHJcbiAgXHJcbiAgLmhvdGVsLWl0ZW0ge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICB9XHJcbiAgXHJcbiAgYnV0dG9uLmJ0bi5idG4tc3VjY2VzcyB7XHJcbiAgICBwYWRkaW5nOiA0cHggMjBweDtcclxuICBcclxuICB9XHJcbiAgLm1hdC1pY29uIHtcclxuICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBmaWxsOiBjdXJyZW50Q29sb3I7XHJcbiAgICBoZWlnaHQ6IDM1cHg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIH1cclxuICAuaG90ZWwtaW5mbyBwe1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gIH1cclxuICAuaG90ZWwtaW5mbyBoNHtcclxuICAgIGNvbG9yOiAjMjA4Njc4O1xyXG4gIH1cclxuICBcclxuICBwIHtcclxuICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gIH1cclxuICBcclxuICAuc3VibWl0IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gIH1cclxuICBcclxuICAucmlnaHRfYnRuIHtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gIH1cclxuICBcclxuICBpLmZhLXNvbGlkLmZhLXN0YXIge1xyXG4gICAgY29sb3I6IG9yYW5nZTtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICB9XHJcbiAgLnJhdGluZyBwe1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gIH1cclxuICBcclxuICAuaG90ZWwtc2VjIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgfVxyXG4gIFxyXG4gIC5ib29raW5nLWJ0biB7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5ib29raW5nLWJ0biBidXR0b24uYnRuLmJ0bi1zdWNjZXNzIHtcclxuICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgICBwYWRkaW5nOiA2cHggMjBweDtcclxuICB9XHJcbiAgXHJcbiAgLnJhdGluZyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gIH1cclxuICBcclxuICAvKiBZb3UgY2FuIGFkZCBnbG9iYWwgc3R5bGVzIHRvIHRoaXMgZmlsZSwgYW5kIGFsc28gaW1wb3J0IG90aGVyIHN0eWxlIGZpbGVzICovXHJcbiAgXHJcbiAgaDIge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgICBjb2xvcjogIzIwODY3ODtcclxuICB9XHJcblxyXG4gIGJ1dHRvbi5idG4uYnRuLXByaW1hcnkge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzRiNGI0YjtcclxuICAgIGJvcmRlci1jb2xvcjogIzRiNGI0YjtcclxuICB9XHJcbiAgXHJcbiAgYnV0dG9uLmJ0bi5idG4tc3VjY2VzIHtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjA4Njc4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gIH1cclxuICBcclxuICAuYnRuIHtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIHBhZGRpbmc6IDEwcHggNDBweDtcclxuICB9XHJcbiAgLmhvdGVsLWluZm8ge1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMTk5cHgpIHtcclxuICAgIGgxe1xyXG4gICAgICBmb250LXNpemU6IDU3cHg7XHJcbiAgfVxyXG4gIFxyXG4gIGgyIHtcclxuICAgICAgZm9udC1zaXplOiAzOHB4O1xyXG4gIH1cclxuICBoM3tcclxuICAgICAgZm9udC1zaXplOiAzNXB4O1xyXG4gIH1cclxuICBoNHtcclxuICAgICAgZm9udC1zaXplOiAyNXB4O1xyXG4gIH1cclxuICBoNXtcclxuICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gIH1cclxuICBoNntcclxuICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gIH1cclxuICBwe1xyXG4gICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgfVxyXG4gIGF7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICB9XHJcbiAgfVxyXG4gIFxyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkxcHgpIHtcclxuICBcclxuICB9XHJcbiAgXHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NzVweCl7XHJcbiAgICBoMXtcclxuICAgICAgZm9udC1zaXplOiAzNXB4O1xyXG4gIH1cclxuICBoMntcclxuICAgICAgZm9udC1zaXplOiAzMnB4O1xyXG4gIH1cclxuXHJcbiAgcHtcclxuICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gIH1cclxuICBsYWJlbCB7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgfVxyXG4gIC5mb3JtLWNvbnRyb2x7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIH1cclxuICBzZWxlY3QsIGlucHV0W3R5cGU9XCJ0ZXh0XCJdIHtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgfVxyXG4gIC5idG4ge1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICBwYWRkaW5nOiA2cHggMjRweDtcclxuICB9XHJcbiAgaDR7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgfVxyXG4gIHB7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgfVxyXG4gIC5tYXRlcmlhbC1pY29ucyB7XHJcbiAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgfVxyXG4gIC5ob3RlbC1pdGVtIHtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgfVxyXG4gIC5saXN0IHtcclxuICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgfVxyXG4gIC5ob3RlbC1zZWN7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcbiAgLmJvb2tpbmctYnRuIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgfVxyXG4gIGJ1dHRvbi5idG4uYnRuLXN1Y2NlcyB7XHJcbiAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIC5tYXQtaWNvbiB7IFxyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gIH1cclxuICBcclxuICB9Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 26651:
/*!************************************************************!*\
  !*** ./src/app/form2/hotel-list5/hotel-list5.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HotelList5Component: () => (/* binding */ HotelList5Component)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ 93840);




function HotelList5Component_li_6_mat_icon_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function HotelList5Component_li_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 8)(1, "div", 9)(2, "div", 10)(3, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 11)(10, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Rating:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, HotelList5Component_li_6_mat_icon_12_Template, 2, 0, "mat-icon", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 13)(14, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Book Now");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const hotel_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](hotel_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("location: ", hotel_r1.location, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("price: \u20B9", hotel_r1.price, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", hotel_r1.ratingStars);
  }
}
class HotelList5Component {
  constructor() {
    // Initialize hotels array with dummy data (replace with actual data loading logic)
    this.hotels = [{
      name: 'Hotel 1',
      location: 'Delhi',
      rating: 4,
      price: 2000
    }, {
      name: 'Hotel 2',
      location: 'Delhi',
      rating: 2,
      price: 1500
    }, {
      name: 'Hotel 3',
      location: 'Delhi',
      rating: 5,
      price: 1000
    }
    // Add more hotels as needed
    ];
    // Enhance each hotel object with a 'ratingStars' property
    this.hotels.forEach(hotel => {
      hotel.ratingStars = Array(hotel.rating).fill('star'); // Creates an array of 'star' strings based on rating
    });
  }
  static #_ = this.ɵfac = function HotelList5Component_Factory(t) {
    return new (t || HotelList5Component)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: HotelList5Component,
    selectors: [["app-hotel-list5"]],
    decls: 11,
    vars: 1,
    consts: [[1, "list"], [1, "container"], [1, "list_text"], [1, "hotel-list"], ["class", "hotel-item", 4, "ngFor", "ngForOf"], [1, "submit"], [1, "left_btn"], ["color", "primary", "routerLink", "/form2/date", 1, "btn", "btn-primary"], [1, "hotel-item"], [1, "hotel-sec"], [1, "hotel-info"], [1, "rating"], ["color", "primary", 4, "ngFor", "ngForOf"], [1, "booking-btn"], ["color", "primary", "routerLink", "/form2/rooms", 1, "btn", "btn-succes"], ["color", "primary"], [1, "fa-solid", "fa-star"]],
    template: function HotelList5Component_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Hotel List");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, HotelList5Component_li_6_Template, 16, 4, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5)(8, "div", 6)(9, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Prev");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.hotels);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink, _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__.MatIcon],
    styles: ["h1[_ngcontent-%COMP%]{\n  font-size: 90px;\n}\n\nh2[_ngcontent-%COMP%] {\n  font-size: 70px;\n}\nh3[_ngcontent-%COMP%]{\n  font-size: 60px;\n}\nh4[_ngcontent-%COMP%]{\n  font-size: 40px;\n}\nh5[_ngcontent-%COMP%]{\n  font-size: 30px;\n}\nh6[_ngcontent-%COMP%]{\n  font-size: 20px;\n}\np[_ngcontent-%COMP%]{\n  font-size: 24px;\n}\na[_ngcontent-%COMP%]{\nfont-size: 24px;\n}\n\n.form-control[_ngcontent-%COMP%] {\n  font-size: 24px;\n}\n.list[_ngcontent-%COMP%] {\n  padding: 20px;\n  margin-left: auto;\n  margin-right: auto;\n  width: 100%;\n  }\n  \n  h2[_ngcontent-%COMP%] {\n    margin-bottom: 20px;\n  }\n  \n  .hotel-list[_ngcontent-%COMP%] {\n    list-style-type: none;\n    padding: 0;\n  }\n  \n  .hotel-item[_ngcontent-%COMP%] {\n    margin-bottom: 20px;\n    padding: 20px;\n    border: 1px solid #ddd;\n    border-radius: 8px;\n    background-color: #fff;\n  }\n  \n  button.btn.btn-success[_ngcontent-%COMP%] {\n    padding: 4px 20px;\n  \n  }\n  .mat-icon[_ngcontent-%COMP%] {\n    -webkit-user-select: none;\n    user-select: none;\n    background-repeat: no-repeat;\n    display: inline-block;\n    fill: currentColor;\n    height: 35px;\n    overflow: hidden;\n  }\n  .hotel-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\n    color: black;\n  }\n  .hotel-info[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{\n    color: #208678;\n  }\n  \n  p[_ngcontent-%COMP%] {\n    margin-top: 0;\n    margin-bottom: 0;\n    font-size: 20px;\n  }\n  \n  .submit[_ngcontent-%COMP%] {\n    display: flex;\n    margin-top: 20px;\n  }\n  \n  .right_btn[_ngcontent-%COMP%] {\n    margin-left: auto;\n  }\n  \n  i.fa-solid.fa-star[_ngcontent-%COMP%] {\n    color: orange;\n    font-size: 15px;\n  }\n  \n  .hotel-sec[_ngcontent-%COMP%] {\n    display: flex;\n  }\n  \n  .booking-btn[_ngcontent-%COMP%] {\n    margin-left: auto;\n    margin-top: 30px;\n  }\n  \n  .booking-btn[_ngcontent-%COMP%]   button.btn.btn-success[_ngcontent-%COMP%] {\n    margin-top: 15px;\n    padding: 6px 20px;\n  }\n  \n  .rating[_ngcontent-%COMP%] {\n    display: flex;\n  }\n  .rating[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\n    margin-right: 10px;\n  }\n  \n  \n\n  \n  h2[_ngcontent-%COMP%] {\n    text-align: center;\n    margin-bottom: 20px;\n    font-weight: 800;\n    color: #208678;\n  }\n\n  button.btn.btn-primary[_ngcontent-%COMP%] {\n    background-color: #4b4b4b;\n    border-color: #4b4b4b;\n  }\n  \n  button.btn.btn-succes[_ngcontent-%COMP%] {\n    margin-top: 10px;\n    background-color: #208678;\n    color: white;\n  }\n\n  .btn[_ngcontent-%COMP%] {\n    font-size: 24px;\n    padding: 10px 40px;\n  }\n  .hotel-info[_ngcontent-%COMP%] {\n    text-align: left;\n  }\n  \n  \n  @media only screen and (max-width: 1199px) {\n    h1[_ngcontent-%COMP%]{\n      font-size: 57px;\n  }\n  \n  h2[_ngcontent-%COMP%] {\n      font-size: 38px;\n  }\n  h3[_ngcontent-%COMP%]{\n      font-size: 35px;\n  }\n  h4[_ngcontent-%COMP%]{\n      font-size: 25px;\n  }\n  h5[_ngcontent-%COMP%]{\n      font-size: 20px;\n  }\n  h6[_ngcontent-%COMP%]{\n      font-size: 18px;\n  }\n  p[_ngcontent-%COMP%]{\n      font-size: 20px;\n  }\n  a[_ngcontent-%COMP%]{\n      font-size: 20px;\n  }\n  }\n  \n  @media only screen and (max-width: 991px) {\n  \n  }\n  \n  @media only screen and (max-width: 575px){\n    h1[_ngcontent-%COMP%]{\n      font-size: 35px;\n  }\n  h2[_ngcontent-%COMP%]{\n      font-size: 32px;\n  }\n\n  p[_ngcontent-%COMP%]{\n      font-size: 18px;\n  }\n  label[_ngcontent-%COMP%] {\n    font-size: 15px;\n    color: white;\n  }\n  .form-control[_ngcontent-%COMP%]{\n  font-size: 12px;\n  }\n  select[_ngcontent-%COMP%], input[type=\"text\"][_ngcontent-%COMP%] {\n  font-size: 12px;\n  }\n  .btn[_ngcontent-%COMP%] {\n  font-size: 15px;\n  padding: 6px 24px;\n  }\n  h4[_ngcontent-%COMP%]{\n    font-size: 18px;\n  }\n  p[_ngcontent-%COMP%]{\n    font-size: 15px;\n  }\n  .material-icons[_ngcontent-%COMP%] {\n    font-size: 17px;\n  }\n  .hotel-item[_ngcontent-%COMP%] {\n    padding: 10px;\n  }\n  .list[_ngcontent-%COMP%] {\n    margin-top: 30px;\n  }\n  .hotel-sec[_ngcontent-%COMP%]{\n    display: block;\n  }\n  .booking-btn[_ngcontent-%COMP%] {\n    margin-left: 0;\n    margin-top: 10px;\n    text-align: left;\n  }\n  button.btn.btn-succes[_ngcontent-%COMP%] {\n    margin-top: 0;\n    width: 100%;\n  }\n  .mat-icon[_ngcontent-%COMP%] { \n    height: auto;\n  }\n  \n  }\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZm9ybTIvaG90ZWwtbGlzdDUvaG90ZWwtbGlzdDUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxlQUFlO0FBQ2pCO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1g7O0VBRUE7SUFDRSxtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxxQkFBcUI7SUFDckIsVUFBVTtFQUNaOztFQUVBO0lBQ0UsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLHNCQUFzQjtFQUN4Qjs7RUFFQTtJQUNFLGlCQUFpQjs7RUFFbkI7RUFDQTtJQUNFLHlCQUF5QjtJQUN6QixpQkFBaUI7SUFDakIsNEJBQTRCO0lBQzVCLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGdCQUFnQjtFQUNsQjtFQUNBO0lBQ0UsWUFBWTtFQUNkO0VBQ0E7SUFDRSxjQUFjO0VBQ2hCOztFQUVBO0lBQ0UsYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsYUFBYTtJQUNiLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLGFBQWE7SUFDYixlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsYUFBYTtFQUNmOztFQUVBO0lBQ0UsaUJBQWlCO0lBQ2pCLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLGdCQUFnQjtJQUNoQixpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxhQUFhO0VBQ2Y7RUFDQTtJQUNFLGtCQUFrQjtFQUNwQjs7RUFFQSw4RUFBOEU7O0VBRTlFO0lBQ0Usa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsY0FBYztFQUNoQjs7RUFFQTtJQUNFLHlCQUF5QjtJQUN6QixxQkFBcUI7RUFDdkI7O0VBRUE7SUFDRSxnQkFBZ0I7SUFDaEIseUJBQXlCO0lBQ3pCLFlBQVk7RUFDZDs7RUFFQTtJQUNFLGVBQWU7SUFDZixrQkFBa0I7RUFDcEI7RUFDQTtJQUNFLGdCQUFnQjtFQUNsQjs7O0VBR0E7SUFDRTtNQUNFLGVBQWU7RUFDbkI7O0VBRUE7TUFDSSxlQUFlO0VBQ25CO0VBQ0E7TUFDSSxlQUFlO0VBQ25CO0VBQ0E7TUFDSSxlQUFlO0VBQ25CO0VBQ0E7TUFDSSxlQUFlO0VBQ25CO0VBQ0E7TUFDSSxlQUFlO0VBQ25CO0VBQ0E7TUFDSSxlQUFlO0VBQ25CO0VBQ0E7TUFDSSxlQUFlO0VBQ25CO0VBQ0E7O0VBRUE7O0VBRUE7O0VBRUE7SUFDRTtNQUNFLGVBQWU7RUFDbkI7RUFDQTtNQUNJLGVBQWU7RUFDbkI7O0VBRUE7TUFDSSxlQUFlO0VBQ25CO0VBQ0E7SUFDRSxlQUFlO0lBQ2YsWUFBWTtFQUNkO0VBQ0E7RUFDQSxlQUFlO0VBQ2Y7RUFDQTtFQUNBLGVBQWU7RUFDZjtFQUNBO0VBQ0EsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQjtFQUNBO0lBQ0UsZUFBZTtFQUNqQjtFQUNBO0lBQ0UsZUFBZTtFQUNqQjtFQUNBO0lBQ0UsZUFBZTtFQUNqQjtFQUNBO0lBQ0UsYUFBYTtFQUNmO0VBQ0E7SUFDRSxnQkFBZ0I7RUFDbEI7RUFDQTtJQUNFLGNBQWM7RUFDaEI7RUFDQTtJQUNFLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0VBQ2xCO0VBQ0E7SUFDRSxhQUFhO0lBQ2IsV0FBVztFQUNiO0VBQ0E7SUFDRSxZQUFZO0VBQ2Q7O0VBRUEiLCJzb3VyY2VzQ29udGVudCI6WyJoMXtcclxuICBmb250LXNpemU6IDkwcHg7XHJcbn1cclxuXHJcbmgyIHtcclxuICBmb250LXNpemU6IDcwcHg7XHJcbn1cclxuaDN7XHJcbiAgZm9udC1zaXplOiA2MHB4O1xyXG59XHJcbmg0e1xyXG4gIGZvbnQtc2l6ZTogNDBweDtcclxufVxyXG5oNXtcclxuICBmb250LXNpemU6IDMwcHg7XHJcbn1cclxuaDZ7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG59XHJcbnB7XHJcbiAgZm9udC1zaXplOiAyNHB4O1xyXG59XHJcbmF7XHJcbmZvbnQtc2l6ZTogMjRweDtcclxufVxyXG5cclxuLmZvcm0tY29udHJvbCB7XHJcbiAgZm9udC1zaXplOiAyNHB4O1xyXG59XHJcbi5saXN0IHtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gIG1hcmdpbi1yaWdodDogYXV0bztcclxuICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgXHJcbiAgaDIge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICB9XHJcbiAgXHJcbiAgLmhvdGVsLWxpc3Qge1xyXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gICAgcGFkZGluZzogMDtcclxuICB9XHJcbiAgXHJcbiAgLmhvdGVsLWl0ZW0ge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICB9XHJcbiAgXHJcbiAgYnV0dG9uLmJ0bi5idG4tc3VjY2VzcyB7XHJcbiAgICBwYWRkaW5nOiA0cHggMjBweDtcclxuICBcclxuICB9XHJcbiAgLm1hdC1pY29uIHtcclxuICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBmaWxsOiBjdXJyZW50Q29sb3I7XHJcbiAgICBoZWlnaHQ6IDM1cHg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIH1cclxuICAuaG90ZWwtaW5mbyBwe1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gIH1cclxuICAuaG90ZWwtaW5mbyBoNHtcclxuICAgIGNvbG9yOiAjMjA4Njc4O1xyXG4gIH1cclxuICBcclxuICBwIHtcclxuICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gIH1cclxuICBcclxuICAuc3VibWl0IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gIH1cclxuICBcclxuICAucmlnaHRfYnRuIHtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gIH1cclxuICBcclxuICBpLmZhLXNvbGlkLmZhLXN0YXIge1xyXG4gICAgY29sb3I6IG9yYW5nZTtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICB9XHJcbiAgXHJcbiAgLmhvdGVsLXNlYyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gIH1cclxuICBcclxuICAuYm9va2luZy1idG4ge1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gIH1cclxuICBcclxuICAuYm9va2luZy1idG4gYnV0dG9uLmJ0bi5idG4tc3VjY2VzcyB7XHJcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gICAgcGFkZGluZzogNnB4IDIwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5yYXRpbmcge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICB9XHJcbiAgLnJhdGluZyBwe1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gIH1cclxuICBcclxuICAvKiBZb3UgY2FuIGFkZCBnbG9iYWwgc3R5bGVzIHRvIHRoaXMgZmlsZSwgYW5kIGFsc28gaW1wb3J0IG90aGVyIHN0eWxlIGZpbGVzICovXHJcbiAgXHJcbiAgaDIge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgICBjb2xvcjogIzIwODY3ODtcclxuICB9XHJcblxyXG4gIGJ1dHRvbi5idG4uYnRuLXByaW1hcnkge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzRiNGI0YjtcclxuICAgIGJvcmRlci1jb2xvcjogIzRiNGI0YjtcclxuICB9XHJcbiAgXHJcbiAgYnV0dG9uLmJ0bi5idG4tc3VjY2VzIHtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjA4Njc4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gIH1cclxuXHJcbiAgLmJ0biB7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDQwcHg7XHJcbiAgfVxyXG4gIC5ob3RlbC1pbmZvIHtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTE5OXB4KSB7XHJcbiAgICBoMXtcclxuICAgICAgZm9udC1zaXplOiA1N3B4O1xyXG4gIH1cclxuICBcclxuICBoMiB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMzhweDtcclxuICB9XHJcbiAgaDN7XHJcbiAgICAgIGZvbnQtc2l6ZTogMzVweDtcclxuICB9XHJcbiAgaDR7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICB9XHJcbiAgaDV7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICB9XHJcbiAgaDZ7XHJcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICB9XHJcbiAgcHtcclxuICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gIH1cclxuICBhe1xyXG4gICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgfVxyXG4gIH1cclxuICBcclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MXB4KSB7XHJcbiAgXHJcbiAgfVxyXG4gIFxyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTc1cHgpe1xyXG4gICAgaDF7XHJcbiAgICAgIGZvbnQtc2l6ZTogMzVweDtcclxuICB9XHJcbiAgaDJ7XHJcbiAgICAgIGZvbnQtc2l6ZTogMzJweDtcclxuICB9XHJcblxyXG4gIHB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICB9XHJcbiAgbGFiZWwge1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gIH1cclxuICAuZm9ybS1jb250cm9se1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICB9XHJcbiAgc2VsZWN0LCBpbnB1dFt0eXBlPVwidGV4dFwiXSB7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIH1cclxuICAuYnRuIHtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgcGFkZGluZzogNnB4IDI0cHg7XHJcbiAgfVxyXG4gIGg0e1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gIH1cclxuICBwe1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gIH1cclxuICAubWF0ZXJpYWwtaWNvbnMge1xyXG4gICAgZm9udC1zaXplOiAxN3B4O1xyXG4gIH1cclxuICAuaG90ZWwtaXRlbSB7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gIH1cclxuICAubGlzdCB7XHJcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gIH1cclxuICAuaG90ZWwtc2Vje1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgfVxyXG4gIC5ib29raW5nLWJ0biB7XHJcbiAgICBtYXJnaW4tbGVmdDogMDtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIH1cclxuICBidXR0b24uYnRuLmJ0bi1zdWNjZXMge1xyXG4gICAgbWFyZ2luLXRvcDogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICAubWF0LWljb24geyBcclxuICAgIGhlaWdodDogYXV0bztcclxuICB9XHJcbiAgXHJcbiAgfSJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 21091:
/*!**********************************************************!*\
  !*** ./src/app/form2/hotel-list/hotel-list.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HotelListComponent: () => (/* binding */ HotelListComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ 93840);




function HotelListComponent_li_6_mat_icon_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function HotelListComponent_li_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 8)(1, "div", 9)(2, "div", 10)(3, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 11)(10, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Rating:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, HotelListComponent_li_6_mat_icon_12_Template, 2, 0, "mat-icon", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 13)(14, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Book Now");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const hotel_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](hotel_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("location: ", hotel_r1.location, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("price: \u20B9", hotel_r1.price, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", hotel_r1.ratingStars);
  }
}
class HotelListComponent {
  constructor() {
    // Initialize hotels array with dummy data (replace with actual data loading logic)
    this.hotels = [{
      name: 'Cottage Room',
      location: 'Amritsar',
      rating: 5,
      price: 1000
    }, {
      name: 'Standard Room',
      location: 'Amritsar',
      rating: 3,
      price: 1800
    }
    // Add more hotel data as needed
    ];
    // Enhance each hotel object with a 'ratingStars' property
    this.hotels.forEach(hotel => {
      hotel.ratingStars = Array(hotel.rating).fill('star'); // Creates an array of 'star' strings based on rating
    });
  }
  static #_ = this.ɵfac = function HotelListComponent_Factory(t) {
    return new (t || HotelListComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: HotelListComponent,
    selectors: [["app-hotel-list"]],
    decls: 11,
    vars: 1,
    consts: [[1, "list"], [1, "container"], [1, "list_text"], [1, "hotel-list"], ["class", "hotel-item", 4, "ngFor", "ngForOf"], [1, "submit"], [1, "left_btn"], ["color", "primary", "routerLink", "/form2/date", 1, "btn", "btn-primary"], [1, "hotel-item"], [1, "hotel-sec"], [1, "hotel-info"], [1, "rating"], ["color", "primary", 4, "ngFor", "ngForOf"], [1, "booking-btn"], ["color", "primary", "routerLink", "/form2/rooms", 1, "btn", "btn-succes"], ["color", "primary"], [1, "fa-solid", "fa-star"]],
    template: function HotelListComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Hotel List");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, HotelListComponent_li_6_Template, 16, 4, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5)(8, "div", 6)(9, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Prev");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.hotels);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink, _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__.MatIcon],
    styles: ["h1[_ngcontent-%COMP%]{\n  font-size: 90px;\n}\n\nh2[_ngcontent-%COMP%] {\n  font-size: 70px;\n}\nh3[_ngcontent-%COMP%]{\n  font-size: 60px;\n}\nh4[_ngcontent-%COMP%]{\n  font-size: 40px;\n}\nh5[_ngcontent-%COMP%]{\n  font-size: 30px;\n}\nh6[_ngcontent-%COMP%]{\n  font-size: 20px;\n}\np[_ngcontent-%COMP%]{\n  font-size: 24px;\n}\na[_ngcontent-%COMP%]{\nfont-size: 24px;\n}\n\n.form-control[_ngcontent-%COMP%] {\n  font-size: 24px;\n}\n.list[_ngcontent-%COMP%] {\n  padding: 20px;\n  margin-left: auto;\n  margin-right: auto;\n  width: 100%;\n}\n.hotel-info[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{\n  color: #208678;\n}\n.hotel-info[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{\n  color: #208678;\n}\n\n\n\n\n\n\n\n\n\n\n\n\n.hotel-list[_ngcontent-%COMP%] {\n  list-style-type: none;\n  padding: 0;\n}\n\n.hotel-item[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n  padding: 20px;\n  border: 1px solid #ddd;\n  border-radius: 8px;\n  background-color: #fff;\n}\n\nbutton.btn.btn-success[_ngcontent-%COMP%] {\n  padding: 4px 20px;\n\n}\n.mat-icon[_ngcontent-%COMP%] {\n  -webkit-user-select: none;\n  user-select: none;\n  background-repeat: no-repeat;\n  display: inline-block;\n  fill: currentColor;\n  height: 35px;\n  overflow: hidden;\n}\n\np[_ngcontent-%COMP%] {\n  margin-top: 0;\n  margin-bottom: 0;\n  font-size: 20px;\n}\n\n.submit[_ngcontent-%COMP%] {\n  display: flex;\n  margin-top: 20px;\n}\n\n.right_btn[_ngcontent-%COMP%] {\n  margin-left: auto;\n}\n.rating[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\n  margin-right: 10px;\n}\n\ni.fa-solid.fa-star[_ngcontent-%COMP%] {\n  color: orange;\n  font-size: 15px;\n}\n\n.hotel-sec[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.booking-btn[_ngcontent-%COMP%] {\n  margin-left: auto;\n  margin-top: 30px;\n}\n.btn[_ngcontent-%COMP%]{\n  font-size: 24px;\n}\n\n.booking-btn[_ngcontent-%COMP%]   button.btn.btn-success[_ngcontent-%COMP%] {\n  margin-top: 15px;\n  padding: 6px 20px;\n}\n\n.rating[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n\n\n\nh2[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 20px;\n  font-weight: 800;\n  color: #208678;\n  margin-bottom: 20px;\n}\nbutton.btn.btn-primary[_ngcontent-%COMP%] {\n  background-color: #4b4b4b;\n  border-color: #4b4b4b;\n}\n\nbutton.btn.btn-succes[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  background-color: #208678;\n  color: white;\n}\n.btn[_ngcontent-%COMP%] {\n  padding: 10px 40px;\n}\n.hotel-info[_ngcontent-%COMP%] {\n  text-align: left;\n}\n\n\n@media only screen and (max-width: 1199px) {\n  h1[_ngcontent-%COMP%]{\n    font-size: 57px;\n}\n\nh2[_ngcontent-%COMP%] {\n    font-size: 38px;\n}\nh3[_ngcontent-%COMP%]{\n    font-size: 35px;\n}\nh4[_ngcontent-%COMP%]{\n    font-size: 25px;\n}\nh5[_ngcontent-%COMP%]{\n    font-size: 20px;\n}\nh6[_ngcontent-%COMP%]{\n    font-size: 18px;\n}\np[_ngcontent-%COMP%]{\n    font-size: 20px;\n}\na[_ngcontent-%COMP%]{\n    font-size: 20px;\n}\n}\n\n@media only screen and (max-width: 991px) {\n\n}\n\n@media only screen and (max-width: 575px){\n  h1[_ngcontent-%COMP%]{\n    font-size: 35px;\n}\nh2[_ngcontent-%COMP%]{\n    font-size: 32px;\n}\n\np[_ngcontent-%COMP%]{\n    font-size: 18px;\n}\nlabel[_ngcontent-%COMP%] {\n  font-size: 15px;\n  color: white;\n}\n.form-control[_ngcontent-%COMP%]{\nfont-size: 12px;\n}\nselect[_ngcontent-%COMP%], input[type=\"text\"][_ngcontent-%COMP%] {\nfont-size: 12px;\n}\n.btn[_ngcontent-%COMP%] {\nfont-size: 15px;\npadding: 6px 24px;\n}\nh4[_ngcontent-%COMP%]{\n  font-size: 18px;\n}\np[_ngcontent-%COMP%]{\n  font-size: 15px;\n}\n.material-icons[_ngcontent-%COMP%] {\n  font-size: 17px;\n}\n.hotel-item[_ngcontent-%COMP%] {\n  padding: 10px;\n}\n.list[_ngcontent-%COMP%] {\n  margin-top: 0px;\n}\n.hotel-sec[_ngcontent-%COMP%]{\n  display: block;\n}\n.booking-btn[_ngcontent-%COMP%] {\n  margin-left: 0;\n  margin-top: 10px;\n  text-align: left;\n}\nbutton.btn.btn-succes[_ngcontent-%COMP%] {\n  margin-top: 0;\n  width: 100%;\n}\n.mat-icon[_ngcontent-%COMP%] { \n  height: auto;\n}\n\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZm9ybTIvaG90ZWwtbGlzdC9ob3RlbC1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsZUFBZTtBQUNqQjtBQUNBO0FBQ0EsZUFBZTtBQUNmOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsYUFBYTtFQUNiLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsV0FBVztBQUNiO0FBQ0E7RUFDRSxjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxjQUFjO0FBQ2hCOztBQUVBOzs7Ozs7O0dBT0c7OztBQUdIO0VBQ0UscUJBQXFCO0VBQ3JCLFVBQVU7QUFDWjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxpQkFBaUI7O0FBRW5CO0FBQ0E7RUFDRSx5QkFBeUI7RUFDekIsaUJBQWlCO0VBQ2pCLDRCQUE0QjtFQUM1QixxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBLDhFQUE4RTs7QUFFOUU7RUFDRSxrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSx5QkFBeUI7RUFDekIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLHlCQUF5QjtFQUN6QixZQUFZO0FBQ2Q7QUFDQTtFQUNFLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCOzs7QUFHQTtFQUNFO0lBQ0UsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGVBQWU7QUFDbkI7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtFQUNFO0lBQ0UsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7QUFDQTtFQUNFLGVBQWU7RUFDZixZQUFZO0FBQ2Q7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQSxlQUFlO0FBQ2YsaUJBQWlCO0FBQ2pCO0FBQ0E7RUFDRSxlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxhQUFhO0FBQ2Y7QUFDQTtFQUNFLGVBQWU7QUFDakI7QUFDQTtFQUNFLGNBQWM7QUFDaEI7QUFDQTtFQUNFLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsV0FBVztBQUNiO0FBQ0E7RUFDRSxZQUFZO0FBQ2Q7O0FBRUEiLCJzb3VyY2VzQ29udGVudCI6WyJoMXtcclxuICBmb250LXNpemU6IDkwcHg7XHJcbn1cclxuXHJcbmgyIHtcclxuICBmb250LXNpemU6IDcwcHg7XHJcbn1cclxuaDN7XHJcbiAgZm9udC1zaXplOiA2MHB4O1xyXG59XHJcbmg0e1xyXG4gIGZvbnQtc2l6ZTogNDBweDtcclxufVxyXG5oNXtcclxuICBmb250LXNpemU6IDMwcHg7XHJcbn1cclxuaDZ7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG59XHJcbnB7XHJcbiAgZm9udC1zaXplOiAyNHB4O1xyXG59XHJcbmF7XHJcbmZvbnQtc2l6ZTogMjRweDtcclxufVxyXG5cclxuLmZvcm0tY29udHJvbCB7XHJcbiAgZm9udC1zaXplOiAyNHB4O1xyXG59XHJcbi5saXN0IHtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gIG1hcmdpbi1yaWdodDogYXV0bztcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG4uaG90ZWwtaW5mbyBoNHtcclxuICBjb2xvcjogIzIwODY3ODtcclxufVxyXG4uaG90ZWwtaW5mbyBoNHtcclxuICBjb2xvcjogIzIwODY3ODtcclxufVxyXG5cclxuLyogLmNvbnRhaW5lciB7XHJcbiAgbWF4LXdpZHRoOiA1MDBweDtcclxuICBtYXJnaW46IDIwcHggYXV0bztcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICMyMDg2Nzg7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmM2ZjZmI7XHJcbn0gKi9cclxuXHJcblxyXG4uaG90ZWwtbGlzdCB7XHJcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbi5ob3RlbC1pdGVtIHtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxufVxyXG5cclxuYnV0dG9uLmJ0bi5idG4tc3VjY2VzcyB7XHJcbiAgcGFkZGluZzogNHB4IDIwcHg7XHJcblxyXG59XHJcbi5tYXQtaWNvbiB7XHJcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcclxuICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBmaWxsOiBjdXJyZW50Q29sb3I7XHJcbiAgaGVpZ2h0OiAzNXB4O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbnAge1xyXG4gIG1hcmdpbi10b3A6IDA7XHJcbiAgbWFyZ2luLWJvdHRvbTogMDtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbn1cclxuXHJcbi5zdWJtaXQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxufVxyXG5cclxuLnJpZ2h0X2J0biB7XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbn1cclxuLnJhdGluZyBwe1xyXG4gIG1hcmdpbi1yaWdodDogMTBweDtcclxufVxyXG5cclxuaS5mYS1zb2xpZC5mYS1zdGFyIHtcclxuICBjb2xvcjogb3JhbmdlO1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxufVxyXG5cclxuLmhvdGVsLXNlYyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxufVxyXG5cclxuLmJvb2tpbmctYnRuIHtcclxuICBtYXJnaW4tbGVmdDogYXV0bztcclxuICBtYXJnaW4tdG9wOiAzMHB4O1xyXG59XHJcbi5idG57XHJcbiAgZm9udC1zaXplOiAyNHB4O1xyXG59XHJcblxyXG4uYm9va2luZy1idG4gYnV0dG9uLmJ0bi5idG4tc3VjY2VzcyB7XHJcbiAgbWFyZ2luLXRvcDogMTVweDtcclxuICBwYWRkaW5nOiA2cHggMjBweDtcclxufVxyXG5cclxuLnJhdGluZyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxufVxyXG5cclxuLyogWW91IGNhbiBhZGQgZ2xvYmFsIHN0eWxlcyB0byB0aGlzIGZpbGUsIGFuZCBhbHNvIGltcG9ydCBvdGhlciBzdHlsZSBmaWxlcyAqL1xyXG5cclxuaDIge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgY29sb3I6ICMyMDg2Nzg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG5idXR0b24uYnRuLmJ0bi1wcmltYXJ5IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGI0YjRiO1xyXG4gIGJvcmRlci1jb2xvcjogIzRiNGI0YjtcclxufVxyXG5cclxuYnV0dG9uLmJ0bi5idG4tc3VjY2VzIHtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMyMDg2Nzg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcbi5idG4ge1xyXG4gIHBhZGRpbmc6IDEwcHggNDBweDtcclxufVxyXG4uaG90ZWwtaW5mbyB7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG5cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTE5OXB4KSB7XHJcbiAgaDF7XHJcbiAgICBmb250LXNpemU6IDU3cHg7XHJcbn1cclxuXHJcbmgyIHtcclxuICAgIGZvbnQtc2l6ZTogMzhweDtcclxufVxyXG5oM3tcclxuICAgIGZvbnQtc2l6ZTogMzVweDtcclxufVxyXG5oNHtcclxuICAgIGZvbnQtc2l6ZTogMjVweDtcclxufVxyXG5oNXtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG5oNntcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxufVxyXG5we1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG59XHJcbmF7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbn1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTFweCkge1xyXG5cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NzVweCl7XHJcbiAgaDF7XHJcbiAgICBmb250LXNpemU6IDM1cHg7XHJcbn1cclxuaDJ7XHJcbiAgICBmb250LXNpemU6IDMycHg7XHJcbn1cclxuXHJcbnB7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbn1cclxubGFiZWwge1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuLmZvcm0tY29udHJvbHtcclxuZm9udC1zaXplOiAxMnB4O1xyXG59XHJcbnNlbGVjdCwgaW5wdXRbdHlwZT1cInRleHRcIl0ge1xyXG5mb250LXNpemU6IDEycHg7XHJcbn1cclxuLmJ0biB7XHJcbmZvbnQtc2l6ZTogMTVweDtcclxucGFkZGluZzogNnB4IDI0cHg7XHJcbn1cclxuaDR7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG59XHJcbnB7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG59XHJcbi5tYXRlcmlhbC1pY29ucyB7XHJcbiAgZm9udC1zaXplOiAxN3B4O1xyXG59XHJcbi5ob3RlbC1pdGVtIHtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcbi5saXN0IHtcclxuICBtYXJnaW4tdG9wOiAwcHg7XHJcbn1cclxuLmhvdGVsLXNlY3tcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG4uYm9va2luZy1idG4ge1xyXG4gIG1hcmdpbi1sZWZ0OiAwO1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG5idXR0b24uYnRuLmJ0bi1zdWNjZXMge1xyXG4gIG1hcmdpbi10b3A6IDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLm1hdC1pY29uIHsgXHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG59XHJcblxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 64559:
/*!****************************************************!*\
  !*** ./src/app/form2/payment/payment.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PaymentComponent: () => (/* binding */ PaymentComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 34456);




function PaymentComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23)(1, "input", 24, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayListener"]("ngModelChange", function PaymentComponent_div_10_Template_input_ngModelChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayBindingSet"](ctx_r3.selectedPaymentMethod, $event) || (ctx_r3.selectedPaymentMethod = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const method_r5 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "paymentMethod", method_r5, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayProperty"]("ngModel", ctx_r3.selectedPaymentMethod);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", method_r5)("required", ctx_r3.selectedBookingType !== "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("for", "paymentMethod", method_r5, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", method_r5, " ");
  }
}
function PaymentComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please select a payment method. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function PaymentComponent_div_12_div_10_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Card number is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function PaymentComponent_div_12_div_10_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Card number must be 16 digits.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function PaymentComponent_div_12_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PaymentComponent_div_12_div_10_div_1_Template, 2, 0, "div", 17)(2, PaymentComponent_div_12_div_10_div_2_Template, 2, 0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const cardNumberField_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", cardNumberField_r7.errors == null ? null : cardNumberField_r7.errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", cardNumberField_r7.errors == null ? null : cardNumberField_r7.errors["pattern"]);
  }
}
function PaymentComponent_div_12_div_19_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Holder name is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function PaymentComponent_div_12_div_19_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Holder name must be text.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function PaymentComponent_div_12_div_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PaymentComponent_div_12_div_19_div_1_Template, 2, 0, "div", 17)(2, PaymentComponent_div_12_div_19_div_2_Template, 2, 0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const holderNameField_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", holderNameField_r8.errors == null ? null : holderNameField_r8.errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", holderNameField_r8.errors == null ? null : holderNameField_r8.errors["pattern"]);
  }
}
function PaymentComponent_div_12_div_26_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "CVV is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function PaymentComponent_div_12_div_26_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "CVV must be 3 digits.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function PaymentComponent_div_12_div_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PaymentComponent_div_12_div_26_div_1_Template, 2, 0, "div", 17)(2, PaymentComponent_div_12_div_26_div_2_Template, 2, 0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const ccvField_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ccvField_r9.errors == null ? null : ccvField_r9.errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ccvField_r9.errors == null ? null : ccvField_r9.errors["pattern"]);
  }
}
function PaymentComponent_div_12_div_33_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Expiry date is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function PaymentComponent_div_12_div_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PaymentComponent_div_12_div_33_div_1_Template, 2, 0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const expiryDateField_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", expiryDateField_r10.errors == null ? null : expiryDateField_r10.errors["required"]);
  }
}
function PaymentComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div")(1, "div", 27)(2, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Credit Card:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 14)(5, "div", 28)(6, "label", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Card Number:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 30, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayListener"]("ngModelChange", function PaymentComponent_div_12_Template_input_ngModelChange_8_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayBindingSet"](ctx_r3.cardNumber, $event) || (ctx_r3.cardNumber = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, PaymentComponent_div_12_div_10_Template, 3, 2, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 31)(12, "div", 32)(13, "div", 33)(14, "div", 28)(15, "label", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Holder Name:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "input", 35, 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayListener"]("ngModelChange", function PaymentComponent_div_12_Template_input_ngModelChange_17_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayBindingSet"](ctx_r3.holderName, $event) || (ctx_r3.holderName = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, PaymentComponent_div_12_div_19_Template, 3, 2, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 33)(21, "div", 28)(22, "label", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "CVV:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "input", 37, 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayListener"]("ngModelChange", function PaymentComponent_div_12_Template_input_ngModelChange_24_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayBindingSet"](ctx_r3.ccv, $event) || (ctx_r3.ccv = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, PaymentComponent_div_12_div_26_Template, 3, 2, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 33)(28, "div", 28)(29, "label", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Expiry Date:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "input", 39, 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayListener"]("ngModelChange", function PaymentComponent_div_12_Template_input_ngModelChange_31_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayBindingSet"](ctx_r3.expiryDate, $event) || (ctx_r3.expiryDate = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, PaymentComponent_div_12_div_33_Template, 2, 1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()();
  }
  if (rf & 2) {
    const cardNumberField_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);
    const holderNameField_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](18);
    const ccvField_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](25);
    const expiryDateField_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](32);
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayProperty"]("ngModel", ctx_r3.cardNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", cardNumberField_r7.invalid && (cardNumberField_r7.dirty || cardNumberField_r7.untouched));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayProperty"]("ngModel", ctx_r3.holderName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", holderNameField_r8.invalid && (holderNameField_r8.dirty || holderNameField_r8.untouched));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayProperty"]("ngModel", ctx_r3.ccv);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ccvField_r9.invalid && (ccvField_r9.dirty || ccvField_r9.untouched));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayProperty"]("ngModel", ctx_r3.expiryDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("min", ctx_r3.minExpiryDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", expiryDateField_r10.invalid && (expiryDateField_r10.dirty || expiryDateField_r10.untouched));
  }
}
function PaymentComponent_div_13_div_10_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "PayPal email is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function PaymentComponent_div_13_div_10_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Invalid email format.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function PaymentComponent_div_13_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PaymentComponent_div_13_div_10_div_1_Template, 2, 0, "div", 17)(2, PaymentComponent_div_13_div_10_div_2_Template, 2, 0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const paypalEmailField_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", paypalEmailField_r12.errors == null ? null : paypalEmailField_r12.errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", paypalEmailField_r12.errors == null ? null : paypalEmailField_r12.errors["email"]);
  }
}
function PaymentComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div")(1, "div", 27)(2, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "PayPal:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 14)(5, "div", 28)(6, "label", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "PayPal Email:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 41, 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayListener"]("ngModelChange", function PaymentComponent_div_13_Template_input_ngModelChange_8_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayBindingSet"](ctx_r3.paypalEmail, $event) || (ctx_r3.paypalEmail = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, PaymentComponent_div_13_div_10_Template, 3, 2, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const paypalEmailField_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayProperty"]("ngModel", ctx_r3.paypalEmail);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", paypalEmailField_r12.invalid && (paypalEmailField_r12.dirty || paypalEmailField_r12.untouched));
  }
}
function PaymentComponent_div_14_div_10_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Bank name is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function PaymentComponent_div_14_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PaymentComponent_div_14_div_10_div_1_Template, 2, 0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const bankNameField_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", bankNameField_r14.errors == null ? null : bankNameField_r14.errors["required"]);
  }
}
function PaymentComponent_div_14_div_16_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Account number is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function PaymentComponent_div_14_div_16_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Account number must be between 8 and 20 digits.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function PaymentComponent_div_14_div_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PaymentComponent_div_14_div_16_div_1_Template, 2, 0, "div", 17)(2, PaymentComponent_div_14_div_16_div_2_Template, 2, 0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const accountNumberField_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", accountNumberField_r15.errors == null ? null : accountNumberField_r15.errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", accountNumberField_r15.errors == null ? null : accountNumberField_r15.errors["pattern"]);
  }
}
function PaymentComponent_div_14_div_22_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "IFSC code is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function PaymentComponent_div_14_div_22_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "IFSC code must be 11 characters (4 letters followed by 7 digits).");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function PaymentComponent_div_14_div_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PaymentComponent_div_14_div_22_div_1_Template, 2, 0, "div", 17)(2, PaymentComponent_div_14_div_22_div_2_Template, 2, 0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const ifscCodeField_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ifscCodeField_r16.errors == null ? null : ifscCodeField_r16.errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ifscCodeField_r16.errors == null ? null : ifscCodeField_r16.errors["pattern"]);
  }
}
function PaymentComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div")(1, "div", 27)(2, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Bank Transfer:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 14)(5, "div", 28)(6, "label", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Bank Name:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 43, 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayListener"]("ngModelChange", function PaymentComponent_div_14_Template_input_ngModelChange_8_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayBindingSet"](ctx_r3.bankName, $event) || (ctx_r3.bankName = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, PaymentComponent_div_14_div_10_Template, 2, 1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 28)(12, "label", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Account Number:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "input", 45, 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayListener"]("ngModelChange", function PaymentComponent_div_14_Template_input_ngModelChange_14_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayBindingSet"](ctx_r3.accountNumber, $event) || (ctx_r3.accountNumber = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, PaymentComponent_div_14_div_16_Template, 3, 2, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 28)(18, "label", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "IFSC Code:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "input", 47, 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayListener"]("ngModelChange", function PaymentComponent_div_14_Template_input_ngModelChange_20_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayBindingSet"](ctx_r3.ifscCode, $event) || (ctx_r3.ifscCode = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, PaymentComponent_div_14_div_22_Template, 3, 2, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const bankNameField_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);
    const accountNumberField_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](15);
    const ifscCodeField_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](21);
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayProperty"]("ngModel", ctx_r3.bankName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", bankNameField_r14.invalid && (bankNameField_r14.dirty || bankNameField_r14.untouched));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayProperty"]("ngModel", ctx_r3.accountNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", accountNumberField_r15.invalid && (accountNumberField_r15.dirty || accountNumberField_r15.untouched));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayProperty"]("ngModel", ctx_r3.ifscCode);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ifscCodeField_r16.invalid && (ifscCodeField_r16.dirty || ifscCodeField_r16.touched));
  }
}
class PaymentComponent {
  constructor() {
    this.paymentMethods = ['Credit Card', 'PayPal', 'Bank Transfer'];
    this.selectedPaymentMethod = '';
    this.selectedBookingType = ''; // Assuming you have this to control required fields
    this.cardNumber = '';
    this.holderName = '';
    this.ccv = '';
    this.expiryDate = '';
    this.paypalEmail = '';
    this.bankName = '';
    this.accountNumber = '';
    this.ifscCode = '';
    this.minExpiryDate = new Date().toISOString().split('T')[0]; // Minimum expiry date is today
  }
  handleFormSubmit(form) {
    if (form.valid) {
      // Handle form submission
      console.log('Form Submitted:', form.value);
      // Add your form submission logic here, e.g., sending data to a server
    } else {
      console.log('Form is invalid');
    }
  }
  static #_ = this.ɵfac = function PaymentComponent_Factory(t) {
    return new (t || PaymentComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: PaymentComponent,
    selectors: [["app-payment"]],
    decls: 22,
    vars: 6,
    consts: [["bookingForm", "ngForm"], ["paymentMethod", "ngModel"], ["cardNumberField", "ngModel"], ["holderNameField", "ngModel"], ["ccvField", "ngModel"], ["expiryDateField", "ngModel"], ["paypalEmailField", "ngModel"], ["bankNameField", "ngModel"], ["accountNumberField", "ngModel"], ["ifscCodeField", "ngModel"], [1, "payment"], [1, "container"], [1, "payment_text"], [1, "booking-form", 3, "ngSubmit"], [1, "form-group"], ["class", "form-check", 4, "ngFor", "ngForOf"], ["class", "text-danger", 4, "ngIf"], [4, "ngIf"], [1, "submit"], [1, "left_btn"], ["routerLink", "/form2/destination", 1, "btn", "btn-primary"], [1, "right_btn"], ["type", "submit", 1, "btn", "btn-success", 3, "disabled"], [1, "form-check"], ["type", "radio", "name", "paymentMethod", 1, "form-check-input", 3, "ngModelChange", "id", "ngModel", "value", "required"], [1, "form-check-label", 3, "for"], [1, "text-danger"], [1, "card-details"], [1, "card_1"], ["for", "cardNumber"], ["type", "text", "id", "cardNumber", "name", "cardNumber", "required", "", "pattern", "[0-9]{16}", "maxlength", "16", "minlength", "16", "inputmode", "numeric", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "card_details"], [1, "row"], [1, "col-md-4"], ["for", "name"], ["type", "text", "id", "name", "name", "name", "required", "", "pattern", "[A-Za-z ]+", 1, "form-control", 3, "ngModelChange", "ngModel"], ["for", "ccv"], ["type", "text", "id", "ccv", "name", "ccv", "required", "", "pattern", "[0-9]{3}", "maxlength", "3", "minlength", "3", "inputmode", "numeric", 1, "form-control", 3, "ngModelChange", "ngModel"], ["for", "expiryDate"], ["type", "date", "id", "expiryDate", "name", "expiryDate", "required", "", 1, "form-control", 3, "ngModelChange", "ngModel", "min"], ["for", "paypalEmail"], ["type", "email", "id", "paypalEmail", "name", "paypalEmail", "required", "", "email", "/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/", 1, "form-control", 3, "ngModelChange", "ngModel"], ["for", "bankName"], ["type", "text", "id", "bankName", "name", "bankName", "required", "", 1, "form-control", 3, "ngModelChange", "ngModel"], ["for", "accountNumber"], ["type", "text", "id", "accountNumber", "name", "accountNumber", "required", "", "pattern", "[0-9]{8,20}", "maxlength", "20", "minlength", "8", "inputmode", "numeric", 1, "form-control", 3, "ngModelChange", "ngModel"], ["for", "ifscCode"], ["type", "text", "id", "ifscCode", "name", "ifscCode", "required", "", "pattern", "[A-Z]{4}[0-9]{7}", 1, "form-control", 3, "ngModelChange", "ngModel"]],
    template: function PaymentComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 10)(1, "div", 11)(2, "div", 12)(3, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Payment");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", 13, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function PaymentComponent_Template_form_ngSubmit_5_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
          const bookingForm_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);
          return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.handleFormSubmit(bookingForm_r2));
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 14)(8, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Payment Method:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, PaymentComponent_div_10_Template, 5, 8, "div", 15)(11, PaymentComponent_div_11_Template, 2, 0, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, PaymentComponent_div_12_Template, 34, 9, "div", 17)(13, PaymentComponent_div_13_Template, 11, 2, "div", 17)(14, PaymentComponent_div_14_Template, 23, 6, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 18)(16, "div", 19)(17, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Prev");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 21)(20, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()();
      }
      if (rf & 2) {
        const bookingForm_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.paymentMethods);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", bookingForm_r2.submitted && (bookingForm_r2.controls["paymentMethod"] == null ? null : bookingForm_r2.controls["paymentMethod"].invalid));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.selectedPaymentMethod === "Credit Card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.selectedPaymentMethod === "PayPal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.selectedPaymentMethod === "Bank Transfer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", bookingForm_r2.invalid);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.RadioControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.MinLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.PatternValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.EmailValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgForm],
    styles: ["h1[_ngcontent-%COMP%] {\n  font-size: 90px;\n}\n\nh2[_ngcontent-%COMP%] {\n  font-size: 70px;\n}\n\nh3[_ngcontent-%COMP%] {\n  font-size: 60px;\n}\n\nh4[_ngcontent-%COMP%] {\n  font-size: 40px;\n  \n}\n\nh5[_ngcontent-%COMP%] {\n  font-size: 30px;\n  color: #208678;\n}\n\nh6[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n\np[_ngcontent-%COMP%] {\n  font-size: 24px;\n}\n\na[_ngcontent-%COMP%] {\n  font-size: 24px;\n}\nlabel[_ngcontent-%COMP%]{\n  font-size: 24px;\n}\n.text-danger[_ngcontent-%COMP%] {\n  color: #dc3545;\n  font-size: 24px;\n}\n\n.form-control[_ngcontent-%COMP%] {\n  font-size: 24px;\n}\n\n\n\n.payment[_ngcontent-%COMP%] {\n  text-align: left;\n  padding: 20px;\n  margin-left: auto;\n  margin-right: auto;\n  width: 100%;\n}\n.form-flex[_ngcontent-%COMP%]{\n  display: flex;\n}\n\n\n.form-group[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n\nlabel[_ngcontent-%COMP%] {\n  font-weight: bold;\n  \n\n}\n\nselect[_ngcontent-%COMP%], \ninput[type=\"text\"][_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 10px;\n  font-size: 20px;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n}\n\nul[_ngcontent-%COMP%] {\n  padding-left: 0;\n}\n\n.submit[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  display: flex;\n  justify-content: space-between;\n}\n\n.left_btn[_ngcontent-%COMP%] {\n  width: 45%;\n}\n\nbutton.btn.btn-success[_ngcontent-%COMP%] {\n  background-color: #208678;\n}\n\nbutton.btn.btn-primary[_ngcontent-%COMP%] {\n  background-color: #4b4b4b;\n  border-color: #4b4b4b;\n}\n\n.btn-primary[_ngcontent-%COMP%]:hover, \n.btn-success[_ngcontent-%COMP%]:hover {\n  opacity: 0.8;\n}\n\nbutton.btn.btn-primary[_ngcontent-%COMP%] {\n  background-color: #4b4b4b;\n}\n\ninput#cardNumber[_ngcontent-%COMP%] {\n  width: 100%;\n  display: block;\n}\n\n.card_details[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n}\n\n.card-details[_ngcontent-%COMP%] {\n  width: 100%;\n  background-color: #dbe4ed;\n  padding: 20px;\n  border-radius: 8px;\n  color: black;\n}\n\n.card-details[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  color: black;\n}\n\n.card-details[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  color: black;\n}\n\ninput[type=text][_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 10px 20px;\n  \n\n  border: 1px solid #ccc;\n  border-radius: 4px;\n}\n.form-check-input[_ngcontent-%COMP%] {\n  border-radius: 50%;\n  width: 30px;\n  height: 30px;\n  margin-right: 10px;\n}\n\ninput#date[_ngcontent-%COMP%], \ninput#ccv[_ngcontent-%COMP%], \ninput#text[_ngcontent-%COMP%], \ninput#cardNumber[_ngcontent-%COMP%], \nselect#bookingType[_ngcontent-%COMP%], \ninput#expiryDate[_ngcontent-%COMP%], \ninput#name[_ngcontent-%COMP%] {\n  padding: 10px 10px;\n  margin-bottom: 10px;\n  margin-top: 10px;\n}\n\n.card-details[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  \n\n}\n\n.card_submit[_ngcontent-%COMP%] {\n  text-align: right;\n  width: 100%;\n}\n\n.additional_services[_ngcontent-%COMP%] {\n  width: 100%;\n  list-style: none;\n  \n\n}\n\ninput#\\33[_ngcontent-%COMP%], \ninput#\\32[_ngcontent-%COMP%], \ninput#\\31[_ngcontent-%COMP%] {\n  height: 20px;\n  width: 20px;\n  margin-right: 10px;\n}\n\ninput#totalPrice[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n\n\n\n\nh2[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 20px;\n  font-weight: 800;\n  color: #208678;\n  color: #208678;\n}\n.form-check[_ngcontent-%COMP%]{\n  margin-bottom: 10px;\n}\n\n\nlabel[_ngcontent-%COMP%] {\n  color: #208678;\n}\n\n.btn[_ngcontent-%COMP%] {\n  font-size: 24px;\n  padding: 10px 40px;\n}\n\n@media only screen and (max-width: 1199px) {\n  h1[_ngcontent-%COMP%] {\n    font-size: 57px;\n  }\n\n  h2[_ngcontent-%COMP%] {\n    font-size: 38px;\n  }\n\n  h3[_ngcontent-%COMP%] {\n    font-size: 35px;\n  }\n\n  h4[_ngcontent-%COMP%] {\n    font-size: 25px;\n  }\n\n  h5[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n  .text-danger[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n\n  h6[_ngcontent-%COMP%] {\n    font-size: 18px;\n  }\n\n  p[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n\n  a[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n  label[_ngcontent-%COMP%]{\n    font-size: 20px;\n  }\n  .form-check-input[_ngcontent-%COMP%] {\n    border-radius: 50%;\n    width: 20px;\n    height: 20px;\n    margin-right: 10px;\n  }\n\n  input#date[_ngcontent-%COMP%], \n   input#ccv[_ngcontent-%COMP%], \n   input#text[_ngcontent-%COMP%], \n   input#cardNumber[_ngcontent-%COMP%], \n   select#bookingType[_ngcontent-%COMP%], \n   input#expiryDate[_ngcontent-%COMP%], \n   input#name[_ngcontent-%COMP%] {\n    padding: 5px 4px;\n    margin-bottom: 0;\n    margin-top: 10px;\n  }\n}\n\n@media only screen and (max-width: 991px) {\n\n  input#date[_ngcontent-%COMP%], \n   input#ccv[_ngcontent-%COMP%], \n   input#text[_ngcontent-%COMP%], \n   input#cardNumber[_ngcontent-%COMP%], \n   select#bookingType[_ngcontent-%COMP%], \n   input#expiryDate[_ngcontent-%COMP%], \n   input#name[_ngcontent-%COMP%] {\n    padding: 10px 10px;\n    margin-bottom: 0;\n    font-size: 16px;\n  }\n  label[_ngcontent-%COMP%]{\n    font-size: 18px;\n  }\n\n}\n\n@media only screen and (max-width: 767px) {}\n\n@media only screen and (max-width: 575px) {\n  h1[_ngcontent-%COMP%] {\n    font-size: 35px;\n  }\n\n  h2[_ngcontent-%COMP%] {\n    font-size: 32px;\n    \n  }\n  .text-danger[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n\n  p[_ngcontent-%COMP%] {\n    font-size: 18px;\n  }\n\n  label[_ngcontent-%COMP%] {\n    font-size: 15px;\n    margin-bottom: 0px;\n  }\n\n  .form-control[_ngcontent-%COMP%] {\n    font-size: 15px;\n  }\n\n  select[_ngcontent-%COMP%], \n   input[type=\"text\"][_ngcontent-%COMP%] {\n    font-size: 12px;\n  }\n\n  .btn[_ngcontent-%COMP%] {\n    font-size: 15px;\n    padding: 6px 24px;\n  }\n  .payment[_ngcontent-%COMP%]{\n    padding: 10px;\n    \n}\n\n  .payment_text[_ngcontent-%COMP%] {\n    margin-top: 0;\n  }\n  .card-details[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n    margin-top: 5px;\n    margin-bottom: 5px;\n    \n\n  }\n  input#date[_ngcontent-ng-c44735615][_ngcontent-%COMP%], input#ccv[_ngcontent-ng-c44735615][_ngcontent-%COMP%], input#text[_ngcontent-ng-c44735615][_ngcontent-%COMP%], input#cardNumber[_ngcontent-ng-c44735615][_ngcontent-%COMP%], select#bookingType[_ngcontent-ng-c44735615][_ngcontent-%COMP%], input#expiryDate[_ngcontent-ng-c44735615][_ngcontent-%COMP%], input#name[_ngcontent-ng-c44735615][_ngcontent-%COMP%] {\n    margin-bottom: 0;\n    margin-top: 0;\n}\n\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZm9ybTIvcGF5bWVudC9wYXltZW50LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxlQUFlOztBQUVqQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxjQUFjO0VBQ2QsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUEsK0JBQStCO0FBQy9CO0VBQ0UsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLFdBQVc7QUFDYjtBQUNBO0VBQ0UsYUFBYTtBQUNmOzs7QUFHQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixxQkFBcUI7QUFDdkI7O0FBRUE7O0VBRUUsV0FBVztFQUNYLGFBQWE7RUFDYixlQUFlO0VBQ2Ysc0JBQXNCO0VBQ3RCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixxQkFBcUI7QUFDdkI7O0FBRUE7O0VBRUUsWUFBWTtBQUNkOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsV0FBVztBQUNiOztBQUVBO0VBQ0UsV0FBVztFQUNYLHlCQUF5QjtFQUN6QixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLHNCQUFzQjtFQUN0QixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtBQUNwQjs7QUFFQTs7Ozs7OztFQU9FLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLHdCQUF3QjtBQUMxQjs7QUFFQTs7O0VBR0UsWUFBWTtFQUNaLFdBQVc7RUFDWCxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsbUJBQW1CO0FBQ3JCOztBQUVBLDhFQUE4RTs7QUFFOUU7RUFDRSxrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QsY0FBYztBQUNoQjtBQUNBO0VBQ0UsbUJBQW1CO0FBQ3JCOzs7QUFHQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2Ysa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0U7SUFDRSxlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsZUFBZTtFQUNqQjtFQUNBO0lBQ0UsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsZUFBZTtFQUNqQjtFQUNBO0lBQ0UsZUFBZTtFQUNqQjtFQUNBO0lBQ0Usa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0VBQ3BCOztFQUVBOzs7Ozs7O0lBT0UsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixnQkFBZ0I7RUFDbEI7QUFDRjs7QUFFQTs7RUFFRTs7Ozs7OztJQU9FLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsZUFBZTtFQUNqQjtFQUNBO0lBQ0UsZUFBZTtFQUNqQjs7QUFFRjs7QUFFQSwyQ0FBMkM7O0FBRTNDO0VBQ0U7SUFDRSxlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsZUFBZTs7RUFFakI7RUFDQTtJQUNFLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsZUFBZTtJQUNmLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLGVBQWU7RUFDakI7O0VBRUE7O0lBRUUsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLGVBQWU7SUFDZixpQkFBaUI7RUFDbkI7RUFDQTtJQUNFLGFBQWE7O0FBRWpCOztFQUVFO0lBQ0UsYUFBYTtFQUNmO0VBQ0E7SUFDRSxlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLHFCQUFxQjtFQUN2QjtFQUNBO0lBQ0UsZ0JBQWdCO0lBQ2hCLGFBQWE7QUFDakI7O0FBRUEiLCJzb3VyY2VzQ29udGVudCI6WyJoMSB7XHJcbiAgZm9udC1zaXplOiA5MHB4O1xyXG59XHJcblxyXG5oMiB7XHJcbiAgZm9udC1zaXplOiA3MHB4O1xyXG59XHJcblxyXG5oMyB7XHJcbiAgZm9udC1zaXplOiA2MHB4O1xyXG59XHJcblxyXG5oNCB7XHJcbiAgZm9udC1zaXplOiA0MHB4O1xyXG4gIFxyXG59XHJcblxyXG5oNSB7XHJcbiAgZm9udC1zaXplOiAzMHB4O1xyXG4gIGNvbG9yOiAjMjA4Njc4O1xyXG59XHJcblxyXG5oNiB7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG59XHJcblxyXG5wIHtcclxuICBmb250LXNpemU6IDI0cHg7XHJcbn1cclxuXHJcbmEge1xyXG4gIGZvbnQtc2l6ZTogMjRweDtcclxufVxyXG5sYWJlbHtcclxuICBmb250LXNpemU6IDI0cHg7XHJcbn1cclxuLnRleHQtZGFuZ2VyIHtcclxuICBjb2xvcjogI2RjMzU0NTtcclxuICBmb250LXNpemU6IDI0cHg7XHJcbn1cclxuXHJcbi5mb3JtLWNvbnRyb2wge1xyXG4gIGZvbnQtc2l6ZTogMjRweDtcclxufVxyXG5cclxuLyogYm9va2luZy1mb3JtLmNvbXBvbmVudC5jc3MgKi9cclxuLnBheW1lbnQge1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgcGFkZGluZzogMjBweDtcclxuICBtYXJnaW4tbGVmdDogYXV0bztcclxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLmZvcm0tZmxleHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG5cclxuLmZvcm0tZ3JvdXAge1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuXHJcbmxhYmVsIHtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICAvKiBmb250LXNpemU6IDE1cHg7ICovXHJcbn1cclxuXHJcbnNlbGVjdCxcclxuaW5wdXRbdHlwZT1cInRleHRcIl0ge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG59XHJcblxyXG51bCB7XHJcbiAgcGFkZGluZy1sZWZ0OiAwO1xyXG59XHJcblxyXG4uc3VibWl0IHtcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcblxyXG4ubGVmdF9idG4ge1xyXG4gIHdpZHRoOiA0NSU7XHJcbn1cclxuXHJcbmJ1dHRvbi5idG4uYnRuLXN1Y2Nlc3Mge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMyMDg2Nzg7XHJcbn1cclxuXHJcbmJ1dHRvbi5idG4uYnRuLXByaW1hcnkge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM0YjRiNGI7XHJcbiAgYm9yZGVyLWNvbG9yOiAjNGI0YjRiO1xyXG59XHJcblxyXG4uYnRuLXByaW1hcnk6aG92ZXIsXHJcbi5idG4tc3VjY2Vzczpob3ZlciB7XHJcbiAgb3BhY2l0eTogMC44O1xyXG59XHJcblxyXG5idXR0b24uYnRuLmJ0bi1wcmltYXJ5IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGI0YjRiO1xyXG59XHJcblxyXG5pbnB1dCNjYXJkTnVtYmVyIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuLmNhcmRfZGV0YWlscyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmNhcmQtZGV0YWlscyB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RiZTRlZDtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbi5jYXJkLWRldGFpbHMgaDUge1xyXG4gIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxuLmNhcmQtZGV0YWlscyBsYWJlbCB7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG5pbnB1dFt0eXBlPXRleHRdIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nOiAxMHB4IDIwcHg7XHJcbiAgLyogZm9udC1zaXplOiAxNHB4OyAqL1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG59XHJcbi5mb3JtLWNoZWNrLWlucHV0IHtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgd2lkdGg6IDMwcHg7XHJcbiAgaGVpZ2h0OiAzMHB4O1xyXG4gIG1hcmdpbi1yaWdodDogMTBweDtcclxufVxyXG5cclxuaW5wdXQjZGF0ZSxcclxuaW5wdXQjY2N2LFxyXG5pbnB1dCN0ZXh0LFxyXG5pbnB1dCNjYXJkTnVtYmVyLFxyXG5zZWxlY3QjYm9va2luZ1R5cGUsXHJcbmlucHV0I2V4cGlyeURhdGUsXHJcbmlucHV0I25hbWUge1xyXG4gIHBhZGRpbmc6IDEwcHggMTBweDtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbn1cclxuXHJcbi5jYXJkLWRldGFpbHMgbGFiZWwge1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgLyogZm9udC1zaXplOiAxNXB4OyAqL1xyXG59XHJcblxyXG4uY2FyZF9zdWJtaXQge1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uYWRkaXRpb25hbF9zZXJ2aWNlcyB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAvKiBwYWRkaW5nOiAxMHB4IDEwcHg7ICovXHJcbn1cclxuXHJcbmlucHV0I1xcMzMsXHJcbmlucHV0I1xcMzIsXHJcbmlucHV0I1xcMzEge1xyXG4gIGhlaWdodDogMjBweDtcclxuICB3aWR0aDogMjBweDtcclxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbn1cclxuXHJcbmlucHV0I3RvdGFsUHJpY2Uge1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG5cclxuLyogWW91IGNhbiBhZGQgZ2xvYmFsIHN0eWxlcyB0byB0aGlzIGZpbGUsIGFuZCBhbHNvIGltcG9ydCBvdGhlciBzdHlsZSBmaWxlcyAqL1xyXG5cclxuaDIge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgY29sb3I6ICMyMDg2Nzg7XHJcbiAgY29sb3I6ICMyMDg2Nzg7XHJcbn1cclxuLmZvcm0tY2hlY2t7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG5cclxuXHJcbmxhYmVsIHtcclxuICBjb2xvcjogIzIwODY3ODtcclxufVxyXG5cclxuLmJ0biB7XHJcbiAgZm9udC1zaXplOiAyNHB4O1xyXG4gIHBhZGRpbmc6IDEwcHggNDBweDtcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMTk5cHgpIHtcclxuICBoMSB7XHJcbiAgICBmb250LXNpemU6IDU3cHg7XHJcbiAgfVxyXG5cclxuICBoMiB7XHJcbiAgICBmb250LXNpemU6IDM4cHg7XHJcbiAgfVxyXG5cclxuICBoMyB7XHJcbiAgICBmb250LXNpemU6IDM1cHg7XHJcbiAgfVxyXG5cclxuICBoNCB7XHJcbiAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgfVxyXG5cclxuICBoNSB7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgfVxyXG4gIC50ZXh0LWRhbmdlciB7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgfVxyXG5cclxuICBoNiB7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgfVxyXG5cclxuICBwIHtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICB9XHJcblxyXG4gIGEge1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gIH1cclxuICBsYWJlbHtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICB9XHJcbiAgLmZvcm0tY2hlY2staW5wdXQge1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgd2lkdGg6IDIwcHg7XHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgfVxyXG5cclxuICBpbnB1dCNkYXRlLFxyXG4gIGlucHV0I2NjdixcclxuICBpbnB1dCN0ZXh0LFxyXG4gIGlucHV0I2NhcmROdW1iZXIsXHJcbiAgc2VsZWN0I2Jvb2tpbmdUeXBlLFxyXG4gIGlucHV0I2V4cGlyeURhdGUsXHJcbiAgaW5wdXQjbmFtZSB7XHJcbiAgICBwYWRkaW5nOiA1cHggNHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MXB4KSB7XHJcblxyXG4gIGlucHV0I2RhdGUsXHJcbiAgaW5wdXQjY2N2LFxyXG4gIGlucHV0I3RleHQsXHJcbiAgaW5wdXQjY2FyZE51bWJlcixcclxuICBzZWxlY3QjYm9va2luZ1R5cGUsXHJcbiAgaW5wdXQjZXhwaXJ5RGF0ZSxcclxuICBpbnB1dCNuYW1lIHtcclxuICAgIHBhZGRpbmc6IDEwcHggMTBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgfVxyXG4gIGxhYmVse1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHt9XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU3NXB4KSB7XHJcbiAgaDEge1xyXG4gICAgZm9udC1zaXplOiAzNXB4O1xyXG4gIH1cclxuXHJcbiAgaDIge1xyXG4gICAgZm9udC1zaXplOiAzMnB4O1xyXG4gICAgXHJcbiAgfVxyXG4gIC50ZXh0LWRhbmdlciB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgfVxyXG5cclxuICBwIHtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICB9XHJcblxyXG4gIGxhYmVsIHtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxuICB9XHJcblxyXG4gIC5mb3JtLWNvbnRyb2wge1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gIH1cclxuXHJcbiAgc2VsZWN0LFxyXG4gIGlucHV0W3R5cGU9XCJ0ZXh0XCJdIHtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICB9XHJcblxyXG4gIC5idG4ge1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgcGFkZGluZzogNnB4IDI0cHg7XHJcbiAgfVxyXG4gIC5wYXltZW50e1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIFxyXG59XHJcblxyXG4gIC5wYXltZW50X3RleHQge1xyXG4gICAgbWFyZ2luLXRvcDogMDtcclxuICB9XHJcbiAgLmNhcmQtZGV0YWlscyBsYWJlbCB7XHJcbiAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgICAvKiBmb250LXNpemU6IDE1cHg7ICovXHJcbiAgfVxyXG4gIGlucHV0I2RhdGVbX25nY29udGVudC1uZy1jNDQ3MzU2MTVdLCBpbnB1dCNjY3ZbX25nY29udGVudC1uZy1jNDQ3MzU2MTVdLCBpbnB1dCN0ZXh0W19uZ2NvbnRlbnQtbmctYzQ0NzM1NjE1XSwgaW5wdXQjY2FyZE51bWJlcltfbmdjb250ZW50LW5nLWM0NDczNTYxNV0sIHNlbGVjdCNib29raW5nVHlwZVtfbmdjb250ZW50LW5nLWM0NDczNTYxNV0sIGlucHV0I2V4cGlyeURhdGVbX25nY29udGVudC1uZy1jNDQ3MzU2MTVdLCBpbnB1dCNuYW1lW19uZ2NvbnRlbnQtbmctYzQ0NzM1NjE1XSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgbWFyZ2luLXRvcDogMDtcclxufVxyXG5cclxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 65947:
/*!********************************************!*\
  !*** ./src/app/form2/pdf/pdf.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PdfComponent: () => (/* binding */ PdfComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 95072);


class PdfComponent {
  static #_ = this.ɵfac = function PdfComponent_Factory(t) {
    return new (t || PdfComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: PdfComponent,
    selectors: [["app-pdf"]],
    decls: 4,
    vars: 0,
    consts: [[1, "pdf"], ["routerLink", "/form-receipt", "type", "submit", 1, "btn", "btn-primary"], [1, "fa-solid", "fa-download"]],
    template: function PdfComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Download File ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink],
    styles: ["\n\n.pdf[_ngcontent-%COMP%]{\n    margin-top: 50px;\n    height: 200px;\n  }\n  \n  .pdf[_ngcontent-%COMP%]{\n    padding: 20px;\n    margin-top: 50px;\n    border-radius: 10px;\n    margin-left: auto;\n    margin-right: auto;\n    background: rgba(255, 255, 255, 0.9);\n    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);\n    width: 100%;\n    z-index: 1;\n    background: url('bg7.avif') no-repeat center center;\n    background-size: cover;\n    position: relative;\n    background-position: center;\n  }\n  \n  .pdf[_ngcontent-%COMP%]::before {\n    content: '';\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background: rgba(0, 0, 0, 0.5);\n    \n\n    filter: blur(8px);\n    \n\n    z-index: -1;\n    \n\n  }\n\n\n  \n\n  .btn-primary[_ngcontent-%COMP%] {\n    width: 32%;\n    height: 50px;\n    margin-left: auto;\n    margin-right: auto;\n    margin-top: 50px;\n}\n\n\n\n.btn-primary[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    font-size: 22px; \n\n}\n\n\n@media only screen and (max-width: 575px) {\n.btn-primary[_ngcontent-%COMP%] {\n    width: 50%;\n}\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZm9ybTIvcGRmL3BkZi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGlDQUFpQztBQUNqQztJQUNJLGdCQUFnQjtJQUNoQixhQUFhO0VBQ2Y7O0VBRUE7SUFDRSxhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLG9DQUFvQztJQUNwQyx1Q0FBdUM7SUFDdkMsV0FBVztJQUNYLFVBQVU7SUFDVixtREFBMEU7SUFDMUUsc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQiwyQkFBMkI7RUFDN0I7O0VBRUE7SUFDRSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixPQUFPO0lBQ1AsV0FBVztJQUNYLFlBQVk7SUFDWiw4QkFBOEI7SUFDOUIsOEJBQThCO0lBQzlCLGlCQUFpQjtJQUNqQixtQ0FBbUM7SUFDbkMsV0FBVztJQUNYLHFDQUFxQztFQUN2Qzs7O0VBR0EsMkVBQTJFO0VBQzNFO0lBQ0UsVUFBVTtJQUNWLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtBQUNwQjs7OztBQUlBO0lBQ0ksZUFBZSxFQUFFLGNBQWM7QUFDbkM7OztBQUdBO0FBQ0E7SUFDSSxVQUFVO0FBQ2Q7QUFDQSIsInNvdXJjZXNDb250ZW50IjpbIi8qIHJvb20tc2VsZWN0aW9uLmNvbXBvbmVudC5jc3MgKi9cclxuLnBkZntcclxuICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gIH1cclxuICBcclxuICAucGRme1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOSk7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvYmc3LmF2aWYnKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgfVxyXG4gIFxyXG4gIC5wZGY6OmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41KTtcclxuICAgIC8qIERhcmsgb3ZlcmxheSB3aXRoIG9wYWNpdHkgKi9cclxuICAgIGZpbHRlcjogYmx1cig4cHgpO1xyXG4gICAgLyogQWRqdXN0IGJsdXIgc3RyZW5ndGggYXMgbmVlZGVkICovXHJcbiAgICB6LWluZGV4OiAtMTtcclxuICAgIC8qIFBsYWNlIG92ZXJsYXkgYmVoaW5kIHRoZSBjb250ZW50ICovXHJcbiAgfVxyXG5cclxuXHJcbiAgLyogQXNzdW1pbmcgeW91IGhhdmUgYSBzdHlsZXNoZWV0IGxpbmtlZCBvciBhIHN0eWxlcyBjb21wb25lbnQgaW4gQW5ndWxhciAqL1xyXG4gIC5idG4tcHJpbWFyeSB7XHJcbiAgICB3aWR0aDogMzIlO1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG59XHJcblxyXG5cclxuXHJcbi5idG4tcHJpbWFyeSBpIHtcclxuICAgIGZvbnQtc2l6ZTogMjJweDsgLyogSWNvbiBzaXplICovXHJcbn1cclxuXHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU3NXB4KSB7XHJcbi5idG4tcHJpbWFyeSB7XHJcbiAgICB3aWR0aDogNTAlO1xyXG59XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 73755:
/*!************************************************!*\
  !*** ./src/app/form2/rooms/rooms.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RoomsComponent: () => (/* binding */ RoomsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/checkbox */ 97024);





function RoomsComponent_div_7_option_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const option_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](option_r5);
  }
}
function RoomsComponent_div_7_div_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Number of adults is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function RoomsComponent_div_7_option_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const option_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](option_r6);
  }
}
function RoomsComponent_div_7_li_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li")(1, "mat-checkbox", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function RoomsComponent_div_7_li_28_Template_mat_checkbox_change_1_listener($event) {
      const interest_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7).$implicit;
      const i_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r9.updateRoomInterest(i_r9, interest_r8.id, $event.checked));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const interest_r8 = ctx.$implicit;
    const room_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", room_r4.additionalCharges[interest_r8.id]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", interest_r8.name, " (+", interest_r8.price, " $) ");
  }
}
function RoomsComponent_div_7_div_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div")(1, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RoomsComponent_div_7_div_29_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);
      const i_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r9.removeRoom(i_r9));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Remove Room");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
}
function RoomsComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17)(1, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 7)(4, "label", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Price per Room:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 20)(9, "div", 21)(10, "div", 22)(11, "div", 10)(12, "label", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Number of Adults:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "select", 24, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayListener"]("ngModelChange", function RoomsComponent_div_7_Template_select_ngModelChange_14_listener($event) {
      const room_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3).$implicit;
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayBindingSet"](room_r4.adults, $event) || (room_r4.adults = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, RoomsComponent_div_7_option_16_Template, 2, 2, "option", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, RoomsComponent_div_7_div_17_Template, 2, 0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 22)(19, "div", 10)(20, "label", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Number of Children:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "select", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayListener"]("ngModelChange", function RoomsComponent_div_7_Template_select_ngModelChange_22_listener($event) {
      const room_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3).$implicit;
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayBindingSet"](room_r4.children, $event) || (room_r4.children = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, RoomsComponent_div_7_option_23_Template, 2, 2, "option", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 10)(25, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "ul", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, RoomsComponent_div_7_li_28_Template, 3, 3, "li", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, RoomsComponent_div_7_div_29_Template, 3, 0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const room_r4 = ctx.$implicit;
    const i_r9 = ctx.index;
    const adults_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](15);
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Room ", i_r9 + 1, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](7, 22, ctx_r9.selectedPrice, "INR"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("for", "adults-", i_r9, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "adults-", i_r9, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("name", "adults-", i_r9, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayProperty"]("ngModel", room_r4.adults);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r9.adultsOptions);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", adults_r12.invalid && (adults_r12.dirty || adults_r12.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("for", "children-", i_r9, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "children-", i_r9, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("name", "children-", i_r9, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayProperty"]("ngModel", room_r4.children);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r9.childrenOptions);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Additional Charges for Room ", i_r9 + 1, ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r9.interests);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r9.rooms.length > 1);
  }
}
class RoomsComponent {
  constructor(router) {
    this.router = router;
    this.rooms = [];
    this.interests = [];
    this.selectedPrice = 2000; // Example default price per room
    this.totalPrice = 0;
    this.adultsOptions = [1, 2];
    this.childrenOptions = [0, 1, 2];
  }
  ngOnInit() {
    this.addRoom(); // Initialize with one room
    this.interests = [{
      id: 1,
      name: 'Breakfast',
      price: 500
    }, {
      id: 2,
      name: 'Parking',
      price: 300
    }, {
      id: 3,
      name: 'WiFi',
      price: 200
    }];
    this.calculateTotalPrice();
  }
  addRoom() {
    this.rooms.push({
      adults: 1,
      children: 0,
      additionalCharges: this.interests.reduce((acc, interest) => {
        acc[interest.id] = false;
        return acc;
      }, {})
    });
    this.calculateTotalPrice();
  }
  removeRoom(index) {
    this.rooms.splice(index, 1);
    this.calculateTotalPrice();
  }
  updateRoomInterest(roomIndex, interestId, isChecked) {
    this.rooms[roomIndex].additionalCharges[interestId] = isChecked;
    this.calculateTotalPrice();
  }
  calculateTotalPricePerRoom(room) {
    let additionalChargesTotal = 0;
    for (const interest of this.interests) {
      if (room.additionalCharges[interest.id]) {
        additionalChargesTotal += interest.price;
      }
    }
    return this.selectedPrice + additionalChargesTotal;
  }
  calculateTotalPrice() {
    this.totalPrice = this.rooms.reduce((total, room) => {
      return total + this.calculateTotalPricePerRoom(room);
    }, 0);
  }
  getMinimumRoomsRequired() {
    return 1; // Adjust based on your business logic
  }
  isFormValid() {
    // Add any additional form validation logic if needed
    return true;
  }
  submitRoomForm(form) {
    if (form.valid && this.isFormValid()) {
      console.log('Form Submitted!', this.rooms);
      this.router.navigate(['/form2/destination']);
    } else {
      console.log('Form is invalid or incomplete.');
      // Handle form submission logic here
    }
  }
  static #_ = this.ɵfac = function RoomsComponent_Factory(t) {
    return new (t || RoomsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: RoomsComponent,
    selectors: [["app-rooms"]],
    decls: 23,
    vars: 6,
    consts: [["roomForm", "ngForm"], ["adults", "ngModel"], [1, "rooms"], [1, "container"], [1, "room_text"], ["novalidate", "", 3, "ngSubmit"], ["class", "room-entry", 4, "ngFor", "ngForOf"], [1, "price-heading"], ["for", "totalPrice"], ["type", "text", "id", "totalPrice", "disabled", "", 1, "form-control", 3, "value"], [1, "form-group"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], [1, "submit"], [1, "left_btn"], ["routerLink", "/form2/hotel_list", 1, "btn", "btn-primary"], [1, "right_btn"], ["type", "submit", 1, "btn", "btn-success", 3, "disabled"], [1, "room-entry"], ["for", "price"], ["type", "text", "id", "price", "disabled", "", 1, "form-control", 3, "value"], [1, "add-persons"], [1, "row"], [1, "col-md-6", "col-12"], [3, "for"], ["required", "", 1, "form-control", 3, "ngModelChange", "id", "name", "ngModel"], [3, "value", 4, "ngFor", "ngForOf"], ["class", "text-danger", 4, "ngIf"], [1, "form-control", 3, "ngModelChange", "id", "name", "ngModel"], [1, "additional_services"], [4, "ngFor", "ngForOf"], [4, "ngIf"], [3, "value"], [1, "text-danger"], [3, "change", "checked"], ["type", "button", 1, "btn", "btn-danger", 3, "click"]],
    template: function RoomsComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 2)(1, "div", 3)(2, "div", 4)(3, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Add Rooms");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", 5, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function RoomsComponent_Template_form_ngSubmit_5_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
          const roomForm_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);
          return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.submitRoomForm(roomForm_r2));
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, RoomsComponent_div_7_Template, 30, 25, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7)(9, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Total Price:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 10)(14, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RoomsComponent_Template_button_click_14_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.addRoom());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Add Room");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 12)(17, "div", 13)(18, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Prev");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 15)(21, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()();
      }
      if (rf & 2) {
        const roomForm_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.rooms);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](12, 3, ctx.totalPrice, "INR"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", roomForm_r2.invalid || !ctx.isFormValid() || ctx.rooms.length < ctx.getMinimumRoomsRequired());
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgForm, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_4__.MatCheckbox, _angular_common__WEBPACK_IMPORTED_MODULE_2__.CurrencyPipe],
    styles: ["\n\n\nh1[_ngcontent-%COMP%] {\n  font-size: 90px;\n}\n\nh2[_ngcontent-%COMP%] {\n  font-size: 70px;\n}\n\nh3[_ngcontent-%COMP%] {\n  font-size: 60px;\n}\n\nh4[_ngcontent-%COMP%] {\n  font-size: 40px;\n  \n}\n\nh5[_ngcontent-%COMP%] {\n  font-size: 30px;\n  color: #208678;\n}\n\nh6[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n\np[_ngcontent-%COMP%] {\n  font-size: 24px;\n}\n\na[_ngcontent-%COMP%] {\n  font-size: 24px;\n}\nlabel[_ngcontent-%COMP%]{\n  font-size: 24px;\n}\n\n.form-control[_ngcontent-%COMP%] {\n  font-size: 24px;\n}\n\n.rooms[_ngcontent-%COMP%] {\n  padding: 20px;\n  margin-left: auto;\n  margin-right: auto;\n  width: 100%;\n}\n\n\n\n\nh2[_ngcontent-%COMP%] {\n  \n  text-align: center;\n  margin-bottom: 20px;\n  font-weight: 800;\n  color: #208678;\n}\n\n\n\nh4[_ngcontent-%COMP%] {\n  color: #208678;\n}\n\n\n\n.price-heading[_ngcontent-%COMP%] {\n  text-align: left;\n}\n\n.room[_ngcontent-%COMP%] {\n  margin-bottom: 30px;\n  padding: 15px;\n  border: 1px solid #ddd;\n  border-radius: 8px;\n  background-color: #fff;\n}\n\n.room-entry[_ngcontent-%COMP%] {\n  text-align: left;\n}\n\nli[_ngcontent-%COMP%] {\n  list-style: none;\n}\n\nul[_ngcontent-%COMP%] {\n  padding-left: 0;\n}\n\n.room[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n.form-group[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n  text-align: left;\n  margin-top: 15px;\n}\n\nlabel[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 20px;\n  margin-top: 10px;\n  font-size: 24px;\n  color: #208678;\n}\n\n\n.btn[_ngcontent-%COMP%] {\n  font-size: 24px;\n  width: 100%;\n  padding: 10px 40px;\n}\n\ninput[type=\"number\"][_ngcontent-%COMP%] {\n  width: 60px;\n  padding: 5px;\n  font-size: 16px;\n  border: 1px solid #ddd;\n  border-radius: 4px;\n}\n\n.btn-primary[_ngcontent-%COMP%] {\n  background-color: #007bff;\n  color: #fff;\n  border: none;\n  padding: 4px 20px;\n  font-size: 24px;\n  border-radius: 5px;\n}\n\n.btn-primary[_ngcontent-%COMP%]:hover {\n  background-color: #0056b3;\n}\n\n.btn-secondary[_ngcontent-%COMP%] {\n  background-color: #6c757d;\n  color: #fff;\n  border: none;\n  padding: 10px 20px;\n  font-size: 14px;\n  border-radius: 3px;\n}\n\n.btn-secondary[_ngcontent-%COMP%]:hover {\n  background-color: #5a6268;\n}\n.submit[_ngcontent-%COMP%] {\n  display: flex;\n  margin-top: 20px;\n}\n\n.right_btn[_ngcontent-%COMP%] {\n  margin-left: auto;\n}\n\nbutton.btn.btn-succes[_ngcontent-%COMP%] {\n  background-color: #208678;\n  color: white;\n}\n\nbutton.btn.btn-primary[_ngcontent-%COMP%] {\n  background-color: #4b4b4b;\n  border-color: #4b4b4b;\n  padding: 6px 24px\n}\n\nmat-checkbox[_ngcontent-%COMP%]{\n  color: #208678;\n  font-weight: 600;\n  font-size: 24px;\n}\n\n@media only screen and (max-width: 1199px) {\n  h1[_ngcontent-%COMP%] {\n    font-size: 57px;\n  }\n\n  h2[_ngcontent-%COMP%] {\n    font-size: 38px;\n  }\n\n  h3[_ngcontent-%COMP%] {\n    font-size: 35px;\n  }\n\n  h4[_ngcontent-%COMP%] {\n    font-size: 25px;\n  }\n\n  h5[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n\n  h6[_ngcontent-%COMP%] {\n    font-size: 18px;\n  }\n\n  p[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n\n  a[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n  .btn[_ngcontent-%COMP%] {\n    padding: 6px 24px;\n  }\n}\n\n\n@media only screen and (max-width: 991px) {\n  input[_ngcontent-%COMP%]{\n    font-size: 18px;\n  }\n  mat-checkbox[_ngcontent-%COMP%]{\n    font-size: 18px;\n  }\n  .btn[_ngcontent-%COMP%]{\n    font-size: 18px;\n  }\n}\n\n@media only screen and (max-width: 575px) {\n  h2[_ngcontent-%COMP%]{\n    font-size: 32px;\n  }\n  h4[_ngcontent-%COMP%]{\n    font-size: 25px;\n  }\n  label[_ngcontent-%COMP%]{\n    font-size: 18px;\n  }\n  p[_ngcontent-%COMP%]{\n    font-size: 18px;\n  }\n  .form-control[_ngcontent-%COMP%]{\n    font-size: 18px;\n  }\n\n  .btn[_ngcontent-%COMP%] {\n    font-size: 18px;\n  }\n  .room_text[_ngcontent-%COMP%]{\n    margin-top: 0px;\n  }\n  .form-group[_ngcontent-%COMP%]{\n    margin-bottom: 0;\n    margin-top: 0px;\n}\nh4[_ngcontent-%COMP%]{\n  margin-bottom: 0;\n}\n.form-group[_ngcontent-%COMP%]   button.btn.btn-primary[_ngcontent-%COMP%]{\n  margin-top: 10px;\n}\n.price-heading[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]\n{\n  margin-top: 0;\n  margin-bottom: 5px;\n}\ndl[_ngcontent-%COMP%], ol[_ngcontent-%COMP%], ul[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\nmat-checkbox[_ngcontent-%COMP%]{\n  font-size: 18px;\n}\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZm9ybTIvcm9vbXMvcm9vbXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxpQ0FBaUM7O0FBRWpDO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZUFBZTs7QUFFakI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixXQUFXO0FBQ2I7QUFDQSw4RUFBOEU7OztBQUc5RTs7RUFFRSxrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixjQUFjO0FBQ2hCOzs7O0FBSUE7RUFDRSxjQUFjO0FBQ2hCOzs7O0FBSUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsY0FBYztBQUNoQjs7O0FBR0E7RUFDRSxlQUFlO0VBQ2YsV0FBVztFQUNYLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osZUFBZTtFQUNmLHNCQUFzQjtFQUN0QixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsV0FBVztFQUNYLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2Ysa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixxQkFBcUI7RUFDckI7QUFDRjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFO0lBQ0UsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLGVBQWU7RUFDakI7RUFDQTtJQUNFLGlCQUFpQjtFQUNuQjtBQUNGOzs7QUFHQTtFQUNFO0lBQ0UsZUFBZTtFQUNqQjtFQUNBO0lBQ0UsZUFBZTtFQUNqQjtFQUNBO0lBQ0UsZUFBZTtFQUNqQjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxlQUFlO0VBQ2pCO0VBQ0E7SUFDRSxlQUFlO0VBQ2pCO0VBQ0E7SUFDRSxlQUFlO0VBQ2pCO0VBQ0E7SUFDRSxlQUFlO0VBQ2pCO0VBQ0E7SUFDRSxlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsZUFBZTtFQUNqQjtFQUNBO0lBQ0UsZUFBZTtFQUNqQjtFQUNBO0lBQ0UsZ0JBQWdCO0lBQ2hCLGVBQWU7QUFDbkI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7O0VBRUUsYUFBYTtFQUNiLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxlQUFlO0FBQ2pCO0FBQ0EiLCJzb3VyY2VzQ29udGVudCI6WyIvKiByb29tLXNlbGVjdGlvbi5jb21wb25lbnQuY3NzICovXHJcblxyXG5oMSB7XHJcbiAgZm9udC1zaXplOiA5MHB4O1xyXG59XHJcblxyXG5oMiB7XHJcbiAgZm9udC1zaXplOiA3MHB4O1xyXG59XHJcblxyXG5oMyB7XHJcbiAgZm9udC1zaXplOiA2MHB4O1xyXG59XHJcblxyXG5oNCB7XHJcbiAgZm9udC1zaXplOiA0MHB4O1xyXG4gIFxyXG59XHJcblxyXG5oNSB7XHJcbiAgZm9udC1zaXplOiAzMHB4O1xyXG4gIGNvbG9yOiAjMjA4Njc4O1xyXG59XHJcblxyXG5oNiB7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG59XHJcblxyXG5wIHtcclxuICBmb250LXNpemU6IDI0cHg7XHJcbn1cclxuXHJcbmEge1xyXG4gIGZvbnQtc2l6ZTogMjRweDtcclxufVxyXG5sYWJlbHtcclxuICBmb250LXNpemU6IDI0cHg7XHJcbn1cclxuXHJcbi5mb3JtLWNvbnRyb2wge1xyXG4gIGZvbnQtc2l6ZTogMjRweDtcclxufVxyXG5cclxuLnJvb21zIHtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gIG1hcmdpbi1yaWdodDogYXV0bztcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG4vKiBZb3UgY2FuIGFkZCBnbG9iYWwgc3R5bGVzIHRvIHRoaXMgZmlsZSwgYW5kIGFsc28gaW1wb3J0IG90aGVyIHN0eWxlIGZpbGVzICovXHJcblxyXG5cclxuaDIge1xyXG4gIFxyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgY29sb3I6ICMyMDg2Nzg7XHJcbn1cclxuXHJcblxyXG5cclxuaDQge1xyXG4gIGNvbG9yOiAjMjA4Njc4O1xyXG59XHJcblxyXG5cclxuXHJcbi5wcmljZS1oZWFkaW5nIHtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcblxyXG4ucm9vbSB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuICBwYWRkaW5nOiAxNXB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbi5yb29tLWVudHJ5IHtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcblxyXG5saSB7XHJcbiAgbGlzdC1zdHlsZTogbm9uZTtcclxufVxyXG5cclxudWwge1xyXG4gIHBhZGRpbmctbGVmdDogMDtcclxufVxyXG5cclxuLnJvb20gaDMge1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuLmZvcm0tZ3JvdXAge1xyXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBtYXJnaW4tdG9wOiAxNXB4O1xyXG59XHJcblxyXG5sYWJlbCB7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgZm9udC1zaXplOiAyNHB4O1xyXG4gIGNvbG9yOiAjMjA4Njc4O1xyXG59XHJcblxyXG5cclxuLmJ0biB7XHJcbiAgZm9udC1zaXplOiAyNHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmc6IDEwcHggNDBweDtcclxufVxyXG5cclxuaW5wdXRbdHlwZT1cIm51bWJlclwiXSB7XHJcbiAgd2lkdGg6IDYwcHg7XHJcbiAgcGFkZGluZzogNXB4O1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxufVxyXG5cclxuLmJ0bi1wcmltYXJ5IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3YmZmO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBwYWRkaW5nOiA0cHggMjBweDtcclxuICBmb250LXNpemU6IDI0cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG59XHJcblxyXG4uYnRuLXByaW1hcnk6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDU2YjM7XHJcbn1cclxuXHJcbi5idG4tc2Vjb25kYXJ5IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNmM3NTdkO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBwYWRkaW5nOiAxMHB4IDIwcHg7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcclxufVxyXG5cclxuLmJ0bi1zZWNvbmRhcnk6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM1YTYyNjg7XHJcbn1cclxuLnN1Ym1pdCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG59XHJcblxyXG4ucmlnaHRfYnRuIHtcclxuICBtYXJnaW4tbGVmdDogYXV0bztcclxufVxyXG5cclxuYnV0dG9uLmJ0bi5idG4tc3VjY2VzIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjA4Njc4O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuYnV0dG9uLmJ0bi5idG4tcHJpbWFyeSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRiNGI0YjtcclxuICBib3JkZXItY29sb3I6ICM0YjRiNGI7XHJcbiAgcGFkZGluZzogNnB4IDI0cHhcclxufVxyXG5cclxubWF0LWNoZWNrYm94e1xyXG4gIGNvbG9yOiAjMjA4Njc4O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgZm9udC1zaXplOiAyNHB4O1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDExOTlweCkge1xyXG4gIGgxIHtcclxuICAgIGZvbnQtc2l6ZTogNTdweDtcclxuICB9XHJcblxyXG4gIGgyIHtcclxuICAgIGZvbnQtc2l6ZTogMzhweDtcclxuICB9XHJcblxyXG4gIGgzIHtcclxuICAgIGZvbnQtc2l6ZTogMzVweDtcclxuICB9XHJcblxyXG4gIGg0IHtcclxuICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICB9XHJcblxyXG4gIGg1IHtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICB9XHJcblxyXG4gIGg2IHtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICB9XHJcblxyXG4gIHAge1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gIH1cclxuXHJcbiAgYSB7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgfVxyXG4gIC5idG4ge1xyXG4gICAgcGFkZGluZzogNnB4IDI0cHg7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTFweCkge1xyXG4gIGlucHV0e1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gIH1cclxuICBtYXQtY2hlY2tib3h7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgfVxyXG4gIC5idG57XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU3NXB4KSB7XHJcbiAgaDJ7XHJcbiAgICBmb250LXNpemU6IDMycHg7XHJcbiAgfVxyXG4gIGg0e1xyXG4gICAgZm9udC1zaXplOiAyNXB4O1xyXG4gIH1cclxuICBsYWJlbHtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICB9XHJcbiAgcHtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICB9XHJcbiAgLmZvcm0tY29udHJvbHtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICB9XHJcblxyXG4gIC5idG4ge1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gIH1cclxuICAucm9vbV90ZXh0e1xyXG4gICAgbWFyZ2luLXRvcDogMHB4O1xyXG4gIH1cclxuICAuZm9ybS1ncm91cHtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbn1cclxuaDR7XHJcbiAgbWFyZ2luLWJvdHRvbTogMDtcclxufVxyXG4uZm9ybS1ncm91cCBidXR0b24uYnRuLmJ0bi1wcmltYXJ5e1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbn1cclxuLnByaWNlLWhlYWRpbmcgbGFiZWxcclxue1xyXG4gIG1hcmdpbi10b3A6IDA7XHJcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG59XHJcbmRsLCBvbCwgdWwge1xyXG4gIG1hcmdpbi1ib3R0b206IDA7XHJcbn1cclxubWF0LWNoZWNrYm94e1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxufVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 57992:
/*!**********************************************!*\
  !*** ./src/app/gallery/gallery.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GalleryComponent: () => (/* binding */ GalleryComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37580);

class GalleryComponent {
  static #_ = this.ɵfac = function GalleryComponent_Factory(t) {
    return new (t || GalleryComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: GalleryComponent,
    selectors: [["app-gallery"]],
    decls: 2,
    vars: 0,
    template: function GalleryComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "gallery works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    },
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 72844:
/*!******************************************!*\
  !*** ./src/app/graph/graph.component.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GraphComponent: () => (/* binding */ GraphComponent)
/* harmony export */ });
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! chart.js */ 36792);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);


chart_js__WEBPACK_IMPORTED_MODULE_0__.Chart.register(...chart_js__WEBPACK_IMPORTED_MODULE_0__.registerables);
class GraphComponent {
  constructor() {}
  ngOnInit() {
    this.RenderChart();
  }
  RenderChart() {
    new chart_js__WEBPACK_IMPORTED_MODULE_0__.Chart("barchart", {
      type: 'line',
      data: {
        labels: ['shimla', 'Amritsar', 'Himachal', 'Mumbai', 'Goa', 'Delhi'],
        datasets: [{
          label: 'Booking This Year',
          data: [65, 59, 80, 81, 56, 55, 40],
          backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(255, 159, 64, 0.2)', 'rgba(255, 205, 86, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(153, 102, 255, 0.2)', 'rgba(201, 203, 207, 0.2)'],
          borderColor: ['rgb(255, 99, 132)', 'rgb(255, 159, 64)', 'rgb(255, 205, 86)', 'rgb(75, 192, 192)', 'rgb(54, 162, 235)', 'rgb(153, 102, 255)', 'rgb(201, 203, 207)'],
          borderWidth: 2,
          pointRadius: 18
        }]
      },
      options: {
        plugins: {
          legend: {
            labels: {
              font: {
                weight: 'bold'
              },
              color: 'black' // Set legend label text color to black
            }
          }
        },
        scales: {
          x: {
            ticks: {
              color: 'black' // Set x-axis tick labels color to black
            }
          },
          y: {
            ticks: {
              color: 'black' // Set y-axis tick labels color to black
            }
          }
        }
      }
    });
  }
  static #_ = this.ɵfac = function GraphComponent_Factory(t) {
    return new (t || GraphComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: GraphComponent,
    selectors: [["app-graph"]],
    decls: 3,
    vars: 0,
    consts: [[1, "graph"], [1, "container"], ["id", "barchart"]],
    template: function GraphComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "canvas", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      }
    },
    styles: [".graph[_ngcontent-%COMP%]{\n    width: 100%;\n    margin-top: 20px;\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZ3JhcGgvZ3JhcGguY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7SUFDWCxnQkFBZ0I7QUFDcEIiLCJzb3VyY2VzQ29udGVudCI6WyIuZ3JhcGh7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 42152:
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HeaderComponent: () => (/* binding */ HeaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 51567);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _headerservices_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../headerservices.service */ 36552);
/* harmony import */ var angular_dark_mode__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-dark-mode */ 30027);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 60316);







function HeaderComponent_header_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "header")(1, "nav", 1)(2, "div", 2)(3, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "img", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 7)(8, "ul", 8)(9, "li", 9)(10, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HeaderComponent_header_0_Template_a_click_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.closeNavbar());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Home");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "li", 9)(13, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HeaderComponent_header_0_Template_a_click_13_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.closeNavbar());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "About Us");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "li", 9)(16, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HeaderComponent_header_0_Template_a_click_16_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.closeNavbar());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Booking");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "li", 9)(19, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HeaderComponent_header_0_Template_a_click_19_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.closeNavbar());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Graph");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "li", 9)(22, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HeaderComponent_header_0_Template_a_click_22_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.closeNavbar());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Text Editor");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "li", 9)(25, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HeaderComponent_header_0_Template_button_click_25_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.closeNavbar());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "li", 9)(28, "input", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](29, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function HeaderComponent_header_0_Template_input_change_28_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.onToggle());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "label", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](31, "img", 18)(32, "img", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("checked", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](29, 1, ctx_r1.darkMode$));
  }
}
class HeaderComponent {
  constructor(router, headerservicesService, el, darkModeService, renderer) {
    this.router = router;
    this.headerservicesService = headerservicesService;
    this.el = el;
    this.darkModeService = darkModeService;
    this.renderer = renderer;
    this.showHeader = true;
    this.darkMode$ = this.darkModeService.darkMode$;
    this.hideRoutes = ['/booking-form', '/form2', "/login", "/signin", "/graph", "/texteditor", '/form2/destination', '/form2/hotel_list', '/form2/hotel_list2', '/form2/hotel_list3', '/form2/hotel_list4', '/form2/hotel_list5', '/form-receipt', '/form2/date', '/form2/rooms', '/form2/peoples', '/form2/payment', '/form2/pdf', "/successful"];
  }
  ngOnInit() {
    // Subscribe to header visibility changes from the service
    this.headerservicesService.showHeader$.subscribe(show => {
      this.showHeader = show;
    });
    // Subscribe to router events to hide/show header based on the route
    this.router.events.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.filter)(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__.NavigationEnd)).subscribe(() => {
      const currentRoute = this.router.url;
      if (this.hideRoutes.includes(currentRoute)) {
        this.headerservicesService.hideHeader();
      } else {
        this.headerservicesService.showHeader();
      }
    });
  }
  closeNavbar() {
    const navbar = this.el.nativeElement.querySelector('#navbarSupportedContent');
    if (navbar) {
      this.renderer.setAttribute(navbar, 'class', 'collapse navbar-collapse');
    }
  }
  onToggle() {
    this.darkModeService.toggle();
  }
  static #_ = this.ɵfac = function HeaderComponent_Factory(t) {
    return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_headerservices_service__WEBPACK_IMPORTED_MODULE_0__.HeaderservicesService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](angular_dark_mode__WEBPACK_IMPORTED_MODULE_4__.DarkModeService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.Renderer2));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: HeaderComponent,
    selectors: [["app-header"]],
    decls: 1,
    vars: 1,
    consts: [[4, "ngIf"], [1, "navbar", "navbar-expand-lg", "sticky"], [1, "container"], [1, "navbar-brand"], ["src", "./assets/images/nav_img.png", "alt", "Logo"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#navbarSupportedContent", "aria-controls", "navbarSupportedContent", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse"], [1, "navbar-nav"], [1, "nav-item"], ["routerLink", "/home", "routerLinkActive", "active", 1, "nav-link", 3, "click"], ["routerLink", "/about", "routerLinkActive", "active", 1, "nav-link", 3, "click"], ["routerLink", "/form2", "routerLinkActive", "active", 1, "nav-link", 3, "click"], ["routerLink", "/graph", "routerLinkActive", "active", 1, "nav-link", 3, "click"], ["routerLink", "/texteditor", "routerLinkActive", "active", 1, "nav-link", 3, "click"], ["type", "button", "routerLink", "/login", "routerLinkActive", "active", 1, "btn", "btn-dark", 3, "click"], ["id", "darkMode", "type", "checkbox", 1, "toggle", 3, "change", "checked"], ["for", "darkMode", 1, "toggle-label"], ["src", "https://raw.githubusercontent.com/talohana/angular-dark-mode/master/src/assets/moon.svg", 1, "moon"], ["src", "https://raw.githubusercontent.com/talohana/angular-dark-mode/master/src/assets/sun.svg", 1, "sun"]],
    template: function HeaderComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, HeaderComponent_header_0_Template, 33, 3, "header", 0);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showHeader);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkActive, _angular_common__WEBPACK_IMPORTED_MODULE_5__.AsyncPipe],
    styles: ["\n\nh2[_ngcontent-%COMP%] {\n    font-weight: 600;\n}\n\nh3[_ngcontent-%COMP%] {\n    color: #208678;\n    font-weight: bold;\n}\na[_ngcontent-%COMP%]{\n    font-size: 20px;\n}\n.btn[_ngcontent-%COMP%]{\n    font-size: 20px;\n}\nheader[_ngcontent-%COMP%] {\n    background-color: #f3fcfb;\n}\n.btn-check[_ngcontent-%COMP%]:checked + .btn[_ngcontent-%COMP%], .btn.active[_ngcontent-%COMP%], .btn.show[_ngcontent-%COMP%], .btn[_ngcontent-%COMP%]:first-child:active, [_ngcontent-%COMP%]:not(.btn-check) + .btn[_ngcontent-%COMP%]:active {\n    color: var(--bs-btn-active-color);\n     background-color: black; \n    border-color: var(--bs-btn-active-border-color);\n}\nbutton.btn.btn-dark[_ngcontent-%COMP%] {\n    margin-top: 3px;\n    margin-right: 10px;\n}\n\n.navbar[_ngcontent-%COMP%] {\n    height:80px;\n    width: 100%;\n}\n.navbar-brand[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\n    height: 26px;\n}\n\n.navbar-nav[_ngcontent-%COMP%] {\n    margin-left: auto;\n}\n\n.sticky[_ngcontent-%COMP%] {\n    position: fixed;\n    width: 100%;\n    top: 0;\n    left: 0;\n    z-index: 99;\n    box-shadow: 0 3px 15px rgb(0 0 0 / 6%);\n}\n\n.nav-item[_ngcontent-%COMP%] {\n    padding-right: 15px;\n}\n\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%]:after {\n    width: 100%;\n}\n\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]:after {\n    content: '';\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    width: 0;\n    height: 1px;\n    transition: .2s all;\n}\n\n\n\n\n\n\n\n\n\n\na.nav-link[_ngcontent-%COMP%] {\n    position: relative;\n}\n\n.hidden[_ngcontent-%COMP%] {\n    display: none;\n}\n\n\n.toggle[_ngcontent-%COMP%] {\n    display: none;\n  }\n  \n  .toggle-label[_ngcontent-%COMP%] {\n    position: relative;\n    display: inline-block;\n    width: 3rem;\n    height: 3rem;\n    overflow: hidden;\n    cursor: pointer;\n  }\n  \n  .sun[_ngcontent-%COMP%], \n   .moon[_ngcontent-%COMP%] {\n    position: absolute;\n    left: 0;\n    width: 100%;\n    height: auto;\n    transition: top 0.3s;\n    -webkit-user-select: none;\n            user-select: none;\n  }\n  \n  .sun[_ngcontent-%COMP%] {\n    top: 0;\n  }\n  \n  .moon[_ngcontent-%COMP%] {\n    top: -150%;\n  }\n  \n  .toggle[_ngcontent-%COMP%]:checked    + .toggle-label[_ngcontent-%COMP%]   .sun[_ngcontent-%COMP%] {\n    top: 150%;\n  }\n  \n  .toggle[_ngcontent-%COMP%]:checked    + .toggle-label[_ngcontent-%COMP%]   .moon[_ngcontent-%COMP%] {\n    top: 0;\n  }\n\n  \nbutton.navbar-toggler[_ngcontent-%COMP%] {\n    border: none;\n  }\n  \n\n\n@media only screen and (min-width: 1441px) {}\n\n@media only screen and (max-width: 1199px) {\n    a[_ngcontent-%COMP%]{\n        font-size: 18px;\n    }\n    .navbar-brand[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n        height: 23px;\n    }\n    .nav-item[_ngcontent-%COMP%] {\n        padding-right: 5px;\n    }\n    .btn[_ngcontent-%COMP%] {\n        padding: 5px 20px;\n        margin-top: 5px;\n        font-size: 18px;\n    }\n    .navbar-toggler[_ngcontent-%COMP%]:focus {\n        text-decoration: none;\n        outline: 0;\n        box-shadow: none;\n    }\n    \n\n\n\n\n\n\n   \n    .sun[_ngcontent-%COMP%], .moon[_ngcontent-%COMP%]{\n        width: 80%;\n        margin-left: 10px;\n    }\n}\n\n@media only screen and (max-width: 991px) {\n    .navbar[_ngcontent-%COMP%] {\n        height: 65px;\n    }\n    .navbar-brand[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n        height: 21px;\n    }\n    .navbar-brand[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n        height: 16px;\n    }\n    [type=button][_ngcontent-%COMP%]:not(:disabled), [type=reset][_ngcontent-%COMP%]:not(:disabled), [type=submit][_ngcontent-%COMP%]:not(:disabled), button[_ngcontent-%COMP%]:not(:disabled) {\n        cursor: pointer;\n        font-size: 15px;\n        border: none;\n    }\n    .navbar[_ngcontent-%COMP%] {\n        height: 60px;\n    }\n    .navbar-nav[_ngcontent-%COMP%] {\n        flex-direction: row;\n        \n\n        margin-top: 26px;\n        padding: 20px;\n        justify-content: space-between;\n    }\n}\n\n@media only screen and (max-width: 767px) {\n}\n\n@media only screen and (max-width: 575px) {\n    .navbar-nav[_ngcontent-%COMP%] {\n        justify-content: space-between;\n        font-size: 12px;\n    }\n    .btn[_ngcontent-%COMP%] {\n        padding: 5px 12px;\n        margin-left: 0;\n    }\n    [type=button][_ngcontent-%COMP%]:not(:disabled), [type=reset][_ngcontent-%COMP%]:not(:disabled), [type=submit][_ngcontent-%COMP%]:not(:disabled), button[_ngcontent-%COMP%]:not(:disabled) {\n        font-size: 12px;\n    }\n    .navbar-nav[_ngcontent-%COMP%] {\n        flex-direction: column;\n    }\n    ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%]:after {\n        width: 11%;\n    }\n    .sun[_ngcontent-%COMP%], .moon[_ngcontent-%COMP%] {\n        width: 80%;\n        margin-left: 0;\n        margin-top: 10px;\n    }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFdBQVc7QUFDWDtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxpQkFBaUI7QUFDckI7QUFDQTtJQUNJLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGVBQWU7QUFDbkI7QUFDQTtJQUNJLHlCQUF5QjtBQUM3QjtBQUNBO0lBQ0ksaUNBQWlDO0tBQ2hDLHVCQUF1QjtJQUN4QiwrQ0FBK0M7QUFDbkQ7QUFDQTtJQUNJLGVBQWU7SUFDZixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsV0FBVztBQUNmO0FBQ0E7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLFdBQVc7SUFDWCxNQUFNO0lBQ04sT0FBTztJQUNQLFdBQVc7SUFDWCxzQ0FBc0M7QUFDMUM7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxPQUFPO0lBQ1AsUUFBUTtJQUNSLFdBQVc7SUFDWCxtQkFBbUI7QUFDdkI7O0FBRUE7Ozs7O29CQUtvQjs7O0FBR3BCO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjtBQUNBLFdBQVc7QUFDWDtJQUNJLGFBQWE7RUFDZjs7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsV0FBVztJQUNYLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsZUFBZTtFQUNqQjs7RUFFQTs7SUFFRSxrQkFBa0I7SUFDbEIsT0FBTztJQUNQLFdBQVc7SUFDWCxZQUFZO0lBQ1osb0JBQW9CO0lBQ3BCLHlCQUFpQjtZQUFqQixpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxNQUFNO0VBQ1I7O0VBRUE7SUFDRSxVQUFVO0VBQ1o7O0VBRUE7SUFDRSxTQUFTO0VBQ1g7O0VBRUE7SUFDRSxNQUFNO0VBQ1I7QUFDRixXQUFXO0FBQ1g7SUFDSSxZQUFZO0VBQ2Q7Ozs7QUFJRiw0Q0FBNEM7O0FBRTVDO0lBQ0k7UUFDSSxlQUFlO0lBQ25CO0lBQ0E7UUFDSSxZQUFZO0lBQ2hCO0lBQ0E7UUFDSSxrQkFBa0I7SUFDdEI7SUFDQTtRQUNJLGlCQUFpQjtRQUNqQixlQUFlO1FBQ2YsZUFBZTtJQUNuQjtJQUNBO1FBQ0kscUJBQXFCO1FBQ3JCLFVBQVU7UUFDVixnQkFBZ0I7SUFDcEI7SUFDQTs7Ozs7T0FLRzs7SUFFSDtRQUNJLFVBQVU7UUFDVixpQkFBaUI7SUFDckI7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksWUFBWTtJQUNoQjtJQUNBO1FBQ0ksWUFBWTtJQUNoQjtJQUNBO1FBQ0ksWUFBWTtJQUNoQjtJQUNBO1FBQ0ksZUFBZTtRQUNmLGVBQWU7UUFDZixZQUFZO0lBQ2hCO0lBQ0E7UUFDSSxZQUFZO0lBQ2hCO0lBQ0E7UUFDSSxtQkFBbUI7UUFDbkIsNkJBQTZCO1FBQzdCLGdCQUFnQjtRQUNoQixhQUFhO1FBQ2IsOEJBQThCO0lBQ2xDO0FBQ0o7O0FBRUE7QUFDQTs7QUFFQTtJQUNJO1FBQ0ksOEJBQThCO1FBQzlCLGVBQWU7SUFDbkI7SUFDQTtRQUNJLGlCQUFpQjtRQUNqQixjQUFjO0lBQ2xCO0lBQ0E7UUFDSSxlQUFlO0lBQ25CO0lBQ0E7UUFDSSxzQkFBc0I7SUFDMUI7SUFDQTtRQUNJLFVBQVU7SUFDZDtJQUNBO1FBQ0ksVUFBVTtRQUNWLGNBQWM7UUFDZCxnQkFBZ0I7SUFDcEI7QUFDSiIsInNvdXJjZXNDb250ZW50IjpbIi8qIGhlYWRlciAqL1xyXG5oMiB7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcblxyXG5oMyB7XHJcbiAgICBjb2xvcjogIzIwODY3ODtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcbmF7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbn1cclxuLmJ0bntcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG5oZWFkZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YzZmNmYjtcclxufVxyXG4uYnRuLWNoZWNrOmNoZWNrZWQrLmJ0biwgLmJ0bi5hY3RpdmUsIC5idG4uc2hvdywgLmJ0bjpmaXJzdC1jaGlsZDphY3RpdmUsIDpub3QoLmJ0bi1jaGVjaykrLmJ0bjphY3RpdmUge1xyXG4gICAgY29sb3I6IHZhcigtLWJzLWJ0bi1hY3RpdmUtY29sb3IpO1xyXG4gICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrOyBcclxuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tYnMtYnRuLWFjdGl2ZS1ib3JkZXItY29sb3IpO1xyXG59XHJcbmJ1dHRvbi5idG4uYnRuLWRhcmsge1xyXG4gICAgbWFyZ2luLXRvcDogM3B4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG59XHJcblxyXG4ubmF2YmFyIHtcclxuICAgIGhlaWdodDo4MHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLm5hdmJhci1icmFuZCBpbWd7XHJcbiAgICBoZWlnaHQ6IDI2cHg7XHJcbn1cclxuXHJcbi5uYXZiYXItbmF2IHtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG59XHJcblxyXG4uc3RpY2t5IHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHotaW5kZXg6IDk5O1xyXG4gICAgYm94LXNoYWRvdzogMCAzcHggMTVweCByZ2IoMCAwIDAgLyA2JSk7XHJcbn1cclxuXHJcbi5uYXYtaXRlbSB7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xyXG59XHJcblxyXG51bCBsaSAubmF2LWxpbmsuYWN0aXZlOmFmdGVyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG51bCBsaSAubmF2LWxpbms6YWZ0ZXIge1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgd2lkdGg6IDA7XHJcbiAgICBoZWlnaHQ6IDFweDtcclxuICAgIHRyYW5zaXRpb246IC4ycyBhbGw7XHJcbn1cclxuXHJcbi8qIGEubmF2LWxpbmtcclxuIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAgIHBhZGRpbmc6IDlweCAyMHB4O1xyXG4gICAgICAgY29sb3I6IGJsYWNrO1xyXG4gIH0gcmVzcG9uc2l2ZSA0MjUgKi9cclxuXHJcblxyXG5hLm5hdi1saW5rIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLmhpZGRlbiB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcbi8qIHRvZ2dsZSAqL1xyXG4udG9nZ2xlIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG4gIFxyXG4gIC50b2dnbGUtbGFiZWwge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgd2lkdGg6IDNyZW07XHJcbiAgICBoZWlnaHQ6IDNyZW07XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxuICBcclxuICAuc3VuLFxyXG4gIC5tb29uIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIHRyYW5zaXRpb246IHRvcCAwLjNzO1xyXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgfVxyXG4gIFxyXG4gIC5zdW4ge1xyXG4gICAgdG9wOiAwO1xyXG4gIH1cclxuICBcclxuICAubW9vbiB7XHJcbiAgICB0b3A6IC0xNTAlO1xyXG4gIH1cclxuICBcclxuICAudG9nZ2xlOmNoZWNrZWQgKyAudG9nZ2xlLWxhYmVsIC5zdW4ge1xyXG4gICAgdG9wOiAxNTAlO1xyXG4gIH1cclxuICBcclxuICAudG9nZ2xlOmNoZWNrZWQgKyAudG9nZ2xlLWxhYmVsIC5tb29uIHtcclxuICAgIHRvcDogMDtcclxuICB9XHJcbi8qIHRvb2dsZSAqLyAgXHJcbmJ1dHRvbi5uYXZiYXItdG9nZ2xlciB7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgfVxyXG4gIFxyXG5cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTQ0MXB4KSB7fVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMTk5cHgpIHtcclxuICAgIGF7XHJcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgfVxyXG4gICAgLm5hdmJhci1icmFuZCBpbWcge1xyXG4gICAgICAgIGhlaWdodDogMjNweDtcclxuICAgIH1cclxuICAgIC5uYXYtaXRlbSB7XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogNXB4O1xyXG4gICAgfVxyXG4gICAgLmJ0biB7XHJcbiAgICAgICAgcGFkZGluZzogNXB4IDIwcHg7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIH1cclxuICAgIC5uYXZiYXItdG9nZ2xlcjpmb2N1cyB7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgIG91dGxpbmU6IDA7XHJcbiAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgIH1cclxuICAgIC8qIGEubmF2LWxpbmsge1xyXG4gICAgICAgIGNvbG9yOiBibGFjaztcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAgICAgd2lkdGg6IDQwJTtcclxuICAgIH0gKi9cclxuICAgXHJcbiAgICAuc3VuLCAubW9vbntcclxuICAgICAgICB3aWR0aDogODAlO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MXB4KSB7XHJcbiAgICAubmF2YmFyIHtcclxuICAgICAgICBoZWlnaHQ6IDY1cHg7XHJcbiAgICB9XHJcbiAgICAubmF2YmFyLWJyYW5kIGltZyB7XHJcbiAgICAgICAgaGVpZ2h0OiAyMXB4O1xyXG4gICAgfVxyXG4gICAgLm5hdmJhci1icmFuZCBpbWcge1xyXG4gICAgICAgIGhlaWdodDogMTZweDtcclxuICAgIH1cclxuICAgIFt0eXBlPWJ1dHRvbl06bm90KDpkaXNhYmxlZCksIFt0eXBlPXJlc2V0XTpub3QoOmRpc2FibGVkKSwgW3R5cGU9c3VibWl0XTpub3QoOmRpc2FibGVkKSwgYnV0dG9uOm5vdCg6ZGlzYWJsZWQpIHtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgIH1cclxuICAgIC5uYXZiYXIge1xyXG4gICAgICAgIGhlaWdodDogNjBweDtcclxuICAgIH1cclxuICAgIC5uYXZiYXItbmF2IHtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgIC8qIGJhY2tncm91bmQtY29sb3I6IHdoaXRlOyAqL1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDI2cHg7XHJcbiAgICAgICAgcGFkZGluZzogMjBweDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NzVweCkge1xyXG4gICAgLm5hdmJhci1uYXYge1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICB9XHJcbiAgICAuYnRuIHtcclxuICAgICAgICBwYWRkaW5nOiA1cHggMTJweDtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMDtcclxuICAgIH1cclxuICAgIFt0eXBlPWJ1dHRvbl06bm90KDpkaXNhYmxlZCksIFt0eXBlPXJlc2V0XTpub3QoOmRpc2FibGVkKSwgW3R5cGU9c3VibWl0XTpub3QoOmRpc2FibGVkKSwgYnV0dG9uOm5vdCg6ZGlzYWJsZWQpIHtcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICB9XHJcbiAgICAubmF2YmFyLW5hdiB7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIH1cclxuICAgIHVsIGxpIC5uYXYtbGluay5hY3RpdmU6YWZ0ZXIge1xyXG4gICAgICAgIHdpZHRoOiAxMSU7XHJcbiAgICB9XHJcbiAgICAuc3VuLCAubW9vbiB7XHJcbiAgICAgICAgd2lkdGg6IDgwJTtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 36552:
/*!*******************************************!*\
  !*** ./src/app/headerservices.service.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HeaderservicesService: () => (/* binding */ HeaderservicesService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 75797);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);


class HeaderservicesService {
  constructor() {
    this.showHeaderSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(true);
    this.showHeader$ = this.showHeaderSubject.asObservable();
  }
  // Method to hide the header
  hideHeader() {
    this.showHeaderSubject.next(false);
  }
  // Method to show the header
  showHeader() {
    this.showHeaderSubject.next(true);
  }
  static #_ = this.ɵfac = function HeaderservicesService_Factory(t) {
    return new (t || HeaderservicesService)();
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: HeaderservicesService,
    factory: HeaderservicesService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 27824:
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HomeComponent: () => (/* binding */ HomeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 34456);


const _c0 = ["carousel1"];
const _c1 = ["carousel2"];
const _c2 = ["carousel3"];
class HomeComponent {
  ngAfterViewInit() {
    if (this.carousel1) {
      $(this.carousel1.nativeElement).owlCarousel({
        items: 1,
        loop: true,
        center: true,
        freeDrag: false,
        startPosition: 0,
        autoplay: true,
        autoplayTimeout: 9000,
        smartSpeed: 1000,
        autoplayHoverPause: true,
        autoWidth: false,
        margin: 20,
        responsive: {
          0: {
            items: 1
          },
          600: {
            items: 2
          },
          1000: {
            items: 3
          }
        }
      });
      // Custom navigation buttons
      $('.owl-prev').click(function () {
        $('.owl-carousel').trigger('prev.owl.carousel');
      });
      $('.owl-next').click(function () {
        $('.owl-carousel').trigger('next.owl.carousel');
      });
    }
    if (this.carousel2) {
      $(this.carousel2.nativeElement).owlCarousel({
        items: 1,
        loop: true,
        center: true,
        freeDrag: false,
        startPosition: 0,
        autoplay: true,
        autoplayTimeout: 9000,
        smartSpeed: 1000,
        autoplayHoverPause: true,
        autoWidth: false,
        margin: 20,
        responsive: {
          0: {
            items: 1
          },
          600: {
            items: 2
          },
          1000: {
            items: 3
          }
        }
      });
      // Custom navigation buttons
      $('.owl-prev').click(function () {
        $('.owl-carousel').trigger('prev.owl.carousel');
      });
      $('.owl-next').click(function () {
        $('.owl-carousel').trigger('next.owl.carousel');
      });
    }
    {
      if (this.carousel3) {
        $(this.carousel3.nativeElement).owlCarousel({
          items: 1,
          loop: true,
          margin: 20,
          nav: false,
          dots: true,
          // Enable dots navigation
          autoplay: true,
          autoplayTimeout: 5000,
          autoplayHoverPause: true,
          responsive: {
            0: {
              items: 1
            },
            600: {
              items: 2
            },
            1000: {
              items: 2
            }
          }
        });
      }
    }
  }
  static #_ = this.ɵfac = function HomeComponent_Factory(t) {
    return new (t || HomeComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: HomeComponent,
    selectors: [["app-home"]],
    viewQuery: function HomeComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c2, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.carousel1 = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.carousel2 = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.carousel3 = _t.first);
      }
    },
    decls: 237,
    vars: 0,
    consts: [["carousel1", ""], ["carousel2", ""], ["carousel3", ""], [1, "grid", "py"], [1, "container"], [1, "row"], [1, "col-12", "col-md-12", "col-lg-6"], [1, "card"], [1, "card-body"], [1, "card-title"], [1, "card-text"], [1, "btn", "btn-success"], [1, "fa-solid", "fa-arrow-right-long"], [1, "grid_serv"], [1, "col-12", "col-md-4"], [1, "grid_text"], ["src", "./assets/images/quality.svg"], ["src", "./assets/images/innovative.svg"], ["src", "./assets/images/sustain.svg"], [1, "card", "py_0"], ["src", "./assets/images/banner_img.png", "alt", "Image", 1, "card_img"], [1, "work", "py"], [1, "work_h2"], ["src", "./assets/images/home.png", "alt", "Image", 1, "card_img"], ["src", "./assets/images/work.svg", "alt", "Image", 1, "sec_img"], [1, "services", "py"], [1, "owl-carousel", "owl-theme"], [1, "item", "active"], ["src", "./assets/images/completed_img.png", "alt", "Slide 1"], [1, "item_sec"], [1, "item_text"], [1, "item_p"], ["src", "./assets/images/site.png", "alt", "Slide 2"], ["src", "./assets/images/interior.png", "alt", "Slide 3"], [1, "custom-nav"], [1, "owl-prev"], ["src", "./assets/images/arrow-prev.svg"], [1, "owl-next"], ["src", "./assets/images/arrow-next.svg"], [1, "designed", "py"], [1, "col-12", "col-xl-4", "col-lg-6", "col-md-6"], [1, "bg"], [1, "des_text"], ["type", "button", 1, "btn", "btn-secondary"], [1, "project", "py"], [1, "project_heading"], [1, "project_text"], [1, "project_nav"], [1, "project_item"], [1, "units"], [1, "law-unit"], [1, "date"], ["src", "./assets/images/com.png", "alt", "Slide 2"], ["src", "./assets/images/completed_img.png", "alt", "Slide 3"], [1, "testimonial", "py"], [1, "col-12", "col-xl-6", "col-md-12", "col-lg-12"], [1, "test_text"], [1, "card-body", "subtitle"], [1, "title"], [1, "card_2"], [1, "tm-item"], ["src", "./assets/images/jane.png"], ["src", "./assets/images/stars.png", 1, "stars"], [1, "items-p"], [1, "subscribe", "py"], [1, "subscribe1"], [1, "col-12", "col-lg-6"], [1, "sub_img"], ["src", "./assets/images/subscribe.png"], [1, "sub_text"], ["action", "/action_page.php"], ["type", "email", "placeholder", "Your email address", "aria-label", "Your email address", 1, "form-control"], ["type", "button", 1, "btn", "btn-success"]],
    template: function HomeComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main")(1, "section", 3)(2, "div", 4)(3, "div", 5)(4, "div", 6)(5, "div", 7)(6, "div", 8)(7, "h1", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Design And Build ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "The Smart Way");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Get started ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 13)(17, "div", 5)(18, "div", 14)(19, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Proin Gravida");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 14)(24, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Proin Gravida");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 14)(29, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Proin Gravida");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 6)(34, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "img", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "section", 21)(37, "div", 4)(38, "div", 5)(39, "div", 6)(40, "div", 7)(41, "div", 8)(42, "h2", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Here's How We Make It Work.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "img", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 6)(46, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "img", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "section", 25)(49, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Our Services");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 4)(52, "div", 26, 0)(54, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "img", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 29)(57, "div", 30)(58, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Proin Gravida ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "From $228,800 or $1,769");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 31)(63, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Studio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "img", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 29)(68, "div", 30)(69, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Proin Gravida ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "From $228,800 or $1,769");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 31)(74, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "Studio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "img", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 29)(79, "div", 30)(80, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "Proin Gravida ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "From $228,800 or $1,769");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 31)(85, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "Studio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 34)(88, "button", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](89, "img", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "button", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](91, "img", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "section", 39)(93, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "Home Redesigned");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div", 4)(96, "div", 5)(97, "div", 40)(98, "div", 41)(99, "div", 42)(100, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "Proin Gravida");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "button", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "How it works");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "div", 40)(107, "div", 41)(108, "div", 42)(109, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, "Proin Gravida");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "button", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, "How it works");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "div", 40)(116, "div", 41)(117, "div", 42)(118, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, "Proin Gravida");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, "Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "button", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, "How it works");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "section", 44)(125, "div", 4)(126, "div", 45)(127, "div", 46)(128, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, "Our Completed");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](131, "Projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "div", 34)(133, "button", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](134, "img", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "button", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](136, "img", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "div", 26, 1)(139, "div", 47)(140, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](141, "img", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "div", 49)(143, "h6", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](144, "In-Law Unit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "h6", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](146, "July 1, 2024");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](148, "The Family Nest");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "div", 47)(150, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](151, "img", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "div", 49)(153, "h6", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](154, "In-Law Unit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "h6", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](156, "July 1, 2024");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](158, "The Beach Bungalow");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "div", 47)(160, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](161, "img", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "div", 49)(163, "h6", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](164, "In-Law Unit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "h6", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](166, "July 1, 2024");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](168, "The Family Cottage");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "section", 54)(170, "div", 4)(171, "div", 5)(172, "div", 55)(173, "div", 56)(174, "div", 7)(175, "div", 57)(176, "h4", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](177, " TESTIMONIALS ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](179, "Proin Gravida Nibh Vel Velit Auctor");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "div", 55)(181, "div", 59)(182, "div", 26, 2)(184, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](185, "img", 61)(186, "img", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](188, "Jane & Mark T.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "h6", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](190, "Boulder, CO");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](191, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](192, "Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.Duis sed odio sit amet nibh vulputate cursus a sit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](193, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](194, "img", 61)(195, "img", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](196, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](197, "Jane & Mark T.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](198, "h6", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](199, "Boulder, CO");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](200, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](201, "Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.Duis sed odio sit amet nibh vulputate cursus a sit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](202, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](203, "img", 61)(204, "img", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](205, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](206, "Jane & Mark T.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](207, "h6", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](208, "Boulder, CO");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](209, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](210, "Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.Duis sed odio sit amet nibh vulputate cursus a sit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](211, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](212, "img", 61)(213, "img", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](214, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](215, "Jane & Mark T.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](216, "h6", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](217, "Boulder, CO");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](218, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](219, "Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.Duis sed odio sit amet nibh vulputate cursus a sit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](220, "section", 64)(221, "div", 4)(222, "div", 65)(223, "div", 5)(224, "div", 66)(225, "div", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](226, "img", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](227, "div", 66)(228, "div", 69)(229, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](230, "Proin Gravida Nibh Vel Velit Auctor");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](231, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](232, " Proin gravida nibh vel velit auctor Proin gravida nibh vel velit auctor");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](233, "form", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](234, "input", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](235, "button", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](236, "Subscribe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()()();
      }
    },
    dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgForm],
    styles: [".py[_ngcontent-%COMP%] {\n    padding-top: 50px;\n    padding-bottom: 50px;\n}\nh1[_ngcontent-%COMP%]{\n    font-size: 90px;\n}\n\nh2[_ngcontent-%COMP%] {\n    font-size: 70px;\n}\nh3[_ngcontent-%COMP%]{\n    font-size: 60px;\n}\nh4[_ngcontent-%COMP%]{\n    font-size: 40px;\n}\nh5[_ngcontent-%COMP%]{\n    font-size: 30px;\n}\nh6[_ngcontent-%COMP%]{\n    font-size: 20px;\n}\np[_ngcontent-%COMP%]{\n    font-size: 24px;\n}\n\n\n\n.grid[_ngcontent-%COMP%] {\n    padding: 20px 20px;\n    padding-top: 180px;\n    max-width: 100%;\n}\n\n.grid[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n    margin-bottom: 20px;\n    border-radius: 50px;\n}\n\n\n\n\n\n\n.grid[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%] {\n    font-weight: bold;\n}\n\n.grid[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    background-color: #4b4b4b;\n    border-radius: 0;\n    padding: 10px 30px;\n}\n.grid[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]{\n    border-radius: 50px;\n}\n\n.grid[_ngcontent-%COMP%]   .card_img[_ngcontent-%COMP%] {\n    \n\n    width: 100%;\n    margin-left: auto;\n    margin-right: auto;\n    padding: 10px 35px;\n}\n\n.grid_serv[_ngcontent-%COMP%] {\n    padding: 10px 20px;\n    display: flex;\n    justify-content: space-between;\n    border-radius: 50px;\n}\n\n.grid_text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-weight: bold;\n}\n\n.grid_text[_ngcontent-%COMP%] {\n    text-align: center;\n    padding: 10px;\n}\n\n\n\n\n\n\n\n.work[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n    margin-bottom: 20px;\n    border-color: white;\n}\n\n.work[_ngcontent-%COMP%]   .card-text[_ngcontent-%COMP%] {\n    color: #666;\n}\n\n.work[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-weight: bold;\n}\n\n.work[_ngcontent-%COMP%]   .card_img[_ngcontent-%COMP%] {\n    padding-top: 20px;\n    width: 100%;\n}\n\n.work[_ngcontent-%COMP%]   .sec_img[_ngcontent-%COMP%] {\n    padding-top: 20px;\n    max-width: 100%;\n    height: 700px;\n    object-fit: contain;\n}\n\n\n\n\n\n\n\n\n.services[_ngcontent-%COMP%] {\n   \n    padding-top: 50px;\n    padding-bottom: 50px;\n}\n\n.services[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    text-align: center;\n    margin-bottom: 20px;\n}\n\n.services[_ngcontent-%COMP%]   .owl-carousel[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%] {\n    text-align: center;\n}\n.services[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]{\n    font-weight: 700;\n}\n\n.services[_ngcontent-%COMP%]   .item_sec[_ngcontent-%COMP%] {\n    display: flex;\n    margin-top: 20px;\n    padding-left: 10px;\n    padding-right: 10px;\n}\n\n.services[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 427px;\n    height: 435px;\n    object-fit: cover;\n}\n\n.services[_ngcontent-%COMP%]   .center[_ngcontent-%COMP%] {\n    position: relative;\n}\n\n.services[_ngcontent-%COMP%]   .center[_ngcontent-%COMP%]:before {\n    content: '';\n    position: absolute;\n    left: -10px;\n    top: 12px;\n    border: 1px solid #208678;\n    width: 100%;\n    height: calc(100% - 15px);\n    z-index: -1;\n}\n\n.services[_ngcontent-%COMP%]   .item_text[_ngcontent-%COMP%] {\n    padding-right: 25px;\n    text-align: left;\n}\n.item_p[_ngcontent-%COMP%]{\n    margin-left: auto;\n}\n\nbutton.owl-next[_ngcontent-%COMP%] {\n    border: none;\n    background: none;\n}\n\nbutton.owl-prev[_ngcontent-%COMP%] {\n    border: none;\n    background: none;\n}\n\n.custom-nav[_ngcontent-%COMP%] {\n    text-align: right;\n    margin-top: 50px;\n}\n\n\n\n\n\n\n\n\n\n\n\n.designed[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    margin-bottom: 30px;\n    text-align: center;\n}\n\n.designed[_ngcontent-%COMP%]   .des_text[_ngcontent-%COMP%] {\n    text-align: center;\n    padding: 32px;\n}\n\n.designed[_ngcontent-%COMP%]   .des_text[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n    margin-top: 10px;\n    font-style: bold;\n}\n\n.designed[_ngcontent-%COMP%]   .bg[_ngcontent-%COMP%] {\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n}\n\n.designed[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    border-radius: 0;\n    padding: 10px 20px;\n    margin-bottom: 20px;\n    background-color: #4b4b4b;\n}\n\n\n\n\n\n\n\n.project_heading[_ngcontent-%COMP%] {\n    display: flex;\n    margin-bottom: 20px;\n}\n\n.project[_ngcontent-%COMP%] {\n    padding-top: 50px;\n    padding-bottom: 50px;\n}\n\n.project[_ngcontent-%COMP%]   .custom-nav[_ngcontent-%COMP%] {\n    margin-left: auto;\n}\n\n.project[_ngcontent-%COMP%]   .owl-carousel[_ngcontent-%COMP%]   .project_item[_ngcontent-%COMP%] {\n    text-align: center;\n}\n\n.project[_ngcontent-%COMP%]   .item_sec[_ngcontent-%COMP%] {\n    display: flex;\n    margin-top: 20px;\n}\n\n.project[_ngcontent-%COMP%]   .project_item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 420px;\n    height: 420px;\n    object-fit: cover;\n}\n.project[_ngcontent-%COMP%]   .item_text[_ngcontent-%COMP%] {\n    padding-right: 25px;\n    text-align: left;\n}\n.project[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\n    text-align: left;\n}\n\n.units[_ngcontent-%COMP%] {\n    display: flex;\n}\n\n.date[_ngcontent-%COMP%] {\n    margin-left: auto;\n}\n\n.law-unit[_ngcontent-%COMP%] {\n    padding-left: 40px;\n    position: relative;\n    margin-top: 10px;\n}\n\n.date[_ngcontent-%COMP%] {\n    margin-top: 10px;\n}\n\n.law-unit[_ngcontent-%COMP%]:before {\n    content: '';\n    position: absolute;\n    left: 0;\n    top: 50%;\n    transform: translateY(-50%);\n    width: 30px;\n    height: 2px;\n}\n\nspan[_ngcontent-%COMP%] {\n    background: none;\n}\n\n.project_item[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n    line-height: 24px;\n    text-align: left;\n}\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.testimonial[_ngcontent-%COMP%] {\n    padding-top: 50px;\n    padding-bottom: 50px;\n    max-width: 100%;\n    \n\n}\n.testimonial[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{\nmargin-left: 54px;\n}\n\n\n\n\n\n.tm-item[_ngcontent-%COMP%] {\n    text-align: center;\n}\n\n.owl-nav[_ngcontent-%COMP%] {\n    display: none;\n}\n\n.tm-item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 50%;\n    margin-left: auto;\n    margin-right: auto;\n}\n\n.test_text[_ngcontent-%COMP%] {\n    margin-top: 20%;\n}\n.card[_ngcontent-%COMP%] {\n    padding-left: 20px;\n    border: #f3fcfb;\n}\n.testimonial[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%], .card_2[_ngcontent-%COMP%]{\n    background-color: transparent;\n}\n\n\n\n\n\n\n\n.testimonial[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    padding-left: 60px;\n}\n.tm-item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-style: italic;\n}\n\n.tm-item[_ngcontent-%COMP%] {\n    margin-right: 20px;\n    padding: 20px 20px;\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n    margin-top: 20px;\n    margin-bottom: 20px;\n    margin-left: 10px;\n}\n\n.stars[_ngcontent-%COMP%] {\n    margin-bottom: 10px;\n    margin-top: 10px;\n    height: 20px;\n}\n\n.subtitle[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]:before {\n    content: '';\n    position: absolute;\n    left: 20px;\n    top: 12%;\n    transform: translateY(-50%);\n    width: 50px;\n    height: 2px;\n    \n\n}\n\n.testimonial[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n    padding: 0;\n}\n\n\n\n\n\n\n.subscribe[_ngcontent-%COMP%] {\n    padding-top: 20px;\n    padding-bottom: 20px;\n}\n\n.subscribe[_ngcontent-%COMP%]   .subscribe1[_ngcontent-%COMP%] {\n    background-color: #208678;\n    border-radius: 20px;\n    margin-top: 50px;\n}\n\n.subscribe[_ngcontent-%COMP%]   .sub_img[_ngcontent-%COMP%] {\n    padding-top: 20px;\n    padding-bottom: 20px;\n}\n\n.subscribe[_ngcontent-%COMP%]   .sub_img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 100%;\n}\n\n.subscribe[_ngcontent-%COMP%]   .sub_text[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{\n    color: white;\n    font-size: 55px;\n}\n\n.subscribe[_ngcontent-%COMP%]   .sub_text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    color: white;\n    margin-top: 10px;\n    margin-right: 10px;\n}\n\n.subscribe[_ngcontent-%COMP%]   .sub_text[_ngcontent-%COMP%] {\n    padding: 20px;\n}\n\n.subscribe[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n    display: flex;\n    margin-top: 20px;\n}\n\n.subscribe[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n    display: inline;\n    width: 50%;\n    padding: 10px 10px;\n    background-color: white;\n    border-color: white;\n    border-radius: 0;\n}\n\n.subscribe[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    padding: 10px 30px;\n    color: white;\n    background-color: #4b4b4b;\n    border-color: #4b4b4b;\n    border-radius: 0;\n}\n\n\n\n@media only screen and (min-width: 1441px) {\n\n    \n\n\n\n\n\n\n\n    \n}\n\n@media only screen and (max-width: 1199px) {\n\n    h1[_ngcontent-%COMP%]{\n        font-size: 57px;\n    }\n    \n    h2[_ngcontent-%COMP%] {\n        font-size: 45px;\n    }\n    h3[_ngcontent-%COMP%]{\n        font-size: 35px;\n    }\n    h4[_ngcontent-%COMP%]{\n        font-size: 25px;\n    }\n    h5[_ngcontent-%COMP%]{\n        font-size: 20px;\n    }\n    h6[_ngcontent-%COMP%]{\n        font-size: 15px;\n    }\n    p[_ngcontent-%COMP%]{\n        font-size: 20px;\n    }\n    a[_ngcontent-%COMP%]{\n        font-size: 20px;\n    }\n    \n    .grid[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%] {\n        font-weight: bold;\n    }\n\n    .grid_text[_ngcontent-%COMP%] {\n        padding: 0;\n    }\n\n    .grid[_ngcontent-%COMP%]   .card_img[_ngcontent-%COMP%] {\n        padding: 14px 0;\n    }\n    .services[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n        width: 300px;\n        height: 300px;\n    }\n    .project[_ngcontent-%COMP%]   .project_item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n        width: 300px;\n        height: 300px;\n    }\n    .tm-item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n        width: 20%;\n    }\n\n    .work[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n        font-weight: bold;\n    }\n\n    .designed[_ngcontent-%COMP%]   .des_text[_ngcontent-%COMP%] {\n        height: 280px;\n        margin-bottom: 20px;\n    }\n\n    .test_text[_ngcontent-%COMP%] {\n        margin-top: 0;\n    }\n\n    .testimonial[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n        margin-bottom: 20px;\n    }\n\n    .subtitle[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]:before {\n        left: 0;\n        width: 50px;\n    }\n\n    .subscribe[_ngcontent-%COMP%]   .sub_text[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n        font-size: 35px;\n        margin-right: 10px;\n    }\n\n    .card[_ngcontent-%COMP%] {\n        padding-left: 0;\n    }\n}\n\n@media only screen and (max-width: 991px) {\n    .py[_ngcontent-%COMP%] {\n        padding-top: 20px;\n        padding-bottom: 20px;\n    }\n\n    .grid[_ngcontent-%COMP%] {\n        padding-top: 100px;\n    }\n\n    .grid_serv[_ngcontent-%COMP%] {\n        margin-bottom: 20px;\n    }\n\n    .grid[_ngcontent-%COMP%]   .card_img[_ngcontent-%COMP%] {\n        \n\n        max-width: 100%;\n    }\n\n    .designed[_ngcontent-%COMP%]   .des_text[_ngcontent-%COMP%] {\n        height: 310px;\n    }\n\n    .designed[_ngcontent-%COMP%]   .des_text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n        font-size: 18px;\n    }\n    \n\n    .date[_ngcontent-%COMP%] {\n        margin-top: 10px;\n        font-size: 18px;\n    }\n\n    .law-unit[_ngcontent-%COMP%] {\n        padding-left: 23px;\n        font-size: 17px;\n    }\n\n    .law-unit[_ngcontent-%COMP%]:before {\n        width: 20px;\n    }\n\n    .project_item[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n        font-size: 20px;\n        line-height: 0;\n        text-align: left;\n        margin-bottom: 15px;\n    }\n\n\n\n}\n@media only screen and (max-width: 991px){\n    .grid_serv[_ngcontent-%COMP%] {\n        display: block;\n        justify-content: unset;\n    }\n    .designed[_ngcontent-%COMP%]   .des_text[_ngcontent-%COMP%] {\n        height: 270px;\n    }\n    }\n\n@media only screen and (max-width: 767px) {}\n\n@media only screen and (max-width: 575px) {\n    h1[_ngcontent-%COMP%]{\n        font-size: 35px;\n    }\n    h2[_ngcontent-%COMP%]{\n        font-size: 32px;\n    }\n\n    p[_ngcontent-%COMP%]{\n        font-size: 18px;\n    }\n    .grid_text[_ngcontent-%COMP%] {\n        padding: 5px 14px;\n    }\n\n    .card[_ngcontent-%COMP%] {\n        padding-left: 0;\n    }\n    .grid[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{\n        width: 100%;\n    }\n    .grid[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n        padding: 20px;\n    }\n\n    .subtitle[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]:before {\n        left: 0;\n        top: 12%;\n        width: 35px;\n    }\n    .project[_ngcontent-%COMP%]   .project_item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n        width: 100%;\n    }\n    .services[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n        width: 100%;\n    }\n\n    .project_item[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n\n        line-height: 15px;\n    }\n\n    .testimonial[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n        padding-left: 40px;\n    }\n    .subscribe[_ngcontent-%COMP%]   .sub_text[_ngcontent-%COMP%] {\n        padding: 20px;\n    }\n    .card-body[_ngcontent-%COMP%]{\n        padding: 0;\n    }\n    .grid[_ngcontent-%COMP%]{\n        padding: 0;\n        padding-top: 80px;\n    }\n    .subscribe[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n        width: 100%;\n    }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7SUFDakIsb0JBQW9CO0FBQ3hCO0FBQ0E7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksZUFBZTtBQUNuQjtBQUNBO0lBQ0ksZUFBZTtBQUNuQjtBQUNBO0lBQ0ksZUFBZTtBQUNuQjtBQUNBO0lBQ0ksZUFBZTtBQUNuQjtBQUNBO0lBQ0ksZUFBZTtBQUNuQjtBQUNBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQSxXQUFXO0FBQ1g7SUFDSSxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsbUJBQW1CO0FBQ3ZCOztBQUVBOztHQUVHOztBQUVIO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGdCQUFnQjtJQUNoQixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsYUFBYTtBQUNqQjs7QUFFQSxXQUFXOzs7QUFHWCxTQUFTO0FBQ1Q7SUFDSSxtQkFBbUI7SUFDbkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsYUFBYTtJQUNiLG1CQUFtQjtBQUN2Qjs7O0FBR0EsU0FBUzs7QUFFVCxZQUFZOztBQUVaOztJQUVJLGlCQUFpQjtJQUNqQixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFNBQVM7SUFDVCx5QkFBeUI7SUFDekIsV0FBVztJQUNYLHlCQUF5QjtJQUN6QixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixnQkFBZ0I7QUFDcEI7O0FBRUEsWUFBWTs7QUFFWixhQUFhO0FBQ2I7OztHQUdHO0FBQ0g7SUFDSSxtQkFBbUI7SUFDbkIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksNEVBQTRFO0FBQ2hGOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIseUJBQXlCO0FBQzdCOztBQUVBLGFBQWE7OztBQUdiLFlBQVk7QUFDWjtJQUNJLGFBQWE7SUFDYixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxtQkFBbUI7SUFDbkIsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLE9BQU87SUFDUCxRQUFRO0lBQ1IsMkJBQTJCO0lBQzNCLFdBQVc7SUFDWCxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsZ0JBQWdCO0FBQ3BCOztBQUVBOzs7Ozs7OztHQVFHOztBQUVILGFBQWE7O0FBRWIsZUFBZTs7QUFFZjtJQUNJLGlCQUFpQjtJQUNqQixvQkFBb0I7SUFDcEIsZUFBZTtJQUNmLCtCQUErQjtBQUNuQztBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7O0dBRUc7O0FBRUg7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxlQUFlO0FBQ25CO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksNkJBQTZCO0FBQ2pDOztBQUVBOztHQUVHOzs7QUFHSDtJQUNJLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQiw0RUFBNEU7SUFDNUUsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixRQUFRO0lBQ1IsMkJBQTJCO0lBQzNCLFdBQVc7SUFDWCxXQUFXO0lBQ1gseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksVUFBVTtBQUNkOztBQUVBLGVBQWU7O0FBRWYsYUFBYTtBQUNiO0lBQ0ksaUJBQWlCO0lBQ2pCLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixtQkFBbUI7SUFDbkIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFlBQVk7SUFDWixlQUFlO0FBQ25COztBQUVBO0lBQ0ksWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWix5QkFBeUI7SUFDekIscUJBQXFCO0lBQ3JCLGdCQUFnQjtBQUNwQjs7QUFFQSxjQUFjO0FBQ2Q7O0lBRUk7Ozs7O09BS0c7OztBQUdQOztBQUVBOztJQUVJO1FBQ0ksZUFBZTtJQUNuQjs7SUFFQTtRQUNJLGVBQWU7SUFDbkI7SUFDQTtRQUNJLGVBQWU7SUFDbkI7SUFDQTtRQUNJLGVBQWU7SUFDbkI7SUFDQTtRQUNJLGVBQWU7SUFDbkI7SUFDQTtRQUNJLGVBQWU7SUFDbkI7SUFDQTtRQUNJLGVBQWU7SUFDbkI7SUFDQTtRQUNJLGVBQWU7SUFDbkI7O0lBRUE7UUFDSSxpQkFBaUI7SUFDckI7O0lBRUE7UUFDSSxVQUFVO0lBQ2Q7O0lBRUE7UUFDSSxlQUFlO0lBQ25CO0lBQ0E7UUFDSSxZQUFZO1FBQ1osYUFBYTtJQUNqQjtJQUNBO1FBQ0ksWUFBWTtRQUNaLGFBQWE7SUFDakI7SUFDQTtRQUNJLFVBQVU7SUFDZDs7SUFFQTtRQUNJLGlCQUFpQjtJQUNyQjs7SUFFQTtRQUNJLGFBQWE7UUFDYixtQkFBbUI7SUFDdkI7O0lBRUE7UUFDSSxhQUFhO0lBQ2pCOztJQUVBO1FBQ0ksbUJBQW1CO0lBQ3ZCOztJQUVBO1FBQ0ksT0FBTztRQUNQLFdBQVc7SUFDZjs7SUFFQTtRQUNJLGVBQWU7UUFDZixrQkFBa0I7SUFDdEI7O0lBRUE7UUFDSSxlQUFlO0lBQ25CO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLGlCQUFpQjtRQUNqQixvQkFBb0I7SUFDeEI7O0lBRUE7UUFDSSxrQkFBa0I7SUFDdEI7O0lBRUE7UUFDSSxtQkFBbUI7SUFDdkI7O0lBRUE7UUFDSSxpQkFBaUI7UUFDakIsZUFBZTtJQUNuQjs7SUFFQTtRQUNJLGFBQWE7SUFDakI7O0lBRUE7UUFDSSxlQUFlO0lBQ25COzs7SUFHQTtRQUNJLGdCQUFnQjtRQUNoQixlQUFlO0lBQ25COztJQUVBO1FBQ0ksa0JBQWtCO1FBQ2xCLGVBQWU7SUFDbkI7O0lBRUE7UUFDSSxXQUFXO0lBQ2Y7O0lBRUE7UUFDSSxlQUFlO1FBQ2YsY0FBYztRQUNkLGdCQUFnQjtRQUNoQixtQkFBbUI7SUFDdkI7Ozs7QUFJSjtBQUNBO0lBQ0k7UUFDSSxjQUFjO1FBQ2Qsc0JBQXNCO0lBQzFCO0lBQ0E7UUFDSSxhQUFhO0lBQ2pCO0lBQ0E7O0FBRUosMkNBQTJDOztBQUUzQztJQUNJO1FBQ0ksZUFBZTtJQUNuQjtJQUNBO1FBQ0ksZUFBZTtJQUNuQjs7SUFFQTtRQUNJLGVBQWU7SUFDbkI7SUFDQTtRQUNJLGlCQUFpQjtJQUNyQjs7SUFFQTtRQUNJLGVBQWU7SUFDbkI7SUFDQTtRQUNJLFdBQVc7SUFDZjtJQUNBO1FBQ0ksYUFBYTtJQUNqQjs7SUFFQTtRQUNJLE9BQU87UUFDUCxRQUFRO1FBQ1IsV0FBVztJQUNmO0lBQ0E7UUFDSSxXQUFXO0lBQ2Y7SUFDQTtRQUNJLFdBQVc7SUFDZjs7SUFFQTs7UUFFSSxpQkFBaUI7SUFDckI7O0lBRUE7UUFDSSxrQkFBa0I7SUFDdEI7SUFDQTtRQUNJLGFBQWE7SUFDakI7SUFDQTtRQUNJLFVBQVU7SUFDZDtJQUNBO1FBQ0ksVUFBVTtRQUNWLGlCQUFpQjtJQUNyQjtJQUNBO1FBQ0ksV0FBVztJQUNmO0FBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyIucHkge1xyXG4gICAgcGFkZGluZy10b3A6IDUwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNTBweDtcclxufVxyXG5oMXtcclxuICAgIGZvbnQtc2l6ZTogOTBweDtcclxufVxyXG5cclxuaDIge1xyXG4gICAgZm9udC1zaXplOiA3MHB4O1xyXG59XHJcbmgze1xyXG4gICAgZm9udC1zaXplOiA2MHB4O1xyXG59XHJcbmg0e1xyXG4gICAgZm9udC1zaXplOiA0MHB4O1xyXG59XHJcbmg1e1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG59XHJcbmg2e1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG59XHJcbnB7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbn1cclxuXHJcbi8qIGJhbm5lciAqL1xyXG4uZ3JpZCB7XHJcbiAgICBwYWRkaW5nOiAyMHB4IDIwcHg7XHJcbiAgICBwYWRkaW5nLXRvcDogMTgwcHg7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5ncmlkIC5jYXJkIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG59XHJcblxyXG4vKiAuZ3JpZCAuY2FyZC10aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDEuNXJlbTtcclxufSAqL1xyXG5cclxuLmdyaWQgLmNhcmQtdGl0bGUge1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5ncmlkIC5idG4ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzRiNGI0YjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDMwcHg7XHJcbn1cclxuLmdyaWQgLmNhcmQtYm9keXtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbn1cclxuXHJcbi5ncmlkIC5jYXJkX2ltZyB7XHJcbiAgICAvKiBoZWlnaHQ6IDUzMHB4OyAqL1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgIHBhZGRpbmc6IDEwcHggMzVweDtcclxufVxyXG5cclxuLmdyaWRfc2VydiB7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcclxufVxyXG5cclxuLmdyaWRfdGV4dCBwIHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4uZ3JpZF90ZXh0IHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuXHJcbi8qIGJhbm5lciAqL1xyXG5cclxuXHJcbi8qIHdvcmsgKi9cclxuLndvcmsgLmNhcmQge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIGJvcmRlci1jb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi53b3JrIC5jYXJkLXRleHQge1xyXG4gICAgY29sb3I6ICM2NjY7XHJcbn1cclxuXHJcbi53b3JrIC5jYXJkLWJvZHkgaDIge1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi53b3JrIC5jYXJkX2ltZyB7XHJcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4ud29yayAuc2VjX2ltZyB7XHJcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogNzAwcHg7XHJcbiAgICBvYmplY3QtZml0OiBjb250YWluO1xyXG59XHJcblxyXG5cclxuLyogd29yayAqL1xyXG5cclxuLypzZXJ2aWNlcyAqL1xyXG5cclxuLnNlcnZpY2VzIHtcclxuICAgXHJcbiAgICBwYWRkaW5nLXRvcDogNTBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiA1MHB4O1xyXG59XHJcblxyXG4uc2VydmljZXMgaDIge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG5cclxuLnNlcnZpY2VzIC5vd2wtY2Fyb3VzZWwgLml0ZW0ge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5zZXJ2aWNlcyAuaXRlbXtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbn1cclxuXHJcbi5zZXJ2aWNlcyAuaXRlbV9zZWMge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG59XHJcblxyXG4uc2VydmljZXMgLml0ZW0gaW1nIHtcclxuICAgIHdpZHRoOiA0MjdweDtcclxuICAgIGhlaWdodDogNDM1cHg7XHJcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxufVxyXG5cclxuLnNlcnZpY2VzIC5jZW50ZXIge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4uc2VydmljZXMgLmNlbnRlcjpiZWZvcmUge1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAtMTBweDtcclxuICAgIHRvcDogMTJweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMyMDg2Nzg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogY2FsYygxMDAlIC0gMTVweCk7XHJcbiAgICB6LWluZGV4OiAtMTtcclxufVxyXG5cclxuLnNlcnZpY2VzIC5pdGVtX3RleHQge1xyXG4gICAgcGFkZGluZy1yaWdodDogMjVweDtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuLml0ZW1fcHtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG59XHJcblxyXG5idXR0b24ub3dsLW5leHQge1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYmFja2dyb3VuZDogbm9uZTtcclxufVxyXG5cclxuYnV0dG9uLm93bC1wcmV2IHtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbn1cclxuXHJcbi5jdXN0b20tbmF2IHtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgbWFyZ2luLXRvcDogNTBweDtcclxufVxyXG5cclxuLypzZXJ2aWNlcyAqL1xyXG5cclxuLyogZGVzaWduZWQgKi9cclxuLyogLmRlc2lnbmVkXHJcbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG59ICovXHJcbi5kZXNpZ25lZCBoMiB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uZGVzaWduZWQgLmRlc190ZXh0IHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDMycHg7XHJcbn1cclxuXHJcbi5kZXNpZ25lZCAuZGVzX3RleHQgaDQge1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIGZvbnQtc3R5bGU6IGJvbGQ7XHJcbn1cclxuXHJcbi5kZXNpZ25lZCAuYmcge1xyXG4gICAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDZweCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE5KTtcclxufVxyXG5cclxuLmRlc2lnbmVkIC5idG4ge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgIHBhZGRpbmc6IDEwcHggMjBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGI0YjRiO1xyXG59XHJcblxyXG4vKiBkZXNpZ25lZCAqL1xyXG5cclxuXHJcbi8qIHByb2plY3QgKi9cclxuLnByb2plY3RfaGVhZGluZyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG5cclxuLnByb2plY3Qge1xyXG4gICAgcGFkZGluZy10b3A6IDUwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNTBweDtcclxufVxyXG5cclxuLnByb2plY3QgLmN1c3RvbS1uYXYge1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbn1cclxuXHJcbi5wcm9qZWN0IC5vd2wtY2Fyb3VzZWwgLnByb2plY3RfaXRlbSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5wcm9qZWN0IC5pdGVtX3NlYyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxufVxyXG5cclxuLnByb2plY3QgLnByb2plY3RfaXRlbSBpbWcge1xyXG4gICAgd2lkdGg6IDQyMHB4O1xyXG4gICAgaGVpZ2h0OiA0MjBweDtcclxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG59XHJcbi5wcm9qZWN0IC5pdGVtX3RleHQge1xyXG4gICAgcGFkZGluZy1yaWdodDogMjVweDtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuLnByb2plY3QgcHtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuXHJcbi51bml0cyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4uZGF0ZSB7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxufVxyXG5cclxuLmxhdy11bml0IHtcclxuICAgIHBhZGRpbmctbGVmdDogNDBweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbn1cclxuXHJcbi5kYXRlIHtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbn1cclxuXHJcbi5sYXctdW5pdDpiZWZvcmUge1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgICB3aWR0aDogMzBweDtcclxuICAgIGhlaWdodDogMnB4O1xyXG59XHJcblxyXG5zcGFuIHtcclxuICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbn1cclxuXHJcbi5wcm9qZWN0X2l0ZW0gaDQge1xyXG4gICAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcblxyXG4vKiAub3dsLXRoZW1lIC5vd2wtZG90cyAub3dsLWRvdCBzcGFuIHtcclxuICAgIHdpZHRoOiAxMHB4O1xyXG4gICAgaGVpZ2h0OiAxMHB4O1xyXG4gICAgbWFyZ2luOiA1cHggN3B4O1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAuMnMgZWFzZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbn0gKi9cclxuXHJcbi8qIHByb2plY3RzICovXHJcblxyXG4vKnRlc3RpbW9uaWFscyovXHJcblxyXG4udGVzdGltb25pYWwge1xyXG4gICAgcGFkZGluZy10b3A6IDUwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNTBweDtcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6ICNmM2ZjZmI7ICovXHJcbn1cclxuLnRlc3RpbW9uaWFsIC50aXRsZXtcclxubWFyZ2luLWxlZnQ6IDU0cHg7XHJcbn1cclxuLyogLnRlc3RpbW9uaWFsIGgye1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG59ICovXHJcblxyXG4udG0taXRlbSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5vd2wtbmF2IHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi50bS1pdGVtIGltZyB7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbn1cclxuXHJcbi50ZXN0X3RleHQge1xyXG4gICAgbWFyZ2luLXRvcDogMjAlO1xyXG59XHJcbi5jYXJkIHtcclxuICAgIHBhZGRpbmctbGVmdDogMjBweDtcclxuICAgIGJvcmRlcjogI2YzZmNmYjtcclxufVxyXG4udGVzdGltb25pYWwgLmNhcmQsIC5jYXJkXzJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxufVxyXG5cclxuLyogLmNhcmQtYm9keSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjNmY2ZiO1xyXG59ICovXHJcblxyXG5cclxuLnRlc3RpbW9uaWFsIC5jYXJkIGgzIHtcclxuICAgIHBhZGRpbmctbGVmdDogNjBweDtcclxufVxyXG4udG0taXRlbSBwIHtcclxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxufVxyXG5cclxuLnRtLWl0ZW0ge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG4gICAgcGFkZGluZzogMjBweCAyMHB4O1xyXG4gICAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDZweCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE5KTtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbn1cclxuXHJcbi5zdGFycyB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIGhlaWdodDogMjBweDtcclxufVxyXG5cclxuLnN1YnRpdGxlIC50aXRsZTpiZWZvcmUge1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAyMHB4O1xyXG4gICAgdG9wOiAxMiU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgICB3aWR0aDogNTBweDtcclxuICAgIGhlaWdodDogMnB4O1xyXG4gICAgLyogYmFja2dyb3VuZDogIzIwODY3ODsgKi9cclxufVxyXG5cclxuLnRlc3RpbW9uaWFsIC5jYXJkLWJvZHkge1xyXG4gICAgcGFkZGluZzogMDtcclxufVxyXG5cclxuLyp0ZXN0aW1vbmlhbHMqL1xyXG5cclxuLyogc3Vic2NyaWJlKi9cclxuLnN1YnNjcmliZSB7XHJcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG59XHJcblxyXG4uc3Vic2NyaWJlIC5zdWJzY3JpYmUxIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMDg2Nzg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogNTBweDtcclxufVxyXG5cclxuLnN1YnNjcmliZSAuc3ViX2ltZyB7XHJcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG59XHJcblxyXG4uc3Vic2NyaWJlIC5zdWJfaW1nIGltZyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLnN1YnNjcmliZSAuc3ViX3RleHQgaDN7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXNpemU6IDU1cHg7XHJcbn1cclxuXHJcbi5zdWJzY3JpYmUgLnN1Yl90ZXh0IHAge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxufVxyXG5cclxuLnN1YnNjcmliZSAuc3ViX3RleHQge1xyXG4gICAgcGFkZGluZzogMjBweDtcclxufVxyXG5cclxuLnN1YnNjcmliZSBmb3JtIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG59XHJcblxyXG4uc3Vic2NyaWJlIC5mb3JtLWNvbnRyb2wge1xyXG4gICAgZGlzcGxheTogaW5saW5lO1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIHBhZGRpbmc6IDEwcHggMTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgYm9yZGVyLWNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbn1cclxuXHJcbi5zdWJzY3JpYmUgLmJ0biB7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDMwcHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGI0YjRiO1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjNGI0YjRiO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMDtcclxufVxyXG5cclxuLyogc3Vic2NyaWJlICovXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTQ0MXB4KSB7XHJcblxyXG4gICAgLyogLmdyaWRbX25nY29udGVudC1uZy1jMTMyNDU2NzE1N10gLmNhcmRfaW1nW19uZ2NvbnRlbnQtbmctYzEzMjQ1NjcxNTddIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICAgICAgcGFkZGluZzogMzBweCAxMjdweDtcclxuICAgIH0gKi9cclxuXHJcbiAgICBcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMTk5cHgpIHtcclxuXHJcbiAgICBoMXtcclxuICAgICAgICBmb250LXNpemU6IDU3cHg7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGgyIHtcclxuICAgICAgICBmb250LXNpemU6IDQ1cHg7XHJcbiAgICB9XHJcbiAgICBoM3tcclxuICAgICAgICBmb250LXNpemU6IDM1cHg7XHJcbiAgICB9XHJcbiAgICBoNHtcclxuICAgICAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICB9XHJcbiAgICBoNXtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICB9XHJcbiAgICBoNntcclxuICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICB9XHJcbiAgICBwe1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIH1cclxuICAgIGF7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuZ3JpZCAuY2FyZC10aXRsZSB7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB9XHJcblxyXG4gICAgLmdyaWRfdGV4dCB7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgIH1cclxuXHJcbiAgICAuZ3JpZCAuY2FyZF9pbWcge1xyXG4gICAgICAgIHBhZGRpbmc6IDE0cHggMDtcclxuICAgIH1cclxuICAgIC5zZXJ2aWNlcyAuaXRlbSBpbWcge1xyXG4gICAgICAgIHdpZHRoOiAzMDBweDtcclxuICAgICAgICBoZWlnaHQ6IDMwMHB4O1xyXG4gICAgfVxyXG4gICAgLnByb2plY3QgLnByb2plY3RfaXRlbSBpbWcge1xyXG4gICAgICAgIHdpZHRoOiAzMDBweDtcclxuICAgICAgICBoZWlnaHQ6IDMwMHB4O1xyXG4gICAgfVxyXG4gICAgLnRtLWl0ZW0gaW1nIHtcclxuICAgICAgICB3aWR0aDogMjAlO1xyXG4gICAgfVxyXG5cclxuICAgIC53b3JrIC5jYXJkLWJvZHkgaDIge1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgfVxyXG5cclxuICAgIC5kZXNpZ25lZCAuZGVzX3RleHQge1xyXG4gICAgICAgIGhlaWdodDogMjgwcHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIH1cclxuXHJcbiAgICAudGVzdF90ZXh0IHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgfVxyXG5cclxuICAgIC50ZXN0aW1vbmlhbCAuY2FyZC1ib2R5IGgyIHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5zdWJ0aXRsZSAudGl0bGU6YmVmb3JlIHtcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5zdWJzY3JpYmUgLnN1Yl90ZXh0IGgzIHtcclxuICAgICAgICBmb250LXNpemU6IDM1cHg7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5jYXJkIHtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDA7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkxcHgpIHtcclxuICAgIC5weSB7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDIwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmdyaWQge1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAxMDBweDtcclxuICAgIH1cclxuXHJcbiAgICAuZ3JpZF9zZXJ2IHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5ncmlkIC5jYXJkX2ltZyB7XHJcbiAgICAgICAgLyogd2lkdGg6IDEwMCU7ICovXHJcbiAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG5cclxuICAgIC5kZXNpZ25lZCAuZGVzX3RleHQge1xyXG4gICAgICAgIGhlaWdodDogMzEwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmRlc2lnbmVkIC5kZXNfdGV4dCBwIHtcclxuICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICB9XHJcbiAgICBcclxuXHJcbiAgICAuZGF0ZSB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmxhdy11bml0IHtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDIzcHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgfVxyXG5cclxuICAgIC5sYXctdW5pdDpiZWZvcmUge1xyXG4gICAgICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5wcm9qZWN0X2l0ZW0gaDQge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcbn1cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTFweCl7XHJcbiAgICAuZ3JpZF9zZXJ2IHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHVuc2V0O1xyXG4gICAgfVxyXG4gICAgLmRlc2lnbmVkIC5kZXNfdGV4dCB7XHJcbiAgICAgICAgaGVpZ2h0OiAyNzBweDtcclxuICAgIH1cclxuICAgIH1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHt9XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU3NXB4KSB7XHJcbiAgICBoMXtcclxuICAgICAgICBmb250LXNpemU6IDM1cHg7XHJcbiAgICB9XHJcbiAgICBoMntcclxuICAgICAgICBmb250LXNpemU6IDMycHg7XHJcbiAgICB9XHJcblxyXG4gICAgcHtcclxuICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICB9XHJcbiAgICAuZ3JpZF90ZXh0IHtcclxuICAgICAgICBwYWRkaW5nOiA1cHggMTRweDtcclxuICAgIH1cclxuXHJcbiAgICAuY2FyZCB7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAwO1xyXG4gICAgfVxyXG4gICAgLmdyaWQgLmJ0bntcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuICAgIC5ncmlkIC5jYXJkLWJvZHkge1xyXG4gICAgICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLnN1YnRpdGxlIC50aXRsZTpiZWZvcmUge1xyXG4gICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgdG9wOiAxMiU7XHJcbiAgICAgICAgd2lkdGg6IDM1cHg7XHJcbiAgICB9XHJcbiAgICAucHJvamVjdCAucHJvamVjdF9pdGVtIGltZyB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgICAuc2VydmljZXMgLml0ZW0gaW1nIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuXHJcbiAgICAucHJvamVjdF9pdGVtIGg0IHtcclxuXHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE1cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLnRlc3RpbW9uaWFsIC5jYXJkIGgzIHtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDQwcHg7XHJcbiAgICB9XHJcbiAgICAuc3Vic2NyaWJlIC5zdWJfdGV4dCB7XHJcbiAgICAgICAgcGFkZGluZzogMjBweDtcclxuICAgIH1cclxuICAgIC5jYXJkLWJvZHl7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgIH1cclxuICAgIC5ncmlke1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDgwcHg7XHJcbiAgICB9XHJcbiAgICAuc3Vic2NyaWJlIC5mb3JtLWNvbnRyb2wge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 3644:
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoginComponent: () => (/* binding */ LoginComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 60316);





function LoginComponent_div_9_small_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Email is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function LoginComponent_div_9_small_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Enter a valid email.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function LoginComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LoginComponent_div_9_small_1_Template, 2, 0, "small", 14)(2, LoginComponent_div_9_small_2_Template, 2, 0, "small", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    let tmp_1_0;
    let tmp_2_0;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (tmp_1_0 = ctx_r0.loginForm.get("email")) == null ? null : tmp_1_0.errors == null ? null : tmp_1_0.errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (tmp_2_0 = ctx_r0.loginForm.get("email")) == null ? null : tmp_2_0.errors == null ? null : tmp_2_0.errors["email"]);
  }
}
function LoginComponent_div_13_small_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Password is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function LoginComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LoginComponent_div_13_small_1_Template, 2, 0, "small", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (tmp_1_0 = ctx_r0.loginForm.get("password")) == null ? null : tmp_1_0.errors == null ? null : tmp_1_0.errors["required"]);
  }
}
class LoginComponent {
  constructor(fb, router) {
    this.fb = fb;
    this.router = router;
  }
  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.email]],
      password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required]
    });
  }
  onSubmit() {
    if (this.loginForm.valid) {
      // Handle successful form submission
      console.log(this.loginForm.value);
    }
  }
  showAlert() {
    alert('Form submitted!');
  }
  navigateToSignUp() {
    this.router.navigate(['/signin']);
  }
  static #_ = this.ɵfac = function LoginComponent_Factory(t) {
    return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: LoginComponent,
    selectors: [["app-login"]],
    decls: 21,
    vars: 4,
    consts: [[1, "login"], [1, "login_text"], [1, "heading"], [1, "container"], [3, "ngSubmit", "formGroup"], ["for", "email", 1, "form-label"], ["type", "email", "id", "email", "formControlName", "email", "placeholder", "name@example.com", 1, "form-control"], [4, "ngIf"], ["for", "password", 1, "form-label"], ["type", "password", "id", "password", "formControlName", "password", "aria-describedby", "passwordHelpBlock", 1, "form-control"], [1, "submit"], ["type", "submit", 1, "btn", "btn-success", 3, "disabled"], [1, "member"], ["type", "button", 3, "click"], ["class", "text-danger", 4, "ngIf"], [1, "text-danger"]],
    template: function LoginComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h4", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "LOGIN");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3)(5, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_5_listener() {
          ctx.onSubmit();
          return ctx.showAlert();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Email address");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, LoginComponent_div_9_Template, 3, 2, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, LoginComponent_div_13_Template, 2, 1, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10)(15, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Not a Member? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_19_listener() {
          return ctx.navigateToSignUp();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "SignUp");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
      }
      if (rf & 2) {
        let tmp_1_0;
        let tmp_2_0;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.loginForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ((tmp_1_0 = ctx.loginForm.get("email")) == null ? null : tmp_1_0.touched) && ((tmp_1_0 = ctx.loginForm.get("email")) == null ? null : tmp_1_0.invalid));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ((tmp_2_0 = ctx.loginForm.get("password")) == null ? null : tmp_2_0.touched) && ((tmp_2_0 = ctx.loginForm.get("password")) == null ? null : tmp_2_0.invalid));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.loginForm.invalid);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlName],
    styles: [".login_text[_ngcontent-%COMP%]::before {\n    content: '';\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background: rgba(0, 0, 0, 0.5); \n\n    filter: blur(8px); \n\n    z-index: -1; \n\n}\nlabel[_ngcontent-%COMP%]{\n    font-size: 22px;\n}\nh4[_ngcontent-%COMP%] {\n    font-size: 30px;\n}\n\n.login_text[_ngcontent-%COMP%] {\n    background: rgba(255, 255, 255, 0.9); \n    border-radius: 10px; \n    padding: 20px;\n    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2); \n    max-width: 400px;\n    width: 100%;\n    z-index: 1; \n    background: url('bg2-img.avif') no-repeat center center; \n    background-size: cover;\n    position: relative;\n    background-position: center;\n    margin-top: 100px;\n    margin-left: auto;\n    margin-right: auto;\n}\n.form-label[_ngcontent-%COMP%]{\n    margin-bottom: 10px;\n    color: white;\n}\n.form-control[_ngcontent-%COMP%]{\n    margin-bottom: 20px;\n}\n.heading[_ngcontent-%COMP%]{\n    text-align: center;\n    font-weight: 800;\n    color: white;\n}\n\n.btn-success[_ngcontent-%COMP%]{\n   background-color:  #4b4b4b;\n   border:  1px solid #4b4b4b;\n   width: 100%;\n   margin-bottom: 20px;\n}\n.btn[_ngcontent-%COMP%]:hover{\n    background-color: #4b4b4b;\n    border:  1px solid #4b4b4b;\n}\n.member[_ngcontent-%COMP%]{\n    color: white;\n    text-align: center;\n}\nbutton[_ngcontent-%COMP%]{\n    background-color: transparent;\n    color: white;\n    border: none;\n}\n\n@media only screen and (max-width: 1199px) {\n    \n\n\n\n}\n\n@media only screen and (max-width: 991px) {\n    \n\n\n\n    label[_ngcontent-%COMP%]{\n        font-size: 18px;\n    }\n    p[_ngcontent-%COMP%]{\n        font-size: 18px;\n    }\n    h4[_ngcontent-%COMP%] {\n        font-size: 28px;\n    }\n}\n\n@media only screen and (max-width: 767px) {\n}\n\n\n@media only screen and (max-width: 575px) {\n    .login_text[_ngcontent-%COMP%]{\n        margin-top: 50px;\n    }\n    label[_ngcontent-%COMP%]{\n        font-size: 15px;\n    }\n    p[_ngcontent-%COMP%]{\n        font-size: 15px;\n        margin-bottom: 0;\n    }\n    .form-control[_ngcontent-%COMP%] {\n        margin-bottom: 10px;\n    }\n    h4[_ngcontent-%COMP%] {\n        font-size: 24px;\n    }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixPQUFPO0lBQ1AsV0FBVztJQUNYLFlBQVk7SUFDWiw4QkFBOEIsRUFBRSw4QkFBOEI7SUFDOUQsaUJBQWlCLEVBQUUsbUNBQW1DO0lBQ3RELFdBQVcsRUFBRSxxQ0FBcUM7QUFDdEQ7QUFDQTtJQUNJLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxvQ0FBb0M7SUFDcEMsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYix1Q0FBdUM7SUFDdkMsZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxVQUFVO0lBQ1YsdURBQTJFO0lBQzNFLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsMkJBQTJCO0lBQzNCLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxtQkFBbUI7SUFDbkIsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLFlBQVk7QUFDaEI7O0FBRUE7R0FDRywwQkFBMEI7R0FDMUIsMEJBQTBCO0dBQzFCLFdBQVc7R0FDWCxtQkFBbUI7QUFDdEI7QUFDQTtJQUNJLHlCQUF5QjtJQUN6QiwwQkFBMEI7QUFDOUI7QUFDQTtJQUNJLFlBQVk7SUFDWixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLDZCQUE2QjtJQUM3QixZQUFZO0lBQ1osWUFBWTtBQUNoQjs7QUFFQTtJQUNJOztPQUVHO0FBQ1A7O0FBRUE7SUFDSTs7T0FFRztJQUNIO1FBQ0ksZUFBZTtJQUNuQjtJQUNBO1FBQ0ksZUFBZTtJQUNuQjtJQUNBO1FBQ0ksZUFBZTtJQUNuQjtBQUNKOztBQUVBO0FBQ0E7OztBQUdBO0lBQ0k7UUFDSSxnQkFBZ0I7SUFDcEI7SUFDQTtRQUNJLGVBQWU7SUFDbkI7SUFDQTtRQUNJLGVBQWU7UUFDZixnQkFBZ0I7SUFDcEI7SUFDQTtRQUNJLG1CQUFtQjtJQUN2QjtJQUNBO1FBQ0ksZUFBZTtJQUNuQjtBQUNKIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5sb2dpbl90ZXh0OjpiZWZvcmUge1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNSk7IC8qIERhcmsgb3ZlcmxheSB3aXRoIG9wYWNpdHkgKi9cclxuICAgIGZpbHRlcjogYmx1cig4cHgpOyAvKiBBZGp1c3QgYmx1ciBzdHJlbmd0aCBhcyBuZWVkZWQgKi9cclxuICAgIHotaW5kZXg6IC0xOyAvKiBQbGFjZSBvdmVybGF5IGJlaGluZCB0aGUgY29udGVudCAqL1xyXG59XHJcbmxhYmVse1xyXG4gICAgZm9udC1zaXplOiAyMnB4O1xyXG59XHJcbmg0IHtcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxufVxyXG5cclxuLmxvZ2luX3RleHQge1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjkpOyBcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7IFxyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4yKTsgXHJcbiAgICBtYXgtd2lkdGg6IDQwMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB6LWluZGV4OiAxOyBcclxuICAgIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vYXNzZXRzL2ltYWdlcy9iZzItaW1nLmF2aWYnKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlcjsgXHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLXRvcDogMTAwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxufVxyXG4uZm9ybS1sYWJlbHtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuLmZvcm0tY29udHJvbHtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuLmhlYWRpbmd7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXdlaWdodDogODAwO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uYnRuLXN1Y2Nlc3N7XHJcbiAgIGJhY2tncm91bmQtY29sb3I6ICAjNGI0YjRiO1xyXG4gICBib3JkZXI6ICAxcHggc29saWQgIzRiNGI0YjtcclxuICAgd2lkdGg6IDEwMCU7XHJcbiAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuLmJ0bjpob3ZlcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0YjRiNGI7XHJcbiAgICBib3JkZXI6ICAxcHggc29saWQgIzRiNGI0YjtcclxufVxyXG4ubWVtYmVye1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbmJ1dHRvbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDExOTlweCkge1xyXG4gICAgLyogLmxvZ2luX3RleHR7XHJcbiAgICAgICAgbWF4LXdpZHRoOiA2MDBweDtcclxuICAgIH0gKi9cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTFweCkge1xyXG4gICAgLyogLmxvZ2luX3RleHR7XHJcbiAgICAgICAgbWF4LXdpZHRoOiA1MDBweDtcclxuICAgIH0gKi9cclxuICAgIGxhYmVse1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIH1cclxuICAgIHB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgfVxyXG4gICAgaDQge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjhweDtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xyXG59XHJcblxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NzVweCkge1xyXG4gICAgLmxvZ2luX3RleHR7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNTBweDtcclxuICAgIH1cclxuICAgIGxhYmVse1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIH1cclxuICAgIHB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICB9XHJcbiAgICAuZm9ybS1jb250cm9sIHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgfVxyXG4gICAgaDQge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 99550:
/*!********************************************!*\
  !*** ./src/app/signin/signin.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SigninComponent: () => (/* binding */ SigninComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 60316);





function SigninComponent_div_9_small_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Email is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function SigninComponent_div_9_small_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Enter a valid email.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function SigninComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SigninComponent_div_9_small_1_Template, 2, 0, "small", 14)(2, SigninComponent_div_9_small_2_Template, 2, 0, "small", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    let tmp_1_0;
    let tmp_2_0;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (tmp_1_0 = ctx_r0.signUpForm.get("email")) == null ? null : tmp_1_0.errors == null ? null : tmp_1_0.errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (tmp_2_0 = ctx_r0.signUpForm.get("email")) == null ? null : tmp_2_0.errors == null ? null : tmp_2_0.errors["email"]);
  }
}
function SigninComponent_div_13_small_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Password is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function SigninComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SigninComponent_div_13_small_1_Template, 2, 0, "small", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (tmp_1_0 = ctx_r0.signUpForm.get("password")) == null ? null : tmp_1_0.errors == null ? null : tmp_1_0.errors["required"]);
  }
}
function SigninComponent_div_17_small_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Confirm password is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function SigninComponent_div_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SigninComponent_div_17_small_1_Template, 2, 0, "small", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (tmp_1_0 = ctx_r0.signUpForm.get("confirmPassword")) == null ? null : tmp_1_0.errors == null ? null : tmp_1_0.errors["required"]);
  }
}
function SigninComponent_div_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div")(1, "small", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Passwords do not match.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
}
class SigninComponent {
  constructor(fb, router) {
    this.fb = fb;
    this.router = router;
  }
  ngOnInit() {
    this.signUpForm = this.fb.group({
      email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.email]],
      password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required],
      confirmPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required]
    }, {
      validator: this.passwordMatchValidator
    });
  }
  onSubmit() {
    if (this.signUpForm.valid) {
      // Handle successful form submission
      console.log(this.signUpForm.value);
      // Optionally navigate to another page
      // this.router.navigate(['/some-route']);
    }
  }
  showAlert() {
    alert('Form submitted!');
  }
  passwordMatchValidator(group) {
    const password = group.get('password');
    const confirmPassword = group.get('confirmPassword');
    return password && confirmPassword && password.value === confirmPassword.value ? null : {
      mismatch: true
    };
  }
  static #_ = this.ɵfac = function SigninComponent_Factory(t) {
    return new (t || SigninComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: SigninComponent,
    selectors: [["app-signin"]],
    decls: 22,
    vars: 6,
    consts: [[1, "sign"], [1, "sign_text"], [1, "heading"], [1, "container"], [3, "ngSubmit", "formGroup"], ["for", "email", 1, "form-label"], ["type", "email", "id", "email", "formControlName", "email", "placeholder", "name@example.com", 1, "form-control"], [4, "ngIf"], ["for", "password", 1, "form-label"], ["type", "password", "id", "password", "formControlName", "password", 1, "form-control"], ["for", "confirmPassword", 1, "form-label"], ["type", "password", "id", "confirmPassword", "formControlName", "confirmPassword", 1, "form-control"], [1, "submit"], ["type", "submit", 1, "btn", "btn-success", 3, "disabled"], ["class", "text-danger", 4, "ngIf"], [1, "text-danger"]],
    template: function SigninComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h4", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "SIGN UP");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3)(5, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function SigninComponent_Template_form_ngSubmit_5_listener() {
          ctx.onSubmit();
          return ctx.showAlert();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Email address");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, SigninComponent_div_9_Template, 3, 2, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, SigninComponent_div_13_Template, 2, 1, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Confirm Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, SigninComponent_div_17_Template, 2, 1, "div", 7)(18, SigninComponent_div_18_Template, 3, 0, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 12)(20, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
      }
      if (rf & 2) {
        let tmp_1_0;
        let tmp_2_0;
        let tmp_3_0;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.signUpForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ((tmp_1_0 = ctx.signUpForm.get("email")) == null ? null : tmp_1_0.touched) && ((tmp_1_0 = ctx.signUpForm.get("email")) == null ? null : tmp_1_0.invalid));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ((tmp_2_0 = ctx.signUpForm.get("password")) == null ? null : tmp_2_0.touched) && ((tmp_2_0 = ctx.signUpForm.get("password")) == null ? null : tmp_2_0.invalid));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ((tmp_3_0 = ctx.signUpForm.get("confirmPassword")) == null ? null : tmp_3_0.touched) && ((tmp_3_0 = ctx.signUpForm.get("confirmPassword")) == null ? null : tmp_3_0.invalid));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.signUpForm.errors == null ? null : ctx.signUpForm.errors["mismatch"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.signUpForm.invalid);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlName],
    styles: ["\n\n\n\n\n\n\n\n\n\n\n.sign_text[_ngcontent-%COMP%]::before {\n    content: '';\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background: rgba(0, 0, 0, 0.5); \n\n    filter: blur(8px); \n\n    z-index: -1; \n\n}\nlabel[_ngcontent-%COMP%]{\n    font-size: 22px;\n}\np[_ngcontent-%COMP%]{\n    font-size: 22px;\n}\nh4[_ngcontent-%COMP%] {\n    font-size: 30px;\n}\n\n.sign_text[_ngcontent-%COMP%] {\n    background: rgba(255, 255, 255, 0.9); \n    border-radius: 10px; \n    padding: 20px;\n    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2); \n    max-width: 400px; \n    margin-left: auto;\n    margin-right: auto;\n    margin-top: 100px;\n    width: 100%;\n    z-index: 1; \n    background: url('bg1-img.webp') no-repeat center center; \n    background-size: cover;\n    position: relative;\n}\n\n\n.heading[_ngcontent-%COMP%] {\n    text-align: center;\n    margin-bottom: 20px; \n    color: white;\n    font-weight: 800;\n}\n\n.form-label[_ngcontent-%COMP%] {\n    margin-bottom: 5px; \n    color: white;\n}\n\n.form-control[_ngcontent-%COMP%] {\n    margin-bottom: 15px; \n}\n\n.form-control[_ngcontent-%COMP%]:focus {\n    border-color: #007bff; \n\n    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25); \n\n}\n\n.btn-success[_ngcontent-%COMP%]{\n    background-color:  #4b4b4b;\n    border:  1px solid #4b4b4b;\n    width: 100%;\n }\n .btn[_ngcontent-%COMP%]:hover{\n     background-color: #4b4b4b;\n     border:  1px solid #4b4b4b;\n }\n\n\n @media only screen and (max-width: 991px) {\n    label[_ngcontent-%COMP%]{\n        font-size: 18px;\n    }\n    p[_ngcontent-%COMP%]{\n        font-size: 18px;\n    }\n    h4[_ngcontent-%COMP%] {\n        font-size: 27px;\n    }\n}\n\n@media only screen and (max-width: 767px) {}\n\n@media only screen and (max-width: 575px) {\n    .sign_text[_ngcontent-%COMP%]{\n        margin-top: 20px;\n    }\n\n    label[_ngcontent-%COMP%]{\n        font-size: 15px;\n    }\n    p[_ngcontent-%COMP%]{\n        font-size: 15px;\n    }\n    h4[_ngcontent-%COMP%] {\n        font-size: 24px;\n    }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2lnbmluL3NpZ25pbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTs7Ozs7O0dBTUc7O0FBRUgsbUNBQW1DO0FBQ25DO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sT0FBTztJQUNQLFdBQVc7SUFDWCxZQUFZO0lBQ1osOEJBQThCLEVBQUUsOEJBQThCO0lBQzlELGlCQUFpQixFQUFFLG1DQUFtQztJQUN0RCxXQUFXLEVBQUUscUNBQXFDO0FBQ3REO0FBQ0E7SUFDSSxlQUFlO0FBQ25CO0FBQ0E7SUFDSSxlQUFlO0FBQ25CO0FBQ0E7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksb0NBQW9DO0lBQ3BDLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsdUNBQXVDO0lBQ3ZDLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixXQUFXO0lBQ1gsVUFBVTtJQUNWLHVEQUEyRTtJQUMzRSxzQkFBc0I7SUFDdEIsa0JBQWtCO0FBQ3RCOzs7QUFHQTtJQUNJLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0kscUJBQXFCLEVBQUUsOEJBQThCO0lBQ3JELGdEQUFnRCxFQUFFLHdCQUF3QjtBQUM5RTs7QUFFQTtJQUNJLDBCQUEwQjtJQUMxQiwwQkFBMEI7SUFDMUIsV0FBVztDQUNkO0NBQ0E7S0FDSSx5QkFBeUI7S0FDekIsMEJBQTBCO0NBQzlCOzs7Q0FHQTtJQUNHO1FBQ0ksZUFBZTtJQUNuQjtJQUNBO1FBQ0ksZUFBZTtJQUNuQjtJQUNBO1FBQ0ksZUFBZTtJQUNuQjtBQUNKOztBQUVBLDJDQUEyQzs7QUFFM0M7SUFDSTtRQUNJLGdCQUFnQjtJQUNwQjs7SUFFQTtRQUNJLGVBQWU7SUFDbkI7SUFDQTtRQUNJLGVBQWU7SUFDbkI7SUFDQTtRQUNJLGVBQWU7SUFDbkI7QUFDSiIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4vKiAuc2lnbiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgbWFyZ2luLXRvcDogMTUwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA4MHB4O1xyXG59ICovXHJcblxyXG4vKiBPdmVybGF5IHRvIGJsdXIgdGhlIGJhY2tncm91bmQgKi9cclxuLnNpZ25fdGV4dDo6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjUpOyAvKiBEYXJrIG92ZXJsYXkgd2l0aCBvcGFjaXR5ICovXHJcbiAgICBmaWx0ZXI6IGJsdXIoOHB4KTsgLyogQWRqdXN0IGJsdXIgc3RyZW5ndGggYXMgbmVlZGVkICovXHJcbiAgICB6LWluZGV4OiAtMTsgLyogUGxhY2Ugb3ZlcmxheSBiZWhpbmQgdGhlIGNvbnRlbnQgKi9cclxufVxyXG5sYWJlbHtcclxuICAgIGZvbnQtc2l6ZTogMjJweDtcclxufVxyXG5we1xyXG4gICAgZm9udC1zaXplOiAyMnB4O1xyXG59XHJcbmg0IHtcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxufVxyXG5cclxuLnNpZ25fdGV4dCB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOSk7IFxyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDsgXHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSgwLCAwLCAwLCAwLjIpOyBcclxuICAgIG1heC13aWR0aDogNDAwcHg7IFxyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICBtYXJnaW4tdG9wOiAxMDBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgei1pbmRleDogMTsgXHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uL2Fzc2V0cy9pbWFnZXMvYmcxLWltZy53ZWJwJykgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXI7IFxyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuXHJcbi5oZWFkaW5nIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7IFxyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcclxufVxyXG5cclxuLmZvcm0tbGFiZWwge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4OyBcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmZvcm0tY29udHJvbCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4OyBcclxufVxyXG5cclxuLmZvcm0tY29udHJvbDpmb2N1cyB7XHJcbiAgICBib3JkZXItY29sb3I6ICMwMDdiZmY7IC8qIENoYW5nZSBmb2N1cyBib3JkZXIgY29sb3IgKi9cclxuICAgIGJveC1zaGFkb3c6IDAgMCAwIDAuMnJlbSByZ2JhKDAsIDEyMywgMjU1LCAwLjI1KTsgLyogQWRqdXN0IGZvY3VzIHNoYWRvdyAqL1xyXG59XHJcblxyXG4uYnRuLXN1Y2Nlc3N7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAgIzRiNGI0YjtcclxuICAgIGJvcmRlcjogIDFweCBzb2xpZCAjNGI0YjRiO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiB9XHJcbiAuYnRuOmhvdmVye1xyXG4gICAgIGJhY2tncm91bmQtY29sb3I6ICM0YjRiNGI7XHJcbiAgICAgYm9yZGVyOiAgMXB4IHNvbGlkICM0YjRiNGI7XHJcbiB9XHJcblxyXG5cclxuIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkxcHgpIHtcclxuICAgIGxhYmVse1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIH1cclxuICAgIHB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgfVxyXG4gICAgaDQge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjdweDtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge31cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTc1cHgpIHtcclxuICAgIC5zaWduX3RleHR7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIH1cclxuXHJcbiAgICBsYWJlbHtcclxuICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICB9XHJcbiAgICBwe1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIH1cclxuICAgIGg0IHtcclxuICAgICAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 36722:
/*!****************************************************!*\
  !*** ./src/app/successful/successful.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SuccessfulComponent: () => (/* binding */ SuccessfulComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 95072);


class SuccessfulComponent {
  static #_ = this.ɵfac = function SuccessfulComponent_Factory(t) {
    return new (t || SuccessfulComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: SuccessfulComponent,
    selectors: [["app-successful"]],
    decls: 8,
    vars: 0,
    consts: [[1, "check"], [1, "checkmark"], [1, "checks"], ["routerLink", "/form-receipt", 1, "btn-success"]],
    template: function SuccessfulComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "i", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u2713");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2)(4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Your booking is successfully submitted!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "view invoice");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink],
    styles: ["h1[_ngcontent-%COMP%] {\n  text-align: center;\n  \n\n  \n\n  font-size: 90px;\n  margin-top: 50px;\n}\n\ni[_ngcontent-%COMP%] {\n  color: #9ABC66;\n  font-size: 200px;\n  margin-left: 80px;\n \n}\n\n.card[_ngcontent-%COMP%] {\n  background: white;\n  padding: 60px;\n  border-radius: 4px;\n  box-shadow: 0 2px 3px #C8D0D8;\n  display: inline-block;\n  \n\n}\n\n.check[_ngcontent-%COMP%] {\n  border-radius: 350px;\n  height: 350px;\n  width: 350px;\n  \n\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 50px;\n}\nbutton[_ngcontent-%COMP%]{\n  padding: 10px 30px;\n  font-size: 24px;\n  margin-top: 30px;\n}\n.checks[_ngcontent-%COMP%]{\n  text-align: center;\n  margin-bottom: 50px;\n}\n\n\n\n@media only screen and (min-width: 1441px) {}\n@media only screen and (max-width: 1199px) {\n  h1[_ngcontent-%COMP%]{\n    font-size: 60px;\n  }\n  .check[_ngcontent-%COMP%]{\n    height: 250px;\n    width: 250px;\n  }\n  i[_ngcontent-%COMP%] {\n\n    font-size: 146px;\n    margin-left: 60px;\n}\n}\n@media only screen and (max-width: 991px) {\n  h1[_ngcontent-%COMP%] {\n    font-size: 44px;\n}\n.check[_ngcontent-%COMP%]{\n  height: 200px;\n  width: 200px;\n}\ni[_ngcontent-%COMP%] {\n\n  font-size: 120px;\n  margin-left: 50px;\n}\n}\n@media only screen and (max-width: 767px) {}\n@media only screen and (max-width: 565px) {\n  h1[_ngcontent-%COMP%]{\n    font-size: 27px;\n  }\n  .check[_ngcontent-%COMP%]{\n    height: 150px;\n    width: 150px;\n  }\n  i[_ngcontent-%COMP%]{\n    font-size: 91px;\n        margin-left: 33px;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc3VjY2Vzc2Z1bC9zdWNjZXNzZnVsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIsb0JBQW9CO0VBQ3BCLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixpQkFBaUI7O0FBRW5COztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsNkJBQTZCO0VBQzdCLHFCQUFxQjtFQUNyQixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxvQkFBb0I7RUFDcEIsYUFBYTtFQUNiLFlBQVk7RUFDWix5QkFBeUI7RUFDekIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsbUJBQW1CO0FBQ3JCOzs7O0FBSUEsNENBQTRDO0FBQzVDO0VBQ0U7SUFDRSxlQUFlO0VBQ2pCO0VBQ0E7SUFDRSxhQUFhO0lBQ2IsWUFBWTtFQUNkO0VBQ0E7O0lBRUUsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtBQUNyQjtBQUNBO0FBQ0E7RUFDRTtJQUNFLGVBQWU7QUFDbkI7QUFDQTtFQUNFLGFBQWE7RUFDYixZQUFZO0FBQ2Q7QUFDQTs7RUFFRSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0FBQ25CO0FBQ0E7QUFDQSwyQ0FBMkM7QUFDM0M7RUFDRTtJQUNFLGVBQWU7RUFDakI7RUFDQTtJQUNFLGFBQWE7SUFDYixZQUFZO0VBQ2Q7RUFDQTtJQUNFLGVBQWU7UUFDWCxpQkFBaUI7RUFDdkI7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbImgxIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgLyogY29sb3I6ICM0Q0FGNTA7ICovXHJcbiAgLyogR3JlZW4gY29sb3IgKi9cclxuICBmb250LXNpemU6IDkwcHg7XHJcbiAgbWFyZ2luLXRvcDogNTBweDtcclxufVxyXG5cclxuaSB7XHJcbiAgY29sb3I6ICM5QUJDNjY7XHJcbiAgZm9udC1zaXplOiAyMDBweDtcclxuICBtYXJnaW4tbGVmdDogODBweDtcclxuIFxyXG59XHJcblxyXG4uY2FyZCB7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgcGFkZGluZzogNjBweDtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgYm94LXNoYWRvdzogMCAycHggM3B4ICNDOEQwRDg7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIC8qIG1hcmdpbjogMCBhdXRvOyAqL1xyXG59XHJcblxyXG4uY2hlY2sge1xyXG4gIGJvcmRlci1yYWRpdXM6IDM1MHB4O1xyXG4gIGhlaWdodDogMzUwcHg7XHJcbiAgd2lkdGg6IDM1MHB4O1xyXG4gIC8qIGJhY2tncm91bmQ6ICNGOEZBRjU7ICovXHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gIG1hcmdpbi10b3A6IDUwcHg7XHJcbn1cclxuYnV0dG9ue1xyXG4gIHBhZGRpbmc6IDEwcHggMzBweDtcclxuICBmb250LXNpemU6IDI0cHg7XHJcbiAgbWFyZ2luLXRvcDogMzBweDtcclxufVxyXG4uY2hlY2tze1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xyXG59XHJcblxyXG5cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTQ0MXB4KSB7fVxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDExOTlweCkge1xyXG4gIGgxe1xyXG4gICAgZm9udC1zaXplOiA2MHB4O1xyXG4gIH1cclxuICAuY2hlY2t7XHJcbiAgICBoZWlnaHQ6IDI1MHB4O1xyXG4gICAgd2lkdGg6IDI1MHB4O1xyXG4gIH1cclxuICBpIHtcclxuXHJcbiAgICBmb250LXNpemU6IDE0NnB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDYwcHg7XHJcbn1cclxufVxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MXB4KSB7XHJcbiAgaDEge1xyXG4gICAgZm9udC1zaXplOiA0NHB4O1xyXG59XHJcbi5jaGVja3tcclxuICBoZWlnaHQ6IDIwMHB4O1xyXG4gIHdpZHRoOiAyMDBweDtcclxufVxyXG5pIHtcclxuXHJcbiAgZm9udC1zaXplOiAxMjBweDtcclxuICBtYXJnaW4tbGVmdDogNTBweDtcclxufVxyXG59XHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHt9XHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTY1cHgpIHtcclxuICBoMXtcclxuICAgIGZvbnQtc2l6ZTogMjdweDtcclxuICB9XHJcbiAgLmNoZWNre1xyXG4gICAgaGVpZ2h0OiAxNTBweDtcclxuICAgIHdpZHRoOiAxNTBweDtcclxuICB9XHJcbiAgaXtcclxuICAgIGZvbnQtc2l6ZTogOTFweDtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMzNweDtcclxuICB9XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 56066:
/*!****************************************************!*\
  !*** ./src/app/texteditor/texteditor.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TexteditorComponent: () => (/* binding */ TexteditorComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var ngx_quill__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-quill */ 12041);



class TexteditorComponent {
  constructor() {
    this.editorContent = '';
    this.quillConfig = {
      toolbar: [['bold', 'italic', 'underline'], [{
        'list': 'ordered'
      }, {
        'list': 'bullet'
      }], ['link', 'image']]
    };
  }
  onEditorCreated(editor) {
    console.log('Quill editor instance:', editor);
  }
  static #_ = this.ɵfac = function TexteditorComponent_Factory(t) {
    return new (t || TexteditorComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: TexteditorComponent,
    selectors: [["app-texteditor"]],
    decls: 1,
    vars: 1,
    consts: [[3, "ngModelChange", "ngModel"]],
    template: function TexteditorComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "quill-editor", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayListener"]("ngModelChange", function TexteditorComponent_Template_quill_editor_ngModelChange_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayBindingSet"](ctx.editorContent, $event) || (ctx.editorContent = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayProperty"]("ngModel", ctx.editorContent);
      }
    },
    dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgModel, ngx_quill__WEBPACK_IMPORTED_MODULE_2__.QuillEditorComponent],
    styles: ["\n\n.editor[_ngcontent-%COMP%] {\n  background-color: white; \n\n}\nh1[_ngcontent-%COMP%]{\n  font-size: 90px;\n}\n\nh2[_ngcontent-%COMP%] {\n  font-size: 70px;\n}\nh3[_ngcontent-%COMP%]{\n  font-size: 60px;\n}\nh4[_ngcontent-%COMP%]{\n  font-size: 40px;\n}\nh5[_ngcontent-%COMP%]{\n  font-size: 30px;\n}\nh6[_ngcontent-%COMP%]{\n  font-size: 20px;\n}\np[_ngcontent-%COMP%]{\n  font-size: 24px;\n}\na[_ngcontent-%COMP%]{\n  font-size: 24px;\n}\n\n\n\nquill-editor[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 800px;\n  margin: 100px auto; \n\n  display: block;\n  border: none; \n\n  background-color: white;\n}\n\n\n\n.ql-container.ql-snow[_ngcontent-%COMP%] {\n  border: none; \n\n}\n\n\n\nngx-quill[_ngcontent-%COMP%] {\n  display: block; \n\n}\n\nngx-quill[_ngcontent-%COMP%]   .ql-editor[_ngcontent-%COMP%] {\n  margin: 0 auto; \n\n  border: none; \n\n  border-radius: 4px; \n\n  background-color: #fff; \n\n  padding: 10px; \n\n  font-family: Arial, sans-serif; \n\n  font-size: 28px; \n\n  color: #333; \n\n  line-height: 1.5; \n\n  height: 299px; \n\n}\n\n\n\n.ql-toolbar[_ngcontent-%COMP%] {\n  background-color: #f8f8f8; \n\n  padding: 4px 10px; \n\n  border-radius: 8px 8px 0 0; \n\n}\n\n\n\n.ql-toolbar[_ngcontent-%COMP%]   .ql-formats[_ngcontent-%COMP%] {\n  margin-right: 4px; \n\n}\n\n.ql-toolbar[_ngcontent-%COMP%]   .ql-picker[_ngcontent-%COMP%], .ql-toolbar[_ngcontent-%COMP%]   .ql-formats[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background: white; \n\n  border: none; \n\n  color: #555; \n\n  padding: 6px 12px; \n\n  border-radius: 4px; \n\n  font-size: 23px; \n\n  cursor: pointer; \n\n}\n\n.ql-toolbar[_ngcontent-%COMP%]   .ql-picker[_ngcontent-%COMP%]:hover, .ql-toolbar[_ngcontent-%COMP%]   .ql-formats[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background-color: #f0f0f0; \n\n}\n\n.ql-toolbar[_ngcontent-%COMP%]   .ql-picker.ql-active[_ngcontent-%COMP%], .ql-toolbar[_ngcontent-%COMP%]   .ql-formats[_ngcontent-%COMP%]   button.ql-active[_ngcontent-%COMP%] {\n  background-color: #e0e0e0; \n\n}\n\n.ql-editor[_ngcontent-%COMP%]   .ql-blank[_ngcontent-%COMP%] {\n  background-color: white;\n  font-size: 28px;\n}\n\n\n\n@media (max-width: 768px) {\n  quill-editor[_ngcontent-%COMP%] {\n    max-width: 600px;\n  }\n}\n\n@media (max-width: 480px) {\n  ngx-quill[_ngcontent-%COMP%]   .ql-editor[_ngcontent-%COMP%] {\n    height: 300px; \n\n  }\n  quill-editor[_ngcontent-%COMP%] {\n    margin-top: 20px;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvdGV4dGVkaXRvci90ZXh0ZWRpdG9yLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsMENBQTBDO0FBQzFDO0VBQ0UsdUJBQXVCLEVBQUUseUNBQXlDO0FBQ3BFO0FBQ0E7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQSxxQ0FBcUM7QUFDckM7RUFDRSxXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGtCQUFrQixFQUFFLCtEQUErRDtFQUNuRixjQUFjO0VBQ2QsWUFBWSxFQUFFLDBCQUEwQjtFQUN4Qyx1QkFBdUI7QUFDekI7O0FBRUEsdUNBQXVDO0FBQ3ZDO0VBQ0UsWUFBWSxFQUFFLDBCQUEwQjtBQUMxQzs7QUFFQSwrQ0FBK0M7QUFDL0M7RUFDRSxjQUFjLEVBQUUsc0NBQXNDO0FBQ3hEOztBQUVBO0VBQ0UsY0FBYyxFQUFFLHNCQUFzQjtFQUN0QyxZQUFZLEVBQUUsMEJBQTBCO0VBQ3hDLGtCQUFrQixFQUFFLG9CQUFvQjtFQUN4QyxzQkFBc0IsRUFBRSxxQkFBcUI7RUFDN0MsYUFBYSxFQUFFLDhCQUE4QjtFQUM3Qyw4QkFBOEIsRUFBRSxnQ0FBZ0M7RUFDaEUsZUFBZSxFQUFFLGNBQWM7RUFDL0IsV0FBVyxFQUFFLGVBQWU7RUFDNUIsZ0JBQWdCLEVBQUUsdUNBQXVDO0VBQ3pELGFBQWEsRUFBRSxrQkFBa0I7QUFDbkM7O0FBRUEsc0NBQXNDO0FBQ3RDO0VBQ0UseUJBQXlCLEVBQUUsNkJBQTZCO0VBQ3hELGlCQUFpQixFQUFFLCtCQUErQjtFQUNsRCwwQkFBMEIsRUFBRSx3QkFBd0I7QUFDdEQ7O0FBRUEsb0NBQW9DO0FBQ3BDO0VBQ0UsaUJBQWlCLEVBQUUsMEJBQTBCO0FBQy9DOztBQUVBO0VBQ0UsaUJBQWlCLEVBQUUsMkJBQTJCO0VBQzlDLFlBQVksRUFBRSwwQkFBMEI7RUFDeEMsV0FBVyxFQUFFLG9CQUFvQjtFQUNqQyxpQkFBaUIsRUFBRSwyQkFBMkI7RUFDOUMsa0JBQWtCLEVBQUUsb0JBQW9CO0VBQ3hDLGVBQWUsRUFBRSxjQUFjO0VBQy9CLGVBQWUsRUFBRSw0QkFBNEI7QUFDL0M7O0FBRUE7RUFDRSx5QkFBeUIsRUFBRSxzQ0FBc0M7QUFDbkU7O0FBRUE7RUFDRSx5QkFBeUIsRUFBRSxxREFBcUQ7QUFDbEY7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsZUFBZTtBQUNqQjs7QUFFQSxpQ0FBaUM7QUFDakM7RUFDRTtJQUNFLGdCQUFnQjtFQUNsQjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxhQUFhLEVBQUUsc0NBQXNDO0VBQ3ZEO0VBQ0E7SUFDRSxnQkFBZ0I7RUFDbEI7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIi8qIEJhc2ljIHN0eWxpbmcgZm9yIHRoZSAuZWRpdG9yIHdyYXBwZXIgKi9cclxuLmVkaXRvciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7IC8qIExpZ2h0IGJhY2tncm91bmQgZm9yIHRoZSBlZGl0b3IgYXJlYSAqL1xyXG59XHJcbmgxe1xyXG4gIGZvbnQtc2l6ZTogOTBweDtcclxufVxyXG5cclxuaDIge1xyXG4gIGZvbnQtc2l6ZTogNzBweDtcclxufVxyXG5oM3tcclxuICBmb250LXNpemU6IDYwcHg7XHJcbn1cclxuaDR7XHJcbiAgZm9udC1zaXplOiA0MHB4O1xyXG59XHJcbmg1e1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxufVxyXG5oNntcclxuICBmb250LXNpemU6IDIwcHg7XHJcbn1cclxucHtcclxuICBmb250LXNpemU6IDI0cHg7XHJcbn1cclxuYXtcclxuICBmb250LXNpemU6IDI0cHg7XHJcbn1cclxuXHJcbi8qIFN0eWxpbmcgZm9yIFF1aWxsIGVkaXRvciBlbGVtZW50ICovXHJcbnF1aWxsLWVkaXRvciB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWF4LXdpZHRoOiA4MDBweDtcclxuICBtYXJnaW46IDEwMHB4IGF1dG87IC8qIENlbnRlciB0aGUgZWRpdG9yIGhvcml6b250YWxseSB3aXRoIHRvcCBhbmQgYm90dG9tIG1hcmdpbnMgKi9cclxuICBkaXNwbGF5OiBibG9jaztcclxuICBib3JkZXI6IG5vbmU7IC8qIFJlbW92ZSBkZWZhdWx0IGJvcmRlciAqL1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4vKiBSZW1vdmUgYm9yZGVyIGZyb20gUXVpbGwgY29udGFpbmVyICovXHJcbi5xbC1jb250YWluZXIucWwtc25vdyB7XHJcbiAgYm9yZGVyOiBub25lOyAvKiBSZW1vdmUgZGVmYXVsdCBib3JkZXIgKi9cclxufVxyXG5cclxuLyogU3R5bGluZyBmb3IgdGhlIG5neC1xdWlsbCBlZGl0b3IgY29tcG9uZW50ICovXHJcbm5neC1xdWlsbCB7XHJcbiAgZGlzcGxheTogYmxvY2s7IC8qIEVuc3VyZSBwcm9wZXIgYmxvY2stbGV2ZWwgc3R5bGluZyAqL1xyXG59XHJcblxyXG5uZ3gtcXVpbGwgLnFsLWVkaXRvciB7XHJcbiAgbWFyZ2luOiAwIGF1dG87IC8qIENlbnRlciB0aGUgZWRpdG9yICovXHJcbiAgYm9yZGVyOiBub25lOyAvKiBSZW1vdmUgZGVmYXVsdCBib3JkZXIgKi9cclxuICBib3JkZXItcmFkaXVzOiA0cHg7IC8qIFJvdW5kZWQgY29ybmVycyAqL1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7IC8qIEJhY2tncm91bmQgY29sb3IgKi9cclxuICBwYWRkaW5nOiAxMHB4OyAvKiBQYWRkaW5nIGluc2lkZSB0aGUgZWRpdG9yICovXHJcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBzYW5zLXNlcmlmOyAvKiBGb250IGZvciB0aGUgZWRpdG9yIGNvbnRlbnQgKi9cclxuICBmb250LXNpemU6IDI4cHg7IC8qIEZvbnQgc2l6ZSAqL1xyXG4gIGNvbG9yOiAjMzMzOyAvKiBUZXh0IGNvbG9yICovXHJcbiAgbGluZS1oZWlnaHQ6IDEuNTsgLyogTGluZSBoZWlnaHQgZm9yIGJldHRlciByZWFkYWJpbGl0eSAqL1xyXG4gIGhlaWdodDogMjk5cHg7IC8qIEFkanVzdCBoZWlnaHQgKi9cclxufVxyXG5cclxuLyogT3B0aW9uYWw6IFN0eWxpbmcgZm9yIHRoZSB0b29sYmFyICovXHJcbi5xbC10b29sYmFyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOGY4OyAvKiBTbGlnaHRseSBncmF5IGJhY2tncm91bmQgKi9cclxuICBwYWRkaW5nOiA0cHggMTBweDsgLyogUGFkZGluZyBpbnNpZGUgdGhlIHRvb2xiYXIgKi9cclxuICBib3JkZXItcmFkaXVzOiA4cHggOHB4IDAgMDsgLyogUm91bmRlZCB0b3AgY29ybmVycyAqL1xyXG59XHJcblxyXG4vKiBPcHRpb25hbDogVG9vbGJhciBidXR0b24gc3R5bGVzICovXHJcbi5xbC10b29sYmFyIC5xbC1mb3JtYXRzIHtcclxuICBtYXJnaW4tcmlnaHQ6IDRweDsgLyogU3BhY2UgYmV0d2VlbiBidXR0b25zICovXHJcbn1cclxuXHJcbi5xbC10b29sYmFyIC5xbC1waWNrZXIsIC5xbC10b29sYmFyIC5xbC1mb3JtYXRzIGJ1dHRvbiB7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7IC8qIFRyYW5zcGFyZW50IGJhY2tncm91bmQgKi9cclxuICBib3JkZXI6IG5vbmU7IC8qIFJlbW92ZSBkZWZhdWx0IGJvcmRlciAqL1xyXG4gIGNvbG9yOiAjNTU1OyAvKiBEYXJrIGdyYXkgY29sb3IgKi9cclxuICBwYWRkaW5nOiA2cHggMTJweDsgLyogUGFkZGluZyBpbnNpZGUgYnV0dG9ucyAqL1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDsgLyogUm91bmRlZCBjb3JuZXJzICovXHJcbiAgZm9udC1zaXplOiAyM3B4OyAvKiBGb250IHNpemUgKi9cclxuICBjdXJzb3I6IHBvaW50ZXI7IC8qIFBvaW50ZXIgY3Vyc29yIG9uIGhvdmVyICovXHJcbn1cclxuXHJcbi5xbC10b29sYmFyIC5xbC1waWNrZXI6aG92ZXIsIC5xbC10b29sYmFyIC5xbC1mb3JtYXRzIGJ1dHRvbjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YwZjBmMDsgLyogU2xpZ2h0bHkgZ3JheSBiYWNrZ3JvdW5kIG9uIGhvdmVyICovXHJcbn1cclxuXHJcbi5xbC10b29sYmFyIC5xbC1waWNrZXIucWwtYWN0aXZlLCAucWwtdG9vbGJhciAucWwtZm9ybWF0cyBidXR0b24ucWwtYWN0aXZlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTBlMGUwOyAvKiBTbGlnaHRseSBkYXJrZXIgZ3JheSBiYWNrZ3JvdW5kIGZvciBhY3RpdmUgc3RhdGUgKi9cclxufVxyXG5cclxuLnFsLWVkaXRvciAucWwtYmxhbmsge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtc2l6ZTogMjhweDtcclxufVxyXG5cclxuLyogT3B0aW9uYWw6IEFkZCByZXNwb25zaXZlbmVzcyAqL1xyXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICBxdWlsbC1lZGl0b3Ige1xyXG4gICAgbWF4LXdpZHRoOiA2MDBweDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xyXG4gIG5neC1xdWlsbCAucWwtZWRpdG9yIHtcclxuICAgIGhlaWdodDogMzAwcHg7IC8qIEFkanVzdCBoZWlnaHQgZm9yIHNtYWxsZXIgc2NyZWVucyAqL1xyXG4gIH1cclxuICBxdWlsbC1lZGl0b3Ige1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 84429:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 80436);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 50635);


_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule, {
  ngZoneEventCoalescing: true
}).then(() => {
  // bootstrapApplication is not a standard Angular method, assuming it's not needed
  // If you have an AppComponent, it should be bootstrapped in AppModule
  // If you want to provide ng2-charts, use provideCharts in the providers array of AppModule or a component.
  // Here's an example of providing ng2-charts in AppModule:
  // import { NgModule } from '@angular/core';
  // import { ChartsModule } from 'ng2-charts';
  // import { AppComponent } from './app.component';
  //
  // @NgModule({
  //   declarations: [
  //     AppComponent
  //   ],
  //   imports: [
  //     ChartsModule
  //   ],
  //   providers: [],
  //   bootstrap: [AppComponent]
  // })
  // export class AppModule { }
  // If you have a specific AppComponent, replace 'AppComponent' with its name above.
  console.log('Angular application bootstrapped successfully');
}).catch(err => console.error('Error bootstrapping Angular application', err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(84429)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map