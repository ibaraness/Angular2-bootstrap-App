import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from "app/pages/homepage/homepage.component";
import { StoryPageComponent } from "app/pages/story-page/story-page.component";
import { PageNotFoundComponent } from "app/pages/page-not-found/page-not-found.component";
import { StoryResolveService } from "app/shared/services/story-resolve/story-resolve.service";
import { ProductPageComponent } from "app/pages/product-page/product-page.component";
import { ProductResolveService } from "app/shared/services/product-resolve/product-resolve.service";
import { StoriesPageComponent } from "app/pages/stories-page/stories-page.component";
import { StoriesResolveService } from "app/shared/services/stories-resolve/stories-resolve.service";

const appRoutes: Routes = [
  { path:'', redirectTo: '/homepage', pathMatch: 'full'},
  { path: 'homepage', component: HomepageComponent },
  { 
    path: 'story/:id', 
    component: StoryPageComponent,
    resolve:{ //...Show the page only when data is available 
      story: StoryResolveService
    } 
  },
  {
    path: 'stories',
    component: StoriesPageComponent,
    resolve:{ //...Show the page only when data is available
      stories: StoriesResolveService
    }
  },
  { 
    path: 'product/:id', 
    component: ProductPageComponent,
    resolve:{ //...Show the page only when data is available 
      product: ProductResolveService
    } 
  },
  { path: '**', component: PageNotFoundComponent }
]

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class RoutingModule { }
