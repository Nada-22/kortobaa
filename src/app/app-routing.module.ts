import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './modules/layout/main/main.component';
import { LayoutModule } from './modules/layout/layout.module';

const routes: Routes = [

  { path: '', pathMatch: 'full', redirectTo: 'home' },
  {
    path: 'home', component:MainComponent,
    loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule)
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes),LayoutModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
