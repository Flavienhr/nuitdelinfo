import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  @Input() percent_1: number | undefined;
  @Input() percent_2: number | undefined;
  @Input() percent_3: number | undefined;


}
