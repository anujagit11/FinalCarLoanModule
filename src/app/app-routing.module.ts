import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VisitorsComponent } from './templates/visitors/visitors.component';
import { HomeComponent } from './templates/home/home.component';
import { EnquiryComponent } from './includes/enquiry/enquiry.component';
import { SignInComponent } from './includes/sign-in/sign-in.component';
import { EmiCalculatorsComponent } from './includes/emi-calculators/emi-calculators.component';
import { UserDashboardComponent } from './includes/user-dashboard/user-dashboard.component';

const routes: Routes = [
  {path:'',redirectTo:"visitors",pathMatch:'full'},
  {path:'visitors',component:VisitorsComponent,children:[
    {path:'home', component:HomeComponent},
    {path:'enquiry',component:EnquiryComponent},
    {path:'signIn',component:SignInComponent},
    
    
    {path:'emi',component:EmiCalculatorsComponent}
  ]},
  { path: 'signout', redirectTo: 'visitors', pathMatch: 'full' },

  {path:'dash', component:UserDashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
