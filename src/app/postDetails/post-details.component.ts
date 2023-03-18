import { Component } from "@angular/core"
import { FormBuilder } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { Store } from "@ngrx/store"
import { AppState } from "src/shared/store";
import { IPost } from "src/shared/store/post/post.model";
import { map, Observable } from "rxjs";

@Component({
    selector: 'app-post-details',
    templateUrl: './post-details.component.html',
    styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent {
    post: Observable<IPost>;
    
    addCommentForm = this.formBuilder.group({
        comment: ""
    });

    constructor(
        private route: ActivatedRoute,
        private formBuilder: FormBuilder,
        private store: Store<AppState>
    ) {
        const postIdFromRoute = this.getPostIdFromRoute()
        this.post = this.store.select("posts")
            .pipe(
                map(posts => {
                    const filteredPost = posts.find(post => post.id === postIdFromRoute )
                    return filteredPost as IPost
                })
            )
    }

    getPostIdFromRoute(): string {
        const routeParam = this.route.snapshot.paramMap;
        const postIdFromRoute = routeParam.get('postId') as string;
        return postIdFromRoute
    }
}