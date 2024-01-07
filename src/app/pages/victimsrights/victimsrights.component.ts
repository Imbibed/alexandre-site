import { Component } from '@angular/core';
import {Meta} from "@angular/platform-browser";

@Component({
  selector: 'app-victimsrights',
  standalone: true,
  imports: [],
  templateUrl: './victimsrights.component.html',
  styleUrl: './victimsrights.component.scss'
})
export class VictimsrightsComponent {
  constructor(private metaService: Meta){
  }
  ngOnInit() {
    this.metaService.updateTag({name: 'description', content: 'Le droit des victimes'});
  }
}
