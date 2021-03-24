import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginScreenPagePage } from './login-screen-page.page';

const routes: Routes = [
  {
    path: '',
    component: LoginScreenPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginScreenPagePageRoutingModule {}
