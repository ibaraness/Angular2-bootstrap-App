import { Injectable } from '@angular/core';
import { StoryDataService } from "app/shared/story-data/story-data.service";
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";

@Injectable()
export class StoriesResolveService implements Resolve<any>{
  
  constructor(private storyService: StoryDataService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    /**
     * Ensure the router will continue after the first change emit, 
     * and won't wait for the observable to close.
     */
    return this.storyService.getAll().first();
  }

  

}
