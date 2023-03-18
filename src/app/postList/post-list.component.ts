import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from "@ngrx/store"
import { AppState } from 'src/shared/store/';
import { PostService } from './post-list.service';
import * as POST_ACTIONS from 'src/shared/store/post/post.actions';
import { IPost } from 'src/shared/store/post/post.model';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css'],
})
export class PostListComponent {

  posts: Observable<IPost[]>;

  constructor(
    private postService: PostService,
    private store: Store<AppState>,
  ) {
    this.posts = this.store.select("posts")
  }

  ngOnInit() {
    this.postService
      .getPosts()
      .subscribe(posts => {
        this.store.dispatch(POST_ACTIONS.setPosts({ posts }))
      })
  }
}

