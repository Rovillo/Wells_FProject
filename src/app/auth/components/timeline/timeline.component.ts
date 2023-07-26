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
  constructor(
    private toats: ToastrService,
    private router: Router,
    private postsService: PostService
  ) {
  }

  ngOnInit() {
    this.loadPost();
  }

  loadPost()
  {
    this.postsService.getAllPosts().subscribe((value) => {
      this.posts = value;
    });
  }

  }
