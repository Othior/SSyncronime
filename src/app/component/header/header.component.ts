import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  private isClicked: boolean = false;
  public list_link: Array<Link> = [
    {
      title:"Accueil",
      link:"/accueil"
    },
    {
      title:"Hypnose",
      link:"/hypnose"
    },
    {
      title:"Ateliers",
      link:"/ateliers"
    },
    {
      title:"Contact",
      link:"/contact"
    },
    {
      title:"Tarifs",
      link:"/tarifs"
    },
  ]
  constructor() { }

  
  

  ngOnInit(): void {
  }
  navbarBtn(){
    this.isClicked = !this.isClicked;
    let check = document.querySelector("#checkList").classList;
    this.isClicked ? check.add("activeNav") : check.remove("activeNav");
    console.log("check",check);
  }

  

}
export interface Link{
  title:string,
  link:string
}
