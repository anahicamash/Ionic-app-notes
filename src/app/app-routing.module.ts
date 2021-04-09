import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthService } from './service/auth.service';
import { AuthGuard } from './shared/auth.guard';

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
    loadChildren: () => import('./pages/home-page/home-page.module').then( m => m.HomePagePageModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'login-screen-page',
    loadChildren: () => import('./pages/login-screen-page/login-screen-page.module').then( m => m.LoginScreenPagePageModule)
  },
  {
    path: 'verify-email',
    loadChildren: () => import('./pages/verify-email/verify-email.module').then( m => m.VerifyEmailPageModule)
  },
  {
    path: 'add-post',
    loadChildren: () => import('./pages/add-post/add-post.module').then( m => m.AddPostPageModule)
  },
  {
    path: 'edit-post',
    loadChildren: () => import('./pages/edit-post/edit-post.module').then( m => m.EditPostPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
