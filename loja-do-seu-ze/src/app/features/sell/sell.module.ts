import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SellComponent } from './pages/sell/sell.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    SellComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    SellComponent
  ]
})
export class SellModule { }
