import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-associate',
  templateUrl: './associate.component.html',
  styleUrls: ['./associate.component.css']
})
export class AssociateComponent {
  maladies = ['MST 1', 'MST 2', 'MST 3', 'MST 4', 'MST 1', 'MST 2', 'MST 3', 'MST 4', 'MST 1', 'MST 2', 'MST 3', 'MST 4']
  symptome = ['SYM 1', 'SYM 2', 'SYM 3', 'SYM 4', 'SYM 1', 'SYM 2', 'SYM 3', 'SYM 4', 'SYM 1', 'SYM 2', 'SYM 3', 'SYM 4']
  cardsList: any[];

  activated: boolean;
  activatedCard: any;

  life: number;
  constructor() {
    this.activated = false;
    this.life = 3;
    let i = 0;
    this.cardsList = []
    for (let mst of this.maladies){
      this.cardsList.push({
        id:i,
        titre:mst,
        display:true,
        halo:false
      });
      i++;
    }
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
      } else {
        this.life -= 1;
        this.cardsList[this.activatedCard].halo = false;
        this.cardsList[index].halo = false;
      }
    }

  }
}
