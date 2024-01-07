import { Injectable } from '@angular/core';
import {Meta} from "@angular/platform-browser";

@Injectable({
  providedIn: 'root'
})
export class PageService {

  constructor(private metaService: Meta) { }

  public loadSeo(url: string, description: string){
    this.setCanonicalURL(url);
    this.metaService.updateTag({name: 'description', content: description});
  }
  private setCanonicalURL(url: string) {
    let link: HTMLMetaElement | null = this.metaService.getTag('rel="canonical"');
    if (!link) {
      this.metaService.addTag({rel: 'canonical', href: url });
    } else {
      this.metaService.updateTag({ rel: 'canonical', href: url });
    }
  }
}
