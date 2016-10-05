import {Component} from "@angular/core";

@Component(
    {
        selector:"year",
        template:`
        <input type="text" [(ngModel)]="yr"/>
        <hr />
        <month-calendar *ngFor="let month of months" [(year)]="yr" [month]="month" [showButtons]="false"></month-calendar>
        `
    }
)
export class YearCalendarComponent{
    private yr: number =2017;

    private months : Array<number> = [1, 2, 3 ,4 ,5, 6, 7, 8, 9, 10, 11, 12];
} 