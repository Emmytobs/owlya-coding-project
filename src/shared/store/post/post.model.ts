
export interface IPost {
    userId: string,
    id: string,
    title: string,
    body: string,
    comments: IComment[]
}

export interface IComment {
    body: string
}