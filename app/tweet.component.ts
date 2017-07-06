import {Component} from 'angular2/core';
import {TweetService} from './tweet.service'

@Component({
    selector: 'tweet',
    template: `

        <div class="media" *ngFor="#tweet of tweets">
            <div class="media-left">
                <a href="#">
                <img class="media-object" src="http://lorempixel.com/100/100/people?1" alt="...">
                </a>
            </div>
            <div class="media-body">
                <h4 class="media-heading">Media heading</h4>
                {{tweet}}
            </div>
        </div>
    `,
    providers: [TweetService]
})

export class TweetComponent {

    tweets;

    constructor(tweetService : TweetService){
        this.tweets = tweetService.getTweets();
    }
    
}

