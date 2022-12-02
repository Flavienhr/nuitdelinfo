import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() titre: string | undefined;
  @Input() id: number | undefined;
  @Input() type: string | undefined;
  @Output("oneCardClicked") oneCardClicked: EventEmitter<any> = new EventEmitter();

  clickable() {
    this.oneCardClicked.emit();
  }
}
