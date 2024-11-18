import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PaginationModule, PaginationConfig } from 'ngx-bootstrap/pagination';
import { MainModule } from './layout/main/main.module';
import { LoginComponent } from './pages/login/login.component';
import { NgOtpInputModule } from 'ng-otp-input';
import { NgApexchartsModule } from 'ng-apexcharts';
import { TimepickerModule } from 'ngx-bootstrap/timepicker';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { RichTextEditorAllModule } from '@syncfusion/ej2-angular-richtexteditor';
import { AccountCreationComponent } from './pages/account-creation/account-creation.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AccountCreationComponent,
    ForgotPasswordComponent,



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgOtpInputModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    PaginationModule.forRoot(),
    MainModule,
    NgApexchartsModule,
    BsDatepickerModule.forRoot(),
    TimepickerModule.forRoot(),
    BrowserAnimationsModule,
    RichTextEditorAllModule,
    SlickCarouselModule


  ],
  providers: [],

  bootstrap: [AppComponent]
})
export class AppModule { }
