import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home-slider',
  templateUrl: './home-slider.component.html',
  styleUrls: ['./home-slider.component.scss']
})
export class HomeSliderComponent implements OnInit {

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
