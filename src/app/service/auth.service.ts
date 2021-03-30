import { Injectable } from '@angular/core';
import { User } from '../shared/user.interface';
import { AngularFireAuth } from '@angular/fire/auth';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afAuth: AngularFireAuth) { }

  //metodo logout
  async login(email: string, password: string):Promise<User> {
    try {
      const {user} = await this.afAuth.signInWithEmailAndPassword(email, password);
      return user;
    } catch (error) {
      console.log('Error ', error)
    }
  }
  async signin(email: string, password: string):Promise<User> {
    try {
      const {user} = await this.afAuth.createUserWithEmailAndPassword(email, password);
      await this.sendVerificationEmail();
      return user;
    } catch (error) {
      console.log('Error ', error)
    }
  }
  async loginGoogle():Promise<User> {
    try {
      const {user} = await this.afAuth.signInWithPopup(new auth.GoogleAuthProvider())
    } catch (error) {
      console.log('Error ', error)
    }
  }
  async resetPassword():Promise<void> {}
  async sendVerificationEmail():Promise<void> {
    try {
      return (await this.afAuth.currentUser).sendEmailVerification();
    } catch (error) {
      console.log('Error ', error)
      
    }
  }
  async logout():Promise<void> {
    try {
      await this.afAuth.signOut();
    } catch(error) {
      console.log('Error ', error);
    }
  }
  
}

