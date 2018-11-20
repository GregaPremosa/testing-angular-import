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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var SurveyComponent = /** @class */ (function () {
    function SurveyComponent() {
    }
    SurveyComponent.prototype.ngOnInit = function () {
    };
    SurveyComponent.prototype.handleClick = function () {
        console.log("I clicked my button.");
    };
    SurveyComponent = __decorate([
        core_1.Component({
            selector: 'app-survey',
            template: "\n<div class=\"myCustomStyle\">\n    <p> my Html component! </p>\n<button (click)=\"handleClick()\"> Click and Check Console </button>\n</div>\n",
            styles: ["\n.myCustomStyle{\n    color:red;\n    background-color:green;\n    border: solid;\n    border-width:2px;\n    border-color:coral;\n}\n"]
        }),
        __metadata("design:paramtypes", [])
    ], SurveyComponent);
    return SurveyComponent;
}());
exports.SurveyComponent = SurveyComponent;
//# sourceMappingURL=survey.component.js.map