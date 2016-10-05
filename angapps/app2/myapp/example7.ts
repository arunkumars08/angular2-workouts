import { Component} from "@angular/core";


export class Hero {
  constructor(
    public id: number,
    public name: string,
    public power: string,
    public alterEgo?: string
  ) {  }
}

let myHero =  new Hero(42, 'SkyDog',
                       'Fetch any object at any distance',
                       'Leslie Rollover');
console.log('My hero is called ' + myHero.name); // "My hero is called SkyDog"

@Component({
  moduleId: module.id,
  selector: 'hero-form',
  templateUrl: 'hero-form.component.html'
})
export class HeroFormComponent {
  private powers : Array<string> = ['Really Smart', 'Super Flexible','Super Hot', 'Weather Changer'];
  private model : Hero = new Hero(18, '', this.powers[1], 'Chuck Overstreet');
  private submitted : boolean = false;

  onSubmit() : void { this.submitted = true; }

//   newHero() {
//     this.model = new Hero(42, '', '');
//     }

  private active : boolean = true;

  newHero() : void {
    this.model = new Hero(42, '', '');
    this.active = false;
    setTimeout(() => this.active = true, 0);
  }


  
  get diagnostic() : any { return JSON.stringify(this.model); }
}




//-------------------------------------------
@Component(
    {
        selector: "main",
        template: '<hero-form></hero-form>'
    }
)
class MainComponent {

    
}
//------------------------------------------
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule }   from '@angular/forms';
@NgModule(
    {
        imports : [BrowserModule, FormsModule],
        declarations : [MainComponent, HeroFormComponent],
        bootstrap : [MainComponent]
    }
)
class Example7Module {
}
//--------------------------------------------
// Bootstrap Module
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
const platform = platformBrowserDynamic();
platform.bootstrapModule(Example7Module);