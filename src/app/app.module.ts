import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './templates/home/home.component';
import { VisitorsComponent } from './templates/visitors/visitors.component';

import { VisitorHeadersComponent } from './includes/visitor-headers/visitor-headers.component';
import { SignInComponent } from './includes/sign-in/sign-in.component';
import { UserDashboardComponent } from './includes/user-dashboard/user-dashboard.component';
import { EmiCalculatorsComponent } from './includes/emi-calculators/emi-calculators.component';
import { EnquiryComponent } from './includes/enquiry/enquiry.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserHeaderComponent } from './includes/user-header/user-header.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    VisitorsComponent,
    
    VisitorHeadersComponent,
    SignInComponent,
    UserDashboardComponent,
    EmiCalculatorsComponent,
    EnquiryComponent,
    UserHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,ReactiveFormsModule,HttpClientModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
