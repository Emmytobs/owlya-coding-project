import { createReducer, on } from "@ngrx/store";
import { AppState } from "..";
import { AddCommentArgs } from "./post.actions"
import * as POST_ACTIONS from "./post.actions"
import { IComment, IPost } from "./post.model";


const defaultState: IPost[] = []

const addCommentHandler = (state: IPost[], args: AddCommentArgs) => {
    const stateCopy = [ ...state ];
    // const postToUpdateWithComment = stateCopy.find(post => post.id === args.postId) as IPost;
    // postToUpdateWithComment.comments.push(args.comment);
    // console.log(postToUpdateWithComment, args)
    // return stateCopy;

    const updatedState = stateCopy.map(post => {
        if (post.id === args.postId) {
            return {
                ...post,
                comments: [
                    ...post.comments,
                    args.comment
                ]
            }
        }
        return post
    })
    return updatedState;
}

export const postReducer = createReducer(
    // defaultState,
    // // on(POST_ACTIONS.switchTranslation, (state) => ({text: "Hey!"}) )

    defaultState,
    on(POST_ACTIONS.addComment, addCommentHandler),
    on(POST_ACTIONS.setPosts, (state, { posts }) =>  {
        console.log("posts from reducer", posts)
        return [ ...state, ...posts ]
    })
);