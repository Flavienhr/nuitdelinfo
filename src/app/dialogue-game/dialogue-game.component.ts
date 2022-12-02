import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-dialogue-game',
  templateUrl: './dialogue-game.component.html',
  styleUrls: ['./dialogue-game.component.css']
})
export class DialogueGameComponent implements OnInit {
  win = false;
  questions = [
    ["TEST QUESTION 1","REPONSE 1", "REPONSE 2", 1],
    ["TEST QUESTION 2","REPONSE 1", "REPONSE 2", 1],
    ["TEST QUESTION 3","REPONSE 1", "REPONSE 2", 1],
    ["TEST QUESTION 4","REPONSE 1", "REPONSE 2", 1],
    ["TEST QUESTION 5","REPONSE 1", "REPONSE 2", 1],
    ["TEST QUESTION 6","REPONSE 1", "REPONSE 2", 1],
    ["TEST QUESTION 7","REPONSE 1", "REPONSE 2", 1],
    ["TEST QUESTION 8","REPONSE 1", "REPONSE 2", 1],
    ["TEST QUESTION 9","REPONSE 1", "REPONSE 2", 1],
    ["TEST QUESTION 10","REPONSE 1", "REPONSE 2", 1],
    ["TEST QUESTION 1","REPONSE 1", "REPONSE 2", 1],
    ["TEST QUESTION 2","REPONSE 1", "REPONSE 2", 1],
    ["TEST QUESTION 3","REPONSE 1", "REPONSE 2", 1],
    ["TEST QUESTION 4","REPONSE 1", "REPONSE 2", 1],
    ["TEST QUESTION 5","REPONSE 1", "REPONSE 2", 1],
    ["TEST QUESTION 6","REPONSE 1", "REPONSE 2", 1],
    ["TEST QUESTION 7","REPONSE 1", "REPONSE 2", 1],
    ["TEST QUESTION 8","REPONSE 1", "REPONSE 2", 1],
    ["TEST QUESTION 9","REPONSE 1", "REPONSE 2", 1],
    ["TEST QUESTION 10","REPONSE 1", "REPONSE 2", 1],
    ["TEST QUESTION 1","REPONSE 1", "REPONSE 2", 1],
    ["TEST QUESTION 2","REPONSE 1", "REPONSE 2", 1],
    ["TEST QUESTION 3","REPONSE 1", "REPONSE 2", 1],
    ["TEST QUESTION 4","REPONSE 1", "REPONSE 2", 1],
    ["TEST QUESTION 5","REPONSE 1", "REPONSE 2", 1],
    ["TEST QUESTION 6","REPONSE 1", "REPONSE 2", 1],
    ["TEST QUESTION 7","REPONSE 1", "REPONSE 2", 1],
    ["TEST QUESTION 8","REPONSE 1", "REPONSE 2", 1],
    ["TEST QUESTION 9","REPONSE 1", "REPONSE 2", 1],
    ["TEST QUESTION 10","REPONSE 1", "REPONSE 2", 1],
  ]
  question: any;
  firstAnswer: string|number|undefined;
  secondAnswer: string|number|undefined;
  indexAnswer: string|number|undefined;
  points = 0;
  indexQuestion = 0;
  constructor() {
  }
  ngOnInit() {
    this.newQuestion(0);
  }

  newQuestion(i: number) {
   this.question = this.questions[i][0];
   this.firstAnswer = this.questions[i][1];
   this.secondAnswer = this.questions[i][2];
   this.indexAnswer = this.questions[i][3];
  }

  checkAnswer(i: number){
    if (this.indexAnswer == i){
      this.points++;
    }
    this.indexQuestion++;
    if (this.indexQuestion == 30){
      this.win = true;
    }
    else {
      this.newQuestion(this.indexQuestion);
    }
  }
}
