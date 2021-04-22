import { Component, OnInit } from '@angular/core';
import { ImageContent } from 'src/app/Model.Global/ImageContent';

@Component({
  selector: 'app-differente-hypnose',
  templateUrl: './differente-hypnose.component.html',
  styleUrls: ['./differente-hypnose.component.css']
})
export class DifferenteHypnoseComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public listImageContent: Array<ImageContent> = [
    {
      image:'../../../assets/hypnose1.jpg',
      name:'image hypnose perte de poids',
      content:''
    },
    {
      image:'../../../assets/thinking-5968108_1920.jpg',
      name:'image hypnose confiance en soi',
      content:''
    },
    {
      image:'https://cdn.pixabay.com/photo/2013/01/20/20/20/hypnosis-75615_960_720.jpg',
      name:'auto hypnose',
      content:''
    }
  ]

}
