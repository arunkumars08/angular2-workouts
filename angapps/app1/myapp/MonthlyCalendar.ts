import { Component, Input, OnChanges, SimpleChange, Output, EventEmitter } from "@angular/core";

@Component( {
	template : 
`
<div class="calendar">
	<div class="header">
	{{year}} - {{monthName}} 
	<img src="rightarrow.png" style="width:30px;float:right;position:relative;top:10px;" (click)="next()" *ngIf="showButtons" />
	<img src="leftarrow.png" style="width:30px;float:right;position:relative;top:10px;" (click)="previous()" *ngIf="showButtons" />
	</div>
	<div class="date" *ngFor="let name of getDayNames()">{{name}}</div>
	<div *ngFor="let date of dates" class="date" [class.nodate]="date===Nan">{{date}}</div>
</div>
`,
	styles : [ 
`
.nodate { 
	background-color: darkgreen;
}
.header {
	line-height: 50px;
	vertical-align: middle;
}
.calendar {
	width: 350px;
	height: 400px;
	background-color: green;
	color: white;
	font-size: 12pt;
	font-family: Arial;
	display: inline-block;
	margin: 10px;
}	
.date {
	width: 50px;
	height: 50px;
	text-align: center;
	vertical-align: middle;
	line-height: 50px;
	float: left;
}
` ],	
	selector : "month-calendar"
} )
export class MonthCalendarComponent implements OnChanges {

   ngOnChanges(changes: { [propertyName: string]: SimpleChange }) {
        for (let propName in changes) {
            if (propName === "year") {
                this.createCalendar();
            }
        }
    }

    @Input()
    private showButtons : boolean = true;

	@Input()
	private month : number ;
	
	@Input()
	private year : number ;

	@Output()
    private yearChange: EventEmitter<number> = new EventEmitter();


	private monthName : string;

	constructor() {
		var current = new Date();
		this.month = current.getMonth() + 1;
		this.year = current.getFullYear() ;

		this.createCalendar() ;
	}

	private dates : Array<number> ; // Instance Data Member

	private static monthNames : Array<string> = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
 	private static dayNames : Array<string> = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

	 private getDayNames() {
		return MonthCalendarComponent.dayNames;
	 }

	private next() : void {
		if ( this.month === 12) {
			this.month = 1;
			this.year++;

			this.yearChange.emit(this.year);
		} else 
			this.month++;

		this.createCalendar();
	}

	private previous(): void {
		if ( this.month === 1) {
			this.month = 12;
			this.year--;

			this.yearChange.emit(this.year);
		} else 
			this.month--;

		this.createCalendar();			
	}

	private createCalendar(/* this */) : void {
		this.monthName = MonthCalendarComponent.monthNames[this.month-1];

		var firstDayOfMonth = new Date(this.year,this.month-1, 1).getDay();
		var daysInMonth = new Date(this.year,this.month, 0).getDate();
    		
		this.dates = new Array(42); // each location contains undefined value
		for (var i = firstDayOfMonth, day = 1 ; day <= daysInMonth ; i++, day++) {
			this.dates[i] = day;
		}
	}

}




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