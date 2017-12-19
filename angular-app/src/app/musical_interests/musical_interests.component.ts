import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'musical_interest',
  templateUrl: './musical_interests.component.html',
  providers: []
})

export class MusicalInterestsComponent implements OnInit {
  public artists: any;

  constructor() {}

  ngOnInit() {
    this.artists = [
      { name: "Radiohead", initial_count: 250 }, 
      { name: "The Killers", initial_count: 999 }, 
      { name: "Cage The Elephant", initial_count: 500 }, 
      { name: "Modest Mouse", initial_count: 150 }, 
    ];
  }
}
