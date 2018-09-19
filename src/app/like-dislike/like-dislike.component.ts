import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-like-dislike',
  templateUrl: './like-dislike.component.html',
  styleUrls: ['./like-dislike.component.css']
})
export class LikeDislikeComponent  {
  @Input() numberOfLikes : number;
  
  @Output()
  change: EventEmitter<number> = new EventEmitter<number>();

  likeClick() {
    this.numberOfLikes++;
    this.change.emit(this.numberOfLikes);
  }

  dislikeClick() {
    this.numberOfLikes--;
    this.change.emit(this.numberOfLikes);
  }
}
