import { CommonModule } from '@angular/common';
import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-luxor',
  imports: [CommonModule],
  templateUrl: './luxor.component.html',
  styleUrl: './luxor.component.css'
})
export class LuxorComponent implements OnInit {
  tripImages=[
    { src: 'assets/images/luxor2025/boatt-sign.jpg', alt: 'motor-boat-luxor' },
    { src: 'assets/images/luxor2025/memnoon-sign.jpg', alt: 'Kolosy Memnona' },
    { src: 'assets/images/luxor2025/luxor-group.jpg', alt: 'Świątynia Hatszepsut' },
    { src: 'assets/images/luxor2025/family-4sign.jpg', alt: 'family-skyonta-tours' },
    { src: 'assets/images/luxor2025/luxor-2pax.jpg', alt: 'Świątynia Karnak' },
    { src: 'assets/images/luxor2025/luxor.jpg', alt: 'karnak' },
    { src: 'assets/images/luxor2025/hatszepsut-g-sign.jpg', alt: 'Świątynia Hatszepsut' },
    { src: 'assets/images/luxor2025/boat-2pax.jpg', alt: 'motor-boat-luxo' },
    { src: 'assets/images/luxor2025/luxor2-italinf.jpg', alt: 'Dolina Królów' },
    { src: 'assets/images/luxor2025/luxor-i8talinf.jpg', alt: 'Świątynia Karnak' },
    { src: 'assets/images/luxor2025/luxor-italinf.jpg', alt: 'Świątynia Karnak' },
    { src: 'assets/images/luxor2025/luxor-overnight.jpg', alt: 'Dolina Królów' },
    { src: 'assets/images/luxor2025/luxor2-italinf.jpg', alt: 'Dolina Królów' },
    { src: 'assets/images/luxor2025/luxor-bus-on luxorbridge.jpg', alt: 'Świątynia Karnak' },
    { src: 'assets/images/luxor2025/germany-memnon.jpg', alt: 'Kolosy Memnona' },
    { src: 'assets/images/luxor2025/polish-family.jpg', alt: 'Świątynia Karnak' },
    { src: 'assets/images/luxor2025/luxor-polish-karnak.jpg', alt: 'Świątynia Karnak' },

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
