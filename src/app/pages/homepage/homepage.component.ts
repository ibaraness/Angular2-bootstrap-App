import { Component, OnInit } from '@angular/core';
import { IStory } from "app/shared/story/story.component";
import { IProduct } from "app/shared/product/product.component";
import { STORIES, PRODUCTS, OTHER_STORIES } from "app/data/fake-data";

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  /**
   * Add our fake-data stories list to our 'New Topics' section
   */
  private stories: IStory[] = STORIES.slice(0,3);
  private products: IProduct[] = PRODUCTS;
  private otherStories:IStory[] = STORIES.slice(3);

  constructor() { }

  ngOnInit() {
  }

}
