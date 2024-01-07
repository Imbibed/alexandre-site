import {Directive, ElementRef, OnInit} from '@angular/core';

@Directive({
  selector: '[observeVisibility]',
  standalone: true
})
export class ObserveVisibilityDirective implements OnInit {

  private observerOptions = {root: this.element.nativeElement, rootMargin: "0px", threshold: 1.0};

  private observer: IntersectionObserver | undefined;
  constructor(private element: ElementRef) {
    console.log(element.nativeElement);
  }

  ngOnInit(): void {
      this.observer = new IntersectionObserver((entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
        //  TODO
      }, this.observerOptions);
  }
}
