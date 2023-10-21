import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeSliderComponent } from './home-slider/home-slider.component';
import { MainHomeComponent } from './main-home/main-home.component';
import { NgbCarouselModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { NewProductsComponent } from './new-products/new-products.component';
import { RightSideComponent } from './right-side/right-side.component';


@NgModule({
  declarations: [
    HomeSliderComponent,
    MainHomeComponent,
    NewProductsComponent,
    RightSideComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    NgbCarouselModule,
    NgbTooltipModule
  ]
})
export class HomeModule { }
