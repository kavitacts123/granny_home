"use strict";
(self["webpackChunkgranny_home"] = self["webpackChunkgranny_home"] || []).push([["main"],{

/***/ 2912:
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AboutComponent: () => (/* binding */ AboutComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 4456);


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
    consts: [["carousel1", ""], [1, "banner", "py"], [1, "banner-sec", "banner_text"], [1, "about"], [1, "container"], [1, "row"], [1, "col-12", "col-lg-6"], [1, "about-img"], ["src", "./assets/images/ab2.png"], [1, "about-text"], [1, "design-sec", "py"], [1, "col-12", "col-xl-4", "col-lg-6", "col-md-6"], [1, "design"], [1, "design_text"], [1, "testimonial", "py"], [1, "col-12", "col-xl-4", "col-md-12", "col-lg-12"], [1, "test_text"], [1, "card"], [1, "card-body", "subtitle"], [1, "title"], [1, "col-12", "col-xl-8", "col-md-12", "col-lg-12"], [1, "card_2"], [1, "owl-carousel", "owl-theme"], [1, "item"], ["src", "./assets/images/jane.png"], ["src", "./assets/images/stars.png", 1, "stars"], [1, "items-p"], [1, "subscribe"], [1, "subscribe1"], [1, "sub_img"], ["src", "./assets/images/subscribe.png"], [1, "sub_text"], ["action", "/action_page.php"], ["type", "email", "placeholder", "Your email address", "aria-label", "Your email address", 1, "form-control"], ["type", "button", 1, "btn", "btn-success"]],
    template: function AboutComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main")(1, "section", 1)(2, "div", 2)(3, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "About Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "section", 3)(6, "div", 4)(7, "div", 5)(8, "div", 6)(9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6)(12, "div", 9)(13, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "ABOUT US");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Our Vision: Tiny Homes, Big Impact");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "At Grannyflats, we believe in the power of tiny homes to create meaningful change. Our mission is to provide innovative, sustainable, and affordable housing solutions that inspire and empower people to live more intentionally.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Grannyflats was founded by a team of passionate builders, designers, and environmental advocates who share a common goal to revolutionize the way we think about living spaces. With years of experience in the construction and design industries, we bring a wealth of knowledge and expertise to every project.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "section", 10)(22, "div", 4)(23, "div", 5)(24, "div", 11)(25, "div", 12)(26, "div", 13)(27, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Consultation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "We start by getting to know you and your vision. Our team will work closely with you to understand your needs and preferences, ensuring that your tiny home reflects your unique lifestyle.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 11)(32, "div", 12)(33, "div", 13)(34, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Design");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Our design team will create a custom layout that maximizes space and functionality. We\u2019ll provide detailed plans and 3D renderings to help you visualize your new home.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 11)(39, "div", 12)(40, "div", 13)(41, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Installation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "We handle all aspects of the installation process, from site preparation to final touches. Our goal is to make your tiny home journey as smooth and stress-free as possible.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "section", 14)(46, "div", 4)(47, "div", 5)(48, "div", 15)(49, "div", 16)(50, "div", 17)(51, "div", 18)(52, "h3", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, " TESTIMONIALS ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, " What Our Clients Are Saying ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 20)(57, "div", 21)(58, "div", 22, 0)(60, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "img", 24)(62, "img", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Jane & Mark T.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "p", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Boulder, CO");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "\"Choosing Grannyflats to build our tiny home was the best decision we ever made. The Cozy Cottage has exceeded our expectations in every way. The team was professional, attentive, and truly understood our vision. We are absolutely in love with our new home!\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "img", 24)(71, "img", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Jane & Mark T.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "p", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "Boulder, CO");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "\"Choosing Grannyflats to build our tiny home was the best decision we ever made. The Cozy Cottage has exceeded our expectations in every way. The team was professional, attentive, and truly understood our vision. We are absolutely in love with our new home!\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](79, "img", 24)(80, "img", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "Jane & Mark T.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "p", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "Boulder, CO");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "\"Choosing Grannyflats to build our tiny home was the best decision we ever made. The Cozy Cottage has exceeded our expectations in every way. The team was professional, attentive, and truly understood our vision. We are absolutely in love with our new home!\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](88, "img", 24)(89, "img", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "Jane & Mark T.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "p", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "Boulder, CO");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "\"Choosing Grannyflats to build our tiny home was the best decision we ever made. The Cozy Cottage has exceeded our expectations in every way. The team was professional, attentive, and truly understood our vision. We are absolutely in love with our new home!\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "section", 27)(97, "div", 4)(98, "div", 28)(99, "div", 5)(100, "div", 6)(101, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](102, "img", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "div", 6)(104, "div", 31)(105, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, " Subscribe to Our Newsletter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, " Join our community of tiny home enthusiasts and stay updated with the latest news, tips, and trends in the tiny home movement.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "form", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](110, "input", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "button", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()()();
      }
    },
    dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgForm],
    styles: ["\n\n.py[_ngcontent-%COMP%] {\n    padding-top: 50px;\n    padding-bottom: 50px;\n}\n\np[_ngcontent-%COMP%] {\n    font-size: 19px;\n}\n\n.banner-sec[_ngcontent-%COMP%] {\n    padding-bottom: 50px;\n}\n\n.banner[_ngcontent-%COMP%] {\n    background-image: url('about_img.png');\n    background-size: cover;\n    height: 500px;\n}\n\n.banner_text[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:before, \n.banner_text[_ngcontent-%COMP%]:after {\n    content: \" \";\n    grid-area: 1 / 1 / 2 / 2;\n    display: table;\n}\n\n.banner[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 65px;\n    padding: 20% 3%;\n    color: white;\n    font-weight: 600;\n}\n\n\n\n\n\n.about[_ngcontent-%COMP%] {\n    background-color: white;\n    margin-top: 50px;\n}\n\n.about-text[_ngcontent-%COMP%] {\n    margin-top: 80px;\n}\n\n.about-text[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 25px;\n    color: #208678;\n}\n\n.about-text[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 42px;\n}\n\n\n\n\n.about-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 100%;\n}\n\n\n\n\n\n\n.design-sec[_ngcontent-%COMP%] {\n    background-color: white;\n}\n\n.design[_ngcontent-%COMP%] {\n    height: 260px;\n    box-shadow: -3px 5px 10px rgba(0, 0, 0, .2);\n    padding: 10px 15px;\n    background-color: white;\n}\n\n.design[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    margin-top: 10px;\n    color: #208678;\n\n}\n\n.design_text[_ngcontent-%COMP%] {\n    font-size: 18px;\n    text-align: center;\n    padding: 0px 15px;\n}\n\n\n\n\n\n\n\n\n.testimonial[_ngcontent-%COMP%] {\n    background-color: #f3fcfb;\n    padding-top: 50px;\n    padding-bottom: 50px;\n    max-width: 100%;\n}\n\n.testimonial[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%] {\n    text-align: center;\n}\n\n.testimonial[_ngcontent-%COMP%]   .owl-nav[_ngcontent-%COMP%] {\n    display: none;\n}\n\n.testimonial[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 30%;\n    margin-left: auto;\n    margin-right: auto;\n}\n\n.testimonial[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n    padding-left: 20px;\n    border: #f3fcfb;\n    background-color: #f3fcfb;\n}\n\n.testimonial[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    color: #208678;\n    padding-left: 60px;\n}\n\n.testimonial[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n    background-color: #f3fcfb;\n    text-align: left;\n}\n\n.test_text[_ngcontent-%COMP%] {\n    margin-top: 50%;\n}\n\n\n\n\n\n\n.subtitle[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]:before {\n    content: '';\n    position: absolute;\n    left: 20px;\n    top: 13%;\n    transform: translateY(-50%);\n    width: 50px;\n    height: 2px;\n    background: #208678;\n}\n\n.testimonial[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n    padding: 0;\n}\n\n.testimonial[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 28px;\n}\n\n.testimonial[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 40px;\n}\n\n.testimonial[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 24px;\n    color: #208678;\n}\n\n.testimonial[_ngcontent-%COMP%]   .items-p[_ngcontent-%COMP%] {\n    font-size: 18px;\n    font-weight: bold;\n}\n\n.testimonial[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 20px;\n    font-style: italic;\n}\n\n.testimonial[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%] {\n    background-color: white;\n    margin-right: 20px;\n    padding: 20px 20px;\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n    margin-top: 20px;\n    margin-bottom: 20px;\n    margin-left: 10px;\n}\n\n.testimonial[_ngcontent-%COMP%]   .stars[_ngcontent-%COMP%] {\n    margin-bottom: 10px;\n    margin-top: 10px;\n    height: 20px;\n}\n\n\n\n\n\n\n.subscribe[_ngcontent-%COMP%] {\n    background-color: white;\n    padding-top: 20px;\n    padding-bottom: 20px;\n}\n\n.subscribe[_ngcontent-%COMP%]   .subscribe1[_ngcontent-%COMP%] {\n    background-color: #208678;\n    border-radius: 20px;\n    margin-top: 50px;\n}\n\n.subscribe[_ngcontent-%COMP%]   .sub_img[_ngcontent-%COMP%] {\n    padding-top: 20px;\n    padding-bottom: 20px;\n}\n\n.subscribe[_ngcontent-%COMP%]   .sub_img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 100%;\n}\n\n.subscribe[_ngcontent-%COMP%]   .sub_text[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    color: white;\n    font-size: 42px;\n}\n\n.subscribe[_ngcontent-%COMP%]   .sub_text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    color: white;\n    font-size: 21px;\n    margin-top: 10px;\n}\n\n.subscribe[_ngcontent-%COMP%]   .sub_text[_ngcontent-%COMP%] {\n    padding: 30px 20px;\n}\n\n.subscribe[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n    display: flex;\n}\n\n.subscribe[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n    display: inline;\n    width: 50%;\n    padding: 10px 10px;\n    background-color: white;\n    border-color: white;\n    border-radius: 0;\n}\n\n.subscribe[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    padding: 10px 30px;\n    color: white;\n    background-color: #4b4b4b;\n    border-color: #4b4b4b;\n    border-radius: 0;\n}\n\n\n\n\n\n@media only screen and (min-width: 1441px) {\n    p[_ngcontent-%COMP%] {\n        font-size: 22px;\n    }\n\n\n}\n\n@media only screen and (max-width: 1199px) {\n    .design[_ngcontent-%COMP%] {\n        height: 220px;\n        margin-bottom: 20px;\n    }\n    p[_ngcontent-%COMP%] {\n        font-size: 18px;\n    }\n    .about-text[_ngcontent-%COMP%] {\n        margin-top: 40px;\n    }\n\n    .design[_ngcontent-%COMP%] {\n        margin-bottom: 20px;\n    }\n    .test_text[_ngcontent-%COMP%]{\n        margin-top: 0;\n    }\n    .testimonial[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n        margin-bottom: 20px;\n    }\n    .subscribe[_ngcontent-%COMP%]   .sub_text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n        font-size: 18px;\n    }\n    .testimonial[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n        font-size: 18px;\n        font-style: italic;\n    }\n    .about-text[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n        font-size: 36px;\n    }\n    .subscribe[_ngcontent-%COMP%]   .sub_text[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n        color: white;\n        font-size: 36px;\n    }\n    .testimonial[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n        padding-left: 0;\n    }\n    .subtitle[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]:before {\n        left: 0;\n    }\n\n}\n\n@media only screen and (max-width: 991px) {\n    .about-text[_ngcontent-%COMP%] {\n        margin-top: 20px;\n    }\n    .banner[_ngcontent-%COMP%]  {\n        height: 400px;\n    }\n\n    .design[_ngcontent-%COMP%] {\n        margin-bottom: 20px;\n    }\n    .banner[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n        font-size: 50px;\n    }\n    .design[_ngcontent-%COMP%] {\n        height: 270px;\n    }\n}\n\n@media only screen and (max-width: 767px) {}\n\n@media only screen and (max-width: 575px) {\n    .banner[_ngcontent-%COMP%] {\n        height: 300px;\n    }\n    .banner[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n        font-size: 35px;\n        padding: 26% 3%;\n    }\n    .design[_ngcontent-%COMP%] {\n        height: 230px;\n    }\n    .about-text[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n        font-size: 31px;\n    }\n    .testimonial[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n        font-size: 29px;\n    }\n    .testimonial[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n        padding-left: 0;\n    }\n    .subtitle[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]:before  {\n        left: 0;\n        top: 20%;\n        width: 35px;\n    }\n    .subscribe[_ngcontent-%COMP%]   .sub_text[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n        color: white;\n        font-size: 28px;\n    }\n    .subscribe[_ngcontent-%COMP%]{\n        margin-bottom: 30px;\n    }\n    .subscribe[_ngcontent-%COMP%]   .sub_text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n        font-size: 18px;\n    }\n    .testimonial[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n        font-size: 18px;\n        font-style: italic;\n    }\n    p[_ngcontent-%COMP%] {\n        font-size: 18px;\n    }\n    \n    .testimonial[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n        color: #208678;\n        padding-left: 40px;\n    }\n    .testimonial[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n        padding-left: 0;\n        border: #f3fcfb;\n        background-color: #f3fcfb;\n    }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYWJvdXQvYWJvdXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxtQkFBbUI7QUFDbkI7SUFDSSxpQkFBaUI7SUFDakIsb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLHNDQUF3RDtJQUN4RCxzQkFBc0I7SUFDdEIsYUFBYTtBQUNqQjs7QUFFQTs7SUFFSSxZQUFZO0lBQ1osd0JBQXdCO0lBQ3hCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsZUFBZTtJQUNmLFlBQVk7SUFDWixnQkFBZ0I7QUFDcEI7O0FBRUEsbUJBQW1COzs7QUFHbkI7SUFDSSx1QkFBdUI7SUFDdkIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBLGlCQUFpQjs7QUFFakI7SUFDSSxXQUFXO0FBQ2Y7O0FBRUEsaUJBQWlCOztBQUVqQixrQkFBa0I7QUFDbEI7SUFDSSx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsMkNBQTJDO0lBQzNDLGtCQUFrQjtJQUNsQix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsY0FBYzs7QUFFbEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLGlCQUFpQjtBQUNyQjs7QUFFQSxrQkFBa0I7OztBQUdsQixlQUFlOztBQUVmO0lBQ0kseUJBQXlCO0lBQ3pCLGlCQUFpQjtJQUNqQixvQkFBb0I7SUFDcEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBOztHQUVHOztBQUVIO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsUUFBUTtJQUNSLDJCQUEyQjtJQUMzQixXQUFXO0lBQ1gsV0FBVztJQUNYLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksZUFBZTtJQUNmLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLDRFQUE0RTtJQUM1RSxnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsWUFBWTtBQUNoQjs7QUFFQSxlQUFlOztBQUVmLGFBQWE7QUFDYjtJQUNJLHVCQUF1QjtJQUN2QixpQkFBaUI7SUFDakIsb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLG1CQUFtQjtJQUNuQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osZUFBZTtJQUNmLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsVUFBVTtJQUNWLGtCQUFrQjtJQUNsQix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLHFCQUFxQjtJQUNyQixnQkFBZ0I7QUFDcEI7O0FBRUEsY0FBYzs7O0FBR2Q7SUFDSTtRQUNJLGVBQWU7SUFDbkI7OztBQUdKOztBQUVBO0lBQ0k7UUFDSSxhQUFhO1FBQ2IsbUJBQW1CO0lBQ3ZCO0lBQ0E7UUFDSSxlQUFlO0lBQ25CO0lBQ0E7UUFDSSxnQkFBZ0I7SUFDcEI7O0lBRUE7UUFDSSxtQkFBbUI7SUFDdkI7SUFDQTtRQUNJLGFBQWE7SUFDakI7SUFDQTtRQUNJLG1CQUFtQjtJQUN2QjtJQUNBO1FBQ0ksZUFBZTtJQUNuQjtJQUNBO1FBQ0ksZUFBZTtRQUNmLGtCQUFrQjtJQUN0QjtJQUNBO1FBQ0ksZUFBZTtJQUNuQjtJQUNBO1FBQ0ksWUFBWTtRQUNaLGVBQWU7SUFDbkI7SUFDQTtRQUNJLGVBQWU7SUFDbkI7SUFDQTtRQUNJLE9BQU87SUFDWDs7QUFFSjs7QUFFQTtJQUNJO1FBQ0ksZ0JBQWdCO0lBQ3BCO0lBQ0E7UUFDSSxhQUFhO0lBQ2pCOztJQUVBO1FBQ0ksbUJBQW1CO0lBQ3ZCO0lBQ0E7UUFDSSxlQUFlO0lBQ25CO0lBQ0E7UUFDSSxhQUFhO0lBQ2pCO0FBQ0o7O0FBRUEsMkNBQTJDOztBQUUzQztJQUNJO1FBQ0ksYUFBYTtJQUNqQjtJQUNBO1FBQ0ksZUFBZTtRQUNmLGVBQWU7SUFDbkI7SUFDQTtRQUNJLGFBQWE7SUFDakI7SUFDQTtRQUNJLGVBQWU7SUFDbkI7SUFDQTtRQUNJLGVBQWU7SUFDbkI7SUFDQTtRQUNJLGVBQWU7SUFDbkI7SUFDQTtRQUNJLE9BQU87UUFDUCxRQUFRO1FBQ1IsV0FBVztJQUNmO0lBQ0E7UUFDSSxZQUFZO1FBQ1osZUFBZTtJQUNuQjtJQUNBO1FBQ0ksbUJBQW1CO0lBQ3ZCO0lBQ0E7UUFDSSxlQUFlO0lBQ25CO0lBQ0E7UUFDSSxlQUFlO1FBQ2Ysa0JBQWtCO0lBQ3RCO0lBQ0E7UUFDSSxlQUFlO0lBQ25COztJQUVBO1FBQ0ksY0FBYztRQUNkLGtCQUFrQjtJQUN0QjtJQUNBO1FBQ0ksZUFBZTtRQUNmLGVBQWU7UUFDZix5QkFBeUI7SUFDN0I7QUFDSiIsInNvdXJjZXNDb250ZW50IjpbIi8qIGJhbm5lciBTZWN0aW9uICovXHJcbi5weSB7XHJcbiAgICBwYWRkaW5nLXRvcDogNTBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiA1MHB4O1xyXG59XHJcblxyXG5wIHtcclxuICAgIGZvbnQtc2l6ZTogMTlweDtcclxufVxyXG5cclxuLmJhbm5lci1zZWMge1xyXG4gICAgcGFkZGluZy1ib3R0b206IDUwcHg7XHJcbn1cclxuXHJcbi5iYW5uZXIge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uL2Fzc2V0cy9pbWFnZXMvYWJvdXRfaW1nLnBuZyk7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgaGVpZ2h0OiA1MDBweDtcclxufVxyXG5cclxuLmJhbm5lcl90ZXh0IDpiZWZvcmUsXHJcbi5iYW5uZXJfdGV4dDphZnRlciB7XHJcbiAgICBjb250ZW50OiBcIiBcIjtcclxuICAgIGdyaWQtYXJlYTogMSAvIDEgLyAyIC8gMjtcclxuICAgIGRpc3BsYXk6IHRhYmxlO1xyXG59XHJcblxyXG4uYmFubmVyIGgxIHtcclxuICAgIGZvbnQtc2l6ZTogNjVweDtcclxuICAgIHBhZGRpbmc6IDIwJSAzJTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuXHJcbi8qIGJhbm5lciBTZWN0aW9uICovXHJcblxyXG5cclxuLmFib3V0IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgbWFyZ2luLXRvcDogNTBweDtcclxufVxyXG5cclxuLmFib3V0LXRleHQge1xyXG4gICAgbWFyZ2luLXRvcDogODBweDtcclxufVxyXG5cclxuLmFib3V0LXRleHQgaDMge1xyXG4gICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgY29sb3I6ICMyMDg2Nzg7XHJcbn1cclxuXHJcbi5hYm91dC10ZXh0IGgyIHtcclxuICAgIGZvbnQtc2l6ZTogNDJweDtcclxufVxyXG5cclxuLyphYm91dCBzZWN0aW9uICovXHJcblxyXG4uYWJvdXQtaW1nIGltZyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLyphYm91dCBzZWN0aW9uICovXHJcblxyXG4vKmRlc2lnbiBzZWN0aW9uICovXHJcbi5kZXNpZ24tc2VjIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uZGVzaWduIHtcclxuICAgIGhlaWdodDogMjYwcHg7XHJcbiAgICBib3gtc2hhZG93OiAtM3B4IDVweCAxMHB4IHJnYmEoMCwgMCwgMCwgLjIpO1xyXG4gICAgcGFkZGluZzogMTBweCAxNXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5kZXNpZ24gaDMge1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIGNvbG9yOiAjMjA4Njc4O1xyXG5cclxufVxyXG5cclxuLmRlc2lnbl90ZXh0IHtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDBweCAxNXB4O1xyXG59XHJcblxyXG4vKmRlc2lnbiBzZWN0aW9uICovXHJcblxyXG5cclxuLyp0ZXN0aW1vbmlhbHMqL1xyXG5cclxuLnRlc3RpbW9uaWFsIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmM2ZjZmI7XHJcbiAgICBwYWRkaW5nLXRvcDogNTBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiA1MHB4O1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4udGVzdGltb25pYWwgLml0ZW0ge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4udGVzdGltb25pYWwgLm93bC1uYXYge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLnRlc3RpbW9uaWFsIC5pdGVtIGltZyB7XHJcbiAgICB3aWR0aDogMzAlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbn1cclxuXHJcbi50ZXN0aW1vbmlhbCAuY2FyZCB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbiAgICBib3JkZXI6ICNmM2ZjZmI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjNmY2ZiO1xyXG59XHJcblxyXG4udGVzdGltb25pYWwgLmNhcmQgaDMge1xyXG4gICAgY29sb3I6ICMyMDg2Nzg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDYwcHg7XHJcbn1cclxuXHJcbi50ZXN0aW1vbmlhbCAuY2FyZC1ib2R5IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmM2ZjZmI7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcblxyXG4udGVzdF90ZXh0IHtcclxuICAgIG1hcmdpbi10b3A6IDUwJTtcclxufVxyXG5cclxuLyogLnN1YnRpdGxle1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59ICovXHJcblxyXG4uc3VidGl0bGUgLnRpdGxlOmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDIwcHg7XHJcbiAgICB0b3A6IDEzJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgaGVpZ2h0OiAycHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMjA4Njc4O1xyXG59XHJcblxyXG4udGVzdGltb25pYWwgLmNhcmQtYm9keSB7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG4udGVzdGltb25pYWwgLmNhcmQtYm9keSBoMyB7XHJcbiAgICBmb250LXNpemU6IDI4cHg7XHJcbn1cclxuXHJcbi50ZXN0aW1vbmlhbCAuY2FyZC1ib2R5IGgyIHtcclxuICAgIGZvbnQtc2l6ZTogNDBweDtcclxufVxyXG5cclxuLnRlc3RpbW9uaWFsIC5pdGVtIGgzIHtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIGNvbG9yOiAjMjA4Njc4O1xyXG59XHJcblxyXG4udGVzdGltb25pYWwgLml0ZW1zLXAge1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi50ZXN0aW1vbmlhbCAuaXRlbSBwIHtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxufVxyXG5cclxuLnRlc3RpbW9uaWFsIC5pdGVtIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG4gICAgcGFkZGluZzogMjBweCAyMHB4O1xyXG4gICAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDZweCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE5KTtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbn1cclxuXHJcbi50ZXN0aW1vbmlhbCAuc3RhcnMge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcbn1cclxuXHJcbi8qdGVzdGltb25pYWxzKi9cclxuXHJcbi8qIHN1YnNjcmliZSovXHJcbi5zdWJzY3JpYmUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG59XHJcblxyXG4uc3Vic2NyaWJlIC5zdWJzY3JpYmUxIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMDg2Nzg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogNTBweDtcclxufVxyXG5cclxuLnN1YnNjcmliZSAuc3ViX2ltZyB7XHJcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG59XHJcblxyXG4uc3Vic2NyaWJlIC5zdWJfaW1nIGltZyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLnN1YnNjcmliZSAuc3ViX3RleHQgaDIge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1zaXplOiA0MnB4O1xyXG59XHJcblxyXG4uc3Vic2NyaWJlIC5zdWJfdGV4dCBwIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtc2l6ZTogMjFweDtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbn1cclxuXHJcbi5zdWJzY3JpYmUgLnN1Yl90ZXh0IHtcclxuICAgIHBhZGRpbmc6IDMwcHggMjBweDtcclxufVxyXG5cclxuLnN1YnNjcmliZSBmb3JtIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbi5zdWJzY3JpYmUgLmZvcm0tY29udHJvbCB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmU7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgcGFkZGluZzogMTBweCAxMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXItY29sb3I6IHdoaXRlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMDtcclxufVxyXG5cclxuLnN1YnNjcmliZSAuYnRuIHtcclxuICAgIHBhZGRpbmc6IDEwcHggMzBweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0YjRiNGI7XHJcbiAgICBib3JkZXItY29sb3I6ICM0YjRiNGI7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwO1xyXG59XHJcblxyXG4vKiBzdWJzY3JpYmUgKi9cclxuXHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE0NDFweCkge1xyXG4gICAgcCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgfVxyXG5cclxuXHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTE5OXB4KSB7XHJcbiAgICAuZGVzaWduIHtcclxuICAgICAgICBoZWlnaHQ6IDIyMHB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICB9XHJcbiAgICBwIHtcclxuICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICB9XHJcbiAgICAuYWJvdXQtdGV4dCB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNDBweDtcclxuICAgIH1cclxuXHJcbiAgICAuZGVzaWduIHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgfVxyXG4gICAgLnRlc3RfdGV4dHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgfVxyXG4gICAgLnRlc3RpbW9uaWFsIC5jYXJkLWJvZHkgaDIge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICB9XHJcbiAgICAuc3Vic2NyaWJlIC5zdWJfdGV4dCBwIHtcclxuICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICB9XHJcbiAgICAudGVzdGltb25pYWwgLml0ZW0gcCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICAgIH1cclxuICAgIC5hYm91dC10ZXh0IGgyIHtcclxuICAgICAgICBmb250LXNpemU6IDM2cHg7XHJcbiAgICB9XHJcbiAgICAuc3Vic2NyaWJlIC5zdWJfdGV4dCBoMiB7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMzZweDtcclxuICAgIH1cclxuICAgIC50ZXN0aW1vbmlhbCAuY2FyZCB7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAwO1xyXG4gICAgfVxyXG4gICAgLnN1YnRpdGxlIC50aXRsZTpiZWZvcmUge1xyXG4gICAgICAgIGxlZnQ6IDA7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MXB4KSB7XHJcbiAgICAuYWJvdXQtdGV4dCB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIH1cclxuICAgIC5iYW5uZXIgIHtcclxuICAgICAgICBoZWlnaHQ6IDQwMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5kZXNpZ24ge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICB9XHJcbiAgICAuYmFubmVyIGgxIHtcclxuICAgICAgICBmb250LXNpemU6IDUwcHg7XHJcbiAgICB9XHJcbiAgICAuZGVzaWduIHtcclxuICAgICAgICBoZWlnaHQ6IDI3MHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7fVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NzVweCkge1xyXG4gICAgLmJhbm5lciB7XHJcbiAgICAgICAgaGVpZ2h0OiAzMDBweDtcclxuICAgIH1cclxuICAgIC5iYW5uZXIgaDEge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMzVweDtcclxuICAgICAgICBwYWRkaW5nOiAyNiUgMyU7XHJcbiAgICB9XHJcbiAgICAuZGVzaWduIHtcclxuICAgICAgICBoZWlnaHQ6IDIzMHB4O1xyXG4gICAgfVxyXG4gICAgLmFib3V0LXRleHQgaDIge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMzFweDtcclxuICAgIH1cclxuICAgIC50ZXN0aW1vbmlhbCAuY2FyZC1ib2R5IGgyIHtcclxuICAgICAgICBmb250LXNpemU6IDI5cHg7XHJcbiAgICB9XHJcbiAgICAudGVzdGltb25pYWwgLmNhcmQge1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMDtcclxuICAgIH1cclxuICAgIC5zdWJ0aXRsZSAudGl0bGU6YmVmb3JlICB7XHJcbiAgICAgICAgbGVmdDogMDtcclxuICAgICAgICB0b3A6IDIwJTtcclxuICAgICAgICB3aWR0aDogMzVweDtcclxuICAgIH1cclxuICAgIC5zdWJzY3JpYmUgLnN1Yl90ZXh0IGgyIHtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgZm9udC1zaXplOiAyOHB4O1xyXG4gICAgfVxyXG4gICAgLnN1YnNjcmliZXtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gICAgfVxyXG4gICAgLnN1YnNjcmliZSAuc3ViX3RleHQgcCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgfVxyXG4gICAgLnRlc3RpbW9uaWFsIC5pdGVtIHAge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICB9XHJcbiAgICBwIHtcclxuICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC50ZXN0aW1vbmlhbCAuY2FyZCBoMyB7XHJcbiAgICAgICAgY29sb3I6ICMyMDg2Nzg7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiA0MHB4O1xyXG4gICAgfVxyXG4gICAgLnRlc3RpbW9uaWFsIC5jYXJkIHtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDA7XHJcbiAgICAgICAgYm9yZGVyOiAjZjNmY2ZiO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmM2ZjZmI7XHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 4114:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppRoutingModule: () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home/home.component */ 7824);
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./about/about.component */ 2912);
/* harmony import */ var _booking_form_booking_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./booking-form/booking-form.component */ 2350);
/* harmony import */ var _blog_blog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./blog/blog.component */ 2242);
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contact/contact.component */ 8712);
/* harmony import */ var _form2_form2_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./form2/form2.component */ 652);
/* harmony import */ var _form2_destination_destination_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./form2/destination/destination.component */ 4031);
/* harmony import */ var _form2_date_date_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./form2/date/date.component */ 4629);
/* harmony import */ var _form2_rooms_rooms_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./form2/rooms/rooms.component */ 3755);
/* harmony import */ var _form2_peoples_peoples_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./form2/peoples/peoples.component */ 8231);
/* harmony import */ var _form2_hotel_list_hotel_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./form2/hotel-list/hotel-list.component */ 1091);
/* harmony import */ var _form2_payment_payment_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./form2/payment/payment.component */ 4559);
/* harmony import */ var _signin_signin_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./signin/signin.component */ 9550);
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./login/login.component */ 3644);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 7580);

















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
  component: _signin_signin_component__WEBPACK_IMPORTED_MODULE_12__.SigninComponent
}, {
  path: 'login',
  component: _login_login_component__WEBPACK_IMPORTED_MODULE_13__.LoginComponent
}, {
  path: 'form2',
  component: _form2_form2_component__WEBPACK_IMPORTED_MODULE_5__.Form2Component,
  children: [{
    path: 'destination',
    component: _form2_destination_destination_component__WEBPACK_IMPORTED_MODULE_6__.DestinationComponent
  }, {
    path: 'hotel_list',
    component: _form2_hotel_list_hotel_list_component__WEBPACK_IMPORTED_MODULE_10__.HotelListComponent
  }, {
    path: 'date',
    component: _form2_date_date_component__WEBPACK_IMPORTED_MODULE_7__.DateComponent
  }, {
    path: 'rooms',
    component: _form2_rooms_rooms_component__WEBPACK_IMPORTED_MODULE_8__.RoomsComponent
  }, {
    path: 'peoples',
    component: _form2_peoples_peoples_component__WEBPACK_IMPORTED_MODULE_9__.PeoplesComponent
  }, {
    path: 'payment',
    component: _form2_payment_payment_component__WEBPACK_IMPORTED_MODULE_11__.PaymentComponent
  }, {
    path: '',
    redirectTo: 'destination',
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
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineNgModule"]({
    type: AppRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_15__.RouterModule.forRoot(routes, {
      useHash: true
    }), _angular_router__WEBPACK_IMPORTED_MODULE_15__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_15__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_15__.RouterModule]
  });
})();

/***/ }),

/***/ 92:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header/header.component */ 2152);
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer/footer.component */ 708);




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

/***/ 635:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppModule: () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 8418);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/input */ 5541);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/core */ 4646);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/datepicker */ 1977);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/platform-browser */ 436);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 4114);
/* harmony import */ var ngx_daterangepicker_material__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ngx-daterangepicker-material */ 4816);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/platform-browser/animations */ 3835);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/form-field */ 4950);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/button */ 4175);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/icon */ 3840);
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ 8379);
/* harmony import */ var ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ngx-bootstrap/locale */ 4875);
/* harmony import */ var ngx_dropzone__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ngx-dropzone */ 3947);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 92);
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about/about.component */ 2912);
/* harmony import */ var _services_services_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/services.component */ 5994);
/* harmony import */ var _blog_blog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./blog/blog.component */ 2242);
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./contact/contact.component */ 8712);
/* harmony import */ var _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./gallery/gallery.component */ 7992);
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./header/header.component */ 2152);
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./footer/footer.component */ 708);
/* harmony import */ var _form2_form2_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./form2/form2.component */ 652);
/* harmony import */ var _booking_form_booking_form_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./booking-form/booking-form.component */ 2350);
/* harmony import */ var _form2_destination_destination_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./form2/destination/destination.component */ 4031);
/* harmony import */ var _form2_date_date_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./form2/date/date.component */ 4629);
/* harmony import */ var _form2_peoples_peoples_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./form2/peoples/peoples.component */ 8231);
/* harmony import */ var _form2_rooms_rooms_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./form2/rooms/rooms.component */ 3755);
/* harmony import */ var _form2_hotel_list_hotel_list_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./form2/hotel-list/hotel-list.component */ 1091);
/* harmony import */ var _form2_payment_payment_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./form2/payment/payment.component */ 4559);
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./home/home.component */ 7824);
/* harmony import */ var _form2_destination1_destination1_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./form2/destination1/destination1.component */ 1031);
/* harmony import */ var _signin_signin_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./signin/signin.component */ 9550);
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./login/login.component */ 3644);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/core */ 7580);








































(0,ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_21__.defineLocale)('en-gb', ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_21__.enGbLocale);
class AppModule {
  static #_ = this.ɵfac = function AppModule_Factory(t) {
    return new (t || AppModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdefineNgModule"]({
    type: AppModule,
    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdefineInjector"]({
    providers: [(0,_angular_platform_browser__WEBPACK_IMPORTED_MODULE_23__.provideClientHydration)()],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_23__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_24__.ReactiveFormsModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_25__.NgbModule, _angular_forms__WEBPACK_IMPORTED_MODULE_24__.FormsModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_26__.MatInputModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_27__.MatNativeDateModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_28__.MatDatepickerModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_29__.BrowserAnimationsModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_30__.MatFormFieldModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_31__.MatButtonModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_32__.MatIconModule, ngx_dropzone__WEBPACK_IMPORTED_MODULE_33__.NgxDropzoneModule, ngx_daterangepicker_material__WEBPACK_IMPORTED_MODULE_34__.NgxDaterangepickerMd.forRoot(), ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_35__.BsDatepickerModule.forRoot()]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _about_about_component__WEBPACK_IMPORTED_MODULE_2__.AboutComponent, _services_services_component__WEBPACK_IMPORTED_MODULE_3__.ServicesComponent, _blog_blog_component__WEBPACK_IMPORTED_MODULE_4__.BlogComponent, _contact_contact_component__WEBPACK_IMPORTED_MODULE_5__.ContactComponent, _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_6__.GalleryComponent, _header_header_component__WEBPACK_IMPORTED_MODULE_7__.HeaderComponent, _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__.FooterComponent, _form2_form2_component__WEBPACK_IMPORTED_MODULE_9__.Form2Component, _booking_form_booking_form_component__WEBPACK_IMPORTED_MODULE_10__.BookingFormComponent, _form2_destination_destination_component__WEBPACK_IMPORTED_MODULE_11__.DestinationComponent, _form2_date_date_component__WEBPACK_IMPORTED_MODULE_12__.DateComponent, _form2_peoples_peoples_component__WEBPACK_IMPORTED_MODULE_13__.PeoplesComponent, _form2_rooms_rooms_component__WEBPACK_IMPORTED_MODULE_14__.RoomsComponent, _form2_hotel_list_hotel_list_component__WEBPACK_IMPORTED_MODULE_15__.HotelListComponent, _form2_payment_payment_component__WEBPACK_IMPORTED_MODULE_16__.PaymentComponent, _home_home_component__WEBPACK_IMPORTED_MODULE_17__.HomeComponent, _form2_destination1_destination1_component__WEBPACK_IMPORTED_MODULE_18__.Destination1Component, _signin_signin_component__WEBPACK_IMPORTED_MODULE_19__.SigninComponent, _login_login_component__WEBPACK_IMPORTED_MODULE_20__.LoginComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_23__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_24__.ReactiveFormsModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_25__.NgbModule, _angular_forms__WEBPACK_IMPORTED_MODULE_24__.FormsModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_26__.MatInputModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_27__.MatNativeDateModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_28__.MatDatepickerModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_29__.BrowserAnimationsModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_30__.MatFormFieldModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_31__.MatButtonModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_32__.MatIconModule, ngx_dropzone__WEBPACK_IMPORTED_MODULE_33__.NgxDropzoneModule, ngx_daterangepicker_material__WEBPACK_IMPORTED_MODULE_34__.NgxDaterangepickerMd, ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_35__.BsDatepickerModule]
  });
})();

/***/ }),

/***/ 2242:
/*!****************************************!*\
  !*** ./src/app/blog/blog.component.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BlogComponent: () => (/* binding */ BlogComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);

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

/***/ 2350:
/*!********************************************************!*\
  !*** ./src/app/booking-form/booking-form.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BookingFormComponent: () => (/* binding */ BookingFormComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var ngx_dropzone__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-dropzone */ 3947);





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
      console.log('Form Submitted!', form.value);
    } else {
      console.log('Form is invalid.');
    }
  }
  showAlert() {
    alert('Form has been submitted!');
  }
  static #_ = this.ɵfac = function BookingFormComponent_Factory(t) {
    return new (t || BookingFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormBuilder));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: BookingFormComponent,
    selectors: [["app-booking-form"]],
    decls: 95,
    vars: 19,
    consts: [["bookingForm", "ngForm"], ["firstName", "ngModel"], ["lastName", "ngModel"], ["email", "ngModel"], ["phone", "ngModel"], ["location", "ngModel"], ["roomType", "ngModel"], ["checkinDate", "ngModel"], ["checkoutDate", "ngModel"], [1, "form1"], [1, "container"], [1, "form_text"], [1, "booking-form", 3, "ngSubmit"], [1, "form-heading"], [1, "row"], [1, "col-md-6"], [1, "form-group"], ["for", "firstName"], ["type", "text", "id", "firstName", "name", "firstName", "required", "", "minlength", "2", 1, "form-control", 3, "ngModelChange", "ngModel"], ["class", "text-danger", 4, "ngIf"], ["for", "name"], ["type", "text", "id", "lastName", "name", "lastName", "required", "", "minlength", "2", 1, "form-control", 3, "ngModelChange", "ngModel"], ["for", "age"], ["type", "email", "id", "email", "name", "email", "required", "", "email", "", 1, "form-control", 3, "ngModelChange", "ngModel"], ["for", "phone"], ["type", "tel", "id", "phone", "name", "phone", "required", "", "pattern", "[0-9]{10}", 1, "form-control", 3, "ngModelChange", "ngModel"], ["for", "location"], ["id", "location", "name", "location", "required", "", 1, "form-control", 3, "ngModelChange", "ngModel"], ["value", ""], ["value", "New York"], ["value", "Los Angeles"], ["value", "Chicago"], ["value", "San Francisco"], ["for", "roomType"], ["id", "roomType", "name", "roomType", "required", "", 1, "form-control", 3, "ngModelChange", "ngModel"], [3, "value", 4, "ngFor", "ngForOf"], ["for", "checkinDate"], ["type", "date", "id", "checkinDate", "name", "checkinDate", "required", "", 1, "form-control", 3, "ngModelChange", "ngModel"], ["for", "checkoutDate"], ["type", "date", "id", "checkoutDate", "name", "checkoutDate", "required", "", 1, "form-control", 3, "ngModelChange", "ngModel", "min"], [3, "change"], [1, "upload"], ["src", "./assets/images/drop.jpeg", 1, "upload_img"], [1, "drop_input"], [3, "removable", "removed", 4, "ngFor", "ngForOf"], [1, "submit"], [1, "btn", "btn-succes"], [1, "text-danger"], [4, "ngIf"], [3, "value"], [3, "removed", "removable"]],
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
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.MinLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.PatternValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.EmailValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgForm, ngx_dropzone__WEBPACK_IMPORTED_MODULE_3__.NgxDropzoneComponent, ngx_dropzone__WEBPACK_IMPORTED_MODULE_3__.NgxDropzoneLabelDirective, ngx_dropzone__WEBPACK_IMPORTED_MODULE_3__.NgxDropzonePreviewComponent],
    styles: [".form1[_ngcontent-%COMP%] {\n    margin-top: 50px;\n    margin-bottom: 50px;\n\n}\n\nh2[_ngcontent-%COMP%] {\n    text-align: center;\n    margin-bottom: 20px;\n    font-weight: 800;\n    font-size: 30px;\n    color: white;\n}\n\n.form_text[_ngcontent-%COMP%] {\n    max-width: 500px;\n    padding-top: 20px;\n    border-radius: 10px;\n    margin-left: auto;\n    margin-right: auto;\n    background: rgba(255, 255, 255, 0.9); \n    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2); \n    width: 100%;\n    z-index: 1; \n    background: url('bg3-img.jpg') no-repeat center center; \n    background-size: cover;\n    position: relative;\n    background-position: center;\n}\n\n\n.form_text[_ngcontent-%COMP%]::before {\n    content: '';\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background: rgba(0, 0, 0, 0.5); \n\n    filter: blur(8px); \n\n    z-index: -1; \n\n}\n\n\n.upload[_ngcontent-%COMP%] {\n    display: block;\n    margin-left: auto;\n    margin-right: auto;\n}\n\n.upload_img[_ngcontent-%COMP%] {\n    height: 130px;\n}\n\n.drop_input[_ngcontent-%COMP%] {\n    text-align: center;\n    width: 100%;\n}\n\ninput[type=text][_ngcontent-%COMP%], \ninput[type=email][_ngcontent-%COMP%], \ninput[type=date][_ngcontent-%COMP%], \ninput[type=time][_ngcontent-%COMP%] {\n    width: 100%;\n    font-size: 16px;\n    border: 1px solid #ccc;\n    border-radius: 4px;\n    box-sizing: border-box;\n}\n\n.input-group[_ngcontent-%COMP%] {\n    background-color: transparent;\n    border-style: solid;\n    border-color: white;\n    height: 45px;\n    width: 100%;\n    border-radius: 4px;\n    display: flex;\n\n}\n\nbutton.btn.btn-succes[_ngcontent-%COMP%] {\n    background-color: #494949;\n    color: white;\n}\n\nselect#location[_ngcontent-%COMP%] {\n    width: 100%;\n    font-size: 16px;\n    border: 1px solid #ccc;\n    border-radius: 4px;\n    box-sizing: border-box;\n    display: block;\n}\n\nlabel[_ngcontent-%COMP%] {\n    font-weight: bold;\n    font-size: 13px;\n    color: white;\n}\n\n.form-group[_ngcontent-%COMP%] {\n    margin-bottom: 10px;\n}\n\n.form-heading[_ngcontent-%COMP%] {\n    width: 100%;\n    \n\n}\n\ninput#phone[_ngcontent-%COMP%] {\n    width: 100%;\n    font-size: 16px;\n    border: 1px solid #ccc;\n    border-radius: 4px;\n    box-sizing: border-box;\n    display: block;\n}\n\ninput#age[_ngcontent-%COMP%] {\n    width: 100%;\n    font-size: 16px;\n    border: 1px solid #ccc;\n    border-radius: 4px;\n    box-sizing: border-box;\n    display: block;\n}\n\nselect#roomType[_ngcontent-%COMP%] {\n    width: 100%;\n    font-size: 16px;\n    border: 1px solid #ccc;\n    border-radius: 4px;\n    box-sizing: border-box;\n    display: block;\n}\n\nngx-dropzone[_ngcontent-%COMP%] {\n    height: auto;\n}\nngx-dropzone-label[_ngcontent-%COMP%] {\n    overflow: auto;\n}\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\ninput#numberOfAdults[_ngcontent-%COMP%] {\n    border: transparent;\n    margin-left: auto;\n    margin-right: auto;\n    text-align: center;\n    font-size: 14px;\n    height: 37px;\n    width: 30px;\n}\n\ninput#numberOfChildren[_ngcontent-%COMP%] {\n    border: transparent;\n    margin-left: auto;\n    margin-right: auto;\n    text-align: center;\n    font-size: 14px;\n    height: 37px;\n    width: 30px;\n}\n\nbutton[_ngcontent-%COMP%] {\n    color: white;\n    border: none;\n    cursor: pointer;\n    margin-bottom: 20px;\n    margin-top: 20px;\n    width: 100%;\n    padding: 10px 20px;\n}\n\n.booking-form[_ngcontent-%COMP%] {\n    max-width: 400px;\n    margin: 0 auto;\n    \n\n    border-radius: 5px;\n    \n\n}\n\ninput[type=\"file\"][_ngcontent-%COMP%] {\n    display: block;\n    margin-top: 0.5rem;\n}\n\nselect[_ngcontent-%COMP%] {\n    width: 100%;\n    padding: 0.375rem 0.75rem;\n    font-size: 1rem;\n    line-height: 1.5;\n    color: #495057;\n    background-color: #fff;\n    background-clip: padding-box;\n    border: 1px solid #ced4da;\n    border-radius: 0.25rem;\n    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n}\n\n.error-message[_ngcontent-%COMP%] {\n    color: red;\n    font-size: 0.875rem;\n    margin-top: 0.25rem;\n}\n\n\n@media only screen and (max-width: 575px) {\n    h2[_ngcontent-%COMP%] {\n        text-align: center;\n        margin-bottom: 20px;\n        font-weight: 800;\n        font-size: 25px;\n    }\n\n    form.booking-form[_ngcontent-%COMP%] {\n        max-width: 350px;\n    }\n\n    .form1[_ngcontent-%COMP%] {\n        margin-top: 95px;\n        margin-bottom: 51px;\n    }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYm9va2luZy1mb3JtL2Jvb2tpbmctZm9ybS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0lBQ2hCLG1CQUFtQjs7QUFFdkI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsb0NBQW9DO0lBQ3BDLHVDQUF1QztJQUN2QyxXQUFXO0lBQ1gsVUFBVTtJQUNWLHNEQUEwRTtJQUMxRSxzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLDJCQUEyQjtBQUMvQjs7O0FBR0E7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixPQUFPO0lBQ1AsV0FBVztJQUNYLFlBQVk7SUFDWiw4QkFBOEIsRUFBRSw4QkFBOEI7SUFDOUQsaUJBQWlCLEVBQUUsbUNBQW1DO0lBQ3RELFdBQVcsRUFBRSxxQ0FBcUM7QUFDdEQ7OztBQUdBO0lBQ0ksY0FBYztJQUNkLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7QUFDZjs7QUFFQTs7OztJQUlJLFdBQVc7SUFDWCxlQUFlO0lBQ2Ysc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSw2QkFBNkI7SUFDN0IsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osV0FBVztJQUNYLGtCQUFrQjtJQUNsQixhQUFhOztBQUVqQjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGVBQWU7SUFDZixzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLHNCQUFzQjtJQUN0QixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksV0FBVztJQUNYLCtCQUErQjtBQUNuQzs7QUFFQTtJQUNJLFdBQVc7SUFDWCxlQUFlO0lBQ2Ysc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixzQkFBc0I7SUFDdEIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxlQUFlO0lBQ2Ysc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixzQkFBc0I7SUFDdEIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxlQUFlO0lBQ2Ysc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixzQkFBc0I7SUFDdEIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7QUFDQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7Ozs7Ozs7Ozs7Ozs7R0FhRzs7QUFFSDtJQUNJLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsWUFBWTtJQUNaLFdBQVc7QUFDZjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsWUFBWTtJQUNaLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFlBQVk7SUFDWixZQUFZO0lBQ1osZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2QsNEJBQTRCO0lBQzVCLGtCQUFrQjtJQUNsQiwrQkFBK0I7QUFDbkM7O0FBRUE7SUFDSSxjQUFjO0lBQ2Qsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksV0FBVztJQUNYLHlCQUF5QjtJQUN6QixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxzQkFBc0I7SUFDdEIsNEJBQTRCO0lBQzVCLHlCQUF5QjtJQUN6QixzQkFBc0I7SUFDdEIsd0VBQXdFO0FBQzVFOztBQUVBO0lBQ0ksVUFBVTtJQUNWLG1CQUFtQjtJQUNuQixtQkFBbUI7QUFDdkI7OztBQUdBO0lBQ0k7UUFDSSxrQkFBa0I7UUFDbEIsbUJBQW1CO1FBQ25CLGdCQUFnQjtRQUNoQixlQUFlO0lBQ25COztJQUVBO1FBQ0ksZ0JBQWdCO0lBQ3BCOztJQUVBO1FBQ0ksZ0JBQWdCO1FBQ2hCLG1CQUFtQjtJQUN2QjtBQUNKIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcm0xIHtcclxuICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xyXG5cclxufVxyXG5cclxuaDIge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5mb3JtX3RleHQge1xyXG4gICAgbWF4LXdpZHRoOiA1MDBweDtcclxuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjkpOyBcclxuICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4yKTsgXHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHotaW5kZXg6IDE7IFxyXG4gICAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi9hc3NldHMvaW1hZ2VzL2JnMy1pbWcuanBnJykgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXI7IFxyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxufVxyXG5cclxuXHJcbi5mb3JtX3RleHQ6OmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41KTsgLyogRGFyayBvdmVybGF5IHdpdGggb3BhY2l0eSAqL1xyXG4gICAgZmlsdGVyOiBibHVyKDhweCk7IC8qIEFkanVzdCBibHVyIHN0cmVuZ3RoIGFzIG5lZWRlZCAqL1xyXG4gICAgei1pbmRleDogLTE7IC8qIFBsYWNlIG92ZXJsYXkgYmVoaW5kIHRoZSBjb250ZW50ICovXHJcbn1cclxuXHJcblxyXG4udXBsb2FkIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbn1cclxuXHJcbi51cGxvYWRfaW1nIHtcclxuICAgIGhlaWdodDogMTMwcHg7XHJcbn1cclxuXHJcbi5kcm9wX2lucHV0IHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG5pbnB1dFt0eXBlPXRleHRdLFxyXG5pbnB1dFt0eXBlPWVtYWlsXSxcclxuaW5wdXRbdHlwZT1kYXRlXSxcclxuaW5wdXRbdHlwZT10aW1lXSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcblxyXG4uaW5wdXQtZ3JvdXAge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gICAgYm9yZGVyLWNvbG9yOiB3aGl0ZTtcclxuICAgIGhlaWdodDogNDVweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuXHJcbn1cclxuXHJcbmJ1dHRvbi5idG4uYnRuLXN1Y2NlcyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDk0OTQ5O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG5zZWxlY3QjbG9jYXRpb24ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG5sYWJlbCB7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmZvcm0tZ3JvdXAge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG5cclxuLmZvcm0taGVhZGluZyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6ICNmM2ZjZmI7ICovXHJcbn1cclxuXHJcbmlucHV0I3Bob25lIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuaW5wdXQjYWdlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuc2VsZWN0I3Jvb21UeXBlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxubmd4LWRyb3B6b25lIHtcclxuICAgIGhlaWdodDogYXV0bztcclxufVxyXG5uZ3gtZHJvcHpvbmUtbGFiZWwge1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbn1cclxuXHJcbi8qIGlucHV0W3R5cGU9dGV4dF0sXHJcbmlucHV0W3R5cGU9ZW1haWxdLFxyXG5pbnB1dFt0eXBlPWFnZV0sXHJcbmlucHV0W3R5cGU9ZGF0ZV0sXHJcbmlucHV0W3R5cGU9dGltZV1cclxue1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIHBhZGRpbmc6IDhweDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbn0gKi9cclxuXHJcbmlucHV0I251bWJlck9mQWR1bHRzIHtcclxuICAgIGJvcmRlcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGhlaWdodDogMzdweDtcclxuICAgIHdpZHRoOiAzMHB4O1xyXG59XHJcblxyXG5pbnB1dCNudW1iZXJPZkNoaWxkcmVuIHtcclxuICAgIGJvcmRlcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGhlaWdodDogMzdweDtcclxuICAgIHdpZHRoOiAzMHB4O1xyXG59XHJcblxyXG5idXR0b24ge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDEwcHggMjBweDtcclxufVxyXG5cclxuLmJvb2tpbmctZm9ybSB7XHJcbiAgICBtYXgtd2lkdGg6IDQwMHB4O1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAvKiBib3JkZXI6IDFweCBzb2xpZCAjY2NjOyAqL1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogI2Y5ZjlmOTsgKi9cclxufVxyXG5cclxuaW5wdXRbdHlwZT1cImZpbGVcIl0ge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW4tdG9wOiAwLjVyZW07XHJcbn1cclxuXHJcbnNlbGVjdCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDAuMzc1cmVtIDAuNzVyZW07XHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICBsaW5lLWhlaWdodDogMS41O1xyXG4gICAgY29sb3I6ICM0OTUwNTc7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjZWQ0ZGE7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xyXG4gICAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIDAuMTVzIGVhc2UtaW4tb3V0LCBib3gtc2hhZG93IDAuMTVzIGVhc2UtaW4tb3V0O1xyXG59XHJcblxyXG4uZXJyb3ItbWVzc2FnZSB7XHJcbiAgICBjb2xvcjogcmVkO1xyXG4gICAgZm9udC1zaXplOiAwLjg3NXJlbTtcclxuICAgIG1hcmdpbi10b3A6IDAuMjVyZW07XHJcbn1cclxuXHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU3NXB4KSB7XHJcbiAgICBoMiB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICAgICAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICB9XHJcblxyXG4gICAgZm9ybS5ib29raW5nLWZvcm0ge1xyXG4gICAgICAgIG1heC13aWR0aDogMzUwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmZvcm0xIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiA5NXB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDUxcHg7XHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 8712:
/*!**********************************************!*\
  !*** ./src/app/contact/contact.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ContactComponent: () => (/* binding */ ContactComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);

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

/***/ 708:
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FooterComponent: () => (/* binding */ FooterComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 1567);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _footerservices_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../footerservices.service */ 5002);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 316);






function FooterComponent_footer_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "footer", 1)(1, "div", 2)(2, "div", 3)(3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "At Granny Flats, we specialize in delivering high-quality, pre-constructed tiny homes designed to meet your lifestyle needs.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "ul", 7)(8, "li")(9, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "i", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "li")(12, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "i", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "li")(15, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "i", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "li")(18, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "li")(21, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "i", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 14)(24, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Quick Link");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "ul", 15)(27, "li")(28, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "Home");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "li")(31, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "About Us");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "li")(34, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "Services");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "li")(37, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "Gallery");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "li")(40, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "Blog");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "li")(43, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "Contact");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "div", 14)(46, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, "Contact");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "ul", 22)(49, "li", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](50, "i", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "p", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, "0123-456789");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "li", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](54, "i", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "p", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](56, "info@grannyflat.io");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "li", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](58, "i", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "p", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](60, "Proin gravida nibh vel velit auctor aliquet.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](61, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "div", 3)(63, "div", 28)(64, "div", 29)(65, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](66, "Grannyflat 2024\u00A9 All Rights Reserve");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "div", 30)(68, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](69, "Terms & conditions");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](71, " Privacy Policy");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
  }
}
class FooterComponent {
  constructor(router, footerService) {
    this.router = router;
    this.footerService = footerService;
    this.showFooter = true;
    this.hideRoutes = ['/booking-form', '/form2', "/login", "/signin", '/form2/destination', '/form2/hotel_list', '/form2/date', '/form2/rooms', '/form2/peoples', '/form2/payment'];
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
    consts: [["class", "footer", 4, "ngIf"], [1, "footer"], [1, "container"], [1, "row"], [1, "col-12", "col-lg-6", "col-md-12"], ["src", "./assets/images/nav_img.png"], [1, "footer-p"], [1, "list-unstyled"], ["href", "#"], [1, "fa-brands", "fa-facebook-f"], [1, "fa-brands", "fa-twitter"], [1, "fa-brands", "fa-pinterest-p"], [1, "fa-brands", "fa-instagram"], [1, "fa-brands", "fa-linkedin-in"], [1, "col-12", "col-lg-3", "col-md-6"], [1, "list"], ["routerLink", "/"], ["routerLink", "/about"], ["routerLink", "/services"], ["routerLink", "/gallery"], ["routerLink", "/blog"], ["routerLink", "/contact"], [1, "contact1"], [1, "contact_text"], [1, "fa-solid", "fa-phone-volume"], [1, "contact_p"], [1, "fa-solid", "fa-envelope"], [1, "fa-solid", "fa-location-dot"], [1, "copyright"], [1, "copyright_p"], [1, "copyright_list"]],
    template: function FooterComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, FooterComponent_footer_0_Template, 72, 0, "footer", 0);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showFooter);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink],
    styles: ["\n\n.footer[_ngcontent-%COMP%] {\n    background-color: white;\n    color: black;\n    padding-top: 20px;\n    padding-bottom: 20px;\n    max-width: 100%;\n}\n\n.footer[_ngcontent-%COMP%]   .footer-p[_ngcontent-%COMP%] {\n    font-size: 18px;\n    margin-top: 10px;\n}\n\n.footer[_ngcontent-%COMP%]   .contact_p[_ngcontent-%COMP%] {\n    font-size: 18px;\n}\n\na[_ngcontent-%COMP%] {\n    font-size: 18px;\n    color: black;\n    text-decoration: none;\n}\n\n .footer[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n    list-style: none;\n}\n\n.footer[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n    color: #208678;\n}\n\n.footer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    margin-top: 0;\n    margin-bottom: 10px;\n}\n\n.footer[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n    padding-left: 0;\n}\n\n.footer[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    color: black;\n    text-decoration: none;\n}\n\n.footer[_ngcontent-%COMP%]   .fa-brands[_ngcontent-%COMP%] {\n    background-color: #208678;\n    color: white;\n    height: 35px;\n    width: 35px;\n    font-size: 25px;\n    margin-right: 10px;\n    padding-top: 5px;\n    margin-top: 10px;\n    text-align: center;\n}\n\n.footer[_ngcontent-%COMP%]   .list-unstyled[_ngcontent-%COMP%] {\n    display: flex;\n}\n\n.footer[_ngcontent-%COMP%]   .contact1[_ngcontent-%COMP%] {\n    margin-top: 0;\n}\n\n.footer[_ngcontent-%COMP%]   .contact_text[_ngcontent-%COMP%] {\n    display: flex;\n}\n\n.footer[_ngcontent-%COMP%]   .contact_p[_ngcontent-%COMP%] {\n    margin-left: 10px;\n}\n\n.footer[_ngcontent-%COMP%]   .contact_text[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    font-size: 20px;\n    margin-top: 5px;\n}\n\n.footer[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%] {\n    opacity: 2.25;\n}\n.copyright[_ngcontent-%COMP%] {\n    display: flex;\n}\n\n.copyright_list[_ngcontent-%COMP%] {\n    list-style: none;\n    margin-left: auto;\n    display: flex;\n}\n\n.copyright_list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    margin-right: 10px;\n}\n\n\n\n@media only screen and (max-width: 575px){\n    .copyright[_ngcontent-%COMP%] {\n        display: block;\n    }   \n    .copyright_list[_ngcontent-%COMP%] {\n        display: block;\n    } \n    .copyright_list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n        margin-bottom: 10px;\n    }\n} \n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxXQUFXO0FBQ1g7SUFDSSx1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixvQkFBb0I7SUFDcEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksZUFBZTtJQUNmLFlBQVk7SUFDWixxQkFBcUI7QUFDekI7O0NBRUM7SUFDRyxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxZQUFZO0lBQ1oscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixZQUFZO0lBQ1osV0FBVztJQUNYLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7QUFDQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7QUFDQSxVQUFVOztBQUVWO0lBQ0k7UUFDSSxjQUFjO0lBQ2xCO0lBQ0E7UUFDSSxjQUFjO0lBQ2xCO0lBQ0E7UUFDSSxtQkFBbUI7SUFDdkI7QUFDSiIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4vKiBmb290ZXIgKi9cclxuLmZvb3RlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5mb290ZXIgLmZvb3Rlci1wIHtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbn1cclxuXHJcbi5mb290ZXIgLmNvbnRhY3RfcCB7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbn1cclxuXHJcbmEge1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG4gLmZvb3RlciB1bCB7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG59XHJcblxyXG4uZm9vdGVyIGg1IHtcclxuICAgIGNvbG9yOiAjMjA4Njc4O1xyXG59XHJcblxyXG4uZm9vdGVyIHAge1xyXG4gICAgbWFyZ2luLXRvcDogMDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbi5mb290ZXIgdWwge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAwO1xyXG59XHJcblxyXG4uZm9vdGVyIC5mb290ZXIgdWwgbGkgYSB7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbi5mb290ZXIgLmZhLWJyYW5kcyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjA4Njc4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgaGVpZ2h0OiAzNXB4O1xyXG4gICAgd2lkdGg6IDM1cHg7XHJcbiAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICBwYWRkaW5nLXRvcDogNXB4O1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmZvb3RlciAubGlzdC11bnN0eWxlZCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4uZm9vdGVyIC5jb250YWN0MSB7XHJcbiAgICBtYXJnaW4tdG9wOiAwO1xyXG59XHJcblxyXG4uZm9vdGVyIC5jb250YWN0X3RleHQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxufVxyXG5cclxuLmZvb3RlciAuY29udGFjdF9wIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG59XHJcblxyXG4uZm9vdGVyIC5jb250YWN0X3RleHQgaSB7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbn1cclxuXHJcbi5mb290ZXIgaHIge1xyXG4gICAgb3BhY2l0eTogMi4yNTtcclxufVxyXG4uY29weXJpZ2h0IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbi5jb3B5cmlnaHRfbGlzdCB7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4uY29weXJpZ2h0X2xpc3QgbGkge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG59XHJcbi8qZm9vdGVyICovXHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU3NXB4KXtcclxuICAgIC5jb3B5cmlnaHQge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgfSAgIFxyXG4gICAgLmNvcHlyaWdodF9saXN0IHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIH0gXHJcbiAgICAuY29weXJpZ2h0X2xpc3QgbGkge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICB9XHJcbn0gIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 5002:
/*!*******************************************!*\
  !*** ./src/app/footerservices.service.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FooterservicesService: () => (/* binding */ FooterservicesService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 5797);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);


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

/***/ 4629:
/*!**********************************************!*\
  !*** ./src/app/form2/date/date.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DateComponent: () => (/* binding */ DateComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 8418);





function DateComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Check-in date is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function DateComponent_div_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Check-out date is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function DateComponent_div_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Check-out date must be after check-in date. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
class DateComponent {
  constructor(router) {
    this.router = router;
  }
  // Method to validate date range
  validateDateRange(form) {
    const checkin = this.checkinDate;
    const checkout = this.checkoutDate;
    if (checkin && checkout) {
      const checkinDate = new Date(checkin.year, checkin.month - 1, checkin.day);
      const checkoutDate = new Date(checkout.year, checkout.month - 1, checkout.day);
      if (checkoutDate <= checkinDate) {
        form.form.setErrors({
          dateRangeInvalid: true
        });
        return false;
      }
    }
    return true;
  }
  // Method to handle form submission
  submitForm(form) {
    if (form.valid && this.validateDateRange(form)) {
      console.log('Form Submitted:', {
        checkinDate: this.checkinDate,
        checkoutDate: this.checkoutDate
      });
      // Navigate to the next route
      this.router.navigate(['/form2/peoples']);
    } else {
      console.log('Form is invalid');
    }
  }
  static #_ = this.ɵfac = function DateComponent_Factory(t) {
    return new (t || DateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: DateComponent,
    selectors: [["app-date"]],
    decls: 33,
    vars: 6,
    consts: [["dateForm", "ngForm"], ["d", "ngbDatepicker"], ["d2", "ngbDatepicker"], [1, "date"], [1, "container"], [1, "date_text"], [3, "ngSubmit"], [1, "form-group"], ["for", "checkinDate"], [1, "datepicker-wrapper"], ["id", "checkinDate", "name", "checkinDate", "placeholder", "Select check-in date", "ngbDatepicker", "", "required", "", 1, "form-control", 3, "ngModelChange", "click", "ngModel"], ["type", "button", 1, "btn", "btn-outline-secondary", "calendar-btn", 3, "click"], [1, "fa-solid", "fa-calendar-days"], ["class", "alert alert-danger", 4, "ngIf"], ["for", "checkoutDate"], ["id", "checkoutDate", "name", "checkoutDate", "placeholder", "Select check-out date", "ngbDatepicker", "", "required", "", 1, "form-control", 3, "ngModelChange", "click", "ngModel"], [1, "submit"], [1, "left_btn"], ["routerLink", "/form2/hotel_list", 1, "btn", "btn-primary"], [1, "right_btn"], ["type", "submit", 1, "btn", "btn-succes", 3, "disabled"], [1, "alert", "alert-danger"]],
    template: function DateComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 3)(1, "div", 4)(2, "div", 5)(3, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Select Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", 6, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function DateComponent_Template_form_ngSubmit_5_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
          const dateForm_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);
          return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.submitForm(dateForm_r2));
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7)(8, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Check-in Date:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9)(11, "input", 10, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayListener"]("ngModelChange", function DateComponent_Template_input_ngModelChange_11_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayBindingSet"](ctx.checkinDate, $event) || (ctx.checkinDate = $event);
          return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"]($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DateComponent_Template_input_click_11_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
          const d_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12);
          return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](d_r3.toggle());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DateComponent_Template_button_click_13_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
          const d_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12);
          return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](d_r3.toggle());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, DateComponent_div_15_Template, 2, 0, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 7)(17, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Check-out Date:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 9)(20, "input", 15, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayListener"]("ngModelChange", function DateComponent_Template_input_ngModelChange_20_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayBindingSet"](ctx.checkoutDate, $event) || (ctx.checkoutDate = $event);
          return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"]($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DateComponent_Template_input_click_20_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
          const d2_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](21);
          return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](d2_r4.toggle());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DateComponent_Template_button_click_22_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
          const d2_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](21);
          return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](d2_r4.toggle());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, DateComponent_div_24_Template, 2, 0, "div", 13)(25, DateComponent_div_25_Template, 2, 0, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 16)(27, "div", 17)(28, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Prev");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 19)(31, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()();
      }
      if (rf & 2) {
        const dateForm_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayProperty"]("ngModel", ctx.checkinDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (dateForm_r2.controls["checkinDate"] == null ? null : dateForm_r2.controls["checkinDate"].invalid) && ((dateForm_r2.controls["checkinDate"] == null ? null : dateForm_r2.controls["checkinDate"].dirty) || (dateForm_r2.controls["checkinDate"] == null ? null : dateForm_r2.controls["checkinDate"].touched)));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayProperty"]("ngModel", ctx.checkoutDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (dateForm_r2.controls["checkoutDate"] == null ? null : dateForm_r2.controls["checkoutDate"].invalid) && ((dateForm_r2.controls["checkoutDate"] == null ? null : dateForm_r2.controls["checkoutDate"].dirty) || (dateForm_r2.controls["checkoutDate"] == null ? null : dateForm_r2.controls["checkoutDate"].touched)));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (dateForm_r2.errors == null ? null : dateForm_r2.errors["dateRangeInvalid"]) && (dateForm_r2.dirty || dateForm_r2.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", dateForm_r2.invalid);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.RequiredValidator, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbInputDatepicker, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgForm],
    styles: ["\n\n\nh4[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.date_text[_ngcontent-%COMP%] {\n  max-width: 500px;\n  padding: 20px;\n  border-radius: 10px;\n  margin-left: auto;\n  margin-right: auto;\n  background: rgba(255, 255, 255, 0.9); \n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2); \n  width: 100%;\n  z-index: 1; \n  background: url('bg4-img.webp') no-repeat center center; \n  background-size: cover;\n  position: relative;\n  background-position: center;\n}\n.date_text[_ngcontent-%COMP%]::before {\n  content: '';\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.5); \n\n  filter: blur(8px); \n\n  z-index: -1; \n\n}\n\n\n.form-group[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n\n.datepicker-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.datepicker-wrapper[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  padding-right: 40px; \n\n}\n\n.datepicker-wrapper[_ngcontent-%COMP%]   .calendar-btn[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  right: 10px; \n\n  transform: translateY(-50%);\n  z-index: 10;\n  border: none;\n  background: none;\n  cursor: pointer;\n}\n\n.datepicker-wrapper[_ngcontent-%COMP%]   .calendar-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n\n.alert[_ngcontent-%COMP%] {\n  margin-top: 5px;\n}\n\n.submit[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n\n.left_btn[_ngcontent-%COMP%], .right_btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\n.left_btn[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], .right_btn[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin: 0 5px;\n}\n\n.date[_ngcontent-%COMP%] {\n    margin-top: 100px;\n    background-color: #f8f9fa;\n    \n\n    padding: 20px;\n    width: 100%;\n    margin-left: auto;\n    margin-right: auto;\n    \n\n    margin-top: 50px;\n  }\n  \n  \n\n  button.btn.btn-primary[_ngcontent-%COMP%] {\n    background-color: #4b4b4b;\n    border-color: #4b4b4b;\n  }\n\n  button.btn.btn-succes[_ngcontent-%COMP%] {\n    margin-top: 10px;\n    background-color: #208678;\n    color: white;\n  }\n\n  h1[_ngcontent-%COMP%]{\n    font-size: 40px;\n  }\n  h2[_ngcontent-%COMP%]{\n    font-size: 35px;\n  }\n  h3[_ngcontent-%COMP%]{\n    font-size: 28px;\n  }\n  h4[_ngcontent-%COMP%] {\n    font-size: 23px;\n    text-align: center;\n    margin-bottom: 20px;\n    font-weight: 800;\n    color: white;\n}\n  h5[_ngcontent-%COMP%]{\n    font-size: 20px;\n  }\n  p[_ngcontent-%COMP%]{\n    font-size: 16px;\n  }\n  label[_ngcontent-%COMP%]{\n    font-size: 16px;\n    color: white;\n  }\n  .btn[_ngcontent-%COMP%] {\n    font-size: 18px;\n  }\n  h2[_ngcontent-%COMP%] {\n    margin-bottom: 20px;\n  }\n  \n\n.datepicker-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.datepicker-wrapper[_ngcontent-%COMP%]   .calendar[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 10px; \n\n  top: 50%;\n  transform: translateY(-50%);\n  z-index: 10; \n\n}\n\n.datepicker-wrapper[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  padding-right: 40px; \n\n}\n\n.datepicker-wrapper[_ngcontent-%COMP%]   .ngb-dp[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 100%; \n\n  left: 0;\n  z-index: 1000; \n\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZm9ybTIvZGF0ZS9kYXRlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsNEJBQTRCOztBQUU1QjtFQUNFLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixvQ0FBb0M7RUFDcEMsdUNBQXVDO0VBQ3ZDLFdBQVc7RUFDWCxVQUFVO0VBQ1YsdURBQThFO0VBQzlFLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsMkJBQTJCO0FBQzdCO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixPQUFPO0VBQ1AsV0FBVztFQUNYLFlBQVk7RUFDWiw4QkFBOEIsRUFBRSw4QkFBOEI7RUFDOUQsaUJBQWlCLEVBQUUsbUNBQW1DO0VBQ3RELFdBQVcsRUFBRSxxQ0FBcUM7QUFDcEQ7OztBQUdBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsbUJBQW1CLEVBQUUsa0NBQWtDO0FBQ3pEOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixXQUFXLEVBQUUsd0JBQXdCO0VBQ3JDLDJCQUEyQjtFQUMzQixXQUFXO0VBQ1gsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQix5QkFBeUI7SUFDekIsMEJBQTBCO0lBQzFCLGFBQWE7SUFDYixXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixrQ0FBa0M7SUFDbEMsZ0JBQWdCO0VBQ2xCOztFQUVBLDhFQUE4RTtFQUM5RTtJQUNFLHlCQUF5QjtJQUN6QixxQkFBcUI7RUFDdkI7O0VBRUE7SUFDRSxnQkFBZ0I7SUFDaEIseUJBQXlCO0lBQ3pCLFlBQVk7RUFDZDs7RUFFQTtJQUNFLGVBQWU7RUFDakI7RUFDQTtJQUNFLGVBQWU7RUFDakI7RUFDQTtJQUNFLGVBQWU7RUFDakI7RUFDQTtJQUNFLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixZQUFZO0FBQ2hCO0VBQ0U7SUFDRSxlQUFlO0VBQ2pCO0VBQ0E7SUFDRSxlQUFlO0VBQ2pCO0VBQ0E7SUFDRSxlQUFlO0lBQ2YsWUFBWTtFQUNkO0VBQ0E7SUFDRSxlQUFlO0VBQ2pCO0VBQ0E7SUFDRSxtQkFBbUI7RUFDckI7RUFDQSx1QkFBdUI7QUFDekI7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVyxFQUFFLHFCQUFxQjtFQUNsQyxRQUFRO0VBQ1IsMkJBQTJCO0VBQzNCLFdBQVcsRUFBRSw0Q0FBNEM7QUFDM0Q7O0FBRUE7RUFDRSxtQkFBbUIsRUFBRSwrQ0FBK0M7QUFDdEU7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUyxFQUFFLG1EQUFtRDtFQUM5RCxPQUFPO0VBQ1AsYUFBYSxFQUFFLHFEQUFxRDtBQUN0RSIsInNvdXJjZXNDb250ZW50IjpbIi8qIFN0eWxlIGZvciB0aGUgY29udGFpbmVyICovXHJcblxyXG5oNCB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG4uZGF0ZV90ZXh0IHtcclxuICBtYXgtd2lkdGg6IDUwMHB4O1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBtYXJnaW4tbGVmdDogYXV0bztcclxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjkpOyBcclxuICBib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDAsIDAsIDAsIDAuMik7IFxyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHotaW5kZXg6IDE7IFxyXG4gIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9iZzQtaW1nLndlYnAnKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlcjsgXHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG59XHJcbi5kYXRlX3RleHQ6OmJlZm9yZSB7XHJcbiAgY29udGVudDogJyc7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNSk7IC8qIERhcmsgb3ZlcmxheSB3aXRoIG9wYWNpdHkgKi9cclxuICBmaWx0ZXI6IGJsdXIoOHB4KTsgLyogQWRqdXN0IGJsdXIgc3RyZW5ndGggYXMgbmVlZGVkICovXHJcbiAgei1pbmRleDogLTE7IC8qIFBsYWNlIG92ZXJsYXkgYmVoaW5kIHRoZSBjb250ZW50ICovXHJcbn1cclxuXHJcblxyXG4uZm9ybS1ncm91cCB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG5cclxuLmRhdGVwaWNrZXItd3JhcHBlciB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4uZGF0ZXBpY2tlci13cmFwcGVyIC5mb3JtLWNvbnRyb2wge1xyXG4gIHBhZGRpbmctcmlnaHQ6IDQwcHg7IC8qIFNwYWNlIGZvciB0aGUgY2FsZW5kYXIgYnV0dG9uICovXHJcbn1cclxuXHJcbi5kYXRlcGlja2VyLXdyYXBwZXIgLmNhbGVuZGFyLWJ0biB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNTAlO1xyXG4gIHJpZ2h0OiAxMHB4OyAvKiBBZGp1c3QgYXMgbmVjZXNzYXJ5ICovXHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gIHotaW5kZXg6IDEwO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmRhdGVwaWNrZXItd3JhcHBlciAuY2FsZW5kYXItYnRuIGkge1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxufVxyXG5cclxuLmFsZXJ0IHtcclxuICBtYXJnaW4tdG9wOiA1cHg7XHJcbn1cclxuXHJcbi5zdWJtaXQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcblxyXG4ubGVmdF9idG4sIC5yaWdodF9idG4ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmxlZnRfYnRuIGJ1dHRvbiwgLnJpZ2h0X2J0biBidXR0b24ge1xyXG4gIG1hcmdpbjogMCA1cHg7XHJcbn1cclxuXHJcbi5kYXRlIHtcclxuICAgIG1hcmdpbi10b3A6IDEwMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjlmYTtcclxuICAgIC8qIExpZ2h0IGdyYXkgYmFja2dyb3VuZCAqL1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICAvKiBQYWRkaW5nIGFyb3VuZCB0aGUgd2hvbGUgZm9ybSAqL1xyXG4gICAgbWFyZ2luLXRvcDogNTBweDtcclxuICB9XHJcbiAgXHJcbiAgLyogWW91IGNhbiBhZGQgZ2xvYmFsIHN0eWxlcyB0byB0aGlzIGZpbGUsIGFuZCBhbHNvIGltcG9ydCBvdGhlciBzdHlsZSBmaWxlcyAqL1xyXG4gIGJ1dHRvbi5idG4uYnRuLXByaW1hcnkge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzRiNGI0YjtcclxuICAgIGJvcmRlci1jb2xvcjogIzRiNGI0YjtcclxuICB9XHJcblxyXG4gIGJ1dHRvbi5idG4uYnRuLXN1Y2NlcyB7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIwODY3ODtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICB9XHJcblxyXG4gIGgxe1xyXG4gICAgZm9udC1zaXplOiA0MHB4O1xyXG4gIH1cclxuICBoMntcclxuICAgIGZvbnQtc2l6ZTogMzVweDtcclxuICB9XHJcbiAgaDN7XHJcbiAgICBmb250LXNpemU6IDI4cHg7XHJcbiAgfVxyXG4gIGg0IHtcclxuICAgIGZvbnQtc2l6ZTogMjNweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICBmb250LXdlaWdodDogODAwO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcbiAgaDV7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgfVxyXG4gIHB7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgfVxyXG4gIGxhYmVse1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gIH1cclxuICAuYnRuIHtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICB9XHJcbiAgaDIge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICB9XHJcbiAgLyogZGF0ZS5jb21wb25lbnQuY3NzICovXHJcbi5kYXRlcGlja2VyLXdyYXBwZXIge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLmRhdGVwaWNrZXItd3JhcHBlciAuY2FsZW5kYXIge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICByaWdodDogMTBweDsgLyogQWRqdXN0IGFzIG5lZWRlZCAqL1xyXG4gIHRvcDogNTAlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICB6LWluZGV4OiAxMDsgLyogTWFrZSBzdXJlIGl0J3Mgb24gdG9wIG9mIG90aGVyIGVsZW1lbnRzICovXHJcbn1cclxuXHJcbi5kYXRlcGlja2VyLXdyYXBwZXIgLmZvcm0tY29udHJvbCB7XHJcbiAgcGFkZGluZy1yaWdodDogNDBweDsgLyogQWRqdXN0IHBhZGRpbmcgdG8gbWFrZSByb29tIGZvciB0aGUgYnV0dG9uICovXHJcbn1cclxuXHJcbi5kYXRlcGlja2VyLXdyYXBwZXIgLm5nYi1kcCB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMTAwJTsgLyogRW5zdXJlIHRoZSBkYXRlIHBpY2tlciBhcHBlYXJzIGJlbG93IHRoZSBpbnB1dCAqL1xyXG4gIGxlZnQ6IDA7XHJcbiAgei1pbmRleDogMTAwMDsgLyogTWFrZSBzdXJlIHRoZSBkYXRlIHBpY2tlciBpcyBhYm92ZSBvdGhlciBjb250ZW50ICovXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 1031:
/*!**************************************************************!*\
  !*** ./src/app/form2/destination1/destination1.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Destination1Component: () => (/* binding */ Destination1Component)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);

class Destination1Component {
  static #_ = this.ɵfac = function Destination1Component_Factory(t) {
    return new (t || Destination1Component)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: Destination1Component,
    selectors: [["app-destination1"]],
    decls: 2,
    vars: 0,
    template: function Destination1Component_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "destination1 works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    },
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 4031:
/*!************************************************************!*\
  !*** ./src/app/form2/destination/destination.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DestinationComponent: () => (/* binding */ DestinationComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 4456);




function DestinationComponent_div_14_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "First name is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function DestinationComponent_div_14_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "First name must be at least 2 characters long.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function DestinationComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DestinationComponent_div_14_div_1_Template, 2, 0, "div", 31)(2, DestinationComponent_div_14_div_2_Template, 2, 0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const firstName_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", firstName_r3.errors == null ? null : firstName_r3.errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", firstName_r3.errors == null ? null : firstName_r3.errors["minlength"]);
  }
}
function DestinationComponent_div_21_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Last name is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function DestinationComponent_div_21_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Last name must be at least 2 characters long.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function DestinationComponent_div_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DestinationComponent_div_21_div_1_Template, 2, 0, "div", 31)(2, DestinationComponent_div_21_div_2_Template, 2, 0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const lastName_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", lastName_r4.errors == null ? null : lastName_r4.errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", lastName_r4.errors == null ? null : lastName_r4.errors["minlength"]);
  }
}
function DestinationComponent_div_29_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Email is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function DestinationComponent_div_29_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Invalid email format.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function DestinationComponent_div_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DestinationComponent_div_29_div_1_Template, 2, 0, "div", 31)(2, DestinationComponent_div_29_div_2_Template, 2, 0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const email_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", email_r5.errors == null ? null : email_r5.errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", email_r5.errors == null ? null : email_r5.errors["email"]);
  }
}
function DestinationComponent_div_36_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Phone number is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function DestinationComponent_div_36_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Invalid phone number format (should be 10 digits).");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function DestinationComponent_div_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DestinationComponent_div_36_div_1_Template, 2, 0, "div", 31)(2, DestinationComponent_div_36_div_2_Template, 2, 0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const phone_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", phone_r6.errors == null ? null : phone_r6.errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", phone_r6.errors == null ? null : phone_r6.errors["pattern"]);
  }
}
function DestinationComponent_div_50_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Destination selection is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function DestinationComponent_div_50_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DestinationComponent_div_50_div_1_Template, 2, 0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const destination_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", destination_r7.errors == null ? null : destination_r7.errors["required"]);
  }
}
class DestinationComponent {
  constructor(router) {
    this.router = router;
    this.formData = {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      destination: ''
    };
  }
  submitForm(form) {
    if (form.valid) {
      // Form is valid, perform submission logic here
      console.log('Form submitted with data:', this.formData);
      // Example of navigating to the next step
      this.router.navigate(['/form2/hotel_list']); // Replace '/hotel_list' with your actual next step route
    } else {
      // Form is invalid, mark all fields as touched to display validation messages
      Object.keys(form.controls).forEach(key => {
        form.controls[key].markAsTouched();
      });
    }
  }
  static #_ = this.ɵfac = function DestinationComponent_Factory(t) {
    return new (t || DestinationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: DestinationComponent,
    selectors: [["app-destination"]],
    decls: 54,
    vars: 10,
    consts: [["bookingForm", "ngForm"], ["firstName", "ngModel"], ["lastName", "ngModel"], ["email", "ngModel"], ["phone", "ngModel"], ["destination", "ngModel"], [1, "destination"], [1, "container"], [1, "dest_text"], [3, "ngSubmit"], [1, "row"], [1, "col-md-6"], [1, "form-group"], ["for", "firstName"], ["type", "text", "id", "firstName", "name", "firstName", "required", "", "minlength", "2", 1, "form-control", 3, "ngModelChange", "ngModel"], ["class", "text-danger", 4, "ngIf"], ["for", "lastName"], ["type", "text", "id", "lastName", "name", "lastName", "required", "", "minlength", "2", 1, "form-control", 3, "ngModelChange", "ngModel"], ["for", "email"], ["type", "email", "id", "email", "name", "email", "required", "", "email", "", 1, "form-control", 3, "ngModelChange", "ngModel"], ["for", "phone"], ["type", "tel", "id", "phone", "name", "phone", "required", "", "pattern", "[0-9]{10}", 1, "form-control", 3, "ngModelChange", "ngModel"], ["for", "destination"], ["id", "destination", "name", "destination", "required", "", 1, "form-control", 3, "ngModelChange", "ngModel"], ["value", ""], ["value", "destination1"], ["value", "destination2"], ["value", "destination3"], [1, "submit"], ["type", "submit", 1, "btn", "btn-succes"], [1, "text-danger"], [4, "ngIf"]],
    template: function DestinationComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6)(1, "div", 7)(2, "div", 8)(3, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Booking Form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", 9, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function DestinationComponent_Template_form_ngSubmit_5_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
          const bookingForm_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);
          return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.submitForm(bookingForm_r2));
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 10)(8, "div", 11)(9, "div", 12)(10, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "First Name:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "input", 14, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayListener"]("ngModelChange", function DestinationComponent_Template_input_ngModelChange_12_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayBindingSet"](ctx.formData.firstName, $event) || (ctx.formData.firstName = $event);
          return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"]($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, DestinationComponent_div_14_Template, 3, 2, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 11)(16, "div", 12)(17, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Last Name:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "input", 17, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayListener"]("ngModelChange", function DestinationComponent_Template_input_ngModelChange_19_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayBindingSet"](ctx.formData.lastName, $event) || (ctx.formData.lastName = $event);
          return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"]($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, DestinationComponent_div_21_Template, 3, 2, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 10)(23, "div", 11)(24, "div", 12)(25, "label", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Email:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "input", 19, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayListener"]("ngModelChange", function DestinationComponent_Template_input_ngModelChange_27_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayBindingSet"](ctx.formData.email, $event) || (ctx.formData.email = $event);
          return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"]($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, DestinationComponent_div_29_Template, 3, 2, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 11)(31, "div", 12)(32, "label", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Phone:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "input", 21, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayListener"]("ngModelChange", function DestinationComponent_Template_input_ngModelChange_34_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayBindingSet"](ctx.formData.phone, $event) || (ctx.formData.phone = $event);
          return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"]($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, DestinationComponent_div_36_Template, 3, 2, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 12)(38, "label", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Destination:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "select", 23, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayListener"]("ngModelChange", function DestinationComponent_Template_select_ngModelChange_40_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayBindingSet"](ctx.formData.destination, $event) || (ctx.formData.destination = $event);
          return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"]($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "option", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Select a destination");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "option", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Shimla");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "option", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Kasauli");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "option", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Manali");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](50, DestinationComponent_div_50_Template, 2, 1, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 28)(52, "button", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
      }
      if (rf & 2) {
        const firstName_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](13);
        const lastName_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](20);
        const email_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](28);
        const phone_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](35);
        const destination_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayProperty"]("ngModel", ctx.formData.firstName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", firstName_r3.invalid && (firstName_r3.dirty || firstName_r3.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayProperty"]("ngModel", ctx.formData.lastName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", lastName_r4.invalid && (lastName_r4.dirty || lastName_r4.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayProperty"]("ngModel", ctx.formData.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", email_r5.invalid && (email_r5.dirty || email_r5.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayProperty"]("ngModel", ctx.formData.phone);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", phone_r6.invalid && (phone_r6.dirty || phone_r6.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayProperty"]("ngModel", ctx.formData.destination);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", destination_r7.invalid && (destination_r7.dirty || destination_r7.touched));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.MinLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.PatternValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.EmailValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgForm],
    styles: [".destination[_ngcontent-%COMP%] {\n    \n\n    padding: 20px;\n    width: 50%;\n    margin-left: auto;\n    margin-right: auto;\n    \n\n    margin-top: 50px;\n  }\n  h4[_ngcontent-%COMP%] {\n    font-size: 23px;\n    text-align: center;\n    margin-bottom: 20px;\n    font-weight: 800;\n    color: white;\n}\n.input[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:hover {\n  color: green;\n}\n\n  \n\n  .dest_text[_ngcontent-%COMP%] {\n    max-width: 500px;\n    padding: 20px;\n    border-radius: 10px;\n    margin-left: auto;\n    margin-right: auto;\n    background: rgba(255, 255, 255, 0.9); \n    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2); \n    width: 100%;\n    z-index: 1; \n    background: url('bg4-img.webp') no-repeat center center; \n    background-size: cover;\n    position: relative;\n    background-position: center;\n  }\n  .dest_text[_ngcontent-%COMP%]::before {\n    content: '';\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background: rgba(0, 0, 0, 0.5); \n\n    filter: blur(8px); \n\n    z-index: -1; \n\n}\n  \n  h1[_ngcontent-%COMP%]{\n    font-size: 40px;\n  }\n  h2[_ngcontent-%COMP%]{\n    font-size: 35px;\n  }\n  h3[_ngcontent-%COMP%]{\n    font-size: 28px;\n  }\n  h5[_ngcontent-%COMP%]{\n    font-size: 20px;\n  }\n  p[_ngcontent-%COMP%]{\n    font-size: 16px;\n  }\n  label[_ngcontent-%COMP%]{\n    font-size: 16px;\n    color: white;\n  }\n  .btn[_ngcontent-%COMP%] {\n    font-size: 18px;\n  }\n  \n  \n\n  .destination1[_ngcontent-%COMP%] {\n    background-color: #ffffff;\n    \n\n    padding: 30px;\n    \n\n    border-radius: 10px;\n    \n\n    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\n    \n\n  }\n  \n  button.btn.btn-succes[_ngcontent-%COMP%] {\n    padding: 4px 20px;\n    background-color: #208678;\n    color: white;\n    \n  }\n  button.btn.btn-primary[_ngcontent-%COMP%] {\n    background-color: #4b4b4b;\n    border-color: #4b4b4b;\n  }\n  \n  .submit[_ngcontent-%COMP%] {\n    text-align: right;\n    margin-top: 20px;\n  }\n  \n  \n\n  .form_control[_ngcontent-%COMP%] {\n    font-weight: bold;\n    color: white;\n    \n\n  }\n  \n  \n\n  .form_input[_ngcontent-%COMP%] {\n    width: 100%;\n    \n\n    padding: 10px;\n    \n\n    margin-top: 8px;\n    \n\n    margin-bottom: 15px;\n    \n\n    border: 1px solid #ccc;\n    \n\n    border-radius: 4px;\n    box-sizing: border-box;\n  }\n  \n  \n\n  .submit_btn[_ngcontent-%COMP%] {\n    text-align: center;\n    margin-top: 20px;\n  }\n  \n  \n  \n  .form-group[_ngcontent-%COMP%] {\n    margin-bottom: 20px;\n  }\n  \n  label[_ngcontent-%COMP%] {\n    font-weight: bold;\n  }\n  \n  .text-danger[_ngcontent-%COMP%] {\n    color: red;\n    font-size: 0.875rem;\n    margin-top: 5px;\n  }\n  \n  \n  @media only screen and (max-width: 991px){\n  .destination[_ngcontent-%COMP%] {\n    width: 80%;\n  }\n  }\n  \n  @media only screen and (max-width: 991px){\n  .destination[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  }\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZm9ybTIvZGVzdGluYXRpb24vZGVzdGluYXRpb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLDBCQUEwQjtJQUMxQixhQUFhO0lBQ2IsVUFBVTtJQUNWLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsa0NBQWtDO0lBQ2xDLGdCQUFnQjtFQUNsQjtFQUNBO0lBQ0UsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLFlBQVk7QUFDaEI7QUFDQTtFQUNFLFlBQVk7QUFDZDs7RUFFRSw4RUFBOEU7RUFDOUU7SUFDRSxnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLG9DQUFvQztJQUNwQyx1Q0FBdUM7SUFDdkMsV0FBVztJQUNYLFVBQVU7SUFDVix1REFBOEU7SUFDOUUsc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQiwyQkFBMkI7RUFDN0I7RUFDQTtJQUNFLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLE9BQU87SUFDUCxXQUFXO0lBQ1gsWUFBWTtJQUNaLDhCQUE4QixFQUFFLDhCQUE4QjtJQUM5RCxpQkFBaUIsRUFBRSxtQ0FBbUM7SUFDdEQsV0FBVyxFQUFFLHFDQUFxQztBQUN0RDs7RUFFRTtJQUNFLGVBQWU7RUFDakI7RUFDQTtJQUNFLGVBQWU7RUFDakI7RUFDQTtJQUNFLGVBQWU7RUFDakI7RUFDQTtJQUNFLGVBQWU7RUFDakI7RUFDQTtJQUNFLGVBQWU7RUFDakI7RUFDQTtJQUNFLGVBQWU7SUFDZixZQUFZO0VBQ2Q7RUFDQTtJQUNFLGVBQWU7RUFDakI7O0VBRUEsbUNBQW1DO0VBQ25DO0lBQ0UseUJBQXlCO0lBQ3pCLHFCQUFxQjtJQUNyQixhQUFhO0lBQ2Isc0NBQXNDO0lBQ3RDLG1CQUFtQjtJQUNuQixvQkFBb0I7SUFDcEIsdUNBQXVDO0lBQ3ZDLGtDQUFrQztFQUNwQzs7RUFFQTtJQUNFLGlCQUFpQjtJQUNqQix5QkFBeUI7SUFDekIsWUFBWTs7RUFFZDtFQUNBO0lBQ0UseUJBQXlCO0lBQ3pCLHFCQUFxQjtFQUN2Qjs7RUFFQTtJQUNFLGlCQUFpQjtJQUNqQixnQkFBZ0I7RUFDbEI7O0VBRUEsNEJBQTRCO0VBQzVCO0lBQ0UsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWix5QkFBeUI7RUFDM0I7O0VBRUEsdUNBQXVDO0VBQ3ZDO0lBQ0UsV0FBVztJQUNYLGVBQWU7SUFDZixhQUFhO0lBQ2IsMEJBQTBCO0lBQzFCLGVBQWU7SUFDZixlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixzQkFBc0I7SUFDdEIsc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixzQkFBc0I7RUFDeEI7O0VBRUEsOEJBQThCO0VBQzlCO0lBQ0Usa0JBQWtCO0lBQ2xCLGdCQUFnQjtFQUNsQjs7OztFQUlBO0lBQ0UsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0UsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsVUFBVTtJQUNWLG1CQUFtQjtJQUNuQixlQUFlO0VBQ2pCOzs7RUFHQTtFQUNBO0lBQ0UsVUFBVTtFQUNaO0VBQ0E7O0VBRUE7RUFDQTtJQUNFLFdBQVc7RUFDYjtFQUNBIiwic291cmNlc0NvbnRlbnQiOlsiLmRlc3RpbmF0aW9uIHtcclxuICAgIC8qIExpZ2h0IGdyYXkgYmFja2dyb3VuZCAqL1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgIC8qIFBhZGRpbmcgYXJvdW5kIHRoZSB3aG9sZSBmb3JtICovXHJcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gIH1cclxuICBoNCB7XHJcbiAgICBmb250LXNpemU6IDIzcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG4uaW5wdXQgOmhvdmVyIHtcclxuICBjb2xvcjogZ3JlZW47XHJcbn1cclxuXHJcbiAgLyogWW91IGNhbiBhZGQgZ2xvYmFsIHN0eWxlcyB0byB0aGlzIGZpbGUsIGFuZCBhbHNvIGltcG9ydCBvdGhlciBzdHlsZSBmaWxlcyAqL1xyXG4gIC5kZXN0X3RleHQge1xyXG4gICAgbWF4LXdpZHRoOiA1MDBweDtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOSk7IFxyXG4gICAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSgwLCAwLCAwLCAwLjIpOyBcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgei1pbmRleDogMTsgXHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvYmc0LWltZy53ZWJwJykgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXI7IFxyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICB9XHJcbiAgLmRlc3RfdGV4dDo6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjUpOyAvKiBEYXJrIG92ZXJsYXkgd2l0aCBvcGFjaXR5ICovXHJcbiAgICBmaWx0ZXI6IGJsdXIoOHB4KTsgLyogQWRqdXN0IGJsdXIgc3RyZW5ndGggYXMgbmVlZGVkICovXHJcbiAgICB6LWluZGV4OiAtMTsgLyogUGxhY2Ugb3ZlcmxheSBiZWhpbmQgdGhlIGNvbnRlbnQgKi9cclxufVxyXG4gIFxyXG4gIGgxe1xyXG4gICAgZm9udC1zaXplOiA0MHB4O1xyXG4gIH1cclxuICBoMntcclxuICAgIGZvbnQtc2l6ZTogMzVweDtcclxuICB9XHJcbiAgaDN7XHJcbiAgICBmb250LXNpemU6IDI4cHg7XHJcbiAgfVxyXG4gIGg1e1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gIH1cclxuICBwe1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gIH1cclxuICBsYWJlbHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICB9XHJcbiAgLmJ0biB7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIFN0eWxpbmcgZm9yIHRoZSBmb3JtIGNvbnRhaW5lciAqL1xyXG4gIC5kZXN0aW5hdGlvbjEge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuICAgIC8qIFdoaXRlIGJhY2tncm91bmQgKi9cclxuICAgIHBhZGRpbmc6IDMwcHg7XHJcbiAgICAvKiBQYWRkaW5nIGluc2lkZSB0aGUgZm9ybSBjb250YWluZXIgKi9cclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAvKiBSb3VuZGVkIGNvcm5lcnMgKi9cclxuICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICAgIC8qIFNoYWRvdyBmb3IgYSBzbGlnaHQgZWxldmF0aW9uICovXHJcbiAgfVxyXG4gIFxyXG4gIGJ1dHRvbi5idG4uYnRuLXN1Y2NlcyB7XHJcbiAgICBwYWRkaW5nOiA0cHggMjBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMDg2Nzg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBcclxuICB9XHJcbiAgYnV0dG9uLmJ0bi5idG4tcHJpbWFyeSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGI0YjRiO1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjNGI0YjRiO1xyXG4gIH1cclxuICBcclxuICAuc3VibWl0IHtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICB9XHJcbiAgXHJcbiAgLyogU3R5bGluZyBmb3IgZm9ybSBsYWJlbHMgKi9cclxuICAuZm9ybV9jb250cm9sIHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgLyogQm9sZCBmb250IGZvciBsYWJlbHMgKi9cclxuICB9XHJcbiAgXHJcbiAgLyogU3R5bGluZyBmb3IgZm9ybSBpbnB1dHMgYW5kIHNlbGVjdCAqL1xyXG4gIC5mb3JtX2lucHV0IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgLyogRnVsbCB3aWR0aCAqL1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIC8qIFBhZGRpbmcgaW5zaWRlIGlucHV0cyAqL1xyXG4gICAgbWFyZ2luLXRvcDogOHB4O1xyXG4gICAgLyogVG9wIG1hcmdpbiAqL1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgIC8qIEJvdHRvbSBtYXJnaW4gKi9cclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgICAvKiBMaWdodCBncmF5IGJvcmRlciAqL1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICB9XHJcbiAgXHJcbiAgLyogU3R5bGluZyBmb3Igc3VibWl0IGJ1dHRvbiAqL1xyXG4gIC5zdWJtaXRfYnRuIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gIFxyXG4gIC5mb3JtLWdyb3VwIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIGxhYmVsIHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIH1cclxuICBcclxuICAudGV4dC1kYW5nZXIge1xyXG4gICAgY29sb3I6IHJlZDtcclxuICAgIGZvbnQtc2l6ZTogMC44NzVyZW07XHJcbiAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkxcHgpe1xyXG4gIC5kZXN0aW5hdGlvbiB7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gIH1cclxuICB9XHJcbiAgXHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTFweCl7XHJcbiAgLmRlc3RpbmF0aW9uIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICB9Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 652:
/*!******************************************!*\
  !*** ./src/app/form2/form2.component.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Form2Component: () => (/* binding */ Form2Component)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 5072);



class Form2Component {
  constructor(fb, router, route) {
    this.fb = fb;
    this.router = router;
    this.route = route;
    this.currentStep = 1;
    this.form = this.fb.group({
      destination: this.fb.group({
        name: ['']
      }),
      hotel_list: this.fb.group({
        location: ['']
      }),
      date: this.fb.group({
        travelDate: ['']
      }),
      rooms: this.fb.group({
        method: ['']
      }),
      peoples: this.fb.group({
        number: ['']
      }),
      payment: this.fb.group({
        method: ['']
      })
    });
  }
  ngOnInit() {
    this.route.firstChild?.params.subscribe(params => {
      const step = params['step'];
      if (step) {
        this.currentStep = this.getStepNumber(step);
      }
    });
  }
  nextStep() {
    if (this.currentStep < 5) {
      this.currentStep++;
      this.router.navigate([`form2/${this.getStepPath(this.currentStep)}`]);
    }
  }
  prevStep() {
    if (this.currentStep > 1) {
      this.currentStep--;
      this.router.navigate([`form2/${this.getStepPath(this.currentStep)}`]);
    }
  }
  getStepPath(step) {
    switch (step) {
      case 1:
        return 'destination';
      case 2:
        return 'hotel_list';
      case 3:
        return 'date';
      case 4:
        return 'rooms';
      case 5:
        return 'peoples';
      case 6:
        return 'payment';
      default:
        return '';
    }
  }
  getStepNumber(path) {
    switch (path) {
      case 'destination':
        return 1;
      case 'hotel_list':
        return 2;
      case 'date':
        return 3;
      case 'rooms':
        return 4;
      case 'peoples':
        return 5;
      case 'payment':
        return 6;
      default:
        return 1;
    }
  }
  submit() {
    console.log(this.form.value);
    // Here you would usually submit the form data to a server
  }
  static #_ = this.ɵfac = function Form2Component_Factory(t) {
    return new (t || Form2Component)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.ActivatedRoute));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: Form2Component,
    selectors: [["app-form2"]],
    decls: 2,
    vars: 0,
    consts: [[1, "form2-container"]],
    template: function Form2Component_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterOutlet],
    styles: ["\n\n\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZm9ybTIvZm9ybTIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7R0FFRyIsInNvdXJjZXNDb250ZW50IjpbIi8qIC5tYWluX2Zvcm17XHJcbiAgICB3aWR0aDogNTAlO1xyXG59ICovIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 1091:
/*!**********************************************************!*\
  !*** ./src/app/form2/hotel-list/hotel-list.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HotelListComponent: () => (/* binding */ HotelListComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ 3840);




function HotelListComponent_li_6_mat_icon_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function HotelListComponent_li_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 8)(1, "div", 9)(2, "div", 10)(3, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 11)(6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Rating:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, HotelListComponent_li_6_mat_icon_8_Template, 2, 0, "mat-icon", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 13)(10, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Booking");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const hotel_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](hotel_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", hotel_r1.ratingStars);
  }
}
class HotelListComponent {
  constructor() {
    // Initialize hotels array with dummy data (replace with actual data loading logic)
    this.hotels = [{
      name: 'Aether Haven',
      rating: 4
    }, {
      name: 'Blissful Retreat',
      rating: 5
    }, {
      name: 'Four Seasons',
      rating: 3
    }
    // Add more hotels as needed
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
    consts: [[1, "list"], [1, "container"], [1, "list_text"], [1, "hotel-list"], ["class", "hotel-item", 4, "ngFor", "ngForOf"], [1, "submit"], [1, "left_btn"], ["color", "primary", "routerLink", "/form2/destination", 1, "btn", "btn-primary"], [1, "hotel-item"], [1, "hotel-sec"], [1, "hotel-info"], [1, "rating"], ["color", "primary", 4, "ngFor", "ngForOf"], [1, "booking-btn"], ["color", "primary", "routerLink", "/form2/date", 1, "btn", "btn-succes"], ["color", "primary"], [1, "fa-solid", "fa-star"]],
    template: function HotelListComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Hotel List");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, HotelListComponent_li_6_Template, 12, 2, "li", 4);
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
    styles: [".list[_ngcontent-%COMP%] {\n  margin-top: 50px;\n  width: 50%;\n  margin-left: auto;\n  margin-right: auto;\n}\n\nh2[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n\n\n\n\n\n\n\n\n\n\n.list_text[_ngcontent-%COMP%] {\n  max-width: 500px;\n  padding: 20px;\n  border-radius: 10px;\n  margin-left: auto;\n  margin-right: auto;\n  background: rgba(255, 255, 255, 0.9); \n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2); \n  width: 100%;\n  z-index: 1; \n  background: url('bg4-img.webp') no-repeat center center; \n  background-size: cover;\n  position: relative;\n  background-position: center;\n}\n.list_text[_ngcontent-%COMP%]::before {\n  content: '';\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.5); \n\n  filter: blur(8px); \n\n  z-index: -1; \n\n}\n\n.hotel-list[_ngcontent-%COMP%] {\n  list-style-type: none;\n  padding: 0;\n}\n\n.hotel-item[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n  padding: 10px;\n  border: 1px solid #ddd;\n  border-radius: 8px;\n  background-color: #fff;\n}\n\nbutton.btn.btn-success[_ngcontent-%COMP%] {\n  padding: 4px 20px;\n\n}\n\nbutton.btn.btn-primary[_ngcontent-%COMP%] {\n  padding: 4px 20px;\n\n}\n\np[_ngcontent-%COMP%] {\n  margin-top: 0;\n  margin-bottom: 0;\n}\n\n.submit[_ngcontent-%COMP%] {\n  display: flex;\n  margin-top: 20px;\n}\n\n.right_btn[_ngcontent-%COMP%] {\n  margin-left: auto;\n}\n\ni.fa-solid.fa-star[_ngcontent-%COMP%] {\n  color: orange;\n  font-size: 15px;\n}\n\n.hotel-sec[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.booking-btn[_ngcontent-%COMP%] {\n  margin-left: auto;\n}\n\n.booking-btn[_ngcontent-%COMP%]   button.btn.btn-success[_ngcontent-%COMP%] {\n  margin-top: 15px;\n  padding: 6px 20px;\n}\n\n.rating[_ngcontent-%COMP%] {\n  display: flex;\n}\n\np[_ngcontent-%COMP%] {\n  margin-right: 10px;\n}\n\n\n\nh1[_ngcontent-%COMP%] {\n  font-size: 40px;\n}\n\nh2[_ngcontent-%COMP%] {\n  font-size: 35px;\n}\n\nh3[_ngcontent-%COMP%] {\n  font-size: 28px;\n}\n\nh4[_ngcontent-%COMP%] {\n  font-size: 23px;\n  text-align: center;\n  margin-bottom: 20px;\n  font-weight: 800;\n  color: white;\n}\nbutton.btn.btn-primary[_ngcontent-%COMP%] {\n  background-color: #4b4b4b;\n  border-color: #4b4b4b;\n}\n\nbutton.btn.btn-succes[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  background-color: #208678;\n  color: white;\n}\n\nh5[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n\np[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n\nlabel[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n\n.btn[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n\n\n\n@media only screen and (max-width: 991px) {\n  .list[_ngcontent-%COMP%] {\n    width: 80%;\n  }\n}\n\n@media only screen and (max-width: 575px) {\n  .list[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n\n  .container[_ngcontent-%COMP%] {\n    max-width: 371px;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZm9ybTIvaG90ZWwtbGlzdC9ob3RlbC1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7RUFDaEIsVUFBVTtFQUNWLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7Ozs7Ozs7R0FPRztBQUNIO0VBQ0UsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixvQ0FBb0M7RUFDcEMsdUNBQXVDO0VBQ3ZDLFdBQVc7RUFDWCxVQUFVO0VBQ1YsdURBQThFO0VBQzlFLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsMkJBQTJCO0FBQzdCO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixPQUFPO0VBQ1AsV0FBVztFQUNYLFlBQVk7RUFDWiw4QkFBOEIsRUFBRSw4QkFBOEI7RUFDOUQsaUJBQWlCLEVBQUUsbUNBQW1DO0VBQ3RELFdBQVcsRUFBRSxxQ0FBcUM7QUFDcEQ7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsVUFBVTtBQUNaOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGlCQUFpQjs7QUFFbkI7O0FBRUE7RUFDRSxpQkFBaUI7O0FBRW5COztBQUVBO0VBQ0UsYUFBYTtFQUNiLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUEsOEVBQThFO0FBQzlFO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLFlBQVk7QUFDZDtBQUNBO0VBQ0UseUJBQXlCO0VBQ3pCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQix5QkFBeUI7RUFDekIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7OztBQUlBO0VBQ0U7SUFDRSxVQUFVO0VBQ1o7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsV0FBVztFQUNiOztFQUVBO0lBQ0UsZ0JBQWdCO0VBQ2xCO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIubGlzdCB7XHJcbiAgbWFyZ2luLXRvcDogNTBweDtcclxuICB3aWR0aDogNTAlO1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gIG1hcmdpbi1yaWdodDogYXV0bztcclxufVxyXG5cclxuaDIge1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuXHJcbi8qIC5jb250YWluZXIge1xyXG4gIG1heC13aWR0aDogNTAwcHg7XHJcbiAgbWFyZ2luOiAyMHB4IGF1dG87XHJcbiAgcGFkZGluZzogMjBweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjMjA4Njc4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjNmY2ZiO1xyXG59ICovXHJcbi5saXN0X3RleHQge1xyXG4gIG1heC13aWR0aDogNTAwcHg7XHJcbiAgcGFkZGluZzogMjBweDtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gIG1hcmdpbi1yaWdodDogYXV0bztcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOSk7IFxyXG4gIGJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4yKTsgXHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgei1pbmRleDogMTsgXHJcbiAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2JnNC1pbWcud2VicCcpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyOyBcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbn1cclxuLmxpc3RfdGV4dDo6YmVmb3JlIHtcclxuICBjb250ZW50OiAnJztcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41KTsgLyogRGFyayBvdmVybGF5IHdpdGggb3BhY2l0eSAqL1xyXG4gIGZpbHRlcjogYmx1cig4cHgpOyAvKiBBZGp1c3QgYmx1ciBzdHJlbmd0aCBhcyBuZWVkZWQgKi9cclxuICB6LWluZGV4OiAtMTsgLyogUGxhY2Ugb3ZlcmxheSBiZWhpbmQgdGhlIGNvbnRlbnQgKi9cclxufVxyXG5cclxuLmhvdGVsLWxpc3Qge1xyXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG4uaG90ZWwtaXRlbSB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbmJ1dHRvbi5idG4uYnRuLXN1Y2Nlc3Mge1xyXG4gIHBhZGRpbmc6IDRweCAyMHB4O1xyXG5cclxufVxyXG5cclxuYnV0dG9uLmJ0bi5idG4tcHJpbWFyeSB7XHJcbiAgcGFkZGluZzogNHB4IDIwcHg7XHJcblxyXG59XHJcblxyXG5wIHtcclxuICBtYXJnaW4tdG9wOiAwO1xyXG4gIG1hcmdpbi1ib3R0b206IDA7XHJcbn1cclxuXHJcbi5zdWJtaXQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxufVxyXG5cclxuLnJpZ2h0X2J0biB7XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbn1cclxuXHJcbmkuZmEtc29saWQuZmEtc3RhciB7XHJcbiAgY29sb3I6IG9yYW5nZTtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbn1cclxuXHJcbi5ob3RlbC1zZWMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbi5ib29raW5nLWJ0biB7XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbn1cclxuXHJcbi5ib29raW5nLWJ0biBidXR0b24uYnRuLmJ0bi1zdWNjZXNzIHtcclxuICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gIHBhZGRpbmc6IDZweCAyMHB4O1xyXG59XHJcblxyXG4ucmF0aW5nIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG5wIHtcclxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbn1cclxuXHJcbi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cclxuaDEge1xyXG4gIGZvbnQtc2l6ZTogNDBweDtcclxufVxyXG5cclxuaDIge1xyXG4gIGZvbnQtc2l6ZTogMzVweDtcclxufVxyXG5cclxuaDMge1xyXG4gIGZvbnQtc2l6ZTogMjhweDtcclxufVxyXG5cclxuaDQge1xyXG4gIGZvbnQtc2l6ZTogMjNweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICBmb250LXdlaWdodDogODAwO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5idXR0b24uYnRuLmJ0bi1wcmltYXJ5IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGI0YjRiO1xyXG4gIGJvcmRlci1jb2xvcjogIzRiNGI0YjtcclxufVxyXG5cclxuYnV0dG9uLmJ0bi5idG4tc3VjY2VzIHtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMyMDg2Nzg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG5oNSB7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG59XHJcblxyXG5wIHtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbn1cclxuXHJcbmxhYmVsIHtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbn1cclxuXHJcbi5idG4ge1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxufVxyXG5cclxuXHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MXB4KSB7XHJcbiAgLmxpc3Qge1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTc1cHgpIHtcclxuICAubGlzdCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcblxyXG4gIC5jb250YWluZXIge1xyXG4gICAgbWF4LXdpZHRoOiAzNzFweDtcclxuICB9XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 4559:
/*!****************************************************!*\
  !*** ./src/app/form2/payment/payment.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PaymentComponent: () => (/* binding */ PaymentComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 4456);




function PaymentComponent_option_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const type_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", type_r3.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](type_r3.name);
  }
}
function PaymentComponent_div_15_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Booking type is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function PaymentComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PaymentComponent_div_15_div_1_Template, 2, 0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const bookingType_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", bookingType_r4.errors == null ? null : bookingType_r4.errors["required"]);
  }
}
function PaymentComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div")(1, "label", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Price:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayListener"]("ngModelChange", function PaymentComponent_div_16_Template_input_ngModelChange_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayBindingSet"](ctx_r5.selectedPrice, $event) || (ctx_r5.selectedPrice = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayProperty"]("ngModel", ctx_r5.selectedPrice);
  }
}
function PaymentComponent_li_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li")(1, "input", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayListener"]("ngModelChange", function PaymentComponent_li_21_Template_input_ngModelChange_1_listener($event) {
      const interest_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7).$implicit;
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayBindingSet"](interest_r8.selected, $event) || (interest_r8.selected = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function PaymentComponent_li_21_Template_input_change_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r5.updatePriceList());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const interest_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "interest", interest_r8.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayProperty"]("ngModel", interest_r8.selected);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("for", "interest", interest_r8.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", interest_r8.name, " (+", interest_r8.price, " $)");
  }
}
function PaymentComponent_div_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 35)(1, "input", 36, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayListener"]("ngModelChange", function PaymentComponent_div_29_Template_input_ngModelChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayBindingSet"](ctx_r5.selectedPaymentMethod, $event) || (ctx_r5.selectedPaymentMethod = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const method_r10 = ctx.$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "paymentMethod", method_r10, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayProperty"]("ngModel", ctx_r5.selectedPaymentMethod);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", method_r10)("required", ctx_r5.selectedBookingType !== "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("for", "paymentMethod", method_r10, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", method_r10, " ");
  }
}
function PaymentComponent_div_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please select a payment method. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function PaymentComponent_div_31_div_10_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Card number is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function PaymentComponent_div_31_div_10_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Card number must be 16 digits.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function PaymentComponent_div_31_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PaymentComponent_div_31_div_10_div_1_Template, 2, 0, "div", 18)(2, PaymentComponent_div_31_div_10_div_2_Template, 2, 0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const cardNumberField_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", cardNumberField_r12.errors == null ? null : cardNumberField_r12.errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", cardNumberField_r12.errors == null ? null : cardNumberField_r12.errors["pattern"]);
  }
}
function PaymentComponent_div_31_div_19_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Holder name is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function PaymentComponent_div_31_div_19_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Holder name must be text.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function PaymentComponent_div_31_div_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PaymentComponent_div_31_div_19_div_1_Template, 2, 0, "div", 18)(2, PaymentComponent_div_31_div_19_div_2_Template, 2, 0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const holderNameField_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", holderNameField_r13.errors == null ? null : holderNameField_r13.errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", holderNameField_r13.errors == null ? null : holderNameField_r13.errors["pattern"]);
  }
}
function PaymentComponent_div_31_div_26_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "CVV is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function PaymentComponent_div_31_div_26_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "CVV must be 3 digits.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function PaymentComponent_div_31_div_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PaymentComponent_div_31_div_26_div_1_Template, 2, 0, "div", 18)(2, PaymentComponent_div_31_div_26_div_2_Template, 2, 0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const ccvField_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ccvField_r14.errors == null ? null : ccvField_r14.errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ccvField_r14.errors == null ? null : ccvField_r14.errors["pattern"]);
  }
}
function PaymentComponent_div_31_div_33_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Expiry date is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function PaymentComponent_div_31_div_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PaymentComponent_div_31_div_33_div_1_Template, 2, 0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const expiryDateField_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", expiryDateField_r15.errors == null ? null : expiryDateField_r15.errors["required"]);
  }
}
function PaymentComponent_div_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div")(1, "div", 38)(2, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Credit Card:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 12)(5, "div", 39)(6, "label", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Card Number:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 41, 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayListener"]("ngModelChange", function PaymentComponent_div_31_Template_input_ngModelChange_8_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayBindingSet"](ctx_r5.cardNumber, $event) || (ctx_r5.cardNumber = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, PaymentComponent_div_31_div_10_Template, 3, 2, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 42)(12, "div", 43)(13, "div", 44)(14, "div", 39)(15, "label", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Holder Name:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "input", 46, 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayListener"]("ngModelChange", function PaymentComponent_div_31_Template_input_ngModelChange_17_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayBindingSet"](ctx_r5.holderName, $event) || (ctx_r5.holderName = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, PaymentComponent_div_31_div_19_Template, 3, 2, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 44)(21, "div", 39)(22, "label", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "CVV:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "input", 48, 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayListener"]("ngModelChange", function PaymentComponent_div_31_Template_input_ngModelChange_24_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayBindingSet"](ctx_r5.ccv, $event) || (ctx_r5.ccv = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, PaymentComponent_div_31_div_26_Template, 3, 2, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 44)(28, "div", 39)(29, "label", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Expiry Date:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "input", 50, 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayListener"]("ngModelChange", function PaymentComponent_div_31_Template_input_ngModelChange_31_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayBindingSet"](ctx_r5.expiryDate, $event) || (ctx_r5.expiryDate = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, PaymentComponent_div_31_div_33_Template, 2, 1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()();
  }
  if (rf & 2) {
    const cardNumberField_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);
    const holderNameField_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](18);
    const ccvField_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](25);
    const expiryDateField_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](32);
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayProperty"]("ngModel", ctx_r5.cardNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", cardNumberField_r12.invalid && (cardNumberField_r12.dirty || cardNumberField_r12.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayProperty"]("ngModel", ctx_r5.holderName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", holderNameField_r13.invalid && (holderNameField_r13.dirty || holderNameField_r13.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayProperty"]("ngModel", ctx_r5.ccv);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ccvField_r14.invalid && (ccvField_r14.dirty || ccvField_r14.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayProperty"]("ngModel", ctx_r5.expiryDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", expiryDateField_r15.invalid && (expiryDateField_r15.dirty || expiryDateField_r15.touched));
  }
}
function PaymentComponent_div_32_div_10_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "PayPal email is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function PaymentComponent_div_32_div_10_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Invalid email format.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function PaymentComponent_div_32_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PaymentComponent_div_32_div_10_div_1_Template, 2, 0, "div", 18)(2, PaymentComponent_div_32_div_10_div_2_Template, 2, 0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const paypalEmailField_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", paypalEmailField_r17.errors == null ? null : paypalEmailField_r17.errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", paypalEmailField_r17.errors == null ? null : paypalEmailField_r17.errors["email"]);
  }
}
function PaymentComponent_div_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div")(1, "div", 38)(2, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "PayPal:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 12)(5, "div", 39)(6, "label", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "PayPal Email:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 52, 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayListener"]("ngModelChange", function PaymentComponent_div_32_Template_input_ngModelChange_8_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayBindingSet"](ctx_r5.paypalEmail, $event) || (ctx_r5.paypalEmail = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, PaymentComponent_div_32_div_10_Template, 3, 2, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const paypalEmailField_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayProperty"]("ngModel", ctx_r5.paypalEmail);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", paypalEmailField_r17.invalid && (paypalEmailField_r17.dirty || paypalEmailField_r17.touched));
  }
}
function PaymentComponent_div_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div");
  }
}
class PaymentComponent {
  constructor() {
    this.paymentMethods = ['Credit Card', 'PayPal', 'Bank Transfer'];
    this.selectedPaymentMethod = '';
    this.selectedBookingType = '';
    this.totalPrice = 0;
    this.paypalEmail = '';
    this.cardNumber = '';
    this.holderName = '';
    this.ccv = '';
    this.expiryDate = '';
    this.bookingTypes = [{
      id: 1,
      name: 'Standard',
      price: 1000
    }, {
      id: 2,
      name: 'Deluxe',
      price: 1500
    }, {
      id: 3,
      name: 'Suite',
      price: 2000
    }, {
      id: 4,
      name: 'Family Room',
      price: 2500
    }];
    this.interests = [{
      id: 1,
      name: 'Breakfast',
      price: 100,
      selected: false
    }, {
      id: 2,
      name: 'Laundry Services',
      price: 200,
      selected: false
    }, {
      id: 3,
      name: 'Spa Package',
      price: 300,
      selected: false
    }];
  }
  submitForm(form) {
    if (form.valid && this.selectedPaymentMethod !== '') {
      console.log('Form submitted successfully!', form.value);
      form.resetForm();
      this.showAlert();
    } else {
      console.error('Form is invalid or no payment method selected');
    }
  }
  showAlert() {
    alert('Form submitted successfully!');
  }
  updatePriceList() {
    this.selectedPrice = this.bookingTypes.find(type => type.name === this.selectedBookingType)?.price;
    this.calculateTotalPrice();
  }
  calculateTotalPrice() {
    let basePrice = this.selectedPrice || 0;
    let additionalCosts = this.interests.filter(interest => interest.selected).reduce((total, interest) => total + interest.price, 0);
    this.totalPrice = basePrice + additionalCosts;
  }
  isValidDateRange() {
    return true; // Replace with actual date validation logic if needed
  }
  static #_ = this.ɵfac = function PaymentComponent_Factory(t) {
    return new (t || PaymentComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: PaymentComponent,
    selectors: [["app-payment"]],
    decls: 41,
    vars: 12,
    consts: [["bookingForm", "ngForm"], ["bookingType", "ngModel"], ["paymentMethod", "ngModel"], ["cardNumberField", "ngModel"], ["holderNameField", "ngModel"], ["ccvField", "ngModel"], ["expiryDateField", "ngModel"], ["paypalEmailField", "ngModel"], [1, "payment"], [1, "container"], [1, "payment_text"], [1, "booking-form", 3, "ngSubmit"], [1, "form-group"], ["for", "bookingType"], ["id", "bookingType", "name", "bookingType", "required", "", 1, "form-control", 3, "ngModelChange", "change", "ngModel"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["class", "text-danger", 4, "ngIf"], [4, "ngIf"], [1, "additional_services"], [4, "ngFor", "ngForOf"], ["for", "totalPrice"], ["type", "text", "id", "totalPrice", "name", "totalPrice", "disabled", "", 1, "form-control", 3, "ngModelChange", "ngModel"], ["class", "form-check", 4, "ngFor", "ngForOf"], [1, "submit"], [1, "left_btn"], ["routerLink", "/form2/rooms", 1, "btn", "btn-primary"], [1, "right_btn"], ["type", "submit", 1, "btn", "btn-success", 3, "disabled"], [3, "value"], [1, "text-danger"], ["for", "price"], ["type", "text", "id", "price", "name", "price", "disabled", "", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "checkbox", "name", "interests", 3, "ngModelChange", "change", "id", "ngModel"], [3, "for"], [1, "form-check"], ["type", "radio", "name", "paymentMethod", 1, "form-check-input", 3, "ngModelChange", "id", "ngModel", "value", "required"], [1, "form-check-label", 3, "for"], [1, "card-details"], [1, "card_1"], ["for", "cardNumber"], ["type", "text", "id", "cardNumber", "name", "cardNumber", "required", "", "pattern", "[0-9]{16}", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "card_details"], [1, "row"], [1, "col-md-4"], ["for", "name"], ["type", "text", "id", "name", "name", "name", "required", "", "pattern", "[A-Za-z ]+", 1, "form-control", 3, "ngModelChange", "ngModel"], ["for", "ccv"], ["type", "text", "id", "ccv", "name", "ccv", "required", "", "pattern", "[0-9]{3}", 1, "form-control", 3, "ngModelChange", "ngModel"], ["for", "expiryDate"], ["type", "date", "id", "expiryDate", "name", "expiryDate", "required", "", 1, "form-control", 3, "ngModelChange", "ngModel"], ["for", "paypalEmail"], ["type", "email", "id", "paypalEmail", "name", "paypalEmail", "required", "", 1, "form-control", 3, "ngModelChange", "ngModel"]],
    template: function PaymentComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 8)(1, "div", 9)(2, "div", 10)(3, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Payment");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", 11, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function PaymentComponent_Template_form_ngSubmit_5_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
          const bookingForm_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);
          return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.submitForm(bookingForm_r2));
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 12)(8, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Booking Type:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "select", 14, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayListener"]("ngModelChange", function PaymentComponent_Template_select_ngModelChange_10_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayBindingSet"](ctx.selectedBookingType, $event) || (ctx.selectedBookingType = $event);
          return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"]($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function PaymentComponent_Template_select_change_10_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.updatePriceList());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "option", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Select Booking Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, PaymentComponent_option_14_Template, 2, 2, "option", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, PaymentComponent_div_15_Template, 2, 1, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, PaymentComponent_div_16_Template, 4, 1, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 12)(18, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Additional Charges:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "ul", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, PaymentComponent_li_21_Template, 4, 7, "li", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div")(23, "label", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Total Price:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayListener"]("ngModelChange", function PaymentComponent_Template_input_ngModelChange_25_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayBindingSet"](ctx.totalPrice, $event) || (ctx.totalPrice = $event);
          return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"]($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 12)(27, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Payment Method:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, PaymentComponent_div_29_Template, 5, 8, "div", 23)(30, PaymentComponent_div_30_Template, 2, 0, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, PaymentComponent_div_31_Template, 34, 8, "div", 18)(32, PaymentComponent_div_32_Template, 11, 2, "div", 18)(33, PaymentComponent_div_33_Template, 1, 0, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 24)(35, "div", 25)(36, "button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Prev");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 27)(39, "button", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()();
      }
      if (rf & 2) {
        const bookingForm_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);
        const bookingType_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayProperty"]("ngModel", ctx.selectedBookingType);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.bookingTypes);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", bookingType_r4.invalid && (bookingType_r4.dirty || bookingType_r4.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.selectedBookingType);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.interests);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayProperty"]("ngModel", ctx.totalPrice);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", bookingForm_r2.invalid || !ctx.isValidDateRange());
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.RadioControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.PatternValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgForm],
    styles: ["\n\n.payment[_ngcontent-%COMP%] {\n    margin-top: 50px;\n    background-color: #f9f9f9;\n    padding: 20px;\n    \n\n    border: 1px solid #ccc;\n    border-radius: 5px;\n    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\n  }\n \n  .payment_text[_ngcontent-%COMP%] {\n    max-width: 500px;\n    padding: 20px;\n    margin-top: 50px;\n    border-radius: 10px;\n    margin-left: auto;\n    margin-right: auto;\n    background: rgba(255, 255, 255, 0.9); \n    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2); \n    width: 100%;\n    z-index: 1; \n    background: url('bg6.jpg') no-repeat center center; \n    background-size: cover;\n    position: relative;\n    background-position: center;\n  }\n  .payment_text[_ngcontent-%COMP%]::before {\n    content: '';\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background: rgba(0, 0, 0, 0.5); \n\n    filter: blur(8px); \n\n    z-index: -1; \n\n  }\n\n\n\n\n\n\n  \n  \n\n\n\n\n\n\n\n\n\n  \n  .form-group[_ngcontent-%COMP%] {\n    margin-bottom: 20px;\n  }\n  \n  label[_ngcontent-%COMP%] {\n    font-weight: bold;\n    \n\n  }\n  \n  select[_ngcontent-%COMP%], \n   input[type=\"text\"][_ngcontent-%COMP%] {\n    width: 100%;\n    padding: 10px;\n    font-size: 14px;\n    border: 1px solid #ccc;\n    border-radius: 4px;\n  }\n  \n  .submit[_ngcontent-%COMP%] {\n    margin-top: 20px;\n    display: flex;\n    justify-content: space-between;\n  }\n  \n  .left_btn[_ngcontent-%COMP%] {\n    width: 45%;\n  }\n  \n  button.btn.btn-success[_ngcontent-%COMP%] {\n    padding: 4px 20px;\n    background-color: #208678;\n}\nbutton.btn.btn-primary[_ngcontent-%COMP%] {\n  background-color: #4b4b4b;\n  border-color: #4b4b4b;\n}\n  \n  .btn-primary[_ngcontent-%COMP%]:hover, \n   .btn-success[_ngcontent-%COMP%]:hover {\n    opacity: 0.8;\n  }\n  button.btn.btn-primary[_ngcontent-%COMP%] {\n    background-color: #4b4b4b;\n}\n  \n  .text-danger[_ngcontent-%COMP%] {\n    color: #dc3545;\n    font-size: 14px;\n  }\n\n  input#cardNumber[_ngcontent-%COMP%] {\n    width: 100%;\n    display: block;\n}\n.card_details[_ngcontent-%COMP%]{\n    display: flex;\n    width: 100%;\n}\n.card-details[_ngcontent-%COMP%]{\n    width: 100%;\n    background-color: #dbe4ed;\n    padding: 20px;\n    border-radius: 8px;\n}\n.card-details[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{\n  color: black;\n}\ninput[type=text][_ngcontent-%COMP%] {\n    width: 100%;\n    padding: 10px 20px;\n    \n\n    border: 1px solid #ccc;\n    border-radius: 4px;\n}\n\ninput#date[_ngcontent-%COMP%], input#ccv[_ngcontent-%COMP%], input#text[_ngcontent-%COMP%], input#cardNumber[_ngcontent-%COMP%], select#bookingType[_ngcontent-%COMP%], input#expiryDate[_ngcontent-%COMP%], input#name[_ngcontent-%COMP%] {\n    padding: 10px 10px;\n    margin-bottom: 10px;\n    margin-top: 10px;\n}\n.card-details[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{\n    margin-top: 10px;\n    margin-top: 10px;\n    \n\n}\n  \n.card_submit[_ngcontent-%COMP%]{\n  text-align: right;\n   width: 100%;\n}\n.additional_services[_ngcontent-%COMP%]{\n    width: 100%;\n    list-style: none;\n    \n\n}\ninput#\\33[_ngcontent-%COMP%], input#\\32[_ngcontent-%COMP%], input#\\31[_ngcontent-%COMP%]{\n    height: 20px;\n    width: 20px;\n    margin-right: 10px;\n}\ninput#totalPrice[_ngcontent-%COMP%] {\n    margin-top: 10px;\n    margin-bottom: 10px;\n}\n\n\n\n\n  h1[_ngcontent-%COMP%]{\n    font-size: 40px;\n  }\n  h2[_ngcontent-%COMP%]{\n    font-size: 35px;\n  }\n  h3[_ngcontent-%COMP%]{\n    font-size: 28px;\n  }\n  h4[_ngcontent-%COMP%] {\n    font-size: 23px;\n    text-align: center;\n    margin-bottom: 20px;\n    font-weight: 800;\n    color: #208678;\n    color: white;\n  }\n  h5[_ngcontent-%COMP%]{\n    font-size: 20px;\n}\np[_ngcontent-%COMP%]{\n    font-size: 16px;\n}\nlabel[_ngcontent-%COMP%]{\n    font-size: 16px;\n    color: white;\n}\n.btn[_ngcontent-%COMP%] {\n    font-size: 18px;\n    padding: 4px 20px;\n  }\n\n\n  \n@media only screen and (max-width: 991px){\n  .destination[_ngcontent-%COMP%] {\n    width: 80%;\n  }\n  }\n  \n  @media only screen and (max-width: 991px){\n  .destination[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  }\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZm9ybTIvcGF5bWVudC9wYXltZW50LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLCtCQUErQjtBQUMvQjtJQUNJLGdCQUFnQjtJQUNoQix5QkFBeUI7SUFDekIsYUFBYTtJQUNiLG9CQUFvQjtJQUNwQixzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLHVDQUF1QztFQUN6Qzs7RUFFQTtJQUNFLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLG9DQUFvQztJQUNwQyx1Q0FBdUM7SUFDdkMsV0FBVztJQUNYLFVBQVU7SUFDVixrREFBeUU7SUFDekUsc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQiwyQkFBMkI7RUFDN0I7RUFDQTtJQUNFLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLE9BQU87SUFDUCxXQUFXO0lBQ1gsWUFBWTtJQUNaLDhCQUE4QixFQUFFLDhCQUE4QjtJQUM5RCxpQkFBaUIsRUFBRSxtQ0FBbUM7SUFDdEQsV0FBVyxFQUFFLHFDQUFxQztFQUNwRDtBQUNGOzs7O0tBSUs7O0VBRUg7Ozs7Ozs7O0tBUUc7O0VBRUg7SUFDRSxtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxpQkFBaUI7SUFDakIscUJBQXFCO0VBQ3ZCOztFQUVBOztJQUVFLFdBQVc7SUFDWCxhQUFhO0lBQ2IsZUFBZTtJQUNmLHNCQUFzQjtJQUN0QixrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLDhCQUE4QjtFQUNoQzs7RUFFQTtJQUNFLFVBQVU7RUFDWjs7RUFFQTtJQUNFLGlCQUFpQjtJQUNqQix5QkFBeUI7QUFDN0I7QUFDQTtFQUNFLHlCQUF5QjtFQUN6QixxQkFBcUI7QUFDdkI7O0VBRUU7O0lBRUUsWUFBWTtFQUNkO0VBQ0E7SUFDRSx5QkFBeUI7QUFDN0I7O0VBRUU7SUFDRSxjQUFjO0lBQ2QsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLFdBQVc7SUFDWCxjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsV0FBVztBQUNmO0FBQ0E7SUFDSSxXQUFXO0lBQ1gseUJBQXlCO0lBQ3pCLGFBQWE7SUFDYixrQkFBa0I7QUFDdEI7QUFDQTtFQUNFLFlBQVk7QUFDZDtBQUNBO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsc0JBQXNCO0lBQ3RCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLHFCQUFxQjtBQUN6Qjs7QUFFQTtFQUNFLGlCQUFpQjtHQUNoQixXQUFXO0FBQ2Q7QUFDQTtJQUNJLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsd0JBQXdCO0FBQzVCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLG1CQUFtQjtBQUN2Qjs7QUFFQSw4RUFBOEU7O0VBRTVFO0lBQ0UsZUFBZTtFQUNqQjtFQUNBO0lBQ0UsZUFBZTtFQUNqQjtFQUNBO0lBQ0UsZUFBZTtFQUNqQjtFQUNBO0lBQ0UsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxZQUFZO0VBQ2Q7RUFDQTtJQUNFLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGVBQWU7SUFDZixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsaUJBQWlCO0VBQ25COzs7O0FBSUY7RUFDRTtJQUNFLFVBQVU7RUFDWjtFQUNBOztFQUVBO0VBQ0E7SUFDRSxXQUFXO0VBQ2I7RUFDQSIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4vKiBib29raW5nLWZvcm0uY29tcG9uZW50LmNzcyAqL1xyXG4ucGF5bWVudCB7XHJcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZjlmOTtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICAvKiBtYXJnaW46IDIwcHggMDsgKi9cclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgfVxyXG4gXHJcbiAgLnBheW1lbnRfdGV4dCB7XHJcbiAgICBtYXgtd2lkdGg6IDUwMHB4O1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOSk7IFxyXG4gICAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSgwLCAwLCAwLCAwLjIpOyBcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgei1pbmRleDogMTsgXHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvYmc2LmpwZycpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyOyBcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgfVxyXG4gIC5wYXltZW50X3RleHQ6OmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41KTsgLyogRGFyayBvdmVybGF5IHdpdGggb3BhY2l0eSAqL1xyXG4gICAgZmlsdGVyOiBibHVyKDhweCk7IC8qIEFkanVzdCBibHVyIHN0cmVuZ3RoIGFzIG5lZWRlZCAqL1xyXG4gICAgei1pbmRleDogLTE7IC8qIFBsYWNlIG92ZXJsYXkgYmVoaW5kIHRoZSBjb250ZW50ICovXHJcbiAgfVxyXG4vKiAgIFxyXG4gIC5jb250YWluZXIge1xyXG4gICAgbWF4LXdpZHRoOiA4MDBweDtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICB9ICovXHJcbiAgXHJcbiAgLyogLmJvb2tpbmctZm9ybSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgfSAqL1xyXG4gIFxyXG4gIC5mb3JtLWdyb3VwIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIGxhYmVsIHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgLyogZm9udC1zaXplOiAxNXB4OyAqL1xyXG4gIH1cclxuICBcclxuICBzZWxlY3QsXHJcbiAgaW5wdXRbdHlwZT1cInRleHRcIl0ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICB9XHJcbiAgXHJcbiAgLnN1Ym1pdCB7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICB9XHJcbiAgXHJcbiAgLmxlZnRfYnRuIHtcclxuICAgIHdpZHRoOiA0NSU7XHJcbiAgfVxyXG4gIFxyXG4gIGJ1dHRvbi5idG4uYnRuLXN1Y2Nlc3Mge1xyXG4gICAgcGFkZGluZzogNHB4IDIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjA4Njc4O1xyXG59XHJcbmJ1dHRvbi5idG4uYnRuLXByaW1hcnkge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM0YjRiNGI7XHJcbiAgYm9yZGVyLWNvbG9yOiAjNGI0YjRiO1xyXG59XHJcbiAgXHJcbiAgLmJ0bi1wcmltYXJ5OmhvdmVyLFxyXG4gIC5idG4tc3VjY2Vzczpob3ZlciB7XHJcbiAgICBvcGFjaXR5OiAwLjg7XHJcbiAgfVxyXG4gIGJ1dHRvbi5idG4uYnRuLXByaW1hcnkge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzRiNGI0YjtcclxufVxyXG4gIFxyXG4gIC50ZXh0LWRhbmdlciB7XHJcbiAgICBjb2xvcjogI2RjMzU0NTtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICB9XHJcblxyXG4gIGlucHV0I2NhcmROdW1iZXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufVxyXG4uY2FyZF9kZXRhaWxze1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcbi5jYXJkLWRldGFpbHN7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkYmU0ZWQ7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG59XHJcbi5jYXJkLWRldGFpbHMgbGFiZWx7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG59XHJcbmlucHV0W3R5cGU9dGV4dF0ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XHJcbiAgICAvKiBmb250LXNpemU6IDE0cHg7ICovXHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG59XHJcblxyXG5pbnB1dCNkYXRlLCBpbnB1dCNjY3YsIGlucHV0I3RleHQsIGlucHV0I2NhcmROdW1iZXIsIHNlbGVjdCNib29raW5nVHlwZSwgaW5wdXQjZXhwaXJ5RGF0ZSxpbnB1dCNuYW1lIHtcclxuICAgIHBhZGRpbmc6IDEwcHggMTBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcbi5jYXJkLWRldGFpbHMgbGFiZWx7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIC8qIGZvbnQtc2l6ZTogMTVweDsgKi9cclxufVxyXG4gIFxyXG4uY2FyZF9zdWJtaXR7XHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgIHdpZHRoOiAxMDAlO1xyXG59XHJcbi5hZGRpdGlvbmFsX3NlcnZpY2Vze1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgLyogcGFkZGluZzogMTBweCAxMHB4OyAqL1xyXG59XHJcbmlucHV0I1xcMzMsIGlucHV0I1xcMzIsIGlucHV0I1xcMzF7XHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICB3aWR0aDogMjBweDtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxufVxyXG5pbnB1dCN0b3RhbFByaWNlIHtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG4vKiBZb3UgY2FuIGFkZCBnbG9iYWwgc3R5bGVzIHRvIHRoaXMgZmlsZSwgYW5kIGFsc28gaW1wb3J0IG90aGVyIHN0eWxlIGZpbGVzICovXHJcblxyXG4gIGgxe1xyXG4gICAgZm9udC1zaXplOiA0MHB4O1xyXG4gIH1cclxuICBoMntcclxuICAgIGZvbnQtc2l6ZTogMzVweDtcclxuICB9XHJcbiAgaDN7XHJcbiAgICBmb250LXNpemU6IDI4cHg7XHJcbiAgfVxyXG4gIGg0IHtcclxuICAgIGZvbnQtc2l6ZTogMjNweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICBmb250LXdlaWdodDogODAwO1xyXG4gICAgY29sb3I6ICMyMDg2Nzg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgfVxyXG4gIGg1e1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG59XHJcbnB7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbn1cclxubGFiZWx7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuLmJ0biB7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBwYWRkaW5nOiA0cHggMjBweDtcclxuICB9XHJcblxyXG5cclxuICBcclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTFweCl7XHJcbiAgLmRlc3RpbmF0aW9uIHtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgfVxyXG4gIH1cclxuICBcclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MXB4KXtcclxuICAuZGVzdGluYXRpb24ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIH0iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 8231:
/*!****************************************************!*\
  !*** ./src/app/form2/peoples/peoples.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PeoplesComponent: () => (/* binding */ PeoplesComponent),
/* harmony export */   fileValidator: () => (/* binding */ fileValidator)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var ngx_dropzone__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-dropzone */ 3947);






function PeoplesComponent_div_7_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " First Name is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function PeoplesComponent_div_7_div_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Last Name is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function PeoplesComponent_div_7_div_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Age is required and must be a positive number. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function PeoplesComponent_div_7_ngx_dropzone_preview_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngx-dropzone-preview", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("removed", function PeoplesComponent_div_7_ngx_dropzone_preview_26_Template_ngx_dropzone_preview_removed_0_listener() {
      const file_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4).$implicit;
      const i_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.onRemove(file_r5, i_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ngx-dropzone-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const file_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("file", file_r5)("removable", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", file_r5.name, " (", file_r5.type, ")");
  }
}
function PeoplesComponent_div_7_div_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " At least one document is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function PeoplesComponent_div_7_div_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Documents must be of type JPG or PNG. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function PeoplesComponent_div_7_div_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Documents must not exceed 50 KB in size. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function PeoplesComponent_div_7_button_33_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PeoplesComponent_div_7_button_33_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);
      const i_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.removePerson(i_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function PeoplesComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11)(1, "div", 12)(2, "div", 13)(3, "div", 14)(4, "div", 15)(5, "label", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "First Name:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, PeoplesComponent_div_7_div_8_Template, 2, 0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Last Name:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, PeoplesComponent_div_7_div_12_Template, 2, 0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Age:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, PeoplesComponent_div_7_div_16_Template, 2, 0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Upload documents");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "ngx-dropzone", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function PeoplesComponent_div_7_Template_ngx_dropzone_change_19_listener($event) {
      const i_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1).index;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.onSelect($event, i_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 22)(21, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "img", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 24)(24, "h5", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Drag and drop files here");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, PeoplesComponent_div_7_ngx_dropzone_preview_26_Template, 3, 4, "ngx-dropzone-preview", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, PeoplesComponent_div_7_div_27_Template, 2, 0, "div", 18)(28, PeoplesComponent_div_7_div_28_Template, 2, 0, "div", 18)(29, PeoplesComponent_div_7_div_29_Template, 2, 0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 27)(31, "div", 28)(32, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, PeoplesComponent_div_7_button_33_Template, 2, 0, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
  }
  if (rf & 2) {
    let tmp_6_0;
    let tmp_9_0;
    let tmp_12_0;
    let tmp_15_0;
    let tmp_16_0;
    let tmp_17_0;
    let tmp_18_0;
    const person_r7 = ctx.$implicit;
    const i_r2 = ctx.index;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroupName", i_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("for", "firstName", i_r2, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "firstName", i_r2, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ((tmp_6_0 = person_r7.get("firstName")) == null ? null : tmp_6_0.invalid) && (((tmp_6_0 = person_r7.get("firstName")) == null ? null : tmp_6_0.dirty) || ((tmp_6_0 = person_r7.get("firstName")) == null ? null : tmp_6_0.touched)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("for", "lastName", i_r2, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "lastName", i_r2, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ((tmp_9_0 = person_r7.get("lastName")) == null ? null : tmp_9_0.invalid) && (((tmp_9_0 = person_r7.get("lastName")) == null ? null : tmp_9_0.dirty) || ((tmp_9_0 = person_r7.get("lastName")) == null ? null : tmp_9_0.touched)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("for", "age", i_r2, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "age", i_r2, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ((tmp_12_0 = person_r7.get("age")) == null ? null : tmp_12_0.invalid) && (((tmp_12_0 = person_r7.get("age")) == null ? null : tmp_12_0.dirty) || ((tmp_12_0 = person_r7.get("age")) == null ? null : tmp_12_0.touched)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("for", "upload", i_r2, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("multiple", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", (tmp_15_0 = person_r7.get("documents")) == null ? null : tmp_15_0.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ((tmp_16_0 = person_r7.get("documents")) == null ? null : tmp_16_0.hasError("fileRequired")) && (((tmp_16_0 = person_r7.get("documents")) == null ? null : tmp_16_0.dirty) || ((tmp_16_0 = person_r7.get("documents")) == null ? null : tmp_16_0.touched)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ((tmp_17_0 = person_r7.get("documents")) == null ? null : tmp_17_0.hasError("fileTypeInvalid")) && (((tmp_17_0 = person_r7.get("documents")) == null ? null : tmp_17_0.dirty) || ((tmp_17_0 = person_r7.get("documents")) == null ? null : tmp_17_0.touched)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ((tmp_18_0 = person_r7.get("documents")) == null ? null : tmp_18_0.hasError("fileSizeExceeded")) && (((tmp_18_0 = person_r7.get("documents")) == null ? null : tmp_18_0.dirty) || ((tmp_18_0 = person_r7.get("documents")) == null ? null : tmp_18_0.touched)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.personsArray.length > 1);
  }
}
// Custom Validator for File Input
function fileValidator(maxSize, allowedTypes) {
  return control => {
    if (control.value === null || Array.isArray(control.value) && control.value.length === 0) {
      return {
        'fileRequired': true
      };
    }
    if (control.value) {
      const files = control.value;
      for (const file of files) {
        if (!allowedTypes.includes(file.type)) {
          return {
            'fileTypeInvalid': true
          };
        }
        if (file.size > maxSize) {
          return {
            'fileSizeExceeded': true
          };
        }
      }
    }
    return null;
  };
}
class PeoplesComponent {
  constructor(fb, router) {
    this.fb = fb;
    this.router = router;
  }
  ngOnInit() {
    this.personForm = this.fb.group({
      persons: this.fb.array([this.createPerson()])
    });
  }
  get personsArray() {
    return this.personForm.get('persons');
  }
  createPerson() {
    return this.fb.group({
      firstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required],
      lastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required],
      age: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.min(0)]],
      documents: [[], fileValidator(50 * 1024, ['image/jpeg', 'image/png'])] // 50 KB max size
    });
  }
  addPerson() {
    this.personsArray.push(this.createPerson());
  }
  removePerson(index) {
    if (this.personsArray.length > 1) {
      this.personsArray.removeAt(index);
    }
  }
  onSelect(event, index) {
    const control = this.personsArray.at(index).get('documents');
    if (control) {
      const files = event.addedFiles;
      const validFiles = files.filter(file => ['image/jpeg', 'image/png'].includes(file.type) && file.size <= 50 * 1024);
      const invalidFiles = files.filter(file => !['image/jpeg', 'image/png'].includes(file.type) || file.size > 50 * 1024);
      if (invalidFiles.length > 0) {
        if (invalidFiles.some(file => !['image/jpeg', 'image/png'].includes(file.type))) {
          alert('Please upload only JPG or PNG images.');
        }
        if (invalidFiles.some(file => file.size > 50 * 1024)) {
          alert('File size should not exceed 50 KB.');
        }
      }
      control.setValue([...control.value, ...validFiles]);
    }
  }
  onRemove(file, index) {
    const control = this.personsArray.at(index).get('documents');
    if (control) {
      const files = control.value;
      control.setValue(files.filter(f => f !== file));
    }
  }
  onSubmit() {
    if (this.personForm.valid) {
      const formData = new FormData();
      this.personsArray.controls.forEach(control => {
        const person = control.value;
        formData.append('firstName[]', person.firstName);
        formData.append('lastName[]', person.lastName);
        formData.append('age[]', person.age);
        person.documents.forEach(file => {
          formData.append('documents[]', file);
        });
      });
      // For demonstration purposes, log the FormData object
      console.log('Form submitted with data:', formData);
      // Navigate to the next route
      this.router.navigate(['/form2/rooms']);
    } else {
      // Mark all controls as touched to display validation messages
      this.personForm.markAllAsTouched();
    }
  }
  static #_ = this.ɵfac = function PeoplesComponent_Factory(t) {
    return new (t || PeoplesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: PeoplesComponent,
    selectors: [["app-peoples"]],
    decls: 16,
    vars: 3,
    consts: [[1, "peoples"], [1, "container"], [1, "guests"], [3, "ngSubmit", "formGroup"], ["formArrayName", "persons"], [3, "formGroupName", 4, "ngFor", "ngForOf"], [1, "add"], ["type", "button", 1, "btn", "btn-succes", 3, "click"], [1, "submit"], ["routerLink", "/form2/date", 1, "btn", "btn-secondary"], ["type", "submit", 1, "btn", "btn-succes", 3, "disabled"], [3, "formGroupName"], [1, "person_sec"], [1, "row"], [1, "col-md-8", "col-8"], [1, "addperson"], [3, "for"], ["type", "text", "formControlName", "firstName", 1, "form-control", 3, "id"], ["class", "text-danger", 4, "ngIf"], ["type", "text", "formControlName", "lastName", 1, "form-control", 3, "id"], ["type", "number", "formControlName", "age", "placeholder", "Enter Age", 1, "form-control", 3, "id"], [1, "upload_docs", 3, "change", "multiple"], [1, "upload"], ["src", "./assets/images/drop.jpeg", 1, "upload_img"], [1, "drop_img"], [1, "drop_input"], [3, "file", "removable", "removed", 4, "ngFor", "ngForOf"], [1, "col-md-4", "col-4"], [1, "button-group"], [1, "clear"], ["class", "btn btn-secondary", "type", "button", 3, "click", 4, "ngIf"], [1, "text-danger"], [3, "removed", "file", "removable"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"], [1, "fa-solid", "fa-xmark"]],
    template: function PeoplesComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Add Guest");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function PeoplesComponent_Template_form_ngSubmit_5_listener() {
          return ctx.onSubmit();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, PeoplesComponent_div_7_Template, 34, 24, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6)(9, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PeoplesComponent_Template_button_click_9_listener() {
          return ctx.addPerson();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Add ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8)(12, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Prev");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.personForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.personsArray.controls);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.personForm.invalid);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroupName, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormArrayName, ngx_dropzone__WEBPACK_IMPORTED_MODULE_4__.NgxDropzoneComponent, ngx_dropzone__WEBPACK_IMPORTED_MODULE_4__.NgxDropzoneLabelDirective, ngx_dropzone__WEBPACK_IMPORTED_MODULE_4__.NgxDropzonePreviewComponent],
    styles: [".peoples[_ngcontent-%COMP%] {\n  padding: 20px 0;\n}\n\n\n\n\n\n\n\n\n\n.guests[_ngcontent-%COMP%] {\n  max-width: 500px;\n  padding: 20px;\n  margin-top: 50px;\n  border-radius: 10px;\n  margin-left: auto;\n  margin-right: auto;\n  background: rgba(255, 255, 255, 0.9); \n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2); \n  width: 100%;\n  z-index: 1; \n  background: url('bg4-img.webp') no-repeat center center; \n  background-size: cover;\n  position: relative;\n  background-position: center;\n}\n.guests[_ngcontent-%COMP%]::before {\n  content: '';\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.5); \n\n  filter: blur(8px); \n\n  z-index: -1; \n\n}\n\nh4[_ngcontent-%COMP%] {\n  font-size: 23px;\n  text-align: center;\n  margin-bottom: 20px;\n  font-weight: 800;\n  color: white;\n}\n\nbutton.btn.btn-succes[_ngcontent-%COMP%] {\n  background-color: #208678;\n  color: white;\n}\nbutton.btn.btn-primary[_ngcontent-%COMP%] {\n  background-color: #4b4b4b;\n  border-color: #4b4b4b;\n}\n\n.addperson[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n}\n\n.form-control[_ngcontent-%COMP%], .form-control-file[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n  width: 100%;\n}\nlabel[_ngcontent-%COMP%]{\n  color: white;\n}\n\n.text-danger[_ngcontent-%COMP%] {\n  color: red;\n  font-size: 0.875rem; \n\n  margin-top: 0.25rem; \n\n}\n\n.button-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  height: 100%;\n  align-items: flex-end;\n}\n\n.button-group[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  margin: 5px 0;\n  width: 30px;\n  height: 30px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 10px;\n}\n.add[_ngcontent-%COMP%]   button.btn.btn-succes[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 10px 40px;\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n.clear[_ngcontent-%COMP%]   .button-group[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n\n.button-group[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1.5em; \n\n}\n.clear[_ngcontent-%COMP%] {\n  text-align: right;\n}\n\n.submit[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  margin-top: 20px;\n}\n\n.left_btn[_ngcontent-%COMP%], .right_btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\n.left_btn[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], .right_btn[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin: 0 5px;\n}\n\n.btn-secondary[_ngcontent-%COMP%] {\n  background-color: #6c757d;\n  color: black;\n  color: white;\n  border-color: #6c757d;\n}\n\n.btn-success[_ngcontent-%COMP%] {\n  background-color: #28a745;\n  border-color: #28a745;\n}\nimg.upload_img[_ngcontent-%COMP%] {\n  height: 80px;\n}\n\nngx-dropzone[_ngcontent-%COMP%] {\n  height: 180px;\n  text-align: center;\n}\n.upload[_ngcontent-%COMP%] {\n  width: 100%;\n}\nngx-dropzone-label[_ngcontent-%COMP%] {\n  overflow: auto;\n}\n.file_preview[_ngcontent-%COMP%] {\n  align-items: center;\n  border-radius: 5px;\n  display: flex;\n  height: 100px;\n  justify-content: center;\n  margin: 10px;\n  max-width: 100px;\n  min-height: 100px;\n  min-width: 150px;\n  padding: 0px 20px;\n  position: relative;\n}\n\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZm9ybTIvcGVvcGxlcy9wZW9wbGVzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBOzs7Ozs7R0FNRztBQUNIO0VBQ0UsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsb0NBQW9DO0VBQ3BDLHVDQUF1QztFQUN2QyxXQUFXO0VBQ1gsVUFBVTtFQUNWLHVEQUE4RTtFQUM5RSxzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLDJCQUEyQjtBQUM3QjtBQUNBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sT0FBTztFQUNQLFdBQVc7RUFDWCxZQUFZO0VBQ1osOEJBQThCLEVBQUUsOEJBQThCO0VBQzlELGlCQUFpQixFQUFFLG1DQUFtQztFQUN0RCxXQUFXLEVBQUUscUNBQXFDO0FBQ3BEOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0FBQ2Q7QUFDQTtFQUNFLHlCQUF5QjtFQUN6QixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsV0FBVztBQUNiO0FBQ0E7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsbUJBQW1CLEVBQUUsOEJBQThCO0VBQ25ELG1CQUFtQixFQUFFLDBDQUEwQztBQUNqRTs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsOEJBQThCO0VBQzlCLFlBQVk7RUFDWixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsV0FBVztFQUNYLFlBQVk7RUFDWixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixhQUFhO0FBQ2Y7QUFDQTtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGdCQUFnQixFQUFFLDBCQUEwQjtBQUM5QztBQUNBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixZQUFZO0VBQ1oscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLHFCQUFxQjtBQUN2QjtBQUNBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsV0FBVztBQUNiO0FBQ0E7RUFDRSxjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCIiwic291cmNlc0NvbnRlbnQiOlsiLnBlb3BsZXMge1xyXG4gIHBhZGRpbmc6IDIwcHggMDtcclxufVxyXG5cclxuLyogLnBlcnNvbl9zZWMge1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgcGFkZGluZzogMjBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjNmY2ZiO1xyXG59ICovXHJcbi5ndWVzdHMge1xyXG4gIG1heC13aWR0aDogNTAwcHg7XHJcbiAgcGFkZGluZzogMjBweDtcclxuICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45KTsgXHJcbiAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSgwLCAwLCAwLCAwLjIpOyBcclxuICB3aWR0aDogMTAwJTtcclxuICB6LWluZGV4OiAxOyBcclxuICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvYmc0LWltZy53ZWJwJykgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXI7IFxyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxufVxyXG4uZ3Vlc3RzOjpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6ICcnO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjUpOyAvKiBEYXJrIG92ZXJsYXkgd2l0aCBvcGFjaXR5ICovXHJcbiAgZmlsdGVyOiBibHVyKDhweCk7IC8qIEFkanVzdCBibHVyIHN0cmVuZ3RoIGFzIG5lZWRlZCAqL1xyXG4gIHotaW5kZXg6IC0xOyAvKiBQbGFjZSBvdmVybGF5IGJlaGluZCB0aGUgY29udGVudCAqL1xyXG59XHJcblxyXG5oNCB7XHJcbiAgZm9udC1zaXplOiAyM3B4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG5idXR0b24uYnRuLmJ0bi1zdWNjZXMge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMyMDg2Nzg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcbmJ1dHRvbi5idG4uYnRuLXByaW1hcnkge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM0YjRiNGI7XHJcbiAgYm9yZGVyLWNvbG9yOiAjNGI0YjRiO1xyXG59XHJcblxyXG4uYWRkcGVyc29uIHtcclxuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG59XHJcblxyXG4uZm9ybS1jb250cm9sLCAuZm9ybS1jb250cm9sLWZpbGUge1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxubGFiZWx7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4udGV4dC1kYW5nZXIge1xyXG4gIGNvbG9yOiByZWQ7XHJcbiAgZm9udC1zaXplOiAwLjg3NXJlbTsgLyogQWRqdXN0IHRoZSBzaXplIGFzIG5lZWRlZCAqL1xyXG4gIG1hcmdpbi10b3A6IDAuMjVyZW07IC8qIFNwYWNlIGJldHdlZW4gaW5wdXQgYW5kIGVycm9yIG1lc3NhZ2UgKi9cclxufVxyXG5cclxuLmJ1dHRvbi1ncm91cCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xyXG59XHJcblxyXG4uYnV0dG9uLWdyb3VwIC5idG4ge1xyXG4gIG1hcmdpbjogNXB4IDA7XHJcbiAgd2lkdGg6IDMwcHg7XHJcbiAgaGVpZ2h0OiAzMHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcbi5hZGQgYnV0dG9uLmJ0bi5idG4tc3VjY2VzIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nOiAxMHB4IDQwcHg7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcbi5jbGVhciAuYnV0dG9uLWdyb3VwIC5idG4gaSB7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG59XHJcblxyXG4uYnV0dG9uLWdyb3VwIC5idG4gaSB7XHJcbiAgZm9udC1zaXplOiAxLjVlbTsgLyogQWRqdXN0IHNpemUgYXMgbmVlZGVkICovXHJcbn1cclxuLmNsZWFyIHtcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG5cclxuLnN1Ym1pdCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxufVxyXG5cclxuLmxlZnRfYnRuLCAucmlnaHRfYnRuIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5sZWZ0X2J0biBidXR0b24sIC5yaWdodF9idG4gYnV0dG9uIHtcclxuICBtYXJnaW46IDAgNXB4O1xyXG59XHJcblxyXG4uYnRuLXNlY29uZGFyeSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzZjNzU3ZDtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlci1jb2xvcjogIzZjNzU3ZDtcclxufVxyXG5cclxuLmJ0bi1zdWNjZXNzIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjhhNzQ1O1xyXG4gIGJvcmRlci1jb2xvcjogIzI4YTc0NTtcclxufVxyXG5pbWcudXBsb2FkX2ltZyB7XHJcbiAgaGVpZ2h0OiA4MHB4O1xyXG59XHJcblxyXG5uZ3gtZHJvcHpvbmUge1xyXG4gIGhlaWdodDogMTgwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi51cGxvYWQge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbm5neC1kcm9wem9uZS1sYWJlbCB7XHJcbiAgb3ZlcmZsb3c6IGF1dG87XHJcbn1cclxuLmZpbGVfcHJldmlldyB7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBoZWlnaHQ6IDEwMHB4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIG1hcmdpbjogMTBweDtcclxuICBtYXgtd2lkdGg6IDEwMHB4O1xyXG4gIG1pbi1oZWlnaHQ6IDEwMHB4O1xyXG4gIG1pbi13aWR0aDogMTUwcHg7XHJcbiAgcGFkZGluZzogMHB4IDIwcHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 3755:
/*!************************************************!*\
  !*** ./src/app/form2/rooms/rooms.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RoomsComponent: () => (/* binding */ RoomsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 4456);




function RoomsComponent_div_7_option_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const type_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", type_r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](type_r4);
  }
}
function RoomsComponent_div_7_div_11_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Room Type selection is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function RoomsComponent_div_7_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RoomsComponent_div_7_div_11_div_1_Template, 2, 0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const roomType_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", roomType_r5.errors == null ? null : roomType_r5.errors["required"]);
  }
}
function RoomsComponent_div_7_div_17_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Room Number is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function RoomsComponent_div_7_div_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RoomsComponent_div_7_div_17_div_1_Template, 2, 0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const roomNumber_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", roomNumber_r6.errors == null ? null : roomNumber_r6.errors["required"]);
  }
}
function RoomsComponent_div_7_button_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RoomsComponent_div_7_button_18_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);
      const i_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r8.removeRoom(i_r8));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Remove Room");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function RoomsComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15)(1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 8)(4, "label", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Room Type:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "select", 17, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayListener"]("ngModelChange", function RoomsComponent_div_7_Template_select_ngModelChange_6_listener($event) {
      const room_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2).$implicit;
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayBindingSet"](room_r3.roomType, $event) || (room_r3.roomType = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "option", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Select Room Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, RoomsComponent_div_7_option_10_Template, 2, 2, "option", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, RoomsComponent_div_7_div_11_Template, 2, 1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8)(13, "label", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Room Number:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "input", 21, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayListener"]("ngModelChange", function RoomsComponent_div_7_Template_input_ngModelChange_15_listener($event) {
      const room_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2).$implicit;
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayBindingSet"](room_r3.roomNumber, $event) || (room_r3.roomNumber = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, RoomsComponent_div_7_div_17_Template, 2, 1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, RoomsComponent_div_7_button_18_Template, 2, 0, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const room_r3 = ctx.$implicit;
    const i_r8 = ctx.index;
    const roomType_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);
    const roomNumber_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](16);
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Room ", i_r8 + 1, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("for", "roomType", i_r8, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "roomType", i_r8, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("name", "roomType", i_r8, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayProperty"]("ngModel", room_r3.roomType);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r8.roomTypes);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", roomType_r5.invalid && (roomType_r5.dirty || roomType_r5.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("for", "roomNumber", i_r8, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "roomNumber", i_r8, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("name", "roomNumber", i_r8, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayProperty"]("ngModel", room_r3.roomNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", roomNumber_r6.invalid && (roomNumber_r6.dirty || roomNumber_r6.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r8.rooms.length > 1);
  }
}
class RoomsComponent {
  constructor(router) {
    this.router = router;
    this.rooms = []; // Ensure each room object has roomType and roomNumber properties
    this.roomTypes = ['Standard', 'Deluxe', 'Suite', 'Family Room'];
  }
  addRoom() {
    this.rooms.push({
      roomType: '',
      roomNumber: ''
    }); // Initialize roomType and roomNumber for each new room
  }
  removeRoom(index) {
    this.rooms.splice(index, 1);
  }
  submitRooms() {
    // Here you can handle form submission logic
    if (this.roomsFormIsValid()) {
      console.log('Form submitted:', this.rooms);
      // Perform further actions like saving to backend or navigating
      this.router.navigate(['form2/payment']);
    } else {
      console.error('Form is invalid');
    }
  }
  roomsFormIsValid() {
    // Validate each room in the rooms array
    for (let i = 0; i < this.rooms.length; i++) {
      const room = this.rooms[i];
      if (!room.roomType || !room.roomNumber) {
        return false;
      }
    }
    return true;
  }
  static #_ = this.ɵfac = function RoomsComponent_Factory(t) {
    return new (t || RoomsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: RoomsComponent,
    selectors: [["app-rooms"]],
    decls: 18,
    vars: 1,
    consts: [["roomForm", "ngForm"], ["roomType", "ngModel"], ["roomNumber", "ngModel"], [1, "date"], [1, "container"], [1, "room_text"], [3, "ngSubmit"], ["class", "room", 4, "ngFor", "ngForOf"], [1, "form-group"], ["type", "button", 1, "btn", "btn-sm", "btn-secondary", 3, "click"], [1, "submit"], [1, "left_btn"], ["type", "button", "routerLink", "/form2/peoples", 1, "btn", "btn-primary"], [1, "right_btn"], ["type", "submit", 1, "btn", "btn-succes"], [1, "room"], [3, "for"], ["required", "", 1, "form-control", 3, "ngModelChange", "id", "name", "ngModel"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["class", "text-danger", 4, "ngIf"], ["type", "text", "required", "", 1, "form-control", 3, "ngModelChange", "id", "name", "ngModel"], ["type", "button", "class", "btn btn-sm btn-danger", 3, "click", 4, "ngIf"], [3, "value"], [1, "text-danger"], [4, "ngIf"], ["type", "button", 1, "btn", "btn-sm", "btn-danger", 3, "click"]],
    template: function RoomsComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 3)(1, "div", 4)(2, "div", 5)(3, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Add Rooms");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", 6, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function RoomsComponent_Template_form_ngSubmit_5_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.submitRooms());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, RoomsComponent_div_7_Template, 19, 19, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8)(9, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RoomsComponent_Template_button_click_9_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.addRoom());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "+ Add Room");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 10)(12, "div", 11)(13, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Prev");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 13)(16, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.rooms);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgForm],
    styles: ["\n\n.date[_ngcontent-%COMP%]{\n    margin-top: 50px;\n}\n.room_text[_ngcontent-%COMP%] {\n  max-width: 500px;\n  padding: 20px;\n  margin-top: 50px;\n  border-radius: 10px;\n  margin-left: auto;\n  margin-right: auto;\n  background: rgba(255, 255, 255, 0.9); \n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2); \n  width: 100%;\n  z-index: 1; \n  background: url('bg6.jpg') no-repeat center center; \n  background-size: cover;\n  position: relative;\n  background-position: center;\n}\n.room_text[_ngcontent-%COMP%]::before {\n  content: '';\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.5); \n\n  filter: blur(8px); \n\n  z-index: -1; \n\n}\n  \n  h2[_ngcontent-%COMP%] {\n    font-size: 24px;\n    margin-bottom: 20px;\n  }\n  \n  .room[_ngcontent-%COMP%] {\n    margin-bottom: 30px;\n    padding: 15px;\n    border: 1px solid #ddd;\n    border-radius: 8px;\n    background-color: #fff;\n  }\n  \n  .room[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 20px;\n    margin-bottom: 10px;\n  }\n  \n  .form-group[_ngcontent-%COMP%] {\n    margin-bottom: 15px;\n  }\n  \n  label[_ngcontent-%COMP%] {\n    font-weight: bold;\n  }\n  \n  input[type=\"number\"][_ngcontent-%COMP%] {\n    width: 60px;\n    padding: 5px;\n    font-size: 16px;\n    border: 1px solid #ddd;\n    border-radius: 4px;\n  }\n  \n  .btn-primary[_ngcontent-%COMP%] {\n    background-color: #007bff;\n    color: #fff;\n    border: none;\n    padding: 4px 20px;\n    font-size: 18px;\n    border-radius: 5px;\n  }\n  \n  .btn-primary[_ngcontent-%COMP%]:hover {\n    background-color: #0056b3;\n  }\n  \n  .btn-secondary[_ngcontent-%COMP%] {\n    background-color: #6c757d;\n    color: #fff;\n    border: none;\n    padding: 10px 20px;\n    font-size: 14px;\n    border-radius: 3px;\n  }\n  \n  .btn-secondary[_ngcontent-%COMP%]:hover {\n    background-color: #5a6268;\n  }\n  button.btn.btn-success[_ngcontent-%COMP%] {\n    padding: 4px 20px;\n    \n  }\n  button.btn.btn-primary[_ngcontent-%COMP%] {\n    padding: 4px 20px;\n    \n  }\n  \n  .submit[_ngcontent-%COMP%] {\n    display: flex;\n    margin-top: 20px;\n  }\n  .right_btn[_ngcontent-%COMP%]{\n    margin-left: auto;\n  }\n  \n  \n\nh1[_ngcontent-%COMP%]{\n  font-size: 40px;\n}\nh2[_ngcontent-%COMP%]{\n  font-size: 35px;\n}\nh3[_ngcontent-%COMP%]{\n  font-size: 28px;\n}\nh4[_ngcontent-%COMP%] {\n  font-size: 23px;\n  text-align: center;\n  margin-bottom: 20px;\n  font-weight: 800;\n  color: white;\n}\n\nbutton.btn.btn-succes[_ngcontent-%COMP%] {\n  background-color: #208678;\n  color: white;\n}\nbutton.btn.btn-primary[_ngcontent-%COMP%] {\n  background-color: #4b4b4b;\n  border-color: #4b4b4b;\n}\nh5[_ngcontent-%COMP%]{\n  font-size: 20px;\n}\np[_ngcontent-%COMP%]{\n  font-size: 16px;\n}\nlabel[_ngcontent-%COMP%]{\n  font-size: 16px;\n}\n.btn[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n\n\n\n\n@media only screen and (max-width: 991px){\n  .date[_ngcontent-%COMP%] {\n    width: 80%;\n  }\n  }\n  \n  @media only screen and (max-width: 991px){\n  .date[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  }\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZm9ybTIvcm9vbXMvcm9vbXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxpQ0FBaUM7QUFDakM7SUFDSSxnQkFBZ0I7QUFDcEI7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLG9DQUFvQztFQUNwQyx1Q0FBdUM7RUFDdkMsV0FBVztFQUNYLFVBQVU7RUFDVixrREFBeUU7RUFDekUsc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQiwyQkFBMkI7QUFDN0I7QUFDQTtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLE9BQU87RUFDUCxXQUFXO0VBQ1gsWUFBWTtFQUNaLDhCQUE4QixFQUFFLDhCQUE4QjtFQUM5RCxpQkFBaUIsRUFBRSxtQ0FBbUM7RUFDdEQsV0FBVyxFQUFFLHFDQUFxQztBQUNwRDs7RUFFRTtJQUNFLGVBQWU7SUFDZixtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsc0JBQXNCO0VBQ3hCOztFQUVBO0lBQ0UsZUFBZTtJQUNmLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLFdBQVc7SUFDWCxZQUFZO0lBQ1osZUFBZTtJQUNmLHNCQUFzQjtJQUN0QixrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSx5QkFBeUI7SUFDekIsV0FBVztJQUNYLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsZUFBZTtJQUNmLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLHlCQUF5QjtFQUMzQjs7RUFFQTtJQUNFLHlCQUF5QjtJQUN6QixXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2Ysa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0UseUJBQXlCO0VBQzNCO0VBQ0E7SUFDRSxpQkFBaUI7O0VBRW5CO0VBQ0E7SUFDRSxpQkFBaUI7O0VBRW5COztFQUVBO0lBQ0UsYUFBYTtJQUNiLGdCQUFnQjtFQUNsQjtFQUNBO0lBQ0UsaUJBQWlCO0VBQ25COztFQUVBLDhFQUE4RTtBQUNoRjtFQUNFLGVBQWU7QUFDakI7QUFDQTtFQUNFLGVBQWU7QUFDakI7QUFDQTtFQUNFLGVBQWU7QUFDakI7QUFDQTtFQUNFLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtBQUNkO0FBQ0E7RUFDRSx5QkFBeUI7RUFDekIscUJBQXFCO0FBQ3ZCO0FBQ0E7RUFDRSxlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxlQUFlO0FBQ2pCOzs7OztBQUtBO0VBQ0U7SUFDRSxVQUFVO0VBQ1o7RUFDQTs7RUFFQTtFQUNBO0lBQ0UsV0FBVztFQUNiO0VBQ0EiLCJzb3VyY2VzQ29udGVudCI6WyIvKiByb29tLXNlbGVjdGlvbi5jb21wb25lbnQuY3NzICovXHJcbi5kYXRle1xyXG4gICAgbWFyZ2luLXRvcDogNTBweDtcclxufVxyXG4ucm9vbV90ZXh0IHtcclxuICBtYXgtd2lkdGg6IDUwMHB4O1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbiAgbWFyZ2luLXRvcDogNTBweDtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gIG1hcmdpbi1yaWdodDogYXV0bztcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOSk7IFxyXG4gIGJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4yKTsgXHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgei1pbmRleDogMTsgXHJcbiAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2JnNi5qcGcnKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlcjsgXHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG59XHJcbi5yb29tX3RleHQ6OmJlZm9yZSB7XHJcbiAgY29udGVudDogJyc7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNSk7IC8qIERhcmsgb3ZlcmxheSB3aXRoIG9wYWNpdHkgKi9cclxuICBmaWx0ZXI6IGJsdXIoOHB4KTsgLyogQWRqdXN0IGJsdXIgc3RyZW5ndGggYXMgbmVlZGVkICovXHJcbiAgei1pbmRleDogLTE7IC8qIFBsYWNlIG92ZXJsYXkgYmVoaW5kIHRoZSBjb250ZW50ICovXHJcbn1cclxuICBcclxuICBoMiB7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIH1cclxuICBcclxuICAucm9vbSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gICAgcGFkZGluZzogMTVweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gIH1cclxuICBcclxuICAucm9vbSBoMyB7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gIH1cclxuICBcclxuICAuZm9ybS1ncm91cCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gIH1cclxuICBcclxuICBsYWJlbCB7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICB9XHJcbiAgXHJcbiAgaW5wdXRbdHlwZT1cIm51bWJlclwiXSB7XHJcbiAgICB3aWR0aDogNjBweDtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5idG4tcHJpbWFyeSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3YmZmO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBwYWRkaW5nOiA0cHggMjBweDtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICB9XHJcbiAgXHJcbiAgLmJ0bi1wcmltYXJ5OmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDU2YjM7XHJcbiAgfVxyXG4gIFxyXG4gIC5idG4tc2Vjb25kYXJ5IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM2Yzc1N2Q7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIHBhZGRpbmc6IDEwcHggMjBweDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICB9XHJcbiAgXHJcbiAgLmJ0bi1zZWNvbmRhcnk6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzVhNjI2ODtcclxuICB9XHJcbiAgYnV0dG9uLmJ0bi5idG4tc3VjY2VzcyB7XHJcbiAgICBwYWRkaW5nOiA0cHggMjBweDtcclxuICAgIFxyXG4gIH1cclxuICBidXR0b24uYnRuLmJ0bi1wcmltYXJ5IHtcclxuICAgIHBhZGRpbmc6IDRweCAyMHB4O1xyXG4gICAgXHJcbiAgfVxyXG4gIFxyXG4gIC5zdWJtaXQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgfVxyXG4gIC5yaWdodF9idG57XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICB9XHJcbiAgXHJcbiAgLyogWW91IGNhbiBhZGQgZ2xvYmFsIHN0eWxlcyB0byB0aGlzIGZpbGUsIGFuZCBhbHNvIGltcG9ydCBvdGhlciBzdHlsZSBmaWxlcyAqL1xyXG5oMXtcclxuICBmb250LXNpemU6IDQwcHg7XHJcbn1cclxuaDJ7XHJcbiAgZm9udC1zaXplOiAzNXB4O1xyXG59XHJcbmgze1xyXG4gIGZvbnQtc2l6ZTogMjhweDtcclxufVxyXG5oNCB7XHJcbiAgZm9udC1zaXplOiAyM3B4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG5idXR0b24uYnRuLmJ0bi1zdWNjZXMge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMyMDg2Nzg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcbmJ1dHRvbi5idG4uYnRuLXByaW1hcnkge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM0YjRiNGI7XHJcbiAgYm9yZGVyLWNvbG9yOiAjNGI0YjRiO1xyXG59XHJcbmg1e1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG5we1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxufVxyXG5sYWJlbHtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbn1cclxuLmJ0biB7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG59XHJcblxyXG5cclxuXHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MXB4KXtcclxuICAuZGF0ZSB7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gIH1cclxuICB9XHJcbiAgXHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTFweCl7XHJcbiAgLmRhdGUge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIH0iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 7992:
/*!**********************************************!*\
  !*** ./src/app/gallery/gallery.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GalleryComponent: () => (/* binding */ GalleryComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);

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

/***/ 2152:
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HeaderComponent: () => (/* binding */ HeaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 1567);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _headerservices_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../headerservices.service */ 6552);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 316);






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
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Form 1");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "li", 9)(19, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HeaderComponent_header_0_Template_a_click_19_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.closeNavbar());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Form 2");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "li", 9)(22, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HeaderComponent_header_0_Template_a_click_22_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.closeNavbar());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Blog");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "li", 9)(25, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HeaderComponent_header_0_Template_a_click_25_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.closeNavbar());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Contact");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HeaderComponent_header_0_Template_button_click_27_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.closeNavbar());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
  }
}
class HeaderComponent {
  constructor(router, headerservicesService, el, renderer) {
    this.router = router;
    this.headerservicesService = headerservicesService;
    this.el = el;
    this.renderer = renderer;
    this.showHeader = true;
    this.hideRoutes = ['/booking-form', '/form2', "/login", "/signin", '/form2/destination', '/form2/hotel_list', '/form2/date', '/form2/rooms', '/form2/peoples', '/form2/payment'];
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
  static #_ = this.ɵfac = function HeaderComponent_Factory(t) {
    return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_headerservices_service__WEBPACK_IMPORTED_MODULE_0__.HeaderservicesService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.Renderer2));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: HeaderComponent,
    selectors: [["app-header"]],
    decls: 1,
    vars: 1,
    consts: [[4, "ngIf"], [1, "navbar", "navbar-expand-lg", "sticky"], [1, "container"], [1, "navbar-brand"], ["src", "./assets/images/nav_img.png", "alt", "Logo"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#navbarSupportedContent", "aria-controls", "navbarSupportedContent", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse"], [1, "navbar-nav"], [1, "nav-item"], ["routerLink", "/home", "routerLinkActive", "active", 1, "nav-link", 3, "click"], ["routerLink", "/about", "routerLinkActive", "active", 1, "nav-link", 3, "click"], ["routerLink", "/booking-form", "routerLinkActive", "active", 1, "nav-link", 3, "click"], ["routerLink", "/form2", "routerLinkActive", "active", 1, "nav-link", 3, "click"], ["routerLink", "/blog", "routerLinkActive", "active", 1, "nav-link", 3, "click"], ["routerLink", "/contact", "routerLinkActive", "active", 1, "nav-link", 3, "click"], ["type", "button", "routerLink", "/login", "routerLinkActive", "active", 1, "btn", "btn-dark", 3, "click"]],
    template: function HeaderComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, HeaderComponent_header_0_Template, 29, 0, "header", 0);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showHeader);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkActive],
    styles: ["\n\nh2[_ngcontent-%COMP%] {\n    font-size: 45px;\n    font-weight: 600;\n}\n\nh3[_ngcontent-%COMP%] {\n    color: #208678;\n    font-size: 26px;\n    font-weight: bold;\n}\n\nheader[_ngcontent-%COMP%] {\n    background-color: #f3fcfb;\n}\n.btn-check[_ngcontent-%COMP%]:checked + .btn[_ngcontent-%COMP%], .btn.active[_ngcontent-%COMP%], .btn.show[_ngcontent-%COMP%], .btn[_ngcontent-%COMP%]:first-child:active, [_ngcontent-%COMP%]:not(.btn-check) + .btn[_ngcontent-%COMP%]:active {\n    color: var(--bs-btn-active-color);\n     background-color: black; \n    border-color: var(--bs-btn-active-border-color);\n}\n\n.navbar[_ngcontent-%COMP%] {\n    height:80px;\n    width: 100%;\n    background-color: #f3fcfb;\n}\n.navbar-brand[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\n    height: 26px;\n}\n\n.navbar-nav[_ngcontent-%COMP%] {\n    margin-left: auto;\n}\n\n.sticky[_ngcontent-%COMP%] {\n\n    position: fixed;\n    width: 100%;\n    top: 0;\n    left: 0;\n    z-index: 99;\n    box-shadow: 0 3px 15px rgb(0 0 0 / 6%);\n}\n\n.nav-item[_ngcontent-%COMP%] {\n    padding-right: 15px;\n}\n\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%]:after {\n    width: 100%;\n}\n\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]:after {\n    content: '';\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    width: 0;\n    height: 1px;\n    background: #208678;\n    transition: .2s all;\n}\n\n\n\n\n\n\n\n\n\n\na.nav-link[_ngcontent-%COMP%] {\n    color: black;\n    position: relative;\n}\n\n.btn[_ngcontent-%COMP%] {\n    padding: 10px 35px;\n    margin-left: 10px;\n    border-radius: 0;\n}\n\n.hidden[_ngcontent-%COMP%] {\n    display: none;\n  }\n  \n\n\n\n\n@media only screen and (min-width: 1441px) {}\n\n@media only screen and (max-width: 1199px) {\n    .navbar-brand[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n        height: 23px;\n    }\n    .nav-item[_ngcontent-%COMP%] {\n        padding-right: 0px;\n    }\n    .btn[_ngcontent-%COMP%] {\n        padding: 5px 20px;\n    }\n    .navbar-toggler[_ngcontent-%COMP%]:focus {\n        text-decoration: none;\n        outline: 0;\n        box-shadow: none;\n    }\n    \n\n\n\n\n\n\n   \n}\n\n@media only screen and (max-width: 991px) {\n    .navbar[_ngcontent-%COMP%] {\n        height: 65px;\n    }\n    .navbar-brand[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n        height: 21px;\n    }\n    .navbar-brand[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n        height: 16px;\n    }\n    [type=button][_ngcontent-%COMP%]:not(:disabled), [type=reset][_ngcontent-%COMP%]:not(:disabled), [type=submit][_ngcontent-%COMP%]:not(:disabled), button[_ngcontent-%COMP%]:not(:disabled) {\n        cursor: pointer;\n        font-size: 13px;\n        border: none;\n    }\n    .navbar[_ngcontent-%COMP%] {\n        height: 60px;\n    }\n    .navbar-nav[_ngcontent-%COMP%] {\n        flex-direction: row;\n        background-color: white;\n        margin-top: 26px;\n        padding: 20px;\n        justify-content: space-between;\n    }\n    \n\n\n}\n\n@media only screen and (max-width: 767px) {}\n\n@media only screen and (max-width: 575px) {\n    .navbar-nav[_ngcontent-%COMP%] {\n        justify-content: space-between;\n        font-size: 12px;\n    }\n    .btn[_ngcontent-%COMP%] {\n        padding: 5px 12px;\n        margin-left: 0;\n    }\n    .navbar-nav[_ngcontent-%COMP%] {\n        flex-direction: column;\n    }\n    ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%]:after {\n        width: 11%;\n    }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFdBQVc7QUFDWDtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsZUFBZTtJQUNmLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3QjtBQUNBO0lBQ0ksaUNBQWlDO0tBQ2hDLHVCQUF1QjtJQUN4QiwrQ0FBK0M7QUFDbkQ7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsV0FBVztJQUNYLHlCQUF5QjtBQUM3QjtBQUNBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTs7SUFFSSxlQUFlO0lBQ2YsV0FBVztJQUNYLE1BQU07SUFDTixPQUFPO0lBQ1AsV0FBVztJQUNYLHNDQUFzQztBQUMxQzs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsU0FBUztJQUNULE9BQU87SUFDUCxRQUFRO0lBQ1IsV0FBVztJQUNYLG1CQUFtQjtJQUNuQixtQkFBbUI7QUFDdkI7O0FBRUE7Ozs7O29CQUtvQjs7O0FBR3BCO0lBQ0ksWUFBWTtJQUNaLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksYUFBYTtFQUNmOzs7QUFHRixXQUFXOztBQUVYLDRDQUE0Qzs7QUFFNUM7SUFDSTtRQUNJLFlBQVk7SUFDaEI7SUFDQTtRQUNJLGtCQUFrQjtJQUN0QjtJQUNBO1FBQ0ksaUJBQWlCO0lBQ3JCO0lBQ0E7UUFDSSxxQkFBcUI7UUFDckIsVUFBVTtRQUNWLGdCQUFnQjtJQUNwQjtJQUNBOzs7OztPQUtHOztBQUVQOztBQUVBO0lBQ0k7UUFDSSxZQUFZO0lBQ2hCO0lBQ0E7UUFDSSxZQUFZO0lBQ2hCO0lBQ0E7UUFDSSxZQUFZO0lBQ2hCO0lBQ0E7UUFDSSxlQUFlO1FBQ2YsZUFBZTtRQUNmLFlBQVk7SUFDaEI7SUFDQTtRQUNJLFlBQVk7SUFDaEI7SUFDQTtRQUNJLG1CQUFtQjtRQUNuQix1QkFBdUI7UUFDdkIsZ0JBQWdCO1FBQ2hCLGFBQWE7UUFDYiw4QkFBOEI7SUFDbEM7SUFDQTs2QkFDeUI7QUFDN0I7O0FBRUEsMkNBQTJDOztBQUUzQztJQUNJO1FBQ0ksOEJBQThCO1FBQzlCLGVBQWU7SUFDbkI7SUFDQTtRQUNJLGlCQUFpQjtRQUNqQixjQUFjO0lBQ2xCO0lBQ0E7UUFDSSxzQkFBc0I7SUFDMUI7SUFDQTtRQUNJLFVBQVU7SUFDZDtBQUNKIiwic291cmNlc0NvbnRlbnQiOlsiLyogaGVhZGVyICovXHJcbmgyIHtcclxuICAgIGZvbnQtc2l6ZTogNDVweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuXHJcbmgzIHtcclxuICAgIGNvbG9yOiAjMjA4Njc4O1xyXG4gICAgZm9udC1zaXplOiAyNnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbmhlYWRlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjNmY2ZiO1xyXG59XHJcbi5idG4tY2hlY2s6Y2hlY2tlZCsuYnRuLCAuYnRuLmFjdGl2ZSwgLmJ0bi5zaG93LCAuYnRuOmZpcnN0LWNoaWxkOmFjdGl2ZSwgOm5vdCguYnRuLWNoZWNrKSsuYnRuOmFjdGl2ZSB7XHJcbiAgICBjb2xvcjogdmFyKC0tYnMtYnRuLWFjdGl2ZS1jb2xvcik7XHJcbiAgICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7IFxyXG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1icy1idG4tYWN0aXZlLWJvcmRlci1jb2xvcik7XHJcbn1cclxuXHJcbi5uYXZiYXIge1xyXG4gICAgaGVpZ2h0OjgwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmM2ZjZmI7XHJcbn1cclxuLm5hdmJhci1icmFuZCBpbWd7XHJcbiAgICBoZWlnaHQ6IDI2cHg7XHJcbn1cclxuXHJcbi5uYXZiYXItbmF2IHtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG59XHJcblxyXG4uc3RpY2t5IHtcclxuXHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB6LWluZGV4OiA5OTtcclxuICAgIGJveC1zaGFkb3c6IDAgM3B4IDE1cHggcmdiKDAgMCAwIC8gNiUpO1xyXG59XHJcblxyXG4ubmF2LWl0ZW0ge1xyXG4gICAgcGFkZGluZy1yaWdodDogMTVweDtcclxufVxyXG5cclxudWwgbGkgLm5hdi1saW5rLmFjdGl2ZTphZnRlciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxudWwgbGkgLm5hdi1saW5rOmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHdpZHRoOiAwO1xyXG4gICAgaGVpZ2h0OiAxcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMjA4Njc4O1xyXG4gICAgdHJhbnNpdGlvbjogLjJzIGFsbDtcclxufVxyXG5cclxuLyogYS5uYXYtbGlua1xyXG4ge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgcGFkZGluZzogOXB4IDIwcHg7XHJcbiAgICAgICBjb2xvcjogYmxhY2s7XHJcbiAgfSByZXNwb25zaXZlIDQyNSAqL1xyXG5cclxuXHJcbmEubmF2LWxpbmsge1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4uYnRuIHtcclxuICAgIHBhZGRpbmc6IDEwcHggMzVweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMDtcclxufVxyXG5cclxuLmhpZGRlbiB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuICBcclxuXHJcbi8qIGhlYWRlciAqL1xyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxNDQxcHgpIHt9XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDExOTlweCkge1xyXG4gICAgLm5hdmJhci1icmFuZCBpbWcge1xyXG4gICAgICAgIGhlaWdodDogMjNweDtcclxuICAgIH1cclxuICAgIC5uYXYtaXRlbSB7XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogMHB4O1xyXG4gICAgfVxyXG4gICAgLmJ0biB7XHJcbiAgICAgICAgcGFkZGluZzogNXB4IDIwcHg7XHJcbiAgICB9XHJcbiAgICAubmF2YmFyLXRvZ2dsZXI6Zm9jdXMge1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICBvdXRsaW5lOiAwO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICB9XHJcbiAgICAvKiBhLm5hdi1saW5rIHtcclxuICAgICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIHdpZHRoOiA0MCU7XHJcbiAgICB9ICovXHJcbiAgIFxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MXB4KSB7XHJcbiAgICAubmF2YmFyIHtcclxuICAgICAgICBoZWlnaHQ6IDY1cHg7XHJcbiAgICB9XHJcbiAgICAubmF2YmFyLWJyYW5kIGltZyB7XHJcbiAgICAgICAgaGVpZ2h0OiAyMXB4O1xyXG4gICAgfVxyXG4gICAgLm5hdmJhci1icmFuZCBpbWcge1xyXG4gICAgICAgIGhlaWdodDogMTZweDtcclxuICAgIH1cclxuICAgIFt0eXBlPWJ1dHRvbl06bm90KDpkaXNhYmxlZCksIFt0eXBlPXJlc2V0XTpub3QoOmRpc2FibGVkKSwgW3R5cGU9c3VibWl0XTpub3QoOmRpc2FibGVkKSwgYnV0dG9uOm5vdCg6ZGlzYWJsZWQpIHtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgIH1cclxuICAgIC5uYXZiYXIge1xyXG4gICAgICAgIGhlaWdodDogNjBweDtcclxuICAgIH1cclxuICAgIC5uYXZiYXItbmF2IHtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDI2cHg7XHJcbiAgICAgICAgcGFkZGluZzogMjBweDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICB9XHJcbiAgICAvKiBhLm5hdi1saW5rIHtcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiA0M3B4OyovXHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHt9XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU3NXB4KSB7XHJcbiAgICAubmF2YmFyLW5hdiB7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIH1cclxuICAgIC5idG4ge1xyXG4gICAgICAgIHBhZGRpbmc6IDVweCAxMnB4O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4gICAgfVxyXG4gICAgLm5hdmJhci1uYXYge1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICB9XHJcbiAgICB1bCBsaSAubmF2LWxpbmsuYWN0aXZlOmFmdGVyIHtcclxuICAgICAgICB3aWR0aDogMTElO1xyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 6552:
/*!*******************************************!*\
  !*** ./src/app/headerservices.service.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HeaderservicesService: () => (/* binding */ HeaderservicesService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 5797);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);


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

/***/ 7824:
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HomeComponent: () => (/* binding */ HomeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 4456);


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
            items: 3
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
            items: 3
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
    decls: 234,
    vars: 0,
    consts: [["carousel1", ""], ["carousel2", ""], ["carousel3", ""], [1, "grid", "py"], [1, "container"], [1, "row"], [1, "col-12", "col-md-12", "col-lg-6"], [1, "card"], [1, "card-body"], [1, "card-title"], [1, "card-text"], [1, "btn", "btn-success"], [1, "fa-solid", "fa-arrow-right-long"], [1, "grid_serv"], [1, "col-12", "col-md-4"], [1, "grid_text"], ["src", "./assets/images/quality.svg"], ["src", "./assets/images/innovative.svg"], ["src", "./assets/images/sustain.svg"], [1, "card", "py_0"], ["src", "./assets/images/banner_img.png", "alt", "Image", 1, "card_img"], [1, "work", "py"], [1, "work_h2"], ["src", "./assets/images/home.png", "alt", "Image", 1, "card_img"], ["src", "./assets/images/sec_img.png", "alt", "Image", 1, "sec_img"], [1, "services", "py"], [1, "owl-carousel", "owl-theme"], [1, "item", "active"], ["src", "./assets/images/completed_img.png", "alt", "Slide 1"], [1, "item_sec"], [1, "item_text"], [1, "item_p"], ["src", "./assets/images/site.png", "alt", "Slide 2"], ["src", "./assets/images/interior.png", "alt", "Slide 3"], [1, "custom-nav"], [1, "owl-prev"], ["src", "./assets/images/arrow-prev.svg"], [1, "owl-next"], ["src", "./assets/images/arrow-next.svg"], [1, "designed", "py"], [1, "col-12", "col-xl-4", "col-lg-6", "col-md-6"], [1, "bg"], [1, "des_text"], ["type", "button", 1, "btn", "btn-secondary"], [1, "project", "py"], [1, "project_heading"], [1, "project_text"], [1, "project_item"], [1, "units"], [1, "law-unit"], [1, "date"], ["src", "./assets/images/com.png", "alt", "Slide 2"], ["src", "./assets/images/completed_img.png", "alt", "Slide 3"], [1, "testimonial", "py"], [1, "col-12", "col-xl-4", "col-md-12", "col-lg-12"], [1, "test_text"], [1, "card-body", "subtitle"], [1, "title"], [1, "col-12", "col-xl-8", "col-md-12", "col-lg-12"], [1, "card_2"], [1, "tm-item"], ["src", "./assets/images/jane.png"], ["src", "./assets/images/stars.png", 1, "stars"], [1, "items-p"], [1, "subscribe", "py"], [1, "subscribe1"], [1, "col-12", "col-lg-6"], [1, "sub_img"], ["src", "./assets/images/subscribe.png"], [1, "sub_text"], ["action", "/action_page.php"], ["type", "email", "placeholder", "Your email address", "aria-label", "Your email address", 1, "form-control"], ["type", "button", 1, "btn", "btn-success"]],
    template: function HomeComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main")(1, "section", 3)(2, "div", 4)(3, "div", 5)(4, "div", 6)(5, "div", 7)(6, "div", 8)(7, "h1", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Welcome To ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Granny Flats");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "At Granny Flats, we specialize in delivering high-quality, pre-constructed tiny homes designed to meet your lifestyle needs.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Get started ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 13)(17, "div", 5)(18, "div", 14)(19, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Quality Craftsmanship");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 14)(24, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Innovative Design");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 14)(29, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Sustainability");
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 29)(57, "div", 30)(58, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Custrom Tiny Home design");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "From $228,800 or $1,769");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 31)(63, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Studio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "img", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 29)(68, "div", 30)(69, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Site Preparation and delivery ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "From $228,800 or $1,769");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 31)(74, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "Studio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "img", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 29)(79, "div", 30)(80, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "interior Design Consultation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "From $228,800 or $1,769");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 31)(85, "p");
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "Expert Craftsmanship");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "Our homes are built with meticulous attention to detail, using top-quality materials to ensure durability and aesthetic appeal.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "button", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "How it works");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "div", 40)(107, "div", 41)(108, "div", 42)(109, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, "Customizable Designs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "We offer a variety of designs that can be customized to match your preferences and requirements, ensuring your new home is uniquely yours.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "button", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, "How it works");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "div", 40)(116, "div", 41)(117, "div", 42)(118, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, "Affordable Living");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, "Enjoy the benefits of a fully constructed home without the hefty price tag. Our tiny homes are a cost-effective alternative to traditional housing.");
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "div", 26, 1)(139, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](140, "img", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "div", 48)(142, "p", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](143, "In-Law Unit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "p", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](145, "July 1, 2024");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](147, "The Family Nest");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](149, "img", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "div", 48)(151, "p", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](152, "In-Law Unit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "p", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](154, "July 1, 2024");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](156, "The Beach Bungalow");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](158, "img", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "div", 48)(160, "p", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](161, "In-Law Unit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "p", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](163, "July 1, 2024");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](165, "The Family Cottage");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "section", 53)(167, "div", 4)(168, "div", 5)(169, "div", 54)(170, "div", 55)(171, "div", 7)(172, "div", 56)(173, "h3", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](174, " TESTIMONIALS ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](176, " What Our Clients Are Saying ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "div", 58)(178, "div", 59)(179, "div", 26, 2)(181, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](182, "img", 61)(183, "img", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](185, "Jane & Mark T.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](186, "p", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](187, "Boulder, CO");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](188, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](189, "\"Choosing Grannyflats to build our tiny home was the best decision we ever made. The Cozy Cottage has exceeded our expectations in every way. The team was professional, attentive, and truly understood our vision. We are absolutely in love with our new home!\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](190, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](191, "img", 61)(192, "img", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](193, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](194, "Jane & Mark T.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](195, "p", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](196, "Boulder, CO");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](197, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](198, "\"Choosing Grannyflats to build our tiny home was the best decision we ever made. The Cozy Cottage has exceeded our expectations in every way. The team was professional, attentive, and truly understood our vision. We are absolutely in love with our new home!\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](199, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](200, "img", 61)(201, "img", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](202, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](203, "Jane & Mark T.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](204, "p", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](205, "Boulder, CO");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](206, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](207, "\"Choosing Grannyflats to build our tiny home was the best decision we ever made. The Cozy Cottage has exceeded our expectations in every way. The team was professional, attentive, and truly understood our vision. We are absolutely in love with our new home!\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](208, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](209, "img", 61)(210, "img", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](211, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](212, "Jane & Mark T.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](213, "p", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](214, "Boulder, CO");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](215, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](216, "\"Choosing Grannyflats to build our tiny home was the best decision we ever made. The Cozy Cottage has exceeded our expectations in every way. The team was professional, attentive, and truly understood our vision. We are absolutely in love with our new home!\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](217, "section", 64)(218, "div", 4)(219, "div", 65)(220, "div", 5)(221, "div", 66)(222, "div", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](223, "img", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](224, "div", 66)(225, "div", 69)(226, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](227, " Subscribe to Our Newsletter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](228, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](229, " Join our community of tiny home enthusiasts and stay updated with the latest news, tips, and trends in the tiny home movement.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](230, "form", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](231, "input", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](232, "button", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](233, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()()();
      }
    },
    dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgForm],
    styles: [".py[_ngcontent-%COMP%] {\n    padding-top: 50px;\n    padding-bottom: 50px;\n}\n\nbody[_ngcontent-%COMP%] {\n    font-size: 20px;\n}\n\nh2[_ngcontent-%COMP%] {\n    font-size: 55px;\n}\n\n\n\n\n.grid[_ngcontent-%COMP%] {\n    padding: 20px 20px;\n    background-color: #f3fcfb;\n    padding-top: 180px;\n    max-width: 100%;\n}\n\n.grid[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n    margin-bottom: 20px;\n    background-color: white;\n}\n\n.grid[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%] {\n    font-size: 1.5rem;\n}\n\n.grid[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n    background-color: white;\n}\n\n.grid[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%] {\n    font-weight: bold;\n    font-size: 60px;\n}\n\nspan[_ngcontent-%COMP%] {\n    color: #208678;\n}\n\n.grid[_ngcontent-%COMP%]   .card-text[_ngcontent-%COMP%] {\n    font-size: 20px;\n}\n\n.grid[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    background-color: #4b4b4b;\n    border-radius: 0;\n    padding: 10px 30px;\n}\n\n.grid[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n    border-color: white;\n}\n\n.grid[_ngcontent-%COMP%]   .card_img[_ngcontent-%COMP%] {\n    \n\n    width: 100%;\n    margin-left: auto;\n    margin-right: auto;\n    padding: 10px 110px;\n}\n\n.grid_serv[_ngcontent-%COMP%] {\n    background-color: white;\n    padding: 10px 20px;\n    display: flex;\n    justify-content: space-between;\n}\n\n.grid_text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-weight: bold;\n}\n\n.grid_text[_ngcontent-%COMP%] {\n    text-align: center;\n    padding: 10px 35px;\n}\n\n\n\n\n\n\n\n.work[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n    margin-bottom: 20px;\n    border-color: white;\n    background-color: white;\n}\n\n.work[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n    background-color: white;\n}\n\n.work[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%] {\n    font-size: 1.5rem;\n}\n\n.work[_ngcontent-%COMP%]   .card-text[_ngcontent-%COMP%] {\n    color: #666;\n}\n\n.work[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 55px;\n    font-weight: bold;\n}\n\n.work[_ngcontent-%COMP%]   .card_img[_ngcontent-%COMP%] {\n    padding-top: 20px;\n    width: 100%;\n}\n\n.work[_ngcontent-%COMP%]   .sec_img[_ngcontent-%COMP%] {\n    padding-top: 20px;\n    max-width: 100%;\n}\n\n\n\n\n\n\n\n.services[_ngcontent-%COMP%] {\n    background-color: #f3fcfb;\n    padding-top: 50px;\n    padding-bottom: 50px;\n}\n\n.services[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 55px;\n    text-align: center;\n    margin-bottom: 20px;\n}\n\n.services[_ngcontent-%COMP%]   .owl-carousel[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%] {\n    text-align: center;\n}\n\n.services[_ngcontent-%COMP%]   .item_sec[_ngcontent-%COMP%] {\n    display: flex;\n    margin-top: 20px;\n    padding-left: 10px;\n    padding-right: 10px;\n}\n\n.services[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 250px;\n    object-fit: cover;\n}\n\n.services[_ngcontent-%COMP%]   .center[_ngcontent-%COMP%] {\n    position: relative;\n}\n\n.services[_ngcontent-%COMP%]   .center[_ngcontent-%COMP%]:before {\n    content: '';\n    position: absolute;\n    left: -10px;\n    top: 12px;\n    border: 1px solid #208678;\n    width: 100%;\n    height: calc(100% - 15px);\n    z-index: -1;\n}\n\n.services[_ngcontent-%COMP%]   .item_text[_ngcontent-%COMP%] {\n    padding-right: 25px;\n    text-align: left;\n}\n\n.item_p[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    background-color: white;\n}\n\nbutton.owl-next[_ngcontent-%COMP%] {\n    background-color: #f3fcfb;\n    border-color: #f3fcfb;\n    border: none;\n}\n\nbutton.owl-prev[_ngcontent-%COMP%] {\n    background-color: #f3fcfb;\n    border-color: #f3fcfb;\n    border: none;\n}\n\n.custom-nav[_ngcontent-%COMP%] {\n    text-align: right;\n    margin-top: 50px;\n}\n\n\n\n\n\n\n\n.designed[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    margin-bottom: 30px;\n    text-align: center;\n}\n\n.designed[_ngcontent-%COMP%]   .des_text[_ngcontent-%COMP%] {\n    text-align: center;\n    padding: 20px 20px\n}\n\n.designed[_ngcontent-%COMP%]   .des_text[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n    margin-top: 10px;\n    font-style: bold;\n}\n\n.designed[_ngcontent-%COMP%]   .des_text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 20px;\n}\n\n.designed[_ngcontent-%COMP%]   .bg[_ngcontent-%COMP%] {\n    background-color: white;\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n}\n\n.designed[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    border-radius: 0;\n    padding: 10px 20px;\n    margin-bottom: 20px;\n    background-color: #4b4b4b;\n}\n\n\n\n\n\n\n\n.project_heading[_ngcontent-%COMP%] {\n    display: flex;\n    margin-bottom: 20px;\n}\n\n.project[_ngcontent-%COMP%] {\n    background-color: #f3fcfb;\n    padding-top: 50px;\n    padding-bottom: 50px;\n}\n\n.project[_ngcontent-%COMP%]   .custom-nav[_ngcontent-%COMP%] {\n    margin-left: auto;\n}\n\n.project[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 45px;\n}\n\n.project[_ngcontent-%COMP%]   .owl-carousel[_ngcontent-%COMP%]   .project_item[_ngcontent-%COMP%] {\n    text-align: center;\n}\n\n.project[_ngcontent-%COMP%]   .item_sec[_ngcontent-%COMP%] {\n    display: flex;\n    margin-top: 20px;\n    padding-left: 10px;\n    padding-right: 10px;\n}\n\n.project[_ngcontent-%COMP%]   .project_item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 250px;\n    object-fit: cover;\n}\n\n.project[_ngcontent-%COMP%]   .item_text[_ngcontent-%COMP%] {\n    padding-right: 25px;\n    text-align: left;\n}\n\n.units[_ngcontent-%COMP%] {\n    display: flex;\n}\n\n.date[_ngcontent-%COMP%] {\n    margin-left: auto;\n}\n\n.law-unit[_ngcontent-%COMP%] {\n    color: #208678;\n    padding-left: 40px;\n    position: relative;\n    margin-top: 10px;\n    font-size: 21px;\n}\n\n.date[_ngcontent-%COMP%] {\n    margin-top: 10px;\n    font-size: 21px;\n}\n\n.law-unit[_ngcontent-%COMP%]:before {\n    content: '';\n    position: absolute;\n    left: 0;\n    top: 50%;\n    transform: translateY(-50%);\n    width: 30px;\n    height: 2px;\n    background: #208678;\n}\n\nspan[_ngcontent-%COMP%] {\n    background: none;\n}\n\n.project_item[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n    font-size: 26px;\n    color: #383636;\n    line-height: 24px;\n    text-align: left;\n}\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.testimonial[_ngcontent-%COMP%] {\n    background-color: #f3fcfb;\n    padding-top: 50px;\n    padding-bottom: 50px;\n    max-width: 100%;\n}\n\n.tm-item[_ngcontent-%COMP%] {\n    text-align: center;\n}\n\n.owl-nav[_ngcontent-%COMP%] {\n    display: none;\n}\n\n.tm-item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 30%;\n    margin-left: auto;\n    margin-right: auto;\n}\n\n.test_text[_ngcontent-%COMP%] {\n    margin-top: 50%;\n}\n\n.card[_ngcontent-%COMP%] {\n    padding-left: 20px;\n    border: #f3fcfb;\n    background-color: #f3fcfb;\n}\n\n.card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    color: #208678;\n}\n\n.card-body[_ngcontent-%COMP%] {\n    background-color: #f3fcfb;\n}\n\n.card-body[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 28px;\n}\n\n.testimonial[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    color: #208678;\n    padding-left: 60px;\n}\n\n.testimonial[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 42px;\n    font-weight: 600;\n}\n\n.tm-item[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 24px;\n    color: #208678;\n}\n\n.items-p[_ngcontent-%COMP%] {\n    font-size: 18px;\n    font-weight: bold;\n}\n\n.tm-item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 19px;\n    font-style: italic;\n}\n\n.tm-item[_ngcontent-%COMP%] {\n    background-color: white;\n    margin-right: 20px;\n    padding: 20px 20px;\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n    margin-top: 20px;\n    margin-bottom: 20px;\n    margin-left: 10px;\n}\n\n.stars[_ngcontent-%COMP%] {\n    margin-bottom: 10px;\n    margin-top: 10px;\n    height: 20px;\n}\n\n.subtitle[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]:before {\n    content: '';\n    position: absolute;\n    left: 20px;\n    top: 13%;\n    transform: translateY(-50%);\n    width: 50px;\n    height: 2px;\n    background: #208678;\n}\n\n.testimonial[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n    padding: 0;\n}\n\n\n\n\n\n\n.subscribe[_ngcontent-%COMP%] {\n    background-color: white;\n    padding-top: 20px;\n    padding-bottom: 20px;\n}\n\n.subscribe[_ngcontent-%COMP%]   .subscribe1[_ngcontent-%COMP%] {\n    background-color: #208678;\n    border-radius: 20px;\n    margin-top: 50px;\n}\n\n.subscribe[_ngcontent-%COMP%]   .sub_img[_ngcontent-%COMP%] {\n    padding-top: 20px;\n    padding-bottom: 20px;\n}\n\n.subscribe[_ngcontent-%COMP%]   .sub_img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 100%;\n}\n\n.subscribe[_ngcontent-%COMP%]   .sub_text[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    color: white;\n    font-size: 42px;\n}\n\n.subscribe[_ngcontent-%COMP%]   .sub_text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    color: white;\n    font-size: 20px;\n    margin-top: 10px;\n}\n\n.subscribe[_ngcontent-%COMP%]   .sub_text[_ngcontent-%COMP%] {\n    padding: 30px 20px;\n}\n\n.subscribe[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n    display: flex;\n}\n\n.subscribe[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n    display: inline;\n    width: 50%;\n    padding: 10px 10px;\n    background-color: white;\n    border-color: white;\n    border-radius: 0;\n}\n\n.subscribe[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    padding: 10px 30px;\n    color: white;\n    background-color: #4b4b4b;\n    border-color: #4b4b4b;\n    border-radius: 0;\n}\n\n\n\n@media only screen and (min-width: 1441px) {\n\n    \n\n\n\n\n\n\n}\n\n@media only screen and (max-width: 1199px) {\n    .grid[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%] {\n        font-weight: bold;\n        font-size: 45px;\n    }\n\n    .grid[_ngcontent-%COMP%]   .card-text[_ngcontent-%COMP%] {\n        font-size: 18px;\n    }\n\n    .grid_text[_ngcontent-%COMP%] {\n        padding: 10px 22px;\n    }\n\n    .grid[_ngcontent-%COMP%]   .card_img[_ngcontent-%COMP%] {\n        padding: 15px 42px;\n    }\n\n    .work[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n        font-size: 42px;\n        font-weight: bold;\n    }\n\n    .services[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n        font-size: 42px;\n    }\n\n    h2[_ngcontent-%COMP%] {\n        font-size: 42px;\n    }\n\n    .designed[_ngcontent-%COMP%]   .des_text[_ngcontent-%COMP%] {\n        height: 280px;\n        margin-bottom: 20px;\n    }\n\n    .project[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n        font-size: 42px;\n    }\n\n    .test_text[_ngcontent-%COMP%] {\n        margin-top: 0;\n    }\n\n    .tm-item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n        font-size: 18px;\n    }\n\n    .subscribe[_ngcontent-%COMP%]   .sub_text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n        font-size: 18px;\n    }\n\n    .testimonial[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n        margin-bottom: 20px;\n    }\n\n    .subtitle[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]:before {\n        left: 0;\n        width: 50px;\n    }\n\n    .card[_ngcontent-%COMP%] {\n        padding-left: 0;\n    }\n}\n\n@media only screen and (max-width: 991px) {\n    .py[_ngcontent-%COMP%] {\n        padding-top: 20px;\n        padding-bottom: 20px;\n    }\n\n    .grid[_ngcontent-%COMP%] {\n        padding-top: 100px;\n    }\n\n    .grid_serv[_ngcontent-%COMP%] {\n        margin-bottom: 20px;\n    }\n\n    .grid[_ngcontent-%COMP%]   .card_img[_ngcontent-%COMP%] {\n        \n\n        max-width: 100%;\n    }\n\n    .designed[_ngcontent-%COMP%]   .des_text[_ngcontent-%COMP%] {\n        height: 310px;\n    }\n\n    .designed[_ngcontent-%COMP%]   .des_text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n        font-size: 18px;\n    }\n\n    .date[_ngcontent-%COMP%] {\n        margin-top: 10px;\n        font-size: 18px;\n    }\n\n    .law-unit[_ngcontent-%COMP%] {\n        padding-left: 23px;\n        font-size: 17px;\n    }\n\n    .law-unit[_ngcontent-%COMP%]:before {\n        width: 20px;\n    }\n\n    .project_item[_ngcontent-ng-c1517086803][_ngcontent-%COMP%]   h4[_ngcontent-ng-c1517086803][_ngcontent-%COMP%] {\n        font-size: 20px;\n        line-height: 0;\n        text-align: left;\n        margin-bottom: 15px;\n    }\n\n\n\n}\n\n@media only screen and (max-width: 767px) {}\n\n@media only screen and (max-width: 575px) {\n    .grid_text[_ngcontent-%COMP%] {\n        padding: 5px 14px;\n    }\n\n    .grid[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%] {\n        font-size: 36px;\n    }\n\n    .grid[_ngcontent-%COMP%]   .card-text[_ngcontent-%COMP%] {\n        font-size: 15px;\n    }\n\n    .grid_text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n        font-size: 12px;\n    }\n\n    .grid[_ngcontent-%COMP%]   .card_img[_ngcontent-%COMP%] {\n        padding: 0;\n    }\n\n    .card[_ngcontent-%COMP%] {\n        padding-left: 0;\n    }\n\n    .work[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n        font-size: 35px;\n    }\n\n    .services[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n        font-size: 35px;\n    }\n\n    h2[_ngcontent-%COMP%] {\n        font-size: 35px;\n    }\n\n    .designed[_ngcontent-%COMP%]   .des_text[_ngcontent-%COMP%] {\n        height: 275px;\n    }\n\n    .project[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n        font-size: 35px;\n    }\n\n    .testimonial[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n        font-size: 35px;\n    }\n\n    .subscribe[_ngcontent-%COMP%]   .sub_text[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n        font-size: 35px;\n    }\n\n    .card-body[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n        font-size: 25px;\n    }\n\n    .subtitle[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]:before {\n        left: 0;\n        top: 12%;\n        width: 35px;\n    }\n\n    .project_item[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n        font-size: 21px;\n        line-height: 15px;\n    }\n\n    .testimonial[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n        padding-left: 40px;\n    }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7SUFDakIsb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7OztBQUdBLFdBQVc7QUFDWDtJQUNJLGtCQUFrQjtJQUNsQix5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixrQkFBa0I7QUFDdEI7O0FBRUEsV0FBVzs7O0FBR1gsU0FBUztBQUNUO0lBQ0ksbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixlQUFlO0FBQ25COztBQUVBLFNBQVM7O0FBRVQsWUFBWTs7QUFFWjtJQUNJLHlCQUF5QjtJQUN6QixpQkFBaUI7SUFDakIsb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsYUFBYTtJQUNiLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFNBQVM7SUFDVCx5QkFBeUI7SUFDekIsV0FBVztJQUNYLHlCQUF5QjtJQUN6QixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLHFCQUFxQjtJQUNyQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLHFCQUFxQjtJQUNyQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGdCQUFnQjtBQUNwQjs7QUFFQSxZQUFZOztBQUVaLGFBQWE7O0FBRWI7SUFDSSxtQkFBbUI7SUFDbkIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCO0FBQ0o7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2Qiw0RUFBNEU7QUFDaEY7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQix5QkFBeUI7QUFDN0I7O0FBRUEsYUFBYTs7O0FBR2IsWUFBWTtBQUNaO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixpQkFBaUI7SUFDakIsb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxhQUFhO0lBQ2IsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjtJQUNsQixPQUFPO0lBQ1AsUUFBUTtJQUNSLDJCQUEyQjtJQUMzQixXQUFXO0lBQ1gsV0FBVztJQUNYLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLGdCQUFnQjtBQUNwQjs7QUFFQTs7Ozs7Ozs7R0FRRzs7QUFFSCxhQUFhOztBQUViLGVBQWU7O0FBRWY7SUFDSSx5QkFBeUI7SUFDekIsaUJBQWlCO0lBQ2pCLG9CQUFvQjtJQUNwQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLFVBQVU7SUFDVixpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxjQUFjO0lBQ2Qsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQiw0RUFBNEU7SUFDNUUsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixRQUFRO0lBQ1IsMkJBQTJCO0lBQzNCLFdBQVc7SUFDWCxXQUFXO0lBQ1gsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksVUFBVTtBQUNkOztBQUVBLGVBQWU7O0FBRWYsYUFBYTtBQUNiO0lBQ0ksdUJBQXVCO0lBQ3ZCLGlCQUFpQjtJQUNqQixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsbUJBQW1CO0lBQ25CLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxZQUFZO0lBQ1osZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixlQUFlO0lBQ2YsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWix5QkFBeUI7SUFDekIscUJBQXFCO0lBQ3JCLGdCQUFnQjtBQUNwQjs7QUFFQSxjQUFjO0FBQ2Q7O0lBRUk7Ozs7O09BS0c7QUFDUDs7QUFFQTtJQUNJO1FBQ0ksaUJBQWlCO1FBQ2pCLGVBQWU7SUFDbkI7O0lBRUE7UUFDSSxlQUFlO0lBQ25COztJQUVBO1FBQ0ksa0JBQWtCO0lBQ3RCOztJQUVBO1FBQ0ksa0JBQWtCO0lBQ3RCOztJQUVBO1FBQ0ksZUFBZTtRQUNmLGlCQUFpQjtJQUNyQjs7SUFFQTtRQUNJLGVBQWU7SUFDbkI7O0lBRUE7UUFDSSxlQUFlO0lBQ25COztJQUVBO1FBQ0ksYUFBYTtRQUNiLG1CQUFtQjtJQUN2Qjs7SUFFQTtRQUNJLGVBQWU7SUFDbkI7O0lBRUE7UUFDSSxhQUFhO0lBQ2pCOztJQUVBO1FBQ0ksZUFBZTtJQUNuQjs7SUFFQTtRQUNJLGVBQWU7SUFDbkI7O0lBRUE7UUFDSSxtQkFBbUI7SUFDdkI7O0lBRUE7UUFDSSxPQUFPO1FBQ1AsV0FBVztJQUNmOztJQUVBO1FBQ0ksZUFBZTtJQUNuQjtBQUNKOztBQUVBO0lBQ0k7UUFDSSxpQkFBaUI7UUFDakIsb0JBQW9CO0lBQ3hCOztJQUVBO1FBQ0ksa0JBQWtCO0lBQ3RCOztJQUVBO1FBQ0ksbUJBQW1CO0lBQ3ZCOztJQUVBO1FBQ0ksaUJBQWlCO1FBQ2pCLGVBQWU7SUFDbkI7O0lBRUE7UUFDSSxhQUFhO0lBQ2pCOztJQUVBO1FBQ0ksZUFBZTtJQUNuQjs7SUFFQTtRQUNJLGdCQUFnQjtRQUNoQixlQUFlO0lBQ25COztJQUVBO1FBQ0ksa0JBQWtCO1FBQ2xCLGVBQWU7SUFDbkI7O0lBRUE7UUFDSSxXQUFXO0lBQ2Y7O0lBRUE7UUFDSSxlQUFlO1FBQ2YsY0FBYztRQUNkLGdCQUFnQjtRQUNoQixtQkFBbUI7SUFDdkI7Ozs7QUFJSjs7QUFFQSwyQ0FBMkM7O0FBRTNDO0lBQ0k7UUFDSSxpQkFBaUI7SUFDckI7O0lBRUE7UUFDSSxlQUFlO0lBQ25COztJQUVBO1FBQ0ksZUFBZTtJQUNuQjs7SUFFQTtRQUNJLGVBQWU7SUFDbkI7O0lBRUE7UUFDSSxVQUFVO0lBQ2Q7O0lBRUE7UUFDSSxlQUFlO0lBQ25COztJQUVBO1FBQ0ksZUFBZTtJQUNuQjs7SUFFQTtRQUNJLGVBQWU7SUFDbkI7O0lBRUE7UUFDSSxlQUFlO0lBQ25COztJQUVBO1FBQ0ksYUFBYTtJQUNqQjs7SUFFQTtRQUNJLGVBQWU7SUFDbkI7O0lBRUE7UUFDSSxlQUFlO0lBQ25COztJQUVBO1FBQ0ksZUFBZTtJQUNuQjs7SUFFQTtRQUNJLGVBQWU7SUFDbkI7O0lBRUE7UUFDSSxPQUFPO1FBQ1AsUUFBUTtRQUNSLFdBQVc7SUFDZjs7SUFFQTtRQUNJLGVBQWU7UUFDZixpQkFBaUI7SUFDckI7O0lBRUE7UUFDSSxrQkFBa0I7SUFDdEI7QUFDSiIsInNvdXJjZXNDb250ZW50IjpbIi5weSB7XHJcbiAgICBwYWRkaW5nLXRvcDogNTBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiA1MHB4O1xyXG59XHJcblxyXG5ib2R5IHtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG5cclxuaDIge1xyXG4gICAgZm9udC1zaXplOiA1NXB4O1xyXG59XHJcblxyXG5cclxuLyogYmFubmVyICovXHJcbi5ncmlkIHtcclxuICAgIHBhZGRpbmc6IDIwcHggMjBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmM2ZjZmI7XHJcbiAgICBwYWRkaW5nLXRvcDogMTgwcHg7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5ncmlkIC5jYXJkIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmdyaWQgLmNhcmQtdGl0bGUge1xyXG4gICAgZm9udC1zaXplOiAxLjVyZW07XHJcbn1cclxuXHJcbi5ncmlkIC5jYXJkLWJvZHkge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5ncmlkIC5jYXJkLXRpdGxlIHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiA2MHB4O1xyXG59XHJcblxyXG5zcGFuIHtcclxuICAgIGNvbG9yOiAjMjA4Njc4O1xyXG59XHJcblxyXG4uZ3JpZCAuY2FyZC10ZXh0IHtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG5cclxuLmdyaWQgLmJ0biB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGI0YjRiO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgIHBhZGRpbmc6IDEwcHggMzBweDtcclxufVxyXG5cclxuLmdyaWQgLmNhcmQge1xyXG4gICAgYm9yZGVyLWNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmdyaWQgLmNhcmRfaW1nIHtcclxuICAgIC8qIGhlaWdodDogNTMwcHg7ICovXHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgcGFkZGluZzogMTBweCAxMTBweDtcclxufVxyXG5cclxuLmdyaWRfc2VydiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIHBhZGRpbmc6IDEwcHggMjBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuXHJcbi5ncmlkX3RleHQgcCB7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLmdyaWRfdGV4dCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDM1cHg7XHJcbn1cclxuXHJcbi8qIGJhbm5lciAqL1xyXG5cclxuXHJcbi8qIHdvcmsgKi9cclxuLndvcmsgLmNhcmQge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIGJvcmRlci1jb2xvcjogd2hpdGU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLndvcmsgLmNhcmQtYm9keSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLndvcmsgLmNhcmQtdGl0bGUge1xyXG4gICAgZm9udC1zaXplOiAxLjVyZW07XHJcbn1cclxuXHJcbi53b3JrIC5jYXJkLXRleHQge1xyXG4gICAgY29sb3I6ICM2NjY7XHJcbn1cclxuXHJcbi53b3JrIC5jYXJkLWJvZHkgaDIge1xyXG4gICAgZm9udC1zaXplOiA1NXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi53b3JrIC5jYXJkX2ltZyB7XHJcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4ud29yayAuc2VjX2ltZyB7XHJcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxufVxyXG5cclxuLyogd29yayAqL1xyXG5cclxuLypzZXJ2aWNlcyAqL1xyXG5cclxuLnNlcnZpY2VzIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmM2ZjZmI7XHJcbiAgICBwYWRkaW5nLXRvcDogNTBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiA1MHB4O1xyXG59XHJcblxyXG4uc2VydmljZXMgaDIge1xyXG4gICAgZm9udC1zaXplOiA1NXB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG5cclxuLnNlcnZpY2VzIC5vd2wtY2Fyb3VzZWwgLml0ZW0ge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uc2VydmljZXMgLml0ZW1fc2VjIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcclxufVxyXG5cclxuLnNlcnZpY2VzIC5pdGVtIGltZyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMjUwcHg7XHJcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxufVxyXG5cclxuLnNlcnZpY2VzIC5jZW50ZXIge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4uc2VydmljZXMgLmNlbnRlcjpiZWZvcmUge1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAtMTBweDtcclxuICAgIHRvcDogMTJweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMyMDg2Nzg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogY2FsYygxMDAlIC0gMTVweCk7XHJcbiAgICB6LWluZGV4OiAtMTtcclxufVxyXG5cclxuLnNlcnZpY2VzIC5pdGVtX3RleHQge1xyXG4gICAgcGFkZGluZy1yaWdodDogMjVweDtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuXHJcbi5pdGVtX3AgcCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuYnV0dG9uLm93bC1uZXh0IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmM2ZjZmI7XHJcbiAgICBib3JkZXItY29sb3I6ICNmM2ZjZmI7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbn1cclxuXHJcbmJ1dHRvbi5vd2wtcHJldiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjNmY2ZiO1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjZjNmY2ZiO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG59XHJcblxyXG4uY3VzdG9tLW5hdiB7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbn1cclxuXHJcbi8qc2VydmljZXMgKi9cclxuXHJcbi8qIGRlc2lnbmVkICovXHJcblxyXG4uZGVzaWduZWQgaDIge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmRlc2lnbmVkIC5kZXNfdGV4dCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAyMHB4IDIwcHhcclxufVxyXG5cclxuLmRlc2lnbmVkIC5kZXNfdGV4dCBoNCB7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgZm9udC1zdHlsZTogYm9sZDtcclxufVxyXG5cclxuLmRlc2lnbmVkIC5kZXNfdGV4dCBwIHtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG5cclxuLmRlc2lnbmVkIC5iZyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA2cHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XHJcbn1cclxuXHJcbi5kZXNpZ25lZCAuYnRuIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzRiNGI0YjtcclxufVxyXG5cclxuLyogZGVzaWduZWQgKi9cclxuXHJcblxyXG4vKiBwcm9qZWN0ICovXHJcbi5wcm9qZWN0X2hlYWRpbmcge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuXHJcbi5wcm9qZWN0IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmM2ZjZmI7XHJcbiAgICBwYWRkaW5nLXRvcDogNTBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiA1MHB4O1xyXG59XHJcblxyXG4ucHJvamVjdCAuY3VzdG9tLW5hdiB7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxufVxyXG5cclxuLnByb2plY3QgaDIge1xyXG4gICAgZm9udC1zaXplOiA0NXB4O1xyXG59XHJcblxyXG4ucHJvamVjdCAub3dsLWNhcm91c2VsIC5wcm9qZWN0X2l0ZW0ge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4ucHJvamVjdCAuaXRlbV9zZWMge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG59XHJcblxyXG4ucHJvamVjdCAucHJvamVjdF9pdGVtIGltZyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMjUwcHg7XHJcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxufVxyXG5cclxuLnByb2plY3QgLml0ZW1fdGV4dCB7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAyNXB4O1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG5cclxuLnVuaXRzIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbi5kYXRlIHtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG59XHJcblxyXG4ubGF3LXVuaXQge1xyXG4gICAgY29sb3I6ICMyMDg2Nzg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDQwcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgZm9udC1zaXplOiAyMXB4O1xyXG59XHJcblxyXG4uZGF0ZSB7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgZm9udC1zaXplOiAyMXB4O1xyXG59XHJcblxyXG4ubGF3LXVuaXQ6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gICAgd2lkdGg6IDMwcHg7XHJcbiAgICBoZWlnaHQ6IDJweDtcclxuICAgIGJhY2tncm91bmQ6ICMyMDg2Nzg7XHJcbn1cclxuXHJcbnNwYW4ge1xyXG4gICAgYmFja2dyb3VuZDogbm9uZTtcclxufVxyXG5cclxuLnByb2plY3RfaXRlbSBoNCB7XHJcbiAgICBmb250LXNpemU6IDI2cHg7XHJcbiAgICBjb2xvcjogIzM4MzYzNjtcclxuICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG5cclxuLyogLm93bC10aGVtZSAub3dsLWRvdHMgLm93bC1kb3Qgc3BhbiB7XHJcbiAgICB3aWR0aDogMTBweDtcclxuICAgIGhlaWdodDogMTBweDtcclxuICAgIG1hcmdpbjogNXB4IDdweDtcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgLjJzIGVhc2U7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG59ICovXHJcblxyXG4vKiBwcm9qZWN0cyAqL1xyXG5cclxuLyp0ZXN0aW1vbmlhbHMqL1xyXG5cclxuLnRlc3RpbW9uaWFsIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmM2ZjZmI7XHJcbiAgICBwYWRkaW5nLXRvcDogNTBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiA1MHB4O1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4udG0taXRlbSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5vd2wtbmF2IHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi50bS1pdGVtIGltZyB7XHJcbiAgICB3aWR0aDogMzAlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbn1cclxuXHJcbi50ZXN0X3RleHQge1xyXG4gICAgbWFyZ2luLXRvcDogNTAlO1xyXG59XHJcblxyXG4uY2FyZCB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbiAgICBib3JkZXI6ICNmM2ZjZmI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjNmY2ZiO1xyXG59XHJcblxyXG4uY2FyZCBoMyB7XHJcbiAgICBjb2xvcjogIzIwODY3ODtcclxufVxyXG5cclxuLmNhcmQtYm9keSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjNmY2ZiO1xyXG59XHJcblxyXG4uY2FyZC1ib2R5IGgzIHtcclxuICAgIGZvbnQtc2l6ZTogMjhweDtcclxufVxyXG5cclxuLnRlc3RpbW9uaWFsIC5jYXJkIGgzIHtcclxuICAgIGNvbG9yOiAjMjA4Njc4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiA2MHB4O1xyXG59XHJcblxyXG4udGVzdGltb25pYWwgLmNhcmQtYm9keSBoMiB7XHJcbiAgICBmb250LXNpemU6IDQycHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcblxyXG4udG0taXRlbSBoMyB7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICBjb2xvcjogIzIwODY3ODtcclxufVxyXG5cclxuLml0ZW1zLXAge1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi50bS1pdGVtIHAge1xyXG4gICAgZm9udC1zaXplOiAxOXB4O1xyXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG59XHJcblxyXG4udG0taXRlbSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIG1hcmdpbi1yaWdodDogMjBweDtcclxuICAgIHBhZGRpbmc6IDIwcHggMjBweDtcclxuICAgIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA2cHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG59XHJcblxyXG4uc3RhcnMge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcbn1cclxuXHJcbi5zdWJ0aXRsZSAudGl0bGU6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogMjBweDtcclxuICAgIHRvcDogMTMlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbiAgICBoZWlnaHQ6IDJweDtcclxuICAgIGJhY2tncm91bmQ6ICMyMDg2Nzg7XHJcbn1cclxuXHJcbi50ZXN0aW1vbmlhbCAuY2FyZC1ib2R5IHtcclxuICAgIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbi8qdGVzdGltb25pYWxzKi9cclxuXHJcbi8qIHN1YnNjcmliZSovXHJcbi5zdWJzY3JpYmUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG59XHJcblxyXG4uc3Vic2NyaWJlIC5zdWJzY3JpYmUxIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMDg2Nzg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogNTBweDtcclxufVxyXG5cclxuLnN1YnNjcmliZSAuc3ViX2ltZyB7XHJcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG59XHJcblxyXG4uc3Vic2NyaWJlIC5zdWJfaW1nIGltZyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLnN1YnNjcmliZSAuc3ViX3RleHQgaDIge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1zaXplOiA0MnB4O1xyXG59XHJcblxyXG4uc3Vic2NyaWJlIC5zdWJfdGV4dCBwIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbn1cclxuXHJcbi5zdWJzY3JpYmUgLnN1Yl90ZXh0IHtcclxuICAgIHBhZGRpbmc6IDMwcHggMjBweDtcclxufVxyXG5cclxuLnN1YnNjcmliZSBmb3JtIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbi5zdWJzY3JpYmUgLmZvcm0tY29udHJvbCB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmU7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgcGFkZGluZzogMTBweCAxMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXItY29sb3I6IHdoaXRlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMDtcclxufVxyXG5cclxuLnN1YnNjcmliZSAuYnRuIHtcclxuICAgIHBhZGRpbmc6IDEwcHggMzBweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0YjRiNGI7XHJcbiAgICBib3JkZXItY29sb3I6ICM0YjRiNGI7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwO1xyXG59XHJcblxyXG4vKiBzdWJzY3JpYmUgKi9cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxNDQxcHgpIHtcclxuXHJcbiAgICAvKiAuZ3JpZFtfbmdjb250ZW50LW5nLWMxMzI0NTY3MTU3XSAuY2FyZF9pbWdbX25nY29udGVudC1uZy1jMTMyNDU2NzE1N10ge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgICAgICBwYWRkaW5nOiAzMHB4IDEyN3B4O1xyXG4gICAgfSAqL1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDExOTlweCkge1xyXG4gICAgLmdyaWQgLmNhcmQtdGl0bGUge1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogNDVweDtcclxuICAgIH1cclxuXHJcbiAgICAuZ3JpZCAuY2FyZC10ZXh0IHtcclxuICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmdyaWRfdGV4dCB7XHJcbiAgICAgICAgcGFkZGluZzogMTBweCAyMnB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5ncmlkIC5jYXJkX2ltZyB7XHJcbiAgICAgICAgcGFkZGluZzogMTVweCA0MnB4O1xyXG4gICAgfVxyXG5cclxuICAgIC53b3JrIC5jYXJkLWJvZHkgaDIge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogNDJweDtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIH1cclxuXHJcbiAgICAuc2VydmljZXMgaDIge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogNDJweDtcclxuICAgIH1cclxuXHJcbiAgICBoMiB7XHJcbiAgICAgICAgZm9udC1zaXplOiA0MnB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5kZXNpZ25lZCAuZGVzX3RleHQge1xyXG4gICAgICAgIGhlaWdodDogMjgwcHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIH1cclxuXHJcbiAgICAucHJvamVjdCBoMiB7XHJcbiAgICAgICAgZm9udC1zaXplOiA0MnB4O1xyXG4gICAgfVxyXG5cclxuICAgIC50ZXN0X3RleHQge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICB9XHJcblxyXG4gICAgLnRtLWl0ZW0gcCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5zdWJzY3JpYmUgLnN1Yl90ZXh0IHAge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIH1cclxuXHJcbiAgICAudGVzdGltb25pYWwgLmNhcmQtYm9keSBoMiB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIH1cclxuXHJcbiAgICAuc3VidGl0bGUgLnRpdGxlOmJlZm9yZSB7XHJcbiAgICAgICAgbGVmdDogMDtcclxuICAgICAgICB3aWR0aDogNTBweDtcclxuICAgIH1cclxuXHJcbiAgICAuY2FyZCB7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAwO1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MXB4KSB7XHJcbiAgICAucHkge1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5ncmlkIHtcclxuICAgICAgICBwYWRkaW5nLXRvcDogMTAwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmdyaWRfc2VydiB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIH1cclxuXHJcbiAgICAuZ3JpZCAuY2FyZF9pbWcge1xyXG4gICAgICAgIC8qIHdpZHRoOiAxMDAlOyAqL1xyXG4gICAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIH1cclxuXHJcbiAgICAuZGVzaWduZWQgLmRlc190ZXh0IHtcclxuICAgICAgICBoZWlnaHQ6IDMxMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5kZXNpZ25lZCAuZGVzX3RleHQgcCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5kYXRlIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIH1cclxuXHJcbiAgICAubGF3LXVuaXQge1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMjNweDtcclxuICAgICAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmxhdy11bml0OmJlZm9yZSB7XHJcbiAgICAgICAgd2lkdGg6IDIwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLnByb2plY3RfaXRlbVtfbmdjb250ZW50LW5nLWMxNTE3MDg2ODAzXSBoNFtfbmdjb250ZW50LW5nLWMxNTE3MDg2ODAzXSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAwO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgIH1cclxuXHJcblxyXG5cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge31cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTc1cHgpIHtcclxuICAgIC5ncmlkX3RleHQge1xyXG4gICAgICAgIHBhZGRpbmc6IDVweCAxNHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5ncmlkIC5jYXJkLXRpdGxlIHtcclxuICAgICAgICBmb250LXNpemU6IDM2cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmdyaWQgLmNhcmQtdGV4dCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5ncmlkX3RleHQgcCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5ncmlkIC5jYXJkX2ltZyB7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgIH1cclxuXHJcbiAgICAuY2FyZCB7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAwO1xyXG4gICAgfVxyXG5cclxuICAgIC53b3JrIC5jYXJkLWJvZHkgaDIge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMzVweDtcclxuICAgIH1cclxuXHJcbiAgICAuc2VydmljZXMgaDIge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMzVweDtcclxuICAgIH1cclxuXHJcbiAgICBoMiB7XHJcbiAgICAgICAgZm9udC1zaXplOiAzNXB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5kZXNpZ25lZCAuZGVzX3RleHQge1xyXG4gICAgICAgIGhlaWdodDogMjc1cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLnByb2plY3QgaDIge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMzVweDtcclxuICAgIH1cclxuXHJcbiAgICAudGVzdGltb25pYWwgLmNhcmQtYm9keSBoMiB7XHJcbiAgICAgICAgZm9udC1zaXplOiAzNXB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5zdWJzY3JpYmUgLnN1Yl90ZXh0IGgyIHtcclxuICAgICAgICBmb250LXNpemU6IDM1cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmNhcmQtYm9keSBoMyB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5zdWJ0aXRsZSAudGl0bGU6YmVmb3JlIHtcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgIHRvcDogMTIlO1xyXG4gICAgICAgIHdpZHRoOiAzNXB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5wcm9qZWN0X2l0ZW0gaDQge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjFweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMTVweDtcclxuICAgIH1cclxuXHJcbiAgICAudGVzdGltb25pYWwgLmNhcmQgaDMge1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogNDBweDtcclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 316);





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
          return ctx.onSubmit();
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
    styles: [".login[_ngcontent-%COMP%]{\n    width: 35%;\n    margin-right: auto;\n    margin-left: auto;\n    margin-top: 120px;\n    margin-bottom: 50px;\n    padding: 20px;\n    border-radius: 10px;\n}\n.login_text[_ngcontent-%COMP%]::before {\n    content: '';\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background: rgba(0, 0, 0, 0.5); \n\n    filter: blur(8px); \n\n    z-index: -1; \n\n}\n\n.login_text[_ngcontent-%COMP%] {\n    background: rgba(255, 255, 255, 0.9); \n    border-radius: 10px; \n    padding: 20px;\n    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2); \n    max-width: 400px; \n    width: 100%;\n    z-index: 1; \n    background: url('bg2-img.avif') no-repeat center center; \n    background-size: cover;\n    position: relative;\n    background-position: center;\n}\n.form-label[_ngcontent-%COMP%]{\n    margin-bottom: 10px;\n    color: white;\n}\n.form-control[_ngcontent-%COMP%]{\n    margin-bottom: 20px;\n}\n.heading[_ngcontent-%COMP%]{\n    text-align: center;\n    font-weight: 800;\n    color: white;\n}\n\n.btn-success[_ngcontent-%COMP%]{\n   background-color:  #4b4b4b;\n   border:  1px solid #4b4b4b;\n   width: 100%;\n   margin-bottom: 20px;\n}\n.btn[_ngcontent-%COMP%]:hover{\n    background-color: #4b4b4b;\n    border:  1px solid #4b4b4b;\n}\n.member[_ngcontent-%COMP%]{\n    color: white;\n    text-align: center;\n}\nbutton[_ngcontent-%COMP%]{\n    background-color: transparent;\n    color: white;\n    border: none;\n}\n\n\n@media only screen and (max-width: 991px) {\n    .login[_ngcontent-%COMP%]{\n        width: 60%;\n    }\n}\n\n@media only screen and (max-width: 767px) {}\n\n@media only screen and (max-width: 575px) {\n    .login[_ngcontent-%COMP%]{\n        width: 100%;\n    }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFVBQVU7SUFDVixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sT0FBTztJQUNQLFdBQVc7SUFDWCxZQUFZO0lBQ1osOEJBQThCLEVBQUUsOEJBQThCO0lBQzlELGlCQUFpQixFQUFFLG1DQUFtQztJQUN0RCxXQUFXLEVBQUUscUNBQXFDO0FBQ3REOztBQUVBO0lBQ0ksb0NBQW9DO0lBQ3BDLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsdUNBQXVDO0lBQ3ZDLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsVUFBVTtJQUNWLHVEQUEyRTtJQUMzRSxzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLDJCQUEyQjtBQUMvQjtBQUNBO0lBQ0ksbUJBQW1CO0lBQ25CLFlBQVk7QUFDaEI7QUFDQTtJQUNJLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixZQUFZO0FBQ2hCOztBQUVBO0dBQ0csMEJBQTBCO0dBQzFCLDBCQUEwQjtHQUMxQixXQUFXO0dBQ1gsbUJBQW1CO0FBQ3RCO0FBQ0E7SUFDSSx5QkFBeUI7SUFDekIsMEJBQTBCO0FBQzlCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSw2QkFBNkI7SUFDN0IsWUFBWTtJQUNaLFlBQVk7QUFDaEI7OztBQUdBO0lBQ0k7UUFDSSxVQUFVO0lBQ2Q7QUFDSjs7QUFFQSwyQ0FBMkM7O0FBRTNDO0lBQ0k7UUFDSSxXQUFXO0lBQ2Y7QUFDSiIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dpbntcclxuICAgIHdpZHRoOiAzNSU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi10b3A6IDEyMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNTBweDtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcbi5sb2dpbl90ZXh0OjpiZWZvcmUge1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNSk7IC8qIERhcmsgb3ZlcmxheSB3aXRoIG9wYWNpdHkgKi9cclxuICAgIGZpbHRlcjogYmx1cig4cHgpOyAvKiBBZGp1c3QgYmx1ciBzdHJlbmd0aCBhcyBuZWVkZWQgKi9cclxuICAgIHotaW5kZXg6IC0xOyAvKiBQbGFjZSBvdmVybGF5IGJlaGluZCB0aGUgY29udGVudCAqL1xyXG59XHJcblxyXG4ubG9naW5fdGV4dCB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOSk7IFxyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDsgXHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSgwLCAwLCAwLCAwLjIpOyBcclxuICAgIG1heC13aWR0aDogNDAwcHg7IFxyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB6LWluZGV4OiAxOyBcclxuICAgIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vYXNzZXRzL2ltYWdlcy9iZzItaW1nLmF2aWYnKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlcjsgXHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG59XHJcbi5mb3JtLWxhYmVse1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG4uZm9ybS1jb250cm9se1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG4uaGVhZGluZ3tcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5idG4tc3VjY2Vzc3tcclxuICAgYmFja2dyb3VuZC1jb2xvcjogICM0YjRiNGI7XHJcbiAgIGJvcmRlcjogIDFweCBzb2xpZCAjNGI0YjRiO1xyXG4gICB3aWR0aDogMTAwJTtcclxuICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG4uYnRuOmhvdmVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzRiNGI0YjtcclxuICAgIGJvcmRlcjogIDFweCBzb2xpZCAjNGI0YjRiO1xyXG59XHJcbi5tZW1iZXJ7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuYnV0dG9ue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbn1cclxuXHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MXB4KSB7XHJcbiAgICAubG9naW57XHJcbiAgICAgICAgd2lkdGg6IDYwJTtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge31cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTc1cHgpIHtcclxuICAgIC5sb2dpbntcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 5994:
/*!************************************************!*\
  !*** ./src/app/services/services.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ServicesComponent: () => (/* binding */ ServicesComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);

class ServicesComponent {
  static #_ = this.ɵfac = function ServicesComponent_Factory(t) {
    return new (t || ServicesComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: ServicesComponent,
    selectors: [["app-services"]],
    decls: 2,
    vars: 0,
    template: function ServicesComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "services works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    },
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 9550:
/*!********************************************!*\
  !*** ./src/app/signin/signin.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SigninComponent: () => (/* binding */ SigninComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 316);




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
  constructor(fb) {
    this.fb = fb;
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
  passwordMatchValidator(group) {
    const password = group.get('password');
    const confirmPassword = group.get('confirmPassword');
    return password && confirmPassword && password.value === confirmPassword.value ? null : {
      mismatch: true
    };
  }
  onSubmit() {
    if (this.signUpForm.valid) {
      console.log(this.signUpForm.value);
    }
  }
  static #_ = this.ɵfac = function SigninComponent_Factory(t) {
    return new (t || SigninComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormBuilder));
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
          return ctx.onSubmit();
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
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlName],
    styles: [".sign[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    margin-top: 150px;\n    margin-bottom: 80px;\n}\n\n\n\n.sign_text[_ngcontent-%COMP%]::before {\n    content: '';\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background: rgba(0, 0, 0, 0.5); \n\n    filter: blur(8px); \n\n    z-index: -1; \n\n}\n\n.sign_text[_ngcontent-%COMP%] {\n    background: rgba(255, 255, 255, 0.9); \n    border-radius: 10px; \n    padding: 20px;\n    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2); \n    max-width: 400px; \n    width: 100%;\n    z-index: 1; \n    background: url('bg1-img.webp') no-repeat center center; \n    background-size: cover;\n    position: relative;\n}\n\n\n.heading[_ngcontent-%COMP%] {\n    text-align: center;\n    margin-bottom: 20px; \n    color: white;\n    font-weight: 800;\n}\n\n.form-label[_ngcontent-%COMP%] {\n    margin-bottom: 5px; \n    color: white;\n}\n\n.form-control[_ngcontent-%COMP%] {\n    margin-bottom: 15px; \n}\n\n.form-control[_ngcontent-%COMP%]:focus {\n    border-color: #007bff; \n\n    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25); \n\n}\n\n.btn-success[_ngcontent-%COMP%]{\n    background-color:  #4b4b4b;\n    border:  1px solid #4b4b4b;\n    width: 100%;\n }\n .btn[_ngcontent-%COMP%]:hover{\n     background-color: #4b4b4b;\n     border:  1px solid #4b4b4b;\n }\n\n\n @media only screen and (max-width: 991px) {\n    .sign[_ngcontent-%COMP%] {\n        width: 100%;\n    }\n}\n\n@media only screen and (max-width: 767px) {}\n\n@media only screen and (max-width: 575px) {\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2lnbmluL3NpZ25pbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixtQkFBbUI7QUFDdkI7O0FBRUEsbUNBQW1DO0FBQ25DO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sT0FBTztJQUNQLFdBQVc7SUFDWCxZQUFZO0lBQ1osOEJBQThCLEVBQUUsOEJBQThCO0lBQzlELGlCQUFpQixFQUFFLG1DQUFtQztJQUN0RCxXQUFXLEVBQUUscUNBQXFDO0FBQ3REOztBQUVBO0lBQ0ksb0NBQW9DO0lBQ3BDLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsdUNBQXVDO0lBQ3ZDLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsVUFBVTtJQUNWLHVEQUEyRTtJQUMzRSxzQkFBc0I7SUFDdEIsa0JBQWtCO0FBQ3RCOzs7QUFHQTtJQUNJLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0kscUJBQXFCLEVBQUUsOEJBQThCO0lBQ3JELGdEQUFnRCxFQUFFLHdCQUF3QjtBQUM5RTs7QUFFQTtJQUNJLDBCQUEwQjtJQUMxQiwwQkFBMEI7SUFDMUIsV0FBVztDQUNkO0NBQ0E7S0FDSSx5QkFBeUI7S0FDekIsMEJBQTBCO0NBQzlCOzs7Q0FHQTtJQUNHO1FBQ0ksV0FBVztJQUNmO0FBQ0o7O0FBRUEsMkNBQTJDOztBQUUzQztBQUNBIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5zaWduIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiAxNTBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDgwcHg7XHJcbn1cclxuXHJcbi8qIE92ZXJsYXkgdG8gYmx1ciB0aGUgYmFja2dyb3VuZCAqL1xyXG4uc2lnbl90ZXh0OjpiZWZvcmUge1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNSk7IC8qIERhcmsgb3ZlcmxheSB3aXRoIG9wYWNpdHkgKi9cclxuICAgIGZpbHRlcjogYmx1cig4cHgpOyAvKiBBZGp1c3QgYmx1ciBzdHJlbmd0aCBhcyBuZWVkZWQgKi9cclxuICAgIHotaW5kZXg6IC0xOyAvKiBQbGFjZSBvdmVybGF5IGJlaGluZCB0aGUgY29udGVudCAqL1xyXG59XHJcblxyXG4uc2lnbl90ZXh0IHtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45KTsgXHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4OyBcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDAsIDAsIDAsIDAuMik7IFxyXG4gICAgbWF4LXdpZHRoOiA0MDBweDsgXHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHotaW5kZXg6IDE7IFxyXG4gICAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi9hc3NldHMvaW1hZ2VzL2JnMS1pbWcud2VicCcpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyOyBcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcblxyXG4uaGVhZGluZyB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4OyBcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbn1cclxuXHJcbi5mb3JtLWxhYmVsIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDVweDsgXHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5mb3JtLWNvbnRyb2wge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDsgXHJcbn1cclxuXHJcbi5mb3JtLWNvbnRyb2w6Zm9jdXMge1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjMDA3YmZmOyAvKiBDaGFuZ2UgZm9jdXMgYm9yZGVyIGNvbG9yICovXHJcbiAgICBib3gtc2hhZG93OiAwIDAgMCAwLjJyZW0gcmdiYSgwLCAxMjMsIDI1NSwgMC4yNSk7IC8qIEFkanVzdCBmb2N1cyBzaGFkb3cgKi9cclxufVxyXG5cclxuLmJ0bi1zdWNjZXNze1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogICM0YjRiNGI7XHJcbiAgICBib3JkZXI6ICAxcHggc29saWQgIzRiNGI0YjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gfVxyXG4gLmJ0bjpob3ZlcntcclxuICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGI0YjRiO1xyXG4gICAgIGJvcmRlcjogIDFweCBzb2xpZCAjNGI0YjRiO1xyXG4gfVxyXG5cclxuXHJcbiBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MXB4KSB7XHJcbiAgICAuc2lnbiB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHt9XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU3NXB4KSB7XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 4429:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 436);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 635);


_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule, {
  ngZoneEventCoalescing: true
}).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4429)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map