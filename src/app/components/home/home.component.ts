import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent  implements OnInit, OnDestroy {


  // Slideshow variables
  currentIndex = 0;
  intervalId: any;

  // Variables for image modal
  selectedImage: string | null = null;

  images = [
    'assets/img/hero1.jpeg',
    'assets/img/hero2.jpeg',
    'assets/img/hero3.png',
    'assets/img/hero4.png',
    'assets/img/hero5.jpg',
    'assets/img/hero6.jpeg'
  ];

  


  ngOnInit() {
    this.startAutoSlide();
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
  }

  startAutoSlide() {
    this.intervalId = setInterval(() => {
      this.next();
    }, 3000); // Change image every 3 seconds
  }

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }

  prev() {
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
  }

  openImage(imageUrl: string) {
    this.selectedImage = imageUrl; // Set the selected image
  }

  closeImage() {
    this.selectedImage = null; // Close the modal
  }
}
