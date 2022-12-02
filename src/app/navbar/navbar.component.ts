import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  percent_text = "0%";
  perc_text = 0;

  setPerc(perc:number) {
    this.perc_text = perc
    this.percent_text = `${perc}%`
  }
}
