import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-qusier',
  imports: [CommonModule],
  templateUrl: './qusier.component.html',
  styleUrl: './qusier.component.css'
})
export class QusierComponent {
  tripImages=[
    { src: 'assets/images/qusier/Elqusier-2meczet.jpg', alt: 'Elqusier-2meczet' },
    { src: 'assets/images/qusier/Elqusier-3-meczet.jpg', alt: 'Elqusier-2meczet' },
    { src: 'assets/images/qusier/Elqusier-3meczet.jpg', alt: 'Elqusier-2meczett' },
    { src: 'assets/images/qusier/Elqusier-bazar.jpg', alt: 'Elqusier-bazar' },
    { src: 'assets/images/qusier/Elqusier-kościół2.jpg', alt: 'Elqusier-kościół2' },
    { src: 'assets/images/qusier/Elqusier-kościół.jpg', alt: 'Elqusier-kościół2' },
    { src: 'assets/images/qusier/Elqusier-port.jpg', alt: 'Elqusier-port' },
    { src: 'assets/images/qusier/przyprawy-sklep7.jpg', alt: 'przyprawy-sklep7' },
    { src: 'assets/images/qusier/old-sklep.jpg', alt: 'old-sklep' },
    { src: 'assets/images/qusier/przyprawy-sklep-3.jpg', alt: 'przyprawy-sklep' },
    { src: 'assets/images/qusier/Elqusier-stary-hotel.jpg', alt: 'Elqusier-stary-hotel' },
    { src: 'assets/images/qusier/Elqusier-2cytadela.jpg', alt: 'Elqusier-2cytadela' },
    { src: 'assets/images/qusier/Elqusier-2stary-dom.jpg', alt: 'Elqusier-2stary-dom' },
    { src: 'assets/images/qusier/przyprawy-sklep-5.jpg', alt: 'rzyprawy-sklep-5' },
    { src: 'assets/images/qusier/przyprawy-sklep-1.jpg', alt: 'przyprawy-sklep-1' },
    { src: 'assets/images/qusier/Elqusier-stary-7dom.jpg', alt: 'Elqusier-stary-7dom' },
    { src: 'assets/images/qusier/Elqusier-cytadela.jpg', alt: 'Elqusier-cytadelak' },
    { src: 'assets/images/qusier/restauracja rybna.jpg', alt: 'restauracja rybna' },
    { src: 'assets/images/qusier/Elqusier-stary-6dom.jpg', alt: 'Elqusier-stary-6dom' },
    { src: 'assets/images/qusier/Elqusier-stary-4dom.jpg', alt: 'Elqusier-stary-4domk' },
    { src: 'assets/images/qusier/Elqusier-bazar8.jpg', alt: 'Elqusier-bazar' },

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
