import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs"
import { IPost } from "src/shared/store/post/post.model";


@Injectable()
export class PostService {
    posts: IPost[] = []
    post: IPost = {} as IPost;

    constructor(
        private http: HttpClient
    ) {}

    getPosts(): Observable<IPost[]> {
        return this.http.get<IPost[]>("../../assets/mock-posts-data.json")
    }
}