import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from "app/shared/segments/product/product.component";
import { StoryComponent } from "app/shared/segments/story/story.component";
import { TeaserComponent } from "app/shared/segments/teaser/teaser.component";
import { RouterModule } from "@angular/router";
import { ReviewComponent } from "app/shared/segments/review/review.component";
import { ReviewStarsComponent } from "app/shared/segments/review-stars/review-stars.component";

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    ProductComponent,
    StoryComponent,
    TeaserComponent,
    ReviewComponent,
    ReviewStarsComponent
  ],
  exports:[
    ProductComponent,
    StoryComponent,
    TeaserComponent,
    ReviewComponent,
    ReviewStarsComponent
  ]
})
export class SharedModule { }
