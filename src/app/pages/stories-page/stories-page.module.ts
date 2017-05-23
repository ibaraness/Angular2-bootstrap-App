import { NgModule } from "@angular/core";
import { routing } from "app/pages/stories-page/stories-page-routing.module";
import { StoriesPageComponent } from "app/pages/stories-page/stories-page.component";
import { SharedModule } from "app/shared/shared/shared.module";
import { CommonModule } from "@angular/common";

@NgModule({
    imports:[routing, CommonModule, SharedModule],
    declarations:[StoriesPageComponent]
})
export class StoriesPageModule {

}