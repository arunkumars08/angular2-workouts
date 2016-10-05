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
var CalendarComponent = (function () {
    function CalendarComponent() {
    }
    CalendarComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: "calendar",
            templateUrl: 'calendar.html',
            styleUrls: ['calendar.css']
        }), 
        __metadata('design:paramtypes', [])
    ], CalendarComponent);
    return CalendarComponent;
}());
var MainComponent = (function () {
    function MainComponent() {
    }
    MainComponent = __decorate([
        core_1.Component({
            selector: "main",
            template: '<calendar></calendar>'
        }), 
        __metadata('design:paramtypes', [])
    ], MainComponent);
    return MainComponent;
}());
//------------------------------------------
var core_2 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var Example1Module = (function () {
    function Example1Module() {
    }
    Example1Module = __decorate([
        core_2.NgModule({
            imports: [platform_browser_1.BrowserModule],
            declarations: [MainComponent, CalendarComponent],
            bootstrap: [MainComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], Example1Module);
    return Example1Module;
}());
//--------------------------------------------
// Bootstrap Module
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var platform = platform_browser_dynamic_1.platformBrowserDynamic();
platform.bootstrapModule(Example1Module);
//# sourceMappingURL=example6.js.map