import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Store } from "@ngrx/store"
import { AppState } from 'src/shared/store/';
import { PostService } from '../../services/post.service';
import * as POST_ACTIONS from 'src/shared/store/post/post.actions';
import { IPost } from 'src/shared/store/post/post.model';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css'],
})
export class PostListComponent implements OnInit {

  posts: Observable<IPost[]>;
  filteredPosts: Observable<IPost[]>;
  searchQuery: string = ""

  constructor(
    private postService: PostService,
    private store: Store<AppState>,
  ) {
    this.posts = this.store.select("posts")
    this.filteredPosts = this.store.select("posts")
  }

  filterPosts(searchQuery: string): void {
    this.filteredPosts = this.posts.pipe(map(posts => {
      return posts.filter(post => post.title.toLowerCase().includes(searchQuery.toLowerCase()))
    }))
  }

  ngOnInit() {
    this.postService
      .getPosts()
      .subscribe(posts => {
        this.store.dispatch(POST_ACTIONS.setPosts({ posts }))
      })
  }
}

