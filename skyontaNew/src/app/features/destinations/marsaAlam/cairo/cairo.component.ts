import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cairo',
  imports: [CommonModule],
  templateUrl: './cairo.component.html',
  styleUrl: './cairo.component.css'
})
export class CairoComponent {

  tripImages=[
    { src: 'assets/images/cairo/cairo-2.jpg', alt: 'piramidy w Gizie' },
    { src: 'assets/images/cairo/cairo.jpg', alt: 'piramidy w Gizie' },
    { src: 'assets/images/cairo/giza-pyramides.jpg', alt: 'Sfinksa' },
    { src: 'assets/images/cairo/pyramides-background.jpg', alt: 'piramidy w Gizie' },
    { src: 'assets/images/cairo/pyramidies-view.jpg', alt: 'Sfinksa' },
    { src: 'assets/images/cairo/pyramides-holding-sign', alt: 'Sfinksa' },
    { src: 'assets/images/cairo/pyramides-background.jpg', alt: 'piramidy w Gizie' },
    { src: 'assets/images/cairo/new2-musuem.jpg', alt: 'nowe wielkie muzeum egipskie' },
    { src: 'assets/images/cairo/Egyptian-Museum-inside.jpg', alt: 'stare muzeum' },
    { src: 'assets/images/cairo/greand-musuem.jpg', alt: 'nowe wielkie muzeum egipskie' },
    { src: 'assets/images/cairo/Egyptian-Museum-2inside.jpg', alt: 'Sfinksa' },
    { src: 'assets/images/cairo/pyramidies-camel.jpg', alt: 'nowe wielkie muzeum egipskie' },
    { src: 'assets/images/cairo/new-musuem-3.jpg', alt: 'nowe wielkie muzeum egipskie' },
    { src: 'assets/images/cairo/new-musuem2025.jpg', alt: 'nowe wielkie muzeum egipskie' },
    { src: 'assets/images/cairo/new-musuem-5.jpg', alt: 'nowe wielkie muzeum egipskie' },
    { src: 'assets/images/cairo/greand-musuem.jpg', alt: 'nowe wielkie muzeum egipskie' },
    { src: 'assets/images/cairo/pyramides-and-sphinxs.jpg', alt: 'pyramides-and-sphinxs' },

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
