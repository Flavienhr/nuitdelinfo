import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-associate',
  templateUrl: './associate.component.html',
  styleUrls: ['./associate.component.css']
})
export class AssociateComponent {
  labels = ['Le stérilet hormonal', 'Le préservatif masculin', 'Le préservatif féminin', 'L\'anneau vaginal', 'Le diaphragme', 'L’injection contraceptive', 'Le patch contraceptif', 'La pilule contraceptive', 'La pilule du lendemain']
  images = ['sterilet', 'preservatif', 'preservatif_f', 'anneau', 'diaphragme', 'injection', 'patch', 'pilule', 'pilule_lendemain']
  cardsList: any[];

  activated: boolean;
  activatedCard: any;

  life: number;
  run = true;
  win = false;
  timeLeft: number = 60;
  interval: NodeJS.Timer | undefined;
  score = 0;

  startTimer() {
    this.interval = setInterval(() => {
      if(this.timeLeft > 0) {
        this.timeLeft--;
      } else {
        this.run = false;
        return
      }
    },1000)
  }

  ngOnInit(){
    this.startTimer()
  }

  shuffleArray(array: any[]) {
    var m = array.length, t, i;

    while (m) {
      i = Math.floor(Math.random() * m--);
      t = array[m];
      array[m] = array[i];
      array[i] = t;
    }

    return array;
  }

  constructor() {
    this.activated = false;
    this.life = 3;
    let i = 0;
    this.cardsList = []
    for (let label of this.labels){
      this.cardsList.push({
        id:i,
        image:"interrogation.png",
        titre:label,
        isImage:false,
        display:true,
        halo:false,
        type:"label"
      });
      i++;
    }
    i = 0;
    for (let img of this.images){
      this.cardsList.push({
        id:i,
        image:img,
        titre:"???",
        isImage:true,
        display:true,
        halo:false,
        type:"image"
      });
      i++;
    }
    this.shuffleArray(this.cardsList);
  }
  oneCardClicked(index:number){
    if (!this.activated){
      this.activated = true;
      this.activatedCard = index;
      this.cardsList[index].halo = true;
    } else {
      this.activated = false;
      if (this.cardsList[this.activatedCard].type != this.cardsList[index].type && this.cardsList[this.activatedCard].id == this.cardsList[index].id){
        this.cardsList[this.activatedCard].display = false;
        this.cardsList[index].display = false;
        for (let card of this.cardsList){
          if (card.display == true){
            return;
          }
        }
        this.score = this.timeLeft;
        clearInterval(this.interval);
        this.run = false;
        this.win = true;
      } else {
        this.life -= 1;
        this.cardsList[this.activatedCard].halo = false;
        this.cardsList[index].halo = false;
        if (this.life == 0){
          this.score = 0;
          clearInterval(this.interval);
          this.run = false;
        }
      }
    }

  }
}
