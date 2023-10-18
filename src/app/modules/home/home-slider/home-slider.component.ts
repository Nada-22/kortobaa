import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home-slider',
  templateUrl: './home-slider.component.html',
  styleUrls: ['./home-slider.component.scss']
})
export class HomeSliderComponent implements OnInit {

	images = [700, 533, 807, 124].map((n) => `https://picsum.photos/id/${n}/900/500`);

	constructor(config: NgbCarouselConfig) {
		config.wrap = true;
		config.keyboard = false;
		config.pauseOnHover = true;
    config.animation=true;
    config.showNavigationIndicators=false;
	}

  ngOnInit(): void {
  }

}
