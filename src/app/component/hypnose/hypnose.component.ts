import { Component, OnInit } from '@angular/core';
import { ServiceAllPageService } from 'src/app/service/service-all-page.service';

@Component({
  selector: 'app-hypnose',
  templateUrl: './hypnose.component.html',
  styleUrls: ['./hypnose.component.css']
})
export class HypnoseComponent implements OnInit {

  constructor(private service:ServiceAllPageService) { }

  ngOnInit(): void {
    this.service.reloadPage();
  }

}
