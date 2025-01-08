import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { CertificatesComponent } from './components/certificates/certificates.component';
import { HomeComponent } from './components/home/home.component';
import { PrincipalComponent } from './components/aboutUs/principal/principal.component';
import { VisionComponent } from './components/aboutUs/vision/vision.component';
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
import { FileUploadService } from '../app/file-upload.service.service';
import { AuthService } from '../app/auth.service.service';
import { EventsComponent } from './components/academics/events/events.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    CertificatesComponent,
    HomeComponent,
    PrincipalComponent,
    VisionComponent,
    NewsComponent,
    CarrerComponent,
    TenderComponent,
    AdmissionsComponent,
    HolidayComponent,
    HolidayhomeworkComponent,
    ExaminationscheduleComponent,
    AcademicperformanceComponent,
    FeesstructureComponent,
    LoginComponent,
    DashboardComponent,
    TcComponent,
    EventsComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    FormsModule, HttpClientModule
  ],
  providers: [AuthGuard,FileUploadService,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
