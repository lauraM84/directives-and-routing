import { Component, inject } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  authServ = inject(AuthService);
  router = inject(Router);

  fakelogin() {
    this.authServ.isAuth = true;
    this.router.navigate(['/home']);

  }

}
