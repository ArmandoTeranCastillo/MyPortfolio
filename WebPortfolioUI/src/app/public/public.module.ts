import { NgModule } from "@angular/core";
import { SharedModule } from "../core/shared/shared.module";
import { ProjectsComponent } from "./home/containers/projects/projects.component";
import { HomeRoutingModule } from "./home/containers/home/home-routing.module";
import { HomeComponent } from "./home/containers/home/home.component";
import { PublicRoutingModule } from "./public-routing.module";
import { PublicComponent } from "./public.component";


@NgModule({
    imports: [
        PublicRoutingModule,
        HomeRoutingModule,
        SharedModule,   
    ],
    declarations: [
        PublicComponent,
        HomeComponent,
        ProjectsComponent
    ],
    exports: [],
    
    providers: []
})
export class PublicModule { 
    constructor() {}
}