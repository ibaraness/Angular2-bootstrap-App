import { StoriesPageComponent } from "app/pages/stories-page/stories-page.component";
import { Routes, RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";

const routes: Routes = [
    {path:'', component: StoriesPageComponent}
];

export const routing:ModuleWithProviders = RouterModule.forChild(routes);