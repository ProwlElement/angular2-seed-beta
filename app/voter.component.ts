import {Component, Input, Output, EventEmitter} from 'angular2/core';

@Component({
    selector: 'voter',
    template: `
        <div class="voter-container">
            <span 
                class="glyphicon glyphicon-menu-up vote-button"
                [class.highlighted]="myVote == 1"
                (click)="upVote();"> 
            </span>
            <span class="vote-count">{{ voteCount + myVote }}</span>
            <span 
                class="glyphicon glyphicon-menu-down vote-button"
                [class.highlighted]="myVote == -1"
                (click)="downVote();">
            </span>
        </div>
    `,
    styles: [`
        .voter-container{
            margin-top:50px;
            text-align: center;
            width: 20px;
            color: #999;
        }

        .vote-button{
            cursor: pointer;
        }

        .vote-count{
            font-size: 13px;
        }

        .highlighted{
            font-weight: bold;
            color: orange;
        }

    `]

})

export class VoterComponent{

    @Input() voteCount = 10;
    @Input() myVote = 0;
    @Output() vote = new EventEmitter();

    upVote(){
        if (this.myVote == 1)
            return;
        
        this.myVote++;
        this.vote.emit({ myVote: this.myVote })

    }

    downVote(){
        if (this.myVote == -1)
            return;

        this.myVote--;
        this.vote.emit({ myVote: this.myVote })
    }
}