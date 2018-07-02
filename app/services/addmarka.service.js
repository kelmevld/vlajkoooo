"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
require("rxjs/add/operator/catch");
require("rxjs/add/operator/map");
var core_1 = require("@angular/core");
var post_service_1 = require("./post.service");
var constants_1 = require("../constants");
var AddMarkaService = (function (_super) {
    __extends(AddMarkaService, _super);
    function AddMarkaService() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.url = constants_1.apiUrl + 'addmarkaservice.php';
        return _this;
    }
    AddMarkaService.prototype.callService = function (item) {
        this.headers = constants_1.getAuthHeaders();
        return _super.prototype.callService.call(this, item);
    };
    return AddMarkaService;
}(post_service_1.default));
AddMarkaService = __decorate([
    core_1.Injectable()
], AddMarkaService);
exports.AddMarkaService = AddMarkaService;
//# sourceMappingURL=addmarka.service.js.map