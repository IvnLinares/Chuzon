import { Injectable } from '@angular/core';
import { AngularFirestore } from "@angular/fire/firestore";
import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  collectionName = "paradas, suggested"
 

  constructor( private db: AngularFirestore,  private router: Router) { }

  nuevaParada(parada: string, direccion: string, lng: string, lat: string, rutas : string) {

    return new Promise<any>((resolve, reject) => {
      this.db.collection('suggested').add({
        parada: parada,
        direccion : direccion, 
        lng : lng,
        lat : lat,
        rutas : rutas
      })
      .then(
        res => resolve(res),
        err => reject(err)
      )
    })
    }

    leerParada(){
      return this.db.collection('paradas').snapshotChanges(); 
    }
    
    leerPerfil(){
      return this.db.collection('users').snapshotChanges();
    }
}