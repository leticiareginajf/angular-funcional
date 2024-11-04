import { NgModule } from "@angular/core";
import {MatButtonModule} from '@angular/material/button'; 
import { MatNativeDateModule } from "@angular/material/core";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatDividerModule } from "@angular/material/divider";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatListModule } from "@angular/material/list";
import { MatSelectModule } from "@angular/material/select";
import { MatTableModule } from "@angular/material/table";

@NgModule({
    imports: [
        MatButtonModule,
        //MatIconModule
        MatListModule,
        MatDividerModule,
        MatFormFieldModule, 
        MatInputModule,
        MatFormFieldModule, 
        MatDatepickerModule, 
        MatNativeDateModule,
        MatSelectModule,
        MatTableModule

    ],
    exports: [
        MatButtonModule,
        //MatIconModule
        MatListModule,
        MatDividerModule,
        MatFormFieldModule, 
        MatInputModule,
        MatFormFieldModule, 
        MatDatepickerModule, 
        MatNativeDateModule,
        MatSelectModule,
        MatTableModule
    ],

})
export class AngularMaterialModule{

}