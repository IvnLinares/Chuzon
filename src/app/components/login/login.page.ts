import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../services/auth.service";
import { Router } from "@angular/router";
import { auth } from 'firebase';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email: string;
  password: string;

  constructor(private authService: AuthService, public router: Router) { }

  ngOnInit() {
  }

  onSubmitLogin(){
    this.authService.login(this.email, this.password).then( res =>{
      console.log(auth)
      this.router.navigate(['/home'])
    }).catch(err => alert('Los datos son incorrectos o no estas registrado'))
  }

  goToSingin(){
    this.router.navigate(['/singin'])
  }

  onSubmitInvitado(){
    this.router.navigate(['/home'])
  }

 /*  onSubmitGoogle(){
    this.authService.GoogleAuth().then( res => {
      console.log(auth)
      this.router.navigate(['/home'])
    }).catch( err => alert ('No se pudo registrar'))
  } */
}
