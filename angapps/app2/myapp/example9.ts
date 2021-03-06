import { Component, OnInit, Injectable } from "@angular/core";

class Book {
    constructor ( public title : string,  public author : string ) { }
}

@Injectable()
class TimeoutBookService {
    // simulation of getting data from server
    getBookAsync( callback ) : void  {        
        setTimeout ( () => {   callback ( new Book("T1", "A1") );   }, 4000 );
    }
}

@Injectable()
class XHRBookService {
    getBookAsync( callback ) : void  {
       var xhr = new XMLHttpRequest();
       xhr.open ( "get", "/book", true);
       xhr.onload = function() {
            if ( xhr.status === 200) {
                callback (  JSON.parse(xhr.responseText) );
            }
       };
       xhr.send();
    }
}

@Component(
    {
        selector: "book",
        template: "{{book.title}} - {{book.author}}"
    }
)
class BookComponent implements OnInit { 

    constructor(public tms : TimeoutBookService) { } 

    private book : Book  = new Book("", "") ; 

    ngOnInit() {
       this.tms.getBookAsync ( (bk) => { this.book = bk ; } ) ;
    }

}


//------------------------------------------------------------
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
        declarations : [MainComponent, BookComponent ],
        providers : [ TimeoutBookService ],
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