import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'nuitdelinfo';
  scores = [0, 0, 0];
  seeHome = true;
  seeMap = false;
  seeGame1 = false;
  seeGame2 = false;

  SetScore(jeu:number, score:number){
    if (this.scores[jeu] < score){
      this.scores[jeu] = score;
    }
  }

    showComponent(str:any){
    this.seeHome = false;
    this.seeMap = false;
    this.seeGame1=false;
    this.seeGame2 = false;
    if (str == 'map'){
      this.seeMap = true;
    }
    if (str == 'home') {
      this.seeHome = true;
    }
    if (str == 'game1') {
      this.seeGame1 = true;
    }
    if (str == 'game2') {
      this.seeGame2 = true;
    }
  }
}
