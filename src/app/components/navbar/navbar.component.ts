import { Component } from '@angular/core';
import {NavlinkComponent} from "./navlink/navlink.component";

@Component({
  selector: 'navbar',
  standalone: true,
  imports: [NavlinkComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

}
