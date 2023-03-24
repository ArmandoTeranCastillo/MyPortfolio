import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { NotFoundComponent } from "src/app/core/shared/components/not-found.component";
import { ProjectsComponent } from "../components/projects/projects.component";
import { HomeComponent } from "./home.component";


const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent,
        children: [
            {path: '', redirectTo: 'projects', pathMatch: 'full'},
            {path: 'projects', component: ProjectsComponent},
            {path: '**', component: NotFoundComponent}
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HomeRoutingModule { }