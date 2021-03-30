import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-sign-up-page',
  templateUrl: './sign-up-page.page.html',
  styleUrls: ['./sign-up-page.page.scss'],
})
export class SignUpPagePage implements OnInit {

  constructor(private authSvc: AuthService, private router:Router) { }

  ngOnInit() {
  }

  async onRegister(email, password){
    try {
      const user = await this.authSvc.signin(email.value, password.value);
      if (user) {
        const isVerified = this.authSvc.isEmailVerified(user);
        this.redirectUser(isVerified)
      }
    } catch (error) {
      console.log('error ----', error);
    }
  }

  private redirectUser(isVerified:boolean){
    if (isVerified){
      this.router.navigate(['home-page']);
    }else {
      this.router.navigate(['verify-email']);
    }
  }

}
