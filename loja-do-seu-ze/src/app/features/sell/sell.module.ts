import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SellComponent } from './pages/sell/sell.component';



@NgModule({
  declarations: [
    SellComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SellComponent
  ]
})
export class SellModule { }
