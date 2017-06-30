import {Component, Input} from 'angular2/core';
//import {CoursesComponent} from './courses.component'

@Component({
    selector: 'favorite',
<<<<<<< Updated upstream
    template: `
        <span class="glyphicon"
            [class.glyphicon-star]="isActive"
            [class.glyphicon-star-empty]="!isActive"
            (click)="onClick();"> 
        </span>
    `//,
    //inputs: ['isActive']
=======
    templateUrl: 'app/favorite.template.html',
    styles: [` 
        span.glyphicon{
            margin:50px;
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
        // if you click it equals the opposite
        this.isActive = !this.isActive;
        this.likes += !this.isActive ? 1: -1;

        //console.log(this.isActive);
>>>>>>> Stashed changes
        
    }
    
   
    
}