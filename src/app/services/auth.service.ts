import { Injectable } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";
import { Router } from "@angular/router";
import { AngularFirestore } from "@angular/fire/firestore";
import { auth } from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private AFauth: AngularFireAuth, private router: Router, private db: AngularFirestore) { }

  login(email: string, password: string) {

    return new Promise((resolve, rejected) => {
      this.AFauth.signInWithEmailAndPassword(email, password).then(user => {
        resolve(user);
      }).catch(err => rejected(err));
    });

  }

  logout() {
    this.AFauth.signOut().then(() => {
      this.router.navigate(['/login']);
    })

  }

  singin(email: string, password: string, username: string) {

    return new Promise((resolve, reject) => {
      this.AFauth.createUserWithEmailAndPassword(email, password).then(res => {
        console.log(res.user.uid);

        const uid = res.user.uid;

        this.db.collection('users').doc(uid).set({
          username: username,
          uid: uid
        })

        resolve(res)
      }).catch(err => reject(err))
    })

  }

  GoogleAuth(){
    return this.AuthLogin(new auth.GoogleAuthProvider());
  }

  AuthLogin(provider){
    return this.AFauth.signInWithPopup(provider)
    .then((result) => {
      console.log('Has iniciado sesion correctamente')
    }).catch((error) => {
      console.log('error')
    }
    )
  }

}