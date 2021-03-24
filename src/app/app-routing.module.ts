import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  
  {
    path: 'login-page',
    loadChildren: () => import('./pages/login-page/login-page.module').then( m => m.LoginPagePageModule)
  },
  {
    path: '',
    redirectTo: 'login-page',
    pathMatch: 'full'
  },
  {
    path: 'sign-up-page',
    loadChildren: () => import('./pages/sign-up-page/sign-up-page.module').then( m => m.SignUpPagePageModule)
  },
  {
    path: 'forgot-password-page',
    loadChildren: () => import('./pages/forgot-password-page/forgot-password-page.module').then( m => m.ForgotPasswordPagePageModule)
  },
  {
    path: 'home-page',
    loadChildren: () => import('./pages/home-page/home-page.module').then( m => m.HomePagePageModule)
  },
  {
    path: 'login-screen-page',
    loadChildren: () => import('./pages/login-screen-page/login-screen-page.module').then( m => m.LoginScreenPagePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
