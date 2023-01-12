import { Component } from '@angular/core';
import { User } from 'firebase/auth';
import { UserService } from '../user.service';

@Component({
  selector: 'app-nav-header',
  templateUrl: './nav-header.component.html',
  styleUrls: ['./nav-header.component.css']
})
export class NavHeaderComponent {
  tabs: {displayName: string; url: string}[]
  user: User | null = null
  ready: boolean = false
  
  constructor(private userService: UserService){
    this.tabs = [
      {displayName: 'Historial', url: '/history'},
      {displayName: 'Resumen', url: '/month_summary'},
      {displayName: 'Líneas', url: "/lines"}
    ]

    userService.getAuth().onAuthStateChanged((user) => {
      this.user = user
      this.ready = true
    })
  }

  logout(){
    this.userService.logout()
  }
}
