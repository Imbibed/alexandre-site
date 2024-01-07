import {Inject, Injectable} from '@angular/core';
import {Meta} from "@angular/platform-browser";
import {DOCUMENT} from "@angular/common";

@Injectable({
  providedIn: 'root'
})
export class PageService {

  constructor(private metaService: Meta, @Inject(DOCUMENT) private dom: Document) { }

  public loadSeo(url: string, description: string){
    this.setCanonicalURL(url);
    this.metaService.updateTag({name: 'description', content: description});
  }
  private setCanonicalURL(url: string) {
    const head = this.dom.getElementsByTagName('head')[0];
    let element: HTMLLinkElement | null = this.dom.querySelector(`link[rel='canonical']`) || null
    if (element == null) {
      element= this.dom.createElement('link') as HTMLLinkElement;
      head.appendChild(element);
    }
    element.setAttribute('rel','canonical')
    element.setAttribute('href',url)
  }
}
