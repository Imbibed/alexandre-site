import {Component, OnInit} from '@angular/core';
import {Meta} from "@angular/platform-browser";
import {Router} from "@angular/router";
import {PageService} from "../../services/page.service";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{
  constructor(private pageService: PageService, private router: Router){
  }
  ngOnInit() {
    this.pageService.loadSeo('https://Alexandremaat-avocat.fr', 'Présentation');
  }

}
