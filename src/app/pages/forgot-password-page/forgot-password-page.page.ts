import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-forgot-password-page',
  templateUrl: './forgot-password-page.page.html',
  styleUrls: ['./forgot-password-page.page.scss'],
})
export class ForgotPasswordPagePage implements OnInit {

  constructor(private authSvc: AuthService, private router: Router, private toastCtrl: ToastController) { }

  ngOnInit() {
  }

  async onResetPassword(email){

    if (email !=null){

      try {
        await this.authSvc.resetPassword(email.value);
        this.router.navigate(['/login-page']);
      } catch (error) {
        console.log('Error ---', error);
      }

    }else{
      this.showToast("Complete the fields");
    }
    

    
  }

  showToast(message: string){
    this.toastCtrl.create({
      message: message,
      duration:3000
    }).then(toastData => toastData.present());
  }


}
