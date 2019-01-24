import { Component, OnInit, Input } from '@angular/core';
import { Slide } from '../Slide';
import { Slides } from '../Slides';
import { ShopService } from '../shop.service';

@Component({
  selector: 'app-slide-show',
  templateUrl: './slide-show.component.html',
  styleUrls: ['./slide-show.component.scss'],
  host: {
  }
})
export class SlideShowComponent implements OnInit {
  @Input() slide: Slide;
  constructor(private shopService: ShopService) { }
  slides: Slide[];
  ngOnInit() {
    this.getSlides();
  }
  getSlides(): void {
    this.shopService.getSlides().subscribe(slides => this.slides = slides);
  }
  slideIndex = 1;
  plusDivs(n) {
    this.showDivs(this.slideIndex += n);
    console.log(this.slideIndex);
  }

  showDivs(n) {
    var i;
    if (n > this.slides.length) { this.slideIndex = 1 }
    if (n < 1) { this.slideIndex = this.slides.length };
  }
}
