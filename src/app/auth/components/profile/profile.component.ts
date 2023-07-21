import {Component, OnInit} from '@angular/core';
import {PostService} from "../../../api/services/post.service";
import {Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  posts: [] =[];
  userId : string;
  constructor(
    private toats: ToastrService,
    private router: Router,
    private postsService: PostService
  ) {
  }

  ngOnInit() {
    this.userId = localStorage.getItem('user_id');
    if (!this.userId) {
      this.router.navigateByUrl('/auth/login')
    }

    this.updatePosts();
  }

  deletePost(id: string) {
    this.postsService.delete(this.userId, id).subscribe((value) => {
        this.updatePosts();
    }, (err) => {
      this.toats.error(err.error);
    })
  }
  createPost(description: string | ArrayBufferView | ArrayBuffer) {
      const userId = localStorage.getItem('user_id');
      if (userId) {
        console.log(description);
        const data = {
          userId: userId,
          desc: description
        }

        this.postsService.create(data).subscribe((value) => {
          debugger;
          console.log(value);
          this.updatePosts();
        }, (err) => {
          debugger;
          console.log(err);
        })
      }
  }

  private updatePosts() {
    const userId = localStorage.getItem('user_id');
     if (userId) {
       this.postsService.getPostsByUserId(userId).subscribe((value) => {
         this.posts = value;
       })
     }

  }
}
