import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router/";
import { IStory } from "app/shared/story/story.component";

/**
 * Stateless story page component.
 * It gets all it's data (IStory object) from ActivatedRoute data.
 */
@Component({
  selector: 'app-story-page',
  templateUrl: './story-page.component.html',
  styleUrls: ['./story-page.component.scss']
})
export class StoryPageComponent implements OnInit {

  private story: IStory;
  
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    /**
     * Grab IStory object from resolve
     */
    this.story = this.route.snapshot.data['story'];
  }

}
