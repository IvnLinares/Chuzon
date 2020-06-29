import { Component, OnInit } from '@angular/core';
import { AuthService } from "../services/auth.service";
import { Geolocation } from "@ionic-native/geolocation/ngx";
import { FirebaseService } from "../services/firebase.service";
import * as L from 'leaflet';
import { title } from 'process';

export interface parada {
  id: string;
  parada: string;
  direccion : string;
  lat: string;
  lng: string;
  rutas : string;
}

declare function require(path: string): any;


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

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
    const myLngLat = {
      lat : rta.coords.latitude,
      lng : rta.coords.longitude
     
    };
    console.log(myLngLat)

    this.map = L.map('map', {
      center: myLngLat,
      zoom: 16
    }     
    );
         
    const markers = L.marker(myLngLat).addTo(this.map)
    markers.bindPopup('prueba').openPopup();
    
    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });
    
    tiles.addTo(this.map);
    }
   
   
    }
 
