import { Component, OnInit } from '@angular/core';
import { AuthService } from "../services/auth.service";
import { Geolocation } from "@ionic-native/geolocation/ngx";
import { FirebaseService } from "../services/firebase.service";

export interface parada {
  id: string;
  parada: string;
  direccion : string;
  lat: string;
  lng: string;
  rutas : string;
}

declare function require(path: string): any;
declare var google;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

   rta = this.geolacation.getCurrentPosition();
  title: string = 'My first AGM project';
  lat: number = 0;
  lng: number = 0;

  private map;
  public paradas : any = [];

  constructor(public authservice : AuthService, private geolacation : Geolocation, private db : FirebaseService) {}

  OnLogout(){
    this.authservice.logout();
  }

  ngOnInit(){
    this.loadMap();

    this.db.leerParada().subscribe( paradas => {
      paradas.map( parada => {

        const data : parada = parada.payload.doc.data() as parada;
          data.id = parada.payload.doc.id;
          
          this.paradas.push(data);
      })
    })

    
  }

 async loadMap(){
    const rta = await this.geolacation.getCurrentPosition();
    this.lat = rta.coords.latitude,
    this.lng = rta.coords.longitude
  }
 
  }