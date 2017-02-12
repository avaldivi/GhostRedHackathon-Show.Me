import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { JobDescriptionComponent } from './dashboard/recruiter-uploads/job-description/job-description.component';
import { RecruiterUploadsComponent } from './dashboard/recruiter-uploads/recruiter-uploads.component';
import { PotentialResumesComponent } from './dashboard/recruiter-uploads/potential-resumes/potential-resumes.component';
import { RecruiterLoginComponent } from './recruiter-login/recruiter-login.component';
import { DropdownDirective } from './dropdown.directive';
import {routing} from "./app.routing";
import { HomePageComponent } from './home-page/home-page.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    JobDescriptionComponent,
    RecruiterUploadsComponent,
    PotentialResumesComponent,
    RecruiterLoginComponent,
    DropdownDirective,
    HomePageComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


