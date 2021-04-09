import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { AuthService } from 'src/app/service/auth.service';
import { CrudService } from 'src/app/service/crud.service';
import { Post } from 'src/app/shared/post.interface';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.page.html',
  styleUrls: ['./home-page.page.scss'],
})
export class HomePagePage implements OnInit {
  post : Post ={
    id: this.crudSvc.getId(),
    title: '',
    details:''
  };
  posts: Post[] = [];

  private path ='posts/'
  constructor(private authSvc: AuthService,
              private router: Router,
              private toastCtrl: ToastController,
              private crudSvc: CrudService
              ) { }

  ngOnInit() {
    this.getPosts();
  }

  logout(){
    this.authSvc.logout();
    this.router.navigate(['login-page']);
  }

  async getPosts(){
    
    try {
      this.crudSvc.getCollection<Post>(this.path).subscribe( res => {
        this.posts = res;
      })
      
    } catch (error) {
      this.showToast(error);
    }
  }

  async deletePost(post: Post){
    try {
      this.crudSvc.deleteDoc(this.path,post.id);
      this.showToast("deleted");
    } catch (error) {
      this.showToast(error);
    }
  }
  showToast(message: string){
    this.toastCtrl.create({
      message: message,
      duration:3000
    })
    .then(toastData => toastData.present());
  }

}

