import { Component, Input, OnInit, EventEmitter, Output } from "@angular/core";

@Component(
    {
        moduleId: module.id,
        selector: "calendar",
        templateUrl: 'calendar.html',
        styleUrls: ['calendar.css']
    }
)
class CalendarComponent{
    
}
//-------------------------------------------
import {ViewChild, ElementRef} from "@angular/core";
@Component(
    {
        selector: "main",
        template: '<calendar></calendar>'
    }
)
class MainComponent {

    
}
//------------------------------------------
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
@NgModule(
    {
        imports : [BrowserModule ],
        declarations : [MainComponent, CalendarComponent],
        bootstrap : [MainComponent]
    }
)
class Example1Module {
}
//--------------------------------------------
// Bootstrap Module
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
const platform = platformBrowserDynamic();
platform.bootstrapModule(Example1Module);