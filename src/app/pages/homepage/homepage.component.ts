import { Component, OnInit } from '@angular/core';
import { IStoryTeaser } from "app/shared/story/story.component";
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
  private stories: IStoryTeaser[] = STORIES;
  private products: IProduct[] = PRODUCTS;
  private otherStories:IStoryTeaser[] = OTHER_STORIES;

  constructor() { }

  ngOnInit() {
  }

}
