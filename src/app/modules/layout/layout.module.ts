import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [];


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    MainComponent
  ],
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ]
})
export class LayoutModule { }
