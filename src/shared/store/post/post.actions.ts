import { createAction, props } from "@ngrx/store";
import { IComment, IPost } from "./post.model";

export interface AddCommentArgs {
    comment: IComment,
    postId: string
}
export interface SetPostsArgs {
    posts: IPost[]
}

export const addComment = createAction("[Post] Add Comment", props<AddCommentArgs>())
export const setPosts = createAction("[Post] Set posts", props<SetPostsArgs>())
export const filterPosts = createAction("[Post] Filter posts", props<{ filter: string }>())