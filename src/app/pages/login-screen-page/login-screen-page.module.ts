import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginScreenPagePageRoutingModule } from './login-screen-page-routing.module';

import { LoginScreenPagePage } from './login-screen-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginScreenPagePageRoutingModule
  ],
  declarations: [LoginScreenPagePage]
})
export class LoginScreenPagePageModule {}
