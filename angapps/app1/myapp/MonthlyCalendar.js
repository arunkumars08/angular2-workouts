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
var MonthCalendarComponent = (function () {
    function MonthCalendarComponent() {
        this.showButtons = true;
        this.yearChange = new core_1.EventEmitter();
        var current = new Date();
        this.month = current.getMonth() + 1;
        this.year = current.getFullYear();
        this.createCalendar();
    }
    MonthCalendarComponent.prototype.ngOnChanges = function (changes) {
        for (var propName in changes) {
            if (propName === "year") {
                this.createCalendar();
            }
        }
    };
    MonthCalendarComponent.prototype.getDayNames = function () {
        return MonthCalendarComponent.dayNames;
    };
    MonthCalendarComponent.prototype.next = function () {
        if (this.month === 12) {
            this.month = 1;
            this.year++;
            this.yearChange.emit(this.year);
        }
        else
            this.month++;
        this.createCalendar();
    };
    MonthCalendarComponent.prototype.previous = function () {
        if (this.month === 1) {
            this.month = 12;
            this.year--;
            this.yearChange.emit(this.year);
        }
        else
            this.month--;
        this.createCalendar();
    };
    MonthCalendarComponent.prototype.createCalendar = function () {
        this.monthName = MonthCalendarComponent.monthNames[this.month - 1];
        var firstDayOfMonth = new Date(this.year, this.month - 1, 1).getDay();
        var daysInMonth = new Date(this.year, this.month, 0).getDate();
        this.dates = new Array(42); // each location contains undefined value
        for (var i = firstDayOfMonth, day = 1; day <= daysInMonth; i++, day++) {
            this.dates[i] = day;
        }
    };
    MonthCalendarComponent.monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    MonthCalendarComponent.dayNames = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], MonthCalendarComponent.prototype, "showButtons", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], MonthCalendarComponent.prototype, "month", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], MonthCalendarComponent.prototype, "year", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], MonthCalendarComponent.prototype, "yearChange", void 0);
    MonthCalendarComponent = __decorate([
        core_1.Component({
            template: "\n<div class=\"calendar\">\n\t<div class=\"header\">\n\t{{year}} - {{monthName}} \n\t<img src=\"rightarrow.png\" style=\"width:30px;float:right;position:relative;top:10px;\" (click)=\"next()\" *ngIf=\"showButtons\" />\n\t<img src=\"leftarrow.png\" style=\"width:30px;float:right;position:relative;top:10px;\" (click)=\"previous()\" *ngIf=\"showButtons\" />\n\t</div>\n\t<div class=\"date\" *ngFor=\"let name of getDayNames()\">{{name}}</div>\n\t<div *ngFor=\"let date of dates\" class=\"date\" [class.nodate]=\"date===Nan\">{{date}}</div>\n</div>\n",
            styles: [
                "\n.nodate { \n\tbackground-color: darkgreen;\n}\n.header {\n\tline-height: 50px;\n\tvertical-align: middle;\n}\n.calendar {\n\twidth: 350px;\n\theight: 400px;\n\tbackground-color: green;\n\tcolor: white;\n\tfont-size: 12pt;\n\tfont-family: Arial;\n\tdisplay: inline-block;\n\tmargin: 10px;\n}\t\n.date {\n\twidth: 50px;\n\theight: 50px;\n\ttext-align: center;\n\tvertical-align: middle;\n\tline-height: 50px;\n\tfloat: left;\n}\n"],
            selector: "month-calendar"
        }), 
        __metadata('design:paramtypes', [])
    ], MonthCalendarComponent);
    return MonthCalendarComponent;
}());
exports.MonthCalendarComponent = MonthCalendarComponent;
// import { Component } from "@angular/core";
// @Component( {
// 	template : 
// `
// <div class="calendar">
// 	<div class="year">
// 	{{year}} - {{monthName}} 
// 	<img src="Arrowhead-Right.png" style="width:30px;float:right;position:relative;vertical-align:middle;top:15px;left:-10px;" (click)="next()"/> 
// 	<img src="Arrowhead-Left.png" style="width:30px;float:right;position:relative;vertical-align:middle;top:15px;left:-10px" (click)="previous()"/> 
// 	</div>
// 	<div class="date" *ngFor="let name of getDayNames()" >{{name}}</div>
// 	<div *ngFor="let date of dates" class="date" [class.nodate]="!date">{{date}}</div>
// </div>
// `,
// 	styleUrls : [ "myapp/monthcalendar.css" ],	
// 	selector : "monthcalendar"
// } )
// export class MonthCalendarComponent {
// 	static monthNames : Array<string> = ["January", "February", "March", "April", "May", "June",  "July", "August", "September", "October", "November", "December"];
// 	static dayNames : Array<string> = [ 'Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'] ;
// 	private getDayNames() {
// 		return MonthCalendarComponent.dayNames;
// 	}
// 	month: number;
// 	monthName : string ; 
// 	year : number ; 
// 	constructor() {
// 		var current = new Date();
// 		this.year = current.getFullYear() ;
// 		this.month = current.getMonth()+1;
// 		this.createCalendar() ;
// 	}
// 	previous() : void {
// 		this.month--;
// 		this.createCalendar();
// 	}
// 	next() : void {
// 		this.month++;
// 		this.createCalendar();
// 	}
// 	private dates : Array<number> ; // Instance Data Member
// 	private createCalendar(/* this */) : void {
// 		this.monthName = MonthCalendarComponent.monthNames[this.month-1];
//     	var firstDayOfMonth = new Date(this.year, this.month-1, 1).getDay();
//     	var daysInMonth = new Date(this.year, this.month, 0).getDate();
// 		this.dates = new Array(42); // each location contains undefined value
//     	for (var i = firstDayOfMonth, day = 1 ; day <= daysInMonth ; i++, day++) {
//         	this.dates[i] = day;
// 		}
// 	}
// } 
//# sourceMappingURL=MonthlyCalendar.js.map