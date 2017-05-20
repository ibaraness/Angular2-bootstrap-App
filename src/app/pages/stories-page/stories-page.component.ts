import { Component, OnInit, Input } from '@angular/core';
import { IStory } from "app/shared/models/models";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-stories-page',
  templateUrl: './stories-page.component.html',
  styleUrls: ['./stories-page.component.scss']
})
export class StoriesPageComponent implements OnInit {

  private stories: IStory[];

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    /**
     * Grab IStory array of objects from resolve
     */
    this.route.data.forEach(data => {
      this.stories = data['stories'];
    });
  }

}
