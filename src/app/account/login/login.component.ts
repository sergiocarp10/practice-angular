import { Component } from '@angular/core';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private userService: UserService){ }

  onSubmit(email: HTMLInputElement, password: HTMLInputElement){
    this.userService.login(email.value.trim(), password.value.trim())
    return false
  }
}
