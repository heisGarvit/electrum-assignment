import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { ListComponent } from './components/list/list.component';
import { DetailsComponent } from './components/details/details.component';
import {DialogModule} from "primeng/dialog";
import {ButtonModule} from "primeng/button";
import {SliderModule} from "primeng/slider";
import {FormsModule} from "@angular/forms";
import {TabViewModule} from "primeng/tabview";
import {SelectButtonModule} from "primeng/selectbutton";
import {DropdownModule} from "primeng/dropdown";
import {InputTextModule} from "primeng/inputtext";
import {BreadcrumbModule} from "primeng/breadcrumb";


@NgModule({
  declarations: [
    ProductsComponent,
    ListComponent,
    DetailsComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    DialogModule,
    ButtonModule,
    SliderModule,
    FormsModule,
    TabViewModule,
    SelectButtonModule,
    DropdownModule,
    InputTextModule,
    BreadcrumbModule
  ]
})
export class ProductsModule { }
