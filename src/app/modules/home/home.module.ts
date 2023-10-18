import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeSliderComponent } from './home-slider/home-slider.component';
import { MainHomeComponent } from './main-home/main-home.component';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    HomeSliderComponent,
    MainHomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    NgbCarouselModule
  ]
})
export class HomeModule { }
