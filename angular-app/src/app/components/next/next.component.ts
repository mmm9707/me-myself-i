import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'next',
  templateUrl: './next.component.html',
  providers: []
})

export class NextComponent implements OnInit {
  public message: any;
  public counter: any;

  @Input() initial_count: any;
  
  constructor() {}

  ngOnInit() {
    console.log(this.initial_count);
    this.counter = parseInt(this.initial_count);
    this.update_message();
  }

  upvote() {
    this.counter = this.counter + 1;
    this.update_message();
  }

  downvote() {
    this.counter = this.counter - 1; 
    this.update_message();
  }

    update_message() {
      if (this.counter > 10) {
        this.message = `Good Music  (${this.counter})`;
      } else if (this.counter < 0) {
        this.message = `Wack Music  (${this.counter})`;
      } else  {
        this.message = `Ight Music  (${this.counter})`;
      }
    }
}
