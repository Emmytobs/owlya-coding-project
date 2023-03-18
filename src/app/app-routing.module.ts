import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostDetailsComponent } from './postDetails/post-details.component';
import { PostListComponent } from './postList/post-list.component';

const routes: Routes = [
  { path: "posts/:postId", component: PostDetailsComponent },
  { path: "posts", component: PostListComponent },
  { path: "", redirectTo: "/posts", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
