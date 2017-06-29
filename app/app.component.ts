import {Component, Input} from 'angular2/core';
import {FavoriteComponent} from './favorite.component'

@Component({
    selector: 'my-app',
    template: `
        <favorite 
            [isActive]="post.isActive" 
            (change)="onFavoriteChange($event)"> 
        </favorite>
        
    `,
    
    directives: [FavoriteComponent]

})

export class AppComponent {

    post = { 
        title: "Post",
        isActive: true
    }

    onFavoriteChange($event){
        console.log($event);
        
    }

}