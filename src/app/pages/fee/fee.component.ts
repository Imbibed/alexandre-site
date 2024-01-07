import { Component } from '@angular/core';
import {Meta} from "@angular/platform-browser";
import {PageService} from "../../services/page.service";

@Component({
  selector: 'app-fee',
  standalone: true,
  imports: [],
  templateUrl: './fee.component.html',
  styleUrl: './fee.component.scss'
})
export class FeeComponent {
  constructor(private pageService: PageService){
  }
  ngOnInit() {
    this.pageService.loadSeo('https://Alexandremaat-avocat.fr', 'TODO');
  }
}
