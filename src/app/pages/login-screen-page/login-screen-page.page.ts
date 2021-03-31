import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-login-screen-page',
  templateUrl: './login-screen-page.page.html',
  styleUrls: ['./login-screen-page.page.scss'],
})
export class LoginScreenPagePage implements OnInit {
  

  constructor(private authSvc: AuthService, private router: Router,private toastCtrl: ToastController) { }

  ngOnInit() {
  }

  async onLogin(email, password){
    if (email && password !=null){
      try {
        const user= await this.authSvc.login(email.value, password.value);
        if (user){
          const isVerified = this.authSvc.isEmailVerified(user);
          console.log("verified", isVerified);
          this.redirectUser(isVerified)
        }
      } catch (error) {
        
        console.log('error ----', error);
        
      }
    }else{
      this.showToast("Complete the fields");
    }
    
    
  }

  async onLoginGoogle(email){
    try {
      const user= await this.authSvc.loginGoogle();
      if (user){
        const isVerified = this.authSvc.isEmailVerified(user);
        console.log("verified", isVerified);
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

  showToast(message: string){
    this.toastCtrl.create({
      message: message,
      duration:3000
    }).then(toastData => toastData.present());
  }

}
