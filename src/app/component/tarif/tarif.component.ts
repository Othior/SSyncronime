import { Component, OnInit } from '@angular/core';
import { Tarif } from 'src/app/Model.Global/tarif';

@Component({
  selector: 'app-tarif',
  templateUrl: './tarif.component.html',
  styleUrls: ['./tarif.component.css']
})
export class TarifComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public list_tarif : Array<Tarif> = [
    {
      titre: 'Hypnose',
      montant: 40,
      duree: ' * minimum 4 séances',
      contenu: ''
    },
    {
      titre: 'Auto Hypnose',
      montant: 60,
      duree: '* minimum 4 séances',
      contenu: ''
    },
    {
      titre: 'Relaxation',
      montant: 50,
      duree: '* minimum 2 séances',
      contenu: ''
    }
  ]

}
