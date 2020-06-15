import { Component, OnInit } from '@angular/core';
import { AuthService } from "../services/auth.service";
import { Geolocation } from "@ionic-native/geolocation/ngx";
import { FirebaseService } from "../services/firebase.service";

export interface parada {
  id: string;
  parada: string;
  direccion : string;
  coords : string;
  rutas : string;

}

declare function require(path: string): any;
var mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');
var MapboxGeocoder = require('@mapbox/mapbox-gl-geocoder');


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

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
      lng: rta.coords.longitude,
      lat: rta.coords.latitude
    };
    console.log(myLngLat)

    var geojson = {
      type: 'FeatureCollection',
      features: [{
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [-89.7213158, 13.728976]
        },
        properties: {
          title: '{{parada.parada}}',
          description: 'Avenida Morazan, frente al Diver'
        }
      },
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [rta.coords.longitude, rta.coords.latitude]
        },
        properties: {
          title: 'Mapbox',
          description: 'Parada de bus'
        }
      }]
    };

    mapboxgl.accessToken = 'pk.eyJ1IjoiaXZubGluYXJlcyIsImEiOiJja2FvaTBqbDIyMmY2MnpzMGRqZzRyb3JkIn0.mTqTcA9M8a30hisxJDtM1A';
      var map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [rta.coords.longitude, rta.coords.latitude],
      zoom: 16,
    });
    map.addControl(
      new MapboxGeocoder({
      accessToken: mapboxgl.accessToken,
      mapboxgl: mapboxgl,
      marker: {
        color: 'orange'
        },
      countries: 'sv',
      })
      );
    
      const geolocate = new mapboxgl.GeolocateControl({
        positionOptions: {
            enableHighAccuracy: true
        },
        trackUserLocation: true
    });
    map.addControl(geolocate)
    geolocate.on('trackuserlocationstart', function() {
      console.log('La ubicacion del usuario se comiuenza a seguir.')
    });

    geojson.features.forEach(function(marker) {

     
      new mapboxgl.Marker({container: 'marker'})
      .setLngLat(marker.geometry.coordinates)
      .setPopup(
        new mapboxgl.Popup({ offset: 25 }) // add popups
          .setHTML(
            '<h3>' +
              marker.properties.title +
              '</h3><p>' +
              marker.properties.description +
              '</p>'
          )
      )
        .addTo(map);
    });
    

    }
    }
 
