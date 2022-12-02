import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-dialogue-game',
  templateUrl: './dialogue-game.component.html',
  styleUrls: ['./dialogue-game.component.css']
})
export class DialogueGameComponent implements OnInit {
  @Output("SetScore") SetScore: EventEmitter<number> = new EventEmitter();
  win = false;
  startScreen = true;
  questions = [
    ["UNE IST C’EST QUOI ?","INFECTION SEXUELLEMENT TRANSMISSIBLE", "INFECTION SOLITAIRE TEMERAIRE", 0],
    ["COMMENT SE PROTÉGER DES IST ?","UTILISER UN PRÉSERVATIF", "PRENDRE LA PILULE", 0],
    ["OÙ EST-CE QUE L’ON PEUT SE FAIRE DÉPISTER DES IST ?","À L’INFIRMERIE", "LABORATOIRE D’ANALYSES", 1],
    ["QUELLE EST L’IST LA PLUS FRÉQUENTE CHEZ LES JEUNES ?","CHLAMYDIAE", "VIH", 0],
    ["LE RISQUE DE TRANSMISSION D'UNE IST EN PRATIQUANT UNE FELLATION EST :","FAIBLE", "TRÈS ÉLEVÉ", 1],
    ["COMMENT ATTRAPE-T-ON UNE IST ?","EN PORTANT UN MÊME VÊTEMENT 2 JOURS DE SUITE", "LORS DE RAPPORTS SEXUELS NON PROTÉGÉS", 1],
    ["LAQUELLE DE CES PROPOSITIONS N’EST PAS UNE IST ?","LA GASTRO-ENTÉRITE", "LA CHLAMYDIAE", 0],
    ["EST-CE QU’UNE IST, C’EST SIGNE DE MAUVAISE HYGIÈNE ?","ÇA DÉPEND DE L’IST", "NON, ÇA N’A RIEN À VOIR", 1],
    ["ON NE PEUT PAS ÊTRE CONTAMINÉ(E) PAR LE VIH SI :","VOTRE PARTENAIRE SE NETTOIE LE SEXE AVANT UN RAPPORT SEXUEL", "VOTRE PARTENAIRE UTILISE UN PRÉSERVATIF LORS D’UN RAPPORT SEXUEL", 1],
    ["SI JE NE VAIS PAS JUSQU’A LA PENETRATION, IL EST IMPOSSIBLE QUE J’ATTRAPE UNE IST.","VRAI", "FAUX", 1],
    ["SI MON TEST VIH EST NEGATIF, JE SUIS AUSSI NEGATIF AUX AUTRES IST.","VRAI", "FAUX", 0],
    ["LE MOYEN LE PLUS EFFICACE POUR SE PROTEGER DES INFECTIONS SEXUELLEMENT TRANSMISSIBLES EST D’UTILISER UN PRESERVATIF PENDANT LES RAPPORTS SEXUELS.","FAUX", "VRAI", 1],
    ["TANT QUE JE N’AI PAS DE SYMPTOME, JE N’AI PAS BESOIN DE ME FAIRE DEPISTER.","FAUX", "VRAI", 0],
    ["LA PLUPART DES IST SE SOIGNENT FACILEMENT.","VRAI", "FAUX", 0],
    ["LES MOUSTIQUES ET LA SALIVE PEUVENT TRANSMETTRE LE VIH","VRAI", "FAUX", 1],
    ["IL N’Y A PAS DE RISQUE DE TRANSMISSION DU VIH LORS D’UNE FELLATION OU D’UN CUNNILINGUS","FAUX", "VRAI", 0],
    ["DANS LES 48 H APRES UNE PRISE DE RISQUE, ON PEUT DETRUIRE LE VIRUS DU SIDA AVANT SON DEVELOPPEMENT DANS L’ORGANISME","FAUX", "VRAI", 1],
    ["ON PEUT GUERIR DU SIDA","VRAI", "FAUX", 1],
    ["EN FRANCE, 50 000 PERSONNES S’IGNORENT SEROPOSITIVES","FAUX", "VRAI", 1],
    ["AVEC LES PRESERVATIFS, JE PEUX UTILISER N’IMPORTE QUEL LUBRIFIANT","FAUX", "VRAI", 0],
    ["QU'EST CE QU'UNE IST","AGENT PATHOGENE", "TOXINE", 0],
    ["QUELLE EST L'IST LA PLUS FREQUENT CHEZ LES JEUNES","CHLAMYDIAE", "HERPES GENITAL", 0],
    ["COMBIEN DE TEMPS DOIS-JE ATTENDRE AVANT DE ME FAIRE DEPISTER EN CAS DE PRISE DE RISQUE ?","1 HEURE", "6 SEMAINES", 1],
    ["IL EXISTE UN VACCIN POUR LE PAPILLOMAVIRUS","OUI", "NON", 0],
    ["IL EXISTE UN VACCIN POUR LA SYPHILIS","NON", "OUI", 0],
    ["SI ON CONSULTE AU CENTRE DE SANTE SEXUELLE (CSS), LES PARENTS SERONT AU COURANT","VRAI", "FAUX", 1],
    ["IL FAUT UNE ORDONNANCE POUR AVOIR LA PILULE DU LENDEMAIN A LA PHARMACIE ?","VRAI", "FAUX", 1],
    ["SI LE PARTENAIRE SE RETIRE AVANT L’EJACULATION, IL N’Y A PAS DE RISQUE DE GROSSESSE","FAUX", "VRAI", 0],
    ["QUEL EST LE MEILLEUR MOYEN DE SAVOIR SI ON A UNE IST ?","ACHETER UN TEST EN PHARMACIE", "SE FAIRE DEPISTER", 1],
    ["QUE SIGNIFIE VIH ?","VIRUS DE L'IMMUNODEFICIENCE HUMAINE", "VIRUS INTEGRALEMENT HAGIOLOGIQUE", 0],
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

  mapScore(){
    this.points = Math.floor(this.points*100/30);
  }

  checkAnswer(i: number){
    if (this.indexAnswer == i){
      this.points++;
    }
    this.indexQuestion++;
    if (this.indexQuestion == 30){
      this.win = true;
      this.mapScore();
      this.SetScore.emit(this.points);
    }
    else {
      this.newQuestion(this.indexQuestion);
    }
  }
}
