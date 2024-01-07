import { Component } from '@angular/core';
import {Meta} from "@angular/platform-browser";

@Component({
  selector: 'app-office',
  standalone: true,
  imports: [],
  templateUrl: './office.component.html',
  styleUrl: './office.component.scss'
})
export class OfficeComponent {
  constructor(private metaService: Meta){
  }
  ngOnInit() {
    this.metaService.updateTag({name: 'description', content: 'Le cabinet'});
  }
}
