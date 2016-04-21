import {Component} from 'angular2/core';


export class Hero {
  id: Number;
  name: string;
}


@Component({
    selector: 'my-app',
    template:
    `<h1>Angular 2 {{title}} </h1>
     <h2>{{hero.name}} Details!</h2>
     <div>
       <label>id: </label>{{hero.id}}
     </div>
     <div>
       <label>name: </label>
       <input [(ngModel)]="hero.name" placeholder="name"/>
     </div>`
})
export class AppComponent {
  title = "Heroes for Days";
  hero: Hero = {
    id: 1,
    name: "Flash"
  };
}
