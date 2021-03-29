import { Component, OnInit } from '@angular/core';

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
      image:'../../../assets/hypnose1.jpg',
      name:'image hypnose perte de poids',
      content:''
    },
    {
      image:'../../../assets/thinking-5968108_1920.jpg',
      name:'image hypnose confiance en soi',
      content:''
    }
  ]

}
export interface ImageContent{
  image:string,
  name:string,
  content:string
}
