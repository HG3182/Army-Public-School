import { Component } from '@angular/core';

@Component({
  selector: 'app-certificates',
  templateUrl: './certificates.component.html',
  styleUrl: './certificates.component.css'
})
// Component code
export class CertificatesComponent {
  certificates = [
    {
      title: 'AFFILIATION CERTIFICATE',
      image: '../../../assets/img/AFFILIATION 1.jpeg',
      pages: ['../../../assets/img/AFFILIATION 1.jpeg', '../../../assets/img/AFFILIATION 2.jpeg']
    },
    {
      title: 'REGISTRATION OF SOCITY',
      image: '../../../assets/img/trust.jpeg',
      pages: ['../../../assets/img/trust.jpeg']
    },
    {
      title: 'BUILDING SAFETY CERTIFICATE',
      image: '../../../assets/img/BUILDING.jpeg',
      pages: ['../../../assets/img/BUILDING.jpeg']
    },
    {
      title: 'FIRE CERTIFICATE',
      image: '../../../assets/img/FIRE.jpeg',
      pages: ['../../../assets/img/FIRE.jpeg']
    },
    
    {
      title: 'DEO CERTIFICATE',
      image: '../../../assets/img/DEO 1.jpeg',
      pages: ['../../../assets/img/DEO 1.jpeg', '../../../assets/img/DEO 2.jpeg', '../../../assets/img/DEO 3.jpeg']
    },

    {
      title: 'WATER CERTIFICATE',
      image: '../../../assets/img/water.jpeg',
      pages: ['../../../assets/img/water.jpeg']
    },

    {
      title: 'PARENTS TEACHERS ASSOCIATION MEMBERS',
      image: '../../../assets/img/PARENTS TEACHERS.jpeg',
      pages: ['../../../assets/img/PARENTS TEACHERS.jpeg']
    },

    {
      title: 'ARMY PUBLIC SCHOOL MANAGEMENT COMMITTEE',
      image: '../../../assets/img/PARENTS TEACHERS.jpeg',
      pages: ['../../../assets/img/PARENTS TEACHERSL.jpeg']
    },
    
    {
      title: 'RECOGNITION CERTIFICATE',
      image: '../../../assets/img/recognition1.jpeg',
      pages: ['../../../assets/img/recognition1.jpeg', '../../../assets/img/recognition2.jpeg', '../../../assets/img/recognition3.jpeg']
    },

    {
      title: 'NO-OBJECTION CERTIFICATE',
      image: '../../../assets/img/recognition1.jpeg',
      pages: ['../../../assets/img/recognition1.jpeg', '../../../assets/img/recognition2.jpeg', '../../../assets/img/recognition3.jpeg']
    },

    {
      title: 'LAND CERTIFICATE',
      image: '../../../assets/img/LAND.jpeg',
      pages: ['../../../assets/img/LAND.jpeg']
    },

    {
      title: 'ANNUAL ACADEMIC CALENDER',
      image: '../../../assets/img/annual-academic-calender1.jpeg',
      pages: ['../../../assets/img/annual-academic-calender1.jpeg', '../../../assets/img/annual-academic-calender2.jpeg', '../../../assets/img/annual-academic-calender3.jpeg', '../../../assets/img/annual-academic-calender4.jpeg', '../../../assets/img/annual-academic-calender5.jpeg', '../../../assets/img/annual-academic-calender6.jpeg', '../../../assets/img/annual-academic-calender7.jpeg', '../../../assets/img/annual-academic-calender8.jpeg', '../../../assets/img/annual-academic-calender9.jpeg']
    },
  ];

  selectedCertificate: any = null;

  openCertificate(certificate: any) {
    // Ensure selectedCertificate has a pages array, even if it only has one page
    this.selectedCertificate = {
      ...certificate,
      pages: certificate.pages.length ? certificate.pages : [certificate.image],
    };
  }

  closeModal() {
    this.selectedCertificate = null;
  }
}
