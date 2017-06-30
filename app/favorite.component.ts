import {Component, Input, Output, EventEmitter} from 'angular2/core';
//import {CoursesComponent} from './courses.component'

@Component({
    selector: 'favorite',
    templateUrl: 'app/favorite.template.html',
    styles: [` 
        .glyphicon{
            cursor: pointer;
        }
        .grey-heart{
            color: #ccc;  
        }
        .pink-heart{
            color:deeppink;
        }
    `]
    
})

export class FavoriteComponent { 

    likes = 10;
    @Input() isActive = true;
    @Output() change = new EventEmitter();

    onClick(){
        // like += true plus 1 else minus 1
        this.likes += this.isActive ? 1 : -1;

        // switch true / false values with click
        this.isActive = !this.isActive;
        
        //console.log(this.isActive);
        
    }
    
   
    
}