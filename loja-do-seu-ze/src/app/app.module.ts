import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './features/home/home.module';
import { ContactModule } from './features/contact/contact.module';
import { LoginModule } from './features/login/login.module';
import { SellModule } from './features/sell/sell.module';
import { LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt'

registerLocaleData(localePt);

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ContactModule,
    HomeModule,
    LoginModule,
    SellModule
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: "pt-BR"
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
