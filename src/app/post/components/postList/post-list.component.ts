import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Store } from "@ngrx/store"
import { AppState } from 'src/shared/store/';
import { IPost } from 'src/shared/store/post/post.model';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css'],
})
export class PostListComponent {

  posts: Observable<IPost[]>;
  filteredPosts: Observable<IPost[]>;
  searchQuery: string = ""

  constructor(
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
}

