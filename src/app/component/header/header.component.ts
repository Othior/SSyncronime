import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  private isClicked: boolean = false;

  constructor() { }

  navbarBtn(){
    this.isClicked = !this.isClicked;
    let check = document.querySelector("#checkList").classList;
    this.isClicked ? check.add("activeNav") : check.remove("activeNav");
    console.log("check",check);
  }

  ngOnInit(): void {
  }

}
