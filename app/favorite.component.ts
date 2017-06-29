import {Component, Input} from 'angular2/core';
//import {CoursesComponent} from './courses.component'

@Component({
    selector: 'favorite',
    template: `
        <span class="glyphicon"
            [class.glyphicon-star]="isActive"
            [class.glyphicon-star-empty]="!isActive"
            (click)="onClick();"> 
        </span>
    `//,
    //inputs: ['isActive']
})

export class FavoriteComponent { 
    //isActive = false;
    @Input() isActive = false;

    onClick(){
        // if you click it equals the opposite
        this.isActive = !this.isActive;
        console.log(this.isActive);
        
    }
    
   
    
}