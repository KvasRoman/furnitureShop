import { Component, OnInit, AfterViewInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import homePageSlide from 'src/app/models/homePageSlide.model';
import Swiper from 'swiper';
import { Navigation, Pagination, EffectFade, Manipulation } from 'swiper/modules';

Swiper.use([Navigation, Pagination, EffectFade, Manipulation]);

@Component({
  selector: 'app-home-slider',
  templateUrl: './home-slider.component.html',
  styleUrls: ['../../../../icons.scss', './home-slider.component.scss']
})
export class HomeSilderComponent {
  @Input() slides: Observable<homePageSlide[]> | undefined;
  public primarySwiper: Swiper | undefined;
  public secondarySwiper: Swiper | undefined;
  ngOnInit() {

    this.slides?.subscribe((slideList) => {
      this.primarySwiper = new Swiper('.primary', {
        direction: 'horizontal',
        loop: true,
        spaceBetween: -20,
        loopedSlides: 2,
        on: {
          realIndexChange: (primary) => this.syncSliders(primary)
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        navigation: {
          nextEl: '.swiper-button-next',
        },
      });
      this.secondarySwiper = new Swiper('.secondary', {
        direction: 'horizontal',
        loop: true,
        effect: 'fade',
        allowTouchMove: false,
        fadeEffect: {
          crossFade: true
        }
      });
      slideList.forEach((s, index) => {
        this.primarySwiper?.addSlide(index,
          `<div class="swiper-slide">
            <img src="${s.primary.imageUrl}">
          </div>`);
        this.secondarySwiper?.addSlide(index,
          `<div class="swiper-slide">
            <img src="${s.secondary.imageUrl}">
            <div class="slide-content">
              <div class="slideInfo">
                <span>0${index+1}</span>
                <i class="dashIcon"></i>
                <span>${s.secondary.roomType}</span>
              </div>
              <div class="title">${s.secondary.title}</div>
              <div class="button"><i class="arrowIcon right"></i></div>
            </div>
          </div>`)
      })
    })
  }
  syncSliders(primary: Swiper) {
    this.secondarySwiper?.slideTo(primary.realIndex);
  }
}
