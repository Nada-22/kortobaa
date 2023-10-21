import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaxLengthPipe } from './pipes/max-length.pipe';
// import { MaxLengthPipe } from './pipes/max-length.pipe';



@NgModule({
  declarations: [  
    MaxLengthPipe
  ],
  imports: [
    CommonModule
  ],
  exports:[
    MaxLengthPipe
  ]

})
export class SharedModule { }
