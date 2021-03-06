import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ServiceAllPageService {

  constructor(private router:Router) { }

  reloadPage(){
    if(this.router.url !== JSON.parse(localStorage.getItem('routeOld'))){
      localStorage.setItem('routeOld',JSON.stringify(this.router.url));
      window.scrollTo(0,0);
      location.reload();
    }else if(this.router.url === JSON.parse(localStorage.getItem('routeOld')) ){
      let check = document.querySelector("#checkList").classList;
      check.remove('active');
    }
  }
}
