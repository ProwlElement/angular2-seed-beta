import {Component} from 'angular2/core';
import {VoterComponent} from './voter.component';
import {TweetComponent} from './tweet.component'


@Component({
    selector: 'my-app',
    template: `
        <voter 
            [voteCount]="post.voteCount" 
            [myVote]="post.myVote"
            (vote)="onVote($event)">
        </voter>
        <tweet> </tweet>
    `,
    directives: [VoterComponent, TweetComponent]
})

export class AppComponent {

    post = { 
        voteCount: 10,
        myVote: 0,
    };

    onVote($event){
        console.log($event);
    }

}