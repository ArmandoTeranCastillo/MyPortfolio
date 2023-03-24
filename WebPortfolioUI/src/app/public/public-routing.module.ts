import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { NotFoundComponent } from "../core/shared/components/not-found.component";
import { ProjectsComponent } from "./home/containers/projects/projects.component";
import { HomeComponent } from "./home/containers/home/home.component";
import { PublicComponent } from "./public.component";


const routes: Routes = [
    {
        path: '',
        component: PublicComponent,
        children: [
            {path: '', redirectTo: 'home', pathMatch: 'full'},
            {path: 'home', component: HomeComponent},
            {path: 'projects', component: ProjectsComponent},
            {path: '**', component: NotFoundComponent}
        ]
    }
    
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PublicRoutingModule { }