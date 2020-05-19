import { Component, OnInit } from '@angular/core';

import { AuthService } from "../../services/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-singin',
  templateUrl: './singin.page.html',
  styleUrls: ['./singin.page.scss'],
})
export class SinginPage implements OnInit {

  public username: string;
  public email : string;
  public password : string;

  constructor(public router : Router , private auth : AuthService) { }

  ngOnInit() {
  }

  goToLogin() {
    this.router.navigate(['/login'])
  }

  onSubmitSingin(){
    this.auth.singin(this.email, this.password, this.username).then( auth => {
      console.log(auth),
      this.router.navigate(['/home'])
    }).catch(err => console.log(err))

  }
}
