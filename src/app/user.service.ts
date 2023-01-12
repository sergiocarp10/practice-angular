import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { FirebaseError } from 'firebase/app';
import { onAuthStateChanged, signOut, User } from 'firebase/auth';

@Injectable({
  providedIn: 'root'
})
export class UserService {
 
  constructor(private auth: Auth, private router: Router) { }

  register(user: string, password: string){
    if (!user || !password) return

    createUserWithEmailAndPassword(this.auth, user, password)
      .then((userCredential) => {
        const user: User = userCredential.user
        this.router.navigateByUrl('/')
      })
      .catch((error: FirebaseError) => {
        alert(error.message)
      })
  }

  login(email: string, password: string){
    if (!email || !password) return

    signInWithEmailAndPassword(this.auth, email, password)
      .then((userCredential) => {
        const user: User = userCredential.user
        this.router.navigateByUrl('/')
      }).catch((e: FirebaseError) => {
        alert(e.message)
      })
  }

  logout(){
    signOut(this.auth)
  }

  getCurrentUser() {
    

    return this.auth.currentUser
  }

  getAuth(){
    return this.auth
  }
}
