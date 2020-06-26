import { Component, OnInit } from '@angular/core';
import { FirebaseService } from "../../services/firebase.service";
import { Geolocation } from "@ionic-native/geolocation/ngx";
import { Router } from "@angular/router";

@Component({
  selector: 'app-paradas',
  templateUrl: './paradas.page.html',
  styleUrls: ['./paradas.page.scss'],
})
export class ParadasPage implements OnInit {

  public parada: string;
  public direccion : string;
  public lng : string;
  public lat: string;
  public rutas : string;


  constructor(private geolacation : Geolocation, public router : Router, private db : FirebaseService) { }

  ngOnInit(){
    this.loadMap();
  }

  
 async loadMap(){
    const rta = await this.geolacation.getCurrentPosition();
    const myLngLat = {
      lng: rta.coords.longitude,
      lat: rta.coords.latitude
    };
    
    console.log(myLngLat)

      
  }

    cancelar(){
      this.router.navigate(['/profile'])
    }

    onSubmitRegisterParada(){
      this.db.nuevaParada(this.parada, this.direccion, this.lng, this.lat, this.rutas).then (db => { console.log(db)
      }).catch(err => console.log(err))
      
      this.router.navigate(['/profile'])
    }
}
