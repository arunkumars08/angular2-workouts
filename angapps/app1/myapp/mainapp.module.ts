import {NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {MonthCalendarComponent} from './MonthlyCalendar';
import {YearCalendarComponent} from './yearcalendar';

@NgModule({
    imports: [BrowserModule, FormsModule],
    declarations: [ MonthCalendarComponent, YearCalendarComponent ],
    bootstrap: [ YearCalendarComponent ]
})
export class MainAppModule {

}