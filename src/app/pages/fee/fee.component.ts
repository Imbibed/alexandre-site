import { Component } from '@angular/core';
import {Meta} from "@angular/platform-browser";

@Component({
  selector: 'app-fee',
  standalone: true,
  imports: [],
  templateUrl: './fee.component.html',
  styleUrl: './fee.component.scss'
})
export class FeeComponent {
  constructor(private metaService: Meta){
  }
  ngOnInit() {
    this.metaService.updateTag({name: 'description', content: 'Les honoraires'});
  }
}
