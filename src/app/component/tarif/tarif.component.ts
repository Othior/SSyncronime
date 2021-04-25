import { Component, OnInit } from '@angular/core';
import { Tarif } from 'src/app/Model.Global/tarif';
import { ServiceAllPageService } from 'src/app/service/service-all-page.service';

@Component({
  selector: 'app-tarif',
  templateUrl: './tarif.component.html',
  styleUrls: ['./tarif.component.css']
})
export class TarifComponent implements OnInit {

  constructor(private service:ServiceAllPageService) { }

  ngOnInit(): void {
    this.service.reloadPage();
  }

  public list_tarif : Array<Tarif> = [
    {
      titre: 'Hypnose',
      montant: 50,
      contenu: 'séance particulier'
    },
    {
      titre: 'Hypnose en groupe',
      montant: 30,
      contenu: 'minimum 5 personnes '
    },
    {
      titre: 'Relaxation',
      montant: 40,
      contenu: 'minimum 5 personnes'
    }
  ]

}
