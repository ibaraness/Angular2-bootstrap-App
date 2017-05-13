import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { ProductComponent } from './shared/product/product.component';
import { StoryComponent } from './shared/story/story.component';
import { TeaserComponent } from './shared/teaser/teaser.component';
import { StoryPageComponent } from './pages/story-page/story-page.component';
import { RoutingModule } from "app/core/routing/routing.module";
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    ProductComponent,
    StoryComponent,
    TeaserComponent,
    StoryPageComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
