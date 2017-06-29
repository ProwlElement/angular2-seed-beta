import {Component} from 'angular2/core';
//import {CoursesComponent} from './courses.component'

@Component({
    selector: 'my-app',
    //template: '<h1>Prowl Angular 2 App</h1><courses></courses>',
    template: `
        <div (click)="onDivClick()">
            <button (click)="onClick($event)">Submit</button>
        </div>
        `
    //directives: [CoursesComponent]
})

export class AppComponent { 

    onDivClick(){
        console.log("handled by Div!");
    }
    onClick($event){
        $event.stopPropagation();
        console.log("clicked!", $event);
    }
}