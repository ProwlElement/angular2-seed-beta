import {Component} from 'angular2/core';
//import {CoursesComponent} from './courses.component'

@Component({
    selector: 'my-app',
    template: `
        <span class="glyphicon"
            [class.glyphicon-star]="isActive"
            [class.glyphicon-star-empty]="!isActive"
            (click)="onClick();"> 
        </span>
        
    `
})

export class AppComponent { 

    
    isActive = true;
    onClick(){
        // if you click it equals the opposite
        this.isActive = !this.isActive;
    }
    
   
    
}