import {Component, Input, Output, EventEmitter} from 'angular2/core';
//import {CoursesComponent} from './courses.component'

@Component({
    selector: 'favorite',
    templateUrl: 'app/favorite.template.html',
    styles: [` 
        span.glyphicon{
            margin:50px;
        }
    
    `]
        
    //,
    //inputs: ['isActive'],
    //outputs: ['change']
})

export class FavoriteComponent { 
    //isActive = false;
    @Input() isActive = false;

    @Output() change = new EventEmitter();

    onClick(){
        // if you click it equals the opposite
        this.isActive = !this.isActive;
        this.change.emit({ newValue: this.isActive });
        //console.log(this.isActive);
        
    }
    
   
    
}