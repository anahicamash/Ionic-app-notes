import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-sign-up-page',
  templateUrl: './sign-up-page.page.html',
  styleUrls: ['./sign-up-page.page.scss'],
})
export class SignUpPagePage implements OnInit {

  constructor(private authSvc: AuthService, private router:Router,private toastCtrl: ToastController) { }

  ngOnInit() {
  }

  async onRegister(email, password){

    if (email && password !=null){
      try {
        const user = await this.authSvc.signup(email.value, password.value);
        if (user) {
          const isVerified = this.authSvc.isEmailVerified(user);
          this.redirectUser(isVerified)
        }
      } catch (error) {
        this.showToast(error);
        console.log('error ----', error);
      }

    }else{
      
      this.showToast("Complete the fields");
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





