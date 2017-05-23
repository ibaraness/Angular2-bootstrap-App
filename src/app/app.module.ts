import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { ProductComponent } from './shared/segments/product/product.component';
import { StoryComponent } from './shared/segments/story/story.component';
import { TeaserComponent } from './shared/segments/teaser/teaser.component';
import { StoryPageComponent } from './pages/story-page/story-page.component';
import { RoutingModule } from "app/core/routing/routing.module";
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { StoryDataService } from "app/shared/services/story-data/story-data.service";
import { StoryResolveService } from "app/shared/services/story-resolve/story-resolve.service";
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { ProductDataService } from "app/shared/services/product-data/product-data.service";
import { ProductResolveService } from "app/shared/services/product-resolve/product-resolve.service";
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ReviewComponent } from './shared/segments/review/review.component';
import { ReviewsService } from "app/shared/services/reviews-service/reviews.service";
import { ReviewStarsComponent } from './shared/segments/review-stars/review-stars.component';
import { StoriesPageComponent } from './pages/stories-page/stories-page.component';
import { StoriesResolveService } from "app/shared/services/stories-resolve/stories-resolve.service";
import { SharedModule } from "app/shared/shared/shared.module";


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    // ProductComponent,
    // StoryComponent,
    // TeaserComponent,
    StoryPageComponent,
    PageNotFoundComponent,
    ProductPageComponent,
    HeaderComponent,
    FooterComponent,
    // ReviewComponent,
    // ReviewStarsComponent,
    //StoriesPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RoutingModule,
    BrowserAnimationsModule,
    SharedModule
  ],
  providers: [
    StoryDataService,
    StoryResolveService,
    ProductDataService,
    ProductResolveService,
    ReviewsService,
    StoriesResolveService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
