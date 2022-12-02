import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  @Output("ShowComponent") ShowComponent: EventEmitter<string> = new EventEmitter();
  @Input() percent_1: number | undefined;
  @Input() percent_2: number | undefined;
  @Input() percent_3: number | undefined;

  clickable(str:string){
    this.ShowComponent.emit(str);
  }

}
