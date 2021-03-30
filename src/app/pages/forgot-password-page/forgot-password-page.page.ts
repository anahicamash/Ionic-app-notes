import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-forgot-password-page',
  templateUrl: './forgot-password-page.page.html',
  styleUrls: ['./forgot-password-page.page.scss'],
})
export class ForgotPasswordPagePage implements OnInit {

  constructor(private authSvc: AuthService, private router: Router) { }

  ngOnInit() {
  }

  async onResetPassword(email){
    try {
      await this.authSvc.resetPassword(email.value);
      this.router.navigate(['/login-page']);
    } catch (error) {
      console.log('Error ---', error);
    }
  }

}
