import { Component } from '@angular/core';
import {Meta} from "@angular/platform-browser";
import {PageService} from "../../services/page.service";

@Component({
  selector: 'app-office',
  standalone: true,
  imports: [],
  templateUrl: './office.component.html',
  styleUrl: './office.component.scss'
})
export class OfficeComponent {
  constructor(private pageService: PageService){
  }
  ngOnInit() {
    this.pageService.loadSeo('https://Alexandremaat-avocat.fr', 'TODO');
  }
}
