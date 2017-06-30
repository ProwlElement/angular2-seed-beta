import {Component} from 'angular2/core';
import {FavoriteComponent} from './favorite.component'

@Component({
    selector: 'my-app',
    template: `
        <favorite [isActive]="post.isActive"> </favorite>
        
    `,
    directives: [FavoriteComponent]
})

export class AppComponent {

    post = { 
        title: "Post",
        isActive: true
    }

}