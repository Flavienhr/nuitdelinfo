import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent {
  @Output("ShowComponent") ShowComponent: EventEmitter<string> = new EventEmitter();
  Jeu1(){
    this.ShowComponent.emit('game1');
  }
  Jeu2(){
    this.ShowComponent.emit('game2');
  }
  Jeu3(){

  }
}
