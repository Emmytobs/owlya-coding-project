import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/shared/store';
import { setPosts } from 'src/shared/store/post/post.actions';
import { PostService } from './post/services/post.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(
    private postService: PostService,
    private store: Store<AppState>
  ) {}
  ngOnInit() {
    this.postService
      .getPosts()
      .subscribe(posts => {
        this.store.dispatch(setPosts({ posts }))
      })
  }
}
