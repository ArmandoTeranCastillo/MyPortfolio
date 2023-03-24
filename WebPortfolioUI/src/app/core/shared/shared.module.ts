import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { NotFoundComponent } from "./components/not-found.component";



@NgModule({
    imports: [
        CommonModule,
        RouterModule
    ],
    declarations: [
        NotFoundComponent
    ],
    exports: [
        CommonModule,
        RouterModule
    ],
    providers: []
})
export class SharedModule { 
    constructor() {}
}