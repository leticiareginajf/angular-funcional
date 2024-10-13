import { NgModule } from "@angular/core";
import { AngularMaterialModule } from "../angular-material/angular-material.module";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";

@NgModule({
    /*declarations: [
        //TESTANDO DECLARACAO
    ],*/
    imports: [
        //AngularMaterialModule
        MatButtonModule,
        MatIconModule
    ],
    exports: [
        //TESTANDO DECLARACAO
        MatButtonModule,
        MatIconModule
    ]
})
export class ComponentsModule {

}