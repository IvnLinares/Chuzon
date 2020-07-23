import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../services/auth.service";
import { Router } from "@angular/router";

import { FirebaseService } from "../../services/firebase.service";

import { AlertController } from '@ionic/angular';
interface user {
  id: string;
  username : string;
  email : string;
  
}

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  name: string;
  photo: string;
  email: string;

  public usuario : any = [];

  constructor(public authservice : AuthService, public router : Router, public alertController : AlertController,private db : FirebaseService) { }

  OnLogout(){
    this.authservice.logout();
  }
  
  ngOnInit() {

    

    this.authservice.getUserAuth().subscribe( user => {
      this.name = user.displayName;
      this.photo = '../../../assets/unnamed.png';
      this.email = user.email;
    })
  }

  async addParada(){
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: '¿Deseas agregar una parada?',
      message: 'Tu peticion de nueva parada esperará ser confirmada',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Agregar parada',
          handler: () => {
            this.router.navigate(['/paradas'])
            console.log('Confirm Okay');
          }
        }
      ]
    });

    await alert.present();
  }



}
