import { Injectable } from '@angular/core';
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from "@angular/router";
import { StoryDataService } from "app/shared/story-data/story-data.service";
import 'rxjs/add/operator/first'

/**
 * Returns an IStory object using the 'id' param of the route
 */
@Injectable()
export class StoryResolveService implements Resolve<any> {
  
  constructor(private storyService: StoryDataService) { }

  resolve(route: ActivatedRouteSnapshot) {

    /**
     * Ensure the router will continue after the first change emit, 
     * and won't wait for the observable to close.
     */
    return this.storyService.getStory(route.paramMap.get('id')).first();
  }
}
