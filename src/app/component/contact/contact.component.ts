import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ServiceAllPageService } from 'src/app/service/service-all-page.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private service:ServiceAllPageService) { }

  ngOnInit(): void {
    this.service.reloadPage();
  }
  contact(f: NgForm) {

    // console.log('formulaire value => ',f.form.value);
    // if(f.form.value.nom === '' && f.form.value.email === '' && f.form.value.objetMessage === '' && f.form.value.message === ''){
    //   alert("Vous n'avez pas remplis tout les champs ");
    // }else{
    //   db.collection("contact").doc(f.value.objetMessage).set({
    //   nom: f.value.nom,
    //   email: f.value.email,
    //   objetMessage: f.value.objetMessage,
    //   message: f.value.message
    // })
    // .then(function () {
    //   alert('Nous vous remercions de votre message');
    //   setTimeout(()=>{
    //     window.location.reload();
    //   },2000)
    // })
    // .catch(function (error) {
    //   console.log("Error writing document: ", error);
    // })
    // }
  }

}
