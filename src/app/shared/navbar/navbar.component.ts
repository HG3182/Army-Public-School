import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  isOpen = false;
  // States for dropdown visibility
  aboutDropdownOpen = false;
  academicsDropdownOpen = false;
  coCurricularDropdownOpen = false;
  HDPDropdownOpen = false;

  toggleMenu() {
    this.isOpen = !this.isOpen;
  }


  toggleDropdown(dropdown: string) {
    if (dropdown === 'about') this.aboutDropdownOpen = !this.aboutDropdownOpen;
    if (dropdown === 'academics') this.academicsDropdownOpen = !this.academicsDropdownOpen;
    if (dropdown === 'coCurricular') this.coCurricularDropdownOpen = !this.coCurricularDropdownOpen;
    if (dropdown === 'HDP') this.HDPDropdownOpen = !this.HDPDropdownOpen;
  }

}
