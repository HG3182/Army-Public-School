import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CertificatesComponent } from './components/certificates/certificates.component';
import { VisionComponent } from './components/aboutUs/vision/vision.component';
import { PrincipalComponent } from './components/aboutUs/principal/principal.component';
import { NewsComponent } from './components/aboutUs/news/news.component';
import { CarrerComponent } from './components/aboutUs/carrer/carrer.component';
import { TenderComponent } from './components/aboutUs/tender/tender.component';
import { AdmissionsComponent } from './components/academics/admissions/admissions.component';
import { HolidayComponent } from './components/academics/holiday/holiday.component';
import { HolidayhomeworkComponent } from './components/academics/holidayhomework/holidayhomework.component';
import { ExaminationscheduleComponent } from './components/academics/examinationschedule/examinationschedule.component';
import { AcademicperformanceComponent } from './components/academics/academicperformance/academicperformance.component';
import { FeesstructureComponent } from './components/academics/feesstructure/feesstructure.component';
import { LoginComponent } from './auth/login/login.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { AuthGuard } from './auth.guard';
import { TcComponent } from './components/tc/tc/tc.component';
import { EventsComponent } from './components/academics/events/events.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { 
    path: 'dashboard', 
    component: DashboardComponent,
    canActivate: [AuthGuard] // Add AuthGuard to protect this route
  },
  { path: 'aboutus/vision', component: VisionComponent },
  { path: 'aboutus/principal', component: PrincipalComponent },
  { path: 'aboutus/news', component: NewsComponent },
  { path: 'aboutus/career', component: CarrerComponent },
  { path: 'aboutus/tendering', component: TenderComponent },
  { path: 'academics/admissions', component: AdmissionsComponent },
  { path: 'academics/holiday', component: HolidayComponent },
  { path: 'academic/holidayhomework', component: HolidayhomeworkComponent },
  { path: 'academic/examination-schedule', component: ExaminationscheduleComponent },
  { path: 'academics/performance', component: AcademicperformanceComponent },
  { path: 'academics/fees', component: FeesstructureComponent },
  { path: 'academics/events', component: EventsComponent },
  { path: 'tc', component: TcComponent },
  { path: 'certificates', component: CertificatesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
