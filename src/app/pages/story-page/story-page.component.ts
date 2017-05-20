import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from "@angular/router/";
import { StoryDataService } from "app/shared/services/story-data/story-data.service";
import { IStory } from "app/shared/models/models";

/**
 * Stateless story page component.
 * It gets all it's data (IStory object) from ActivatedRoute data.
 */
@Component({
  selector: 'app-story-page',
  templateUrl: './story-page.component.html',
  styleUrls: ['./story-page.component.scss'],
})
export class StoryPageComponent implements OnInit {

  private story: IStory;
  private otherStories: IStory[];
  
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private storyService: StoryDataService) { }

  ngOnInit() {
    /**
     * Grab IStory object from resolve
     */
    this.route.data.forEach(data => {
      this.story = data['story'];
      
      /**
       * Get other three stories
       */
      this.setOtherStories();
    });
  }

  /**
   * Get first 3 stories that are different from the current
   */
  private setOtherStories(){
    this.storyService.getAll().subscribe(data => {
      let _otherStories = data.filter(story => (story.id !== this.story.id));
      if(_otherStories.length > 3){
        this.otherStories = _otherStories.slice(0,3);
      }else {
        this.otherStories = _otherStories;
      }
    });
  }

}
