import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceAllPageService } from 'src/app/service/service-all-page.service';

@Component({
  selector: 'app-acceuil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

  constructor(private service:ServiceAllPageService) { }

  ngOnInit(): void {
    this.service.reloadPage();
  }

}
