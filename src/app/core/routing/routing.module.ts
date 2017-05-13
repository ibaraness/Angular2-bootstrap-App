import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from "app/pages/homepage/homepage.component";
import { StoryPageComponent } from "app/pages/story-page/story-page.component";
import { PageNotFoundComponent } from "app/pages/page-not-found/page-not-found.component";

const appRoutes: Routes = [
  { path:'', redirectTo: '/homepage', pathMatch: 'full'},
  { path: 'homepage', component: HomepageComponent },
  { path: 'story/:id', component: StoryPageComponent },
  { path: '**', component: PageNotFoundComponent }
]

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class RoutingModule { }
