import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { CrudService } from 'src/app/service/crud.service';
import { Post } from 'src/app/shared/post.interface';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.page.html',
  styleUrls: ['./edit-post.page.scss'],
})
export class EditPostPage implements OnInit {
  post : Post ={
    id: this.actRoute.snapshot.paramMap.get('id'),
    title: this.actRoute.snapshot.paramMap.get('title'),
    details: this.actRoute.snapshot.paramMap.get('details')
  };
  posts: Post[] = [];

  private path ='posts/'
  constructor(private router: Router,
    private toastCtrl: ToastController,
    private crudSvc: CrudService,
    private actRoute: ActivatedRoute,) { }

  ngOnInit() {
    this.getPost();
  }

  getPost(){
    this.crudSvc.getDoc(this.path,this.post.id);
    console.log(this.post);
  }

  updatePost(){
    try {
      this.crudSvc.updateDoc(this.post,this.path,this.post.id);
      this.showToast("Post updated :)");
      this.router.navigate(['home-page']);
    } catch (error) {
      
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
