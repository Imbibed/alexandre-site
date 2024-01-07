import { Component } from '@angular/core';
import {Meta} from "@angular/platform-browser";
import {PageService} from "../../services/page.service";

@Component({
  selector: 'app-civilrights',
  standalone: true,
  imports: [],
  templateUrl: './civilrights.component.html',
  styleUrl: './civilrights.component.scss'
})
export class CivilrightsComponent {
  constructor(private pageService: PageService){
  }
  ngOnInit() {
    this.pageService.loadSeo('https://Alexandremaat-avocat.fr/droit-civil', 'TODO');
  }
}
