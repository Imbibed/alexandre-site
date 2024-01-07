import { Component } from '@angular/core';
import {Meta} from "@angular/platform-browser";

@Component({
  selector: 'app-civilrights',
  standalone: true,
  imports: [],
  templateUrl: './civilrights.component.html',
  styleUrl: './civilrights.component.scss'
})
export class CivilrightsComponent {
  constructor(private metaService: Meta){
  }
  ngOnInit() {
    this.metaService.updateTag({name: 'description', content: 'Le droit civil'});
  }
}
