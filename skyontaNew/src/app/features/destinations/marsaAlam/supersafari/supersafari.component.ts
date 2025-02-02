import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-supersafari',
  imports: [CommonModule],
  templateUrl: './supersafari.component.html',
  styleUrl: './supersafari.component.css'
})
export class SupersafariComponent {
  tripImages=[
    { src: 'assets/images/quad/supersafari (15).jpg', alt: 'Elquad-bazar' },
    { src: 'assets/images/quad/safari-sentido-bazar.jpg', alt: 'Elquad-2meczet' },
    { src: 'assets/images/quad/super-safari- (56).jpg', alt: 'Elquad-2meczet' },
    { src: 'assets/images/quad/super-safari- (63).jpg', alt: 'Elquad-2meczett' },
    { src: 'assets/images/quad/super-safari- (158).jpg', alt: 'Elquad-kościół2' },
    { src: 'assets/images/quad/safari-sentido-bread.jpg', alt: 'Elquad-kościół2' },
    { src: 'assets/images/quad/super-safari- (26).jpg', alt: 'Elquad-port' },
    { src: 'assets/images/quad/super-safari- (52).jpg', alt: 'przyprawy-sklep7' },
    { src: 'assets/images/quad/super-safari- (51).jpg', alt: 'old-sklep' },
    { src: 'assets/images/quad/quadbigmuscle.jpg', alt: 'przyprawy-sklep' },
    { src: 'assets/images/quad/safar-BBQ.jpg', alt: 'Elquad-stary-hotel' },
    { src: 'assets/images/quad/quad17.jpg', alt: 'Elquad-2cytadela' },

    { src: 'assets/images/quad/super-safari- (105).jpg', alt: 'Elquad-2stary-dom' },
    { src: 'assets/images/quad/super-safari- (106).jpg', alt: 'rzyprawy-sklep-5' },
    { src: 'assets/images/quad/super-safari- (117).jpg', alt: 'przyprawy-sklep-1' },
    { src: 'assets/images/quad/safar-show.jpg', alt: 'Elquad-stary-7dom' },
    { src: 'assets/images/quad/safari-riding-camel.jpg', alt: 'Elquad-cytadelak' },
    { src: 'assets/images/quad/safari-sentido.jpg', alt: 'restauracja rybna' },
    { src: 'assets/images/quad/safari-bazar1.jpg', alt: 'Elquad-stary-6dom' },
    { src: 'assets/images/quad/safari-shisha.jpg', alt: 'Elquad-stary-4domk' },
    { src: 'assets/images/quad/super-safari-jeep-.jpg', alt: 'Elqusier-bazar8' },

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
