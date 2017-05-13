import { Injectable } from '@angular/core';
import { IStory } from "app/shared/story/story.component";
import { PRODUCTS, STORIES, OTHER_STORIES } from "app/data/fake-data";
import { Observable } from "rxjs/Observable";


/**
 * Story data manger
 */
@Injectable()
export class StoryDataService {

  /**
   * Add our fake-data stories list to our 'New Topics' section
   */
  private stories: IStory[] = STORIES;
  
  constructor() { }

  /**
   * Simulate loading data from server by returning an Observable.
   */
  public getStory(id:string):Observable<IStory> {
    return new Observable<IStory>(observer => {
      const story = this.stories.find(story => (story.id === parseInt(id)));
      if(story){
        observer.next(story);
      } else {
        //TODO: Navigate to story not found
      }
      
    });
  }
}
