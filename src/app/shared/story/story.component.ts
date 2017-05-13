import { Component, OnInit, Input } from '@angular/core';

export interface IStoryTeaser {
  id: number;
  title: string;
  content: string;
  imageURL: string;
}

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.scss']
})
export class StoryComponent implements OnInit {

  @Input() private story: IStoryTeaser = {
    id:1,
    title:'Buiding Bootstrap site in a weekend',
    content:'Today story talks about blah... blah...',
    imageURL:'/assets/images/img3.jpg'
  }

  constructor() { }

  ngOnInit() {
  }

}
