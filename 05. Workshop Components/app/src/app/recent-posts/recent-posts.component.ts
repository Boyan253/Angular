import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { IPost } from '../interfaces/post';
@Component({
  selector: 'app-recent-posts',
  templateUrl: './recent-posts.component.html',
  styleUrls: ['./recent-posts.component.scss']
})
export class RecentPostsComponent implements OnInit {
  posts: IPost[] | null = null;

  constructor(private apiService: ApiService) {

  }
  ngOnInit(): void {
    this.apiService.loadPosts().subscribe({
      next: (value) => {
        this.posts = value;
      },
      error: (err) => {
        console.log(err);

      }
    })
  }

}
