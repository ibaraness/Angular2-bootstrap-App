import { Component, OnInit, Input } from '@angular/core';
import { IStory } from "app/shared/models/models";

@Component({
  selector: 'app-teaser',
  templateUrl: './teaser.component.html',
  styleUrls: ['./teaser.component.scss']
})
export class TeaserComponent implements OnInit {

  @Input('story') private story: IStory;
  constructor() { }

  ngOnInit() {
  }

}
