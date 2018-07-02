"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var router_1 = require("@angular/router");
var app_component_1 = require("./app.component");
var app_router_1 = require("./app.router");
var home_component_1 = require("./pages/home/home.component");
var forms_1 = require("@angular/forms");
var register_component_1 = require("./pages/register/register.component");
var http_1 = require("@angular/http");
var login_component_1 = require("./pages/login/login.component");
var register_service_1 = require("./services/register.service");
var login_service_1 = require("./services/login.service");
var addmarka_service_1 = require("./services/addmarka.service");
var addmarka_component_1 = require("./pages/addmarka/addmarka.component");
var marke_service_1 = require("./services/marke.service");
var marke_component_1 = require("./pages/marke/marke.component");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, router_1.RouterModule.forRoot(app_router_1.appRoutes), forms_1.ReactiveFormsModule, http_1.HttpModule],
        declarations: [app_component_1.AppComponent, home_component_1.default, register_component_1.default, login_component_1.default, addmarka_component_1.default, marke_component_1.default],
        providers: [register_service_1.RegisterService, login_service_1.LoginService, addmarka_service_1.AddMarkaService, marke_service_1.default],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map