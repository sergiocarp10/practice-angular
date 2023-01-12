import { Component } from '@angular/core';
import { Auth, createUserWithEmailAndPassword } from 'firebase/auth';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(private userService: UserService){}

  onSubmit(user: HTMLInputElement, password: HTMLInputElement){

    // firebase
    this.userService.register(user.value.trim(), password.value.trim())

    return false;
  }
}
