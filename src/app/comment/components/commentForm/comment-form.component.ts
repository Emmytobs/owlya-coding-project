import { Component, Input } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { Store } from "@ngrx/store";
import { AppState } from "src/shared/store";
import { IComment } from "src/shared/store/post/post.model";
import * as POST_ACTIONS from "../../../../shared/store/post/post.actions"

@Component({
    selector: 'app-comment-form',
    templateUrl: './comment-form.component.html',
    styleUrls: ['./comment-form.component.css']
})
export class CommentFormComponent {
    @Input() postId = ""

    addCommentForm = this.formBuilder.group({
        comment: ""
    });

    constructor(
        private formBuilder: FormBuilder,
        private store: Store<AppState>
    ) {}

    addComment(): void {
        const formValues = this.addCommentForm.value;
        if (!formValues.comment) return
        
        const comment: IComment = {
            body: formValues.comment as string
        }
        this.store.dispatch(POST_ACTIONS.addComment({ comment, postId: this.postId }))
        this.addCommentForm.reset()
    }

}