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
  public navigations: {label: string, route: string}[] = [
    {label: 'Accueil',route: ''},
    {label: 'Droit des victimes',route: 'droit-des-victimes'},
    {label: 'Droit civil',route: 'droit-civil'},
    {label: 'Cabinet',route: 'cabinet'},
    {label: 'Honoraires',route: 'fee'}
  ];
}
