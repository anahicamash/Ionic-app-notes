import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { CrudService } from 'src/app/service/crud.service';
import { Post } from 'src/app/shared/post.interface';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.page.html',
  styleUrls: ['./add-post.page.scss'],
})
export class AddPostPage implements OnInit {
  
  post : Post ={
    id: this.crudSvc.getId(),
    title: '',
    details:''
  };

  private path ='posts/'

  constructor(private toastCtrl: ToastController,
              private router: Router,
              private crudSvc: CrudService) { }

  ngOnInit() {
  }

  async createPost(){

        try {
          if(this.post.details && this.post.title !== ""){
            
            this.crudSvc.createDoc(this.post, this.path,this.post.id);
            this.showToast("Post added :)");
            this.router.navigate(['home-page']);
          }else{
            this.showToast("Complete the fields");
          }
          
        } catch (error) {
          this.showToast(error);
         
        }
  
  }


  showToast(message: string){
    this.toastCtrl
    .create({
      message: message,
      duration: 3000
    })
    .then(toastData => toastData.present());
  }

}
