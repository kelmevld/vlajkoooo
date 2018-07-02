"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
require("rxjs/Rx");
var marke_service_1 = require("../../services/marke.service");
var MarkeComponent = (function () {
    function MarkeComponent(markeService) {
        var _this = this;
        this.markeService = markeService;
        var $;
        this.markeService.getMarke().subscribe(function (data) {
            _this.marke = data;
            setInterval(function () {
                $ = window['jQuery'];
                $('table').DataTable();
            }.bind(_this), 400);
        });
    }
    return MarkeComponent;
}());
MarkeComponent = __decorate([
    core_1.Component({
        selector: 'marke',
        templateUrl: "./marke.html",
    }),
    __metadata("design:paramtypes", [marke_service_1.default])
], MarkeComponent);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = MarkeComponent;
//# sourceMappingURL=marke.component.js.map