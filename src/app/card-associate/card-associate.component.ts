import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-card-associate',
  templateUrl: './card-associate.component.html',
  styleUrls: ['./card-associate.component.css']
})
export class CardAssociateComponent {
  @Input() titre: string | undefined;
  @Input() id: number | undefined;
  @Input() type: string | undefined;
  @Output("oneCardClicked") oneCardClicked: EventEmitter<any> = new EventEmitter();
  @Input() display: boolean | undefined;
  @Input() halo: boolean | undefined;

  clickable() {
    this.oneCardClicked.emit();
  }
}
