import {Routes, RouterModule} from "@angular/router";
import {RecruiterLoginComponent} from "./recruiter-login/recruiter-login.component";
import {RecruiterUploadsComponent} from "./dashboard/recruiter-uploads/recruiter-uploads.component";
import {HomePageComponent} from "./home-page/home-page.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {JobDescriptionComponent} from "./dashboard/recruiter-uploads/job-description/job-description.component";
import {PotentialResumesComponent} from "./dashboard/recruiter-uploads/potential-resumes/potential-resumes.component";

const APP_ROUTES: Routes = [
  { path: '', component: HomePageComponent},
  { path: 'login', component: RecruiterLoginComponent},
  { path: 'dashboard', component: DashboardComponent},
  { path: 'dashboard/new-job', component: JobDescriptionComponent},
  { path: 'dashboard/new-resumes', component: PotentialResumesComponent}

];

export const routing = RouterModule.forRoot(APP_ROUTES);
