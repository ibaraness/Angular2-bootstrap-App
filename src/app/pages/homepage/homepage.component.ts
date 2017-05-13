import { Component, OnInit } from '@angular/core';
import { IStoryTeaser } from "app/shared/story/story.component";
import { IProduct } from "app/shared/product/product.component";
import { STORIES, PRODUCTS } from "app/data/fake-data";

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  private stories: IStoryTeaser[] = STORIES;
  private products: IProduct[] = PRODUCTS;

  constructor() { }

  ngOnInit() {
  }

}
