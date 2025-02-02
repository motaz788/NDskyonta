import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-porto',
  imports: [CommonModule],
  templateUrl: './porto.component.html',
  styleUrl: './porto.component.css'
})
export class PortoComponent {
  tripImages=[
    { src: 'assets/images/portGhalib/divino.jpg', alt: 'divino' },
    { src: 'assets/images/portGhalib/divino3.jpg', alt: 'divino' },
    { src: 'assets/images/portGhalib/divino4.jpg', alt: 'divino' },
    { src: 'assets/images/portGhalib/divino5.jpg', alt: 'divino' },
    { src: 'assets/images/portGhalib/HakonaMatata.jpg', alt: 'HakonaMatata' },
    { src: 'assets/images/portGhalib/HakonaMatata-1.jpg', alt: 'HakonaMatata' },
    { src: 'assets/images/portGhalib/HakonaMatata-2.jpg', alt: 'HakonaMatata' },
    { src: 'assets/images/portGhalib/HakonaMatata-3.jpg', alt: 'HakonaMatata' },
    { src: 'assets/images/portGhalib/HakonaMatata-4.jpg', alt: 'HakonaMatata' },
    { src: 'assets/images/portGhalib/HakonaMatata-5.jpg', alt: 'HakonaMatata' },
    { src: 'assets/images/portGhalib/marina-lodge-at-port.jpg', alt: 'marina-lodge-at-port' },
    { src: 'assets/images/portGhalib/port-ghalib.jpg', alt: 'port-ghalib' },
    { src: 'assets/images/portGhalib/portGhalieb-1.jpg', alt: 'port-ghalib' },
    { src: 'assets/images/portGhalib/portGhalieb-3.jpg', alt: 'port-ghalib' },
    { src: 'assets/images/portGhalib/portGhalieb-4.jpg', alt: 'port-ghalib' },
    { src: 'assets/images/portGhalib/hakonaMatata-6.jpg', alt: 'HakonaMatata' },
 
  

]
currentSlide = 0;

prevSlide() {
  this.currentSlide =
    this.currentSlide === 0 ? this.tripImages.length - 1 : this.currentSlide - 1;
}

nextSlide() {
  this.currentSlide =
    this.currentSlide === this.tripImages.length - 1 ? 0 : this.currentSlide + 1;
}

goToSlide(index: number) {
  this.currentSlide = index;
}


ngOnInit() {
  setInterval(() => {
    this.nextSlide();
  }, 3000); // Change slide every 3 seconds
}
}
