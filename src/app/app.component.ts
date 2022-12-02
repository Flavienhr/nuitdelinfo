import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'nuitdelinfo';
  scores = [0, 0, 0];

  SetScore(jeu:number, score:number){
    if (this.scores[jeu] < score){
      this.scores[jeu] = score;
    }
  }
}
