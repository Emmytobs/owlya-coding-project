import { createReducer, on } from "@ngrx/store";
import { AddCommentArgs } from "./post.actions"
import * as POST_ACTIONS from "./post.actions"
import { IPost } from "./post.model";


const defaultState: IPost[] = []

const addCommentHandler = (state: IPost[], args: AddCommentArgs) => {
    const stateCopy = [ ...state ];

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
    defaultState,
    on(POST_ACTIONS.addComment, addCommentHandler),
    on(POST_ACTIONS.setPosts, (state, { posts }) =>  {
        return [ ...posts ]
    }),
    on(POST_ACTIONS.filterPosts, (state, { filter }) => {
        const stateCopy = [...state];
        if (!filter) {
            return defaultState;
        }
        return stateCopy.filter(post => {
            return post.title.toLowerCase().includes(filter.toLowerCase())
        })
    })
);