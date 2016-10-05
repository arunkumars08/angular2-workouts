import { Component } from "@angular/core";

@Component(
    {
        selector: "book",
        template: "<button (click)='getBookAsync()'>Get Book</button>"
    }
)
class BookComponent {
    getBookAsync() {
        var xhr = new XMLHttpRequest() ;
        xhr.open("get", "/book", true);
        xhr.onload = function() {
            if (xhr.status === 200) {
                alert (xhr.responseText);
            }
        };
        xhr.send();
    }
}
//-----------------------------------------
@Component(
    {
        selector: "main",
        template: "<book></book>"
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
        declarations : [MainComponent, BookComponent],
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