import { Component, OnInit } from '@angular/core';
import { FirebaseService } from "../../services/firebase.service";
import { Router } from "@angular/router";
interface parada {
  id: string;
  parada: string;
  direccion : string;
  lat : string;
  lng : string;
  rutas : string;

}

@Component({
  selector: 'app-rutas',
  templateUrl: './rutas.page.html',
  styleUrls: ['./rutas.page.scss'],
})
export class RutasPage implements OnInit {

  public paradas : any = [];

  constructor(private db : FirebaseService, public router : Router) {}

  ngOnInit() {

    this.db.leerParada().subscribe( paradas => {
      paradas.map( parada => {

        const data : parada = parada.payload.doc.data() as parada;
          data.id = parada.payload.doc.id;
          
          this.paradas.push(data);
      })
    })
  }

   goToMap(){
     this.router.navigate(['/home'])
   }
}
