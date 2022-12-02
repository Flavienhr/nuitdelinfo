import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-associate',
  templateUrl: './associate.component.html',
  styleUrls: ['./associate.component.css']
})
export class AssociateComponent {
  cardsList = [
    {
      titre: 'MST 1',
      id:1,
      type:"MST"
    },
    {
      titre: 'MST 2',
      id:2,
      type:"MST"
    },
    {
      titre: 'Symtome 1',
      id:1,
      type:"Symptome"
    },
    {
      titre: 'Symptome 2',
      id:2,
      type:"Symptome"
    },
    {
      titre: 'MST 3',
      id:3,
      type:"MST"
    },
    {
      titre: 'MST 4',
      id:4,
      type:"MST"
    },
    {
      titre: 'Symtome 3',
      id:3,
      type:"Symptome"
    },
    {
      titre: 'Symptome 4',
      id:4,
      type:"Symptome"
    }
  ];

  activated: number;
  activatedCard: any;

  life: number;
  constructor() {
    this.activated = 0;
    this.life = 3;
  }
  oneCardClicked(id:number, type:string){
    if (this.activated == 0){
      this.activated += 1;
      this.activatedCard = {
        id : id,
        type : type
      };
    } else {
      this.activated = 0;
      if (this.activatedCard.type != type && this.activatedCard.id == id){
        alert("WIN")
      } else {
        this.life -= 1;
      }
    }

  }
}
