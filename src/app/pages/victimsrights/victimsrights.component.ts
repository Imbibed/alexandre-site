import { Component } from '@angular/core';
import {Meta} from "@angular/platform-browser";
import {PageService} from "../../services/page.service";

@Component({
  selector: 'app-victimsrights',
  standalone: true,
  imports: [],
  templateUrl: './victimsrights.component.html',
  styleUrl: './victimsrights.component.scss'
})
export class VictimsrightsComponent {
  constructor(private pageService: PageService){
  }
  ngOnInit() {
    this.pageService.loadSeo('https://Alexandremaat-avocat.fr/droit-des-victimes', 'TODO');
  }
}
