import {Component, OnInit} from '@angular/core';
import {PostService} from "../../../api/services/post.service";
import {Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit {
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
    this.loadPost();
  }

  loadPost()
  {
    this.postsService.getAllPosts().subscribe((value) => {
      this.posts = value;
    });
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
