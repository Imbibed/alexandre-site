import {Component, Input} from '@angular/core';
import {RouterModule} from "@angular/router";

@Component({
  selector: 'app-navlink',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './navlink.component.html',
  styleUrl: './navlink.component.scss'
})
export class NavlinkComponent {
  @Input({required: true}) label: string = "";
  @Input({required: true}) route: string = "";
}
