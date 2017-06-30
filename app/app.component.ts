import {Component} from 'angular2/core';
import {FavoriteComponent} from './favorite.component'

@Component({
    selector: 'my-app',
    template: `
        <favorite class="fav-container" [isActive]="post.isActive"> </favorite>
        
    `,
    styles: [` 
        .fav-container{
            margin:50px;
            display:inline;
        }
    `],
    directives: [FavoriteComponent]
})

export class AppComponent {

    post = { 
        title: "Post",
        isActive: true
    }

}