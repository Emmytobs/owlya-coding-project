import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from "@angular/forms"
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from "@ngrx/store"

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostListComponent } from './postList/post-list.component';
import { PostService } from './postList/post-list.service';
import { PostDetailsComponent } from './postDetails/post-details.component';
import { postReducer } from 'src/shared/store/post/post.reducer';
import { CommentFormComponent } from './commentForm/comment-form.component';

@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    PostDetailsComponent,
    CommentFormComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({ posts: postReducer }),
  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
