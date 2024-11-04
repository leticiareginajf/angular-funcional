import { NgModule } from "@angular/core";
import { FilterComponent } from './filter/filter.component';
import { AngularMaterialModule } from "../angular-material/angular-material.module";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { UserDetailsComponent } from "./user-details/user-details.component";
import { MatListModule } from "@angular/material/list";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { UsersListComponent } from './users-list/users-list.component';


@NgModule({
    declarations: [
        
        UserDetailsComponent,
        FilterComponent,
        UsersListComponent
    ],
    imports: [
        
        FormsModule,
        CommonModule,
        AngularMaterialModule
        
        //FilterComponent
        //MatButtonModule,
        //MatIconModule
    ],
    exports: [
        //TESTANDO DECLARACAO
        //MatButtonModule,
        //MatIconModule
        UserDetailsComponent,
        FilterComponent,
        UsersListComponent
    ]
})
export class ComponentsModule {

}