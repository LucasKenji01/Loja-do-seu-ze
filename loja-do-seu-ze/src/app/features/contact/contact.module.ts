import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './pages/contact/contact.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ContactSectionComponent } from './components/contact-section/contact-section.component';



@NgModule({
  declarations: [
    ContactComponent,
    ContactSectionComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
  ],
  exports: [
    ContactComponent
  ]
})
export class ContactModule { }
